import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/content";
import { iconByService } from "@/components/TerraIcons";

// Merge the full item list with any matching detail descriptions, so every
// sub-service is shown (with a description where the content provides one).
function itemsWithDesc(s: (typeof services)[number]) {
  const descByName = Object.fromEntries(
    (s.details ?? []).map((d) => [d.name, d.desc]),
  );
  return s.items.map((name) => ({ name, desc: descByName[name] ?? "" }));
}

export default function ServicesShowcase() {
  const [active, setActive] = useState(services[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goTo = (id: string) =>
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.32fr_1fr]">
        {/* Sticky index rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="eyebrow mb-6 text-crimson">Practices</p>
            <ul className="border-l border-line">
              {services.map((s, i) => {
                const on = active === s.id;
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => goTo(s.id)}
                      className={`group -ml-px flex w-full items-center gap-3 border-l-2 py-3 pl-4 text-left transition-colors duration-300 ${
                        on
                          ? "border-crimson text-ink"
                          : "border-transparent text-muted hover:text-ink"
                      }`}
                    >
                      <span
                        className={`font-[var(--font-display)] text-sm tabular-nums transition-colors ${
                          on ? "text-crimson" : "text-muted"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-[0.82rem] leading-snug">
                        {s.title}
                      </span>
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[0.6rem] font-medium tabular-nums transition-colors ${
                          on
                            ? "border-crimson/40 text-crimson"
                            : "border-line text-muted/70"
                        }`}
                      >
                        {s.items.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Category sections */}
        <div>
          {services.map((s, i) => {
            const Icon = iconByService[s.id];
            const list = itemsWithDesc(s);
            return (
              <section
                key={s.id}
                id={s.id}
                ref={(el) => {
                  refs.current[s.id] = el;
                }}
                className="scroll-mt-28 border-t border-line py-14 first:border-t-0 first:pt-0"
              >
                <div className="flex items-start gap-5">
                  {Icon ? (
                    <span className="mt-1 hidden h-10 w-10 shrink-0 text-crimson sm:block">
                      <Icon />
                    </span>
                  ) : null}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4">
                      <span className="font-[var(--font-display)] text-xl text-crimson tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="display-md text-ink">{s.title}</h2>
                    </div>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
                      {s.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-9 grid gap-x-14 border-t border-line sm:grid-cols-2">
                  {list.map((d) => (
                    <div
                      key={d.name}
                      className="group border-b border-line py-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper transition-transform duration-300 group-hover:scale-[1.8]" />
                        <p className="font-[var(--font-display)] text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-crimson">
                          {d.name}
                        </p>
                      </div>
                      {d.desc ? (
                        <p className="mt-2 pl-[1.1rem] text-sm leading-relaxed text-muted">
                          {d.desc}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
