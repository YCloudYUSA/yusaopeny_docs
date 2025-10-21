---
title: "Digital Services Release 11.1.0.0-beta2"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0-beta2)
date: 2025-10-20
---

## Important Upgrade Notice

<div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">⚠️ Package Migration Warning</h4>

If you're upgrading from **Open Y 9.2.11.3 or earlier** (package `ymcatwincities/openy`) to YUSA Open Y (package `ycloudyusa/yusaopeny`), you may encounter issues with profile and module paths.

**Before upgrading**, review the [Open Y to YUSA Open Y Migration Guide](/docs/development/openy-to-yusaopeny-migration/) to ensure a smooth transition.

**Symptoms of migration issues**:
- "Profile openy not found" errors
- openy_admin theme not loading
- Modules showing as missing
- "Class not found" errors after upgrade

**Quick Fix**:
```bash
drush cr
drush ev "drupal_flush_all_caches();"
drush updatedb -y
```

For detailed troubleshooting, see [GitHub Issue #5](https://github.com/YCloudYUSA/yusaopeny/issues/5) and [ITCR-978](https://jet-dev.atlassian.net/browse/ITCR-978).
</div>

---

## What's Changed

This beta2 release includes bug fixes and improvements to the Drupal 11 platform.

### Bug Fixes

- **Layout Builder Event Location Fix**: Creating lb_event without location data no longer causes 500 errors (#295)
- **Media Field in Layout Builder**: Fixed missing field when adding media in Layout Builder (#306)
- **Demo Content Updates**: Updated y_lb_demo_content module (#303)

### New Features

- **EXIF Orientation Module**: Automatically installed and enabled for proper image rotation (#304)

### Technical Improvements

- **PR Builder Updates**: Updated RoboFile.php for improved PR testing (#302)
- **Documentation Updates**: Improved developer and upgrade documentation (#305)

---

## Upgrade Path

### From Drupal 10.x

If you're on Drupal 10.x and want to test Drupal 11:

```bash
# Update composer.json to require Drupal 11
composer require ycloudyusa/yusaopeny:11.1.0.0-beta2 --with-all-dependencies

# Run database updates
drush updatedb -y

# Clear caches
drush cr
```

### From 11.1.0.0-beta1

Standard upgrade process:

```bash
composer require ycloudyusa/yusaopeny:11.1.0.0-beta2 --with-all-dependencies
drush updatedb -y
drush cr
```

### From Old Open Y (ymcatwincities/openy)

**Critical**: Follow the [Open Y to YUSA Open Y Migration Guide](/docs/development/openy-to-yusaopeny-migration/) first, then upgrade to 11.1.0.0-beta2.

---

## Known Issues

### Profile Path Migration

Sites upgrading from `ymcatwincities/openy` to `ycloudyusa/yusaopeny` may experience path-related issues. See migration guide above for detailed resolution steps.

### jQuery 3.x Compatibility

Drupal 11 uses jQuery 3.x. YMCA Website Services includes jQuery Migrate for backward compatibility, but custom JavaScript should be tested. See [11.1.0.0-beta1 release notes]({{< relref "release-ds-11.1.0.0-beta1" >}}) for details.

---

## Testing and Feedback

This is a **beta release** intended for testing. Please report any issues:

- [GitHub Issue Queue](https://github.com/YCloudYUSA/yusaopeny/issues)
- [YMCA Website Services Slack](https://ycloud.y.org/slack) #support channel
- [Monthly Community Calls](/blog/monthly-calls/)

---

## Complete Changelog

View all changes: [11.1.0.0-beta1 → 11.1.0.0-beta2](https://github.com/YCloudYUSA/yusaopeny/compare/11.1.0.0-beta1...11.1.0.0-beta2)

**Pull Requests Included**:
- #302 - Update RoboFile.php for PR builder
- #303 - Update y_lb_demo_content module
- #304 - Install and enable module exif_orientation
- #295 - Fix: creating an lb_event without location data causes a 500
- #305 - Documentation updates
- #306 - D11 - Missing field when adding media in Layout Builder

---

**Release Date**: October 20, 2025
**Status**: Beta
**Target Audience**: Early adopters, testers, staging environments
**Production Readiness**: Not recommended for production (stable release Q4 2025)
