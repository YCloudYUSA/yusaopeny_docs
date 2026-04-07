---
title: Drupal 11 Migration Guide
description: Upgrade YMCA Website Services from Drupal 10 to Drupal 11.
aliases:
  - /docs/development/drupal-11-upgrade/
tags:
  - "Drupal 11"
  - "Upgrade"
---

## Overview

**YMCA Website Services 11.3.1.0** is the latest stable release, bringing Drupal core 11.3.3, major performance improvements, and significant architectural changes. The first Drupal 11 release was 11.1.0.0 (November 18, 2025).

All major components including Activity Finder 6.0.0 and Memberships 3.1.0 have full Drupal 11 support, making this release production-ready.

### What's New in 11.3.1.0

From the [11.3.1.0 release](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.0):

**Major Platform Upgrades:**
- Drupal core 11.1.9 → 11.3.3
- Entity Browser replaced by Media Library for all media fields
- Google Analytics module removed, replaced by Google Tag
- Trash module (`drupal/trash`) enabled by default
- Media Tags new vocabulary replacing `media_directories`
- Y Styles expanded to Landing Page, Event, Article, Reusable blocks
- Global table styles for CKEditor content
- 67% faster installation, 93% less memory usage
- PHP 8.4/8.5 deprecation fixes (256K messages/day eliminated)
- Breadcrumb cache fix (removed max-age=0)
- AVIF GD extension now required

**Removed/Deprecated in 11.3.1.0:**
- `google_analytics` module (replaced by `google_tag`)
- `entity_browser`, `dropzonejs_eb_widget`, `entity_browser_entity_form` (replaced by Media Library)
- GroupEx Pro deprecated (`groupex_form_cache`, `openy_group_schedules`, `openy_gxp` auto-uninstalled)
- `history` module removed
- `doctrine/annotations` and `psr/cache` removed

**Previously Removed in 11.1.0.0:**
- `ckeditor` (replaced by CKEditor 5)
- `ckeditor5_font` module
- `inline_entity_menu_form` module
- `bartik` and `seven` themes
- `panelbutton` module

**Major Package Version Bumps:**
- 17 Layout Builder block packages received major version bumps (e.g., `lb_cards` 2.2.1→3.0.0, `lb_hero` 1.5.4→2.0.2)
- 5 theme packages updated (e.g., `ws_colorway_canada` 1.3.2→2.0.1, `ws_event` 1.5.7→2.0.1)
- 6 content type packages updated (e.g., `y_camp` 2.1.0→3.0.0, `y_lb_article` 1.3.4→2.0.1)
- Core infrastructure: `field_group` 3.6.0→4.0.0, `openy_features` 4.2.0→5.0.5, `y_lb` 4.0.6→5.0.4

For complete release details, see:
- **[Full Drupal 11 Changelog]({{< relref "/docs/development/drupal-11-changelog" >}})** - Comprehensive feature and package changes
- **[11.3.1.0 on GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.0)**
- **[11.1.0.0 on GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0)**

---

## Before You Upgrade

**Production Ready:** Version 11.3.1.0 is the latest **stable release** suitable for production use. However:

- **Always test first:** Upgrade staging/testing environments before production
- **Create backups:** Ensure you have complete backups before upgrading
- **Review changes:** See the [Full Changelog]({{< relref "/docs/development/drupal-11-changelog" >}}) for detailed changes
- **Plan accordingly:** Major version upgrades require planning and testing
- **AVIF support required:** Ensure the GD extension has AVIF support enabled on your server

---

## Critical: Upgrade Path Requirement

**IMPORTANT:** You must upgrade to **11.1.0.2** first before upgrading to 11.3.x. Direct upgrades from 10.x to 11.3 are not supported.

### Required Upgrade Sequence

1. Upgrade to **11.1.0.2** from your current Drupal 10 version
2. Run database updates (`drush updb --no-cache-clear -y && drush cr`)
3. Verify site stability on 11.1.0.2
4. Then upgrade to **11.3.1.0**
5. Run database updates again

---

## Critical: Google Analytics Module Removed

**IMPORTANT:** As of 11.3.1.0, the `google_analytics` module has been **removed** and replaced by `google_tag`. If you are upgrading from a version that uses `google_analytics`, you must migrate before or during the upgrade to 11.3.

### Why This Matters

- The `google_analytics` module has been removed from the distribution
- The `google_tag` module is the replacement
- 11.1.x is the last version where both modules coexist, providing a migration path

### If You Skip This Step

