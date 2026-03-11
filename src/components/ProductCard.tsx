import { Mail } from "lucide-react";

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    image: string;
}

export function ProductCard({ id, name, description, image }: ProductCardProps) {
    const mailSubject = encodeURIComponent(`Devis pour: ${name} (Réf: ${id})`);
    const mailToLink = `mailto:contact@entreprise.dz?subject=${mailSubject}`;

    return (
        <div
            id={id}
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-red-200 hover:shadow-md hover:shadow-red-100/50 transition-all duration-300"
        >
            {/* Product image placeholder */}
            <div className="aspect-[4/3] bg-slate-50 border-b border-gray-200 relative overflow-hidden flex items-center justify-center p-8">
                <div className="text-slate-400 font-medium text-sm text-center leading-relaxed">
                    {image.split("/").pop()?.replace(".jpg", "")}
                </div>
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
