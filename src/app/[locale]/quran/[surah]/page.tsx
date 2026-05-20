import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuranReader } from "@/components/minassati/QuranReader";
import { isLocale, localeDirections, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localizedAlternates } from "@/lib/seo-i18n";
import { getSurahAyahs, getSurahList } from "@/lib/quran-api";
import { getSurahTranslations } from "@/lib/quran-translations";
import { getReciters } from "@/lib/mp3quran-api";

export function generateStaticParams() {
  return ["ar", "en", "fr", "es"].flatMap((locale) => Array.from({ length: 114 }, (_, index) => ({ locale, surah: String(index + 1) })));
}

export async function generateMetadata({ params }: { params: { locale: string; surah: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const surahNumber = Number(params.surah);
  if (!Number.isInteger(surahNumber) || surahNumber < 1 || surahNumber > 114) return {};
  const surahs = await getSurahList();
  const surah = surahs.find((item) => item.number === surahNumber);
  const t = getDictionary(locale);
  return {
    title: surah ? `${t.pages.quran.title}: ${surah.name}` : t.pages.quran.title,
    description: t.pages.quran.desc,
    alternates: localizedAlternates(`/quran/${surahNumber}`, locale),
  };
}

export default async function Page({ params }: { params: { locale: string; surah: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const surahNumber = Number(params.surah);
  if (!Number.isInteger(surahNumber) || surahNumber < 1 || surahNumber > 114) notFound();
  const t = getDictionary(locale);
  const [surah, translations, { reciters }] = await Promise.all([
    getSurahAyahs(surahNumber),
    getSurahTranslations(surahNumber),
    getReciters(),
  ]);
  return (
    <article className="page-shell py-12 sm:py-16" lang={locale} dir={localeDirections[locale]}>
      <div className="mb-8 rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
        <p className="text-sm font-black text-teal-300">{t.quran.surahLabel} {surah.number}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">{surah.name}</h1>
        <p className="mt-4 text-slate-300">{surah.numberOfAyahs} {t.quran.ayahsLabel}</p>
      </div>
      <QuranReader ayahs={surah.ayahs} translations={translations} surahName={surah.name} locale={locale} reciters={reciters} surahNumber={surahNumber} />
    </article>
  );
}
