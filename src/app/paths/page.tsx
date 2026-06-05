import type { Metadata } from "next";
import Link from "next/link";
import { careerCategories, careers } from "@/data/careers";

export const metadata: Metadata = {
  title: "المسارات الدراسية والمهنية - منصتي",
  description: "استكشف مسارات دراسية ومهنية حسب المجال: رقمي، تقني، صحي، قانوني، أعمال، تعليم، وإبداع.",
  alternates: { canonical: "/paths" },
};

export default function PathsPage() {
  return (
    <>
      <section className="section-navy">
        <div className="page-shell py-16 sm:py-20">
          <p className="eyebrow-pill">المسارات</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">من الدراسة إلى المهنة</h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">المسار ليس دورة مدفوعة؛ هو تصور يساعدك على ربط التخصص بالمهارات والتجارب الأولى.</p>
        </div>
      </section>
      <section className="section-soft">
        <div className="page-shell py-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careerCategories.map((category) => {
              const items = careers.filter((career) => career.category === category).slice(0, 4);
              return (
                <article key={category} className="card-premium p-6">
                  <h2 className="text-xl font-black text-slate-950">مسار {category}</h2>
                  <div className="mt-4 space-y-3">
                    {items.map((career) => (
                      <Link key={career.slug} href={`/careers/${career.slug}`} className="block rounded-xl bg-slate-50 p-3 text-sm font-bold text-slate-700 hover:text-blue-700">
                        {career.title}
                      </Link>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
