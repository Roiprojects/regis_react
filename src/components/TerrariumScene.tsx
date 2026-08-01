// Bespoke "Corporate Terrarium" — a faceted architectural glass vessel with a
// branching tree, roots and layered stone inside. Monoline antique gold on
// soft glass. A slow light reflection sweeps across every ~9s.
// (Replaces the crest/logo as the hero motif.)
export default function TerrariumScene({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <svg
        viewBox="0 0 400 500"
        fill="none"
        className="h-full w-full"
        aria-hidden
      >
        {/* soft ground shadow */}
        <ellipse cx="200" cy="470" rx="150" ry="16" fill="#223428" opacity="0.06" />

        {/* glass fills */}
        <g>
          <polygon points="200,44 88,150 88,430 200,470 312,430 312,150" fill="url(#glassGrad)" opacity="0.5" />
          <polygon points="200,44 88,150 200,150" fill="#ffffff" opacity="0.18" />
          <polygon points="200,44 312,150 200,150" fill="#ffffff" opacity="0.10" />
        </g>

        {/* layered stone foundation */}
        <g stroke="#b18a43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="120" y="392" width="160" height="26" rx="8" fill="#b18a43" fillOpacity="0.05" />
          <rect x="140" y="368" width="120" height="24" rx="8" fill="#b18a43" fillOpacity="0.04" />
        </g>

        {/* roots into the stone */}
        <g stroke="#b18a43" strokeWidth="1.4" strokeLinecap="round" opacity="0.85">
          <path d="M200 368c-6 8-18 12-30 14M200 368c6 8 18 12 30 14M200 368v18" />
          <path d="M170 382c-4 4-6 8-6 10M230 382c4 4 6 8 6 10" />
        </g>

        {/* trunk + branching banyan canopy */}
        <g stroke="#b18a43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M200 372V214" />
          {/* main branches */}
          <path d="M200 250c-16-10-30-26-38-46M200 250c16-10 30-26 38-46" />
          <path d="M200 226c-24-6-44-20-56-40M200 226c24-6 44-20 56-40" />
          <path d="M200 214c-10-14-14-30-14-46M200 214c10-14 14-30 14-46" />
          {/* fine twigs */}
          <path d="M162 204c-6-4-10-10-12-16M238 204c6-4 10-10 12-16" strokeWidth="1.3" />
          <path d="M144 186c-5-2-9-6-11-11M256 186c5-2 9-6 11-11" strokeWidth="1.3" />
          <path d="M186 168c-3-6-4-12-3-18M214 168c3-6 4-12 3-18" strokeWidth="1.3" />
          {/* aerial roots (banyan) */}
          <path d="M150 176c-2 20-2 40 0 62M250 176c2 20 2 40 0 62M176 156c-1 18-1 40 0 60M224 156c1 18 1 40 0 60" strokeWidth="1.1" opacity="0.7" />
        </g>

        {/* glass frame (drawn over contents) */}
        <g stroke="#3a5244" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <polygon points="200,44 88,150 88,430 200,470 312,430 312,150" fill="none" />
          <path d="M200 44v426M88 150h224M88 150 200 44 312 150" opacity="0.55" />
          <path d="M88 430 200 470 312 430" />
        </g>

        {/* light dot (strategic guidance entering the glass) */}
        <circle cx="150" cy="118" r="3" fill="#c9a867" opacity="0.9" />

        <defs>
          <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.34" />
            <stop offset="55%" stopColor="#eef2ec" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#d9d4cc" stopOpacity="0.12" />
          </linearGradient>
        </defs>
      </svg>

      {/* slow light reflection sweeping across the glass */}
      <span className="glass-sheen" />
    </div>
  );
}
