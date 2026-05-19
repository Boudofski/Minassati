import type { Metadata } from "next";
import { CategoryCard, PathCard } from "@/components/minassati/Cards";
import { LearningBrowser } from "@/components/minassati/LearningBrowser";
import { Section } from "@/components/minassati/Section";
import { categories } from "@/data/categories";
import { lessons } from "@/data/lessons";
import { paths } from "@/data/paths";

export const metadata: Metadata = {
  title: "مركز التعلم الإسلامي للأطفال",
  description: "مسارات ودروس إسلامية قصيرة للأطفال في العقيدة والفقه والسيرة والأخلاق والقرآن والأذكار، مع توجيه عملي للأهل.",
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "مركز التعلم الإسلامي للأطفال | منصتي",
    description: "دروس قصيرة ومسارات مترابطة تساعد الأسرة على تعليم الإسلام بهدوء ووضوح.",
  },
};

export default function LearnPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-xl shadow-blue-100/60 sm:rounded-[2.5rem] sm:p-12">
          <p className="text-sm font-extrabold text-blue-600">مركز التعلم</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">مسارات قصيرة تجعل التعلم قابلاً للاستمرار</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
            اختروا تصنيفاً أو مساراً، ثم ابدأوا بدرس واحد فقط. كل درس يرتبط بسؤال ونشاط وملاحظة للأهل حتى يتحول العلم إلى حوار يومي.
          </p>
        </div>
      </section>

      <Section title="التصنيفات التعليمية">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Section>

      <Section className="bg-white/70" title="مسارات التعلم">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <PathCard key={path.slug} path={path} />
          ))}
        </div>
      </Section>

      <Section title="اكتشف الدروس" description="ابحث وصفّ حسب التصنيف والعمر والمستوى. إذا لم تجد نتيجة، جرّب كلمة أبسط مثل الصلاة أو الصدق أو القرآن.">
        <LearningBrowser lessons={lessons} categories={categories.map((category) => ({ slug: category.slug, title: category.title }))} />
      </Section>
    </>
  );
}
