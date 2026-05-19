export type Badge = {
  slug: string;
  title: string;
  description: string;
  category: string;
  color: string;
  criteria: string[];
};

export const badges: Badge[] = [
  {
    slug: "young-reader",
    title: "قارئ صغير",
    description: "للطفل الذي يقرأ درساً قصيراً ثم يذكر فكرة تعلمها بكلماته.",
    category: "التعلم",
    color: "from-blue-500 to-cyan-400",
    criteria: ["اقرأ درساً من منصتي", "اكتب أو قل فكرة واحدة", "طبّق شيئاً بسيطاً في البيت"],
  },
  {
    slug: "wudu-hero",
    title: "بطل الوضوء",
    description: "للتدرب على الوضوء بهدوء وترتيب دون استعجال أو ضغط.",
    category: "الصلاة",
    color: "from-teal-500 to-emerald-400",
    criteria: ["رتّب خطوات الوضوء", "طبّق الوضوء عملياً", "اذكر لماذا نتوضأ قبل الصلاة"],
  },
  {
    slug: "dhikr-keeper",
    title: "حافظ الأذكار",
    description: "للمواظبة على ذكر قصير في وقته الحقيقي خلال اليوم.",
    category: "الأذكار",
    color: "from-violet-500 to-fuchsia-400",
    criteria: ["اختر ذكراً واحداً", "كرره في وقته ثلاثة أيام", "اشرح معناه بجملة بسيطة"],
  },
  {
    slug: "quran-friend",
    title: "صديق القرآن",
    description: "للاستماع أو القراءة اليومية الهادئة من القرآن ولو لدقائق قليلة.",
    category: "القرآن",
    color: "from-slate-700 to-blue-500",
    criteria: ["استمع إلى آيات قصيرة", "اختر كلمة جميلة سمعتها", "ادع الله أن يحببك في القرآن"],
  },
  {
    slug: "beautiful-character",
    title: "خلق جميل",
    description: "لتطبيق خلق واحد في موقف حقيقي مثل الصدق أو الرحمة أو الشكر.",
    category: "الأخلاق",
    color: "from-amber-500 to-orange-400",
    criteria: ["اختر خلق الأسبوع", "طبقه مرة واحدة على الأقل", "تحدث مع الأسرة عن أثره"],
  },
  {
    slug: "seerah-explorer",
    title: "مستكشف السيرة",
    description: "لقراءة قصة من السيرة واستخراج خلق من أخلاق النبي ﷺ.",
    category: "السيرة",
    color: "from-rose-500 to-amber-400",
    criteria: ["اقرأ قصة قصيرة", "استخرج خلقاً واحداً", "اختر طريقة لتطبيقه غداً"],
  },
];
