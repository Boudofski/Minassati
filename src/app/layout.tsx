import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { Amiri, Cairo, IBM_Plex_Sans_Arabic, Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/minassati/Header";
import { Footer } from "@/components/minassati/Footer";
import { HtmlLangSync } from "@/components/minassati/HtmlLangSync";
import { AnalyticsTracker } from "@/components/minassati/AnalyticsTracker";
import { absoluteUrl, site } from "@/lib/site";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
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
  keywords: ["التوجيه المدرسي", "التوجيه الدراسي", "المدارس المغربية", "بعد الباك", "المغرب", "المنح", "الدراسة بالخارج", "المباريات", "منصتي"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_MA",
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
      inLanguage: "ar",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: absoluteUrl("/articles?search={search_term_string}") },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: site.description,
      founder: { "@type": "Person", name: site.author },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable} ${ibmPlexArabic.variable} ${tajawal.variable}`}>
      <body className="font-sans antialiased">
        <Script
          id="adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1553579698682940"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          id="minassati-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <HtmlLangSync />
        <AnalyticsTracker />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
