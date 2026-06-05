import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careers, getCareer } from "@/data/careers";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return careers.map((career) => ({ slug: career.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const career = getCareer(params.slug);
  if (!career) return {};
  return {
    title: `${career.title} - المسارات المهنية - منصتي`,
    description: `${career.description} تعرف على المهارات، الدراسة الممكنة، وخطوات البداية في المغرب.`,
    alternates: { canonical: `/careers/${career.slug}` },
  };
}

export default function CareerPage({ params }: Props) {
  const career = getCareer(params.slug);
  if (!career) notFound();
  return (
    <article>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-20">
          <p className="eyebrow-pill">{career.category}</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">{career.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">{career.description}</p>
        </div>
      </section>
      <section className="section-light">
        <div className="page-shell grid gap-6 py-16 lg:grid-cols-[1fr_1fr]">
          <Info title="ما هي هذه المهنة؟" items={[career.description]} />
          <Info title="المهارات المطلوبة" items={career.skills} />
          <Info title="مسارات دراسية ممكنة" items={career.studyPaths} />
          <Info title="خطوات البداية" items={career.firstSteps} />
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 lg:col-span-2">
            <h2 className="text-xl font-black text-slate-950">السياق المغربي</h2>
            <p className="mt-3 text-sm font-bold leading-8 text-amber-950">{career.moroccanContext}</p>
          </div>
          <div className="card-premium p-6 lg:col-span-2">
            <h2 className="text-xl font-black text-slate-950">موارد ومقالات مرتبطة</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {career.related.articles.map((slug) => <Link key={slug} href={`/articles/${slug}`} className="badge-soon">مقال مرتبط</Link>)}
              {career.related.resources.map((slug) => <Link key={slug} href={`/resources/${slug}`} className="badge-free">مورد عملي</Link>)}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="card-premium p-6">
      <h2 className="text-xl font-black text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm font-bold leading-7 text-slate-700">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </section>
  );
}
