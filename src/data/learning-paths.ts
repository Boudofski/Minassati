import { courses } from "./courses";

export type LearningPath = {
  slug: string;
  title: string;
  description: string;
  category: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
  duration: string;
  outcome: string;
  steps: { title: string; description: string; duration: string }[];
  relatedCourses: string[];
  resources: string[];
  featured: boolean;
};

export const learningPaths: LearningPath[] = [
  {
    slug: "digital-marketing",
    title: "مسار التسويق الرقمي",
    description: "خطة عملية لفهم التسويق، المحتوى، الإعلانات، وقياس النتائج.",
    category: "التسويق الرقمي",
    level: "مبتدئ",
    duration: "6 أسابيع",
    outcome: "بناء خطة تسويق شهرية لمشروع أو خدمة.",
    relatedCourses: ["digital-marketing-from-zero", "facebook-instagram-ads-beginners", "short-form-content", "arabic-seo-basics"],
    resources: ["marketing-calendar", "campaign-brief-template", "seo-article-checklist"],
    featured: true,
    steps: [
      { title: "فهم الجمهور والعرض", description: "حدد من تخاطب وما القيمة التي تقدمها.", duration: "أسبوع" },
      { title: "بناء محتوى مستمر", description: "حوّل الرسائل إلى منشورات وفيديوهات قصيرة.", duration: "أسبوعان" },
      { title: "الإعلانات والقياس", description: "اختبر حملة صغيرة واقرأ مؤشرات الأداء.", duration: "أسبوعان" },
      { title: "خطة شهرية", description: "اجمع التعلم في تقويم تنفيذ واضح.", duration: "أسبوع" },
    ],
  },
  {
    slug: "ai-for-business",
    title: "مسار الذكاء الاصطناعي للأعمال",
    description: "استخدم AI في المحتوى، التحليل، الأتمتة، وخدمة العملاء.",
    category: "الذكاء الاصطناعي",
    level: "مبتدئ",
    duration: "5 أسابيع",
    outcome: "مكتبة أوامر وسير عمل AI قابلة للاستعمال في مشروع صغير.",
    relatedCourses: ["ai-for-business", "chatgpt-marketing-content", "no-code-business-automation", "customer-service-ai-assistant"],
    resources: ["business-prompt-pack", "customer-service-faq-template", "weekly-ai-workflow"],
    featured: true,
    steps: [
      { title: "أساسيات الأوامر", description: "تعلم كتابة سياق واضح ونتيجة محددة.", duration: "أسبوع" },
      { title: "المحتوى والتسويق", description: "طبق AI في المنشورات والرسائل.", duration: "أسبوع" },
      { title: "الأتمتة", description: "حدد مهاماً متكررة وحولها إلى workflow.", duration: "أسبوعان" },
      { title: "مساعد خدمة العملاء", description: "ابن FAQ وردوداً جاهزة.", duration: "أسبوع" },
    ],
  },
  {
    slug: "freelancing-from-morocco",
    title: "مسار العمل الحر من المغرب",
    description: "من اختيار الخدمة إلى التواصل مع العملاء وكتابة العروض.",
    category: "العمل الحر",
    level: "مبتدئ",
    duration: "7 أسابيع",
    outcome: "عرض خدمة وبورتفوليو وخطة بحث عن أول عميل.",
    relatedCourses: ["freelancing-from-morocco", "professional-portfolio", "client-communication", "pricing-proposals"],
    resources: ["freelance-proposal-template", "portfolio-case-study-template", "client-call-checklist"],
    featured: true,
    steps: [
      { title: "اختيار الخدمة", description: "اختر مهارة قابلة للبيع وعميل مستهدف.", duration: "أسبوع" },
      { title: "البورتفوليو", description: "جهز عينات عمل وصفحة تعريف.", duration: "أسبوعان" },
      { title: "التواصل والبيع", description: "اكتب رسائل وعروضاً واضحة.", duration: "أسبوعان" },
      { title: "التنفيذ والمتابعة", description: "نظم المشروع وتسليماته.", duration: "أسبوعان" },
    ],
  },
  {
    slug: "ecommerce",
    title: "مسار التجارة الإلكترونية",
    description: "تعلم إطلاق متجر صغير، عرض المنتج، التصوير، وخدمة العملاء.",
    category: "التجارة الإلكترونية",
    level: "مبتدئ",
    duration: "8 أسابيع",
    outcome: "صفحة بيع وتجربة طلب أولية قابلة للاختبار.",
    relatedCourses: ["ecommerce-launch-morocco", "online-selling-basics", "phone-product-photography", "small-store-customer-service"],
    resources: ["product-page-template", "order-tracking-sheet", "product-photo-checklist"],
    featured: true,
    steps: [
      { title: "اختيار المنتج", description: "قيم الطلب والهامش والمخاطر.", duration: "أسبوعان" },
      { title: "صفحة البيع", description: "ابن عرضاً واضحاً وصوراً مقنعة.", duration: "أسبوعان" },
      { title: "أول حملة", description: "اختبر إعلاناً صغيراً وقس الطلبات.", duration: "أسبوعان" },
      { title: "التشغيل", description: "نظم التأكيد والتوصيل والدعم.", duration: "أسبوعان" },
    ],
  },
  {
    slug: "content-creation",
    title: "مسار صناعة المحتوى",
    description: "من الفكرة إلى التقويم والسكريبت والنشر المنتظم.",
    category: "التصميم وصناعة المحتوى",
    level: "مبتدئ",
    duration: "5 أسابيع",
    outcome: "تقويم محتوى شهر كامل مع سكريبتات فيديو قصيرة.",
    relatedCourses: ["short-form-content", "short-video-scriptwriting", "chatgpt-marketing-content"],
    resources: ["content-calendar", "reels-script-template", "hook-bank"],
    featured: false,
    steps: [
      { title: "اختيار المحاور", description: "حدد 3 مواضيع رئيسية لجمهورك.", duration: "أسبوع" },
      { title: "كتابة السكريبت", description: "اكتب بداية قوية وقيمة مركزة.", duration: "أسبوع" },
      { title: "الإنتاج", description: "صور وعدل بالهاتف.", duration: "أسبوعان" },
      { title: "المراجعة", description: "قارن النتائج وعدل التقويم.", duration: "أسبوع" },
    ],
  },
  {
    slug: "quick-design",
    title: "مسار التصميم السريع",
    description: "تعلم Canva وقواعد تصميم منشورات وهوية بسيطة.",
    category: "التصميم وصناعة المحتوى",
    level: "مبتدئ",
    duration: "4 أسابيع",
    outcome: "قوالب منشورات وهوية بصرية مصغرة لمشروعك.",
    relatedCourses: ["canva-for-business", "professional-social-posts", "simple-brand-identity"],
    resources: ["brand-starter-kit", "social-post-checklist", "canva-business-template"],
    featured: false,
    steps: [
      { title: "أساسيات التصميم", description: "تعلم التباين والفراغ والتسلسل.", duration: "أسبوع" },
      { title: "قوالب Canva", description: "جهز مقاسات وقوالب أساسية.", duration: "أسبوع" },
      { title: "هوية مصغرة", description: "اختر الألوان والنبرة والخطوط.", duration: "أسبوع" },
      { title: "تطبيق عملي", description: "صمم سلسلة منشورات متناسقة.", duration: "أسبوع" },
    ],
  },
  {
    slug: "business-french",
    title: "مسار اللغة الفرنسية للعمل",
    description: "فرنسية عملية للبريد والمقابلات والاجتماعات.",
    category: "اللغات",
    level: "مبتدئ",
    duration: "6 أسابيع",
    outcome: "قدرة أفضل على التواصل في مواقف العمل اليومية.",
    relatedCourses: ["business-french"],
    resources: ["business-french-email-phrases", "interview-answer-planner", "work-vocabulary-sheet"],
    featured: false,
    steps: [
      { title: "عبارات أساسية", description: "تعلم التحية والتقديم والطلب.", duration: "أسبوع" },
      { title: "البريد والعمل", description: "اكتب رسائل مهنية قصيرة.", duration: "أسبوعان" },
      { title: "المقابلات", description: "جهز أجوبة شائعة بثقة.", duration: "أسبوعان" },
      { title: "مراجعة", description: "تدرب على مواقف حقيقية.", duration: "أسبوع" },
    ],
  },
  {
    slug: "english-for-freelancers",
    title: "مسار الإنجليزية للمستقلين",
    description: "إنجليزية الرسائل والعروض والتسليم للمستقلين.",
    category: "اللغات",
    level: "مبتدئ",
    duration: "5 أسابيع",
    outcome: "قوالب رسائل وعروض إنجليزية للتواصل مع العملاء.",
    relatedCourses: ["english-for-freelancers", "pricing-proposals"],
    resources: ["english-client-message-pack", "freelance-proposal-template", "project-delivery-email"],
    featured: false,
    steps: [
      { title: "التقديم", description: "اكتب من أنت وما خدمتك.", duration: "أسبوع" },
      { title: "العرض", description: "اشرح القيمة والنطاق والسعر.", duration: "أسبوعان" },
      { title: "المتابعة", description: "رد على الأسئلة والاعتراضات.", duration: "أسبوع" },
      { title: "التسليم", description: "اكتب رسالة تسليم وملاحظات.", duration: "أسبوع" },
    ],
  },
  {
    slug: "daily-quran",
    title: "مسار القرآن اليومي",
    description: "عادة قراءة واستماع يومية محترمة وبسيطة.",
    category: "القرآن والعلوم الإسلامية",
    level: "مبتدئ",
    duration: "30 يوماً",
    outcome: "ورد يومي ثابت باستخدام قارئ القرآن والصوتيات.",
    relatedCourses: ["quran-reading-plan", "tajweed-basics", "daily-adhkar"],
    resources: ["quran-reading-tracker", "daily-adhkar-card", "ramadan-reading-planner"],
    featured: true,
    steps: [
      { title: "اختيار الورد", description: "حدد مقداراً صغيراً مناسباً.", duration: "3 أيام" },
      { title: "القراءة", description: "استخدم فهرس السور والترجمة عند الحاجة.", duration: "أسبوعان" },
      { title: "الاستماع", description: "اربط القراءة بتلاوة هادئة.", duration: "أسبوع" },
      { title: "التثبيت", description: "راجع التقدم وخفف عند الانقطاع.", duration: "أسبوع" },
    ],
  },
  {
    slug: "productivity-self-development",
    title: "مسار تطوير الذات والإنتاجية",
    description: "نظم التعلم والعمل والأهداف الأسبوعية بدون تعقيد.",
    category: "تطوير الذات",
    level: "مبتدئ",
    duration: "4 أسابيع",
    outcome: "نظام أسبوعي بسيط للدراسة والعمل والتعلم.",
    relatedCourses: ["study-organization", "exam-preparation", "research-skills"],
    resources: ["weekly-planner", "learning-goals-sheet", "exam-revision-plan"],
    featured: false,
    steps: [
      { title: "الأهداف", description: "حول الرغبات إلى أهداف أسبوعية.", duration: "أسبوع" },
      { title: "الجدولة", description: "ابن جدولاً واقعياً مع فترات راحة.", duration: "أسبوع" },
      { title: "التركيز", description: "طبق جلسات عمل قصيرة وعميقة.", duration: "أسبوع" },
      { title: "المراجعة", description: "قيم الأسبوع وعدل الخطة.", duration: "أسبوع" },
    ],
  },
];

export function getLearningPath(slug: string) {
  return learningPaths.find((path) => path.slug === slug);
}

export function getPathCourses(path: LearningPath) {
  return path.relatedCourses.map((slug) => courses.find((course) => course.slug === slug)).filter(Boolean);
}