If you upgrade directly to 11.3 without migrating:
- Your existing Google Analytics configuration will be lost
- You will need to manually reconfigure tracking via `google_tag`

### Recommended Approach

1. Upgrade to 11.1.0.2 first
2. Migrate from `google_analytics` to `google_tag` module
3. Verify analytics tracking is working
4. Then proceed to 11.3.1.0

---

## Critical: Entity Browser Replaced by Media Library

As of 11.3.1.0, **Entity Browser** has been fully replaced by **Media Library** for all media fields. The packages `dropzonejs_eb_widget`, `entity_browser_entity_form`, and `entity_browser` have been removed.

This migration happens automatically via database updates, but you should verify that all media fields function correctly after upgrading.

---

## GroupEx Pro Deprecated

The following GroupEx Pro modules are **auto-uninstalled** in 11.3.1.0:
- `groupex_form_cache`
- `openy_group_schedules`
- `openy_gxp`

If your site relies on GroupEx Pro scheduling, plan a migration to an alternative before upgrading.

---

## Prerequisites

Before upgrading to Drupal 11:

1. **Update to latest Drupal 10:** Ensure you're on Drupal 10.3.x or higher
2. **Upgrade PHP:** Update server to PHP 8.3 or higher
3. **Enable AVIF in GD:** The GD extension must have AVIF support (required for 11.3+)
4. **Backup everything:** Database, files, and code
5. **Test on staging:** Never upgrade production directly
6. **Plan for module removals:** Review the Entity Browser, Google Analytics, and GroupEx Pro sections above

---

## Upgrade Process for Drupal 11.x

### Critical: Database Update Command Order

**Issue:** Starting with Drupal 11.1, the database schema includes new columns (e.g., `router.alias`). Running `drush cr` before `drush updb` will fail because the code expects columns that don't exist yet in the database.

**Error Example:**
```
SQLSTATE[42S22]: Column not found: 1054 Unknown column 'alias' in 'INSERT INTO'
```

**Solution:** Use `--no-cache-clear` flag with `drush updb` and run cache rebuild after:

```bash
# 1. Import database (if migrating from another environment)
drush sql:drop -y
drush sql:cli < database-dump.sql

# 2. Run database updates WITHOUT cache clear
drush updb --no-cache-clear -y

# 3. Clear cache AFTER schema is updated
drush cr
```

**Why This Works:**
- `--no-cache-clear` prevents Drupal from rebuilding caches during `updb`
- Database schema updates (like adding `router.alias` column) complete first
- Cache rebuild then works because schema is up-to-date

**References:**
- [Drush updatedb documentation](https://www.drush.org/13.x/commands/updatedb/)
- [Drupal upgrade guide](https://www.drupal.org/docs/upgrading-drupal)

---

## Known Issues

### jQuery 4.x Script Compatibility

**Issue:** Drupal 11 uses jQuery 4.x, which may affect some legacy jQuery scripts.

**Solution:** As of version **11.1.0.0-alpha2**, YMCA Website Services includes jQuery Migrate to provide backward compatibility.

**What this means:**
- Legacy jQuery syntax (jQuery 1.x/2.x/3.x) continues to work with jQuery 4.x via jQuery Migrate
- Custom JavaScript and third-party libraries maintain compatibility
- No immediate action required for most sites

**For developers with custom JavaScript:**
- Test your custom modules with jQuery 4.x
- Update deprecated jQuery methods when possible
- jQuery Migrate provides console warnings about deprecated code

**References:**
- [11.1.0.0-alpha2 release notes](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0-alpha2)
- [jQuery Migrate documentation](https://github.com/jquery/jquery-migrate)

---

## Getting Help

**Upgrading to Drupal 11?**
- Review the [Full Changelog]({{< relref "/docs/development/drupal-11-changelog" >}}) for detailed information
- Report bugs in the [GitHub issue queue](https://github.com/YCloudYUSA/yusaopeny/issues)
- Join [YMCA Website Services Slack](https://ycloud.y.org/slack) for community support (#support channel)
- Attend [monthly community calls](/blog/monthly-calls/) for Q&A

**Need professional assistance?**
- [Agency Partner Directory](https://ds.ymca.org/partners) - Find certified partners who can help with upgrades

---

## Additional Resources

- [Drupal Core Project](https://www.drupal.org/project/drupal)
- [Server Requirements](../server-requirements/)
- [Upgrade Guide for Developers](../openy-upgrade-how-to-for-developers/)
- [YMCA Website Services Releases](https://github.com/YCloudYUSA/yusaopeny/releases)
- [11.3.1.0 Release](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.0)
