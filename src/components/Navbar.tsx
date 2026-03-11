"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Router, Activity, RadioTower } from "lucide-react";
import data from "@/lib/data.json";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    const icons = {
        "tete-de-station-et-fibre": <Router className="w-5 h-5 text-red-600" />,
        "amplification-et-distribution": <Activity className="w-5 h-5 text-red-600" />,
        "reception-et-connectique": <RadioTower className="w-5 h-5 text-red-600" />,
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
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
                <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-medium">
                    <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                        Accueil
                    </Link>
                    <Link href="/#solutions" className="text-slate-600 hover:text-slate-900 transition-colors">
                        Solutions
                    </Link>

                    {/* Catalogue with Mega Menu */}
                    <div
                        className="relative h-16 flex items-center"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors">
                            Catalogue Matériel
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                            {isMegaMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-16 left-1/2 -translate-x-1/2 w-[780px] bg-white border border-gray-200 rounded-2xl shadow-xl shadow-slate-200/60 p-6 grid grid-cols-3 gap-6"
                                >
                                    {Object.entries(data.catalogue).map(([key, category]) => (
                                        <div key={key} className="flex flex-col gap-3">
                                            <Link
                                                href={`/produits/${key}`}
                                                className="flex items-center gap-3 group/link"
                                                onClick={() => setIsMegaMenuOpen(false)}
                                            >
                                                <div className="p-2 rounded-lg bg-gray-50 border border-gray-200 group-hover/link:border-red-200 group-hover/link:bg-red-50 transition-colors">
                                                    {icons[key as keyof typeof icons]}
                                                </div>
                                                <h3 className="font-semibold text-slate-800 group-hover/link:text-red-600 transition-colors text-sm">
                                                    {category.name}
                                                </h3>
                                            </Link>
                                            <ul className="space-y-1.5 pl-12">
                                                {category.products.slice(0, 3).map((product) => (
                                                    <li key={product.id}>
                                                        <Link
                                                            href={`/produits/${key}#${product.id}`}
                                                            className="text-sm text-slate-500 hover:text-red-600 transition-colors line-clamp-1"
                                                            onClick={() => setIsMegaMenuOpen(false)}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li>
                                                    <Link
                                                        href={`/produits/${key}`}
                                                        className="text-xs font-semibold text-slate-400 hover:text-red-600 transition-colors flex items-center gap-1 mt-1"
                                                        onClick={() => setIsMegaMenuOpen(false)}
                                                    >
                                                        Voir tout →
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/#entreprise" className="text-slate-600 hover:text-slate-900 transition-colors">
                        L'Entreprise
                    </Link>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <a
                        href="mailto:contact@entreprise.dz"
                        className="px-5 py-2.5 rounded-full bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors shadow-sm"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:text-slate-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden border-t border-gray-200 bg-white overflow-hidden"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            <Link href="/" className="text-slate-700 font-medium p-3 hover:bg-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
                            <Link href="/#solutions" className="text-slate-700 font-medium p-3 hover:bg-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>

                            <div className="flex flex-col gap-2 p-3">
                                <span className="text-slate-700 font-medium">Catalogue Matériel</span>
                                <div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-200 ml-2">
                                    {Object.entries(data.catalogue).map(([key, category]) => (
                                        <Link
                                            key={key}
                                            href={`/produits/${key}`}
                                            className="text-slate-500 hover:text-red-600 text-sm py-1 transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link href="/#entreprise" className="text-slate-700 font-medium p-3 hover:bg-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>L'Entreprise</Link>
                            <a
                                href="mailto:contact@entreprise.dz"
                                className="mt-2 px-4 py-3 text-center rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors"
                            >
                                Nous Contacter
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
