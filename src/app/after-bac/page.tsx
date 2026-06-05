import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TriangleAlert } from "lucide-react";
import { afterBacCategories, afterBacOptions, bacTrackGuidance, choiceCriteria } from "@/data/after-bac";

export const metadata: Metadata = {
  title: "دليل ما بعد الباك في المغرب - منصتي",
  description: "دليل اختيارات ما بعد الباك في المغرب: الجامعة، المدارس العليا، التكوين المهني، الدراسة بالخارج، والمهارات الرقمية — مع توجيه حسب الشعبة.",
  alternates: { canonical: "/after-bac" },
};

export default function AfterBacPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#b91c1c_0%,#0f7a3b_58%,#075c32_100%)] text-white">
        <div className="page-shell py-14 sm:py-20">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">بعد الباك</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">دليلك لاختيارات ما بعد الباك</h1>
          <p className="mt-4 max-w-2xl text-lg font-bold leading-8 text-white/90">قارن بين المسارات بهدوء. لا تعتمد على شروط أو آجال إلا من المواقع الرسمية.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/guidance-request" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-800">
              اطلب توجيهاً شخصياً <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link href="/schools" className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-black text-white">
              اكتشف المدارس
            </Link>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="bg-white">
        <div className="page-shell py-8">
          <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <p className="text-sm font-black leading-8 text-amber-950">
              المعلومات أدناه تقريبية وتتغير. تحقق دائمًا من المواقع الرسمية للمؤسسات والجهات المنظمة قبل أي قرار أو تسجيل.
            </p>
          </div>
        </div>
      </section>

      {/* Path groups */}
      <section className="bg-slate-50">
        <div className="page-shell py-12">
          <p className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">المسارات الرئيسية</p>
          <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">اختيارات حسب الفئة</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {afterBacCategories.map((category) => (
              <span key={category} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-black text-emerald-800">{category}</span>
            ))}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {afterBacOptions.map((option) => (
              <article key={option.slug} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
                <span className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{option.category}</span>
                <h2 className="mt-3 text-lg font-black text-slate-950">{option.title}</h2>
                <p className="mt-2 grow text-sm leading-7 text-slate-600">{option.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {option.goodFor.map((item) => (
                    <span key={item} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Track-based guidance */}
      <section className="bg-white">
        <div className="page-shell py-14">
          <p className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700">حسب الشعبة</p>
          <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">اختيارات حسب شعبتك</h2>
          <p className="mt-3 text-sm font-bold leading-7 text-slate-500">
            هذه إشارات عامة فقط. القبول الفعلي يعتمد على شروط ونقط — تحقق منها رسمياً.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {bacTrackGuidance.map((g) => (
              <div key={g.track} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-black text-emerald-800">{g.track}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.paths.map((p) => (
                    <span key={p} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">{p}</span>
                  ))}
                </div>
                <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs font-black leading-6 text-amber-900">{g.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-slate-50">
        <div className="page-shell py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="inline-flex rounded-full bg-slate-200 px-4 py-2 text-sm font-black text-slate-700">كيف تختار؟</p>
              <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">معايير الاختيار الفعلي</h2>
              <p className="mt-3 text-sm font-bold leading-7 text-slate-600">
                الاختيار ليس فقط عن النقط. هناك عوامل أخرى قد تكون أهم على المدى البعيد.
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-3">
              {choiceCriteria.map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                  <span className="text-sm font-black text-slate-800">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white">
        <div className="page-shell py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/schools" className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md">
              <h3 className="font-black text-slate-950 group-hover:text-emerald-800">استكشف المدارس والمعاهد ←</h3>
              <p className="mt-2 text-sm font-bold leading-7 text-slate-600">قارن المؤسسات حسب الفئة والمعايير العملية.</p>
            </Link>
            <Link href="/opportunities" className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md">
              <h3 className="font-black text-slate-950 group-hover:text-emerald-800">تعرف على الفرص بالخارج ←</h3>
              <p className="mt-2 text-sm font-bold leading-7 text-slate-600">أدلة المنح والدراسة في فرنسا وإسبانيا وكندا وغيرها.</p>
            </Link>
            <Link href="/articles" className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md">
              <h3 className="font-black text-slate-950 group-hover:text-emerald-800">تصفح مقالات التوجيه ←</h3>
              <p className="mt-2 text-sm font-bold leading-7 text-slate-600">مقالات عملية تساعدك تختار بوضوح.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 text-white">
        <div className="page-shell py-14 text-center">
          <h2 className="text-3xl font-black">بقيت حائراً؟</h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-bold leading-8 text-white/85">
            أرسل سؤالك وأخبرنا بشعبتك، اهتماماتك، ومدينتك. سنساعدك تفكر بطريقة أهدأ.
          </p>
          <Link href="/guidance-request" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-emerald-800">
            إرسال طلب توجيه <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
