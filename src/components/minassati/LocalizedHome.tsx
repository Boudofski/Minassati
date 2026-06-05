import Link from "next/link";
import { ArrowLeft, BookOpenCheck, CalendarDays, ClipboardCheck, Plane, School, UserCheck } from "lucide-react";
import { articles } from "@/data/articles";
import { calendarWarning } from "@/data/calendar";
import { schoolCategories } from "@/data/schools";
import type { Locale } from "@/i18n/config";

const stats = [
  { label: "مدارس ومعاهد", value: schoolCategories.length.toString(), desc: "تصنيفات حالية" },
  { label: "فرص ومنح", value: "أدلة", desc: "إرشادات عامة" },
  { label: "أدلة ونصائح", value: articles.length.toString(), desc: "مقالات منشورة" },
  { label: "نموذج توجيه شخصي", value: "1", desc: "استمارة واحدة" },
];

const actions = [
  {
    icon: School,
    title: "ابحث عن المدارس المناسبة",
    description: "استكشف المدارس والمعاهد حسب المجال، المدينة، ونوع التكوين مع تنبيه دائم للتحقق من الموقع الرسمي.",
    cta: "اكتشف المزيد",
    href: "/schools",
  },
  {
    icon: Plane,
    title: "تعرف على الفرص الأجنبية",
    description: "أدلة حول المنح، الدراسة بالخارج، الوثائق المطلوبة، ورسائل التحفيز دون مواعيد مزيفة.",
    cta: "اكتشف الفرص",
    href: "/opportunities",
  },
  {
    icon: UserCheck,
    title: "توجيه شخصي مبسط",
    description: "أجب على أسئلة بسيطة حول مستواك واهتماماتك لتحصل على توصية أولية تساعدك على التفكير.",
    cta: "ابدأ الآن",
    href: "/guidance-request",
  },
  {
    icon: CalendarDays,
    title: "تقويم المباريات والمواعيد",
    description: "صفحة تنظيمية للمواعيد المهمة مع تنبيه أن التواريخ يجب تأكيدها من المصادر الرسمية.",
    cta: "تابع التقويم",
    href: "/calendar",
  },
];

const steps = [
  ["أخبرنا بمستواك", "حدد هل أنت تلميذ باك، طالب جامعي، أو في مرحلة إعادة توجيه."],
  ["اختر اهتماماتك", "اختر المجالات التي تميل إليها مثل الصحة، الهندسة، القانون، اللغات، أو الرقمي."],
  ["قارن الخيارات", "استعمل البطاقات والأسئلة لتقارن بين المدرسة، الجامعة، التكوين، أو الدراسة بالخارج."],
  ["اطلب مساعدة إضافية", "أرسل سؤالك بتفاصيل كافية حتى تحصل على توجيه أولي منظم."],
];

export function LocalizedHome(_: { locale: Locale }) {
  const latestArticles = articles.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#b91c1c_0%,#0f7a3b_58%,#075c32_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_80%_5%,rgba(255,214,10,0.14),transparent_24%)]" />
        <div className="page-shell relative max-sm:w-[calc(100vw-1.25rem)] max-sm:max-w-[calc(100vw-1.25rem)] py-10 text-center sm:py-16">
          <div className="mx-auto w-full max-w-3xl overflow-hidden">
            <p className="inline-flex max-w-full rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-center text-xs font-black leading-7 text-white sm:text-sm">
              منصتي — منصة التوجيه الدراسي المغربية
            </p>
            <h1 className="mx-auto mt-5 max-w-[19rem] !text-[2rem] font-black leading-tight sm:max-w-3xl sm:!text-5xl">
              منصة التوجيه
              <br />
              المدرسي
              <br className="sm:hidden" />
              <span className="sm:me-2">المغربية</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[20rem] text-base font-bold leading-8 text-white/90 sm:max-w-2xl sm:text-lg">
              رفيقك الموثوق لاختيار مسارك الدراسي والمهني في المغرب وخارجه.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/guidance-request" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-black text-emerald-800">
                ابدأ التقييم الآن <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link href="/schools" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-base font-black text-white">
                اكتشف المدارس
              </Link>
              <Link href="/articles" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-base font-black text-white/95">
                تصفح المقالات
              </Link>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-xl font-black">{stat.value}</p>
                <h2 className="mt-1 font-black">{stat.label}</h2>
                <p className="mt-1 text-xs font-bold text-white/75">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-shell py-12">
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-black leading-7 text-amber-950">
            المعلومات تقريبية ويجب التحقق منها من المواقع الرسمية للمؤسسات.
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {actions.map(({ icon: Icon, title, description, cta, href }) => (
              <Link key={href} href={href} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-700 text-white shadow-sm transition group-hover:bg-red-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-lg font-black text-slate-950">{title}</h2>
                <p className="mt-3 text-sm font-bold leading-7 text-slate-600">{description}</p>
                <span className="mt-5 inline-flex items-center rounded-full bg-slate-50 px-3 py-1.5 text-sm font-black text-red-700 transition group-hover:bg-emerald-50 group-hover:text-emerald-800">{cta} ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="page-shell py-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700">التوجيه الشخصي</p>
              <h2 className="mt-5 text-3xl font-black text-slate-950">كيف يعمل التوجيه؟</h2>
              <p className="mt-4 text-sm font-bold leading-8 text-slate-600">
                التقييم ليس حكماً نهائياً على مستقبلك. هو طريقة منظمة لجمع المعلومات، فهم اهتماماتك، ثم مقارنة اختياراتك بشكل أهدأ.
              </p>
              <Link href="/guidance-request" className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-black text-white">اطلب توجيهك</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map(([title, desc], index) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-red-700 text-sm font-black text-white">{index + 1}</span>
                  <h3 className="mt-4 font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm font-bold leading-7 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-shell py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">النصائح والمقالات</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950">أحدث النصائح والمقالات</h2>
            </div>
            <Link href="/articles" className="hidden text-sm font-black text-red-700 sm:block">كل المقالات ←</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{article.category}</span>
                <h3 className="mt-4 font-black text-slate-950">{article.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm font-bold leading-7 text-slate-600">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="page-shell grid gap-4 py-12 md:grid-cols-2">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <ClipboardCheck className="h-6 w-6 text-amber-700" />
            <h2 className="mt-3 text-xl font-black text-slate-950">تنبيه مهم</h2>
            <p className="mt-2 text-sm font-black leading-7 text-amber-950">{calendarWarning}</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <BookOpenCheck className="h-6 w-6 text-emerald-700" />
            <h2 className="mt-3 text-xl font-black text-slate-950">القرآن الكريم متاح مجانًا داخل منصتي</h2>
            <p className="mt-2 text-sm font-bold leading-7 text-slate-700">أداة ثانوية مجانية للقراءة والاستماع، مع بقاء التوجيه الدراسي هو هوية المنصة الأساسية.</p>
            <Link href="/quran" className="mt-4 inline-flex rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-black text-white">فتح القرآن</Link>
          </div>
        </div>
      </section>
    </>
  );
}
