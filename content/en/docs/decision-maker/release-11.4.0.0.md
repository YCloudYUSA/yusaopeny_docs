---
title: "Release 11.4.0.0 for Decision Makers"
linkTitle: "Release 11.4.0.0"
description: Why to upgrade to YMCA Website Services 11.4.0.0
weight: 9
---

## YMCA Website Services 11.4.0.0: Security Update on the Current Drupal Minor

**Summary**

11.4.0.0 is a platform release. It moves sites from Drupal core 11.3 to Drupal core 11.4. The current build is 11.4.0.0-rc5. A fresh `composer update` resolves current releases of core and contrib
packages. The exact constraint changes and removed patches are listed in the technical notes.

### What changes

- **Platform**: Drupal core `^11.4`. Several outdated requirements and patches are removed.
- **GroupEx Pro**: Drupal.org published
  [SA-CONTRIB-2026-278](https://www.drupal.org/sa-contrib-2026-278) (Critical, PHP object injection) on 2026-11-04.
  It affects `drupal/groupexpro` before 2.2.1. The project was marked unsupported on 2026-10-28 and restored on
  2026-11-04 with the fix in 2.2.1. The distribution no longer includes `drupal/groupexpro`. The Embedded GroupEx Pro
  Schedule moved to `ycloudyusa/embedded_groupexpro_schedule` 1.0.0 and keeps working. The old GroupEx modules
  (`openy_gxp`, `openy_group_schedules`, `groupex_form_cache`, `openy_pef_gxp_sync`) are retired and uninstall
  themselves on `drush updb`.
- **Page errors**: jQuery Migrate is served from the site instead of an external server, to address random
  `jQuery is not defined` errors.
- **Accessibility**: Small Y demo images get alt text through an update hook.
- **Fonts (rc5)**: a `fontyourface` 4.3 problem can leave font stylesheets off the page. The distribution patches it
  with an upstream merge request that is still open. Sites using `y_fonts` are not affected.

### Effort and risk

- One upgrade through Composer and `drush updb`. Most configuration changes run in `drush updb`. The GroupEx Pro account id may need to be entered again.
- Developers remove a few outdated requirements from the site's `composer.json`
  (see [Release 11.4.0.0 for Developers]({{< relref "/docs/developer/release-11.4.0.0" >}})).
- Pages that use the Embedded GroupEx Pro Schedule: the account id is kept as a number, so a non-numeric id has to be
  entered again.
- Content does not need to change.
- Release candidate: test on staging first.

### Tested

- Upgrade from 11.3.1.5 to 11.4.0.0-rc4: 34 updates, no errors. This was measured on rc4, not on rc5.

Full technical notes: [Digital Services Release 11.4.0.0]({{< relref "/blog/releases/release-ds-11.4.0.0" >}}).
