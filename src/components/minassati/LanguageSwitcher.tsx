"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe2 } from "lucide-react";
import { localeNames, locales, localizedPath, stripLocale, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const implementedRoots = new Set([
  "/",
  "/start",
  "/daily",
  "/learn",
  "/qa",
  "/quran",
  "/audio",
  "/articles",
  "/parents",
  "/methodology",
  "/content-review",
  "/privacy",
  "/contact",
]);

function getActiveLocale(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0] as Locale | undefined;
  return first && locales.includes(first) ? first : "ar";
}

function getTarget(locale: Locale, pathname: string) {
  const clean = stripLocale(pathname);
  if (/^\/quran\/\d+$/.test(clean)) return localizedPath(locale, clean);
  if (implementedRoots.has(clean)) return localizedPath(locale, clean);
  return locale === "ar" ? "/ar" : `/${locale}`;
}

export function LanguageSwitcher({ className, align = "end" }: { className?: string; align?: "start" | "end" }) {
  const pathname = usePathname() || "/";
  const activeLocale = getActiveLocale(pathname);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", onClickOutside);
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative inline-block text-start", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex h-10 max-w-[14rem] items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-black text-slate-800 shadow-sm transition hover:border-blue-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
      >
        <Globe2 className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
        <span className="truncate">{localeNames[activeLocale]}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 shrink-0 text-slate-500 transition", open && "rotate-180")} aria-hidden="true" />
      </button>

      {open ? (
        <div
          role="menu"
          className={cn(
            "absolute top-full z-50 mt-2 w-56 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-950/12",
            align === "start" ? "start-0" : "end-0",
          )}
        >
          {locales.map((locale) => (
            <Link
              key={locale}
              href={getTarget(locale, pathname)}
              hrefLang={locale}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold transition",
                activeLocale === locale ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-slate-50 hover:text-slate-950",
              )}
            >
              <span>{localeNames[locale]}</span>
              <span className={cn("h-2 w-2 rounded-full", activeLocale === locale ? "bg-teal-300" : "bg-transparent")} />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
