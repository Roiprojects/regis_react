import { motion } from "framer-motion";
import Link from "@/components/AppLink";
import TerrariumKeywords from "@/components/TerrariumKeywords";

const EASE = [0.16, 1, 0.3, 1] as const;

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
        transition={{ duration: 0.9, ease: EASE }}
        className="mx-auto flex w-full max-w-[820px] items-center justify-center gap-5 sm:gap-8"
      >
        {/* Keyword annotations — icon in a circle + label, pointing at the vessel.
            Revealed one by one on hover, never over the image. */}
        <TerrariumKeywords trigger="hover" />

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
