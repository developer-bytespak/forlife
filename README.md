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

Vite + React 19 + TypeScript, hand-written CSS (no UI framework, no animation library).
Fonts: Plus Jakarta Sans + Instrument Serif via Google Fonts.

## Structure

```
public/assets/          real ForLife brand assets (logo, product + lifestyle imagery)
src/styles/global.css   design system: color tokens, type scale, all section styles
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

Motion is CSS-only: a staggered hero entrance, an `IntersectionObserver` scroll
reveal (`src/components/Reveal.tsx`), ≤3px hover lifts and 1.025 image scale — all
disabled under `prefers-reduced-motion`.

## Shopify links

External CTAs point at the existing store (`src/data/site.ts` → `links`):
collection, Dare to Dream, Thriving Season, the bundle, about, referral and
ambassador pages. Header/nav items are in-page anchors.

The newsletter form is presentational — it validates the email and shows a
confirmation, but posts nowhere.
