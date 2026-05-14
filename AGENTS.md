# Project Notes

## Overview
- SafeStart Canada is a Vite + React app generated from a Figma design.
- Original design link is in `README.md`: `https://www.figma.com/design/zBB8WaVozuvk22BtO2oYaB/Create-this-design`.
- The app is a newcomer support platform with pages for healthcare, housing, legal rights, community support, live chat, resources, articles, and profile.

## Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev -- --host 127.0.0.1`
- Build: `npm run build`

## App Structure
- Entry point: `src/main.tsx`
- App shell/router provider: `src/app/App.tsx`
- Routes: `src/app/routes.ts`
- Shared layout: `src/app/components/RootLayout.tsx`
- Navigation: `src/app/components/Navigation.tsx`
- Pages live in `src/app/pages/`
- Shared shadcn-style UI primitives live in `src/app/components/ui/`
- Global styles load through `src/styles/index.css`

## Implementation Notes
- Routing uses `react-router` with `createBrowserRouter`.
- Styling uses Tailwind CSS v4 via `@tailwindcss/vite`.
- Icons are from `lucide-react`.
- Vite has an `@` alias for `src`.
- Keep the existing clean, trustworthy SafeStart Canada tone: accessible, calm, action-oriented, and mobile responsive.
- Prefer existing UI primitives and page patterns before adding new dependencies or abstractions.

## Gotchas
- This folder is not currently a git repository.
- `pnpm` was not available in this environment; `npm install` and `npm run dev` worked.
- `node_modules/` may be present locally after installation, so exclude it from broad searches.
