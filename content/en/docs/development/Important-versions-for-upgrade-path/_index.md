---
title: Important versions for upgrade path
aliases:
  - /docs/wiki/important-versions-for-upgrade-path/

---

YMCA Website Services development moves quickly. This document highlights important versions that should not be skipped when upgrading your sites. Understanding the upgrade path ensures a smoother transition and avoids potential issues.

## Determining your upgrade path

**Example:** If you are on YMCA Website Services 8.1.2 and want to upgrade to YMCA Website Services 8.2.8.5, you should follow these steps:

1.  Upgrade 8.1.2 to 8.1.13.1
2.  Upgrade 8.1.13.1 to 8.2.2.1
3.  Upgrade 8.2.2.1 to 8.2.7.3
4.  Upgrade 8.2.7.3 ... and so on.

These supplemental documents provide more detailed information for specific upgrade scenarios:

-   [Upgrade from YMCA Website Services <8.1.3]({{< relref "OpenY-upgrade-for-developers.-Upgrade-to-old-OpenY-1.x-version.md" >}})
-   [Upgrade from 8.1.3 to 8.2.2.1]({{< relref "Upgrade-OpenY-8.1.3-to-8.2.2.1.md" >}})
-   [Upgrade from 8.2.2.3 to 8.2.7.3]({{< relref "Upgrade-use-case-from-8.2.2.3-to-8.2.7.3.md" >}})

### Important Versions

The following versions are crucial milestones in the YMCA Website Services upgrade path. Pay close attention to the notes for each version to ensure a successful upgrade.

-   `8.1.13.1` - Optional, use this version if you have a lot of customized code and encounter issues with 8.2.2.1.

-   `8.2.2.1` - **Critical**. This is a mandatory step for all sites. After upgrading to this version, `drush entup` will no longer function. This version marks the migration to the core media subsystem. Upgrading your site to this version first is essential for proper media management in later versions.

-   **`8.2.7.3`** - **Recommended**. This is a very stable Drupal 8-based YMCA Website Services release with numerous updates to contributed modules. It's one of the final Drupal 8-based versions before the upgrade to Drupal 9 core. From versions 8.2.7.0 and 8.2.7.1, multiple version constraints were introduced in `composer.json`, allowing developers to select between minimum or latest dependency versions for a more secure and flexible upgrade path.

-   `9.2.8.0` - A Drupal 9 version that is required in the upgrade path before moving to 9.2.8.1+. This version includes Drupal Core 9.0-9.1 and disables deprecated components.

-   `9.2.10.0` - This version removes several unused modules from the distribution, streamlining the codebase.

-   **`9.2.11.3`** - Last Open Y release based on Drupal core 9.3.*.

-   `9.2.11.4` - A technical release of YMCA Website Services with no functional differences compared to 9.2.11.3.

-   **`9.2.13.0`** - **Important pre-Drupal 10 release.** This is the last Drupal 9 release. Before upgrading to Drupal 10 and entering the Layout Builder era, it is highly recommended to uninstall the `geysir`, `openy_inline_editing`, `quickedit`, and `rdf` modules as a best practice.

-   `10.2.14` - A Drupal 10/9 release. When upgrading to this version, consider the following recommendations:

    1.  Upgrade to the latest Drupal 9 core using version 10.2.14 of the distribution (released in June 2023): [10.2.14 Release](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.2.14).
    2.  Upgrade all contributed modules and libraries to their latest Drupal 9-compatible versions using `composer update`.
    3.  Utilize tools like [drupal-rector](https://github.com/palantirnet/drupal-rector), [drupal-check](https://github.com/mglaman/drupal-check), and PHPCS to prepare custom modules and themes for Drupal 10 compatibility.
    4.  Upgrade to Drupal 10 and perform thorough regression testing to identify and resolve potential bugs.  Update `drupal/core-*` projects in `composer.json`, then run `composer update`.
    5.  Upgrade all contributed modules on the Drupal 10 site to their latest versions using `composer update`.

-   `10.3.0.1` - Drupal 10/9 release that precedes the introduction of new demo content and the initial replacement of Paragraphs with Blocks for a native Layout Builder experience.

-   **`10.3.1`** - Drupal 10/9 release that introduces new demo content and initiates the replacement of Paragraphs with Blocks for a native Layout Builder experience. A significant number of dependencies were also updated in this release.

-   `10.3.2` - Introduced [recurring event support in the Event Content Type](https://www.drupal.org/project/ws_event/issues/3409162), which necessitates an automated migration between `date_range` and `smart_date` fields.  If possible, update to this version during the upgrade process.

-   `10.3.2.3` - Introduced before 10.1 and 10.2 Drupal core. Also upgraded openy_map. This version ensures we support removed modules pre 10.1 for contrib modules.

Refer to [Version Constraints practices for YMCA Website Services]({{< relref "Composer-version-constraints-for-Open-Y" >}}) for more information on managing dependencies.

## Known Issues

If you encounter an issue where `composer` installs an incorrect version of `drupal/core` for your chosen YMCA Website Services version, use the following command to downgrade:

```sh
composer require drupal/core-recommended:9.5.9
```

Run this command from your `docroot`. Replace `9.5.9` with the correct core version you need.
