import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { getReciters } from "@/lib/mp3quran-api";
import { site } from "@/lib/site";

function entry(route: string, priority = 0.7) {
  return { url: `${site.url}${route}`, lastModified: new Date(), priority };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { reciters } = await getReciters();
  const staticRoutes = [
    "",
    "/schools",
    "/opportunities",
    "/after-bac",
    "/guidance-request",
    "/calendar",
    "/faq",
    "/articles",
    "/quran",
    "/audio",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const routes = [
    ...staticRoutes.map((route) => entry(route, route === "" ? 1 : 0.8)),
    ...articles.map((article) => ({ url: `${site.url}/articles/${article.slug}`, lastModified: new Date(article.updatedAt), priority: 0.75 })),
    ...Array.from({ length: 114 }, (_, index) => entry(`/quran/${index + 1}`, 0.65)),
    ...reciters.slice(0, 24).map((reciter) => entry(`/audio/${reciter.id}`, 0.55)),
  ];

  const seen = new Set<string>();
  return routes.filter((route) => {
    if (seen.has(route.url)) return false;
    seen.add(route.url);
    return true;
  });
}
