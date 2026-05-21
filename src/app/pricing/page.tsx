import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, Mail } from "lucide-react";
import { LeadCapture } from "@/components/minassati/LeadCapture";

export const metadata: Metadata = {
  title: "الاشتراك والأسعار - منصتي",
  description: "خطط منصتي: مجاني، Pro قريباً، ومدربين قريباً. الدفع والاشتراكات قيد التحضير بدون checkout وهمي.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  { name: "مجاني", status: "متاح", price: "0 درهم", note: "مناسب للتصفح والتعلم الأولي", items: ["مقالات وموارد مجانية", "بعض الدورات المفتوحة", "قارئ القرآن والصوتيات", "المسارات العامة", "النشرة التعليمية"] },
  { name: "Pro", status: "قريبًا", price: "لم يحدد بعد", note: "للمتعلمين الذين يريدون محتوى منظماً أكثر", items: ["دورات متقدمة عند الإطلاق", "موارد قابلة للتحميل", "مسارات منظمة بمتابعة أفضل", "شهادات إتمام مستقبلًا", "دعم مجتمعي مستقبلًا"] },
  { name: "Instructor", status: "قريبًا", price: "حسب البرنامج", note: "للمدربين وصناع الموارد", items: ["نشر الدورات بعد المراجعة", "صفحة مدرب", "بيع الموارد مستقبلاً", "لوحة تحكم للمدرب", "تحليلات مستقبلًا"] },
];

export default function PricingPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <div className="max-w-4xl">
        <p className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-700 inline-flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> الدفع والاشتراكات قيد التحضير</p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">تعلم مجاني، واشتراك للمحتوى المتقدم لاحقًا</h1>
        <p className="mt-5 text-lg leading-9 text-slate-600">لا يوجد checkout وهمي حالياً ولا نطلب بيانات بطاقة. منصتي تجمع اهتمام المتعلمين والمدربين أولاً، ثم تطلق الدفع عندما تكون التجربة والأسعار واضحة.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="mailto:contact@minassati.ma?subject=قائمة انتظار Pro في منصتي" className="cta-pricing-pro inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white" data-cta-id="pricing-hero-pro-waitlist"><Mail className="h-4 w-4" /> انضم لقائمة انتظار Pro</Link>
          <Link href="/courses" className="cta-pricing-courses inline-flex justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-800" data-cta-id="pricing-hero-courses">شاهد الدورات المتاحة</Link>
        </div>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-black text-slate-950">{plan.name}</h2>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{plan.status}</span>
            </div>
            <p className="mt-4 text-3xl font-black text-slate-950">{plan.price}</p>
            <p className="mt-2 text-sm font-bold leading-7 text-slate-500">{plan.note}</p>
            <ul className="mt-6 space-y-3">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-bold leading-7 text-slate-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" /> {item}
                </li>
              ))}
            </ul>
            <Link href={plan.name === "مجاني" ? "/courses" : "mailto:contact@minassati.ma?subject=اهتمام بخطة منصتي"} className="cta-pricing-plan mt-6 inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white" data-cta-id={`pricing-plan-${plan.name}`}>{plan.name === "مجاني" ? "ابدأ مجانًا" : "انضم لقائمة الانتظار"}</Link>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm font-bold leading-8 text-amber-950">
        الشفافية التجارية: الأسعار النهائية، الدفع، الشهادات، ولوحات المتابعة ليست مفعلة بعد. هذه الصفحة تعرض نموذج الاشتراك المخطط حتى يفهم الزائر اتجاه المنتج بدون وعود مضللة.
      </div>
      <LeadCapture
        id="pricing-waitlist"
        source="pricing"
        title="سجل اهتمامك بالاشتراك"
        description="أخبرنا بالخطة التي تهمك حتى نرتب الإطلاق حسب الطلب الحقيقي. لا يوجد دفع ولا checkout حالياً."
        subject="اهتمام بالاشتراك في منصتي"
        body="السلام عليكم،\n\nأريد الانضمام لقائمة انتظار منصتي.\nالخطة التي تهمني: Free / Pro / Instructor\nالمجال الذي أتعلم فيه:\n"
        buttonLabel="انضم لقائمة الانتظار"
        className="mt-8"
      />
    </section>
  );
}
