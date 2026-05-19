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
    slug: "start-here",
    title: "ابدأ من هنا",
    subtitle: "أول أسبوع مع منصتي",
    description: "مسار افتتاحي قصير يعرّف الطفل بالله والصلاة والقرآن والخلق الجميل دون ضغط.",
    color: "teal",
    audience: "6-8 سنوات",
    totalLessons: 8,
    duration: "أسبوعان",
    icon: "🌙",
    steps: [
      { title: "أعرف ربي", description: "مدخل محبب لمعنى الإيمان ومعرفة الله.", category: "aqeedah", lessonSlugs: ["what-is-iman", "who-is-allah"] },
      { title: "أول عبادة", description: "الصلاة والوضوء كتجربة طمأنينة.", category: "fiqh", lessonSlugs: ["why-do-we-pray", "how-to-make-wudu"] },
      { title: "خلق اليوم", description: "الصدق والشكر في الحياة اليومية.", category: "akhlaq", lessonSlugs: ["truthfulness", "gratitude"] },
      { title: "قرآن قصير", description: "الاستماع والفاتحة كبداية محببة.", category: "quran", lessonSlugs: ["start-learning-quran", "surah-al-fatiha"] },
    ],
  },
  {
    slug: "aqeedah-basics",
    title: "أساسيات العقيدة",
    subtitle: "إيمان وطمأنينة",
    description: "يبني أركان الإيمان ومعاني التوحيد والقدر ومحبة الله بأسلوب مناسب للأطفال.",
    color: "blue",
    audience: "7-12 سنة",
    totalLessons: 10,
    duration: "4 أسابيع",
    icon: "⭐",
    steps: [
      { title: "أركان الإيمان", description: "تعلم الأصول الستة بتدرج.", category: "aqeedah", lessonSlugs: ["what-is-iman", "believing-in-angels", "believing-in-books"] },
      { title: "معرفة الله", description: "أسماء الله والتوحيد والمحبة.", category: "aqeedah", lessonSlugs: ["who-is-allah", "beautiful-names-of-allah", "tawheed-for-kids"] },
      { title: "الثقة بالله", description: "القدر واليوم الآخر والرجاء.", category: "aqeedah", lessonSlugs: ["what-is-qadar", "the-last-day", "love-and-fear-of-allah"] },
    ],
  },
  {
    slug: "prayer-purity",
    title: "الصلاة والطهارة",
    subtitle: "عباداتي اليومية",
    description: "مسار عملي للوضوء والصلاة وأوقات الصلاة والنظافة والجمعة.",
    color: "teal",
    audience: "7-11 سنة",
    totalLessons: 9,
    duration: "3 أسابيع",
    icon: "🕌",
    steps: [
      { title: "أستعد للصلاة", description: "الطهارة والوضوء والنظافة.", category: "fiqh", lessonSlugs: ["cleanliness-in-islam", "how-to-make-wudu"] },
      { title: "أتعلم الصلاة", description: "معنى الصلاة وأركانها وأوقاتها.", category: "fiqh", lessonSlugs: ["why-do-we-pray", "pillars-of-prayer", "prayer-times"] },
      { title: "أجواء العبادة", description: "الجمعة والعيد وآداب المسجد.", category: "fiqh", lessonSlugs: ["friday-prayer", "eid-etiquette", "entering-mosque-etiquette"] },
    ],
  },
  {
    slug: "young-muslim-akhlaq",
    title: "أخلاق المسلم الصغير",
    subtitle: "قيم تطبق في البيت والمدرسة",
    description: "مسار أخلاقي دافئ يحول الصدق والأمانة والرحمة والصبر إلى عادات يومية.",
    color: "gold",
    audience: "6-12 سنة",
    totalLessons: 10,
    duration: "5 أسابيع",
    icon: "💛",
    steps: [
      { title: "قلبي جميل", description: "الصدق والشكر والرحمة.", category: "akhlaq", lessonSlugs: ["truthfulness", "gratitude", "mercy-to-animals"] },
      { title: "تعاملاتي", description: "الأمانة والتعاون والصداقة.", category: "akhlaq", lessonSlugs: ["amanah", "cooperation", "good-friendship"] },
      { title: "قوة النفس", description: "الصبر والعفو والحياء.", category: "akhlaq", lessonSlugs: ["patience-for-kids", "forgiveness", "modesty"] },
    ],
  },
  {
    slug: "seerah-journey",
    title: "رحلة مع السيرة",
    subtitle: "قدوتي النبي ﷺ",
    description: "رحلة قصصية من مولد النبي ﷺ إلى أخلاقه ورحمته ومواقفه الكبرى.",
    color: "navy",
    audience: "8-12 سنة",
    totalLessons: 10,
    duration: "5 أسابيع",
    icon: "📜",
    steps: [
      { title: "البداية", description: "مولده ونزول الوحي والدعوة في مكة.", category: "seerah", lessonSlugs: ["birth-of-prophet", "first-revelation", "prophet-in-makkah"] },
      { title: "الهجرة والمدينة", description: "التوكل وبناء المجتمع.", category: "seerah", lessonSlugs: ["hijra-story", "building-madinah"] },
      { title: "أخلاق القدوة", description: "الرحمة والعفو وحب الأطفال.", category: "seerah", lessonSlugs: ["character-of-prophet", "mercy-in-seerah", "prophet-and-children", "conquest-of-makkah"] },
    ],
  },
  {
    slug: "quran-at-home",
    title: "القرآن في البيت",
    subtitle: "قراءة وحفظ وطمأنينة",
    description: "مسار عائلي يجعل القرآن جزءاً من يوم الطفل بالاستماع والحفظ والفهم والمراجعة.",
    color: "gold",
    audience: "الأسرة",
    totalLessons: 10,
    duration: "4 أسابيع",
    icon: "📖",
    steps: [
      { title: "البداية الصحيحة", description: "آداب القرآن وروتين قصير.", category: "quran", lessonSlugs: ["start-learning-quran", "quran-etiquette"] },
      { title: "الحفظ والفهم", description: "الفاتحة والسور القصيرة والمعاني.", category: "quran", lessonSlugs: ["surah-al-fatiha", "short-surahs-plan", "quran-meanings"] },
      { title: "المراجعة", description: "الاستماع والتجويد والمراجعة.", category: "quran", lessonSlugs: ["listening-to-quran", "tajweed-basics", "memorization-review", "quran-in-home"] },
    ],
  },
];

export function getPath(slug: string) {
  return paths.find((path) => path.slug === slug);
}
