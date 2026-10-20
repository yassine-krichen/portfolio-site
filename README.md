# Portfolio Site

(repo: portfolio-site)

*Single-page portfolio for a freelance full-stack engineer, built with Next.js and driven by one content file.*

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-PolyForm%20Strict%201.0.0-lightgrey)

[Live site](https://yassinekrichen.vercel.app)

The site has six sections: hero, services, tech stack, selected projects, about and contact. All copy and data (name, role, contact links, services, stack icons, stats and projects) live in `src/content/site.ts`, so changing the site's text or adding a project never touches a component.

## Features

**Content in one typed file** — `src/content/site.ts` exports the `site` object with `Service`, `StackItem`, `Stat` and `Project` types. Components only render what it contains.

**SEO set-up from the same data** — Next.js metadata, a canonical URL, `robots.ts`, `sitemap.ts`, a web manifest, an `opengraph-image.tsx` generated at build time, and a `Person` JSON-LD block.

**Motion that respects the user** — section reveals, split-text headings and animated counters use the `motion` library, and the hero checks `useReducedMotion`.

**Brand icons from data** — the stack row renders `simple-icons` entries by key, so adding a technology is one line in the content file.

## How it works

Next.js App Router, one route. `layout.tsx` loads three fonts through `next/font` (Space Grotesk, Inter, JetBrains Mono) and builds metadata from `site`. `page.tsx` composes the section components in `src/components/sections/`, which read from `src/content/site.ts` and use the layout and `ui` primitives (`reveal`, `split-text`, `counter`).

### Key decisions

- **One content module over per-component strings**: edits to copy, links or projects happen in a single file, and TypeScript's `satisfies` checks each list's shape.
- **Static metadata routes**: the sitemap, robots file, manifest and Open Graph image are Next.js file conventions, so there is no hand-maintained SEO markup outside `Person` JSON-LD.
- **No UI library**: the layout is Tailwind 4 and a handful of small components, which keeps the dependency list to `next`, `react`, `motion` and `simple-icons`.

## Tech stack

| Technology | Role | Why |
| --- | --- | --- |
| Next.js 16, React 19 | Framework | — |
| Tailwind CSS 4 | Styling | — |
| motion | Animation | — |
| simple-icons | Technology logos | — |
| TypeScript | Language | — |
| Vercel | Hosting | — |

## Getting started

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000. To use the go-task shortcut, `task dev` serves on port 3006.

```bash
npm run build
npm start
```

To make the site your own, edit `src/content/site.ts`: `SITE_URL`, name, contact details, services, stack and projects.

## Configuration

There are no environment variables. The deployed URL is the `SITE_URL` constant in `src/content/site.ts`.

## License

**Source-available, not open source.** Portfolio Site is published under the
[PolyForm Strict License 1.0.0](LICENSE): you may read, run, and learn from the code
for personal, research, or evaluation use.

You may **not** use it commercially, redistribute it, rebrand it, or publish modified
versions without written permission. Copyright (c) 2026 Yassine Krichen. All rights
not granted by the license are reserved.

For commercial licensing or collaboration: krichenyassine22@gmail.com
