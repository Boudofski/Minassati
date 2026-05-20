import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowLeft, BookOpen, Headphones } from "lucide-react";
import { QuranReader } from "@/components/minassati/QuranReader";
import { getSurahAyahs, getSurahList } from "@/lib/quran-api";
import { getSurahTranslations } from "@/lib/quran-translations";
import { lessons } from "@/data/lessons";

type Props = { params: { surah: string } };

export function generateStaticParams() {
  return Array.from({ length: 114 }, (_, index) => ({ surah: String(index + 1) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const surahNumber = Number(params.surah);
  if (!Number.isInteger(surahNumber) || surahNumber < 1 || surahNumber > 114) return {};
  const surahs = await getSurahList();
  const surah = surahs.find((item) => item.number === surahNumber);
  return {
    title: surah ? `سورة ${surah.name} قراءة عربية وترجمة` : `سورة رقم ${surahNumber}`,
    description: surah ? `اقرأ سورة ${surah.name} في منصتي مع آيات عربية واضحة، تحكم بحجم الخط، ترجمة اختيارية، ونسخ أو مشاركة الآيات.` : "قارئ سورة من القرآن الكريم في منصتي.",
    alternates: { canonical: `/quran/${surahNumber}` },
  };
}

export default async function SurahPage({ params }: Props) {
  const surahNumber = Number(params.surah);
  if (!Number.isInteger(surahNumber) || surahNumber < 1 || surahNumber > 114) notFound();

  const [surah, translations] = await Promise.all([
    getSurahAyahs(surahNumber),
    getSurahTranslations(surahNumber),
  ]);
  const relatedLessons = lessons.filter((lesson) => lesson.category === "quran").slice(0, 4);

  return (
    <article className="page-shell py-12 sm:py-16">
      <div className="mb-8 rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-navy-glow sm:p-10">
        <p className="text-sm font-black text-teal-300">سورة {surah.name}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">{surah.name}</h1>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-slate-300">
          <span className="rounded-full bg-white/10 px-4 py-2">{surah.numberOfAyahs} آية</span>
          <span className="rounded-full bg-white/10 px-4 py-2">{surah.revelationType === "Medinan" ? "مدنية" : "مكية"}</span>
          <span className="rounded-full bg-white/10 px-4 py-2">المصدر: {surah.source}</span>
        </div>
        {surah.source === "fallback" ? (
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-amber-400/12 p-4 text-amber-100">
            <AlertTriangle className="mt-1 h-5 w-5 shrink-0" />
            <p className="text-sm leading-7">تعذر الاتصال بمصادر القرآن حالياً، لذلك تظهر بيانات احتياطية. أعد المحاولة لاحقاً لعرض النص الكامل.</p>
          </div>
        ) : null}
      </div>

      <QuranReader ayahs={surah.ayahs} translations={translations} surahName={surah.name} />

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link href="/audio" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
          <Headphones className="h-7 w-7 text-teal-600" />
          <h2 className="mt-4 text-xl font-black text-slate-950">استمع للسورة</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">اختر قارئاً من صفحة الصوتيات واستمع دون تخزين ملفات محلياً.</p>
        </Link>
        <Link href="/quran" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
          <BookOpen className="h-7 w-7 text-blue-600" />
          <h2 className="mt-4 text-xl font-black text-slate-950">العودة إلى الفهرس</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">افتح سورة أخرى أو ابحث باسمها ورقمها.</p>
        </Link>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-black text-slate-950">اقتراح عائلي بعد القراءة</h2>
        <p className="mt-3 leading-8 text-slate-600">اختاروا آية واحدة، اقرؤوها بصوت هادئ، ثم اسألوا الطفل: ما الكلمة التي أحببتها؟ هذا يحافظ على علاقة دافئة مع القرآن.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/daily" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">ورد اليوم</Link>
          <Link href="/parents" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-800">دليل الأهل</Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-black text-slate-950">روابط تعلم مرتبطة</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {relatedLessons.map((lesson) => (
            <Link key={lesson.slug} href={`/learn/${lesson.category}/${lesson.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
              {lesson.title}
              <ArrowLeft className="ms-2 inline h-4 w-4 transition group-hover:-translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
