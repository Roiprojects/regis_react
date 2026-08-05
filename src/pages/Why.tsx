import { Reveal, RevealWords } from "@/components/motion/Reveal";
import Botanical from "@/components/Botanical";
import WhyTerrariumDiagram from "@/components/WhyTerrariumDiagram";
import {
  IconRoots,
  IconMagnifier,
  IconShoot,
  IconBranch,
  IconStone,
} from "@/components/TerraIcons";
import { whyTerrarium } from "@/lib/content";

// One monoline emblem per "What Sets Us Apart" point.
const SETS_ICONS = [IconRoots, IconMagnifier, IconShoot, IconBranch, IconStone];

export default function WhyPage() {
  return (
    <main className="bg-ivory text-inkg">
      {/* Hero — the framework */}
      <section className="relative bg-gradient-to-b from-[#e6d8c1] via-[#efe4d2] to-[#efe4ce] pb-24 pt-36 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_52%_at_74%_30%,rgba(255,251,244,0.75),transparent_62%)]" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow mb-8 flex items-center gap-3 text-copper-dark">
                <span className="h-px w-12 bg-copper" />
                {whyTerrarium.eyebrow}
              </p>
            </Reveal>
            <h1 className="display-xl text-inkg">
              <span className="block text-[clamp(1.7rem,4vw,3.6rem)] leading-[1.08]">
                <RevealWords text="The Terrarium Framework" delay={0.15} />
              </span>
              <span className="mt-3 block w-full max-w-none text-[clamp(0.95rem,1.45vw,1.3rem)] font-normal leading-snug text-copper sm:whitespace-nowrap">
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

          <div className="w-full">
            <WhyTerrariumDiagram />
          </div>
        </div>
      </section>

      {/* What sets us apart — compact high-end grid */}
      <section className="relative overflow-hidden bg-ivory py-16 md:py-20">
        <Botanical src="green.png" className="right-[5vw] top-20 hidden w-12 sm:block md:w-16" />
        <div className="mx-auto max-w-[1240px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="mx-auto max-w-[40ch] text-center">
              <p className="eyebrow text-copper">The Ecosystem</p>
              <h2
                className="mt-4 display-lg leading-tight text-inkg"
                style={{ fontSize: "clamp(1.7rem, 4vw, 3.6rem)" }}
              >
                {whyTerrarium.setsApartTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyTerrarium.setsApart.map((item, i) => {
              const Icon = SETS_ICONS[i % SETS_ICONS.length];
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="group flex h-full flex-col justify-between rounded-xl border border-stone/70 bg-[#efe4ce]/70 p-6 sm:p-7 shadow-[0_4px_16px_rgba(80,50,20,0.06)] transition-all duration-500 hover:border-copper/40 hover:bg-[#efe4ce] hover:shadow-[0_10px_28px_rgba(80,50,20,0.12)]">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-copper/40 bg-ivory-2 p-2.5 text-copper shadow-[0_3px_10px_rgba(80,60,30,0.08)] transition-colors duration-500 group-hover:border-copper group-hover:text-copper-dark">
                          <Icon />
                        </span>
                        <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-copper/70">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 font-[var(--font-display)] text-xl font-medium leading-snug text-inkg transition-colors group-hover:text-copper-dark">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[0.92rem] leading-relaxed text-inkg-soft">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
