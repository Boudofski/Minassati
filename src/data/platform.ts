import {
  Award,
  BookHeart,
  BookOpen,
  Brain,
  CalendarCheck,
  Gamepad2,
  Headphones,
  HeartHandshake,
  LayoutDashboard,
  Medal,
  Moon,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

export const platformStats = [
  { value: "40+", label: "درس منظم" },
  { value: "47+", label: "سؤال تربوي" },
  { value: "8", label: "مجالات تعلم" },
  { value: "114", label: "سورة في التجربة القرآنية" },
];

export const featuredPaths = [
  {
    href: "/learn/aqeedah",
    title: "بناء الإيمان",
    text: "رحلة هادئة تبدأ بمعرفة الله وأركان الإيمان والطمأنينة.",
    icon: ShieldCheck,
    tone: "from-blue-600 to-violet-500",
  },
  {
    href: "/learn/fiqh",
    title: "عباداتي اليومية",
    text: "الصلاة، الوضوء، الصيام، والآداب العملية بطريقة مناسبة للطفل.",
    icon: CalendarCheck,
    tone: "from-teal-600 to-cyan-500",
  },
  {
    href: "/stories",
    title: "قصص تربّي القلب",
    text: "مواقف من السيرة والأنبياء والصحابة تتحول إلى قيم يومية.",
    icon: BookHeart,
    tone: "from-amber-500 to-orange-400",
  },
];

export const dailyAdhkar = [
  {
    title: "ذكر الصباح",
    text: "أصبحنا وأصبح الملك لله، والحمد لله.",
    guidance: "يقرأه الطفل بعد صلاة الفجر أو عند بداية اليوم.",
  },
  {
    title: "قبل النوم",
    text: "باسمك اللهم أموت وأحيا.",
    guidance: "روتين قصير يمنح الطفل أماناً وهدوءاً قبل النوم.",
  },
  {
    title: "عند الخوف",
    text: "حسبي الله ونعم الوكيل.",
    guidance: "يستخدمه الطفل لربط القلق بالتوكل والثقة بالله.",
  },
];

export const childMissions = [
  { title: "صلّ ركعتين بهدوء", reward: "نجمة خشوع", icon: Star },
  { title: "احفظ ذكراً جديداً", reward: "شارة الذاكر", icon: Medal },
  { title: "اقرأ قصة خلق حسن", reward: "قلب رحيم", icon: HeartHandshake },
  { title: "استمع لخمس آيات", reward: "نور القرآن", icon: BookOpen },
];

export const productAreas = [
  { href: "/family-dashboard", title: "لوحة الأسرة", text: "متابعة تقدم الطفل، الدروس المقترحة، والروتين الأسبوعي.", icon: LayoutDashboard },
  { href: "/kids-zone", title: "منطقة الطفل", text: "واجهة مبسطة بالمهمات والشارات ومسارات التعلم.", icon: Sparkles },
  { href: "/games", title: "الألعاب", text: "تحديات معرفة، ترتيب خطوات، وأسئلة قصيرة بلا تشتيت.", icon: Gamepad2 },
  { href: "/quran", title: "القرآن", text: "قراءة، استماع، حفظ، ومتابعة تقدم قرآنية.", icon: BookOpen },
  { href: "/audio", title: "الصوتيات", text: "مشغل تلاوة هادئ مع اختيار القارئ والسورة.", icon: Headphones },
  { href: "/badges", title: "الشارات", text: "مكافآت تربوية مرتبطة بالسلوك والتعلم لا بالإدمان.", icon: Award },
];

export const challengeTracks = [
  { title: "سبعة أيام مع الصلاة", level: "مبتدئ", progress: 72, icon: CalendarCheck },
  { title: "حفظ أذكار النوم", level: "عائلي", progress: 58, icon: Moon },
  { title: "أخلاق النبي ﷺ", level: "متوسط", progress: 84, icon: Trophy },
  { title: "تدبر قصار السور", level: "متوسط", progress: 46, icon: Brain },
];
