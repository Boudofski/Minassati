# Minassati After-Bac Platform Upgrade — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Minassati into a more alive, useful Moroccan post-bac guidance platform — richer homepage, expanded data, more articles, and brand wording cleanup — while remaining Arabic-only, fast, and AdSense-friendly.

**Architecture:** All changes are in Next.js App Router static pages, data files (TS), and React components. No new routes added, no new dependencies. Data-driven pages (schools, opportunities, after-bac) consume updated data files. Homepage (`LocalizedHome.tsx`) gets new sections added inline.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Lucide React icons, Framer Motion (already installed).

**Current state (verified):**
- 70 articles in `src/data/articles.ts`
- moroccan-schools.ts has: ENSA, ENCG, EST, FST, CPGE, ISPITS, EMI, EHTP, INSEA, OFPPT, BTS + private + abroad sections
- Missing from schools: IAV, ENA, ISIC, ISMAC
- "منصة التوجيه المدرسي المغربية" appears in: site.ts, page.tsx (×2), Header.tsx, Footer.tsx, about/page.tsx (×2), ar.ts (×2)
- After-bac page is minimal; opportunities page is already comprehensive
- Missing Phase 6 articles: how-to-read-competition-announcement, broader school-choice mistakes, study-morocco-vs-abroad dedicated article, prepare-application-file-after-bac dedicated article

---

## Task 1: Brand wording cleanup (Phase 1)

**Files:**
- Modify: `src/lib/site.ts`
- Modify: `src/app/page.tsx`
- Modify: `src/components/minassati/Header.tsx:63`
- Modify: `src/components/minassati/Footer.tsx:43`
- Modify: `src/app/about/page.tsx`
- Modify: `src/i18n/dictionaries/ar.ts`

- [ ] **Step 1: Update site.ts**

```ts
// src/lib/site.ts
export const site = {
  name: "منصتي",
  url: "https://minassati.ma",
  title: "منصتي — دليلك بعد الباك والتوجيه الدراسي",
  description:
    "دليل مغربي يساعد التلاميذ والطلبة على فهم اختيارات ما بعد الباك، المدارس والمعاهد، الفرص بالخارج، التوجيه الشخصي، والمقالات العملية.",
  author: "عبد الخالق بدوفي",
};

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
```

- [ ] **Step 2: Update page.tsx metadata**

In `src/app/page.tsx`, replace metadata block:

```tsx
export const metadata: Metadata = {
  title: "منصتي — دليلك بعد الباك والتوجيه الدراسي",
  description:
    "دليل مغربي يساعد التلاميذ والطلبة على فهم اختيارات ما بعد الباك، المدارس والمعاهد، الفرص بالخارج، التوجيه الشخصي، والمقالات العملية.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "منصتي — دليلك بعد الباك والتوجيه الدراسي",
    description: "اختيار المدارس، الفرص الأجنبية، التوجيه الشخصي، التقويم، والنصائح العملية للطلبة في المغرب.",
  },
};
```

- [ ] **Step 3: Update Header.tsx logo subtitle**

Line 63 in Header.tsx: Change `منصة التوجيه المدرسي المغربية` → `دليلك بعد الباك`

- [ ] **Step 4: Update Footer.tsx brand subtitle and description**

Change footer subtitle `منصة التوجيه المدرسي المغربية` → `دليلك بعد الباك`

Change footer description to:
`منصتي كتعاون التلاميذ والطلبة يفهمو اختيارات ما بعد الباك، المدارس، الفرص، والتوجيه بطريقة بسيطة وواضحة.`

- [ ] **Step 5: Update about/page.tsx**

Update meta title to: `عن منصتي | دليلك بعد الباك`

In content body, replace the phrase `منصة التوجيه المدرسي المغربية` with `دليلك بعد الباك`

- [ ] **Step 6: Update ar.ts dictionary**

```ts
tagline: "دليلك بعد الباك",
title: "منصتي — دليلك بعد الباك والتوجيه الدراسي",
```

- [ ] **Step 7: Commit**

```bash
git add src/lib/site.ts src/app/page.tsx src/components/minassati/Header.tsx src/components/minassati/Footer.tsx src/app/about/page.tsx src/i18n/dictionaries/ar.ts
git commit -m "feat: replace stiff brand tagline with warmer after-bac wording"
```

---

## Task 2: Homepage enrichment (Phase 2)

**Files:**
- Modify: `src/components/minassati/LocalizedHome.tsx`

- [ ] **Step 1: Update hero eyebrow badge text**

