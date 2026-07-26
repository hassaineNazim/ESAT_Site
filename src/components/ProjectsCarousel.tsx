import Image from "next/image";
import { Landmark, Hotel, Trophy, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { projectsList, Project, ProjectType } from "@/lib/projects";

const typeIcon: Record<ProjectType, LucideIcon> = {
  institution: Landmark,
  stade: Trophy,
  hotel: Hotel,
  industrie: Factory,
};

function ProjectCard({ project, duplicate }: { project: Project; duplicate?: boolean }) {
  const IconComp = typeIcon[project.type];

  if (project.image) {
    return (
      <article
        aria-hidden={duplicate || undefined}
        className="w-[240px] sm:w-[260px] h-64 flex-shrink-0 bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:border-red-200 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="260px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex items-center justify-center px-4 text-center">
          <h3 className="text-sm font-bold text-slate-900 leading-snug">{project.name}</h3>
        </div>
      </article>
    );
  }

  return (
    <article
      aria-hidden={duplicate || undefined}
      className="w-[210px] sm:w-[240px] h-64 flex-shrink-0 bg-white rounded-2xl border border-gray-200 px-6 flex flex-col items-center justify-center text-center gap-4 hover:border-red-200 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shadow-sm">
        <IconComp className="w-7 h-7" />
      </div>
      <h3 className="text-base font-bold text-slate-900 leading-snug">{project.name}</h3>
    </article>
  );
}

export function ProjectsCarousel() {
  return (
    <section id="projets" className="py-24 bg-slate-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold tracking-wide border border-red-100">
            <Landmark className="w-4 h-4" />
            <span>RÉFÉRENCES DE PRESTIGE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Nos <span className="text-red-600">Projets</span>{" "}
            &amp; Références
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Des institutions étatiques aux complexes hôteliers 5 étoiles : découvrez les
            projets majeurs équipés par nos ingénieurs.
          </p>
        </div>
      </div>

      {/* Bande défilante — pause au survol / au tap */}
      <div className="marquee-viewport relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-6 px-4">
          {projectsList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {projectsList.map((project) => (
            <ProjectCard key={`${project.id}-dup`} project={project} duplicate />
          ))}
        </div>
      </div>
    </section>
  );
}
