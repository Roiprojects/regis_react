import { motion } from "framer-motion";
import Link from "@/components/AppLink";

const EASE = [0.16, 1, 0.3, 1] as const;

// Each annotation: where the line meets the terrarium element (% of image);
// the label sits just outside the image edge at the same height.
const ANNOTATIONS = [
  { keyword: "Governance", dotX: 50, dotY: 15 },
  { keyword: "Compliance", dotX: 74, dotY: 31 },
  { keyword: "Legal Advisory", dotX: 52, dotY: 45 },
  { keyword: "Risk Management", dotX: 55, dotY: 58 },
  { keyword: "Structuring", dotX: 32, dotY: 72 },
  { keyword: "Strategic Advisory", dotX: 50, dotY: 86 },
];

export default function TerrariumEmblem({ href }: { href: string }) {
  return (
    <Link
      href={href}
      aria-label="Why Regis and Savoy — the Terrarium Framework"
      className="group relative block cursor-pointer"
    >
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="show"
        transition={{ duration: 0.7, ease: EASE }}
        className="flex items-center justify-center"
      >
        {/* Terrarium image with labels anchored to its right edge */}
        <div className="relative w-[320px] shrink-0 lg:w-[380px]">
          <img
            src="/images/terrarium-element.png"
            alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
            className="block h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(80,50,20,0.28)] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="glass-sheen" />

          {/* connector lines — from the element straight out to the image edge */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            style={{ overflow: "visible" }}
          >
            {ANNOTATIONS.map((a, i) => (
              <motion.line
                key={a.keyword}
                x1={a.dotX}
                y1={a.dotY}
                x2={101}
                y2={a.dotY}
                stroke="#c0724a"
                strokeWidth="0.3"
                strokeDasharray="1.2 1"
                variants={{
                  rest: { opacity: 0, pathLength: 0 },
                  show: { opacity: 1, pathLength: 1 },
                }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.06 }}
              />
            ))}
            {ANNOTATIONS.map((a, i) => (
              <motion.circle
                key={a.keyword + "-d"}
                cx={a.dotX}
                cy={a.dotY}
                r={0.7}
                fill="#c0724a"
                variants={{ rest: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.3, delay: i * 0.06 + 0.1 }}
              />
            ))}
          </svg>

          {/* labels — at each line's height, just outside the image (no numbers) */}
          {ANNOTATIONS.map((a, i) => (
            <motion.div
              key={a.keyword}
              style={{ top: `${a.dotY}%`, left: "100%" }}
              variants={{
                rest: { opacity: 0, x: 8 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 + 0.05 }}
              className="absolute ml-2.5 -translate-y-1/2 whitespace-nowrap font-[var(--font-sans)] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#3a2e26] transition-colors group-hover:text-[#9e532d]"
            >
              {a.keyword}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
