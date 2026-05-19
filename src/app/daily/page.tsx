import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, CalendarDays, CheckCircle2, Heart, HelpCircle, Sparkles, Stars, Trophy } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { getDailyLearning } from "@/lib/daily";

export const metadata: Metadata = {
  title: "التعلم اليومي للأطفال",
  description: "درس اليوم وسؤال اليوم وذكر اليوم وآية اليوم ونشاط عملي وتحدي أسبوعي لتعليم الإسلام للأطفال بروتين عائلي قصير.",
  alternates: { canonical: "/daily" },
  openGraph: {
    title: "درس اليوم للأطفال | منصتي",
    description: "ورد عائلي قصير: درس، سؤال، آية، ذكر، نشاط، وتحدي أسبوعي.",
  },
};

export default function DailyPage() {
  const daily = getDailyLearning();

  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <div className="absolute inset-0 islamic-bg-white opacity-20" />
          <div className="relative max-w-4xl">
            <p className="inline-flex items-center gap-2 text-sm font-black text-amber-300">
              <CalendarDays className="h-4 w-4" />
              التعلم اليومي
            </p>
            <h1 className="mt-4 text-balance text-4xl font-black sm:text-6xl">ورد يومي واضح لا يربك الأسرة</h1>
            <p className="mt-5 text-lg leading-9 text-slate-300">
              ابدأوا بالترتيب المقترح: درس، سؤال، آية، ذكر، ثم نشاط. كل بطاقة مختارة حسب تاريخ اليوم وتبقى ثابتة عند التحديث.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-bold text-slate-200 sm:grid-cols-3">
              {["يكفي اختيار بطاقة واحدة في الأيام المزدحمة", "مناسب لجلسة 5 إلى 10 دقائق", "يربط التعلم بتطبيق عائلي"].map((item) => (
                <span key={item} className="inline-flex items-start gap-2 rounded-2xl bg-white/8 p-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section title="ورد اليوم" description="ابدأوا ببطاقة واحدة فقط إذا كان اليوم مزدحماً، واستكملوا الباقي عندما يتسع الوقت.">
        <div className="grid gap-5 lg:grid-cols-2">
          <Link href={`/learn/${daily.lesson.category}/${daily.lesson.slug}`} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
            <BookOpen className="h-7 w-7 text-blue-600" />
            <p className="mt-4 text-sm font-black text-blue-700">درس اليوم</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">{daily.lesson.title}</h2>
            <p className="mt-3 leading-8 text-slate-600">{daily.lesson.summary}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700">افتح الدرس <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /></span>
          </Link>
          <Link href={`/qa/${daily.question.slug}`} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal-200">
            <HelpCircle className="h-7 w-7 text-teal-600" />
            <p className="mt-4 text-sm font-black text-teal-700">سؤال اليوم</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">{daily.question.question}</h2>
            <p className="mt-3 leading-8 text-slate-600">{daily.question.shortAnswer}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-teal-700">اقرأ الإجابة <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /></span>
          </Link>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <Stars className="h-7 w-7 text-amber-500" />
            <p className="mt-4 text-sm font-black text-amber-700">آية اليوم</p>
            <p className="quran-text mt-3 text-slate-950">{daily.ayah.text}</p>
            <p className="mt-3 text-sm font-bold text-slate-500">{daily.ayah.label}</p>
            <p className="mt-3 leading-7 text-slate-600">{daily.ayah.reflection}</p>
          </article>
          <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <Heart className="h-7 w-7 text-rose-500" />
            <p className="mt-4 text-sm font-black text-rose-700">ذكر اليوم</p>
            <h2 className="mt-2 text-xl font-black text-slate-950">{daily.dhikr.title}</h2>
            <p className="quran-text mt-3 text-slate-950">{daily.dhikr.text}</p>
            <p className="mt-3 leading-7 text-slate-600">{daily.dhikr.guidance}</p>
          </article>
          <Link href="/activities" className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-violet-200">
            <Sparkles className="h-7 w-7 text-violet-600" />
            <p className="mt-4 text-sm font-black text-violet-700">نشاط اليوم</p>
            <h2 className="mt-2 text-xl font-black text-slate-950">{daily.activity.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{daily.activity.parentNote}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-violet-700">شاهد الخطوات <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /></span>
          </Link>
        </div>
        <Link href="/challenges" className="mt-5 flex flex-col gap-4 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-soft transition hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between">
          <span>
            <span className="inline-flex items-center gap-2 text-sm font-black text-amber-700"><Trophy className="h-4 w-4" /> تحدي الأسبوع</span>
            <strong className="mt-2 block text-2xl font-black text-slate-950">{daily.challenge.title}</strong>
            <span className="mt-2 block leading-8 text-slate-700">{daily.challenge.summary}</span>
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-black text-amber-800">افتح التحديات <ArrowLeft className="h-4 w-4" /></span>
        </Link>
        <div className="mt-8 rounded-[2rem] bg-slate-950 p-6 text-white sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black">تابعوا الرحلة غداً</h2>
            <p className="mt-2 leading-8 text-slate-300">عودوا غداً لبطاقات جديدة، أو استخدموا صفحة البداية لاختيار مسار أطول لطفلكم.</p>
          </div>
          <Link href="/start" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 sm:mt-0">
            ابدأ من هنا <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
