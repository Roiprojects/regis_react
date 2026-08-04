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
              <span className="mt-3 block max-w-[22ch] text-[clamp(1.05rem,1.8vw,1.4rem)] font-normal leading-snug text-copper">
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

      {/* What sets us apart — elegant editorial list */}
      <section className="relative overflow-hidden bg-ivory py-28">
        <Botanical src="green.png" className="right-[5vw] top-40 hidden w-12 sm:block md:w-16" />
        <div className="mx-auto max-w-[1080px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="mx-auto max-w-[40ch] text-center">
              <p className="eyebrow text-copper">The Ecosystem</p>
              <h2
                className="mt-5 display-lg leading-tight text-inkg"
                style={{ fontSize: "clamp(1.7rem, 4vw, 3.6rem)" }}
              >
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


        </div>
      </section>
    </main>
  );
}
