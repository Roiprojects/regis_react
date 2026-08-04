import Link from "@/components/AppLink";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import Botanical from "@/components/Botanical";
import PentagonFunnel from "@/components/PentagonFunnel";
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
        <Botanical src="green.png" className="right-[5vw] top-44 hidden w-12 sm:block md:w-16" />
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <PentagonFunnel />
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
