import type { Metadata } from "next";
import Link from "next/link";
import { Download, Sparkles } from "lucide-react";
import { LeadCapture } from "@/components/minassati/LeadCapture";
import { resources, resourceCategories, resourceTypeLabel } from "@/data/resources";

export const metadata: Metadata = {
  title: "الموارد - منصتي | مكتبة قوالب وأدوات عملية",
  description: "قوالب، قوائم تحقق، ومخططات مجانية تساعد الطلبة في التوجيه الدراسي والمهني.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const free = resources.filter((r) => r.free);

  return (
    <>
      {/* Hero */}
      <section className="section-navy relative">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.03]" />
        <div className="page-shell relative py-16 sm:py-24">
          <p className="eyebrow-pill">
            <Sparkles className="h-4 w-4 text-amber-300" /> مكتبة الموارد
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            موارد عملية<br />تستخدمها اليوم
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-[2] text-slate-300">
            قوالب، قوائم تحقق، ومخططات بسيطة تساعدك على اختيار التخصص، مقارنة المدارس، تجهيز الملفات، وتنظيم المراجعة.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="badge-free">{free.length} مجانية</span>
            <span className="badge-soon">موجهة للطلبة</span>
          </div>
        </div>
      </section>

      {/* Sticky category filter */}
      <section className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="page-shell no-scrollbar flex gap-2 overflow-x-auto py-3">
          <Link
            href="/resources"
            className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700"
          >
            الكل ({resources.length})
          </Link>
          {resourceCategories.map((cat) => (
            <Link
              key={cat}
              href={`/resources?category=${encodeURIComponent(cat)}`}
              className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Free resources */}
      <section className="section-light">
        <div className="page-shell py-16">
          <p className="eyebrow-pill-light">مجانية</p>
          <h2 className="mt-4 text-2xl font-black text-slate-950">ابدأ بالموارد المجانية</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {free.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="card-premium group flex flex-col p-5"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-emerald-50">
                  <Download className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="badge-free mb-3 self-start">{resourceTypeLabel(resource.type)}</span>
                <h3 className="font-black text-slate-950 transition-colors group-hover:text-blue-700">
                  {resource.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-slate-500 line-clamp-2">
                  {resource.description}
                </p>
                <span className="mt-4 text-sm font-black text-blue-600">تصفح المورد ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All resources */}
      <section className="section-soft">
        <div className="page-shell py-16">
          <h2 className="mb-8 text-2xl font-black text-slate-950">كل الموارد ({resources.length})</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="card-premium group p-5"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100">
                    <Download className="h-5 w-5 text-slate-600" />
                  </div>
                  <span className="badge-free">مجاني</span>
                </div>
                <p className="mb-2 text-xs font-black uppercase tracking-wider text-blue-600">
                  {resource.category}
                </p>
                <h3 className="font-black text-slate-950 transition-colors group-hover:text-blue-700">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-500 line-clamp-2">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource request LeadCapture */}
      <section className="section-light">
        <div className="page-shell py-16">
          <div className="mx-auto max-w-2xl">
            <LeadCapture
              id="resources-waitlist"
              source="resources"
              interestType="resource_request"
              title="اطلب المورد التالي"
              description="إذا كنت تحتاج قالباً أو checklist للتوجيه، أرسل الطلب وسنرتب الأولويات حسب الحاجة الفعلية."
              subject="طلب مورد جديد من منصتي"
              buttonLabel="أرسل طلب مورد"
            />
          </div>
        </div>
      </section>
    </>
  );
}
