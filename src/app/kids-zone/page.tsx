import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookHeart, BookOpen, Brain, Heart, Sparkles, Trophy } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { badges } from "@/data/badges";
import { getDailyLearning } from "@/lib/daily";

export const metadata: Metadata = {
  title: "منطقة الطفل",
  description: "واجهة تفاعلية آمنة للأطفال داخل منصتي: تحدي يومي، اختبارات، قصص، أذكار، قرآن، وشارات.",
  alternates: { canonical: "/kids-zone" },
};

const adventures = [
  { href: "/quizzes", title: "اختبر معلوماتك", text: "أسئلة قصيرة وتغذية راجعة لطيفة.", icon: Brain, tone: "from-blue-500 to-cyan-400" },
  { href: "/stories", title: "اقرأ قصة", text: "قصة قصيرة وسؤال تأمل.", icon: BookHeart, tone: "from-amber-500 to-orange-400" },
  { href: "/adhkar", title: "احفظ ذكراً", text: "ذكر صغير في موقف حقيقي.", icon: Heart, tone: "from-rose-500 to-pink-400" },
  { href: "/quran", title: "استمع للقرآن", text: "قراءة هادئة وتلاوة جميلة.", icon: BookOpen, tone: "from-teal-500 to-emerald-400" },
];

export default function KidsZonePage() {
  const daily = getDailyLearning();

  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <div className="absolute inset-0 islamic-bg-white opacity-25" />
          <div className="relative max-w-4xl">
            <p className="inline-flex items-center gap-2 text-sm font-black text-amber-300"><Sparkles className="h-4 w-4" /> منطقة الطفل</p>
            <h1 className="mt-4 text-balance text-4xl font-black sm:text-6xl">اختر مغامرتك الإيمانية اليوم</h1>
            <p className="mt-5 text-lg leading-9 text-slate-300">بطاقات ملونة ومهام قصيرة تجعل الطفل يعود للتعلم بهدوء وفرح.</p>
          </div>
        </div>
      </section>
      <Section title="تحدي اليوم">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <Trophy className="h-8 w-8 text-amber-500" />
            <p className="mt-4 text-sm font-black text-amber-700">مهمة يومية</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">{daily.challenge.title}</h2>
            <p className="mt-3 leading-8 text-slate-600">{daily.challenge.summary}</p>
            <Link href="/challenges" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">
              افتح التحديات <ArrowLeft className="h-4 w-4" />
            </Link>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            {adventures.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className={`group rounded-[2rem] bg-gradient-to-br ${item.tone} p-6 text-white shadow-soft transition hover:-translate-y-1`}>
                  <Icon className="h-8 w-8" />
                  <h2 className="mt-4 text-2xl font-black">{item.title}</h2>
                  <p className="mt-2 text-sm font-bold leading-7 text-white/85">{item.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black">ابدأ <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
      <Section className="bg-white/70" title="شارات قريبة منك">
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {badges.map((badge) => (
            <Link key={badge.slug} href="/badges" className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center shadow-soft transition hover:-translate-y-1">
              <span className={`mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${badge.color} text-white`}>
                <Award className="h-7 w-7" />
              </span>
              <h2 className="mt-4 text-base font-black text-slate-950">{badge.title}</h2>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
