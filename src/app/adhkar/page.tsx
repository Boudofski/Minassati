import type { Metadata } from "next";
import { Heart, MoonStar, Sun } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { dailyAdhkar } from "@/data/platform";
import { lessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "الأذكار اليومية",
  description: "أذكار يومية للأطفال والأسرة مع توجيه تربوي وروتين صباح ومساء.",
  alternates: { canonical: "/adhkar" },
};

export default function AdhkarPage() {
  const adhkarLessons = lessons.filter((lesson) => lesson.category === "duaa");

  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-teal-100/60 sm:p-10">
          <p className="text-sm font-black text-teal-700">الأذكار اليومية</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">طمأنينة قصيرة تتكرر كل يوم</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">الأذكار في منصتي ليست نصوصاً للحفظ فقط، بل روتين عائلي يربط الطفل بالله في الصباح والمساء والمواقف اليومية.</p>
        </div>
      </section>
      <Section title="بطاقات ذكر">
        <div className="grid gap-5 lg:grid-cols-3">
          {dailyAdhkar.map((dhikr, index) => (
            <article key={dhikr.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              {index === 0 ? <Sun className="h-7 w-7 text-amber-500" /> : <MoonStar className="h-7 w-7 text-blue-600" />}
              <h2 className="mt-4 text-xl font-black text-slate-950">{dhikr.title}</h2>
              <p className="quran-text mt-3">{dhikr.text}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{dhikr.guidance}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-white/70" title="دروس الأدعية والأذكار">
        <div className="grid gap-4 md:grid-cols-3">
          {adhkarLessons.map((lesson) => (
            <article key={lesson.slug} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <Heart className="h-6 w-6 text-rose-500" />
              <h2 className="mt-4 text-lg font-black text-slate-950">{lesson.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{lesson.summary}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
