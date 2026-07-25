import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./business.css";
import { BusinessHeader } from "@/components/business/BusinessHeader";
import { BusinessFooter } from "@/components/business/BusinessFooter";
import { absoluteUrl, site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.author }],
  keywords: [
    "création entreprise Maroc",
    "création SARL Maroc",
    "création SARLAU Maroc",
    "démarches administratives Maroc",
    "comptabilité entreprise Maroc",
    "facturation Maroc",
    "Minassati",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: ["fr-MA", "ar-MA", "en"],
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: site.description,
      email: "contact@minassati.ma",
      areaServed: { "@type": "Country", name: "Morocco" },
      founder: { "@type": "Person", name: site.author },
    },
    {
      "@type": "Service",
      name: "Accompagnement à la création et à la gestion d’entreprise",
      provider: { "@id": `${site.url}/#organization` },
      areaServed: { "@type": "Country", name: "Morocco" },
      serviceType: "Business administration platform",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={`${inter.variable} ${manrope.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }} className="antialiased">
        <script
          id="minassati-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BusinessHeader />
        <main>{children}</main>
        <BusinessFooter />
        <Analytics />
      </body>
    </html>
  );
}
