import { motion } from "framer-motion";
import Link from "@/components/AppLink";
import { RevealWords } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import { hero, brand } from "@/lib/content";
import TerrariumEmblem from "@/components/TerrariumEmblem";

const WHY_HREF = "/why-regis-and-savoy";
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      data-bg="#e6d6c2"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pb-12 pt-28 sm:pt-32"
      style={{ backgroundColor: "#e6d6c2" }}
    >
      {/* Soft warm radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(62%_55%_at_72%_38%,rgba(250,244,233,0.75),transparent_60%)]" />

      {/* ─── Main two-column grid ─────────────────────────────────────── */}
      <div
        className="relative mx-auto flex w-full max-w-[1400px] flex-1 items-center
                   gap-8 px-6 sm:px-10 lg:px-[5vw]
                   flex-col lg:flex-row"
      >
        {/* ── LEFT COLUMN: hero copy ─────────────────── */}
        <div className="w-full max-w-[520px] shrink-0 text-center lg:text-left">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="mb-6 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="h-px w-10 bg-gradient-to-r from-copper to-transparent" />
            <span className="eyebrow text-copper font-medium">{brand.tagline}</span>
          </motion.div>

          {/* Headline */}
          <h1
            className="font-[var(--font-display)] text-inkg"
            style={{ fontSize: "clamp(1.7rem, 5vw, 3.6rem)", lineHeight: 1.08 }}
          >
            <span className="block sm:whitespace-nowrap">
              <RevealWords text={hero.headlineLine1} delay={0.15} />
            </span>
            <span className="block sm:whitespace-nowrap text-copper">
              <RevealWords text={hero.headlineLine2} delay={0.4} />
            </span>
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.8 }}
            className="mt-5 font-[var(--font-display)] text-base sm:text-lg leading-snug text-copper-dark"
          >
            {hero.sub}
          </motion.p>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.95 }}
            className="mt-4 text-[0.93rem] leading-relaxed text-inkg-soft"
          >
            {hero.lead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.05 }}
            className="mt-7 flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-3 lg:justify-start"
          >
            <Link
              href={hero.ctas[0].href}
              className="btn btn-terra group shrink-0 whitespace-nowrap gap-1.5 bg-copper px-3.5 py-2 text-[0.62rem] sm:px-4.5 sm:py-2.5 sm:text-[0.68rem] hover:bg-copper-dark"
            >
              {hero.ctas[0].label}
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href={hero.ctas[1].href}
              className="btn group shrink-0 whitespace-nowrap gap-1.5 border border-copper/50 px-3.5 py-2 text-[0.62rem] text-inkg sm:px-4.5 sm:py-2.5 sm:text-[0.68rem]
                         transition-colors duration-300 hover:border-copper hover:bg-copper/10"
            >
              {hero.ctas[1].label}
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: terrarium + hover annotations ────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
          className="flex flex-1 items-center justify-center lg:justify-start"
        >
          <TerrariumEmblem href={WHY_HREF} />
        </motion.div>
      </div>

      {/* ─── Meta strip ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="relative mx-auto mt-6 flex w-full max-w-[1400px] items-end
                   justify-between px-6 sm:px-10 lg:px-[5vw]"
      >
        <p className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-inkg/55">
          <span className="h-px w-8 shrink-0 bg-copper/45" />
          <span>
            An affiliate of{" "}
            <span className="font-medium text-copper-dark">{brand.parent}</span>
          </span>
        </p>
        <span className="hidden flex-col items-center gap-2 text-[0.62rem] uppercase tracking-[0.3em] text-sage sm:flex">
          Scroll
          <motion.span
            animate={{ scaleY: [0.3, 1, 0.3] }}
            style={{ transformOrigin: "top" }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-antique to-transparent"
          />
        </span>
      </motion.div>
    </section>
  );
}
