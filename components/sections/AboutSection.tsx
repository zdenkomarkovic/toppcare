import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#fdf0f3] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative">
              <Image
                src="/1000050420.webp"
                alt="Karseell kolagenska maska za kosu – originalni proizvodi Srbija"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#c4788c] text-white rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-black">10K+</p>
              <p className="text-xs uppercase tracking-wider font-semibold mt-0.5">
                Zadovoljnih klijentkinja
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <h2 className="text-5xl font-black text-gray-900 leading-tight">
              Karseell Srbija
              <span className="text-[#c4788c] text-4xl block pt-2">
                {" "}
                Vaš zvanični partner za profesionalnu negu kose
              </span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Karseell Srbija je deo brenda Karseell – globalnog lidera u inovacijama za negu kose.
              Kao tim entuzijasta i profesionalaca, naša misija je da tržištu Srbije i regiona
              ponudimo pristup autentičnim, originalnim proizvodima koji su transformisali rutinu
              nege kose miliona žena širom sveta.
            </p>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Fokusirani smo na distribuciju proizvoda koji kombinuju drevnu mudrost prirodnih
              sastojaka – poput <strong className="text-gray-800">mak esencije</strong> i{" "}
              <strong className="text-gray-800">arganovog ulja</strong> – sa modernom tehnologijom{" "}
              <strong className="text-gray-800">kolagena i keratina</strong> bez formaldehida.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
              {[
                { num: "100%", label: "Originalni proizvodi" },
                { num: "Brza dostava", label: "Isporuka na kućnu adresu širom Srbije" },
                { num: "Karseell Srbija", label: "Zvanični uvoznik i distributer za Srbiju" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-white border border-rose-100 rounded-xl p-4 shadow-sm"
                >
                  <p className="text-2xl font-black text-[#c4788c]">{num}</p>
                  <p className="text-xs lg:text-lg text-gray-500 mt-1">{label}</p>
                </div>
              ))}
              <Link
                href="/o-nama"
                className="inline-flex items-center justify-center gap-2 text-[#c4788c] hover:text-[#a8607a] font-semibold transition-colors p-4"
              >
                Više o nama
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
