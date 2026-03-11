import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import data from "@/lib/data.json";
import {
  MonitorPlay,
  Radio,
  Satellite,
  ShieldCheck,
  Wrench,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const solutionConfig = {
    iptv: {
      icon: <MonitorPlay className="w-8 h-8 text-red-600" />,
      colSpan: "md:col-span-2",
      headerBg: "from-red-50 to-rose-100/50",
      image: null,
    },
    "dvb-t-c": {
      icon: <Radio className="w-8 h-8 text-red-600" />,
      colSpan: "",
      headerBg: "from-slate-50 to-gray-100/50",
      image: "/DVB-T.png",
    },
    bis: {
      icon: <Satellite className="w-8 h-8 text-red-600" />,
      colSpan: "",
      headerBg: "from-slate-50 to-gray-100/50",
      image: "/BIS.jpg",
    },
  };

  return (
    <div className="flex flex-col">
      {/* ── Hero Section ── */}
      <section className="relative px-4 py-32 lg:py-48 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/technicienServeur.png"
            alt="Expertise Installation Télédistribution"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-lg">
            Solutions de{" "}
            <span className="text-red-500 drop-shadow-md">Télédistribution</span>
            <br />et Réseaux
          </h1>

          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Déploiement d'infrastructures IPTV, DVB-T/C et Fibre Optique pour
            les environnements exigeants.{" "}
            <span className="text-white font-semibold">
              Hôtellerie, Hôpitaux, Collectivités.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600/90 backdrop-blur-sm text-white font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-900/50 border border-red-500/50 hover:border-red-500"
            >
              Découvrir nos solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#entreprise"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900/40 backdrop-blur-md text-white font-semibold border border-white/20 hover:bg-slate-800/60 hover:border-white/40 transition-all shadow-lg"
            >
              Notre Expertise
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-6">
            <div className="flex items-center gap-3 text-slate-300">
              <ShieldCheck className="w-6 h-6 text-red-500" />
              <span className="text-sm font-medium tracking-wide uppercase">Installation Certifiée</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients / Social Proof strip ── */}
      <div className="bg-slate-50 border-y border-gray-200 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-10 text-sm font-medium text-slate-400 tracking-widest uppercase text-xs">
          {["Hôtellerie", "Hôpitaux", "Collectivités", "Résidences", "Universités"].map(
            (label) => (
              <span key={label}>{label}</span>
            )
          )}
        </div>
      </div>

      {/* ── Solutions Section (Bento Grid) ── */}
      <section id="solutions" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-3">
            <p className="text-sm font-semibold tracking-widest uppercase text-red-600">
              Nos Solutions
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-xl">
              Des infrastructures robustes et évolutives
            </h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              Garantissant une diffusion ininterrompue et une gestion centralisée,
              adaptées à vos contraintes métier.
            </p>
          </div>

          <BentoGrid className="max-w-full">
            {data.solutions.map((solution) => {
              const config =
                solutionConfig[solution.id as keyof typeof solutionConfig];
              return (
                <BentoGridItem
                  key={solution.id}
                  title={solution.title}
                  description={
                    <div className="space-y-4">
                      <p className="text-slate-600">{solution.description}</p>
                      <ul className="text-sm text-slate-500 space-y-1.5 mt-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                  header={
                    <div
                      className={`relative flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br ${config.headerBg} border border-gray-100 overflow-hidden group/header`}
                    >
                      {config.image && (
                        <Image
                          src={config.image as string}
                          alt={String(solution.title)}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover/bento:scale-105"
                        />
                      )}
                    </div>
                  }
                  className={config.colSpan}
                  icon={config.icon}
                />
              );
            })}
          </BentoGrid>
        </div>
      </section>

      {/* ── Expertise & Services ── */}
      <section id="entreprise" className="py-24 px-4 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-3">
            <p className="text-sm font-semibold tracking-widest uppercase text-red-600">
              L'Entreprise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-xl">
              L'Engagement ESAT
            </h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              Partenaire de confiance des professionnels, nous vous accompagnons
              de l'audit initial au maintien en condition opérationnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: ShieldCheck,
                title: "Qualité d'Installation",
                body: "Nos équipes techniques certifiées assurent une pose dans les règles de l'art, garantissant la longévité et la performance de vos équipements.",
              },
              {
                Icon: Wrench,
                title: "Ingénierie & Audit",
                body: "Étude de propagation, bilans de liaison et architecture réseaux sur mesure pour répondre précisément à vos contraintes techniques.",
              },
              {
                Icon: HeadphonesIcon,
                title: "Support B2B Dédié",
                body: "Un accompagnement réactif post-déploiement. Contrats de maintenance (SLA) personnalisés pour une disponibilité maximale.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-red-200 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Un projet de télédistribution ?
          </h2>
          <p className="text-slate-600 text-lg">
            Décrivez-nous votre besoin. Notre équipe ingénierie vous répond sous 48h
            avec une étude technique préliminaire.
          </p>
          <a
            href="mailto:contact@entreprise.dz?subject=Demande de contact - Projet Télédistribution"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition-colors shadow-md shadow-red-200"
          >
            Discutons de votre projet
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 border-t border-gray-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} ESAT. Solutions Réseaux B2B.</p>
          <a
            href="mailto:contact@entreprise.dz"
            className="text-red-600 hover:text-red-700 font-medium transition-colors"
          >
            contact@entreprise.dz
          </a>
        </div>
      </footer>
    </div>
  );
}
