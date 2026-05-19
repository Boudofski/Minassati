import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonCard } from "@/components/minassati/Cards";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { getCategory } from "@/data/categories";
import { getLessonsByCategory } from "@/data/lessons";

type Props = { params: { category: string } };

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/learn/${category.slug}` },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategory(params.category);
  if (!category) notFound();
  const categoryLessons = getLessonsByCategory(category.slug);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-50 via-white to-teal-50 p-8 sm:p-12">
          <p className="text-sm font-extrabold text-blue-600">مسار تعليمي</p>
          <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">{category.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-600">{category.description}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {categoryLessons.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categoryLessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center">
            <h2 className="text-2xl font-black text-slate-950">الدروس التفصيلية قادمة قريبًا</h2>
            <p className="mx-auto mt-3 max-w-xl leading-8 text-slate-600">تم تجهيز بنية هذا المسار حتى تتمكن من إضافة الدروس بسهولة من ملفات البيانات.</p>
            <div className="mt-6">
              <ButtonLink href="/qa">تصفح الأسئلة المرتبطة</ButtonLink>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
