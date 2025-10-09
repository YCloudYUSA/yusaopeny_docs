# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the documentation repository for YMCA Website Services (formerly Open Y), a Drupal distribution for YMCA organizations. The site is built using Hugo static site generator with the Docsy theme and is deployed at https://ds-docs.y.org/.

## Key Commands

> **📖 See LOCAL_PREVIEW_GUIDE.md for detailed instructions on previewing changes and deployment**

### Development Server
```bash
hugo server
# Runs local development server at http://localhost:1313

# Or using Docker (no Hugo installation required)
docker-compose up --build
# Also runs server at http://localhost:1313
```

### Building
```bash
hugo --minify
# Builds the site to ./public directory
hugo --gc --minify --buildFuture
# Build with future-dated content (for previewing release notes)
```

### Docker Development
```bash
docker-compose up --build
# Runs Hugo server in Docker container at http://localhost:1313
docker-compose rm
# Clean up Docker containers
```

### Dependencies
```bash
npm install
# Install PostCSS dependencies for SCSS compilation
npm ci
# Clean install (used in CI/CD)
```

## Architecture

### Hugo Module Structure

This repository uses Hugo modules for theme management:
- **Theme**: Google's Docsy theme (`github.com/google/docsy`)
- **Hugo version**: 0.139.4 (extended version required)
- **Go version**: 1.22.3
- Uses Go modules (`go.mod`) with read-only vendor mode (`GOFLAGS="-mod=readonly"`)

### Content Organization

All content is in English under `content/en/`:
- **docs/development/** - Developer documentation, upgrade guides, processes
- **docs/user-documentation/** - End-user guides
- **docs/howto/** - How-to guides
- **docs/content-structure/** - Content structure documentation
- **docs/contribution-guidelines/** - Contribution guides
- **docs/assets/** - Asset management
- **docs/glossary/** - Terminology
- **blog/releases/** - Release notes
- **blog/monthly-calls/** - Monthly community call notes
- **blog/news/** - News and announcements
- **ui-kit/** - UI component documentation
- **roadmap/** - Product roadmap
- **community/** - Community resources

### Configuration

- **config.toml** - Main Hugo configuration including:
  - Site metadata and URLs
  - Algolia search configuration (appId: IKYHW432S0, indexName: ds-y)
  - Google Analytics (G-3GMSKCY94X)
  - Navigation and UI settings
  - GitHub repository links (main repo: YCloudYUSA/yusaopeny, docs repo: YCloudYUSA/yusaopeny_docs)
  - Docsy theme parameters

### Custom Layouts and Partials

- **layouts/partials/** - Custom Docsy theme overrides
- **layouts/shortcodes/** - Custom Hugo shortcodes for content
- **layouts/_default/** - Default layout templates
- **layouts/blog/** - Blog post layouts

### Deployment

**Production (main branch):**
- GitHub Actions workflow (.github/workflows/gh-pages.yml)
- Deploys to GitHub Pages on push to main branch
- Uses Hugo 0.139.4 extended

**Preview (Netlify):**
- Configured via netlify.toml
- Preview deployments with future posts: `hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL -e development`
- All builds use development environment to prevent indexing

### GitInfo and Last Modified

GitInfo is enabled (`enableGitInfo = true`) to automatically show last modified dates on documentation pages. Always fetch full history when checking out (`fetch-depth: 0` in CI).

## File Naming Conventions

- Use lowercase with hyphens for file names
- Main section pages: `_index.md`
- Hugo uses front matter for page metadata (title, weight, aliases)
- Weight determines sort order in menus (lower numbers appear first)

## Important Notes

- **Extended Hugo required**: The standard Hugo binary will not work due to SCSS processing
- **Go installation required**: Hugo modules require Go to be installed
- **Submodules**: This repo uses Hugo modules instead of git submodules for theme management
- **Vendor directory**: Used by Composer; Go is configured to ignore it with `GOFLAGS="-mod=readonly"`
- **Timeout**: Increased to 60 seconds for large site builds
- **Related repositories**:
  - Main distribution code: https://github.com/YCloudYUSA/yusaopeny
  - Main website: https://ds.ymca.org/
  - Community forum: https://community.ycloud.y.org

## Content Guidelines

When editing documentation:
- Use Hugo shortcodes like `{{< relref "page-name" >}}` for internal links
- Front matter should include at minimum: `title` and optionally `weight` for ordering
- Follow existing documentation structure in content/en/docs/
- Release notes go in content/en/blog/releases/
- Use Markdown with Hugo/Docsy extensions
