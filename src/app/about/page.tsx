import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, CheckCircle2, GraduationCap, HeartHandshake, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "عن منصتي | منصة مغربية للتعلم الرقمي",
  description: "منصتي — منصة مغربية للتعلم العملي والموارد الرقمية. نجمع الدورات والمسارات والقرآن في تجربة واحدة موجهة للمغاربة والعرب.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "تعلم عملي", text: "نركز على مهارات نافعة يمكن تطبيقها في العمل والمشاريع والدراسة — لا محاضرات نظرية طويلة.", icon: Sparkles },
  { title: "ثقة واحترام", text: "القرآن والموارد الإسلامية جزء مجاني ومحترم من المنصة ولن يصبح مدفوعاً.", icon: HeartHandshake },
  { title: "شفافية كاملة", text: "نوضح ما هو متاح الآن وما هو قادم. لا ندعي دفعاً أو شهادات غير موجودة.", icon: ShieldCheck },
];

const liveNow = [
  "29+ دورة — معظمها مجانية للتصفح",
  "30+ مورد عملي قابل للطلب",
  "114 سورة في قارئ القرآن",
  "10 مسارات تعليمية منظمة",
  "قبول طلبات المدربين للمراجعة",
];

const comingSoon = [
  "نظام الاشتراك Pro (الأسعار قيد التحديد)",
  "شهادات إتمام رسمية",
  "لوحة تتبع التقدم للمتعلمين",
  "لوحة نشر للمدربين",
  "دفع إلكتروني مباشر",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-navy relative">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative py-16 sm:py-24">
          <p className="eyebrow-pill">
            <MapPin className="h-4 w-4 text-amber-300" /> عن منصتي
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            منصة مغربية للتعلم العملي والموارد الرقمية
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">
            منصتي تجمع الدورات، المسارات، المقالات، الموارد، والقرآن الكريم في تجربة واحدة — موجهة للمغاربة والعرب الذين يريدون بناء مهارات حقيقية.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-light">
        <div className="page-shell py-16">
          <p className="eyebrow-pill-light">ما نؤمن به</p>
          <h2 className="mt-4 text-3xl font-black text-slate-950">مبادئنا لا تتفاوض عليها</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map(({ title, text, icon: Icon }) => (
              <article key={title} className="card-premium p-6">
                <Icon className="h-7 w-7 text-teal-600" />
                <h3 className="mt-4 text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-2 leading-8 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Current status */}
      <section className="section-soft">
        <div className="page-shell py-16">
          <p className="eyebrow-pill-light">حالة المنصة الآن</p>
          <h2 className="mt-4 text-2xl font-black text-slate-950">ما هو متاح وما هو قادم</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="card-premium p-6">
              <h3 className="mb-4 flex items-center gap-2 font-black text-emerald-700">
                <CheckCircle2 className="h-5 w-5" /> متاح الآن
              </h3>
              <ul className="space-y-3">
                {liveNow.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-bold leading-7 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-premium p-6">
              <h3 className="mb-4 flex items-center gap-2 font-black text-amber-700">
                <span className="inline-block h-5 w-5 rounded-full border-2 border-amber-400" /> قيد التحضير
              </h3>
              <ul className="space-y-3">
                {comingSoon.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-bold leading-7 text-slate-500">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-navy">
        <div className="page-shell py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-10">
            <BookOpenCheck className="h-8 w-8 text-amber-300" />
            <p className="eyebrow-pill mt-5">رؤية المنتج</p>
            <h2 className="mt-4 text-2xl font-black sm:text-3xl">سوق معرفي مغربي حقيقي</h2>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
              نريد أن تصبح منصتي المرجع الأول للمتعلم المغربي: يجد الدورة والمسار والمورد والقرآن في مكان واحد، ويستطيع المدربون لاحقاً نشر محتواهم لجمهور جاهز.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses" className="btn-primary bg-white text-slate-950 hover:bg-slate-100">
                استكشف الدورات
              </Link>
              <Link href="/instructors" className="btn-ghost-white">
                انضم كمدرب
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team note */}
      <section className="section-light">
        <div className="page-shell py-12">
          <div className="mx-auto max-w-2xl text-center">
            <GraduationCap className="mx-auto h-8 w-8 text-blue-600" />
            <h2 className="mt-4 text-xl font-black text-slate-950">من يبني منصتي؟</h2>
            <p className="mt-3 leading-8 text-slate-600">
              منصتي مشروع مغربي في مرحلة البناء. نبني بشفافية، نستمع للمتعلمين والمدربين، ونطلق الميزات عندما تكون جاهزة فعلاً.
            </p>
            <Link href="/contact" className="btn-secondary mt-6 inline-flex">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
