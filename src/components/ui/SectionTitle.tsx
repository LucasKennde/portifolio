import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <motion.h1
      className="mb-8 text-center font-display text-4xl md:text-6xl xl:mb-12 xl:text-7xl"
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h1>
  );
}
