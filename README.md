# Portfolio

Personal site of Wesley Mendes — Tech Lead building agentic AI systems.

Published at **https://wesleymendes.vercel.app/**

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Vitest.

No UI framework and no CSS-in-JS: the design system lives in `src/index.css` as
CSS custom properties, exposed to Tailwind through `@theme`.

## Running locally

```bash
nvm use          # Node 22
npm ci
npm run dev
```

| Script              | What it does                    |
| ------------------- | ------------------------------- |
| `npm run dev`       | dev server                      |
| `npm run build`     | typecheck and production build  |
| `npm run preview`   | serve the production build      |
| `npm run lint`      | ESLint (flat config, jsx-a11y)  |
| `npm run typecheck` | TypeScript, no emit             |
| `npm test`          | Vitest + Testing Library        |
| `npm run coverage`  | test run with a coverage report |

## Editing content

All copy lives under `src/content/` as typed data — never inside JSX. Each entry
carries both languages:

- `projects.ts` — selected work, plus the collapsed earlier projects
- `experience.ts` — roles and their bullets
- `stack.ts` — grouped technologies
- `about.ts`, `profile.ts` — bio, links, contact details

Interface strings (nav labels, buttons) live in `src/i18n/{en,pt}.ts`. English is
the default; Portuguese is picked up from `navigator.language` or the language
toggle, and persisted in `localStorage`.

## Conventions

- Technical labels are `<span>`, never `<button>` — a button is something that
  acts.
- External links go through `ExternalLink`, which always sets
  `rel="noopener noreferrer"`.
- Colour, spacing and radius come from tokens; components do not hardcode hex
  values.
- Animation is opt-out under `prefers-reduced-motion`.
