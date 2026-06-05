import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, CalendarDays, Clock, HelpCircle } from "lucide-react";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { AdSlot } from "@/components/minassati/AdSlot";
import { ShareCard } from "@/components/minassati/ShareCard";
import { NewsletterCTA } from "@/components/minassati/NewsletterCTA";
import { TrustStrip } from "@/components/minassati/TrustStrip";
import { articles, getArticle, getRelatedArticles } from "@/data/articles";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.seoDescription,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const related = getRelatedArticles(article.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "ar",
    url: absoluteUrl(`/articles/${article.slug}`),
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  const faqJsonLd = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: site.url },
      { "@type": "ListItem", position: 2, name: "المقالات", item: absoluteUrl("/articles") },
      { "@type": "ListItem", position: 3, name: article.title, item: absoluteUrl(`/articles/${article.slug}`) },
    ],
  };

  return (
    <article className="page-shell py-12 sm:py-16">
      <Script id={`article-jsonld-${article.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Script id={`breadcrumb-jsonld-${article.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <Script id={`faq-jsonld-${article.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <nav className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500" aria-label="مسار التنقل">
        <Link href="/" className="hover:text-slate-800">الرئيسية</Link>
        <span>/</span>
        <Link href="/articles" className="hover:text-slate-800">المقالات</Link>
        <span>/</span>
        <span className="line-clamp-1 text-slate-800">{article.title}</span>
      </nav>

      <TrustStrip />

      {/* Article hero */}
      <div className="mt-6 rounded-2xl bg-slate-950 p-7 text-white shadow-[var(--shadow-navy)] sm:p-10">
        <span className="badge-soon">{article.category}</span>
        <h1 className="mt-5 text-balance text-4xl font-black leading-tight sm:text-6xl">{article.title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-300">{article.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-bold text-slate-400">
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readingTime}</span>
          <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{article.publishedAt}</span>
        </div>
      </div>

      {/* Content + sidebar */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="card-premium p-6 sm:p-8">
          {article.sections.map((section, index) => (
            <section key={section.heading} className="mb-8 last:mb-0">
              <h2 className="text-2xl font-black text-slate-950">{section.heading}</h2>
              <p className="mt-3 text-lg leading-9 text-slate-700">{section.body}</p>
              {index === 0 ? <AdSlot className="mt-8" label="مساحة إعلانية بعد مقدمة المقال" /> : null}
            </section>
          ))}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <AdSlot label="مساحة إعلانية جانبية للمقال" />
          <div className="card-premium p-5">
            <h2 className="font-black text-slate-950">تابع التعلم</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">حوّل قراءة المقال إلى تطبيق عملي عبر مورد أو خطوة بحث واضحة.</p>
            <Link
              href="/guidance-request"
              className="mt-4 inline-flex w-full justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-black text-white"
            >
              أرسل طلب التوجيه
            </Link>
          </div>
        </aside>
      </div>

      {/* FAQ */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="mt-8 rounded-2xl bg-amber-50 p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-2xl font-black text-slate-950">
            <HelpCircle className="h-6 w-6 text-amber-600" />
            أسئلة شائعة
          </h2>
          <div className="mt-5 space-y-4">
            {article.faqs.map((faq) => (
              <div key={faq.q} className="card-premium p-5">
                <p className="font-black text-slate-950">{faq.q}</p>
                <p className="mt-2 leading-8 text-slate-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Internal links */}
      {article.internalLinks.length > 0 && (
        <section className="mt-8 rounded-2xl bg-blue-50 p-6">
          <h2 className="flex items-center gap-2 text-xl font-black text-slate-950">
            <BookOpen className="h-5 w-5 text-blue-600" />
            محتوى مرتبط في منصتي
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {article.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-premium flex items-center justify-between gap-3 p-4 font-bold text-slate-700 transition hover:text-blue-700"
              >
                {link.label}
                <ArrowLeft className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-8">
        <ShareCard
          title={article.title}
          excerpt={article.excerpt}
          url={absoluteUrl(`/articles/${article.slug}`)}
        />
      </div>

      <div className="mt-8">
        <NewsletterCTA />
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-black text-slate-950">مقالات مرتبطة</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/articles/${rel.slug}`}
                className="group card-premium p-5 transition hover:-translate-y-1"
              >
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{rel.category}</span>
                <p className="mt-3 font-black text-slate-950">{rel.title}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-black text-blue-700">
                  اقرأ <ArrowLeft className="h-3 w-3 transition group-hover:-translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/articles">كل المقالات</ButtonLink>
        <ButtonLink href="/faq" variant="secondary">النصائح والأسئلة</ButtonLink>
      </div>
    </article>
  );
}
