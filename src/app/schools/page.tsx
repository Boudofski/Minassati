import type { Metadata } from "next";
import { schoolCategories } from "@/data/schools";

export const metadata: Metadata = {
  title: "دليل المدارس والجامعات - منصتي",
  description: "دليل يساعدك على مقارنة الجامعات والمدارس والتكوين المهني دون اختلاق شروط أو ترتيبات رسمية.",
  alternates: { canonical: "/schools" },
};

export default function SchoolsPage() {
  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-20">
          <p className="eyebrow-pill">المدارس</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">قارن المؤسسات بمعايير واضحة</h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">لا نقدم ترتيبات رسمية أو شروط ولوج مخترعة. تحقق دائماً من الموقع الرسمي للمؤسسة قبل أي قرار أو ترشيح.</p>
        </div>
      </section>
      <section className="section-soft">
        <div className="page-shell py-16">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm font-black leading-8 text-amber-950">تحقق دائماً من الموقع الرسمي للمؤسسة، لأن الشروط والآجال والوثائق قد تتغير من سنة لأخرى.</div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {schoolCategories.map((category) => (
              <article key={category.slug} className="card-premium p-6">
                <h2 className="text-xl font-black text-slate-950">{category.title}</h2>
                <p className="mt-3 text-sm font-bold leading-7 text-slate-600">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.compareBy.map((item) => <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
