import Link from "next/link";
import {
  BookHeart,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Headphones,
  HelpCircle,
  Lightbulb,
  MessageCircleQuestion,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeDirections, rootLocalizedPath, type Locale } from "@/i18n/config";
import { lessons } from "@/data/lessons";
import { questions } from "@/data/questions";
import { articles } from "@/data/articles";
import { translatedArticleSamples, translatedLessonSamples, translatedQuestionSamples } from "@/data/translated-samples";

type NonArabicLocale = Exclude<Locale, "ar">;

function contentSamples(locale: Locale) {
  if (locale === "ar") {
    return {
      lessons: lessons.slice(0, 3).map((item) => ({ title: item.title, text: item.summary, href: `/learn/${item.category}/${item.slug}` })),
      questions: questions.slice(0, 3).map((item) => ({ title: item.question, text: item.shortAnswer, href: `/qa/${item.slug}` })),
      articles: articles.slice(0, 3).map((item) => ({ title: item.title, text: item.excerpt, href: `/articles/${item.slug}` })),
    };
  }
  const lang = locale as NonArabicLocale;
  return {
    lessons: translatedLessonSamples[lang].slice(0, 3).map((item) => ({ title: item.title, text: item.excerpt, href: item.href })),
    questions: translatedQuestionSamples[lang].slice(0, 3).map((item) => ({ title: item.title, text: item.excerpt, href: item.href })),
    articles: translatedArticleSamples[lang].slice(0, 3).map((item) => ({ title: item.title, text: item.excerpt, href: item.href })),
  };
}

