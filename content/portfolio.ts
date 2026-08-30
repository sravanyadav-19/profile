// ─────────────────────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH — edit this file to change every word on the site.
//  Components are typed against the shapes below; never hard-code content in JSX.
// ─────────────────────────────────────────────────────────────────────────────

export type StickerId =
  | "keyboard"
  | "headphones"
  | "coffee"
  | "code"
  | "gamepad"
  | "camera"
  | "satellite"
  | "spark";

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "leetcode";
}

export interface StickerSpec {
  id: StickerId;
  src: string;
  alt: string;
  /** position on the hero stage, as % of stage width/height */
  x: number;
  y: number;
  rotate: number; // resting rotation, deg
  size: number; // max width in px (desktop)
  /** preferred width as % of viewport width — makes stickers fluid + edge-bleed */
  vw?: number;
  sizeMobile?: number; // min width in px (small screens)
  tilt?: boolean; // 3D cursor tilt (fine pointer only)
  drag?: boolean; // draggable (fine pointer only)
  showMobile?: boolean; // visible on <768px (static, no tilt/drag)
  floatDur?: number; // idle float seconds
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: "aiml" | "web";
  tags: string[];
  tech: string[];
  date: string; // EDIT: month/year finished (kept as editable placeholder)
  sticker?: StickerId;
  links: { label: string; href: string }[];
}

export interface TimelineEntry {
  kind: "edu" | "work" | "milestone";
  period: string;
  title: string;
  org: string;
}

export interface Achievement {
  title: string;
  detail: string;
  result: string;
  icon: "trophy" | "rocket" | "file" | "users" | "award" | "code";
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export const profile = {
  name: "Sravan Yadav K",
  shortName: "Sravan",
  initials: "SY",
  roles: ["ML Builder", "Full-Stack Developer", "Hackathon Regular"],
  tagline: "Ideas into Intelligence.",
  highlight: "Intelligence.",
  nameLabel: "SRAVAN YADAV K",
  location: "Tirupati, Andhra Pradesh",
  email: "sravanyadav790@gmail.com",
  available: true,
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/sravanyadav-19", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sravanyadav", icon: "linkedin" },
  { label: "LeetCode", href: "https://leetcode.com/u/sravanyadav-19", icon: "leetcode" },
  { label: "Email", href: "mailto:sravanyadav790@gmail.com", icon: "mail" },
];

export const hero = {
  kicker: "STUDENT · BUILDER · ML ENGINEER IN THE MAKING",
  status: ["open to internships", "shipping side-projects", "based in India"],
  scrollCue: "scroll to flip the page",
  processLine: ["QUESTION", "DATA", "MODEL", "SHIP"],
};

// ── SECTION HEADINGS ───────────────────────────────────────────────────────
// Every section title / tag / hand-written note lives here. Change the text in
// this file and it updates on the page automatically — no component edits.
//   tag    = small mono label with the red dash
//   title  = main headline (ink)
//   accent = the red word(s) that follow the title
//   note   = hand-written (Caveat) line under the title
//   break  = put the accent on its own line (used by About)
export interface SectionCopy {
  tag: string;
  title: string;
  accent?: string;
  note?: string;
  break?: boolean;
}

export const sections: Record<string, SectionCopy> = {
  about: {
    tag: "01 · about me",
    title: "Curious by nature.",
    accent: "Building by choice.",
    note: "hi, I'm Sravan ✌",
    break: true,
  },
  skills: {
    tag: "02 · skills",
    title: "Skills in",
    accent: "Orbit",
    note: "the tools I build with ↻",
  },
  projects: {
    tag: "03 · projects",
    title: "The work behind",
    accent: "the experiments.",
    note: "real sites · hover to reveal · pinned to the board 📌",
  },
  timeline: {
    tag: "04 · the journey",
    title: "Notes from the",
    accent: "notebook.",
    note: "education & milestones, in order ↓",
  },
  achievements: {
    tag: "05 · wins",
    title: "Sticker-worthy",
    accent: "moments.",
    note: "a few things I'm proud of ★",
  },
  contact: {
    tag: "06 · say hi",
    title: "Open for",
    accent: "Ideas.",
    note: "my inbox is open — let's build something ✉",
  },
};

