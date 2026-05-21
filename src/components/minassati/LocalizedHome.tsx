import Link from "next/link";
import { ArrowLeft, BookOpenCheck, CheckCircle2, Download, GraduationCap, Layers, Sparkles, Users } from "lucide-react";
import { CourseCard } from "@/components/minassati/CourseExplorer";
import { Section } from "@/components/minassati/Section";
import { courses } from "@/data/courses";
import { learningPaths } from "@/data/learning-paths";
import { resources } from "@/data/resources";
import { localeDirections, type Locale } from "@/i18n/config";

const categories = [
  ["الذكاء الاصطناعي", "أدوات عملية للأعمال والمحتوى والأتمتة."],
  ["التسويق الرقمي", "خطط محتوى وإعلانات وSEO للمشاريع."],
  ["العمل الحر", "بورتفوليو، عروض، تواصل، وتسعير."],
  ["التجارة الإلكترونية", "إطلاق متجر، بيع، تصوير، وخدمة عملاء."],
  ["ريادة الأعمال", "نماذج وأفكار لتطوير مشروع صغير."],
  ["التصميم وصناعة المحتوى", "Canva، منشورات، فيديوهات، وهوية بسيطة."],
  ["اللغات", "فرنسية وإنجليزية عملية للعمل والعمل الحر."],
  ["الدعم المدرسي", "تنظيم الدراسة والبحث والتحضير للامتحانات."],
  ["القرآن والعلوم الإسلامية", "قراءة واستماع وأذكار ومواد موثوقة."],
  ["تطوير الذات", "إنتاجية، أهداف، وعادات تعلم مستقرة."],
];

const trustPoints = ["محتوى عملي", "واجهة عربية وفرنسية وإنجليزية وإسبانية", "موارد قابلة للتطبيق", "قرآن مجاني", "تطوير مستمر", "مناسبة للمتعلمين والمدربين"];

