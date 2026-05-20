import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookHeart, MessageCircle } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "القصص الإسلامية",
  description: "قصص إسلامية للأطفال من الأنبياء والسيرة والصحابة والأخلاق مع سؤال تأمل وروابط تعليمية.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-amber-50 via-white to-blue-50 p-7 shadow-xl shadow-amber-100/50 sm:p-10">
          <p className="text-sm font-black text-amber-600">قصص تربوية</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">قصص تبني الخلق قبل المعلومة</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">كل قصة قصيرة ومنظمة بسؤال تأمل وقيمة عملية، لتصبح القراءة حواراً عائلياً لا مجرد سرد.</p>
        </div>
      </section>
      <Section title="مكتبة القصص" description={`${stories.length} قصة مختارة للأطفال من 6 إلى 12 سنة.`}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Link key={story.slug} href={`/stories/${story.slug}`} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-amber-200">
              <BookHeart className="h-7 w-7 text-amber-600" />
              <p className="mt-4 text-sm font-black text-blue-700">{story.ageRange} · {story.moral}</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">{story.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{story.summary}</p>
              <p className="mt-5 flex items-start gap-2 rounded-2xl bg-amber-50 p-3 text-sm font-bold leading-7 text-amber-900">
                <MessageCircle className="mt-1 h-4 w-4 shrink-0" />
                {story.reflectionQuestion}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-amber-700">اقرأ القصة <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
