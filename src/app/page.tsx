import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, BookOpen, CalendarDays, CheckCircle2, Headphones, Heart, Lightbulb, MessageCircleQuestion, MoonStar, Play, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { ButtonLink } from "@/components/minassati/ButtonLink";
import { CategoryCard, QuestionCard } from "@/components/minassati/Cards";
import { IslamicPattern } from "@/components/minassati/IslamicPattern";
import { FadeUp } from "@/components/minassati/Motion";
import { Section } from "@/components/minassati/Section";
import { categories } from "@/data/categories";
import { lessons } from "@/data/lessons";
import { questions } from "@/data/questions";
import { dailyAdhkar, featuredPaths, platformStats, productAreas } from "@/data/platform";

export const metadata: Metadata = {
  title: "منصتي - تعليم إسلامي يومي للأطفال والأسرة",
  description: "منصتي تحول تعليم الإسلام للأطفال إلى عادة يومية دافئة: درس قصير، قرآن، سؤال، ذكر، نشاط، وتوجيه واضح للأهل.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "منصتي - تعليم إسلامي يومي للأطفال والأسرة",
    description: "مسارات وورد يومي وقرآن وأسئلة وأنشطة تجعل تعلم الإسلام عادة أسرية هادئة للأطفال من 6 إلى 12 سنة.",
  },
};

const faqs = [
  { q: "هل منصتي مناسبة للأطفال الصغار؟", a: "نعم، الدروس قصيرة ولغتها مبسطة، مع توجيه للأسرة في طريقة الشرح والحوار." },
  { q: "هل المحتوى موجه للآباء أيضاً؟", a: "كل درس يراعي دور الوالدين، ويقدم أنشطة عملية تساعد على تحويل المعرفة إلى عادة." },
  { q: "هل التجربة تعتمد على الحفظ فقط؟", a: "لا. منصتي تجمع بين الفهم، التطبيق، السؤال، القصة، والروتين اليومي." },
];

const ecosystem = [
  { href: "/daily", title: "درس اليوم", text: "بداية يومية جاهزة: درس، سؤال، آية، ذكر، ونشاط.", icon: CalendarDays },
  { href: "/quran", title: "القرآن", text: "قراءة عربية هادئة، ترجمة اختيارية، وروابط للتلاوة.", icon: BookOpen },
  { href: "/qa", title: "أسئلة الأطفال", text: "إجابات قصيرة دافئة تساعد الأهل على الحوار.", icon: MessageCircleQuestion },
  { href: "/activities", title: "أنشطة البيت", text: "أفكار بسيطة تحول الدرس إلى موقف وسلوك.", icon: Lightbulb },
  { href: "/quizzes", title: "مراجعة لطيفة", text: "اختبارات قصيرة بتغذية راجعة لا تخيف الطفل.", icon: Sparkles },
  { href: "/parents", title: "دليل الأهل", text: "منهجية و10 دقائق يومياً ودور الوالدين في التوجيه.", icon: ShieldCheck },
];

const journeySteps = [
  { title: "اختاروا البداية", text: "العمر والهدف يحددان أول مسار مناسب للطفل.", icon: Sparkles },
  { title: "تعلموا لدقائق", text: "درس قصير بلغة عربية مبسطة ومرتبطة بالبيت.", icon: BookOpen },
  { title: "حاوروا الطفل", text: "سؤال أو قصة أو اختبار صغير يثبت المعنى.", icon: MessageCircleQuestion },
  { title: "طبقوا اليوم", text: "نشاط أو ذكر أو خلق واحد يصبح عادة مرئية.", icon: Trophy },
];

