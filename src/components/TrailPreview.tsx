const STOPS = [
  { id: "about", label: "Trailhead", note: "Where I started" },
  { id: "experience", label: "The climb", note: "How I got here" },
  { id: "hobbies", label: "Ridge line", note: "What keeps me moving" },
  { id: "contact", label: "Summit", note: "Let's talk" },
];

export default function TrailPreview() {
  return (
    <div className="relative">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-sage">
        Before you start — here&apos;s the route
      </p>
      <svg
        viewBox="0 0 600 110"
        className="mt-4 hidden w-full sm:block"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 95 C 60 95, 90 30, 150 50 S 270 95, 300 60 380 10, 440 35 520 70, 600 20"
          fill="none"
          stroke="var(--sage)"
          strokeOpacity={0.35}
          strokeWidth={2}
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
      </svg>
      <div className="grid grid-cols-2 gap-4 sm:-mt-[78px] sm:grid-cols-4">
        {STOPS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`group flex flex-col items-center text-center ${
              i % 2 === 1 ? "sm:-mt-[26px]" : ""
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full border-2 border-amber bg-ink transition-transform group-hover:scale-125" />
            <span className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-paper">
              {s.label}
            </span>
            <span className="mt-0.5 hidden text-xs text-sage sm:block">{s.note}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
