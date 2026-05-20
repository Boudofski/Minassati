"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  BookText,
  Brain,
  CalendarDays,
  ChevronDown,
  Gamepad2,
  Home,
  Lightbulb,
  LayoutDashboard,
  Mail,
  Menu,
  MessageCircleQuestion,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Stars,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, rootLocalizedPath, stripLocale, type Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

function isActive(pathname: string, href: string) {
  const cleanPathname = stripLocale(pathname);
  const cleanHref = stripLocale(href);
  return cleanHref === "/" ? cleanPathname === "/" : cleanPathname.startsWith(cleanHref);
}

export function Header() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = firstSegment && isLocale(firstSegment) ? firstSegment : "ar";
  const t = getDictionary(locale);
  const prefix = (href: string) => rootLocalizedPath(locale, href);
  const primaryNav = [
    { href: prefix("/"), label: t.nav.home, icon: Home },
    { href: prefix("/start"), label: t.nav.start, icon: Sparkles },
    { href: prefix("/learn"), label: t.nav.learn, icon: Brain },
    { href: prefix("/quran"), label: t.nav.quran, icon: BookOpenCheck },
    { href: prefix("/qa"), label: t.nav.qa, icon: MessageCircleQuestion },
    { href: "/activities", label: t.nav.activities, icon: Lightbulb },
    { href: prefix("/parents"), label: t.nav.parents, icon: LayoutDashboard },
  ];
  const moreItems = [
    { href: prefix("/articles"), label: t.nav.articles, icon: BookText },
    { href: "/stories", label: t.nav.stories, icon: Stars },
    { href: "/adhkar", label: t.nav.adhkar, icon: MoonStar },
    { href: "/challenges", label: t.nav.challenges, icon: CalendarDays },
    { href: "/badges", label: t.nav.badges, icon: Award },
    { href: "/games", label: t.nav.games, icon: Gamepad2 },
    { href: prefix("/methodology"), label: t.nav.methodology, icon: Brain },
    { href: prefix("/content-review"), label: t.nav.contentReview, icon: ShieldCheck },
    { href: prefix("/contact"), label: t.nav.contact, icon: Mail },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", onClickOutside);
    }
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [dropdownOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 shadow-sm shadow-slate-200/40 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href={prefix("/")}
          className="flex shrink-0 items-center gap-3"
          aria-label={`${t.site.name} - ${t.nav.home}`}
          onClick={() => setMobileOpen(false)}
        >
          <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/18">
            <BookOpenCheck className="h-6 w-6" aria-hidden="true" />
            <span className="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-amber-400 ring-4 ring-white" />
          </span>
          <span className="leading-tight">
            <strong className="block text-xl font-black text-slate-950">{t.site.name}</strong>
            <span className="text-xs font-bold text-slate-500">{t.site.tagline}</span>
          </span>
        </Link>

        {/* Desktop primary nav */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1 shadow-sm lg:flex"
          aria-label="التنقل الرئيسي"
        >
          {primaryNav.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-extrabold transition-all",
                  active
                    ? "bg-slate-950 text-white shadow-md shadow-slate-950/15"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop: "المزيد" dropdown + CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-extrabold transition-all",
                dropdownOpen
                  ? "bg-slate-950 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
              )}
            >
              {t.nav.more}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  dropdownOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/12"
                >
                  <div className="p-1.5">
                    {moreItems.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors",
                            active
                              ? "bg-slate-950 text-white"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-950",
                          )}
                        >
                          <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href={locale === "ar" ? "/family-dashboard" : prefix("/parents")}
            className="rounded-full bg-gradient-to-l from-blue-600 to-teal-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
          >
            {t.nav.dashboard}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50 lg:hidden"
          aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-slate-100 bg-white shadow-xl shadow-slate-900/8 lg:hidden"
          >
            <div className="page-shell space-y-4 py-4">
              {/* Primary links */}
              <div className="space-y-1">
                {primaryNav.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-base font-extrabold transition-colors",
                        active
                          ? "bg-slate-950 text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                      )}
                    >
                      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* More section */}
              <div className="border-t border-slate-100 pt-3">
                <p className="px-4 pb-2 text-xs font-black uppercase tracking-wider text-slate-400">
                  {t.nav.explore}
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {moreItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors",
                          active
                            ? "bg-slate-950 text-white"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-slate-100 pb-1 pt-3">
                <Link
                  href="/family-dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-blue-600 to-teal-500 px-5 py-3.5 text-base font-black text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90"
                >
                  <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
                  {t.nav.dashboard}
                </Link>
                <div className="mt-3">
                  <LanguageSwitcher compact />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
