import { motion } from "framer-motion";
import { useState } from "react";
import { about } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Line-art icons (match the reference) */
function IconScales() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 3v17M5 7h14M8 20h8" />
      <path d="M5 7l-3 7h6l-3-7zM19 7l-3 7h6l-3-7z" />
    </svg>
  );
}
function IconUserSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="10" cy="8" r="3.5" /><path d="M3.5 19c0-3.2 2.8-5.5 6.5-5.5" />
      <circle cx="16" cy="15" r="3" /><path d="M18.2 17.2l2.3 2.3" />
    </svg>
  );
}
function IconLifecycle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="10" r="3.3" /><path d="M9 3.5l3-2 3 2M9 20.5l3 2 3-2" />
      <path d="M6 19c0-3 2.7-5 6-5s6 2 6 5" />
    </svg>
  );
}
function IconTechnology() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="3" y="4" width="18" height="12" rx="1.4" /><path d="M12 16v3.5M8 19.5h8" />
      <path d="M7 12v-2M11 12V8.5M15 12V7" />
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M3 11l4-3.5 4.5 3L16 6.5l5 4M3 11l4 4 4.5-3M21 10.5l-4 4-4.5-3M7 15l2.5 2.5L12 15" />
    </svg>
  );
}

const ICONS = [IconScales, IconUserSearch, IconLifecycle, IconTechnology, IconHandshake];

// Petal shape config — polygons computed for a flat-top pentagon (viewBox 100),
// label anchor (% of emblem), and colours per step.
const PETALS = [
  { poly: "23,12.8 77,12.8 61.8,33.8 38.2,33.8", g: ["#7d151a", "#4f0a0e"], gHover: ["#9e1a22", "#6b1014"], accent: "#e9c98f", badge: "#7d151a", lx: 50, ly: 16 },
  { poly: "77,12.8 93.7,64.2 69,56.2 61.8,33.8", g: ["#a63f24", "#782914"], gHover: ["#c44c2b", "#8f3319"], accent: "#edd4a6", badge: "#a63f24", lx: 79, ly: 38 },
  { poly: "93.7,64.2 50,96 50,70 69,56.2", g: ["#b85e24", "#873e10"], gHover: ["#d96f2b", "#a04d14"], accent: "#f0c689", badge: "#b85e24", lx: 68, ly: 78 },
  { poly: "50,96 6.3,64.2 31,56.2 50,70", g: ["#c48325", "#8f5a12"], gHover: ["#e09c2d", "#a86a16"], accent: "#f5d496", badge: "#c48325", lx: 32, ly: 78 },
  { poly: "6.3,64.2 23,12.8 38.2,33.8 31,56.2", g: ["#7c6827", "#544516"], gHover: ["#99802f", "#6a561e"], accent: "#dfc783", badge: "#7c6827", lx: 21, ly: 38 },
];

export default function PentagonFunnel() {
  const [hoveredPetal, setHoveredPetal] = useState<number | null>(null);

  return (
    <div className="mt-6 grid items-center gap-10 lg:grid-cols-[0.82fr_1.15fr_0.95fr] lg:gap-12">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="max-w-md"
      >
        <p className="eyebrow text-crimson">Our Difference</p>
        <span className="my-5 block h-px w-20 bg-crimson/40" />
        <h2 className="display-lg text-ink" style={{ fontSize: "clamp(1.9rem,3.2vw,2.7rem)" }}>
          Why Businesses Choose Regis and Savoy
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink-soft">
          Five reasons organisations trust us to navigate complexity, protect
          value, and unlock sustainable growth.
        </p>
      </motion.div>

      {/* ── Pentagon emblem ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="relative mx-auto aspect-square w-full max-w-[440px]"
      >
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full drop-shadow-[0_20px_40px_rgba(80,20,15,0.22)]"
          style={{ overflow: "visible" }}
        >
          <defs>
            {PETALS.map((p, i) => (
              <linearGradient key={i} id={`petal-${i}`} x1="0" y1="0" x2="0.4" y2="1">
                <stop offset="0" stopColor={p.g[0]} />
                <stop offset="1" stopColor={p.g[1]} />
              </linearGradient>
            ))}
            {PETALS.map((p, i) => (
              <linearGradient key={`h-${i}`} id={`petal-hover-${i}`} x1="0" y1="0" x2="0.4" y2="1">
                <stop offset="0" stopColor={p.gHover[0]} />
                <stop offset="1" stopColor={p.gHover[1]} />
              </linearGradient>
            ))}
            {/* Drop shadow filter for hovered petal */}
            <filter id="petal-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="rgba(255,200,120,0.55)" />
            </filter>
          </defs>

          {PETALS.map((p, i) => (
            <motion.polygon
              key={i}
              points={p.poly}
              fill={`url(#petal-${i})`}
              stroke="#f3ead8"
              strokeWidth="1.4"
              strokeLinejoin="round"
              style={{ cursor: "pointer" }}
              onHoverStart={() => setHoveredPetal(i)}
              onHoverEnd={() => setHoveredPetal(null)}
              animate={{
                fill: hoveredPetal === i ? `url(#petal-hover-${i})` : `url(#petal-${i})`,
                scale: hoveredPetal === i ? 1.045 : 1,
                filter: hoveredPetal === i ? "url(#petal-glow)" : "none",
              }}
              transition={{ duration: 0.35, ease: EASE }}
              transformOrigin="50px 50px"
              whileHover={{ scale: 1.045 }}
            />
          ))}
          <circle cx="50" cy="50" r="18.5" fill="#f7eedb" stroke="#e2d0aa" strokeWidth="0.7" />
        </svg>

        {/* petal labels */}
        {about.whyChoose.map((v, i) => {
          const p = PETALS[i];
          const Icon = ICONS[i];
          return (
            <motion.div
              key={v.title}
              style={{ left: `${p.lx}%`, top: `${p.ly}%` }}
              className="pointer-events-none absolute flex w-[27%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 text-center"
              animate={{
                scale: hoveredPetal === i ? 1.12 : 1,
                opacity: hoveredPetal !== null && hoveredPetal !== i ? 0.6 : 1,
              }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <span className="font-[var(--font-display)] text-[0.95rem]" style={{ color: p.accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ color: p.accent }}>
                <Icon />
              </span>
              <span className="font-[var(--font-display)] text-[0.6rem] font-medium leading-tight text-[#fcf6ea]">
                {v.title}
              </span>
            </motion.div>
          );
        })}

        {/* centre */}
        <div className="absolute left-1/2 top-1/2 flex h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center">
          <span className="font-[var(--font-display)] text-[1.05rem] font-medium leading-tight text-crimson">
            Corporate
            <br />
            Services
          </span>
        </div>
      </motion.div>

      {/* ── Numbered description list ── */}
      <div className="space-y-3.5">
        {about.whyChoose.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
            className="flex cursor-default items-start gap-4 rounded-lg px-3 py-2 transition-colors duration-300"
            style={{
              backgroundColor: hoveredPetal === i ? `${PETALS[i].badge}18` : "transparent",
            }}
            onMouseEnter={() => setHoveredPetal(i)}
            onMouseLeave={() => setHoveredPetal(null)}
          >
            <motion.span
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-[var(--font-display)] text-sm text-paper"
              style={{ backgroundColor: PETALS[i].badge }}
              animate={{ scale: hoveredPetal === i ? 1.15 : 1 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {String(i + 1).padStart(2, "0")}
            </motion.span>
            <p className="text-[0.92rem] leading-relaxed text-ink-soft">{v.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
