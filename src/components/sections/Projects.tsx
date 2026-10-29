import { projects } from "../../data/projects";
import { SectionTitle } from "../ui/SectionTitle";
import { ProjectCard } from "./projects/ProjectCard";

export function Projects() {
  return (
    <section
      id="projetos"
      className="flex h-full w-full flex-col items-center justify-center"
    >
      <div className="section-scroll flex h-[calc(100vh-180px)] w-full flex-col items-center overflow-y-auto text-cream">
        <div className="flex w-full flex-col items-center px-4 md:w-[90%] xl:w-[80%]">
          <SectionTitle>Projetos</SectionTitle>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
