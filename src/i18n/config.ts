export const locales = ["ar", "en", "fr", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
  fr: "Français",
  es: "Español",
};

export const localeDirections: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
  fr: "ltr",
  es: "ltr",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    return `/${parts.slice(1).join("/")}` || "/";
  }
  return pathname || "/";
}

export function localizedPath(locale: Locale, pathname: string) {
  const cleanPath = stripLocale(pathname);
  if (locale === defaultLocale) {
    return cleanPath === "/" ? "/ar" : `/ar${cleanPath}`;
  }
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export function rootLocalizedPath(locale: Locale, path = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean === "/" ? "/ar" : `/ar${clean}`;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}
