import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// 6 Feature points on terrarium-element.png (% coordinates of the vessel image)
// Vessel occupies 63% of the total component width, reserving 37% on the right for full text labels.
const ANNOTATIONS = [
  { keyword: "GOVERNANCE", dotX_vessel: 35.5, dotY: 12.5 },
  { keyword: "COMPLIANCE", dotX_vessel: 51.5, dotY: 28.2 },
  { keyword: "LEGAL ADVISORY", dotX_vessel: 36.2, dotY: 45.8 },
  { keyword: "RISK MANAGEMENT", dotX_vessel: 41.5, dotY: 60.5 },
  { keyword: "STRUCTURING", dotX_vessel: 22.5, dotY: 74.2 },
  { keyword: "STRATEGIC ADVISORY", dotX_vessel: 35.5, dotY: 87.2 },
];

export default function WhyTerrariumDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative mx-auto flex w-full max-w-[780px] items-center justify-center py-4"
    >
      {/* Integrated Diagram Box: Vessel takes 63% width, text labels sit safely within the remaining 37% */}
      <div className="relative w-full">
        {/* Terrarium Vessel Image (63% width) */}
        <div className="relative w-[63%]">
          <img
            src="/images/terrarium-element.png"
            alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
            className="block h-auto w-full object-contain drop-shadow-[0_28px_56px_rgba(80,50,20,0.28)]"
          />
        </div>

        {/* SVG Connector Lines & Dots (full width 0..100) */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {ANNOTATIONS.map((a, i) => {
            const overallDotX = a.dotX_vessel * 0.63; // Point inside the vessel
            const lineEndX = 64.5; // End line right before text
            return (
              <g key={a.keyword}>
                {/* Feature Dot inside the Terrarium Vessel */}
                <motion.circle
                  cx={overallDotX}
                  cy={a.dotY}
                  r={0.85}
                  fill="#C0724A"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 + 0.2 }}
                />
                {/* Solid Copper Horizontal Connector Line */}
                <motion.line
                  x1={overallDotX}
                  y1={a.dotY}
                  x2={lineEndX}
                  y2={a.dotY}
                  stroke="#C0724A"
                  strokeWidth="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 + 0.1 }}
                />
              </g>
            );
          })}
        </svg>

        {/* Uppercase Keyword Labels positioned at 66% left, safely inside container */}
        {ANNOTATIONS.map((a, i) => (
          <motion.div
            key={a.keyword}
            style={{ top: `${a.dotY}%`, left: "66%" }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 + 0.35 }}
            className="absolute -translate-y-1/2 whitespace-nowrap font-[var(--font-sans)] text-[0.62rem] xs:text-[0.7rem] sm:text-[0.76rem] md:text-[0.82rem] font-semibold tracking-[0.14em] text-[#9E532D]"
          >
            {a.keyword}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
