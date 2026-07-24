import data from "./data.json";

/**
 * Accès typé et centralisé au contenu de data.json.
 * Ajouter une catégorie ou un produit dans data.json suffit :
 * navbar, footer, sitemap et pages produits se mettent à jour automatiquement.
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface Category {
  name: string;
  products: Product[];
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Collaborateur {
  id: string;
  name: string;
  logo: string;
}

const catalogue: Record<string, Category> = data.catalogue;

export const solutions: Solution[] = data.solutions;
export const collaborateurs: Collaborateur[] = data.collaborateurs;

/** Liste ordonnée des catégories { slug, name } pour navigation, footer et sitemap. */
export const categories = Object.entries(catalogue).map(([slug, cat]) => ({
  slug,
  name: cat.name,
}));

export const categorySlugs = Object.keys(catalogue);

/** Retourne la catégorie ou undefined — sûr pour les slugs arbitraires d'URL. */
export function getCategory(slug: string): Category | undefined {
  return Object.prototype.hasOwnProperty.call(catalogue, slug)
    ? catalogue[slug]
    : undefined;
}
