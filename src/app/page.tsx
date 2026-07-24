import { solutions, collaborateurs } from "@/lib/catalogue";
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
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContactSection } from "@/components/ContactSection";
import { LazyVideo } from "@/components/LazyVideo";
import { InstallationsGallery } from "@/components/InstallationsGallery";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";

/* Cartes Solutions : icône + visuel par id de data.json.
   Les visuels basse résolution (DVB-T, BIS) sont affichés en `contain`
   sur fond dégradé pour éviter l'agrandissement flou. */
const solutionCards = [
  {
    id: "iptv",
    icon: MonitorPlay,
    image: "/couverture.jpg",
    cover: true,
    width: 0,
    height: 0,
  },
  {
    id: "dvb-t-c",
    icon: Radio,
    image: "/DVB-T.png",
    cover: false,
    width: 300,
    height: 168,
  },
  {
    id: "bis",
    icon: Satellite,
    image: "/BIS.jpg",
    cover: false,
    width: 263,
    height: 192,
  },
].map((cfg) => ({
  ...cfg,
  solution: solutions.find((s) => s.id === cfg.id)!,
}));

const heroHighlights = [
  { icon: ShieldCheck, label: "Installation Certifiée" },
  { icon: Wrench, label: "Maintenance & SAV" },
  { icon: HeadphonesIcon, label: "Support Dédié" },
];

const engagements = [
  {
    image: "/install_qualite.png",
    icon: ShieldCheck,
    title: "Qualité d’Installation",
    body: "Nos équipes techniques certifiées garantissent la longévité et la performance de vos équipements.",
  },
  {
    image: "/audit_ingenierie.png",
    icon: Wrench,
    title: "Maintenance",
    body: "Contrats de maintenance personnalisés pour une disponibilité maximale.",
  },
  {
    image: "/support_b2b.png",
    icon: HeadphonesIcon,
    title: "Support Dédié",
    body: "Support technique et commercial dédié pour répondre à toutes vos demandes.",
  },
];

const affichageFeatures = [
  {
    title: "Gestion centralisée",
    desc: "Pilotez des dizaines d’écrans en simultané, où que vous soyez.",
    icon: Globe2,
  },
  {
    title: "Contenus Riches",
    desc: "Vidéos, images promotionnelles, flux RSS virtuels, et widgets météo.",
    icon: Radio,
  },
  {
    title: "Planification Intelligente",
    desc: "Programmez des campagnes sur-mesure selon l’heure ou l’audience.",
    icon: Satellite,
  },
];

