import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

// 5 Interactive Hotspot Regions matching the exact position of shapes & list items in our-difference.png
const HOTSPOTS = [
  {
    id: "01",
    title: "Integrated Corporate Advisory",
    color: "#7A141D",
    badgeG: ["#7A141D", "#45080E"],
    // Polygon points in % coordinates on our-difference.png for Shape 01
    poly: "47.5,6.5 53.2,20.8 48.0,30.8 47.0,30.8 41.8,20.8",
    center: { x: "47.5%", y: "21.5%" },
    // Bounding box for right item 01
    itemRect: { left: "65%", top: "7%", width: "31%", height: "13%" },
    desc: "Legal, governance, compliance, risk and strategy brought together within a single coordinated framework.",
  },
  {
    id: "02",
    title: "Business-First Perspective",
    color: "#AA3C1E",
    badgeG: ["#AA3C1E", "#5B160A"],
    poly: "53.5,21.5 66.8,31.2 59.8,47.8 49.5,41.2 53.0,31.5",
    center: { x: "57.0%", y: "37.5%" },
    itemRect: { left: "65%", top: "25%", width: "31%", height: "13%" },
    desc: "Practical, commercially focused advice that aligns legal obligations with business objectives.",
  },
  {
    id: "03",
    title: "Experienced Across the Business Lifecycle",
    color: "#BC5D19",
    badgeG: ["#BC5D19", "#692C07"],
    poly: "60.2,48.8 54.0,72.5 47.6,72.5 48.2,52.2 50.2,42.5",
    center: { x: "53.5%", y: "65.5%" },
    itemRect: { left: "65%", top: "43%", width: "31%", height: "13%" },
    desc: "Support from incorporation and expansion through restructuring, dispute resolution and continuity.",
  },
  {
    id: "04",
    title: "Technology-Driven Delivery",
    color: "#C6851C",
    badgeG: ["#C6851C", "#6C4107"],
    poly: "47.4,72.5 41.0,72.5 34.8,48.8 44.8,42.5 46.8,52.2",
    center: { x: "41.4%", y: "65.5%" },
    itemRect: { left: "65%", top: "61%", width: "31%", height: "13%" },
    desc: "Efficient, transparent delivery powered by modern tools and disciplined processes.",
  },
  {
    id: "05",
    title: "Trusted Long-Term Partnerships",
    color: "#836920",
    badgeG: ["#836920", "#3A2D09"],
    poly: "41.5,21.5 42.0,31.5 45.5,41.2 35.2,47.8 28.2,31.2",
    center: { x: "38.0%", y: "37.5%" },
    itemRect: { left: "65%", top: "79%", width: "31%", height: "13%" },
    desc: "Relationships built to last, grounded in discretion, stewardship and candour.",
  },
];

export default function PentagonFunnel() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[1360px] overflow-hidden rounded-2xl">
      {/* ── Base Image Asset (Pin-to-Pin exact design graphic) ── */}
      <img
        src="/images/our-difference.png"
        alt="Our Difference — Why Businesses Choose Regis and Savoy"
        className="block h-auto w-full object-contain"
      />

      {/* ── Interactive Overlay Hotspots ── */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id="gold-glow-overlay" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.8" floodColor="rgba(240, 190, 90, 0.85)" />
          </filter>
        </defs>

        {HOTSPOTS.map((h, i) => {
          const isActive = activeIdx === i;
          return (
            <motion.polygon
              key={h.id}
              points={h.poly}
              fill={isActive ? `${h.color}40` : "transparent"}
              stroke={isActive ? "#FAF4EB" : "transparent"}
              strokeWidth="0.6"
              filter={isActive ? "url(#gold-glow-overlay)" : "none"}
              className="cursor-pointer transition-colors duration-300"
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            />
          );
        })}
      </svg>

      {/* ── Highlight Overlays for Right List Items ── */}
      {HOTSPOTS.map((h, i) => {
        const isActive = activeIdx === i;
        return (
          <div
            key={`item-spot-${h.id}`}
            style={{
              position: "absolute",
              left: h.itemRect.left,
              top: h.itemRect.top,
              width: h.itemRect.width,
              height: h.itemRect.height,
            }}
            className="cursor-pointer"
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
          >
            <motion.div
              className="h-full w-full rounded-xl border border-transparent transition-all duration-300"
              animate={{
                backgroundColor: isActive ? `${h.color}15` : "transparent",
                borderColor: isActive ? `${h.color}60` : "transparent",
                boxShadow: isActive ? `0 8px 24px ${h.color}25` : "none",
              }}
            />
          </div>
        );
      })}

      {/* ── Interactive Detail Tooltip / Card on Hover ── */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{
              position: "absolute",
              left: HOTSPOTS[activeIdx].center.x,
              top: HOTSPOTS[activeIdx].center.y,
              transform: "translate(-50%, -100%)",
            }}
            className="pointer-events-none z-30 hidden max-w-xs rounded-xl border border-[#FAF4EB]/80 bg-[#1C1512]/92 p-4 text-ivory-2 shadow-2xl backdrop-blur-md md:block"
          >
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full font-[var(--font-display)] text-xs font-semibold text-white"
                style={{ backgroundColor: HOTSPOTS[activeIdx].color }}
              >
                {HOTSPOTS[activeIdx].id}
              </span>
              <h4 className="font-[var(--font-display)] text-sm font-medium leading-tight text-[#FAF4EB]">
                {HOTSPOTS[activeIdx].title}
              </h4>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ivory-2/80">
              {HOTSPOTS[activeIdx].desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
