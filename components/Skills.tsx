"use client";

import { motion } from "framer-motion";
import { orbit, sections } from "@/content/portfolio";

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

/**
 * One pill on an orbit ring.
 * Layer 1 (plain) places the point on the circle: rotate(θ) translateX(r) rotate(-θ).
 * Layer 2 (plain) centres the pill on that point: translate(-50%,-50%).
 * Layer 3 (motion) ONLY does the scale/fade — Framer never touches the centering.
 */
function OrbitChip({
  label,
  theta,
  r,
  delay,
}: {
  label: string;
  theta: number;
  r: string;
  delay: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
        transform: `rotate(${theta}deg) translateX(${r}) rotate(${-theta}deg)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ scale: 1.14, y: -2 }}
          transition={{ delay, type: "spring", stiffness: 240, damping: 16 }}
          className="mono"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            background: "var(--paper)",
            border: "2px solid var(--ink)",
            borderRadius: 999,
            padding: "0.42rem 0.95rem",
            fontSize: "clamp(0.62rem, 1.05vw, 0.8rem)",
            fontWeight: 700,
            boxShadow: "3px 3px 0 var(--ink)",
            cursor: "default",
          }}
        >
          {label}
        </motion.span>
      </div>
    </div>
  );
}

export default function Skills() {
  const inner = orbit.rings[0].items; // ML
  const outer = orbit.rings[1].items; // web

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        background: "var(--paper-2)",
        padding: "clamp(4rem,10vh,8rem) 0",
        borderTop: "2px solid var(--ink)",
      }}
    >
      <div className="wrap">
        <Reveal>
          <span className="section-tag">{sections.skills.tag}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.025em", margin: "0.6rem 0 0.4rem" }}>
            {sections.skills.title} <span style={{ color: "var(--red)" }}>{sections.skills.accent}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="hand" style={{ color: "var(--red-deep)", fontSize: "clamp(1.2rem,2.4vw,1.7rem)", transform: "rotate(-1deg)", marginBottom: "2.4rem" }}>
            {sections.skills.note}
          </p>
        </Reveal>

        {/* ── desktop / tablet : rotating orbit ── */}
        <div
          className="orbit-stage"
          style={{
            ["--S" as string]: "min(86vw, 540px)",
            width: "var(--S)",
            height: "var(--S)",
          }}
        >
          {/* decorative dashed rings (centred with margins so the spin transform can't shift them) */}
          <div
            className="orbit-ring"
            style={{
              ["--dur" as string]: `${orbit.rings[0].duration}s`,
              width: "calc(var(--S) * 0.60)",
              height: "calc(var(--S) * 0.60)",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              margin: "calc(var(--S) * -0.30) 0 0 calc(var(--S) * -0.30)",
            }}
          />
          <div
            className="orbit-ring ccw"
            style={{
              ["--dur" as string]: `${orbit.rings[1].duration}s`,
              width: "calc(var(--S) * 0.92)",
              height: "calc(var(--S) * 0.92)",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              margin: "calc(var(--S) * -0.46) 0 0 calc(var(--S) * -0.46)",

            }}
          />

          {/* center core — plain centering wrapper, motion only scales the child */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              style={{
                width: "clamp(96px,16vw,140px)",
                height: "clamp(96px,16vw,140px)",
                borderRadius: "50%",
                background: "var(--red)",
                color: "var(--paper)",
                border: "3px solid var(--ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontFamily: "var(--display)",
                fontWeight: 900,
                fontSize: "clamp(0.9rem,1.8vw,1.15rem)",
                lineHeight: 1.05,
                boxShadow: "var(--shadow-lift)",
              }}
            >
              {orbit.centerLabel}
            </motion.div>
          </div>

          {/* inner ring — ML (radius = 0.30 S, sits on the inner dashed circle) */}
          {inner.map((item, i) => (
            <OrbitChip
              key={`in-${item}`}
              label={item}
              theta={i * (360 / inner.length)}
              r="calc(var(--S) * 0.30)"
              delay={0.25 + i * 0.05}
            />
          ))}
          {/* outer ring — web (radius = 0.46 S, sits on the outer dashed circle) */}
          {outer.map((item, i) => (
            <OrbitChip
              key={`out-${item}`}
              label={item}
              theta={i * (360 / outer.length) + 360 / (outer.length * 2)}
              r="calc(var(--S) * 0.46)"
              delay={0.5 + i * 0.05}
            />
          ))}
        </div>

        {/* ── mobile : static tag cloud ── */}
        <div className="tag-cloud" style={{ display: "none" }}>
          {[...inner, ...outer].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        {/* process line */}
        <Reveal delay={0.2}>
          <div
            className="mono"
            style={{
              marginTop: "2.6rem",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.7rem 1.1rem",
              fontSize: "clamp(0.66rem,1.2vw,0.82rem)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            {orbit.process.map((p, i) => (
              <span key={p} style={{ display: "inline-flex", alignItems: "center", gap: "1.1rem" }}>
                {p}
                {i < orbit.process.length - 1 && <span style={{ color: "var(--red)" }}>✦</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        @media (max-width: 720px) {
          .orbit-stage {
            display: none !important;
          }
          .tag-cloud {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
