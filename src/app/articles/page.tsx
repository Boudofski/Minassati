import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock } from "lucide-react";
import { articles, articleCategories } from "@/data/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "المقالات - منصتي",
  description: "مقالات عملية حول الذكاء الاصطناعي، التسويق، العمل الحر، الأعمال، التجارة الإلكترونية، التعلم، والقرآن.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "مقالات منصتي",
    description: "مقالات عملية للتعلم والعمل في المغرب والعالم العربي.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "مقالات منصتي",
  description: "مقالات عملية للتعلم والعمل في المغرب والعالم العربي",
  url: `${site.url}/articles`,
  inLanguage: "ar",
};

const featured = articles.find((a) => a.featured) ?? articles[0];

export default function ArticlesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="section-navy relative">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative py-16 sm:py-24">
          <p className="eyebrow-pill">
            <BookOpen className="h-4 w-4 text-amber-300" /> المقالات
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            مقالات تساعدك<br />على التعلم والعمل
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">
            أدلة عملية حول الذكاء الاصطناعي، التسويق، العمل الحر، التجارة الإلكترونية، اللغات، والتعلم.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="badge-free">{articles.length} مقالة</span>
            <span className="badge-soon">{articleCategories.length} تصنيف</span>
          </div>
        </div>
      </section>

      {/* Sticky category filter */}
      <section className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="page-shell no-scrollbar flex gap-2 overflow-x-auto py-3">
          <Link
            href="/articles"
            className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700"
          >
            الكل ({articles.length})
          </Link>
          {articleCategories.map((cat) => (
            <Link
              key={cat}
              href={`/articles?category=${encodeURIComponent(cat)}`}
              className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-700 transition-colors hover:bg-slate-50"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured article */}
      <section className="section-light">
        <div className="page-shell py-16">
          <p className="eyebrow-pill-light">مقالة مميزة</p>
          <div className="mt-6 rounded-2xl bg-slate-950 p-7 text-white shadow-[var(--shadow-navy)] sm:p-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
            <div>
              <span className="badge-soon">{featured.category}</span>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{featured.title}</h2>
              <p className="mt-4 leading-8 text-slate-300">{featured.excerpt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-bold text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {featured.readingTime}
                </span>
              </div>
              <Link
                href={`/articles/${featured.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
              >
                اقرأ المقالة
              </Link>
            </div>
            <div className="mt-6 hidden rounded-2xl bg-white/10 p-6 lg:mt-0 lg:block">
              <p className="text-sm font-black text-teal-300">{featured.sections[0]?.heading}</p>
              <p className="mt-3 line-clamp-5 text-sm leading-8 text-slate-300">{featured.sections[0]?.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="section-soft">
        <div className="page-shell py-16">
          <h2 className="mb-8 text-2xl font-black text-slate-950">كل المقالات ({articles.length})</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="card-premium group flex flex-col p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-400">
                    <Clock className="h-3 w-3" />
                    {article.readingTime}
                  </span>
                </div>
                <h3 className="font-black text-slate-950 transition-colors group-hover:text-blue-700">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 line-clamp-2 text-sm leading-7 text-slate-500">
                  {article.excerpt}
                </p>
                <span className="mt-4 text-sm font-black text-blue-600">اقرأ المقالة ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy">
        <div className="page-shell py-16 text-center">
          <p className="eyebrow-pill mx-auto">ابدأ اليوم</p>
          <h2 className="mt-5 text-3xl font-black sm:text-4xl">اقرأ مقالة ثم طبّق موردًا واحدًا</h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/courses"
              className="rounded-full bg-white px-8 py-4 text-lg font-black text-slate-950 transition hover:-translate-y-0.5"
            >
              استكشف الدورات
            </Link>
            <Link
              href="/resources"
              className="rounded-full border border-white/30 px-8 py-4 text-lg font-black text-white transition hover:bg-white/10"
            >
              تصفح الموارد
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
