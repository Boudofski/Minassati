import type { Metadata } from "next";
import { Bookmark, BookOpen, Headphones, Heart, Languages, Moon, Repeat, Search, Share2, Sparkles, Target } from "lucide-react";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { SurahCard } from "@/components/minassati/Cards";
import { Section } from "@/components/minassati/Section";
import { sampleSurahs } from "@/data/quran";

export const metadata: Metadata = {
  title: "القرآن الكريم",
  description: "تجربة قرآن تفاعلية للأطفال والأسرة: قراءة، استماع، حفظ، ترجمة، تفسير مبسط، وتتبّع تقدم.",
  alternates: { canonical: "/quran" },
};

const quranModes = [
  { title: "وضع الطفل", text: "واجهة أكبر، ألوان أهدأ، وأهداف قراءة قصيرة.", icon: Sparkles },
  { title: "وضع قبل النوم", text: "إضاءة منخفضة، تلاوة هادئة، وتكرار آيات قصيرة.", icon: Moon },
  { title: "تكرار الحفظ", text: "كرر الآية أو المقطع حتى يثبت الحفظ.", icon: Repeat },
  { title: "متابعة التقدم", text: "علامات للحفظ والمراجعة والآيات المفضلة.", icon: Target },
];

export default function QuranPage() {
  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="aurora-panel rounded-[2.5rem] border border-white p-7 shadow-xl shadow-blue-100/60 sm:p-10">
            <p className="text-sm font-black text-blue-700">تجربة القرآن في منصتي</p>
            <h1 className="text-balance mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">قراءة واستماع وحفظ في واجهة واحدة هادئة</h1>
            <p className="mt-5 text-pretty text-lg leading-9 text-slate-600">
              بنية جاهزة للربط مع alquran.cloud و mp3quran.net، مع تجربة حالية منظمة للسور المختارة، الحفظ، المفضلة، والمراجعة العائلية.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/audio">استمع للتلاوات</ButtonLink>
              <ButtonLink href="/learn/quran" variant="secondary">تعلم القرآن</ButtonLink>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-slate-950 p-5 text-white shadow-navy-glow sm:p-7">
            <div className="rounded-[2rem] border border-white/10 bg-white/7 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-teal-300">مساحة القارئ</p>
                  <h2 className="mt-2 text-3xl font-black">سورة الإخلاص</h2>
                </div>
                <BookOpen className="h-8 w-8 text-amber-300" />
              </div>
              <div className="mt-6 space-y-5">
                {["قُلْ هُوَ اللَّهُ أَحَدٌ", "اللَّهُ الصَّمَدُ", "لَمْ يَلِدْ وَلَمْ يُولَدْ", "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"].map((ayah, index) => (
                  <div key={ayah} className="rounded-2xl bg-white p-5 text-slate-950">
                    <p className="quran-text-lg">{ayah} <span className="text-base text-blue-600">﴿{index + 1}﴾</span></p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-4 gap-2">
                {[Bookmark, Heart, Share2, Headphones].map((Icon, index) => (
                  <button key={index} className="grid h-12 place-items-center rounded-2xl bg-white/10 text-white transition hover:bg-white hover:text-slate-950" aria-label="أداة قرآنية">
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="أدوات قرآنية" title="مصممة للحفظ والفهم لا للتصفح فقط">
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

      <Section className="bg-white/70" eyebrow="السور" title="ابدأ من السور الأقرب للطفل">
        <div className="mb-6 grid gap-3 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft sm:grid-cols-2">
          <label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
            <Search className="h-5 w-5 text-slate-400" />
            <span className="font-bold text-slate-400">بحث ذكي باسم السورة أو رقمها</span>
          </label>
          <label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
            <Languages className="h-5 w-5 text-teal-500" />
            <span className="font-bold text-slate-700">العربية، التفسير، والترجمة العائلية</span>
          </label>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {sampleSurahs.map((surah) => (
            <SurahCard key={surah.number} surah={surah} href="/quran" />
          ))}
        </div>
      </Section>
    </>
  );
}
