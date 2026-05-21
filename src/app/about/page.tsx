import type { Metadata } from "next";
import { BookOpenCheck, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "@/components/minassati/Section";

export const metadata: Metadata = {
  title: "عن منصتي",
  description: "رؤية منصتي كمنصة مغربية للتعلم الرقمي والدورات والموارد والقرآن.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "تعلم عملي", text: "نركز على مهارات نافعة يمكن تطبيقها في العمل والدراسة والمشاريع.", icon: Sparkles },
  { title: "ثقة واحترام", text: "نحافظ على القرآن والموارد الإسلامية المجانية كجزء محترم من المنصة.", icon: HeartHandshake },
  { title: "أمان ووضوح", text: "لا ندعي دفعاً أو شهادات غير موجودة، ونوضح ما هو متاح وما هو قادم.", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-blue-100/60 sm:p-10">
          <p className="text-sm font-black text-blue-700">عن منصتي</p>
          <h1 className="mt-4 text-balance text-4xl font-black text-slate-950 sm:text-6xl">منصة مغربية للتعلم والمهارات والموارد الرقمية</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
            منصتي تجمع الدورات، المسارات، المقالات، الموارد، والقرآن الكريم في تجربة واحدة موجهة للمغاربة والعرب الذين يريدون تعلم مهارات عملية وبناء معرفة نافعة.
          </p>
        </div>
      </section>
      <Section title="ما نؤمن به">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <Icon className="h-7 w-7 text-teal-600" />
                <h2 className="mt-4 text-xl font-black text-slate-950">{value.title}</h2>
                <p className="mt-2 leading-8 text-slate-600">{value.text}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section className="bg-slate-950 text-white" title="رؤية المنتج">
        <div className="rounded-[2rem] border border-white/10 bg-white/8 p-7">
          <BookOpenCheck className="h-8 w-8 text-amber-300" />
          <p className="mt-5 max-w-4xl text-lg leading-9 text-slate-300">
            نريد أن تصبح منصتي سوقاً معرفياً مغربياً: يتعلم فيه الطالب والمهني وصاحب المشروع، ويجد فيه القارئ القرآن والموارد الإسلامية المجانية، ثم يستطيع المدربون لاحقاً نشر دوراتهم ومواردهم بجودة واضحة.
          </p>
        </div>
      </Section>
    </>
  );
}
