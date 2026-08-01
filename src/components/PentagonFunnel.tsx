import { motion } from "framer-motion";
import { about } from "@/lib/content";
import {
  IconRoots,
  IconMagnifier,
  IconShoot,
  IconBranch,
  IconStone,
} from "@/components/TerraIcons";

const EASE = [0.16, 1, 0.3, 1] as const;
const ICONS = [IconRoots, IconMagnifier, IconShoot, IconBranch, IconStone];

// Warm, on-brand tones (crimson → gold family) — one per step, so the pentagons
// read as distinct like the reference without borrowing its colours.
const TONE = ["#8f1717", "#a5432a", "#b06a34", "#b58a3f", "#8d6a2f"];

// Right-margin per row builds the convex-left arc (middle sticks out, ends sit
// nearest the hub); the connector line flex-grows so it always reaches.
const ARC = [0, 34, 58, 34, 0];

// A clear right-pointing pentagon (flat back, pointed front).
const PENTAGON =
  "polygon(0 0, calc(100% - 46px) 0, 100% 50%, calc(100% - 46px) 100%, 0 100%)";

export default function PentagonFunnel() {
  return (
    <div className="mt-16">
      {/* ── Desktop funnel ─────────────────────────────────────────── */}
      <div className="hidden items-center gap-2 lg:flex">
        <div className="flex-1">
          {about.whyChoose.map((v, i) => {
            const Icon = ICONS[i % ICONS.length];
            const tone = TONE[i % TONE.length];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="flex h-[90px] items-center"
              >
                {/* description */}
                <p className="w-[27%] shrink-0 pr-1 text-right text-[0.82rem] leading-relaxed text-muted">
                  {v.body}
                </p>
                {/* numbered node */}
                <span
                  className="relative z-10 mx-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-[var(--font-display)] text-lg text-paper shadow-[0_10px_22px_-8px_rgba(26,21,18,0.6)]"
                  style={{ backgroundColor: tone }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* connector — grows to meet the pentagon */}
                <span
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(to right, ${tone}, ${tone}44)`,
                  }}
                />
                {/* pentagon */}
                <div
                  className="group relative w-[320px] shrink-0"
                  style={{ marginRight: ARC[i] }}
                >
                  <div
                    className="flex items-center gap-3.5 py-4 pl-4 pr-14 text-paper shadow-[0_16px_34px_-18px_rgba(26,21,18,0.55)] transition-transform duration-500 group-hover:-translate-y-0.5"
                    style={{ clipPath: PENTAGON, backgroundColor: tone }}
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper p-2.5"
                      style={{ color: tone }}
                    >
                      <Icon />
                    </span>
                    <p className="font-[var(--font-display)] text-[1.05rem] font-medium leading-tight text-paper">
                      {v.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Central hub — dashed ring + segmented colour ring + core ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
          className="relative -ml-8 flex aspect-square w-[262px] shrink-0 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full border-2 border-dashed border-crimson/25" />
          <span
            className="absolute inset-[14px] rounded-full"
            style={{
              background: `conic-gradient(${TONE[0]} 0deg 72deg, ${TONE[1]} 72deg 144deg, ${TONE[2]} 144deg 216deg, ${TONE[3]} 216deg 288deg, ${TONE[4]} 288deg 360deg)`,
              WebkitMask:
                "radial-gradient(closest-side, transparent 72%, #000 73%)",
              mask: "radial-gradient(closest-side, transparent 72%, #000 73%)",
            }}
          />
          <span className="absolute inset-[38px] flex items-center justify-center rounded-full bg-night text-center shadow-[0_26px_54px_-22px_rgba(26,21,18,0.7)]">
            <span className="font-[var(--font-display)] text-[1.7rem] leading-tight text-gold-soft">
              Corporate
              <br />
              Services
            </span>
          </span>
        </motion.div>
      </div>

      {/* ── Mobile list ────────────────────────────────────────────── */}
      <div className="space-y-4 lg:hidden">
        {about.whyChoose.map((v, i) => {
          const Icon = ICONS[i % ICONS.length];
          const tone = TONE[i % TONE.length];
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex gap-4 rounded-sm border border-line bg-paper-2 p-5"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-2.5 text-paper"
                style={{ backgroundColor: tone }}
              >
                <Icon />
              </span>
              <div>
                <p className="font-[var(--font-display)] text-lg leading-tight text-ink">
                  {v.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
