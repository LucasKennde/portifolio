import govImage from "../assets/projects/gov.jpg";
import loginImage from "../assets/projects/login.png";
import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "projeto-gov",
    title: "Projeto Gov",
    description:
      "O Projeto GOV é uma plataforma fictícia de cadastro para um projeto social, desenvolvida exclusivamente para fins de estudo utilizando React Native. O aplicativo permite que os usuários realizem várias etapas de cadastro, fornecendo dados socioeconômicos. Um usuário administrador pode visualizar todos os cadastros, bem como aprová-los ou rejeitá-los conforme necessário.",
    image: govImage,
    technologies: ["React Native", "JavaScript", "Node.js", "MySQL"],
    demoUrl: "#",
    previewUrl: "#",
  },
  {
    id: "projeto-login-1",
    title: "Projeto Login",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officia minima, vitae praesentium ratione consequatur commodi dolorem maiores, corporis doloremque vel dolores sequi eos, soluta rerum incidunt dolor reiciendis. Quis.",
    image: loginImage,
    technologies: ["HTML", "CSS"],
    demoUrl: "#",
    previewUrl: "#",
  },
  {
    id: "projeto-login-2",
    title: "Projeto Login",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officia minima, vitae praesentium ratione consequatur commodi dolorem maiores, corporis doloremque vel dolores sequi eos, soluta rerum incidunt dolor reiciendis. Quis.",
    image: loginImage,
    technologies: ["HTML", "CSS"],
    demoUrl: "#",
    previewUrl: "#",
  },
];
