import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import { getFeaturedProducts } from "@/lib/queries";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <section className="py-20 bg-rose-50/50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            label="Najprodavaniji"
            title="Istaknuti proizvodi"
            centered={false}
          />
          <Link
            href="/proizvodi"
            className="text-sm font-semibold text-[#c4788c] hover:text-rose-700 flex items-center gap-1 whitespace-nowrap transition-colors"
          >
            Svi proizvodi
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p>Proizvodi uskoro dolaze. Pratite nas na Instagramu!</p>
          </div>
        )}
      </Container>
    </section>
  );
}
