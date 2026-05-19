import {
  BookOpen,
  HeartHandshake,
  Landmark,
  MessageCircleQuestion,
  MoonStar,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export type Category = {
  slug: string;
  title: string;
  description: string;
  color: "blue" | "teal" | "gold" | "navy" | "green" | "purple" | "rose" | "orange";
  icon: typeof BookOpen;
  lessonCount: number;
  questionCount: number;
};

export const categories: Category[] = [
  {
    slug: "aqeedah",
    title: "العقيدة",
    description: "مفاهيم الإيمان والتوحيد مشروحة بلغة قريبة من الطفل، تبني أساساً راسخاً للإيمان.",
    color: "blue",
    icon: ShieldCheck,
    lessonCount: 5,
    questionCount: 7,
  },
  {
    slug: "fiqh",
    title: "الفقه",
    description: "أساسيات الطهارة والصلاة وسائر العبادات اليومية بأسلوب مبسط وتدريجي.",
    color: "teal",
    icon: Landmark,
    lessonCount: 5,
    questionCount: 8,
  },
  {
    slug: "seerah",
    title: "السيرة النبوية",
    description: "قصص تربوية مضيئة من حياة النبي صلى الله عليه وسلم تلهم الطفل وتقرّبه من القدوة.",
    color: "gold",
    icon: ScrollText,
    lessonCount: 5,
    questionCount: 7,
  },
  {
    slug: "akhlaq",
    title: "الأخلاق",
    description: "الصدق، الرحمة، الأمانة، التواضع، وحسن التعامل — قيم نبنيها في حياة الطفل يومًا بيوم.",
    color: "navy",
    icon: HeartHandshake,
    lessonCount: 5,
    questionCount: 7,
  },
  {
    slug: "hadith",
    title: "الحديث النبوي",
    description: "أحاديث نبوية قصيرة مختارة مع شرح مناسب للأطفال يربطهم بسنة النبي ﷺ.",
    color: "blue",
    icon: MessageCircleQuestion,
    lessonCount: 5,
    questionCount: 5,
  },
  {
    slug: "duaa",
    title: "الأدعية والأذكار",
    description: "أذكار وأدعية يومية سهلة الحفظ والتطبيق تُحيي قلب الطفل بذكر الله.",
    color: "teal",
    icon: MoonStar,
    lessonCount: 5,
    questionCount: 7,
  },
  {
    slug: "quran",
    title: "القرآن الكريم",
    description: "مدخل منظم لتعلم القرآن وحفظه والتدبر فيه بطريقة ممتعة ومناسبة للأعمار.",
    color: "gold",
    icon: BookOpen,
    lessonCount: 5,
    questionCount: 7,
  },
  {
    slug: "adab",
    title: "الآداب الإسلامية",
    description: "آداب البيت، المسجد، الطعام، الحديث، والتعامل — سلوكيات نمارسها كل يوم.",
    color: "navy",
    icon: Sparkles,
    lessonCount: 5,
    questionCount: 5,
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
