# Minassati Premium Marketplace Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Minassati from a functional but generic site into a premium, focused, high-trust Moroccan digital learning marketplace — without breaking Quran, lead capture, or the Vercel build.

**Architecture:** Preserve all existing data files, API routes, and Quran/audio infrastructure unchanged. Redesign the visual layer by replacing page-level JSX, updating shared components, and tightening the design system tokens — all within the existing Next.js App Router + Tailwind + Framer Motion stack.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS 3, Framer Motion 11, Lucide React, next-intl i18n, Resend/`/api/leads`, `@vercel/analytics`

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Modify | `src/app/sitemap.ts` | Remove legacy routes |
| Modify | `src/components/minassati/Footer.tsx` | Remove preview links, add legacy-free columns |
| Modify | `src/app/globals.css` | Extend design tokens, add premium utility classes |
| Modify | `src/components/minassati/LocalizedHome.tsx` | Full homepage redesign (12 sections) |
| Modify | `src/app/courses/page.tsx` | Marketplace hero + filter bar + premium cards |
| Modify | `src/components/minassati/CourseExplorer.tsx` | Better CourseCard design |
| Modify | `src/app/courses/[slug]/page.tsx` | Sellable course detail |
| Modify | `src/app/paths/page.tsx` | Roadmap-style paths listing |
| Modify | `src/app/paths/[slug]/page.tsx` | Step-by-step path detail |
| Modify | `src/app/resources/page.tsx` | Resource library with filters |
| Modify | `src/app/resources/[slug]/page.tsx` | Resource detail (if exists, else create) |
| Modify | `src/app/articles/page.tsx` | Editorial hub |
| Modify | `src/app/articles/[slug]/page.tsx` | Article detail with ToC and CTAs |
| Modify | `src/app/pricing/page.tsx` | Honest premium pricing + FAQ |
| Modify | `src/app/instructors/page.tsx` | Creator opportunity page |
| Modify | `src/i18n/en.ts` | Fix EN gaps |
| Modify | `src/i18n/fr.ts` | Fix FR gaps |
| Modify | `src/i18n/es.ts` | Fix ES gaps |
| Add noindex | Legacy pages (`/games`, `/badges`, etc.) | meta robots noindex |
| Update | `IMAGE_PROMPTS.md` | Premium visual asset prompts |

---

## Phase 1 — Cleanup: Sitemap, Footer, Legacy noindex

### Task 1: Sitemap — remove legacy routes

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Remove legacy static routes from sitemap**

Replace the `staticRoutes` array (lines 16–34). Remove `/student-dashboard-preview`, `/creator-preview`. Keep `/islamic-kids` but drop it from high-priority:

```typescript
const staticRoutes = [
  "",
  "/courses",
  "/paths",
  "/articles",
  "/quran",
  "/audio",
  "/resources",
  "/pricing",
  "/instructors",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/help",
  "/islamic-kids",
];
```

- [ ] **Step 2: Verify build still passes**

```bash
cd /Users/abdou/Downloads/ailiq-lab-core-main && npm run build 2>&1 | tail -20
```

Expected: Exit code 0.

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "chore: remove legacy preview routes from sitemap"
```

---

### Task 2: Footer — remove legacy preview links, clean columns

**Files:**
- Modify: `src/components/minassati/Footer.tsx` (lines 1–180)

- [ ] **Step 1: Remove `/student-dashboard-preview` and `/creator-preview` from all four locale `columns` arrays**

For the `ar` locale `columns[2]` (Platform/المنصة), change from:
```typescript
{ title: "المنصة", links: [["/pricing", "الاشتراك"], ["/instructors", "للمدربين"], ["/student-dashboard-preview", "لوحة المتعلم"], ["/creator-preview", "لوحة المدرب"]] },
```
To:
```typescript
{ title: "المنصة", links: [["/pricing", "الاشتراك"], ["/instructors", "للمدربين"]] },
```

Apply the same removal for `en`, `fr`, `es` locale columns — remove the student-dashboard-preview and creator-preview entries from the Platform column in each.

- [ ] **Step 2: Commit**

```bash
git add src/components/minassati/Footer.tsx
git commit -m "chore: remove legacy preview links from footer"
```

---

### Task 3: Add noindex meta to legacy pages

**Files:**
- Modify: `src/app/student-dashboard-preview/page.tsx`
- Modify: `src/app/creator-preview/page.tsx`
- Modify: `src/app/games/page.tsx`
- Modify: `src/app/badges/page.tsx`
- Modify: `src/app/challenges/page.tsx`
- Modify: `src/app/family-dashboard/page.tsx`
- Modify: `src/app/kids-zone/page.tsx`
- Modify: `src/app/daily/page.tsx`
- Modify: `src/app/start/page.tsx`
- Modify: `src/app/adhkar/page.tsx`
- Modify: `src/app/stories/page.tsx`
- Modify: `src/app/activities/page.tsx`
- Modify: `src/app/qa/page.tsx`
- Modify: `src/app/methodology/page.tsx`

- [ ] **Step 1: Add noindex export to each legacy page**

For each of the files above, add or replace the `metadata` export at the top:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
```

If the file already has a `metadata` export, add `robots: { index: false, follow: false }` to it.

- [ ] **Step 2: Commit**

```bash
git add src/app/student-dashboard-preview/page.tsx src/app/creator-preview/page.tsx \
  src/app/games/page.tsx src/app/badges/page.tsx src/app/challenges/page.tsx \
  src/app/family-dashboard/page.tsx src/app/kids-zone/page.tsx src/app/daily/page.tsx \
  src/app/start/page.tsx src/app/adhkar/page.tsx src/app/stories/page.tsx \
  src/app/activities/page.tsx src/app/qa/page.tsx src/app/methodology/page.tsx
git commit -m "chore: noindex legacy pages to clean up SEO footprint"
```

---

## Phase 2 — Design System: Global CSS Tokens + Utilities

### Task 4: Extend globals.css with premium design tokens

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Extend `:root` with new elevation/gradient tokens**

After the existing `--shadow-teal` line, add:

```css
  /* Elevation tokens */
  --shadow-subtle: 0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04);
  --shadow-card: 0 4px 24px -4px rgba(15,23,42,0.08), 0 1px 4px rgba(15,23,42,0.04);
  --shadow-card-hover: 0 12px 40px -8px rgba(59,130,246,0.15), 0 4px 12px rgba(15,23,42,0.06);
  --shadow-elevated: 0 20px 60px -12px rgba(15,23,42,0.14), 0 8px 24px rgba(15,23,42,0.06);
  --shadow-navy: 0 20px 60px -12px rgba(15,23,42,0.45);

  /* Premium gradients */
  --gradient-hero: linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F2744 100%);
  --gradient-teal-blue: linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%);
  --gradient-amber: linear-gradient(135deg, #F59E0B 0%, #EF4444 100%);
```

- [ ] **Step 2: Add premium utility classes**

In the `@layer utilities` block (or add a new one), add:

```css
@layer utilities {
  /* Badge/chip system */
  .badge-free { @apply inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-black text-emerald-700 ring-1 ring-emerald-200; }
  .badge-pro { @apply inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-700 ring-1 ring-amber-200; }
  .badge-soon { @apply inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-black text-slate-600; }
  .badge-new { @apply inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-black text-blue-700 ring-1 ring-blue-200; }

  /* Premium card */
  .card-premium {
    @apply rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)]
           transition-all duration-200 hover:-translate-y-1
           hover:border-blue-200 hover:shadow-[var(--shadow-card-hover)];
  }

  /* Dark card */
  .card-dark {
    @apply rounded-2xl border border-white/10 bg-white/6 backdrop-blur;
  }

  /* Section system */
  .section-light { @apply bg-white; }
  .section-soft  { @apply bg-[#F7FAFC]; }
  .section-navy  { @apply bg-slate-950 text-white; }

  /* Hero eyebrow pill */
  .eyebrow-pill {
    @apply inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8
           px-4 py-2 text-sm font-black text-teal-200;
  }
  .eyebrow-pill-light {
    @apply inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50
           px-4 py-2 text-sm font-black text-blue-700;
  }

  /* CTA button system */
  .btn-primary {
    @apply rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white
           transition hover:bg-slate-800 active:scale-[0.98];
  }
  .btn-secondary {
    @apply rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black
           text-slate-800 transition hover:bg-slate-50 active:scale-[0.98];
  }
  .btn-ghost-white {
    @apply rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white
           transition hover:bg-white/10 active:scale-[0.98];
  }
  .btn-teal {
    @apply rounded-full bg-teal-500 px-6 py-3 text-sm font-black text-white
           transition hover:bg-teal-600 active:scale-[0.98];
  }
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build 2>&1 | tail -10
```