Change eyebrow from `منصتي — دليلك للتوجيه بعد الباك` → `منصتي — دليلك بعد الباك`

- [ ] **Step 2: Update articles section title**

Change `أحدث النصائح والمقالات` → `مقالات تساعدك تختار بوضوح`

Change articles to prioritize after-bac/schools/opportunities articles by sorting: articles tagged "بعد الباك" or "المدارس" first, then rest.

- [ ] **Step 3: Add "من أين تبدأ بعد الباك؟" section**

Insert after the action cards section and before the guidance steps section:

```tsx
const startSteps = [
  { n: "01", title: "حدد شعبتك ومستواك", desc: "الباك العلمي، الآداب، الاقتصاد، المهني؟ هذه نقطة الانطلاق." },
  { n: "02", title: "اكتشف الخيارات المتاحة", desc: "الجامعة، المدارس العليا، التكوين المهني، الخارج — كلها مسارات." },
  { n: "03", title: "قارن بين الخيارات", desc: "الجامعة والمدارس والتكوين ليست متشابهة في الإيقاع ولا النتائج." },
  { n: "04", title: "جهز الوثائق والمواعيد", desc: "ملف الترشيح يحتاج تحضيراً مبكراً. تحقق من المواقع الرسمية." },
  { n: "05", title: "اطلب توجيهًا إذا بقيت حائرًا", desc: "أرسل سؤالك لنساعدك تفكر بشكل أهدأ." },
];
```

Section JSX (add after the action-cards section):

