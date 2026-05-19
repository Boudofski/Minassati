export type Surah = {
  number: number;
  name: string;
  englishName: string;
  ayahs: number;
  type: "مكية" | "مدنية";
};

export const sampleSurahs: Surah[] = [
  { number: 1,   name: "الفاتحة",    englishName: "Al-Fatihah",    ayahs: 7,   type: "مكية"  },
  { number: 2,   name: "البقرة",     englishName: "Al-Baqarah",    ayahs: 286, type: "مدنية" },
  { number: 3,   name: "آل عمران",   englishName: "Aal-Imran",     ayahs: 200, type: "مدنية" },
  { number: 4,   name: "النساء",     englishName: "An-Nisa",       ayahs: 176, type: "مدنية" },
  { number: 5,   name: "المائدة",    englishName: "Al-Maidah",     ayahs: 120, type: "مدنية" },
  { number: 9,   name: "التوبة",     englishName: "At-Tawbah",     ayahs: 129, type: "مدنية" },
  { number: 12,  name: "يوسف",       englishName: "Yusuf",         ayahs: 111, type: "مكية"  },
  { number: 18,  name: "الكهف",      englishName: "Al-Kahf",       ayahs: 110, type: "مكية"  },
  { number: 19,  name: "مريم",       englishName: "Maryam",        ayahs: 98,  type: "مكية"  },
  { number: 23,  name: "المؤمنون",   englishName: "Al-Muminun",    ayahs: 118, type: "مكية"  },
  { number: 24,  name: "النور",      englishName: "An-Nur",        ayahs: 64,  type: "مدنية" },
  { number: 36,  name: "يس",         englishName: "Ya-Sin",        ayahs: 83,  type: "مكية"  },
  { number: 55,  name: "الرحمن",     englishName: "Ar-Rahman",     ayahs: 78,  type: "مدنية" },
  { number: 56,  name: "الواقعة",    englishName: "Al-Waqi'ah",    ayahs: 96,  type: "مكية"  },
  { number: 67,  name: "الملك",      englishName: "Al-Mulk",       ayahs: 30,  type: "مكية"  },
  { number: 78,  name: "النبأ",      englishName: "An-Naba",       ayahs: 40,  type: "مكية"  },
  { number: 87,  name: "الأعلى",     englishName: "Al-A'la",       ayahs: 19,  type: "مكية"  },
  { number: 93,  name: "الضحى",      englishName: "Ad-Duha",       ayahs: 11,  type: "مكية"  },
  { number: 94,  name: "الشرح",      englishName: "Ash-Sharh",     ayahs: 8,   type: "مكية"  },
  { number: 97,  name: "القدر",      englishName: "Al-Qadr",       ayahs: 5,   type: "مكية"  },
  { number: 99,  name: "الزلزلة",    englishName: "Az-Zalzalah",   ayahs: 8,   type: "مدنية" },
  { number: 100, name: "العاديات",   englishName: "Al-Adiyat",     ayahs: 11,  type: "مكية"  },
  { number: 103, name: "العصر",      englishName: "Al-Asr",        ayahs: 3,   type: "مكية"  },
  { number: 107, name: "الماعون",    englishName: "Al-Maun",       ayahs: 7,   type: "مكية"  },
  { number: 108, name: "الكوثر",     englishName: "Al-Kawthar",    ayahs: 3,   type: "مكية"  },
  { number: 109, name: "الكافرون",   englishName: "Al-Kafirun",    ayahs: 6,   type: "مكية"  },
  { number: 110, name: "النصر",      englishName: "An-Nasr",       ayahs: 3,   type: "مدنية" },
  { number: 111, name: "المسد",      englishName: "Al-Masad",      ayahs: 5,   type: "مكية"  },
  { number: 112, name: "الإخلاص",    englishName: "Al-Ikhlas",     ayahs: 4,   type: "مكية"  },
  { number: 113, name: "الفلق",      englishName: "Al-Falaq",      ayahs: 5,   type: "مكية"  },
  { number: 114, name: "الناس",      englishName: "An-Nas",        ayahs: 6,   type: "مكية"  },
];

export const reciters = [
  { name: "مشاري العفاسي",        style: "تلاوة واضحة ومناسبة للحفظ وتعليم الأطفال",   accent: "blue",   server: "https://server.mp3quran.net/afasy/" },
  { name: "عبد الباسط عبد الصمد", style: "تلاوة تعليمية مؤثرة وجمالية رائعة",          accent: "gold",   server: "https://server.mp3quran.net/basit/" },
  { name: "ماهر المعيقلي",        style: "تلاوة هادئة وسهلة المتابعة في الصلوات",       accent: "teal",   server: "https://server.mp3quran.net/maher/" },
  { name: "عبد الرحمن السديس",   style: "تلاوة خاشعة من أشهر أئمة الحرمين الشريفين",  accent: "blue",   server: "https://server.mp3quran.net/sds/" },
  { name: "أبو بكر الشاطري",     style: "تلاوة مجوّدة مميزة وواضحة المخارج",           accent: "navy",   server: "https://server.mp3quran.net/shatri/" },
  { name: "سعد الغامدي",          style: "تلاوة تراويح مشهورة وهادئة",                  accent: "teal",   server: "https://server.mp3quran.net/ghamdi/" },
];
