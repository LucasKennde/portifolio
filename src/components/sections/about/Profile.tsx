import { motion } from "motion/react";
import photo from "../../../assets/photo.jpg";
import { aboutFacts } from "../../../data/about";

export function Profile() {
  return (
    <div className="flex w-full flex-col items-center justify-around gap-10 md:h-100 md:flex-row">
      <motion.img
        src={photo}
        alt="Foto de Lucas Kennde"
        className="w-[80%] max-w-xs rounded-full border-[1rem] border-cream md:h-full md:w-auto md:max-w-none"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      />

      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-center font-display text-3xl md:text-4xl xl:text-5xl">
          {"< Lucas Kennde />"}
        </h1>
        <ul className="flex w-full flex-col gap-4 text-left">
          {aboutFacts.map((fact, index) => (
            <motion.li
              key={fact.id}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <i
                className={`${fact.icon} flex w-12 shrink-0 items-center justify-center text-2xl text-cream/50`}
              />
              <h3 className="text-base font-normal md:text-lg">
                {fact.text}
              </h3>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
