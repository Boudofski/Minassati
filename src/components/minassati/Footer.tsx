"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, Facebook, Instagram, Mail, ShieldCheck, Sparkles, Youtube } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, rootLocalizedPath, type Locale } from "@/i18n/config";

export function Footer() {
  const pathname = usePathname() || "/";
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = firstSegment && isLocale(firstSegment) ? firstSegment : "ar";
  const t = getDictionary(locale);
  const prefix = (href: string) => rootLocalizedPath(locale, href);
  const columns = [
    {
      title: t.nav.learn,
      links: [
        { href: prefix("/learn"), label: t.nav.learn },
        { href: prefix("/quran"), label: t.nav.quran },
        { href: prefix("/audio"), label: t.pages.audio.title },
        { href: prefix("/qa"), label: t.nav.qa },
        { href: prefix("/articles"), label: t.nav.articles },
        { href: prefix("/methodology"), label: t.nav.methodology },
        { href: prefix("/content-review"), label: t.nav.contentReview },
      ],
    },
    {
      title: t.nav.activities,
      links: [
        { href: "/kids-zone", label: t.nav.games },
        { href: "/stories", label: t.nav.stories },
        { href: "/badges", label: t.nav.badges },
        { href: "/activities", label: t.nav.activities },
      ],
    },
    {
      title: t.nav.parents,
      links: [
        { href: "/family-dashboard", label: t.nav.dashboard },
        { href: "/challenges", label: t.nav.challenges },
        { href: "/adhkar", label: t.nav.adhkar },
        { href: prefix("/privacy"), label: t.pages.privacy.title },
      ],
    },
  ];
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 islamic-bg-white opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-teal-300/70 to-transparent" />

      <div className="page-shell relative py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Link href={prefix("/")} className="inline-flex items-center gap-3" aria-label={t.site.name}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950">
                <BookOpenCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <strong className="block text-2xl font-black">{t.site.name}</strong>
                <span className="text-sm font-bold text-teal-300">Minassati</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xl text-pretty text-sm leading-8 text-slate-300">
              {t.footer.description}
            </p>
            <div className="mt-5 max-w-xl">
              <LanguageSwitcher compact />
            </div>

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
              <h2 className="font-black">{t.footer.trustTitle}</h2>
              <p className="mt-1 text-sm leading-7 text-slate-400">{t.footer.trustText}</p>
            </div>
          </div>
          <form className="flex flex-col gap-2 sm:flex-row" aria-label={t.footer.newsletter}>
            <label className="sr-only" htmlFor="newsletter-email">{t.footer.email}</label>
            <input id="newsletter-email" type="email" placeholder={t.footer.email} className="h-12 rounded-full border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-teal-300" />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-slate-950 transition hover:bg-teal-100" type="submit">
              <Mail className="h-4 w-4" />
              {t.footer.subscribe}
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>{t.footer.rights}</span>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>{t.home.eyebrow}</span>
          </div>
          <div className="flex items-center gap-2" aria-label={t.footer.socialLinks}>
            {[Instagram, Youtube, Facebook].map((Icon, index) => (
              <Link key={index} href={prefix("/contact")} className="grid h-9 w-9 place-items-center rounded-full bg-white/8 text-slate-300 transition hover:bg-white hover:text-slate-950" aria-label={t.footer.contactAria}>
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
