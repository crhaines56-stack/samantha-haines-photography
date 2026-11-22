import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/gallery/"],
    },
    sitemap: "https://samanthahainesphotography.com/sitemap.xml",
  };
}
