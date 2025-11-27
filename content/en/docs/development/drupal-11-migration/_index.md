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

**YMCA Website Services 11.1.0.0** is the first **stable release** with Drupal 11 compatibility, released November 18, 2025. This release brings modern architecture, improved performance, and enhanced capabilities for YMCA organizations.

All major components including Activity Finder 6.0.0 and Memberships 3.1.0 have full Drupal 11 support, making this release production-ready.

### What's New in Drupal 11

From the [11.1.0.0 stable release](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0):

**Major Platform Upgrades:**
- Drupal 11 core upgrade
- PHP 8.3+ requirement (Symfony 7 integration)
- Composer-only module management (module upload UI removed)

**New Development Features:**
- Single Directory Components (SDC) for streamlined UI component development
- Object-Oriented Hooks (class-based hooks replacing procedural)
- New Icon Management API
- Native WebP image support

**Content Editor Improvements:**
- Project Browser for visual module installation
- Workspaces module for content staging
- Experimental new admin navigation system

**Removed/Deprecated:**
- `ckeditor` (replaced by CKEditor 5)
- `ckeditor5_font` module
- `inline_entity_menu_form` module
- `bartik` and `seven` themes
- `panelbutton` module

For complete release details, see:
- **[11.1.0.0 Release Notes]({{< relref "/blog/releases/release-ds-11.1.0.0" >}})**
- **[Full Drupal 11 Changelog]({{< relref "/docs/development/drupal-11-changelog" >}})** - Comprehensive feature and package changes
- **[11.1.0.0 on GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0)**

---

## Before You Upgrade

**Production Ready:** Version 11.1.0.0 is a **stable release** suitable for production use. However:

- **Always test first:** Upgrade staging/testing environments before production
- **Create backups:** Ensure you have complete backups before upgrading
- **Review changes:** See the [Full Changelog]({{< relref "/docs/development/drupal-11-changelog" >}}) for detailed changes
- **Plan accordingly:** Major version upgrades require planning and testing

---

## ⚠️ Critical: Google Tag Module and Drupal 11.1

**IMPORTANT:** YMCA Website Services upgrades **directly to Drupal 11.1** (not 11.0). This is crucial for Google Analytics functionality.

### Why This Matters

The **Drupal 11.1** release is the last version that includes the `google_tag` module. This module is critical for:
- Migrating existing Google Analytics configurations
- Restoring Google Analytics functionality after upgrade
- Maintaining tracking and analytics continuity

### Without Upgrading to 11.1

If you skip to Drupal 11.2 or later versions:
- ❌ The `google_analytics` module will not be available
- ❌ Google Analytics configuration cannot be migrated properly
- ❌ Analytics tracking may be lost or require manual reconfiguration

### Upgrade Sequence

1. ✅ Upgrade directly to Drupal 11.1 (via YMCA Website Services 11.1.0.0)
2. ✅ Verify Google Analytics configuration is working
3. ✅ Only then proceed to newer point releases (11.2+)

This ensures the `google_tag` module handles the migration before it's removed in later versions.

---

## Prerequisites

Before upgrading to Drupal 11:

1. **Update to latest Drupal 10:** Ensure you're on Drupal 10.3.x or higher
2. **Upgrade PHP:** Update server to PHP 8.3 or higher
3. **Backup everything:** Database, files, and code
4. **Test on staging:** Never upgrade production directly

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
