import { motion, type Variants } from "motion/react";
import { NavLink } from "../ui/NavLink";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="flex h-full w-full flex-col items-center justify-center"
    >
      <div className="section-scroll flex h-[calc(100vh-180px)] w-full flex-col items-center overflow-y-auto text-center text-cream">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex h-full flex-col items-center justify-center gap-3 px-6"
        >
          <motion.h1
            variants={item}
            className="font-display text-4xl leading-tight md:text-6xl xl:text-7xl"
          >
            Olá, sou Lucas Kennde
          </motion.h1>
          <motion.p variants={item} className="max-w-xl text-base md:text-lg">
            Desenvolvedor Full Stack dedicado a construir experiências web
            extraordinárias
          </motion.p>
          <motion.div variants={item}>
            <NavLink
              href="#projetos"
              className="mt-4 inline-block min-w-[150px] rounded-2xl border border-cream px-12 py-4 text-center font-semibold text-cream no-underline transition-colors duration-500 hover:bg-cream hover:text-surface-4"
            >
              Projetos
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
