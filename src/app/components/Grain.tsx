export function Grain() {
  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none select-none"
      aria-hidden="true"
    >
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
