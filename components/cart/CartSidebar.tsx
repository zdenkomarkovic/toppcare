"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen, count } =
    useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Korpa{" "}
            {count > 0 && (
              <span className="text-sm text-gold-600 font-normal">
                ({count})
              </span>
            )}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Zatvori korpu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <svg className="w-16 h-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-gray-500">Vaša korpa je prazna</p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-[#c4788c] underline"
              >
                Pogledajte naše proizvode
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.productId} className="py-4 flex gap-4">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="object-cover rounded-lg border border-gray-100"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#c4788c] font-semibold mt-1">
                      {item.price.toLocaleString("sr-RS")} RSD
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-rose-50/50"
                      >
                        –
                      </button>
                      <span className="text-sm w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-rose-50/50"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="ml-auto text-gray-300 hover:text-red-400 transition-colors"
                        aria-label="Ukloni"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Ukupno:</span>
              <span className="text-xl font-bold text-gray-900">
                {total.toLocaleString("sr-RS")} RSD
              </span>
            </div>
            <p className="text-xs text-gray-400 text-center">
              Plaćanje pouzećem pri preuzimanju
            </p>
            <Link
              href="/porudzbina"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-[#c4788c] hover:bg-[#a8607a] text-white text-center font-semibold py-3 rounded-xl transition-colors"
            >
              Naruči
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm text-gray-500 hover:text-gray-700 py-1"
            >
              Nastavi kupovinu
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
