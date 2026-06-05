import type { Metadata } from "next";
import Link from "next/link";
import { careerCategories, careers } from "@/data/careers";

export const metadata: Metadata = {
  title: "المهن والمسارات المهنية - منصتي",
  description: "اكتشف أكثر من 30 مساراً مهنياً مع المهارات المطلوبة، المسارات الدراسية الممكنة، وخطوات البداية في السياق المغربي.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-20">
          <p className="eyebrow-pill">المهن</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">اكتشف المهنة قبل اختيار الطريق</h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">بطاقات مهنية مختصرة تساعدك على فهم طبيعة العمل، المهارات، الدراسة الممكنة، وخطوات البداية.</p>
        </div>
      </section>
      <section className="sticky top-20 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="page-shell no-scrollbar flex gap-2 overflow-x-auto py-3">
          {careerCategories.map((category) => <a key={category} href={`#${category}`} className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-700">{category}</a>)}
        </div>
      </section>
      <section className="section-light">
        <div className="page-shell space-y-12 py-16">
          {careerCategories.map((category) => (
            <div key={category} id={category}>
              <h2 className="text-2xl font-black text-slate-950">{category}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {careers.filter((career) => career.category === category).map((career) => (
                  <Link key={career.slug} href={`/careers/${career.slug}`} className="card-premium p-5">
                    <h3 className="text-lg font-black text-slate-950">{career.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">{career.description}</p>
                    <span className="mt-4 inline-flex text-sm font-black text-blue-700">تفاصيل المهنة ←</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
