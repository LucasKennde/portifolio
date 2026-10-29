import { motion } from "motion/react";
import { skills } from "../../../data/skills";

export function Skills() {
  return (
    <div className="mt-12 w-full">
      <h1 className="mb-6 text-center font-display text-3xl md:text-4xl xl:text-5xl">
        Habilidades
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] items-center justify-items-center gap-8 border-b border-cream pb-16 md:flex md:flex-wrap md:justify-center">
        {skills.map((skill, index) => (
          <motion.img
            key={skill.id}
            src={skill.icon}
            alt={skill.label}
            title={skill.label}
            className="h-10 w-10 cursor-pointer md:h-12 md:w-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
}
