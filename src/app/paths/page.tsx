import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Route } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { learningPaths } from "@/data/learning-paths";

export const metadata: Metadata = {
  title: "المسارات التعليمية - منصتي",
  description: "مسارات منظمة لتعلم التسويق، الذكاء الاصطناعي، العمل الحر، التجارة الإلكترونية، اللغات، القرآن، والإنتاجية.",
  alternates: { canonical: "/paths" },
};

export default function PathsPage() {
  return (
    <>
      <section className="page-shell py-14 sm:py-20">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
            <Route className="h-4 w-4" /> مسارات واضحة بدل التشتت
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">اختر مساراً واتبع خطواته بالترتيب</h1>
          <p className="mt-5 text-lg leading-9 text-slate-600">كل مسار يجمع دورات وموارد وخطوات عملية للوصول إلى نتيجة واضحة.</p>
        </div>
      </section>

      <Section className="bg-slate-50" centered={false}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <Link key={path.slug} href={`/paths/${path.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{path.category}</span>
                <span className="text-xs font-black text-blue-700">{path.duration}</span>
              </div>
              <h2 className="mt-4 text-2xl font-black leading-snug text-slate-950 group-hover:text-blue-700">{path.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{path.description}</p>
              <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-bold leading-7 text-emerald-900">{path.outcome}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700">عرض المسار <ArrowLeft className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
