import { locales, localizedPath, type Locale } from "@/i18n/config";
import { site } from "./site";

export function localizedAlternates(path: string, locale: Locale) {
  const languages = Object.fromEntries(locales.map((item) => [item, `${site.url}${localizedPath(item, path)}`]));
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return {
    canonical: `${site.url}${localizedPath(locale, path)}`,
    languages: {
      ...languages,
      "x-default": `${site.url}${cleanPath}`,
    },
  };
}
