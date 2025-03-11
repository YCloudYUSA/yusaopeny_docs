---
title: "Digital Services Release 10.3.2"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.2)
date: 2024-03-12
---

## Updates & New Features

### Layout Builder Updates

Continuing general cleanup, updated documentation, and improvements to the content editing experience for new Layout Builder components and content types.

[Learn more in our docs](https://ds-docs.y.org/docs/user-documentation/layout-builder/).

*   Layout Builder - Program CT - Added styling for "Categories listing" view block to match the new styles for headers, buttons, etc. (#1273)
*   Layout Builder - Simple Content / WYSIWYG - Included approved brand headers colors into the default color selector. (#1256)
*   Layout Builder - Ping Pong - Created new default layout options for Ping Pongs (50/50, 33/66, 66/33) for admins to choose. (#1296)
*   Layout Builder - Branch Social Links - Added icons for X and Threads (#1286)
*   Layout Builder - Search - Ensured Layout Builder content types are [indexed by internal search](https://ds-docs.y.org/docs/development/install-solr-site-search-for-open-y/#configure-solr-to-index-the-new-content-types). (#941)
*   Layout Builder - Made Membership Framework compatible with Layout Builder. (#900)

### Activity Finder Updates

*   Allowed Activity Finder to use new location types that are created using the documented process of [adding additional location types](https://ds-docs.y.org/docs/howto/map-settings-config/#adding-additional-location-types). (#1345)


### TractionRec API Integration for Activity Finder (#1142)

*   The [project Readme](https://github.com/YCloudYUSA/openy_traction_rec) contains detailed instructions for the TractionRec API Integration configuration.
    *   Written for Technical Team Member and Salesforce Administrator
*   Setup will require coordination between both a development partner and a Salesforce admin. **Please work with your website Vendor.**

### Y360 Schedules Integration

*   Included the [Y360 Schedules Integration](https://ds-docs.y.org/docs/user-documentation/schedules/group-schedules/) into the YUSA Website Services Distribution. (#1099)

### Admin / Content Editor Enhancements

*   Reviewed Branch, Camp, and Facility content types to reduce "CSS bleed" when Layout Builder is not used. (#1023)
*   Update build script to use the latest yusaopeny-project version on Sandboxes. (#1303)
*   Created upgrade path for btbutton ckeditor4 plugin. (#723)
*   Added new feature to handle internal weekly schedules, including:
    *   Creating a front end admin interface for admins to edit / manage weekly schedules content. (#1266)
    *   Added drag & drop functionality to the calendar for admins to manage weekly schedules content. (#1269)
    *   Created weekly and daily calendar views for schedule content. (#1268)
*   Extended the functionality of the Promotion Content type to allow for use in more components and to allow admins to easily order promotional content. (#1175)

### Event (LB) Content Type Updates

*   Leveraging the [Smart Date module](https://www.drupal.org/project/smart_date) to allow for more flexibility for Event displays. (#910)
*   Improved front end display for a variety of event types all-day, single-day and multi-day events. (#495)
*   Made some front end design changes to the Event Content Type to include:
    *   Updated icons for calendar and location.
    *   Updated Event node page sidebar design.
    *   Improved Event card linking UX.
*   Removed the redundant 'Locations' section from the body area on the Event node page. (#1280)
*   Improved handling for recurring events. (#942)

### SEO

*   Added configuration options for ‘search_page_id’ and ‘search_query_key’ to Google Search settings. (#1254)
*   Documented how to [talk to your CRM provider](https://ds-docs.y.org/docs/howto/track-users/#requesting-cross-domain-tracking-support) about handing queries in redirects (#877)

### Demo Content

*   Added demo content to sandboxes for all Layout Builder Article types: Blog, Press Release, and News. (#1290)
*   Added demo content to sandboxes for new Promotion content type. (#1285)
*   Enabled Cachet on public Sandboxes. (#1306)

### Design System - Y Styles

“Y Styles” helps site builders customize their sites in an accessible and brand-compliant manner.

[Documentation for Y Styles](https://ds-docs.y.org/docs/user-documentation/layout-builder/advanced-options/)

*   Updated the ‘Y Styles’ admin interface to include titles for icons, so that site builders can more easily understand the available style configuration options. (#1278)

### Documentation

*   Documented how [Colorways work](https://github.com/YCloudYUSA/yusaopeny_docs/pull/76) for developers. (#1301)
*   Documented how to set up [multi-factor authentication for site administrators](https://ds-docs.y.org/docs/howto/use-2fa/). (#237)
*   Documented the [resulting new interface](https://ds-docs.y.org/docs/user-documentation/text-editor/adding-links/) of the Button plugin. (#728)

### Bug Fixes

*   Layout Builder Articles Listing - Fixed issue where Articles Filter did not search article body. (#1288)
    *   Credit: Carol Petrossi @ ImageX
*   Layout Builder Programs CT - Fixed issue where Banners were not displaying edge-to-edge. (#1277)
*   Resolved the 500 error occurring on the /demo-location-finder path after installing the standard YUSAOpenY profile in the open-y-subprojects/openy_map repository. (#1298)
*   Fixed deprecation notice in strip_tags() function (#1344)
    *   Credit: Roman Salo @ 5Jars
*   Fixed openy_repeat so it can be used as a Schedules page filter. (#1100)
*   Applied javascript cookie patch. (#1346)
    *   Credit: YMCA Denver
*   Polyfill CDN Issue Affecting YMCA Schedules pages, which was experiencing errors due to issues with the polyfill CDN, resulting in JavaScript aggregation problems. More information can be [found in our documentation](https://ds-docs.y.org/blog/2024/02/29/polyfill-security-notice/). (#1351)
