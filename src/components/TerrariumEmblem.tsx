
import { motion } from "framer-motion";
import Link from "@/components/AppLink";
import { heroAnnotations } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

const KEYWORDS = [...heroAnnotations.left, ...heroAnnotations.right];

const container = {
  rest: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};
const fromLeft = {
  rest: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

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
        className="mx-auto flex w-full max-w-[780px] items-center justify-center gap-5 sm:gap-8"
      >
        {/* Keyword annotations — to the left, each pointing right at the terrarium.
            Revealed one by one on hover, generously spaced, never over the image. */}
        <motion.ul
          variants={container}
          className="flex shrink-0 flex-col gap-6 text-right sm:gap-7"
        >
          {KEYWORDS.map((w) => (
            <motion.li
              key={w}
              variants={fromLeft}
              className="flex items-center justify-end gap-3 whitespace-nowrap"
            >
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-inkg drop-shadow-[0_1px_2px_rgba(247,241,230,0.7)]">
                {w}
              </span>
              {/* connector line + point aimed at the image */}
              <span className="flex items-center">
                <span className="h-px w-9 bg-gradient-to-r from-copper/20 to-copper" />
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Terrarium image — sits to the right */}
        <div className="relative min-w-0 max-w-[540px] flex-1">
          <img
            src="/images/terrarium-element.png"
            alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
            className="block w-full object-contain drop-shadow-[0_26px_44px_rgba(80,60,30,0.26)] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* slow light reflection sweeping across the glass */}
          <span className="glass-sheen" />
        </div>
      </motion.div>
    </Link>
  );
}
