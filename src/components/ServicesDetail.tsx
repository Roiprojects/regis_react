
import { services } from "@/lib/content";
import { iconByService } from "@/components/TerraIcons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

// Look up a description for a sub-service item from the service's details.
function descFor(
  item: string,
  details?: { name: string; desc: string }[],
): string | undefined {
  if (!details) return undefined;
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z]/g, "");
  const ni = norm(item);
  const d = details.find(
    (x) => norm(x.name) === ni || ni.includes(norm(x.name)) || norm(x.name).includes(ni),
  );
  return d?.desc;
}

// Full, always-visible services showcase — every service and every sub-service.
export default function ServicesDetail() {
  return (
    <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
      {services.map((s, i) => {
        const Icon = iconByService[s.id];
        return (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-28 border-t border-line py-16 first:border-t-0 lg:py-20"
          >
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              {/* Left — service header */}
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <div className="flex items-center gap-4">
                    <span className="font-[var(--font-display)] text-2xl text-crimson">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-8 w-8 text-crimson/80">
                      {Icon ? <Icon /> : null}
                    </span>
                  </div>
                  <h2 className="mt-5 font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                    {s.summary}
                  </p>
                </div>
              </Reveal>

              {/* Right — every sub-service with its description */}
              <Stagger className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
                {s.items.map((it) => {
                  const desc = descFor(it, s.details);
                  return (
                    <StaggerItem key={it}>
                      <div className="group h-full bg-paper-2 p-7 transition-colors duration-500 hover:bg-night">
                        <span className="mb-4 block h-1.5 w-6 rounded-full bg-crimson transition-colors group-hover:bg-gold-soft" />
                        <p className="font-[var(--font-display)] text-xl leading-snug text-ink transition-colors duration-500 group-hover:text-paper">
                          {it}
                        </p>
                        {desc ? (
                          <p className="mt-2.5 text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-white/65">
                            {desc}
                          </p>
                        ) : null}
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </section>
        );
      })}
    </div>
  );
}
