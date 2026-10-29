export type SectionId = "inicio" | "sobre" | "projetos";

export interface AboutFact {
  id: string;
  icon: string;
  text: string;
}

export interface Skill {
  id: string;
  label: string;
  icon: string;
}

export type ContactIcon =
  | { kind: "image"; src: string }
  | { kind: "font"; className: string };

export interface ContactItem {
  id: string;
  icon: ContactIcon;
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  previewUrl: string;
}
