import Link from "next/link";
import { ArrowLeft, BookOpenCheck, CheckCircle2, Download, GraduationCap, Layers, Mail, Sparkles, Users } from "lucide-react";
import { CourseCard } from "@/components/minassati/CourseExplorer";
import { Section } from "@/components/minassati/Section";
import { courses } from "@/data/courses";
import { learningPaths } from "@/data/learning-paths";
import { resources } from "@/data/resources";
import { localeDirections, type Locale } from "@/i18n/config";

const categories: Record<Locale, [string, string, string][]> = {
  ar: [
    ["الذكاء الاصطناعي", "أدوات عملية للأعمال والمحتوى والأتمتة.", "دورات وموارد"],
    ["التسويق الرقمي", "خطط محتوى وإعلانات وSEO للمشاريع.", "دورات وموارد"],
    ["العمل الحر", "بورتفوليو، عروض، تواصل، وتسعير.", "دورات وموارد"],
    ["التجارة الإلكترونية", "إطلاق متجر، بيع، تصوير، وخدمة عملاء.", "دورات وموارد"],
    ["ريادة الأعمال", "نماذج وأفكار لتطوير مشروع صغير.", "دورات وموارد"],
    ["التصميم وصناعة المحتوى", "Canva، منشورات، فيديوهات، وهوية بسيطة.", "دورات وموارد"],
    ["اللغات", "فرنسية وإنجليزية عملية للعمل والعمل الحر.", "دورات وموارد"],
    ["الدعم المدرسي", "تنظيم الدراسة والبحث والتحضير للامتحانات.", "دورات وموارد"],
    ["القرآن والعلوم الإسلامية", "قراءة واستماع وأذكار ومواد موثوقة.", "دورات وموارد"],
    ["تطوير الذات", "إنتاجية، أهداف، وعادات تعلم مستقرة.", "دورات وموارد"],
  ],
  en: [
    ["AI and automation", "Practical tools for business, content, and workflows.", "Courses and resources"],
    ["Digital marketing", "Content, ads, and SEO foundations for projects.", "Courses and resources"],
    ["Freelancing", "Portfolio, proposals, client work, and pricing.", "Courses and resources"],
    ["E-commerce", "Launch, selling, product photos, and support.", "Courses and resources"],
    ["Entrepreneurship", "Templates and ideas for small digital projects.", "Courses and resources"],
    ["Design and content", "Canva, posts, short video, and simple branding.", "Courses and resources"],
    ["Languages", "Practical French and English for work.", "Courses and resources"],
    ["School support", "Study planning, research, and exam preparation.", "Courses and resources"],
    ["Quran and Islamic knowledge", "Reading, listening, and trusted Islamic resources.", "Courses and resources"],
    ["Personal development", "Productivity, goals, and learning habits.", "Courses and resources"],
  ],
  fr: [
    ["IA et automatisation", "Outils pratiques pour business, contenu et workflows.", "Cours et ressources"],
    ["Marketing digital", "Contenu, publicité et SEO pour projets.", "Cours et ressources"],
    ["Freelance", "Portfolio, propositions, clients et tarification.", "Cours et ressources"],
    ["E-commerce", "Lancement, vente, photos produit et support.", "Cours et ressources"],
    ["Entrepreneuriat", "Modèles et idées pour projets digitaux.", "Cours et ressources"],
    ["Design et contenu", "Canva, posts, vidéo courte et branding simple.", "Cours et ressources"],
    ["Langues", "Français et anglais pratiques pour le travail.", "Cours et ressources"],
    ["Soutien scolaire", "Organisation, recherche et préparation examens.", "Cours et ressources"],
    ["Coran et savoir islamique", "Lecture, écoute et ressources islamiques fiables.", "Cours et ressources"],
    ["Développement personnel", "Productivité, objectifs et habitudes d'apprentissage.", "Cours et ressources"],
  ],
  es: [
    ["IA y automatización", "Herramientas prácticas para negocio, contenido y flujos.", "Cursos y recursos"],
    ["Marketing digital", "Contenido, anuncios y SEO para proyectos.", "Cursos y recursos"],
    ["Freelance", "Portafolio, propuestas, clientes y precios.", "Cursos y recursos"],
    ["E-commerce", "Lanzamiento, venta, fotos de producto y soporte.", "Cursos y recursos"],
    ["Emprendimiento", "Plantillas e ideas para proyectos digitales.", "Cursos y recursos"],
    ["Diseño y contenido", "Canva, posts, video corto y marca simple.", "Cursos y recursos"],
    ["Idiomas", "Francés e inglés prácticos para trabajo.", "Cursos y recursos"],
    ["Apoyo escolar", "Organización, investigación y preparación de exámenes.", "Cursos y recursos"],
    ["Corán y conocimiento islámico", "Lectura, audio y recursos islámicos fiables.", "Cursos y recursos"],
    ["Desarrollo personal", "Productividad, objetivos y hábitos de aprendizaje.", "Cursos y recursos"],
  ],
};

