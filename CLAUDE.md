# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Commands

```bash
npm run dev         # Start the development server
npm run build       # Create the production build
npm run lint        # Lint with Biome
npm run format      # Format with Biome
npm run lint:eslint # Secondary ESLint lint pass
```

## Architecture

**Next.js 16 App Router** with React 19 Server Components by default. This is an Italian-language restaurant website.

### Routing

Pages live in `app/` using file-based routing:

- `/` -> `app/page.tsx`
- `/chi-siamo`, `/cucina`, `/esperienze`, `/contatti`, `/privacy-policy`
- API routes:
  - `app/api/contatti/submit` for the contact form
  - `app/api/altcha/challenge` for spam protection
- Redirect:
  - `/storia-e-valori` -> `/chi-siamo` in `next.config.ts`

### Component organization

Page-related components are grouped with route folders inside `app/`: `(home)`, `(header)`, `(footer)`, `(contatti)`, `(esperienze)`, `(cucina)`, `(chi-siamo)`.

Shared UI primitives live in `components/ui/` and use shadcn/ui.

### Content pattern

Static page content is stored in TypeScript constants under `lib/contents/*.ts` and imported directly into components. There is no CMS and no static-content API layer.

### Styling

Tailwind CSS 4 with custom brand tokens defined in `globals.css`, including:
- `--lq-dark`
- `--lq-orange`
- `--lq-green`
- `--lq-light`
- `--lq-cream`

shadcn/ui uses the **New York** style.

Use `cn()` from `lib/utils.ts` for class merging.

### Forms

The contact form in `app/(contatti)/` uses `react-hook-form` with ALTCHA spam protection.

Server-side ALTCHA validation lives in `lib/altcha.ts`.

At the moment, submissions are logged to the console instead of being sent by email.

### Fonts

Barlow and Gabarito are configured in `lib/fonts.ts` and exposed as CSS variables.

### Path alias

`@/*` maps to the project root.

Examples:
- `@/lib/utils`
- `@/components/ui/button`

## SEO standards

All existing and newly created public pages must be SEO-conscious.

Always implement or preserve:
- page-specific SEO metadata
- Open Graph metadata
- Twitter card metadata
- a coherent canonical strategy
- sitemap coverage for indexable public routes
- robots rules only when indexability behavior needs to be defined or corrected
- a structure that supports indexing and social sharing

Use JSON-LD **only when it is semantically appropriate and supported by visible page content**.
Do not force structured data onto every page.

## SEO workflow

### `/seo-finalize`

Use `/seo-finalize [route-path|file-path|all]` only as the final SEO implementation pass.

This skill is allowed to modify SEO-related files.

It may:
- create or update page metadata
- add or refine JSON-LD when appropriate
- update `app/sitemap.*` when needed
- update `app/robots.*` only when needed
- align route-level metadata assets with the project pattern when clearly relevant

Do not run it automatically.
Run it only when explicitly requested.

### `/seo-audit`

Use `/seo-audit [route-path|file-path|all]` for a read-only SEO report.

It must not edit files.

### `seo-structure-reviewer`

Use the `seo-structure-reviewer` subagent proactively whenever the task touches SEO-sensitive code or decisions, including:
- route files
- layout metadata
- sitemap
- robots
- canonical logic
- route-level metadata assets
- structured-data decisions
- heading architecture on public pages

This reviewer is read-only and must not edit files.

## Accessibility workflow

### `/accessibility-audit`

Use `/accessibility-audit [route-path|file-path|glob|all]` for a read-only accessibility review across pages and components.

It must not perform SEO work and must not edit files.

## Skills and plugins

Always invoke project skills with the Skill tool in the contexts described below.

### `frontend-design`

Invoke whenever creating or modifying a UI component or a page. This skill should produce distinctive, production-grade design work and avoid generic AI-looking output.

Project design system reference:
- **Brand colors** from `globals.css`: `--lq-dark`, `--lq-orange`, `--lq-green`, `--lq-light`, `--lq-cream`
- **Fonts**:
  - `var(--font-barlow)` for body copy and UI
  - `var(--font-gabarito)` for display text and headings
- **Component library**: shadcn/ui with the New York style in `components/ui/`
- **Utility**: `cn()` from `lib/utils.ts`
- **Tailwind**: version 4; prefer utility classes and CSS variables such as `bg-(--lq-orange)`

### `vercel-react-best-practices`

Invoke when writing or refactoring React components, especially for:
- Server Component vs Client Component decisions (`"use client"`)
- data fetching and caching patterns
- bundle optimization and lazy loading
- image handling with `next/image`
- font performance

## Project skills

Project skills are expected in `.claude/skills/`:

| Skill | Purpose |
|------|---------|
| `/seo-finalize` | Final SEO implementation pass for one route or for the whole project |
| `/seo-audit` | Read-only SEO audit across the project or a specific route |
| `/accessibility-audit` | Read-only accessibility audit across pages and components |

## Project subagents

Project subagents are expected in `.claude/agents/`:

| Subagent | Purpose |
|---------|---------|
| `seo-structure-reviewer` | Automatic read-only reviewer for SEO-sensitive implementation work |

## Local SEO implementation notes

Prefer the project's existing metadata architecture.

In this repository, public pages may use:
- `export const metadata`
- `generateMetadata`
- shared metadata helpers
- route-level metadata assets when appropriate

When structured data is justified, keep it small, accurate, and aligned with visible content.
