import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { lessons } from "@/data/lessons";
import { questions } from "@/data/questions";
import { fallbackReciters } from "@/lib/mp3quran-api";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/learn",
    "/qa",
    "/quran",
    "/audio",
    "/about",
    "/contact",
    "/privacy",
    "/family-dashboard",
    "/kids-zone",
    "/games",
    "/stories",
    "/adhkar",
    "/challenges",
    "/badges",
  ];
  return [
    ...staticRoutes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), priority: route === "" ? 1 : 0.8 })),
    ...categories.map((category) => ({ url: `${site.url}/learn/${category.slug}`, lastModified: new Date(), priority: 0.7 })),
    ...lessons.map((lesson) => ({ url: `${site.url}/learn/${lesson.category}/${lesson.slug}`, lastModified: new Date(), priority: 0.7 })),
    ...questions.map((question) => ({ url: `${site.url}/qa/${question.slug}`, lastModified: new Date(), priority: 0.7 })),
    ...Array.from({ length: 114 }, (_, index) => ({ url: `${site.url}/quran/${index + 1}`, lastModified: new Date(), priority: 0.6 })),
    ...fallbackReciters.map((reciter) => ({ url: `${site.url}/audio/${reciter.id}`, lastModified: new Date(), priority: 0.5 })),
  ];
}
