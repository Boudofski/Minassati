const FAWAZ_BASE = "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1";
const ALQURAN_BASE = "https://api.alquran.cloud/v1";

export type AyahData = {
  number: number;
  text: string;
  numberInSurah: number;
};

export type SurahMeta = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation?: string;
  numberOfAyahs: number;
  revelationType: "Meccan" | "Medinan" | string;
};

export type SurahData = SurahMeta & {
  ayahs: AyahData[];
  source: "fawazahmed0" | "alquran.cloud" | "fallback";
};

export type TranslationAyah = {
  number: number;
  text: string;
};

const fallbackSurahNames = [
  "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
  "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
  "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
  "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
  "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
  "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
  "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
  "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
  "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
  "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
  "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
  "المسد", "الإخلاص", "الفلق", "الناس",
];

const fallbackAyahCounts = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85,
  54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13,
  14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42,
  29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11,
  11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6,
];

export const fallbackSurahs: SurahMeta[] = fallbackSurahNames.map((name, index) => ({
  number: index + 1,
  name,
  englishName: `Surah ${index + 1}`,
  numberOfAyahs: fallbackAyahCounts[index],
  revelationType: index + 1 <= 86 ? "Meccan" : "Medinan",
}));

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    next: { revalidate: 60 * 60 * 24 },
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(6000),
  });
  if (!response.ok) throw new Error(`Quran API failed ${response.status}: ${url}`);
  return response.json() as Promise<T>;
}

export async function getSurahList(): Promise<SurahMeta[]> {
  try {
    const raw = await fetchJson<Record<string, unknown>>(`${FAWAZ_BASE}/editions/info.json`);
    if (Array.isArray(raw.chapters)) {
      return (raw.chapters as Array<{ chapter: number; arabicname: string; transliteration: string; versescount: number; type: string }>).map((chapter) => ({
        number: chapter.chapter,
        name: chapter.arabicname,
        englishName: chapter.transliteration,
        numberOfAyahs: chapter.versescount,
        revelationType: chapter.type,
      }));
    }
    throw new Error("Unexpected fawazahmed0 chapter list format");
  } catch {
    try {
      const raw = await fetchJson<{ data: SurahMeta[] }>(`${ALQURAN_BASE}/surah`);
      return raw.data;
    } catch {
      return fallbackSurahs;
    }
  }
}

export async function getSurahAyahs(surahNumber: number): Promise<SurahData> {
  const fallbackMeta = fallbackSurahs[surahNumber - 1] ?? fallbackSurahs[0];

  try {
    const raw = await fetchJson<{
      chapter?: {
        chapter: number;
        arabicname: string;
        transliteration: string;
        versescount: number;
        verses: Array<{ verse: number; text: string }>;
      };
    }>(`${FAWAZ_BASE}/editions/ara-quranuthmanihaf/${surahNumber}.json`);
    if (!raw.chapter) throw new Error("Unexpected fawazahmed0 surah format");
    return {
      number: raw.chapter.chapter,
      name: raw.chapter.arabicname,
      englishName: raw.chapter.transliteration,
      numberOfAyahs: raw.chapter.versescount,
      revelationType: fallbackMeta.revelationType,
      ayahs: raw.chapter.verses.map((verse) => ({
        number: verse.verse,
        numberInSurah: verse.verse,
        text: verse.text,
      })),
      source: "fawazahmed0",
    };
  } catch {
    try {
      const raw = await fetchJson<{ data: Omit<SurahData, "source"> }>(`${ALQURAN_BASE}/surah/${surahNumber}/quran-uthmani`);
      return { ...raw.data, source: "alquran.cloud" };
    } catch {
      return {
        ...fallbackMeta,
        ayahs: Array.from({ length: Math.min(fallbackMeta.numberOfAyahs, 7) }, (_, index) => ({
          number: index + 1,
          numberInSurah: index + 1,
          text: "تعذر تحميل نص الآية حالياً. يرجى المحاولة مرة أخرى عند توفر الاتصال.",
        })),
        source: "fallback",
      };
    }
  }
}

export async function getAyahTranslation(surahNumber: number, edition = "en.sahih"): Promise<TranslationAyah[]> {
  try {
    const raw = await fetchJson<{ data: { ayahs: Array<{ numberInSurah: number; text: string }> } }>(`${ALQURAN_BASE}/surah/${surahNumber}/${edition}`);
    return raw.data.ayahs.map((ayah) => ({ number: ayah.numberInSurah, text: ayah.text }));
  } catch {
    return [];
  }
}
