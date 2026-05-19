import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { childMissions, productAreas } from "@/data/platform";

export const metadata: Metadata = {
  title: "منطقة الطفل",
  description: "واجهة تفاعلية آمنة للأطفال داخل منصتي: مهمات، شارات، قرآن، قصص، وألعاب تعليمية.",
  alternates: { canonical: "/kids-zone" },
};

export default function KidsZonePage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <div className="absolute inset-0 islamic-bg-white opacity-25" />
          <div className="relative">
            <p className="text-sm font-black text-amber-300">منطقة الطفل</p>
            <h1 className="mt-4 text-balance text-4xl font-black sm:text-6xl">مهمات صغيرة وشعور كبير بالإنجاز</h1>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">تجربة مبهجة بلا ازدحام: يختار الطفل مهمة، يتعلم، ثم يحصل على شارة تربوية مرتبطة بقيمة جميلة.</p>
          </div>
        </div>
      </section>
      <Section title="مهمات اليوم">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {childMissions.map((mission) => {
            const Icon = mission.icon;
            return (
              <article key={mission.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-soft">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-amber-50 text-amber-600"><Icon className="h-7 w-7" /></span>
                <h2 className="mt-4 text-xl font-black text-slate-950">{mission.title}</h2>
                <p className="mt-2 text-sm font-bold text-teal-700">{mission.reward}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section className="bg-white/70" title="اختَر عالمك">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Link key={area.href} href={area.href} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
                <Icon className="h-7 w-7 text-blue-600" />
                <h2 className="mt-4 text-xl font-black text-slate-950">{area.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{area.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-blue-700">ابدأ <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /></span>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
