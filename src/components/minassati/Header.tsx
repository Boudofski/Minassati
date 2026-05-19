"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  Brain,
  Gamepad2,
  Headphones,
  Home,
  LayoutDashboard,
  Menu,
  MessageCircleQuestion,
  MoonStar,
  Sparkles,
  Stars,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const primaryNav = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/learn", label: "التعلم", icon: Brain },
  { href: "/qa", label: "الأسئلة", icon: MessageCircleQuestion },
  { href: "/quran", label: "القرآن", icon: BookOpenCheck },
  { href: "/kids-zone", label: "منطقة الطفل", icon: Sparkles },
];

const megaSections = [
  {
    title: "التعلم اليومي",
    items: [
      { href: "/stories", label: "قصص الأنبياء والصحابة", icon: Stars },
      { href: "/adhkar", label: "الأذكار اليومية", icon: MoonStar },
      { href: "/challenges", label: "التحديات والسلاسل", icon: Award },
    ],
  },
  {
    title: "التجربة التفاعلية",
    items: [
      { href: "/games", label: "ألعاب إسلامية", icon: Gamepad2 },
      { href: "/audio", label: "الاستماع للقرآن", icon: Headphones },
      { href: "/family-dashboard", label: "منطقة الوالدين", icon: LayoutDashboard },
    ],
  },
];

const allMobile = [
  ...primaryNav,
  ...megaSections.flatMap((section) => section.items),
  { href: "/about", label: "عن منصتي", icon: BookOpenCheck },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/78 shadow-sm shadow-slate-200/40 backdrop-blur-2xl">
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="منصتي - الصفحة الرئيسية" onClick={() => setOpen(false)}>
          <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/18">
            <BookOpenCheck className="h-6 w-6" aria-hidden="true" />
            <span className="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-amber-400 ring-4 ring-white" />
          </span>
          <span className="leading-tight">
            <strong className="block text-xl font-black text-slate-950">منصتي</strong>
            <span className="text-xs font-bold text-slate-500">تعليم إسلامي ذكي للأطفال</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/72 p-1 shadow-sm backdrop-blur-xl lg:flex" aria-label="التنقل الرئيسي">
          {primaryNav.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-extrabold transition-all",
                  active ? "bg-slate-950 text-white shadow-md shadow-slate-950/15" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="group relative">
            <button className="rounded-full px-4 py-2.5 text-sm font-extrabold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950" aria-haspopup="true">
              المزيد
            </button>
            <div className="invisible absolute left-0 top-full w-[36rem] translate-y-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              <div className="grid gap-4 rounded-[2rem] border border-white/80 bg-white/92 p-5 shadow-2xl shadow-slate-900/12 backdrop-blur-2xl md:grid-cols-2">
                {megaSections.map((section) => (
                  <div key={section.title}>
                    <p className="px-3 pb-2 text-xs font-black uppercase tracking-wider text-slate-400">{section.title}</p>
                    <div className="space-y-1">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl p-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
                            <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-slate-700">
                              <Icon className="h-4 w-4" />
                            </span>
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link href="/family-dashboard" className="rounded-full bg-gradient-to-l from-blue-600 to-teal-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5">
            لوحة الأسرة
          </Link>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50 lg:hidden"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-slate-100 bg-white/96 shadow-xl shadow-slate-900/8 backdrop-blur-xl lg:hidden"
          >
            <nav className="page-shell grid gap-2 py-4" aria-label="القائمة المحمولة">
              {allMobile.map((item) => {
                const Icon = item.icon;
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-extrabold transition",
                      active ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
