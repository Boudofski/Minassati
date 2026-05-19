import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { CheckCircle2, Heart, Repeat, ShieldCheck, Sparkles, Users } from "lucide-react";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { Section } from "@/components/minassati/Section";
import { TrustStrip } from "@/components/minassati/TrustStrip";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "منهجية منصتي في التعليم الإسلامي للأطفال",
  description: "تعرّف على المبادئ التربوية التي تقوم عليها منصتي: البساطة، التكرار اليومي، التعلم بقيادة الوالدين، ولغة الطفل بلا تخويف.",
  alternates: { canonical: "/methodology" },
  openGraph: {
    title: "منهجية منصتي في التعليم الإسلامي للأطفال",
    description: "المبادئ التربوية التي تقوم عليها منصتي لتعليم الإسلام للأطفال.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "منهجية منصتي",
  description: "المبادئ التربوية لمنصة منصتي في تعليم الإسلام للأطفال",
  url: absoluteUrl("/methodology"),
  inLanguage: "ar",
  isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
};

const principles = [
  {
    icon: Sparkles,
    title: "البساطة قبل التعقيد",
    body: "نبدأ دائماً بأبسط فهم وأوضح كلمة. الطفل يحتاج إلى جوهر الفكرة قبل تفاصيلها. كل درس في منصتي مكتوب بلغة الطفل أولاً، ويتوسع لاحقاً بطريقة تدريجية طبيعية.",
  },
  {
    icon: Repeat,
    title: "التكرار اليومي يبني العادة",
    body: "الذاكرة تُبنى بالتكرار المنتظم. عشر دقائق يومياً لمدة شهر أعمق أثراً من ساعة أسبوعية. لهذا نقترح 'درس اليوم' كنقطة انطلاق ثابتة لا تتغير.",
  },
  {
    icon: Users,
    title: "التعلم بقيادة الوالدين",
    body: "منصتي أداة في يد الوالدين لا بديل عنهم. كل درس يحمل ملاحظة للأهل تشرح كيف يحاوروا الطفل ويوجهوه. الوالد هو المعلم الأول دائماً.",
  },
  {
    icon: Heart,
    title: "لغة الطفل دون تخويف",
    body: "نتجنب لغة الخوف والعقاب في شرح الدين للأطفال. نُقدّم الإسلام كرحمة وحب وطمأنينة. الطفل الذي يحب الله يطيعه من القلب لا من الخوف.",
  },
  {
    icon: CheckCircle2,
    title: "الفهم قبل الحفظ",
    body: "الحفظ بلا فهم يضعف الارتباط بالدين. نحرص على أن يعرف الطفل معنى ما يحفظه ولو بأبسط عبارة. الفهم يصنع علاقة، والحفظ يرسّخها.",
  },
  {
    icon: ShieldCheck,
    title: "بيئة آمنة وهادئة",
    body: "نصمم التجربة لتكون مريحة بصرياً وهادئة نفسياً. لا ازدحام، لا ضغط، لا مسابقة. فقط مسار واضح يخدم الطفل والأسرة.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <Script id="methodology-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50/60 via-white/40 to-transparent" />
        <div className="page-shell py-14 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/82 px-4 py-2 text-sm font-black text-teal-700 shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            كيف نعلّم؟
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
            منهجية منصتي في التعليم الإسلامي للأطفال
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-600">
            نؤمن أن تعليم الإسلام للأطفال يجب أن يبني الحب قبل الواجب، والفهم قبل الحفظ، والعادة قبل الكمال.
          </p>
        </div>
      </section>

      <div className="page-shell pb-6">
        <TrustStrip />
      </div>

      <Section eyebrow="المبادئ" title="ستة مبادئ تقوم عليها تجربة منصتي">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={principle.title} className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <span className="absolute left-5 top-5 text-5xl font-black text-slate-100">{index + 1}</span>
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-black text-slate-950">{principle.title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{principle.body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="الأساس" title="التعليم ليس مجرد معلومات" description="هدفنا أن يخرج الطفل من كل جلسة وهو يشعر أن الإسلام قريب منه، مريح له، وممتع بالفعل. الأثر العاطفي الإيجابي هو الأثر الأطول عمراً.">
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href="/start" variant="gold">ابدأ من هنا</ButtonLink>
          <Link href="/parents" className="rounded-full border border-white/30 px-6 py-3 font-black text-white transition hover:bg-white/10">دليل الأهل</Link>
        </div>
      </Section>

      <Section eyebrow="شفافية" title="ما لا تفعله منصتي">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "لا تفرض الكمال", text: "لا تطلب منصتي من الطفل أن يكون مثالياً. التشجيع على الاستمرار أهم من المعايرة على الأخطاء." },
            { title: "لا تستبدل الوالدين", text: "منصتي أداة مساعدة لا أداة إحلال. الوالدان يبقيان المرجع الأول والأثر الأكبر في تعليم الطفل." },
            { title: "لا تدخل في الخلافات", text: "نتجنب المسائل الخلافية الفقهية التي تُربك الأطفال. نركز على الأسس المتفق عليها بأسلوب واضح." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <CheckCircle2 className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-8 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/content-review" className="text-sm font-black text-blue-700 underline underline-offset-4 hover:text-blue-900">
            اقرأ سياسة مراجعة المحتوى
          </Link>
        </div>
      </Section>
    </>
  );
}
