import type { Metadata } from "next";
import { Headphones, ListMusic, Pause, Play, Repeat, Volume2 } from "lucide-react";
import { reciters, sampleSurahs } from "@/data/quran";

export const metadata: Metadata = {
  title: "الاستماع للقرآن",
  description: "مشغل قرآن هادئ للأطفال والأسرة مع قراء مختارين وسور مناسبة للحفظ والمراجعة.",
  alternates: { canonical: "/audio" },
};

export default function AudioPage() {
  return (
    <section className="page-shell py-12 sm:py-16">
      <div className="mb-8 aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-amber-100/60 sm:p-10">
        <p className="text-sm font-black text-amber-600">الاستماع للقرآن</p>
        <h1 className="text-balance mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">تلاوة هادئة للحفظ والطمأنينة</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">مشغل مصمم للأطفال: تكرار، اختيار قارئ، سور قصيرة، ووضع قبل النوم دون ضجيج بصري.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <aside className="grid gap-4">
          {reciters.map((reciter) => (
            <article key={reciter.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-amber-200">
              <Headphones className="h-6 w-6 text-amber-600" />
              <h2 className="mt-4 text-xl font-black text-slate-950">{reciter.name}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{reciter.style}</p>
            </article>
          ))}
        </aside>

        <main className="rounded-[2.5rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-teal-300">المشغل العائلي</p>
                <h2 className="mt-3 text-4xl font-black">سورة الفاتحة</h2>
                <p className="mt-2 text-slate-300">مشاري العفاسي - تكرار للحفظ</p>
              </div>
              <ListMusic className="h-8 w-8 text-amber-300" />
            </div>
            <div className="mt-8 h-3 rounded-full bg-white/10">
              <div className="h-3 w-2/5 rounded-full bg-gradient-to-l from-blue-500 to-teal-400" />
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white"><Repeat className="h-5 w-5" /></button>
              <button className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white"><Pause className="h-5 w-5" /></button>
              <button className="grid h-16 w-16 place-items-center rounded-full bg-white text-slate-950 shadow-lg"><Play className="h-7 w-7" /></button>
              <button className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white"><Volume2 className="h-5 w-5" /></button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-black text-slate-950">قائمة سور للحفظ</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {sampleSurahs.slice(-12).map((surah) => (
                <button key={surah.number} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 text-right transition hover:border-blue-200 hover:bg-blue-50">
                  <span className="font-black text-slate-900">{surah.name}</span>
                  <span className="text-xs font-bold text-slate-500">{surah.ayahs} آيات</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
