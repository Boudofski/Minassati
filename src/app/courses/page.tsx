import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Sparkles } from "lucide-react";
import { CourseExplorer, CourseCard } from "@/components/minassati/CourseExplorer";
import { Section } from "@/components/minassati/Section";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "الدورات - منصتي",
  description: "دورات عملية للمغاربة في التسويق الرقمي، الذكاء الاصطناعي، العمل الحر، التجارة الإلكترونية، اللغات، والقرآن.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  const featured = courses.filter((course) => course.featured).slice(0, 6);
  const free = courses.filter((course) => course.priceType === "free").slice(0, 3);

  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="page-shell grid gap-8 py-14 sm:py-20 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-teal-200">
              <Sparkles className="h-4 w-4" /> دورات عملية
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">تعلم مهارات مطلوبة بخطوات واضحة</h1>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
              اختر من دورات مجانية ومدفوعة وقادمة في AI، التسويق، العمل الحر، التجارة الإلكترونية، التصميم، اللغات، والعلوم الإسلامية.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/6 p-6">
            <BookOpen className="h-8 w-8 text-amber-300" />
            <p className="mt-4 text-3xl font-black">{courses.length}+</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">دورة ثابتة كبداية لمنصة أكبر، مع قابلية إضافة الدفع والمدربين لاحقاً.</p>
          </div>
        </div>
      </section>

      <Section eyebrow="مختارة" title="دورات مختارة للبدء" centered={false}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((course) => <CourseCard key={course.slug} course={course} compact />)}
        </div>
      </Section>

      <Section className="bg-slate-50" eyebrow="استكشف" title="كل الدورات" centered={false}>
        <CourseExplorer />
      </Section>

      <Section eyebrow="مجاني" title="ابدأ بدون دفع" centered={false}>
        <div className="grid gap-5 md:grid-cols-3">
          {free.map((course) => <CourseCard key={course.slug} course={course} compact />)}
        </div>
        <div className="mt-8">
          <Link href="/pricing" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white">خطط الاشتراك</Link>
        </div>
      </Section>
    </>
  );
}
