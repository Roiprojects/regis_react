import Link from "@/components/AppLink";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import Botanical from "@/components/Botanical";
import { brand, about } from "@/lib/content";

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
          {/* Pentagon funnel — structure adapted from a 5-step pentagon diagram */}
          <div className="mt-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <Stagger className="space-y-3.5">
              {about.whyChoose.map((v, i) => {
                const arc = [
                  "lg:translate-x-0",
                  "lg:translate-x-5",
                  "lg:translate-x-10",
                  "lg:translate-x-5",
                  "lg:translate-x-0",
                ][i];
                return (
                  <StaggerItem key={v.title}>
                    <div className="flex items-center gap-4 lg:gap-5">
                      {/* description */}
                      <p className="hidden w-[30%] shrink-0 text-right text-sm leading-relaxed text-muted lg:block">
                        {v.body}
                      </p>
                      {/* numbered node */}
                      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crimson text-sm font-semibold text-paper shadow-[0_6px_16px_-6px_rgba(156,26,26,0.6)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {/* connector */}
                      <span className="hidden h-px w-6 shrink-0 bg-line lg:block" />
                      {/* pentagon card pointing toward the hub */}
                      <div className={`group flex-1 lg:max-w-[320px] ${arc}`}>
                        <div
                          className="bg-paper-2 py-4 pl-6 pr-10 shadow-sm ring-1 ring-line transition-colors duration-500 hover:bg-night"
                          style={{
                            clipPath:
                              "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
                          }}
                        >
                          <p className="font-[var(--font-display)] text-lg leading-snug text-ink transition-colors duration-500 group-hover:text-paper">
                            {v.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted lg:hidden">
                            {v.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            {/* Central hub */}
            <div className="mt-12 flex justify-center lg:mt-0">
              <div className="relative flex aspect-square w-[200px] items-center justify-center rounded-full bg-night text-center text-paper ring-8 ring-crimson/10">
                <div>
                  <p className="font-[var(--font-display)] text-5xl leading-none text-gold-soft">
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
