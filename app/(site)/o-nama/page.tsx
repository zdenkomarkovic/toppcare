import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { INSTAGRAM_URL } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import ONamaVideos from "@/components/sections/ONamaVideos";

export const metadata = buildMetadata({
  title: "O nama – Karseell Srbija",
  description:
    "Karseell Srbija je zvanični uvoznik i distributer Karseell proizvoda za negu kose. Saznajte više o našoj misiji, vrednostima i timu.",
});

export default function ONamaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="text-white relative overflow-hidden h-[80vh]">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay gradijent */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0d1a]/70 via-[#4a1e30]/40 to-transparent" />

        {/* Tekst gore, slika dole desno – sve unutar Container-a */}
        <Container className="relative z-10 h-full flex flex-col justify-between pt-12">
          <div className="text-center">
            <h1 className="text-5xl font-black leading-tight">
              <span className="text-[#e8a8b8]">Topp Care </span>
              <span className="text-white">Karseell Srbija</span>
            </h1>
            <p className="mt-4 text-white font-bold text-lg leading-relaxed max-w-md mx-auto">
              Vaš zvanični partner za profesionalnu negu kose – originalni uvoznik i distributer
              Karseell proizvoda u Srbiji.
            </p>
          </div>

          <div className="flex justify-end">
            <Image
              src="/1773325047082.webp"
              alt="Karseell Srbija – Topp Care"
              width={288}
              height={500}
              className="w-56 lg:w-72 rounded-t-2xl shadow-2xl object-cover object-bottom"
              style={{ maxHeight: "70vh" }}
              priority
            />
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Naša priča"
                title="Gde lepota susreće nauku i prirodu"
                centered={false}
              />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>
                    TOPP CARE – ogranak kompanije TOPP Consultants International d.o.o.
                  </strong>
                  , osnovan je s jednim ciljem – doneti autentične, originalne Karseell proizvode
                  direktno na tržište Srbije i regiona.
                </p>
                <p>
                  Kao tim entuzijasta i profesionalaca koji vole zdravu kosu, svesni smo koliko je
                  važno imati pristup pravim, proverenim tretmanima. Upravo zato smo postali{" "}
                  <strong>zvanični uvoznik i distributer</strong> jednog od najbrže rastućih
                  brendova za negu kose na svetu.
                </p>
                <p>
                  Karseell kombinuje <strong>drevnu mudrost prirodnih sastojaka</strong> – poput
                  maka esencije, arganovog i kokosovog ulja – s najmodernijim dostignućima u nezi
                  kose: kolagenom i keratinom bez formaldehida.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/IMG_6375.webp"
                  alt="Karseell maska za kosu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square mt-8">
                <Image
                  src="/IMG_6400.webp"
                  alt="Karseell Srbija proizvodi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#fdf0f3]">
        <Container>
          <SectionHeading
            label="Naša misija"
            title="Svaki frizer. Svaka kosa. Savršeni rezultati."
            subtitle="Fokusirani smo na distribuciju proizvoda koji kombinuju drevnu mudrost prirodnih sastojaka sa modernom tehnologijom kolagena i keratina."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Za frizere",
                desc: "Pružamo alatke za savršene rezultate u svakom salonu.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.839l.032-.217m0 0l2.045 1.181m-2.077-1.198 2.077-1.199m0 0 4.978 2.880m0-3.158 1.05-.607a2.173 2.173 0 0 0 0-3.758l-1.05-.607m-4.978 3.516.682-1.179m4.296-2.337L15.75 8.25m0 0a3 3 0 1 1 5.196-3 3 3 0 0 1-5.196 3Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Za pojedince",
                desc: "Samopouzdanje koje dolazi sa zdravom, sjajnom kosom.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Za sve",
                desc: "Originalni proizvodi dostupni svima u Srbiji i regionu.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253"
                    />
                  </svg>
                ),
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="bg-white border border-rose-100 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-[#fdf0f3] rounded-xl flex items-center justify-center text-[#c4788c] mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ONamaVideos />

      {/* CTA */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Postanite naš partner</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Da li vodite salon ili ste zainteresovani za veleprodaju? Kontaktirajte nas – tu smo
              za sve što vam treba.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-[#c4788c] hover:bg-[#a8607a] text-white font-bold px-8 py-3 rounded-xl transition-colors"
              >
                Kontaktirajte nas
              </Link>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#6b2d45] text-[#6b2d45] hover:bg-[#6b2d45] hover:text-white font-bold px-8 py-3 rounded-xl transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
