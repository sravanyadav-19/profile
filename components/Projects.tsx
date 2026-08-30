"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, sections, type Project } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const cardRot = [-2.2, 1.6, -1.3, 2.1, -1.7];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const rot = cardRot[index % cardRot.length];
  // try the live website screenshot (.webp → .png → .jpg); if none exists yet,
  // shotOk becomes false and we fall back to the project's sticker.
  const candidates = ["webp", "png", "jpg"].map(
    (ext) => `/images/projects/${p.slug}.${ext}`
  );
  const [tryIdx, setTryIdx] = useState(0);
  const shotOk = tryIdx < candidates.length;

  return (
    <motion.article
      className="polaroid"
      initial={{ opacity: 0, y: 36, rotate: rot }}
      whileInView={{ opacity: 1, y: 0, rotate: rot }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ rotate: 0, y: -10, scale: 1.02, boxShadow: "var(--shadow-lift)" }}
      transition={{ delay: index * 0.07, type: "spring", stiffness: 130, damping: 16 }}
      style={{ position: "relative" }}
    >
      <span className="tape" />

      {/* polaroid "photo" — live website screenshot (falls back to sticker) */}
      <div className="thumb" style={{ position: "relative" }}>
        {shotOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={candidates[tryIdx]}
            alt={`${p.title} screenshot`}
            draggable={false}
            onError={() => setTryIdx((i) => i + 1)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/stickers/${p.sticker}.webp`}
              alt=""
              draggable={false}
              style={{ width: "58%", height: "58%", objectFit: "contain" }}
            />
            <span
              className="mono"
              style={{
                position: "absolute",
                bottom: 8,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "0.56rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.5,
              }}
            >
              screenshot coming
            </span>
          </>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.6rem" }}>
        <h3 className="display" style={{ fontSize: "1.32rem", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          {p.title}
        </h3>
        <span className={`cat-badge ${p.category === "web" ? "web" : ""}`}>
          {p.category === "aiml" ? "AI / ML" : "Web"}
        </span>
      </div>

      <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--ink-soft)", margin: "0.55rem 0 0.8rem" }}>
        {p.summary}
      </p>

      {/* tech chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.9rem" }}>
        {p.tech.map((t) => (
          <span
            key={t}
            className="mono"
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              padding: "0.22rem 0.55rem",
              border: "1.5px solid var(--line-strong)",
              borderRadius: 999,
              background: "var(--paper-2)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* date + links */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.6rem", borderTop: "1.5px dashed var(--line)", paddingTop: "0.7rem" }}>
        <span className="mono" style={{ fontSize: "0.66rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7 }}>
          {p.date}
        </span>
        <span style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {p.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              {l.label} ↗
            </a>
          ))}
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        position: "relative",
        background: "var(--paper)",
        padding: "clamp(4rem,10vh,8rem) 0",
        borderTop: "2px solid var(--ink)",
      }}
    >
      <div className="wrap">
        <Reveal>
          <span className="section-tag">{sections.projects.tag}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.025em", margin: "0.6rem 0 0.4rem" }}>
            {sections.projects.title} <span style={{ color: "var(--red)" }}>{sections.projects.accent}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="hand" style={{ color: "var(--red-deep)", fontSize: "clamp(1.2rem,2.4vw,1.7rem)", transform: "rotate(-1deg)", marginBottom: "2.8rem" }}>
            {sections.projects.note}
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "clamp(1.4rem,3vw,2.4rem)",
            alignItems: "start",
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
