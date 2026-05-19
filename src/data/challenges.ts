export type Challenge = {
  slug: string;
  title: string;
  duration: string;
  category: string;
  ageRange: string;
  summary: string;
  dailySteps: string[];
  parentTip: string;
  badgeSlug: string;
};

export const challenges: Challenge[] = [
  {
    slug: "seven-days-adhkar",
    title: "7 أيام مع الأذكار",
    duration: "7 أيام",
    category: "الأذكار",
    ageRange: "6-12 سنة",
    summary: "اختيار ذكر واحد يومياً وربطه بموقف حقيقي حتى يصبح عادة لطيفة.",
    dailySteps: ["ذكر الصباح", "قبل الطعام", "بعد الطعام", "عند الخروج", "عند الغضب", "قبل النوم", "دعاء الوالدين"],
    parentTip: "لا تطلب حفظ كل شيء دفعة واحدة. يكفي ذكر واحد يفهمه الطفل ويستخدمه.",
    badgeSlug: "dhikr-keeper",
  },
  {
    slug: "prayer-week",
    title: "أسبوع الصلاة",
    duration: "7 أيام",
    category: "الصلاة",
    ageRange: "7-12 سنة",
    summary: "تدريب هادئ على معنى الصلاة والوضوء والخشوع دون ضغط أو مقارنة.",
    dailySteps: ["ما معنى الصلاة؟", "ترتيب الوضوء", "اختيار مكان هادئ", "ركعتان بتأن", "دعاء بعد الصلاة", "صلاة مع الأسرة", "حديث عن أجمل لحظة"],
    parentTip: "ركز على المحاولة والمحبة قبل الانضباط الكامل، فالعادة تنمو بالتدرج.",
    badgeSlug: "wudu-hero",
  },
  {
    slug: "juz-amma-journey",
    title: "رحلة جزء عم",
    duration: "4 أسابيع",
    category: "القرآن",
    ageRange: "8-12 سنة",
    summary: "خطة مراجعة واستماع لسور قصيرة مع خريطة تقدم مرئية للطفل.",
    dailySteps: ["استماع دقيقتان", "تكرار آية", "معنى كلمة", "مراجعة قصيرة", "قراءة مع ولي الأمر", "تلوين الخريطة", "احتفال بالمراجعة"],
    parentTip: "احتفل بالمراجعة كما تحتفل بالحفظ؛ هذا يحمي الطفل من النسيان والإحباط.",
    badgeSlug: "quran-friend",
  },
  {
    slug: "truthfulness-challenge",
    title: "تحدي الصدق",
    duration: "5 أيام",
    category: "الأخلاق",
    ageRange: "7-12 سنة",
    summary: "مواقف قصيرة تساعد الطفل على قول الحقيقة وإصلاح الخطأ بشجاعة.",
    dailySteps: ["ما معنى الصدق؟", "موقف تمثيلي", "اعتذار لطيف", "إصلاح خطأ صغير", "قصة عن الصادق الأمين"],
    parentTip: "استقبل صدق الطفل بهدوء حتى لو أخطأ، ثم علّمه إصلاح الخطأ.",
    badgeSlug: "beautiful-character",
  },
  {
    slug: "kindness-to-parents",
    title: "تحدي بر الوالدين",
    duration: "7 أيام",
    category: "الآداب",
    ageRange: "6-12 سنة",
    summary: "أعمال صغيرة من الشكر والدعاء والمساعدة تربط البر بالحب اليومي.",
    dailySteps: ["دعاء للوالدين", "كلمة شكر", "مساعدة صغيرة", "استماع بلا مقاطعة", "ترتيب شيء من البيت", "رسالة محبة", "دعاء بعد الصلاة"],
    parentTip: "لا تحول البر إلى أوامر ثقيلة. اجعله لغة حب وتقدير يراها الطفل منك أيضاً.",
    badgeSlug: "beautiful-character",
  },
];
