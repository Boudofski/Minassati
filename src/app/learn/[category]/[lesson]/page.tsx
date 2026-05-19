import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { getCategory } from "@/data/categories";
import { getLesson, lessons } from "@/data/lessons";

type Props = { params: { category: string; lesson: string } };

export function generateStaticParams() {
  return lessons.map((lesson) => ({ category: lesson.category, lesson: lesson.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const lesson = getLesson(params.category, params.lesson);
  if (!lesson) return {};
  return {
    title: lesson.title,
    description: lesson.summary,
    alternates: { canonical: `/learn/${lesson.category}/${lesson.slug}` },
  };
}

export default function LessonPage({ params }: Props) {
  const lesson = getLesson(params.category, params.lesson);
  const category = getCategory(params.category);
  if (!lesson || !category) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-extrabold text-blue-600">{category.title}</p>
      <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">{lesson.title}</h1>
      <p className="mt-5 text-lg leading-9 text-slate-600">{lesson.summary}</p>

      <div className="mt-8 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 sm:grid-cols-2">
        <div><strong className="text-slate-950">المدة:</strong> <span className="text-slate-600">{lesson.duration}</span></div>
        <div><strong className="text-slate-950">العمر المناسب:</strong> <span className="text-slate-600">{lesson.age}</span></div>
      </div>

      <section className="mt-10 rounded-[2rem] bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-slate-950">أهداف الدرس</h2>
        <div className="mt-5 space-y-3">
          {lesson.objectives.map((objective) => (
            <p key={objective} className="flex gap-3 rounded-2xl bg-blue-50 p-4 font-bold text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              {objective}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] bg-white p-6 leading-9 text-slate-700 shadow-sm">
        {lesson.body.map((paragraph) => (
          <p key={paragraph} className="mb-5 last:mb-0">{paragraph}</p>
        ))}
      </section>

      <section className="mt-8 rounded-[2rem] bg-amber-50 p-6">
        <h2 className="text-2xl font-black text-slate-950">نشاط بسيط</h2>
        <p className="mt-3 leading-8 text-slate-700">{lesson.activity}</p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href={`/learn/${category.slug}`}>العودة إلى المسار</ButtonLink>
        <ButtonLink href="/qa" variant="secondary">أسئلة مرتبطة</ButtonLink>
      </div>
    </article>
  );
}
