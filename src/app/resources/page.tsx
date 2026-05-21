import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Mail } from "lucide-react";
import { AdSlot } from "@/components/minassati/AdSlot";
import { LeadCapture } from "@/components/minassati/LeadCapture";
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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">
            <Download className="h-4 w-4" /> موارد مجانية وقوالب
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">موارد تساعدك اليوم قبل أي اشتراك</h1>
          <p className="mt-5 text-lg leading-9 text-slate-600">قوالب، قوائم فحص، أدلة، prompt packs، ومخططات تعلم وتجهيز أعمال. بعض التنزيلات الكاملة قيد التحضير، لكن المعاينات والبنية جاهزة.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="mailto:contact@minassati.ma?subject=طلب مورد من منصتي" className="cta-resource-request inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white" data-cta-id="resources-hero-request"><Mail className="h-4 w-4" /> اطلب مورداً</Link>
            <Link href="/pricing" className="cta-resources-pricing inline-flex justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-800" data-cta-id="resources-hero-pricing">موارد Pro قريبًا</Link>
          </div>
        </div>
        <AdSlot label="مساحة إعلانية جانبية مناسبة للموارد المجانية" />
        </div>
      </section>

      <Section className="bg-slate-50" centered={false}>
        <div className="mb-8 flex flex-wrap gap-2">
          {resourceCategories.map((category) => (
            <span key={category} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">{category}</span>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group flex min-h-[280px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white"><FileText className="h-5 w-5" /></span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{resource.free ? "مجاني" : "Pro قريبًا"}</span>
              </div>
              <p className="mt-4 text-xs font-black text-blue-700">{resource.category} / {resourceTypeLabel(resource.type)}</p>
              <h2 className="mt-2 text-xl font-black leading-snug text-slate-950 group-hover:text-blue-700">{resource.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{resource.description}</p>
              <span className="cta-resource-card mt-5 inline-flex text-sm font-black text-blue-700" data-cta-id={`resource-card-${resource.slug}`}>{resource.free ? "عرض المعاينة" : "انضم لقائمة Pro"}</span>
            </Link>
          ))}
        </div>
        <AdSlot className="mt-8" label="مساحة إعلانية بعد قائمة الموارد" />
        <LeadCapture
          id="resources-waitlist"
          source="resources"
          title="اطلب المورد التالي"
          description="إذا كنت تحتاج قالباً أو checklist أو prompt pack، أرسل الطلب وسنرتب الأولويات حسب الحاجة الفعلية."
          subject="طلب مورد جديد من منصتي"
          body="السلام عليكم،\n\nأحتاج مورداً حول:\nنوع المورد: قالب / checklist / guide / prompt pack\nالمجال:\n"
          buttonLabel="أرسل طلب مورد"
          className="mt-8"
        />
      </Section>
    </>
  );
}
