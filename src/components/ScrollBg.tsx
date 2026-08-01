import { useEffect } from "react";

// Background colour changes as you scroll. Each section carries a data-bg
// colour; as its top passes the viewport centre, the page background
// transitions smoothly to that colour.
export default function ScrollBg() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-bg]")
    );
    if (!els.length) return;

    // flat colour + smooth animated transition
    document.body.style.backgroundImage = "none";
    document.body.style.transition =
      "background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1)";

    const set = (c: string) => {
      document.body.style.backgroundColor = c;
    };
    set(els[0].dataset.bg!);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const c = (e.target as HTMLElement).dataset.bg;
            if (c) set(c); // instant snap
          }
        }
      },
      // active zone = a thin line at the viewport centre
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.transition = "";
    };
  }, []);

  return null;
}
