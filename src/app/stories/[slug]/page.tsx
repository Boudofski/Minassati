import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookHeart, MessageCircle, Sparkles } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { getStory, stories } from "@/data/stories";
import { site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const story = getStory(params.slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.summary,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: {
      title: `${story.title} | منصتي`,
      description: story.summary,
      url: `${site.url}/stories/${story.slug}`,
      type: "article",
    },
  };
}

export default function StoryPage({ params }: Props) {
  const story = getStory(params.slug);
  if (!story) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.summary,
    inLanguage: "ar",
    url: `${site.url}/stories/${story.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <p className="inline-flex items-center gap-2 text-sm font-black text-amber-300"><BookHeart className="h-4 w-4" /> قصة إسلامية</p>
          <h1 className="mt-4 text-balance text-4xl font-black sm:text-6xl">{story.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">{story.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white">{story.ageRange}</span>
            <span className="rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-slate-950">{story.moral}</span>
          </div>
        </div>
      </section>
      <Section title="اقرأوا القصة معاً" centered={false}>
        <article className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="space-y-8">
            {story.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="flex items-center gap-2 text-2xl font-black text-slate-950">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  {section.heading}
                </h2>
                <p className="mt-3 text-lg leading-10 text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-blue-50 p-5">
            <p className="inline-flex items-center gap-2 font-black text-blue-950"><MessageCircle className="h-5 w-5" /> سؤال للتأمل</p>
            <p className="mt-3 leading-8 text-blue-900">{story.reflectionQuestion}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/stories" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">
              كل القصص <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link href={`/learn?topic=${story.relatedLesson}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-800">
              درس مرتبط
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}
