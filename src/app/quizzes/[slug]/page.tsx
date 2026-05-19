import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Brain } from "lucide-react";
import { QuizPlayer } from "@/components/minassati/QuizPlayer";
import { Section } from "@/components/minassati/Section";
import { getQuiz, quizzes } from "@/data/quizzes";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return quizzes.map((quiz) => ({ slug: quiz.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const quiz = getQuiz(params.slug);
  if (!quiz) return {};
  return {
    title: `${quiz.title} - اختبار إسلامي للأطفال`,
    description: `${quiz.summary} اختبار قصير مناسب لعمر ${quiz.ageRange} مع تغذية راجعة لطيفة للطفل.`,
    alternates: { canonical: `/quizzes/${quiz.slug}` },
  };
}

export default function QuizPage({ params }: Props) {
  const quiz = getQuiz(params.slug);
  if (!quiz) notFound();

  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <p className="inline-flex items-center gap-2 text-sm font-black text-teal-300"><Brain className="h-4 w-4" /> اختبار قصير</p>
          <h1 className="mt-4 text-balance text-4xl font-black sm:text-6xl">{quiz.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">{quiz.summary}</p>
        </div>
      </section>
      <Section title="ابدأ الاختبار" description="يمكن للطفل إعادة المحاولة، والأهم هو قراءة التغذية الراجعة بعد كل إجابة.">
        <QuizPlayer quiz={quiz} />
        <div className="mt-8 text-center">
          <Link href="/quizzes" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5">
            كل الاختبارات <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
