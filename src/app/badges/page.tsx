import type { Metadata } from "next";
import { Award, CheckCircle2, Medal, Sparkles } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { badges } from "@/data/badges";

export const metadata: Metadata = {
  title: "الشارات والمكافآت",
  description: "شارات تربوية في منصتي تكافئ القراءة والوضوء والأذكار والقرآن والأخلاق والسيرة.",
  alternates: { canonical: "/badges" },
  robots: { index: false, follow: false },
};

export default function BadgesPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-amber-100/60 sm:p-10">
          <p className="inline-flex items-center gap-2 text-sm font-black text-amber-600"><Medal className="h-4 w-4" /> الشارات</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">مكافآت تربوية تعزز المعنى</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">الشارات هنا عرض بصري بلا حسابات دخول حالياً، لكنها مصممة لتكافئ الفهم والتطبيق لا مجرد الوقت أمام الشاشة.</p>
        </div>
      </section>
      <Section title="مجموعة الشارات">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge) => (
            <article key={badge.slug} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <span className={`grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br ${badge.color} text-white shadow-gold-glow`}>
                <Award className="h-8 w-8" />
              </span>
              <p className="mt-5 text-sm font-black text-blue-700">{badge.category}</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">{badge.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{badge.description}</p>
              <div className="mt-5 space-y-2">
                {badge.criteria.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm font-bold leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-slate-950 text-white" title="كيف نستخدم الشارات؟" description="الشارة وعد تربوي لا ضغط نفسي. الطفل يحصل عليها عندما يفهم معنى ويطبقه في الحياة.">
        <div className="grid gap-4 md:grid-cols-3">
          {["امدح المحاولة قبل النتيجة", "اربط الشارة بخلق أو عبادة", "اجعل الاحتفال قصيراً ودافئاً"].map((rule) => (
            <div key={rule} className="rounded-[2rem] border border-white/10 bg-white/8 p-6">
              <Sparkles className="h-6 w-6 text-amber-300" />
              <p className="mt-4 text-xl font-black text-white">{rule}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
