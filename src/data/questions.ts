import { lessons } from "./lessons";

export type Question = {
  slug: string;
  category: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string[];
  answer: string[];
  tags: string[];
  parentNote: string;
  related: string[];
  seoDescription: string;
};

const categoryNames: Record<string, string> = {
  aqeedah: "العقيدة",
  fiqh: "الفقه",
  seerah: "السيرة النبوية",
  akhlaq: "الأخلاق",
  quran: "القرآن الكريم",
  hadith: "الحديث النبوي",
  duaa: "الأدعية والأذكار",
  adab: "الآداب الإسلامية",
};

const categoryQuestionStarters: Record<string, string[]> = {
  aqeedah: ["كيف أشرح لطفلي", "ما أبسط طريقة لفهم", "كيف أربط الطفل بمعنى", "ما المثال المناسب لمعنى", "كيف أجعل درس"],
  fiqh: ["كيف أعلم طفلي", "ما الخطوة الأولى في", "كيف أحبب طفلي في", "ما الطريقة العملية لفهم", "كيف نطبق"],
  seerah: ["كيف أحكي لطفلي قصة", "ما الدرس التربوي من", "كيف نربط الطفل بموقف", "ما أجمل قيمة في", "كيف نحول قصة"],
  akhlaq: ["كيف أغرس خلق", "ماذا أفعل عندما ينسى الطفل", "كيف أشرح قيمة", "ما نشاط مناسب لخلق", "كيف نكافئ الطفل على"],
  quran: ["كيف يبدأ الطفل مع", "ما الطريقة الهادئة لحفظ", "كيف أجعل", "ما أفضل روتين لـ", "كيف أفهم طفلي معنى"],
  hadith: ["كيف أشرح حديث", "ما التطبيق العملي لحديث", "كيف يحفظ الطفل معنى", "ما نشاط مناسب لحديث", "كيف نربط السنة بـ"],
  duaa: ["كيف أحفظ طفلي", "متى نقول", "كيف يصبح", "ما نشاط مناسب لـ", "كيف أربط الدعاء بـ"],
  adab: ["كيف أعلم طفلي أدب", "ما قواعد", "كيف نطبق", "كيف أصحح خطأ الطفل في", "ما نشاط مناسب لـ"],
};

function buildQuestion(lessonSlug: string, index: number): Question {
  const lesson = lessons.find((item) => item.slug === lessonSlug) ?? lessons[index % lessons.length];
  const starters = categoryQuestionStarters[lesson.category];
  const starter = starters[index % starters.length];
  const category = categoryNames[lesson.category];
  const slug = `${lesson.slug}-question`;
  const question = `${starter} ${lesson.title}؟`;
  const shortAnswer = `ابدأ بمعنى واحد بسيط من الدرس، ثم اربطه بموقف يومي يراه الطفل ويستطيع تطبيقه.`;
  const detailedAnswer = [
    `لا يحتاج الطفل في عمر 6 إلى 12 سنة إلى تفصيل طويل في موضوع ${lesson.title}. يحتاج إلى جملة واضحة، مثال قريب، وتطبيق صغير يكرره مع الأسرة.`,
    `يمكنك أن تقول له: ${lesson.summary} ثم اسأله سؤالاً مفتوحاً مثل: كيف نطبق هذا اليوم؟ ماذا تشعر عندما نفعل ذلك؟`,
    `أفضل طريقة هي القدوة الهادئة. عندما يرى الطفل والديه يطبقان المعنى، يصبح الدرس جزءاً من الحياة لا مجرد كلام يسمعه.`,
  ];
  const related = lessons
    .filter((item) => item.category === lesson.category && item.slug !== lesson.slug)
    .slice(0, 3)
    .map((item) => `${item.slug}-question`);

  return {
    slug,
    category,
    question,
    shortAnswer,
    detailedAnswer,
    answer: detailedAnswer,
    tags: lesson.tags,
    parentNote: lesson.parentNote,
    related,
    seoDescription: `${question} إجابة تربوية مبسطة من منصتي للأطفال والأسر بأسلوب دافئ وواضح.`,
  };
}

const baseSlugs = lessons.map((lesson) => lesson.slug);

