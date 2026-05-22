import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "معاينة لوحة المدرب - منصتي",
  description: "تصور ثابت للوحة المدرب المستقبلية في منصتي.",
  alternates: { canonical: "/creator-preview" },
  robots: { index: false, follow: false },
};

export default function CreatorPreviewPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <p className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-700 inline-flex">قريبًا</p>
      <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-6xl">لوحة المدرب المستقبلية</h1>
      <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">تصور لإدارة الدورات، الموارد، الطلبات، والإحصائيات عندما يفتح Minassati marketplace للمدربين.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {["إدارة الدورات", "بيع الموارد", "إحصائيات الأداء", "طلبات الطلاب", "صفحة مدرب", "مراجعة الجودة"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-black text-slate-950">{item}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">ميزة مخططة ولا تمثل لوحة حية حالياً.</p>
          </div>
        ))}
      </div>
      <Link href="/instructors" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white">تعرف على الانضمام كمدرب</Link>
    </section>
  );
}
