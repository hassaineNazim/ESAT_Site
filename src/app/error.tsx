"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Home, TriangleAlert } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Trace côté client pour diagnostic (aucune donnée envoyée à un tiers).
    console.error(error);
  }, [error]);

  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-32">
      <div className="w-20 h-20 rounded-3xl bg-red-50 border border-red-100 flex items-center justify-center mb-8">
        <TriangleAlert className="w-10 h-10 text-red-600" />
      </div>
      <p className="text-sm font-semibold tracking-widest uppercase text-red-600 mb-3">
        Erreur inattendue
      </p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
        Un incident est survenu
      </h1>
      <p className="text-lg text-slate-600 max-w-md leading-relaxed mb-10">
        Une erreur technique a interrompu l’affichage de cette page. Vous
        pouvez réessayer ou revenir à l’accueil.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
        >
          <RefreshCcw className="w-5 h-5" />
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-slate-700 font-semibold hover:border-red-300 hover:text-red-600 transition-colors"
        >
          <Home className="w-5 h-5" />
          Retour à l’accueil
        </Link>
      </div>
    </section>
  );
}
