import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Réservés à la galerie "Installations" (direction éditoriale premium).
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const defaultTitle =
  "ESAT — Solutions de Télédistribution & Réseaux B2B en Algérie";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: "%s | ESAT",
  },
  description: SITE.description,
  keywords: [
    "télédistribution",
    "IPTV",
    "DVB-T",
    "DVB-C",
    "BIS",
    "affichage dynamique",
    "fibre optique",
    "réseaux B2B",
    "Algérie",
    "Alger",
    "Birkhadem",
    "hôtellerie",
    "hôpitaux",
    "collectivités",
  ],
  authors: [{ name: SITE.brand, url: SITE.url }],
  creator: SITE.brand,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: SITE.url,
    title: defaultTitle,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE.description,
    images: ["/og-image.png"],
  },
};

// Données structurées SEO local — alimentées par la config centrale.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.brand,
  description: SITE.description,
  image: `${SITE.url}/Logo-ESat.png`,
  "@id": `${SITE.url}/#localbusiness`,
  url: SITE.url,
  email: SITE.emails.contact,
  telephone: SITE.phones.map((p) => p.e164),
  areaServed: { "@type": "Country", name: "Algérie" },
  hasMap: SITE.mapUrl,
  knowsAbout: [
    "Télédistribution",
    "IPTV",
    "DVB-T/DVB-C",
    "Bande Intermédiaire Satellite",
    "Affichage dynamique",
    "Fibre optique",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...SITE.hours.days],
    opens: SITE.hours.opens,
    closes: SITE.hours.closes,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} antialiased bg-white text-slate-900 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
