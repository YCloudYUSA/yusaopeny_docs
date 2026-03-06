---
title: "Digital Services Release 11.3.1.0 - Stable-before-2026"
description: Major release upgrading to Drupal 11.3 with massive performance improvements and modernized infrastructure. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.0)
date: 2026-03-04
---

**This major "Stable-before-2026" release delivers significant performance gains, removes technical debt, and modernizes the platform for long-term stability through 2030.**

## 🎯 At a Glance

- **67% faster installations** (537s → 180s)
- **93% less memory usage** (4.38GB → 326MB)
- **Drupal Core** upgraded from 11.1.9 to 11.3.3
- **PHP 8.4/8.5** fully compatible (eliminated ~256K deprecation warnings/day)
- **30+ production sites** successfully validated

---

## 📰 Persona-Based Release Notes

This release includes detailed guides for each audience:

- **[Content Editors](/docs/content-editor/release-11.3.1.0/)** - Media Tags system, Trash functionality, and workflow improvements
- **[Site Builders](/docs/site-builder/release-11.3.1.0/)** - Configuration changes, Layout Builder updates, and migration tasks
- **[Developers](/docs/developer/release-11.3.1.0/)** - Breaking changes, PHP 8.4 compatibility, and performance architecture
- **[Decision Makers](/docs/decision-maker/release-11.3.1.0/)** - ROI analysis, risk assessment, and strategic value

---

## 🚀 Major Features

### Drupal 11.3 Support
All 71 pull requests across GitHub and drupal.org repositories ensure compatibility. Every Layout Builder block, theme, and content type received major version updates.

### Performance Enhancements
- **Installation time:** Reduced from 537 seconds to 180 seconds
- **Memory consumption:** Dropped from 4.38 GB to 326 MB
- **MenuTreeStorage optimization:** 50% fewer SELECT queries
- **Route rebuild optimization:** Minimizes unnecessary rebuilds during module installation
- **Breadcrumb caching fix:** Removes max-age=0 restrictions

### Media Tags System
Replaces folder-based organization with hierarchical tag structure. Features hierarchical tree display, badge/chip UI, and autocomplete multi-select capabilities with automatic migration from legacy media directories.

### Trash Module
New soft-delete functionality enabled by default, allowing content recovery instead of permanent deletion.

### CKEditor & Y Styles Improvements
- Expanded Y Styles support across Landing Pages, Events, and Articles
- Global table styling consistency
- Balloon tooltip positioning fixes in Layout Builder dialogs

---

## 🔄 Critical Migrations

### Entity Browser → Media Library
All media fields migrated from `entity_browser` to core `media_library_widget` across 34 modules. Custom sites must remove entity_browser permissions and update form configurations.

### Google Analytics → Google Tag
Mandatory migration required before upgrading. Configure Google Tag module with GA4 measurement IDs at `/admin/config/services/google_tag`.

### GroupEx Pro Deprecation
GroupEx API discontinued; deprecated modules auto-uninstall during database updates.

---

## 🗑️ Removed Components

- **entity_browser** ecosystem (5 modules)
- **google_analytics** module
- **history** module
- **media_directories** system
- **GroupEx Pro** modules (5 modules)

**Total:** 11 modules removed, 1 new module added (trash)

---

## 🔧 Upgrade Requirements

**Prerequisites:**
- Must update to **11.1.0.2** before upgrading to 11.3.1.0
- **AVIF GD extension** required for image support
- **Google Tag** configuration needed (GA4 measurement IDs)

**Upgrade Path:**
```bash
# Ensure you're on 11.1.0.2 first
composer require yusaopeny/yusaopeny:11.3.1.0
drush updatedb -y
drush cr
```

---

## 📊 Release Statistics

- **71 merged** pull/merge requests
- **64 releases** published
- **35 packages** updated
- **11 modules** removed
- **1 new module** added (trash)
- **30+ production sites** successfully upgraded

---

## 🔗 Additional Resources

- **Full Release Notes:** [GitHub Release](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.0)
- **Upgrade Guide:** See persona-specific documentation above
- **Pre-Upgrade Checklist:** Available in repository
- **Community Support:** [YUSA Slack](https://ycloud-usa.slack.com/)

---

## 💬 Need Help?

- Review the [persona-specific guides](/blog/releases/release-ds-11.3.1.0/#persona-based-release-notes) for detailed instructions
- Check the [troubleshooting documentation](/docs/troubleshooting/)
- Ask questions in the community Slack channels
- File issues on [GitHub](https://github.com/YCloudYUSA/yusaopeny/issues)

