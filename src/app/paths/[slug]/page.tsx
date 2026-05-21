import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { AdSlot } from "@/components/minassati/AdSlot";
import { CourseCard } from "@/components/minassati/CourseExplorer";
import { getLearningPath, getPathCourses, learningPaths } from "@/data/learning-paths";
import { getResource } from "@/data/resources";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return learningPaths.map((path) => ({ slug: path.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const path = getLearningPath(params.slug);
  if (!path) return {};
  return {
    title: `${path.title} - منصتي`,
    description: path.description,
    alternates: { canonical: `/paths/${path.slug}` },
  };
}

export default function PathPage({ params }: Props) {
  const path = getLearningPath(params.slug);
  if (!path) notFound();
  const relatedCourses = getPathCourses(path);
  const resources = path.resources.map(getResource).filter(Boolean);

  return (
    <article className="page-shell py-12 sm:py-16">
      <nav className="mb-6 text-sm font-bold text-slate-500">
        <Link href="/">الرئيسية</Link> / <Link href="/paths">المسارات</Link> / <span className="text-slate-800">{path.title}</span>
      </nav>
      <section className="rounded-2xl bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-teal-200">{path.category}</span>
        <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{path.title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-300">{path.description}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-300">
          <span className="rounded-full bg-white/10 px-4 py-2">{path.level}</span>
          <span className="rounded-full bg-white/10 px-4 py-2">{path.duration}</span>
          <span className="rounded-full bg-white/10 px-4 py-2">{path.relatedCourses.length} دورات</span>
        </div>
      </section>

      <AdSlot className="mt-8" />

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-black text-slate-950">النتيجة المتوقعة</h2>
        <p className="mt-3 text-lg font-bold leading-9 text-emerald-800">{path.outcome}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-black text-slate-950">خطة المسار</h2>
        <div className="mt-5 space-y-4">
          {path.steps.map((step, index) => (
            <div key={step.title} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:grid-cols-[64px_1fr_auto] sm:items-center">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-lg font-black text-blue-700">{index + 1}</span>
              <div>
                <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
              <span className="text-sm font-black text-slate-500">{step.duration}</span>
            </div>
          ))}
        </div>
      </section>

      {relatedCourses.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-black text-slate-950">الدورات داخل المسار</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.map((course) => course ? <CourseCard key={course.slug} course={course} compact /> : null)}
          </div>
        </section>
      )}

      {resources.length > 0 && (
        <section className="mt-10 rounded-2xl bg-white p-6 shadow-soft sm:p-8">
          <h2 className="text-2xl font-black text-slate-950">موارد مساعدة</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {resources.map((resource) => resource ? (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="rounded-xl border border-slate-200 p-4 text-sm font-bold text-slate-700 hover:border-blue-300">
                <CheckCircle2 className="mb-2 h-4 w-4 text-emerald-600" />
                {resource.title}
              </Link>
            ) : null)}
          </div>
        </section>
      )}
    </article>
  );
}
