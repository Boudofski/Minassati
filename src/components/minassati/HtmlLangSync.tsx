"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isLocale, localeDirections, type Locale } from "@/i18n/config";

export function HtmlLangSync() {
  const pathname = usePathname() || "/";
  useEffect(() => {
    const first = pathname.split("/").filter(Boolean)[0];
    const locale: Locale = first && isLocale(first) ? first : "ar";
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirections[locale];
  }, [pathname]);
  return null;
}