const trustPoints: Record<Locale, string[]> = {
  ar: ["محتوى عملي", "واجهة عربية وفرنسية وإنجليزية وإسبانية", "موارد قابلة للتطبيق", "قرآن مجاني", "تطوير مستمر", "مناسبة للمتعلمين والمدربين"],
  en: ["Practical content", "Multilingual core UI", "Actionable resources", "Free Quran utility", "Continuous improvement", "Built for learners and instructors"],
  fr: ["Contenu pratique", "Interface multilingue", "Ressources applicables", "Coran gratuit", "Amélioration continue", "Pour apprenants et formateurs"],
  es: ["Contenido práctico", "Interfaz multilingüe", "Recursos aplicables", "Corán gratuito", "Mejora continua", "Para estudiantes e instructores"],
};
const localizedNotice: Record<Locale, string> = {
  ar: "بعض المحتوى التفصيلي لا يزال بالعربية ضمن خطة الترجمة المرحلية.",
  en: "Some detailed learning resources are currently Arabic-first while translations are being expanded.",
  fr: "Certaines ressources détaillées sont encore principalement en arabe pendant l’extension des traductions.",
  es: "Algunos recursos detallados siguen estando primero en árabe mientras ampliamos las traducciones.",
};

const homeCopy: Record<Locale, {
  eyebrow: string;
  headline: string;
  subhead: string;
  courses: string;
  paths: string;
  waitlist: string;
  noticeTitle: string;
  noticeText: string;
  noticeCta: string;
  categoriesTitle: string;
  coursesTitle: string;
  allCourses: string;
  pricing: string;
  pathsTitle: string;
  resourcesTitle: string;
  quranEyebrow: string;
  quranTitle: string;
  quranText: string;
  quranCta: string;
  audioCta: string;
  instructorTitle: string;
  instructorText: string;
  instructorCta: string;
  pricingTitle: string;
  pricingNote: string;
  trustTitle: string;
  finalTitle: string;
  resourcesCta: string;
  stats: string[];
  mockupLabel: string;
  mockupPath: string;
  mockupCards: [string, string, string][];
  growthTitle: string;
  growthText: string;
  planCards: string[];
}> = {
  ar: {
    eyebrow: "منصة مغربية للتعلم، الدورات، والموارد الرقمية",
    headline: "منصتي — تعلّم مهارات جديدة وابدأ رحلتك الرقمية بثقة",
    subhead: "اكتشف دورات ومسارات تعليمية في التسويق الرقمي، الذكاء الاصطناعي، العمل الحر، اللغات، ريادة الأعمال، والتعلم الإسلامي — مع محتوى مجاني وموارد عملية تساعدك على التطور خطوة بخطوة.",
    courses: "استكشف الدورات",
    paths: "تصفح المسارات",
    waitlist: "انضم لقائمة الانتظار",
    noticeTitle: "الدفع غير مفعّل بعد. ساعدنا نحدد أول الدورات المدفوعة.",
    noticeText: "انضم لقائمة الاهتمام وسنرسل لك عند توفر النسخة التجريبية أو الاشتراك. لا نطلب أي بطاقة أو دفع حالياً.",
    noticeCta: "أرسل اهتمامك",
    categoriesTitle: "تعلّم ما تحتاجه لحياتك وعملك",
    coursesTitle: "دورات مختارة للبدء",
    allCourses: "شاهد كل الدورات",
    pricing: "كيف ستعمل الاشتراكات؟",
    pathsTitle: "مسارات واضحة بدل التشتت",
    resourcesTitle: "موارد مجانية تساعدك اليوم",
    quranEyebrow: "قرآن مجاني",
    quranTitle: "القرآن الكريم دائمًا ضمن منصتي",
    quranText: "يبقى القرآن الكريم مورداً مجانياً ومحترماً داخل منصتي: قراءة 114 سورة، استماع أثناء القراءة، وترجمات إنجليزية وفرنسية وإسبانية حيث تتوفر. هو جزء من مواردنا الإسلامية المجانية وليس هوية الموقع الوحيدة.",
    quranCta: "افتح قارئ القرآن",
    audioCta: "استمع للتلاوات",
    instructorTitle: "هل لديك معرفة تريد بيعها؟",
    instructorText: "ستدعم منصتي المدربين وصناع المعرفة الذين يريدون نشر دورات وموارد ومسارات للجمهور المغربي والعربي، مع مراجعة جودة وتجربة بيع منظمة لاحقاً.",
    instructorCta: "انضم كمدرب",
    pricingTitle: "تعلم مجاني، واشتراك للمحتوى المتقدم",
    pricingNote: "الدفع والاشتراكات قيد التحضير.",
    trustTitle: "منصة مغربية بمعايير احترافية",
    finalTitle: "ابدأ من دورة واحدة اليوم",
    resourcesCta: "تصفح الموارد",
    stats: ["دورات ومسارات عملية", "محتوى مجاني ومدفوع", "موارد قابلة للتحميل", "قرآن واستماع مجاني"],
    mockupLabel: "لوحة تعلم",
    mockupPath: "مسار التسويق الرقمي",
    mockupCards: [["AI", "الذكاء الاصطناعي للأعمال", "مجاني"], ["MKT", "التسويق الرقمي من الصفر", "مجاني"], ["QUR", "قارئ القرآن", "114 سورة"], ["INS", "صفحة مدرب", "قريبًا"]],
    growthTitle: "منصة قابلة للنمو",
    growthText: "دورات وموارد واشتراكات قيد التحضير، مع القرآن كأداة مجانية موثوقة لا كهوية وحيدة للمنصة.",
    planCards: ["مجاني: مقالات، موارد، بعض الدورات، القرآن", "Pro: دورات متقدمة وموارد قابلة للتحميل - قريبًا", "Instructor: نشر وبيع الدورات والموارد - قريبًا"],
  },
  en: {
    eyebrow: "Moroccan learning marketplace",
    headline: "Minassati helps you learn practical digital skills with confidence",
    subhead: "Explore Arabic-first courses, learning paths, resources, articles, and Quran tools for Moroccan learners, professionals, freelancers, and future instructors.",
    courses: "Explore courses",
    paths: "Browse paths",
    waitlist: "Join the waitlist",
    noticeTitle: "Payments are not active yet. Help us prioritize paid courses.",
    noticeText: "Join the interest list and we will notify you when beta access or subscriptions are ready. No card or payment is requested now.",
    noticeCta: "Send interest",
    categoriesTitle: "Learn skills for work, study, and business",
    coursesTitle: "Featured courses to start with",
    allCourses: "View all courses",
    pricing: "How subscriptions will work",
    pathsTitle: "Structured paths instead of scattered learning",
    resourcesTitle: "Free resources you can use today",
    quranEyebrow: "Free Quran utility",
    quranTitle: "The Quran remains free inside Minassati",
    quranText: "Quran reading and listening remain a respectful free utility inside Minassati. It supports trust and SEO, but it is not the whole brand.",
    quranCta: "Open Quran reader",
    audioCta: "Listen to recitations",
    instructorTitle: "Have knowledge you want to sell?",
    instructorText: "Minassati will support instructors and creators who want to publish courses, resources, and paths for Moroccan and Arabic-speaking audiences.",
    instructorCta: "Apply as instructor",
    pricingTitle: "Free learning now, premium content later",
    pricingNote: "Payments and subscriptions are being prepared.",
    trustTitle: "A Moroccan platform with professional standards",
    finalTitle: "Start with one course today",
    resourcesCta: "Browse resources",
    stats: ["Practical courses and paths", "Free and paid-soon content", "Downloadable resources planned", "Free Quran reading and audio"],
    mockupLabel: "Learning dashboard",
    mockupPath: "Digital marketing path",
    mockupCards: [["AI", "AI for business", "Free"], ["MKT", "Digital marketing from zero", "Free"], ["QUR", "Quran reader", "114 surahs"], ["INS", "Instructor page", "Soon"]],
    growthTitle: "Built to grow",
    growthText: "Courses, resources, and subscriptions are being prepared, while Quran remains a free trusted utility rather than the whole brand.",
    planCards: ["Free: articles, resources, selected courses, Quran", "Pro: advanced courses and downloadable resources - soon", "Instructor: publish courses and resources - soon"],
  },
  fr: {
    eyebrow: "Plateforme marocaine d'apprentissage",
    headline: "Minassati vous aide à apprendre des compétences digitales utiles",
    subhead: "Découvrez des cours, parcours, ressources, articles et outils Coran en priorité arabe, pour apprenants marocains, professionnels, freelances et futurs formateurs.",
    courses: "Explorer les cours",
    paths: "Voir les parcours",
    waitlist: "Rejoindre la liste",
    noticeTitle: "Le paiement n'est pas encore activé. Aidez-nous à prioriser les cours.",
    noticeText: "Inscrivez votre intérêt et nous vous préviendrons quand la bêta ou l'abonnement sera prêt. Aucune carte n'est demandée.",
    noticeCta: "Envoyer l'intérêt",
    categoriesTitle: "Apprenez des compétences utiles pour le travail et les projets",
    coursesTitle: "Cours sélectionnés pour commencer",
    allCourses: "Voir tous les cours",
    pricing: "Fonctionnement des abonnements",
    pathsTitle: "Des parcours structurés plutôt que dispersés",
    resourcesTitle: "Ressources gratuites à utiliser aujourd'hui",
    quranEyebrow: "Coran gratuit",
    quranTitle: "Le Coran reste gratuit dans Minassati",
    quranText: "La lecture et l'écoute du Coran restent un outil gratuit et respectueux dans Minassati. Il renforce la confiance sans devenir toute l'identité de la plateforme.",
    quranCta: "Ouvrir le lecteur",
    audioCta: "Écouter",
    instructorTitle: "Vous avez une expertise à vendre ?",
    instructorText: "Minassati accompagnera les formateurs et créateurs qui souhaitent publier des cours, ressources et parcours pour les publics marocains et arabophones.",
    instructorCta: "Devenir formateur",
    pricingTitle: "Gratuit maintenant, premium plus tard",
    pricingNote: "Les paiements et abonnements sont en préparation.",
    trustTitle: "Une plateforme marocaine avec des standards professionnels",
    finalTitle: "Commencez par un cours aujourd'hui",
    resourcesCta: "Voir les ressources",
    stats: ["Cours et parcours pratiques", "Contenu gratuit et payant bientôt", "Ressources téléchargeables prévues", "Coran et audio gratuits"],
    mockupLabel: "Tableau d'apprentissage",
    mockupPath: "Parcours marketing digital",
    mockupCards: [["AI", "IA pour le business", "Gratuit"], ["MKT", "Marketing digital de zéro", "Gratuit"], ["QUR", "Lecteur du Coran", "114 sourates"], ["INS", "Page formateur", "Bientôt"]],
    growthTitle: "Conçu pour grandir",
    growthText: "Cours, ressources et abonnements sont en préparation, avec le Coran comme outil gratuit fiable et non comme toute l'identité.",
    planCards: ["Gratuit : articles, ressources, cours sélectionnés, Coran", "Pro : cours avancés et ressources téléchargeables - bientôt", "Instructor : publier cours et ressources - bientôt"],
  },
  es: {
    eyebrow: "Marketplace marroquí de aprendizaje",
    headline: "Minassati te ayuda a aprender habilidades digitales útiles",
    subhead: "Explora cursos, rutas, recursos, artículos y herramientas del Corán en una experiencia árabe primero para estudiantes, profesionales, freelancers e instructores.",
    courses: "Explorar cursos",
    paths: "Ver rutas",
    waitlist: "Unirse a la lista",
    noticeTitle: "Los pagos aún no están activos. Ayúdanos a priorizar cursos.",
    noticeText: "Registra tu interés y te avisaremos cuando la beta o la suscripción esté lista. No pedimos tarjeta ni pago ahora.",
    noticeCta: "Enviar interés",
    categoriesTitle: "Aprende habilidades para trabajo, estudio y negocios",
    coursesTitle: "Cursos destacados para empezar",
    allCourses: "Ver todos los cursos",
    pricing: "Cómo funcionarán las suscripciones",
    pathsTitle: "Rutas claras en lugar de aprendizaje disperso",
    resourcesTitle: "Recursos gratuitos para usar hoy",
    quranEyebrow: "Corán gratis",
    quranTitle: "El Corán sigue siendo gratuito en Minassati",
    quranText: "La lectura y el audio del Corán siguen siendo una utilidad gratuita y respetuosa dentro de Minassati. Aporta confianza sin ser toda la identidad de la marca.",
    quranCta: "Abrir lector",
    audioCta: "Escuchar",
    instructorTitle: "¿Tienes conocimiento para vender?",
    instructorText: "Minassati apoyará a instructores y creadores que quieran publicar cursos, recursos y rutas para públicos marroquíes y arabófonos.",
    instructorCta: "Aplicar como instructor",
    pricingTitle: "Aprendizaje gratis ahora, premium después",
    pricingNote: "Los pagos y suscripciones están en preparación.",
    trustTitle: "Una plataforma marroquí con estándares profesionales",
    finalTitle: "Empieza con un curso hoy",
    resourcesCta: "Ver recursos",
    stats: ["Cursos y rutas prácticas", "Contenido gratis y de pago pronto", "Recursos descargables previstos", "Corán y audio gratis"],
    mockupLabel: "Panel de aprendizaje",
    mockupPath: "Ruta de marketing digital",
    mockupCards: [["AI", "IA para negocios", "Gratis"], ["MKT", "Marketing digital desde cero", "Gratis"], ["QUR", "Lector del Corán", "114 suras"], ["INS", "Página de instructor", "Pronto"]],
    growthTitle: "Preparado para crecer",
    growthText: "Cursos, recursos y suscripciones están en preparación, con el Corán como utilidad gratuita fiable y no como toda la identidad.",
    planCards: ["Gratis: artículos, recursos, cursos seleccionados, Corán", "Pro: cursos avanzados y recursos descargables - pronto", "Instructor: publicar cursos y recursos - pronto"],
  },
};

