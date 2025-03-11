---
title: "Digital Services Release 10.3.1.1"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.1.1)
date: 2023-12-12
---

## Updates & New Features

### Promotion Content Type

**Promotions** are pieces of content with scheduled start and end dates that can be used for displaying internal marketing and ad campaigns. Content editors can easily schedule, manage and place multiple promotions throughout their website via the Drupal admin interface.

The first version of this content type allows content editors to place promotions inside the Card component (for Layout Builder), as a hero banner, as promo cards, as a ping pong component or as interstitial content within Activity Finder. [Learn more in our docs.](https://ds-docs.y.org/docs/user-documentation/content-types/promotion/)

### Layout Builder Updates

Continuing general cleanup, updated documentation, and improvements to the content editing experience for new Layout Builder components and content types.

[Learn more in our docs](https://ds-docs.y.org/docs/user-documentation/layout-builder/).

*   Moved [Program](https://ds-docs.y.org/docs/user-documentation/content-types/program/#customizing-with-layout-builder) & [Program Sub-category](https://ds-docs.y.org/docs/user-documentation/content-types/program/#customizing-with-layout-builder) Content Types into Layout Builder. (#806)
*   Facility Content Type - Updated the behavior of Contact / Hours fields so that content editors can include custom contact and hour information for a facility. (#1057)
*   Facility Content Type - Included ability to add custom hours on Facilities; currently, it is inherited from Branch CT. (#1119)
*   LB Location Finder - ‘Get Directions’ link on a Branch card should link to the Google Map of the location. (#1132)
*   Removed a dependency on lb_branch_hours_block. (#1071)
    *   _Credit - Andy Fowlston_
*   LB Menus & Navigation - Clarified header / footer region display names so that each region has a unique, easy-to-understand title. (#1055)
*   LB Mega menu - Resolved hierarchical issues, making top-level pages clickable and including indicators for parent / child relationships. (#1196)
*   Cleaned up error messages that were blocking content entry in the Layout Builder sidebar. (#827)
*   Resolved an issue with LB content types being excluded from the Default sitemap in the ‘Simple XML Sitemap’ module configurations. (#1197)
    *   _Credit - Jeremy Weedman_
*   LB UX - Fixed the display of Drupal admin warnings and messages. (#828)
*   Made vertical spacing between components more consistent. (#1167)
*   LB Cards - De-duplicated code in twig templates. (#1135)
*   Included Home Branch, Icon Grid, LB Facility, and LB Camp in default standard install. (#1061)

### Core, Security & Performance Updates

*   Update to Drush v12. (#807)
*   Allowed plugin definitions caching to resolve a caching performance issue. (#1220)
    *   _Credit: Andrey Maximov_

### CKEditor 5

*   Upgraded from png to svg icons for CKEditor 5 compatibility. (#1194)

### Admin / Content Editor Enhancements

*   Migration from old block + paragraph approach to block + block sub-item approach for Layout Builder. (#’s 301-306, #1087)
*   Replaced AddThis with AddToAny. (#1028)
    *   _Note: [AddThis terminated all services](https://www.addthis.com/) on May 1, 2023, which impacts all Website Services sites using the service._
*   Removed duplicated code from twig templates for the LB Hero. (#1134)

### SEO

*   Added cross-domain tracking module to ensure cross-domain tracking works with Google Analytics 4. (#280)

### Accessibility

*   Resolved accessibility issues found in audits from Summer 2023:
    *   WAVE browser tool
    *   Keyboard accessibility
    *   Screen Reader

### Design System - Y Styles

“Y Styles” helps site builders customize their sites in an accessible and brand-compliant manner.

[Documentation for Y Styles](https://ds-docs.y.org/docs/user-documentation/layout-builder/advanced-options/)

*   Updated H1-H6 tags to match colorway styles. (#666)
*   Canadian Colorway - Canadian Y Associations can now select from a set of brand-compliant colors to use with Layout Builder components. (#589)

## Documentation

*   Videos from the Open Y channel that are referenced in code had their URLs updated to the new YUSA YouTube channel. (#834)
*   Document workaround for missing [CKEditor 5 button button](https://ds-docs.y.org/docs/user-documentation/text-editor/adding-links/#using-button-classes). (#1147)
*   Added documentation for [Home Branch selector](https://ds-docs.y.org/docs/user-documentation/content-types/branch/#home-branch-selector) and how to disable it. (#1162)
*   Documented how to [troubleshoot missing configurations](https://ds-docs.y.org/docs/development/development-faq/#upgrade-troubleshooting) after upgrading to Drupal 10. (#1124)
*   Added [Content type clarification](https://ds-docs.y.org/docs/user-documentation/content-types/). (#1239)
*   Made [donate support](https://ds-docs.y.org/docs/user-documentation/layout-builder/donate/) more prominent. (#1239)
*   Added [header menu length recommendations](https://ds-docs.y.org/docs/user-documentation/layout-builder/header-footer/#main-navigation). (#1239)
*   Included documentation for [installing Solr site search](https://ds-docs.y.org/docs/development/googlecustomsearchconfiguration/#layout-builder-and-google-search) and [Google Search Configuration](https://ds-docs.y.org/docs/development/googlecustomsearchconfiguration/#layout-builder-and-google-search) in Layout Builder. (#1198)
*   Updated documentation for how to set up a [Layout Builder site from scratch](https://ds-docs.y.org/docs/howto/set-up-lb/). (#1241)
*   Added documentation for how to [display amenities in the filter](https://ds-docs.y.org/docs/user-documentation/layout-builder/location-finder/#hierarchical-parentchild-amenities) on the LB Location Finder page. (#1252)

## Bug Fixes

*   Fixed an issue with Layout Builder content types causing errors on Search or Webforms. (#1205)
*   Resolved an issue with Alert Rearrange not actually rearranging alerts. (#1228)
    *   _Credit: Serhii Zherebchuck_
