import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import CheckoutForm from "@/components/checkout/CheckoutForm";

export const metadata = buildMetadata({
  title: "Naruči – Karseell Srbija",
  description: "Pošaljite porudžbinu za Karseell proizvode. Plaćanje pouzećem.",
  noIndex: true,
});

export default function PorudzbinаPage() {
  return (
    <div className="min-h-screen bg-rose-50/50 py-12">
      <Container>
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c4788c] mb-2">
            Korak 1 od 1
          </p>
          <h1 className="text-3xl font-black text-gray-900">Porudžbina</h1>
          <p className="text-gray-500 mt-1">
            Popunite formu i mi ćemo vas kontaktirati radi potvrde.
          </p>
        </div>
        <CheckoutForm />
      </Container>
    </div>
  );
}
