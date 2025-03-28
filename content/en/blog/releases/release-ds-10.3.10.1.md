---
title: "Digital Services Release 10.3.10.1"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.10.1)
date: 2025-03-28
---

## Updates & New Features

* **y_lb_article Module (Version 1.2.22)**
    * **New Feature:** Implemented automatic sorting of featured articles based on their publication date. ([Release Details](https://www.drupal.org/project/y_lb_article/releases/1.2.22))

## Core & Module Updates

* **Drupal Core**
    * **Bug Fix:** Addresses an intermittent issue where contextual links disappear after updating to Drupal ~10.3.0, accompanied by a `TypeError` in `settings_tray.js` during block placement. A fix involving a null check in `settings_tray.js` has been implemented. ([PR #239](https://github.com/YCloudYUSA/yusaopeny/pull/239), [Drupal Issue](https://www.drupal.org/project/drupal/issues/3458067))

* **openy_map Module (Version 5.2.5)**
    * Release date: March 5, 2025.
    * Includes a merged patch ([pull request #87](https://github.com/open-y-subprojects/openy_map/pull/87)).
    * Includes a fix in the `openy_map_lb` submodule to add an empty check for hours, resolving issues with displaying location hours within Layout Builder.
    * [Release Details](https://github.com/open-y-subprojects/openy_map/releases/tag/5.2.5)

* **y_lb Module (Version 3.10.1)**
    * Release date: March 13, 2025.
    * Includes a stability fix related to the `openy_feature` module.
    * [Release Details](https://github.com/YCloudYUSA/y_lb/releases/tag/3.10.1)

* **ws_colorway_canada Module (Version 1.2.3)**
    * **Bug Fix:** Ensured that the Canada Colorway now consistently uses the proper font sizes.
    * **Bug Fix:** Resolved an issue where the `h1` element within banners was missing its intended styles in the Canada Colorway.
    * [Release Details](https://www.drupal.org/project/ws_colorway_canada/releases/1.2.3)

## Bug Fixes

* **Drupal Core:** Fixed an issue where contextual links disappear after updating to Drupal ~10.3.0 (see Core & Module Updates).
* **General:** Fixed an issue where long email addresses were not wrapping correctly on mobile devices. ([PR #237](https://github.com/YCloudYUSA/yusaopeny/pull/237))

## What's Changed
* fix: issue https://www.drupal.org/project/drupal/issues/3458067 by @svicervlad in https://github.com/YCloudYUSA/yusaopeny/pull/239
* https://github.com/open-y-subprojects/openy_map/releases/tag/5.2.5
* https://github.com/YCloudYUSA/y_lb/releases/tag/3.10.1
* https://www.drupal.org/project/y_lb_article/releases/1.2.22
* https://github.com/YCloudYUSA/yusaopeny/pull/237
* https://www.drupal.org/project/ws_colorway_canada/releases/1.2.3


**Full Changelog**: https://github.com/YCloudYUSA/yusaopeny/compare/10.3.10...10.3.10.1
