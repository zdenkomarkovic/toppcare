import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { CONTACT_PHONE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Porudžbina primljena",
  description: "Vaša porudžbina je uspešno primljena.",
  noIndex: true,
});

export default function UspesnaPorudzbina() {
  return (
    <div className="min-h-[80vh] flex items-center bg-rose-50/50">
      <Container>
        <div className="max-w-lg mx-auto text-center py-16">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-black text-gray-900 mb-3">
            Porudžbina primljena! 🎉
          </h1>
          <p className="text-gray-600 leading-relaxed mb-2">
            Hvala vam na porudžbini! Kontaktiraćemo vas uskoro radi potvrde.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Plaćanje se vrši pouzećem – platite kuriru pri preuzimanju paketa.
          </p>

          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-left mb-8">
            <p className="font-semibold text-rose-900 mb-2">Šta sledi?</p>
            <ul className="space-y-2 text-sm text-rose-900">
              <li className="flex items-start gap-2">
                <span>1.</span>
                <span>Naš tim proverava vašu porudžbinu i kontaktira vas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>2.</span>
                <span>Paket se priprema i šalje kurirskom službom.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>3.</span>
                <span>Platite kuriru kada primite paket.</span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Pitanja? Pozovite nas:{" "}
            <a href={`tel:0606794006`} className="text-[#c4788c] font-semibold">
              {CONTACT_PHONE}
            </a>
          </p>

          <Link
            href="/proizvodi"
            className="inline-block bg-[#c4788c] hover:bg-[#a8607a] text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Nastavi kupovinu
          </Link>
        </div>
      </Container>
    </div>
  );
}
