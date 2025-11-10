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

**YMCA Website Services 11.1.0.0-beta3** brings compatibility with Drupal 11, released November 10, 2025. This is currently a **beta release** for early adopters and testing. A stable release is targeted for **Q4 2025**.

With beta3, major components including Activity Finder 6.0.0 and Memberships 3.1.0 now have full Drupal 11 support, marking significant progress toward production readiness.

### What's New in Drupal 11

From the [11.1.0.0-beta3 release notes](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0-beta3):

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

For complete release details, see [11.1.0.0-beta3 on GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0-beta3).

---

## Before You Upgrade

**Important:** This is a **beta release**. Only upgrade if:
- You're testing for bugs before the stable Q4 2025 release
- You have a staging environment for testing
- You're comfortable troubleshooting potential issues

**Most YMCAs should remain on Drupal 10** until the stable Drupal 11 release in Q4 2025.

---

## Prerequisites

Before upgrading to Drupal 11:

1. **Update to latest Drupal 10:** Ensure you're on Drupal 10.3.x or higher
2. **Upgrade PHP:** Update server to PHP 8.3 or higher
3. **Backup everything:** Database, files, and code
4. **Test on staging:** Never upgrade production directly

---

## Known Issues

### jQuery 3.x Script Compatibility

**Issue:** Drupal 11 uses jQuery 3.x, which breaks some legacy jQuery 1.x/2.x scripts.

**Solution:** As of version **11.1.0.0-alpha2**, YMCA Website Services includes jQuery Migrate to provide backward compatibility.

**What this means:**
- Legacy jQuery syntax (jQuery 1.x/2.x) continues to work with jQuery 3.x
- Custom JavaScript and third-party libraries maintain compatibility
- No immediate action required for most sites

**For developers with custom JavaScript:**
- Test your custom modules with jQuery 3.x
- Update deprecated jQuery methods when possible
- jQuery Migrate provides console warnings about deprecated code

**References:**
- [11.1.0.0-alpha2 release notes](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0-alpha2)
- [jQuery Migrate documentation](https://github.com/jquery/jquery-migrate)

---

## Getting Help

**Testing Drupal 11 beta?**
- Report bugs in the [GitHub issue queue](https://github.com/YCloudYUSA/yusaopeny/issues)
- Join [YMCA Website Services Slack](https://ycloud.y.org/slack) for community support
- Attend [monthly community calls](/blog/monthly-calls/) for Q&A

**Need professional assistance?**
- [Agency Partner Directory](https://ds.ymca.org/partners) - Find certified partners who can help with upgrades

---

## Additional Resources

- [Drupal Core Project](https://www.drupal.org/project/drupal)
- [Server Requirements](../server-requirements/)
- [Upgrade Guide for Developers](../openy-upgrade-how-to-for-developers/)
- [YMCA Website Services Releases](https://github.com/YCloudYUSA/yusaopeny/releases)
