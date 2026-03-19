import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import KontaktForm from "@/components/sections/KontaktForm";
import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_EMAIL_2,
  CONTACT_ADDRESS,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Kontakt – Karseell Srbija",
  description:
    "Kontaktirajte Karseell Srbija – Topp Care. Dostupni smo za sve informacije o proizvodima, porudžbinama i saradnji. Beograd, Srbija.",
});

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-rose-50/50 py-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c4788c] mb-3">
              Povežimo se
            </p>
            <h1 className="text-4xl font-black text-gray-900">
              Kontaktirajte nas
            </h1>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              Tu smo za sve vaše upite – od informacija o proizvodima do
              poslovne saradnje.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: "📞",
                  label: "Telefon",
                  value: CONTACT_PHONE,
                  href: "tel:0606794006",
                },
                {
                  icon: "✉️",
                  label: "E-mail",
                  value: CONTACT_EMAIL,
                  href: `mailto:${CONTACT_EMAIL}`,
                },
                {
                  icon: "✉️",
                  label: "E-mail (alt)",
                  value: CONTACT_EMAIL_2,
                  href: `mailto:${CONTACT_EMAIL_2}`,
                },
                {
                  icon: "📍",
                  label: "Lokacija",
                  value: CONTACT_ADDRESS,
                  href: null,
                },
                {
                  icon: "📸",
                  label: "Instagram",
                  value: INSTAGRAM_HANDLE,
                  href: INSTAGRAM_URL,
                },
              ].map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-semibold text-gray-900 hover:text-[#c4788c] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Pošaljite poruku
              </h2>
              <KontaktForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
