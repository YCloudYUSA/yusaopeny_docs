---
title: "Digital Services Release 11.1.0.2"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.2)
date: 2025-12-01
---

## Updates & New Features

- **GroupExPro Removal:**
  Removed 'groupexpro' from installation types complete/custom. ([PR #321](https://github.com/YCloudYUSA/yusaopeny/pull/321))

---

## Core & Module Updates

- **Virtual Y (yusaopeny_gated_content) 1.11.1-1.11.2**
    - Fix VimeoEvent provider compatibility with video_embed_field 3.0
    - Fix broken gated content styles on non-LB pages
    - [Release 1.11.1](https://github.com/YCloudYUSA/yusaopeny_gated_content/releases/tag/1.11.1), [Release 1.11.2](https://github.com/YCloudYUSA/yusaopeny_gated_content/releases/tag/1.11.2)

- **OpenY Custom (openy_custom) 3.1.1**
    - Drupal 11.1 compatibility: AJAX method deprecation and JavaScript modernization
    - [Release Details](https://github.com/open-y-subprojects/openy_custom/releases/tag/3.1.1)

- **PEF Schedule (y_pef_schedule) 2.1.0-2.1.1**
    - Move field.storage.block_content.field_block to optional config
    - Remove autoload configuration
    - [Release 2.1.0](https://github.com/YCloudYUSA/y_pef_schedule/releases/tag/2.1.0), [Release 2.1.1](https://github.com/YCloudYUSA/y_pef_schedule/releases/tag/2.1.1)

- **Activity Finder (yusaopeny_activity_finder) 6.1.0-6.1.1**
    - Move field.storage.block_content.field_block to optional config
    - Move form/view displays to optional config
    - [Release 6.1.0](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/6.1.0), [Release 6.1.1](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/6.1.1)

- **Useless Machines (useless_machines) 2.1.0**
    - Add stub modules for media_entity_video and openy_autocomplete_path
    - [Release Details](https://github.com/YCloudYUSA/useless_machines/releases/tag/2.1.0)

- **Open Y Lily Theme (openy_lily) 1.2.0-1.2.2**
    - Add Drupal 11 support and improve language selector styling
    - Hide desktop language selector on mobile, add mobile menu styling
    - Fix mobile dropdown menu items not expanding
    - [Release 1.2.0](https://www.drupal.org/project/openy_lily/releases/1.2.0), [Release 1.2.1](https://www.drupal.org/project/openy_lily/releases/1.2.1), [Release 1.2.2](https://www.drupal.org/project/openy_lily/releases/1.2.2)

- **CSS Editor (css_editor) 2.0.4**
    - Fix CSS files not present when site is deployed - regenerate CSS files on cache clear
    - [Release Details](https://www.drupal.org/project/css_editor/releases/2.0.4), [Issue #3345274](https://www.drupal.org/project/css_editor/issues/3345274)

---

## What's Changed

* Remove 'groupexpro' from installation types complete/custom by @svicervlad in https://github.com/YCloudYUSA/yusaopeny/pull/321
* https://github.com/YCloudYUSA/yusaopeny_gated_content/releases/tag/1.11.1
* https://github.com/YCloudYUSA/yusaopeny_gated_content/releases/tag/1.11.2
* https://github.com/open-y-subprojects/openy_custom/releases/tag/3.1.1
* https://github.com/YCloudYUSA/y_pef_schedule/releases/tag/2.1.0
* https://github.com/YCloudYUSA/y_pef_schedule/releases/tag/2.1.1
* https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/6.1.0
* https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/6.1.1
* https://github.com/YCloudYUSA/useless_machines/releases/tag/2.1.0
* https://www.drupal.org/project/openy_lily/releases/1.2.0
* https://www.drupal.org/project/openy_lily/releases/1.2.1
* https://www.drupal.org/project/openy_lily/releases/1.2.2
* https://www.drupal.org/project/css_editor/releases/2.0.4

**Full Changelog**: https://github.com/YCloudYUSA/yusaopeny/compare/11.1.0.1...11.1.0.2
