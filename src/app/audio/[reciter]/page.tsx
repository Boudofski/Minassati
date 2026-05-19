import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { AudioPlayerClient } from "@/components/minassati/AudioPlayerClient";
import { getAvailableSurahs, getReciter, getReciters } from "@/lib/mp3quran-api";
import { fallbackSurahs } from "@/lib/quran-api";

type Props = { params: { reciter: string } };

export async function generateStaticParams() {
  const { reciters } = await getReciters();
  return reciters.slice(0, 24).map((reciter) => ({ reciter: String(reciter.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number(params.reciter);
  const { reciter } = await getReciter(id);
  return {
    title: reciter ? `تلاوة ${reciter.name} للأطفال والأسرة` : "مشغل القرآن",
    description: reciter ? `استمع إلى تلاوة ${reciter.name} واختر سورة قصيرة لروتين البيت أو النوم في منصتي.` : "مشغل قرآن صوتي في منصتي.",
    alternates: { canonical: `/audio/${id}` },
    openGraph: reciter
      ? {
          title: `تلاوة ${reciter.name} | منصتي`,
          description: `مشغل تلاوة هادئ للأسرة مع اختيار السورة من منصتي.`,
        }
      : undefined,
  };
}

export default async function ReciterAudioPage({ params }: Props) {
  const id = Number(params.reciter);
  if (!Number.isInteger(id)) notFound();
  const { reciter, source } = await getReciter(id);
  if (!reciter) notFound();

  const moshaf = reciter.moshaf[0];
  const availableSurahs = moshaf ? getAvailableSurahs(moshaf) : [];
  const selectedSurahs = (availableSurahs.length ? availableSurahs : [1, 112, 113, 114]).slice(0, 30);
  const surahs = selectedSurahs.map((surahNumber) => fallbackSurahs[surahNumber - 1]).filter(Boolean);

  return (
    <section className="page-shell py-12 sm:py-16">
      <div className="mb-8 rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
        <p className="text-sm font-black text-teal-300">مشغل القرآن</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">{reciter.name}</h1>
        <p className="mt-4 leading-8 text-slate-300">{moshaf?.name ?? "مصحف صوتي"} {moshaf?.riwaya ? `- رواية ${moshaf.riwaya}` : ""}</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">اقتراح للأسرة: اختاروا سورة قصيرة، استمعوا إليها مرة، ثم اسألوا الطفل عن كلمة جميلة سمعها.</p>
      </div>

      {source === "fallback" ? (
        <div className="mb-6 flex items-start gap-3 rounded-[2rem] border border-amber-200 bg-amber-50 p-5 text-amber-900">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0" />
          <p className="text-sm leading-7">تظهر بيانات احتياطية لأن API القراء لم يستجب حالياً. إن لم يعمل الصوت، جرّب لاحقاً عند توفر الاتصال.</p>
        </div>
      ) : null}

      {moshaf ? (
        <AudioPlayerClient moshaf={moshaf} surahs={surahs} reciterName={reciter.name} />
      ) : (
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center text-slate-600">
          <p className="font-bold">لا توجد روابط صوتية متاحة لهذا القارئ حالياً.</p>
          <Link href="/audio" className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">اختر قارئاً آخر</Link>
        </div>
      )}
    </section>
  );
}
