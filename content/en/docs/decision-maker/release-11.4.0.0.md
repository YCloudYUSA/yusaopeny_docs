---
title: "Release 11.4.0.0 for Decision Makers"
linkTitle: "Release 11.4.0.0"
description: Why to upgrade to YMCA Website Services 11.4.0.0
weight: 9
---

## YMCA Website Services 11.4.0.0: Security Update on the Current Drupal Minor

**Summary**

11.4.0.0 is a security and platform release. It moves sites to Drupal core 11.4, the minor that receives security
fixes, and closes every security advisory `composer audit` reports for the distribution on 11.3 and 11.4 release
candidate sites.

### Why upgrade

- **Security**: 55 advisories in 21 packages are fixed, among them 7 Drupal core advisories and 20 Webform advisories.
  After the upgrade `composer audit` reports none for the distribution.
- **Unsupported module removed**: the GroupEx Pro module was marked unsupported by the Drupal Security Team
  (SA-CONTRIB-2026-278, Critical). It is removed; the embedded GroupEx Pro schedule keeps working.
- **Stability**: random `jQuery is not defined` page errors (seen on 15 of 26 sites) are fixed by serving jQuery
  Migrate from the site itself instead of an external CDN.
- **Accessibility**: all 132 Small Y demo images get alt text.
- **Drupal 12 readiness**: Layout Builder blocks, themes and content types got releases that declare Drupal 12
  support.

### What it takes

- One upgrade through Composer and `drush updb`; all configuration changes run automatically.
- Developers remove a few outdated requirements from the site's `composer.json`
  (see [Release 11.4.0.0 for Developers]({{< relref "/docs/developer/release-11.4.0.0" >}})).
- Content does not need to change.

### Tested

- 27 managed sites run 11.4 release candidates on staging and live.
- Upgrade from 11.3.1.5 to 11.4.0.0-rc4: 34 updates, no errors.

Full technical notes: [Digital Services Release 11.4.0.0]({{< relref "/blog/releases/release-ds-11.4.0.0" >}}).
