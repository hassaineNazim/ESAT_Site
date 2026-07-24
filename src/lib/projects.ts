export interface Project {
  id: string;
  title: string;
  category: string;
  location?: string;
  description: string;
  image?: string;
  badge?: string;
}

export const projectsList: Project[] = [
  {
    id: "ministere-habitat",
    title: "Ministère de l'Habitat",
    category: "Institutionnel & Administration",
    location: "Alger, Algérie",
    description: "Déploiement d'une infrastructure de télédistribution et réseaux de communication IP haute sécurité pour l'ensemble des services ministériels.",
    badge: "Institution",
  },
  {
    id: "club-des-pins",
    title: "Résidence d'État Club des Pins",
    category: "Complexe Résidentiel & VIP",
    location: "Staoueli, Alger",
    description: "Installation complète du réseau de distribution télévisuelle multi-satellites (BIS commutée) et câblage haute densité.",
    badge: "Résidentiel VIP",
  },
  {
    id: "sheraton",
    title: "Hôtel Sheraton",
    category: "Hôtellerie 5 Étoiles & Luxe",
    location: "Club des Pins / Annaba",
    description: "Solution globale d'IPTV interactive, distribution télévisuelle HD dans toutes les suites et système d'affichage dynamique.",
    badge: "Hôtellerie 5★",
  },
  {
    id: "sofitel",
    title: "Hôtel Sofitel",
    category: "Hôtellerie 5 Étoiles",
    location: "Alger",
    description: "Rénovation du réseau de télédistribution numérique et intégration de têtes de station professionnelles.",
    badge: "Hôtellerie",
  },
  {
    id: "cic-alger",
    title: "Centre International de Conférences (CIC)",
    category: "Événementiel & Conférences",
    location: "Club des Pins, Alger",
    description: "Distribution vidéo haute densité et réseau d'écrans d'affichage dynamique pour événements internationaux.",
    badge: "Événementiel",
  },
  {
    id: "chu-alger",
    title: "Centre Hospitalier Universitaire",
    category: "Santé & Hôpitaux",
    location: "Alger",
    description: "Réseau coaxial blindé et distribution télévisuelle HD sécurisée chambre par chambre.",
    badge: "Santé",
  },
];
