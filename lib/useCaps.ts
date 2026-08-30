"use client";
import { useEffect, useState } from "react";

export interface Caps {
  fine: boolean; // precise pointer (mouse) → enables tilt + drag
  reduced: boolean; // prefers-reduced-motion
  ready: boolean; // mounted on client
}

/** Detects pointer precision + reduced-motion once on mount (SSR-safe). */
export function useCaps(): Caps {
  const [caps, setCaps] = useState<Caps>({ fine: false, reduced: false, ready: false });

  useEffect(() => {
    const fine =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(hover: hover)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCaps({ fine, reduced, ready: true });
  }, []);

  return caps;
}
