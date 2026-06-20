# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Reply in the most concise form possible. Skip pleasantries, preambles, and recaps of my question. No phrases like "I'd be happy to", "Great question", or "Let me explain".
Drop articles and filler words wherever the meaning stays clear.
Prefer short declarative sentences. If a tool call is needed, run it first and show only the result. Do not narrate your steps.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build (also type-checks)
- `npm run start` — serve production build
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

No test suite exists.

## Architecture

Single-page personal site (Next.js 16, App Router, TypeScript, Tailwind CSS v4). Everything renders from one route.

- `src/app/page.tsx` — entire page content as one server component: hero, journey timeline, hobbies cards, "currently" strip, contact, footer. All copy lives inline here.
- `src/app/layout.tsx` — root layout; loads three Google fonts via `next/font/google` (Bricolage Grotesque = display, Newsreader = serif/body, JetBrains Mono = mono/labels) and exposes them as CSS variables consumed in `globals.css`.
- `src/app/globals.css` — design tokens (colors, fonts) defined as CSS variables under `:root` and mapped into Tailwind's `@theme inline` (so e.g. `bg-ink`, `text-amber` work as Tailwind utilities). Also holds hand-written CSS for effects that aren't easily expressed as Tailwind utilities: the SVG terrain draw-on animation (`.terrain path`), scroll-cue dot animation, `.reveal`/`.reveal.in` fade-up transition, and the alternating-side timeline (`.trail`, `.stop .marker`).
- `src/components/Nav.tsx` — client component; toggles nav background/padding via a `scroll` listener (`window.scrollY > 40`).
- `src/components/Reveal.tsx` — client component wrapping section content in an `IntersectionObserver` that adds the `.in` class to trigger the CSS fade-up; respects `prefers-reduced-motion`.

Styling convention: prefer Tailwind utility classes inline in JSX; only fall back to `globals.css` for things Tailwind can't express directly (keyframe animations, `::before`/`::after` pseudo-elements, `nth-child` selectors). Custom color tokens (`ink`, `pine`, `moss`, `sage`, `paper`, `mist`, `amber`, `clay`, `line`) and font tokens (`font-display`, `font-serif`, `font-mono`) are defined once in `globals.css` and should be reused rather than re-declared.

Static assets (e.g. `Profile.pdf`) live in `public/` and are referenced by root-relative path.
