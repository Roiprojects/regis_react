import { motion } from "framer-motion";
import { useState } from "react";
import { about } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Line-art icons matching the reference image */
function IconScales() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 3v17M5 7h14M8 20h8" />
      <path d="M5 7l-3 7h6l-3-7zM19 7l-3 7h6l-3-7z" />
    </svg>
  );
}
function IconUserSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="10" cy="8" r="3.5" />
      <path d="M3.5 19c0-3.2 2.8-5.5 6.5-5.5" />
      <circle cx="16" cy="15" r="3" />
      <path d="M18.2 17.2l2.3 2.3" />
    </svg>
  );
}
function IconLifecycle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="10" r="3" />
      <path d="M9 3.5l3-2 3 2M9 20.5l3 2 3-2" />
      <path d="M6 19c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M18 12a6 6 0 0 0-1-3" />
      <path d="M6 12a6 6 0 0 0 1 3" />
    </svg>
  );
}
function IconTechnology() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M12 16v3.5M8 19.5h8" />
      <path d="M7 12v-2M11 12V8.5M15 12V7" />
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M3 11l4-3.5 4.5 3L16 6.5l5 4M3 11l4 4 4.5-3M21 10.5l-4 4-4.5-3M7 15l2.5 2.5L12 15" />
    </svg>
  );
}

const ICONS = [IconScales, IconUserSearch, IconLifecycle, IconTechnology, IconHandshake];

// Master rounded pentagon shield path pointing UP (0 deg), centered at (250, 250)
// Exact 5-sided rounded pentagon block with inner curved arc matching center circle
const MASTER_PENTAGON_PATH = `
  M 243, 38
  Q 250, 30 257, 38
  L 328, 110
  Q 335, 117 329, 126
  L 297, 172
  Q 292, 178 284, 178
  A 74 74 0 0 0 216 178
  Q 208, 178 203, 172
  L 171, 126
  Q 165, 117 172, 110
  Z
`;

// Shape configuration matching the 5 pentagons in the reference image
const SHAPES = [
  {
    num: "01",
    angle: 0,
    g: ["#7A141D", "#5B0B13", "#3D0509"],
    gHover: ["#9A1B27", "#721019", "#4E080F"],
    badgeG: ["#5E0F17", "#3D060B"],
    accent: "#F5E6C8",
    title: ["Integrated", "Corporate", "Advisory"],
    cx: 250,
    cy: 110,
    lineStart: { x: 300, y: 55 },
  },
  {
    num: "02",
    angle: 72,
    g: ["#AA3C1E", "#842812", "#5B160A"],
    gHover: ["#C94A26", "#A13417", "#751F0D"],
    badgeG: ["#963216", "#631C0A"],
    accent: "#F8E9D0",
    title: ["Business-First", "Perspective"],
    cx: 382,
    cy: 206,
    lineStart: { x: 420, y: 206 },
  },
  {
    num: "03",
    angle: 144,
    g: ["#BC5D19", "#93430E", "#692C07"],
    gHover: ["#DB6F22", "#B25413", "#82370A"],
    badgeG: ["#A44E13", "#702E08"],
    accent: "#FAECD3",
    title: ["Experienced", "Across the", "Business Lifecycle"],
    cx: 332,
    cy: 362,
    lineStart: { x: 395, y: 355 },
  },
  {
    num: "04",
    angle: 216,
    g: ["#C6851C", "#98600E", "#6C4107"],
    gHover: ["#E29824", "#B57311", "#85500A"],
    badgeG: ["#B07314", "#774A09"],
    accent: "#FCF0D6",
    title: ["Technology-Driven", "Delivery"],
    cx: 168,
    cy: 362,
    lineStart: { x: 190, y: 410 },
  },
  {
    num: "05",
    angle: 288,
    g: ["#836920", "#5C4912", "#3A2D09"],
    gHover: ["#9D802B", "#755E17", "#4D3D0A"],
    badgeG: ["#6E5C1E", "#43360B"],
    accent: "#F6EBCF",
    title: ["Trusted Long-Term", "Partnerships"],
    cx: 118,
    cy: 206,
    lineStart: { x: 80, y: 206 },
  },
];

