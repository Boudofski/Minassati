import type { Metadata } from "next";
import { CheckCircle2, TriangleAlert } from "lucide-react";
import { schoolChecklist, schoolComparisonCriteria, schoolVerificationWarning } from "@/data/schools";
import { moroccanSchoolSections, moroccanSchoolFilterChips } from "@/data/moroccan-schools";

export const metadata: Metadata = {
  title: "المدارس المغربية - منصتي",
  description: "دليل المدارس المغربية حسب الفئة: الجامعات، المدارس العليا، التكوين المهني، المؤسسات الخاصة، والدراسة بالخارج — دون ترتيب مزيف أو شروط غير موثقة.",
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
        <div className="page-shell py-10">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
              <p className="text-sm font-black leading-8 text-amber-950">{schoolVerificationWarning}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {moroccanSchoolFilterChips.map((chip) => (
              <a key={chip.id} href={`#${chip.id}`} className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-800 transition hover:bg-emerald-100">
                {chip.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {moroccanSchoolSections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-20 border-t border-slate-100 bg-slate-50">
          <div className="page-shell py-12">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">{section.title}</h2>
              <p className="mt-2 text-base font-bold text-slate-500">{section.subtitle}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {section.entries.map((entry) => (
                <article key={entry.slug} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-black text-slate-950">{entry.name}</h3>
                    {entry.acronym && (
                      <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-black text-emerald-800">{entry.acronym}</span>
                    )}
                  </div>
                  <p className="mt-3 grow text-[15px] font-bold leading-7 text-slate-600">{entry.description}</p>
                  <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-bold leading-6 text-emerald-900">{entry.fits}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {entry.fields.slice(0, 4).map((field) => (
                      <span key={field} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">{field}</span>
                    ))}
                  </div>
                  <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs font-black leading-6 text-amber-900">{entry.caution}</p>
                  <a href="#compare" className="mt-4 inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-black text-emerald-800 transition hover:bg-emerald-50">
                    اعرف كيف تقارن
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="compare" className="scroll-mt-20 bg-white">
        <div className="page-shell py-12">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-700" />
            <h2 className="text-2xl font-black text-slate-950">كيف تقارن بين مؤسستين؟</h2>
          </div>
          <p className="mt-3 text-sm font-bold leading-8 text-slate-500">لا تعتمد على الاسم فقط. استخدم هذه المعايير لمقارنة فعلية تساعدك على القرار.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {schoolComparisonCriteria.map((criterion) => (
              <span key={criterion} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-slate-700">{criterion}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50">
        <div className="page-shell py-12">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-700" />
            <h2 className="text-2xl font-black text-slate-950">أسئلة قبل اختيار المؤسسة</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {schoolChecklist.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-black leading-7 text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
