import { motion, type Variants } from "framer-motion";
import { heroAnnotations } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const KEYWORDS = [...heroAnnotations.left, ...heroAnnotations.right];

const container: Variants = {
  rest: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};
const item: Variants = {
  rest: { opacity: 0, x: 10 },
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

// Keyword annotations to the RIGHT of the terrarium — a connector line that
// touches the vessel on its left, then the label. `trigger="hover"` inherits
// its state from a parent whileHover; `trigger="view"` reveals on scroll.
export default function TerrariumKeywords({
  trigger = "hover",
}: {
  trigger?: "hover" | "view";
}) {
  const ulProps =
    trigger === "view"
      ? {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once: true, margin: "-12%" },
        }
      : {};

  return (
    <motion.ul
      variants={container}
      {...ulProps}
      className="ml-2 flex shrink-0 flex-col gap-5 sm:gap-6"
    >
      {KEYWORDS.map((w) => (
        <motion.li
          key={w}
          variants={item}
          className="flex items-center gap-3 whitespace-nowrap"
        >
          {/* connector line — reaches the vessel on its left */}
          <span className="h-px w-10 shrink-0 bg-gradient-to-r from-copper to-copper/25" />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-inkg drop-shadow-[0_1px_2px_rgba(247,241,230,0.7)]">
            {w}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
