import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/queries";
import { buildMetadata } from "@/lib/metadata";
import { urlFor } from "@/lib/sanity";
import { SITE_URL } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import ProductPageClient from "./ProductPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return buildMetadata({ title: "Proizvod nije pronađen", noIndex: true });
  }

  return buildMetadata({
    title: product.title,
    description: product.shortDescription ?? undefined,
    image: product.images?.[0]
      ? urlFor(product.images[0]).width(1200).height(630).url()
      : undefined,
    url: `${SITE_URL}/proizvodi/${slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    ...(product.shortDescription && { description: product.shortDescription }),
    ...(product.images?.[0] && {
      image: urlFor(product.images[0]).width(800).url(),
    }),
    brand: { "@type": "Brand", name: "Karseell" },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "RSD",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${SITE_URL}/proizvodi/${slug}`,
      seller: {
        "@type": "Organization",
        name: "Karseell Srbija – Topp Care",
      },
    },
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <ProductPageClient product={product} />
    </>
  );
}
