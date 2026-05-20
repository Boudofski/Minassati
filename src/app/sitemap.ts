import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { lessons } from "@/data/lessons";
import { questions } from "@/data/questions";
import { quizzes } from "@/data/quizzes";
import { stories } from "@/data/stories";
import { articles } from "@/data/articles";
import { getReciters } from "@/lib/mp3quran-api";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { reciters } = await getReciters();
  const staticRoutes = [
    "",
    "/learn",
    "/start",
    "/daily",
    "/qa",
    "/quran",
    "/audio",
    "/quizzes",
    "/activities",
    "/parents",
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
    "/articles",
    "/methodology",
    "/content-review",
  ];
  return [
    ...staticRoutes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), priority: route === "" ? 1 : 0.8 })),
    ...categories.map((category) => ({ url: `${site.url}/learn/${category.slug}`, lastModified: new Date(), priority: 0.7 })),
    ...lessons.map((lesson) => ({ url: `${site.url}/learn/${lesson.category}/${lesson.slug}`, lastModified: new Date(), priority: 0.7 })),
    ...questions.map((question) => ({ url: `${site.url}/qa/${question.slug}`, lastModified: new Date(), priority: 0.7 })),
    ...quizzes.map((quiz) => ({ url: `${site.url}/quizzes/${quiz.slug}`, lastModified: new Date(), priority: 0.6 })),
    ...stories.map((story) => ({ url: `${site.url}/stories/${story.slug}`, lastModified: new Date(), priority: 0.6 })),
    ...Array.from({ length: 114 }, (_, index) => ({ url: `${site.url}/quran/${index + 1}`, lastModified: new Date(), priority: 0.6 })),
    ...reciters.slice(0, 24).map((reciter) => ({ url: `${site.url}/audio/${reciter.id}`, lastModified: new Date(), priority: 0.5 })),
    ...articles.map((article) => ({ url: `${site.url}/articles/${article.slug}`, lastModified: new Date(article.updatedAt), priority: 0.8 })),
  ];
}
