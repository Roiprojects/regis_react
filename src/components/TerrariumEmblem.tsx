import { motion } from "framer-motion";
import Link from "@/components/AppLink";
import { heroAnnotations } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

const KEYWORDS = [...heroAnnotations.left, ...heroAnnotations.right];

const container = {
  rest: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};
const fromRight = {
  rest: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

// Readable pill — same hover chip styling as before (slightly slimmer).
const chip =
  "whitespace-nowrap rounded-full bg-ivory-2/90 px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-inkg shadow-[0_6px_18px_rgba(34,52,40,0.22)] ring-1 ring-copper/30 backdrop-blur-sm";

export default function TerrariumEmblem({ href }: { href: string }) {
  return (
    <Link
      href={href}
      aria-label="Why Regis and Savoy — the Terrarium Framework"
      className="group block cursor-pointer"
    >
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="show"
        className="mx-auto flex w-full max-w-[760px] items-center justify-center gap-4 sm:gap-5"
      >
        {/* Terrarium image — same size / drop-shadow / hover-scale as before */}
        <div className="relative min-w-0 max-w-[540px] flex-1">
          <img
            src="/images/terrarium-element.png"
            alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
            className="block w-full object-contain drop-shadow-[0_26px_44px_rgba(80,60,30,0.26)] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* slow light reflection sweeping across the glass */}
          <span className="glass-sheen" />
        </div>

        {/* Keyword chips — revealed one by one on hover, beside the image (no overlap) */}
        <motion.ul variants={container} className="flex shrink-0 flex-col gap-3">
          {KEYWORDS.map((w) => (
            <motion.li
              key={w}
              variants={fromRight}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span className="h-px w-5 bg-copper" />
              <span className={chip}>{w}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Link>
  );
}
