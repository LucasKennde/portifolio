import { createContext } from "react";
import type { SectionId } from "../types";

export const SECTION_IDS: SectionId[] = ["inicio", "sobre", "projetos"];

export const TRANSITION_DURATION_MS = 600;

export interface NavigationContextValue {
  activeSection: SectionId;
  /** Section currently sliding in from the right, or null when at rest. */
  transitionTarget: SectionId | null;
  isWalking: boolean;
  goTo: (section: SectionId) => void;
}

export const NavigationContext = createContext<NavigationContextValue | null>(
  null,
);