// Add a timeline entry below and it appears automatically.

// ── RED MARQUEE (ticker between hero and about) ───────────────────────────
// Each string becomes one item in the scrolling red band. Edit freely.
export const marqueeItems: string[] = [
  "MACHINE LEARNING",
  "FULL-STACK WEB",
  "DEEP LEARNING",
  "NLP & RANKING",
  "COMPUTER VISION",
  "REACT · NEXT.JS",
  "HACKATHONS",
  "SHIP IT",
];


// ── HERO STICKERS ──────────────────────────────────────────────────────────
// ONLY 5 stickers on the hero stage, placed like the reference:
//   camera    → top-left        keyboard → top-right (biggest)
//   headphones→ lower-left      code     → mid-right
//   gamepad   → bottom-centre
// They fly in from their nearest side and stay static. To move/resize them
// yourself, edit the values below:
//
//   x     horizontal centre, % of stage width   (0 = far left, 100 = far right)
//   y     vertical centre,  % of stage height   (0 = top,      100 = bottom)
//   vw    size as % of screen width             (bigger number = bigger sticker)
//   size  max size in px on large monitors
//   sizeMobile  min size in px on phones
//   rotate     resting tilt in degrees
//
// Tip: keep centres roughly x = 9–90 and y = 14–86 so stickers aren't cut off.
// Big stickers (large vw) need their centre a little further from the edge.
export const heroStickers: StickerSpec[] = [
  { id: "camera",     src: "/images/stickers/camera.webp",     alt: "Camera sticker",              x: 15, y: 12, rotate: 8,   size: 350, vw: 17, sizeMobile: 110, tilt: true, drag: false, floatDur: 0 },
  { id: "keyboard",   src: "/images/stickers/keyboard.webp",   alt: "Mechanical keyboard sticker", x: 70, y: 9,  rotate: 45,  size: 470, vw: 30, sizeMobile: 165, tilt: true, drag: false, floatDur: 0 },
  { id: "headphones", src: "/images/stickers/headphones.webp", alt: "Headphones sticker",          x: 2,  y: 45, rotate: 6,   size: 300, vw: 26, sizeMobile: 140, tilt: true, drag: false, floatDur: 0 },
  { id: "code",       src: "/images/stickers/code.webp",       alt: "Code window sticker",         x: 75, y: 67, rotate: -8,  size: 360, vw: 24, sizeMobile: 135, tilt: true, drag: false, floatDur: 0 },
  { id: "gamepad",    src: "/images/stickers/gamepad.webp",    alt: "Game controller sticker",     x: 35, y: 80, rotate: 5,   size: 290, vw: 19, sizeMobile: 120, tilt: true, drag: false, floatDur: 0 },
];

// The other 3 stickers (coffee, spark, satellite) are NOT on the hero — they're
// saved for later sections (About / Projects / Achievements) per request.

export const about = {
  quote: "Curious by nature. Building by choice.",
  bio: [
    "I'm Sravan — a CSE undergrad at VIT-AP majoring in AI/ML who likes turning vague questions into things that actually run.",
    "My happy place is the whole loop: framing the problem, wrangling data, training a model, then shipping it as a real web app people can click.",
    "When I'm not in a notebook or a code editor, I'm at a hackathon with too much coffee — or decompressing with music, games, and a camera.",
  ],
  notes: [
    "runs on filter coffee",
    "6+ hackathons, 1 win",
    "prefers shipping > slides",
    "currently: learning by building",
  ],
  stats: [
    { value: "5", suffix: "+", label: "Projects shipped" },
    { value: "6", suffix: "+", label: "Hackathons" },
    { value: "1", suffix: "",  label: "Won" },
    { value: "100K", suffix: "+", label: "Resumes scored" },
  ] as Stat[],
};

export const orbit = {
  centerLabel: "ML & WEB",
  rings: [
    {
      cw: true,
      duration: 42,
      items: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "NLP", "OpenCV", "LLMs"],
    },
    {
      cw: false,
      duration: 58,
      items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind", "MongoDB", "Git"],
    },
  ],
  process: ["QUESTION", "DATA", "MODEL", "SHIP"],
};

