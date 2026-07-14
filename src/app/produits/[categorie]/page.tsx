import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categories, categorySlugs, getCategory } from "@/lib/catalogue";
import { publicAssetOrUndefined } from "@/lib/assets";
import { SITE } from "@/lib/site";
import { ChevronRight, RadioTower, Zap, SatelliteDish, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PageProps {
    params: Promise<{
        categorie: string;
    }>;
}

const categoryIcons: Record<string, LucideIcon> = {
    "tete-de-station-et-fibre": RadioTower,
    "amplification-et-distribution": Zap,
    "reception-et-connectique": SatelliteDish,
};

export function generateStaticParams() {
    return categorySlugs.map((categorie) => ({
        categorie,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { categorie } = await params;
    const categoryData = getCategory(categorie);
    if (!categoryData) return {};
    const title = `${categoryData.name} — Catalogue`;
    const description = `Équipements professionnels ${categoryData.name} pour les infrastructures de télédistribution en Algérie : ${categoryData.products
        .map((p) => p.name)
        .slice(0, 3)
        .join(", ")}…`;
    return {
        title,
        description,
        alternates: {
            canonical: `/produits/${categorie}`,
        },
        openGraph: {
            type: "website",
            locale: "fr_DZ",
            siteName: SITE.name,
            title: `${title} | ESAT`,
            description,
            url: `/produits/${categorie}`,
            images: [{ url: "/og-image.png", width: 1200, height: 630 }],
        },
    };
}

export default async function CategoriePage({ params }: PageProps) {
    const resolvedParams = await params;
    const categoryData = getCategory(resolvedParams.categorie);

    if (!categoryData) {
        notFound();
    }

    const CategoryIcon = categoryIcons[resolvedParams.categorie] ?? RadioTower;
    const pageUrl = `${SITE.url}/produits/${resolvedParams.categorie}`;

    // Données structurées : fil d'Ariane + liste des produits de la catégorie.
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
            { "@type": "ListItem", position: 2, name: categoryData.name, item: pageUrl },
        ],
    };
    const itemListJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: categoryData.name,
        numberOfItems: categoryData.products.length,
        itemListElement: categoryData.products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            description: product.description,
            url: `${pageUrl}#${product.id}`,
        })),
    };

    return (
        <div className="flex flex-col flex-1 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />
            {/* En-tête de catégorie */}
            <section className="bg-gradient-to-b from-slate-50 to-white border-b border-gray-200 pt-14 pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Fil d'Ariane */}
                    <nav aria-label="Fil d’Ariane" className="flex items-center gap-1.5 text-sm text-slate-500 mb-8">
                        <Link href="/" className="hover:text-red-600 transition-colors">
                            Accueil
                        </Link>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                        <span>Catalogue</span>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                        <span className="font-semibold text-slate-900">{categoryData.name}</span>
                    </nav>

                    <div className="flex items-start gap-5">
                        <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-red-50 border border-red-100 items-center justify-center flex-shrink-0">
                            <CategoryIcon className="w-8 h-8 text-red-600" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-sm font-semibold tracking-widest uppercase text-red-600">
                                Catalogue Matériel
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                                {categoryData.name}
                            </h1>
                            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                                Découvrez notre gamme complète d’équipements professionnels
                                pour les infrastructures de télédistribution et réseaux haut
                                débit.
                            </p>
                        </div>
                    </div>

                    {/* Navigation entre catégories */}
                    <div className="flex flex-wrap gap-3 mt-10">
                        {categories.map((cat) =>
                            cat.slug === resolvedParams.categorie ? (
                                <span
                                    key={cat.slug}
                                    aria-current="page"
                                    className="px-5 py-2.5 rounded-full text-sm font-semibold bg-red-600 text-white border border-red-600 shadow-md shadow-red-600/20"
                                >
                                    {cat.name}
                                </span>
                            ) : (
                                <Link
                                    key={cat.slug}
                                    href={`/produits/${cat.slug}`}
                                    className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-slate-700 border border-gray-200 hover:border-red-300 hover:text-red-600 transition-colors"
                                >
                                    {cat.name}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Grille de produits */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categoryData.products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                image={publicAssetOrUndefined(product.image)}
                                icon={<CategoryIcon className="w-9 h-9" />}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bandeau CTA */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 md:p-14">
                    <div
                        className="absolute -top-24 -right-24 w-72 h-72 bg-red-600/30 blur-3xl rounded-full pointer-events-none"
                        aria-hidden="true"
                    />
                    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="space-y-3 max-w-xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                Un projet ou un besoin spécifique ?
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                Nos ingénieurs vous conseillent sur le choix du matériel et
                                chiffrent votre installation, de l’étude à la mise en service.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-red-50 transition-colors flex-shrink-0"
                        >
                            Contacter un expert
                            <ArrowRight className="w-5 h-5 text-red-600 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
