import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Colonne de gauche (Informations de contact) */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Discutons de votre projet
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Nos experts en télédistribution et affichage dynamique sont à votre disposition pour vous accompagner.
            </p>
          </div>

          <div className="space-y-6">
            {/* Adresse */}
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-red-50 p-3 rounded-xl border border-red-100 flex-shrink-0">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Notre bureau</h3>
                <p className="text-slate-600 mt-1">
                  350 résidence ennahda 16029<br />
                  Birkhadem 160293
                </p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-red-50 p-3 rounded-xl border border-red-100 flex-shrink-0">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Téléphone</h3>
                <p className="text-slate-600 mt-1">+213 770 95 14 85</p>
                <p className="text-slate-600">+213 770 95 14 86</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-red-50 p-3 rounded-xl border border-red-100 flex-shrink-0">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                <a
                  href="mailto:commerciale.esat@gmail.com?subject=Demande de renseignement B2B"
                  className="text-slate-600 mt-1 inline-block transition-colors hover:text-red-600 font-medium"
                >
                  commerciale.esat@gmail.com
                </a>
                <br />
                <a
                  href="mailto:contact@esat-dz.com?subject=Demande de renseignement B2B"
                  className="text-slate-600 mt-1 inline-block transition-colors hover:text-red-600 font-medium"
                >
                  contact@esat-dz.com
                </a>
                <br />
                <a
                  href="mailto:zberdi@esat-dz.com?subject=Demande de renseignement B2B"
                  className="text-slate-600 mt-1 inline-block transition-colors hover:text-red-600 font-medium"
                >
                  zberdi@esat-dz.com
                </a>
              </div>
            </div>

            {/* Horaires (optionnel supplémentaire pour le réalisme) */}
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-red-50 p-3 rounded-xl border border-red-100 flex-shrink-0">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Horaires</h3>
                <p className="text-slate-600 mt-1">Dimanche - Jeudi : 09h00 - 17h00</p>
                <p className="text-slate-600">Vendredi - Samedi : Fermé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne de droite (Intégration Google Maps) */}
        <div className="w-full h-full min-h-[400px]">
          <iframe
            src="https://maps.google.com/maps?q=P2JW%2B6H%20Birkhadem&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[400px] rounded-xl transition-all duration-500 shadow-sm border border-gray-200"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Notre localisation exacte à Birkhadem"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
