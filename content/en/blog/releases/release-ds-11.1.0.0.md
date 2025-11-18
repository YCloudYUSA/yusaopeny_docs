---
title: "Digital Services Release 11.1.0.0 - Drupal 11 Stable"
description: The first stable Drupal 11 release of YMCA Website Services. Full changelog available in the documentation.
date: 2025-11-18
---

## 🎉 Drupal 11 Stable Release

We're excited to announce the **first stable release** of YMCA Website Services with Drupal 11 support! Version 11.1.0.0 marks a major milestone in the platform's evolution, bringing improved performance, modern architecture, and enhanced capabilities for YMCA organizations.

This release represents months of work upgrading the entire platform from Drupal 10 to Drupal 11, including all contributed modules, custom components, and integrations.

---

## Key Highlights

### Platform Modernization

- **Drupal 11 Core**: Full compatibility with Drupal 11.1.9, ensuring long-term security and support
- **PHP 8.3+ Support**: Modern PHP support with Symfony 7 integration for better performance
- **jQuery 4.x**: Updated JavaScript libraries with jQuery Migrate for backward compatibility

### Strategic Capabilities

- **Recipes Subsystem**: New architectural feature enabling faster, standardized deployment of pre-configured features across sites
- **Enhanced Email Integrations**: Expanded mailer support including Azure, Postal, Mailtrap, and MicrosoftGraph
- **Icon Management API**: New system for managing and using consistent SVG icons across your site

### Content Editor Improvements

- **Workspace Enhancements**: Critical fixes for content staging and draft management
- **Form Building**: Native Bootstrap support in Webforms with improved validation
- **Media Library Fixes**: Resolved selection reset issues and improved Layout Builder media handling
- **Navigation Improvements**: Fixed menu link visibility and logo display issues

### Component Updates

This release includes major version updates for critical components:

- **Activity Finder 6.0.0**: Full Drupal 11 compatibility for program search and registration
- **Memberships 3.1.0**: Drupal 11 compatibility fixes for membership builder
- **Multiple Layout Builder modules**: Description field fixes and component improvements

---

## What Changed

The upgrade from 10.5.0.1 to 11.1.0.0 includes:

- **161 Total Package Changes**
- **59 Added Packages**
- **90 Updated Packages**
- **12 Removed Packages**

### By Category

- **Drupal Core**: Updated 2 packages, removed 2 deprecated packages
- **Drupal Contributed Modules**: Added 42, updated 30, removed 9
- **PHP Libraries**: Added 17, updated 58, removed 1

---

## Full Changelog

For a comprehensive breakdown of all changes organized by user persona (Content Editors, Site Builders, Developers, Decision Makers), see the complete changelog:

**[📋 View Full Drupal 11 Changelog]({{< relref "/docs/development/drupal-11-changelog" >}})**

The full changelog includes detailed information about every package change, organized by who will care about each update.

---

## Upgrade Path

### Prerequisites

Before upgrading to Drupal 11:

1. **Current Version**: Ensure you're on Drupal 10.3.x or higher
2. **PHP Version**: Upgrade to PHP 8.3 or higher
3. **Backup**: Create complete backups of database, files, and code
4. **Test Environment**: Always test upgrades in staging first

### Upgrading from Drupal 10.x

```bash
# Update composer.json to require Drupal 11
composer require ycloudyusa/yusaopeny:11.1.0.0 --with-all-dependencies

# Run database updates
drush updatedb -y

# Clear caches
drush cr
```

### Upgrading from 11.1.0.0-beta Releases

Standard upgrade process:

```bash
composer require ycloudyusa/yusaopeny:11.1.0.0 --with-all-dependencies
drush updatedb -y
drush cr
```

---

## Known Issues

### jQuery Compatibility

Drupal 11 uses jQuery 4.x. YMCA Website Services includes jQuery Migrate for backward compatibility with legacy jQuery code. Custom JavaScript should be tested to ensure compatibility.

See the [Drupal 11 Migration Guide]({{< relref "/docs/development/drupal-11-migration" >}}) for details.

---

## Removed Modules

The following modules were removed as part of the Drupal 11 upgrade:

- `ckeditor` (replaced by CKEditor 5)
- `ckeditor5_font` module
- `inline_entity_form` module (for old versions)
- `bartik` and `seven` themes
- `panelbutton` module
- `drupal/features` dependency

See the [full changelog]({{< relref "/docs/development/drupal-11-changelog" >}}) for details on alternatives and migration paths.

---

## Getting Help

**Production Deployments:**
- Review the [Drupal 11 Migration Guide]({{< relref "/docs/development/drupal-11-migration" >}})
- Join [YMCA Website Services Slack](https://ycloud.y.org/slack) #support channel
- Attend [monthly community calls](/blog/monthly-calls/)

**Need Professional Assistance?**
- [Agency Partner Directory](https://ds.ymca.org/partners) - Find certified partners for upgrade support

**Report Issues:**
- [GitHub Issue Queue](https://github.com/YCloudYUSA/yusaopeny/issues)

---

## Complete Release Information

View all technical details and pull requests on GitHub:

- **[GitHub Release 11.1.0.0](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0)**
- **[Full Changelog on GitHub](https://github.com/YCloudYUSA/yusaopeny/compare/10.5.0.0...11.1.0.0)**
- **[Comprehensive Feature Report]({{< relref "/docs/development/drupal-11-changelog" >}})**

---

## Pull Requests Included

This release includes contributions from the entire YMCA Website Services team:

- #253 - Introduce ws_outsiders
- #255, #256, #231, #250 - Drupal 11 upgrade staged changes
- #267 - Update dependencies
- #269, #272 - Remove ckeditor5_font
- #270 - Add core composer scaffold
- #273 - Update openy_custom for Drupal 11
- #274 - Add migrate_tools patch
- #286 - Update to Drupal 11.1.8
- #288 - Fix MediaLibrary CSS class
- #289 - Add jQuery Migrate for compatibility
- #292 - Fix camp menu block
- #293, #296 - Upgrade path bug fixes
- #303 - Enable exif_orientation module
- #304, #295, #306 - Layout Builder fixes
- #307 - Add GitHub templates
- #308 - Update openy_gtranslate to 2.0.0
- #309 - Remove failing patches
- #310 - Fix demo content
- #313 - Update Activity Finder to 6.0.0
- #315 - Remove drupal/features dependency

---

**Release Date**: November 18, 2025
**Status**: Stable
**Target Audience**: All production YMCA sites
**Production Readiness**: ✅ Production ready

Thank you to everyone who contributed to this major release!
