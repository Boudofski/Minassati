import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { AdhkarFilter } from "@/components/minassati/AdhkarFilter";
import { Section } from "@/components/minassati/Section";
import { adhkarItems } from "@/data/platform";

export const metadata: Metadata = {
  title: "الأذكار اليومية",
  description: "أذكار الصباح والمساء والنوم والطعام والخروج ودعاء الوالدين للأطفال مع شرح مبسط.",
  alternates: { canonical: "/adhkar" },
  robots: { index: false, follow: false },
};

const groups = [
  { key: "morning", title: "الصباح", match: ["الصباح", "الاستيقاظ", "طلب العلم", "الهداية"] },
  { key: "evening", title: "المساء والنوم", match: ["النوم", "الخوف", "الحزن", "الصبر"] },
  { key: "home", title: "البيت والخروج والطعام", match: ["الطعام", "الخروج", "الدخول", "لبس", "ركوب"] },
  { key: "family", title: "الوالدان والقلب", match: ["الوالدين", "الشكر", "الخير", "الصحبة", "المسلمين", "الغضب", "الخطأ", "المرض", "الفرح", "المطر", "العطاس", "المسجد"] },
];

export default function AdhkarPage() {
  const seen = new Set<string>();
  const groupedAdhkar = groups.map((group) => {
    const items = adhkarItems.filter((item) => {
      const matches = group.match.some((word) => item.title.includes(word) || item.guidance.includes(word));
      if (!matches || seen.has(item.title)) return false;
      seen.add(item.title);
      return true;
    });
    return { ...group, items };
  });

  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-teal-100/60 sm:p-10">
          <p className="text-sm font-black text-teal-700">الأذكار اليومية</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">طمأنينة قصيرة تتكرر كل يوم</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">أذكار منظّمة حسب الموقف، مع شرح بسيط يساعد الطفل على استخدامها في وقتها الحقيقي.</p>
        </div>
      </section>
      <Section title="فلتر حسب الموقف" description="اختاروا موقف اليوم، واحفظوا ذكراً واحداً في وقته الحقيقي.">
        <AdhkarFilter groups={groupedAdhkar} />
      </Section>
      <Section className="bg-slate-950 text-white" title="طريقة حفظ الأذكار" description="احفظوا ذكراً واحداً في الأسبوع، وطبقوه في وقته حتى يصبح عادة.">
        <div className="grid gap-4 md:grid-cols-3">
          {["اقرأ الذكر بصوت هادئ", "اشرح معناه بجملة واحدة", "اربطه بموقف حقيقي اليوم"].map((step) => (
            <div key={step} className="rounded-[2rem] border border-white/10 bg-white/8 p-6">
              <Sparkles className="h-6 w-6 text-amber-300" />
              <p className="mt-4 text-xl font-black text-white">{step}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
