"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";
import type { OrderFormData } from "@/types/order";

export default function CheckoutForm() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    note: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;

    setLoading(true);
    setError("");

    const orderData: OrderFormData = {
      ...form,
      items,
      total,
    };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error("Greška pri slanju porudžbine.");

      clearCart();
      router.push("/uspesna-porudzbina");
    } catch {
      setError("Došlo je do greške. Molimo pokušajte ponovo ili nas kontaktirajte.");
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-lg mb-4">Vaša korpa je prazna.</p>
        <Link href="/proizvodi" className="text-[#c4788c] underline">
          Pogledajte naše proizvode
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left: Form fields */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Podaci za porudžbinu</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ime <span className="text-red-400">*</span>
            </label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c4788c]/30 focus:border-[#c4788c]"
              placeholder="Marija"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prezime <span className="text-red-400">*</span>
            </label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c4788c]/30 focus:border-[#c4788c]"
              placeholder="Petrović"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telefon <span className="text-red-400">*</span>
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            type="tel"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c4788c]/30 focus:border-[#c4788c]"
            placeholder="060 123 4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email adresa
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c4788c]/30 focus:border-[#c4788c]"
            placeholder="marija@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Adresa <span className="text-red-400">*</span>
          </label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c4788c]/30 focus:border-[#c4788c]"
            placeholder="Ulica i broj"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Grad <span className="text-red-400">*</span>
            </label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c4788c]/30 focus:border-[#c4788c]"
              placeholder="Beograd"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Poštanski broj
            </label>
            <input
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c4788c]/30 focus:border-[#c4788c]"
              placeholder="11000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Napomena (opciono)
          </label>
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c4788c]/30 focus:border-[#c4788c] resize-none"
            placeholder="Posebni zahtevi, sprat, interfon..."
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
            {error}
          </div>
        )}
      </div>

      {/* Right: Order summary */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Pregled porudžbine
        </h2>

        <div className="bg-rose-50/50 rounded-2xl p-6 space-y-4">
          {items.map((item) => (
            <div key={item.productId} className="flex gap-3 items-start">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="rounded-xl object-cover border border-gray-200 flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {item.quantity} × {item.price.toLocaleString("sr-RS")} RSD
                </p>
              </div>
              <p className="text-sm font-bold text-gray-900 flex-shrink-0">
                {(item.price * item.quantity).toLocaleString("sr-RS")} RSD
              </p>
            </div>
          ))}

          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Plaćanje</span>
              <span className="font-medium text-gray-700">Pouzećem</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-gray-900">Ukupno</span>
              <span className="text-xl font-black text-gray-900">
                {total.toLocaleString("sr-RS")} RSD
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-rose-50 border border-rose-200 rounded-2xl p-5">
          <div className="flex gap-3">
            <span className="text-2xl">📦</span>
            <div className="text-sm text-rose-900">
              <p className="font-semibold mb-1">Plaćanje pouzećem</p>
              <p>
                Platite kuriru pri preuzimanju paketa. Nema avansnog plaćanja –
                platite samo kada primate robu.
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-[#c4788c] hover:bg-[#a8607a] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-sm hover:shadow"
        >
          {loading ? "Slanje porudžbine..." : "Potvrdi porudžbinu"}
        </button>

        <p className="text-xs text-center text-gray-400 mt-3">
          Slanjem porudžbine prihvatate naše uslove poslovanja.
        </p>
      </div>
    </form>
  );
}
