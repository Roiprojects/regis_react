import { motion, type Variants } from "framer-motion";
import { heroAnnotations } from "@/lib/content";
import { iconByKeyword } from "@/components/TerraIcons";

const EASE = [0.16, 1, 0.3, 1] as const;
const KEYWORDS = [...heroAnnotations.left, ...heroAnnotations.right];

const container: Variants = {
  rest: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};
const item: Variants = {
  rest: { opacity: 0, x: -12 },
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

// Keyword annotations beside the terrarium — a monoline icon in a thin circle,
// the label, and a connector line pointing at the vessel (ref "1 (1)").
// `trigger="hover"` inherits its state from a parent whileHover; `trigger="view"`
// reveals itself on scroll into view.
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
      className="flex shrink-0 flex-col gap-5 text-right sm:gap-6"
    >
      {KEYWORDS.map((w) => {
        const Icon = iconByKeyword[w];
        return (
          <motion.li
            key={w}
            variants={item}
            className="flex items-center justify-end gap-2.5 whitespace-nowrap"
          >
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-inkg drop-shadow-[0_1px_2px_rgba(247,241,230,0.7)]">
              {w}
            </span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-copper/45 bg-white/70 p-2 text-copper shadow-[0_2px_8px_rgba(80,60,30,0.12)] backdrop-blur-sm">
              {Icon ? <Icon /> : null}
            </span>
            <span className="h-px w-7 bg-gradient-to-r from-copper/25 to-copper" />
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
