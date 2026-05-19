export type PathStep = {
  title: string;
  description: string;
  category: string;
  lessonSlugs: string[];
};

export type LearningPath = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  color: "blue" | "teal" | "gold" | "navy";
  audience: string;
  totalLessons: number;
  duration: string;
  icon: string;
  steps: PathStep[];
};

export const paths: LearningPath[] = [
  {
    slug: "first-steps",
    title: "خطواتي الأولى",
    subtitle: "رحلة الطفل الصغير مع الإسلام",
    description: "مسار لطيف ومبهج للأطفال الصغار يبدأ فيه الطفل تعلم الإسلام بأسلوب قصصي وبسيط، يناسب عمره ويشوّقه للتعلم أكثر.",
    color: "teal",
    audience: "5-7 سنوات",
    totalLessons: 8,
    duration: "4 أسابيع",
    icon: "🌙",
    steps: [
      {
        title: "أعرف ربي",
        description: "تعريف الطفل بالله من خلال مفاهيم بسيطة ومحبوبة.",
        category: "aqeedah",
        lessonSlugs: ["what-is-iman"],
      },
      {
        title: "أخلاقي الجميلة",
        description: "تعلم الصدق والرحمة بقصص قصيرة ونشاطات يومية.",
        category: "akhlaq",
        lessonSlugs: ["truthfulness", "mercy-to-animals"],
      },
      {
        title: "آدابي كل يوم",
        description: "آداب التحية والطعام والدخول — سلوكيات يمارسها الطفل يومياً.",
        category: "adab",
        lessonSlugs: ["greeting-etiquette", "eating-etiquette"],
      },
    ],
  },
  {
    slug: "young-muslim",
    title: "أنا مسلم صغير",
    subtitle: "أساسيات الإسلام للأطفال",
    description: "مسار شامل يبني عند الطفل فهماً صحيحاً لأركان الإسلام والإيمان، مع التركيز على العبادات اليومية والسيرة النبوية.",
    color: "blue",
    audience: "7-10 سنوات",
    totalLessons: 12,
    duration: "6 أسابيع",
    icon: "⭐",
    steps: [
      {
        title: "إيماني وعقيدتي",
        description: "معنى الإيمان وأسماء الله الحسنى بأسلوب قريب من الطفل.",
        category: "aqeedah",
        lessonSlugs: ["what-is-iman", "beautiful-names-of-allah"],
      },
      {
        title: "عباداتي اليومية",
        description: "الوضوء والصلاة — خطوة بخطوة بطريقة محببة.",
        category: "fiqh",
        lessonSlugs: ["why-do-we-pray", "how-to-make-wudu", "pillars-of-prayer"],
      },
      {
        title: "قدوتي النبي ﷺ",
        description: "مولد النبي وأخلاقه العظيمة — قصص تربوية مؤثرة.",
        category: "seerah",
        lessonSlugs: ["birth-of-prophet", "character-of-prophet"],
      },
      {
        title: "أذكاري وأدعيتي",
        description: "أذكار الصباح والنوم والطعام — نورٌ في يوم الطفل.",
        category: "duaa",
        lessonSlugs: ["morning-adhkar-lesson", "sleep-awake-duaa", "basmala-istiatha"],
      },
    ],
  },
  {
    slug: "quran-journey",
    title: "رحلتي مع القرآن",
    subtitle: "تعلم القرآن والتجويد بخطوات ممتعة",
    description: "مسار مخصص لمن يريد البدء بتعلم القرآن الكريم، من الأساسيات والآداب إلى السور القصيرة والتجويد.",
    color: "gold",
    audience: "جميع الأعمار",
    totalLessons: 10,
    duration: "5 أسابيع",
    icon: "📖",
    steps: [
      {
        title: "كيف أبدأ مع القرآن",
        description: "الآداب والبسملة والاستعاذة — التهيئة الصحيحة لتلاوة القرآن.",
        category: "quran",
        lessonSlugs: ["start-learning-quran", "quran-etiquette"],
      },
      {
        title: "أول ما أحفظ",
        description: "سورة الفاتحة وجزء عم — أجمل ما يحفظه الطفل.",
        category: "quran",
        lessonSlugs: ["surah-al-fatiha", "juz-amma-for-kids"],
      },
      {
        title: "أقرأ بتجويد",
        description: "أساسيات التجويد للمبتدئين بطريقة مبسطة وممتعة.",
        category: "quran",
        lessonSlugs: ["tajweed-basics"],
      },
      {
        title: "أذكاري مع القرآن",
        description: "البسملة والاستعاذة في كل موقف — ذكر دائم وجميل.",
        category: "duaa",
        lessonSlugs: ["basmala-istiatha"],
      },
    ],
  },
  {
    slug: "family-learning",
    title: "تعلّم مع العائلة",
    subtitle: "مسار الأسرة المسلمة معاً",
    description: "مسار مصمم ليجمع الأهل والأطفال في رحلة تعلم مشتركة، بدروس تُناقَش على مائدة العشاء وتُطبَّق في الحياة اليومية.",
    color: "navy",
    audience: "الأسرة بأكملها",
    totalLessons: 15,
    duration: "8 أسابيع",
    icon: "🏠",
    steps: [
      {
        title: "عقيدتنا معاً",
        description: "فهم الإيمان والقدر وأسماء الله — حوار عائلي ممتع.",
        category: "aqeedah",
        lessonSlugs: ["what-is-iman", "what-is-qadar"],
      },
      {
        title: "فقهنا اليومي",
        description: "الصلاة والصيام والزكاة — عبادات نؤديها سوياً.",
        category: "fiqh",
        lessonSlugs: ["why-do-we-pray", "fasting-in-ramadan", "zakat-and-charity"],
      },
      {
        title: "من سيرة المصطفى ﷺ",
        description: "قصص ملهمة من حياة النبي ﷺ نتدارسها كعائلة.",
        category: "seerah",
        lessonSlugs: ["mercy-in-seerah", "conquest-of-makkah", "character-of-prophet"],
      },
      {
        title: "بيتنا يذكر الله",
        description: "أذكار وآداب تجعل البيت نوراً وطمأنينة.",
        category: "duaa",
        lessonSlugs: ["morning-adhkar-lesson", "eating-drinking-duaa", "leaving-home-duaa"],
      },
    ],
  },
];

export function getPath(slug: string) {
  return paths.find((p) => p.slug === slug);
}
