import type { TranslationAyah } from "./quran-api";

const FAWAZ_BASE = "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1";
const ALQURAN_BASE = "https://api.alquran.cloud/v1";

export type QuranTranslationKey = "none" | "en" | "fr" | "es";

export const quranTranslationOptions: Array<{ key: QuranTranslationKey; label: string; dir: "rtl" | "ltr" }> = [
  { key: "none", label: "Arabic only", dir: "rtl" },
  { key: "en", label: "English", dir: "ltr" },
  { key: "fr", label: "Français", dir: "ltr" },
  { key: "es", label: "Español", dir: "ltr" },
];

const editions: Record<Exclude<QuranTranslationKey, "none">, { fawaz: string; alquran: string }> = {
  en: { fawaz: "eng-sahih", alquran: "en.sahih" },
  fr: { fawaz: "fra-hamidullah", alquran: "fr.hamidullah" },
  es: { fawaz: "spa-garcia", alquran: "es.asad" },
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    next: { revalidate: 60 * 60 * 24 },
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(6000),
  });
  if (!response.ok) throw new Error(`Quran translation API failed ${response.status}: ${url}`);
  return response.json() as Promise<T>;
}

export async function getSurahTranslations(surahNumber: number): Promise<Record<Exclude<QuranTranslationKey, "none">, TranslationAyah[]>> {
  const entries = await Promise.all((["en", "fr", "es"] as const).map(async (lang) => [lang, await getTranslation(surahNumber, lang)] as const));
  return Object.fromEntries(entries) as Record<Exclude<QuranTranslationKey, "none">, TranslationAyah[]>;
}

export async function getTranslation(surahNumber: number, lang: Exclude<QuranTranslationKey, "none">): Promise<TranslationAyah[]> {
  const edition = editions[lang];
  try {
    const raw = await fetchJson<{
      chapter?: { verses: Array<{ verse: number; text: string }> };
    }>(`${FAWAZ_BASE}/editions/${edition.fawaz}/${surahNumber}.json`);
    if (!raw.chapter) throw new Error("Unexpected fawazahmed0 translation format");
    return raw.chapter.verses.map((ayah) => ({ number: ayah.verse, text: ayah.text }));
  } catch {
    try {
      const raw = await fetchJson<{ data: { ayahs: Array<{ numberInSurah: number; text: string }> } }>(`${ALQURAN_BASE}/surah/${surahNumber}/${edition.alquran}`);
      return raw.data.ayahs.map((ayah) => ({ number: ayah.numberInSurah, text: ayah.text }));
    } catch {
      return [];
    }
  }
}
