import { motion } from "motion/react";
import type { Project } from "../../../types";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  return (
    <motion.div
      className={`mb-12 flex w-full flex-col gap-4 md:h-75 ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
      initial={{ opacity: 0, x: reversed ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-50 w-full shrink-0 overflow-hidden md:h-full md:w-[35%]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex w-full flex-col justify-center gap-4 text-left md:w-[64%]">
        <h2 className="font-display text-2xl md:text-3xl">{project.title}</h2>
        <p className="text-sm md:text-base">{project.description}</p>
        <ul className="flex list-none flex-wrap gap-4 text-sm font-semibold md:text-base">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <ul className="flex list-none gap-4">
          <li>
            <a href={project.demoUrl} aria-label={`Abrir ${project.title}`}>
              <i className="bi bi-link-45deg text-2xl text-cream/50 transition-transform duration-500 hover:scale-125 hover:text-cream" />
            </a>
          </li>
          <li>
            <a
              href={project.previewUrl}
              aria-label={`Pré-visualizar ${project.title}`}
            >
              <i className="bi bi-eye text-2xl text-cream/50 transition-transform duration-500 hover:scale-125 hover:text-cream" />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
