import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Headphones, Radio } from "lucide-react";
import { getReciters } from "@/lib/mp3quran-api";

export const metadata: Metadata = {
  title: "الاستماع للقرآن للأطفال والأسرة",
  description: "مشغل تلاوة قرآن هادئ يعتمد على MP3Quran.net، مع اختيار القارئ والسورة وروابط مناسبة لروتين البيت والنوم.",
  alternates: { canonical: "/audio" },
  openGraph: {
    title: "الاستماع للقرآن | منصتي",
    description: "اختاروا قارئاً وسورة، واجعلوا التلاوة جزءاً هادئاً من روتين الأسرة.",
  },
};

export default async function AudioPage() {
  const { reciters, source } = await getReciters();

  return (
    <section className="page-shell py-12 sm:py-16">
      <div className="mb-8 aurora-panel rounded-[2rem] border border-white p-6 shadow-xl shadow-amber-100/60 sm:rounded-[2.5rem] sm:p-10">
        <p className="text-sm font-black text-amber-600">الصوتيات</p>
        <h1 className="text-balance mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">تلاوة هادئة ترافق البيت والطفل</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
          اختاروا قارئاً وسورة قصيرة، واستعملوا التلاوة قبل النوم أو بعد درس القرآن. الملفات لا تُخزن محلياً، وتظهر حالة احتياطية عند تعذر الاتصال.
        </p>
      </div>

      {source === "fallback" ? (
        <div className="mb-6 flex items-start gap-3 rounded-[2rem] border border-amber-200 bg-amber-50 p-5 text-amber-900">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0" />
          <p className="text-sm leading-7">تعذر تحميل قائمة القراء الحية، لذلك تظهر قائمة احتياطية قابلة للتشغيل عند توفر روابط الخوادم.</p>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reciters.slice(0, 48).map((reciter) => {
          const moshaf = reciter.moshaf[0];
          return (
            <Link key={reciter.id} href={`/audio/${reciter.id}`} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-amber-200">
              <Headphones className="h-7 w-7 text-amber-600" />
              <h2 className="mt-4 text-xl font-black text-slate-950">{reciter.name}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{moshaf?.name ?? "مصحف مرتل"}</p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white">
                <Radio className="h-4 w-4" />
                افتح المشغل
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
