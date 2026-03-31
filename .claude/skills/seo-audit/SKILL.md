---
name: seo-audit
description: Read-only SEO audit for a specific Next.js App Router route or for the whole public SEO surface.
argument-hint: "[route-path|file-path|all]"
disable-model-invocation: true
allowed-tools: Read, Grep, Glob
---

# Purpose

Use this skill to produce a **read-only SEO audit** for a **Next.js App Router** project.

This skill never edits files.
It reports issues, risks, inconsistencies, and recommended fix directions.

## Non-overlap rule

This skill audits.
It must **not**:

- edit files
- generate final implementation patches
- perform accessibility review
- duplicate the role of the proactive reviewer during active coding

## Supported argument formats

Use `$ARGUMENTS` as the target.

Accepted targets:

- `all`
- a route path such as `/`, `/about`, `/services/web-design`, `/blog/my-post`
- a route path without leading slash such as `about`, `services/web-design`
- a concrete file path such as `app/about/page.tsx` or `src/app/about/page.tsx`

If `$ARGUMENTS` is omitted, audit the primary public SEO surface inferred from the codebase.
Do not assume a project-specific page list in advance.

## Target resolution

Inspect these possible roots:

- `app/`
- `src/app/`

If a specific target is passed, resolve it to the exact route file first.
For route groups, parallel routes, and dynamic segments, inspect the real file structure and report any ambiguity.

## Files to inspect

Inspect the relevant combination of:

- `CLAUDE.md`
- `app/layout.tsx` or `src/app/layout.tsx`
- target page files or public route files
- relevant nested layouts
- `app/sitemap.ts`, `app/sitemap.js`, `src/app/sitemap.ts`, or `src/app/sitemap.js` if present
- `app/robots.ts`, `app/robots.js`, `app/robots.txt`, `src/app/robots.ts`, `src/app/robots.js`, or `src/app/robots.txt` if present
- route-level metadata assets such as `opengraph-image.*`, `twitter-image.*`, `icon.*`, `apple-icon.*`
- obvious shared SEO helpers if the project uses them

## What to evaluate

### 1) Metadata architecture

Check whether the route or project uses a coherent metadata strategy.

Review:

- page-specific title
- page-specific description
- canonical handling
- Open Graph coverage
- Twitter coverage
- layout defaults versus page overrides
- duplication risk across public routes
- mismatch between metadata and visible page intent

### 2) Next.js-specific implementation fit

Check whether the implementation fits App Router conventions cleanly.

Review:

- whether metadata lives in `metadata`, `generateMetadata`, or shared helpers coherently
- whether route-level metadata assets are used consistently
- whether page-level metadata duplicates layout values unnecessarily
- whether the current pattern is maintainable across routes

### 3) JSON-LD

Check whether structured data is:

- present where justified
- absent where it would be forced or semantically weak
- coherent with visible content
- implemented in a maintainable way

Do not treat missing JSON-LD as an automatic failure.

### 4) Sitemap and robots

Check whether:

- public indexable routes are represented correctly in the sitemap
- non-indexable routes are excluded appropriately
- `lastModified`, `changeFrequency`, and `priority` are sensible where used
- robots rules align with intended indexability
- sitemap location is exposed appropriately when the project uses that pattern

### 5) Project-level consistency

Review the overall public SEO surface for:

- title pattern collisions
- repeated descriptions
- weak route differentiation
- inconsistent canonical generation
- broken or missing social image references
- schema mismatch
- fragmented SEO architecture across the codebase

## Report format

Return a markdown report with:

1. `# SEO Audit Report`
2. `## Scope`
3. `## Executive summary`
4. `## Findings by route or file`
5. `## Project-level issues`
6. `## Priority fixes`

For each route or file, include:

- status: `OK`, `Needs fixes`, or `High priority`
- issues grouped by area
- file paths involved
- recommended fix direction

## Severity rules

Use these labels consistently:

- `High priority` for broken indexability, seriously misleading metadata, missing canonical on an indexable route, or clearly broken sitemap/robots behavior
- `Medium` for incomplete social metadata, weak differentiation, duplicated descriptions, or poor schema usage
- `Low` for refinements and opportunities

## Final reminder

This skill is for **inspection and reporting only**.
Do not convert the audit into code changes.