export const projects: Project[] = [
  // {
  //   slug: "solarsentinel",
  //   title: "SolarSentinel",
  //   summary:
  //     "AI system that detects solar storms from space-weather imagery and flags high-risk solar activity before it reaches Earth.",
  //   category: "aiml",
  //   tags: ["Deep Learning", "Computer Vision"],
  //   tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
  //   date: "2026 · coming together",
  //   sticker: "satellite",
  //   links: [], // in progress — add { label:"Live", href:"...deployed url" } when live
  // },
  {
    slug: "candidate-ranking",
    title: "AI Candidate Ranking",
    summary:
      "NLP pipeline that screens and ranks résumés against a job description — scored 100K+ resumes with a fine-tuned ranking model.",
    category: "aiml",
    tags: ["NLP", "Ranking"],
    tech: ["Python", "scikit-learn", "NLP", "Colab"],
    date: "2025",
    sticker: "spark",
    links: [{ label: "GitHub", href: "https://github.com/sravanyadav-19/redrob-intelligent-candidate-ranking" }],
  },
  {
    slug: "tutor-space",
    title: "Tutor Space",
    summary:
      "Full-stack platform connecting students with tutors — scheduling, sessions and a clean responsive UI, deployed live.",
    category: "web",
    tags: ["Full-Stack", "Platform"],
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    date: "2025",
    sticker: "code",
    links: [{ label: "GitHub", href: "https://tutorspace-lms.vercel.app/" }], // add Live url when you have it
  },
  {
    slug: "inovitaz",
    title: "Inovitaz",
    summary:
      "Marketing/agency website with animated sections and a fast, modern front-end — built and shipped on Vercel.",
    category: "web",
    tags: ["Frontend", "Marketing site"],
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
    date: "2025",
    sticker: "camera",
    links: [{ label: "GitHub", href: "https://inovitaz.vercel.app/" }], // add Live url when you have it
  },
  {
    slug: "student-management",
    title: "Student Management System",
    summary:
      "CRUD system to manage student records, attendance and results — my first real full-stack app, where the web bug bit.",
    category: "web",
    tags: ["CRUD", "Full-Stack"],
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    date: "2024",
    sticker: "keyboard",
    links: [{ label: "Code", href: "https://studentmanagementsystem-vitap.vercel.app/" }],
  },
];


export const timeline: TimelineEntry[] = [
  { kind: "edu", period: "2024 — 2028", title: "B.Tech, CSE (AI & ML)", org: "VIT-AP University, Amaravati" },
  { kind: "milestone", period: "2024", title: "First web app shipped", org: "Student Management System — caught the building bug" },
  { kind: "milestone", period: "2025", title: "Went deep on ML", org: "AI Candidate Ranking (100K+ resumes) + first deployed web platforms" },
  { kind: "milestone", period: "2025", title: "Hackathon circuit", org: "6+ hackathons, 1 win — shipping fast under pressure" },
  { kind: "milestone", period: "2026", title: "SolarSentinel", org: "Deep-learning solar-storm detection, in progress" },
];

export const achievements: Achievement[] = [
  { title: "Hackathon Winner", detail: "Took 1st place across 6+ weekend hackathons.", result: "1st place", icon: "trophy" },
  { title: "100K+ Résumés Scored", detail: "Ranking model evaluated at scale for the AI candidate system.", result: "100K+", icon: "file" },
  { title: "SolarSentinel", detail: "Ongoing deep-learning project detecting solar storms.", result: "In orbit", icon: "rocket" },
  { title: "Open Source Footprint", detail: "Projects and experiments on GitHub, always learning in public.", result: "shipping", icon: "code" },
];

export const contact = {
  heading: "Open for Ideas",
  sub: "Internships, collaborations, hackathon teams, or just a good build — my inbox is open.",
  ctaLabel: "Let's talk",
};

export const footer = {
  wordmark: "SRAVAN YADAV",
  note: "Designed like a notebook. Built with Next.js, Framer Motion & too much coffee.",
};
