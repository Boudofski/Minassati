import type { Metadata } from "next";
import { Brain, CheckCircle2, Gamepad2, ListChecks, Puzzle } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { questions } from "@/data/questions";

export const metadata: Metadata = {
  title: "الألعاب الإسلامية",
  description: "ألعاب تعليمية قصيرة في منصتي تساعد الطفل على المراجعة والفهم بلا تشتيت.",
  alternates: { canonical: "/games" },
  robots: { index: false, follow: false },
};

const games = [
  { title: "رتّب خطوات الوضوء", text: "لعبة ترتيب تساعد الطفل على تثبيت التسلسل الصحيح.", icon: ListChecks },
  { title: "اختر الخلق الجميل", text: "مواقف يومية يختار فيها الطفل السلوك الأفضل.", icon: CheckCircle2 },
  { title: "تحدي السور القصيرة", text: "أسئلة خفيفة عن عدد الآيات والمعاني العامة.", icon: Puzzle },
  { title: "من قالها؟", text: "مراجعة قصص السيرة بأسلوب سؤال وجواب.", icon: Brain },
];

export default function GamesPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-blue-100/60 sm:p-10">
          <p className="text-sm font-black text-blue-700">ألعاب تعليمية</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">لعب ذكي يراجع المعرفة بلا إدمان</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">الألعاب في منصتي قصيرة، هادفة، ومرتبطة بالمحتوى الحقيقي الموجود في الدروس والأسئلة.</p>
        </div>
      </section>
      <Section title="الألعاب المتاحة">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <article key={game.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <Icon className="h-7 w-7 text-blue-600" />
                <h2 className="mt-4 text-xl font-black text-slate-950">{game.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{game.text}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section className="bg-white/70" title="أسئلة تتحول إلى تحديات">
        <div className="grid gap-4 md:grid-cols-3">
          {questions.slice(0, 6).map((question) => (
            <article key={question.slug} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <Gamepad2 className="h-6 w-6 text-teal-600" />
              <h2 className="mt-4 text-lg font-black text-slate-950">{question.question}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{question.shortAnswer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
