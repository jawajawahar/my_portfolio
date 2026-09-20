import { SectionContainer } from "@/components/ui/SectionContainer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <SectionContainer id="projects">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured Projects</h2>
      <p className="mt-3 max-w-xl text-muted">
        A mix of DevOps tooling, cloud infrastructure, and full-stack builds.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
