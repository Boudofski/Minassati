import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Mail, MessageSquare, UserRound } from "lucide-react";
import { LeadCapture } from "@/components/minassati/LeadCapture";

export const metadata: Metadata = {
  title: "اتصل بنا - منصتي",
  description: "تواصل مع منصتي بخصوص الدورات، الموارد، المدربين، الشراكات، أو الاقتراحات.",
  alternates: { canonical: "/contact" },
};

const reasons = [
  { icon: MessageSquare, label: "اقتراح دورة أو مورد", href: "#contact-lead" },
  { icon: GraduationCap, label: "الانضمام كمدرب", href: "/instructors" },
  { icon: Mail, label: "شراكة أو تعاون", href: "#contact-lead" },
  { icon: UserRound, label: "سؤال عام", href: "#contact-lead" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-navy relative">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative py-16 sm:py-20">
          <p className="eyebrow-pill">
            <Mail className="h-4 w-4 text-amber-300" /> تواصل معنا
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
            تواصل معنا حول التعلم والشراكات
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-[2] text-slate-300">
            نرد على كل الطلبات الجدية. شاركنا فكرتك أو اقتراحك أو سؤالك.
          </p>
        </div>
      </section>

      {/* Reasons + form */}
      <section className="section-soft">
        <div className="page-shell py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-xl font-black text-slate-950">كيف يمكنك التواصل؟</h2>
              <div className="mt-5 space-y-3">
                {reasons.map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="card-premium flex items-center gap-4 p-4 font-bold text-slate-700 transition hover:text-blue-700"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50">
                      <Icon className="h-4 w-4 text-blue-600" />
                    </div>
                    {label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 card-premium p-5">
                <h3 className="font-black text-slate-950">البريد المباشر</h3>
                <a
                  href="mailto:hello@minassati.ma"
                  className="mt-3 flex items-center gap-3 text-sm font-bold text-blue-700 hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  hello@minassati.ma
                </a>
                <div className="mt-3 flex items-center gap-3 text-sm font-bold text-slate-600">
                  <UserRound className="h-4 w-4" />
                  عبد الخالق بدوفي
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-bold leading-7 text-amber-900">
                  نعمل على بناء المنصة بشفافية. إذا لم تجد ما تبحث عنه، أخبرنا — آراؤك تشكّل ما نبنيه.
                </p>
              </div>
            </div>

            <LeadCapture
              id="contact-lead"
              source="contact"
              interestType="contact"
              title="أرسل رسالة إلى فريق منصتي"
              description="استخدم هذا النموذج لاقتراح دورة، طلب مورد، شراكة، أو سؤال عام."
              subject="رسالة من صفحة التواصل في منصتي"
              body="السلام عليكم،\n\nأريد التواصل بخصوص:\n"
              buttonLabel="إرسال الرسالة"
              messagePlaceholder="اكتب رسالتك أو نوع الطلب الذي تريده."
              className="bg-white"
            />
          </div>
        </div>
      </section>
    </>
  );
}
