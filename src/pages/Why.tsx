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
              <span className="mt-4 block w-full max-w-none font-[var(--font-display)] text-[clamp(1.1rem,1.7vw,1.45rem)] font-medium italic tracking-wide text-copper-dark sm:whitespace-nowrap">
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

      {/* The Succulent — brand symbol */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: "#efe4d2" }}>
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Text */}
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-3 text-copper-dark">
                <span className="h-px w-12 bg-copper" />
                Our Symbol
              </p>
              <h2
                className="font-[var(--font-display)] text-inkg"
                style={{ fontSize: "clamp(1.7rem, 4vw, 3.6rem)", lineHeight: 1.08 }}
              >
                The Succulent
              </h2>
              <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-inkg-soft">
                Distinctive in form and remarkably resilient by nature, succulents are designed
                to thrive with minimal intervention. Their ability to store and conserve water
                allows them to sustain themselves, while their unique forms and colours bring
                character and beauty to the environment around them.
              </p>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-inkg-soft">
                Rooted in resilience and designed for sustainable growth, the succulent reflects
                our belief that the right structure can thrive independently while strengthening
                the ecosystem around it.
              </p>
            </Reveal>

            {/* Clipart collage — Option 2: Natural Asymmetrical Cluster */}
            <Reveal delay={0.18}>
              <div className="mx-auto flex items-end justify-center">

                {/* Left olive branch — tip visible on far left, hidden end tucks behind succulents */}
                <svg className="-mr-14 shrink-0 pb-2" width="190" height="130" viewBox="0 0 190 130" fill="none">
                  {/* stem: right (hidden) → left (visible tip), drooping downward */}
                  <path d="M188 42 C165 48 138 58 108 72 C82 84 54 96 20 108 C13 111 6 112 2 110"
                    stroke="#7e9840" strokeWidth="2.2" strokeLinecap="round"/>
                  {/* leaves — alternating above / below stem, more elongated like olive */}
                  <ellipse cx="180" cy="34" rx="15" ry="4.5" fill="#8faa48" transform="rotate(-38 180 34)"/>
                  <ellipse cx="174" cy="52" rx="14" ry="4"   fill="#72893a" transform="rotate(12 174 52)"/>
                  <ellipse cx="162" cy="38" rx="15" ry="4.5" fill="#8faa48" transform="rotate(-30 162 38)"/>
                  <ellipse cx="156" cy="57" rx="14" ry="4"   fill="#72893a" transform="rotate(20 156 57)"/>
                  <ellipse cx="140" cy="46" rx="14" ry="4.5" fill="#8faa48" transform="rotate(-22 140 46)"/>
                  <ellipse cx="134" cy="64" rx="13" ry="4"   fill="#72893a" transform="rotate(26 134 64)"/>
                  <ellipse cx="116" cy="56" rx="14" ry="4"   fill="#8faa48" transform="rotate(-16 116 56)"/>
                  <ellipse cx="110" cy="75" rx="13" ry="4"   fill="#72893a" transform="rotate(30 110 75)"/>
                  <ellipse cx="90"  cy="68" rx="13" ry="4"   fill="#8faa48" transform="rotate(-10 90 68)"/>
                  <ellipse cx="84"  cy="86" rx="12" ry="3.5" fill="#72893a" transform="rotate(36 84 86)"/>
                  <ellipse cx="65"  cy="78" rx="12" ry="3.5" fill="#8faa48" transform="rotate(-5 65 78)"/>
                  <ellipse cx="59"  cy="96" rx="11" ry="3.5" fill="#72893a" transform="rotate(40 59 96)"/>
                  <ellipse cx="38"  cy="90" rx="11" ry="3.5" fill="#8faa48" transform="rotate(0 38 90)"/>
                  <ellipse cx="32"  cy="107" rx="10" ry="3"  fill="#72893a" transform="rotate(44 32 107)"/>
                  <ellipse cx="14"  cy="100" rx="10" ry="3"  fill="#8faa48" transform="rotate(6 14 100)"/>
                </svg>

                {/* 4 succulents — all w-24, slightly overlapping */}
                <img src="/images/succulents/green.png" aria-hidden
                  className="relative z-10 w-24 shrink-0 -mr-3 drop-shadow-[0_8px_20px_rgba(60,40,10,0.2)]"
                  style={{ transform: "rotate(-4deg) translateY(-10px)" }} />
                <img src="/images/succulents/lilac.png" aria-hidden
                  className="relative z-20 w-24 shrink-0 drop-shadow-[0_10px_24px_rgba(60,40,10,0.22)]"
                  style={{ transform: "rotate(3deg) translateY(-4px)" }} />
                <img src="/images/succulents/multi.png" aria-hidden
                  className="relative z-10 w-24 shrink-0 -ml-2 drop-shadow-[0_8px_20px_rgba(60,40,10,0.18)]"
                  style={{ transform: "rotate(-3deg) translateY(-7px)" }} />
                <img src="/images/succulents/redgreen.png" aria-hidden
                  className="relative z-10 w-24 shrink-0 -ml-2 drop-shadow-[0_8px_20px_rgba(60,40,10,0.18)]"
                  style={{ transform: "rotate(5deg) translateY(-2px)" }} />

                {/* Right olive branch — mirror of left */}
                <svg className="-ml-14 shrink-0 pb-2" width="190" height="130" viewBox="0 0 190 130" fill="none"
                  style={{ transform: "scaleX(-1)" }}>
                  <path d="M188 42 C165 48 138 58 108 72 C82 84 54 96 20 108 C13 111 6 112 2 110"
                    stroke="#7e9840" strokeWidth="2.2" strokeLinecap="round"/>
                  <ellipse cx="180" cy="34" rx="15" ry="4.5" fill="#8faa48" transform="rotate(-38 180 34)"/>
                  <ellipse cx="174" cy="52" rx="14" ry="4"   fill="#72893a" transform="rotate(12 174 52)"/>
                  <ellipse cx="162" cy="38" rx="15" ry="4.5" fill="#8faa48" transform="rotate(-30 162 38)"/>
                  <ellipse cx="156" cy="57" rx="14" ry="4"   fill="#72893a" transform="rotate(20 156 57)"/>
                  <ellipse cx="140" cy="46" rx="14" ry="4.5" fill="#8faa48" transform="rotate(-22 140 46)"/>
                  <ellipse cx="134" cy="64" rx="13" ry="4"   fill="#72893a" transform="rotate(26 134 64)"/>
                  <ellipse cx="116" cy="56" rx="14" ry="4"   fill="#8faa48" transform="rotate(-16 116 56)"/>
                  <ellipse cx="110" cy="75" rx="13" ry="4"   fill="#72893a" transform="rotate(30 110 75)"/>
                  <ellipse cx="90"  cy="68" rx="13" ry="4"   fill="#8faa48" transform="rotate(-10 90 68)"/>
                  <ellipse cx="84"  cy="86" rx="12" ry="3.5" fill="#72893a" transform="rotate(36 84 86)"/>
                  <ellipse cx="65"  cy="78" rx="12" ry="3.5" fill="#8faa48" transform="rotate(-5 65 78)"/>
                  <ellipse cx="59"  cy="96" rx="11" ry="3.5" fill="#72893a" transform="rotate(40 59 96)"/>
                  <ellipse cx="38"  cy="90" rx="11" ry="3.5" fill="#8faa48" transform="rotate(0 38 90)"/>
                  <ellipse cx="32"  cy="107" rx="10" ry="3"  fill="#72893a" transform="rotate(44 32 107)"/>
                  <ellipse cx="14"  cy="100" rx="10" ry="3"  fill="#8faa48" transform="rotate(6 14 100)"/>
                </svg>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* What sets us apart — compact high-end 3x2 grid */}
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
                      <div className="flex items-center">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-copper/40 bg-ivory-2 p-2.5 text-copper shadow-[0_3px_10px_rgba(80,60,30,0.08)] transition-colors duration-500 group-hover:border-copper group-hover:text-copper-dark">
                          <Icon />
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