```tsx
<section className="bg-slate-50">
  <div className="page-shell py-14">
    <p className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700">خطوات البداية</p>
    <h2 className="mt-4 text-3xl font-black text-slate-950">من أين تبدأ بعد الباك؟</h2>
    <p className="mt-3 text-sm font-bold leading-7 text-slate-500">خمس خطوات عملية تساعدك تبدأ باتزان بدل الضغط.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-5">
      {startSteps.map((step) => (
        <div key={step.n} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
          <span className="text-3xl font-black text-emerald-700">{step.n}</span>
          <h3 className="mt-3 font-black text-slate-950">{step.title}</h3>
          <p className="mt-2 text-sm font-bold leading-7 text-slate-600">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 4: Add "أهم اختيارات ما بعد الباك" section**

Add `pathChoices` array and section before the articles section:

```tsx
const pathChoices = [
  { title: "الجامعة", badge: "مفتوح", desc: "مسار واسع في مدن كثيرة. يناسب من يستطيع التنظيم الذاتي.", href: "/after-bac" },
  { title: "المدارس العليا", badge: "مباريات", desc: "مؤسسات بانتقاء في الهندسة والتجارة والتقنيات. يحتاج تحضيراً.", href: "/schools" },
  { title: "التكوين المهني", badge: "تطبيقي", desc: "مسار عملي لاكتساب مهنة في وقت قصير. يناسب التوجه التطبيقي.", href: "/after-bac" },
  { title: "الدراسة بالخارج", badge: "تخطيط مبكر", desc: "يحتاج لغة وتمويلاً ووثائق. خيار لمن يخطط مبكراً.", href: "/opportunities" },
  { title: "المهارات الرقمية", badge: "داعم", desc: "تكمل أي مسار: البرمجة، التصميم، التسويق، البيانات.", href: "/articles" },
  { title: "إعادة التوجيه", badge: "مرحلة", desc: "قد تناسب من يحتاج وقتاً أو تقوية قبل مسار أوضح.", href: "/guidance-request" },
];
```

Section JSX (add before articles section):

```tsx
<section className="bg-white">
  <div className="page-shell py-14">
    <p className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">المسارات</p>
    <h2 className="mt-4 text-3xl font-black text-slate-950">أهم اختيارات ما بعد الباك</h2>
    <p className="mt-3 text-sm font-bold leading-7 text-slate-500">ست مسارات رئيسية — كل واحد يناسب نوعاً من الطلبة.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pathChoices.map((choice) => (
        <Link key={choice.href + choice.title} href={choice.href}
          className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-black text-slate-950">{choice.title}</h3>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-black text-emerald-800">{choice.badge}</span>
          </div>
          <p className="mt-3 text-sm font-bold leading-7 text-slate-600">{choice.desc}</p>
          <span className="mt-4 inline-flex text-sm font-black text-red-700 group-hover:text-emerald-700">اكتشف ←</span>
        </Link>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 5: Commit**

```bash
git add src/components/minassati/LocalizedHome.tsx
git commit -m "feat: enrich homepage with start-steps, path-choices sections and updated article title"
```

---

## Task 3: Moroccan schools data — add missing institutions (Phase 3)

**Files:**
- Modify: `src/data/moroccan-schools.ts`

Missing institutions to add to the `public-higher-schools` section:
- IAV Hassan II (Institut Agronomique et Vétérinaire)
- ENA (École Nationale d'Architecture)
- ISIC (Institut Supérieur de l'Information et de la Communication)
- ISMAC (Institut Supérieur des Métiers de l'Audiovisuel et du Cinéma)

- [ ] **Step 1: Add IAV entry**

In the `public-higher-schools` entries array, add after EHTP:

```ts
{
  slug: "iav",
  name: "المعهد الزراعي البيطري الحسن الثاني",
  acronym: "IAV",
  description: "معهد عمومي للعلوم الزراعية والبيطرية والهندسة الغذائية. الولوج عبر مسار علمي ومباراة دخول.",
  fits: "يناسب من لديه اهتمام بالعلوم الزراعية، البيطرة، تقنيات الغذاء، أو التنمية القروية.",
  fields: ["الهندسة الزراعية", "البيطرة", "هندسة الغذاء", "تقنيات الفلاحة"],
  caution: schoolVerificationNote,
},
```

- [ ] **Step 2: Add ENA entry**

```ts
{
  slug: "ena",
  name: "المدرسة الوطنية للعمارة",
  acronym: "ENA",
  description: "مدرسة عمومية في العمارة والتخطيط العمراني. الولوج عبر مسار تحضيري أو مباراة. الدراسة في مدن متعددة.",
  fits: "يناسب من لديه ميول إبداعية وتقنية في التصميم المعماري والمدن.",
  fields: ["العمارة", "التخطيط العمراني", "التصميم الداخلي", "المناظر الطبيعية"],
  caution: schoolVerificationNote,
},
```

- [ ] **Step 3: Add ISIC entry**

```ts
{
  slug: "isic",
  name: "المعهد العالي للإعلام والاتصال",
  acronym: "ISIC",
  description: "معهد عمومي في الصحافة، الاتصال، والعلاقات العامة. الولوج عبر مباراة وطنية.",
  fits: "يناسب من لديه اهتمام بالإعلام، الكتابة، التواصل، أو العلاقات العامة.",
  fields: ["الصحافة", "الاتصال المؤسسي", "العلاقات العامة", "الإعلام الرقمي"],
  caution: schoolVerificationNote,
},
```

- [ ] **Step 4: Add ISMAC entry**

```ts
{
  slug: "ismac",
  name: "المعهد العالي لمهن السمعي البصري والسينما",
  acronym: "ISMAC",
  description: "معهد عمومي في إنتاج الأفلام، التصوير، الصوت، والمهن السمعية البصرية. الولوج عبر مباراة.",
  fits: "يناسب من لديه شغف حقيقي بالسينما، التصوير، المونتاج، أو الإنتاج السمعي البصري.",
  fields: ["إنتاج الأفلام", "التصوير", "المونتاج", "الصوت والإضاءة"],
  caution: schoolVerificationNote,
},
```

- [ ] **Step 5: Commit**

```bash
git add src/data/moroccan-schools.ts
git commit -m "feat: add IAV, ENA, ISIC, ISMAC to moroccan schools data"
```

---

## Task 4: Expand after-bac page (Phase 4)

**Files:**
- Modify: `src/app/after-bac/page.tsx`
- Modify: `src/data/after-bac.ts` (add track-based guidance data)

- [ ] **Step 1: Add track-based guidance to after-bac.ts**

Add to end of `src/data/after-bac.ts`:

```ts
export type BacTrackGuidance = {
  track: string;
  paths: string[];
  note: string;
};

export const bacTrackGuidance: BacTrackGuidance[] = [
  {
    track: "علوم فيزيائية",
    paths: ["ENSA", "FST", "CPGE علمية", "كليات العلوم", "EHTP", "EMI", "IAV"],
    note: "قد تناسبك مسارات الهندسة والعلوم التطبيقية. تحقق من شروط الولوج الرسمية لكل مؤسسة.",
  },
  {
    track: "علوم الحياة والأرض",
    paths: ["كليات العلوم", "الطب والصيدلة", "ISPITS", "IAV", "FST"],
    note: "قد تناسبك الصحة والعلوم البيولوجية والفلاحة. تحقق دائماً من الشروط الرسمية.",
  },
  {
    track: "علوم رياضية",
    paths: ["CPGE", "ENSA", "ENCG", "EMI", "EHTP", "FST"],
    note: "قد تناسبك الهندسة والتجارة الكمية والتحليل. تحقق من شروط كل مسار رسمياً.",
  },
  {
    track: "علوم اقتصادية",
    paths: ["ENCG", "كليات الاقتصاد", "ISCAE", "INSEA", "EST تسيير"],
    note: "قد تناسبك التجارة والتسيير والتحليل المالي. تحقق من الشروط الرسمية.",
  },
  {
    track: "آداب وعلوم إنسانية",
    paths: ["كليات الآداب", "ISIC", "كليات الحقوق", "ترجمة وتواصل"],
    note: "قد تناسبك الصحافة والتواصل والقانون والتعليم. تحقق من المسارات المتاحة رسمياً.",
  },
  {
    track: "تقني أو مهني",
    paths: ["BTS", "OFPPT تقني متخصص", "EST", "معاهد تقنية"],
    note: "قد تناسبك مسارات التطبيق المباشر والتكوين المهني. تحقق من الاعتماد الرسمي.",
  },
];

export const choiceCriteria = [
  "المواد التي تتقنها فعلاً",
  "نوع التعلم الذي يناسبك",
  "المدينة والتكلفة",
  "إيقاع الدراسة الذي تستطيع تحمله",
  "سوق العمل في المجال",
  "شروط الولوج الرسمية",
  "آراء طلبة سبقوك في نفس المسار",
];
```

- [ ] **Step 2: Rewrite after-bac/page.tsx**

Replace full file content with expanded version:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, TriangleAlert, CheckCircle2 } from "lucide-react";
import { afterBacCategories, afterBacOptions, bacTrackGuidance, choiceCriteria } from "@/data/after-bac";

export const metadata: Metadata = {
  title: "دليل ما بعد الباك في المغرب - منصتي",
  description: "دليل اختيارات ما بعد الباك في المغرب: الجامعة، المدارس العليا، التكوين المهني، الدراسة بالخارج، والمهارات الرقمية — مع توجيه حسب الشعبة.",
  alternates: { canonical: "/after-bac" },
};

export default function AfterBacPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#b91c1c_0%,#0f7a3b_58%,#075c32_100%)] text-white">
        <div className="page-shell py-14 sm:py-20">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">بعد الباك</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">دليلك لاختيارات ما بعد الباك</h1>
          <p className="mt-4 max-w-2xl text-lg font-bold leading-8 text-white/90">قارن بين المسارات بهدوء. لا تعتمد على شروط أو آجال إلا من المواقع الرسمية.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/guidance-request" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-800">
              اطلب توجيهاً شخصياً <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link href="/schools" className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-black text-white">
              اكتشف المدارس
            </Link>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="bg-white">
        <div className="page-shell py-8">
          <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <p className="text-sm font-black leading-8 text-amber-950">
              المعلومات أدناه تقريبية وتتغير. تحقق دائمًا من المواقع الرسمية للمؤسسات والجهات المنظمة قبل أي قرار أو تسجيل.
            </p>
          </div>
        </div>
      </section>

      {/* Path groups */}
      <section className="bg-slate-50">
        <div className="page-shell py-12">
          <p className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">المسارات الرئيسية</p>
          <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">اختيارات حسب الفئة</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {afterBacCategories.map((category) => (
              <span key={category} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-black text-emerald-800">{category}</span>
            ))}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {afterBacOptions.map((option) => (
              <article key={option.slug} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600 self-start">{option.category}</span>
                <h2 className="mt-3 text-lg font-black text-slate-950">{option.title}</h2>
                <p className="mt-2 grow text-sm leading-7 text-slate-600">{option.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {option.goodFor.map((item) => (
                    <span key={item} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Track-based guidance */}
      <section className="bg-white">
        <div className="page-shell py-14">
          <p className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700">حسب الشعبة</p>
          <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">اختيارات حسب شعبتك</h2>
          <p className="mt-3 text-sm font-bold leading-7 text-slate-500">
            هذه إشارات عامة فقط. القبول الفعلي يعتمد على شروط ونقط تحقق منها رسمياً.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {bacTrackGuidance.map((g) => (
              <div key={g.track} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-black text-emerald-800">{g.track}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.paths.map((p) => (
                    <span key={p} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">{p}</span>
                  ))}
                </div>
                <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs font-black leading-6 text-amber-900">{g.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-slate-50">
        <div className="page-shell py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="inline-flex rounded-full bg-slate-200 px-4 py-2 text-sm font-black text-slate-700">كيف تختار؟</p>
              <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">معايير الاختيار الفعلي</h2>
              <p className="mt-3 text-sm font-bold leading-7 text-slate-600">
                الاختيار ليس فقط عن النقط. هناك عوامل أخرى قد تكون أهم على المدى البعيد.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 content-start">
              {choiceCriteria.map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                  <span className="text-sm font-black text-slate-800">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 text-white">
        <div className="page-shell py-14 text-center">
          <h2 className="text-3xl font-black">بقيت حائراً؟</h2>
          <p className="mt-4 mx-auto max-w-xl text-base font-bold leading-8 text-white/85">
            أرسل سؤالك وأخبرنا بشعبتك، اهتماماتك، ومدينتك. سنساعدك تفكر بطريقة أهدأ.
          </p>
          <Link href="/guidance-request" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-emerald-800">
            إرسال طلب توجيه <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/data/after-bac.ts src/app/after-bac/page.tsx
git commit -m "feat: expand after-bac page with track guidance, choice criteria, and CTA"
```

---

## Task 5: Add 7 missing articles (Phase 6)

**Files:**
- Modify: `src/data/articles.ts`

Missing articles (7 topics from spec not yet covered):
1. `how-to-read-competition-announcement-morocco` — كيف تقرأ إعلان مباراة مدرسة عليا؟
2. `mistakes-choosing-school-morocco` — أخطاء يقع فيها التلاميذ عند اختيار المدرسة (broader than private)
3. `prepare-application-file-after-bac` — كيف تجهز ملف الترشيح بعد الباك؟
4. `month-plan-after-results-morocco` — كيف تبني خطة شهر كامل بعد ظهور النتائج؟
5. `university-vs-vocational-training-morocco` — كيف تختار بين الجامعة والتكوين المهني؟
6. `study-morocco-vs-abroad-decision` — كيف تختار بين الدراسة في المغرب والخارج؟
7. `verify-official-admission-requirements` — كيف تتحقق من شروط الولوج الرسمية؟

Note: `30-day-plan-choose-path-after-bac` already covers topic 4 broadly; `understand-school-admission-requirements-morocco` covers topic 7 partially; `is-studying-abroad-right-for-you` covers topic 6. But topics 1, 2, 3, 5 are clearly new. Add all 7 to be thorough.

- [ ] **Step 1: Add 7 article seeds to the `articleSeeds` array in articles.ts**

Add after the last seed entry (before the closing `];`):

```ts
  {
    title: "كيف تقرأ إعلان مباراة مدرسة عليا؟",
    slug: "how-to-read-competition-announcement-morocco",
    category: "المدارس",
    excerpt: "دليل عملي لفهم إعلانات مباريات الدخول: الشروط، الوثائق، الآجال، وما يجب التحقق منه رسمياً قبل الترشيح.",
    intro: "إعلانات المباريات قد تبدو معقدة، لكنها تتبع هيكلاً متقارباً. تعلم كيف تقرأها بشكل صحيح حتى لا تفوتك تفاصيل مهمة أو تضيع وقتك في مؤسسة لا تناسبك.",
    steps: [
      "تحقق من اسم المؤسسة الرسمي وموقعها الرسمي",
      "اقرأ شروط الترشيح: الشعبة، النقط، المواد المطلوبة",
      "افهم مراحل المباراة: كتابي، شفوي، دراسة ملف",
      "لاحظ الآجال الرسمية للتسجيل والدفع إن وجد",
      "احفظ رابط المصدر الرسمي لا رابط المنتدى أو الصفحة الثانوية",
    ],
    checklistTitle: "ما يجب التحقق منه في كل إعلان",
    checklist: [
      "هل أنا ضمن الشعبة المطلوبة؟",
      "ما الحد الأدنى للنقطة المطلوبة؟",
      "ما الوثائق المطلوبة للترشيح؟",
      "ما المراحل والتواريخ؟",
      "هل المصدر هو الموقع الرسمي للمؤسسة؟",
    ],
    verify: true,
  },
  {
    title: "أخطاء يقع فيها التلاميذ عند اختيار المدرسة",
    slug: "mistakes-choosing-school-morocco",
    category: "المدارس",
    excerpt: "الأخطاء الأكثر شيوعاً عند اختيار مؤسسة ما بعد الباك، وكيف تتجنبها قبل أن تندم.",
    intro: "كثير من الطلبة يختارون المؤسسة بسرعة أو تحت ضغط. النتيجة: سنة ضائعة أو مسار لا يناسبهم. تعرف على هذه الأخطاء قبل أن تقع فيها.",
    steps: [
      "لا تختار مؤسسة فقط لأنها مشهورة بين أصدقائك",
      "لا تسجل دون قراءة الشروط الرسمية",
      "لا تعتمد على معلومات غير موثقة من السوشيال ميديا",
      "لا تقارن نفسك بآخرين لهم وضع مختلف",
      "لا تؤجل البحث إلى الأسبوع الأخير",
    ],
    checklistTitle: "أسئلة لتجنب الأخطاء",
    checklist: [
      "هل قرأت شروط الولوج الرسمية؟",
      "هل سألت طلبة سبقوك في هذه المؤسسة؟",
      "هل قارنت ثلاث مؤسسات على الأقل؟",
      "هل تحققت من الاعتماد الرسمي للمؤسسة؟",
      "هل وضعت بديلاً واقعياً؟",
    ],
    mistakes: ["الاختيار بناء على اسم المؤسسة فقط", "إهمال التداريب والفرص المهنية", "عدم قراءة الإعلان الرسمي كاملاً"],
    verify: true,
  },
  {
    title: "كيف تجهز ملف الترشيح بعد الباك؟",
    slug: "prepare-application-file-after-bac",
    category: "بعد الباك",
    excerpt: "دليل خطوة بخطوة لتجهيز ملف الترشيح لأي مؤسسة بعد الباك: الوثائق، الترتيب، والأشياء التي تنساها.",
    intro: "الملف الجيد لا يعني فقط جمع الأوراق. يعني أن تجهزها بشكل صحيح وفي الوقت المناسب. كثير من الطلبة يخسرون فرصة بسبب وثيقة ناقصة أو نسخة غير مصادق عليها.",
    steps: [
      "اقرأ الإعلان الرسمي للمؤسسة وحدد الوثائق المطلوبة بالضبط",
      "جهز كشف النقط مصادقاً عليه من مؤسستك",
      "احضر شهادة الباك أو ما يعادلها",
      "اكتب رسالة تحفيزية واضحة وصادقة",
      "جهز CV إن طلب، مع الاهتمام بالشكل والوضوح",
      "احفظ نسخاً رقمية لكل وثيقة",
    ],
    checklistTitle: "وثائق الملف الأساسية",
    checklist: [
      "كشف النقط (مصادق عليه)",
      "شهادة الباك أو شهادة مدرسية",
      "بطاقة التعريف الوطنية (نسخة)",
      "رسالة التحفيز (إن طلبت)",
      "CV (إن طلب)",
      "صور شمسية",
      "وثائق إضافية حسب المؤسسة",
    ],
    verify: true,
  },
  {
    title: "كيف تبني خطة شهر كامل بعد ظهور نتائج الباك؟",
    slug: "month-plan-after-results-morocco",
    category: "بعد الباك",
    excerpt: "خطة عملية لشهر ما بعد النتائج: من يوم الإعلان إلى أول خطوة فعلية في مسارك الدراسي.",
    intro: "شهر ما بعد النتائج هو من أهم الأشهر في حياتك الدراسية. كثيرون يقضونه في التردد. هذه خطة مقترحة تساعدك تستغله فعلاً.",
    steps: [
      "الأسبوع الأول: ارتاح، ثم اجمع قائمة المؤسسات التي تريدها",
      "الأسبوع الثاني: ابحث في المواقع الرسمية عن الشروط والآجال",
      "الأسبوع الثالث: جهز الوثائق وابدأ التسجيل في المؤسسات المناسبة",
      "الأسبوع الرابع: تابع الردود وضع خطة بديلة إذا لزم الأمر",
    ],
    checklistTitle: "أهداف الشهر الأول",
    checklist: [
      "قائمة مؤسسات مستهدفة جاهزة",
      "الشروط الرسمية مقروءة ومفهومة",
      "الوثائق المطلوبة مجهزة",
      "التسجيل في مؤسسات مختلفة مكتمل",
      "خطة بديلة واضحة",
    ],
    verify: true,
  },
  {
    title: "كيف تختار بين الجامعة والتكوين المهني؟",
    slug: "university-vs-vocational-training-morocco",
    category: "بعد الباك",
    excerpt: "مقارنة عملية بين مسار الجامعة ومسار التكوين المهني: الإيقاع، النتائج، والطالب الذي يناسبه كل مسار.",
    intro: "الجامعة ليست أفضل دائماً من التكوين المهني، والعكس صحيح. الأهم هو أن تفهم ما يناسبك شخصياً لا ما يناسب الآخرين.",
    steps: [
      "فكر في إيقاع الدراسة: نظري مطول أم تطبيقي سريع؟",
      "قارن فرص التوظيف في المجال الذي تريده",
      "افهم التكاليف والمسافة والمدن المتاحة",
      "سأل خريجين من كلا المسارين",
      "تحقق من الشروط الرسمية لكل مؤسسة تفكر فيها",
    ],
    checklistTitle: "أسئلة المقارنة",
    checklist: [
      "ما إيقاع الدراسة الذي أستطيع الاستمرار فيه؟",
      "ما المجال الذي أريد التخصص فيه؟",
      "ما الفارق في التكلفة والمدة؟",
      "ما نوع التوظيف الذي أستهدفه؟",
      "هل أريد المتابعة للدراسات العليا لاحقاً؟",
    ],
    verify: true,
  },
  {
    title: "كيف تختار بين الدراسة في المغرب والدراسة بالخارج؟",
    slug: "study-morocco-vs-abroad-decision",
    category: "الفرص بالخارج",
    excerpt: "عوامل الاختيار الحقيقية بين البقاء في المغرب أو الدراسة بالخارج، بدون وعود أو تهويل.",
    intro: "الدراسة بالخارج ليست جواباً آلياً، والبقاء في المغرب ليس تراجعاً. الاختيار يعتمد على عوامل واقعية لا على صور جميلة.",
    steps: [
      "اسأل نفسك: ما الهدف الحقيقي من الدراسة بالخارج؟",
      "قيّم استعدادك اللغوي والمالي والنفسي",
      "قارن جودة البرامج في المجال الذي تريده بالمغرب والخارج",
      "افهم تكاليف الإقامة والدراسة بشكل واقعي",
      "تحقق من الاعتراف بالشهادة في المغرب",
    ],
    checklistTitle: "أسئلة القرار",
    checklist: [
      "هل البرنامج المستهدف متاح بجودة مناسبة بالمغرب؟",
      "هل لديّ مستوى لغوي كافٍ؟",
      "هل لديّ خطة تمويل واضحة؟",
      "هل تحققت من الاعتراف بالشهادة؟",
      "هل سألت طلبة مروا بنفس التجربة؟",
    ],
    verify: true,
  },
  {
    title: "كيف تتحقق من شروط الولوج الرسمية لأي مؤسسة؟",
    slug: "verify-official-admission-requirements-morocco",
    category: "المدارس",
    excerpt: "دليل عملي للتحقق من شروط الولوج الرسمية قبل الترشيح — لتجنب المعلومات الخاطئة والمفاجآت.",
    intro: "شروط الولوج تتغير كل سنة. المعلومة الصحيحة هي فقط ما هو مكتوب في الإعلان الرسمي للمؤسسة. أي مصدر آخر قد يكون قديماً أو خاطئاً.",
    steps: [
      "ابحث عن الموقع الرسمي للمؤسسة لا مجرد أي موقع يذكر اسمها",
      "ابحث عن قسم \"الترشيح\" أو \"الولوج\" في الموقع الرسمي",
      "اقرأ الإعلان الرسمي للسنة الحالية بتأنٍّ",
      "دوّن تاريخ قراءتك والرابط الرسمي",
      "إذا وجدت تناقضاً، تواصل مع المؤسسة مباشرة",
    ],
    checklistTitle: "تحقق من هذه النقاط في المصدر الرسمي",
    checklist: [
      "شروط الشعبة والنقط",
      "الوثائق المطلوبة للترشيح",
      "مراحل الاختيار وتواريخها",
      "طريقة التسجيل",
      "رسوم الترشيح إن وجدت",
    ],
    verify: true,
  },
```

- [ ] **Step 2: Commit**

```bash
git add src/data/articles.ts
git commit -m "feat: add 7 new articles covering competition reading, application file, decision making"
```

---

## Task 6: Create IMAGE_PROMPTS.md (Phase 7)

**Files:**
- Create: `IMAGE_PROMPTS.md`

- [ ] **Step 1: Create the file**

```markdown
# Minassati Image Prompts

CSS-first, no external photos. Use these prompts only for original AI-generated illustrations.

## Hero — Student Choosing Path
Flat illustration, Moroccan student at a crossroads with multiple path signs (ENSA, Université, BTS, Abroad), warm green/red color palette, compass in hand, clean minimalist style.

## School Comparison Dashboard
Abstract dashboard mockup, cards showing different school types side by side, Arabic RTL layout, emerald and slate colors, no real logos.

## Study Abroad Planning Board
Top-down view of a planning board with world map outline, document checklist, passport illustration, language book — flat vector style, warm earth tones.

## Scholarship Document Checklist
Organized set of document icons (passport, transcript, CV, motivation letter) arranged in a checklist, checkmarks in emerald, clean white background.

## Moroccan University Guidance Visual
Aerial illustration of a Moroccan city with university buildings indicated, students walking, soft warm colors, no specific building logos.

## Article Cover System
Consistent card cover: Arabic article title in large font, emerald/red gradient background, category badge top-left, no photos. Pure CSS/gradient-based.
```

- [ ] **Step 2: Commit**

```bash
git add IMAGE_PROMPTS.md
git commit -m "docs: add image prompts for original illustration generation"
```

---

## Task 7: Arabic-only cleanup and phrase audit (Phase 8)

**Files:**
- Verify: `src/components/minassati/Header.tsx` — no language switcher (already clean)
- Verify: `src/app/sitemap.ts` — no /ar /en /fr /es (already clean)
- Search and fix any reversed Arabic or banned phrases

- [ ] **Step 1: Search for banned phrases**

Run:
```bash
grep -rn "undefined\|TODO\|lorem\|placeholder\|coming soon\|pricing\|instructor\|subscription\|marketplace\|language switcher" src/app src/components src/data --include="*.tsx" --include="*.ts" | grep -v node_modules | grep -v "\.next"
```

Fix any results that are visible UI text (not code comments or data fields).

- [ ] **Step 2: Search for reversed Arabic strings**

Run:
```bash
grep -rn "ةيكم\|تايآ\|تلاقملا\|دراوملا\|تاراسملا\|نآرقلا" src/ --include="*.tsx" --include="*.ts"
```

Fix any found.

- [ ] **Step 3: Verify middleware noindex list is complete**

Confirm these prefixes are in `src/middleware.ts` hiddenPrefixes:
- /quran, /audio, /courses, /orientation, /careers, /paths, /resources, /scholarships, /pricing, /instructors

- [ ] **Step 4: Commit if any fixes needed**

```bash
git add -A
git commit -m "fix: Arabic-only cleanup — remove any leaked phrases or reversed strings"
```

---

## Task 8: Lint, build, and smoke test (Phase 11)

- [ ] **Step 1: Run lint**

```bash
npm run lint
```
Expected: 0 errors, 0 warnings (or only ignorable ones).

- [ ] **Step 2: Run build**

```bash
npm run build
```
Expected: Build completes, pages generated.

- [ ] **Step 3: Start server and smoke test**

```bash
npx next start -p 3099 &
sleep 5
for path in "/" "/schools" "/after-bac" "/opportunities" "/guidance-request" "/calendar" "/faq" "/articles" "/articles/what-is-ensa-morocco" "/articles/how-to-read-competition-announcement-morocco" "/articles/what-to-do-after-bac-morocco" "/sitemap.xml" "/robots.txt"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3099$path")
  echo "$status $path"
done
kill %1
```

Expected: all return 200 (or 200/text-html for XML).

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "Upgrade Minassati after-bac guidance content and visual energy"
git push origin main
```

---

## Self-Review Against Spec

| Spec Phase | Covered by Task |
|---|---|
| Phase 1 — Brand wording | Task 1 |
| Phase 2 — Homepage alive | Task 2 |
| Phase 3 — Schools expansion (IAV, ENA, ISIC, ISMAC) | Task 3 |
| Phase 4 — After-bac expansion | Task 4 |
| Phase 5 — Opportunities (already comprehensive) | Verified current state |
| Phase 6 — 7 missing articles | Task 5 |
| Phase 7 — IMAGE_PROMPTS.md | Task 6 |
| Phase 8 — Arabic-only cleanup | Task 7 |
| Phase 9 — Sitemap (already correct) | Verified current state |
| Phase 10/11 — QA, lint, build, push | Task 8 |

**Gaps checked:**
- ISCAE and INSEA and ENSAM are already in moroccan-schools.ts — no action needed
- 75 articles already in articles.ts (some slugs differ from spec but cover same topics) — adding 7 truly new ones
- Opportunities page already has comprehensive content — no expansion needed beyond what exists
- After-bac page needs the track-guidance data which is new
