import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CourseCard } from "@/components/minassati/CourseExplorer";
import { LeadCapture } from "@/components/minassati/LeadCapture";
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
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm font-bold text-slate-500">
        <Link href="/">الرئيسية</Link> / <Link href="/paths">المسارات</Link> /{" "}
        <span className="text-slate-800">{path.title}</span>
      </nav>

      {/* Hero — dark navy */}
      <section className="rounded-2xl bg-slate-950 p-7 text-white shadow-[var(--shadow-navy)] sm:p-10">
        <span className="eyebrow-pill">{path.category}</span>
        <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{path.title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-300">{path.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="badge-soon">{path.level}</span>
          <span className="badge-free">{path.duration}</span>
          <span className="badge-soon">{path.relatedCourses.length} دورات</span>
        </div>
      </section>

      {/* Outcome */}
      <section className="mt-8 card-premium p-6 sm:p-8">
        <h2 className="text-2xl font-black text-slate-950">النتيجة المتوقعة</h2>
        <p className="mt-3 text-lg font-bold leading-9 text-emerald-800">{path.outcome}</p>
      </section>

      {/* Step timeline */}
      <section className="mt-8">
        <h2 className="text-2xl font-black text-slate-950">خطة المسار</h2>
        <div className="mt-5 flex flex-col gap-0">
          {path.steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">
                  {index + 1}
                </div>
                {index < path.steps.length - 1 && (
                  <div className="my-2 w-px flex-1 bg-slate-200" />
                )}
              </div>
              <div className="pb-8 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-black text-slate-950">{step.title}</h3>
                  <span className="shrink-0 text-xs font-bold text-slate-400">{step.duration}</span>
                </div>
                <p className="mt-1 text-sm leading-7 text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related courses */}
      {relatedCourses.length > 0 && (
        <section className="mt-10">
          <span className="eyebrow-pill-light">الدورات</span>
          <h2 className="mt-3 text-2xl font-black text-slate-950">الدورات داخل المسار</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.map((course) =>
              course ? <CourseCard key={course.slug} course={course} compact /> : null
            )}
          </div>
        </section>
      )}

      {/* Related resources */}
      {resources.length > 0 && (
        <section className="mt-10">
          <span className="eyebrow-pill-light">الموارد</span>
          <h2 className="mt-3 text-2xl font-black text-slate-950">موارد مساعدة</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {resources.map((resource) =>
              resource ? (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="card-premium p-4 flex flex-col gap-2 text-sm font-bold text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  {resource.title}
                </Link>
              ) : null
            )}
          </div>
        </section>
      )}

      {/* Lead capture */}
      <LeadCapture
        id={`path-waitlist-${path.slug}`}
        source={`path:${path.slug}`}
        interestType="course_waitlist"
        entitySlug={path.slug}
        title="هل أنت مهتم بهذا المسار؟"
        description="سنرسل لك تفاصيل الإطلاق والدورات الجديدة ضمن هذا المسار."
        subject={`اهتمام بمسار: ${path.title}`}
        buttonLabel="أبلّغني بالتحديثات"
        className="mt-10"
      />
    </article>
  );
}
