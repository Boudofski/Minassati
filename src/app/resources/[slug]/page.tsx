import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Copy, Mail, Users } from "lucide-react";
import { LeadCapture } from "@/components/minassati/LeadCapture";
import { getResource, resources, resourceTypeLabel, type ResourceType } from "@/data/resources";

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

const usageGuide: Record<ResourceType, { steps: string[]; tip: string }> = {
  checklist: {
    steps: [
      "اطبع أو افتح المورد على شاشة ثانية",
      "راجع كل نقطة بالترتيب قبل النشر أو الإطلاق",
      "ضع علامة على كل ما أنجزته",
      "أعد الكرة في كل مشروع جديد",
    ],
    tip: "القوائم أكثر فائدة عند الاستخدام المتكرر — لا تستخدمها مرة واحدة.",
  },
  template: {
    steps: [
      "انسخ القالب في مستند جديد",
      "عدّل النص الموجود بين الأقواس ليناسب مشروعك",
      "احذف الأقسام التي لا تحتاجها",
      "احفظ نسخة لكل مشروع بشكل منفصل",
    ],
    tip: "القوالب الجيدة تُكيَّف لا تُنسخ حرفياً.",
  },
  guide: {
    steps: [
      "اقرأ الدليل بالكامل أولاً للحصول على الصورة الكاملة",
      "حدد الخطوات التي تنطبق على وضعك",
      "طبّق خطوة واحدة يومياً بدلاً من الكل دفعة واحدة",
      "عُد للدليل عند الحاجة كمرجع",
    ],
    tip: "الأدلة العملية تكون أكثر فائدة بعد تجربة أولى، لا قبلها.",
  },
  "prompt-pack": {
    steps: [
      "افتح ChatGPT أو أداة AI التي تستخدمها",
      "انسخ الأمر الجاهز وألصقه مباشرة",
      "اضبط الأجزاء بين الأقواس لتناسب سياقك",
      "احفظ الأوامر التي أعطت نتائج جيدة في ملف خاص",
    ],
    tip: "أفضل الأوامر تلك التي تضيف إليها سياقك المحدد.",
  },
  planner: {
    steps: [
      "حدد الأسبوع أو الشهر الحالي",
      "ابدأ بملء الحقول الإلزامية أولاً",
      "راجع المخطط في نهاية الأسبوع",
      "عدّل الأسبوع القادم بناءً على ما تعلمته",
    ],
    tip: "المخططات تعمل فقط إذا راجعتها بانتظام — حدد موعداً ثابتاً.",
  },
};

const categoryAudience: Record<string, string> = {
  "التسويق الرقمي": "المسوقون، أصحاب الصفحات، صناع المحتوى",
  "الذكاء الاصطناعي": "أصحاب المشاريع، المسوقون، المستقلون",
  "العمل الحر": "المستقلون الجدد، أصحاب الخدمات الرقمية",
  "التجارة الإلكترونية": "أصحاب المتاجر الصغيرة، العاملون في البيع الإلكتروني",
  "صناعة المحتوى": "صناع المحتوى، منتجو الفيديوهات",
  "التصميم": "المصممون المبتدئون، أصحاب المشاريع الصغيرة",
  "اللغات": "المتعلمون، المحترفون الراغبون في تحسين لغتهم",
  "القرآن والعلوم الإسلامية": "الطلاب، القراء، أصحاب المجموعات الإسلامية",
};

