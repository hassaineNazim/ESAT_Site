import { ReactNode } from "react";
import { Mail, Package } from "lucide-react";
import Image from "next/image";
import { contactMailto } from "@/lib/site";

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    image?: string;
    /** Icône de la catégorie, affichée en attendant les photos produits */
    icon?: ReactNode;
}

export function ProductCard({ id, name, description, image, icon }: ProductCardProps) {
    const mailToLink = contactMailto(`Devis pour: ${name} (Réf: ${id})`);

    return (
        <div
            id={id}
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-red-200 hover:shadow-lg hover:shadow-red-100/40 hover:-translate-y-1 transition-all duration-300"
        >
            {/* Visuel produit */}
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 border-b border-gray-200 relative overflow-hidden flex items-center justify-center">
                {image ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            priority={id === "p1" || id === "p5" || id === "p9"}
                        />
                    </div>
                ) : (
                    <div className="w-20 h-20 rounded-2xl bg-white border border-red-100 shadow-sm flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                        {icon ?? <Package className="w-9 h-9" />}
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {name}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                    {description}
                </p>

                <a
                    href={mailToLink}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors"
                >
                    <Mail className="w-4 h-4" />
                    Demander un devis
                </a>
            </div>
        </div>
    );
}
