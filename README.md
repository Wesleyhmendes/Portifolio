# Portfolio

Personal site of Wesley Mendes, Tech Lead building agentic AI systems.

Published at https://wesleymendes.vercel.app/

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Vitest.

There is no UI framework and no CSS-in-JS. The design system lives in
`src/index.css` as CSS custom properties, exposed to Tailwind through `@theme`.

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

All copy lives under `src/content/` as typed data, never inside JSX. Each entry
carries both languages:

- `projects.ts`, the selected work plus the collapsed earlier projects
- `experience.ts`, the roles and their bullets
- `stack.ts`, the grouped technologies
- `about.ts` and `profile.ts`, the bio, links and contact details

Each project also carries a written description of its diagram, which is what a
screen reader announces in place of the drawing.

Interface strings such as nav labels and buttons live in `src/i18n/{en,pt}.ts`.
English is the default. Portuguese comes from `navigator.language` or the
language toggle, and the choice is kept in `localStorage`.

## Conventions

- Technical labels are `<span>`. A button is something that acts, so a label
  that does nothing is not one.
- External links go through `ExternalLink`, which always sets
  `rel="noopener noreferrer"`.
- Colour, spacing and radius come from tokens. Components do not hardcode hex
  values, and neither do the diagrams, which is how they follow the theme.
- Animation is opt-out under `prefers-reduced-motion`.
