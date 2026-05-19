import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookHeart, ScrollText } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { lessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "القصص الإسلامية",
  description: "قصص الأنبياء والصحابة والسيرة في منصتي بأسلوب تربوي مناسب للأطفال.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  const storyLessons = lessons.filter((lesson) => ["seerah", "akhlaq", "adab"].includes(lesson.category)).slice(0, 12);

  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-amber-50 via-white to-blue-50 p-7 shadow-xl shadow-amber-100/50 sm:p-10">
          <p className="text-sm font-black text-amber-600">قصص تربوية</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">قصص تبني الخلق قبل المعلومة</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">نحوّل دروس السيرة والآداب إلى بطاقات قصصية قصيرة تساعد الطفل على رؤية القيمة داخل موقف حي.</p>
        </div>
      </section>
      <Section title="مكتبة القصص">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {storyLessons.map((lesson) => (
            <Link key={`${lesson.category}-${lesson.slug}`} href={`/learn/${lesson.category}/${lesson.slug}`} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-amber-200">
              <BookHeart className="h-7 w-7 text-amber-600" />
              <h2 className="mt-4 text-xl font-black text-slate-950">{lesson.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{lesson.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-amber-700">اقرأ القصة <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>
      <Section className="bg-slate-950 text-white" title="طريقة القراءة العائلية">
        <div className="grid gap-4 md:grid-cols-3">
          {["اقرأوا القصة بصوت هادئ", "اسألوا الطفل عن شعوره", "اختاروا تطبيقاً عملياً واحداً"].map((step, index) => (
            <div key={step} className="rounded-[2rem] border border-white/10 bg-white/8 p-6">
              <ScrollText className="h-6 w-6 text-teal-300" />
              <strong className="mt-4 block text-3xl font-black text-white">{index + 1}</strong>
              <p className="mt-2 font-bold text-slate-300">{step}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
