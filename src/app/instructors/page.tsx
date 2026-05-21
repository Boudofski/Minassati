import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, GraduationCap, Mail, ShieldCheck } from "lucide-react";
import { LeadCapture } from "@/components/minassati/LeadCapture";

export const metadata: Metadata = {
  title: "للمدربين وصناع المعرفة - منصتي",
  description: "انضم لاحقاً كمدرب أو صانع معرفة في منصتي لبيع الدورات والموارد للجمهور المغربي والعربي.",
  alternates: { canonical: "/instructors" },
};

const points = ["دورات عملية قصيرة أو متقدمة", "موارد رقمية وقوالب قابلة للبيع", "مسارات تعليمية منظمة", "صفحة مدرب وملف مهني مستقبلًا", "جمهور مغربي وعربي يبحث عن مهارات نافعة"];
const rules = ["محتوى أصلي وواضح", "وعود واقعية بلا تضليل", "أمثلة قابلة للتطبيق", "احترام اللغة والجمهور", "جودة صوت وصورة مقبولة"];
const steps = ["أرسل موضوعك وخبرتك", "نراجع ملاءمة المحتوى للجمهور", "نحدد صيغة الدورة أو المورد", "نطلق نسخة أولى عند جاهزية نظام النشر"];

export default function InstructorsPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
            <GraduationCap className="h-4 w-4" /> للمدربين
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">هل لديك معرفة تريد بيعها؟</h1>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            منصتي ستدعم المدربين، المعلمين، الخبراء، وصناع المحتوى الذين يريدون نشر دورات وموارد ومسارات للجمهور المغربي والعربي. برنامج المدربين قيد التحضير، والطلبات الحالية تُستخدم لبناء قائمة انتظار جدية.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="mailto:contact@minassati.ma?subject=طلب الانضمام كمدرب في منصتي&body=السلام عليكم،%0A%0Aالاسم:%0Aالمجال:%0Aنوع المحتوى الذي أريد تقديمه:%0Aرابط أعمال أو نبذة:%0A" className="cta-instructor-apply rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-black text-white" data-cta-id="instructor-hero-apply">أرسل طلب الانضمام</Link>
            <Link href="/creator-preview" className="cta-instructor-preview rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-black text-slate-800" data-cta-id="instructor-hero-preview">معاينة لوحة المدرب</Link>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-navy-glow">
          <h2 className="text-2xl font-black">ما الذي يمكن بيعه؟</h2>
          <div className="mt-5 space-y-3">
            {points.map((point) => <p key={point} className="flex gap-3 text-sm font-bold leading-7 text-slate-200"><CheckCircle2 className="mt-1 h-4 w-4 text-teal-300" />{point}</p>)}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">من يمكنه التدريس؟</h2>
          <p className="mt-3 leading-8 text-slate-600">مدربون، موظفون ذوو خبرة، مستقلون، أساتذة، أئمة أو مختصون في العلوم الإسلامية، وصناع محتوى لديهم معرفة قابلة للتطبيق.</p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">قواعد الجودة</h2>
          <ul className="mt-3 space-y-2 text-sm font-bold leading-7 text-slate-700">
            {rules.map((rule) => <li key={rule}>• {rule}</li>)}
          </ul>
        </section>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-soft">
          <h2 className="flex items-center gap-2 text-2xl font-black text-slate-950"><ShieldCheck className="h-6 w-6 text-blue-700" /> كيف تتم المراجعة؟</h2>
          <ol className="mt-5 space-y-3 text-sm font-bold leading-8 text-slate-700">
            {steps.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}
          </ol>
        </section>
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">ملاحظة تجارية صريحة</h2>
          <p className="mt-3 text-sm font-bold leading-8 text-slate-700">لا توجد لوحة نشر أو نظام أرباح مباشر مفعّل اليوم. الهدف الحالي هو استقبال المدربين المناسبين وبناء العرض قبل فتح السوق بشكل رسمي.</p>
          <Link href="mailto:contact@minassati.ma?subject=طلب الانضمام كمدرب في منصتي" className="cta-instructor-contact mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white" data-cta-id="instructor-quality-contact"><Mail className="h-4 w-4" /> تواصل كمدرب</Link>
        </section>
      </div>
      <LeadCapture
        id="instructor-application"
        source="instructors"
        title="قدّم طلبك كمدرب أو صانع مورد"
        description="أرسل المجال ونوع المحتوى وروابط أعمالك إن وجدت. سنراجع الطلب قبل أي نشر أو وعد تجاري."
        subject="طلب الانضمام كمدرب في منصتي"
        body="السلام عليكم،\n\nأريد التقديم كمدرب في منصتي.\nالاسم:\nالمجال:\nنوع المحتوى:\nرابط أعمال أو نبذة:\n"
        buttonLabel="إرسال طلب مدرب"
        className="mt-8"
      />
    </section>
  );
}
