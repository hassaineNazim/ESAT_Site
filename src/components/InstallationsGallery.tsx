"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Maximize2, X, ShieldCheck, ChevronRight } from "lucide-react";

export interface InstallationItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  details: string[];
}

export const professionalInstallations: InstallationItem[] = [
  {
    id: "rack-opm-multiswitch",
    title: "Baie de Brassage & Conversion Optique",
    tag: "Baie Murale",
    description:
      "Intégration professionnelle en coffret mural avec convertisseurs optiques Polytron OPM-QTS, multiswitch TELEtek MS-1012 et alimentation filtrée PDU.",
    image: "/installations/install-1.jpg",
    details: ["Convertisseurs Optiques Polytron", "TELEtek MS-1012", "Boucles de réserve câble"],
  },
  {
    id: "paraboles-antennes",
    title: "Réception Satellite & Terrestre sur Toit",
    tag: "Toiture & Antenne",
    description:
      "Station de réception haute résistance équipée de paraboles Cahors de précision et antenne UHF avec étanchéité de traversée certifiée.",
    image: "/installations/install-2.jpg",
    details: ["Paraboles Pro Cahors", "Antenne Terrestre UHF", "Passages étanches rigides"],
  },
  {
    id: "boitier-etanche-exterieur",
    title: "Distribution Extérieure sous Coffret Étanche",
    tag: "Coffret IP66",
    description:
      "Coffret technique d'extérieur étanche abritant un multiswitch TELEtek TK-1316 avec câblage coaxial haute densité et protection contre les intempéries.",
    image: "/installations/install-3.jpg",
    details: ["Coffret étanche renforcé", "TELEtek TK-1316", "Connecteurs F à sertir"],
  },
  {
    id: "baie-serveur-optique",
    title: "Armoire Technique & Distribution Fibre Optique",
    tag: "Rack Serveur",
    description:
      "Distribution haute capacité multi-satellites par fibre optique et coaxial via multiswitch TELEtek TK-1724 dans baie informatique ventilée.",
    image: "/installations/install-4.jpg",
    details: ["Modules Polytron OPM-QTS", "Multiswitch TELEtek TK-1724", "Câblage peigné certifié"],
  },
  {
    id: "distribution-centrale",
    title: "Centrale Multi-Satellites Grand Réseau",
    tag: "Centrale Télédistribution",
    description:
      "Architecture centrale de distribution TV/SAT grands comptes avec boucles d'attente pro, étiquetage des lignes et test de réflectométrie.",
    image: "/installations/install-5.jpg",
    details: ["Polytron OPM-QTS x4", "Multiswitch TELEtek TK-1724", "Rayons de courbure respectés"],
  },
];

export function InstallationsGallery() {
  const [selectedItem, setSelectedItem] = useState<InstallationItem | null>(null);

  // Fermeture au clavier (Échap) + verrou du défilement quand la lightbox est ouverte
  useEffect(() => {
    if (!selectedItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <section id="installations" className="py-24 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold tracking-wide border border-red-100">
            <ShieldCheck className="w-4 h-4" />
            <span>SAVOIR-FAIRE &amp; QUALITÉ DE POSE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Une <span className="text-red-600">Installation Professionnelle</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Rigueur, précision et normes industrielles : découvrez nos réalisations
            d&apos;infrastructures de télédistribution et réseaux, capturées sur le terrain
            par nos techniciens.
          </p>
        </div>

        {/* Grille — première carte mise en avant sur grand écran */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalInstallations.map((item, index) => (
            <article
              key={item.id}
              className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-red-200 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                index === 0 ? "lg:col-span-2 lg:flex-row" : ""
              }`}
            >
              {/* Visuel cliquable (ouvre la lightbox) */}
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`Agrandir la photo : ${item.title}`}
                className={`relative block w-full overflow-hidden bg-slate-100 cursor-pointer ${
                  index === 0 ? "h-72 lg:h-auto lg:w-1/2 lg:min-h-[22rem]" : "h-60"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  }
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Étiquette */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-red-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-red-100 uppercase tracking-wider">
                  {item.tag}
                </span>
                {/* Loupe au survol */}
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/20">
                  <span className="p-3 bg-white/95 text-red-600 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </span>
              </button>

              {/* Contenu */}
              <div
                className={`p-6 md:p-8 flex-1 flex flex-col ${
                  index === 0 ? "lg:w-1/2 lg:justify-center" : ""
                }`}
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-5 pt-5 border-t border-gray-100 space-y-2">
                  {item.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="mt-5 inline-flex items-center gap-1 self-start text-xs font-bold text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                >
                  <span>Agrandir la photo</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-slate-700 hover:text-white hover:bg-red-600 transition-all border border-gray-200 shadow-sm cursor-pointer"
              onClick={() => setSelectedItem(null)}
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[50vh] md:h-[62vh] w-full bg-slate-100">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(min-width: 768px) 56rem, 100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="p-6 md:p-8 border-t border-gray-100 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 bg-red-50 text-red-600 border border-red-100 text-xs font-bold rounded-full uppercase tracking-wider">
                  {selectedItem.tag}
                </span>
                <span className="text-xs text-slate-400 font-medium">Photo terrain · ESAT</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{selectedItem.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedItem.details.map((detail) => (
                  <span
                    key={detail}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-gray-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
