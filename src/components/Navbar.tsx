"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/lib/catalogue";
import { contactMailto } from "@/lib/site";

const anchorLinks = [
    { label: "Accueil", href: "/" },
    { label: "Affichage Dynamique", href: "/#affichage" },
    { label: "Solutions", href: "/#solutions" },
];

const anchorLinksEnd = [
    { label: "Réalisations", href: "/#realisations" },
    { label: "L’Entreprise", href: "/#entreprise" },
    { label: "Partenaires", href: "/#partenaires" },
];

function DesktopLink({ label, href }: { label: string; href: string }) {
    return (
        <Link
            href={href}
            className="text-slate-600 hover:text-red-600 transition-colors relative group py-2"
        >
            {label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
        </Link>
    );
}

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/Logo-ESat.png"
                        alt="ESAT Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                        priority
                    />
                    <span className="text-xl font-bold text-slate-900 tracking-tight">E-SAT</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 text-sm font-semibold tracking-wide">
                    {anchorLinks.map((item) => (
                        <DesktopLink key={item.href} {...item} />
                    ))}

                    {/* Dropdown Catalogue (CSS : hover + focus-within, accessible clavier) */}
                    <div className="relative group">
                        <button
                            type="button"
                            className="inline-flex items-center gap-1.5 text-slate-600 group-hover:text-red-600 group-focus-within:text-red-600 transition-colors py-2"
                        >
                            Catalogue
                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                            <div className="w-72 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/60 p-2">
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.slug}
                                        href={`/produits/${cat.slug}`}
                                        className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                    >
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {anchorLinksEnd.map((item) => (
                        <DesktopLink key={item.href} {...item} />
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href={contactMailto()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu — repli CSS pur (grid-rows), sans dépendance d'animation */}
            <div
                id="mobile-menu"
                inert={!isMobileMenuOpen}
                className={`lg:hidden absolute w-full left-0 origin-top border-t border-slate-100 bg-white shadow-xl grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="p-4 flex flex-col gap-1 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto">
                        {[...anchorLinks, ...anchorLinksEnd].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-slate-700 font-semibold p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <p className="px-3 pt-4 pb-1 text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-100 mt-2">
                            Catalogue Matériel
                        </p>
                        {categories.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/produits/${cat.slug}`}
                                className="text-slate-700 font-semibold p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {cat.name}
                            </Link>
                        ))}

                        <a
                            href={contactMailto()}
                            className="mt-4 px-4 py-3.5 text-center rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all shadow-md shadow-red-500/20 active:scale-95"
                        >
                            Nous Contacter
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
