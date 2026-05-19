export type PlatformValue = {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  textColor: string;
};

export const values: PlatformValue[] = [
  {
    id: "simple",
    title: "مبسّط ومنظَّم",
    description: "كل درس وسؤال مصمَّم بعناية ليكون واضحاً وسهل الفهم لأي طفل.",
    iconName: "Layers",
    color: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: "safe",
    title: "آمن وموثوق",
    description: "محتوى مراجَع، بدون روابط خارجية ضارة، آمن للأطفال في كل وقت.",
    iconName: "Shield",
    color: "bg-teal-50",
    textColor: "text-teal-600",
  },
  {
    id: "child-friendly",
    title: "مناسب للأطفال",
    description: "لغة بسيطة، أمثلة يومية، وأنشطة تفاعلية تناسب كل مرحلة عمرية.",
    iconName: "Heart",
    color: "bg-rose-50",
    textColor: "text-rose-600",
  },
  {
    id: "family-support",
    title: "يدعم الأسرة",
    description: "ملاحظات للآباء والمعلمين تساعدهم على تعزيز التعلم في البيت.",
    iconName: "Users",
    color: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    id: "free",
    title: "مجاني للجميع",
    description: "منصتي مجانية تماماً — لأن العلم حق لكل مسلم صغير وكبير.",
    iconName: "Gift",
    color: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    id: "educational",
    title: "علمي وصحيح",
    description: "محتوى يعتمد على المصادر الإسلامية الموثوقة بأسلوب ميسّر وصحيح.",
    iconName: "BookOpen",
    color: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    id: "interactive",
    title: "تفاعلي وممتع",
    description: "أنشطة عملية وأسئلة تفاعلية تجعل التعلم تجربة ممتعة لا عبئاً.",
    iconName: "Sparkles",
    color: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: "consistent",
    title: "منتظم ومستمر",
    description: "مسارات منظمة تساعد الطفل على التقدم خطوة بخطوة باستمرار.",
    iconName: "Calendar",
    color: "bg-teal-50",
    textColor: "text-teal-700",
  },
  {
    id: "beautiful",
    title: "جميل ومريح",
    description: "تصميم أنيق يُريح العين ويُشجّع الطفل والوالدين على استخدام المنصة بسعادة.",
    iconName: "Star",
    color: "bg-amber-50",
    textColor: "text-amber-700",
  },
  {
    id: "trusted",
    title: "موثوق ومُعتمَد",
    description: "تجربة يثق بها الآباء والمعلمون — محتوى نقي وهوية إسلامية واضحة.",
    iconName: "CheckCircle",
    color: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
];
