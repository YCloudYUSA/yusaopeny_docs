 ---
title: Digital Services Release 10.3.10.1
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.10.1)
date: 2025-28-03
---


# Digital Services Release - 10.3.10.1"
Full Changelog: [10.3.10...10.3.10.1](https://www.drupal.org/project/drupal/issues/3458067)  
date: 2025-28-03  

## Drupal Core  
### Bug Fixes  
- Fixed an intermittent issue where contextual links disappeared after updating to Drupal ~10.3.0.  
- Addressed a TypeError in `settings_tray.js` during block placement by implementing a null check.  

## openy_map Module (Version 5.2.5)  
- Merged patch from pull request #87.  
- Fixed an issue in the `openy_map_lb` submodule by adding an empty check for hours, ensuring proper display of location hours within Layout Builder.  
- **Release Date:** March 5, 2025  

[View Release](https://github.com/open-y-subprojects/openy_map/releases/tag/5.2.5)  

## y_lb Module (Version 3.10.1)  
- Stability fix related to the `openy_feature` module.  
- **Release Date:** March 13, 2025  

[View Release](https://github.com/YCloudYUSA/y_lb/releases/tag/3.10.1)  

## y_lb_article Module (Version 1.2.22)  
### New Features  
- Implemented automatic sorting of featured articles based on their publication date.  

[View Release](https://www.drupal.org/project/y_lb_article/releases/1.2.22)  

## ws_colorway_canada Module (Version 1.2.3)  
### Bug Fixes  
- Ensured that the Canada Colorway now consistently uses the proper font sizes.  
- Resolved an issue where the `<h1>` element within banners was missing its intended styles.  

[View Release](https://www.drupal.org/project/ws_colorway_canada/releases/1.2.3)  

## General  
- Fixed an issue where long email addresses were not wrapping correctly on mobile devices.  

## What's Changed  
- **Fix:** Issue [#3458067](https://www.drupal.org/project/drupal/issues/3458067) by @svicervlad in [#239](https://github.com/open-y-subprojects/openy_map/releases/tag/5.2.5).  
- Full Changelog: [10.3.10...10.3.10.1](https://www.drupal.org/project/drupal/issues/3458067)  
