import type { Metadata } from "next";
import { CategoryCard, LessonCard } from "@/components/minassati/Cards";
import { Section } from "@/components/minassati/Section";
import { categories } from "@/data/categories";
import { lessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "التعلم",
  description: "مسارات تعليمية للأطفال في العقيدة والفقه والسيرة والأخلاق والحديث والأذكار.",
  alternates: { canonical: "/learn" },
};

export default function LearnPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-white bg-white/80 p-8 shadow-xl shadow-blue-100/60 sm:p-12">
          <p className="text-sm font-extrabold text-blue-600">مركز التعلم</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">مسارات مبسطة لتعلّم أساسيات الإسلام</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
            اختر موضوعًا مناسبًا للطفل، ثم ابدأ بدروس قصيرة قابلة للتوسع والإضافة لاحقًا داخل نفس بنية المحتوى.
          </p>
        </div>
      </section>

      <Section title="التصنيفات التعليمية">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Section>

      <Section className="bg-white/70" title="دروس مقترحة">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {lessons.map((lesson) => (
            <LessonCard key={`${lesson.category}-${lesson.slug}`} lesson={lesson} />
          ))}
        </div>
      </Section>
    </>
  );
}
