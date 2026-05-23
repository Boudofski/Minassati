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
import { resources, resourceTypeLabel } from "@/data/resources";
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

// ─── Dashboard mockup data ────────────────────────────────────────────────────

type MockupDashboard = {
  courses: { dot: string; title: string; free: boolean }[];
  resourceTitle: string;
  resourceType: string;
  freeBadge: string;
  soonBadge: string;
  waitlist: string;
  bismillahTranslation: string;
};

const mockupDashboard: Record<Locale, MockupDashboard> = {
  ar: {
    courses: [
      { dot: "bg-purple-500", title: "الذكاء الاصطناعي للأعمال", free: true },
      { dot: "bg-blue-500", title: "التسويق الرقمي من الصفر", free: true },
      { dot: "bg-emerald-500", title: "العمل الحر من المغرب", free: false },
    ],
    resourceTitle: "تقويم تسويق شهري",
    resourceType: "قالب مجاني",
    freeBadge: "مجاني",
    soonBadge: "قريبًا",
    waitlist: "١٢ شخصاً في قائمة الانتظار",
    bismillahTranslation: "بسم الله الرحمن الرحيم",
  },
  en: {
    courses: [
      { dot: "bg-purple-500", title: "AI for Business", free: true },
      { dot: "bg-blue-500", title: "Digital Marketing", free: true },
      { dot: "bg-emerald-500", title: "Freelancing Guide", free: false },
    ],
    resourceTitle: "Monthly Marketing Calendar",
    resourceType: "Free template",
    freeBadge: "Free",
    soonBadge: "Soon",
    waitlist: "12 people on the waitlist",
    bismillahTranslation: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
  },
  fr: {
    courses: [
      { dot: "bg-purple-500", title: "IA pour le business", free: true },
      { dot: "bg-blue-500", title: "Marketing digital", free: true },
      { dot: "bg-emerald-500", title: "Guide freelance", free: false },
    ],
    resourceTitle: "Calendrier marketing mensuel",
    resourceType: "Modèle gratuit",
    freeBadge: "Gratuit",
    soonBadge: "Bientôt",
    waitlist: "12 personnes sur liste d'attente",
    bismillahTranslation: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
  },
  es: {
    courses: [
      { dot: "bg-purple-500", title: "IA para negocios", free: true },
      { dot: "bg-blue-500", title: "Marketing digital", free: true },
      { dot: "bg-emerald-500", title: "Guía freelance", free: false },
    ],
    resourceTitle: "Calendario de marketing mensual",
    resourceType: "Plantilla gratuita",
    freeBadge: "Gratis",
    soonBadge: "Pronto",
    waitlist: "12 personas en lista de espera",
    bismillahTranslation: "En el nombre de Allah, el Compasivo, el Misericordioso",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function LocalizedHome({ locale }: { locale: Locale }) {
  const copy = t[locale];
  const dir = localeDirections[locale];

  const featuredCourses = courses.filter((c) => c.featured).slice(0, 6);
  const featuredPaths = learningPaths.slice(0, 4);
  const freeResources = resources.filter((r) => r.free).slice(0, 10);
  const dash = mockupDashboard[locale];

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

            {/* Stats strip — integrated, no floating boxes */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
              {copy.heroStats.map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-black text-white">{num}</p>
                  <p className="text-xs font-bold text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product dashboard mockup */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur sm:p-4">
            <div className="rounded-2xl bg-white p-4 text-slate-950 sm:p-5">

              {/* Path progress header */}
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-black text-blue-700">{copy.mockupPathLabel}</p>
                  <h2 className="mt-0.5 truncate text-base font-black">{copy.mockupPathName}</h2>
                </div>
                <span className="badge-free shrink-0">62%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-2 w-[62%] rounded-full bg-gradient-to-r from-blue-500 to-teal-400" />
              </div>

              {/* Course list strip */}
              <div className="mt-4 space-y-1.5">
                {dash.courses.map((c) => (
                  <div key={c.title} className="flex items-center gap-2.5 rounded-xl border border-slate-100 px-3 py-2">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${c.dot}`} />
                    <span className="flex-1 truncate text-sm font-black text-slate-900">{c.title}</span>
                    {c.free
                      ? <span className="badge-free shrink-0">{dash.freeBadge}</span>
                      : <span className="badge-soon shrink-0">{dash.soonBadge}</span>
                    }
                  </div>
                ))}
              </div>

              {/* Resource preview */}
              <div className="mt-3 flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50 px-3 py-2.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-700">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-black text-slate-900">{dash.resourceTitle}</p>
                  <p className="text-[11px] text-slate-400">{dash.resourceType}</p>
                </div>
                <span className="badge-free shrink-0">{dash.freeBadge}</span>
              </div>

              {/* Quran mini-player */}
              <div className="mt-3 rounded-xl bg-slate-950 px-3 py-3 text-white" dir="rtl">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-teal-500/20 text-teal-300">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-black text-white" dir="rtl">سورة الفاتحة</p>
                    <p className="text-[10px] font-bold text-slate-400" dir="rtl">مكية · ٧ آيات</p>
                  </div>
                  <span className="badge-free shrink-0 text-[10px]">{dash.freeBadge}</span>
                </div>
                <div className="mt-2 flex h-4 items-end gap-px" aria-hidden="true">
                  {[3,5,8,6,9,7,4,6,8,5,7,9,6,4,7,5,8,6,9,5,7,4,6,8,5].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-sm ${i < 9 ? "bg-teal-400" : "bg-white/15"}`} style={{ height: `${h * 11}%` }} />
                  ))}
                </div>
              </div>

              {/* Waitlist signal */}
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2">
                <div className="flex -space-x-1.5 rtl:space-x-reverse">
                  {["bg-blue-400","bg-teal-400","bg-purple-400"].map((c) => (
                    <div key={c} className={`h-5 w-5 rounded-full border-2 border-white ${c}`} />
                  ))}
                </div>
                <p className="truncate text-xs font-black text-blue-700">{dash.waitlist}</p>
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

      {/* ── Section 3: Problem — editorial split ────────────────────────── */}
      <section className="section-soft section-space">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          {/* Left: heading + first 2 problems as large text items */}
          <div>
            <span className="eyebrow-pill-light">{copy.problemEyebrow}</span>
            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
              {copy.problemTitle}
            </h2>
            <div className="mt-8 space-y-6">
              {copy.problems.slice(0, 2).map((p) => (
                <div key={p.title} className="border-s-4 border-red-500 ps-4">
                  <h3 className="text-lg font-black text-slate-950">{p.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: remaining 3 problems as compact cards */}
          <div className="space-y-4 lg:mt-[5.5rem]">
            {copy.problems.slice(2).map((p) => (
              <div key={p.title} className="card-premium flex items-start gap-4 p-5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                <div>
                  <h3 className="text-sm font-black text-slate-950">{p.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-500">{p.desc}</p>
                </div>
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

          {/* Horizontal scroll shelf — no-scrollbar hides bar, overflow-hidden on parent prevents page overflow */}
          <div className="mt-10 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-4 overflow-x-auto pb-3 no-scrollbar">
              {freeResources.map((resource) => {
                const typeStyle: Record<string, { bg: string; text: string }> = {
                  checklist: { bg: "bg-emerald-50", text: "text-emerald-700" },
                  template: { bg: "bg-blue-50", text: "text-blue-700" },
                  guide: { bg: "bg-amber-50", text: "text-amber-700" },
                  "prompt-pack": { bg: "bg-purple-50", text: "text-purple-700" },
                  planner: { bg: "bg-orange-50", text: "text-orange-700" },
                };
                const style = typeStyle[resource.type] ?? { bg: "bg-slate-50", text: "text-slate-700" };
                return (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    className="card-premium flex w-52 shrink-0 flex-col p-4"
                  >
                    <div className={`grid h-9 w-9 place-items-center rounded-xl ${style.bg} ${style.text}`}>
                      <Download className="h-4 w-4" />
                    </div>
                    <p className="mt-3 text-[10px] font-black uppercase tracking-wider text-slate-400">
                      {resource.category}
                    </p>
                    <h3 className="mt-1 text-sm font-black leading-snug text-slate-950">
                      {resource.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-5 text-slate-500">
                      {resource.description}
                    </p>
                    <span className="mt-3 self-start badge-free">{resourceTypeLabel(resource.type)}</span>
                  </Link>
                );
              })}
            </div>
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

          {/* Quran reader preview panel */}
          <div className="card-dark rounded-3xl p-5 sm:p-7">
            {/* Surah header — always RTL for Arabic text correctness */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4" dir="rtl">
              <div>
                <p className="text-lg font-black text-white" dir="rtl">سورة الفاتحة</p>
                <p className="mt-0.5 text-xs font-bold text-slate-400" dir="rtl">مكية · ٧ آيات</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-black text-teal-300">
                <BookOpenCheck className="h-3 w-3" />
                {copy.quranEyebrow}
              </span>
            </div>

            {/* Ayah display */}
            <div className="mt-5 text-center" dir="rtl">
              <p className="quran-text text-3xl leading-[2.8] text-amber-100">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className="mt-1 text-xs font-bold text-slate-500">١</p>
            </div>

            {/* Translation */}
            <p className="mt-3 text-center text-xs font-bold leading-6 text-slate-500">
              {dash.bismillahTranslation}
            </p>

            {/* Audio player mockup */}
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-500 text-white" aria-label="play">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="flex flex-1 items-end gap-px h-6" aria-hidden="true">
                {[2,4,7,5,9,6,4,8,7,5,9,6,3,7,6,8,5,9,4,7,5,8,6,4,7].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-sm ${i < 8 ? "bg-teal-400" : "bg-white/20"}`} style={{ height: `${h * 10}%` }} />
                ))}
              </div>
              <span className="shrink-0 text-xs font-black text-teal-300">{copy.audioCta.split(" ")[0]}</span>
            </div>

            {/* Surah navigation chips */}
            <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar" dir="rtl">
              {[
                { name: "الفاتحة", num: "١", active: true },
                { name: "البقرة", num: "٢", active: false },
                { name: "آل عمران", num: "٣", active: false },
                { name: "النساء", num: "٤", active: false },
              ].map((s) => (
                <div
                  key={s.name}
                  className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-black ${s.active ? "bg-teal-500/20 text-teal-300" : "bg-white/5 text-slate-400"}`}
                >
                  {s.num} · {s.name}
                </div>
              ))}
            </div>
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
