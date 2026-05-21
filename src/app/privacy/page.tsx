import type { Metadata } from "next";
import { EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { Section } from "@/components/minassati/Section";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة خصوصية منصتي للتعلم الرقمي والموارد والدورات والقرآن.",
  alternates: { canonical: "/privacy" },
};

const principles = [
  { title: "تقليل البيانات", text: "صفحات التعلم والقرآن والموارد لا تطلب حساباً شخصياً في المرحلة الحالية.", icon: EyeOff },
  { title: "وضوح للمستخدم", text: "أي تواصل يتم بإرادة المستخدم وبمعلومات واضحة عن الغرض من الرسالة.", icon: ShieldCheck },
  { title: "تجربة آمنة", text: "التصميم يقلل التشتيت ويبتعد عن الوعود أو أزرار الدفع غير الفعلية.", icon: LockKeyhole },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-blue-100/60 sm:p-10">
          <p className="text-sm font-black text-blue-700">سياسة الخصوصية</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">خصوصية واضحة لتجربة تعلم آمنة</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">منصتي مصممة حول مبدأ بسيط: يمكن للزائر التعلم وقراءة القرآن وتصفح الموارد بدون إنشاء حساب في المرحلة الحالية.</p>
        </div>
      </section>
      <Section title="مبادئ الخصوصية">
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article key={principle.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <Icon className="h-7 w-7 text-blue-600" />
                <h2 className="mt-4 text-xl font-black text-slate-950">{principle.title}</h2>
                <p className="mt-2 leading-8 text-slate-600">{principle.text}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section className="bg-white/70" title="ملفات الارتباط والخدمات الخارجية">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 leading-9 text-slate-700 shadow-soft">
          <p>قد تستخدم بعض الخدمات العامة مثل الإعلانات أو أدوات القياس ملفات ارتباط وفق سياساتها الخاصة. عند تشغيل أي خدمة خارجية، يجب أن تكون واضحة ولا تستخدم لتضليل المستخدم.</p>
          <p className="mt-5">التواصل عبر البريد يتم بإرادة المستخدم، ولا تُستخدم بيانات الرسالة إلا للرد على الاستفسار أو الاقتراح.</p>
        </div>
      </Section>
    </>
  );
}
