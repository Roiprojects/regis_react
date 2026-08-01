import { brand } from "@/lib/content";

export default function Wordmark({
  tone = "dark",
  size = "md",
}: {
  tone?: "dark" | "light";
  size?: "sm" | "md";
}) {
  const line1Class = tone === "light" ? "text-ivory-2" : "text-inkg";
  const line2Class = tone === "light" ? "text-copper-soft" : "text-copper";

  const size1 = size === "sm" ? "text-[0.85rem]" : "text-[1.05rem]";
  const size2 = size === "sm" ? "text-[0.68rem]" : "text-[0.78rem]";

  return (
    <span className="inline-flex flex-col justify-center gap-0.5 leading-none group transition-opacity duration-300 hover:opacity-95">
      <span
        className={`block font-sans font-semibold uppercase tracking-[0.24em] ${size1} ${line1Class} transition-colors`}
      >
        {brand.nameLine1}
      </span>
      <span
        className={`block font-sans font-medium uppercase tracking-[0.28em] ${size2} ${line2Class} transition-colors`}
        style={{ color: tone === "light" ? "var(--color-copper-soft)" : "var(--color-copper)" }}
      >
        {brand.nameLine2}
      </span>
    </span>
  );
}
