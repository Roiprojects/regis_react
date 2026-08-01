import Link from "@/components/AppLink";
import { useLocation } from "react-router-dom";
import { brand, nav, services, contact } from "@/lib/content";
import { ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import Wordmark from "@/components/Wordmark";
import Botanical from "@/components/Botanical";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  // The Capital page runs a navy + beige + gold theme — carry it into the footer.
  const pathname = useLocation().pathname;
  const isCapital = pathname?.startsWith("/capital");

  return (
    <footer
      className={`relative overflow-hidden text-ivory-2 ${isCapital ? "" : "bg-forest"}`}
      style={isCapital ? { backgroundColor: "#14213d" } : undefined}
    >
      {!isCapital && (
        <Botanical
          src="teal.png"
          opacity={80}
          className="right-[5vw] top-12 hidden w-14 md:block md:w-20"
        />
      )}
      {/* Big quote band — hidden on the Capital page */}
      {!isCapital && (
        <div className="border-b border-white/10 px-[var(--spacing-gutter)] py-24">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="max-w-4xl font-[var(--font-display)] text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.15] text-ivory-2">
                &ldquo;Every resilient business is built within a carefully
                designed ecosystem of governance, compliance, structure and{" "}
                <span className="italic text-copper-soft">strategic guidance.</span>&rdquo;
              </p>
              <p className="mt-8 text-sm uppercase tracking-[0.22em] text-ivory-2/45">
                {brand.legalName}
              </p>
            </Reveal>
          </div>
        </div>
      )}

      {/* Columns */}
      <div className="mx-auto grid max-w-[1400px] gap-12 px-[var(--spacing-gutter)] py-20 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Wordmark tone="light" size="md" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-2/55">
            Specialised corporate advisory, independently provided and affiliated
            with {brand.parent}.
          </p>
          <p className="mt-6 font-[var(--font-display)] text-lg italic text-copper-soft">
            {brand.tagline}
          </p>
        </div>

        <nav>
          <p className="eyebrow mb-6 text-ivory-2/40">Explore</p>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-sm text-ivory-2/70 transition-colors hover:text-copper-soft"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <p className="eyebrow mb-6 text-ivory-2/40">Services</p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services#${s.id}`}
                  className="text-sm text-ivory-2/70 transition-colors hover:text-copper-soft"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-6 text-ivory-2/40">Stay in the loop</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="group flex items-center gap-3 border-b border-white/25 pb-3 transition-colors focus-within:border-antique-soft"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full bg-transparent text-sm text-ivory-2 placeholder:text-ivory-2/35 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="text-copper-soft transition-transform duration-500 group-hover:translate-x-1"
            >
              <ArrowIcon />
            </button>
          </form>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 block text-sm text-ivory-2/70 transition-colors hover:text-copper-soft"
          >
            {contact.email}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-[var(--spacing-gutter)] py-7">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 text-xs text-ivory-2/45 md:flex-row md:items-center">
          <p className="max-w-2xl leading-relaxed">
            This website is for informational purposes only. Nothing herein
            constitutes solicitation, advertisement or legal advice, and no
            lawyer&ndash;client or advisory relationship is created by its use.
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-antique-soft">Contact</Link>
            <a href="#" className="hover:text-antique-soft">Privacy</a>
            <button
              onClick={scrollTop}
              className="flex items-center gap-2 uppercase tracking-[0.18em] hover:text-antique-soft"
            >
              Top
              <ArrowIcon className="-rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
