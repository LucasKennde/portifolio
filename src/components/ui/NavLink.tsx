import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import type { SectionId } from "../../types";

interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: `#${SectionId}`;
  children: ReactNode;
}

export function NavLink({ children, href, onClick, ...anchorProps }: NavLinkProps) {
  const { goTo } = useNavigation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    goTo(href.slice(1) as SectionId);
    onClick?.(event);
  };

  return (
    <a {...anchorProps} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
