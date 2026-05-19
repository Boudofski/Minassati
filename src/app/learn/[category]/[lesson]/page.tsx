import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { CheckCircle2, HeartHandshake, Lightbulb, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { ShareCard } from "@/components/minassati/ShareCard";
import { getCategory } from "@/data/categories";
import { getLesson, getRelatedLessons, lessons } from "@/data/lessons";
import { getRelatedQuestions } from "@/data/questions";
import { absoluteUrl } from "@/lib/site";

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
  const relatedLessons = getRelatedLessons(lesson.relatedLessons, lesson.category).filter((item) => item.slug !== lesson.slug).slice(0, 3);
  const relatedQuestions = getRelatedQuestions(lesson.relatedQuestions).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title,
    description: lesson.summary,
    educationalLevel: lesson.ageRange,
    learningResourceType: "Lesson",
    inLanguage: "ar",
    url: absoluteUrl(`/learn/${lesson.category}/${lesson.slug}`),
  };

  return (
    <article className="page-shell py-12 sm:py-16">
      <Script id={`lesson-jsonld-${lesson.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-blue-100/60 sm:p-10">
        <p className="text-sm font-extrabold text-blue-600">{category.title}</p>
        <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-slate-950 sm:text-6xl">{lesson.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">{lesson.summary}</p>
      </div>

      <div className="mt-8 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:grid-cols-3">
        <div><strong className="text-slate-950">المدة:</strong> <span className="text-slate-600">{lesson.readingTime}</span></div>
        <div><strong className="text-slate-950">العمر:</strong> <span className="text-slate-600">{lesson.ageRange}</span></div>
        <div><strong className="text-slate-950">المستوى:</strong> <span className="text-slate-600">{lesson.difficulty}</span></div>
      </div>

      <section className="mt-8 rounded-[2rem] bg-white p-6 shadow-soft">
        <h2 className="flex items-center gap-2 text-2xl font-black text-slate-950"><Sparkles className="h-6 w-6 text-blue-600" /> ماذا تعلم الطفل؟</h2>
        <div className="mt-5 space-y-3">
          {lesson.whatChildLearns.map((objective) => (
            <p key={objective} className="flex gap-3 rounded-2xl bg-blue-50 p-4 font-bold text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              {objective}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] bg-white p-6 leading-9 text-slate-700 shadow-soft sm:p-8">
        {lesson.bodySections.map((section) => (
          <section key={section.heading} className="mb-7 last:mb-0">
            <h2 className="text-2xl font-black text-slate-950">{section.heading}</h2>
            <p className="mt-3 text-lg leading-9 text-slate-700">{section.content}</p>
          </section>
        ))}
      </section>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
      <section className="rounded-[2rem] bg-amber-50 p-6 shadow-soft">
        <h2 className="flex items-center gap-2 text-2xl font-black text-slate-950"><Lightbulb className="h-6 w-6 text-amber-600" /> نشاط بسيط للطفل</h2>
        <p className="mt-3 leading-8 text-slate-700">{lesson.activity}</p>
      </section>
      <section className="rounded-[2rem] bg-teal-50 p-6 shadow-soft">
        <h2 className="flex items-center gap-2 text-2xl font-black text-slate-950"><HeartHandshake className="h-6 w-6 text-teal-600" /> ملاحظة للأهل</h2>
        <p className="mt-3 leading-8 text-slate-700">{lesson.parentNote}</p>
      </section>
      </div>

      {(relatedLessons.length > 0 || relatedQuestions.length > 0) ? (
        <section className="mt-10">
          <h2 className="text-2xl font-black text-slate-950">محتوى مرتبط</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {relatedLessons.map((item) => (
              <Link key={item.slug} href={`/learn/${item.category}/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                {item.title}
              </Link>
            ))}
            {relatedQuestions.map((item) => (
              <Link key={item.slug} href={`/qa/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-700 transition hover:border-teal-200 hover:text-teal-700">
                {item.question}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-8">
        <ShareCard
          title={lesson.title}
          excerpt={lesson.summary}
          url={absoluteUrl(`/learn/${lesson.category}/${lesson.slug}`)}
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={`/learn/${category.slug}`}>العودة إلى المسار</ButtonLink>
        <ButtonLink href="/qa" variant="secondary">أسئلة مرتبطة</ButtonLink>
      </div>
    </article>
  );
}