export default function ResourcePage({ params }: Props) {
  const resource = getResource(params.slug);
  if (!resource) notFound();
  const leadId = `resource-waitlist-${resource.slug}`;
  const usage = usageGuide[resource.type];
  const audience = categoryAudience[resource.category] ?? "متعلمون ومحترفون في المجال";

  return (
    <article className="page-shell py-12 sm:py-16">
      <nav className="mb-6 text-sm font-bold text-slate-500">
        <Link href="/">الرئيسية</Link> / <Link href="/resources">الموارد</Link> / <span className="text-slate-800">{resource.title}</span>
      </nav>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          {/* Hero */}
          <section className="rounded-2xl bg-slate-950 p-7 text-white shadow-[var(--shadow-navy)] sm:p-10">
            <span className="eyebrow-pill">{resource.category}</span>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{resource.title}</h1>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-300">{resource.description}</p>
            <p className="mt-4 max-w-3xl text-sm font-bold leading-7 text-slate-400">
              ملف التحميل قد لا يكون متاحاً بعد. هذه الصفحة تعرض الهيكل والمعاينة — اطلب المورد وسنرسله عند توفره.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge-soon">{resourceTypeLabel(resource.type)}</span>
              <span className="badge-soon">{resource.language}</span>
              {resource.free ? <span className="badge-free">مجاني</span> : <span className="badge-pro">Pro قريبًا</span>}
            </div>
          </section>

          {/* What it contains */}
          <section className="mt-8 card-premium p-6 sm:p-8">
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

          {/* How to use */}
          <section className="mt-8 card-premium p-6 sm:p-8">
            <h2 className="text-2xl font-black text-slate-950">كيف تستخدم هذا المورد؟</h2>
            <ol className="mt-5 space-y-3">
              {usage.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm font-bold leading-7 text-slate-700">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-950 text-xs font-black text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-5 rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700">
              نصيحة: {usage.tip}
            </p>
          </section>

          {/* Who it's for */}
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-2 text-xl font-black text-slate-950">
              <Users className="h-5 w-5 text-blue-600" />
              لمن هذا المورد؟
            </h2>
            <p className="mt-3 text-sm font-bold leading-8 text-slate-700">{audience}</p>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              مناسب للمغاربة والجمهور العربي الذين يعملون في <span className="font-bold text-slate-700">{resource.category}</span> ويحتاجون أداة عملية جاهزة.
            </p>
          </section>

          {/* Download CTA */}
          <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-slate-950">هل تريد النسخة القابلة للتحميل؟</h2>
            <p className="mt-3 text-sm font-bold leading-8 text-slate-700">
              أرسل طلب اهتمام وسنرتب أولويات الموارد حسب الطلب الفعلي. لا يوجد دفع مطلوب حالياً.
            </p>
            <Link
              href={`#${leadId}`}
              className="cta-resource-detail mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white"
              data-cta-id={`resource-detail-${resource.slug}`}
              data-resource-slug={resource.slug}
            >
              <Mail className="h-4 w-4" /> أعلمني عند توفره
            </Link>
          </section>

          <LeadCapture
            id={leadId}
            source={`resource:${resource.slug}`}
            interestType="resource_request"
            entitySlug={resource.slug}
            title="اطلب هذا المورد"
            description="سنرسل تحديثاً عند توفر نسخة PDF أو قالب قابل للنسخ. لا يوجد دفع مطلوب الآن."
            subject={`طلب مورد: ${resource.title}`}
            body={`السلام عليكم،\n\nأريد هذا المورد عند توفره: ${resource.title}\nالاسم:\nالمجال:\n`}
            buttonLabel="أعلمني عند توفره"
            className="mt-8"
          />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="card-premium p-6">
            <p className="text-sm font-black text-slate-500">الإجراء</p>
            <p className="mt-2 text-2xl font-black text-slate-950">{resource.cta}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              لا توجد تنزيلات فعلية بعد — اطلب المورد وسنرسله عند توفره.
            </p>
            <Link
              href={`#${leadId}`}
              className="cta-resource-sidebar mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white"
              data-cta-id={`resource-sidebar-${resource.slug}`}
              data-resource-slug={resource.slug}
            >
              <Copy className="h-4 w-4" /> اطلب هذا المورد
            </Link>
          </div>

          <div className="card-premium p-5">
            <h2 className="font-black text-slate-950">طريقة الاستخدام</h2>
            <p className="mt-2 text-sm font-bold leading-7 text-slate-600">
              {resource.type === "checklist" && "راجع كل نقطة بالترتيب قبل النشر أو الإطلاق."}
              {resource.type === "template" && "انسخ وعدّل حسب مشروعك. لا تنسخه حرفياً."}
              {resource.type === "guide" && "اقرأه بالكامل ثم طبّق خطوة واحدة يومياً."}
              {resource.type === "prompt-pack" && "انسخ الأمر في ChatGPT واضبطه حسب سياقك."}
              {resource.type === "planner" && "ابدأ بملء الحقول الإلزامية وراجعه أسبوعياً."}
            </p>
          </div>

          <div className="card-premium p-5">
            <h2 className="font-black text-slate-950">وسوم</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
