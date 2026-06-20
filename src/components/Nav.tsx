"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-10 transition-[background,padding] duration-300 ${
        scrolled
          ? "bg-paper/86 backdrop-blur-md border-b border-line py-3"
          : "py-[18px]"
      }`}
    >
      <span className={`font-display font-extrabold text-[1.05rem] tracking-tight ${scrolled ? "text-ink" : "text-paper"}`}>
        Shubham Deb<span className="text-amber">.</span>
      </span>
      <nav className="hidden sm:flex gap-7">
        {[
          ["#journey", "Journey"],
          ["#hobbies", "Off the clock"],
          ["#contact", "Connect"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className={`font-mono text-[0.74rem] tracking-[0.12em] uppercase opacity-85 transition-colors hover:opacity-100 hover:text-amber ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
