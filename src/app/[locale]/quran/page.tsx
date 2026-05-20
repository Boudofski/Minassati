import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Headphones } from "lucide-react";
import { QuranSurahSearch } from "@/components/minassati/QuranSurahSearch";
import { Section } from "@/components/minassati/Section";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, rootLocalizedPath, type Locale } from "@/i18n/config";
import { localizedAlternates } from "@/lib/seo-i18n";
import { getSurahList } from "@/lib/quran-api";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const page = getDictionary(locale).pages.quran;
  return { title: page.title, description: page.desc, alternates: localizedAlternates("/quran", locale) };
}

export default async function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getDictionary(locale);
  const surahs = await getSurahList();
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <BookOpen className="h-8 w-8 text-teal-300" />
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{t.pages.quran.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">{t.pages.quran.desc}</p>
          <Link href={rootLocalizedPath(locale, "/audio")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950">
            <Headphones className="h-4 w-4" /> {t.pages.audio.title}
          </Link>
        </div>
      </section>
      <Section title={t.pages.quran.title} description={t.pages.quran.desc}>
        <QuranSurahSearch surahs={surahs} basePath={rootLocalizedPath(locale, "/quran")} />
      </Section>
    </>
  );
}
