import type { Metadata } from "next";
import { CalendarCheck, Trophy } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { badges } from "@/data/badges";
import { challenges } from "@/data/challenges";

export const metadata: Metadata = {
  title: "تحديات التعلم",
  description: "تحديات إسلامية قصيرة للأطفال: الأذكار، الصلاة، جزء عم، الصدق، وبر الوالدين.",
  alternates: { canonical: "/challenges" },
  robots: { index: false, follow: false },
};

export default function ChallengesPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <p className="inline-flex items-center gap-2 text-sm font-black text-amber-300"><Trophy className="h-4 w-4" /> التحديات</p>
          <h1 className="mt-4 text-balance text-4xl font-black sm:text-6xl">سلاسل صغيرة تبني عادة كبيرة</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">كل تحدي قابل للتطبيق بلا تسجيل دخول، ويصلح كخطة مرئية للأهل والطفل خلال الأسبوع.</p>
        </div>
      </section>
      <Section title="مسارات التحدي">
        <div className="grid gap-5 lg:grid-cols-2">
          {challenges.map((challenge) => {
            const badge = badges.find((item) => item.slug === challenge.badgeSlug);
            return (
              <article key={challenge.slug} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-blue-700">{challenge.category} · {challenge.ageRange}</p>
                    <h2 className="mt-2 text-2xl font-black text-slate-950">{challenge.title}</h2>
                    <p className="mt-3 leading-8 text-slate-600">{challenge.summary}</p>
                  </div>
                  <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-700">{challenge.duration}</span>
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {challenge.dailySteps.map((step, index) => (
                    <p key={step} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                      {index + 1}. {step}
                    </p>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-teal-50 p-4 text-sm leading-7 text-teal-900">
                  <strong>ملاحظة للأهل: </strong>{challenge.parentTip}
                </div>
                {badge && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white">
                    <CalendarCheck className="h-4 w-4" />
                    الشارة المقترحة: {badge.title}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
