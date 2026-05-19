import type { Metadata } from "next";
import { BookOpen, Headphones, Moon, Repeat, Sparkles, Target } from "lucide-react";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { QuranSurahSearch } from "@/components/minassati/QuranSurahSearch";
import { Section } from "@/components/minassati/Section";
import { getSurahList } from "@/lib/quran-api";

export const metadata: Metadata = {
  title: "القرآن الكريم",
  description: "قارئ قرآن تفاعلي في منصتي: سور القرآن، قراءة عربية، ترجمة، أدوات نسخ ومشاركة، وتجربة حفظ للأطفال.",
  alternates: { canonical: "/quran" },
};

const quranModes = [
  { title: "وضع الطفل", text: "واجهة أكبر، ألوان أهدأ، وأهداف قراءة قصيرة.", icon: Sparkles },
  { title: "وضع القراءة", text: "تحكم بحجم الخط وترجمة اختيارية بلا تشتيت.", icon: BookOpen },
  { title: "تكرار الحفظ", text: "مسار جاهز للتوسع بتكرار الآيات والمقاطع.", icon: Repeat },
  { title: "الاستماع", text: "انتقل إلى القراء والتلاوات من MP3Quran.net.", icon: Headphones },
];

export default async function QuranPage() {
  const surahs = await getSurahList();

  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-blue-100/60 sm:p-10">
            <p className="text-sm font-black text-blue-700">قارئ القرآن</p>
            <h1 className="text-balance mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">اختر سورة وابدأ قراءة هادئة</h1>
            <p className="mt-5 text-pretty text-lg leading-9 text-slate-600">
              نص القرآن يُحمّل من fawazahmed0/quran-api مع fallback إلى AlQuran.cloud، دون تخزين ملفات ثقيلة داخل المشروع.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/audio">استمع للتلاوات</ButtonLink>
              <ButtonLink href="/learn/quran" variant="secondary">تعلم القرآن</ButtonLink>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow">
            <Moon className="h-8 w-8 text-amber-300" />
            <h2 className="mt-5 text-3xl font-black">تجربة قراءة مناسبة للأسرة</h2>
            <p className="mt-4 leading-8 text-slate-300">ابحث باسم السورة، افتح النص العربي، فعّل الترجمة، كبّر الخط، وانسخ أو شارك آية واحدة بسهولة.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["114", "سورة"],
                ["API", "مصدر حي"],
                ["RTL", "عربي أولاً"],
                ["SEO", "صفحات سور"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/8 p-4">
                  <strong className="block text-2xl font-black">{value}</strong>
                  <span className="text-xs font-bold text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="الأدوات" title="قارئ بسيط قابل للتوسع">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {quranModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <div key={mode.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <Icon className="h-7 w-7 text-blue-600" />
                <h2 className="mt-4 text-xl font-black text-slate-950">{mode.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{mode.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-white/70" eyebrow="السور" title="فهرس سور القرآن الكريم" description="ابحث وافتح أي سورة. عند تعذر الاتصال، تظهر بيانات احتياطية واضحة بدل كسر الصفحة.">
        <QuranSurahSearch surahs={surahs} />
      </Section>
    </>
  );
}
