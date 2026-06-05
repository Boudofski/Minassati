export type ArticleSection = { heading: string; body: string };
export type ArticleFaq = { q: string; a: string };
export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  seoTitle: string;
  seoDescription: string;
  sections: ArticleSection[];
  faqs?: ArticleFaq[];
  internalLinks: { label: string; href: string }[];
  featured?: boolean;
};

const articleRows = [
  ["ماذا أفعل بعد الباك في المغرب؟", "what-to-do-after-bac-morocco", "بعد الباك", "دليل مبسط لفهم اختيارات ما بعد الباك في المغرب دون تشتت أو قرارات متسرعة."],
  ["كيف أختار التخصص المناسب؟", "kaifa-akhtar-altakhasos-almonasib", "التوجيه", "طريقة عملية لمقارنة التخصصات حسب الميول، القدرات، المدينة، وسوق العمل."],
  ["الفرق بين الجامعة والمدرسة العليا", "alfarq-bayna-aljamiha-walmadrasa-alolya", "المدارس", "مقارنة هادئة بين الدراسة في الجامعة والمدارس العليا من حيث الأسلوب والانتقاء والمرونة."],
  ["هل التكوين المهني اختيار جيد؟", "hal-altakwin-almihani-ikhtiyar-jayyid", "المدارس", "متى يكون التكوين المهني اختياراً ذكياً؟ وكيف تقارنه بباقي المسارات؟"],
  ["كيف أكتب رسالة تحفيزية؟", "kaifa-aktob-risala-tahfiziya", "المنح", "خطوات كتابة رسالة تحفيزية واضحة وصادقة للدراسة أو المنح أو المباريات."],
  ["كيف أستعد لمباراة ولوج مدرسة؟", "kaifa-astahid-limobarat-woloj-madrasa", "النصائح", "خطة استعداد عملية تبدأ من قراءة الإعلان الرسمي وتنتهي بتنظيم المراجعة."],
  ["أفضل مهارات رقمية للطلبة", "afdal-maharat-raqmiya-liltolaba", "النصائح", "مهارات رقمية يمكن أن تدعم أي طالب: البرمجة، التسويق، التصميم، البيانات، والذكاء الاصطناعي."],
  ["كيف أختار مدينة الدراسة؟", "kaifa-akhtar-madinat-addirasa", "النصائح", "معايير اختيار مدينة الدراسة: السكن، النقل، القرب من العائلة، والفرص."],
  ["الدراسة في الخارج: من أين أبدأ؟", "addirasa-fi-alkharij-min-ayn-abda", "الدراسة بالخارج", "دليل بداية آمن للدراسة بالخارج دون وعود وهمية أو آجال غير مؤكدة."],
  ["أخطاء شائعة في اختيار التخصص", "akhtaa-shaia-fi-ikhtiyar-altakhasos", "التوجيه", "أخطاء يقع فيها كثير من الطلبة عند اختيار التخصص وكيف تتجنبها."],
  ["كيف أبني مشروعًا دراسيًا ومهنيًا؟", "kaifa-abni-mashroan-dirasi-wa-mihani", "التوجيه", "حوّل أفكارك إلى خطة سنة واحدة تربط الدراسة بالمهارات والتجربة."],
  ["كيف أتعرف على ميولي الدراسية؟", "kaifa-ataaraf-ala-moyoli-addirasiya", "الأسئلة", "الميول لا تظهر من اختبار واحد فقط؛ تعرف عليها عبر التجربة والملاحظة والأسئلة الصحيحة."],
];

function sectionsFor(title: string, category: string): ArticleSection[] {
  return [
    {
      heading: "الفكرة الأساسية",
      body: `موضوع "${title}" لا يحتاج قراراً سريعاً بقدر ما يحتاج معلومات منظمة. ابدأ بتحديد وضعك الحالي: مستوى الدراسة، المواد القوية، المدينة الممكنة، والوقت المتاح للبحث. بعد ذلك قارن بين اختيارين أو ثلاثة بدل محاولة فهم كل شيء دفعة واحدة.`,
    },
    {
      heading: "خطوات عملية",
      body: "اكتب الخيارات في جدول بسيط: ما الذي ستدرسه؟ أين؟ ما التكلفة؟ ما المهارات المطلوبة؟ وما الخطوة الرسمية التالية؟ إذا كان الأمر يتعلق بمؤسسة أو مباراة أو منحة، فارجع دائماً إلى الموقع الرسمي ولا تعتمد على منشورات قديمة أو غير موثقة.",
    },
    {
      heading: "كيف تتخذ قراراً أفضل؟",
      body: "اجمع بين ثلاثة مصادر: معلومات رسمية، تجربة طلبة سبقوك، وتجربة شخصية صغيرة مثل قراءة درس أو إنجاز مشروع مصغر. القرار الجيد لا يعني ضمان المستقبل، بل يعني أنك اخترت بناء على معايير واضحة وقابلة للمراجعة.",
    },
    {
      heading: "متى تطلب المساعدة؟",
      body: `إذا بقيت محتاراً في ${category} بعد البحث، اطلب رأي شخص موثوق: أستاذ، طالب في نفس المجال، مستشار توجيه، أو شخص يعمل في المهنة. المهم أن تسأل بأسئلة محددة حتى تحصل على جواب مفيد.`,
    },
  ];
}

export const articles: Article[] = articleRows.map(([title, slug, category, excerpt], index) => ({
  title,
  slug,
  excerpt,
  category,
  readingTime: "6 دقائق",
  publishedAt: "2026-06-05",
  updatedAt: "2026-06-05",
  seoTitle: `${title} - منصتي`,
  seoDescription: excerpt,
  featured: index === 0,
  sections: sectionsFor(title, category),
  faqs: [
    {
      q: "هل هذه المعلومات رسمية؟",
      a: "منصتي تقدم توجيهاً عاماً ومنهجية بحث. بالنسبة للشروط والآجال والوثائق، تحقق دائماً من الموقع الرسمي للمؤسسة أو الجهة المنظمة.",
    },
    {
      q: "هل أحتاج اختيار المسار بسرعة؟",
      a: "الأفضل أن تحدد موعداً للقرار، لكن لا تتسرع قبل جمع معلومات كافية ومقارنة الخيارات الأساسية.",
    },
  ],
  internalLinks: [
    { label: "المدارس المغربية", href: "/schools" },
    { label: "الفرص الأجنبية", href: "/opportunities" },
    { label: "ابدأ التقييم", href: "/guidance-request" },
    { label: "النصائح والأسئلة", href: "/faq" },
  ],
})) as Article[];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const article = getArticle(slug);
  if (!article) return articles.slice(0, limit);
  return articles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, limit);
}

export const articleCategories = [...new Set(articles.map((a) => a.category))];
