import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "للمدربين وصناع المعرفة - منصتي",
  description: "انضم لاحقاً كمدرب أو صانع معرفة في منصتي لبيع الدورات والموارد للجمهور المغربي والعربي.",
  alternates: { canonical: "/instructors" },
};

const points = ["دورات عملية قصيرة أو متقدمة", "موارد رقمية وقوالب قابلة للبيع", "مسارات تعليمية منظمة", "صفحة مدرب وملف مهني مستقبلًا", "جمهور مغربي وعربي يبحث عن مهارات نافعة"];
const rules = ["محتوى أصلي وواضح", "وعود واقعية بلا تضليل", "أمثلة قابلة للتطبيق", "احترام اللغة والجمهور", "جودة صوت وصورة مقبولة"];

export default function InstructorsPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
            <GraduationCap className="h-4 w-4" /> للمدربين
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">هل لديك معرفة تريد بيعها؟</h1>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            منصتي ستدعم المدربين، المعلمين، الخبراء، وصناع المحتوى الذين يريدون نشر دورات وموارد ومسارات للجمهور المغربي والعربي.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-black text-white">أرسل طلب الانضمام</Link>
            <Link href="mailto:contact@minassati.ma" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-black text-slate-800">contact@minassati.ma</Link>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-navy-glow">
          <h2 className="text-2xl font-black">ما الذي يمكن بيعه؟</h2>
          <div className="mt-5 space-y-3">
            {points.map((point) => <p key={point} className="flex gap-3 text-sm font-bold leading-7 text-slate-200"><CheckCircle2 className="mt-1 h-4 w-4 text-teal-300" />{point}</p>)}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">من يمكنه التدريس؟</h2>
          <p className="mt-3 leading-8 text-slate-600">مدربون، موظفون ذوو خبرة، مستقلون، أساتذة، أئمة أو مختصون في العلوم الإسلامية، وصناع محتوى لديهم معرفة قابلة للتطبيق.</p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">قواعد الجودة</h2>
          <ul className="mt-3 space-y-2 text-sm font-bold leading-7 text-slate-700">
            {rules.map((rule) => <li key={rule}>• {rule}</li>)}
          </ul>
        </section>
      </div>
    </section>
  );
}
