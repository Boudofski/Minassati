"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, Mail } from "lucide-react";
import { isLocale, rootLocalizedPath, type Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const pathname = usePathname() || "/";
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = firstSegment && isLocale(firstSegment) ? firstSegment : "ar";
  const prefix = (href: string) => rootLocalizedPath(locale, href);
  const columns = [
    { title: "التعلم", links: [["/courses", "الدورات"], ["/paths", "المسارات"], ["/articles", "المقالات"], ["/resources", "الموارد"]] },
    { title: "القرآن", links: [["/quran", "قارئ القرآن"], ["/audio", "الصوتيات"], ["/islamic-kids", "محتوى الأطفال"], ["/adhkar", "الأذكار"]] },
    { title: "المنصة", links: [["/pricing", "الاشتراك"], ["/instructors", "للمدربين"], ["/student-dashboard-preview", "لوحة المتعلم"], ["/creator-preview", "لوحة المدرب"]] },
    { title: "الشركة", links: [["/about", "من نحن"], ["/contact", "تواصل معنا"], ["/privacy", "سياسة الخصوصية"], ["/terms", "شروط الاستخدام"], ["/help", "مركز المساعدة"]] },
  ];
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 islamic-bg-white opacity-[0.04]" />
      <div className="page-shell relative py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <Link href={prefix("/")} className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950"><BookOpenCheck className="h-6 w-6" /></span>
              <span><strong className="block text-2xl font-black">منصتي</strong><span className="text-sm font-bold text-teal-300">منصة مغربية للتعلم والموارد الرقمية</span></span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300">
              دورات ومسارات وموارد عملية للمغاربة، مع قارئ قرآن واستماع مجاني كأداة إسلامية موثوقة داخل المنصة.
            </p>
            <div className="mt-5"><LanguageSwitcher align="start" /></div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-4 text-sm font-black text-white">{column.title}</h2>
                <nav className="space-y-3" aria-label={column.title}>
                  {column.links.map(([href, label]) => <Link key={href} href={href} className="block text-sm font-semibold text-slate-400 hover:text-teal-200">{label}</Link>)}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/6 p-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-black">النشرة التعليمية</h2>
            <p className="mt-1 text-sm leading-7 text-slate-400">تحديثات حول الدورات والموارد والاشتراكات القادمة.</p>
          </div>
          <form className="flex flex-col gap-2 sm:flex-row" aria-label="النشرة البريدية">
            <input type="email" placeholder="البريد الإلكتروني" className="h-12 rounded-full border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-teal-300" />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-slate-950" type="submit"><Mail className="h-4 w-4" />اشترك</button>
          </form>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs font-semibold text-slate-500">© 2026 منصتي - minassati.ma</div>
      </div>
    </footer>
  );
}
