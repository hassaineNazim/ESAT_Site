import Link from "next/link";
import { SatelliteDish, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-32">
      <div className="w-20 h-20 rounded-3xl bg-red-50 border border-red-100 flex items-center justify-center mb-8">
        <SatelliteDish className="w-10 h-10 text-red-600" />
      </div>
      <p className="text-sm font-semibold tracking-widest uppercase text-red-600 mb-3">
        Erreur 404
      </p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
        Signal perdu…
      </h1>
      <p className="text-lg text-slate-600 max-w-md leading-relaxed mb-10">
        La page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
        >
          <Home className="w-5 h-5" />
          Retour à l’accueil
        </Link>
        <Link
          href="/#contact"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-slate-700 font-semibold hover:border-red-300 hover:text-red-600 transition-colors"
        >
          Nous contacter
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
