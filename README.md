# ForLife — Homepage

Editorial landing page for the ForLife / IVL Movement, built as a frontend-only demo
(no backend, no CMS, no Shopify integration — product CTAs deep-link to the live
Shopify store).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build
npm run lint
```

## Stack

Vite + React 19 + TypeScript, hand-written CSS, GSAP + ScrollTrigger for scroll
choreography. Fonts: Plus Jakarta Sans + Instrument Serif via Google Fonts.

## Structure

```
public/assets/          real ForLife brand assets (logo, product + lifestyle imagery)
src/styles/global.css   design system: color tokens, type scale, all section styles
src/lib/motion.ts       motion system: useMotion hook + shared reveal helpers
src/data/site.ts        page copy, product data, nav, links — edit content here
src/components/         one component per page section
src/App.tsx             section order
```

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `--cobalt` | `#3556B2` | primary type, buttons, accents |
| `--charcoal` | `#1C2741` | dark sections, footer, body headings |
| `--mint` | `#9DDCD3` | hero panel, dark-section accents, bundle bar |
| `--sage` / `--powder` / `--sand` / `--peach` | secondary | archetype + proof card tints |
| `--slate` / `--bluegray` | supporting | labels, decorative blocks |
| `--paper` `#FAFAF7` / `--hero-blue` `#DCECF8` | neutral grounds |

Typography pairs bold Plus Jakarta Sans headlines with a single Instrument Serif
italic word (`<span className="serif">`). All sizes use `clamp()`; layout is fluid
between 375px and 1440px with no horizontal overflow.

## Motion system

`src/lib/motion.ts` owns the whole language:

- **`useMotion(setup)`** — scopes every animation to its section with
  `gsap.context()`, cleans up on unmount, and hands the callback a
  `gsap.matchMedia()` so each tween declares the conditions it runs under
  (`MOTION`, `DESKTOP`, `MOBILE`). Nothing is hidden by CSS, so if JS never runs
  the page still reads correctly.
- **Helpers** — `revealLines` (masked headline lines), `maskIn` (clip-path image
  curtain + slow settle), `drawRules` (hairlines drawing left→right), `fadeUp`
  (body copy). Each section combines them differently so no two arrive the same way.
- **Headline masking** — `<Line>` from `components/Reveal.tsx` wraps a line in an
  `overflow: hidden` clip; GSAP slides the inner span up from behind it.
- **`clearProps`** — entrance tweens on hoverable elements clear their inline
  transforms on completion, so CSS `:hover` states stay in control afterwards.
- **Parallax layers** carry a constant slight `scale` so drift never exposes a
  container edge.

Choreography by section: staggered hero opening (~1.4s, no loading screen) with a
clip-path media reveal, pointer-reactive depth on the hero visual (desktop only,
≤10px), kinetic principle strip, sticky product scroll-story with a progress rail,
a sticky What's-Inside visual that follows the feature in focus, tilt-on-hover
archetype cards (max 2°), a slow word band behind the community section, a
drawing timeline in How It Works, a pausable trust marquee, a 0→4 counter on the
4% moment, staggered article cards, and sequential footer lines.

`prefers-reduced-motion: reduce` disables every GSAP block (they are gated on the
media query), holds the marquee still as a wrapped static list, and shows all
content immediately.

## Shopify links

External CTAs point at the existing store (`src/data/site.ts` → `links`):
collection, Dare to Dream, Thriving Season, the bundle, about, referral and
ambassador pages. Header/nav items are in-page anchors.

The newsletter form is presentational — it validates the email and shows a
confirmation, but posts nowhere.
