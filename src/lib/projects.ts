export type ProjectType = "institution" | "stade" | "hotel" | "industrie";

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  image?: string;
}

export const projectsList: Project[] = [
  { id: "club-des-pins", name: "Club des Pins", type: "institution", image: "/projects/club-des-pins.jpg" },
  { id: "mhuv", name: "MHUV — Ministère de l'Habitat", type: "institution", image: "/projects/mhuv.jpg" },
  { id: "stade-douera", name: "Stade de Douéra — Mouloudia", type: "stade", image: "/projects/stade-douera.jpg" },
  { id: "stade-baraki", name: "Stade Baraki — Nelson Mandela", type: "stade", image: "/projects/stade-baraki.jpg" },
  { id: "stade-oran", name: "Stade d'Oran", type: "stade", image: "/projects/stade-oran.jpg" },
  { id: "stade-tizi-ouzou", name: "Stade de Tizi Ouzou — JSK", type: "stade", image: "/projects/stade-tizi-ouzou.jpg" },
  { id: "ad-hotel-hydra", name: "AD Hôtel — Hydra", type: "hotel", image: "/projects/ad-hotel-hydra.jpg" },
  { id: "sheraton-staoueli", name: "Sheraton — Staoueli", type: "hotel", image: "/projects/sheraton-staoueli.jpg" },
  { id: "marriott-bab-ezzouar", name: "Marriott — Bab Ezzouar", type: "hotel", image: "/projects/marriott-bab-ezzouar.jpg" },
  { id: "meridien-oran", name: "Le Méridien — Oran", type: "hotel", image: "/projects/meridien-oran.jpg" },
  { id: "doriane-beach-club", name: "Doriane Beach Club — Terga", type: "hotel", image: "/projects/doriane-beach-club.jpg" },
  { id: "renaissance-tlemcen", name: "Renaissance — Tlemcen", type: "hotel", image: "/projects/renaissance-tlemcen.jpg" },
  { id: "seybouse-annaba", name: "Seybouse — Annaba", type: "hotel", image: "/projects/seybouse-annaba.jpg" },
  { id: "rym-el-djamil", name: "Rym El Djamil — Annaba", type: "hotel", image: "/projects/rym-el-djamil.jpg" },
  { id: "tosyali-oran", name: "Tosyali — Oran (Arzew)", type: "industrie", image: "/projects/tosyali-oran.jpg" },
  { id: "hotel-kbf", name: "Hôtel KBF — Birkhadem", type: "hotel", image: "/projects/hotel-kbf.jpg" },
  { id: "sonatrach-skikda", name: "Sonatrach Skikda — Raffinerie", type: "industrie", image: "/projects/sonatrach-skikda.jpg" },
  { id: "port-skikda", name: "Port de Skikda", type: "industrie", image: "/projects/port-skikda.jpg" },
  { id: "aqs", name: "AQS — Algerian Qatari Steel", type: "industrie", image: "/projects/aqs.jpg" },
];
