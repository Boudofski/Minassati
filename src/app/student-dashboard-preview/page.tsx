import type { Metadata } from "next";
import { BookOpen, CheckCircle2, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "معاينة لوحة المتعلم - منصتي",
  description: "تصور ثابت للوحة المتعلم في منصتي: دورات، تقدم، موارد محفوظة، ورد قرآن، ومسارات مقترحة.",
  alternates: { canonical: "/student-dashboard-preview" },
  robots: { index: false, follow: false },
};

export default function StudentDashboardPreviewPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <div className="mb-8">
        <p className="rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 inline-flex">معاينة ثابتة</p>
        <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-6xl">لوحة المتعلم القادمة</h1>
        <p className="mt-4 max-w-3xl text-lg leading-9 text-slate-600">هذه ليست صفحة تسجيل دخول. إنها تصور لمنتج الاشتراك وتجربة المتعلم المستقبلية.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">دوراتي</h2>
          {["التسويق الرقمي من الصفر", "الذكاء الاصطناعي للأعمال", "Canva للأعمال"].map((course, index) => (
            <div key={course} className="mt-4 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3 text-sm font-black">
                <span>{course}</span>
                <span className="text-blue-700">{[62, 38, 81][index]}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full bg-blue-600" style={{ width: `${[62, 38, 81][index]}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <BookOpen className="h-7 w-7 text-amber-300" />
            <h2 className="mt-4 text-2xl font-black">ورد القرآن اليومي</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">سورة الكهف: 12 آية مقروءة هذا الأسبوع.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <Trophy className="h-7 w-7 text-amber-500" />
            <h2 className="mt-4 text-2xl font-black text-slate-950">الشهادات</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">شهادات الإتمام قادمة مع نظام الاشتراكات.</p>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {["موارد محفوظة", "مسار مقترح", "مهام هذا الأسبوع"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            <h2 className="mt-4 text-xl font-black text-slate-950">{item}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">ميزة قادمة ضمن تجربة التعلم المنظمة.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
