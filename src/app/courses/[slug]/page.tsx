import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, GraduationCap, Star, Users } from "lucide-react";
import { AdSlot } from "@/components/minassati/AdSlot";
import { CourseCard } from "@/components/minassati/CourseExplorer";
import { courses, getCourse, getRelatedCourses, priceLabel } from "@/data/courses";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const course = getCourse(params.slug);
  if (!course) return {};
  return {
    title: `${course.title} - دورة في منصتي`,
    description: course.description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: { title: course.title, description: course.description, type: "website" },
  };
}

export default function CoursePage({ params }: Props) {
  const course = getCourse(params.slug);
  if (!course) notFound();
  const related = getRelatedCourses(course);
  const cta = course.priceType === "free" ? "ابدأ مجانًا" : course.status === "comingSoon" ? "أعلمني عند الإطلاق" : "اشترك عند التوفر";
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: { "@type": "Organization", name: site.name, sameAs: site.url },
    inLanguage: course.language,
    url: absoluteUrl(`/courses/${course.slug}`),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: site.url },
      { "@type": "ListItem", position: 2, name: "الدورات", item: absoluteUrl("/courses") },
      { "@type": "ListItem", position: 3, name: course.title, item: absoluteUrl(`/courses/${course.slug}`) },
    ],
  };

  return (
    <article className="page-shell py-12 sm:py-16">
      <Script id={`course-jsonld-${course.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <Script id={`course-breadcrumb-${course.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="mb-6 text-sm font-bold text-slate-500">
        <Link href="/">الرئيسية</Link> / <Link href="/courses">الدورات</Link> / <span className="text-slate-800">{course.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <section className="rounded-2xl bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-teal-200">{course.category}</span>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{course.title}</h1>
            <p className="mt-4 text-xl leading-9 text-slate-300">{course.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-300">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2"><GraduationCap className="h-4 w-4" />{course.level}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2"><Clock className="h-4 w-4" />{course.duration}</span>
              <span className="rounded-full bg-white/10 px-4 py-2">{course.lessonsCount} درس</span>
              {course.rating ? <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2"><Star className="h-4 w-4 text-amber-300" />{course.rating}</span> : null}
              {course.studentsCount ? <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2"><Users className="h-4 w-4" />{course.studentsCount}</span> : null}
            </div>
          </section>

          <AdSlot className="mt-8" />

          <section className="mt-8 rounded-2xl bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl font-black text-slate-950">ماذا ستتعلم؟</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {course.outcomes.map((item) => (
                <p key={item} className="flex items-start gap-3 rounded-xl bg-emerald-50 p-4 text-sm font-bold leading-7 text-slate-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" /> {item}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-2xl bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl font-black text-slate-950">المحتوى</h2>
            <div className="mt-5 space-y-4">
              {course.curriculum.map((module, index) => (
                <div key={module.title} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-black text-slate-950">{index + 1}. {module.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm font-semibold leading-7 text-slate-600">
                    {module.lessons.map((lesson) => <li key={lesson}>• {lesson}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-black text-slate-500">الحالة</p>
            <p className="mt-2 text-3xl font-black text-slate-950">{priceLabel(course)}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{course.status === "comingSoon" ? "هذه الدورة ضمن خطة الإطلاق. لا يوجد دفع حالياً." : "الدفع الكامل والاشتراكات قيد التحضير."}</p>
            <Link href={course.status === "comingSoon" ? "/contact" : "/pricing"} className="mt-5 inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">{cta}</Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="font-black text-slate-950">المدرب</h2>
            <p className="mt-2 text-lg font-black text-blue-700">{course.instructor}</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">محتوى عملي موجه للسوق المغربي والجمهور العربي.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="font-black text-slate-950">المتطلبات</h2>
            <ul className="mt-3 space-y-2 text-sm font-semibold leading-7 text-slate-600">
              {course.requirements.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="font-black text-slate-950">مناسب لـ</h2>
            <ul className="mt-3 space-y-2 text-sm font-semibold leading-7 text-slate-600">
              {course.targetAudience.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-black text-slate-950">دورات مرتبطة</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {related.map((item) => <CourseCard key={item.slug} course={item} compact />)}
          </div>
        </section>
      )}
    </article>
  );
}
