import Link from "next/link";
import { BookOpen, CalendarDays, CheckCircle2, HelpCircle, Languages, MessageCircleQuestion, ShieldCheck, Sparkles } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeDirections, rootLocalizedPath, type Locale } from "@/i18n/config";

export function LocalizedHome({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const dir = localeDirections[locale];
  const start = rootLocalizedPath(locale, "/start");
  const daily = rootLocalizedPath(locale, "/daily");
  const cards = [
    { title: t.home.sections.whatTitle, text: t.home.sections.whatText, icon: HelpCircle },
    { title: t.home.sections.firstTitle, text: t.home.sections.firstText, icon: CalendarDays },
    { title: t.home.sections.safeTitle, text: t.home.sections.safeText, icon: ShieldCheck },
  ];

  return (
    <div lang={locale} dir={dir}>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 star-field opacity-60" />
        <div className="page-shell grid min-h-[calc(100vh-5rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-4 py-2 text-sm font-black text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-500" />
              {t.home.eyebrow}
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
              {t.home.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">{t.home.subhead}</p>
            <p className="mt-4 max-w-2xl text-base font-bold leading-8 text-slate-700">{t.home.who}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={start} className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5">
                {t.common.primaryCta}
              </Link>
              <Link href={daily} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5">
                {t.common.dailyCta}
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-navy-glow sm:p-8">
            <Languages className="h-8 w-8 text-teal-300" />
            <h2 className="mt-5 text-3xl font-black">{t.home.habitTitle}</h2>
            <p className="mt-4 leading-8 text-slate-300">{t.home.habitText}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.home.pillars.map((pillar) => (
                <div key={pillar} className="flex items-start gap-2 rounded-2xl bg-white/8 p-3 text-sm font-bold text-slate-100">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="page-shell py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <Icon className="h-7 w-7 text-blue-600" />
                <h2 className="mt-4 text-2xl font-black text-slate-950">{card.title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-white/70 py-12">
        <div className="page-shell grid gap-5 md:grid-cols-3">
          {[
            { href: rootLocalizedPath(locale, "/quran"), title: t.pages.quran.title, desc: t.pages.quran.desc, icon: BookOpen },
            { href: rootLocalizedPath(locale, "/qa"), title: t.pages.qa.title, desc: t.pages.qa.desc, icon: MessageCircleQuestion },
            { href: rootLocalizedPath(locale, "/parents"), title: t.pages.parents.title, desc: t.pages.parents.desc, icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
                <Icon className="h-7 w-7 text-teal-600" />
                <h2 className="mt-4 text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{item.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
