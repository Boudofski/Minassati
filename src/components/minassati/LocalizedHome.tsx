import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Download,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { CourseCard } from "@/components/minassati/CourseExplorer";
import { courses } from "@/data/courses";
import { learningPaths } from "@/data/learning-paths";
import { resources } from "@/data/resources";
import { localeDirections, type Locale } from "@/i18n/config";

// ─── Translations ─────────────────────────────────────────────────────────────

const t: Record<
  Locale,
  {
    heroEyebrow: string;
    heroHeadline: string;
    heroSubhead: string;
    heroNotice: string;
    heroCta1: string;
    heroCta2: string;
    heroCta3: string;
    heroStats: [string, string][];
    mockupPathLabel: string;
    mockupPathName: string;
    mockupNextStep: string;
    mockupNextLabel: string;
    conversionTitle: string;
    conversionSub: string;
    conversionCta: string;
    problemEyebrow: string;
    problemTitle: string;
    problems: { title: string; desc: string }[];
    solutionEyebrow: string;
    solutionTitle: string;
    pillars: { title: string; desc: string; link: string }[];
    coursesEyebrow: string;
    coursesTitle: string;
    coursesViewAll: string;
    pathsEyebrow: string;
    pathsTitle: string;
    pathsSteps: string;
    resourcesEyebrow: string;
    resourcesTitle: string;
    resourcesViewAll: string;
    quranEyebrow: string;
    quranTitle: string;
    quranText: string;
    quranCta: string;
    audioCta: string;
    instructorEyebrow: string;
    instructorTitle: string;
    instructorText: string;
    instructorCta: string;
    instructorBenefits: string[];
    finalTitle: string;
    finalSub: string;
    finalCta1: string;
    finalCta2: string;
    finalCta3: string;
  }
