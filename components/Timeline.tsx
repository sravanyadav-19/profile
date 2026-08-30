"use client";

import { motion } from "framer-motion";
import { GraduationCap, Rocket, Briefcase, type LucideIcon } from "lucide-react";
import { timeline, sections, type TimelineEntry } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const KIND_ICON: Record<TimelineEntry["kind"], LucideIcon> = {
  edu: GraduationCap,
  work: Briefcase,
  milestone: Rocket,
};

const KIND_PILL: Record<TimelineEntry["kind"], React.CSSProperties> = {
  edu: { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" },
  work: { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" },
  milestone: { background: "rgba(185,72,53,0.14)", color: "var(--red-deep)", borderColor: "var(--red)" },
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      style={{
        position: "relative",
        background: "var(--paper-2)",
        padding: "clamp(4rem,10vh,8rem) 0",
        borderTop: "2px solid var(--ink)",
      }}
    >
      <div className="wrap" style={{ maxWidth: 840 }}>
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ display: "inline-block" }}
        >
          {sections.timeline.tag}
        </motion.span>
        <motion.h2
          className="display"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.025em", margin: "0.6rem 0 0.4rem" }}
        >
          {sections.timeline.title} <span style={{ color: "var(--red)" }}>{sections.timeline.accent}</span>
        </motion.h2>
        <motion.p
          className="hand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ color: "var(--red-deep)", fontSize: "clamp(1.1rem,2.2vw,1.55rem)", transform: "rotate(-1deg)", marginBottom: "3rem" }}
        >
          {sections.timeline.note}
        </motion.p>

        {/* notebook: ruled paper + a left gutter that holds the spine + dots */}
        <div
          style={{
            position: "relative",
            ["--gut" as string]: "clamp(40px, 7vw, 52px)",
            backgroundImage:
              "repeating-linear-gradient(transparent 0, transparent 38px, rgba(13,15,14,0.045) 38px, rgba(13,15,14,0.045) 39px)",
          }}
        >
          {/* continuous dashed spine down the centre of the gutter */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "calc(var(--gut) / 2 - 1.5px)",
              top: 16,
              bottom: 16,
              width: 0,
              borderLeft: "3px dashed rgba(185,72,53,0.55)",
              zIndex: 1,
            }}
          />

          {timeline.map((e, i) => {
            const Icon = KIND_ICON[e.kind];
            return (
              <motion.div
                key={`${e.period}-${e.title}`}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: EASE }}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  marginBottom: 28,
                }}
              >
                {/* gutter column — fixed width, dot always centred here, never over the card */}
                <div
                  style={{
                    flex: "0 0 var(--gut)",
                    width: "var(--gut)",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 6,
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      width: "clamp(34px, 5vw, 40px)",
                      height: "clamp(34px, 5vw, 40px)",
                      borderRadius: "50%",
                      background: "var(--paper)",
                      border: "3px solid var(--red)",
                      color: "var(--red)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 0 6px var(--paper-2)",
                      flex: "0 0 auto",
                    }}
                  >
                    <Icon size={16} strokeWidth={2.4} />
                  </span>
                </div>

                {/* note card */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: "var(--paper)",
                    border: "2px solid var(--ink)",
                    borderRadius: 10,
                    padding: "1rem 1.2rem",
                    boxShadow: "4px 4px 0 var(--ink)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.6rem",
                      marginBottom: "0.3rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      className="mono"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", fontWeight: 700 }}
                    >
                      {e.period}
                    </span>
                    <span
                      className="mono"
                      style={{
                        fontSize: "0.58rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        padding: "0.14rem 0.55rem",
                        borderRadius: 999,
                        border: "1.5px solid var(--line-strong)",
                        color: "var(--ink-soft)",
                        ...KIND_PILL[e.kind],
                      }}
                    >
                      {e.kind}
                    </span>
                  </div>
                  <h3
                    className="display"
                    style={{ fontSize: "clamp(1.1rem,2.2vw,1.4rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                  >
                    {e.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", marginTop: "0.3rem", lineHeight: 1.5 }}>
                    {e.org}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
