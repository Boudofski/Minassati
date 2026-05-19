import type { Metadata } from "next";
import { Mail, MessageCircle, Send, UserRound } from "lucide-react";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: "تواصل مع منصتي بخصوص المحتوى التعليمي أو الاقتراحات أو التعاون.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="page-shell py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-teal-100/60 sm:p-10">
          <p className="text-sm font-black text-teal-700">اتصل بنا</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">نستقبل اقتراحات الأسرة والمعلمين</h1>
          <p className="mt-5 text-lg leading-9 text-slate-600">شاركنا ملاحظة على المحتوى، فكرة درس، أو اقتراحاً يجعل تجربة الأطفال أهدأ وأكثر نفعاً.</p>
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
        <form className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8" aria-label="نموذج التواصل" action="mailto:hello@minassati.ma" method="post" encType="text/plain">
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-700">الاسم</span>
              <input className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-400" name="name" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-700">البريد الإلكتروني</span>
              <input className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-400" name="email" type="email" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-700">الرسالة</span>
              <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-blue-400" name="message" />
            </label>
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 font-black text-white transition hover:bg-slate-800" type="submit">
              <Send className="h-4 w-4" />
              إرسال الرسالة
            </button>
          </div>
          <p className="mt-5 flex items-start gap-2 text-sm leading-7 text-slate-500">
            <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
            يفتح زر الإرسال تطبيق البريد لدى ولي الأمر مع بيانات الرسالة المكتوبة.
          </p>
        </form>
      </div>
    </section>
  );
}
