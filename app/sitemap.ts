import type { MetadataRoute } from "next";
import { getAllPosts, getAllTags, getAllGeographies, getAllUseCases } from "@/lib/posts";
import { siteUrl as baseUrl } from "@/lib/site";
import { slugify } from "@/lib/slug";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  // Static, hand-maintained routes. /search is intentionally omitted (noindex).
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/stories`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/apply/bitcoin`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/apply/ai`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/story/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const tagRoutes: MetadataRoute.Sitemap = getAllTags().map((tag) => ({
    url: `${baseUrl}/stories/tags/${slugify(tag)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.4,
  }));

  const geographyRoutes: MetadataRoute.Sitemap = getAllGeographies().map((location) => ({
    url: `${baseUrl}/stories/geography/${slugify(location)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.4,
  }));

  const useCaseRoutes: MetadataRoute.Sitemap = getAllUseCases().map((useCase) => ({
    url: `${baseUrl}/stories/use-case/${slugify(useCase)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...postRoutes, ...tagRoutes, ...geographyRoutes, ...useCaseRoutes];
}
