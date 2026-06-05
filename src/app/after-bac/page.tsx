import type { Metadata } from "next";
import { afterBacCategories, afterBacOptions } from "@/data/after-bac";

export const metadata: Metadata = {
  title: "بعد الباك في المغرب - منصتي",
  description: "دليل اختيارات ما بعد الباك في المغرب: الجامعة، المدارس العليا، التكوين المهني، الدراسة بالخارج، والمهارات الرقمية.",
  alternates: { canonical: "/after-bac" },
};

export default function AfterBacPage() {
  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-20">
          <p className="eyebrow-pill">بعد الباك</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">افهم الاختيارات قبل أن تختار</h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">قارن بين المسارات بهدوء، ولا تعتمد على شروط أو آجال إلا من المواقع الرسمية للمؤسسات والجهات المنظمة.</p>
        </div>
      </section>
      <section className="section-light">
        <div className="page-shell py-14">
          <div className="flex flex-wrap gap-2">
            {afterBacCategories.map((category) => <span key={category} className="badge-soon">{category}</span>)}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {afterBacOptions.map((option) => (
              <article key={option.slug} className="card-premium p-5">
                <span className="text-xs font-black text-blue-700">{option.category}</span>
                <h2 className="mt-2 text-lg font-black text-slate-950">{option.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{option.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {option.goodFor.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
