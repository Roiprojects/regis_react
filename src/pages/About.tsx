import Link from "@/components/AppLink";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import Botanical from "@/components/Botanical";
import {
  IconRoots,
  IconMagnifier,
  IconShoot,
  IconBranch,
  IconStone,
} from "@/components/TerraIcons";
import { brand, about } from "@/lib/content";

// One emblem per reason (pentagon cards).
const REASON_ICONS = [IconRoots, IconMagnifier, IconShoot, IconBranch, IconStone];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={about.title}
        intro={about.paragraphs[0]}
        accent="lilac.png"
      />

      {/* Statement */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div>
              <p className="font-[var(--font-display)] text-2xl italic text-crimson-deep">
                {brand.tagline}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted">
                Affiliate of {brand.parent}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <p className="display-md text-ink">
                An integrated approach for businesses that want more than legal
                advice.
              </p>
              {about.paragraphs.slice(1).map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why businesses choose us */}
      <section className="relative overflow-hidden bg-paper-3 py-28">
        <Botanical src="green.png" className="right-[4vw] top-10 hidden w-12 sm:block md:w-16" />
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="eyebrow mb-6 text-crimson">Our Difference</p>
            <h2 className="display-lg max-w-[18ch] text-ink">
              {about.whyChooseTitle}
            </h2>
          </Reveal>
          {/* Pentagon funnel — 5 pentagons converging on a central hub (ref) */}
          <div className="mt-20 lg:grid lg:grid-cols-[1fr_auto] lg:items-center">
            <Stagger className="space-y-1.5">
              {about.whyChoose.map((v, i) => {
                const arc = [
                  "lg:translate-x-12",
                  "lg:translate-x-6",
                  "lg:translate-x-0",
                  "lg:translate-x-6",
                  "lg:translate-x-12",
                ][i];
                const Icon = REASON_ICONS[i % REASON_ICONS.length];
                return (
                  <StaggerItem key={v.title}>
                    <div className="flex items-center gap-4 lg:gap-5">
                      {/* description */}
                      <p className="hidden flex-1 text-right text-sm leading-relaxed text-muted lg:block">
                        {v.body}
                      </p>
                      {/* numbered node */}
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crimson font-[var(--font-display)] text-lg text-paper shadow-[0_8px_20px_-8px_rgba(156,26,26,0.7)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {/* connector */}
                      <span className="hidden h-px w-7 shrink-0 bg-crimson/30 lg:block" />
                      {/* pentagon card (icon + title) pointing toward the hub */}
                      <div className={`group w-full shrink-0 lg:w-[300px] ${arc}`}>
                        <div
                          className="flex items-center gap-3 bg-paper-2 py-4 pl-5 pr-12 shadow-[0_12px_30px_-18px_rgba(26,21,18,0.45)] ring-1 ring-line transition-colors duration-500 hover:bg-night"
                          style={{
                            clipPath:
                              "polygon(0 0, 86% 0, 100% 50%, 86% 100%, 0 100%)",
                          }}
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-crimson/40 p-2 text-crimson transition-colors duration-500 group-hover:border-gold-soft group-hover:text-gold-soft">
                            <Icon />
                          </span>
                          <div>
                            <p className="font-[var(--font-display)] text-base leading-tight text-ink transition-colors duration-500 group-hover:text-paper">
                              {v.title}
                            </p>
                            <p className="mt-0.5 text-xs leading-snug text-muted lg:hidden">
                              {v.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            {/* Central hub — dashed ring around a solid node (ref pentagon) */}
            <div className="mt-12 flex justify-center lg:-ml-8 lg:mt-0">
              <div className="flex aspect-square w-[240px] items-center justify-center rounded-full border-2 border-dashed border-crimson/25 p-4">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-night text-center text-paper shadow-[0_24px_60px_-24px_rgba(26,21,18,0.65)]">
                  <div>
                    <p className="font-[var(--font-display)] text-[3.4rem] leading-none text-gold-soft">
                      5
                    </p>
                    <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-paper/70">
                      Reasons clients
                      <br />
                      choose us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation note */}
      <section className="py-28">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="overflow-hidden rounded-sm border border-line bg-paper-2">
              <div className="flex flex-col justify-center p-12 md:p-16">
                <span className="mb-6 h-px w-12 bg-crimson" />
                <p className="max-w-3xl font-[var(--font-display)] text-[clamp(1.5rem,2.6vw,2.2rem)] leading-snug text-ink">
                  A broader advisory ecosystem — corporate expertise and wealth
                  stewardship, together through {brand.parent}.
                </p>
                <Link
                  href="/capital"
                  className="group mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.16em] text-ink transition-colors hover:text-crimson"
                >
                  Explore Regis and Savoy Capital
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
