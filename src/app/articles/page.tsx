import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { IslamicPattern } from "@/components/minassati/IslamicPattern";
import { FadeUp } from "@/components/minassati/Motion";
import { articles, articleCategories } from "@/data/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "المقالات - منصتي",
  description: "مقالات عملية حول الذكاء الاصطناعي، التسويق، العمل الحر، الأعمال، التجارة الإلكترونية، التعلم، والقرآن.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "مقالات منصتي",
    description: "مقالات عملية للتعلم والعمل والموارد الإسلامية.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "مقالات منصتي",
  description: "مقالات عملية للتعلم والعمل والموارد الإسلامية",
  url: `${site.url}/articles`,
  inLanguage: "ar",
};

const featured = articles.find((a) => a.featured) ?? articles[0];

export default function ArticlesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/70 via-white/40 to-transparent" />
        <IslamicPattern className="absolute inset-0 -z-10 opacity-60" opacity={0.04} color="#0F172A" size={72} />
        <div className="page-shell py-14 sm:py-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/82 px-4 py-2 text-sm font-black text-blue-700 shadow-sm">
              <BookOpen className="h-4 w-4 text-amber-500" />
              المقالات
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
              مقالات تساعدك على التعلم والعمل وبناء مهارات نافعة
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-600">
              اقرأ أدلة عملية حول الذكاء الاصطناعي، التسويق، العمل الحر، التجارة الإلكترونية، اللغات، التعلم، والقرآن.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="page-shell pb-6">
        <div className="aurora-panel rounded-[2rem] border border-white p-6 shadow-xl shadow-blue-100/60 sm:p-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:items-center">
          <div>
            <span className="rounded-full bg-amber-50 px-4 py-1.5 text-sm font-black text-amber-700">مقال مميز</span>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{featured.title}</h2>
            <p className="mt-4 leading-8 text-slate-600">{featured.excerpt}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-bold text-slate-500">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{featured.readingTime}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">{featured.category}</span>
            </div>
            <Link
              href={`/articles/${featured.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
            >
              اقرأ المقال <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 hidden rounded-[1.75rem] bg-slate-950 p-6 text-white lg:mt-0 lg:block">
            <p className="text-sm font-black text-teal-300">{featured.category}</p>
            <p className="mt-4 text-2xl font-black leading-snug">{featured.sections[0]?.heading}</p>
            <p className="mt-3 text-sm leading-8 text-slate-300 line-clamp-4">{featured.sections[0]?.body}</p>
          </div>
        </div>
      </div>

      <Section eyebrow="كل المقالات" title="اختر موضوعاً يناسب احتياجك اليوم">
        <div className="mb-8 flex flex-wrap gap-2">
          <Link href="/articles" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white">الكل</Link>
          {articleCategories.map((cat) => (
            <Link key={cat} href={`/articles?category=${encodeURIComponent(cat)}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
              {cat}
            </Link>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{article.category}</span>
                <span className="flex items-center gap-1 text-xs font-bold text-slate-400"><Clock className="h-3 w-3" />{article.readingTime}</span>
              </div>
              <h3 className="mt-4 text-xl font-black leading-snug text-slate-950">{article.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 line-clamp-3">{article.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700">
                اقرأ المقال <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="ابدأ اليوم" title="اختر مقالة ثم طبّق مورداً واحداً">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/courses" className="rounded-full bg-white px-8 py-4 text-lg font-black text-slate-950 transition hover:-translate-y-0.5">استكشف الدورات</Link>
          <Link href="/resources" className="rounded-full border border-white/30 px-8 py-4 text-lg font-black text-white transition hover:bg-white/10">تصفح الموارد</Link>
        </div>
      </Section>
    </>
  );
}
