"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2 } from "lucide-react";
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

function getTarget(locale: Locale, pathname: string) {
  const clean = stripLocale(pathname);
  if (/^\/quran\/\d+$/.test(clean)) return localizedPath(locale, clean);
  if (implementedRoots.has(clean)) return localizedPath(locale, clean);
  return locale === "ar" ? "/ar" : `/${locale}`;
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname() || "/";
  const activeLocale = (pathname.split("/").filter(Boolean)[0] as Locale | undefined) || "ar";

  return (
    <div className={cn("flex items-center gap-1 rounded-full border border-slate-200 bg-white/85 p-1 shadow-sm", compact && "w-full justify-center rounded-2xl")}>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-50 text-slate-600" aria-hidden="true">
        <Globe2 className="h-4 w-4" />
      </span>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getTarget(locale, pathname)}
          hrefLang={locale}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-black transition",
            activeLocale === locale || (locale === "ar" && !locales.includes(activeLocale))
              ? "bg-slate-950 text-white"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
          )}
        >
          {compact ? locale.toUpperCase() : localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}