const partnerIcons: Record<string, LucideIcon> = {
  Building2,
  Briefcase,
  Landmark,
  Globe2,
  ShieldCheck,
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero Section ── */}
      <section className="relative px-4 py-32 lg:py-44 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/couverture.jpg"
            alt="Technicien ESAT Solutions TV au stade"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Dégradé pour la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/60 to-slate-950/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-white/90">
            <Satellite className="w-4 h-4 text-red-400" />
            Télédistribution · Affichage Dynamique · Réseaux
          </div>

          <h1 className="animate-fade-up animation-delay-100 text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-lg">
            Solutions de{" "}
            <span className="text-red-500 drop-shadow-md">Télédistribution</span>
          </h1>

          <p className="animate-fade-up animation-delay-200 text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Déploiement d’infrastructures IPTV, DVB-T/C et Fibre Optique pour
            les environnements les plus exigeants.{" "}
            <span className="text-white font-semibold">
              Hôtellerie, Hôpitaux, Collectivités.
            </span>
          </p>

          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-bold hover:bg-red-500 transition-all shadow-lg shadow-red-950/40 hover:-translate-y-0.5"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/15 hover:border-white/40 transition-all"
            >
              Découvrir nos solutions
            </Link>
          </div>

          <div className="animate-fade-up animation-delay-300 mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {heroHighlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-slate-300">
                <Icon className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Affichage Dynamique ── */}
      <section id="affichage" className="py-24 px-4 bg-white text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Gauche : vidéo */}
          <div className="w-full lg:w-3/5 relative">
            <div
              className="absolute -inset-6 bg-red-100/60 blur-3xl rounded-full pointer-events-none"
              aria-hidden="true"
            />
            <LazyVideo
              src="/animationDS.mp4"
              poster="/animationDS-poster.jpg"
              posterWidth={1280}
              posterHeight={720}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 ring-1 ring-slate-900/10"
            />
          </div>

          {/* Droite : contenu */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold tracking-wide border border-red-100">
                <MonitorPlay className="w-4 h-4" />
                <span>AFFICHAGE DYNAMIQUE</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Communiquez en temps <span className="text-red-600">réel</span>{" "}
                avec vos audiences
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Modernisez votre communication interne et externe. Diffusez,
                programmez et centralisez vos contenus multimédias sur un réseau
                d’écrans professionnels depuis une interface web intuitive.
              </p>
            </div>

            <ul className="space-y-5 pt-4 border-t border-gray-100">
              {affichageFeatures.map(({ title, desc, icon: Icon }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg">{title}</h3>
                    <p className="text-slate-500 leading-relaxed mt-1 text-sm">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors"
            >
              Discuter de votre projet
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Solutions Section ── */}
      <section id="solutions" className="py-24 px-4 bg-slate-50 relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase text-red-600">
              Nos Expertises
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Nos Solutions <span className="text-red-600">Techniques</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Des infrastructures fiables et évolutives, de la réception
              satellite jusqu’à l’écran final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionCards.map(
              ({ id, icon: Icon, image, cover, width, height, solution }) => (
                <div
                  key={id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/80 hover:-translate-y-1 hover:border-red-100 transition-all duration-300 flex flex-col group"
                >
                  {cover ? (
                    <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={image}
                        alt={solution.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ) : (
                    <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-200/70 flex items-center justify-center p-8">
                      <Image
                        src={image}
                        alt={solution.title}
                        width={width}
                        height={height}
                        className="object-contain max-h-full w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-2 shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed flex-1">
                      {solution.description}
                    </p>
                    <ul className="space-y-2 pt-4 border-t border-gray-100 mt-4">
                      {solution.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-sm text-slate-600 font-medium"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Une Installation Professionnelle ── */}
      <InstallationsGallery />

      {/* ── Nos Projets & Références ── */}
      <ProjectsCarousel />

      {/* ── Expertise & Services ── */}
      <section id="entreprise" className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-3">
            <p className="text-sm font-semibold tracking-widest uppercase text-red-600">
              L’Entreprise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-xl">
              L’Engagement ESAT
            </h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              Partenaire de confiance des professionnels, nous vous accompagnons
              de l’audit initial au maintien en condition opérationnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagements.map(({ image, icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-white border border-gray-200 hover:border-red-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
              >
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="w-14 h-14 rounded-xl bg-white border border-red-100 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform absolute -top-7 left-8">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nos Collaborateurs ── */}
      <section id="partenaires" className="py-24 px-4 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-widest uppercase text-red-600">
              Partenaires
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Nos Collaborateurs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Ils nous font confiance pour bâtir des solutions robustes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {collaborateurs.map((collab) => {
              const isImage =
                collab.logo.startsWith("/") || collab.logo.startsWith("http");
              const IconComp = !isImage
                ? partnerIcons[collab.logo] || Building2
                : null;

              return (
                <div key={collab.id} className="flex flex-col items-center gap-4 group">
                  <div className="w-24 h-24 relative bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-red-300 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    {isImage ? (
                      <Image
                        src={collab.logo}
                        alt={collab.name}
                        width={60}
                        height={60}
                        className="object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                      />
                    ) : (
                      IconComp && (
                        <IconComp className="w-10 h-10 text-slate-400 group-hover:text-red-500 transition-colors duration-300" />
                      )
                    )}
                  </div>
                  <span className="text-sm font-bold text-slate-500 group-hover:text-red-600 transition-colors uppercase tracking-wider">
                    {collab.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <ContactSection />
    </div>
  );
}
