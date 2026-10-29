import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { SectionId } from "../types";
import {
  NavigationContext,
  SECTION_IDS,
  TRANSITION_DURATION_MS,
} from "./NavigationContext";

const WALK_DURATION_MS = 600;

function readSectionFromHash(): SectionId {
  const id = window.location.hash.slice(1);
  return (SECTION_IDS as string[]).includes(id) ? (id as SectionId) : "inicio";
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>(
    readSectionFromHash,
  );
  const [transitionTarget, setTransitionTarget] = useState<SectionId | null>(
    null,
  );
  const [isWalking, setIsWalking] = useState(false);
  const walkTimeoutRef = useRef<number | undefined>(undefined);
  const commitTimeoutRef = useRef<number | undefined>(undefined);
  const isFirstRender = useRef(true);

  const bounce = useCallback(() => {
    window.clearTimeout(walkTimeoutRef.current);
    setIsWalking(true);
    walkTimeoutRef.current = window.setTimeout(() => {
      setIsWalking(false);
    }, WALK_DURATION_MS);
  }, []);

  const goTo = useCallback(
    (target: SectionId) => {
      if (transitionTarget !== null) return; // ignore clicks mid-transition

      bounce();
      if (target === activeSection) return;

      // The clicked section always becomes the immediate next slide — a
      // single slide-width to the left — regardless of where it sits in
      // SECTION_IDS, so navigation never passes through a third section.
      setTransitionTarget(target);
      window.clearTimeout(commitTimeoutRef.current);
      commitTimeoutRef.current = window.setTimeout(() => {
        setActiveSection(target);
        setTransitionTarget(null);
      }, TRANSITION_DURATION_MS);
    },
    [activeSection, transitionTarget, bounce],
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.history.pushState(null, "", `#${activeSection}`);
  }, [activeSection]);

  useEffect(() => {
    const onPopState = () => {
      window.clearTimeout(commitTimeoutRef.current);
      setTransitionTarget(null);
      setActiveSection(readSectionFromHash());
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <NavigationContext.Provider
      value={{ activeSection, transitionTarget, isWalking, goTo }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
