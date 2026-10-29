import { SectionTitle } from "../ui/SectionTitle";
import { Contact } from "./about/Contact";
import { Profile } from "./about/Profile";
import { Skills } from "./about/Skills";

export function About() {
  return (
    <section
      id="sobre"
      className="flex h-full w-full flex-col items-center justify-center"
    >
      <div className="section-scroll flex h-[calc(100vh-180px)] w-full flex-col items-center overflow-y-auto text-cream">
        <div className="flex w-full flex-col items-center px-4 md:w-[90%] xl:w-[80%]">
          <SectionTitle>Sobre mim</SectionTitle>
          <Profile />
          <Skills />
          <Contact />
        </div>
      </div>
    </section>
  );
}