> = {
  ar: {
    heroEyebrow: "منصة مغربية للتعلم، الدورات، والموارد الرقمية",
    heroHeadline: "منصتي — تعلّم مهارات جديدة وابدأ رحلتك الرقمية بثقة",
    heroSubhead:
      "دورات ومسارات تعليمية في التسويق الرقمي، الذكاء الاصطناعي، العمل الحر، اللغات، ريادة الأعمال، والتعلم الإسلامي — مع محتوى مجاني وموارد عملية.",
    heroNotice: "",
    heroCta1: "استكشف الدورات",
    heroCta2: "تصفح الموارد",
    heroCta3: "قارئ القرآن →",
    heroStats: [
      ["29", "دورة"],
      ["10", "مسارات"],
      ["30+", "مورد"],
      ["114", "سورة"],
    ],
    mockupPathLabel: "مسار التعلم",
    mockupPathName: "مسار التسويق الرقمي",
    mockupNextStep: "الخطوة التالية",
    mockupNextLabel: "ابن خطة محتوى شهرية",
    conversionTitle: "الدفع غير مفعّل بعد — ساعدنا نحدد أول الدورات المدفوعة",
    conversionSub:
      "انضم لقائمة الاهتمام وسنرسل لك عند توفر النسخة التجريبية أو الاشتراك. لا نطلب أي بطاقة الآن.",
    conversionCta: "انضم لقائمة الانتظار",
    problemEyebrow: "المشكلة",
    problemTitle: "التعلّم العشوائي يضيع وقتك",
    problems: [
      { title: "يوتيوب متشتت بلا خارطة طريق", desc: "ساعات من الفيديوهات دون تقدم حقيقي أو مسار واضح للمهارة." },
      { title: "لا ترتيب ولا أولويات", desc: "تبدأ بمحاضرة وتنهيها بأخرى غير ذات صلة. لا يوجد نظام." },
      { title: "لا قوالب عملية قابلة للتطبيق", desc: "تفهم النظرية لكنك تقف أمام الورقة البيضاء بلا أدوات." },
      { title: "لا سياق مغربي", desc: "المحتوى الأجنبي لا يأخذ في الحسبان السوق والثقافة المحلية." },
      { title: "لا هيكل موثوق", desc: "كل شيء مبعثر بين منصات متعددة بلا مرجع واحد موثوق." },
    ],
    solutionEyebrow: "الحل",
    solutionTitle: "منصتي تنظّم لك الطريق",
    pillars: [
      { title: "دورات عملية", desc: "محتوى منظم خطوة بخطوة من مبتدئ لمحترف في كل مجال.", link: "/courses" },
      { title: "مسارات واضحة", desc: "خطط تعلم متكاملة تجمع الدورات والموارد في مسار واحد منطقي.", link: "/paths" },
      { title: "موارد قابلة للتحميل", desc: "قوالب وقوائم فحص وأدلة جاهزة للاستعمال الفوري.", link: "/resources" },
    ],
    coursesEyebrow: "الدورات",
    coursesTitle: "دورات مختارة للبدء",
    coursesViewAll: "شاهد كل الدورات",
    pathsEyebrow: "المسارات",
    pathsTitle: "مسارات واضحة بدل التشتت",
    pathsSteps: "مرحلة",
    resourcesEyebrow: "الموارد",
    resourcesTitle: "موارد مجانية تساعدك اليوم",
    resourcesViewAll: "تصفح كل الموارد",
    quranEyebrow: "قرآن مجاني",
    quranTitle: "القرآن الكريم دائمًا ضمن منصتي",
    quranText:
      "يبقى القرآن الكريم مورداً مجانياً ومحترماً داخل منصتي: قراءة 114 سورة، استماع أثناء القراءة، وترجمات إنجليزية وفرنسية وإسبانية حيث تتوفر.",
    quranCta: "افتح قارئ القرآن",
    audioCta: "استمع للتلاوات",
    instructorEyebrow: "للمدربين",
    instructorTitle: "هل لديك معرفة تريد بيعها؟",
    instructorText:
      "ستدعم منصتي المدربين وصناع المعرفة الذين يريدون نشر دورات وموارد ومسارات للجمهور المغربي والعربي، مع مراجعة جودة وتجربة بيع منظمة لاحقاً.",
    instructorCta: "انضم كمدرب",
    instructorBenefits: ["وصول لجمهور مغربي وعربي", "أدوات نشر وتتبع", "شهادات ومسارات موثوقة"],
    finalTitle: "ابدأ من دورة واحدة اليوم",
    finalSub: "المحتوى العملي، المسارات المنظمة، والموارد المجانية — كلها تنتظرك الآن.",
    finalCta1: "استكشف الدورات",
    finalCta2: "تصفح الموارد",
    finalCta3: "قارئ القرآن",
  },
  en: {
    heroEyebrow: "Moroccan learning marketplace",
    heroHeadline: "Minassati — learn practical digital skills and start your journey with confidence",
    heroSubhead:
      "Courses and learning paths in digital marketing, AI, freelancing, languages, entrepreneurship, and Islamic knowledge — with free content and actionable resources.",
    heroNotice:
      "Some detailed learning resources are currently Arabic-first while translations are being expanded.",
    heroCta1: "Explore courses",
    heroCta2: "Browse resources",
    heroCta3: "Quran reader →",
    heroStats: [
      ["29", "courses"],
      ["10", "paths"],
      ["30+", "resources"],
      ["114", "surahs"],
    ],
    mockupPathLabel: "Learning path",
    mockupPathName: "Digital marketing path",
    mockupNextStep: "Next step",
    mockupNextLabel: "Build a monthly content plan",
    conversionTitle: "Payments are not active yet — help us prioritize paid courses",
    conversionSub:
      "Join the interest list and we will notify you when beta access or subscriptions are ready. No card or payment is requested now.",
    conversionCta: "Join the waitlist",
    problemEyebrow: "The problem",
    problemTitle: "Random learning wastes your time",
    problems: [
      { title: "Scattered YouTube with no roadmap", desc: "Hours of videos without real progress or a clear skill path." },
      { title: "No structure or priorities", desc: "You start one lecture and finish an unrelated one. No system." },
      { title: "No actionable templates", desc: "You understand theory but face a blank page without tools." },
      { title: "No Moroccan context", desc: "Foreign content doesn't account for the local market and culture." },
      { title: "No trusted structure", desc: "Everything scattered across multiple platforms without one reliable reference." },
    ],
    solutionEyebrow: "The solution",
    solutionTitle: "Minassati organises your path",
    pillars: [
      { title: "Practical courses", desc: "Structured content step by step from beginner to professional in every field.", link: "/courses" },
      { title: "Clear learning paths", desc: "Complete learning plans combining courses and resources in one logical path.", link: "/paths" },
      { title: "Downloadable resources", desc: "Templates, checklists and guides ready for immediate use.", link: "/resources" },
    ],
    coursesEyebrow: "Courses",
    coursesTitle: "Featured courses to start with",
    coursesViewAll: "View all courses",
    pathsEyebrow: "Paths",
    pathsTitle: "Structured paths instead of scattered learning",
    pathsSteps: "steps",
    resourcesEyebrow: "Resources",
    resourcesTitle: "Free resources you can use today",
    resourcesViewAll: "Browse all resources",
    quranEyebrow: "Free Quran utility",
    quranTitle: "The Quran remains free inside Minassati",
    quranText:
      "Quran reading and listening remain a respectful free utility inside Minassati: read all 114 surahs, listen while reading, and access translations where available.",
    quranCta: "Open Quran reader",
    audioCta: "Listen to recitations",
    instructorEyebrow: "For instructors",
    instructorTitle: "Have knowledge you want to sell?",
    instructorText:
      "Minassati will support instructors and creators who want to publish courses, resources, and paths for Moroccan and Arabic-speaking audiences, with quality review and an organised sales experience later.",
    instructorCta: "Apply as instructor",
    instructorBenefits: ["Reach Moroccan and Arabic audiences", "Publishing and tracking tools", "Certified and trusted paths"],
    finalTitle: "Start with one course today",
    finalSub: "Practical content, structured paths, and free resources — all waiting for you now.",
    finalCta1: "Explore courses",
    finalCta2: "Browse resources",
    finalCta3: "Quran reader",
  },
  fr: {
    heroEyebrow: "Plateforme marocaine d'apprentissage",
    heroHeadline: "Minassati — apprenez des compétences digitales et démarrez votre parcours avec confiance",
    heroSubhead:
      "Cours et parcours en marketing digital, IA, freelance, langues, entrepreneuriat et savoir islamique — avec du contenu gratuit et des ressources applicables.",
    heroNotice:
      "Certaines ressources détaillées sont encore principalement en arabe pendant l'extension des traductions.",
    heroCta1: "Explorer les cours",
    heroCta2: "Voir les ressources",
    heroCta3: "Lecteur du Coran →",
    heroStats: [
      ["29", "cours"],
      ["10", "parcours"],
      ["30+", "ressources"],
      ["114", "sourates"],
    ],
    mockupPathLabel: "Parcours d'apprentissage",
    mockupPathName: "Parcours marketing digital",
    mockupNextStep: "Prochaine étape",
    mockupNextLabel: "Créer un plan de contenu mensuel",
    conversionTitle: "Les paiements ne sont pas encore actifs — aidez-nous à prioriser les cours payants",
    conversionSub:
      "Inscrivez votre intérêt et nous vous préviendrons quand la bêta ou l'abonnement sera prêt. Aucune carte n'est demandée.",
    conversionCta: "Rejoindre la liste",
    problemEyebrow: "Le problème",
    problemTitle: "L'apprentissage aléatoire gaspille votre temps",
    problems: [
      { title: "YouTube éparpillé sans feuille de route", desc: "Des heures de vidéos sans progrès réel ni chemin clair vers une compétence." },
      { title: "Pas de structure ni de priorités", desc: "Vous commencez une leçon et finissez une autre sans lien. Aucun système." },
      { title: "Pas de modèles pratiques applicables", desc: "Vous comprenez la théorie mais faites face à une page blanche sans outils." },
      { title: "Pas de contexte marocain", desc: "Le contenu étranger ne tient pas compte du marché et de la culture locale." },
      { title: "Pas de structure fiable", desc: "Tout dispersé sur plusieurs plateformes sans référence unique et fiable." },
    ],
    solutionEyebrow: "La solution",
    solutionTitle: "Minassati organise votre chemin",
    pillars: [
      { title: "Cours pratiques", desc: "Contenu structuré étape par étape du débutant au professionnel dans chaque domaine.", link: "/courses" },
      { title: "Parcours clairs", desc: "Plans d'apprentissage complets combinant cours et ressources en un parcours logique.", link: "/paths" },
      { title: "Ressources téléchargeables", desc: "Modèles, listes de contrôle et guides prêts à utiliser immédiatement.", link: "/resources" },
    ],
    coursesEyebrow: "Cours",
    coursesTitle: "Cours sélectionnés pour commencer",
    coursesViewAll: "Voir tous les cours",
    pathsEyebrow: "Parcours",
    pathsTitle: "Des parcours structurés plutôt que dispersés",
    pathsSteps: "étapes",
    resourcesEyebrow: "Ressources",
    resourcesTitle: "Ressources gratuites à utiliser aujourd'hui",
    resourcesViewAll: "Voir toutes les ressources",
    quranEyebrow: "Coran gratuit",
    quranTitle: "Le Coran reste gratuit dans Minassati",
    quranText:
      "La lecture et l'écoute du Coran restent un outil gratuit et respectueux dans Minassati : lisez les 114 sourates, écoutez pendant la lecture, et accédez aux traductions disponibles.",
    quranCta: "Ouvrir le lecteur",
    audioCta: "Écouter les récitations",
    instructorEyebrow: "Pour les formateurs",
    instructorTitle: "Vous avez une expertise à partager ?",
    instructorText:
      "Minassati accompagnera les formateurs et créateurs qui souhaitent publier des cours, ressources et parcours pour les publics marocains et arabophones, avec revue qualité et expérience de vente organisée.",
    instructorCta: "Devenir formateur",
    instructorBenefits: ["Atteindre un public marocain et arabophone", "Outils de publication et de suivi", "Parcours certifiés et fiables"],
    finalTitle: "Commencez par un cours aujourd'hui",
    finalSub: "Contenu pratique, parcours structurés et ressources gratuites — tout vous attend maintenant.",
    finalCta1: "Explorer les cours",
    finalCta2: "Voir les ressources",
    finalCta3: "Lecteur du Coran",
  },
  es: {
    heroEyebrow: "Marketplace marroquí de aprendizaje",
    heroHeadline: "Minassati — aprende habilidades digitales prácticas y empieza tu camino con confianza",
    heroSubhead:
      "Cursos y rutas de aprendizaje en marketing digital, IA, freelance, idiomas, emprendimiento y conocimiento islámico — con contenido gratuito y recursos aplicables.",
    heroNotice:
      "Algunos recursos detallados siguen estando primero en árabe mientras ampliamos las traducciones.",
    heroCta1: "Explorar cursos",
    heroCta2: "Ver recursos",
    heroCta3: "Lector del Corán →",
    heroStats: [
      ["29", "cursos"],
      ["10", "rutas"],
      ["30+", "recursos"],
      ["114", "suras"],
    ],
    mockupPathLabel: "Ruta de aprendizaje",
    mockupPathName: "Ruta de marketing digital",
    mockupNextStep: "Siguiente paso",
    mockupNextLabel: "Crear un plan de contenido mensual",
    conversionTitle: "Los pagos aún no están activos — ayúdanos a priorizar los cursos de pago",
    conversionSub:
      "Registra tu interés y te avisaremos cuando la beta o la suscripción estén listas. No pedimos tarjeta ni pago ahora.",
    conversionCta: "Unirse a la lista",
    problemEyebrow: "El problema",
    problemTitle: "El aprendizaje aleatorio desperdicia tu tiempo",
    problems: [
      { title: "YouTube disperso sin hoja de ruta", desc: "Horas de vídeos sin progreso real ni un camino claro hacia una habilidad." },
      { title: "Sin estructura ni prioridades", desc: "Empiezas una lección y terminas otra sin relación. Sin sistema." },
      { title: "Sin plantillas prácticas aplicables", desc: "Entiendes la teoría pero te enfrentas a una página en blanco sin herramientas." },
      { title: "Sin contexto marroquí", desc: "El contenido extranjero no tiene en cuenta el mercado y la cultura local." },
      { title: "Sin estructura fiable", desc: "Todo disperso en varias plataformas sin una referencia única y confiable." },
    ],
    solutionEyebrow: "La solución",
    solutionTitle: "Minassati organiza tu camino",
    pillars: [
      { title: "Cursos prácticos", desc: "Contenido estructurado paso a paso desde principiante hasta profesional en cada área.", link: "/courses" },
      { title: "Rutas claras", desc: "Planes de aprendizaje completos que combinan cursos y recursos en una ruta lógica.", link: "/paths" },
      { title: "Recursos descargables", desc: "Plantillas, listas de verificación y guías listas para uso inmediato.", link: "/resources" },
    ],
    coursesEyebrow: "Cursos",
    coursesTitle: "Cursos destacados para empezar",
    coursesViewAll: "Ver todos los cursos",
    pathsEyebrow: "Rutas",
    pathsTitle: "Rutas claras en lugar de aprendizaje disperso",
    pathsSteps: "pasos",
    resourcesEyebrow: "Recursos",
    resourcesTitle: "Recursos gratuitos para usar hoy",
    resourcesViewAll: "Ver todos los recursos",
    quranEyebrow: "Corán gratis",
    quranTitle: "El Corán sigue siendo gratuito en Minassati",
    quranText:
      "La lectura y el audio del Corán siguen siendo una utilidad gratuita y respetuosa dentro de Minassati: lee las 114 suras, escucha mientras lees y accede a traducciones disponibles.",
    quranCta: "Abrir lector del Corán",
    audioCta: "Escuchar recitaciones",
    instructorEyebrow: "Para instructores",
    instructorTitle: "¿Tienes conocimiento que quieres compartir?",
    instructorText:
      "Minassati apoyará a instructores y creadores que quieran publicar cursos, recursos y rutas para públicos marroquíes y arabófonos, con revisión de calidad y experiencia de venta organizada.",
    instructorCta: "Aplicar como instructor",
    instructorBenefits: ["Llegar a audiencias marroquíes y arabófonas", "Herramientas de publicación y seguimiento", "Rutas certificadas y confiables"],
    finalTitle: "Empieza con un curso hoy",
    finalSub: "Contenido práctico, rutas estructuradas y recursos gratuitos — todo te espera ahora.",
    finalCta1: "Explorar cursos",
    finalCta2: "Ver recursos",
    finalCta3: "Lector del Corán",
  },
};

