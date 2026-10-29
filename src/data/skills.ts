import bootstrapIcon from "devicon/icons/bootstrap/bootstrap-plain.svg";
import cssIcon from "devicon/icons/css3/css3-plain.svg";
import gitIcon from "devicon/icons/git/git-plain.svg";
import githubIcon from "devicon/icons/github/github-original.svg";
import htmlIcon from "devicon/icons/html5/html5-plain.svg";
import javaIcon from "devicon/icons/java/java-plain.svg";
import javascriptIcon from "devicon/icons/javascript/javascript-plain.svg";
import mysqlIcon from "devicon/icons/mysql/mysql-original.svg";
import nodejsIcon from "devicon/icons/nodejs/nodejs-plain.svg";
import reactIcon from "devicon/icons/react/react-original.svg";
import typescriptIcon from "devicon/icons/typescript/typescript-plain.svg";
import type { Skill } from "../types";

export const skills: Skill[] = [
  { id: "react", label: "React", icon: reactIcon },
  { id: "html5", label: "HTML5", icon: htmlIcon },
  { id: "css3", label: "CSS3", icon: cssIcon },
  { id: "javascript", label: "JavaScript", icon: javascriptIcon },
  { id: "typescript", label: "TypeScript", icon: typescriptIcon },
  { id: "mysql", label: "MySQL", icon: mysqlIcon },
  { id: "nodejs", label: "Node.js", icon: nodejsIcon },
  { id: "java", label: "Java", icon: javaIcon },
  { id: "git", label: "Git", icon: gitIcon },
  { id: "github", label: "GitHub", icon: githubIcon },
  { id: "bootstrap", label: "Bootstrap", icon: bootstrapIcon },
];
