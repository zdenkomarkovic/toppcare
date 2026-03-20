"use client";

import Container from "@/components/ui/Container";

const row1 = [
  {
    title: "100% Originalni proizvodi",
    desc: "Kao direktni uvoznici garantujemo autentičnost svakog artikla. Nijedna kopija – samo pravo Karseell iskustvo.",
  },
  {
    title: "Nauka susreće prirodu",
    desc: "Kolagen, keratin, maka esencija i arganovo ulje – sastojci koji dubinski obnavljaju i hrane svaki pramen kose.",
  },
  {
    title: "Stručna podrška",
    desc: "Edukujemo naše partnere i kupce o pravilnoj primeni tretmana za maksimalne, dugotrajne rezultate.",
  },
];

const row2 = [
  {
    title: "Brza i pouzdana isporuka",
    desc: "Stabilan lanac snabdevanja za salone i privatne kupce. Plaćanje pouzećem – platite tek kada primite paket.",
  },
  {
    title: "Za salone i kućnu upotrebu",
    desc: "Karseell tretmani su osmišljeni da daju profesionalne rezultate – i u salonu i u udobnosti vašeg doma.",
  },
  {
    title: "Globalni lider, lokalna podrška",
    desc: "Karseell je globalni brend. Mi smo vaš lokalni partner – dostupni za sva pitanja, savete i narudžbine.",
  },
];

function VideoPlayer({ src }: { src: string }) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-xl bg-black mx-auto w-full max-w-[220px] lg:max-w-[260px]"
      style={{ aspectRatio: "9/16" }}
    >
      <video
        src={src}
        controls
        playsInline
        preload="none"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function Cards({ items }: { items: typeof row1 }) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      {items.map(({ title, desc }) => (
        <div
          key={title}
          className="p-6 rounded-2xl border border-[#e8a8b8]/40 bg-[#fdf6f8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <h3 className="text-base font-bold text-[#4a1e30] mb-1">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c4788c] mb-2">
            Naše prednosti
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#4a1e30]">
            Zašto izabrati Karseell Srbija?
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Više od 10.000 zadovoljnih klijentkinja je dokaz našeg kvaliteta i posvećenosti.
          </p>
        </div>

        {/* Red 1: kartice levo, video desno */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <Cards items={row1} />
          <div className="flex justify-center">
            <VideoPlayer src="/karseell_maska.mp4" />
          </div>
        </div>

        {/* Red 2: video levo, kartice desno */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <VideoPlayer src="/Video_prezentacija.mp4" />
          </div>
          <div className="order-1 lg:order-2">
            <Cards items={row2} />
          </div>
        </div>
      </Container>
    </section>
  );
}
