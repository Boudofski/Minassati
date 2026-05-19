import type { Metadata } from "next";
import { QaBrowser } from "@/components/minassati/QaBrowser";

export const metadata: Metadata = {
  title: "الأسئلة والأجوبة",
  description: "واجهة بحث عربية مبسطة للأسئلة والأجوبة التعليمية للأطفال والآباء والمعلمين.",
  alternates: { canonical: "/qa" },
};

export default function QaPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2.5rem] bg-gradient-to-br from-teal-50 via-white to-blue-50 p-8 sm:p-12">
        <p className="text-sm font-extrabold text-teal-600">منصتي | الأسئلة والأجوبة</p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">إجابات واضحة لأسئلة الأطفال</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
          ابحث في الأسئلة حسب الموضوع، واقرأ إجابات قصيرة قابلة للتوسع لاحقًا بقاعدة بيانات أو لوحة تحرير.
        </p>
      </div>
      <QaBrowser />
    </section>
  );
}
