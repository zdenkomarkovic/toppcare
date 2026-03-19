"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import { getProductBySlug } from "@/lib/queries";
import { useCart } from "@/components/cart/CartContext";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import type { Product } from "@/types/product";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const stripRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    dragStartX.current = e.pageX - (stripRef.current?.offsetLeft ?? 0);
    dragScrollLeft.current = stripRef.current?.scrollLeft ?? 0;
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !stripRef.current) return;
    e.preventDefault();
    const x = e.pageX - stripRef.current.offsetLeft;
    stripRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current);
  }
  function onMouseUp() { isDragging.current = false; }
  function onMouseLeave() { isDragging.current = false; }
  const [tab, setTab] = useState<"opis" | "sastojci" | "upotreba">("opis");
  const { addItem } = useCart();

  useEffect(() => {
    getProductBySlug(slug).then((p) => {
      setProduct(p);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#c4788c] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        <div className="text-center">
          <p className="text-xl mb-4">Proizvod nije pronađen.</p>
          <Link href="/proizvodi" className="text-[#c4788c] underline">
            Vrati se na proizvode
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = (img: Parameters<typeof urlFor>[0]) =>
    urlFor(img).width(800).height(800).url();

  function handleAdd() {
    addItem({
      productId: product!._id,
      title: product!.title,
      price: product!.price ?? 0,
      quantity,
      image: product!.images?.[0] ? imageUrl(product!.images[0]) : undefined,
    });
  }

  const discount =
    product.comparePrice && product.price
      ? Math.round((1 - product.price / product.comparePrice) * 100)
      : null;

  return (
    <div className="min-h-screen bg-white py-10">
      <Container>
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-700">Početna</Link>
          <span>/</span>
          <Link href="/proizvodi" className="hover:text-gray-700">Proizvodi</Link>
          <span>/</span>
          <span className="text-gray-700">{product.title}</span>
        </nav>

        {(() => {
          type MediaItem =
            | { kind: "image"; src: string; alt: string }
            | { kind: "video"; src: string; caption?: string };

          const media: MediaItem[] = [
            ...(product.images ?? []).map((img, i) => ({
              kind: "image" as const,
              src: imageUrl(img),
              alt: `${product.title} ${i + 1}`,
            })),
            ...(product.videos ?? [])
              .filter((v) => v.asset?.url)
              .map((v) => ({
                kind: "video" as const,
                src: v.asset.url!,
                caption: v.caption,
              })),
          ];

          const active = media[activeIndex];

          return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-rose-50/50">
              {active?.kind === "image" && (
                <img
                  src={active.src}
                  alt={active.alt}
                  className="w-full h-full object-cover"
                />
              )}
              {active?.kind === "video" && (
                <video
                  key={active.src}
                  src={active.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain bg-black"
                />
              )}
            </div>
            {media.length > 1 && (
              <div
                ref={stripRef}
                className="flex gap-3 overflow-x-auto pb-1 cursor-grab active:cursor-grabbing select-none"
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
              >
                {media.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                      activeIndex === i
                        ? "border-[#c4788c]"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                  >
                    {item.kind === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                        <video
                          src={item.src}
                          className="w-full h-full object-cover opacity-60"
                          muted
                          preload="metadata"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            {product.category && (
              <p className="text-xs uppercase tracking-widest text-[#c4788c] font-semibold">
                {product.category.title}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {product.badge && <Badge>{product.badge}</Badge>}
              {discount && <Badge variant="dark">-{discount}% popust</Badge>}
              {!product.inStock && <Badge variant="dark">Nema na stanju</Badge>}
            </div>

            <h1 className="text-3xl font-black text-gray-900 leading-tight">
              {product.title}
            </h1>

            {product.volume && (
              <p className="text-sm text-gray-400">{product.volume}</p>
            )}

            {product.price != null && (
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-gray-900">
                  {product.price.toLocaleString("sr-RS")} RSD
                </span>
                {product.comparePrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {product.comparePrice.toLocaleString("sr-RS")} RSD
                  </span>
                )}
              </div>
            )}

            {/* Quantity + Add */}
            {product.inStock && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-gray-600 hover:bg-rose-50/50 transition-colors"
                    >
                      –
                    </button>
                    <span className="px-5 py-3 font-semibold text-gray-900 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-gray-600 hover:bg-rose-50/50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleAdd}
                  className="w-full bg-[#c4788c] hover:bg-[#a8607a] text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-sm hover:shadow"
                >
                  Dodaj u korpu
                </button>
                <Link
                  href="/porudzbina"
                  onClick={handleAdd}
                  className="block w-full text-center border-2 border-[#6b2d45] text-[#6b2d45] hover:bg-[#6b2d45] hover:text-white font-bold py-4 rounded-xl transition-colors"
                >
                  Naruči odmah
                </Link>
              </div>
            )}

            {/* Trust */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                {
                  label: "100% original",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  ),
                },
                {
                  label: "Plaćanje pouzećem",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  ),
                },
                {
                  label: "Provereni kvalitet",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  ),
                },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="text-center bg-white border border-[#c4788c] rounded-xl p-3"
                >
                  <div className="flex justify-center text-[#c4788c] mb-1">{icon}</div>
                  <p className="text-xs text-gray-500 font-medium">{label}</p>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex gap-1 mb-4">
                {(["opis", "sastojci", "upotreba"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                      tab === t
                        ? "bg-[#6b2d45] text-white"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {t === "opis" ? "Opis" : t === "sastojci" ? "Sastojci" : "Upotreba"}
                  </button>
                ))}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed prose prose-sm max-w-none">
                {tab === "opis" && (
                  product.description?.length ? (
                    <PortableText value={product.description} />
                  ) : product.shortDescription ? (
                    <p>{product.shortDescription}</p>
                  ) : (
                    <p>Opis nije dostupan.</p>
                  )
                )}
                {tab === "sastojci" && (
                  <p>{product.ingredients || "Informacije o sastojcima nisu dostupne."}</p>
                )}
                {tab === "upotreba" && (
                  <p>{product.howToUse || "Uputstvo za upotrebu nije dostupno."}</p>
                )}
              </div>
            </div>
          </div>
        </div>
          );
        })()}
      </Container>
    </div>
  );
}
