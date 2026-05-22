import type { Metadata } from "next";
import Link from "next/link";
import { Layers, MapPin, Sparkles, TrendingUp } from "lucide-react";
import { learningPaths } from "@/data/learning-paths";

export const metadata: Metadata = {
  title: "المسارات التعليمية - منصتي",
  description: "مسارات منظمة لتعلم التسويق، الذكاء الاصطناعي، العمل الحر، التجارة الإلكترونية، اللغات، والقرآن — خطوة بخطوة.",
  alternates: { canonical: "/paths" },
};

export default function PathsPage() {
  const featured = learningPaths.filter((p) => p.featured);
  const rest = learningPaths.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="section-navy relative">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative py-16 sm:py-24">
          <p className="eyebrow-pill">
            <Sparkles className="h-4 w-4 text-amber-300" /> مسارات واضحة بدل التشتت
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            اختر مساراً واتبع خطواته بالترتيب
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">
            كل مسار يجمع دورات وموارد وخطوات عملية — من الصفر إلى نتيجة قابلة للتطبيق.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm font-bold text-slate-400">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{learningPaths.length} مسارات</span>
            <span>·</span>
            <span>{learningPaths.reduce((acc, p) => acc + p.steps.length, 0)} مرحلة إجمالية</span>
          </div>
        </div>
      </section>

      {/* Featured paths */}
      {featured.length > 0 && (
        <section className="section-soft">
          <div className="page-shell py-16">
            <p className="eyebrow-pill-light">مسارات مميزة</p>
            <h2 className="mt-4 text-2xl font-black text-slate-950">ابدأ من هنا</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {featured.map((path) => (
                <Link key={path.slug} href={`/paths/${path.slug}`} className="card-premium group p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50">
                      <Layers className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex gap-2">
                      <span className="badge-soon">{path.steps.length} مراحل</span>
                      <span className="badge-new">مميز</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-black text-slate-950 transition-colors group-hover:text-blue-700">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{path.outcome}</p>

                  {/* Mini step timeline */}
                  <div className="mt-5 flex items-center gap-1.5 overflow-hidden">
                    {path.steps.slice(0, 4).map((step, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-center text-xs font-black leading-6 text-blue-700">
                          {i + 1}
                        </div>
                        {i < Math.min(path.steps.length - 1, 3) && (
                          <div className="h-px w-5 bg-slate-200" />
                        )}
                      </div>
                    ))}
                    {path.steps.length > 4 && (
                      <span className="text-xs font-bold text-slate-400">+{path.steps.length - 4}</span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                      <TrendingUp className="h-3.5 w-3.5" /> {path.duration}
                    </span>
                    <span className="text-sm font-black text-blue-600 transition group-hover:underline">ابدأ المسار ←</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All paths */}
      {rest.length > 0 && (
        <section className="section-light">
          <div className="page-shell py-16">
            <h2 className="mb-8 text-2xl font-black text-slate-950">كل المسارات</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((path) => (
                <Link key={path.slug} href={`/paths/${path.slug}`} className="card-premium group p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100">
                      <Layers className="h-5 w-5 text-slate-600" />
                    </div>
                    <span className="badge-soon">{path.steps.length} مراحل</span>
                  </div>
                  <h3 className="mt-4 text-lg font-black text-slate-950 transition-colors group-hover:text-blue-700">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500 line-clamp-2">{path.outcome}</p>
                  <div className="mt-4 flex items-center gap-1.5 overflow-hidden">
                    {path.steps.slice(0, 4).map((step, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-slate-100 text-center text-xs font-black leading-5 text-slate-600">
                          {i + 1}
                        </div>
                        {i < Math.min(path.steps.length - 1, 3) && (
                          <div className="h-px w-4 bg-slate-200" />
                        )}
                      </div>
                    ))}
                    {path.steps.length > 4 && (
                      <span className="text-xs font-bold text-slate-400">+{path.steps.length - 4}</span>
                    )}
                  </div>
                  <div className="mt-3 text-xs font-bold text-slate-400">{path.duration}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
