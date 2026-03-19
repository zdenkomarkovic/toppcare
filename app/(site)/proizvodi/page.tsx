import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import { getAllProducts, getCategories } from "@/lib/queries";

export const metadata = buildMetadata({
  title: "Karseell proizvodi za negu kose",
  description:
    "Originalni Karseell proizvodi – kolagenska maska, ulje za kosu, šampon bez sulfata i keratinski tretmani. Kupujte original direktno od uvoznika.",
});

export default async function ProizvodiPage({
  searchParams,
}: {
  searchParams: Promise<{ kategorija?: string }>;
}) {
  const { kategorija } = await searchParams;
  const [products, categories] = await Promise.all([
    getAllProducts(kategorija),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen bg-rose-50/50 py-12">
      <Container>
        <SectionHeading
          label="Prodavnica"
          title="Svi proizvodi"
          subtitle="Originalni Karseell proizvodi direktno od zvaničnog uvoznika za Srbiju."
        />

        {/* Category filter */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 justify-center">
            <Link
              href="/proizvodi"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !kategorija
                  ? "bg-[#6b2d45] text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-[#c4788c] hover:text-[#c4788c]"
              }`}
            >
              Sve kategorije
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/proizvodi?kategorija=${cat.slug.current}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  kategorija === cat.slug.current
                    ? "bg-[#c4788c] text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#c4788c] hover:text-[#c4788c]"
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-10">
          <ProductGrid
            products={products}
            emptyMessage="Nema proizvoda u ovoj kategoriji."
          />
        </div>
      </Container>
    </div>
  );
}
