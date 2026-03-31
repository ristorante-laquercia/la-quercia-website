---
name: seo-finalize
description: Final Next.js App Router SEO implementation pass for a specific public route or the whole project. Run only when explicitly invoked.
argument-hint: "[route-path|file-path|all]"
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Edit, Write
---

# Purpose

Use this skill only for the **final SEO implementation pass** in a **Next.js App Router** project.

This is the **only SEO skill allowed to modify files**.
It may create or update page-level SEO implementation and project-level indexing assets **only when required by the target route or the global SEO surface**.

## Non-overlap rule

This skill may implement.
It must **not**:

- perform a repository-wide audit report
- perform accessibility review
- act as a proactive reviewer during unrelated work
- rewrite visible page copy beyond what is strictly needed for metadata quality
- invent product facts, business claims, addresses, prices, opening hours, ratings, legal statements, or publication dates

## Supported argument formats

Use `$ARGUMENTS` as the target.

Accepted targets:

- `all`
- a route path such as `/`, `/about`, `/services/web-design`, `/blog/my-post`
- a route path without leading slash such as `about`, `services/web-design`
- a concrete file path such as `app/about/page.tsx` or `src/app/about/page.tsx`

If `$ARGUMENTS` is omitted, do **not** guess unless the current route file is completely unambiguous from the active context.
If the target is ambiguous, stop and state exactly what needs to be passed.

## Target resolution

Resolve `$ARGUMENTS` carefully before editing anything.

For Next.js App Router projects, inspect these possible roots:

- `app/`
- `src/app/`

Map route input to the correct source file:

- `/` -> `app/page.tsx` or `src/app/page.tsx`
- `/about` -> `app/about/page.tsx` or `src/app/about/page.tsx`
- nested route `/services/web-design` -> corresponding nested `page.tsx`
- direct file input -> use that exact file

For route groups, parallel routes, and dynamic segments:

- inspect the real folder structure first
- resolve the user target to the actual public route
- if multiple candidates exist, stop and explain the ambiguity instead of editing the wrong file

## Minimum files to inspect

Before making changes, inspect the minimum relevant set:

- `CLAUDE.md`
- `app/layout.tsx` or `src/app/layout.tsx`
- the resolved target page file
- any layout file that materially affects the target route
- `app/sitemap.ts`, `app/sitemap.js`, `src/app/sitemap.ts`, or `src/app/sitemap.js` if present
- `app/robots.ts`, `app/robots.js`, `app/robots.txt`, `src/app/robots.ts`, `src/app/robots.js`, or `src/app/robots.txt` if present
- route-level metadata assets if present, such as `opengraph-image.*`, `twitter-image.*`, `icon.*`, or `apple-icon.*`
- local content/data sources that clearly drive the target route metadata

## Implementation rules

### 1) Respect the existing Next.js metadata architecture

Follow the project’s existing pattern whenever possible.

Allowed implementation shapes:

- `export const metadata`
- `export async function generateMetadata()`
- shared metadata helpers used by page or layout files
- route-level metadata file conventions where already in use

Do **not** introduce a second competing SEO pattern if the project already has a coherent one.

### 2) Page-level metadata

For the target route, ensure the SEO implementation is complete and coherent.

Always evaluate:

- `title`
- `description`
- canonical URL via `alternates.canonical` when appropriate
- `openGraph`
- `twitter`

Only add fields that fit the current project pattern and the target page.

Requirements:

- metadata must match visible content
- title must differentiate the route from other public pages
- description must be specific, useful, and non-spammy
- canonical must be absolute and production-safe
- social metadata should reuse existing project conventions where possible

### 3) Next.js metadata assets

When relevant to the target route or project setup, inspect and align with:

- route-level `opengraph-image.*`
- route-level `twitter-image.*`
- project-level icon files
- manifest usage when the project already supports it

Do not create new metadata asset systems unless the project clearly needs them.

### 4) JSON-LD

Add or update JSON-LD **only when semantically justified**.

JSON-LD is optional.
Use it only when:

- the page has a clear schema type
- the visible content supports the schema
- the implementation can remain small, accurate, and maintainable

Typical acceptable patterns:

- `WebPage`
- `BreadcrumbList`
- `Article` or `BlogPosting`
- `Product`
- `FAQPage`
- `Organization`
- `LocalBusiness`
- other route-specific schema types clearly supported by the page

Do not add JSON-LD as a blanket rule across all pages.

### 5) Sitemap

If the target route is public and indexable, ensure sitemap coverage is correct.

When a Next.js sitemap file exists, update it only when needed.
Check for:

- missing route entry
- wrong canonical URL shape
- obviously wrong `lastModified`
- obviously wrong `changeFrequency`
- obviously wrong `priority`

Do not add non-indexable, private, thank-you, utility, preview, auth, cart, checkout, dashboard, or API routes.

### 6) Robots

Update robots rules only when there is a real mismatch.

Examples:

- a public route is blocked by mistake
- a non-indexable section is exposed by mistake
- sitemap location is missing or stale where the project uses it

Do not touch robots simply to restate defaults.

### 7) Safe editing behavior

When editing:

- preserve existing code style and file structure
- preserve existing helpers unless they are clearly broken or redundant
- avoid touching unrelated routes
- keep changes minimal and focused
- leave precise TODO comments when required factual inputs are missing

## Output behavior

After changes, return a concise summary with:

- resolved target
- edited files
- what was implemented or updated
- whether JSON-LD was added and why
- sitemap impact
- robots impact
- missing inputs that prevented a stronger implementation

## Final reminder

This skill is the **manual implementation step**.
It should be invoked after page work is ready, not used as a general reviewer.
