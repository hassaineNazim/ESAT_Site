import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { categories } from "@/lib/catalogue";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    ...categories.map((cat) => ({
      url: `${SITE.url}/produits/${cat.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