export function LocalizedHome({ locale }: { locale: Locale }) {
  const featuredCourses = courses.filter((course) => course.featured).slice(0, 6);
  const featuredPaths = learningPaths.filter((path) => path.featured).slice(0, 6);
  const freeResources = resources.filter((resource) => resource.free).slice(0, 7);
  const dir = localeDirections[locale];

  return (
    <div lang={locale} dir={dir} className="overflow-hidden bg-[#F7FAFC]">
      <section className="relative bg-slate-950 text-white">
        <div className="absolute inset-0 islamic-bg-white opacity-[0.05]" />
        <div className="page-shell relative grid min-h-[calc(100vh-5rem)] gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-black text-teal-200">
              <Sparkles className="h-4 w-4 text-amber-300" /> منصة مغربية للتعلم، الدورات، والموارد الرقمية
            </p>
            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">منصتي — تعلّم مهارات جديدة وابدأ رحلتك الرقمية بثقة</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
              اكتشف دورات ومسارات تعليمية في التسويق الرقمي، الذكاء الاصطناعي، العمل الحر، اللغات، ريادة الأعمال، والتعلم الإسلامي — مع محتوى مجاني وموارد عملية تساعدك على التطور خطوة بخطوة.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses" className="rounded-full bg-white px-7 py-4 text-center text-base font-black text-slate-950">استكشف الدورات</Link>
              <Link href="/paths" className="rounded-full border border-white/20 px-7 py-4 text-center text-base font-black text-white hover:bg-white/10">تصفح المسارات</Link>
              <Link href="/quran" className="rounded-full px-7 py-4 text-center text-base font-black text-teal-200 hover:bg-white/10">افتح القرآن الكريم</Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["دورات ومسارات عملية", "محتوى مجاني ومدفوع", "موارد قابلة للتحميل", "قرآن واستماع مجاني"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm font-black text-slate-200">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/8 p-4 shadow-2xl shadow-blue-950/30 backdrop-blur">
            <div className="rounded-2xl bg-white p-5 text-slate-950">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black text-blue-700">لوحة تعلم</p>
                  <h2 className="mt-1 text-2xl font-black">مسار التسويق الرقمي</h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">62%</span>
              </div>
              <div className="mt-5 h-3 rounded-full bg-slate-100"><div className="h-3 w-[62%] rounded-full bg-blue-600" /></div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["AI", "الذكاء الاصطناعي للأعمال", "مجاني"],
                  ["MKT", "التسويق الرقمي من الصفر", "مجاني"],
                  ["QUR", "قارئ القرآن", "114 سورة"],
                  ["INS", "صفحة مدرب", "قريبًا"],
                ].map(([icon, title, meta]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-xs font-black text-white">{icon}</span>
                    <strong className="mt-3 block text-sm leading-6">{title}</strong>
                    <span className="mt-2 block text-xs font-bold text-slate-500">{meta}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm font-black text-amber-300">منصة قابلة للنمو</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">دورات، موارد، اشتراكات، ومدربون لاحقاً بدون التخلي عن القرآن كأداة مجانية موثوقة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="التصنيفات" title="تعلّم ما تحتاجه لحياتك وعملك" centered={false}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map(([title, description]) => (
            <Link key={title} href={`/courses?category=${encodeURIComponent(title)}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
              <h3 className="text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              <span className="mt-4 inline-flex text-xs font-black text-blue-700">دورات وموارد</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50" eyebrow="الدورات" title="دورات مختارة للبدء" centered={false}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => <CourseCard key={course.slug} course={course} compact />)}
        </div>
      </Section>

      <Section eyebrow="المسارات" title="مسارات واضحة بدل التشتت" centered={false}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredPaths.map((path) => (
            <Link key={path.slug} href={`/paths/${path.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
              <Layers className="h-7 w-7 text-blue-600" />
              <h3 className="mt-4 text-xl font-black text-slate-950">{path.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{path.outcome}</p>
              <div className="mt-4 flex gap-2 text-xs font-bold text-slate-500">
                <span>{path.steps.length} مراحل</span><span>•</span><span>{path.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-white" eyebrow="الموارد" title="موارد مجانية تساعدك اليوم" centered={false}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {freeResources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-200">
              <Download className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-3 font-black text-slate-950">{resource.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{resource.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="قرآن مجاني" title="القرآن الكريم دائمًا ضمن منصتي" centered={false}>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="max-w-3xl text-lg leading-9 text-slate-300">
              يبقى القرآن الكريم مورداً مجانياً ومحترماً داخل منصتي: قراءة 114 سورة، استماع أثناء القراءة، وترجمات إنجليزية وفرنسية وإسبانية حيث تتوفر. هو جزء من مواردنا الإسلامية المجانية وليس هوية الموقع الوحيدة.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/quran" className="rounded-full bg-white px-7 py-3 text-center text-sm font-black text-slate-950">افتح قارئ القرآن</Link>
              <Link href="/audio" className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-black text-white">استمع للتلاوات</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/6 p-6">
            <BookOpenCheck className="h-10 w-10 text-amber-300" />
            <p className="quran-text mt-5 text-center text-4xl leading-[2]">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="للمدربين" title="هل لديك معرفة تريد بيعها؟" centered={false}>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <p className="text-lg leading-9 text-slate-600">ستدعم منصتي المدربين وصناع المعرفة الذين يريدون نشر دورات وموارد ومسارات للجمهور المغربي والعربي، مع مراجعة جودة وتجربة بيع منظمة لاحقاً.</p>
          <Link href="/instructors" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white">
            <Users className="h-4 w-4" /> انضم كمدرب
          </Link>
        </div>
      </Section>

      <Section className="bg-slate-50" eyebrow="الاشتراك" title="تعلم مجاني، واشتراك للمحتوى المتقدم" centered={false}>
        <div className="grid gap-5 md:grid-cols-3">
          {["مجاني: مقالات، موارد، بعض الدورات، القرآن", "Pro: دورات متقدمة وموارد قابلة للتحميل - قريبًا", "Instructor: نشر وبيع الدورات والموارد - قريبًا"].map((plan) => (
            <div key={plan} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <GraduationCap className="h-7 w-7 text-blue-600" />
              <p className="mt-4 text-lg font-black leading-8 text-slate-950">{plan}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm font-bold text-slate-500">الدفع والاشتراكات قيد التحضير.</p>
      </Section>

      <Section eyebrow="الثقة" title="منصة مغربية بمعايير احترافية" centered={false}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span className="font-black text-slate-800">{point}</span>
            </div>
          ))}
        </div>
      </Section>

      <section className="page-shell pb-16">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white shadow-navy-glow sm:p-12">
          <h2 className="text-3xl font-black sm:text-5xl">ابدأ من دورة واحدة اليوم</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/courses" className="rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950">استكشف الدورات</Link>
            <Link href="/resources" className="rounded-full border border-white/20 px-7 py-4 text-sm font-black text-white">تصفح الموارد</Link>
            <Link href="/quran" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-black text-teal-200">افتح القرآن <ArrowLeft className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
