"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export interface InstallationItem {
  id: string;
  title: string;
  subtitle?: string;
  filename?: string;
  image: string;
}

export const professionalInstallations: InstallationItem[] = [
  {
    id: "paraboles-antennes",
    title: "Antennes Cahors — toiture",
    subtitle: "paraboles + réception terrestre",
    filename: "install-2.jpg",
    image: "/installations/install-2.jpg",
  },
  {
    id: "rack-opm-multiswitch",
    title: "Baie technique TELEtek",
    subtitle: "conversion optique + multiswitch",
    filename: "install-1.jpg",
    image: "/installations/install-1.jpg",
  },
  {
    id: "baie-serveur-optique",
    title: "Câblage multiswitch",
    image: "/installations/install-4.jpg",
  },
  {
    id: "boitier-etanche-exterieur",
    title: "Coffret étanche IP66",
    image: "/installations/install-3.jpg",
  },
  {
    id: "distribution-centrale",
    title: "Tableau de tête",
    image: "/installations/install-5.jpg",
  },
];

function GalleryTile({
  item,
  onOpen,
  className,
  titleClassName,
}: {
  item: InstallationItem;
  onOpen: (item: InstallationItem) => void;
  className: string;
  titleClassName: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`Agrandir la photo : ${item.title}`}
      className={`group relative overflow-hidden rounded-2xl bg-[#EDEAE2] text-left cursor-pointer ${className}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-[#0E1116]/75 via-[#0E1116]/10 to-transparent">
        <div className={`font-serif text-white ${titleClassName}`}>{item.title}</div>
        {item.subtitle && (
          <div className="font-mono text-[11px] md:text-xs text-[#D8DCE1] mt-1">
            {item.subtitle}
          </div>
        )}
      </div>
      {item.filename && (
        <span className="absolute top-3 left-3 font-mono text-[11px] text-[#7A756B] bg-[#FBFAF8] px-2 py-1 rounded-md">
          photo · {item.filename}
        </span>
      )}
    </button>
  );
}

export function InstallationsGallery() {
  const [selectedItem, setSelectedItem] = useState<InstallationItem | null>(null);
  const [hero, tall, ...rest] = professionalInstallations;

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
    <section id="installations" className="py-16 md:py-20 px-4 md:px-11 bg-[#FBFAF8] border-t border-[#ECEAE5]">
      <div className="max-w-6xl mx-auto">
        {/* En-tête éditorial */}
        <div className="flex items-baseline gap-3.5 mb-6 md:mb-7">
          <span className="font-mono text-xs text-[#E11D2A] tracking-[0.14em] flex-shrink-0">
            / 01
          </span>
          <span className="text-[13px] font-bold tracking-[0.16em] text-[#0E1116] uppercase flex-shrink-0">
            Galerie · Installations Terrain
          </span>
          <span className="flex-1 h-px bg-[#E7E3DB]" />
        </div>

        {/* Mosaïque éditoriale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 lg:auto-rows-[118px]">
          <GalleryTile
            item={hero}
            onOpen={setSelectedItem}
            className="sm:col-span-2 lg:col-span-7 lg:row-span-3 aspect-[16/10] lg:aspect-auto"
            titleClassName="text-xl md:text-2xl"
          />
          <GalleryTile
            item={tall}
            onOpen={setSelectedItem}
            className="lg:col-span-5 lg:row-span-3 aspect-[4/3] lg:aspect-auto"
            titleClassName="text-lg md:text-xl"
          />
          {rest.map((item) => (
            <GalleryTile
              key={item.id}
              item={item}
              onOpen={setSelectedItem}
              className="lg:col-span-4 lg:row-span-2 aspect-[4/3] lg:aspect-auto"
              titleClassName="text-base md:text-lg"
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E1116]/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className="relative max-w-5xl w-full h-[80vh] rounded-2xl overflow-hidden bg-[#12161C] shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0E1116]/85 to-transparent">
              <div className="font-serif text-white text-2xl">{selectedItem.title}</div>
              {selectedItem.subtitle && (
                <div className="font-mono text-xs text-[#D8DCE1] mt-1">
                  {selectedItem.subtitle}
                </div>
              )}
            </div>
            <button
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#0E1116] hover:text-white hover:bg-[#E11D2A] transition-all shadow-sm cursor-pointer"
              onClick={() => setSelectedItem(null)}
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
