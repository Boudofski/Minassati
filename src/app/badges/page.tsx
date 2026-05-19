import type { Metadata } from "next";
import { Award, Medal, ShieldCheck, Sparkles, Star, Trophy } from "lucide-react";
import { Section } from "@/components/minassati/Section";

export const metadata: Metadata = {
  title: "الشارات والمكافآت",
  description: "نظام شارات تربوي في منصتي يكافئ التعلم والسلوك الجميل والمواظبة.",
  alternates: { canonical: "/badges" },
};

const badges = [
  { title: "نور القرآن", text: "للاستماع والقراءة المنتظمة.", icon: Star },
  { title: "قلب رحيم", text: "لتطبيق خلق الرحمة في البيت.", icon: ShieldCheck },
  { title: "ذاكر صغير", text: "لحفظ الأذكار اليومية.", icon: Medal },
  { title: "بطل الصلاة", text: "للمواظبة اللطيفة على الصلاة.", icon: Trophy },
  { title: "قارئ القصص", text: "لقراءة قصة واستخراج قيمة.", icon: Sparkles },
  { title: "مساعد الأسرة", text: "لمهمة خير عملية في المنزل.", icon: Award },
];

export default function BadgesPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-amber-100/60 sm:p-10">
          <p className="text-sm font-black text-amber-600">الشارات</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">مكافآت تربوية تعزز المعنى</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">الشارات في منصتي لا تكافئ الوقت فقط، بل تكافئ الفهم، التطبيق، الخلق، والمشاركة العائلية.</p>
        </div>
      </section>
      <Section title="مجموعة الشارات">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <article key={badge.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-soft">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-gold-glow">
                  <Icon className="h-8 w-8" />
                </span>
                <h2 className="mt-5 text-2xl font-black text-slate-950">{badge.title}</h2>
                <p className="mt-2 leading-7 text-slate-600">{badge.text}</p>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
