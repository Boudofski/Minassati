import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, GraduationCap, Layers, Lock, Mail, ShieldCheck, Unlock } from "lucide-react";
import { AdSlot } from "@/components/minassati/AdSlot";
import { CourseCard } from "@/components/minassati/CourseExplorer";
import { LeadCapture } from "@/components/minassati/LeadCapture";
import { courses, getCourse, getRelatedCourses, priceLabel } from "@/data/courses";
import { learningPaths } from "@/data/learning-paths";
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
  const relatedPaths = learningPaths.filter((p) => p.relatedCourses.includes(course.slug));
  const cta = course.priceType === "free" ? "ابدأ مجانًا" : course.status === "comingSoon" ? "أعلمني عند الإطلاق" : "انضم لقائمة الاهتمام";
  const waitlistId = `course-waitlist-${course.slug}`;
  const waitlistSubject = `اهتمام بدورة: ${course.title}`;
  const waitlistBody = `السلام عليكم،\n\nأريد الانضمام لقائمة الاهتمام بدورة: ${course.title}\n\nالمدينة:\nالمستوى الحالي:\n`;
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

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <section className="rounded-2xl bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-teal-200">{course.category}</span>
              {course.priceType === "free" && (
                <span className="badge-free">متاح مجاناً</span>
              )}
              {course.priceType === "comingSoon" && (
                <span className="badge-soon">قيد التحضير</span>
              )}
              {course.priceType === "paid" && (
                <span className="badge-pro">{priceLabel(course)} — قيد التحضير</span>
              )}
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{course.title}</h1>
            <p className="mt-4 text-xl leading-9 text-slate-300">{course.subtitle}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">{course.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-300">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2"><GraduationCap className="h-4 w-4" />{course.level}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2"><Clock className="h-4 w-4" />{course.duration}</span>
              <span className="rounded-full bg-white/10 px-4 py-2">{course.lessonsCount} درس</span>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={course.priceType === "free" ? "#curriculum" : `#${waitlistId}`} className="cta-course-hero inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950" data-cta-id={`course-hero-${course.slug}`} data-course-slug={course.slug}>
                {cta}
              </Link>
              <Link href="/pricing" className="cta-course-pricing inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white hover:bg-white/10" data-cta-id={`course-pricing-${course.slug}`} data-course-slug={course.slug}>
                خطط الاشتراك
              </Link>
            </div>
          </section>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["محتوى عملي", "دروس قصيرة قابلة للتطبيق وليس وعوداً عامة."],
              ["إطلاق تدريجي", "الدفع والشهادات قيد التحضير بوضوح."],
              ["مناسب للمغرب", "أمثلة وسياق موجه للمتعلمين والمشاريع المغربية."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <h2 className="mt-3 font-black text-slate-950">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <AdSlot className="mt-8" label="مساحة إعلانية مناسبة بين مقدمة الدورة والمحتوى" />

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

          <section id="curriculum" className="mt-8 rounded-2xl bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-black text-slate-950">المنهج الدراسي</h2>
              <span className="text-sm font-bold text-slate-400">{course.curriculum.reduce((sum, m) => sum + m.lessons.length, 0)} درس</span>
            </div>
            {course.priceType !== "free" && (
              <p className="mt-2 text-xs font-bold text-slate-400">
                الدرس الأول في كل وحدة معاينة مجانية — باقي الدروس تتطلب الاشتراك عند الإطلاق.
              </p>
            )}
            <div className="mt-5 space-y-4">
              {course.curriculum.map((module, moduleIdx) => (
                <div key={module.title} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-black text-slate-950">{moduleIdx + 1}. {module.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {module.lessons.map((lesson, lessonIdx) => {
                      const isFree = course.priceType === "free";
                      const isPreview = !isFree && lessonIdx === 0;
                      const isLocked = !isFree && lessonIdx > 0;
                      return (
                        <li
                          key={lesson}
                          className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-semibold leading-7 ${
                            isLocked ? "text-slate-400" : "text-slate-700"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {isFree
                              ? <Unlock className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                              : isPreview
                                ? <Unlock className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                                : <Lock className="h-3.5 w-3.5 shrink-0 text-slate-300" />
                            }
                            {lesson}
                          </span>
                          {isPreview && (
                            <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-700">معاينة</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-slate-950">ملاحظة مهمة قبل التسجيل</h2>
            <p className="mt-3 text-sm font-bold leading-8 text-slate-700">
              منصتي في مرحلة تجهيز السوق التعليمي. لا يوجد دفع مباشر أو شهادة مدفوعة مفعلة حالياً. إذا كانت الدورة مدفوعة أو قادمة، فزر الاهتمام يفتح رسالة بريد حتى نجمع الطلب الحقيقي قبل الإطلاق.
            </p>
          </section>

          {course.priceType !== "free" || course.status === "comingSoon" ? (
            <LeadCapture
              id={waitlistId}
              source={`course:${course.slug}`}
              interestType="course_waitlist"
              entitySlug={course.slug}
              title="انضم لقائمة الاهتمام بهذه الدورة"
              description="سنستخدم عدد المهتمين لتحديد أولوية الإنتاج والإطلاق. لا يوجد دفع حالياً، وستصلك التفاصيل عندما تصبح النسخة التجريبية أو الاشتراك جاهزاً."
              subject={waitlistSubject}
              body={waitlistBody}
              buttonLabel="أعلمني عند الإطلاق"
              className="mt-8"
            />
          ) : null}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-black text-slate-500">الحالة</p>
            <p className="mt-2 text-3xl font-black text-slate-950">{priceLabel(course)}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{course.status === "comingSoon" ? "هذه الدورة ضمن خطة الإطلاق. لا يوجد دفع حالياً." : course.priceType === "free" ? "يمكن البدء بالمحتوى المجاني الآن. الميزات المدفوعة قيد التحضير." : "الدفع الكامل والاشتراكات قيد التحضير."}</p>
            <Link href={course.priceType === "free" ? "#curriculum" : `#${waitlistId}`} className="cta-course-sidebar mt-5 inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white" data-cta-id={`course-sidebar-${course.slug}`} data-course-slug={course.slug}>{cta}</Link>
            <Link href="/contact" className="cta-course-question mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-800" data-cta-id={`course-question-${course.slug}`} data-course-slug={course.slug}>
              <Mail className="h-4 w-4" /> اسأل عن الدورة
            </Link>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-soft">
            <h2 className="font-black text-slate-950">ماذا يحدث بعد الاهتمام؟</h2>
            <ol className="mt-3 space-y-2 text-sm font-semibold leading-7 text-slate-700">
              <li>1. نراجع الطلب وعدد المهتمين.</li>
              <li>2. نرسل تفاصيل الإطلاق أو النسخة التجريبية.</li>
              <li>3. لا يتم طلب أي دفع قبل تفعيل نظام واضح.</li>
            </ol>
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

      {relatedPaths.length > 0 && (
        <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-xl font-black text-slate-950">
            <Layers className="h-5 w-5 text-blue-600" />
            هذه الدورة ضمن مسار تعليمي
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedPaths.map((path) => (
              <Link
                key={path.slug}
                href={`/paths/${path.slug}`}
                className="card-premium flex items-center justify-between gap-3 p-4 font-bold text-slate-700 transition hover:text-blue-700"
              >
                <div>
                  <p className="font-black text-slate-950">{path.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{path.duration} · {path.steps.length} مراحل</p>
                </div>
                <span className="shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">عرض المسار</span>
              </Link>
            ))}
          </div>
        </section>
      )}

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
