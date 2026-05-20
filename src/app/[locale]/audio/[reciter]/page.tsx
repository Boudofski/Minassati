import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { AudioPlayerClient } from "@/components/minassati/AudioPlayerClient";
import { getAvailableSurahs, getReciter, getReciters } from "@/lib/mp3quran-api";
import { fallbackSurahs } from "@/lib/quran-api";
import { isLocale, localeDirections, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localizedAlternates } from "@/lib/seo-i18n";

type Props = { params: { locale: string; reciter: string } };

export async function generateStaticParams() {
  const { reciters } = await getReciters();
  return ["ar", "en", "fr", "es"].flatMap((locale) =>
    reciters.slice(0, 24).map((reciter) => ({ locale, reciter: String(reciter.id) }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const id = Number(params.reciter);
  const { reciter } = await getReciter(id);
  const t = getDictionary(locale);

  return {
    title: reciter ? `${t.pages.audio.title}: ${reciter.name}` : t.pages.audio.title,
    description: reciter ? `${t.pages.audio.desc} - ${reciter.name}` : t.pages.audio.desc,
    alternates: localizedAlternates(`/audio/${id}`, locale),
  };
}

export default async function ReciterAudioPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const id = Number(params.reciter);
  if (!Number.isInteger(id)) notFound();
  const { reciter, source } = await getReciter(id);
  if (!reciter) notFound();

  const t = getDictionary(locale);
  const moshaf = reciter.moshaf[0];
  const availableSurahs = moshaf ? getAvailableSurahs(moshaf) : [];
  const selectedSurahs = availableSurahs.length ? availableSurahs : Array.from({ length: 114 }, (_, i) => i + 1);
  const surahs = selectedSurahs.map((surahNumber) => fallbackSurahs[surahNumber - 1]).filter(Boolean);

  return (
    <section className="page-shell py-12 sm:py-16" lang={locale} dir={localeDirections[locale]}>
      <div className="mb-8 rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
        <p className="text-sm font-black text-teal-300">{t.pages.audio.title}</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">{reciter.name}</h1>
        <p className="mt-4 leading-8 text-slate-300">{moshaf?.name ?? "مصحف صوتي"} {moshaf?.riwaya ? `- رواية ${moshaf.riwaya}` : ""}</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
          {locale === "ar"
            ? "اقتراح للأسرة: اختاروا سورة قصيرة، استمعوا إليها مرة، ثم اسألوا الطفل عن كلمة جميلة سمعها."
            : "Family routine: Listen together, then encourage your child to repeat a short ayah or talk about a beautiful word they heard."}
        </p>
      </div>

      {source === "fallback" ? (
        <div className="mb-6 flex items-start gap-3 rounded-[2rem] border border-amber-200 bg-amber-50 p-5 text-amber-900">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0" />
          <p className="text-sm leading-7">
            {locale === "ar"
              ? "تظهر بيانات احتياطية لأن API القراء لم يستجب حالياً. إن لم يعمل الصوت، جرّب لاحقاً عند توفر الاتصال."
              : "Showing fallback data because the reciters API didn't respond. If audio doesn't play, try again later."}
          </p>
        </div>
      ) : null}

      {moshaf ? (
        <AudioPlayerClient moshaf={moshaf} surahs={surahs} reciterName={reciter.name} />
      ) : (
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center text-slate-600">
          <p className="font-bold">
            {locale === "ar"
              ? "لا توجد روابط صوتية متاحة لهذا القارئ حالياً."
              : "No audio links available for this reciter at this time."}
          </p>
          <Link href={`/${locale}/audio`} className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">
            {locale === "ar" ? "اختر قارئاً آخر" : "Choose another reciter"}
          </Link>
        </div>
      )}
    </section>
  );
}
