import { sanityClient } from "./sanity";
import type { Product, Category } from "@/types/product";

const isConfigured =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder";

export async function getFeaturedProducts(): Promise<Product[]> {
  if (!isConfigured) return [];
  try {
    return await sanityClient.fetch(`
      *[_type == "product" && featured == true && inStock == true] | order(_createdAt desc)[0...8] {
        _id, title, slug, price, comparePrice, images, shortDescription,
        inStock, featured, badge, volume,
        category->{ _id, title, slug }
      }
    `);
  } catch {
    return [];
  }
}

export async function getAllProducts(categorySlug?: string): Promise<Product[]> {
  if (!isConfigured) return [];
  const filter = categorySlug
    ? `*[_type == "product" && inStock == true && category->slug.current == "${categorySlug}"]`
    : `*[_type == "product" && inStock == true]`;
  try {
    return await sanityClient.fetch(`
      ${filter} | order(_createdAt desc) {
        _id, title, slug, price, comparePrice, images, shortDescription,
        inStock, featured, badge, volume,
        category->{ _id, title, slug }
      }
    `);
  } catch {
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!isConfigured) return null;
  try {
    const result = await sanityClient.fetch(
      `*[_type == "product" && slug.current == $slug][0] {
        _id, title, slug, price, comparePrice, images, description,
        shortDescription, inStock, featured, badge, volume,
        ingredients, howToUse,
        category->{ _id, title, slug },
        videos[] { _key, caption, asset->{ _ref, url } }
      }`,
      { slug }
    );
    return result ?? null;
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  if (!isConfigured) return [];
  try {
    return await sanityClient.fetch(`
      *[_type == "category"] | order(title asc) {
        _id, title, slug
      }
    `);
  } catch {
    return [];
  }
}
