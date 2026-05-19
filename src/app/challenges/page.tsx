import type { Metadata } from "next";
import { CalendarCheck, Trophy } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { challengeTracks } from "@/data/platform";

export const metadata: Metadata = {
  title: "تحديات التعلم",
  description: "تحديات وسلاسل تعلم في منصتي تساعد الطفل على بناء عادة إيمانية قصيرة.",
  alternates: { canonical: "/challenges" },
};

export default function ChallengesPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <p className="text-sm font-black text-amber-300">التحديات</p>
          <h1 className="mt-4 text-balance text-4xl font-black sm:text-6xl">سلاسل صغيرة تبني عادة كبيرة</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">التحديات قصيرة وواضحة، هدفها التكرار الهادئ لا الضغط، وتناسب متابعة ولي الأمر.</p>
        </div>
      </section>
      <Section title="مسارات التحدي">
        <div className="grid gap-5 md:grid-cols-2">
          {challengeTracks.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-50 text-amber-600"><Icon className="h-7 w-7" /></span>
                  <div>
                    <h2 className="text-2xl font-black text-slate-950">{track.title}</h2>
                    <p className="mt-1 text-sm font-bold text-slate-500">{track.level}</p>
                  </div>
                </div>
                <div className="mt-6 h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-gradient-to-l from-amber-500 to-teal-400" style={{ width: `${track.progress}%` }} /></div>
              </article>
            );
          })}
        </div>
      </Section>
      <Section className="bg-white/70" title="قواعد تربوية للتحديات">
        <div className="grid gap-4 md:grid-cols-3">
          {["الاستمرارية أهم من الكثرة", "المكافأة معنى قبل أن تكون شارة", "ولي الأمر يشجع ولا يضغط"].map((rule) => (
            <div key={rule} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <CalendarCheck className="h-6 w-6 text-blue-600" />
              <h2 className="mt-4 text-xl font-black text-slate-950">{rule}</h2>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
