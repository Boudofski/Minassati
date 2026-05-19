import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { AlertCircle, BookOpen, Mail, RefreshCcw, ShieldCheck, Users } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "مراجعة المحتوى والمسؤولية - منصتي",
  description: "كيف نكتب محتوى منصتي؟ سياسة اللغة العربية المبسطة، تجنب الخلافات، دور الوالدين، والقناة المفتوحة للتغذية الراجعة.",
  alternates: { canonical: "/content-review" },
  openGraph: {
    title: "مراجعة المحتوى والمسؤولية - منصتي",
    description: "سياسة المحتوى ومبادئ الكتابة في منصتي لتعليم الإسلام للأطفال.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "مراجعة المحتوى والمسؤولية",
  description: "سياسة المحتوى ومبادئ الكتابة في منصتي",
  url: absoluteUrl("/content-review"),
  inLanguage: "ar",
  isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
};

const policies = [
  {
    icon: BookOpen,
    title: "طبيعة المحتوى التعليمي",
    body: "محتوى منصتي تعليمي وإرشادي. الدروس والأسئلة والأذكار مكتوبة بلغة تربوية مبسطة موجهة للأطفال في مرحلة 6-12 سنة. لا نعتبر هذا المحتوى فتوى دينية أو إرشاداً شرعياً ملزماً.",
  },
  {
    icon: Users,
    title: "دور الوالدين والمسؤولية",
    body: "منصتي أداة مساعدة تحت إشراف الوالدين. الوالدان يبقيان المرجع الأول والمسؤولَين الأساسيَّين عن التعليم الديني لأطفالهما. نوفر أدوات الحوار والتوجيه لكنها لا تحل محل الشيخ أو المعلم أو الوالد.",
  },
  {
    icon: ShieldCheck,
    title: "اللغة العربية المبسطة",
    body: "نكتب بعربية فصيحة واضحة قريبة من لغة الطفل. نتجنب المصطلحات الفقهية المعقدة في الشرح الأولي، ونفضل الجملة البسيطة على الجملة الكاملة. الوضوح أهم من الإتقان الأسلوبي.",
  },
  {
    icon: AlertCircle,
    title: "تجنب الخلافات الفقهية",
    body: "نتجنب عرض المسائل الخلافية بين المذاهب أو الآراء الفقهية المتعددة في محتوى الأطفال. نركز على ما هو متفق عليه وثابت ومناسب للمرحلة العمرية. الخلافات تُعرض لاحقاً بعد رسوخ الأسس.",
  },
  {
    icon: RefreshCcw,
    title: "المراجعة المستمرة والتحسين",
    body: "المحتوى في منصتي قابل للمراجعة والتطوير. نراجع الدروس والأسئلة دورياً لضمان الدقة والملاءمة. إذا لاحظتَ خطأً أو تحسيناً مقترحاً فنرحب بملاحظتك.",
  },
  {
    icon: Mail,
    title: "قناة التواصل والتغذية الراجعة",
    body: "نحن مفتوحون للملاحظات والتصحيحات. إذا وجدت في المحتوى خطأً أو ما يستوجب المراجعة، تواصل معنا عبر البريد الإلكتروني وسنأخذ ذلك بجدية تامة.",
  },
];

export default function ContentReviewPage() {
  return (
    <>
      <Script id="content-review-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/80 via-white/40 to-transparent" />
        <div className="page-shell py-14 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/82 px-4 py-2 text-sm font-black text-slate-700 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-teal-600" />
            الشفافية والثقة
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
            مراجعة المحتوى والمسؤولية
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-600">
            نؤمن بالشفافية الكاملة مع الأسر حول طبيعة المحتوى الذي نقدمه وحدوده ومسؤولياتنا تجاه الآباء والأطفال.
          </p>
        </div>
      </section>

      <Section eyebrow="السياسات" title="كيف نكتب ونراجع المحتوى">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <div key={policy.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-black text-slate-950">{policy.title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{policy.body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="تواصل معنا" title="ملاحظتك تحسّن المنصة">
        <div className="mx-auto max-w-xl text-center">
          <p className="leading-8 text-slate-300">
            إذا وجدت خطأً في المحتوى أو لديك اقتراح تحسين، نرحب بك. نحرص على جودة ما نقدم لأبنائكم.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="mailto:contact@minassati.ma?subject=ملاحظة على محتوى منصتي"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-slate-950 transition hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              أرسل ملاحظتك
            </a>
            <Link href="/methodology" className="rounded-full border border-white/30 px-6 py-3 font-black text-white transition hover:bg-white/10">
              المنهجية التعليمية
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
