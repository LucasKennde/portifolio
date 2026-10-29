import { motion } from "motion/react";
import { contactItems } from "../../../data/about";

export function Contact() {
  return (
    <div className="w-full py-20">
      <h1 className="mb-6 text-center font-display text-3xl md:text-4xl xl:text-5xl">
        Contato
      </h1>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-around">
        {contactItems.map((contact, index) => (
          <motion.div
            key={contact.id}
            className="flex h-25 w-full cursor-pointer items-center gap-4 rounded-md bg-cream px-4 text-surface-3 transition-colors duration-500 hover:bg-surface-4 hover:text-cream md:w-1/4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {contact.icon.kind === "image" ? (
              <img src={contact.icon.src} alt="" className="h-8 w-8" />
            ) : (
              <i className={`${contact.icon.className} text-3xl`} />
            )}
            <a href={contact.href} className="text-inherit no-underline">
              {contact.label}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