export default function PentagonFunnel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.15fr_0.95fr] lg:gap-12">
      {/* ── Left Column: Header & Intro ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="max-w-md"
      >
        <div>
          <p className="eyebrow text-[#A07A50] tracking-[0.22em]">OUR DIFFERENCE</p>
          <span className="mt-2 block h-[1.5px] w-24 bg-[#C89B48]/50" />
        </div>

        <h2 className="mt-6 font-[var(--font-display)] text-ink text-[clamp(2.1rem,3.4vw,2.8rem)] leading-[1.12]">
          Why Businesses <br />
          Choose Regis <br />
          and Savoy
        </h2>

        <div className="my-5 text-copper text-lg">✦</div>

        <p className="text-[0.96rem] leading-relaxed text-ink-soft">
          Five reasons organisations trust us to navigate complexity, protect
          value, and unlock sustainable growth.
        </p>
      </motion.div>

      {/* ── Middle Column: Pentagon Diagram ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="relative mx-auto aspect-square w-full max-w-[480px]"
      >
        <svg
          viewBox="0 0 500 500"
          className="h-full w-full drop-shadow-[0_24px_48px_rgba(60,20,10,0.22)]"
          style={{ overflow: "visible" }}
        >
          <defs>
            {/* Pentagon Gradients */}
            {SHAPES.map((s, i) => (
              <linearGradient key={`grad-${i}`} id={`shape-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={s.g[0]} />
                <stop offset="55%" stopColor={s.g[1]} />
                <stop offset="100%" stopColor={s.g[2]} />
              </linearGradient>
            ))}
            {/* Hover Gradients */}
            {SHAPES.map((s, i) => (
              <linearGradient key={`grad-h-${i}`} id={`shape-grad-hover-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={s.gHover[0]} />
                <stop offset="55%" stopColor={s.gHover[1]} />
                <stop offset="100%" stopColor={s.gHover[2]} />
              </linearGradient>
            ))}

            {/* Soft Glow Filter */}
            <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="rgba(240, 200, 120, 0.6)" />
            </filter>
          </defs>

          {/* 5 Pentagon Shield Shapes */}
          {SHAPES.map((s, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <g key={`shape-group-${i}`}>
                <motion.path
                  d={MASTER_PENTAGON_PATH}
                  transform={`rotate(${s.angle}, 250, 250)`}
                  fill={isHovered ? `url(#shape-grad-hover-${i})` : `url(#shape-grad-${i})`}
                  stroke="#FAF4EB"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  style={{ cursor: "pointer", transformOrigin: "250px 250px" }}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  animate={{
                    scale: isHovered ? 1.045 : 1,
                    filter: isHovered ? "url(#gold-glow)" : "none",
                    opacity: hoveredIndex !== null && !isHovered ? 0.75 : 1,
                  }}
                  transition={{ duration: 0.35, ease: EASE }}
                />
              </g>
            );
          })}

          {/* Center White Emblem Circle */}
          <circle cx="250" cy="250" r="68" fill="#FAF6EE" stroke="#D9B675" strokeWidth="2.2" />
          <circle cx="250" cy="250" r="63" fill="none" stroke="#E8D1A4" strokeWidth="1" />

          {/* Center Circle Content */}
          <text x="250" y="214" textAnchor="middle" fill="#C89B48" fontSize="11">
            ✦
          </text>
          <text
            x="250"
            y="242"
            textAnchor="middle"
            fill="#2C201A"
            className="font-[var(--font-display)]"
            fontSize="18"
            fontWeight="600"
          >
            Corporate
          </text>
          <text
            x="250"
            y="263"
            textAnchor="middle"
            fill="#2C201A"
            className="font-[var(--font-display)]"
            fontSize="18"
            fontWeight="600"
          >
            Services
          </text>
          <text x="250" y="286" textAnchor="middle" fill="#C89B48" fontSize="11">
            ✦
          </text>

          {/* Content Overlays for Each Shape (Number, Icon, Text) */}
          {SHAPES.map((s, i) => {
            const Icon = ICONS[i];
            const isHovered = hoveredIndex === i;
            return (
              <g
                key={`shape-content-${i}`}
                style={{ pointerEvents: "none" }}
              >
                <motion.g
                  animate={{
                    scale: isHovered ? 1.08 : 1,
                    opacity: hoveredIndex !== null && !isHovered ? 0.7 : 1,
                  }}
                  transition={{ duration: 0.3, ease: EASE }}
                  style={{ transformOrigin: `${s.cx}px ${s.cy}px` }}
                >
                  {/* Number */}
                  <text
                    x={s.cx}
                    y={s.cy - 20}
                    textAnchor="middle"
                    fill={s.accent}
                    className="font-[var(--font-display)]"
                    fontSize="18"
                    fontWeight="500"
                  >
                    {s.num}
                  </text>

                  {/* Icon */}
                  <g transform={`translate(${s.cx - 12}, ${s.cy - 14})`} stroke={s.accent} color={s.accent}>
                    <Icon />
                  </g>

                  {/* Multi-line Title */}
                  {s.title.map((line, lineIdx) => (
                    <text
                      key={lineIdx}
                      x={s.cx}
                      y={s.cy + 18 + lineIdx * 11}
                      textAnchor="middle"
                      fill="#FCF6EA"
                      className="font-[var(--font-display)]"
                      fontSize="9.5"
                      fontWeight="500"
                    >
                      {line}
                    </text>
                  ))}
                </motion.g>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* ── Right Column: Numbered Items List with Star Dividers ── */}
      <div className="flex flex-col">
        {about.whyChoose.map((v, i) => {
          const s = SHAPES[i];
          const isHovered = hoveredIndex === i;
          return (
            <div key={v.title} className="flex flex-col">
              {/* Star Divider Line between items */}
              {i > 0 && (
                <div className="relative my-3 flex items-center">
                  <div className="h-[1px] w-full bg-[#E2D4C0]" />
                  <span className="absolute left-[-16px] text-xs text-[#C89B48]">✦</span>
                </div>
              )}

              <motion.div
                className="group flex cursor-pointer items-center gap-4 rounded-xl p-2.5 transition-colors duration-300"
                style={{
                  backgroundColor: isHovered ? `${s.badgeG[0]}15` : "transparent",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Number Badge Circle with Matching Gradient & Outer Ring */}
                <motion.div
                  className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                  style={{
                    background: `linear-gradient(135deg, ${s.badgeG[0]}, ${s.badgeG[1]})`,
                    border: "1.5px solid #E5D2B3",
                  }}
                  animate={{ scale: isHovered ? 1.12 : 1 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <span className="font-[var(--font-display)] text-base font-medium text-[#FAF4EB]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>

                {/* Text Content */}
                <p className="text-[0.91rem] leading-snug text-ink-soft transition-colors duration-300 group-hover:text-ink">
                  {v.body}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
