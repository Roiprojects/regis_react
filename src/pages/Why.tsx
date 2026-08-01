import { motion } from "framer-motion";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import Botanical from "@/components/Botanical";
import TerrariumKeywords from "@/components/TerrariumKeywords";
import {
  IconRoots,
  IconMagnifier,
  IconShoot,
  IconBranch,
  IconStone,
} from "@/components/TerraIcons";
import { whyTerrarium } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

// One monoline emblem per "What Sets Us Apart" point (replaces the numbers).
const SETS_ICONS = [IconRoots, IconMagnifier, IconShoot, IconBranch, IconStone];

export default function WhyPage() {
  return (
    <main className="bg-ivory text-inkg">
      {/* Hero — the framework */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e6d8c1] via-[#efe4d2] to-[#f5efe4] pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_52%_at_74%_30%,rgba(255,251,244,0.75),transparent_62%)]" />
        <div className="relative mx-auto grid max-w-[1360px] items-center gap-10 px-[var(--spacing-gutter)] lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Reveal>
              <p className="eyebrow mb-8 flex items-center gap-3 text-copper-dark">
                <span className="h-px w-12 bg-copper" />
                {whyTerrarium.eyebrow}
              </p>
            </Reveal>
            <h1 className="font-[var(--font-display)] text-inkg">
              <span className="block text-[clamp(1.9rem,3.8vw,3.1rem)] leading-[1.06]">
                <RevealWords text="The Terrarium Framework" delay={0.15} />
              </span>
              <span className="mt-3 block max-w-[22ch] text-[clamp(1.05rem,1.8vw,1.4rem)] font-normal italic leading-snug text-copper">
                <RevealWords
                  text="An Integrated Approach to Corporate Advisory"
                  delay={0.4}
                />
              </span>
            </h1>
            <Reveal delay={0.25}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-inkg-soft">
                {whyTerrarium.intro}
              </p>
            </Reveal>
          </div>

          <div className="mx-auto flex w-full max-w-[800px] items-center justify-center gap-0">
            {/* Terrarium image — big, on the left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 1, ease: EASE }}
              className="relative min-w-0 max-w-[560px] flex-1"
            >
              <img
                src="/images/terrarium-element.png"
                alt="A curated glass terrarium — the Regis and Savoy corporate ecosystem"
                className="block w-full object-contain drop-shadow-[0_36px_60px_rgba(80,60,30,0.30)]"
              />
            </motion.div>

            {/* Keyword annotations — same design as the homepage hero */}
            <TerrariumKeywords trigger="view" />
          </div>
        </div>
      </section>

      {/* What sets us apart — elegant editorial list */}
      <section className="relative overflow-hidden bg-ivory py-28">
        <Botanical src="green.png" className="right-[5vw] top-16 hidden w-12 sm:block md:w-16" />
        <div className="mx-auto max-w-[1080px] px-[var(--spacing-gutter)]">
          <Reveal>
              <div className="mx-auto max-w-[40ch] text-center">
                <p className="eyebrow text-copper">The Ecosystem</p>
              <h2 className="mt-5 font-[var(--font-display)] text-[clamp(1.9rem,3.6vw,2.9rem)] leading-tight text-inkg">
                {whyTerrarium.setsApartTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 border-t border-stone">
            {whyTerrarium.setsApart.map((item, i) => {
              const Icon = SETS_ICONS[i % SETS_ICONS.length];
              return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3 border-b border-stone py-9 transition-colors duration-500 md:grid-cols-[5rem_0.9fr_1.1fr] md:gap-x-10 md:py-11">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-full border border-copper/40 bg-ivory-2 p-3 text-copper shadow-[0_3px_12px_rgba(80,60,30,0.10)] transition-colors duration-500 group-hover:border-copper group-hover:text-copper-dark md:h-14 md:w-14">
                    <Icon />
                  </span>
                  <h3 className="self-center font-[var(--font-display)] text-2xl leading-snug text-inkg md:text-[1.7rem]">
                    {item.title}
                  </h3>
                  <p className="col-span-2 max-w-xl text-[0.98rem] leading-relaxed text-inkg-soft md:col-span-1 md:self-center md:pl-6">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
              );
            })}
          </div>

          {/* Elegant close */}
          <Reveal delay={0.1}>
            <p className="mt-20 text-center font-[var(--font-display)] text-[clamp(1.4rem,2.8vw,2.1rem)] italic leading-snug text-copper-dark">
              A resilient business is a balanced ecosystem.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
