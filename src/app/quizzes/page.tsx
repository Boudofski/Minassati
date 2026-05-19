import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Brain, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { quizzes } from "@/data/quizzes";

export const metadata: Metadata = {
  title: "الاختبارات القصيرة",
  description: "اختبارات إسلامية خفيفة للأطفال عن العقيدة والوضوء والسيرة والأخلاق والأذكار.",
  alternates: { canonical: "/quizzes" },
};

export default function QuizzesPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-50 via-white to-teal-50 p-7 shadow-xl shadow-blue-100/50 sm:p-10">
          <p className="text-sm font-black text-blue-700">اختبرني بلطف</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">اختبارات قصيرة تثبت المعنى لا تضغط الطفل</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">كل اختبار يقدم تغذية راجعة دافئة، ويصلح كنشاط عائلي بعد الدرس أو القصة.</p>
        </div>
      </section>
      <Section title="مكتبة الاختبارات">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <Link key={quiz.slug} href={`/quizzes/${quiz.slug}`} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
              <Brain className="h-7 w-7 text-blue-600" />
              <p className="mt-4 text-sm font-black text-teal-700">{quiz.category} · {quiz.ageRange}</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">{quiz.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{quiz.summary}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-500"><CheckCircle2 className="h-4 w-4" /> {quiz.questions.length} أسئلة</span>
                <span className="inline-flex items-center gap-2 text-sm font-black text-blue-700">ابدأ <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
