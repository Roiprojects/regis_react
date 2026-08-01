import Link from "@/components/AppLink";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { brand, nav, services } from "@/lib/content";
import { ArrowIcon } from "@/components/ui";
import Wordmark from "@/components/Wordmark";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The Capital page has a navy hero — the floating bar sits on dark until scrolled.
  const pathname = useLocation().pathname;
  const isCapital = pathname?.startsWith("/capital");
  const onDark = !open && isCapital && !scrolled;
  const lightText = open || onDark;

  const barText = lightText ? "text-ivory-2" : "text-inkg";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <div
          className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-2xl border px-5 transition-all duration-500 sm:px-7 ${
            open
              ? "h-[64px] border-white/15 bg-transparent"
              : scrolled
                ? "h-[64px] border-stone/70 bg-ivory/80 shadow-[0_16px_40px_-24px_rgba(34,52,40,0.35)] backdrop-blur-xl"
                : onDark
                  ? "h-[70px] border-white/15 bg-[#14213d]/35 shadow-[0_10px_30px_-26px_rgba(0,0,0,0.4)] backdrop-blur-md"
                  : "h-[70px] border-stone/40 bg-ivory/45 shadow-[0_10px_30px_-26px_rgba(34,52,40,0.28)] backdrop-blur-md"
          }`}
        >
          {/* Brand — text wordmark only, no logo */}
          <Link href="/" aria-label={`${brand.name} home`}>
            <Wordmark tone={lightText ? "light" : "dark"} size="sm" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {!open &&
              nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative whitespace-nowrap text-[0.8rem] uppercase tracking-[0.16em] transition-colors ${
                    onDark
                      ? "text-ivory-2/85 hover:text-copper-soft"
                      : "text-inkg-soft hover:text-bronze"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-antique transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
          </nav>

          {/* Menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] transition-colors ${barText}`}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
            <span className="relative flex h-4 w-6 flex-col justify-between">
              <span
                className={`h-[1.5px] w-full origin-center bg-current transition-all duration-500 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-current transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full origin-center bg-current transition-all duration-500 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen mega menu — dark green (never black) */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-lenis-prevent
            className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-forest text-ivory-2"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mx-auto flex min-h-full max-w-[1400px] flex-col justify-center px-[var(--spacing-gutter)] pt-28 pb-16">
              <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
                {/* Primary links */}
                <div>
                  <p className="eyebrow mb-8 text-antique-soft">Navigate</p>
                  <ul className="space-y-1">
                    {nav.map((item, i) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: EASE }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-4 py-1 font-[var(--font-display)] text-[clamp(2rem,5vw,3.6rem)] leading-tight text-ivory-2 transition-colors hover:text-antique-soft"
                        >
                          <span className="font-sans text-[0.7rem] tracking-[0.2em] text-ivory-2/45">
                            0{i + 1}
                          </span>
                          {item.label}
                          <ArrowIcon className="mt-2 -translate-x-2 text-antique-soft opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Services index */}
                <div className="border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                  <p className="eyebrow mb-8 text-antique-soft">Advisory Services</p>
                  <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                    {services.map((s, i) => (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.06, duration: 0.6, ease: EASE }}
                      >
                        <Link
                          href={`/services#${s.id}`}
                          onClick={() => setOpen(false)}
                          className="group block"
                        >
                          <span className="font-[var(--font-display)] text-xl text-ivory-2 transition-colors group-hover:text-antique-soft">
                            {s.title}
                          </span>
                          <ul className="mt-2 space-y-1 text-sm text-ivory-2/45">
                            {s.items.slice(0, 3).map((it) => (
                              <li key={it}>{it}</li>
                            ))}
                          </ul>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <p className="font-[var(--font-display)] text-lg italic text-antique-soft">
                      {brand.tagline}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory-2/40">
                      An affiliate of {brand.parent}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
