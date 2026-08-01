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

// Right-margin per row builds the convex-left arc (middle sticks out, ends sit
// closest to the hub) — the connector line flex-grows to always reach.
const ARC = [0, 34, 58, 34, 0];

const PENTAGON =
  "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)";

export default function PentagonFunnel() {
  return (
    <div className="mt-16">
      {/* ── Desktop funnel ─────────────────────────────────────────── */}
      <div className="hidden items-center gap-2 lg:flex">
        <div className="flex-1">
          {about.whyChoose.map((v, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="flex h-[86px] items-center"
              >
                {/* description */}
                <p className="w-[27%] shrink-0 pr-1 text-right text-[0.82rem] leading-relaxed text-muted">
                  {v.body}
                </p>
                {/* numbered node */}
                <span className="relative z-10 mx-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crimson font-[var(--font-display)] text-lg text-paper shadow-[0_10px_22px_-8px_rgba(156,26,26,0.75)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* connector — grows to meet the pentagon */}
                <span className="h-px flex-1 bg-gradient-to-r from-crimson/40 to-crimson/15" />
                {/* pentagon */}
                <div
                  className="group relative w-[310px] shrink-0"
                  style={{ marginRight: ARC[i] }}
                >
                  <div
                    className="flex items-center gap-3.5 bg-gradient-to-r from-paper-2 to-paper py-4 pl-5 pr-11 shadow-[0_16px_34px_-20px_rgba(26,21,18,0.5)] ring-1 ring-line transition-all duration-500 group-hover:from-night group-hover:to-night"
                    style={{ clipPath: PENTAGON }}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper p-2.5 text-crimson shadow-sm ring-1 ring-line transition-colors duration-500 group-hover:text-crimson">
                      <Icon />
                    </span>
                    <p className="font-[var(--font-display)] text-[1.05rem] leading-tight text-ink transition-colors duration-500 group-hover:text-paper">
                      {v.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Central hub ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
          className="relative -ml-6 flex aspect-square w-[248px] shrink-0 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full border-2 border-dashed border-crimson/25" />
          <span className="absolute inset-[14px] rounded-full border border-crimson/15" />
          <span className="absolute inset-[26px] flex items-center justify-center rounded-full bg-night text-center shadow-[0_30px_60px_-24px_rgba(26,21,18,0.7)]">
            <span className="font-[var(--font-display)] text-[1.75rem] leading-tight text-gold-soft">
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
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex gap-4 rounded-sm border border-line bg-paper-2 p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crimson p-2.5 text-paper">
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
