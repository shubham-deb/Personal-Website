"use client";

import { useEffect, useRef, useState } from "react";
import TrailProgress from "@/components/TrailProgress";

const LINKS: [string, string][] = [
  ["about", "Trailhead"],
  ["experience", "The climb"],
  ["hobbies", "Ridge line"],
  ["contact", "Summit"],
];

export default function Sidebar() {
  const [active, setActive] = useState("about");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = LINKS.map(([id]) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[min(50vw,400px)] flex flex-col justify-between px-6 sm:px-10 lg:px-24 pt-16 pb-10 lg:py-24"
    >
      <div>
        <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-paper">
          Shubham Deb
        </p>
        <p className="mt-3 font-display text-lg sm:text-xl font-semibold text-mist">
          Backend Engineer
        </p>
        <p className="mt-4 max-w-xs text-sage leading-relaxed">
          I build the trading and portfolio-optimization microservices behind Manager Workbench.
        </p>

        <nav className="hidden lg:flex mt-16 gap-5 h-56">
          <TrailProgress />
          <ul className="flex flex-col justify-between py-1">
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="group flex items-center gap-3 py-1">
                  <span
                    className={`font-mono text-xs tracking-[0.15em] uppercase transition-colors ${
                      active === id ? "text-paper" : "text-sage group-hover:text-paper"
                    }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden lg:flex gap-5 mt-10">
        <a
          href="mailto:debshubham@gmail.com"
          className="font-mono text-xs tracking-[0.1em] uppercase text-sage hover:text-amber transition-colors"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-deb"
          className="font-mono text-xs tracking-[0.1em] uppercase text-sage hover:text-amber transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