const extraQuestions: Question[] = [
  {
    slug: "daily-question-how-start",
    category: "التعلم العائلي",
    question: "كيف أبدأ مع طفلي إذا كان لا يحب الدروس الدينية؟",
    shortAnswer: "ابدأ بخمس دقائق ممتعة وقصة قصيرة دون اختبار أو ضغط.",
    detailedAnswer: [
      "ابدأ بما يحبه الطفل: قصة، سؤال، نشاط يدوي، أو تلاوة هادئة قبل النوم.",
      "تجنب تحويل التعلم إلى امتحان. الهدف الأول أن يشعر الطفل بالأمان والفضول.",
      "اختر موضوعاً واحداً في الأسبوع وطبقه في موقف حقيقي مثل الطعام أو اللعب أو النوم.",
    ],
    answer: [
      "ابدأ بما يحبه الطفل: قصة، سؤال، نشاط يدوي، أو تلاوة هادئة قبل النوم.",
      "تجنب تحويل التعلم إلى امتحان. الهدف الأول أن يشعر الطفل بالأمان والفضول.",
      "اختر موضوعاً واحداً في الأسبوع وطبقه في موقف حقيقي مثل الطعام أو اللعب أو النوم.",
    ],
    tags: ["أسرة", "تعلم", "بداية"],
    parentNote: "الاستمرار الهادئ أهم من الحماس الكبير في البداية.",
    related: ["what-is-iman-question", "start-learning-quran-question", "truthfulness-question"],
    seoDescription: "طريقة عملية لبدء التعليم الإسلامي مع الطفل بدون ضغط وبأسلوب عائلي دافئ.",
  },
  {
    slug: "daily-question-screen-balance",
    category: "التعلم العائلي",
    question: "كيف نوازن بين الشاشة والتعلم الإسلامي؟",
    shortAnswer: "اجعل الشاشة وسيلة قصيرة نافعة، ثم اربطها بنشاط حقيقي خارج الشاشة.",
    detailedAnswer: [
      "ليست المشكلة في الشاشة نفسها، بل في طول الوقت ونوع المحتوى وغياب التفاعل العائلي.",
      "استخدم محتوى قصيراً: آية، سؤال، قصة، ثم أغلق الشاشة وطبق المعنى في البيت.",
      "اتفقوا على وقت واضح ومحتوى معروف، واجعل الطفل يشارك في اختيار النشاط التالي.",
    ],
    answer: [
      "ليست المشكلة في الشاشة نفسها، بل في طول الوقت ونوع المحتوى وغياب التفاعل العائلي.",
      "استخدم محتوى قصيراً: آية، سؤال، قصة، ثم أغلق الشاشة وطبق المعنى في البيت.",
      "اتفقوا على وقت واضح ومحتوى معروف، واجعل الطفل يشارك في اختيار النشاط التالي.",
    ],
    tags: ["تقنية", "أسرة", "توازن"],
    parentNote: "البديل الجميل أقوى من المنع وحده.",
    related: ["screen-etiquette-question", "quran-in-home-question", "good-friendship-question"],
    seoDescription: "نصائح لتوازن وقت الشاشة مع التعلم الإسلامي للأطفال داخل الأسرة.",
  },
  {
    slug: "daily-question-parent-role",
    category: "التعلم العائلي",
    question: "ما دور ولي الأمر في منصتي؟",
    shortAnswer: "دور ولي الأمر أن يختار المسار، يحاور الطفل، ويحوّل الدرس إلى عادة.",
    detailedAnswer: [
      "منصتي تقدم محتوى منظماً، لكن أثره الحقيقي يظهر عندما يتحول إلى حوار بين الطفل ووالديه.",
      "اقرأ الدرس أولاً، ثم اختر منه سؤالاً ونشاطاً واحداً فقط.",
      "لا تجعل كل يوم درساً طويلاً؛ اجعل كل يوم معنى صغيراً يطبق بمحبة.",
    ],
    answer: [
      "منصتي تقدم محتوى منظماً، لكن أثره الحقيقي يظهر عندما يتحول إلى حوار بين الطفل ووالديه.",
      "اقرأ الدرس أولاً، ثم اختر منه سؤالاً ونشاطاً واحداً فقط.",
      "لا تجعل كل يوم درساً طويلاً؛ اجعل كل يوم معنى صغيراً يطبق بمحبة.",
    ],
    tags: ["ولي الأمر", "تربية", "منصتي"],
    parentNote: "وجودك العاطفي أهم من شرحك المثالي.",
    related: ["daily-question-how-start", "respecting-parents-question", "quran-in-home-question"],
    seoDescription: "شرح دور ولي الأمر في استخدام منصتي لتحويل التعلم الإسلامي إلى عادة أسرية.",
  },
];

export const questions: Question[] = [
  ...baseSlugs.map((slug, index) => buildQuestion(slug, index)),
  ...baseSlugs.map((slug, index) => {
    const base = buildQuestion(slug, index + 37);
    return {
      ...base,
      slug: `${slug}-practice-question`,
      question: `ما نشاط بسيط يساعد الطفل على تطبيق ${lessons[index].title}؟`,
      shortAnswer: lessons[index].activity,
      seoDescription: `نشاط عملي لتطبيق ${lessons[index].title} مع الطفل في البيت أو المدرسة.`,
      related: [`${slug}-question`, ...base.related.slice(0, 2)],
    };
  }).slice(0, 24),
  ...extraQuestions,
];

export const questionCategories = Array.from(new Set(questions.map((question) => question.category)));

export function getQuestion(slug: string) {
  return questions.find((question) => question.slug === slug);
}

export function getRelatedQuestions(slugs: string[]) {
  return questions.filter((question) => slugs.includes(question.slug));
}

export function getQuestionsByCategory(category: string) {
  return questions.filter((question) => question.category === category);
}

export function getFeaturedQuestions(count = 6): Question[] {
  return questions
    .filter((question) => ["what-is-iman-question", "why-do-we-pray-question", "character-of-prophet-question", "truthfulness-question", "start-learning-quran-question", "morning-adhkar-lesson-question"].includes(question.slug))
    .concat(questions)
    .filter((question, index, array) => array.findIndex((item) => item.slug === question.slug) === index)
    .slice(0, count);
}
