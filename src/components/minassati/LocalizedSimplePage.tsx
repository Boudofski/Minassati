import Link from "next/link";
import { ArrowLeft, BookOpen, FileText, MessageCircleQuestion } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeDirections, rootLocalizedPath, type Locale } from "@/i18n/config";
import { translatedArticleSamples, translatedLessonSamples, translatedQuestionSamples } from "@/data/translated-samples";

type PageKey = "start" | "daily" | "learn" | "qa" | "audio" | "articles" | "parents" | "methodology" | "contentReview" | "privacy" | "contact";
type NonArabicLocale = Exclude<Locale, "ar">;

export function LocalizedSimplePage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const t = getDictionary(locale);
  const page = t.pages[pageKey];
  const dir = localeDirections[locale];
  const nonArabic = (locale === "ar" ? "en" : locale) as NonArabicLocale;
  const samples =
    pageKey === "learn" ? translatedLessonSamples[nonArabic] :
    pageKey === "qa" ? translatedQuestionSamples[nonArabic] :
    pageKey === "articles" ? translatedArticleSamples[nonArabic] :
    [];

  return (
    <div lang={locale} dir={dir}>
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <p className="text-sm font-black text-teal-300">Minassati</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">{page.desc}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href={rootLocalizedPath(locale, "/start")} className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950">{t.common.primaryCta}</Link>
            <Link href={rootLocalizedPath(locale, "/daily")} className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-black text-white">{t.common.dailyCta}</Link>
          </div>
        </div>
      </section>

      <section className="page-shell pb-14">
        <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-5 text-blue-950">
          <p className="font-bold">{t.common.contentLanguageNote}</p>
        </div>
        {samples.length ? (
          <div className="mt-8">
            <h2 className="text-3xl font-black text-slate-950">{t.common.translatedSamples}</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {samples.map((sample) => (
                <Link key={sample.slug} href={sample.href} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
                  {pageKey === "learn" ? <BookOpen className="h-6 w-6 text-blue-600" /> : pageKey === "qa" ? <MessageCircleQuestion className="h-6 w-6 text-teal-600" /> : <FileText className="h-6 w-6 text-amber-600" />}
                  <h3 className="mt-4 text-xl font-black text-slate-950">{sample.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{sample.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-blue-700">
                    {t.common.readMore} <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[t.home.sections.whatTitle, t.home.sections.firstTitle, t.home.sections.safeTitle].map((title) => (
              <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-black text-slate-950">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{t.home.sections.whatText}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
