import { RevealWords } from "@/components/motion/Reveal";
import Botanical from "@/components/Botanical";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  accent = "green.png",
  swapLayout = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  accent?: string;
  swapLayout?: boolean;
}) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden pb-24 pt-40">
      {/* botanical accent */}
      <Botanical
        src={accent}
        className={
          swapLayout
            ? "left-[4vw] sm:left-[6vw] top-24 hidden w-14 sm:block md:w-20"
            : "right-[6vw] top-52 hidden w-14 sm:block md:w-20"
        }
      />
      <div className="relative mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
        <div className={swapLayout ? "md:ml-auto md:max-w-[800px] text-right" : ""}>
          <p
            className={`eyebrow mb-8 flex items-center gap-3 text-crimson ${
              swapLayout ? "justify-end flex-row-reverse" : ""
            }`}
          >
            <span className="h-px w-10 bg-crimson" />
            {eyebrow}
          </p>
          <h1
            className={`display-xl max-w-[22ch] text-ink ${
              swapLayout ? "ml-auto text-right" : ""
            }`}
            style={{ fontSize: "clamp(1.7rem, 4vw, 3.6rem)", lineHeight: 1.08 }}
          >
            <RevealWords text={title} delay={0.1} />
          </h1>
          {intro && (
            <p
              className={`mt-8 max-w-2xl text-base leading-relaxed text-ink-soft ${
                swapLayout ? "ml-auto text-right" : ""
              }`}
            >
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
