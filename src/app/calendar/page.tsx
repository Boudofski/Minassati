import type { Metadata } from "next";
import { CalendarDays, TriangleAlert } from "lucide-react";
import { calendarPlanningItems, calendarWarning } from "@/data/calendar";

export const metadata: Metadata = {
  title: "تقويم المباريات والمواعيد - منصتي",
  description: "تقويم تنظيمي لتتبع مباريات المدارس، التسجيلات، نتائج الانتقاء، وبداية الدراسة مع تنبيه للتحقق من المواقع الرسمية.",
  alternates: { canonical: "/calendar" },
};

export default function CalendarPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#b91c1c,#0f7a3b)] text-white">
        <div className="page-shell py-16 sm:py-20">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">التقويم</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">تقويم تنظيمي للمباريات والمواعيد</h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-[2] text-white/90">هذه الصفحة تساعدك على التخطيط. لا تعرض تواريخ رسمية حالية.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-shell py-14">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
              <p className="text-sm font-black leading-8 text-amber-950">{calendarWarning}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {calendarPlanningItems.map((item) => (
              <article key={item.slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <CalendarDays className="h-7 w-7 text-red-700" />
                <h2 className="mt-4 text-xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm font-bold leading-7 text-slate-600">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm font-bold text-slate-700">
                  {item.checklist.map((step) => <li key={step}>• {step}</li>)}
                </ul>
                <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs font-black leading-6 text-amber-900">{calendarWarning}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
