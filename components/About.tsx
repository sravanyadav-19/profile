"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about, sections } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  y = 26,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const notePositions: React.CSSProperties[] = [
  { top: "-6%", left: "-10%", transform: "rotate(-7deg)" },
  { top: "34%", right: "-14%", transform: "rotate(6deg)" },
  { bottom: "-4%", left: "2%", transform: "rotate(-4deg)" },
  { top: "62%", left: "-16%", transform: "rotate(8deg)" },
];

export default function About() {
  return (
    <section id="about" style={{ position: "relative", background: "var(--paper)", padding: "clamp(4rem,10vh,8rem) 0" }}>
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 0.85fr)",
            gap: "clamp(2rem,5vw,4.5rem)",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* ── text column ── */}
          <div>
            <Reveal>
              <span className="section-tag">{sections.about.tag}</span>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="hand" style={{ color: "var(--red-deep)", fontSize: "clamp(1.5rem,3vw,2.1rem)", margin: "0.7rem 0 0.2rem", transform: "rotate(-1deg)" }}>
                {sections.about.note}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h2 className="display" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.02, letterSpacing: "-0.025em", margin: "0.2rem 0 1.4rem" }}>
                {sections.about.title}
                {sections.about.break ? <br /> : " "}
                {sections.about.accent && <span style={{ color: "var(--red)" }}>{sections.about.accent}</span>}
              </h2>
            </Reveal>

            {about.bio.map((p, i) => (
              <Reveal key={i} delay={0.16 + i * 0.08}>
                <p style={{ fontSize: "clamp(1rem,1.4vw,1.12rem)", lineHeight: 1.7, color: "var(--ink-soft)", marginBottom: "1rem", maxWidth: "56ch" }}>
                  {p}
                </p>
              </Reveal>
            ))}

            {/* stat stickers */}
            <Reveal delay={0.3}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "1.6rem" }}>
                {about.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="paper-card"
                    style={{
                      padding: "0.7rem 1rem",
                      minWidth: "104px",
                      transform: `rotate(${i % 2 ? 1.6 : -1.6}deg)`,
                      boxShadow: "3px 3px 0 var(--ink)",
                    }}
                  >
                    <div className="display" style={{ fontSize: "1.7rem", color: "var(--red)", lineHeight: 1 }}>
                      {s.value}
                      {s.suffix}
                    </div>
                    <div className="mono" style={{ fontSize: "0.64rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.3rem", opacity: 0.75 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── portrait column ── */}
          <Reveal delay={0.15} y={40}>
            <div style={{ position: "relative", maxWidth: 380, marginInline: "auto" }}>
              {/* hand-written margin notes */}
              {about.notes.map((n, i) => {
                const pos = notePositions[i % notePositions.length];
                return (
                  <span
                    key={n}
                    className="hand note-sticky"
                    style={{
                      position: "absolute",
                      ...pos,
                      fontSize: "1.25rem",
                      color: "var(--red-deep)",
                      background: "rgba(240,234,223,0.92)",
                      padding: "0.15rem 0.5rem",
                      zIndex: 4,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {n}
                  </span>
                );
              })}

              {/* portrait as a tilted polaroid */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="paper-card"
                style={{
                  background: "var(--paper)",
                  padding: "14px 14px 44px",
                  borderRadius: 8,
                  transform: "rotate(-3.5deg)",
                  position: "relative",
                  boxShadow: "var(--shadow-lift)",
                }}
              >
                <span className="tape" />
                <Image
                  src="/images/mascot/portrait.webp"
                  alt="Illustrated portrait of Sravan"
                  width={1024}
                  height={1536}
                  sizes="(max-width: 767px) 70vw, 380px"
                  style={{ width: "100%", height: "auto", border: "2px solid var(--ink)", borderRadius: 4, display: "block" }}
                />
                <span
                  className="hand"
                  style={{ position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center", fontSize: "1.4rem", color: "var(--red-deep)", transform: "rotate(-2deg)" }}
                >
                  that&apos;s me ✎
                </span>
              </motion.div>

              {/* code sticker slapped on the corner of the polaroid */}
              <motion.img
                src="/images/stickers/code.webp"
                alt="Code sticker"
                draggable={false}
                initial={{ opacity: 0, scale: 0.4, rotate: -24 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 10 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.35 }}
                style={{
                  position: "absolute",
                  bottom: 52,
                  right: -20,
                  width: "clamp(92px, 13vw, 150px)",
                  height: "auto",
                  zIndex: 6,
                  cursor: "pointer",
                  filter: "drop-shadow(0 12px 16px rgba(13,15,14,0.4))",
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* responsive: stack columns on small screens */}
      <style jsx>{`
        @media (max-width: 820px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .note-sticky {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
