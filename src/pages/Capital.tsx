import Link from "@/components/AppLink";
import { Reveal, RevealWords, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import { capital } from "@/lib/content";

// Local navy + beige + gold palette — scoped to this page only.
const NAVY = "#14213d";
const BEIGE = "#f4ecdb";
const GOLD = "#bf9b4e";

export default function CapitalPage() {
  return (
    <main style={{ backgroundColor: BEIGE }} className="capital-page text-[#14213d]">
      {/* Hero — navy band sets the theme immediately */}
      <section
        style={{ backgroundColor: NAVY }}
        className="relative overflow-hidden pb-24 pt-40 text-[#f4ecdb]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_80%_20%,rgba(191,155,78,0.16),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <p className="eyebrow mb-8 flex items-center gap-3 text-[#d8bd7e]">
            <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
            {capital.eyebrow}
          </p>
          <h1
            className="display-xl font-[var(--font-display)] max-w-[22ch] text-[#f4ecdb]"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.12 }}
          >
            <RevealWords text={capital.title} delay={0.1} className="font-[var(--font-display)]" />
          </h1>
          <div className="mt-10 grid max-w-4xl gap-6 lg:grid-cols-2">
            <p className="text-lg leading-relaxed text-[#f4ecdb]/75">{capital.intro[0]}</p>
            <p className="text-lg leading-relaxed text-[#f4ecdb]/75">{capital.intro[1]}</p>
          </div>
        </div>
      </section>

      {/* About + belief */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[0.9fr_1.3fr]">
          <Reveal>
            <div>
              <p className="eyebrow mb-6 text-[#bf9b4e]">{capital.aboutTitle}</p>
              <p className="font-[var(--font-display)] text-[clamp(1.6rem,2.8vw,2.3rem)] leading-snug text-[#14213d]">
                &ldquo;{capital.belief}&rdquo;
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              {capital.aboutBody.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-[#14213d]/80">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* At a glance — navy band */}
      <section style={{ backgroundColor: NAVY }} className="py-24 text-[#f4ecdb]">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="eyebrow mb-10 text-[#d8bd7e]">At a Glance</p>
          </Reveal>
          <Stagger className="grid gap-px overflow-hidden rounded-sm border border-[#d8bd7e]/20 bg-[#d8bd7e]/20 sm:grid-cols-2 lg:grid-cols-4">
            {capital.glance.map((g) => (
              <StaggerItem key={g}>
                <div className="flex h-full items-center bg-[#14213d] p-8 text-lg font-[var(--font-display)] leading-snug text-[#f4ecdb] transition-colors duration-500 hover:bg-[#f4ecdb] hover:text-[#14213d]">
                  {g}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Capital services */}
      <section id="capital-services" className="py-24">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <p className="eyebrow mb-6 text-[#bf9b4e]">Capital Services</p>
            <h2 className="display-lg max-w-[18ch] text-[#14213d]">
              Preserving, growing and transitioning wealth
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-sm border border-[#14213d]/15 bg-[#14213d]/15 sm:grid-cols-2">
            {capital.services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group h-full bg-[#efe4ce] p-9 transition-colors duration-500 hover:bg-[#14213d]">
                  <span className="mb-5 block h-1.5 w-6 rounded-full bg-[#bf9b4e]" />
                  <h3 className="font-[var(--font-display)] text-2xl leading-snug text-[#14213d] transition-colors duration-500 group-hover:text-[#d8bd7e]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#14213d]/80 transition-colors duration-500 group-hover:text-[#f4ecdb]/80">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Complementary relationship */}
      <section className="pb-8">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[0.9fr_1.3fr]">
          <Reveal>
            <h2 className="display-md text-[#14213d]">{capital.complementaryTitle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-[#14213d]/80">
              {capital.complementaryBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Broader advisory ecosystem */}
      <section className="py-10">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="rounded-sm p-12 md:p-16" style={{ backgroundColor: NAVY }}>
              <span className="mb-6 block h-px w-12" style={{ backgroundColor: GOLD }} />
              <p className="max-w-3xl font-[var(--font-display)] text-[clamp(1.5rem,2.6vw,2.2rem)] leading-snug text-white">
                A broader advisory ecosystem — corporate expertise and wealth
                stewardship, together through Regis and Savoy Capital.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.16em] transition-colors hover:text-[#bf9b4e]"
                style={{ color: GOLD }}
              >
                Connect With Our Capital Team
                <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote / CTA — navy card */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <h2 className="max-w-2xl font-[var(--font-display)] text-[clamp(1.5rem,2.6vw,2.2rem)] font-medium leading-snug text-black">
                <span className="block">&ldquo;Building, preserving, and</span>
                <span className="block">transitioning wealth across generations.&rdquo;</span>
              </h2>
              <Link
                href="/contact"
                style={{ backgroundColor: GOLD }}
                className="group inline-flex shrink-0 items-center gap-3 rounded-sm px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#14213d] transition-[filter] duration-300 hover:brightness-110"
              >
                Connect With Our Team
                <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
