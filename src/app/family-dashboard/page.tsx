import type { Metadata } from "next";
import { BookOpen, CalendarCheck, CheckCircle2, HeartHandshake, TrendingUp } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { challengeTracks, childMissions } from "@/data/platform";
import { lessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "لوحة الأسرة",
  description: "منطقة الوالدين في منصتي لمتابعة تقدم الطفل واقتراح دروس وروتين أسبوعي.",
  alternates: { canonical: "/family-dashboard" },
};

export default function FamilyDashboardPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-blue-100/60 sm:p-10">
          <p className="text-sm font-black text-blue-700">منطقة الوالدين</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">تابع رحلة الطفل بهدوء ووضوح</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">لوحة تجمع التقدم، الدروس المقترحة، التحديات، والأنشطة العائلية حتى يصبح التعلم عادة أسبوعية قابلة للمتابعة.</p>
        </div>
      </section>
      <Section title="ملخص هذا الأسبوع">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["12", "دقيقة تعلم", TrendingUp],
            ["4", "مهمات مكتملة", CheckCircle2],
            ["3", "دروس مقترحة", BookOpen],
            ["2", "أنشطة عائلية", HeartHandshake],
          ].map(([value, label, Icon]) => (
            <div key={label as string} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <Icon className="h-6 w-6 text-blue-600" />
              <strong className="mt-4 block text-4xl font-black text-slate-950">{value as string}</strong>
              <span className="mt-1 block text-sm font-bold text-slate-500">{label as string}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-white/70" title="روتين مقترح">
        <div className="grid gap-5 lg:grid-cols-2">
          {challengeTracks.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></span>
                  <div>
                    <h2 className="text-xl font-black text-slate-950">{track.title}</h2>
                    <p className="text-sm font-bold text-slate-500">{track.level}</p>
                  </div>
                </div>
                <div className="mt-5 h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-gradient-to-l from-blue-500 to-teal-400" style={{ width: `${track.progress}%` }} /></div>
              </article>
            );
          })}
        </div>
      </Section>
      <Section title="دروس يوصى بها">
        <div className="grid gap-4 md:grid-cols-3">
          {lessons.slice(0, 6).map((lesson) => (
            <article key={`${lesson.category}-${lesson.slug}`} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <CalendarCheck className="h-6 w-6 text-teal-600" />
              <h2 className="mt-4 text-lg font-black text-slate-950">{lesson.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{lesson.summary}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
