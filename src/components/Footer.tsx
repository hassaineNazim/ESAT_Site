import Link from "next/link";
import { Satellite, Phone, Mail, MapPin, Clock } from "lucide-react";
import { CurrentYear } from "@/components/CurrentYear";
import { categories } from "@/lib/catalogue";
import { SITE } from "@/lib/site";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Affichage Dynamique", href: "/#affichage" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Installations", href: "/#installations" },
  { label: "Nos Projets", href: "/#projets" },
  { label: "L’Entreprise", href: "/#entreprise" },
  { label: "Partenaires", href: "/#partenaires" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        {/* Marque */}
        <div className="space-y-5">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-950/40">
              <Satellite className="w-6 h-6 text-white" />
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              E-SAT
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            Intégrateur de solutions de télédistribution, d&rsquo;affichage
            dynamique et de réseaux pour les professionnels : hôtellerie,
            santé, collectivités.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigation du site" className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Catalogue */}
        <nav aria-label="Catalogue matériel" className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Catalogue
          </h3>
          <ul className="space-y-2.5 text-sm">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/produits/${cat.slug}`}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" />
              <span>
                {SITE.address.street}, {SITE.address.city}{" "}
                {SITE.address.postalCode}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" />
              <span>
                {SITE.phones.map((phone) => (
                  <a
                    key={phone.e164}
                    href={`tel:${phone.e164}`}
                    className="block hover:text-red-500 transition-colors"
                  >
                    {phone.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" />
              <a
                href={`mailto:${SITE.emails.contact}`}
                className="hover:text-red-500 transition-colors"
              >
                {SITE.emails.contact}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" />
              <span>{SITE.hours.display}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © <CurrentYear /> ESAT — Solutions de Télédistribution.
            Tous droits réservés.
          </p>
          <p>
            {SITE.address.city}, {SITE.address.countryLabel}
          </p>
        </div>
      </div>
    </footer>
  );
}
