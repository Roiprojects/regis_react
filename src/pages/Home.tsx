import Link from "@/components/AppLink";
import Hero from "@/components/sections/Hero";
import Lifecycle from "@/components/sections/Lifecycle";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import Marquee from "@/components/motion/Marquee";
import ScrollBg from "@/components/ScrollBg";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import {
  specialisms,
  brand,
  contact,
  servicesIntro,
  services,
} from "@/lib/content";

// scroll-flip background stops
const LINEN = "#e3d3bf";
const EXPERTISE_GREEN = "#1e3326";
const SAGE = "#c5d4c2";
const FOREST = "#223428";

const pe = services.find((s) => s.id === "private-equity")!;

export default function Home() {
  return (
    <>
      <ScrollBg />
      <Hero />

      {/* Marquee band */}
      <section
        data-bg={FOREST}
        className="relative border-y border-forest-soft bg-forest py-7 text-ivory-2"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-forest to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-forest to-transparent" />
        <Marquee speed={46}>
          {specialisms.map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center">
              <span className="px-9 font-[var(--font-display)] text-2xl italic text-ivory-2/85">
                {s}
              </span>
              <span className="text-copper-soft">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* Our Services / Expertise — rich deep green background */}
      <section data-bg={EXPERTISE_GREEN} className="py-32 text-ivory-2">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <p className="eyebrow mb-6 text-copper-soft">
                {servicesIntro.eyebrow}
              </p>
              <h2 className="display-lg text-ivory-2">{servicesIntro.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-lg leading-relaxed text-ivory-2/70 lg:pb-3">
                {servicesIntro.intro}
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <ServicesAccordion linkItems theme="dark" />
          </div>
        </div>
      </section>

      <Lifecycle />

      {/* Private Equity Advisory highlight */}
      <section
        id="private-equity"
        data-bg={SAGE}
        className="relative scroll-mt-24 overflow-hidden py-32"
      >
        <img
          src="/images/succulents/lilac.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-8 left-[5vw] w-14 opacity-90 drop-shadow-[0_16px_24px_rgba(34,52,40,0.22)] md:w-20"
        />
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-6 text-bronze">Private Equity Advisory</p>
            <h2 className="display-lg max-w-[16ch] text-inkg">
              Navigating investments with confidence
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-inkg-soft">
              {pe.summary}
            </p>
            <Link
              href="/services#private-equity"
              className="group mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.16em] text-inkg transition-colors duration-500 hover:text-copper"
            >
              Learn More
              <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-x-8 gap-y-1 self-center border-t border-stone sm:grid-cols-2">
              {pe.items.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-3 border-b border-stone/70 py-4 text-[0.98rem] text-inkg"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Tagline / ecosystem panel */}
      <section
        data-bg={FOREST}
        className="relative overflow-hidden bg-forest py-36 text-ivory-2"
      >
        <div className="relative mx-auto max-w-[1400px] px-[var(--spacing-gutter)] text-center">
          <Reveal>
            <p className="text-antique-gradient font-[var(--font-display)] text-[clamp(2rem,5.5vw,4.6rem)] italic leading-[1.08]">
              A resilient business is a balanced ecosystem.
            </p>
            <p className="mx-auto mt-8 max-w-md text-sm uppercase tracking-[0.24em] text-ivory-2/45">
              An affiliate of {brand.parent}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section data-bg={LINEN} className="py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-10 border-t border-stone pt-16 md:flex-row md:items-end">
              <h2 className="display-lg max-w-[16ch] text-inkg">
                {contact.title}
              </h2>
              <div className="max-w-sm">
                <p className="text-lg leading-relaxed text-inkg-soft">
                  {contact.intro}
                </p>
                <Link href="/contact" className="btn btn-terra group mt-8">
                  {contact.cta}
                  <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
