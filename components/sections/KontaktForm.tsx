"use client";

import { useState } from "react";

export default function KontaktForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      ime: (form.elements.namedItem("ime") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefon: (form.elements.namedItem("telefon") as HTMLInputElement).value,
      poruka: (form.elements.namedItem("poruka") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c4788c]/30 focus:border-[#c4788c]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ime i prezime</label>
        <input name="ime" required className={inputClass} placeholder="Vaše ime i prezime" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input name="email" type="email" required className={inputClass} placeholder="vas@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
        <input name="telefon" type="tel" className={inputClass} placeholder="060 123 4567" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Poruka</label>
        <textarea
          name="poruka"
          required
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Vaša poruka..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#c4788c] hover:bg-[#a8607a] disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors"
      >
        {status === "sending" ? "Slanje..." : "Pošalji poruku"}
      </button>

      {status === "ok" && (
        <p className="text-green-600 text-sm font-medium text-center">
          Poruka je uspešno poslata. Javićemo se uskoro!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm font-medium text-center">
          Greška pri slanju. Pokušajte ponovo ili nas kontaktirajte direktno.
        </p>
      )}
    </form>
  );
}
