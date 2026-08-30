"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { StickerSpec } from "@/content/portfolio";
import { useCaps } from "@/lib/useCaps";
import { asset } from "@/lib/paths";

interface StickerProps {
  spec: StickerSpec;
  /** entrance delay (s) for the slide-in-from-the-edge */
  delay?: number;
}

/**
 * Static paper sticker.
 * On load it flies in from the nearest side edge (left icons from the left,
 * right icons from the right) and springs into its fixed spot. After that it
 * stays put — no drag, no tilt, no float.
 * On a mouse device, hovering it scales it up 1.2x and brings it to the front.
 */
export default function Sticker({ spec, delay = 0 }: StickerProps) {
  const caps = useCaps();
  const [hovered, setHovered] = useState(false);
  const [entered, setEntered] = useState(false);

  const fromLeft = spec.x < 50;
  const OFFSCREEN = 860; // px, pushes edge stickers fully off-screen

  // fluid width: scales with viewport between a mobile floor and desktop ceiling
  const widthCss = spec.vw
    ? `clamp(${spec.sizeMobile ?? 96}px, ${spec.vw}vw, ${spec.size}px)`
    : `${spec.size}px`;

  const reduced = caps.ready && caps.reduced;
  const canHover = caps.fine && !reduced;

  return (
    <motion.div
      className="sticker"
      style={
        {
          left: `${spec.x}%`,
          top: `${spec.y}%`,
          zIndex: hovered ? 20 : 5,
          cursor: canHover ? "pointer" : "default",
          ["--w" as string]: widthCss,
          ["--wm" as string]: widthCss,
        } as React.CSSProperties
      }
      initial={
        reduced
          ? { opacity: 0 }
          : {
              opacity: 0,
              x: fromLeft ? -OFFSCREEN : OFFSCREEN,
              y: 80,
              scale: 0.72,
              rotate: spec.rotate + (fromLeft ? -22 : 22),
            }
      }
      animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: spec.rotate }}
      whileHover={canHover ? { scale: 1.2 } : undefined}
      onHoverStart={() => canHover && setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onAnimationComplete={() => setEntered(true)}
      transition={
        entered
          ? { type: "spring", stiffness: 320, damping: 17, mass: 0.6 }
          : { delay, type: "spring", stiffness: 88, damping: 15, mass: 1.05 }
      }
    >
      <img src={asset(spec.src)} alt={spec.alt} draggable={false} />
    </motion.div>
  );
}
