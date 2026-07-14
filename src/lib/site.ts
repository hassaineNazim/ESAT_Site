/**
 * Configuration centrale du site — source unique de vérité pour
 * les coordonnées, l'identité et l'URL publique.
 *
 * Pour changer un email, un téléphone ou l'adresse : modifier ICI uniquement,
 * tous les composants (Navbar, Footer, Contact, ProductCard, JSON-LD…) en héritent.
 */
export const SITE = {
  name: "ESAT",
  brand: "E-SAT",
  /** URL publique canonique — surchargée par NEXT_PUBLIC_SITE_URL en déploiement. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://esat-dz.com",
  description:
    "Expert en solutions de télédistribution, affichage dynamique et réseaux B2B en Algérie. IPTV, DVB-T/C, Fibre Optique.",
  emails: {
    /** Adresse canonique pour tous les CTA du site. */
    contact: "contact@esat-dz.com",
    commercial: "commerciale.esat@gmail.com",
    direction: "zberdi@esat-dz.com",
  },
  /** Format affichage (humain) et format E.164 (machines / JSON-LD). */
  phones: [
    { display: "+213 770 95 14 85", e164: "+213770951485" },
    { display: "+213 770 95 14 86", e164: "+213770951486" },
  ],
  address: {
    street: "350 résidence Ennahda",
    city: "Birkhadem",
    postalCode: "16029",
    countryCode: "DZ",
    countryLabel: "Algérie",
  },
  hours: {
    display: "Dim – Jeu : 09h00 – 17h00",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "09:00",
    closes: "17:00",
  },
  geo: { latitude: 36.7164, longitude: 3.0485 },
  /** Fiche Google Maps publique (JSON-LD hasMap). */
  mapUrl: "https://www.google.com/maps?q=P2JW%2B6H+Birkhadem",
} as const;

/** Construit un lien mailto vers l'adresse de contact canonique. */
export function contactMailto(subject?: string): string {
  const base = `mailto:${SITE.emails.contact}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
