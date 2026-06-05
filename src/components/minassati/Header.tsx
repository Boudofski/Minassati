"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, BookText, CalendarDays, ChevronDown, HelpCircle, Globe2, Home, Mail, Menu, Newspaper, School, ShieldCheck, UserCheck, X } from "lucide-react";
import { isLocale, rootLocalizedPath, stripLocale, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

function isActive(pathname: string, href: string) {
  const cleanPathname = stripLocale(pathname);
  const cleanHref = stripLocale(href);
  return cleanHref === "/" ? cleanPathname === "/" : cleanPathname.startsWith(cleanHref);
}

const labels: Record<Locale, Record<string, string>> = {
  ar: {
    home: "الرئيسية",
    schools: "المدارس المغربية",
    opportunities: "الفرص الأجنبية",
    guidance: "التوجيه الشخصي",
    calendar: "التقويم",
    faq: "النصائح والأسئلة",
    articles: "المقالات",
    quran: "القرآن",
    more: "المزيد",
    about: "من نحن",
    contact: "تواصل معنا",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    help: "مركز المساعدة",
    cta: "ابدأ التقييم",
    tagline: "منصة التوجيه المدرسي المغربية",
    menu: "القائمة",
    aria: "التنقل الرئيسي",
  },
  en: {
    home: "Home",
    schools: "Moroccan Schools",
    opportunities: "Foreign Opportunities",
    guidance: "Personal Guidance",
    calendar: "Calendar",
    faq: "Tips & FAQ",
    articles: "Articles",
    quran: "Quran",
    more: "More",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    help: "Help Center",
    cta: "Start assessment",
    tagline: "Moroccan school guidance",
    menu: "Menu",
    aria: "Primary navigation",
  },
  fr: {
    home: "Accueil",
    schools: "Écoles marocaines",
    opportunities: "Opportunités étrangères",
    guidance: "Orientation personnelle",
    calendar: "Calendrier",
    faq: "Conseils & FAQ",
    articles: "Articles",
    quran: "Coran",
    more: "Plus",
    about: "À propos",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    help: "Aide",
    cta: "Commencer",
    tagline: "Orientation scolaire marocaine",
    menu: "Menu",
    aria: "Navigation principale",
  },
  es: {
    home: "Inicio",
    schools: "Escuelas marroquíes",
    opportunities: "Oportunidades extranjeras",
    guidance: "Orientación personal",
    calendar: "Calendario",
    faq: "Consejos y FAQ",
    articles: "Artículos",
    quran: "Corán",
    more: "Más",
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    help: "Ayuda",
    cta: "Empezar",
    tagline: "Orientación escolar marroquí",
    menu: "Menú",
    aria: "Navegación principal",
  },
};

export function Header() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = firstSegment && isLocale(firstSegment) ? firstSegment : "ar";
  const l = labels[locale];
  const prefix = (href: string) => rootLocalizedPath(locale, href);
  const primaryNav = [
    { href: prefix("/"), label: l.home, icon: Home },
    { href: "/schools", label: l.schools, icon: School },
    { href: "/opportunities", label: l.opportunities, icon: Globe2 },
    { href: "/guidance-request", label: l.guidance, icon: UserCheck },
    { href: "/calendar", label: l.calendar, icon: CalendarDays },
    { href: "/articles", label: l.articles, icon: Newspaper },
  ];
  const moreItems = [
    { href: "/faq", label: l.faq, icon: HelpCircle },
    { href: "/quran", label: l.quran, icon: BookOpenCheck },
    { href: "/about", label: l.about, icon: BookText },
    { href: "/contact", label: l.contact, icon: Mail },
    { href: "/privacy", label: l.privacy, icon: ShieldCheck },
    { href: "/terms", label: l.terms, icon: BookText },
  ];
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
      <div className="page-shell flex h-16 items-center justify-between gap-3">
        <Link href={prefix("/")} className="flex shrink-0 items-center gap-3" aria-label="منصتي">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-800 text-white">
            <BookOpenCheck className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <strong className="block text-lg font-black text-slate-950">منصتي</strong>
            <span className="text-xs font-bold text-slate-500">{l.tagline}</span>
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-0.5 rounded-full border border-slate-200 bg-white p-1 shadow-sm xl:flex" aria-label={l.aria}>
          {primaryNav.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-extrabold transition", active ? "bg-emerald-800 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950")}>
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen((v) => !v)} className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-extrabold", dropdownOpen ? "bg-emerald-800 text-white" : "text-slate-600 hover:bg-slate-100")}>
              {l.more}<ChevronDown className={cn("h-4 w-4 transition", dropdownOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} className="absolute left-0 top-full mt-3 w-52 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_18px_45px_-18px_rgba(15,23,42,0.35)] ring-1 ring-black/5">
                  {moreItems.map((item) => {
                    const Icon = item.icon;
                    return <Link key={item.href} href={item.href} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"><Icon className="h-4 w-4" />{item.label}</Link>;
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/guidance-request" className="rounded-full bg-red-700 px-4 py-2 text-sm font-black text-white hover:bg-red-800">{l.cta}</Link>
          <LanguageSwitcher />
        </div>

        <button onClick={() => setMobileOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 xl:hidden" aria-label={l.menu}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-slate-100 bg-white shadow-xl xl:hidden">
            <div className="page-shell grid gap-1.5 py-3 sm:grid-cols-2">
              {[...primaryNav, ...moreItems].map((item) => {
                const Icon = item.icon;
                const active = isActive(pathname, item.href);
                return <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-extrabold", active ? "bg-emerald-800 text-white" : "text-slate-700 hover:bg-slate-100")}><Icon className="h-5 w-5" />{item.label}</Link>;
              })}
              <div className="sm:col-span-2"><LanguageSwitcher align="start" className="w-full [&>button]:w-full [&>button]:justify-center" /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
