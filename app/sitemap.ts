import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllProductSlugs } from "@/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productSlugs = await getAllProductSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/proizvodi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/o-nama`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const productPages: MetadataRoute.Sitemap = productSlugs.map(
    ({ slug, updatedAt }) => ({
      url: `${SITE_URL}/proizvodi/${slug}`,
      lastModified: new Date(updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  return [...staticPages, ...productPages];
}
