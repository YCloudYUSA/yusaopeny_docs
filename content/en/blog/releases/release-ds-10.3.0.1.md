```markdown
---
title: Digital Services Release 10.3.0.1
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.0.1)
date: 2023-11-14
---

## Sandbox Demo Content Pages

*   [Home page](https://carnation-ws.y.org/)
*   [Who We Are (About)](https://carnation-ws.y.org/demo-who-we-are)
*   [Programs Overview](https://carnation-ws.y.org/demo-programs-overview)
    *   [Programs Category](https://carnation-ws.y.org/demo-programs-category) (i.e. Youth Sports)
    *   [Individual Program](https://carnation-ws.y.org/demo-program-individual) (i.e. Soccer)
*   [Membership](https://carnation-ws.y.org/demo-membership)
*   [Join](https://carnation-ws.y.org/demo-join-y)
*   [Donate](https://carnation-ws.y.org/demo-donate)
*   [Location Finder](https://carnation-ws.y.org/demo-location-finder?type=ymca,camps&amenities)
    *   [Location page](https://carnation-ws.y.org/locations/downtown-springfield) (i.e. YMCA Springfield)
*   [Schedules](https://carnation-ws.y.org/demo-schedules)
*   [Events](https://carnation-ws.y.org/demo-events)
    *   [Individual Event](https://carnation-ws.y.org/events/forever-young-picnic-lunch-cruise)
*   [Contact Us](https://carnation-ws.y.org/demo-contact-us)
*   [Jobs](https://carnation-ws.y.org/demo-jobs)
*   [Volunteer Opportunities](https://carnation-ws.y.org/demo-volunteer-opportunities)

## Documentation Updates

*   [Drupal 10](/docs/development/drupal-10-update/) update assistance. (#787)
*   Documentation for Layout Builder [Facility Content Type](/docs/user-documentation/content-types/facility/). (#1034)
*   Documentation for Layout Builder [Icon Grid component](/docs/user-documentation/layout-builder/icon-grid/). (#1041)
*   Documentation for [Alerts](/docs/user-documentation/content-types/alert/). (#1035)
*   Added instructions for adding/restoring the [Camp Header](/docs/user-documentation/content-types/camp/#camp-header-layout) block state. (#1054)
*   Documentation for adding the [2nd level main menu CTA](/docs/user-documentation/layout-builder/header-footer/#main-menu-cta-block). (#796)
*   Documenting how to use the Layout Builder [advanced style settings](/docs/user-documentation/layout-builder/advanced-options/). (#811)
*   Documentation discussing [Schema.org/ ”Rich Results”](/docs/howto/use-structured-data/) features in the distribution. (#1072)
*   Updated documentation for the [Landing Page content type](/docs/content-structure/content-types/landing-page/) (non-Layout Builder). (#1050)
*   Merged [Development](/docs/development/) and Wiki sections, removed duplicate information. (#1066)
*   Updated documentation tool to Docsy 0.7 & Bootstrap 5. (#1107)
*   Documentation for how to [migrate content into Layout Builder](/docs/howto/migrate-to-lb/). (#820)
*   Documentation for how to [create anchor links](/docs/user-documentation/text-editor/adding-links/#anchor-links). (#1118)
*   [Updated Terms & Conditions](/docs/development/ws-terms-conditions/) to include verbiage for demo content. (#926)

## Bug Fixes

*   Resolved an error occurring during a full profile installation. (#1084)
*   Layout Builder - Google Translate block - Google Translate block showed a double placeholder when editors uncheck "Show content preview". (#1078)
*   Layout Builder - Branch Content Type - Fixed button icon position issue. (#1069)
*   Layout Builder - Camp Quick Links - Resolved styling and alignment issues. (#1051)
*   Layout Builder - Resolved watchdog errors when saving/editing landing pages. (#1040)
*   Ensured Alert previews display only selected paths. (#1059)
*   CKEditor 5 - Fixed issue where Selecting “Source” made WYSIWYG text invisible. (#1063)
*   Layout Builder - Resolved issue with the live site UI menu displaying on top of the admin UI, preventing content editors from accessing the admin UI. (#1060)
*   Layout Builder - Preferred / Home Location feature - Resolved issue with button alignment (#1052)
*   Layout Builder - Preferred / Home Location feature - Linked Home Branch link in header to selected Branch page, and the chevron/drop down to the modal to select a different Branch. (#1053)
*   Resolved an issue with menu items with icons not saving. (#1067)
*   Added missing config to Articles and Events Content Types. (#1068)
*   Included Alert Rearrange in Admin menu. (#1074)
*   Set up schema_article module to be enabled with config. (#1062)
*   Removed a duplicate instance of media_entity_document in composer.json. (#1113)
*   Ensured there are no failed patches on composer install. (#1039)
*   [Resolved an error](https://github.com/ynorth-projects/openy_pef_gxp_sync/pull/6#issuecomment-1791633131) when upgrading from Drupal 9.5.9 to 10.3.0 (#1131)
    *   Credit: Kerry Knopp
*   Fixed `openy_hours_formatter` so it can handle non-time entries, i.e. ‘Closed’. (#1105)
```