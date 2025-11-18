---
title: Important versions for upgrade path
aliases:
  - /docs/wiki/important-versions-for-upgrade-path/
---

YMCA Website Services development moves quickly and in this document, we flag important versions that should not be skipped while you upgrade your sites.

## Determining your upgrade path

For example: If you are on YMCA Website Services 8.1.2 and want to upgrade to YMCA Website Services 8.2.8.5 you should make it in a couple of steps

1. Upgrade 8.1.2 to 8.1.13.1
1. Upgrade 8.1.13.1 to 8.2.2.1
1. Upgrade 8.2.2.1 to 8.2.7.3
1. Upgrade 8.2.7.3 ...

These supplemental documents elaborate on a few specific cases:

- [Upgrade from YMCA Website Services <8.1.3]({{< relref "OpenY-upgrade-for-developers.-Upgrade-to-old-OpenY-1.x-version.md" >}})
- [Upgrade from 8.1.3 to 8.2.2.1]({{< relref "Upgrade-OpenY-8.1.3-to-8.2.2.1.md" >}})
- [Upgrade from 8.2.2.3 to 8.2.7.3]({{< relref "Upgrade-use-case-from-8.2.2.3-to-8.2.7.3.md" >}})

### Important versions

- `8.1.13.1` - Optional, when you have a lot of customized code and 8.2.2.1 is failing in most places.
- `8.2.2.1` - This is a very important step everyone should have. After this version, `drush entup` stops working. In this version, we finally migrated to the core media subsystem, and before going further it is important to upgrade media by upgrading your site to this version first.
- **`8.2.7.3`** - This is a very stable Drupal 8 based YMCA Website Services with a bunch of contrib module updates. This is one of the last Drupal 8 based YMCA Website Services versions before the upgrade to Drupal 9 core. Also, in 8.2.7.0 and 8.2.7.1 we started to introduce multiple version constraints in `composer.json` to allow developers to choose between the minimum or latest dependency versions. This is for securing the upgrade path as well as adding flexibility for version selection if needed.
- `9.2.8.0` - Drupal 9 version which must be used in the upgrade path before going to 9.2.8.1+. This version added 9.0-9.1 Drupal Core and disabled deprecated components.
- `9.2.10.0` - Removed a bunch of unused modules from distribution.
- **`9.2.11.3`** - Last Open Y Drupal core 9.3.* release
- `9.2.11.4` - Technical release of YMCA Website Services ( no diff with 9.2.11.3 )
- **`9.2.13.0`** - Pre Drupal 10 release, latest Drupal 9 release. Before going into Layout Builder era it is recommended to uninstall `geysir`, `openy_inline_editing`, `quickedit`, `rdf` modules.
- `10.2.14` - Drupal 10|9 release, where you may follow the recommendations below:

  1. Upgrade to the latest Drupal 9 core (using [version 10.2.14](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.2.14) of the distribution, released in June 2023).
  2. Upgrade all contrib modules and libraries to their latest Drupal 9-compatible versions (with `composer update`).
  3. Use [drupal-rector](https://github.com/palantirnet/drupal-rector), [drupal-check](https://github.com/mglaman/drupal-check), and PHPCS to prepare custom modules and themes for Drupal 10.
  4. Upgrade to Drupal 10 and run regression testing to search for hard-to-find bugs (update `drupal/core-*` projects in composer.json, then run `compuser update`).
  5. Upgrade all contrib modules on the Drupal 10 site to their latest versions (`composer update`).

- `10.3.0.1` - Drupal 10|9 release, before New Demo Content and Initial Replacement Paragraphs to Blocks for Native Layout Builder Experience
- **`10.3.1`** - Drupal 10|9 release, New Demo Content and Initial Replacement Paragraphs to Blocks for Native Layout Builder Experience. In this release we bumped a lot of dependencies to become up to date
- 10.3.2 - Introduced [recurring event support in the Event Content Type](https://www.drupal.org/project/ws_event/issues/3409162) which requires an automated migration between `date_range` and `smart_date` fields. If possible, update to this version during the upgrade process.
- 10.3.2.3 - Introduced before 10.1 and 10.2 Drupal core. Also upgraded openy_map. This version ensures we support removed modules pre 10.1 for contrib modules
- **`11.1.0.0`** - **First stable Drupal 11 release** (November 18, 2025). Includes PHP 8.3+ requirement, jQuery Migrate for backward compatibility, Activity Finder 6.0.0, Memberships 3.1.0, and full Drupal 11 support. Production ready. See [Drupal 11 Migration Guide](../drupal-11-migration/) and [Full Changelog](../drupal-11-changelog/) for details.

---
See [Version Constraints practices for YMCA Website Services]({{< relref "Composer-version-constraints-for-Open-Y" >}})

## Known issues

### For Drupal 10 Sites (pre-11.0)

If you are **not using Rose or Lily theme**, you need to **uninstall them before applying 10.5.0.0**
If you are **using Rose theme**, you need to **re-require Drupal/openy_rose before applying 10.5.0.0**.
If you are **using Lily theme**, you need to **re-require Drupal/openy_lily before applying 10.5.0.0**.

### For Drupal 11 Upgrades

**Important:** Lily and Rose themes have been removed from Drupal 11 distributions. If you are upgrading to Drupal 11, you must migrate to the Carnation theme before upgrading. The Carnation theme is the only supported theme for Drupal 11+.

See the [Drupal 11 Migration Guide](../drupal-11-migration/) for:
- Prerequisites (PHP 8.3+, latest Drupal 10)
- Known issues (jQuery 3.x compatibility)
- Upgrade steps and troubleshooting

**Note:** Drupal 11 stable release **11.1.0.0** is now available (as of November 18, 2025) and is production-ready. All major components including Activity Finder and Memberships are Drupal 11-compatible. See the [11.1.0.0 Release Notes]({{< relref "/blog/releases/release-ds-11.1.0.0" >}}) and [Full Changelog](../drupal-11-changelog/) for complete details.


If you are faced with an issue when `composer` installs an improper version of `drupal/core` for the chosen version of YMCA Website Services from the list above, please use this trick in order to downgrade:

```sh
composer require drupal/core-recommended:9.5.9
```

Run the above command where your `docroot` is. Use the current core version instead of `9.5.9`.
