import { buildMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramSection from "@/components/sections/InstagramSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata = buildMetadata({
  title: "Karseell Srbija – Originalni proizvodi za negu kose",
  description:
    "Zvanični uvoznik i distributer originalnih Karseell proizvoda. Kolagenska maska, arganovo ulje, šampon bez sulfata. Oporavite oštećenu kosu. Plaćanje pouzećem.",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <InstagramSection />
      <FAQSection />
    </>
  );
}
