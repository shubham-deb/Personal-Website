export default function GrandView() {
  return (
    <svg
      viewBox="0 0 800 280"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px] w-full opacity-70"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunrise" cx="50%" cy="15%" r="60%">
          <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="280" fill="url(#sunrise)" />
      <path
        d="M0 220 L120 120 180 170 260 70 340 160 420 90 520 180 600 110 680 190 800 140 V280 H0 Z"
        fill="var(--pine)"
        opacity="0.8"
      />
      <path
        d="M0 250 L100 190 200 230 300 150 420 220 540 160 660 230 800 190 V280 H0 Z"
        fill="var(--ink)"
      />
    </svg>
  );
}
