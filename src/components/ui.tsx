import Link from "@/components/AppLink";
import type { ReactNode } from "react";

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 9h11M9 4l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `arrow-link group ${className ?? ""}`;
  const inner = (
    <>
      <span className="border-b border-transparent transition-colors duration-300 group-hover:border-current">
        {children}
      </span>
      <ArrowIcon className="arrow" />
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Figure({
  src,
  alt,
  ratio = "4 / 3",
  priority,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-sm border border-line bg-paper-3 shadow-[var(--shadow-lift)] ${className ?? ""}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover saturate-[0.92] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
      />
      {/* Warm heritage duotone — unifies photography with the crimson/ink palette */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(120% 120% at 18% 0%, rgba(156,26,26,0.22), transparent 55%), linear-gradient(180deg, rgba(26,21,18,0.05) 0%, rgba(20,16,16,0.42) 100%)",
        }}
      />
      {/* Fine inner ring for a framed, gallery feel */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-[rgba(216,184,120,0.18)]"
      />
    </figure>
  );
}

export function Crest({
  variant = "red",
  size = 44,
  className,
  priority,
}: {
  variant?: "red" | "cream" | "gold" | "charcoal" | "pvtltd";
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  const map: Record<string, string> = {
    red: "/brand/crest-capital.png",
    pvtltd: "/brand/crest-pvtltd.png",
    cream: "/brand/crest-cream.png",
    gold: "/brand/crest-gold.png",
    charcoal: "/brand/crest-charcoal.png",
  };
  return (
    <img
      src={map[variant]}
      alt="Regis and Savoy crest"
      width={size}
      height={size}
      loading={priority ? "eager" : "lazy"}
      className={className}
    />
  );
}
