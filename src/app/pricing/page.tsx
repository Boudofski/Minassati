import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "الاشتراك والأسعار - منصتي",
  description: "خطط منصتي: مجاني، Pro قريباً، ومدربين قريباً. الدفع والاشتراكات قيد التحضير بدون checkout وهمي.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  { name: "مجاني", status: "متاح", price: "0 درهم", items: ["مقالات", "موارد مجانية", "بعض الدورات", "قارئ القرآن", "النشرة البريدية"] },
  { name: "Pro", status: "قريبًا", price: "قيد التحضير", items: ["جميع الدورات المتقدمة", "موارد قابلة للتحميل", "مسارات منظمة", "شهادات إتمام مستقبلًا", "دعم مجتمعي مستقبلًا"] },
  { name: "Instructor", status: "قريبًا", price: "قيد التحضير", items: ["نشر الدورات", "صفحة مدرب", "بيع الموارد", "لوحة تحكم للمدرب", "تحليلات مستقبلًا"] },
];

export default function PricingPage() {
  return (
    <section className="page-shell py-14 sm:py-20">
      <div className="max-w-4xl">
        <p className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-700 inline-flex">الدفع والاشتراكات قيد التحضير</p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">تعلم مجاني، واشتراك للمحتوى المتقدم لاحقًا</h1>
        <p className="mt-5 text-lg leading-9 text-slate-600">لا يوجد checkout وهمي حالياً. منصتي تبدأ بمحتوى مجاني وبنية جاهزة للدورات المدفوعة والاشتراكات.</p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-black text-slate-950">{plan.name}</h2>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{plan.status}</span>
            </div>
            <p className="mt-4 text-3xl font-black text-slate-950">{plan.price}</p>
            <ul className="mt-6 space-y-3">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-bold leading-7 text-slate-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">انضم لقائمة الانتظار</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
