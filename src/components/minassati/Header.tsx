"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, BookText, CalendarDays, ChevronDown, HelpCircle, Globe2, Home, Mail, Menu, Newspaper, School, ShieldCheck, UserCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const primaryNav = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/schools", label: "المدارس", icon: School },
  { href: "/opportunities", label: "الفرص", icon: Globe2 },
  { href: "/guidance-request", label: "التوجيه", icon: UserCheck },
  { href: "/calendar", label: "التقويم", icon: CalendarDays },
  { href: "/articles", label: "المقالات", icon: Newspaper },
];

const moreItems = [
  { href: "/after-bac", label: "بعد الباك", icon: School },
  { href: "/faq", label: "النصائح والأسئلة", icon: HelpCircle },
  { href: "/about", label: "من نحن", icon: BookText },
  { href: "/contact", label: "تواصل معنا", icon: Mail },
  { href: "/privacy", label: "الخصوصية", icon: ShieldCheck },
  { href: "/terms", label: "الشروط", icon: BookText },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
    }
    if (dropdownOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [dropdownOpen]);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
      {/* Single-row shell — desktop nav only at xl+ (≥1280px), drawer at <1280px */}
      <div className="page-shell flex h-14 items-center justify-between gap-3">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 max-sm:hidden" aria-label="منصتي">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-emerald-800 text-white">
            <BookOpenCheck className="h-4 w-4" />
          </span>
          <span className="whitespace-nowrap leading-tight">
            <strong className="block text-base font-black text-slate-950">منصتي</strong>
            <span className="hidden text-[11px] font-bold text-slate-500 min-[1440px]:block">دليلك بعد الباك</span>
          </span>
        </Link>

        {/* Desktop nav — only visible at xl (1280px+) */}
        <nav
          className="hidden shrink-0 items-center gap-px rounded-full border border-slate-200 bg-white p-0.5 shadow-sm xl:flex"
          aria-label="التنقل الرئيسي"
        >
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex h-8 shrink-0 items-center whitespace-nowrap rounded-full px-3 text-sm font-extrabold leading-none transition",
                  active
                    ? "bg-emerald-800 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions — only visible at xl (1280px+) */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          {/* More dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className={cn(
                "inline-flex h-8 shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-3 text-sm font-extrabold leading-none transition",
                dropdownOpen
                  ? "bg-emerald-800 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              المزيد
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", dropdownOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.12 }}
                  className="absolute left-0 top-full z-[60] mt-1.5 w-44 rounded-xl border border-slate-200 bg-white p-1 shadow-lg ring-1 ring-black/5"
                >
                  {moreItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-bold leading-none text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-slate-400" />
                        <span className="whitespace-nowrap">{item.label}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <Link
            href="/guidance-request"
            className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-red-700 px-4 text-sm font-black leading-none text-white hover:bg-red-800"
          >
            ابدأ التقييم
          </Link>
        </div>

        {/* Mobile/tablet hamburger — visible below xl (< 1280px) */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 xl:hidden"
          aria-label="القائمة"
        >
          {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
        </button>
      </div>

      {/* Mobile/tablet drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="border-t border-slate-100 bg-white shadow-xl xl:hidden"
          >
            <div className="page-shell grid gap-1.5 py-3 sm:grid-cols-2">
              {[...primaryNav, ...moreItems].map((item) => {
                const Icon = item.icon;
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-extrabold",
                      active ? "bg-emerald-800 text-white" : "text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <Link
                href="/guidance-request"
                className="flex items-center justify-center rounded-full bg-red-700 px-5 py-3 text-sm font-black text-white sm:col-span-2"
              >
                ابدأ التقييم
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
