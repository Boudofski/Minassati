import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مركز المساعدة - منصتي",
  description: "أسئلة مساعدة حول الدورات والموارد والقرآن والاشتراكات القادمة في منصتي.",
  alternates: { canonical: "/help" },
};

export default function HelpPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <h1 className="text-4xl font-black text-slate-950 sm:text-6xl">مركز المساعدة</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {[
          ["هل الدورات متاحة الآن؟", "بعض الدورات مجانية أو متاحة كصفحات تعريفية. الدفع الكامل قيد التحضير."],
          ["هل القرآن مجاني؟", "نعم، قارئ القرآن والصوتيات تبقى مورداً إسلامياً مجانياً داخل منصتي."],
          ["هل يمكنني نشر دورة؟", "فتح حسابات المدربين قادم لاحقاً. يمكنك إرسال طلب اهتمام الآن."],
          ["هل الموارد قابلة للتحميل؟", "حالياً توجد معاينات وبنية جاهزة. ملفات التحميل ستضاف لاحقاً."],
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
