import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { site } from "@/lib/site";

function entry(route: string, priority = 0.7) {
  return { url: `${site.url}${route}`, lastModified: new Date(), priority };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/schools",
    "/opportunities",
    "/after-bac",
    "/guidance-request",
    "/calendar",
    "/faq",
    "/articles",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/help",
  ];

  const routes = [
    ...staticRoutes.map((route) => entry(route, route === "" ? 1 : 0.8)),
    ...articles.map((article) => ({ url: `${site.url}/articles/${article.slug}`, lastModified: new Date(article.updatedAt), priority: 0.75 })),
  ];

  const seen = new Set<string>();
  return routes.filter((route) => {
    if (seen.has(route.url)) return false;
    seen.add(route.url);
    return true;
  });
}
