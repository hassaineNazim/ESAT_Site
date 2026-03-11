import data from "@/lib/data.json";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";

interface PageProps {
    params: Promise<{
        categorie: string;
    }>;
}

export function generateStaticParams() {
    return Object.keys(data.catalogue).map((categorie) => ({
        categorie,
    }));
}

export default async function CategoriePage({ params }: PageProps) {
    const resolvedParams = await params;
    const categorieKey = resolvedParams.categorie as keyof typeof data.catalogue;
    const categoryData = data.catalogue[categorieKey];

    if (!categoryData) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <section className="bg-surface border-b border-white/10 pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                        Catalogue Matériel
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {categoryData.name}
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl">
                        Découvrez notre gamme complète d'équipements professionnels pour les infrastructures de télédistribution et réseaux haut débit.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categoryData.products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                image={product.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
