// Premium monoline botanical-architectural icons (thin line, rounded ends,
// single colour via currentColor — use text-antique). viewBox 48.
import type { ReactNode } from "react";

function Base({ children, className = "", ...props }: { children: ReactNode; className?: string } & React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-full w-full ${className}`}
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

// Governance — root network
export function IconRoots() {
  return (
    <Base>
      <path d="M24 6v16" />
      <path d="M24 22c-3 3-9 4-13 4M24 22c3 3 9 4 13 4" />
      <path d="M11 26c-2 2-3 5-3 9M11 26c1 3 1 6 0 9M37 26c2 2 3 5 3 9M37 26c-1 3-1 6 0 9" />
      <path d="M24 22v14" />
      <circle cx="24" cy="6" r="2.4" />
    </Base>
  );
}

// Compliance — glass enclosure
export function IconGlass() {
  return (
    <Base>
      <path d="M24 7 10 15v18l14 8 14-8V15L24 7Z" />
      <path d="M24 7v34M10 15l14 8 14-8" />
    </Base>
  );
}

// Risk — balanced water droplet
export function IconDroplet() {
  return (
    <Base>
      <path d="M24 8c5 7 8 11 8 16a8 8 0 0 1-16 0c0-5 3-9 8-16Z" />
      <path d="M16 30h16" />
    </Base>
  );
}

// Business structuring — layered stone foundation
export function IconStone() {
  return (
    <Base>
      <rect x="12" y="30" width="24" height="7" rx="2" />
      <rect x="15" y="21" width="18" height="7" rx="2" />
      <rect x="18" y="12" width="12" height="7" rx="2" />
    </Base>
  );
}

// Due diligence — botanical magnifying glass
export function IconMagnifier() {
  return (
    <Base>
      <circle cx="21" cy="21" r="11" />
      <path d="M29 29l9 9" />
      <path d="M21 25c0-4 2-6 5-7M21 25c0-4-2-6-5-7" />
    </Base>
  );
}

// Investment readiness — new emerging shoot
export function IconShoot() {
  return (
    <Base>
      <path d="M24 40V20" />
      <path d="M24 24c-4 0-7-3-7-8 4 0 7 3 7 8ZM24 22c3 0 6-2 6-6-4 0-6 2-6 6Z" />
      <path d="M16 40h16" />
    </Base>
  );
}

// Corporate growth — structured branching form
export function IconBranch() {
  return (
    <Base>
      <path d="M24 42V10" />
      <path d="M24 20l8-7M24 26l-8-7M24 32l7-6" />
    </Base>
  );
}

// Lotus bloom — balanced ecosystem
export function IconLotus({ className, ...props }: React.SVGAttributes<SVGSVGElement>) {
  return (
    <Base className={className} {...props} strokeWidth={1.4}>
      {/* Left petals */}
      <path d="M24 26c-6-5-13-3-15 2 0 7 4 11 15 17" />
      <path d="M24 28c-4-4-9-2-10 2 0 4 3 7 10 12" />
      {/* Right petals */}
      <path d="M24 26c6-5 13-3 15 2 0 7-4 11-15 17" />
      <path d="M24 28c4-4 9-2 10 2 0 4-3 7-10 12" />
      {/* Inner petal details */}
      <path d="M24 30c-2-2-5-1-6 1 0 2 2 4 6 7" />
      <path d="M24 30c2-2 5-1 6 1 0 2-2 4-6 7" />
      {/* Stem & leaf */}
      <path d="M24 28v10" />
      <path d="M24 34c-4 0-7-3-7-3" />
    </Base>
  );
}

export const iconByService: Record<string, () => React.JSX.Element> = {
  "legal-advisory": IconMagnifier,
  "business-structuring": IconStone,
  "governance-compliance": IconRoots,
  "risk-strategic-advisory": IconDroplet,
  "private-equity": IconShoot,
  "specialized-dispute-audit": IconBranch,
};
