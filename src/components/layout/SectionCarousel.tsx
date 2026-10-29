import { motion } from "motion/react";
import type { ComponentType } from "react";
import { TRANSITION_DURATION_MS } from "../../context/NavigationContext";
import { useNavigation } from "../../hooks/useNavigation";
import type { SectionId } from "../../types";
import { About } from "../sections/About";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";

const SLIDES: { id: SectionId; Section: ComponentType }[] = [
  { id: "inicio", Section: Hero },
  { id: "sobre", Section: About },
  { id: "projetos", Section: Projects },
];

export function SectionCarousel() {
  const { activeSection, transitionTarget } = useNavigation();

  return (
    <main className="w-full min-h-[calc(100vh-180px)] overflow-hidden">
      <motion.div
        className="flex h-full"
        animate={{ x: transitionTarget === null ? "0vw" : "-100vw" }}
        transition={{
          duration:
            transitionTarget === null ? 0 : TRANSITION_DURATION_MS / 1000,
          ease: "easeInOut",
        }}
      >
        {SLIDES.map(({ id, Section }) => {
          // Whatever was just clicked always slides in as slot 1 (the
          // immediate next screen), never a third, uninvolved section —
          // so navigation never passes through anything in between.
          let slot: number;
          if (id === activeSection) slot = 0;
          else if (id === transitionTarget) slot = 1;
          else slot = 2;

          return (
            <div
              key={id}
              className="h-full w-screen shrink-0"
              style={{ order: slot }}
            >
              <Section />
            </div>
          );
        })}
      </motion.div>
    </main>
  );
}
