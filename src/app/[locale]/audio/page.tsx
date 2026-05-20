import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, Headphones, Radio } from "lucide-react";
import { getReciters } from "@/lib/mp3quran-api";
import { isLocale, localeDirections, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localizedAlternates } from "@/lib/seo-i18n";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const page = getDictionary(locale).pages.audio;
  return {
    title: page.title,
    description: page.desc,
    alternates: localizedAlternates("/audio", locale),
  };
}

export default async function LocalizedAudioPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getDictionary(locale);
  const { reciters, source } = await getReciters();

  return (
    <section className="page-shell py-12 sm:py-16" lang={locale} dir={localeDirections[locale]}>
      <div className="mb-8 aurora-panel rounded-[2rem] border border-white p-6 shadow-xl shadow-amber-100/60 sm:rounded-[2.5rem] sm:p-10">
        <p className="text-sm font-black text-amber-600">{t.pages.audio.title}</p>
        <h1 className="text-balance mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
          {locale === "ar" ? "تلاوة هادئة ترافق البيت والطفل" : "Calm Recitations for Home & Bedtime"}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600 font-medium">
          {locale === "ar"
            ? "اختاروا قارئاً وسورة قصيرة، واستعملوا التلاوة قبل النوم أو بعد درس القرآن. الملفات لا تُخزن محلياً، وتظهر حالة احتياطية عند تعذر الاتصال."
            : "Choose a reciter and a short surah. Listen before bedtime or after the Quran lesson. Stored remotely on MP3Quran servers."}
        </p>
      </div>

      {source === "fallback" ? (
        <div className="mb-6 flex items-start gap-3 rounded-[2rem] border border-amber-200 bg-amber-50 p-5 text-amber-900">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0" />
          <p className="text-sm leading-7">
            {locale === "ar"
              ? "تعذر تحميل قائمة القراء الحية، لذلك تظهر قائمة احتياطية قابلة للتشغيل عند توفر روابط الخوادم."
              : "Could not load the live list of reciters, displaying the fallback list."}
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reciters.slice(0, 48).map((reciter) => {
          const moshaf = reciter.moshaf[0];
          return (
            <Link
              key={reciter.id}
              href={`/${locale}/audio/${reciter.id}`}
              className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-amber-200"
            >
              <Headphones className="h-7 w-7 text-amber-600 animate-float" />
              <h2 className="mt-4 text-xl font-black text-slate-950 group-hover:text-amber-600 transition-colors">{reciter.name}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 font-semibold">{moshaf?.name ?? "مصحف مرتل"}</p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white group-hover:bg-amber-600 transition-colors shadow-sm">
                <Radio className="h-4 w-4" />
                {locale === "ar" ? "افتح المشغل" : "Open Player"}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
