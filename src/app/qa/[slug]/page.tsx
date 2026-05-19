import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { getQuestion, getRelatedQuestions, questions } from "@/data/questions";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return questions.map((question) => ({ slug: question.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const question = getQuestion(params.slug);
  if (!question) return {};
  return {
    title: question.question,
    description: question.shortAnswer,
    alternates: { canonical: `/qa/${question.slug}` },
  };
}

export default function QuestionPage({ params }: Props) {
  const question = getQuestion(params.slug);
  if (!question) notFound();
  const related = getRelatedQuestions(question.related);

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-extrabold text-teal-600">{question.category}</span>
      <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">{question.question}</h1>
      <p className="mt-5 text-xl leading-9 text-slate-600">{question.shortAnswer}</p>

      <div className="mt-10 rounded-[2rem] bg-white p-6 leading-9 text-slate-700 shadow-sm sm:p-8">
        {question.answer.map((paragraph) => (
          <p key={paragraph} className="mb-5 last:mb-0">{paragraph}</p>
        ))}
      </div>

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-2xl font-black text-slate-950">أسئلة مرتبطة</h2>
          <div className="mt-5 grid gap-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/qa/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600">
                {item.question}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-10">
        <ButtonLink href="/qa">العودة إلى كل الأسئلة</ButtonLink>
      </div>
    </article>
  );
}
