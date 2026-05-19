import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarCheck, CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";
import { Section } from "@/components/minassati/Section";
import { parentGuidanceCards } from "@/data/platform";

export const metadata: Metadata = {
  title: "دليل الأهل لتعليم الإسلام للأطفال",
  description: "دليل عملي للأهل لاستخدام منصتي يومياً: خطة 10 دقائق، تعليم القرآن بمحبة، وتعليم الصلاة بلا ضغط.",
  alternates: { canonical: "/parents" },
};

const guideSections = [
  { title: "كيف تستخدم منصتي مع طفلك؟", text: "ابدأ بدرس واحد قصير، ثم سؤال مفتوح، ثم نشاط عملي. لا تحاول إنهاء كل شيء في جلسة واحدة." },
  { title: "خطة 10 دقائق يومياً", text: "دقيقتان آية أو ذكر، خمس دقائق درس أو قصة، وثلاث دقائق نشاط أو حوار عائلي." },
  { title: "أخطاء شائعة في تعليم الدين للأطفال", text: "الإطالة، المقارنة، التخويف، وتحويل الحفظ إلى اختبار دائم. البديل هو التدرج والتشجيع والسؤال الهادئ." },
  { title: "كيف نجعل القرآن محبوباً؟", text: "اربط القرآن بالطمأنينة: صوت جميل، مكان هادئ، معنى صغير، ومراجعة بلا تعنيف." },
  { title: "كيف نعلّم الصلاة بدون ضغط؟", text: "ابدأ بالقدوة والبيئة الجميلة، ثم الوضوء العملي، ثم صلاة قصيرة مع تشجيع على المحاولة." },
];

export default function ParentsPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
          <p className="inline-flex items-center gap-2 text-sm font-black text-teal-300"><ShieldCheck className="h-4 w-4" /> للأهل</p>
          <h1 className="mt-4 text-balance text-4xl font-black sm:text-6xl">دينٌ يُعلَّم بالرحمة والقدوة والروتين الصغير</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">دليل عملي يساعد الوالدين على تحويل منصتي إلى عادة تربوية يومية، بلا ضغط ولا ارتباك.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950">
              اختر مسار طفلك <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link href="/daily" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-black text-white">
              ورد اليوم
            </Link>
          </div>
        </div>
      </section>
      <Section title="ما الذي يطمئن الأسرة؟" description="منصتي لا تصدر فتاوى مخصصة ولا تستبدل دور العلماء والأهل، بل تقدم محتوى تعليمي مبسط ومنظم للأطفال.">
        <div className="grid gap-5 md:grid-cols-3">
          {["لغة مناسبة لعمر 6-12 سنة", "روابط داخلية بين الدروس والأسئلة والأنشطة", "توجيه للأهل داخل كل درس ونشاط"].map((item) => (
            <article key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <ShieldCheck className="h-7 w-7 text-blue-600" />
              <h2 className="mt-4 text-xl font-black text-slate-950">{item}</h2>
            </article>
          ))}
        </div>
      </Section>
      <Section title="دليل الاستخدام اليومي">
        <div className="grid gap-5 lg:grid-cols-2">
          {guideSections.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <HeartHandshake className="h-7 w-7 text-teal-600" />
              <h2 className="mt-4 text-2xl font-black text-slate-950">{item.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-white/70" title="خطة أسبوعية مقترحة">
        <div className="grid gap-4 md:grid-cols-3">
          {["الأحد: درس عقيدة وسؤال", "الاثنين: وضوء أو صلاة", "الثلاثاء: قصة وقيمة", "الأربعاء: قرآن واستماع", "الخميس: نشاط عائلي", "الجمعة: مراجعة وشكر"].map((day) => (
            <div key={day} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
              <CalendarCheck className="h-6 w-6 text-blue-600" />
              <p className="mt-4 font-black leading-7 text-slate-950">{day}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="تذكيرات تربوية سريعة">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {parentGuidanceCards.slice(0, 10).map((card) => (
            <div key={card.slug} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
              <CheckCircle2 className="h-5 w-5 text-teal-600" />
              <p className="mt-4 text-sm font-black leading-7 text-slate-800">{card.title}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
