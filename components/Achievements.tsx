"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Rocket,
  FileText,
  Users,
  Award,
  Code,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { achievements, sections, type Achievement } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS: Record<Achievement["icon"], LucideIcon> = {
  trophy: Trophy,
  rocket: Rocket,
  file: FileText,
  users: Users,
  award: Award,
  code: Code,
};

const CARD_ROT = [-1.6, 1.4, -1.2, 1.7];

function Badge({ a, index }: { a: Achievement; index: number }) {
  const rot = CARD_ROT[index % CARD_ROT.length];
  const Icon = ICONS[a.icon] ?? Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 34, rotate: rot }}
      whileInView={{ opacity: 1, y: 0, rotate: rot }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
      transition={{ delay: index * 0.07, type: "spring", stiffness: 140, damping: 16 }}
      style={{
        position: "relative",
        background: "var(--paper)",
        border: "2px solid var(--ink)",
        borderRadius: 12,
        padding: "1.4rem 1.3rem 1.3rem",
        boxShadow: "5px 5px 0 var(--ink)",
      }}
    >
      {/* little sparkle in the corner */}
      <Sparkles
        size={20}
        style={{ position: "absolute", top: -10, right: -8, color: "var(--red)" }}
        strokeWidth={2.4}
      />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.9rem" }}>
        <span
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "var(--red)",
            color: "var(--paper)",
            border: "2.5px solid var(--ink)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "2px 2px 0 var(--ink)",
            flex: "0 0 auto",
          }}
        >
          <Icon size={26} strokeWidth={2.2} />
        </span>
        <span
          className="mono"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "var(--red-deep)",
            background: "rgba(185,72,53,0.12)",
            border: "1.5px solid var(--red)",
            borderRadius: 999,
            padding: "0.3rem 0.7rem",
            whiteSpace: "nowrap",
          }}
        >
          {a.result}
        </span>
      </div>

      <h3
        className="display"
        style={{ fontSize: "1.2rem", lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: "0.4rem" }}
      >
        {a.title}
      </h3>
      <p style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--ink-soft)" }}>
        {a.detail}
      </p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        position: "relative",
        background: "var(--paper)",
        padding: "clamp(4rem,10vh,8rem) 0",
        borderTop: "2px solid var(--ink)",
      }}
    >
      <div className="wrap">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ display: "inline-block" }}
        >
          {sections.achievements.tag}
        </motion.span>
        <motion.h2
          className="display"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.025em", margin: "0.6rem 0 0.4rem" }}
        >
          {sections.achievements.title}{" "}
          <span style={{ color: "var(--red)" }}>{sections.achievements.accent}</span>
        </motion.h2>
        <motion.p
          className="hand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ color: "var(--red-deep)", fontSize: "clamp(1.1rem,2.2vw,1.55rem)", transform: "rotate(-1deg)", marginBottom: "2.8rem" }}
        >
          {sections.achievements.note}
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(245px, 1fr))",
            gap: "clamp(1.4rem,3vw,2.2rem)",
            alignItems: "start",
          }}
        >
          {achievements.map((a, i) => (
            <Badge key={a.title} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
