import type { Metadata } from "next";
import { Globe2, TriangleAlert } from "lucide-react";
import { opportunityGuide } from "@/data/opportunities";

export const metadata: Metadata = {
  title: "الفرص الأجنبية - منصتي",
  description: "أدلة حول المنح، الدراسة بالخارج، الجامعات الأجنبية، الوثائق، رسالة التحفيز، واختبارات اللغة دون آجال مزيفة.",
  alternates: { canonical: "/opportunities" },
};

export default function OpportunitiesPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#b91c1c,#0f7a3b)] text-white">
        <div className="page-shell py-16 sm:py-20">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">الفرص الأجنبية</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">منح ودراسة بالخارج بدون وعود مزيفة</h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-[2] text-white/90">تعلم أين تبحث، كيف تجهز الوثائق، وكيف تتحقق من المواعيد من المصادر الرسمية.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-shell py-14">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
              <p className="text-sm font-black leading-8 text-amber-950">{opportunityGuide.warning}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {opportunityGuide.categories.map((category) => (
              <article key={category.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Globe2 className="h-7 w-7 text-emerald-700" />
                <h2 className="mt-4 text-xl font-black text-slate-950">{category.title}</h2>
                <p className="mt-3 text-sm font-bold leading-7 text-slate-600">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => <span key={item} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="page-shell grid gap-5 py-14 md:grid-cols-2">
          <Box title="الوثائق المطلوبة غالباً" items={opportunityGuide.documents} />
          <Box title="خطة البحث الأولى" items={opportunityGuide.planning} />
        </div>
      </section>
    </>
  );
}

function Box({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-black text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm font-bold leading-7 text-slate-700">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </section>
  );
}
