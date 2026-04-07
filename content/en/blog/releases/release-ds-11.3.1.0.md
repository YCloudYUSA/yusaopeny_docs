---
title: "Digital Services Release 11.3.1.0"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.0)
date: 2026-03-04
---

## Updates & New Features

- **Drupal 11.3 Support:**
  Upgraded Drupal Core from 11.1.9 to 11.3.3 with full compatibility across all Layout Builder blocks, themes, and content types. ([PR #324](https://github.com/YCloudYUSA/yusaopeny/pull/324))

- **Performance Improvements:**
  - Installation speed improved by 67% (537s → 180s)
  - Memory usage reduced by 93% (4.38GB → 326MB)
  - MenuTreeStorage optimization: 50% fewer SELECT queries ([PR #329](https://github.com/YCloudYUSA/yusaopeny/pull/329))
  - Route rebuild optimization during module installation ([PR #331](https://github.com/YCloudYUSA/yusaopeny/pull/331))
  - Batch module installation for faster deployments ([PR #327](https://github.com/YCloudYUSA/yusaopeny/pull/327))

- **Media Tags System:**
  Replaces folder-based organization with hierarchical tag structure. Features tree display, badge/chip UI, and autocomplete multi-select capabilities. ([openy_features #110](https://github.com/open-y-subprojects/openy_features/pull/110))

- **Trash Module:**
  New soft-delete functionality enabled by default, allowing content recovery instead of permanent deletion. ([PR #332](https://github.com/YCloudYUSA/yusaopeny/pull/332), [PR #333](https://github.com/YCloudYUSA/yusaopeny/pull/333))

- **Entity Browser → Media Library Migration:**
  All media fields migrated from entity_browser to core media_library_widget across 35 packages. ([PR #325](https://github.com/YCloudYUSA/yusaopeny/pull/325))

- **PHP 8.4/8.5 Compatibility:**
  Eliminated ~256K deprecation warnings per day across production sites. ([PR #340](https://github.com/YCloudYUSA/yusaopeny/pull/340))

- **CKEditor & Y Styles Improvements:**
  - Expanded Y Styles support to Landing Pages, Events, and Articles ([y_lb #300](https://github.com/YCloudYUSA/y_lb/pull/300))
  - Global table styling consistency ([y_lb #302](https://github.com/YCloudYUSA/y_lb/pull/302))
  - CKEditor 5 balloon positioning fixes in Layout Builder ([lb_claro #6](https://github.com/YCloudYUSA/lb_claro/pull/6))

---

## Core & Module Updates

- **Drupal Core 11.1.9 → 11.3.3**
    - Major version upgrade with enhanced performance and PHP 8.4/8.5 support
    - [Release 11.3.3](https://www.drupal.org/project/drupal/releases/11.3.3)

- **Layout Builder Blocks (16 packages updated)**
    - lb_accordion 2.3.1 → 3.0.0
    - lb_cards 2.2.1 → 3.0.0
    - lb_carousel 2.1.1 → 3.0.0
    - lb_grid_cta 3.1.3 → 4.0.0
    - lb_hero 1.5.4 → 2.0.2
    - lb_modal 1.3.0 → 2.0.0
    - lb_partners_blocks 1.1.0 → 2.0.0
    - lb_ping_pong 1.3.0 → 2.0.0
    - lb_promo 1.3.0 → 2.0.0
    - lb_related_articles_blocks 1.3.0 → 2.0.0
    - lb_related_events_blocks 1.4.0 → 2.0.0
    - lb_simple_menu 1.1.0 → 2.0.0
    - lb_staff_members_blocks 1.3.1 → 2.0.0
    - lb_statistics 2.1.0 → 3.0.0
    - lb_testimonial_blocks 1.1.1 → 2.0.0
    - lb_webform 1.3.1 → 2.0.0
    - All blocks updated for entity_browser → media_library migration

- **Y Layout Builder (y_lb) 4.0.6 → 5.0.4**
    - PHP 8.4 deprecation fixes
    - Y Styles support for reusable blocks and Landing Pages
    - Global table styles and field-item table selector improvements
    - Media field migration
    - [Release 5.0.4](https://github.com/YCloudYUSA/y_lb/releases/tag/5.0.4)

- **Content Type Packages**
    - y_camp 2.1.0 → 3.0.0
    - y_donate 2.1.0 → 3.0.0
    - y_facility 2.0.0 → 3.0.0
    - y_lb_article 1.3.4 → 2.0.1
    - y_program 1.2.0 → 2.0.0
    - y_program_subcategory 1.2.0 → 2.0.0
    - All updated for Drupal 11.3 compatibility

- **WebSpark Modules**
    - ws_colorway_canada 1.3.2 → 2.0.1
    - ws_event 1.5.7 → 2.0.1
    - ws_lb_tabs 2.1.0 → 3.0.0
    - ws_promotion 1.1.0 → 2.0.0
    - ws_small_y 1.2.3 → 2.0.2

- **OpenY Features (openy_features) 4.2.0 → 5.0.5**
    - rabbit_hole ^2.0@beta support
    - DateTimeZone() migration (replaced deprecated timezone_open)
    - Video thumbnail dimension fixes
    - Media library view displays with image thumbnails
    - [Release 5.0.5](https://github.com/open-y-subprojects/openy_features/releases/tag/5.0.5)

- **OpenY Focal Point (openy_focal_point) 1.2.0 → 2.0.1**
    - Deprecated entity_browser widget in favor of media_library
    - [Release 2.0.1](https://github.com/open-y-subprojects/openy_focal_point/releases/tag/2.0.1)

- **LB Claro Theme (lb_claro) 2.0.2 → 3.0.2**
    - CKEditor 5 balloon positioning fix rewrite
    - Improved media library CSS
    - [Release 3.0.2](https://github.com/YCloudYUSA/lb_claro/releases/tag/3.0.2)

- **Y LB Demo Content (y_lb_demo_content) 4.0.0-beta4 → 5.0.0**
    - Updated dependencies for entity_browser deprecation
    - [Release 5.0.0](https://github.com/YCloudYUSA/y_lb_demo_content/releases/tag/5.0.0)

- **Field Group 3.6.0 → 4.0.0**
    - Drupal 11.3 compatibility update

- **GroupExPro 2.3.1 → 3.0.0**
    - Final version before deprecation (API discontinued)

---

## Removed Packages — 5 packages

| Package | Last Version | Reason |
|---|---|---|
| `drupal/dropzonejs_eb_widget` | 2.11.0 | Part of entity_browser ecosystem |
| `drupal/entity_browser_entity_form` | 2.15.0 | Replaced by media_library |
| `drupal/google_analytics` | 4.0.2 | Replaced by google_tag |
| `doctrine/annotations` | 2.0.2 | Deprecated in PHP 8.x, replaced by attributes |
| `psr/cache` | 3.0.0 | No longer a direct dependency |

---

## What's Changed

### YCloudYUSA/yusaopeny
* Add Drupal 11.3 support by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/324
* Migrate media fields from entity_browser to media_library by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/325
* Batch module installation for performance by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/327
* MenuTreeStorage performance optimization by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/329
* Route rebuild optimization patch by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/331
* Add Trash module (drupal/trash:^3.0) by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/332
* Enable trash module by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/333
* Move trash module install by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/336
* Add composer patches for deprecations by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/338
* Downgrade composer-patches by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/339
* Fix PHP 8.4/8.5 deprecations by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/340
* Remove breadcrumb block max-age=0 by @podarok in https://github.com/YCloudYUSA/yusaopeny/pull/341

### YCloudYUSA/y_lb
* Remove incompatible D11.3 patches by @podarok in https://github.com/YCloudYUSA/y_lb/pull/298
* Migrate media fields by @podarok in https://github.com/YCloudYUSA/y_lb/pull/299
* Add allow_style to Landing Page by @podarok in https://github.com/YCloudYUSA/y_lb/pull/300
* Add global table styles by @podarok in https://github.com/YCloudYUSA/y_lb/pull/302
* Remove field-item table selector by @podarok in https://github.com/YCloudYUSA/y_lb/pull/305
* Allow Y Styles on reusable blocks by @podarok in https://github.com/YCloudYUSA/y_lb/pull/307
* Resolve PHP 8.4 deprecations by @podarok in https://github.com/YCloudYUSA/y_lb/pull/308

### YCloudYUSA/lb_claro
* Improve media library CSS by @podarok in https://github.com/YCloudYUSA/lb_claro/pull/4
* Fix CKEditor 5 balloon positioning by @podarok in https://github.com/YCloudYUSA/lb_claro/pull/5
* Rewrite CKEditor5 balloon fix by @podarok in https://github.com/YCloudYUSA/lb_claro/pull/6

### open-y-subprojects/openy_features
* Migrate media fields by @podarok in https://github.com/open-y-subprojects/openy_features/pull/107
* Fix update hooks by @podarok in https://github.com/open-y-subprojects/openy_features/pull/108
* Add media library view for image thumbnails by @podarok in https://github.com/open-y-subprojects/openy_features/pull/109
* Add media library view display by @podarok in https://github.com/open-y-subprojects/openy_features/pull/110
* Fix video thumbnail dimensions by @podarok in https://github.com/open-y-subprojects/openy_features/pull/111
* Replace timezone_open() with DateTimeZone() by @podarok in https://github.com/open-y-subprojects/openy_features/pull/112
* Allow rabbit_hole ^2.0@beta by @podarok in https://github.com/open-y-subprojects/openy_features/pull/113

### open-y-subprojects/openy_focal_point
* Deprecate entity_browser widget by @podarok in https://github.com/open-y-subprojects/openy_focal_point/pull/5

### YCloudYUSA/y_lb_demo_content
* Update dependencies for entity_browser deprecation by @podarok in https://github.com/YCloudYUSA/y_lb_demo_content/pull/59

**Full Changelog**: https://github.com/YCloudYUSA/yusaopeny/compare/11.1.0.2...11.3.1.0

