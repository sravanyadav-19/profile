"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ArrowUpRight,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { contact, profile, socials, sections, type SocialLink } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const SOCIAL_ICON: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  leetcode: Code2,
};

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ delay, duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Let's build something"
  )}&body=${encodeURIComponent("Hi Sravan,\n\nI'd like to talk about:\n\n")}`;

  return (
    <section
      id="contact"
      className="stage"
      style={{ position: "relative", padding: "clamp(5rem,14vh,10rem) 0", overflow: "hidden" }}
    >
      <div className="wrap" style={{ position: "relative", zIndex: 3, textAlign: "center" }}>
        <Reveal>
          <span className="section-tag" style={{ justifyContent: "center" }}>
            {sections.contact.tag}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="display"
            style={{
              fontSize: "clamp(2.6rem, 9vw, 7rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
              color: "var(--paper)",
              margin: "1.2rem 0 0.4rem",
            }}
          >
            {sections.contact.title}{" "}
            <span style={{ color: "var(--red)" }}>{sections.contact.accent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p
            className="hand"
            style={{ color: "#d9a06a", fontSize: "clamp(1.3rem,2.6vw,1.9rem)", transform: "rotate(-1deg)", marginBottom: "1rem" }}
          >
            {sections.contact.note}
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <p style={{ maxWidth: "52ch", margin: "0 auto 2.2rem", color: "rgba(240,234,223,0.8)", fontSize: "clamp(1rem,1.5vw,1.12rem)", lineHeight: 1.7 }}>
            {contact.sub}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div style={{ display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.2rem" }}>
            <a href={mailto} className="btn-red" style={{ fontSize: "1.15rem", padding: "1rem 2rem" }}>
              {contact.ctaLabel} <ArrowUpRight size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-ghost"
              style={{ fontSize: "0.9rem", padding: "0.9rem 1.3rem" }}
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.38}>
          <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap" }}>
            {socials.map((s) => {
              const Icon = SOCIAL_ICON[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Icon size={16} /> {s.label}
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.46}>
          <p
            className="mono"
            style={{ marginTop: "2.4rem", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,234,223,0.55)", display: "inline-flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}
          >
            <MapPin size={14} /> {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
