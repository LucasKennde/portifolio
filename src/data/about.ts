import githubIcon from "devicon/icons/github/github-original.svg";
import linkedinIcon from "devicon/icons/linkedin/linkedin-plain.svg";
import type { AboutFact, ContactItem } from "../types";

export const aboutFacts: AboutFact[] = [
  {
    id: "role",
    icon: "bi bi-code-slash",
    text: "Desenvolvedor Full Stack desde 2024",
  },
  {
    id: "study",
    icon: "bi bi-pc-display",
    text: "Cursando Programação Full Stack",
  },
  {
    id: "interest",
    icon: "bi bi-braces",
    text: "Interesse em desenvolvimento Front End",
  },
  {
    id: "goal",
    icon: "bi bi-search",
    text: "Buscando uma oportunidade para atuar como desenvolvedor",
  },
];

export const contactItems: ContactItem[] = [
  {
    id: "linkedin",
    icon: { kind: "image", src: linkedinIcon },
    label: "linkedin/lucaskennde",
    href: "https://www.linkedin.com/in/lucaskennde",
  },
  {
    id: "github",
    icon: { kind: "image", src: githubIcon },
    label: "github/lucaskennde",
    href: "https://github.com/lucaskennde",
  },
  {
    id: "email",
    icon: { kind: "font", className: "bi bi-envelope" },
    label: "lucaskennde@gmail.com",
    href: "mailto:lucaskennde@gmail.com",
  },
  {
    id: "phone",
    icon: { kind: "font", className: "bi bi-phone" },
    label: "(85) 9 9262-4596",
    href: "tel:+5585992624596",
  },
];
