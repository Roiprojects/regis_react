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
        <div className="relative w-[230px] shrink-0 sm:w-[290px] lg:w-[420px]">
          <img
            src="/images/terrarium-element.png"
            alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
            className="block h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(80,50,20,0.28)] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="glass-sheen" />

          {/* connector lines — hidden on mobile, visible on lg+ hover */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
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
                strokeWidth="0.2"
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
                r={0.5}
                fill="#c0724a"
                variants={{ rest: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.3, delay: i * 0.06 + 0.1 }}
              />
            ))}
          </svg>

          {/* labels — hidden on mobile, shown on lg+ hover */}
          {ANNOTATIONS.map((a, i) => (
            <motion.div
              key={a.keyword}
              style={{ top: `${a.dotY}%`, left: "100%" }}
              variants={{
                rest: { opacity: 0, x: 8 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 + 0.05 }}
              className="absolute ml-2.5 hidden -translate-y-1/2 whitespace-nowrap font-[var(--font-sans)] text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#3a2e26] transition-colors group-hover:text-[#9e532d] lg:block"
            >
              {a.keyword}
            </motion.div>
          ))}

          {/* Interactive prompt badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
            className="absolute -bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-copper/40 bg-[#f4ebd9]/95 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-copper-dark shadow-[0_8px_24px_rgba(80,50,20,0.18)] backdrop-blur-md transition-all duration-300 group-hover:border-copper group-hover:bg-copper group-hover:text-ivory-2 group-hover:shadow-[0_12px_28px_rgba(80,50,20,0.32)]"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper opacity-75 group-hover:bg-ivory-2" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-copper group-hover:bg-ivory-2" />
            </span>
            <span>Click to Explore Framework</span>
            <svg
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
