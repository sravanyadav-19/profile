"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;
const START = 1.55; // wait for stickers to land + thread to begin drawing

function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: START + delay, duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroHeadline() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        placeItems: "center",
        zIndex: 8,
        pointerEvents: "none",
        padding: "0 1rem",
      }}
    >
      <div style={{ position: "relative" }}>
        {/* lockup: red vertical bar + three tight lines */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.34em" }}>
          {/* red rule running alongside the first two lines (like the reference) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: START, duration: 0.8, ease: EASE }}
            style={{
              width: "0.085em",
              height: "1.72em",
              marginTop: "0.06em",
              background: "var(--red)",
              borderRadius: 99,
              transformOrigin: "top",
            }}
          />

          <div
            className="display"
            style={{
              color: "var(--red)",
              fontSize: "clamp(2.5rem, 8.4vw, 7rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.035em",
              textTransform: "none",
            }}
          >
            <Line delay={0}>Ideas</Line>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
              <Line delay={0.12}>into</Line>

              {/* name label card, sitting on the “into” line */}
              <motion.span
                initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: -2.5 }}
                transition={{ delay: START + 0.42, type: "spring", stiffness: 260, damping: 16 }}
                className="mono"
                style={{
                  display: "inline-block",
                  background: "var(--paper)",
                  color: "var(--ink)",
                  fontSize: "clamp(0.5rem, 1.15vw, 0.82rem)",
                  letterSpacing: "0.18em",
                  padding: "0.5em 0.9em",
                  border: "2px solid var(--ink)",
                  borderRadius: 4,
                  boxShadow: "3px 3px 0 var(--red)",
                  whiteSpace: "nowrap",
                }}
              >
                {profile.nameLabel}
              </motion.span>
            </div>

            <Line delay={0.24}>Intelligence.</Line>
          </div>
        </div>

        {/* hand-drawn underline squiggle beneath the wordmark */}
        <svg
          viewBox="0 0 520 46"
          style={{ width: "78%", marginLeft: "0.6em", marginTop: "0.4em", overflow: "visible" }}
          aria-hidden="true"
        >
          <motion.path
            d="M6 28 C 70 6, 150 44, 235 24 C 320 4, 410 40, 512 16"
            fill="none"
            stroke="var(--paper)"
            strokeWidth={3.5}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: START + 0.6, duration: 1.1, ease: "easeInOut" }}
          />
          <motion.path
            d="M6 34 C 80 16, 160 46, 240 30"
            fill="none"
            stroke="var(--red)"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: START + 0.8, duration: 0.9, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
}
