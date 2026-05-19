import type { Metadata } from "next";
import { Palette, Timer } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { activities } from "@/data/activities";

export const metadata: Metadata = {
  title: "الأنشطة العائلية",
  description: "أنشطة إسلامية عملية للأطفال: تلوين، بطاقات، تحديات لطف، جداول صلاة، ومراجعة سور.",
  alternates: { canonical: "/activities" },
};

export default function ActivitiesPage() {
  const categories = Array.from(new Set(activities.map((activity) => activity.category)));

  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-violet-100/60 sm:p-10">
          <p className="text-sm font-black text-violet-700">أنشطة قابلة للطباعة والتطبيق</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">حوّلوا التعلم إلى لحظة عائلية دافئة</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">أفكار منظمة بمواد بسيطة وخطوات واضحة، مناسبة للبيت والمدرسة والحلقات الصغيرة.</p>
        </div>
      </section>
      <Section title="كل الأنشطة" description={`${activities.length} نشاطاً منظماً حسب العمر والوقت والمواد.`}>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm">{category}</span>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {activities.map((activity) => (
            <article key={activity.slug} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-blue-700">{activity.category} · {activity.ageRange}</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">{activity.title}</h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-700"><Timer className="h-4 w-4" /> {activity.timeNeeded}</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="inline-flex items-center gap-2 font-black text-slate-950"><Palette className="h-4 w-4 text-violet-600" /> المواد</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {activity.materials.map((material) => <li key={material}>• {material}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl bg-teal-50 p-4">
                  <p className="font-black text-teal-950">ملاحظة للأهل</p>
                  <p className="mt-3 text-sm leading-7 text-teal-900">{activity.parentNote}</p>
                </div>
              </div>
              <ol className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
                {activity.steps.map((step, index) => <li key={step}><strong className="text-slate-950">{index + 1}.</strong> {step}</li>)}
              </ol>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
