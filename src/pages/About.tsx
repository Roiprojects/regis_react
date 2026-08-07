import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
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
        swapLayout
      />

      {/* Statement */}
      <section className="py-20 md:py-28">
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
            <div className="space-y-4">
              <p className="display-md text-ink">
                An integrated approach for businesses that want more than legal
                advice.
              </p>
              {about.paragraphs.slice(1).map((p) => (
                <p key={p.slice(0, 24)} className="text-[0.93rem] leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Difference */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "#f7ecdf" }}
      >
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <PentagonFunnel />
          </Reveal>
        </div>
      </section>
    </>
  );
}
