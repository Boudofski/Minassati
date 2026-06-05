import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شروط الاستخدام - منصتي",
  description: "شروط استخدام منصتي كمنصة مغربية للتوجيه المدرسي والمقالات التعليمية.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <h1 className="text-4xl font-black text-slate-950 sm:text-6xl">شروط الاستخدام</h1>
      <div className="mt-8 rounded-2xl bg-white p-6 leading-9 text-slate-700 shadow-soft sm:p-8">
        <p>منصتي منصة معلوماتية للتوجيه المدرسي والمهني. المحتوى يقدم للتعلم العام وتنظيم البحث، ولا يمثل قرارًا رسميًا أو استشارة قانونية أو ضمان قبول في أي مؤسسة.</p>
        <p className="mt-4">لا تعرض منصتي دفعًا أو اشتراكات أو وعود قبول. عند الحديث عن مدارس أو منح أو مباريات، يجب التحقق دائمًا من المواقع الرسمية للمؤسسات والجهات المعنية.</p>
        <p className="mt-4">يمنع نسخ المحتوى أو إعادة بيعه بدون إذن مكتوب من إدارة المنصة.</p>
      </div>
    </section>
  );
}
