import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedSimplePage } from "@/components/minassati/LocalizedSimplePage";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { localizedAlternates } from "@/lib/seo-i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const page = getDictionary(locale).pages.learn;
  return { title: page.title, description: page.desc, alternates: localizedAlternates("/learn", locale) };
}

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  return <LocalizedSimplePage locale={params.locale} pageKey="learn" />;
}
