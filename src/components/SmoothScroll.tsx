import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// Global Lenis smooth-scroll provider. Next 16 no longer fights CSS scroll,
// and we run Lenis in JS for the AZB-style weighted momentum scroll.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}
