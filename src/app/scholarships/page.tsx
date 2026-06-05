import type { Metadata } from "next";
import { scholarshipGuide } from "@/data/scholarships";

export const metadata: Metadata = {
  title: "المنح والدراسة بالخارج - منصتي",
  description: "دليل عام للبحث عن المنح والدراسة بالخارج: أين تبحث، الوثائق، رسالة التحفيز، اختبارات اللغة، والتحذير من الآجال غير المؤكدة.",
  alternates: { canonical: "/scholarships" },
};

export default function ScholarshipsPage() {
  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-20">
          <p className="eyebrow-pill">المنح</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">ابدأ البحث عن المنح بطريقة منظمة</h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">لا نعطي آجالاً حالية أو وعود قبول. هدف هذا الدليل هو مساعدتك على البحث والتحضير من مصادر رسمية.</p>
        </div>
      </section>
      <section className="section-light">
        <div className="page-shell grid gap-5 py-16 md:grid-cols-2">
          <Box title="أين تبحث؟" items={scholarshipGuide.searchPlaces} />
          <Box title="الوثائق المطلوبة غالباً" items={scholarshipGuide.documents} />
          <Box title="رسالة التحفيز" items={scholarshipGuide.motivationLetter} />
          <Box title="اختبارات اللغة" items={scholarshipGuide.languageTests} />
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:col-span-2">
            <h2 className="text-xl font-black text-slate-950">تنبيه الآجال</h2>
            <p className="mt-3 text-sm font-black leading-8 text-amber-950">{scholarshipGuide.deadlineWarning}</p>
          </div>
          <Box title="Checklist التخطيط" items={scholarshipGuide.checklist} className="md:col-span-2" />
        </div>
      </section>
    </>
  );
}

function Box({ title, items, className = "" }: { title: string; items: string[]; className?: string }) {
  return (
    <section className={`card-premium p-6 ${className}`}>
      <h2 className="text-xl font-black text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm font-bold leading-7 text-slate-700">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </section>
  );
}
