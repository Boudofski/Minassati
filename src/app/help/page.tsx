import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مركز المساعدة - منصتي",
  description: "أسئلة مساعدة حول المدارس، التوجيه، المقالات، ومعلومات ما بعد الباك في منصتي.",
  alternates: { canonical: "/help" },
};

export default function HelpPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <h1 className="text-4xl font-black text-slate-950 sm:text-6xl">مركز المساعدة</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {[
          ["هل معلومات المدارس رسمية؟", "منصتي تقدم توجيهاً عاماً ومعلومات تقريبية، ويجب دائماً التحقق من الموقع الرسمي لكل مؤسسة."],
          ["كيف أبدأ بعد الباك؟", "ابدأ بدليل ما بعد الباك، ثم قارن المدارس والمسارات حسب مستواك واهتماماتك والمدينة المناسبة لك."],
          ["هل يمكنني طلب توجيه شخصي؟", "نعم، يمكنك إرسال طلب توجيه أولي من صفحة التوجيه الشخصي مع تفاصيل كافية عن مستواك واهتماماتك."],
          ["هل المقالات تغني عن المصادر الرسمية؟", "لا، المقالات تساعدك على الفهم والمقارنة، لكنها لا تعوض الإعلانات والمواقع الرسمية للمؤسسات."],
        ].map(([q, a]) => (
          <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-black text-slate-950">{q}</h2>
            <p className="mt-3 leading-8 text-slate-600">{a}</p>
          </div>
        ))}
      </div>
      <Link href="/contact" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white">تواصل معنا</Link>
    </section>
  );
}
