# Portfolio v3 — "Paper Notebook / Zine"

A warm paper-notebook portfolio with draggable 2D paper stickers on a dark
graph-grid hero. Built phase-by-phase.

## Current status
- ✅ **Phase 1** — background & palette (cream paper + ink grid + red accent)
- ✅ **Phase 2 · Part 1** — hero stickers (8 edge/corner stickers, tilt + drag + float)
- ⏳ Next: hero headline text → About → Skills → Projects → Contact

## Run it locally
Requires **Node 18.18+** (Node 20 recommended).

```bash
cd portfolio_v3
npm install        # one time
npm run dev        # starts at http://localhost:3000
```

Open http://localhost:3000

(To run on a different port: `npm run dev -- -p 3100`)

## Production build (optional check)
```bash
npm run build
npm run start
```

## Where things live
- `app/`            — pages (Next.js App Router) + global CSS
- `app/globals.css` — design tokens (paper/ink/red), grid, grain, all styling
- `components/`     — `Sticker.tsx`, `HeroStage.tsx`
- `content/portfolio.ts` — **all content/sticker positions** (edit this)
- `lib/useCaps.ts`  — pointer/reduced-motion detection
- `public/images/`  — stickers, hero, mascot art

## Editing sticker positions
Open `content/portfolio.ts` → `heroStickers`. Each sticker:
- `x`, `y`   — centre position as % of the stage (0–100). High `x`/`y` = right/bottom.
- `vw`       — size as % of screen width (fluid). `size` = max px, `sizeMobile` = min px.
- `rotate`   — resting tilt in degrees
- `tilt`/`drag` — 3D tilt & drag (desktop mouse only; auto-off on touch)

## Notes
- Stickers are static (no tilt/drag/float) on touch devices and when
  "reduce motion" is on in the OS.
- Fonts (Montserrat + Caveat) load from Google Fonts — needs internet on first run.
