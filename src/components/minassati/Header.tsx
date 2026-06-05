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
    schools: "المدارس",
    opportunities: "الفرص",
    guidance: "التوجيه",
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
    schools: "Schools",
    opportunities: "Opportunities",
    guidance: "Guidance",
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
    schools: "Écoles",
    opportunities: "Opportunités",
    guidance: "Orientation",
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
    schools: "Escuelas",
    opportunities: "Oportunidades",
    guidance: "Orientación",
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
      <div className="page-shell flex h-14 max-sm:w-[calc(100vw-1.25rem)] max-sm:max-w-[calc(100vw-1.25rem)] items-center justify-between gap-2">
        <Link href={prefix("/")} className="flex min-w-0 shrink-0 items-center gap-2.5 max-sm:hidden" aria-label="منصتي">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-800 text-white">
            <BookOpenCheck className="h-5 w-5" />
          </span>
          <span className="min-w-0 whitespace-nowrap leading-tight">
            <strong className="block text-lg font-black text-slate-950">منصتي</strong>
            <span className="hidden text-xs font-bold text-slate-500 min-[1180px]:block">{l.tagline}</span>
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-0.5 rounded-full border border-slate-200 bg-white p-0.5 shadow-sm lg:flex" aria-label={l.aria}>
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={cn("inline-flex h-9 items-center whitespace-nowrap rounded-full px-3 text-[13px] font-extrabold leading-none transition xl:px-3.5 xl:text-sm", active ? "bg-emerald-800 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950")}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen((v) => !v)} className={cn("inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-[13px] font-extrabold leading-none transition", dropdownOpen ? "bg-emerald-800 text-white" : "text-slate-600 hover:bg-slate-100")}>
              {l.more}<ChevronDown className={cn("h-4 w-4 transition", dropdownOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} className="absolute left-0 top-full z-50 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-1 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.42)] ring-1 ring-black/5">
                  {moreItems.map((item) => {
                    const Icon = item.icon;
                    return <Link key={item.href} href={item.href} className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-bold leading-none text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"><Icon className="h-4 w-4 shrink-0" /><span className="whitespace-nowrap">{item.label}</span></Link>;
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/guidance-request" className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-red-700 px-3.5 text-[13px] font-black leading-none text-white hover:bg-red-800 xl:px-4 xl:text-sm">{l.cta}</Link>
          <LanguageSwitcher className="hidden min-[1180px]:inline-block" />
        </div>

        <button onClick={() => setMobileOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 max-sm:absolute max-sm:left-3 max-sm:top-2 lg:hidden" aria-label={l.menu}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-slate-100 bg-white shadow-xl lg:hidden">
            <div className="page-shell grid gap-1.5 py-3 sm:grid-cols-2">
              {[...primaryNav, ...moreItems].map((item) => {
                const Icon = item.icon;
                const active = isActive(pathname, item.href);
                return <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-extrabold", active ? "bg-emerald-800 text-white" : "text-slate-700 hover:bg-slate-100")}><Icon className="h-5 w-5 shrink-0" /><span>{item.label}</span></Link>;
              })}
              <Link href="/guidance-request" className="flex items-center justify-center rounded-full bg-red-700 px-5 py-3 text-sm font-black text-white sm:col-span-2">{l.cta}</Link>
              <div className="sm:col-span-2"><LanguageSwitcher align="start" className="w-full [&>button]:w-full [&>button]:justify-center" /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
