import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
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

        {/* Tekst gore, slika dole desno – sve unutar Container-a */}
        <Container className="relative z-10 h-full flex flex-col justify-between pt-12">
          <div className="text-center">
            <h1 className="text-5xl font-black leading-tight">
              <span className="text-[#e8a8b8]">Topp Care </span>
              <span className="text-white">Karseell Srbija</span>
            </h1>
            <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-md mx-auto">
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
                  Karseell Srbija je ogranak kompanije{" "}
                  <strong>TOPP Consultants International d.o.o.</strong>, osnovanog s jednim ciljem
                  – doneti autentične, originalne Karseell proizvode direktno na tržište Srbije i
                  regiona.
                </p>
                <p>
                  Kao tim entuzijasta i profesionalaca koji vole zdravu kosu, svesni smo koliko je
                  važno imati pristup pravim, proverenim tretmanima. Upravo zato smo postali{" "}
                  <strong>zvanični uvoznik i distributer</strong> jednog od najbrže rastućih
                  brendova za negu kose na svetu.
                </p>
                <p>
                  Karseell kombinuje <strong>drevnu mudrost prirodnih sastojaka</strong> – poput mak
                  esencije, arganovog i kokosovog ulja – s najmodernijim dostignućima u nezi kose:
                  kolagenom i keratinom bez formaldehida.
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
          <div className="max-w-3xl mx-auto text-center">
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
                  icon: "✂️",
                },
                {
                  title: "Za pojedince",
                  desc: "Samopouzdanje koje dolazi sa zdravom, sjajnom kosom.",
                  icon: "💆‍♀️",
                },
                {
                  title: "Za sve",
                  desc: "Originalni proizvodi dostupni svima u Srbiji i regionu.",
                  icon: "🌍",
                },
              ].map(({ title, desc, icon }) => (
                <div
                  key={title}
                  className="bg-white border border-rose-100 rounded-2xl p-6 text-center shadow-sm"
                >
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-rose-50">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { num: "10.000+", label: "Zadovoljnih klijentkinja" },
              { num: "100%", label: "Originalni proizvodi" },
              { num: "Srbija", label: "i Region" },
              { num: "2024", label: "Osnivanje" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-3xl font-black text-[#c4788c]">{num}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
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