const trustPillars = [
  { title: "منهجية منصتي", text: "تعلم صغير متكرر: فهم، سؤال، تطبيق، ثم مراجعة هادئة." },
  { title: "مراجعة المحتوى", text: "المحتوى منظم بلغة تعليمية محافظة، ويتجنب الخلافات والتعقيد غير المناسب للأطفال." },
  { title: "للأعمار 6-12", text: "العناوين والأنشطة والاختبارات مكتوبة لتناسب الطفل مع حضور ولي الأمر." },
  { title: "دور الأهل", text: "منصتي لا تستبدل الوالدين، بل تمنحهم أدوات حوار وتوجيه يومي." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 star-field opacity-70" />
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-blue-100/70 via-cyan-50/40 to-transparent" />
        <IslamicPattern className="absolute inset-0 -z-10 opacity-80" opacity={0.05} color="#0F172A" size={72} />
        <div className="page-shell grid min-h-[calc(100vh-5rem)] items-center gap-8 py-10 sm:gap-10 sm:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-18">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/82 px-4 py-2 text-sm font-black text-blue-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-amber-500" />
              عادة إيمانية يومية للأطفال والأسرة
            </div>
            <h1 className="text-balance mt-5 max-w-4xl text-4xl font-black leading-[1.12] text-slate-950 sm:text-6xl lg:text-7xl">
              علّم طفلك الإسلام بهدوء، حب، ووضوح كل يوم
            </h1>
            <p className="text-pretty mt-6 max-w-2xl text-lg leading-9 text-slate-600">
              كثير من الأسر تريد تعليماً إسلامياً بسيطاً لا يضغط الطفل ولا يترك الوالدين وحدهم. منصتي تجمع المسار، القرآن، السؤال، الذكر، والنشاط في تجربة واحدة دافئة.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/start" size="lg">ابدأ من هنا</ButtonLink>
              <ButtonLink href="/daily" variant="secondary" size="lg">درس اليوم</ButtonLink>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {platformStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white bg-white/76 p-4 text-center shadow-sm backdrop-blur">
                  <strong className="block text-2xl font-black text-slate-950">{stat.value}</strong>
                  <span className="mt-1 block text-xs font-bold text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.12} className="relative">
            <div className="aurora-panel reader-card relative overflow-hidden rounded-[2rem] border border-white p-4 shadow-2xl shadow-blue-200/50 sm:rounded-[2.25rem] sm:p-7">
              <IslamicPattern className="absolute inset-0 opacity-70" opacity={0.07} color="#3B82F6" size={66} />
              <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-amber-300/25 blur-2xl" />
              <div className="relative rounded-[1.5rem] bg-slate-950 p-5 text-white sm:rounded-[1.75rem] sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-teal-300">خطة 10 دقائق</p>
                    <h2 className="mt-2 text-3xl font-black">جلسة صغيرة، أثر يبقى</h2>
                    <p className="mt-3 max-w-md leading-8 text-slate-300">ابدأوا بدرس اليوم، اسألوا سؤالاً واحداً، ثم اختموا بذكر أو نشاط بسيط.</p>
                  </div>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
                    <MoonStar className="h-7 w-7 text-amber-300" />
                  </span>
                </div>
                <div className="mt-7 grid gap-3">
                  {["درس اليوم", "سؤال اليوم", "تطبيق صغير"].map((mission, index) => {
                    const Icon = [BookOpen, MessageCircleQuestion, Heart][index];
                    return (
                      <div key={mission} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-950 text-sm font-black">{index + 1}</span>
                        <div className="min-w-0 flex-1">
                          <p className="font-black">{mission}</p>
                          <p className="text-xs font-bold text-slate-400">{["فهم هادئ", "حوار عائلي", "عادة مرئية"][index]}</p>
                        </div>
                        <Icon className="h-5 w-5 text-teal-300" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Link href="/quran" className="rounded-[1.75rem] bg-white/86 p-5 shadow-sm transition hover:-translate-y-1">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <strong className="mt-4 block text-lg text-slate-950">قرآن تفاعلي</strong>
                  <span className="mt-1 block text-sm leading-6 text-slate-500">قراءة، استماع، حفظ</span>
                </Link>
                <Link href="/audio" className="rounded-[1.75rem] bg-white/86 p-5 shadow-sm transition hover:-translate-y-1">
                  <Headphones className="h-6 w-6 text-teal-600" />
                  <strong className="mt-4 block text-lg text-slate-950">مشغل هادئ</strong>
                  <span className="mt-1 block text-sm leading-6 text-slate-500">تلاوة قبل النوم</span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Section eyebrow="المشكلة" title="تعليم الدين في البيت لا يجب أن يكون ثقيلاً" description="الطفل يحتاج لغة بسيطة وتجربة مشجعة، والوالدان يحتاجان طريقاً واضحاً لا عشرات الروابط المتفرقة.">
        <div className="grid gap-5 lg:grid-cols-3">
          {["محتوى كثير بلا ترتيب يومي", "أسئلة الطفل تأتي فجأة ولا نجد جواباً مناسباً", "الحفظ والواجبات قد تطغى على الحب والفهم"].map((item) => (
            <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <MoonStar className="h-7 w-7 text-amber-500" />
              <h2 className="mt-4 text-xl font-black leading-8 text-slate-950">{item}</h2>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/70" eyebrow="الحل" title="منصتي تجعل التعلم رحلة يومية مترابطة" description="ليست مكتبة صفحات فقط؛ كل جزء يقود إلى جزء آخر: درس، سؤال، قرآن، نشاط، وتوجيه للأهل.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                <span className="absolute left-5 top-5 text-5xl font-black text-slate-100">{index + 1}</span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-lg">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{step.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="10 دقائق يومياً" title="روتين صغير يعود له الطفل غداً" description="الهدف ليس إنهاء كل المحتوى؛ الهدف بناء علاقة مستمرة وهادئة مع العلم والقرآن والخلق.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-navy-glow">
            <IslamicPattern className="absolute inset-0 opacity-40" opacity={0.12} color="#ffffff" size={74} />
            <div className="relative">
              <p className="text-sm font-black text-teal-300">خطة اليوم</p>
              <h2 className="mt-3 text-4xl font-black">درس اليوم ثم سؤال ثم تطبيق</h2>
              <p className="mt-4 leading-8 text-slate-300">إذا كان اليوم مزدحماً، اختاروا بطاقة واحدة فقط. منصتي مصممة للاستمرار، لا للضغط.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/daily" variant="gold">درس اليوم</ButtonLink>
                <ButtonLink href="/start" variant="secondary">ابدأ من هنا</ButtonLink>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {ecosystem.slice(0, 4).map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.href} href={feature.href} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
                  <Icon className="h-7 w-7 text-blue-600" />
                  <h3 className="mt-4 text-xl font-black text-slate-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{feature.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-blue-700">افتح <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-white/70" eyebrow="القرآن" title="تجربة قرآنية مصممة للهدوء والحفظ" description="واجهة للقراءة والاستماع والمراجعة، مع وضع الطفل ووضع قبل النوم ومسار حفظ تدريجي.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-navy-glow">
            <p className="text-sm font-black text-teal-300">سورة الفاتحة</p>
            <p className="quran-text-lg mt-5 text-white">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["تفسير مبسط", "تكرار للحفظ", "وضع النوم", "مفضلة"].map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-200">{item}</span>
              ))}
            </div>
            <Link href="/quran" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950">
              افتح تجربة القرآن <Play className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {productAreas.slice(0, 4).map((area) => {
              const Icon = area.icon;
              return (
                <Link key={area.href} href={area.href} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
                  <Icon className="h-6 w-6 text-blue-600" />
                  <h3 className="mt-4 text-xl font-black text-slate-950">{area.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{area.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      <Section eyebrow="منظومة واحدة" title="قرآن وأسئلة وأنشطة في سياق واحد" description="كل أداة في منصتي تخدم رحلة الطفل اليومية وتساعد الأهل على تحويل المعرفة إلى حوار وتطبيق.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.href} href={feature.href} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal-200">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-2xl font-black text-slate-950">{feature.title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{feature.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-teal-700">
                  انتقل الآن <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="الثقة" title="منهجية واضحة ودور أصيل للأهل" description="المحتوى تعليمي وإرشادي، مناسب للطفل، ويترك مساحة الوالدين في الشرح والتوجيه والمتابعة.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/8 p-6">
              <CheckCircle2 className="h-7 w-7 text-teal-300" />
              <h3 className="mt-4 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href="/parents" variant="secondary">افتح دليل الأهل</ButtonLink>
        </div>
      </Section>

      <Section eyebrow="مسارات مميزة" title="تعلم منظم يناسب عمر الطفل وإيقاع الأسرة" description="كل مسار مبني من دروس قصيرة، أسئلة، أنشطة عملية، وروابط داخلية تساعد الطفل على الفهم والتكرار.">
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredPaths.map((path) => {
            const Icon = path.icon;
            return (
              <Link key={path.href} href={path.href} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-hover-glow">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${path.tone} text-white shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-black text-slate-950">{path.title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{path.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700">
                  افتح المسار <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="bg-white/70" eyebrow="دعم الأهل" title="مصمم ليطمئن الوالدين قبل أن يدهش الأطفال">
        <div className="grid gap-5 md:grid-cols-3">
          {["لغة تربوية هادئة بلا تخويف", "محتوى منظم ومترابط قابل للمراجعة", "تجربة آمنة بلا ازدحام بصري"].map((item) => (
            <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <CheckCircle2 className="h-7 w-7 text-teal-600" />
              <h3 className="mt-4 text-xl font-black text-slate-950">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/70" eyebrow="التصنيفات" title="كل أبواب التعلم في خريطة واحدة">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => <CategoryCard key={category.slug} category={category} />)}
        </div>
      </Section>

      <Section eyebrow="الأذكار اليومية" title="روتين إيماني صغير يبني الطمأنينة">
        <div className="grid gap-5 lg:grid-cols-3">
          {dailyAdhkar.map((dhikr) => (
            <div key={dhikr.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <Heart className="h-6 w-6 text-rose-500" />
              <h3 className="mt-4 text-xl font-black text-slate-950">{dhikr.title}</h3>
              <p className="quran-text mt-3 text-slate-900">{dhikr.text}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{dhikr.guidance}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/70" eyebrow="أسئلة مختارة" title="إجابات يطلبها الأطفال ويسأل عنها الآباء">
        <div className="grid gap-5 lg:grid-cols-3">
          {questions.slice(0, 3).map((question) => <QuestionCard key={question.slug} question={question} />)}
        </div>
      </Section>

      <Section eyebrow="دروس رائجة" title="ابدأ بمحتوى حقيقي من مكتبة منصتي">
        <div className="grid gap-4 md:grid-cols-2">
          {lessons.slice(0, 6).map((lesson) => (
            <Link key={`${lesson.category}-${lesson.slug}`} href={`/learn/${lesson.category}/${lesson.slug}`} className="flex items-start gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-teal-200">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                <BookOpen className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-lg font-black text-slate-950">{lesson.title}</strong>
                <span className="mt-1 block text-sm leading-7 text-slate-600">{lesson.summary}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="الأسئلة الشائعة" title="وضوح قبل البداية" description="منصتي تبني تجربة تعليمية للأسرة لا مجرد صفحات محتوى.">
        <div className="grid gap-4 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-[2rem] border border-white/10 bg-white/8 p-6">
              <h3 className="text-xl font-black text-white">{faq.q}</h3>
              <p className="mt-3 leading-8 text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] bg-white p-7 text-slate-950 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-black">ابدأوا بخطة واضحة لا بقائمة طويلة</h3>
            <p className="mt-2 text-slate-600">اختاروا عمر الطفل والهدف، ثم ابدأوا بأول درس مناسب.</p>
          </div>
          <ButtonLink href="/start" className="mt-5 md:mt-0">ابدأ من هنا</ButtonLink>
        </div>
      </Section>
    </>
  );
}
