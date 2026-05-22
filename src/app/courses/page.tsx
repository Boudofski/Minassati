import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Sparkles } from "lucide-react";
import { CourseExplorer, CourseCard } from "@/components/minassati/CourseExplorer";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "الدورات - منصتي | Courses",
  description: "دورات عملية للمغاربة في التسويق الرقمي، الذكاء الاصطناعي، العمل الحر، التجارة الإلكترونية، اللغات.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  const featured = courses.filter((c) => c.featured).slice(0, 6);
  const free = courses.filter((c) => c.priceType === "free").slice(0, 3);
  const totalCourses = courses.length;

  return (
    <>
      {/* Hero */}
      <section className="section-navy relative">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <div>
            <p className="eyebrow-pill"><Sparkles className="h-4 w-4 text-amber-300" /> دورات عملية</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
              تعلم مهارات مطلوبة<br />بخطوات واضحة
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">
              {totalCourses}+ دورة في AI، التسويق الرقمي، العمل الحر، التجارة الإلكترونية، التصميم، اللغات، والعلوم الإسلامية.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#all-courses" className="btn-primary bg-white text-slate-950 hover:bg-slate-100">استكشف الدورات</Link>
              <Link href="/pricing" className="btn-ghost-white">خطط الاشتراك</Link>
            </div>
          </div>
          {/* Stats panel */}
          <div className="card-dark rounded-2xl p-6">
            <GraduationCap className="h-10 w-10 text-amber-300" />
            <p className="mt-4 text-5xl font-black">{totalCourses}+</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">دورة عملية — مجانية ومدفوعة قادمة</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-black">
              <div className="rounded-xl bg-white/[0.05] p-3">
                <p className="text-lg">{courses.filter((c) => c.priceType === "free").length}</p>
                <p className="mt-0.5 text-slate-400">مجانية</p>
              </div>
              <div className="rounded-xl bg-white/[0.05] p-3">
                <p className="text-lg">{courses.filter((c) => c.priceType === "comingSoon").length}</p>
                <p className="mt-0.5 text-slate-400">قادمة</p>
              </div>
              <div className="rounded-xl bg-white/[0.05] p-3">
                <p className="text-lg">{courses.filter((c) => c.featured).length}</p>
                <p className="mt-0.5 text-slate-400">مختارة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured courses */}
      {featured.length > 0 && (
        <section className="section-light">
          <div className="page-shell py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow-pill-light">مختارة</p>
                <h2 className="mt-4 text-3xl font-black text-slate-950">دورات مختارة للبدء</h2>
              </div>
              <Link href="#all-courses" className="btn-secondary shrink-0">كل الدورات</Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((course) => <CourseCard key={course.slug} course={course} compact />)}
            </div>
          </div>
        </section>
      )}

      {/* All courses explorer */}
      <section id="all-courses" className="section-soft">
        <div className="page-shell py-16">
          <h2 className="mb-8 text-2xl font-black text-slate-950">كل الدورات</h2>
          <CourseExplorer />
        </div>
      </section>

      {/* Free courses */}
      {free.length > 0 && (
        <section className="section-light">
          <div className="page-shell py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow-pill-light">مجانية</p>
                <h2 className="mt-4 text-2xl font-black text-slate-950">ابدأ بدون دفع</h2>
              </div>
              <Link href="/pricing" className="btn-secondary shrink-0">خطط الاشتراك</Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {free.map((course) => <CourseCard key={course.slug} course={course} compact />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
