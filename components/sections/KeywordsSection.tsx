import Container from "@/components/ui/Container";

const keywords = [
  "Suva i oštećena kosa",
  "Oporavak kose posle blajhanja",
  "Ispucali krajevi",
  "Nega suve kose",
  "Kako oporaviti sprženu kosu",
  "Original Karseell maska za kosu",
  "Karseell prodaja Srbija",
  "Karseell Beograd",
  "Kako se koristi Karseell maska",
  "Najbolja maska za suvu kosu",
  "Karseell kolagen",
  "Karseell ulje za kosu",
  "Karseell set",
  "Karseell maska i ulje",
  "Šampon bez sulfata i parabena",
  "Keratin bez formaldehida",
  "Arganovo ulje za kosu",
  "Kokosovo ulje za kosu",
  "Originalni Karseell proizvodi",
];

export default function KeywordsSection() {
  return (
    <section className="py-12 bg-rose-50/50 border-t border-gray-100">
      <Container>
        <p className="text-xs text-gray-400 uppercase tracking-widest text-center mb-6 font-medium">
          Rešavamo vaše probleme s kosom
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {keywords.map((kw) => (
            <span
              key={kw}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#c4788c] hover:text-[#c4788c] transition-colors cursor-default"
            >
              {kw}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
