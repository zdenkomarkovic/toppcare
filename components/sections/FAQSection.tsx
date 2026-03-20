"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Kako se koristi Karseell maska za kosu?",
    a: "Karseell kolagenska maska nanosi se nakon pranja na celu kosu, svuda, od korena do krajeva. Ostavite je 10- 15 minuta da deluje, a zatim blago  isperite toplom vodom. Za najbolje rezultate koristite je prilikom svakog pranja. Kolagen i prirodni sastojci prodiru duboko u strukturu vlasi i obnavljaju oštećene delove iznutra.",
  },
  {
    q: "Kako oporaviti sprženu i oštećenu kosu posle blajhanja?",
    a: "Oporavak kose posle blajhanja zahteva intenzivnu negu bogatom proteinima i vlaženjem. Karseell maska sa kolagenom i prirodnim sastojcima popunjava prazna mesta u korteksu vlasi, smanjuje ispucale krajeve i vraća elastičnost kosi već posle nekoliko primena. Preporučujemo kombinaciju maske i Karseell ulja za kosu.",
  },
  {
    q: "Da li su Karseell proizvodi originalni?",
    a: "Da. Topp Care je zvanični uvoznik i distributer originalnih Karseell proizvoda za Srbiju. Svaki paket dolazi sa originalnom ambalažom i zvanicnim QR kodom. Ne prodajemo kopije niti sivotržišnu robu.",
  },
  {
    q: "Gde mogu da kupim Karseell u Srbiji i Beogradu?",
    a: "Karseell proizvode možete naručiti direktno putem naše online prodavnice uz dostavu na kućnu adresu širom Srbije. Plaćanje je pouzećem – platite tek kada primite paket. Isporuka traje 1–3 radna dana.",
  },
  {
    q: "Da li šampon sadrži sulfate i parabene?",
    a: "Ne. Karseell šampon je formulisan bez sulfata i bez parabena, što ga čini blagim za svakodnevnu upotrebu i pogodnim za osetljivu i oštećenu kosu. Bogat je prirodnim sastojcima poput arganovog i kokosovog ulja.",
  },
  {
    q: "Šta je razlika između Karseell maske i Karseell ulja za kosu?",
    a: "Karseell maska je tretman koji se ispira – deluje iznutra, obnavlja strukturu vlasi i dubinski hidrira kosu. Karseell ulje za kosu je serum, koji se nanosi na suvu ili vlažnu kosu bez ispiranja – zatvara kutikulu dlake, daje sjaj i štiti od toplote fena i prese.",
  },
  {
    q: "Da li Karseell keratin sadrži formaldehid?",
    a: "Ne. Karseell keratin tretman je formulisan bez formaldehida i bezbedna je alternativa agresivnim hemijskim tretmanima. Pogodan je za sve tipove kose, uključujući farbanu, blajhanu i hemijskom obrađenu kosu.",
  },
  {
    q: "Koja je razlika između Karseell seta i pojedinačnih proizvoda?",
    a: "Karseell set sadrži koordinisane proizvode koji su formulisani da deluju zajedno – šampon priprema kosu, maska tretira i obnavlja, a ulje zatvara i štiti. Korišćenjem seta pojacavate  efekat Karseell dozivljaja.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <SectionHeading
          label="Česta pitanja"
          title="Sve što treba da znate o nezi kose"
          subtitle="Odgovaramo na najčešća pitanja o Karseell proizvodima i nezi oštećene kose."
        />

        <div className="mt-12 max-w-4xl mx-auto space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-base lg:text-lg">{q}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-[#c4788c] transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <polyline points="18 9 12 15 6 9" />
                </svg>
              </button>
              {open === i && (
                <p className="px-6 pb-5 text-gray-500 text-base lg:text-lg leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
