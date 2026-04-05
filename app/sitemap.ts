import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.samanthahainesphotography.com";

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/boudoir-photographer-austin`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/family-photographer-austin`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/senior-portrait-photographer-austin`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/maternity-photographer-austin`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/newborn-photographer-austin`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/headshots-branding-photographer-austin`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/vue-studio`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    // Location pages
    { url: `${baseUrl}/cedar-park-photographer`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/dripping-springs-photographer`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/westlake-photographer`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/steiner-ranch-photographer`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/lakeway-photographer`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/round-rock-photographer`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/georgetown-photographer`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const posts = getAllPosts();
  const blogRoutes = posts.map((post: { slug: string }) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
