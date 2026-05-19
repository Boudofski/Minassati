const FAWAZ_BASE = "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1";
const ALQURAN_BASE = "https://api.alquran.cloud/v1";

export type AyahData = {
  number: number;
  text: string;
  numberInSurah: number;
};

export type SurahData = {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: string;
  ayahs: AyahData[];
};

export type SurahMeta = {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: string;
};

async function fetchWithFallback<T>(
  primaryUrl: string,
  fallbackUrl: string,
  transform: (data: unknown) => T
): Promise<T> {
  try {
    const res = await fetch(primaryUrl, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return transform(data);
  } catch {
    const res = await fetch(fallbackUrl, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error(`Fallback failed: HTTP ${res.status}`);
    const data = await res.json();
    return transform(data);
  }
}

export async function getSurahList(): Promise<SurahMeta[]> {
  return fetchWithFallback(
    `${FAWAZ_BASE}/editions/info.json`,
    `${ALQURAN_BASE}/surah`,
    (raw) => {
      // fawazahmed0 format: chapters array
      const data = raw as Record<string, unknown>;
      if (Array.isArray(data.chapters)) {
        return (data.chapters as Array<{
          chapter: number;
          arabicname: string;
          transliteration: string;
          versescount: number;
          type: string;
        }>).map((ch) => ({
          number: ch.chapter,
          name: ch.arabicname,
          englishName: ch.transliteration,
          numberOfAyahs: ch.versescount,
          revelationType: ch.type,
        }));
      }
      // AlQuran.cloud fallback format
      const fallback = (data as { data: SurahMeta[] }).data;
      return fallback;
    }
  );
}

export async function getSurahAyahs(surahNumber: number): Promise<SurahData> {
  return fetchWithFallback(
    `${FAWAZ_BASE}/editions/ara-quranuthmanihaf/${surahNumber}.json`,
    `${ALQURAN_BASE}/surah/${surahNumber}/ar.alafasy`,
    (raw) => {
      const data = raw as Record<string, unknown>;

      // fawazahmed0 format
      if (data.chapter) {
        const chapter = data.chapter as {
          chapter: number;
          arabicname: string;
          transliteration: string;
          versescount: number;
          verses: Array<{ verse: number; text: string }>;
        };
        return {
          number: chapter.chapter,
          name: chapter.arabicname,
          englishName: chapter.transliteration,
          numberOfAyahs: chapter.versescount,
          revelationType: "",
          ayahs: chapter.verses.map((v) => ({
            number: v.verse,
            text: v.text,
            numberInSurah: v.verse,
          })),
        };
      }

      // AlQuran.cloud fallback
      const surah = (data as { data: {
        number: number;
        name: string;
        englishName: string;
        numberOfAyahs: number;
        revelationType: string;
        ayahs: Array<{ number: number; text: string; numberInSurah: number }>;
      } }).data;
      return surah;
    }
  );
}

export async function getAyahTranslation(
  surahNumber: number,
  edition = "en.sahih"
): Promise<{ number: number; text: string }[]> {
  try {
    const res = await fetch(
      `${ALQURAN_BASE}/surah/${surahNumber}/${edition}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json() as {
      data: { ayahs: Array<{ numberInSurah: number; text: string }> };
    };
    return data.data.ayahs.map((a) => ({
      number: a.numberInSurah,
      text: a.text,
    }));
  } catch {
    return [];
  }
}
