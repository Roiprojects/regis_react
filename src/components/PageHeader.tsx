import { RevealWords } from "@/components/motion/Reveal";
import Botanical from "@/components/Botanical";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  accent = "green.png",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  accent?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40">
      {/* botanical accent sits in the top padding, above the copy */}
      <Botanical
        src={accent}
        className="right-[6vw] top-52 hidden w-14 sm:block md:w-20"
      />
      <div className="relative mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
        <p className="eyebrow mb-8 flex items-center gap-3 text-crimson">
          <span className="h-px w-10 bg-crimson" />
          {eyebrow}
        </p>
        <h1 className="max-w-[22ch] font-[var(--font-display)] text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] text-ink">
          <RevealWords text={title} delay={0.1} />
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
