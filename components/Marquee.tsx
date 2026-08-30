import { marqueeItems } from "@/content/portfolio";

// Red scrolling ticker that bridges the dark hero into the cream sections.
// Pure CSS animation (see .marquee in globals.css); pauses on hover, disabled
// for reduced-motion. Content comes from `marqueeItems` in content/portfolio.ts.
export default function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div
      aria-hidden="true"
      style={{
        background: "var(--ink)",
        padding: "2.4rem 0",
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((item, i) => (
            <span className="marquee-item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
