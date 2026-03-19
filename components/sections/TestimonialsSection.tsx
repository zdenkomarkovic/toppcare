import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Milica T.",
    location: "Beograd",
    text: "Karseell kolagenska maska je spasla moju kosu posle blajhanja. Posle svega dva tretmana kosa je mekana, sjajna i više nema ispucalih krajeva. Jedini originalni Karseell u Srbiji!",
    stars: 5,
    image: "/Screenshot_20260315_171351_Instagram.webp",
  },
  {
    name: "Ana K.",
    location: "Novi Sad",
    text: "Dugo sam tražila šampon bez sulfata i parabena koji ne isušuje kosu. Karseell Srbija isporučuje brzo i sve je originalno – šampon je hit, vlasište više ne svrbi.",
    stars: 5,
    image: null,
  },
  {
    name: "Jovana M.",
    location: "Niš",
    text: "Karseell set maske i ulja je must-have za suvu i oštećenu kosu. Naručila sam u Karseell Srbija, stiglo za dan. Frizerka me pitala šta radim jer je kosa toliko zdrava.",
    stars: 5,
    image: null,
  },
  {
    name: "Sandra P.",
    location: "Kragujevac",
    text: "Karseell ulje za kosu je predivno – tanko, ne masti, a kosa kao svila. Plaćanje pouzećem, paket stigao brzo. Karseell Srbija je jedino mesto gde kupujem originalne proizvode.",
    stars: 5,
    image: null,
  },
  {
    name: "Dragana N.",
    location: "Beograd",
    text: "Imala sam sprženu i suvu kosu godinama. Posle mesec dana korišćenja Karseell kolagen maske i ulja – kosa je transformisana. Preporučujem svima koji traže oporavak kose.",
    stars: 5,
    image: null,
  },
  {
    name: "Tamara V.",
    location: "Subotica",
    text: "Karseell keratin bez formaldehida je odlična zamena za agresivne tretmane. Konačno zdravi i ravni pramenovi bez oštećenja. Naručujem isključivo od Karseell Srbija.",
    stars: 5,
    image: null,
  },
  {
    name: "Ivana R.",
    location: "Novi Sad",
    text: "Arganovo i kokosovo ulje u Karseell proizvodima čine razliku. Ispucali krajevi su nestali posle prve primene maske. Originalni Karseell proizvodi – vredi svaki dinar.",
    stars: 5,
    image: null,
  },
  {
    name: "Maja S.",
    location: "Kragujevac",
    text: "Tražila sam Karseell Beograd ali isporuka stiže brzo i van Beograda. Nega suve kose nikad nije bila lakša – maska miriše predivno i kosa je napokon nahranjena.",
    stars: 5,
    image: null,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-rose-50">
      <Container>
        <SectionHeading
          label="Utisci klijentkinja"
          title="Prava iskustva, pravi rezultati"
          subtitle="Više od 10.000 zadovoljnih klijentkinja svakodnevno bira Karseell Srbija."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:grid-rows-2">
          {testimonials.map(({ name, location, text, stars, image }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex text-[#c4788c] text-lg mb-3">
                {"★".repeat(stars)}
              </div>
              <p className="text-gray-700 text-sm lg:text-lg leading-relaxed italic mb-4">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                {image ? (
                  <Image
                    src={image}
                    alt={name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#c4788c]/20 flex items-center justify-center text-[#c4788c] font-bold text-sm">
                    {name[0]}
                  </div>
                )}
                <div>
                  <p className="text-sm lg:text-lg font-semibold text-gray-900">{name}</p>
                  <p className="text-xs lg:text-base text-gray-400">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
