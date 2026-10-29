import logo from "../../assets/logo.png";
import type { SectionId } from "../../types";
import { NavLink } from "../ui/NavLink";

const NAV_ITEMS: { href: `#${SectionId}`; label: string }[] = [
  { href: "#sobre", label: "Sobre mim" },
  { href: "#projetos", label: "Projetos" },
];

export function Header() {
  return (
    <header className="h-15 w-full xl:h-20">
      <div className="flex h-full items-center justify-between">
        <NavLink href="#inicio">
          <img
            src={logo}
            alt="Logo de Lucas Kennde"
            className="h-15 px-2 xl:h-20 xl:px-8"
          />
        </NavLink>

        <nav>
          <ul className="flex min-h-full items-center justify-center gap-6 px-8 text-base font-semibold xl:text-xl">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="text-cream no-underline transition-opacity hover:opacity-70"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
