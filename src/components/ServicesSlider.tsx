import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/lib/content";
import { iconByService } from "@/components/TerraIcons";

// Horizontal-scroll showcase: the track slides sideways as you scroll the
// pinned section vertically.
export default function ServicesSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[380vh] bg-night text-paper">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Heading */}
        <div className="mx-auto mb-8 flex w-full max-w-[1400px] items-end justify-between px-[var(--spacing-gutter)]">
          <div>
            <p className="eyebrow mb-3 text-gold-soft">Our Services</p>
            <h2 className="display-md max-w-[16ch] text-paper">
              A connected advisory ecosystem
            </h2>
          </div>
          <p className="hidden text-xs uppercase tracking-[0.22em] text-paper/40 md:block">
            Scroll to explore →
          </p>
        </div>

        {/* Sliding track */}
        <motion.div
          style={{ x }}
          className="flex gap-6 pl-[max(1.5rem,calc((100vw-1400px)/2))] pr-[12vw]"
        >
          {services.map((s, i) => {
            const Icon = iconByService[s.id];
            return (
              <article
                key={s.id}
                className="group relative flex min-h-[62vh] w-[min(88vw,520px)] shrink-0 flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.015] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold-soft/40"
              >
                {/* Oversized index watermark — clipped to the card only */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <span className="absolute -right-2 -top-8 font-[var(--font-display)] text-[9rem] leading-none text-white/[0.06]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>

                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crimson/90 text-paper">
                    {Icon ? <Icon /> : null}
                  </span>
                  <h3 className="mt-6 font-[var(--font-display)] text-[clamp(1.55rem,2.2vw,2.1rem)] leading-tight text-paper">
                    {s.title}
                  </h3>
                  <p className="mt-3.5 text-[0.86rem] leading-relaxed text-paper/65">
                    {s.summary}
                  </p>
                </div>

                <ul className="relative mt-auto grid grid-cols-2 gap-x-6 gap-y-2 pt-6">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2.5 border-t border-white/10 pt-2 text-[0.8rem] leading-tight text-paper/85"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-gold-soft" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </motion.div>

        {/* Progress bar */}
        <div className="mx-auto mt-8 w-full max-w-[1400px] px-[var(--spacing-gutter)]">
          <div className="h-px w-full bg-white/10">
            <motion.div style={{ width: progress }} className="h-px bg-gold-soft" />
          </div>
        </div>
      </div>
    </section>
  );
}