// ─── Mockup card data ─────────────────────────────────────────────────────────

const mockupCards: Record<Locale, [string, string, string, string][]> = {
  ar: [
    ["🤖", "الذكاء الاصطناعي للأعمال", "badge-free", "مجاني"],
    ["📈", "التسويق الرقمي من الصفر", "badge-free", "مجاني"],
    ["📖", "قارئ القرآن", "badge-free", "114 سورة"],
    ["🎓", "صفحة مدرب", "badge-soon", "قريبًا"],
  ],
  en: [
    ["🤖", "AI for business", "badge-free", "Free"],
    ["📈", "Digital marketing", "badge-free", "Free"],
    ["📖", "Quran reader", "badge-free", "114 surahs"],
    ["🎓", "Instructor page", "badge-soon", "Soon"],
  ],
  fr: [
    ["🤖", "IA pour le business", "badge-free", "Gratuit"],
    ["📈", "Marketing digital", "badge-free", "Gratuit"],
    ["📖", "Lecteur du Coran", "badge-free", "114 sourates"],
    ["🎓", "Page formateur", "badge-soon", "Bientôt"],
  ],
  es: [
    ["🤖", "IA para negocios", "badge-free", "Gratis"],
    ["📈", "Marketing digital", "badge-free", "Gratis"],
    ["📖", "Lector del Corán", "badge-free", "114 suras"],
    ["🎓", "Página de instructor", "badge-soon", "Pronto"],
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────

export function LocalizedHome({ locale }: { locale: Locale }) {
  const copy = t[locale];
  const dir = localeDirections[locale];

  const featuredCourses = courses.filter((c) => c.featured).slice(0, 6);
  const featuredPaths = learningPaths.slice(0, 4);
  const freeResources = resources.filter((r) => r.free).slice(0, 8);
  const cards = mockupCards[locale];

  return (
    <div lang={locale} dir={dir} className="overflow-hidden">

      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="section-navy relative">
        {/* Geometric pattern */}
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full bg-teal-500/15 blur-[120px]" />

        <div className="page-shell relative grid min-h-[calc(100vh-5rem)] gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          {/* Left: copy */}
          <div className="min-w-0">
            <span className="eyebrow-pill">
              <Sparkles className="h-4 w-4 text-amber-300" />
              {copy.heroEyebrow}
            </span>

            <h1 className="mt-6 max-w-5xl break-words text-3xl font-black leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {copy.heroHeadline}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
              {copy.heroSubhead}
            </p>

            {locale !== "ar" && copy.heroNotice ? (
              <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-bold leading-7 text-slate-400">
                {copy.heroNotice}
              </p>
            ) : null}

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/courses" className="btn-primary bg-white text-slate-950 hover:bg-slate-100">
                {copy.heroCta1}
              </Link>
              <Link href="/resources" className="btn-ghost-white">
                {copy.heroCta2}
              </Link>
              <Link href="/quran" className="inline-flex items-center gap-1 px-4 py-3 text-sm font-black text-teal-300 hover:text-teal-200">
                {copy.heroCta3}
              </Link>
            </div>

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {copy.heroStats.map(([num, label]) => (
                <div key={label} className="card-dark rounded-2xl p-4 text-center">
                  <p className="text-2xl font-black text-white">{num}</p>
                  <p className="mt-1 text-xs font-bold text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur sm:p-4">
            <div className="rounded-2xl bg-white p-4 text-slate-950 sm:p-5">
              {/* Progress header */}
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-black text-blue-700">{copy.mockupPathLabel}</p>
                  <h2 className="mt-1 break-words text-lg font-black sm:text-xl">{copy.mockupPathName}</h2>
                </div>
                <span className="badge-free shrink-0">62%</span>
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400"
                  style={{ width: "62%" }}
                />
              </div>

              {/* Mini cards 2x2 */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {cards.map(([emoji, title, badgeClass, badgeLabel]) => (
                  <div key={title} className="rounded-xl border border-slate-100 p-3">
                    <span className="text-2xl leading-none">{emoji}</span>
                    <strong className="mt-2 block text-sm font-black leading-snug text-slate-900">{title}</strong>
                    <span className={`mt-2 ${badgeClass}`}>{badgeLabel}</span>
                  </div>
                ))}
              </div>

              {/* Next step panel */}
              <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-white">
                <p className="text-xs font-black text-teal-300">{copy.mockupNextStep}</p>
                <p className="mt-1 text-sm font-bold text-slate-200">{copy.mockupNextLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Conversion strip ─────────────────────────────────── */}
      <section className="section-light border-b border-slate-200">
        <div className="page-shell grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h2 className="text-base font-black text-slate-950 sm:text-lg">{copy.conversionTitle}</h2>
            <p className="mt-1 text-sm font-medium leading-6 text-slate-600">{copy.conversionSub}</p>
          </div>
          <Link
            href="/pricing#pricing-waitlist"
            className="btn-primary shrink-0 text-center"
          >
            {copy.conversionCta}
          </Link>
        </div>
      </section>

      {/* ── Section 3: Problem ──────────────────────────────────────────── */}
      <section className="section-soft section-space">
        <div className="page-shell">
          <div className="text-center">
            <span className="eyebrow-pill-light">
              {copy.problemEyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
              {copy.problemTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {copy.problems.map((p) => (
              <div key={p.title} className="card-premium p-6">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
                <h3 className="mt-3 text-base font-black text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Solution — 3 pillars ─────────────────────────────── */}
      <section className="section-navy section-space relative">
        <div className="pointer-events-none absolute inset-0 islamic-bg-white opacity-[0.025]" />
        <div className="page-shell relative">
          <div className="text-center">
            <span className="eyebrow-pill">
              <Zap className="h-4 w-4 text-teal-300" />
              {copy.solutionEyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              {copy.solutionTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {copy.pillars.map((pillar, i) => {
              const icons = [GraduationCap, Layers, Download];
              const Icon = icons[i] ?? GraduationCap;
              return (
                <Link key={pillar.link} href={pillar.link} className="card-dark group rounded-2xl p-7 transition hover:bg-white/10">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{pillar.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-black text-teal-300 group-hover:gap-2">
                    {pillar.title} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 5: Featured Courses ──────────────────────────────────── */}
      <section className="section-light section-space">
        <div className="page-shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow-pill-light">{copy.coursesEyebrow}</span>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{copy.coursesTitle}</h2>
            </div>
            <Link href="/courses" className="btn-secondary shrink-0">
              {copy.coursesViewAll}
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.slug} course={course} compact />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Learning Paths ────────────────────────────────────── */}
      <section className="section-soft section-space">
        <div className="page-shell">
          <div className="text-center">
            <span className="eyebrow-pill-light">{copy.pathsEyebrow}</span>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{copy.pathsTitle}</h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPaths.map((path) => (
              <Link key={path.slug} href={`/paths/${path.slug}`} className="card-premium p-6 flex flex-col">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <span className="badge-soon mt-3 self-start">
                  {path.steps.length} {copy.pathsSteps}
                </span>
                <h3 className="mt-3 text-lg font-black text-slate-950">{path.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{path.outcome}</p>
                <p className="mt-4 text-xs font-bold text-slate-400">{path.duration}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Resources ─────────────────────────────────────────── */}
      <section className="section-light section-space">
        <div className="page-shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow-pill-light">{copy.resourcesEyebrow}</span>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{copy.resourcesTitle}</h2>
            </div>
            <Link href="/resources" className="btn-secondary shrink-0">
              {copy.resourcesViewAll}
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {freeResources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="card-premium flex flex-col p-5"
              >
                <Download className="h-5 w-5 text-emerald-600" />
                <span className="badge-free mt-3 self-start">{resource.type ?? "resource"}</span>
                <h3 className="mt-3 font-black text-slate-950">{resource.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: Quran ─────────────────────────────────────────────── */}
      <section className="section-navy section-space relative">
        <div className="pointer-events-none absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/[0.1] px-4 py-2 text-sm font-black text-amber-300">
              <BookOpenCheck className="h-4 w-4" />
              {copy.quranEyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">{copy.quranTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-300">{copy.quranText}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/quran" className="btn-primary bg-white text-slate-950 hover:bg-slate-100">
                {copy.quranCta}
              </Link>
              <Link href="/audio" className="btn-ghost-white">
                {copy.audioCta}
              </Link>
            </div>
          </div>

          {/* Bismillah panel */}
          <div className="card-dark rounded-3xl p-8 text-center">
            <p className="quran-text text-4xl leading-[2.2] text-amber-100">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 9: Instructor CTA ────────────────────────────────────── */}
      <section className="section-soft section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          {/* Copy */}
          <div>
            <span className="eyebrow-pill-light">{copy.instructorEyebrow}</span>
            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
              {copy.instructorTitle}
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">{copy.instructorText}</p>
            <Link href="/instructors" className="btn-primary mt-8 inline-flex">
              {copy.instructorCta}
            </Link>
          </div>

          {/* Benefit cards */}
          <div className="flex flex-col gap-4">
            {copy.instructorBenefits.map((benefit, i) => {
              const icons = [Target, TrendingUp, GraduationCap];
              const Icon = icons[i] ?? Target;
              return (
                <div key={benefit} className="card-premium flex items-center gap-4 p-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="font-black text-slate-900">{benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 10: Final CTA ────────────────────────────────────────── */}
      <section className="section-soft section-space">
        <div className="page-shell">
          <div
            className="rounded-3xl bg-slate-950 p-10 text-center text-white shadow-[var(--shadow-navy)] sm:p-16"
          >
            <h2 className="text-3xl font-black sm:text-5xl">{copy.finalTitle}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-9 text-slate-300">{copy.finalSub}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/courses" className="btn-primary bg-white text-slate-950 hover:bg-slate-100">
                {copy.finalCta1}
              </Link>
              <Link href="/resources" className="btn-ghost-white">
                {copy.finalCta2}
              </Link>
              <Link href="/quran" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-black text-teal-300 hover:text-teal-200">
                {copy.finalCta3} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
