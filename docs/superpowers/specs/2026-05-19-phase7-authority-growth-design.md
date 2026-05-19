# Phase 7: Authority, Growth, Trust & Launch Infrastructure
**Date:** 2026-05-19  
**Project:** Minassati Next.js (ailiq-lab-core-main)  
**Status:** Approved for implementation

---

## Context

Minassati is a premium Arabic Islamic education platform for children (ages 6–12). It already has:
- Next.js 14 App Router, Arabic RTL, Tailwind + Framer Motion
- 80 lessons, 107 Q&A items, Quran reader, MP3 audio, quizzes, activities, stories, adhkar, badges
- metadataBase, sitemap, OG image, JSON-LD at layout level
- Footer newsletter form (UI only, no backend)
- No analytics, no blog/articles, no /methodology or /content-review, no ShareCard

Phase 7 adds authority, SEO depth, trust, shareability, analytics, and launch assets without redesigning or bloating the platform.

---

## Section A — SEO Articles System

### Data Layer
**File:** `src/data/articles.ts`

```ts
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
export const articles: Article[] = [...]; // 12 articles
export function getArticle(slug: string): Article | undefined;
export function getArticlesByCategory(category: string): Article[];
export function getRelatedArticles(slug: string, limit?: number): Article[];
```

**12 article topics** (all Arabic SEO-optimized):
1. كيف أعلّم طفلي الصلاة؟
2. أفضل طريقة لتعليم الأطفال القرآن
3. كيف نحبب الأطفال في الدين بدون ضغط؟
4. تعليم أركان الإسلام للأطفال
5. تعليم الوضوء للأطفال خطوة بخطوة
6. قصص الأنبياء للأطفال
7. الأذكار اليومية للأطفال
8. كيف أشرح الإيمان لطفلي؟
9. أنشطة إسلامية للأطفال في البيت
10. خطة 10 دقائق يوميًا لتعليم الإسلام للأطفال
11. تعليم الأخلاق الإسلامية للأطفال
12. كيف أستخدم منصتي مع طفلي؟

Each article has: 3–5 sections, 3–5 FAQ items (most), 3–6 internal links to /learn, /qa, /daily, /start, /quran, /activities.

### Routes
- `src/app/articles/page.tsx` — listing with featured article hero, category filters, article grid
- `src/app/articles/[slug]/page.tsx` — article detail with Article schema + FAQPage schema + BreadcrumbList

### Metadata per article page
```ts
{
  title: article.seoTitle,
  description: article.seoDescription,
  alternates: { canonical: `/articles/${article.slug}` },
  openGraph: { type: "article", publishedTime, modifiedTime },
}
```

### JSON-LD on article detail
- `Article` schema with headline, datePublished, dateModified, author, inLanguage
- `FAQPage` schema if article has faqs
- `BreadcrumbList`: الرئيسية → المقالات → [article title]

### Sitemap extension
Add to `src/app/sitemap.ts`:
```ts
...articles.map(a => ({
  url: `${site.url}/articles/${a.slug}`,
  lastModified: new Date(a.updatedAt),
  priority: 0.8,
}))
```
Also add `/articles` static route.

### Navigation
- **Primary nav bar:** unchanged (7 items)
- **Mega menu:** add "المقالات والموارد" as a new item in the "التعلم اليومي" section of the megaSections dropdown
- **Footer:** add "المقالات" to the "المنصة" column
- **Mobile nav:** add via `allMobile` array in Header

---

## Section B — Trust Pages

### /methodology
**File:** `src/app/methodology/page.tsx`

Content structure:
1. Hero: "كيف تعلّم منصتي؟"
2. Section: المبدأ الأول — البساطة قبل التعقيد
3. Section: المبدأ الثاني — التكرار اليومي يبني العادة
4. Section: المبدأ الثالث — التعلم بقيادة الوالدين
5. Section: المبدأ الرابع — لغة الطفل دون تخويف
6. Section: المبدأ الخامس — الفهم قبل الحفظ
7. CTA to /start and /parents

Metadata: seoTitle, seoDescription, canonical `/methodology`
JSON-LD: `AboutPage` type

### /content-review
**File:** `src/app/content-review/page.tsx`

Content structure:
1. Hero: "مراجعة المحتوى والمسؤولية"
2. Section: المحتوى التعليمي وطبيعته
3. Section: دور الوالدين — المنصة أداة مساعدة لا بديل
4. Section: اللغة العربية المبسطة
5. Section: تجنب الخلافات الفقهية المعقدة
6. Section: المراجعة المستمرة والتحسين
7. Contact/feedback channel (mailto link)
8. CTA to /parents

Both pages: linked from footer "المنصة" column and from /parents page.

---

## Section C — ShareCard Component

**File:** `src/components/minassati/ShareCard.tsx`

```ts
type ShareCardProps = {
  title: string;
  excerpt: string;
  url: string; // absolute URL
}
```

Features:
- Copy button: uses `navigator.clipboard.writeText(title + '\n' + excerpt + '\n' + url)`
- WhatsApp: `https://wa.me/?text=encodeURIComponent(...)`
- Facebook: `https://www.facebook.com/sharer/sharer.php?u=encodeURIComponent(url)`
- X/Twitter: `https://twitter.com/intent/tweet?text=...&url=...`
- Copy state feedback: button label changes to "تم النسخ ✓" for 2s then resets
- Arabic share text formatted for parents: includes site name, title, excerpt snippet
- All `window.open` calls in `noopener,noreferrer` target

