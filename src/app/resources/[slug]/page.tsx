import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Copy } from "lucide-react";
import { AdSlot } from "@/components/minassati/AdSlot";
import { getResource, resources, resourceTypeLabel } from "@/data/resources";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const resource = getResource(params.slug);
  if (!resource) return {};
  return {
    title: `${resource.title} - مورد من منصتي`,
    description: resource.description,
    alternates: { canonical: `/resources/${resource.slug}` },
  };
}

export default function ResourcePage({ params }: Props) {
  const resource = getResource(params.slug);
  if (!resource) notFound();

  return (
    <article className="page-shell py-12 sm:py-16">
      <nav className="mb-6 text-sm font-bold text-slate-500">
        <Link href="/">الرئيسية</Link> / <Link href="/resources">الموارد</Link> / <span className="text-slate-800">{resource.title}</span>
      </nav>
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <section className="rounded-2xl bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-teal-200">{resource.category}</span>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{resource.title}</h1>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-300">{resource.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-300">
              <span className="rounded-full bg-white/10 px-4 py-2">{resourceTypeLabel(resource.type)}</span>
              <span className="rounded-full bg-white/10 px-4 py-2">{resource.language}</span>
              <span className="rounded-full bg-white/10 px-4 py-2">{resource.free ? "مجاني" : "Pro قريبًا"}</span>
            </div>
          </section>

          <AdSlot className="mt-8" />

          <section className="mt-8 rounded-2xl bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl font-black text-slate-950">ماذا يحتوي؟</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {resource.previewSections.map((section) => (
                <div key={section} className="rounded-xl border border-slate-200 p-4 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-emerald-600" />
                  {section}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-slate-950">معاينة النموذج</h2>
            <div className="mt-5 rounded-2xl bg-white p-5 text-sm leading-8 text-slate-700">
              <p className="font-black">الهدف:</p>
              <p>اكتب هدفك العملي لهذا المورد، ثم أضف الخطوات والنتيجة المتوقعة.</p>
              <p className="mt-4 font-black">الخطوات:</p>
              <p>1. حدد السياق. 2. املأ الحقول الأساسية. 3. راجع النتيجة وطبقها.</p>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-black text-slate-500">الإجراء</p>
            <p className="mt-2 text-2xl font-black text-slate-950">{resource.cta}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">لا توجد تنزيلات فعلية بعد. البنية جاهزة لإضافة ملفات PDF أو نماذج قابلة للنسخ لاحقاً.</p>
            <Link href="/contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">
              <Copy className="h-4 w-4" /> اطلب هذا المورد
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="font-black text-slate-950">وسوم</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {resource.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>)}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
