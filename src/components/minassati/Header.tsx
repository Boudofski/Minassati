"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, BookText, ChevronDown, GraduationCap, HelpCircle, Home, Layers, Mail, Menu, Newspaper, PackageOpen, ShieldCheck, Tag, Users, X } from "lucide-react";
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
    courses: "الدورات",
    paths: "المسارات",
    articles: "المقالات",
    quran: "القرآن",
    resources: "الموارد",
    pricing: "الاشتراك",
    instructors: "للمدربين",
    more: "المزيد",
    about: "من نحن",
    contact: "تواصل معنا",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    help: "مركز المساعدة",
    kids: "الأطفال",
    cta: "ابدأ التعلم",
    tagline: "تعلم، دورات، وموارد رقمية",
    menu: "القائمة",
    aria: "التنقل الرئيسي",
  },
  en: {
    home: "Home",
    courses: "Courses",
    paths: "Paths",
    articles: "Articles",
    quran: "Quran",
    resources: "Resources",
    pricing: "Pricing",
    instructors: "Instructors",
    more: "More",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    help: "Help Center",
    kids: "Islamic Kids",
    cta: "Start Learning",
    tagline: "Courses, paths, and digital resources",
    menu: "Menu",
    aria: "Primary navigation",
  },
  fr: {
    home: "Accueil",
    courses: "Cours",
    paths: "Parcours",
    articles: "Articles",
    quran: "Coran",
    resources: "Ressources",
    pricing: "Abonnement",
    instructors: "Formateurs",
    more: "Plus",
    about: "À propos",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    help: "Aide",
    kids: "Enfants",
    cta: "Commencer",
    tagline: "Cours, parcours et ressources numériques",
    menu: "Menu",
    aria: "Navigation principale",
  },
  es: {
    home: "Inicio",
    courses: "Cursos",
    paths: "Rutas",
    articles: "Artículos",
    quran: "Corán",
    resources: "Recursos",
    pricing: "Suscripción",
    instructors: "Instructores",
    more: "Más",
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    help: "Ayuda",
    kids: "Niños",
    cta: "Empezar",
    tagline: "Cursos, rutas y recursos digitales",
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
    { href: "/courses", label: l.courses, icon: GraduationCap },
    { href: "/paths", label: l.paths, icon: Layers },
    { href: "/articles", label: l.articles, icon: Newspaper },
    { href: "/quran", label: l.quran, icon: BookOpenCheck },
    { href: "/resources", label: l.resources, icon: PackageOpen },
    { href: "/pricing", label: l.pricing, icon: Tag },
    { href: "/instructors", label: l.instructors, icon: Users },
  ];
  const moreItems = [
    { href: "/about", label: l.about, icon: BookText },
    { href: "/contact", label: l.contact, icon: Mail },
    { href: "/privacy", label: l.privacy, icon: ShieldCheck },
    { href: "/terms", label: l.terms, icon: BookText },
    { href: "/help", label: l.help, icon: HelpCircle },
    { href: "/islamic-kids", label: l.kids, icon: BookOpenCheck },
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
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <Link href={prefix("/")} className="flex shrink-0 items-center gap-3" aria-label="منصتي">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white">
            <BookOpenCheck className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <strong className="block text-xl font-black text-slate-950">منصتي</strong>
            <span className="text-xs font-bold text-slate-500">{l.tagline}</span>
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-0.5 rounded-full border border-slate-200 bg-white p-1 shadow-sm xl:flex" aria-label={l.aria}>
          {primaryNav.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-extrabold transition", active ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950")}>
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen((v) => !v)} className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-extrabold", dropdownOpen ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100")}>
              {l.more}<ChevronDown className={cn("h-4 w-4 transition", dropdownOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  {moreItems.map((item) => {
                    const Icon = item.icon;
                    return <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"><Icon className="h-4 w-4" />{item.label}</Link>;
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/courses" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white">{l.cta}</Link>
          <LanguageSwitcher />
        </div>

        <button onClick={() => setMobileOpen((v) => !v)} className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-800 xl:hidden" aria-label={l.menu}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-slate-100 bg-white shadow-xl xl:hidden">
            <div className="page-shell grid gap-2 py-4 sm:grid-cols-2">
              {[...primaryNav, ...moreItems].map((item) => {
                const Icon = item.icon;
                const active = isActive(pathname, item.href);
                return <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-extrabold", active ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-slate-100")}><Icon className="h-5 w-5" />{item.label}</Link>;
              })}
              <div className="sm:col-span-2"><LanguageSwitcher align="start" className="w-full [&>button]:w-full [&>button]:justify-center" /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