**Used on:**
- `src/app/qa/[slug]/page.tsx` — after the answer body
- `src/app/learn/[category]/[lesson]/page.tsx` — after lesson sections
- `src/app/articles/[slug]/page.tsx` — at bottom
- `src/app/daily/page.tsx` — daily share

Analytics: calls `trackShareClick(platform, url)` on each share action.

---

## Section D — Analytics Layer

**Package to install:** `@vercel/analytics`

**File:** `src/lib/analytics.ts`

```ts
export function trackStartJourneyClick(source?: string): void
export function trackDailyOpen(): void
export function trackQuranSurahOpen(surahNumber: number): void
export function trackAudioPlay(reciterId: string): void
export function trackQuizCompleted(quizSlug: string, score: number): void
export function trackShareClick(platform: string, url: string): void
export function trackArticleRead(articleSlug: string): void
```

Implementation:
- Checks `typeof window !== 'undefined'` before any call
- Uses Vercel Analytics `track()` from `@vercel/analytics` — imported dynamically so it doesn't crash in SSR
- If `NEXT_PUBLIC_GA_ID` is set, also calls `window.gtag?.('event', ...)`
- If neither is configured, functions are no-ops — no errors thrown

**Layout integration:**
- Add `<Analytics />` from `@vercel/analytics/react` to `src/app/layout.tsx`

**`.env.example` additions:**
```
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED=true
```

---

## Section E — Conversion Components

### NewsletterCTA
**File:** `src/components/minassati/NewsletterCTA.tsx`

A self-contained card (not a full-page section) for inline use. Props: `variant?: 'dark' | 'light'`.

Content: "ابدأ بخطة 10 دقائق" headline + brief description + CTA button linking to `/start` + secondary "شارك منصتي" button that opens WhatsApp share.

Used on: `/articles/[slug]` bottom, `/parents`, `/start` mid-page.

### TrustStrip
**File:** `src/components/minassati/TrustStrip.tsx`

Horizontal row of 3 trust pillars (icon + label). Reuses existing `trustPillars` data pattern. 

Content: "محتوى عربي مبسط" | "بلا ضغط أو تخويف" | "بقيادة الوالدين"

Used on: `/articles/[slug]` above fold, `/methodology`, `/content-review`.

---

## Section F — Social Launch Kit

**File:** `LAUNCH_KIT.md` (project root)

Sections:
- 10 Facebook post captions (Arabic)
- 10 Instagram captions (Arabic)
- 10 short reels ideas
- 10 carousel ideas
- 20 hooks (opening lines)
- 10 CTA phrases
- Launch announcement text
- Facebook group description
- Facebook group pinned post template

All aligned to: Islamic education for children, parents, daily 10-minute habit, Quran + Q&A + activities.

---

## Section G — Content Guidelines

**File:** `CONTENT_GUIDELINES.md` (project root)

Sections:
- Tone guidelines (warm, encouraging, parent-focused)
- Arabic style rules (clear MSA with Moroccan-friendly vocabulary)
- What to avoid (fear language, complex fiqh, overwhelming content)
- How to write child-friendly Islamic explanations
- How to write parent notes
- How to avoid fear-based language
- How to avoid complex disputes
- Internal linking rules
- SEO title rules

---

## Section H — Technical Polish

1. **OG type:** Article detail pages get `openGraph: { type: "article" }`
2. **Canonical URLs:** Verify all major pages have `alternates: { canonical: "..." }`
3. **robots.txt:** Already allows all — verify `/articles` is not blocked
4. **OG image:** `/public/og-image.svg` already present — verify it is referenced correctly in layout metadataBase
5. **Alt text:** Any `<img>` tags reviewed; Next.js `Image` components have descriptive `alt`
6. **Loading states:** Add `loading.tsx` to `src/app/quran/[surah]/`, `src/app/audio/`, and `src/app/audio/[reciter]/`
7. **Error states:** Add `error.tsx` to the same three API-dependent route segments
8. **Mobile spacing:** Review article and methodology page padding on small screens
9. **Accessibility labels:** `aria-label` on icon-only buttons in ShareCard

---

## Implementation Order

1. Install `@vercel/analytics`, add Analytics to layout
2. Create `src/lib/analytics.ts`
3. Create `src/data/articles.ts` with 12 articles
4. Create `/articles` listing page
5. Create `/articles/[slug]` detail page
6. Create `/methodology` page
7. Create `/content-review` page
8. Create `ShareCard.tsx` component
9. Create `NewsletterCTA.tsx` component
10. Create `TrustStrip.tsx` component
11. Wire ShareCard into qa/[slug], learn/[category]/[lesson], daily, articles/[slug]
12. Wire NewsletterCTA into articles/[slug], /parents
13. Wire TrustStrip into articles/[slug], /methodology, /content-review
14. Update Header (mega menu + mobile) with Articles link
15. Update Footer with Articles + trust page links
16. Extend sitemap with articles routes
17. Add .env.example
18. Write LAUNCH_KIT.md
19. Write CONTENT_GUIDELINES.md
20. Technical polish: loading.tsx, error.tsx, canonical audit
21. Run `npm run lint && npm run build`

---

## Constraints

- No new heavy dependencies beyond `@vercel/analytics`
- No image generation server-side for ShareCard
- No backend required for newsletter — mailto link only
- Articles are fully static (no CMS, no API)
- Do not redesign existing pages
- Keep primary nav bar at 7 items
- All new text is Arabic
- No fear-based language anywhere
