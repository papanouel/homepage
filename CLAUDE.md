# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio / mentorship site for Frederic Nouel (papanouel.com). React 19 + Vite 6 + Tailwind CSS 4, with an interactive Three.js hero scene. Deployed as a static site to GitHub Pages via GitHub Actions on every push to `main` (custom domain set by `public/CNAME`).

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000 (host 0.0.0.0, HMR on)
npm run build    # Production build to dist/
npm run preview  # Serve the production build locally
npm run lint     # Type-check only: tsc --noEmit (there is no ESLint)
npm run clean    # rm -rf dist
```

There is no test suite. `npm run lint` (tsc) is the only automated check; run it before considering a change done. Set `DISABLE_HMR=true` to turn off hot reload.

## Architecture

### Routing without a router
There is no routing library. `src/main.tsx` reads the `page` query param and renders one of three top-level pages:
- `App.tsx` — default homepage
- `?page=disclosure` → `Disclosure.tsx` (Japanese commercial-law disclosure, 特定商取引法)
- `?page=tinyhoopers` → `TinyHoopers.tsx` (game case-study page)

To add a page, add a component and another branch in `main.tsx`, then link to it with `/?page=<name>`.

### Content is data-driven
Nearly all homepage copy (bio, expertise cards, career timeline, toolkit, philosophy, socials, and the 3D character's `DIALOGUES`) lives in `src/constants.ts` as `MENTOR_DATA` and `DIALOGUES`, typed by interfaces in the same file. `App.tsx` maps over this data to render sections. **Edit content in `constants.ts`, not in JSX.** Expertise-card icons are referenced by string name and resolved through an `iconMap` of `lucide-react` icons in `App.tsx` — a new icon needs an entry there.

### The 3D hero scene
`src/components/HeroScene.tsx` (React) owns the lifecycle of `src/services/sceneManager.ts` (plain, non-React Three.js class). The split matters:
- `SceneManager` handles all Three.js: renderer, camera, OrbitControls, GLTF/DRACO loading, animation mixers, raycasting, and its own `requestAnimationFrame` loop. It pauses on tab-hidden and handles WebGL context loss/restore. Always call `dispose()` on unmount (HeroScene does this).
- `HeroScene` bridges Three.js → React: it registers a character-click callback that advances `DIALOGUES`, and polls `getCharacterScreenPosition()` every 16ms to position the `SpeechBubble` DOM element over the 3D character.
- Models load from `public/models/` via absolute `import.meta.env.BASE_URL` paths. The environment model (`papanouel_space_v2_1.glb`) falls back to `papanouel.glb`, then to a red wireframe error cube if both fail; a separate character model loads on top. DRACO decoder is fetched from a gstatic CDN.

Note: `SceneManager` is heavily instrumented with `console.log` for debugging model/raycast issues — keep that in mind when reading it.

### Styling
Tailwind CSS 4 via the Vite plugin (`@tailwindcss/vite`), configured entirely in `src/index.css` with `@theme` and `@layer` — there is no `tailwind.config.js`. Custom utilities `.glass` and `.bg-mesh` and the font tokens (`--font-display` etc.) are defined there. Path alias `@/` → `src/` (set in both `vite.config.ts` and `tsconfig.json`).

### SEO / metadata
`metadata.json` (`name`, `description`) is injected into `index.html` at build time by the custom `metadataPlugin` in `vite.config.ts`, which rewrites the `<title>` and OG/Twitter tags. `index.html` also contains hand-written visually-hidden fallback content and JSON-LD for crawlers that don't run JS. `public/` holds static SEO assets (`sitemap.xml`, `robots.txt`, `llms.txt`, `CNAME`).

### Standalone games
`public/games/meteor/` is a self-contained vanilla JS/HTML/CSS game, unrelated to the React build — it is served as-is from the static output.

## Deployment
Push to `main` → `.github/workflows/deploy.yml` runs `npm ci` + `npm run build` and publishes `dist/` to GitHub Pages. Vite `base` is `/` because the site uses a custom domain, not a project subpath.
