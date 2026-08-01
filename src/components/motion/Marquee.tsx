import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Infinite horizontal marquee (AZB awards-strip style).
export default function Marquee({
  children,
  speed = 38,
  reverse = false,
  className,
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="flex shrink-0 items-center gap-0 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
