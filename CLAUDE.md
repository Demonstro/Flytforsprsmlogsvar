# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Norwegian-language Q&A help platform for youth ("Flyt for spørsmål og svar"), exported from Figma Make. Original design: https://www.figma.com/design/k27FGHSE7Cme7JvP2N2RAW

## Commands

- `npm install` — install dependencies
- `npm run dev` — start Vite dev server (port 5173)
- `npm run build` — production build

No test runner, linter, or formatter is configured.

## Architecture

**Stack:** React 18 + TypeScript, Vite 6, Tailwind CSS 4, React Router 7, shadcn/ui (Radix primitives)

**Entry flow:** `index.html` → `src/main.tsx` → `src/app/App.tsx` (RouterProvider) → `src/app/routes.ts`

**Key directories:**
- `src/app/pages/` — 11 page components, all lazy-loaded via React Router
- `src/app/components/` — app-level components (layout, button, shared icons/images, global menu)
- `src/app/components/ui/` — 50+ shadcn/ui components (do not hand-edit; follow shadcn patterns)
- `src/app/data/` — mock data (services, questions)
- `src/imports/` — Figma-generated components and SVG assets (treat as read-only reference)
- `src/styles/` — `theme.css` (CSS variables, dark mode), `fonts.css` (Open Sans via Google Fonts)

**Routing:** Two layout groups in `routes.ts`:
1. Most pages under `RootLayout` (header, footer, global menu)
2. `/still-sporsmal` (submit question) uses its own standalone layout
3. `/still-sporsmal/bekreftelse` wraps back into RootLayout

**Path alias:** `@` maps to `./src` (configured in vite.config.ts)

## Styling

- Mobile-first, max-width 375px container
- Primary green palette: `#2b5944` (dark), `#3c7c5e` (hover), `#1b372a` (active)
- Font: Open Sans (400, 600, 700)
- CSS variables defined in `src/styles/theme.css` using OKLCH color space
- Custom `Button` component in `src/app/components/button.tsx` with 6 variants (primary, secondary, outline, outline-white, link, link-white) — use this over the shadcn button for app UI

## Conventions

- All route content is in Norwegian
- Routes use lazy imports with `.then((m) => ({ Component: m.ExportName }))` pattern
- SVG icons and shared images are centralized in `src/app/components/shared.tsx`
- Touch targets: minimum 44px height for interactive elements
