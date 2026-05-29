import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  COMPANY_LEGAL,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
} from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | Karseell Srbija`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Karseell Srbija",
    "Karseell maska za kosu",
    "kolagenska maska",
    "nega kose",
    "suva kosa",
    "oštećena kosa",
    "oporavak kose posle blajhanja",
    "šampon bez sulfata",
    "keratin bez formaldehida",
    "arganovo ulje",
    "Topp Care",
    "originalni Karseell",
    "Karseell Beograd",
    "Karseell ulje za kosu",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: SITE_NAME,
  legalName: COMPANY_LEGAL,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressCountry: "RS",
  },
  sameAs: [INSTAGRAM_URL],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18187925113"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18187925113');
          `}
        </Script>
        <JsonLd data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
