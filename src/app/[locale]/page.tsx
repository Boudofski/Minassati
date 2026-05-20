import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedHome } from "@/components/minassati/LocalizedHome";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { localizedAlternates } from "@/lib/seo-i18n";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }, { locale: "fr" }, { locale: "es" }];
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const t = getDictionary(locale);
  return {
    title: t.site.title,
    description: t.site.description,
    alternates: localizedAlternates("/", locale),
  };
}

export default function LocaleHomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  return <LocalizedHome locale={params.locale} />;
}
