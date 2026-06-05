export type ResourceType = "checklist" | "template" | "guide" | "planner";

export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: string;
  type: ResourceType;
  free: boolean;
  language: "العربية" | "الفرنسية" | "الإنجليزية";
  tags: string[];
  previewSections: string[];
  cta: string;
};

const rows = [
  ["major-choice-checklist", "Checklist اختيار التخصص", "قائمة أسئلة تساعدك على تقييم الميول، القدرات، سوق العمل، والمدينة.", "اختيار التخصص", "checklist", ["الميول", "المواد القوية", "آفاق التخصص"]],
  ["school-comparison-template", "قالب مقارنة المدارس", "جدول بسيط لمقارنة المؤسسات دون الاعتماد على ترتيب غير رسمي.", "المدارس", "template", ["الاعتماد", "المدينة", "التكلفة"]],
  ["motivation-letter-template", "قالب رسالة تحفيزية", "هيكل عربي واضح لكتابة رسالة تحفيزية للدراسة أو المنحة.", "المنح", "template", ["الافتتاحية", "سبب الاختيار", "الخاتمة"]],
  ["student-cv-template", "CV طالب", "قالب سيرة ذاتية بسيط لطالب يبحث عن تدريب، منحة، أو فرصة تعلم.", "الاستعداد", "template", ["التعليم", "المهارات", "الأنشطة"]],
  ["revision-plan", "خطة مراجعة", "مخطط أسبوعي لتنظيم المراجعة قبل الامتحانات أو المباريات.", "الاستعداد", "planner", ["المواد", "النماذج", "المراجعة"]],
  ["after-bac-map", "خريطة اختيارات ما بعد الباك", "دليل سريع لفهم الجامعة، المدارس، التكوين المهني، الدراسة بالخارج، والمهارات الرقمية.", "بعد الباك", "guide", ["الخيارات", "لمن يناسب", "خطوة البداية"]],
  ["career-research-sheet", "ورقة بحث عن مهنة", "نموذج لجمع معلومات واقعية عن مهنة قبل اختيار مسار دراسي.", "المهن", "template", ["المهام", "المهارات", "طريقة الدخول"]],
  ["family-discussion-guide", "دليل نقاش العائلة", "أسئلة تساعد الطالب ووالديه على مناقشة الاختيار الدراسي بهدوء.", "التوجيه", "guide", ["المخاوف", "الأدلة", "الخطة"]],
  ["scholarship-file-checklist", "قائمة ملف المنحة", "قائمة عامة للوثائق التي قد تحتاجها في ملفات المنح والدراسة بالخارج.", "المنح", "checklist", ["الشهادات", "اللغة", "رسائل التوصية"]],
  ["city-study-budget", "ميزانية مدينة الدراسة", "قالب لحساب السكن، النقل، الأكل، والكتب قبل اختيار مدينة الدراسة.", "الحياة الطلابية", "planner", ["السكن", "النقل", "المصاريف"]],
  ["digital-skills-roadmap", "خارطة المهارات الرقمية", "دليل لاختيار مهارة رقمية داعمة حسب هدفك الدراسي أو المهني.", "المهارات الرقمية", "guide", ["البرمجة", "التسويق", "التصميم"]],
  ["competition-prep-plan", "خطة الاستعداد للمباراة", "مخطط لتحليل إعلان المباراة وتنظيم المراجعة والنماذج.", "المباريات", "planner", ["الإعلان الرسمي", "النماذج", "الجدول"]],
];

export const resources: Resource[] = rows.map(([slug, title, description, category, type, previewSections]) => ({
  slug,
  title,
  description,
  category,
  type,
  free: true,
  language: "العربية",
  tags: [category, type],
  previewSections,
  cta: "عرض المورد",
})) as Resource[];

export const resourceCategories = Array.from(new Set(resources.map((resource) => resource.category)));
export const resourceTypes: ResourceType[] = ["checklist", "template", "guide", "planner"];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function resourceTypeLabel(type: ResourceType) {
  return {
    checklist: "قائمة فحص",
    template: "قالب",
    guide: "دليل",
    planner: "مخطط",
  }[type];
}
