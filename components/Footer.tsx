"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ArrowUp,
  type LucideIcon,
} from "lucide-react";
import { footer, profile, socials, type SocialLink } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const SOCIAL_ICON: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  leetcode: Code2,
};

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "var(--paper-2)",
        borderTop: "2px solid var(--ink)",
        padding: "clamp(3rem,8vh,5rem) 0 2rem",
        overflow: "hidden",
      }}
    >
      <div className="wrap">
        {/* top row: small wordmark + back to top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "clamp(2rem,5vh,3.5rem)",
            flexWrap: "wrap",
          }}
        >
          <span className="display" style={{ fontSize: "1.3rem", lineHeight: 1 }}>
            {profile.shortName.toLowerCase()}
            <span style={{ color: "var(--red)" }}>.yadav</span>
          </span>

          <a href="#top" className="btn-ghost" style={{ textDecoration: "none" }}>
            <ArrowUp size={15} /> back to top
          </a>
        </div>

        {/* oversized outlined wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ textAlign: "center", marginBottom: "clamp(2rem,5vh,3.5rem)" }}
        >
          <div className="wordmark">{footer.wordmark}</div>
        </motion.div>

        {/* bottom row: note + socials */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            borderTop: "1.5px dashed var(--line-strong)",
            paddingTop: "1.6rem",
          }}
        >
          <p className="hand" style={{ color: "var(--red-deep)", fontSize: "1.15rem", maxWidth: "34ch" }}>
            {footer.note}
          </p>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {socials.map((s) => {
              const Icon = SOCIAL_ICON[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "2px solid var(--ink)",
                    background: "var(--paper)",
                    color: "var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.15s ease, background 0.15s ease, color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--red)";
                    e.currentTarget.style.color = "var(--paper)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--paper)";
                    e.currentTarget.style.color = "var(--ink)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <p
          className="mono"
          style={{ marginTop: "1.6rem", fontSize: "0.66rem", letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.55, textAlign: "center" }}
        >
          © {new Date().getFullYear()} {profile.name} · ideas into intelligence
        </p>
      </div>
    </footer>
  );
}
