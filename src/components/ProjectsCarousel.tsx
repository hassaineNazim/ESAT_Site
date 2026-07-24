import { Building2, Landmark, Hotel, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { projectsList, Project } from "@/lib/projects";

const getCategoryIcon = (category: string): LucideIcon => {
  const c = category.toLowerCase();
  if (c.includes("hôtellerie") || c.includes("hôtel")) return Hotel;
  if (c.includes("institution") || c.includes("ministère") || c.includes("administration"))
    return Landmark;
  return Building2;
};

function ProjectCard({ project, duplicate }: { project: Project; duplicate?: boolean }) {
  const IconComp = getCategoryIcon(project.category);
  return (
    <article
      aria-hidden={duplicate || undefined}
      className="w-[300px] sm:w-[340px] flex-shrink-0 bg-white rounded-2xl border border-gray-200 p-7 flex flex-col hover:border-red-200 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shadow-sm">
          <IconComp className="w-6 h-6" />
        </div>
        {project.badge && (
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider border border-gray-200">
            {project.badge}
          </span>
        )}
      </div>

      <div className="flex-1 flex flex-col space-y-2.5">
        {project.location && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-red-600 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{project.location}</span>
          </div>
        )}
        <h3 className="text-lg font-bold text-slate-900 leading-snug">{project.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed flex-1">{project.description}</p>
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {project.category}
          </p>
        </div>
      </div>
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
