"use client";

import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import type { Product } from "@/types/product";
import { useCart } from "@/components/cart/CartContext";
import Badge from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const imageUrl =
    product.images?.[0]
      ? urlFor(product.images[0]).width(600).height(600).url()
      : "/placeholder-product.jpg";

  const discount =
    product.comparePrice && product.price != null
      ? Math.round((1 - product.price / product.comparePrice) * 100)
      : null;

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      productId: product._id,
      title: product.title,
      price: product.price ?? 0,
      quantity: 1,
      image: imageUrl,
    });
  }

  return (
    <Link
      href={`/proizvodi/${product.slug.current}`}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-rose-50/50">
        <img
          src={imageUrl}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge && <Badge>{product.badge}</Badge>}
          {discount && discount > 0 && (
            <Badge variant="dark">-{discount}%</Badge>
          )}
          {!product.inStock && <Badge variant="dark">Nema na stanju</Badge>}
        </div>

        {/* Quick add */}
        {product.inStock && (
          <button
            onClick={handleAdd}
            className="absolute bottom-3 left-3 right-3 bg-[#6b2d45]/90 hover:bg-[#c4788c] text-white text-sm font-semibold py-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0"
          >
            Dodaj u korpu
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        {product.category && (
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
            {product.category.title}
          </p>
        )}
        <h3 className="font-semibold text-gray-900 leading-tight mb-1 group-hover:text-[#c4788c] transition-colors">
          {product.title}
        </h3>
        {product.volume && (
          <p className="text-xs text-gray-400 mb-2">{product.volume}</p>
        )}
        {product.shortDescription && (
          <p className="text-xs text-gray-500 line-clamp-2 mb-3">
            {product.shortDescription}
          </p>
        )}
        {product.price != null && (
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {product.price.toLocaleString("sr-RS")} RSD
            </span>
            {product.comparePrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.comparePrice.toLocaleString("sr-RS")} RSD
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
