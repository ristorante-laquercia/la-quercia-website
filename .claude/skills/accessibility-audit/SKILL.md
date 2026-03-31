---
name: accessibility-audit
description: Read-only accessibility audit for a specific Next.js App Router route, file, or component set.
argument-hint: "[route-path|file-path|glob|all]"
disable-model-invocation: true
allowed-tools: Read, Grep, Glob
---

# Purpose

Use this skill to produce a **read-only accessibility audit** for a **Next.js App Router** project.

This skill never edits files and never performs SEO review.

## Non-overlap rule

This skill audits accessibility only.
It must **not**:

- perform SEO checks
- modify files
- duplicate repository-wide SEO reporting
- act as the proactive SEO reviewer

## Supported argument formats

Use `$ARGUMENTS` as the target.

Accepted targets:

- `all`
- a route path such as `/`, `/contact`, `/products/widget-a`
- a concrete file path such as `app/contact/page.tsx`, `src/app/contact/page.tsx`, or `components/hero.tsx`
- a glob-like target when clearly meaningful, such as `components/forms/**` or `app/**/page.tsx`

If `$ARGUMENTS` is omitted, inspect the core public UI surface first:

- route pages
- layouts
- shared interactive components
- form components
- navigation components

## Files to inspect

Inspect the relevant combination of:

- `app/**/*.tsx` or `src/app/**/*.tsx`
- `components/**/*.tsx`
- local UI wrapper components used by those files
- related styles or utility files only when they affect accessibility materially

## What to evaluate

### 1) Semantic structure

Check for:

- one meaningful `<h1>` per page
- heading order that reflects content hierarchy
- usable landmark structure such as `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, and `<article>` where appropriate
- semantic elements instead of layout-only misuse

### 2) Images and media

Check for:

- meaningful `alt` text on informative images
- empty `alt` only for decorative images
- accessible names for icon-only controls
- media behavior that may create readability or control issues

### 3) Links, buttons, and interactive controls

Check for:

- descriptive link text
- proper button semantics
- clickable non-semantic elements used as controls
- keyboard operability for interactive behavior
- visible focus treatment

### 4) Forms

Check for:

- programmatic labels
- required state communicated accessibly
- error messaging wired clearly
- placeholders not used as label replacements
- submit controls with clear intent

### 5) ARIA and keyboard patterns

Check for:

- redundant or misleading ARIA
- `aria-hidden` on focusable content
- broken `aria-expanded` or `aria-controls` relationships
- suspicious positive `tabIndex`
- focus traps or suppression patterns that may harm keyboard use

### 6) Contrast risk review

Flag likely contrast risks visible from the code or token usage.
Do not claim exact contrast failures unless they are obvious from implementation details.

## Report format

Return a markdown report with:

1. `# Accessibility Audit Report`
2. `## Scope`
3. `## Executive summary`
4. `## Findings by file`
5. `## Priority fixes`

For each finding include:

- severity: `Critical`, `Warning`, or `Suggestion`
- file path
- nearest relevant code location when practical
- issue description
- recommended fix direction

## Severity rules

- `Critical`: likely blocks keyboard use, screen reader understanding, or form completion
- `Warning`: materially degrades accessibility
- `Suggestion`: worthwhile improvement or best-practice refinement

## Final reminder

This skill is accessibility-only and read-only.
