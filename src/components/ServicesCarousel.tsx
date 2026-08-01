import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { services } from "@/lib/content";
import { iconByService } from "@/components/TerraIcons";
import { ArrowIcon } from "@/components/ui";

const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 6000; // auto-advance interval (ms)

const SHORT: Record<string, string> = {
  "business-structuring": "Business Structuring",
  "governance-compliance": "Governance & Compliance",
  "legal-advisory": "Legal Advisory",
  "risk-strategic-advisory": "Risk & Strategy",
  "private-equity": "Private Equity",
  "specialized-dispute-audit": "Litigation & Audit",
};

function descFor(
  item: string,
  details?: { name: string; desc: string }[],
): string | undefined {
  if (!details) return undefined;
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z]/g, "");
  const ni = norm(item);
  return details.find(
    (x) => norm(x.name) === ni || ni.includes(norm(x.name)) || norm(x.name).includes(ni),
  )?.desc;
}

const subContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
};
const subItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// Auto-advancing services carousel (dark theme) with manual control.
export default function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = services[active];
  const Icon = iconByService[s.id];

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(
      () => setActive((a) => (a + 1) % services.length),
      DURATION,
    );
    return () => clearTimeout(t);
  }, [active, paused]);

  const go = (i: number) => setActive((i + services.length) % services.length);

  return (
    <div
      className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
        {services.map((sv, i) => (
          <button
            key={sv.id}
            onClick={() => go(i)}
            className={`group flex items-center gap-2 whitespace-nowrap py-1 text-[0.82rem] uppercase tracking-[0.12em] transition-colors ${
              i === active ? "text-gold-soft" : "text-paper/45 hover:text-paper"
            }`}
          >
            <span className="font-[var(--font-display)] text-xs">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-medium">{SHORT[sv.id]}</span>
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-5 h-px w-full bg-white/12">
        <motion.div
          key={active + (paused ? "-p" : "")}
          initial={{ width: "0%" }}
          animate={{ width: paused ? "0%" : "100%" }}
          transition={{ duration: paused ? 0 : DURATION / 1000, ease: "linear" }}
          className="h-px bg-gold-soft"
        />
      </div>

      {/* Active service */}
      <AnimatePresence mode="wait">
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="grid gap-10 pt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          {/* Header */}
          <div>
            <div className="flex items-center gap-4">
              <span className="font-[var(--font-display)] text-4xl text-gold-soft">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson/90 p-3 text-paper">
                {Icon ? <Icon /> : null}
              </span>
            </div>
            <h3 className="mt-6 font-[var(--font-display)] text-[clamp(1.9rem,3vw,2.7rem)] leading-tight text-paper">
              {s.title}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/65">
              {s.summary}
            </p>
          </div>

          {/* Sub-services */}
          <motion.div
            variants={subContainer}
            initial="hidden"
            animate="show"
            className="grid gap-4 sm:grid-cols-2"
          >
            {s.items.map((it) => {
              const desc = descFor(it, s.details);
              return (
                <motion.div
                  key={it}
                  variants={subItem}
                  className="group/card h-full rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.015] p-6 backdrop-blur-sm transition-colors duration-500 hover:border-gold-soft/40 hover:from-white/[0.11]"
                >
                  <span className="mb-3.5 block h-1.5 w-6 rounded-full bg-gold-soft" />
                  <p className="font-[var(--font-display)] text-lg leading-snug text-paper">
                    {it}
                  </p>
                  {desc ? (
                    <p className="mt-2 text-sm leading-relaxed text-paper/60">
                      {desc}
                    </p>
                  ) : null}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to service ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-7 bg-gold-soft" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => go(active - 1)}
            aria-label="Previous service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-paper transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            <ArrowIcon className="rotate-180" />
          </button>
          <button
            onClick={() => go(active + 1)}
            aria-label="Next service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-paper transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
