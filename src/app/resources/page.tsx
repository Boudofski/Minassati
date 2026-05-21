import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { AdSlot } from "@/components/minassati/AdSlot";
import { Section } from "@/components/minassati/Section";
import { resources, resourceCategories, resourceTypeLabel } from "@/data/resources";

export const metadata: Metadata = {
  title: "الموارد المجانية والقوالب - منصتي",
  description: "موارد وقوالب وقوائم فحص للمغاربة في التسويق، AI، العمل الحر، التجارة الإلكترونية، الدراسة، والقرآن.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="page-shell py-14 sm:py-20">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">
            <Download className="h-4 w-4" /> موارد مجانية وقوالب
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">موارد تساعدك اليوم قبل أي اشتراك</h1>
          <p className="mt-5 text-lg leading-9 text-slate-600">قوالب، قوائم فحص، أدلة، prompt packs، ومخططات تعلم وتجهيز أعمال.</p>
        </div>
      </section>

      <Section className="bg-slate-50" centered={false}>
        <div className="mb-8 flex flex-wrap gap-2">
          {resourceCategories.map((category) => (
            <span key={category} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">{category}</span>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white"><FileText className="h-5 w-5" /></span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{resource.free ? "مجاني" : "Pro قريبًا"}</span>
              </div>
              <p className="mt-4 text-xs font-black text-blue-700">{resource.category} / {resourceTypeLabel(resource.type)}</p>
              <h2 className="mt-2 text-xl font-black leading-snug text-slate-950 group-hover:text-blue-700">{resource.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{resource.description}</p>
              <span className="mt-5 inline-flex text-sm font-black text-blue-700">{resource.cta}</span>
              {index === 5 ? <AdSlot className="mt-5" /> : null}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
