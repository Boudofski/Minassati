import type { Metadata } from "next";
import { QaBrowser } from "@/components/minassati/QaBrowser";

export const metadata: Metadata = {
  title: "أسئلة الأطفال عن الإسلام",
  description: "إجابات عربية مبسطة ودافئة لأسئلة الأطفال عن العقيدة والعبادات والأخلاق والقرآن، مع توجيه مناسب للأهل.",
  alternates: { canonical: "/qa" },
  openGraph: {
    title: "أسئلة الأطفال عن الإسلام | منصتي",
    description: "ابحث عن إجابات قصيرة تساعد الأسرة على الحوار الهادئ مع الطفل.",
  },
  robots: { index: false, follow: false },
};

export default function QaPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] bg-gradient-to-br from-teal-50 via-white to-blue-50 p-6 sm:rounded-[2.5rem] sm:p-12">
        <p className="text-sm font-extrabold text-teal-600">منصتي | الأسئلة والأجوبة</p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">إجابات تساعدك على حوار هادئ مع طفلك</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
          عندما يسأل الطفل، نحتاج جواباً بسيطاً لا يفتح عليه تعقيداً. ابحث هنا عن إجابات تعليمية قصيرة، ثم اربطها بدرس أو نشاط مناسب.
        </p>
      </div>
      <QaBrowser />
    </section>
  );
}
