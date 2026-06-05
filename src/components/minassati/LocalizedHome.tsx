import Link from "next/link";
import { ArrowLeft, BookOpenCheck, Compass, FileText, GraduationCap, Map, School, Sparkles, TriangleAlert } from "lucide-react";
import { afterBacOptions } from "@/data/after-bac";
import { articles } from "@/data/articles";
import { careers } from "@/data/careers";
import { resources, resourceTypeLabel } from "@/data/resources";
import type { Locale } from "@/i18n/config";

const problems = ["كثرة الاختيارات", "الخوف من اختيار خاطئ", "نقص المعلومات", "ضغط العائلة", "عدم وضوح سوق العمل"];
const categories = [
  ["بعد الباك", "/after-bac", "فهم الجامعة، المدارس، التكوين، والدراسة بالخارج."],
  ["اختيار التخصص", "/orientation", "حوّل الاختيار إلى معايير واضحة قابلة للمقارنة."],
  ["المدارس والجامعات", "/schools", "تعلم كيف تقارن المؤسسات دون معلومات مزيفة."],
  ["المسارات المهنية", "/careers", "اكتشف المهن والمهارات وخطوات البداية."],
  ["المنح والدراسة بالخارج", "/scholarships", "جهز الوثائق وتعلم أين تبحث عن الفرص."],
  ["المهارات الرقمية", "/careers/web-developer", "مهارات داعمة لأي طالب أو خريج."],
];
const careerPreview = ["digital-marketer", "ai-specialist", "software-developer", "designer", "e-commerce-manager", "doctor", "lawyer", "teacher"];

export function LocalizedHome(_: { locale: Locale }) {
  const latestArticles = articles.slice(0, 3);
  const usefulResources = resources.slice(0, 5);
  const careersToShow = careerPreview.map((slug) => careers.find((career) => career.slug === slug)).filter(Boolean);

  return (
    <>
      <section className="section-soft relative overflow-hidden">
        <div className="page-shell grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow-pill-light">
              <Compass className="h-4 w-4" /> منصتي — منصة مغربية للتوجيه الدراسي والمهني
            </p>
            <h1 className="mt-6 max-w-3xl text-3xl font-black leading-tight text-slate-950 sm:text-6xl">
              اختَر مسارك الدراسي<br />والمهني بثقة
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-bold leading-[2] text-slate-650">
              منصتي تساعد التلاميذ والطلبة في المغرب على فهم اختياراتهم بعد الباك، اكتشاف المسارات الدراسية والمهنية، مقارنة الخيارات، والوصول إلى مقالات وموارد عملية تساعدهم على اتخاذ قرار أفضل.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/orientation" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-black text-white">
                ابدأ التوجيه <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link href="/articles" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-black text-slate-950">
                اقرأ مقالات التوجيه
              </Link>
              <Link href="/after-bac" className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-7 py-4 text-base font-black text-blue-800">
                اكتشف ما بعد الباك
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white bg-white p-5 shadow-soft">
            <div className="rounded-3xl bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-teal-300">لوحة قرار الطالب</span>
                <GraduationCap className="h-6 w-6 text-amber-300" />
              </div>
              <div className="mt-6 grid gap-3">
                {["الميول", "بعد الباك", "المهن", "الخطوات"].map((item, index) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-center justify-between text-sm font-bold">
                      <span>{item}</span>
                      <span className="text-teal-300">{(index + 1) * 25}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-teal-300" style={{ width: `${(index + 1) * 25}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-amber-300 p-4 text-sm font-black leading-7 text-slate-950">
                القرار الجيد يبدأ بسؤال واضح ومعلومة موثوقة وخطوة صغيرة قابلة للتجربة.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="page-shell py-14">
          <h2 className="text-3xl font-black text-slate-950">لماذا يحتاج الطالب إلى توجيه واضح؟</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {problems.map((problem) => (
              <div key={problem} className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <TriangleAlert className="h-5 w-5 text-amber-600" />
                <p className="mt-4 font-black text-slate-950">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="page-shell py-14">
          <p className="eyebrow-pill-light">مجالات التوجيه</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map(([title, href, desc]) => (
              <Link key={href} href={href} className="card-premium group p-6">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h3 className="mt-4 text-xl font-black text-slate-950 group-hover:text-blue-700">{title}</h3>
                <p className="mt-2 text-sm font-bold leading-7 text-slate-600">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="page-shell py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow-pill-light">بعد الباك</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950">اختيارات تحتاج مقارنة هادئة</h2>
            </div>
            <Link href="/after-bac" className="hidden text-sm font-black text-blue-700 sm:block">كل اختيارات ما بعد الباك ←</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {afterBacOptions.slice(0, 5).map((option) => (
              <Link key={option.slug} href="/after-bac" className="card-premium p-5">
                <School className="h-5 w-5 text-teal-600" />
                <h3 className="mt-3 font-black text-slate-950">{option.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">{option.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="page-shell py-14">
          <p className="eyebrow-pill-light">المسارات المهنية</p>
          <h2 className="mt-4 text-3xl font-black text-slate-950">اكتشف مهنًا قبل أن تختار التخصص</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careersToShow.map((career) => career && (
              <Link key={career.slug} href={`/careers/${career.slug}`} className="card-premium p-5">
                <Map className="h-5 w-5 text-blue-600" />
                <h3 className="mt-3 font-black text-slate-950">{career.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-600">{career.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="page-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow-pill-light">المقالات</p>
            <h2 className="mt-4 text-3xl font-black text-slate-950">مقالات التوجيه للبحث والـ SEO</h2>
            <div className="mt-7 grid gap-4">
              {latestArticles.map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="card-premium p-5">
                  <span className="badge-soon">{article.category}</span>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{article.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow-pill-light">الموارد</p>
            <h2 className="mt-4 text-3xl font-black text-slate-950">قوالب وقوائم فحص</h2>
            <div className="mt-7 space-y-3">
              {usefulResources.map((resource) => (
                <Link key={resource.slug} href={`/resources/${resource.slug}`} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 font-black text-slate-800">
                  <span>{resource.title}</span>
                  <span className="text-xs text-blue-700">{resourceTypeLabel(resource.type)}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="page-shell grid gap-5 py-14 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
            <BookOpenCheck className="h-7 w-7 text-emerald-700" />
            <h2 className="mt-4 text-2xl font-black text-slate-950">القرآن الكريم متاح مجانًا داخل منصتي</h2>
            <p className="mt-3 text-sm font-bold leading-7 text-slate-700">يبقى القرآن أداة ثانوية مجانية للقراءة والاستماع، وليس الهوية الرئيسية للمنصة.</p>
            <Link href="/quran" className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white">فتح القرآن</Link>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-7">
            <FileText className="h-7 w-7 text-blue-700" />
            <h2 className="mt-4 text-2xl font-black text-slate-950">هل تحتاج توجيهًا؟</h2>
            <p className="mt-3 text-sm font-bold leading-7 text-slate-700">اطلب توجيهاً عبر نموذج بسيط وسنراجع سؤالك حسب المعلومات التي ترسلها.</p>
            <Link href="/guidance-request" className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">اطلب توجيهًا</Link>
          </div>
        </div>
      </section>
    </>
  );
}
