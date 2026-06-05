import type { Metadata } from "next";
import { CheckCircle2, Search, School, TriangleAlert } from "lucide-react";
import { schoolCategories, schoolChecklist, schoolComparisonCriteria, schoolVerificationWarning } from "@/data/schools";

export const metadata: Metadata = {
  title: "المدارس المغربية - منصتي",
  description: "دليل المدارس المغربية حسب الفئة: الجامعات، المدارس العليا، التكوين المهني، المؤسسات الخاصة، والتعلم عن بعد دون ترتيب أو شروط مزيفة.",
  alternates: { canonical: "/schools" },
};

export default function SchoolsPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#b91c1c,#0f7a3b)] text-white">
        <div className="page-shell py-12 sm:py-16">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">المدارس المغربية</p>
          <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">ابحث عن المدارس والمعاهد المناسبة</h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-[2] text-white/90">قارن المؤسسات حسب الفئة والمعايير العملية، دون ترتيب مزيف أو شروط ولوج غير موثقة.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-shell py-14">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
              <p className="text-sm font-black leading-8 text-amber-950">{schoolVerificationWarning}</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-emerald-700" />
            <h2 className="text-xl font-black text-slate-950">كيف تختار بين مؤسسة وأخرى؟</h2>
            </div>
            <p className="mt-3 text-sm font-bold leading-8 text-slate-600">ابدأ بالمعلومة الرسمية ثم قارن ظروفك الشخصية. لا تجعل اسم المؤسسة وحده معيار القرار.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {schoolComparisonCriteria.map((filter) => <span key={filter} className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-700 ring-1 ring-slate-200">{filter}</span>)}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {schoolCategories.map((category) => (
              <article key={category.slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
                <School className="h-7 w-7 text-emerald-700" />
                <h2 className="mt-4 text-xl font-black text-slate-950">{category.title}</h2>
                <p className="mt-3 text-[15px] font-bold leading-8 text-slate-600">{category.description}</p>
                <ul className="mt-4 space-y-2 text-sm font-bold leading-7 text-slate-700">
                  {category.details.map((detail) => <li key={detail}>• {detail}</li>)}
                </ul>
                <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-bold leading-7 text-emerald-900">{category.fits}</p>
                <p className="mt-3 rounded-lg bg-amber-50 p-3 text-xs font-black leading-6 text-amber-900">{category.caution}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.compareBy.map((item) => <span key={item} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{item}</span>)}
                </div>
              </article>
            ))}
          </div>

          <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-700" />
              <h2 className="text-xl font-black text-slate-950">قبل اختيار مؤسسة، اسأل:</h2>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {schoolChecklist.map((item) => (
                <div key={item} className="rounded-lg bg-slate-50 p-4 text-sm font-black leading-7 text-slate-700">{item}</div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
