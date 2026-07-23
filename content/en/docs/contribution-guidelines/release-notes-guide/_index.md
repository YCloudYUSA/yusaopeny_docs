---
title: "Release Notes Structure Guide"
linkTitle: "Release Notes Guide"
description: "Best practices for writing multi-audience release notes based on industry research"
keywords:
  - release-notes
  - changelog
  - structure
  - audiences
  - writing-guide
---

> This guide covers **how to write release notes**. For the **code release process** (tagging, `openy.info.yml` version bumps, mirror refresh, Slack announcements), see [Release Process]({{< relref "/docs/development/How-we-release-OpenY-distribution-from-code-perspective" >}}).

Research into how leading open source projects handle multi-audience release notes, comparing approaches and identifying best practices.

## How Leading Projects Do It

| Project | Approach | Persona handling |
|---------|----------|-----------------|
| **Next.js** | Blog post + separate upgrade guide | Sections flow from simple headlines → code examples → breaking changes table |
| **Laravel** | Single docs page with support policy | Code examples per feature + links to full docs |
| **Stripe** | API changelog with product filters | Product tags + "Breaking?" column — readers filter themselves |
| **GitLab** | One release post, PMs add sections via MRs | `## For Engineers`, `## For Operators` within one file |
| **Drupal core** | Per-issue snippets → consolidated by editor | Contributor writes snippet (knows their change best), editor assembles |

**Key pattern**: none of these projects create separate files per persona per release. They all use **one document** where sections progressively become more technical.

## Separate Files vs Sections Within One Document

Creating separate per-persona files for each release (e.g., `content-editor/release-X.md`, `developer/release-X.md`, `site-builder/release-X.md`, `decision-maker/release-X.md`) has clear strengths:

- Each audience sees only what's relevant to them
- Targeted language per persona
- Quantified metrics (67% faster, 93% less memory) — excellent communication

However, it introduces maintenance concerns:

- **Duplication**: The same facts are repeated across multiple files with different wording. Fixing an error means finding and updating it in multiple places.
- **Maintenance scale**: Every future release needs multiple coordinated documents.
- **No precedent**: None of the major projects researched (Next.js, Laravel, Stripe, GitLab, Drupal core) use separate files per persona per release.

## Recommended Structure

A structure that achieves persona targeting without duplication:

```
# Release X.Y.Z (YYYY-MM-DD)

## Summary (2-3 sentences — for everyone)

## What's New (feature highlights with anchor links — executives scan here)

## For Content Editors
- UI changes, new workflows, what changed in their daily work

## For Site Builders
- Config changes, Layout Builder updates, upgrade steps

## For Developers
- Breaking changes table (Was → Now → Migration)
- Code examples, API changes, removed modules

## Upgrade Instructions (copy-paste ready)

## Bug Fixes

## Full Changelog (link to GitHub release)
```

**Why this works:**
- **Single source of truth** — each fact exists once
- **Persona targeting** — each audience has a clear section to jump to
- **Shareable** — anchor links let you share direct URLs to each persona section
- **Maintainable** — one file to review, one file to fix errors in
- **Scales naturally** — adding a new release = one new file, not five

## Alternative: YAML Data + Hugo Templates

Since this documentation site uses Hugo, a more advanced zero-duplication approach is possible:

1. Store release facts in a data file (e.g., `data/releases/v11.3.1.0.yaml`)
2. Create Hugo templates that render persona-specific pages from the same data
3. Each persona page is auto-generated — zero manual duplication

This requires more upfront setup but eliminates duplication entirely.

## Technical Review Requirement

Developer-facing release notes contain API examples and code snippets. These **must be technically verified** before publication:

- Method signatures must match actual Drupal core and contrib module APIs
- Service names must exist in the service container
- Code examples must be runnable (not hypothetical)
- Breaking changes must reference actual change records

**Example of why this matters**: Release 11.3.1.0 developer docs referenced `$entity->delete(['force' => TRUE])` for the Trash module — this API does not exist. `EntityInterface::delete()` accepts zero parameters. The correct approach uses `TrashManager::executeInTrashContext()`.

## References

- [Next.js 16 Release](https://nextjs.org/blog/next-16) — single post, progressive technical detail
- [Laravel Upgrade Guide](https://laravel.com/docs/11.x/upgrade) — one doc, code examples per change
- [Stripe API Changelog](https://docs.stripe.com/changelog) — filterable by product area
- [GitLab Release Posts Handbook](https://handbook.gitlab.com/handbook/marketing/blog/release-posts/) — one post, PM-contributed sections
- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) — community standard format
- [Drupal Core Release Notes Policy](https://www.drupal.org/about/core/policies/maintainers/release-notes)
