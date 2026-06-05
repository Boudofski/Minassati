import { localizedPath, type Locale } from "@/i18n/config";
import { site } from "./site";

export function localizedAlternates(path: string, locale: Locale) {
  return {
    canonical: `${site.url}${localizedPath(locale, path)}`,
  };
}
