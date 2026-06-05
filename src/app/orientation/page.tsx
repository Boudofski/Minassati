import type { Metadata } from "next";
import Link from "next/link";
import { Compass } from "lucide-react";
import { orientationTopics } from "@/data/orientation";

export const metadata: Metadata = {
  title: "التوجيه الدراسي والمهني - منصتي",
  description: "دليل التوجيه الدراسي والمهني للطلبة في المغرب: اختيار التخصص، مقارنة المدارس، فهم الشروط، وبناء مشروع دراسي.",
  alternates: { canonical: "/orientation" },
};

export default function OrientationPage() {
  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-20">
          <p className="eyebrow-pill"><Compass className="h-4 w-4 text-amber-300" /> التوجيه</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">ابدأ من سؤال واضح وخطة قابلة للتطبيق</h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">هذا القسم يجمع مواضيع عملية تساعدك على فهم نفسك، خياراتك، ومصادر المعلومات الموثوقة قبل اتخاذ قرار دراسي أو مهني.</p>
        </div>
      </section>
      <section className="section-soft">
        <div className="page-shell py-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {orientationTopics.map((topic) => (
              <article key={topic.slug} className="card-premium p-6">
                <h2 className="text-xl font-black text-slate-950">{topic.title}</h2>
                <p className="mt-3 text-sm font-bold leading-7 text-slate-600">{topic.description}</p>
                <ul className="mt-4 space-y-2 text-sm font-bold text-slate-700">
                  {topic.steps.map((step) => <li key={step}>• {step}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-blue-50 p-6 text-center">
            <h2 className="text-2xl font-black text-slate-950">هل تحتاج مساعدة في ترتيب أفكارك؟</h2>
            <Link href="/guidance-request" className="mt-5 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white">اطلب توجيهًا</Link>
          </div>
        </div>
      </section>
    </>
  );
}
