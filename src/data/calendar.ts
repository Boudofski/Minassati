export type CalendarPlanningItem = {
  slug: string;
  title: string;
  description: string;
  checklist: string[];
};

export const calendarPlanningItems: CalendarPlanningItem[] = [
  {
    slug: "school-competitions",
    title: "مباريات المدارس",
    description: "استعمل هذه البطاقة لتتبع المدارس التي تهمك ونوع المباراة أو الانتقاء المطلوب.",
    checklist: ["اسم المؤسسة", "رابط الإعلان الرسمي", "نوع المباراة", "المواد أو المحاور"],
  },
  {
    slug: "registration-deadlines",
    title: "آخر أجل للتسجيل",
    description: "لا تعتمد على تاريخ متداول في مواقع التواصل. سجل التاريخ فقط بعد التحقق من المصدر الرسمي.",
    checklist: ["تاريخ فتح التسجيل", "آخر أجل", "الوثائق المطلوبة", "وصل أو تأكيد التسجيل"],
  },
  {
    slug: "selection-results",
    title: "نتائج الانتقاء",
    description: "تابع نتائج الانتقاء أو الاستدعاء من الموقع الرسمي للمؤسسة أو المنصة المعتمدة.",
    checklist: ["رابط النتائج", "رقم الترشيح", "موعد الاختبار", "وثائق يوم المباراة"],
  },
  {
    slug: "study-start",
    title: "بداية الدراسة",
    description: "خطط للسكن، النقل، الوثائق، والميزانية قبل بداية الدراسة.",
    checklist: ["تاريخ الدخول", "السكن والنقل", "الوثائق الأصلية", "ميزانية الشهر الأول"],
  },
];

export const calendarWarning = "المواعيد تقريبية ويجب التحقق منها من المواقع الرسمية.";
