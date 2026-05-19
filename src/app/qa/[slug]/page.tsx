import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { HeartHandshake } from "lucide-react";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { getQuestion, getRelatedQuestions, questions } from "@/data/questions";
import { absoluteUrl } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return questions.map((question) => ({ slug: question.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const question = getQuestion(params.slug);
  if (!question) return {};
  return {
    title: question.question,
    description: question.seoDescription,
    alternates: { canonical: `/qa/${question.slug}` },
  };
}

export default function QuestionPage({ params }: Props) {
  const question = getQuestion(params.slug);
  if (!question) notFound();
  const related = getRelatedQuestions(question.related);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: question.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: question.detailedAnswer.join(" "),
        },
      },
    ],
    url: absoluteUrl(`/qa/${question.slug}`),
    inLanguage: "ar",
  };

  return (
    <article className="page-shell py-12 sm:py-16">
      <Script id={`faq-jsonld-${question.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-teal-100/60 sm:p-10">
        <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-extrabold text-teal-600">{question.category}</span>
        <h1 className="mt-5 text-balance text-4xl font-black leading-tight text-slate-950 sm:text-6xl">{question.question}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-600">{question.shortAnswer}</p>
      </div>

      <div className="mt-10 rounded-[2rem] bg-white p-6 leading-9 text-slate-700 shadow-soft sm:p-8">
        {question.detailedAnswer.map((paragraph) => (
          <p key={paragraph} className="mb-5 last:mb-0">{paragraph}</p>
        ))}
      </div>

      <section className="mt-8 rounded-[2rem] bg-amber-50 p-6 shadow-soft">
        <h2 className="flex items-center gap-2 text-2xl font-black text-slate-950"><HeartHandshake className="h-6 w-6 text-amber-600" /> ملاحظة للأهل</h2>
        <p className="mt-3 leading-8 text-slate-700">{question.parentNote}</p>
      </section>

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