export function LocalizedHome({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const dir = localeDirections[locale];
  const l = t.home.landing;
  const start = rootLocalizedPath(locale, "/start");
  const daily = rootLocalizedPath(locale, "/daily");
  const samples = contentSamples(locale);
  const ecosystem = [
    { href: rootLocalizedPath(locale, "/learn"), title: t.nav.learn, desc: l.ecosystemBenefits.learn, icon: BookOpen },
    { href: rootLocalizedPath(locale, "/quran"), title: t.nav.quran, desc: l.ecosystemBenefits.quran, icon: BookOpen },
    { href: rootLocalizedPath(locale, "/audio"), title: t.pages.audio.title, desc: l.ecosystemBenefits.audio, icon: Headphones },
    { href: rootLocalizedPath(locale, "/qa"), title: t.nav.qa, desc: l.ecosystemBenefits.qa, icon: MessageCircleQuestion },
    { href: "/stories", title: t.nav.stories, desc: l.ecosystemBenefits.stories, icon: BookHeart },
    { href: "/activities", title: t.nav.activities, desc: l.ecosystemBenefits.activities, icon: Lightbulb },
    { href: "/adhkar", title: t.nav.adhkar, desc: l.ecosystemBenefits.adhkar, icon: MoonStar },
    { href: "/challenges", title: t.nav.challenges, desc: l.ecosystemBenefits.challenges, icon: Trophy },
  ];
  const parentLinks = [
    { href: rootLocalizedPath(locale, "/parents"), label: t.pages.parents.title },
    { href: rootLocalizedPath(locale, "/methodology"), label: t.nav.methodology },
    { href: rootLocalizedPath(locale, "/content-review"), label: t.nav.contentReview },
  ];

  return (
    <div lang={locale} dir={dir} className="overflow-hidden">
      <section className="relative isolate bg-gradient-to-b from-white via-blue-50/50 to-white">
        <div className="absolute inset-0 -z-10 star-field opacity-50" />
        <div className="page-shell grid min-h-[calc(100vh-5rem)] items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-sm font-black text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4 shrink-0 text-amber-500" />
              <span className="truncate">{t.home.eyebrow}</span>
            </div>
            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.12] text-slate-950 sm:text-6xl lg:text-7xl">
              {t.home.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600 sm:text-xl">
              {t.home.subhead}
            </p>
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-teal-100 bg-white/80 p-4 text-sm font-bold leading-7 text-slate-700 shadow-sm sm:max-w-2xl">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              {l.trustNote}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={start} size="lg" className="w-full sm:w-auto">{t.common.primaryCta}</ButtonLink>
              <ButtonLink href={daily} variant="secondary" size="lg" className="w-full sm:w-auto">{t.common.dailyCta}</ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white bg-slate-950 p-4 text-white shadow-2xl shadow-blue-200/60 sm:p-6 lg:rounded-[2.5rem]">
              <div className="rounded-[1.5rem] bg-white/8 p-5">
                <p className="text-sm font-black text-teal-300">{l.heroVisualTitle}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {l.visualCards.map((card, index) => {
                    const Icon = [BookOpen, HelpCircle, Lightbulb, MoonStar][index] ?? Sparkles;
                    return (
                      <div key={card} className="rounded-2xl bg-white p-4 text-slate-950 shadow-sm">
                        <Icon className="h-5 w-5 text-blue-600" />
                        <strong className="mt-3 block text-lg">{card}</strong>
                        <span className="mt-2 block h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-400" />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/8 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-slate-300">{t.pages.quran.title}</span>
                    <span className="rounded-full bg-teal-300 px-3 py-1 text-xs font-black text-slate-950">114</span>
                  </div>
                  <p className="quran-text mt-4 text-3xl leading-[2] text-white">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-18">
        <div className="max-w-3xl">
          <p className="text-sm font-black text-blue-700">{t.home.sections.whatTitle}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.problemTitle}</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {l.problems.map((problem, index) => (
            <article key={problem} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-50 text-sm font-black text-amber-700">{index + 1}</span>
              <h3 className="mt-4 text-xl font-black leading-8 text-slate-950">{problem}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white sm:py-18">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black text-teal-300">{t.common.learnMore}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{l.solutionTitle}</h2>
            <p className="mt-5 text-lg leading-9 text-slate-300">{l.solutionText}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {l.solutionItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-300" />
                <span className="font-bold text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black text-blue-700">{t.common.dailyCta}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.routineTitle}</h2>
            <p className="mt-5 leading-8 text-slate-600">{t.home.habitText}</p>
            <ButtonLink href={daily} className="mt-6">{t.common.dailyCta}</ButtonLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-5">
            {l.routineSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-soft">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-sm font-black text-blue-700">{index + 1}</span>
                <strong className="mt-4 block text-sm leading-6 text-slate-950">{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-14 sm:py-18">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black text-blue-700">{t.site.name}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.ecosystemTitle}</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href + item.title} href={item.href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
                  <Icon className="h-6 w-6 text-teal-600" />
                  <h3 className="mt-4 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-18">
        <div className="grid gap-8 rounded-[2rem] bg-slate-950 p-6 text-white shadow-navy-glow sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <BookOpen className="h-8 w-8 text-teal-300" />
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{l.quranTitle}</h2>
            <p className="mt-5 text-lg leading-9 text-slate-300">{l.quranText}</p>
            <ButtonLink href={rootLocalizedPath(locale, "/quran/1")} variant="gold" className="mt-6">{l.quranCta}</ButtonLink>
          </div>
          <div className="grid gap-3">
            {l.quranBullets.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" />
                <span className="font-bold text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <ShieldCheck className="h-8 w-8 text-blue-600" />
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.parentTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {parentLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-800 shadow-sm transition hover:border-blue-200 hover:text-blue-700">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {l.parentPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                <strong className="mt-3 block text-lg text-slate-950">{point}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-14 sm:py-18">
        <div className="page-shell">
          <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.featuredTitle}</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              { label: l.lessonsLabel, items: samples.lessons, icon: BookOpen },
              { label: l.questionsLabel, items: samples.questions, icon: MessageCircleQuestion },
              { label: l.articlesLabel, items: samples.articles, icon: BookHeart },
            ].map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-black text-slate-950">{group.label}</h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} className="block rounded-2xl bg-slate-50 p-4 transition hover:bg-blue-50">
                        <strong className="block text-sm font-black leading-6 text-slate-950">{item.title}</strong>
                        <span className="mt-2 line-clamp-2 block text-xs font-semibold leading-6 text-slate-600">{item.text}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-18">
        <div className="grid gap-8 rounded-[2rem] border border-blue-100 bg-blue-50 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.internationalTitle}</h2>
            <p className="mt-5 leading-8 text-slate-700">{l.internationalText}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["العربية", "English", "Français", "Español"].map((language) => (
              <div key={language} className="rounded-2xl bg-white p-4 text-center text-lg font-black text-slate-950 shadow-sm">
                {language}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="rounded-[2rem] bg-slate-950 p-7 text-center text-white shadow-navy-glow sm:p-10">
          <h2 className="text-3xl font-black leading-tight sm:text-5xl">{l.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">{l.finalText}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={start} variant="gold" size="lg" className="w-full sm:w-auto">{t.common.primaryCta}</ButtonLink>
            <ButtonLink href={daily} variant="secondary" size="lg" className="w-full sm:w-auto">{t.common.dailyCta}</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
