"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const WAYPOINTS: { id: string; label: string; at: number }[] = [
  { id: "about", label: "Trailhead", at: 0.04 },
  { id: "experience", label: "The climb", at: 0.36 },
  { id: "hobbies", label: "Ridge line", at: 0.68 },
  { id: "contact", label: "Summit", at: 0.96 },
];

const TRAIL_D =
  "M10 4 C 4 40, 18 70, 8 110 S 26 160, 14 200 38 240, 22 280 6 320, 30 360 14 392, 24 396";

export default function TrailProgress({ vertical = true }: { vertical?: boolean }) {
  const progress = useScrollProgress();
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);
  const [hiker, setHiker] = useState({ x: 10, y: 4 });
  const [waypointPts, setWaypointPts] = useState<{ x: number; y: number }[]>(
    WAYPOINTS.map(() => ({ x: 10, y: 4 }))
  );

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    setLength(total);
    setWaypointPts(WAYPOINTS.map((w) => path.getPointAtLength(total * w.at)));
  }, []);

  useEffect(() => {
    if (pathRef.current && length > 0) {
      const pt = pathRef.current.getPointAtLength(length * progress);
      setHiker({ x: pt.x, y: pt.y });
    }
  }, [progress, length]);

  if (!vertical) {
    return (
      <div className="flex w-full items-center gap-3">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-sage whitespace-nowrap">
          On the trail
        </span>
        <div className="h-1 flex-1 rounded-full bg-sage/20">
          <div
            className="h-1 rounded-full bg-amber transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="font-mono text-[0.65rem] text-amber">{Math.round(progress * 100)}%</span>
      </div>
    );
  }

  return (
    <div className="relative h-full w-10">
      <svg viewBox="0 0 44 400" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
        <path d={TRAIL_D} fill="none" stroke="var(--sage)" strokeOpacity={0.28} strokeWidth={2} />
        <path
          ref={pathRef}
          d={TRAIL_D}
          fill="none"
          stroke="var(--amber)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray={length || 1}
          strokeDashoffset={length ? length * (1 - progress) : 0}
          style={{ transition: "stroke-dashoffset 80ms linear" }}
        />
        {WAYPOINTS.map((w, i) => {
          const reached = progress >= w.at - 0.02;
          const pt = waypointPts[i];
          return (
            <a key={w.id} href={`#${w.id}`} aria-label={w.label}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r={reached ? 4 : 3}
                fill={reached ? "var(--amber)" : "var(--ink)"}
                stroke={reached ? "var(--amber)" : "var(--sage)"}
                strokeWidth={1.5}
                style={{ transition: "r 200ms, fill 300ms" }}
              />
            </a>
          );
        })}
        <circle
          cx={hiker.x}
          cy={hiker.y}
          r={5}
          fill="var(--paper)"
          stroke="var(--amber)"
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}