Expected: Exit code 0.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "design: extend premium design system tokens and utility classes"
```

---

## Phase 3 — Homepage: Full Premium Redesign

### Task 5: Redesign LocalizedHome.tsx — Hero + Stats + Problem/Solution

**Files:**
- Modify: `src/components/minassati/LocalizedHome.tsx`

This is the most impactful task. Rewrite `LocalizedHome.tsx` completely. The file is currently 446 lines. The new version will be structured as follows, with 10 discrete sections:

1. **PremiumHero** — dark navy, dashboard mockup, 3 CTAs, 4 stats
2. **ConversionStrip** — payment-honest CTA strip
3. **ProblemSection** — "التعلم العشوائي يضيع وقتك"
4. **SolutionSection** — 3 pillars
5. **FeaturedCourses** — 6 premium course cards
6. **LearningPaths** — 3–4 roadmap cards
7. **ResourcesSection** — practical library teaser
8. **QuranSection** — dark, elegant, respectful
9. **InstructorSection** — creator opportunity
10. **FinalCTA** — dark panel with 3 buttons

- [ ] **Step 1: Replace `LocalizedHome.tsx` with redesigned version**

Replace the entire file with:

```tsx
import Link from "next/link";
import {
  ArrowLeft, BookOpenCheck, CheckCircle2, ChevronRight, Download,
  GraduationCap, Layers, MapPin, Sparkles, Target, TrendingUp, Users, Zap,
} from "lucide-react";
import { CourseCard } from "@/components/minassati/CourseExplorer";
import { courses } from "@/data/courses";
import { learningPaths } from "@/data/learning-paths";
import { resources } from "@/data/resources";
import { localeDirections, type Locale } from "@/i18n/config";

// ── Localised copy ──────────────────────────────────────────────────────────
const t: Record<Locale, {
  eyebrow: string;
  headline: string;
  subhead: string;
  cta1: string; cta2: string; cta3: string;
  stat1: string; stat2: string; stat3: string; stat4: string;
  strip: string; stripCta: string;
  problemEyebrow: string; problemTitle: string; problems: [string, string][];
  solutionEyebrow: string; solutionTitle: string;
  pillars: [string, string, string][];
  coursesEyebrow: string; coursesTitle: string; allCourses: string;
  pathsEyebrow: string; pathsTitle: string;
  pathSteps: string; pathDuration: string;
  resourcesEyebrow: string; resourcesTitle: string; allResources: string;
  quranEyebrow: string; quranTitle: string; quranText: string; quranCta: string; audioCta: string;
  instructorEyebrow: string; instructorTitle: string; instructorText: string; instructorCta: string;
  trustTitle: string; trustPoints: string[];
  finalTitle: string; finalSub: string;
  notice: string;
}> = {
  ar: {
    eyebrow: "منصة مغربية للتعلم الرقمي",
    headline: "منصتي — تعلّم مهارات جديدة وابنِ مستقبلك الرقمي بثقة",
    subhead: "منصة مغربية تجمع الدورات، المسارات، المقالات، الموارد العملية، وقارئ القرآن في تجربة واحدة تساعدك على التعلم، العمل، وصناعة معرفة قابلة للتطبيق.",
    cta1: "استكشف الدورات", cta2: "تصفح الموارد", cta3: "افتح القرآن الكريم",
    stat1: "29 دورة", stat2: "10 مسارات", stat3: "30 مورد", stat4: "114 سورة",
    strip: "الدفع غير مفعّل بعد — ساعدنا نحدد أول الدورات المدفوعة.", stripCta: "أرسل اهتمامك",
    problemEyebrow: "المشكلة", problemTitle: "التعلّم العشوائي يضيع وقتك",
    problems: [
      ["فيديوهات يوتيوب المتناثرة", "بدون خطة أو ترتيب أو نتيجة واضحة."],
      ["لا مسار واضح", "لا تعرف من أين تبدأ ولا أين تنتهي."],
      ["لا قوالب عملية", "محتوى نظري بدون أدوات تستخدمها فعلاً."],
      ["لا سياق مغربي/عربي", "محتوى أجنبي لا يعكس واقعك وسوقك."],
      ["لا هيكل موثوق", "منصات متعددة لا تتكلم بلغتك ولا تفهم مشاكلك."],
    ],
    solutionEyebrow: "الحل", solutionTitle: "منصتي تنظّم لك الطريق",
    pillars: [
      ["دورات عملية", "تعلّم من دورات منظمة بنتائج واضحة.", "الدورات"],
      ["مسارات واضحة", "خطوات مرتبة من الصفر إلى الاحتراف.", "المسارات"],
      ["موارد قابلة للاستخدام", "قوالب وقوائم وأدوات تستخدمها اليوم.", "الموارد"],
    ],
    coursesEyebrow: "الدورات", coursesTitle: "دورات مختارة للبدء", allCourses: "شاهد كل الدورات",
    pathsEyebrow: "المسارات", pathsTitle: "مسارات واضحة بدل التشتت",
    pathSteps: "مرحلة", pathDuration: "",
    resourcesEyebrow: "الموارد", resourcesTitle: "موارد مجانية تساعدك اليوم", allResources: "تصفح الموارد",
    quranEyebrow: "قرآن مجاني", quranTitle: "القرآن الكريم دائمًا ضمن منصتي",
    quranText: "قارئ قرآن مجاني مع الاستماع والترجمات، كخدمة موثوقة ومفتوحة داخل المنصة.",
    quranCta: "افتح قارئ القرآن", audioCta: "استمع للتلاوات",
    instructorEyebrow: "للمدربين", instructorTitle: "هل لديك معرفة تستحق أن تُدرَّس؟",
    instructorText: "ستدعم منصتي المدربين وصناع المعرفة الذين يريدون نشر دورات وموارد ومسارات للجمهور المغربي والعربي، مع مراجعة جودة وتجربة بيع منظمة.",
    instructorCta: "انضم كمدرب",
    trustTitle: "منصة مغربية بمعايير احترافية",
    trustPoints: ["محتوى عملي قابل للتطبيق", "واجهة عربية وفرنسية وإنجليزية وإسبانية", "موارد مجانية قابلة للتحميل", "قرآن واستماع مجاني", "دورات بنتائج واضحة", "مناسبة للمتعلمين والمدربين"],
    finalTitle: "ابدأ من دورة واحدة اليوم",
    finalSub: "استكشف الدورات، تصفح الموارد، أو اقرأ القرآن — كل ذلك مجاناً.",
    notice: "بعض المحتوى التفصيلي لا يزال بالعربية ضمن خطة الترجمة المرحلية.",
  },
  en: {
    eyebrow: "Moroccan digital learning platform",
    headline: "Minassati helps you learn practical digital skills with confidence",
    subhead: "Courses, learning paths, resources, articles, and Quran tools — all in one focused Moroccan platform for learners, professionals, and future instructors.",
    cta1: "Explore courses", cta2: "Browse resources", cta3: "Open Quran reader",
    stat1: "29 courses", stat2: "10 paths", stat3: "30 resources", stat4: "114 surahs",
    strip: "Payments are not live yet — help us decide which courses to launch first.", stripCta: "Send interest",
    problemEyebrow: "The problem", problemTitle: "Scattered learning wastes your time",
    problems: [
      ["Scattered YouTube videos", "No structure, no roadmap, no outcome."],
      ["No clear path", "You don't know where to start or where to end up."],
      ["No practical templates", "Theory-heavy content without tools you can use."],
      ["No Moroccan/Arabic context", "Foreign content that doesn't reflect your market."],
      ["No trusted structure", "Multiple platforms that don't speak your language."],
    ],
    solutionEyebrow: "The solution", solutionTitle: "Minassati gives you a clear path",
    pillars: [
      ["Practical courses", "Learn from structured courses with clear outcomes.", "Courses"],
      ["Clear paths", "Step-by-step roadmaps from zero to skilled.", "Paths"],
      ["Usable resources", "Templates, checklists, and tools for today.", "Resources"],
    ],
    coursesEyebrow: "Courses", coursesTitle: "Featured courses to start with", allCourses: "View all courses",
    pathsEyebrow: "Paths", pathsTitle: "Structured paths instead of scattered learning",
    pathSteps: "steps", pathDuration: "",
    resourcesEyebrow: "Resources", resourcesTitle: "Free resources you can use today", allResources: "Browse resources",
    quranEyebrow: "Free Quran utility", quranTitle: "The Quran remains free inside Minassati",
    quranText: "A free Quran reader with listening and translations — a trusted, open service inside the platform.",
    quranCta: "Open Quran reader", audioCta: "Listen to recitations",
    instructorEyebrow: "Instructors", instructorTitle: "Have knowledge worth teaching?",
    instructorText: "Minassati will support instructors and creators who want to publish courses, resources, and paths for Moroccan and Arabic-speaking audiences.",
    instructorCta: "Apply as instructor",
    trustTitle: "A Moroccan platform with professional standards",
    trustPoints: ["Practical, applicable content", "Multilingual core UI", "Free downloadable resources", "Free Quran and audio", "Courses with clear outcomes", "Built for learners and instructors"],
    finalTitle: "Start with one course today",
    finalSub: "Explore courses, browse resources, or read Quran — all free.",
    notice: "Some detailed content is currently Arabic-first while translations are being expanded.",
  },
  fr: {
    eyebrow: "Plateforme marocaine d'apprentissage",
    headline: "Minassati vous aide à apprendre des compétences digitales utiles",
    subhead: "Cours, parcours, ressources, articles et outils Coran dans une seule plateforme marocaine pour apprenants, professionnels et futurs formateurs.",
    cta1: "Explorer les cours", cta2: "Voir les ressources", cta3: "Ouvrir le Coran",
    stat1: "29 cours", stat2: "10 parcours", stat3: "30 ressources", stat4: "114 sourates",
    strip: "Les paiements ne sont pas encore actifs — aidez-nous à prioriser.", stripCta: "Envoyer l'intérêt",
    problemEyebrow: "Le problème", problemTitle: "L'apprentissage dispersé gaspille votre temps",
    problems: [
      ["Vidéos YouTube éparpillées", "Sans structure, sans feuille de route, sans résultat clair."],
      ["Pas de parcours clair", "Vous ne savez pas par où commencer."],
      ["Pas de modèles pratiques", "Contenu théorique sans outils utilisables."],
      ["Pas de contexte marocain", "Contenu étranger qui ne reflète pas votre marché."],
      ["Pas de structure fiable", "Plateformes multiples qui ne parlent pas votre langue."],
    ],
    solutionEyebrow: "La solution", solutionTitle: "Minassati vous donne un chemin clair",
    pillars: [
      ["Cours pratiques", "Apprenez avec des cours structurés aux résultats clairs.", "Cours"],
      ["Parcours clairs", "Étapes de zéro à compétent.", "Parcours"],
      ["Ressources utilisables", "Modèles, listes et outils pour aujourd'hui.", "Ressources"],
    ],
    coursesEyebrow: "Cours", coursesTitle: "Cours sélectionnés pour commencer", allCourses: "Voir tous les cours",
    pathsEyebrow: "Parcours", pathsTitle: "Des parcours structurés plutôt que dispersés",
    pathSteps: "étapes", pathDuration: "",
    resourcesEyebrow: "Ressources", resourcesTitle: "Ressources gratuites à utiliser aujourd'hui", allResources: "Voir les ressources",
    quranEyebrow: "Coran gratuit", quranTitle: "Le Coran reste gratuit dans Minassati",
    quranText: "Un lecteur du Coran gratuit avec écoute et traductions — un service fiable et ouvert dans la plateforme.",
    quranCta: "Ouvrir le lecteur", audioCta: "Écouter",
    instructorEyebrow: "Formateurs", instructorTitle: "Vous avez une expertise à partager ?",
    instructorText: "Minassati accompagnera les formateurs et créateurs qui souhaitent publier des cours, ressources et parcours pour les publics marocains et arabophones.",
    instructorCta: "Devenir formateur",
    trustTitle: "Une plateforme marocaine avec des standards professionnels",
    trustPoints: ["Contenu pratique et applicable", "Interface multilingue", "Ressources gratuites téléchargeables", "Coran et audio gratuits", "Cours aux résultats clairs", "Pour apprenants et formateurs"],
    finalTitle: "Commencez par un cours aujourd'hui",
    finalSub: "Explorez les cours, les ressources ou lisez le Coran — tout est gratuit.",
    notice: "Certaines ressources détaillées sont encore principalement en arabe pendant l'extension des traductions.",
  },
  es: {
    eyebrow: "Plataforma marroquí de aprendizaje",
    headline: "Minassati te ayuda a aprender habilidades digitales útiles",
    subhead: "Cursos, rutas, recursos, artículos y herramientas del Corán en una sola plataforma marroquí para estudiantes, profesionales e instructores.",
    cta1: "Explorar cursos", cta2: "Ver recursos", cta3: "Abrir el Corán",
    stat1: "29 cursos", stat2: "10 rutas", stat3: "30 recursos", stat4: "114 suras",
    strip: "Los pagos aún no están activos — ayúdanos a priorizar.", stripCta: "Enviar interés",
    problemEyebrow: "El problema", problemTitle: "El aprendizaje disperso desperdicia tu tiempo",
    problems: [
      ["Videos de YouTube dispersos", "Sin estructura, sin hoja de ruta, sin resultado claro."],
      ["Sin camino claro", "No sabes por dónde empezar ni a dónde llegar."],
      ["Sin plantillas prácticas", "Contenido teórico sin herramientas que usar."],
      ["Sin contexto marroquí", "Contenido extranjero que no refleja tu mercado."],
      ["Sin estructura de confianza", "Múltiples plataformas que no hablan tu idioma."],
    ],
    solutionEyebrow: "La solución", solutionTitle: "Minassati te da un camino claro",
    pillars: [
      ["Cursos prácticos", "Aprende con cursos estructurados y resultados claros.", "Cursos"],
      ["Rutas claras", "Pasos de cero a experto.", "Rutas"],
      ["Recursos utilizables", "Plantillas, listas y herramientas para usar hoy.", "Recursos"],
    ],
    coursesEyebrow: "Cursos", coursesTitle: "Cursos destacados para empezar", allCourses: "Ver todos los cursos",
    pathsEyebrow: "Rutas", pathsTitle: "Rutas claras en lugar de aprendizaje disperso",
    pathSteps: "pasos", pathDuration: "",
    resourcesEyebrow: "Recursos", resourcesTitle: "Recursos gratuitos para usar hoy", allResources: "Ver recursos",
    quranEyebrow: "Corán gratis", quranTitle: "El Corán sigue siendo gratuito en Minassati",
    quranText: "Un lector del Corán gratuito con audio y traducciones — un servicio fiable y abierto en la plataforma.",
    quranCta: "Abrir el lector", audioCta: "Escuchar",
    instructorEyebrow: "Instructores", instructorTitle: "¿Tienes conocimiento que merece enseñarse?",
    instructorText: "Minassati apoyará a instructores y creadores que quieran publicar cursos, recursos y rutas para públicos marroquíes y arabófonos.",
    instructorCta: "Aplicar como instructor",
    trustTitle: "Una plataforma marroquí con estándares profesionales",
    trustPoints: ["Contenido práctico y aplicable", "Interfaz multilingüe", "Recursos gratuitos descargables", "Corán y audio gratis", "Cursos con resultados claros", "Para estudiantes e instructores"],
    finalTitle: "Empieza con un curso hoy",
    finalSub: "Explora cursos, recursos o lee el Corán — todo gratis.",
    notice: "Algunos recursos detallados siguen estando primero en árabe mientras ampliamos las traducciones.",
  },
};

