import Link from "next/link";
import Image from "next/image";

const images = [
  "/Picture 1.webp",
  "/1773325047082.webp",
  "/Screenshot_20260315_171351_Instagram.webp",
];

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-end overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-marquee {
          display: flex;
          width: max-content;
          animation: marquee 16s linear infinite;
        }
      `}</style>

      {/* Scrolling images strip – vertikalno centriran */}
      <div className="absolute inset-0 flex items-stretch overflow-hidden py-2">
        <div className="hero-marquee h-full">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="h-full w-screen md:w-[33.33vw] shrink-0 px-0.5 md:px-1 py-0.5">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-cover"
                  sizes="33vw"
                  priority={i < images.length * 2}
                  loading="eager"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay – tekst čitljiv s leve strane */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a1e30]/80 via-[#4a1e30]/30 to-[#4a1e30]/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-3xl">
          <p className="text-xs md:text-lg font-bold uppercase tracking-[0.3em] text-[#e8a8b8] mb-2">
            Topp Care &nbsp;·&nbsp; Zvanični uvoznik &amp; distributer
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-6">
            Karseell Srbija
          </h1>
          <p className="text-xl text-rose-200 font-bold leading-relaxed mb-3">
            Originalni Karseell proizvodi za negu kose sa{" "}
            <strong className="text-white">kolagenom, keratinom</strong> i{" "}
            <strong className="text-white">arganovim uljem</strong>.
          </p>
          <p className="text-rose-200 font-bold text-base lg:text-lg leading-relaxed mb-10">
            Transformišite svoju kosu – oporavite oštećenu, suvu i sprženu kosu uz tretmane koji su
            promenili rutinu nege milionima žena širom sveta.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/proizvodi"
              className="bg-[#c4788c] hover:bg-[#a8607a] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Pogledaj proizvode
            </Link>
            <Link
              href="/o-nama"
              className="border-2 border-white/30 hover:border-[#e8a8b8] text-white hover:text-[#e8a8b8] font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Saznaj više
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
