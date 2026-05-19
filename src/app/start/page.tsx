import type { Metadata } from "next";
import { StartJourney } from "@/components/minassati/StartJourney";
import { Section } from "@/components/minassati/Section";

export const metadata: Metadata = {
  title: "ابدأ من هنا",
  description: "رحلة بداية موجهة للأهل والأطفال لاختيار العمر والهدف وأول مسار مناسب في منصتي.",
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-blue-100/60 sm:p-10">
          <p className="text-sm font-black text-blue-700">ابدأ من هنا</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">اختَر بداية تناسب طفلك لا بداية تربك الأسرة</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
            صفحة سريعة للأهل: اختاروا عمر الطفل والهدف، ثم ابدأوا بمسار قصير واضح بلا تسجيل دخول.
          </p>
        </div>
      </section>
      <Section title="رحلة البداية" description="الاقتراح يتغير فوراً حسب الهدف، ويبقى بسيطاً وقابلاً للتطبيق في البيت.">
        <StartJourney />
      </Section>
    </>
  );
}
