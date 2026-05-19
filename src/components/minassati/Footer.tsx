import Link from "next/link";
import { BookOpenCheck, Facebook, Instagram, Mail, ShieldCheck, Sparkles, Youtube } from "lucide-react";

const columns = [
  {
    title: "المنصة",
    links: [
      { href: "/learn", label: "مركز التعلم" },
      { href: "/quran", label: "القرآن الكريم" },
      { href: "/audio", label: "التلاوات" },
      { href: "/qa", label: "الأسئلة والأجوبة" },
      { href: "/articles", label: "المقالات" },
      { href: "/methodology", label: "المنهجية" },
      { href: "/content-review", label: "مراجعة المحتوى" },
    ],
  },
  {
    title: "للأطفال",
    links: [
      { href: "/kids-zone", label: "منطقة الطفل" },
      { href: "/games", label: "الألعاب" },
      { href: "/stories", label: "القصص" },
      { href: "/badges", label: "الشارات" },
    ],
  },
  {
    title: "للأسرة",
    links: [
      { href: "/family-dashboard", label: "لوحة الأسرة" },
      { href: "/challenges", label: "التحديات" },
      { href: "/adhkar", label: "الأذكار اليومية" },
      { href: "/privacy", label: "الخصوصية" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 islamic-bg-white opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-teal-300/70 to-transparent" />

      <div className="page-shell relative py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="منصتي">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950">
                <BookOpenCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <strong className="block text-2xl font-black">منصتي</strong>
                <span className="text-sm font-bold text-teal-300">Minassati</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xl text-pretty text-sm leading-8 text-slate-300">
              منصة تعليمية إسلامية عربية تبني علاقة الطفل بالقرآن، الأخلاق، السيرة، والعبادات عبر محتوى قصير، آمن، ودافئ للأسرة.
            </p>

            <blockquote className="mt-7 max-w-xl rounded-[2rem] border border-white/10 bg-white/6 p-5 text-sm leading-8 text-slate-200 backdrop-blur">
              <span>وَقُل رَّبِّ زِدْنِي عِلْمًا</span>
              <span className="mt-2 block text-xs font-bold text-slate-400">دعاء يلخص روح منصتي: علم نافع، قلب مطمئن، وخطوة صغيرة كل يوم.</span>
            </blockquote>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-4 text-sm font-black text-white">{column.title}</h2>
                <nav className="space-y-3" aria-label={column.title}>
                  {column.links.map((link) => (
                    <Link key={link.href} href={link.href} className="block text-sm font-semibold text-slate-400 transition hover:text-teal-200">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/6 p-5 backdrop-blur md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-teal-400/15 text-teal-200">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-black">تجربة موثوقة للأسرة</h2>
              <p className="mt-1 text-sm leading-7 text-slate-400">محتوى عربي واضح، بلا إعلانات مزعجة داخل مسار الطفل، وبنية جاهزة للتوسع بمراجعة علمية وتربوية.</p>
            </div>
          </div>
          <form className="flex flex-col gap-2 sm:flex-row" aria-label="النشرة البريدية">
            <label className="sr-only" htmlFor="newsletter-email">البريد الإلكتروني</label>
            <input id="newsletter-email" type="email" placeholder="بريد ولي الأمر" className="h-12 rounded-full border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-teal-300" />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-slate-950 transition hover:bg-teal-100" type="submit">
              <Mail className="h-4 w-4" />
              اشترك
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 منصتي. جميع الحقوق محفوظة.</span>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>تعلم هادئ، يومًا بعد يوم</span>
          </div>
          <div className="flex items-center gap-2" aria-label="روابط اجتماعية">
            {[Instagram, Youtube, Facebook].map((Icon, index) => (
              <Link key={index} href="/contact" className="grid h-9 w-9 place-items-center rounded-full bg-white/8 text-slate-300 transition hover:bg-white hover:text-slate-950" aria-label="تواصل مع منصتي">
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
