import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// 6 Feature points on terrarium-element.png (% coordinates) and their labels
const ANNOTATIONS = [
  { keyword: "GOVERNANCE", dotX: 35.5, dotY: 12.5 },
  { keyword: "COMPLIANCE", dotX: 51.5, dotY: 28.2 },
  { keyword: "LEGAL ADVISORY", dotX: 36.2, dotY: 45.8 },
  { keyword: "RISK MANAGEMENT", dotX: 41.5, dotY: 60.5 },
  { keyword: "STRUCTURING", dotX: 22.5, dotY: 74.2 },
  { keyword: "STRATEGIC ADVISORY", dotX: 35.5, dotY: 87.2 },
];

export default function WhyTerrariumDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative mx-auto flex w-full max-w-[700px] items-center justify-center py-4"
    >
      {/* Terrarium Container */}
      <div className="relative w-[340px] shrink-0 sm:w-[420px] md:w-[480px] lg:w-[500px]">
        <img
          src="/images/terrarium-element.png"
          alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
          className="block h-auto w-full object-contain drop-shadow-[0_28px_56px_rgba(80,50,20,0.28)]"
        />

        {/* SVG Connector Lines & Dots */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ overflow: "visible" }}
        >
          {ANNOTATIONS.map((a, i) => (
            <g key={a.keyword}>
              {/* Feature Dot on the Terrarium */}
              <motion.circle
                cx={a.dotX}
                cy={a.dotY}
                r={0.85}
                fill="#C0724A"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 + 0.2 }}
              />
              {/* Horizontal Solid Copper Line to Right Edge */}
              <motion.line
                x1={a.dotX}
                y1={a.dotY}
                x2={100}
                y2={a.dotY}
                stroke="#C0724A"
                strokeWidth="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 + 0.1 }}
              />
            </g>
          ))}
        </svg>

        {/* Right Keyword Labels Aligned precisely at each line's height */}
        {ANNOTATIONS.map((a, i) => (
          <motion.div
            key={a.keyword}
            style={{ top: `${a.dotY}%`, left: "100%" }}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 + 0.35 }}
            className="absolute ml-3 -translate-y-1/2 whitespace-nowrap font-[var(--font-sans)] text-[0.7rem] sm:text-[0.78rem] font-semibold tracking-[0.16em] text-[#9E532D]"
          >
            {a.keyword}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
