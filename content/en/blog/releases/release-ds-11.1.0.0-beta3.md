---
title: "Digital Services Release 11.1.0.0-beta3"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0-beta3)
date: 2025-11-10
---

## What's Changed

This beta3 release focuses on patch cleanup, dependency updates, and component improvements as we approach the stable Drupal 11 release in Q4 2025.

### Core Improvements

- **Patch Cleanup**: Removed 8 failing patches that were fixed or merged upstream (#309)
- **Translation Module Update**: Updated drupal/openy_gtranslate to 2.0.0 (#308)
- **Demo Content Fix**: Fixed Partners block logo display issue (#310)

### Developer Experience

- **GitHub Templates**: Added comprehensive issue and PR templates for better contribution workflow (#307)

### Component Updates

This release includes important updates to key components that enhance Drupal 11 compatibility:

- **y_lb 3.10.8**: Fixed missing level-3 menu title on desktop
- **openy_custom 2.8.0**: Replaced deprecated jQuery dependencies
- **Activity Finder 5.4.0-5.4.1**: Migrated build tools and fixed time slot issue
- Multiple Layout Builder modules received description field fixes

---

## Major Component Releases

Two critical components reached major milestones with this release, marking significant progress toward Drupal 11 production readiness:

### Activity Finder 6.0.0

The Activity Finder module reached version 6.0.0 with full Drupal 11 support. This major version release ensures the activity finder functionality is fully compatible with Drupal 11, providing organizations with program search and registration capabilities on the latest Drupal platform.

- **Repository**: [yusaopeny_activity_finder](https://github.com/YCloudYUSA/yusaopeny_activity_finder)
- **Release**: [6.0.0](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/6.0.0)
- **Key Change**: Complete Drupal 11 compatibility

### Memberships 3.1.0

The Memberships module received important Drupal 11 compatibility fixes in version 3.1.0, ensuring the membership builder works seamlessly with Drupal 11.

- **Repository**: [yusaopeny_memberships](https://github.com/YCloudYUSA/yusaopeny_memberships)
- **Release**: [3.1.0](https://github.com/YCloudYUSA/yusaopeny_memberships/releases/tag/3.1.0)
- **Key Change**: Drupal 11 compatibility fixes for membership builder

These component updates represent the final major features required for Drupal 11 production readiness.

---

## Upgrade Path

### From Drupal 10.x

If you're on Drupal 10.x and want to test Drupal 11:

```bash
# Update composer.json to require Drupal 11
composer require ycloudyusa/yusaopeny:11.1.0.0-beta3 --with-all-dependencies

# Run database updates
drush updatedb -y

# Clear caches
drush cr
```

### From 11.1.0.0-beta2

Standard upgrade process:

```bash
composer require ycloudyusa/yusaopeny:11.1.0.0-beta3 --with-all-dependencies
drush updatedb -y
drush cr
```

### From 11.1.0.0-beta1

```bash
composer require ycloudyusa/yusaopeny:11.1.0.0-beta3 --with-all-dependencies
drush updatedb -y
drush cr
```

---

## Known Issues

### jQuery 3.x Compatibility

Drupal 11 uses jQuery 3.x. YMCA Website Services includes jQuery Migrate for backward compatibility, but custom JavaScript should be tested. See [11.1.0.0-beta1 release notes]({{< relref "release-ds-11.1.0.0-beta1" >}}) for details.

---

## Testing and Feedback

This is a **beta release** intended for testing. With the Activity Finder and Memberships components now Drupal 11-ready, we're approaching production readiness. Please test and report any issues:

- [GitHub Issue Queue](https://github.com/YCloudYUSA/yusaopeny/issues)
- [YMCA Website Services Slack](https://ycloud.y.org/slack) #support channel
- [Monthly Community Calls](/blog/monthly-calls/)

---

## Complete Changelog

View all changes: [11.1.0.0-beta2 → 11.1.0.0-beta3](https://github.com/YCloudYUSA/yusaopeny/compare/11.1.0.0-beta2...11.1.0.0-beta3)

**Pull Requests Included**:
- #307 - Added GitHub issue and PR templates
- #308 - Updated openy_gtranslate to 2.0.0
- #309 - Removed failing patches
- #310 - Fixed demo content

---

**Release Date**: November 10, 2025
**Status**: Beta
**Target Audience**: Early adopters, testers, staging environments
**Production Readiness**: Approaching production readiness with major components now Drupal 11-compatible (stable release Q4 2025)
