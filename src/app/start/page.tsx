import type { Metadata } from "next";
import { StartJourney } from "@/components/minassati/StartJourney";
import { Section } from "@/components/minassati/Section";

export const metadata: Metadata = {
  title: "ابدأ من هنا - رحلة تعلم إسلامي للأطفال",
  description: "اختيار عمر الطفل والهدف التعليمي للحصول على أول مسار مناسب في منصتي: عقيدة، صلاة، قرآن، أو أخلاق.",
  alternates: { canonical: "/start" },
  openGraph: {
    title: "ابدأ من هنا | منصتي",
    description: "اختاروا عمر الطفل والهدف، ثم ابدأوا بأول مسار إسلامي مناسب للأسرة.",
  },
  robots: { index: false, follow: false },
};

export default function StartPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-blue-100/60 sm:p-10">
          <p className="text-sm font-black text-blue-700">ابدأ من هنا</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">ابدأ بخطوة واحدة تناسب عمر طفلك</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
            صفحة سريعة للأهل: اختاروا العمر والهدف، ثم ابدأوا بمسار قصير واضح بلا تسجيل دخول ولا إعدادات معقدة.
          </p>
        </div>
      </section>
      <Section title="رحلة البداية" description="الاقتراح يتغير فوراً حسب الهدف، ويبقى بسيطاً وقابلاً للتطبيق في البيت.">
        <StartJourney />
      </Section>
    </>
  );
}