const pillarIcons = [GraduationCap, Layers, Download];
const pillarHrefs = ["/courses", "/paths", "/resources"];

// ── Component ────────────────────────────────────────────────────────────────
export function LocalizedHome({ locale }: { locale: Locale }) {
  const c = t[locale];
  const dir = localeDirections[locale];
  const featuredCourses = courses.filter((course) => course.featured).slice(0, 6);
  const featuredPaths = learningPaths.filter((path) => path.featured).slice(0, 4);
  const freeResources = resources.filter((resource) => resource.free).slice(0, 8);

  return (
    <div lang={locale} dir={dir} className="overflow-hidden bg-[#F7FAFC]">

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-950 text-white">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        {/* Subtle gradient orbs */}
        <div className="pointer-events-none absolute -top-32 start-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 end-1/4 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />

        <div className="page-shell relative grid min-h-[calc(100vh-5rem)] gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          {/* Left: copy */}
          <div className="min-w-0">
            <p className="eyebrow-pill">
              <Sparkles className="h-4 w-4 text-amber-300" /> {c.eyebrow}
            </p>
            <h1 className="mt-6 max-w-5xl break-words text-4xl font-black leading-[1.15] sm:text-6xl lg:text-7xl">
              {c.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[2] text-slate-300 sm:text-xl">
              {c.subhead}
            </p>
            {locale !== "ar" && (
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium leading-7 text-slate-400">
                {c.notice}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses" className="btn-primary text-center text-base">{c.cta1}</Link>
              <Link href="/resources" className="btn-ghost-white text-center text-base">{c.cta2}</Link>
              <Link href="/quran" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-black text-teal-300 transition hover:bg-white/5">
                {c.cta3} <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stats strip */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[c.stat1, c.stat2, c.stat3, c.stat4].map((stat) => (
                <div key={stat} className="card-dark rounded-xl p-4 text-center">
                  <p className="text-xl font-black">{stat.split(" ")[0]}</p>
                  <p className="mt-1 text-xs font-bold text-slate-400">{stat.split(" ").slice(1).join(" ")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur-sm sm:p-4">
            <div className="min-w-0 rounded-2xl bg-white p-5 text-slate-950">
              {/* Progress bar */}
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-black text-blue-600">{locale === "ar" ? "مسار التسويق الرقمي" : "Digital Marketing Path"}</p>
                  <p className="mt-1 break-words text-lg font-black">{locale === "ar" ? "الخطوة 3 من 5" : "Step 3 of 5"}</p>
                </div>
                <span className="badge-free">62%</span>
              </div>
              <div className="mt-4 h-2.5 rounded-full bg-slate-100">
                <div className="h-2.5 w-[62%] rounded-full bg-gradient-to-r from-blue-600 to-teal-500" />
              </div>

              {/* 4 mini-cards */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { icon: "🤖", title: locale === "ar" ? "الذكاء الاصطناعي للأعمال" : "AI for Business", meta: locale === "ar" ? "مجاني" : "Free", badge: "badge-free" },
                  { icon: "📊", title: locale === "ar" ? "التسويق الرقمي" : "Digital Marketing", meta: locale === "ar" ? "مجاني" : "Free", badge: "badge-free" },
                  { icon: "📖", title: locale === "ar" ? "قارئ القرآن" : "Quran Reader", meta: locale === "ar" ? "114 سورة" : "114 surahs", badge: "badge-soon" },
                  { icon: "🎓", title: locale === "ar" ? "صفحة المدرب" : "Instructor Page", meta: locale === "ar" ? "قريبًا" : "Soon", badge: "badge-pro" },
                ].map(({ icon, title, meta, badge }) => (
                  <div key={title} className="rounded-2xl border border-slate-100 p-3 transition hover:border-blue-100">
                    <span className="text-2xl">{icon}</span>
                    <p className="mt-2 text-sm font-black leading-5">{title}</p>
                    <span className={`mt-2 ${badge}`}>{meta}</span>
                  </div>
                ))}
              </div>

              {/* Dark bottom panel */}
              <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-white">
                <p className="text-xs font-black text-amber-400">{locale === "ar" ? "الخطوة التالية" : "Next step"}</p>
                <p className="mt-1 text-sm font-bold text-slate-300">
                  {locale === "ar" ? "إنشاء أول حملة إعلانية باستخدام Meta Ads" : "Launch your first Meta Ads campaign"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Conversion strip ─────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="page-shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-slate-600 sm:max-w-xl">{c.strip}</p>
          <Link href="/pricing#pricing-waitlist" className="btn-primary shrink-0 text-center">
            {c.stripCta}
          </Link>
        </div>
      </section>

      {/* ── 3. Problem section ──────────────────────────────────────────── */}
      <section className="section-soft">
        <div className="page-shell py-16 sm:py-24">
          <p className="eyebrow-pill-light">{c.problemEyebrow}</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            {c.problemTitle}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.problems.map(([title, description]) => (
              <div key={title} className="card-premium p-5">
                <div className="mb-3 h-10 w-10 rounded-xl bg-red-50 p-2.5">
                  <div className="h-5 w-5 rounded-full bg-red-400" />
                </div>
                <h3 className="font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Solution / 3 pillars ─────────────────────────────────────── */}
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-black text-teal-300">
            <Zap className="h-4 w-4" /> {c.solutionEyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            {c.solutionTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {c.pillars.map(([title, description, cta], i) => {
              const Icon = pillarIcons[i];
              const href = pillarHrefs[i];
              return (
                <Link key={title} href={href} className="group card-dark rounded-2xl p-6 transition hover:bg-white/10">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-600/20">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-black text-teal-400 transition group-hover:gap-2.5">
                    {cta} <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Featured courses ─────────────────────────────────────────── */}
      <section className="section-light">
        <div className="page-shell py-16 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-pill-light">{c.coursesEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">{c.coursesTitle}</h2>
            </div>
            <Link href="/courses" className="btn-secondary shrink-0">{c.allCourses}</Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => <CourseCard key={course.slug} course={course} compact />)}
          </div>
        </div>
      </section>

      {/* ── 6. Learning paths ───────────────────────────────────────────── */}
      <section className="section-soft">
        <div className="page-shell py-16 sm:py-24">
          <p className="eyebrow-pill-light">{c.pathsEyebrow}</p>
          <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">{c.pathsTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredPaths.map((path) => (
              <Link
                key={path.slug}
                href={`/paths/${path.slug}`}
                className="card-premium group flex flex-col gap-4 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="badge-soon">{path.steps.length} {c.pathSteps}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-black text-slate-950">{path.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{path.outcome}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <TrendingUp className="h-4 w-4" /> {path.duration}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Resources ────────────────────────────────────────────────── */}
      <section className="section-light">
        <div className="page-shell py-16 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-pill-light">{c.resourcesEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">{c.resourcesTitle}</h2>
            </div>
            <Link href="/resources" className="btn-secondary shrink-0">{c.allResources}</Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {freeResources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="card-premium group p-5"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-emerald-50">
                  <Download className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="font-black text-slate-950">{resource.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500 line-clamp-2">{resource.description}</p>
                <span className="mt-4 badge-free">{locale === "ar" ? "مجاني" : "Free"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Quran section ────────────────────────────────────────────── */}
      <section className="section-navy">
        <div className="pointer-events-none absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-black text-amber-300">
                <BookOpenCheck className="h-4 w-4" /> {c.quranEyebrow}
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">{c.quranTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">{c.quranText}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/quran" className="btn-primary bg-white text-slate-950 hover:bg-slate-100">{c.quranCta}</Link>
                <Link href="/audio" className="btn-ghost-white">{c.audioCta}</Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
              <p className="quran-text text-4xl leading-[2.2] text-amber-100" dir="rtl" lang="ar">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className="mt-4 text-sm font-bold text-slate-400">
                {locale === "ar" ? "114 سورة — قراءة واستماع مجاني" : "114 surahs — free reading and listening"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Instructor section ───────────────────────────────────────── */}
      <section className="section-soft">
        <div className="page-shell py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-center">
            <div>
              <p className="eyebrow-pill-light">{c.instructorEyebrow}</p>
              <h2 className="mt-5 text-3xl font-black text-slate-950 sm:text-5xl">{c.instructorTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-600">{c.instructorText}</p>
              <Link href="/instructors" className="mt-8 inline-flex items-center gap-2 btn-primary">
                <Users className="h-4 w-4" /> {c.instructorCta}
              </Link>
            </div>
            <div className="grid gap-3">
              {[
                { icon: Target, label: locale === "ar" ? "جمهور مغربي مستهدف" : "Targeted Moroccan audience" },
                { icon: TrendingUp, label: locale === "ar" ? "مراجعة جودة متخصصة" : "Specialized quality review" },
                { icon: GraduationCap, label: locale === "ar" ? "أدوات نشر وبيع قادمة" : "Publishing tools coming soon" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="card-premium flex items-center gap-4 p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="font-black text-slate-950">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Trust points ────────────────────────────────────────────── */}
      <section className="section-light">
        <div className="page-shell py-16 sm:py-24">
          <h2 className="mb-10 text-2xl font-black text-slate-950 sm:text-3xl">{c.trustTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="font-black text-slate-800">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Final CTA ───────────────────────────────────────────────── */}
      <section className="section-soft">
        <div className="page-shell pb-20 pt-4">
          <div className="rounded-3xl bg-slate-950 p-10 text-center text-white shadow-[var(--shadow-navy)] sm:p-16">
            <h2 className="text-3xl font-black sm:text-5xl">{c.finalTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-400">{c.finalSub}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/courses" className="btn-primary bg-white text-slate-950 hover:bg-slate-100 text-base px-8 py-4">{c.cta1}</Link>
              <Link href="/resources" className="btn-ghost-white text-base px-8 py-4">{c.cta2}</Link>
              <Link href="/quran" className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-black text-teal-300 transition hover:bg-white/5">
                {c.cta3} <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
```

- [ ] **Step 2: Run lint to catch TypeScript errors**

```bash
cd /Users/abdou/Downloads/ailiq-lab-core-main && npm run lint 2>&1 | tail -30
```

Expected: No errors.

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

Expected: Exit code 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/minassati/LocalizedHome.tsx
git commit -m "redesign: premium homepage with problem/solution/pillars/CTA system"
```

---

## Phase 4 — Courses: Marketplace Redesign

### Task 6: Redesign CourseCard in CourseExplorer.tsx

**Files:**
- Modify: `src/components/minassati/CourseExplorer.tsx`

- [ ] **Step 1: Read current CourseCard**

Read `src/components/minassati/CourseExplorer.tsx` lines 1–80 to understand the current card structure and Course type.

- [ ] **Step 2: Replace CourseCard JSX with premium design**

Find the `CourseCard` function and replace its return JSX with:

```tsx
export function CourseCard({ course, compact = false }: { course: Course; compact?: boolean }) {
  const levelColors: Record<string, string> = {
    beginner: "badge-free",
    intermediate: "badge-new",
    advanced: "badge-pro",
  };
  const statusBadge = course.priceType === "free"
    ? <span className="badge-free">مجاني</span>
    : course.priceType === "coming-soon"
    ? <span className="badge-soon">قريبًا</span>
    : <span className="badge-pro">{course.price}</span>;

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card-premium group flex flex-col overflow-hidden"
    >
      {/* Thumbnail area */}
      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.04]" />
        <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white/10 backdrop-blur">
          <GraduationCap className="h-8 w-8 text-white/80" />
        </div>
        <div className="absolute end-3 top-3">{statusBadge}</div>
        {course.featured && (
          <div className="absolute start-3 top-3">
            <span className="badge-new">مختار</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-black uppercase tracking-wider text-blue-600">{course.category}</p>
        <h3 className="text-lg font-black leading-tight text-slate-950 group-hover:text-blue-700 transition-colors">
          {course.title}
        </h3>
        {!compact && (
          <p className="text-sm leading-7 text-slate-500 line-clamp-2">{course.description}</p>
        )}
        {compact && (
          <p className="text-sm leading-6 text-slate-500 line-clamp-2">{course.outcome || course.description}</p>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <span className={levelColors[course.level] || "badge-soon"}>{course.level}</span>
            {course.duration && <span>· {course.duration}</span>}
          </div>
          {course.instructor && (
            <span className="text-xs font-bold text-slate-400 truncate">{course.instructor}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
```

Add missing imports at top of file: `import { GraduationCap } from "lucide-react";`

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

Expected: Exit code 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/minassati/CourseExplorer.tsx
git commit -m "redesign: premium course card with thumbnail, badges, outcome copy"
```

---

### Task 7: Redesign /courses/page.tsx

**Files:**
- Modify: `src/app/courses/page.tsx`

- [ ] **Step 1: Replace courses/page.tsx with premium marketplace design**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Sparkles } from "lucide-react";
import { CourseExplorer, CourseCard } from "@/components/minassati/CourseExplorer";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "الدورات - منصتي | Moroccan Learning Marketplace",
  description: "دورات عملية للمغاربة في التسويق الرقمي، الذكاء الاصطناعي، العمل الحر، التجارة الإلكترونية، اللغات، والقرآن.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  const featured = courses.filter((course) => course.featured).slice(0, 6);
  const free = courses.filter((course) => course.priceType === "free").slice(0, 3);
  const totalCourses = courses.length;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 text-white">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-center">
            <div>
              <p className="eyebrow-pill">
                <Sparkles className="h-4 w-4 text-amber-300" /> دورات عملية
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
                تعلم مهارات مطلوبة<br />بخطوات واضحة
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">
                اختر من {totalCourses}+ دورة في AI، التسويق الرقمي، العمل الحر، التجارة الإلكترونية، التصميم، اللغات، والعلوم الإسلامية.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#all-courses" className="btn-primary bg-white text-slate-950 hover:bg-slate-100">
                  استكشف الدورات
                </Link>
                <Link href="/pricing" className="btn-ghost-white">خطط الاشتراك</Link>
              </div>
            </div>
            <div className="card-dark rounded-2xl p-6">
              <GraduationCap className="h-10 w-10 text-amber-300" />
              <p className="mt-4 text-5xl font-black">{totalCourses}+</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">دورة عملية بنتائج واضحة — مجانية ومدفوعة وقادمة.</p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-black">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-lg">{courses.filter(c => c.priceType === "free").length}</p>
                  <p className="text-slate-400 mt-0.5">مجانية</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-lg">{courses.filter(c => c.priceType === "coming-soon").length}</p>
                  <p className="text-slate-400 mt-0.5">قادمة</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-lg">{courses.filter(c => c.featured).length}</p>
                  <p className="text-slate-400 mt-0.5">مختارة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="section-light">
        <div className="page-shell py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-pill-light">مختارة</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950">دورات مختارة للبدء</h2>
            </div>
            <Link href="#all-courses" className="btn-secondary shrink-0">كل الدورات</Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => <CourseCard key={course.slug} course={course} compact />)}
          </div>
        </div>
      </section>

      {/* All courses with explorer */}
      <section id="all-courses" className="section-soft">
        <div className="page-shell py-16">
          <h2 className="mb-8 text-2xl font-black text-slate-950">كل الدورات</h2>
          <CourseExplorer />
        </div>
      </section>

      {/* Free courses CTA */}
      <section className="section-light">
        <div className="page-shell py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-pill-light">مجانية</p>
              <h2 className="mt-4 text-2xl font-black text-slate-950">ابدأ بدون دفع</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {free.map((course) => <CourseCard key={course.slug} course={course} compact />)}
          </div>
          <div className="mt-8">
            <Link href="/pricing" className="btn-primary">خطط الاشتراك</Link>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run build**

```bash
npm run build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
git add src/app/courses/page.tsx
git commit -m "redesign: courses marketplace hero + featured + explorer layout"
```

---

### Task 8: Redesign course detail /courses/[slug]/page.tsx

**Files:**
- Modify: `src/app/courses/[slug]/page.tsx`

- [ ] **Step 1: Read current course detail page**

Read `src/app/courses/[slug]/page.tsx` to understand current structure.

- [ ] **Step 2: Ensure the detail page has the following sections in this order**

The course detail page must include:
1. **Hero** — dark navy, outcome-focused headline, status badge, CTA to waitlist/free access
2. **What you'll learn** — bullet points from `course.outcomes` (or `course.whatYouLearn`)
3. **Curriculum** — section list from `course.curriculum` (or `course.modules`)
4. **Who it's for** — `course.targetAudience` as pill tags
5. **Requirements** — `course.requirements` list
6. **Instructor card** — name, bio excerpt
7. **LeadCapture** — with `source={course-${course.slug}}`
8. **Related courses** — 3 from same category

If any data field doesn't exist on the Course type, use the description field as fallback and wrap in a `{course.fieldName || course.description}` guard.

Check what fields exist on the Course type in `src/data/courses.ts` before writing. Use only fields that actually exist.

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/app/courses/[slug]/page.tsx
git commit -m "redesign: course detail page sellable layout with LeadCapture and related courses"
```

---

## Phase 5 — Paths: Roadmap Redesign

### Task 9: Redesign /paths/page.tsx

**Files:**
- Modify: `src/app/paths/page.tsx`

- [ ] **Step 1: Read current paths page**

Read `src/app/paths/page.tsx` to understand current layout and data.

- [ ] **Step 2: Replace with roadmap-style listing**

The paths page must render each path as a roadmap preview card — not a plain white card. Each card includes:

```tsx
// Inside the paths map:
<Link key={path.slug} href={`/paths/${path.slug}`} className="card-premium group p-6">
  <div className="flex items-start justify-between gap-4">
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50">
      <Layers className="h-6 w-6 text-blue-600" />
    </div>
    <div className="flex gap-2">
      <span className="badge-soon">{path.steps.length} مراحل</span>
      {path.featured && <span className="badge-new">مميز</span>}
    </div>
  </div>
  <h3 className="mt-4 text-xl font-black text-slate-950">{path.title}</h3>
  <p className="mt-2 text-sm leading-7 text-slate-500">{path.outcome}</p>
  {/* Mini step timeline */}
  <div className="mt-5 flex gap-2 overflow-hidden">
    {path.steps.slice(0, 4).map((step, i) => (
      <div key={i} className="flex items-center gap-1.5">
        <div className="h-6 w-6 shrink-0 rounded-full bg-slate-100 text-center text-xs font-black leading-6 text-slate-600">{i + 1}</div>
        {i < 3 && <div className="h-px w-4 bg-slate-200" />}
      </div>
    ))}
    {path.steps.length > 4 && <span className="text-xs font-bold text-slate-400">+{path.steps.length - 4}</span>}
  </div>
  <div className="mt-4 flex items-center justify-between">
    <span className="text-xs font-bold text-slate-400">{path.duration}</span>
    <span className="text-sm font-black text-blue-600 group-hover:underline">ابدأ المسار ←</span>
  </div>
</Link>
```

Add import `import { Layers } from "lucide-react";` if missing.

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/app/paths/page.tsx
git commit -m "redesign: paths page with roadmap-style preview cards and step timeline"
```

---

### Task 10: Redesign /paths/[slug]/page.tsx

**Files:**
- Modify: `src/app/paths/[slug]/page.tsx`

- [ ] **Step 1: Read current path detail page**

Read `src/app/paths/[slug]/page.tsx`.

- [ ] **Step 2: Ensure path detail has step-by-step roadmap rendering**

Each step in `path.steps` must render as a timeline item:

```tsx
{path.steps.map((step, index) => (
  <div key={index} className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">
        {index + 1}
      </div>
      {index < path.steps.length - 1 && <div className="mt-2 w-px flex-1 bg-slate-200" />}
    </div>
    <div className="pb-8 min-w-0">
      <h3 className="text-lg font-black text-slate-950">{step.title || step}</h3>
      {step.description && <p className="mt-2 text-sm leading-7 text-slate-500">{step.description}</p>}
      {step.courseSlug && (
        <Link href={`/courses/${step.courseSlug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-black text-blue-600 hover:underline">
          <GraduationCap className="h-4 w-4" /> الدورة المرتبطة
        </Link>
      )}
    </div>
  </div>
))}
```

Add `LeadCapture` at the bottom with `source="path"` and `entitySlug={path.slug}`.

Wrap `step.title` / `step.description` / `step.courseSlug` accesses in existence checks (`step?.title || String(step)`) since `step` may be a string in the current data model.

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/app/paths/[slug]/page.tsx
git commit -m "redesign: path detail with step-by-step timeline and LeadCapture"
```

---

## Phase 6 — Resources: Library Redesign

### Task 11: Redesign /resources/page.tsx

**Files:**
- Modify: `src/app/resources/page.tsx`

- [ ] **Step 1: Read current resources page**

Read `src/app/resources/page.tsx`.

- [ ] **Step 2: Replace with library-style layout**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Download, Sparkles } from "lucide-react";
import { resources, resourceCategories } from "@/data/resources";

export const metadata: Metadata = {
  title: "الموارد - منصتي",
  description: "قوالب، قوائم تحقق، حزم برومبت، ومخططات مجانية ومدفوعة للمغاربة.",
};

export default function ResourcesPage() {
  const free = resources.filter((r) => r.free);
  const all = resources;

  return (
    <>
      <section className="relative bg-slate-950 text-white">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative py-16 sm:py-24">
          <p className="eyebrow-pill"><Sparkles className="h-4 w-4 text-amber-300" /> مكتبة الموارد</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            موارد عملية<br />تستخدمها اليوم
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">
            قوالب، قوائم تحقق، حزم برومبت، ومخططات مصممة خصيصاً للسوق المغربي والعربي.
          </p>
          <div className="mt-5 flex gap-3 text-sm font-bold text-slate-400">
            <span className="badge-free">{free.length} مجانية</span>
            <span className="badge-pro">{all.length - free.length} Pro</span>
          </div>
        </div>
      </section>

      {/* Category filter chips */}
      <section className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="page-shell flex gap-2 overflow-x-auto py-3 no-scrollbar">
          <Link href="/resources" className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
            الكل ({all.length})
          </Link>
          {resourceCategories?.map((cat: string) => (
            <Link key={cat} href={`/resources?category=${encodeURIComponent(cat)}`} className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-700 hover:bg-slate-50">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Free resources */}
      <section className="section-light">
        <div className="page-shell py-16">
          <p className="eyebrow-pill-light">مجانية</p>
          <h2 className="mt-4 text-2xl font-black text-slate-950">ابدأ بالموارد المجانية</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {free.map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="card-premium group flex flex-col p-5">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-emerald-50">
                  <Download className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="badge-free mb-3">{resource.type || "مورد"}</span>
                <h3 className="font-black text-slate-950 group-hover:text-blue-700 transition-colors">{resource.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500 line-clamp-2 flex-1">{resource.description}</p>
                <span className="mt-4 text-sm font-black text-blue-600">تصفح المورد ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All resources */}
      <section className="section-soft">
        <div className="page-shell py-16">
          <h2 className="mb-8 text-2xl font-black text-slate-950">كل الموارد ({all.length})</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="card-premium group p-5">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100">
                    <Download className="h-5 w-5 text-slate-600" />
                  </div>
                  {resource.free ? <span className="badge-free">مجاني</span> : <span className="badge-pro">Pro</span>}
                </div>
                <h3 className="font-black text-slate-950">{resource.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500 line-clamp-2">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/app/resources/page.tsx
git commit -m "redesign: resources library with hero, sticky filter chips, card grid"
```

---

## Phase 7 — Articles: Editorial Hub

### Task 12: Redesign /articles/page.tsx

**Files:**
- Modify: `src/app/articles/page.tsx`

- [ ] **Step 1: Read current articles page**

Read `src/app/articles/page.tsx`.

- [ ] **Step 2: Replace with editorial hub layout**

The articles page must have:
1. Editorial hero (dark navy, with total count and category filter)
2. Featured article (first featured article as a large card)
3. Articles grid (3-column on desktop, 2 on tablet, 1 on mobile)
4. Category filter chips (sticky below header)

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, Sparkles } from "lucide-react";
import { articles, articleCategories } from "@/data/articles";

export const metadata: Metadata = {
  title: "المقالات - منصتي",
  description: "مقالات عملية في التسويق الرقمي، العمل الحر، ريادة الأعمال، والتعلم الإسلامي.",
};

export default function ArticlesPage() {
  const featured = articles.filter((a) => a.featured).slice(0, 1)[0];
  const rest = articles.filter((a) => !a.featured || a.slug !== featured?.slug);

  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-24">
          <p className="eyebrow-pill"><Sparkles className="h-4 w-4 text-amber-300" /> مركز المعرفة</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black sm:text-6xl">مقالات تساعدك على التقدم</h1>
          <p className="mt-5 text-lg leading-[2] text-slate-300 max-w-2xl">
            {articles.length} مقالة في التسويق، AI، العمل الحر، ريادة الأعمال، والمعرفة الإسلامية — مكتوبة للسياق المغربي والعربي.
          </p>
        </div>
      </section>

      {/* Category chips */}
      <section className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="page-shell flex gap-2 overflow-x-auto py-3 no-scrollbar">
          <Link href="/articles" className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">الكل</Link>
          {articleCategories?.slice(0, 8).map((cat: string) => (
            <Link key={cat} href={`/articles?category=${encodeURIComponent(cat)}`} className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-700 hover:bg-slate-50">{cat}</Link>
          ))}
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="section-light">
          <div className="page-shell py-12">
            <p className="eyebrow-pill-light mb-6">مقالة مميزة</p>
            <Link href={`/articles/${featured.slug}`} className="card-premium group grid gap-6 p-6 lg:grid-cols-[1fr_0.6fr] lg:items-center">
              <div>
                <span className="badge-new">{featured.category}</span>
                <h2 className="mt-4 text-2xl font-black text-slate-950 group-hover:text-blue-700 transition-colors sm:text-3xl">{featured.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-500 line-clamp-3">{featured.excerpt || featured.description}</p>
                <div className="mt-5 flex items-center gap-3 text-sm font-bold text-slate-400">
                  {featured.author && <span>{featured.author}</span>}
                  {featured.readingTime && <><span>·</span><span>{featured.readingTime}</span></>}
                </div>
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-slate-100 p-10">
                <Newspaper className="h-16 w-16 text-slate-400" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles grid */}
      <section className="section-soft">
        <div className="page-shell py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="card-premium group flex flex-col p-5">
                <span className="badge-new mb-3 self-start">{article.category}</span>
                <h3 className="text-lg font-black text-slate-950 group-hover:text-blue-700 transition-colors leading-tight flex-1">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500 line-clamp-2">{article.excerpt || article.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-400 border-t border-slate-100 pt-3">
                  {article.author && <span>{article.author}</span>}
                  {article.readingTime && <><span>·</span><span>{article.readingTime}</span></>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

> **Note:** If `article.featured`, `article.author`, `article.readingTime`, or `article.excerpt` don't exist on the Article type in `src/data/articles.ts`, check what fields DO exist and use the closest equivalent (e.g., `article.description` for `article.excerpt`). Use optional chaining for safety.

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/app/articles/page.tsx
git commit -m "redesign: articles editorial hub with featured article + category chips"
```

---

## Phase 8 — Pricing + Instructors

### Task 13: Redesign /pricing/page.tsx

**Files:**
- Modify: `src/app/pricing/page.tsx`

- [ ] **Step 1: Read current pricing page**

Read `src/app/pricing/page.tsx`.

- [ ] **Step 2: Replace with honest premium pricing layout**

The pricing page must have:
1. Dark hero with "Honest" positioning
2. Three plan cards (Free, Pro coming soon, Instructor coming soon)  
3. FAQ section with 4 questions in Arabic

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, CheckCircle2, GraduationCap, Sparkles, Users } from "lucide-react";
import { LeadCapture } from "@/components/minassati/LeadCapture";

export const metadata: Metadata = {
  title: "الاشتراك - منصتي",
  description: "خطط مجانية ومدفوعة قادمة. تعلم مجاناً الآن.",
};

const plans = [
  {
    name: "مجاني",
    nameEn: "Free",
    price: "0 درهم",
    period: "دائمًا مجاني",
    description: "ابدأ التعلم مباشرة بدون دفع.",
    badge: "badge-free",
    icon: BookOpenCheck,
    features: [
      "الوصول لكل المقالات",
      "دورات مجانية مختارة",
      "قارئ القرآن + الاستماع",
      "موارد مجانية قابلة للتحميل",
      "جزء من المسارات",
    ],
    cta: "ابدأ الآن",
    ctaHref: "/courses",
    ctaStyle: "btn-primary",
    active: true,
  },
  {
    name: "Pro",
    nameEn: "Pro",
    price: "قريبًا",
    period: "اشتراك شهري",
    description: "وصول كامل للدورات المتقدمة والموارد الاحترافية.",
    badge: "badge-pro",
    icon: Sparkles,
    features: [
      "كل محتوى الخطة المجانية",
      "الدورات المدفوعة كاملة",
      "كل الموارد والقوالب",
      "المسارات الكاملة",
      "دعم أولوية",
    ],
    cta: "أبلّغني عند الإطلاق",
    ctaHref: "#pricing-waitlist",
    ctaStyle: "btn-secondary",
    active: false,
  },
  {
    name: "Instructor",
    nameEn: "Instructor",
    price: "قريبًا",
    period: "نسبة من المبيعات",
    description: "انشر دوراتك وموادك وابنِ جمهورك على منصتي.",
    badge: "badge-new",
    icon: Users,
    features: [
      "نشر دورات وموارد",
      "لوحة تحكم المدرب",
      "تحليلات المبيعات",
      "مراجعة جودة احترافية",
      "دعم تقني مخصص",
    ],
    cta: "قدّم طلب مدرب",
    ctaHref: "/instructors",
    ctaStyle: "btn-secondary",
    active: false,
  },
];

const faq = [
  { q: "هل الدفع متاح الآن؟", a: "لا، الدفع غير مفعّل حالياً. كل المحتوى المتاح الآن مجاني بالكامل. الاشتراكات ستُطلق قريباً مع إشعار لكل من سجّل اهتمامه." },
  { q: "متى تنطلق الدورات المدفوعة؟", a: "نعمل على إطلاق أول دورات مدفوعة قريباً. سجّل اهتمامك في الاستمارة أدناه وستكون أول من يعلم." },
  { q: "هل يمكنني الانضمام كمدرب الآن؟", a: "يمكنك تقديم طلبك من صفحة المدربين وسنتواصل معك عند فتح باب الانضمام الرسمي. الآن نجمع قائمة المدربين المؤهلين." },
  { q: "هل القرآن مجاني دائمًا؟", a: "نعم، قارئ القرآن والاستماع سيبقى مجانياً دائماً كخدمة مفتوحة ومحترمة داخل منصتي." },
];

export default function PricingPage() {
  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-24">
          <p className="eyebrow-pill"><Sparkles className="h-4 w-4 text-amber-300" /> الاشتراك</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black sm:text-6xl">تعلم مجاناً الآن</h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">
            لا نطلب بطاقة. كل المحتوى المتاح الآن مجاني. الاشتراكات قيد التحضير وستُطلق مع إشعار للمهتمين أولاً.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="page-shell py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div key={plan.name} className={`card-premium flex flex-col p-6 ${plan.active ? "ring-2 ring-blue-600" : ""}`}>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className={plan.badge}>{plan.active ? "متاح الآن" : "قريبًا"}</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-950">{plan.name}</h2>
                  <p className="mt-1 text-3xl font-black text-blue-600">{plan.price}</p>
                  <p className="text-sm font-bold text-slate-400">{plan.period}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{plan.description}</p>
                  <ul className="my-5 flex flex-1 flex-col gap-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm font-bold text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.ctaHref} className={`${plan.ctaStyle} mt-auto text-center`}>{plan.cta}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="pricing-waitlist" className="section-soft">
        <div className="page-shell py-16">
          <div className="mx-auto max-w-2xl">
            <LeadCapture
              id="pricing-waitlist-form"
              title="أبلّغني عند إطلاق الاشتراك"
              description="سنرسل لك إشعاراً عند توفر خطة Pro أو فتح باب انضمام المدربين. لا بريد عشوائي."
              subject="Pricing Interest"
              source="pricing"
              interestType="pro"
              buttonLabel="أرسل اهتمامك"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="page-shell py-16">
          <h2 className="mb-10 text-2xl font-black text-slate-950">أسئلة متكررة</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {faq.map(({ q, a }) => (
              <div key={q} className="card-premium p-6">
                <h3 className="text-lg font-black text-slate-950">{q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pricing/page.tsx
git commit -m "redesign: pricing page with honest 3-plan layout, FAQ, and waitlist form"
```

---

### Task 14: Redesign /instructors/page.tsx

**Files:**
- Modify: `src/app/instructors/page.tsx`

- [ ] **Step 1: Read current instructors page**

Read `src/app/instructors/page.tsx`.

- [ ] **Step 2: Replace with creator opportunity layout**

The instructors page must have:
1. Dark hero with creator value proposition
2. Benefits grid (4 benefits)
3. What you can publish section
4. Review process timeline
5. Quality standards checklist
6. LeadCapture form for instructor application

```tsx
import type { Metadata } from "next";
import { CheckCircle2, GraduationCap, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import { LeadCapture } from "@/components/minassati/LeadCapture";

export const metadata: Metadata = {
  title: "للمدربين - منصتي",
  description: "انشر دوراتك على منصة مغربية متخصصة للمتعلمين والمحترفين.",
};

const benefits = [
  { icon: Users, title: "جمهور مغربي وعربي متخصص", desc: "وصل محتواك لمتعلمين يبحثون عن مهارات رقمية بالعربية والفرنسية والدارجة." },
  { icon: TrendingUp, title: "أدوات نشر وبيع قادمة", desc: "ستوفر منصتي لوحة تحكم للمدرب مع تحليلات مبيعات وإدارة محتوى." },
  { icon: Target, title: "مراجعة جودة احترافية", desc: "كل دورة تمر بمراجعة متخصصة لضمان قيمة حقيقية للمتعلم." },
  { icon: GraduationCap, title: "بناء مكانة تدريسية", desc: "كن من المدربين المؤسسين على منصة تركز على جودة التعلم لا الكمية." },
];

const canPublish = [
  "دورات في التسويق الرقمي، AI، العمل الحر، التجارة الإلكترونية، والتصميم",
  "قوالب عملية، قوائم تحقق، وحزم برومبت جاهزة للاستخدام",
  "مسارات تعليمية مرتبة من الصفر إلى الاحتراف",
  "مقالات متخصصة في مجالك للسياق المغربي والعربي",
];

const reviewSteps = [
  "قدّم طلبك مع نبذة عن خبرتك وأول دورة تريد نشرها",
  "مراجعة أولية خلال 5–7 أيام عمل",
  "جلسة مراجعة جودة المحتوى",
  "إطلاق صفحتك وقبول الطلبات",
];

const qualityStandards = [
  "محتوى عملي يمكن تطبيقه مباشرة",
  "واضح ومنظم مع نتائج محددة",
  "مناسب للسياق المغربي والعربي",
  "لا محتوى مضلل أو وعود غير واقعية",
];

export default function InstructorsPage() {
  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-24">
          <p className="eyebrow-pill"><Sparkles className="h-4 w-4 text-amber-300" /> للمدربين</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black sm:text-6xl">
            هل لديك معرفة<br />تستحق أن تُدرَّس؟
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">
            انضم كمدرب مؤسس على منصتي وأوصل خبرتك لمتعلمين مغاربة وعرب يبحثون عن محتوى عملي بلغتهم.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-light">
        <div className="page-shell py-16">
          <h2 className="mb-10 text-2xl font-black text-slate-950">لماذا منصتي؟</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-premium p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can publish */}
      <section className="section-soft">
        <div className="page-shell py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-black text-slate-950">ماذا يمكنك نشره؟</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {canPublish.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-950">معايير الجودة</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {qualityStandards.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Review process timeline */}
      <section className="section-navy">
        <div className="page-shell py-16">
          <h2 className="mb-10 text-2xl font-black">مراحل انضمام المدرب</h2>
          <div className="flex flex-col gap-0">
            {reviewSteps.map((step, i) => (
              <div key={step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">{i + 1}</div>
                  {i < reviewSteps.length - 1 && <div className="w-px flex-1 bg-white/10 my-2" />}
                </div>
                <p className="pb-8 pt-2 text-sm leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="section-light">
        <div className="page-shell py-16">
          <div className="mx-auto max-w-2xl">
            <LeadCapture
              id="instructor-application"
              title="قدّم طلب انضمام كمدرب"
              description="أخبرنا عن خبرتك وأول دورة تريد نشرها. سنتواصل معك عند فتح باب الانضمام الرسمي."
              subject="Instructor Application"
              source="instructors"
              interestType="instructor"
              messagePlaceholder="أخبرنا عن خبرتك وأول دورة تريد نشرها..."
              buttonLabel="أرسل طلبك"
            />
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/app/instructors/page.tsx
git commit -m "redesign: instructors as creator opportunity page with benefits, process, and form"
```

---

## Phase 9 — Footer Redesign

### Task 15: Redesign Footer.tsx visual layer

**Files:**
- Modify: `src/components/minassati/Footer.tsx`

- [ ] **Step 1: Read full Footer.tsx**

Read `src/components/minassati/Footer.tsx` lines 75–end.

- [ ] **Step 2: Update the footer's render section (below line 80)**

The footer's layout JSX (starting at the `return (` statement) should be replaced with a cleaner dark-on-navy design. Replace everything from the `return (` line to the end of the file with:

```tsx
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Main grid */}
      <div className="page-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          <Link href={prefix("/")} className="flex items-center gap-3" aria-label="منصتي">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950">
              <BookOpenCheck className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <strong className="block text-xl font-black">منصتي</strong>
              <span className="text-xs font-bold text-slate-400">{l.tagline}</span>
            </div>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">{l.description}</p>
          <div className="mt-5">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Link columns */}
        {l.columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">{col.title}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm font-bold text-slate-400 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold text-slate-500">© {currentYear} منصتي · minassati.ma · جميع الحقوق محفوظة</p>
          <div className="flex gap-4 text-xs font-bold text-slate-500">
            <Link href="/privacy" className="hover:text-white transition">{l.columns.find(c => c.title === "الشركة" || c.title === "Company" || c.title === "Entreprise" || c.title === "Empresa")?.links.find(([h]) => h === "/privacy")?.[1] || "Privacy"}</Link>
            <Link href="/terms" className="hover:text-white transition">{l.columns.find(c => c.title === "الشركة" || c.title === "Company" || c.title === "Entreprise" || c.title === "Empresa")?.links.find(([h]) => h === "/terms")?.[1] || "Terms"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

Make sure `BookOpenCheck` and `LanguageSwitcher` remain imported. The `prefix` function and locale detection logic above the return statement remain unchanged.

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/components/minassati/Footer.tsx
git commit -m "redesign: footer with dark brand column, clean link columns, bottom bar"
```

---

## Phase 10 — i18n Translation Cleanup

### Task 16: Fix EN/FR/ES translation gaps

**Files:**
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/fr.ts`
- Modify: `src/i18n/es.ts`

- [ ] **Step 1: Read all three locale files**

```bash
cat /Users/abdou/Downloads/ailiq-lab-core-main/src/i18n/en.ts
cat /Users/abdou/Downloads/ailiq-lab-core-main/src/i18n/fr.ts
cat /Users/abdou/Downloads/ailiq-lab-core-main/src/i18n/es.ts
```

- [ ] **Step 2: Read Arabic master to identify any keys missing in EN/FR/ES**

```bash
cat /Users/abdou/Downloads/ailiq-lab-core-main/src/i18n/ar.ts
```

- [ ] **Step 3: For each key that exists in AR but not in EN, add the English translation**

After reading both files, add missing keys to EN. Common expected gaps include pricing, instructors, and courses page UI strings. If a key like `paths` or `resources` exists in AR but the EN value is still Arabic text, correct it.

- [ ] **Step 4: Repeat for FR and ES**

Same process for French and Spanish files.

- [ ] **Step 5: Run lint + build**

```bash
npm run lint 2>&1 | tail -20 && npm run build 2>&1 | tail -20
```

- [ ] **Step 6: Commit**

```bash
git add src/i18n/en.ts src/i18n/fr.ts src/i18n/es.ts
git commit -m "i18n: fill EN/FR/ES translation gaps for pricing, instructors, courses UI"
```

---

## Phase 11 — Final QA + Smoke Tests

### Task 17: Lint, build, and smoke test all critical routes

**Files:** No file changes — verification only.

- [ ] **Step 1: Run ESLint**

```bash
npm run lint 2>&1
```

Expected: Zero errors. If TypeScript errors appear, fix them before continuing.

- [ ] **Step 2: Run full production build**

```bash
npm run build 2>&1
```

Expected: Exit code 0. Note any warnings but do not block on warnings.

- [ ] **Step 3: Start production server and run smoke tests**

```bash
npm start &
sleep 5
```

Then test each route:

```bash
for route in / /courses /courses/ai-for-business /paths /resources /articles /pricing /instructors /quran /quran/1 /audio /about /contact /sitemap.xml /robots.txt; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000${route}")
  echo "${STATUS} ${route}"
done
```

Expected: All routes return 200 (or 308 for redirects). `/sitemap.xml` and `/robots.txt` must return 200.

- [ ] **Step 4: Kill dev server**

```bash
kill $(lsof -ti:3000) 2>/dev/null || true
```

- [ ] **Step 5: Check sitemap for legacy routes**

```bash
curl -s http://localhost:3000/sitemap.xml | grep -E "(dashboard-preview|creator-preview|games|badges|challenges)" || echo "Clean — no legacy routes in sitemap"
```

Expected: "Clean — no legacy routes in sitemap"

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "redesign: Minassati premium focused marketplace — complete design system rescue

- Homepage: premium hero, problem/solution/pillars, redesigned all 10 sections
- Courses: marketplace layout with premium cards and filtering
- Paths: roadmap-style listing with step timeline
- Resources: library hub with free/pro split and filter chips
- Articles: editorial hub with featured article and category navigation
- Pricing: honest 3-plan layout with FAQ and waitlist LeadCapture
- Instructors: creator opportunity page with process timeline
- Footer: clean dark design removing all legacy preview links
- Sitemap: legacy routes removed (/student-dashboard-preview, /creator-preview)
- noindex: applied to all C-category legacy pages
- Design system: premium CSS utilities (badge-*, btn-*, card-premium, section-*)
- i18n: EN/FR/ES gaps filled for core UI"
```

- [ ] **Step 7: Push to main**

```bash
git push origin main
```

---

## Phase 12 — IMAGE_PROMPTS.md Update

### Task 18: Update IMAGE_PROMPTS.md with premium visual prompts

**Files:**
- Modify: `IMAGE_PROMPTS.md` (create if does not exist)

- [ ] **Step 1: Check if IMAGE_PROMPTS.md exists**

```bash
ls /Users/abdou/Downloads/ailiq-lab-core-main/IMAGE_PROMPTS.md 2>/dev/null && echo "exists" || echo "missing"
```

- [ ] **Step 2: Write or overwrite IMAGE_PROMPTS.md**

```markdown
# Minassati — Premium Image Generation Prompts

## Hero / Platform Overview
"Premium Arabic digital learning platform dashboard, dark navy UI (#0F172A), teal and blue accents (#14B8A6, #3B82F6), clean card-based course grid, subtle 8-pointed geometric Moroccan star pattern watermark, professional minimalist SaaS aesthetic, soft gradient glow, no text overlays"

## Marketplace Hero
"Moroccan professional learning marketplace hero illustration, dark background, glowing teal-to-blue gradient accent, floating course cards with Arabic typography, dashboard progress bar, modern premium SaaS style, no people visible"

## Course Dashboard Mockup
"Clean dark-mode learning dashboard UI mockup, course progress tracking, circular progress ring in teal, card grid with course thumbnails, Arabic RTL layout, premium navy and blue palette, Stripe/Linear quality design system"

## Moroccan Digital Learning Context
"Moroccan young professional working on laptop in modern workspace, digital skills context, warm natural lighting, clean desk, Arabic learning platform visible on screen, authentic Moroccan interior elements, professional photography style"

## Instructor/Creator Dashboard
"Premium creator dashboard UI, course publishing interface, dark navy sidebar, teal accent progress bars, analytics cards, Arabic text, professional SaaS quality, clean minimalist design"

## Resource Library
"Premium digital resource library UI, template cards, download icons, teal and green accent badges, clean white cards on soft grey background, Arabic RTL layout, professional marketplace quality"

## Quran Reader UI
"Elegant Quran reader interface, dark navy background, Arabic Amiri calligraphic font, teal accent, subtle golden glow around Arabic text, clean minimal respectful design, no decorative Islamic calligraphy art beyond the text itself"

## AI and Business Course Cover
"Abstract AI neural network visualization, dark blue background, electric blue and teal gradient nodes, professional business context, no text, premium course thumbnail style"

## Marketing Course Cover
"Digital marketing concept: graphs, social media icons, target arrows, gradient blue-to-teal, clean dark background, modern business professional aesthetic, no text"

## Freelancing Course Cover
"Freelancer laptop workspace concept, abstract minimalist illustration, warm accent colors on dark background, professional quality, top-down perspective"
```

- [ ] **Step 3: Commit**

```bash
git add IMAGE_PROMPTS.md
git commit -m "docs: update IMAGE_PROMPTS.md with premium Minassati visual asset prompts"
```

---

## Self-Review Checklist

### Spec Coverage

| Requirement | Covered in Task |
|-------------|-----------------|
| Route cleanup (sitemap) | Task 1 |
| Footer legacy links removed | Task 2 |
| noindex on legacy pages | Task 3 |
| Design system CSS tokens | Task 4 |
| Homepage redesign (all 10 sections) | Task 5 |
| CourseCard premium design | Task 6 |
| /courses marketplace | Task 7 |
| Course detail sellable | Task 8 |
| /paths roadmap style | Task 9 |
| /paths/[slug] timeline | Task 10 |
| /resources library | Task 11 |
| /articles editorial | Task 12 |
| /pricing honest + FAQ | Task 13 |
| /instructors creator page | Task 14 |
| Footer redesign | Task 15 |
| i18n EN/FR/ES cleanup | Task 16 |
| Lint + build + smoke test | Task 17 |
| IMAGE_PROMPTS.md | Task 18 |
| Quran/audio — preserve only | ✅ Not touched (by design) |
| Responsive QA | Integrated into build/smoke verification |

### Gaps Identified

- **`/resources/[slug]/page.tsx`**: The plan covers the listing page but leaves the detail page to the executor to check. Task 8's note covers this pattern — executor should read and apply the same sellable detail layout approach to resources if a detail page exists.
- **`/articles/[slug]/page.tsx`**: Same — check for existing detail page and apply reading-width typography + LeadCapture at bottom.
- **Responsive visual testing**: Cannot be fully automated. After build succeeds, manually verify hero and cards at 390px, 768px, 1280px in browser devtools before final push.

### Type Consistency

- `CourseCard` references `course.priceType`, `course.outcome`, `course.instructor`, `course.duration`, `course.level`, `course.category` — executor must check these exist on the `Course` type in `src/data/courses.ts` and add optional chaining (`course.outcome || course.description`) for any field that may be missing.
- `LeadCapture` props `id`, `title`, `description`, `subject`, `source`, `interestType`, `messagePlaceholder`, `buttonLabel` — confirmed correct from audit of `src/components/minassati/LeadCapture.tsx`.
- `articleCategories` and `resourceCategories` are exported from data files — verify the export name matches exactly before using.
