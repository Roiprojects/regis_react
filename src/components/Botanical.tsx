// Decorative succulent / botanical clipart accent.
// Absolutely positioned via `className`; purely decorative and never intercepts
// pointer events, so it will not interfere with text or links.
export default function Botanical({
  src,
  className = "",
  flip = false,
  opacity = 90,
}: {
  src: string;
  className?: string;
  flip?: boolean;
  opacity?: number;
}) {
  return (
    <img
      src={`/images/succulents/${src}`}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute select-none object-contain drop-shadow-[0_16px_24px_rgba(34,52,40,0.22)] ${
        flip ? "-scale-x-100" : ""
      } ${className}`}
      style={{ opacity: opacity / 100 }}
    />
  );
}
