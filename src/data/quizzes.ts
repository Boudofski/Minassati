export type QuizChoice = {
  text: string;
  correct?: boolean;
  feedback: string;
};

export type QuizQuestion = {
  prompt: string;
  choices: QuizChoice[];
};

export type Quiz = {
  slug: string;
  title: string;
  category: string;
  ageRange: string;
  summary: string;
  questions: QuizQuestion[];
};

export const quizzes: Quiz[] = [
  {
    slug: "pillars-of-islam",
    title: "أركان الإسلام",
    category: "الفقه",
    ageRange: "6-10 سنوات",
    summary: "مراجعة خفيفة لأركان الإسلام الخمسة بطريقة سؤال وجواب.",
    questions: [
      {
        prompt: "كم عدد أركان الإسلام؟",
        choices: [
          { text: "ثلاثة", feedback: "قريب، لكن أركان الإسلام أكثر من ذلك." },
          { text: "خمسة", correct: true, feedback: "أحسنت. أركان الإسلام خمسة." },
          { text: "سبعة", feedback: "هذا عدد كبير. أركان الإسلام خمسة." },
        ],
      },
      {
        prompt: "أي ركن نؤديه خمس مرات في اليوم؟",
        choices: [
          { text: "الصلاة", correct: true, feedback: "صحيح. الصلاة صلة يومية بالله." },
          { text: "الحج", feedback: "الحج مرة في العمر لمن استطاع." },
          { text: "الزكاة", feedback: "الزكاة عبادة مال، وليست خمس مرات يومياً." },
        ],
      },
      {
        prompt: "في أي شهر نصوم؟",
        choices: [
          { text: "رمضان", correct: true, feedback: "نعم. رمضان شهر الصيام والقرآن." },
          { text: "شوال", feedback: "شوال يأتي بعد رمضان." },
          { text: "محرم", feedback: "محرم شهر عظيم، لكن الصيام المفروض في رمضان." },
        ],
      },
    ],
  },
  {
    slug: "meaning-of-iman",
    title: "معنى الإيمان",
    category: "العقيدة",
    ageRange: "7-12 سنة",
    summary: "اختبار قصير عن الإيمان وأركانه ومعناه العملي.",
    questions: [
      {
        prompt: "الإيمان يظهر في...",
        choices: [
          { text: "القلب فقط", feedback: "الإيمان في القلب، لكنه يظهر أيضاً في الكلام والعمل." },
          { text: "الكلام فقط", feedback: "الكلام مهم، لكن الإيمان أوسع." },
          { text: "القلب والكلام والعمل", correct: true, feedback: "صحيح. الإيمان معنى يعيش في القلب ويظهر في السلوك." },
        ],
      },
      {
        prompt: "من أركان الإيمان...",
        choices: [
          { text: "الإيمان بالملائكة", correct: true, feedback: "أحسنت. الإيمان بالملائكة من أركان الإيمان." },
          { text: "ترتيب الغرفة", feedback: "ترتيب الغرفة خلق جميل، لكنه ليس ركناً من أركان الإيمان." },
          { text: "الرياضة", feedback: "الرياضة مفيدة، لكنها ليست ركناً من أركان الإيمان." },
        ],
      },
      {
        prompt: "عندما أشكر الله على نعمة، فهذا يساعدني على...",
        choices: [
          { text: "الغفلة", feedback: "الشكر يبعدنا عن الغفلة." },
          { text: "زيادة الإيمان والمحبة", correct: true, feedback: "نعم. الشكر يقرّب القلب من الله." },
          { text: "نسيان النعمة", feedback: "الشكر يجعلنا نتذكر النعمة." },
        ],
      },
    ],
  },
  {
    slug: "wudu-steps",
    title: "الوضوء",
    category: "الفقه",
    ageRange: "6-10 سنوات",
    summary: "أسئلة عملية عن خطوات الوضوء والاستعداد للصلاة.",
    questions: [
      {
        prompt: "ماذا نقول في بداية الوضوء؟",
        choices: [
          { text: "بسم الله", correct: true, feedback: "صحيح. نبدأ الوضوء باسم الله." },
          { text: "السلام عليكم", feedback: "السلام تحية جميلة، لكن بداية الوضوء بالبسملة." },
          { text: "تصبح على خير", feedback: "هذه تقال قبل النوم، لا الوضوء." },
        ],
      },
      {
        prompt: "الوضوء يساعدنا على...",
        choices: [
          { text: "الاستعداد للصلاة", correct: true, feedback: "أحسنت. الوضوء طهارة واستعداد للصلاة." },
          { text: "نسيان الصلاة", feedback: "بل الوضوء يذكّرنا بالصلاة." },
          { text: "ترك النظافة", feedback: "الوضوء يعلمنا النظافة والطهارة." },
        ],
      },
      {
        prompt: "أي عضو نغسله في الوضوء؟",
        choices: [
          { text: "الوجه", correct: true, feedback: "نعم. غسل الوجه من خطوات الوضوء." },
          { text: "الحقيبة", feedback: "الحقيبة ليست من أعضاء الوضوء." },
          { text: "الكتاب", feedback: "الكتاب لا يُغسل في الوضوء." },
        ],
      },
    ],
  },
  {
    slug: "seerah-basics",
    title: "السيرة النبوية",
    category: "السيرة النبوية",
    ageRange: "8-12 سنة",
    summary: "مراجعة مواقف من حياة النبي ﷺ وقيمتها التربوية.",
    questions: [
      {
        prompt: "كان النبي ﷺ معروفاً قبل البعثة بـ...",
        choices: [
          { text: "الصادق الأمين", correct: true, feedback: "صحيح. الصدق والأمانة من أعظم صفاته ﷺ." },
          { text: "كثير الغضب", feedback: "النبي ﷺ كان حليماً رحيماً." },
          { text: "لا يساعد أحداً", feedback: "بل كان يساعد الناس ويرحمهم." },
        ],
      },
      {
        prompt: "الهجرة تعلمنا...",
        choices: [
          { text: "التوكل مع التخطيط", correct: true, feedback: "أحسنت. نعمل بالأسباب ونتوكل على الله." },
          { text: "ترك العمل", feedback: "الهجرة فيها تخطيط وعمل." },
          { text: "الخوف الدائم", feedback: "الهجرة تعلمنا الثقة بالله." },
        ],
      },
      {
        prompt: "من أخلاق النبي ﷺ مع الأطفال...",
        choices: [
          { text: "الرحمة واللطف", correct: true, feedback: "نعم. كان ﷺ رحيماً لطيفاً." },
          { text: "القسوة", feedback: "القسوة ليست من هديه ﷺ." },
          { text: "التجاهل دائماً", feedback: "كان ﷺ يهتم بالصغار ويلاطفهم." },
        ],
      },
    ],
  },
  {
    slug: "good-character",
    title: "الأخلاق",
    category: "الأخلاق",
    ageRange: "6-12 سنة",
    summary: "تحدي قصير عن الصدق والرحمة والشكر.",
    questions: [
      {
        prompt: "إذا أخطأت، فالخلق الجميل أن...",
        choices: [
          { text: "أكذب", feedback: "الكذب يزيد المشكلة." },
          { text: "أعترف وأصلح", correct: true, feedback: "هذا خلق جميل وشجاعة." },
          { text: "ألوم غيري", feedback: "الأفضل أن نتحمل مسؤوليتنا." },
        ],
      },
      {
        prompt: "الشكر يكون...",
        choices: [
          { text: "بالقلب واللسان والعمل", correct: true, feedback: "رائع. نشكر الله ونستخدم النعمة في الخير." },
          { text: "باللسان فقط", feedback: "اللسان مهم، والعمل أيضاً." },
          { text: "بعدم ذكر النعمة", feedback: "الشكر يعني تذكر النعمة." },
        ],
      },
      {
        prompt: "الرحمة بالحيوان تعني...",
        choices: [
          { text: "إيذاءه", feedback: "الإيذاء ليس رحمة." },
          { text: "الرفق به وعدم تخويفه", correct: true, feedback: "صحيح. الإسلام يعلمنا الرفق." },
          { text: "رمي الطعام عليه", feedback: "نطعمه بلطف وبطريقة آمنة." },
        ],
      },
    ],
  },
  {
    slug: "daily-adhkar",
    title: "الأذكار",
    category: "الأدعية والأذكار",
    ageRange: "6-12 سنة",
    summary: "اختبار صغير عن أذكار اليوم والطمأنينة.",
    questions: [
      {
        prompt: "قبل الطعام نقول...",
        choices: [
          { text: "بسم الله", correct: true, feedback: "صحيح. نبدأ الطعام باسم الله." },
          { text: "تصبح على خير", feedback: "هذه تقال عند النوم." },
          { text: "إلى اللقاء", feedback: "هذه للوداع، لا الطعام." },
        ],
      },
      {
        prompt: "قبل النوم نقول...",
        choices: [
          { text: "باسمك اللهم أموت وأحيا", correct: true, feedback: "أحسنت. هذا ذكر جميل قبل النوم." },
          { text: "هيا نلعب", feedback: "قبل النوم نهدأ ونذكر الله." },
          { text: "لا أريد النوم", feedback: "الذكر يساعدنا على الطمأنينة." },
        ],
      },
      {
        prompt: "الذكر يجعل القلب...",
        choices: [
          { text: "مطمئناً", correct: true, feedback: "نعم. بذكر الله تطمئن القلوب." },
          { text: "قلقاً دائماً", feedback: "الذكر يخفف القلق." },
          { text: "ينسى الله", feedback: "الذكر يربط القلب بالله." },
        ],
      },
    ],
  },
];

export function getQuiz(slug: string) {
  return quizzes.find((quiz) => quiz.slug === slug);
}
