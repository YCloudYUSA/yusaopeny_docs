---
title: Release Schedule and Guidelines
aliases:
  - /docs/wiki/open-y-release-schedule-and-guidelines/
---

## YMCA Website Services Release Guidelines

YMCA Website Services follows [Drupal core's release cycle](https://www.drupal.org/about/core/policies/core-release-cycles/schedule) to ensure compatibility and stability. Releases of the base project [YMCA Website Services](https://github.com/YCloudYUSA/yusaopeny) align with Drupal major and minor versions.

### Version Numbering

**Current versioning scheme:** YMCA Website Services versions follow Drupal core versions:

- **Major releases:** `11.x.0.0`, `10.x.0.0` - Align with Drupal core major versions (Drupal 11, Drupal 10)
- **Minor releases:** `11.3.0.0`, `10.6.0.0` - Align with Drupal core minor versions
- **Patch releases:** `11.1.0.1`, `10.5.0.1` - Bug fixes and security updates
- **Alpha/Beta releases:** `11.1.0.0-alpha1`, `11.1.0.0-beta1` - Pre-release testing versions

### Release Types

#### Major Drupal Compatibility Releases

**Pattern:** `11.0.0.0`, `10.0.0.0`

Major releases bring YMCA Website Services up to compatibility with new Drupal core major versions. These releases may include:

- Drupal core compatibility updates
- Breaking changes from Drupal core
- Deprecated functionality removal
- New features aligned with Drupal capabilities
- PHP version requirement updates

**Recent major releases:**
- **11.1.0.0-beta1** (September 23, 2024) - Drupal 11 compatibility
- **10.4.0.0** (June 17, 2024) - Drupal 10.4 core initialization

#### Minor Releases

**Pattern:** `11.1.0.0`, `10.5.0.0`

Minor releases align with Drupal core minor versions and may include:

- New features
- Enhancements to existing functionality
- Bug fixes
- Security updates
- Non-breaking changes

#### Patch Releases

**Pattern:** `11.1.0.1`, `10.5.0.2`

Patch releases contain only:

- Bug fixes
- Security patches
- No new features or breaking changes

### Release Schedule Alignment

YMCA Website Services releases are coordinated with [Drupal core's release schedule](https://www.drupal.org/about/core/policies/core-release-cycles/schedule):

#### Drupal Core Release Windows

- **First Wednesday of the month:** Bugfix releases for current minor versions (e.g., Drupal 11.2.x, 10.5.x)
- **Third Wednesday of the month:** Security release window for previous minor versions (e.g., Drupal 11.1.x, 10.4.x)

#### Upcoming Drupal Core Milestones

- **Drupal 11.3.0 / 10.6.0:** December 8, 2025
- **Drupal 10 End of Life:** December 9, 2026
- **Drupal 12:** Expected 2026

YMCA Website Services aims to release updates within 2-4 weeks of major Drupal core releases to ensure compatibility and security.

### Current Releases

View all releases and release notes:

- [YMCA Website Services Releases (GitHub)](https://github.com/YCloudYUSA/yusaopeny/releases)
- [Release Notes (Documentation)](/blog/releases/)

**Latest stable release:** Check [GitHub Releases](https://github.com/YCloudYUSA/yusaopeny/releases) for the most current version.

**Supported versions:**
- Drupal 11.x: Latest stable release (11.1.0.0-beta1 as of September 2024)
- Drupal 10.x: Supported until December 2026

### Virtual Y Releases

[Virtual Y](https://github.com/YCloudYUSA/yusaopeny_gated_content) (Gated Content) releases independently but follows similar versioning and compatibility guidelines.

### Subproject Releases

Decoupled modules and themes may release independently:

- [Activity Finder](https://github.com/YCloudYUSA/yusaopeny_activity_finder)
- [Carnation Theme](https://www.drupal.org/project/openy_carnation)
- [Layout Builder Components](https://github.com/YCloudYUSA/y_lb)
- Other [decoupled projects](../decoupled--external--projects-of-openy)

### Security Updates

Security updates follow Drupal core's security release schedule:

- **Critical security updates:** Released as soon as available
- **Regular security updates:** Third Wednesday of each month
- Subscribe to the [YMCA Website Services security mailing list](https://www.drupal.org/project/openy) for notifications

### Upgrade Paths

- **Drupal 10 → 11:** Upgrade path available via YMCA Website Services 11.x releases
- **Earlier versions:** Consult [upgrade documentation](../openy-upgrade-how-to-for-developers) for multi-step upgrade paths

### Contributing to Releases

Want to contribute features or fixes to upcoming releases?

- Review the [Contribution Guidelines](../../contribution-guidelines/)
- Check open issues in the [GitHub issue queue](https://github.com/YCloudYUSA/yusaopeny/issues)
- Join [monthly community calls](/blog/monthly-calls/) for release planning discussions

### Additional Resources

- [Drupal Core Release Cycle Policy](https://www.drupal.org/about/core/policies/core-release-cycles/schedule)
- [How We Release YMCA Website Services](../how-we-release-openy-distribution-from-code-perspective)
- [Security Advisories](https://www.drupal.org/project/openy)
- [Roadmap](/roadmap/)
