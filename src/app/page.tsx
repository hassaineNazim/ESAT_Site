import data from "@/lib/data.json";
import {
  MonitorPlay,
  Radio,
  Satellite,
  ShieldCheck,
  Wrench,
  HeadphonesIcon,
  ArrowRight,
  Building2,
  Briefcase,
  Landmark,
  Globe2,
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

  const partnerIcons: Record<string, any> = {
    Building2,
    Briefcase,
    Landmark,
    Globe2,
    ShieldCheck,
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
              href="#entreprise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600/90 backdrop-blur-sm text-white font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-900/50 border border-red-500/50 hover:border-red-500"
            >
              Notre Expertise
              <ArrowRight className="w-5 h-5" />
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

      {/* ── Clients / Social Proof strip Removed ── */}

      {/* ── Solutions Section (Bento Grid) Removed ── */}

      {/* ── Affichage Dynamique ── */}
      <section className="py-24 px-4 bg-white text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Video */}
          <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 group border border-gray-100">
            <video
              src="/animationDS.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            {/* Subtle overlay to blend the video nicely */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold tracking-wide border border-red-100">
                <MonitorPlay className="w-4 h-4" />
                <span>AFFICHAGE DYNAMIQUE</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Communiquez en temps <span className="text-red-600">réel</span> avec vos audiences
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Modernisez votre communication interne et externe. Diffusez, programmez 
                et centralisez vos contenus multimédias sur un réseau d'écrans professionnels 
                depuis une interface web intuitive.
              </p>
            </div>

            <ul className="space-y-5 pt-4 border-t border-gray-100">
              {[
                { 
                  title: "Gestion centralisée & Cloud", 
                  desc: "Pilotez des dizaines d'écrans en simultané, où que vous soyez.",
                  icon: <Globe2 className="w-5 h-5 text-red-600" />
                },
                { 
                  title: "Contenus Riches", 
                  desc: "Vidéos, images promotionnelles, flux RSS virtuels, et widgets météo.",
                  icon: <Radio className="w-5 h-5 text-red-600" />
                },
                { 
                  title: "Planification Intelligente", 
                  desc: "Programmez des campagnes sur-mesure selon l'heure ou l'audience.",
                  icon: <Satellite className="w-5 h-5 text-red-600" />
                }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed mt-1 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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

      {/* ── Nos Collaborateurs ── */}
      <section className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-widest uppercase text-red-600">
              Partenaires
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Nos Collaborateurs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Ils nous font confiance pour bâtir des solutions robustes et pérennes.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {data.collaborateurs.map((collab) => {
              const isImage = collab.logo.startsWith("/") || collab.logo.startsWith("http");
              const IconComp = !isImage ? (partnerIcons[collab.logo] || Building2) : null;
              
              return (
                <div key={collab.id} className="flex flex-col items-center gap-4 group cursor-pointer">
                  <div className="w-24 h-24 relative bg-slate-50 border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-red-300 transition-all duration-300 overflow-hidden">
                    {isImage ? (
                      <Image 
                        src={collab.logo} 
                        alt={collab.name} 
                        width={60} 
                        height={60} 
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      IconComp && <IconComp className="w-10 h-10 text-slate-400 group-hover:text-red-500 transition-colors duration-300" />
                    )}
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-red-600 transition-colors uppercase tracking-wider">
                    {collab.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4 bg-slate-50 border-t border-gray-200">
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
