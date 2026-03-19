"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
                <nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-sm font-semibold tracking-wide">
                    <Link href="/" className="text-slate-600 hover:text-red-600 transition-colors relative group py-2">
                        Accueil
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                    <Link href="/#affichage" className="text-slate-600 hover:text-red-600 transition-colors relative group py-2">
                        Affichage Dynamique
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                    <Link href="/#solutions" className="text-slate-600 hover:text-red-600 transition-colors relative group py-2">
                        Solutions
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                    <Link href="/#entreprise" className="text-slate-600 hover:text-red-600 transition-colors relative group py-2">
                        L'Entreprise
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                    <Link href="/#partenaires" className="text-slate-600 hover:text-red-600 transition-colors relative group py-2">
                        Partenaires
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="mailto:contact@esat.dz"
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5"
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
                        className="md:hidden border-t border-slate-100 bg-white shadow-xl overflow-hidden absolute w-full left-0 origin-top"
                    >
                        <div className="p-4 flex flex-col gap-2 bg-white">
                            <Link href="/" className="text-slate-700 font-semibold p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
                            <Link href="/#affichage" className="text-slate-700 font-semibold p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Affichage Dynamique</Link>
                            <Link href="/#solutions" className="text-slate-700 font-semibold p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
                            <Link href="/#entreprise" className="text-slate-700 font-semibold p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>L'Entreprise</Link>
                            <Link href="/#partenaires" className="text-slate-700 font-semibold p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Partenaires</Link>
                            <a
                                href="mailto:contact@esat.dz"
                                className="mt-4 px-4 py-3.5 text-center rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all shadow-md shadow-red-500/20 active:scale-95"
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
