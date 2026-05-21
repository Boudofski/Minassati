import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { courses } from "@/data/courses";
import { learningPaths } from "@/data/learning-paths";
import { resources } from "@/data/resources";
import { getReciters } from "@/lib/mp3quran-api";
import { site } from "@/lib/site";
import { locales, localizedPath } from "@/i18n/config";

function entry(route: string, priority = 0.7) {
  return { url: `${site.url}${route}`, lastModified: new Date(), priority };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { reciters } = await getReciters();
  const staticRoutes = [
    "",
    "/courses",
    "/paths",
    "/articles",
    "/quran",
    "/audio",
    "/resources",
    "/pricing",
    "/instructors",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/help",
    "/student-dashboard-preview",
    "/creator-preview",
    "/islamic-kids",
  ];

  const localizedCore = ["", "/articles", "/quran", "/audio", "/privacy", "/contact"];
  const routes = [
    ...staticRoutes.map((route) => entry(route, route === "" ? 1 : 0.8)),
    ...locales.flatMap((locale) => localizedCore.map((route) => entry(localizedPath(locale, route || "/"), locale === "ar" ? 0.85 : 0.65))),
    ...courses.map((course) => entry(`/courses/${course.slug}`, course.featured ? 0.85 : 0.75)),
    ...learningPaths.map((path) => entry(`/paths/${path.slug}`, path.featured ? 0.85 : 0.75)),
    ...resources.map((resource) => entry(`/resources/${resource.slug}`, resource.free ? 0.75 : 0.65)),
    ...articles.map((article) => ({ url: `${site.url}/articles/${article.slug}`, lastModified: new Date(article.updatedAt), priority: 0.75 })),
    ...Array.from({ length: 114 }, (_, index) => entry(`/quran/${index + 1}`, 0.65)),
    ...locales.flatMap((locale) => Array.from({ length: 114 }, (_, index) => entry(localizedPath(locale, `/quran/${index + 1}`), 0.55))),
    ...reciters.slice(0, 24).map((reciter) => entry(`/audio/${reciter.id}`, 0.55)),
    ...locales.flatMap((locale) => reciters.slice(0, 24).map((reciter) => entry(localizedPath(locale, `/audio/${reciter.id}`), 0.45))),
  ];

  const seen = new Set<string>();
  return routes.filter((route) => {
    if (seen.has(route.url)) return false;
    seen.add(route.url);
    return true;
  });
}
