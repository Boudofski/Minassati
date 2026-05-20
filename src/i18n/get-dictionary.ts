import { ar } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";
import { es } from "./dictionaries/es";
import { defaultLocale, type Locale } from "./config";

export const dictionaries = { ar, en, fr, es };

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