export function LocalizedHome({ locale }: { locale: Locale }) {
  const featuredCourses = courses.filter((course) => course.featured).slice(0, 6);
  const featuredPaths = learningPaths.filter((path) => path.featured).slice(0, 6);
  const freeResources = resources.filter((resource) => resource.free).slice(0, 7);
  const dir = localeDirections[locale];
  const t = homeCopy[locale];

  return (
    <div lang={locale} dir={dir} className="overflow-hidden bg-[#F7FAFC]">
      <section className="relative bg-slate-950 text-white">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.05]" />
        <div className="page-shell relative grid min-h-[calc(100vh-5rem)] min-w-0 gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-black text-teal-200">
              <Sparkles className="h-4 w-4 text-amber-300" /> {t.eyebrow}
            </p>
            <h1 className="mt-6 max-w-5xl break-words text-3xl font-black leading-tight sm:text-6xl lg:text-7xl">{t.headline}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
              {t.subhead}
            </p>
            {locale !== "ar" ? <p className="mt-4 rounded-2xl border border-white/10 bg-white/6 p-4 text-sm font-bold leading-7 text-slate-300">{localizedNotice[locale]}</p> : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses" className="cta-home-courses rounded-full bg-white px-7 py-4 text-center text-base font-black text-slate-950" data-cta-id="home-hero-courses">{t.courses}</Link>
              <Link href="/paths" className="cta-home-paths rounded-full border border-white/20 px-7 py-4 text-center text-base font-black text-white hover:bg-white/10" data-cta-id="home-hero-paths">{t.paths}</Link>
              <Link href="mailto:contact@minassati.ma?subject=قائمة انتظار منصتي" className="cta-home-waitlist rounded-full px-7 py-4 text-center text-base font-black text-teal-200 hover:bg-white/10" data-cta-id="home-hero-waitlist">{t.waitlist}</Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.stats.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm font-black text-slate-200">{item}</div>
              ))}
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-3 shadow-2xl shadow-blue-950/30 backdrop-blur sm:p-4">
            <div className="min-w-0 rounded-2xl bg-white p-4 text-slate-950 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-black text-blue-700">{t.mockupLabel}</p>
                  <h2 className="mt-1 break-words text-xl font-black sm:text-2xl">{t.mockupPath}</h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">62%</span>
              </div>
              <div className="mt-5 h-3 rounded-full bg-slate-100"><div className="h-3 w-[62%] rounded-full bg-blue-600" /></div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {t.mockupCards.map(([icon, title, meta]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-xs font-black text-white">{icon}</span>
                    <strong className="mt-3 block text-sm leading-6">{title}</strong>
                    <span className="mt-2 block text-xs font-bold text-slate-500">{meta}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm font-black text-amber-300">{t.growthTitle}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{t.growthText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="page-shell grid gap-4 py-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-xl font-black text-slate-950">{t.noticeTitle}</h2>
            <p className="mt-1 text-sm font-bold leading-7 text-slate-600">{t.noticeText}</p>
          </div>
          <Link href="mailto:contact@minassati.ma?subject=اهتمام بمنصتي&body=السلام عليكم،%0A%0Aأريد الانضمام لقائمة الاهتمام بمنصتي.%0Aالمجال الذي يهمني:%0A" className="cta-home-interest inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white" data-cta-id="home-interest-strip">
            <Mail className="h-4 w-4" /> {t.noticeCta}
          </Link>
        </div>
      </section>

      <Section eyebrow={locale === "ar" ? "التصنيفات" : "Categories"} title={t.categoriesTitle} centered={false}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories[locale].map(([title, description, cta]) => (
            <Link key={title} href={`/courses?category=${encodeURIComponent(title)}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
              <h3 className="text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              <span className="mt-4 inline-flex text-xs font-black text-blue-700">{cta}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50" eyebrow={locale === "ar" ? "الدورات" : "Courses"} title={t.coursesTitle} centered={false}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => <CourseCard key={course.slug} course={course} compact />)}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/courses" className="cta-home-all-courses rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-black text-white" data-cta-id="home-featured-all-courses">{t.allCourses}</Link>
          <Link href="/pricing" className="cta-home-pricing rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-black text-slate-800" data-cta-id="home-featured-pricing">{t.pricing}</Link>
        </div>
      </Section>

      <Section eyebrow={locale === "ar" ? "المسارات" : "Paths"} title={t.pathsTitle} centered={false}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredPaths.map((path) => (
            <Link key={path.slug} href={`/paths/${path.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
              <Layers className="h-7 w-7 text-blue-600" />
              <h3 className="mt-4 text-xl font-black text-slate-950">{path.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{path.outcome}</p>
              <div className="mt-4 flex gap-2 text-xs font-bold text-slate-500">
                <span>{path.steps.length} مراحل</span><span>•</span><span>{path.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-white" eyebrow={locale === "ar" ? "الموارد" : "Resources"} title={t.resourcesTitle} centered={false}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {freeResources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-200">
              <Download className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-3 font-black text-slate-950">{resource.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{resource.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow={t.quranEyebrow} title={t.quranTitle} centered={false}>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="max-w-3xl text-lg leading-9 text-slate-300">
              {t.quranText}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/quran" className="rounded-full bg-white px-7 py-3 text-center text-sm font-black text-slate-950">{t.quranCta}</Link>
              <Link href="/audio" className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-black text-white">{t.audioCta}</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/6 p-6">
            <BookOpenCheck className="h-10 w-10 text-amber-300" />
            <p className="quran-text mt-5 text-center text-4xl leading-[2]">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          </div>
        </div>
      </Section>

      <Section eyebrow={locale === "ar" ? "للمدربين" : "Instructors"} title={t.instructorTitle} centered={false}>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <p className="text-lg leading-9 text-slate-600">{t.instructorText}</p>
          <Link href="/instructors" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white">
            <Users className="h-4 w-4" /> {t.instructorCta}
          </Link>
        </div>
      </Section>

      <Section className="bg-slate-50" eyebrow={locale === "ar" ? "الاشتراك" : "Pricing"} title={t.pricingTitle} centered={false}>
        <div className="grid gap-5 md:grid-cols-3">
          {t.planCards.map((plan) => (
            <div key={plan} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <GraduationCap className="h-7 w-7 text-blue-600" />
              <p className="mt-4 text-lg font-black leading-8 text-slate-950">{plan}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm font-bold text-slate-500">{t.pricingNote}</p>
      </Section>

      <Section eyebrow={locale === "ar" ? "الثقة" : "Trust"} title={t.trustTitle} centered={false}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints[locale].map((point) => (
            <div key={point} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span className="font-black text-slate-800">{point}</span>
            </div>
          ))}
        </div>
      </Section>

      <section className="page-shell pb-16">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white shadow-navy-glow sm:p-12">
          <h2 className="text-3xl font-black sm:text-5xl">{t.finalTitle}</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/courses" className="rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950">{t.courses}</Link>
            <Link href="/resources" className="rounded-full border border-white/20 px-7 py-4 text-sm font-black text-white">{t.resourcesCta}</Link>
            <Link href="/quran" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-black text-teal-200">{t.quranCta} <ArrowLeft className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
