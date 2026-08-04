import { motion } from "framer-motion";
import { useState } from "react";

// Precise percentage polygon points for the 5 pentagon shapes on our-difference.png
const SHAPE_HOTSPOTS = [
  {
    id: "01",
    name: "Integrated Corporate Advisory",
    // Shape 01 (Top)
    poly: "47.5,8.0 54.9,20.0 50.8,38.5 44.2,38.5 40.1,20.0",
    itemRect: { left: "65%", top: "7%", width: "31%", height: "14%" },
  },
  {
    id: "02",
    name: "Business-First Perspective",
    // Shape 02 (Top Right)
    poly: "65.0,34.0 59.5,52.0 50.8,51.5 48.8,41.0 57.5,27.9",
    itemRect: { left: "65%", top: "25%", width: "31%", height: "14%" },
  },
  {
    id: "03",
    name: "Experienced Across the Business Lifecycle",
    // Shape 03 (Bottom Right)
    poly: "58.5,84.8 47.5,72.0 48.8,55.5 61.9,49.9 61.5,68.0",
    itemRect: { left: "65%", top: "43%", width: "31%", height: "14%" },
  },
  {
    id: "04",
    name: "Technology-Driven Delivery",
    // Shape 04 (Bottom Left)
    poly: "36.5,84.8 33.5,68.0 33.1,49.9 46.2,55.5 47.5,72.0",
    itemRect: { left: "65%", top: "61%", width: "31%", height: "14%" },
  },
  {
    id: "05",
    name: "Trusted Long-Term Partnerships",
    // Shape 05 (Top Left)
    poly: "30.0,34.0 37.5,27.9 46.2,41.0 44.2,51.5 35.5,52.0",
    itemRect: { left: "65%", top: "79%", width: "31%", height: "14%" },
  },
];

export default function PentagonFunnel() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[1360px] overflow-hidden rounded-2xl">
      {/* ── Base High-Res Design Image Asset (100% Perfect Original Graphic) ── */}
      <img
        src="/images/our-difference.png"
        alt="Our Difference — Why Businesses Choose Regis and Savoy"
        className="block h-auto w-full object-contain"
      />

      {/* ── Subtle Interactive SVG Hotspot Overlays over the 5 Shapes ── */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id="subtle-gold-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor="rgba(216, 160, 60, 0.75)" />
          </filter>
        </defs>

        {SHAPE_HOTSPOTS.map((s, i) => {
          const isActive = activeIdx === i;
          return (
            <motion.polygon
              key={`poly-${s.id}`}
              points={s.poly}
              fill={isActive ? "rgba(255, 235, 175, 0.16)" : "transparent"}
              stroke={isActive ? "rgba(225, 175, 75, 0.85)" : "transparent"}
              strokeWidth={isActive ? "0.6" : "0"}
              strokeLinejoin="round"
              filter={isActive ? "url(#subtle-gold-glow)" : "none"}
              className="cursor-pointer"
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            />
          );
        })}
      </svg>

      {/* ── Interactive Highlight Overlays over Right List Items ── */}
      {SHAPE_HOTSPOTS.map((s, i) => {
        const isActive = activeIdx === i;
        return (
          <div
            key={`item-${s.id}`}
            style={{
              position: "absolute",
              left: s.itemRect.left,
              top: s.itemRect.top,
              width: s.itemRect.width,
              height: s.itemRect.height,
            }}
            className="cursor-pointer"
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
          >
            <motion.div
              className="relative h-full w-full rounded-xl border transition-all duration-300"
              animate={{
                backgroundColor: isActive ? "rgba(192, 114, 74, 0.08)" : "transparent",
                borderColor: isActive ? "rgba(200, 155, 72, 0.45)" : "transparent",
                boxShadow: isActive ? "0 4px 20px rgba(192, 114, 74, 0.15)" : "none",
              }}
            >
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 text-sm text-[#C89B48]"
                >
                  ✦
                </motion.span>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
