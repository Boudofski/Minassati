import type { Metadata } from "next";
import { Mail, UserRound } from "lucide-react";
import { LeadCapture } from "@/components/minassati/LeadCapture";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: "تواصل مع منصتي بخصوص الدورات، الموارد، المدربين، الشراكات، أو الاقتراحات.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="page-shell py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-teal-100/60 sm:p-10">
          <p className="text-sm font-black text-teal-700">اتصل بنا</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">تواصل معنا حول التعلم والشراكات</h1>
          <p className="mt-5 text-lg leading-9 text-slate-600">شاركنا فكرة دورة، طلب مورد، اقتراح شراكة، أو اهتمامك بالانضمام كمدرب في منصتي.</p>
          <div className="mt-8 grid gap-3">
            <a href="mailto:hello@minassati.ma" className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 font-black text-slate-800 shadow-sm">
              <Mail className="h-5 w-5 text-blue-600" />
              hello@minassati.ma
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 font-black text-slate-800 shadow-sm">
              <UserRound className="h-5 w-5 text-teal-600" />
              عبد الخالق بدوفي
            </div>
          </div>
        </div>
        <LeadCapture
          id="contact-lead"
          source="contact"
          interestType="contact"
          title="أرسل رسالة إلى فريق منصتي"
          description="استخدم هذا النموذج لاقتراح دورة، طلب مورد، شراكة، أو سؤال عام. إذا لم يكن البريد مفعلاً في البيئة الحالية، يظهر خيار فتح البريد كبديل."
          subject="رسالة من صفحة التواصل في منصتي"
          body="السلام عليكم،\n\nأريد التواصل بخصوص:\n"
          buttonLabel="إرسال الرسالة"
          messagePlaceholder="اكتب رسالتك أو نوع الطلب الذي تريده."
          className="bg-white"
        />
      </div>
    </section>
  );
}
