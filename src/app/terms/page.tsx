import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شروط الاستخدام - منصتي",
  description: "شروط استخدام منصة منصتي التعليمية.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <h1 className="text-4xl font-black text-slate-950 sm:text-6xl">شروط الاستخدام</h1>
      <div className="mt-8 rounded-2xl bg-white p-6 leading-9 text-slate-700 shadow-soft sm:p-8">
        <p>منصتي منصة تعليمية ومعلوماتية. المحتوى يقدم للتعلم العام ولا يمثل استشارة مهنية أو مالية أو قانونية.</p>
        <p className="mt-4">الدورات المدفوعة والاشتراكات قيد التحضير. عند تفعيل الدفع ستضاف شروط أوضح حول الشراء، الاسترجاع، وحقوق المدربين.</p>
        <p className="mt-4">يمنع نسخ المحتوى أو إعادة بيعه بدون إذن مكتوب من إدارة المنصة.</p>
      </div>
    </section>
  );
}
