import Link from "next/link";
import {
  AlertTriangle,
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

const RubElHizb = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(0 50 50)" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

const CrescentMoon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 20C42.33 20 28 34.33 28 52C28 69.67 42.33 84 60 84C62.78 84 65.48 83.65 68.07 82.98C51.58 79.5 39.5 64.88 39.5 47.5C39.5 35.12 46.5 24.38 56.78 19.1C57.85 19.38 58.92 19.68 60 20Z" />
    <path d="M72 32L73.5 36.5L78 38L73.5 39.5L72 44L70.5 39.5L66 38L70.5 36.5L72 32Z" />
    <path d="M58 64L59 67L62 68L59 69L58 72L57 69L54 68L57 67L58 64Z" />
  </svg>
);

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
    <div lang={locale} dir={dir} className="overflow-hidden bg-[#F8FBFF]">
      {/* 1. Hero Section */}
      <section className="relative isolate overflow-hidden py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#EFF5FF] via-white to-white">
        {/* Floating Islamic Ornaments */}
        <div className="absolute top-12 start-12 text-blue-300/30 animate-float h-24 w-24 pointer-events-none hidden md:block">
          <RubElHizb className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 end-16 text-teal-300/25 animate-float-slow h-20 w-20 pointer-events-none hidden lg:block">
          <CrescentMoon className="w-full h-full" />
        </div>
        <div className="absolute inset-0 -z-10 star-field opacity-60 pointer-events-none" />

        <div className="page-shell grid min-h-[calc(100vh-6.5rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-blue-200/60 bg-white/90 px-4.5 py-2 text-sm font-black text-blue-800 shadow-sm shadow-blue-50/50">
              <Sparkles className="h-4.5 w-4.5 text-amber-500 animate-pulse" />
              <span className="truncate">{t.home.eyebrow}</span>
            </div>
            <h1 className="mt-7 text-balance text-4xl font-black leading-[1.14] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              {t.home.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600 sm:text-xl">
              {t.home.subhead}
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-teal-100 bg-teal-50/40 p-4.5 text-sm font-semibold leading-7 text-slate-700 shadow-sm max-w-2xl">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 animate-pulse-glow" />
              <span className="text-pretty">{l.trustNote}</span>
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={start} size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all">
                {t.common.primaryCta}
              </ButtonLink>
              <ButtonLink href={daily} variant="secondary" size="lg" className="w-full sm:w-auto hover:bg-slate-100 hover:-translate-y-0.5 transition-all">
                {t.common.dailyCta}
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            {/* Soft decorative glow behind card */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-500 to-teal-400 opacity-20 blur-xl animate-pulse-glow pointer-events-none" />
            <div className="relative rounded-[2.5rem] border border-white bg-slate-950 p-5 text-white shadow-2xl shadow-blue-900/20 sm:p-7">
              <div className="rounded-[1.8rem] bg-slate-900/90 border border-white/5 p-5 sm:p-6 islamic-bg-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="text-sm font-black text-teal-300 tracking-wider uppercase">{l.heroVisualTitle}</p>
                  <span className="h-3.5 w-3.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {l.visualCards.map((card, index) => {
                    const Icon = [BookOpen, MessageCircleQuestion, Lightbulb, MoonStar][index] ?? Sparkles;
                    const borderColors = [
                      "hover:border-blue-500/50 hover:bg-blue-500/5",
                      "hover:border-teal-500/50 hover:bg-teal-500/5",
                      "hover:border-amber-500/50 hover:bg-amber-500/5",
                      "hover:border-purple-500/50 hover:bg-purple-500/5"
                    ][index] ?? "hover:border-white/20";
                    return (
                      <div key={card} className={`group rounded-2xl border border-white/5 bg-slate-950/80 p-5 text-slate-100 shadow-sm transition-all duration-300 ${borderColors}`}>
                        <Icon className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
                        <strong className="mt-4 block text-lg font-black">{card}</strong>
                        <span className="mt-3 block h-1.5 w-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-400" />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/90 p-5 shadow-inner">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-slate-400">{t.pages.quran.title}</span>
                    <span className="rounded-full bg-amber-400 px-3.5 py-1 text-xs font-black text-slate-950 shadow-sm shadow-amber-400/20">114</span>
                  </div>
                  <p className="quran-text mt-4 text-3xl leading-[2] text-white text-center" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Parent Problem Section */}
      <section className="page-shell py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-extrabold text-amber-700">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 animate-bounce" />
            <span>{t.home.sections.whatTitle}</span>
          </div>
          <h2 className="mt-4 text-3xl font-black leading-[1.2] text-slate-950 sm:text-5xl">{l.problemTitle}</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {l.problems.map((problem, index) => (
            <article key={problem} className="relative group rounded-3xl border border-slate-200 bg-white p-6.5 shadow-soft transition-all duration-300 hover:border-amber-200 hover:-translate-y-1">
              <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl bg-amber-400" />
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-amber-50 text-base font-black text-amber-700">{index + 1}</span>
              <h3 className="mt-5 text-xl font-black leading-8 text-slate-950 text-balance">{problem}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Minassati Solution Section */}
      <section className="bg-slate-950 py-16 text-white sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.05] pointer-events-none" />
        <div className="page-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center relative z-10">
          <div>
            <p className="text-sm font-black text-teal-300 uppercase tracking-widest">{t.common.learnMore}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{l.solutionTitle}</h2>
            <p className="mt-6 text-lg leading-9 text-slate-300 text-pretty">{l.solutionText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {l.solutionItems.map((item) => (
              <div key={item} className="flex items-center gap-3.5 rounded-2xl bg-white/5 border border-white/5 p-5 transition-colors hover:bg-white/10">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-teal-500/10 text-teal-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="font-bold text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Routine Section */}
      <section className="page-shell py-16 sm:py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black text-blue-700 tracking-wider uppercase">{t.common.dailyCta}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.routineTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 text-pretty">{t.home.habitText}</p>
            <ButtonLink href={daily} className="mt-8 shadow-md hover:shadow-lg transition-all">{t.common.dailyCta}</ButtonLink>
          </div>

          <div className="relative">
            {/* connecting line */}
            <div className="absolute top-[2.25rem] start-6 end-6 h-0.5 bg-blue-100 hidden lg:block -z-10" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {l.routineSteps.map((step, index) => (
                <div key={step} className="group relative rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:border-blue-200 hover:-translate-y-1">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-base font-black text-blue-700 shadow-sm border border-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {index + 1}
                  </span>
                  <strong className="mt-5 block text-sm font-black leading-7 text-slate-950">{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ecosystem Section */}
      <section className="bg-slate-50/50 py-16 sm:py-20 md:py-24 border-y border-slate-100">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black text-blue-700 uppercase tracking-widest">{t.site.name}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.ecosystemTitle}</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((item, index) => {
              const Icon = item.icon;
              const iconColors = [
                "text-blue-600 bg-blue-50 hover:bg-blue-600",
                "text-amber-600 bg-amber-50 hover:bg-amber-600",
                "text-purple-600 bg-purple-50 hover:bg-purple-600",
                "text-teal-600 bg-teal-50 hover:bg-teal-600",
                "text-rose-600 bg-rose-50 hover:bg-rose-600",
                "text-emerald-600 bg-emerald-50 hover:bg-emerald-600",
                "text-indigo-600 bg-indigo-50 hover:bg-indigo-600",
                "text-amber-600 bg-amber-50 hover:bg-amber-600"
              ][index] ?? "text-blue-600 bg-blue-50 hover:bg-blue-600";
              return (
                <Link key={item.href + item.title} href={item.href} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl">
                  <span className={`inline-grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 ${iconColors} group-hover:text-white`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-slate-950 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Quran Section */}
      <section className="page-shell py-16 sm:py-20 md:py-24">
        <div className="grid gap-10 rounded-[3rem] bg-slate-950 p-6 text-white shadow-navy-glow sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center relative overflow-hidden">
          <div className="absolute inset-0 islamic-bg-gold opacity-[0.08] pointer-events-none" />
          <div className="relative z-10">
            <BookOpen className="h-9 w-9 text-teal-300 animate-float" />
            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">{l.quranTitle}</h2>
            <p className="mt-5 text-lg leading-9 text-slate-300 text-pretty">{l.quranText}</p>
            <ButtonLink href={rootLocalizedPath(locale, "/quran/1")} variant="gold" className="mt-8 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all">
              {l.quranCta}
            </ButtonLink>
          </div>
          <div className="grid gap-4 relative z-10">
            {l.quranBullets.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/5 p-5 hover:bg-white/10 transition-colors">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-400/10 text-amber-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="font-bold text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Parent Reassurance Section */}
      <section className="page-shell py-16 sm:py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <ShieldCheck className="h-9 w-9 text-blue-600 animate-pulse-glow" />
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.parentTitle}</h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {parentLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-black text-slate-800 shadow-sm transition-all hover:border-blue-300 hover:text-blue-700 hover:shadow-md">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {l.parentPoints.map((point) => (
              <div key={point} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:border-teal-200">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal-50 text-teal-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <strong className="mt-4 block text-lg font-black text-slate-950">{point}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Featured Content Section */}
      <section className="bg-slate-50/50 py-16 sm:py-20 md:py-24 border-y border-slate-100">
        <div className="page-shell">
          <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl text-center lg:text-start">{l.featuredTitle}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { label: l.lessonsLabel, items: samples.lessons, icon: BookOpen },
              { label: l.questionsLabel, items: samples.questions, icon: MessageCircleQuestion },
              { label: l.articlesLabel, items: samples.articles, icon: BookHeart },
            ].map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.label} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-blue-500 to-teal-400" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-black text-slate-950">{group.label}</h3>
                  </div>
                  <div className="mt-6 space-y-4">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} className="block rounded-2xl bg-slate-50 p-4 transition-all hover:bg-blue-50/40 hover:translate-x-1 duration-200">
                        <strong className="block text-sm font-black leading-6 text-slate-950">{item.title}</strong>
                        <span className="mt-2 line-clamp-2 block text-xs font-semibold leading-5 text-slate-600">{item.text}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Internationalization Section */}
      <section className="page-shell py-16 sm:py-20 md:py-24">
        <div className="grid gap-10 rounded-[3rem] border border-blue-100 bg-blue-50/40 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center relative overflow-hidden">
          <div className="absolute inset-0 soft-grid opacity-30 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{l.internationalTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700 text-pretty">{l.internationalText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 relative z-10">
            {["العربية", "English", "Français", "Español"].map((language) => (
              <div key={language} className="rounded-2xl border border-blue-100/50 bg-white p-5 text-center text-lg font-black text-slate-950 shadow-sm hover:shadow-md transition-shadow">
                {language}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="page-shell pb-16 sm:pb-24">
        <div className="relative rounded-[3rem] bg-slate-950 p-8 text-center text-white shadow-navy-glow sm:p-14 overflow-hidden">
          <div className="absolute inset-0 star-field opacity-60 pointer-events-none" />
          <div className="absolute inset-0 islamic-bg-white opacity-[0.04] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black leading-tight sm:text-5xl text-balance">{l.finalTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300 text-pretty">{l.finalText}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href={start} variant="gold" size="lg" className="w-full sm:w-auto shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all">
                {t.common.primaryCta}
              </ButtonLink>
              <ButtonLink href={daily} variant="secondary" size="lg" className="w-full sm:w-auto hover:-translate-y-0.5 transition-all">
                {t.common.dailyCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
