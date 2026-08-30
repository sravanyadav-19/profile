"use client";

import { motion } from "framer-motion";
import Sticker from "./Sticker";
import HeroHeadline from "./HeroHeadline";
import { heroStickers, hero, profile } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The hand-drawn "thread" — a curly scribble that draws itself across the
 * dark grid after the stickers have flown in (like the reference site).
 * It sits behind the stickers and weaves past a few of them.
 */
function ScribbleThread() {
  const d =
    "M -50 815 " +
    "C 170 805 95 660 215 555 " +
    "C 300 480 215 385 400 355 " +
    "C 620 320 800 330 885 445 " +
    "C 970 560 790 650 645 610 " +
    "C 520 575 565 445 715 425 " +
    "C 930 395 1140 555 1245 555 " +
    "C 1350 555 1400 320 1500 200";

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        overflow: "visible",
      }}
      aria-hidden="true"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(240,234,223,0.30)"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.15, duration: 2.4, ease: "easeInOut" }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(185,72,53,0.50)"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeDasharray="2 11"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.35, duration: 2.4, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function HeroStage() {
  return (
    <section
      id="top"
      className="stage"
      style={{ position: "relative", minHeight: "100svh", overflow: "hidden" }}
    >
      {/* hand-drawn scribble thread (draws in behind everything) */}
      <ScribbleThread />

      {/* top-left wordmark */}
      <div
        style={{
          position: "absolute",
          top: "max(20px, env(safe-area-inset-top))",
          left: 24,
          zIndex: 25,
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
          className="display"
          style={{ color: "var(--paper)", fontSize: "clamp(1.1rem,1.7vw,1.6rem)", lineHeight: 0.92 }}
        >
          {profile.shortName.toLowerCase()}
          <br />
          <span style={{ color: "var(--red)" }}>yadav</span>
        </motion.div>
      </div>

      {/* top-center three dots */}
      <div
        style={{
          position: "absolute",
          top: "max(26px, env(safe-area-inset-top))",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 25,
          display: "flex",
          gap: 9,
          pointerEvents: "none",
        }}
      >
        {["#b94835", "#d9962e", "rgba(240,234,223,0.85)"].map((c, i) => (
          <motion.span
            key={c}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 300, damping: 14 }}
            style={{ width: 9, height: 9, borderRadius: "50%", background: c, display: "inline-block" }}
          />
        ))}
      </div>

      {/* center headline lockup */}
      <HeroHeadline />

      {/* static edge stickers (fly in from their nearest side) */}
      {heroStickers.map((s, i) => (
        <Sticker key={s.id} spec={s} delay={0.12 + i * 0.08} />
      ))}

      {/* bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.9, duration: 0.8 }}
        className="mono"
        style={{
          position: "absolute",
          bottom: "max(18px, env(safe-area-inset-bottom))",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 25,
          color: "var(--paper)",
          fontSize: "0.68rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          opacity: 0.85,
        }}
      >
        {hero.scrollCue}
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--red)", fontSize: "0.9rem" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
