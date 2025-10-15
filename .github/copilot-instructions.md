# Copilot Instructions for this Repo

Use this as your quick-start map for making changes productively. Keep edits small, idiomatic to this codebase, and verify with the provided scripts.

## Project overview
- Stack: React 19 + Vite 7, Tailwind CSS 4 (via `@tailwindcss/postcss`), ESLint 9.
- Purpose: A tiny static site that explains why files should end with a newline and how to configure popular editors/IDEs to do so.
- App entry: index.html mounts the root element (id="root") and loads src/main.jsx -> src/App.jsx.
- UI: Two tabs ("why" and "how") toggled by `TopNav`. The "how" tab lets users pick an editor and renders markdown instructions with syntax highlight.

## Key files and flow
- `index.html`: Vite HTML entry; script points to `/src/main.jsx`.
- `src/main.jsx`: Creates React root and renders `<App />` inside `<StrictMode>`.
- `src/App.jsx`:
  - State: `tab` ('why' | 'how'), `selected` (chosen editor from `EDITORS`).
  - Uses `TopNav` for tab switching.
  - Uses `react-select` to pick editors, then renders markdown via `react-markdown` + `rehype-highlight` and `highlight.js/styles/github.css` for code styling.
  - Editor options sourced from `src/data/editors.js`.
- `src/components/TopNav.jsx`: Two-button tab switcher; controlled via `active` and `onChange` props.
- `src/components/EditorCombobox.jsx`: Headless UI Combobox-based search (currently not used in the main flow but available if needed).
- `src/data/editors.js`: Canonical list of editors with `id`, `name`, and `fix` (markdown string with fenced code blocks). Treat as source of truth for content.
- Styling:
  - Tailwind v4 is enabled via the PostCSS plugin (`@tailwindcss/postcss`) and Tailwind config (`tailwind.config.cjs`). Utility classes are used directly in components.
  - `src/styles/index.css` is the single global stylesheet (Tailwind import + minimal markdown styles). Avoid adding new global CSS unless necessary.
  - Legacy Vite template CSS has been removed (`src/index.css`, `src/App.css`).

## Dev workflows
- Scripts (from `package.json`):
  - Use Yarn (repo includes `yarn.lock`).
  - `yarn start` → Start Vite dev server with HMR.
  - `yarn build` → `vite build` to `dist/`.
  - `yarn preview` → Serve the production build locally.
  - `yarn lint` → ESLint across the repo.
- Build artifacts: `dist/` is ignored by ESLint via `eslint.config.js` global ignore.

## Conventions & patterns
- React style: Modern React with function components and hooks; React 19. Keep components small and prop-driven.
- Tabs: `TopNav` drives `tab` state in `App.jsx`. If adding new tabs, extend `TopNav` and the conditional sections in `App.jsx`.
- Data-first content: Add or modify editor instructions in `src/data/editors.js`. Each item shape:
  - `{ id: string, name: string, fix: string(markdown) }`
  - Markdown often includes fenced code blocks; syntax highlighting is handled by `rehype-highlight`.
- Select widget: `react-select` is used in `App.jsx` for picking editors. If swapping to `EditorCombobox`, keep behavior parity (clearable, filter by name, calls `setSelected`).
- Styling: Prefer Tailwind utility classes. Only touch `src/index.css`/`src/App.css` if necessary; new global styles should go in `src/styles/index.css`.
- ESLint: Uses `@eslint/js` recommended, `eslint-plugin-react-hooks` latest, and `eslint-plugin-react-refresh` (Vite). Custom rule: `'no-unused-vars'` ignores vars matching `^[A-Z_]` (allowing constant-like identifiers). Keep new code lint-clean.
- Imports: ESM (`type: module`). Use relative imports within `src/`.

## Integration details
- Markdown rendering: `react-markdown` with `rehype-highlight`; include relevant CSS theme (already importing `highlight.js/styles/github.css` in `App.jsx`). Ensure any code blocks in `fix` strings specify a language (e.g., json, ini, vim) for better highlighting.
- Tailwind: Config is in `tailwind.config.cjs`; PostCSS pipeline via `postcss.config.cjs` with `@tailwindcss/postcss` and `autoprefixer`.
- Vite: Config in `vite.config.js` uses `@vitejs/plugin-react` only; no aliases set.

## Common tasks (examples)
- Add a new editor guide:
  1) Edit `src/data/editors.js` and append a new object with unique `id`.
  2) The dropdown in `App.jsx` reads from this array; no additional wiring is needed.
- Replace `react-select` with `EditorCombobox`:
  - Import `EditorCombobox` and pass `EDITORS` as `editors`, set `onSelect={setSelected}`. Preserve clearability behavior if desired.
- Add a third tab (e.g., "FAQ"):
  - Update `TopNav.jsx` to include a third button and extend `App.jsx` conditionals.

## Constraints & gotchas
- Keep `fix` content safe for rendering: it’s trusted static content, not user input. Still avoid introducing raw HTML if not required.
- Ensure editor ids are stable; selection logic matches by `id`.
- Highlighting theme is imported in `App.jsx`; if removed, code blocks may lose styling.
- Some legacy Vite template CSS exists; prefer Tailwind utilities to avoid style conflicts.

## Run & verify
- Start dev: `yarn start` and open the printed localhost.
- Lint: `yarn lint`; fix issues to keep CI-ready.
- Build: `yarn build`, then `yarn preview` to spot-check the static output.

If anything here seems off or incomplete, please note it inline in your PR or ask for clarification; we’ll refine this guide.
