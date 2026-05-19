"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, Check, Copy, Languages, Minus, Plus, Share2 } from "lucide-react";
import type { AyahData, TranslationAyah } from "@/lib/quran-api";

export function QuranReader({
  ayahs,
  translations,
  surahName,
}: {
  ayahs: AyahData[];
  translations: TranslationAyah[];
  surahName: string;
}) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [fontSize, setFontSize] = useState(30);
  const [copied, setCopied] = useState<number | null>(null);
  const [shareState, setShareState] = useState<number | null>(null);
  const [copyError, setCopyError] = useState<number | null>(null);

  const translationMap = useMemo(() => new Map(translations.map((item) => [item.number, item.text])), [translations]);

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

  return (
    <div>
      <div className="sticky top-20 z-20 mb-6 rounded-[1.5rem] border border-slate-200 bg-white/94 p-3 shadow-soft backdrop-blur-xl sm:top-24 sm:rounded-[2rem]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black text-slate-500">أدوات القراءة</p>
            <p className="mt-1 text-sm font-bold text-slate-800">{ayahs.length} آية في هذه السورة</p>
          </div>
          <div className="flex items-center justify-between gap-2 sm:justify-start" aria-label="التحكم بحجم خط القرآن">
            <button onClick={() => setFontSize((value) => Math.max(24, value - 2))} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 disabled:opacity-40" aria-label="تصغير الخط" disabled={fontSize <= 24}>
              <Minus className="h-4 w-4" />
            </button>
            <span className="rounded-full bg-slate-50 px-4 py-2 text-sm font-black text-slate-600">{fontSize}px</span>
            <button onClick={() => setFontSize((value) => Math.min(44, value + 2))} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 disabled:opacity-40" aria-label="تكبير الخط" disabled={fontSize >= 44}>
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={() => setShowTranslation((value) => !value)}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
            disabled={translations.length === 0}
            aria-pressed={showTranslation}
          >
            <Languages className="h-4 w-4" />
            {translations.length === 0 ? "الترجمة غير متاحة" : showTranslation ? "إخفاء الترجمة" : "إظهار الترجمة"}
          </button>
        </div>
      </div>

      {ayahs.length === 0 ? (
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 text-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 shrink-0" />
            <div>
              <h2 className="text-xl font-black">تعذر عرض الآيات الآن</h2>
              <p className="mt-2 leading-8">حاول تحديث الصفحة لاحقاً. تم تصميم القارئ ليعرض حالة واضحة بدل صفحة فارغة عند فشل مصدر البيانات.</p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="space-y-4">
        {ayahs.map((ayah) => (
          <article id={`ayah-${ayah.numberInSurah}`} key={ayah.numberInSurah} className="scroll-mt-36 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-soft sm:rounded-[2rem] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <a href={`#ayah-${ayah.numberInSurah}`} className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-sm font-black text-blue-700 transition hover:bg-blue-100 sm:h-11 sm:w-11" aria-label={`رابط الآية ${ayah.numberInSurah}`}>
                {ayah.numberInSurah}
              </a>
              <div className="flex items-center gap-2">
                <button onClick={() => copyAyah(ayah)} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700" aria-label="نسخ الآية">
                  {copied === ayah.numberInSurah ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
                <button onClick={() => shareAyah(ayah)} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-600 transition hover:bg-teal-50 hover:text-teal-700" aria-label="مشاركة الآية">
                  {shareState === ayah.numberInSurah ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <p className="quran-text mt-5 rounded-[1.5rem] bg-gradient-to-l from-slate-50 to-white p-4 leading-[2.35]" style={{ fontSize }}>{ayah.text}</p>
            {copied === ayah.numberInSurah && <p className="mt-3 text-sm font-black text-teal-700">تم نسخ الآية.</p>}
            {copyError === ayah.numberInSurah && <p className="mt-3 text-sm font-black text-rose-700">تعذر النسخ من المتصفح الحالي.</p>}
            {showTranslation ? (
              <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-left text-sm leading-7 text-slate-600" dir="ltr">
                {translationMap.get(ayah.numberInSurah) ?? "Translation unavailable for this ayah."}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
