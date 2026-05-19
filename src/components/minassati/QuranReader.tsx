"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Languages, Minus, Plus, Share2 } from "lucide-react";
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

  const translationMap = useMemo(() => new Map(translations.map((item) => [item.number, item.text])), [translations]);

  async function copyAyah(ayah: AyahData) {
    const text = `${ayah.text} (${surahName}: ${ayah.numberInSurah})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(ayah.numberInSurah);
      window.setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied(null);
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
      <div className="sticky top-24 z-20 mb-6 rounded-[2rem] border border-slate-200 bg-white/92 p-3 shadow-soft backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2" aria-label="التحكم بحجم خط القرآن">
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
            className="inline-flex h-10 items-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            disabled={translations.length === 0}
            aria-pressed={showTranslation}
          >
            <Languages className="h-4 w-4" />
            {translations.length === 0 ? "الترجمة غير متاحة" : showTranslation ? "إخفاء الترجمة" : "إظهار الترجمة"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {ayahs.map((ayah) => (
          <article key={ayah.numberInSurah} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-sm font-black text-blue-700">
                {ayah.numberInSurah}
              </span>
              <div className="flex items-center gap-2">
                <button onClick={() => copyAyah(ayah)} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700" aria-label="نسخ الآية">
                  {copied === ayah.numberInSurah ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
                <button onClick={() => shareAyah(ayah)} className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-600 transition hover:bg-teal-50 hover:text-teal-700" aria-label="مشاركة الآية">
                  {shareState === ayah.numberInSurah ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <p className="quran-text mt-5 rounded-[1.5rem] bg-gradient-to-l from-slate-50 to-white p-4" style={{ fontSize }}>{ayah.text}</p>
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
