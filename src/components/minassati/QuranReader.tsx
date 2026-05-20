"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, Check, Copy, Headphones, Languages, Minus, Plus, Share2 } from "lucide-react";
import type { AyahData, TranslationAyah } from "@/lib/quran-api";
import { quranTranslationOptions, type QuranTranslationKey } from "@/lib/quran-translations";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getAudioUrl, getAvailableSurahs, type Reciter } from "@/lib/mp3quran-api";

export function QuranReader({
  ayahs,
  translations,
  surahName,
  locale = "ar",
  reciters = [],
  surahNumber,
}: {
  ayahs: AyahData[];
  translations: Partial<Record<Exclude<QuranTranslationKey, "none">, TranslationAyah[]>> | TranslationAyah[];
  surahName: string;
  locale?: Locale;
  reciters?: Reciter[];
  surahNumber?: number;
}) {
  const t = getDictionary(locale);
  const [translationLanguage, setTranslationLanguage] = useState<QuranTranslationKey>("none");
  const [fontSize, setFontSize] = useState(30);
  const [copied, setCopied] = useState<number | null>(null);
  const [shareState, setShareState] = useState<number | null>(null);
  const [copyError, setCopyError] = useState<number | null>(null);

  const translationCollections = useMemo(() => Array.isArray(translations) ? { en: translations } : translations, [translations]);
  const translationMap = useMemo(() => {
    const activeTranslations = translationLanguage === "none" ? [] : translationCollections[translationLanguage] ?? [];
    return new Map(activeTranslations.map((item) => [item.number, item.text]));
  }, [translationCollections, translationLanguage]);
  const activeOption = quranTranslationOptions.find((option) => option.key === translationLanguage) ?? quranTranslationOptions[0];

  async function copyAyah(ayah: AyahData) {
    const text = `${ayah.text} (${surahName}: ${ayah.numberInSurah})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(ayah.numberInSurah);
      setCopyError(null);
      window.setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopyError(ayah.numberInSurah);
      window.setTimeout(() => setCopyError(null), 1800);
    }
  }

  async function shareAyah(ayah: AyahData) {
    const text = `${ayah.text} (${surahName}: ${ayah.numberInSurah})`;
    if (navigator.share) {
      await navigator.share({ title: surahName, text }).catch(() => undefined);
      setShareState(ayah.numberInSurah);
      window.setTimeout(() => setShareState(null), 1400);
      return;
    }
    await copyAyah(ayah);
  }

  // Filter reciters that contain this surah in their available surahs list
  const playableReciters = useMemo(() => {
    if (!surahNumber) return [];
    return reciters.filter((reciter) => {
      return reciter.moshaf?.some((m) => {
        const list = getAvailableSurahs(m);
        return list.includes(surahNumber);
      });
    });
  }, [reciters, surahNumber]);

  const [selectedReciterId, setSelectedReciterId] = useState<number | null>(null);
  const activeReciter = useMemo(() => {
    if (selectedReciterId !== null) {
      return playableReciters.find((r) => r.id === selectedReciterId) ?? playableReciters[0];
    }
    return playableReciters[0];
  }, [playableReciters, selectedReciterId]);

  const activeMoshaf = useMemo(() => {
    if (!activeReciter) return null;
    return activeReciter.moshaf.find((m) => {
      const list = getAvailableSurahs(m);
      return list.includes(Number(surahNumber));
    }) ?? activeReciter.moshaf[0];
  }, [activeReciter, surahNumber]);

  const audioUrl = useMemo(() => {
    if (!activeMoshaf || !surahNumber) return "";
    return getAudioUrl(activeMoshaf, surahNumber);
  }, [activeMoshaf, surahNumber]);

  return (
    <div>
      {/* Dynamic Integrated Reciter Player */}
      {surahNumber && playableReciters.length > 0 && activeReciter && (
        <div className="mb-6 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-50 text-amber-600 animate-float shrink-0">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-950">
                  {t.quran.playAudio ?? "تشغيل التلاوة"}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600 max-w-2xl">
                  {t.quran.listenInstruction ?? "روتين الأسرة: أنصتوا للتلاوة معاً، ثم شجعوا الطفل على تكرار آية قصيرة أو الحديث عن كلمة جميلة سمعها."}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1 shrink-0">
              <span className="text-xs font-black text-slate-500">{t.quran.selectReciter ?? "اختر القارئ المفضل"}</span>
              <select
                value={activeReciter.id}
                onChange={(e) => setSelectedReciterId(Number(e.target.value))}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-800 outline-none hover:border-blue-300 transition-all"
              >
                {playableReciters.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-6">
            <audio
              key={audioUrl}
              src={audioUrl}
              controls
              className="w-full"
              preload="none"
              onError={() => alert(t.quran.audioError ?? "تعذر تشغيل الصوت. تحقق من اتصالك بالإنترنت.")}
            />
          </div>
        </div>
      )}

      <div className="sticky top-20 z-20 mb-6 rounded-[1.5rem] border border-slate-200 bg-white/94 p-3 shadow-soft backdrop-blur-xl sm:top-24 sm:rounded-[2rem]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black text-slate-500">{t.quran.tools}</p>
            <p className="mt-1 text-sm font-bold text-slate-800">{ayahs.length} {t.quran.ayahCount}</p>
          </div>
          <div className="flex items-center justify-between gap-2 sm:justify-start" aria-label={t.quran.fontControls}>
            <button onClick={() => setFontSize((value) => Math.max(24, value - 2))} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 disabled:opacity-40" aria-label={t.quran.decreaseFont} disabled={fontSize <= 24}>
              <Minus className="h-4 w-4" />
            </button>
            <span className="rounded-full bg-slate-50 px-4 py-2 text-sm font-black text-slate-600">{fontSize}px</span>
            <button onClick={() => setFontSize((value) => Math.min(44, value + 2))} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 disabled:opacity-40" aria-label={t.quran.increaseFont} disabled={fontSize >= 44}>
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <label className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-black text-white transition hover:bg-slate-800 sm:w-auto">
            <Languages className="h-4 w-4" />
            <span className="sr-only">{t.quran.translationLanguage}</span>
            <select
              value={translationLanguage}
              onChange={(event) => setTranslationLanguage(event.target.value as QuranTranslationKey)}
              className="bg-transparent text-sm font-black outline-none"
            >
              {quranTranslationOptions.map((option) => (
                <option key={option.key} value={option.key} className="text-slate-950">
                  {option.key === "none" ? t.quran.arabicOnly : option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {ayahs.length === 0 ? (
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 text-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 shrink-0" />
            <div>
              <h2 className="text-xl font-black">{t.quran.ayahsUnavailable}</h2>
              <p className="mt-2 leading-8">{t.quran.ayahsUnavailableText}</p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="space-y-4">
        {ayahs.map((ayah) => (
          <article id={`ayah-${ayah.numberInSurah}`} key={ayah.numberInSurah} className="scroll-mt-36 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-soft sm:rounded-[2rem] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <a href={`#ayah-${ayah.numberInSurah}`} className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-sm font-black text-blue-700 transition hover:bg-blue-100 sm:h-11 sm:w-11" aria-label={`${t.quran.ayahLink} ${ayah.numberInSurah}`}>
                {ayah.numberInSurah}
              </a>
              <div className="flex items-center gap-2">
                <button onClick={() => copyAyah(ayah)} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700" aria-label={t.quran.copyAyah}>
                  {copied === ayah.numberInSurah ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
                <button onClick={() => shareAyah(ayah)} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-600 transition hover:bg-teal-50 hover:text-teal-700" aria-label={t.quran.shareAyah}>
                  {shareState === ayah.numberInSurah ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <p className="quran-text mt-5 rounded-[1.5rem] bg-gradient-to-l from-slate-50 to-white p-4 leading-[2.35]" style={{ fontSize }}>{ayah.text}</p>
            {copied === ayah.numberInSurah && <p className="mt-3 text-sm font-black text-teal-700">{t.quran.copied}</p>}
            {copyError === ayah.numberInSurah && <p className="mt-3 text-sm font-black text-rose-700">{t.quran.copyFailed}</p>}
            {translationLanguage !== "none" ? (
              <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600" dir={activeOption.dir}>
                {translationMap.get(ayah.numberInSurah) ?? t.quran.translationUnavailable}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
