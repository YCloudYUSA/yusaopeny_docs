```markdown
---
title: "Digital Services Release 10.3.3.3"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.3.3)
date: 2024-08-13
---

## Updates & New Features

### Layout Builder Updates

Continuing general cleanup, updated documentation, and improvements to the content editing experience for new Layout Builder components and content types.

[Learn more in our docs](https://ds-docs.y.org/docs/user-documentation/layout-builder/).

*   WYSIWYG / Simple Content - Created the ability for Y admins / content editors to copy text from Word and paste it into the WYSIWYG, and have the WYSIWYG clear out text formatting from Word. (#1308)
*   Social Sharing - Updated the `y_lb share` block to replace the Twitter logo with the X logo. (#1440)
*   Partners component - Heading size matches other components. (#1576)
*   Mega Menu - Allow Menu CTA to reference existing blocks. (#1583)

### Design System Updates

*   Colorways - Set up Schedules styles so that they follow the established YUSA Colorway. (#1358)
*   Worked to resolve font size issues between YUSA & Y Canada Headings. (#1399)

### Activity Finder / Schedules / Y360 Updates

*   [Y360] Improved Date Handling and Error Management in OpenY Repeat Module (#1535)
*   [Repeat Schedules] Added URL for studios/rooms. (#1584)
*   [Simple Schedules] Set up display weekly simple schedules with anonymous site users. (#1554)
*   [Simple Schedules] Fixed location of Event modal window for content editors. (#1598)

### Sandboxes

*   Fixed a critical Search API issue in the Sandboxes. (#1539)

### Documentation

*   Updated [Activity Finder Wiki documentation](https://ds-docs.y.org/docs/development/program-event-framework/activity-finder/). (#1281)
*   Improved documentation for [developers contributing patches to the distro](https://ds-docs.y.org/docs/development/contributing/). (#1537)
*   Updated [user](https://ds-docs.y.org/docs/user-documentation/schedules/simple-schedules/) and [developer](https://ds-docs.y.org/docs/development/program-event-framework/pef-schedules/) documentation for Simple Schedules. (#1536)
*   Documented the process for [avoiding outdated configuration](https://ds-docs.y.org/docs/howto/avoid-outdated-config/) (#1531)

### Bug Fixes

*   [Layout Builder - Preferred Branch] Resolved an issue where the Preferred Location modal didn’t work if the user Account Menu was hidden. (#1410)
*   [Schedules] Fixed an issue with the session description in Repeat Schedules not displaying in the calendar. (#1501)
*   [Drupal 10.2 update] "Remove" button wasn't aligned with the field in the featured Event/Article block in the LB admin panel. (#1502)
*   [Layout Builder - Cards] Ensured Card tags are translated. (#1503)
*   [Drupal 10.2 update] Fixes broken styles for Add or select media modal. (#1507)
*   [Activity Finder] Fixed Font styles of text elements on the first step of Activity Finder. (#1511)
*   [Activity Finder] Fixed some styling issues in the top filter icons and bottom CTA sections of Activity Finder. (#1512)
*   [Activity Finder] Fixed filter modal styles. (#1513)
*   [Activity Finder] Added colored border styles for checked options. (#1514)
*   [Activity Finder] Fixed Day & Time step styles. (#1515)
*   [Activity Finder] Fixed Activity Finder results page styles. (#1519)
*   [Promotion Content Type] Ensured the description of the promotion is displayed in Card mode view. (#1521)
*   [Layout Builder - Camp Banner] Removed extra white space around the banner on Camp pages (#1523)
*   [Layout Builder - Camp CT] Fixed an alignment issue with the Camp info section. (#1524)
*   [Layout Builder - Event CT] Fixed a layout issue with the event sidebar on tablet devices. (#1525)
*   [Layout Builder - Article CT] Fixed a layout issue for Related Articles. (#1526)
*   [Layout Builder - Location Finder] Fixed an alignment issue with Location card titles. (#1527)
*   [Schedules] Fixed styles for ‘refine results’ filter and icon. (#1528)
*   [Schedules] Fixed the styles for the paginator on mobile devices. (#1529)
*   [Layout Builder - Cards] Resolved an issue with the Chevron Card variation styles. (#1532)
*   [Layout Builder - Simple Content / WYSIWYG] Ensured links display with proper link styles in body text. (#1533)
*   [Drupal 10.2] Ensured Membership Builder works in Drupal 10.2. (#1538)
*   [Layout Builder - Articles] Fixed the schema dates and publisher. (#1540)
*   [Layout Builder - Banners] Fixed an issue with YouTube videos not looping. (#1541)
*   [Layout Builder - Mega Menu] Fixed an issue with main navigation redirecting instead of showing child menu items. (#1544)
*   [Layout Builder - Global Footer] Ensured footer link text is wrapping. (#1550)
*   [Simple Schedules] Adding a session when no color is set on the parent Activity no longer results in an error. #1555)
*   [Simple Schedules] Cleaned up dependencies that were missing from composer.json. (#1556)
*   Fixed an issue with long email addresses not wrapping on mobile devices. (#1561)
*   [Repeat Schedules] Fixed an issue with instructor name and duration not displaying for schedule items. (#1563)
*   [Repeat Schedules] Resolved some styling issues with the Schedules sidebar. (#1564)
*   [Repeat Schedules] Fixed the border radius of the Schedules results list and the styles for the Add to Calendar window. (#1565)
*   [Repeat Schedules] Fixed styling of the Add to Calendar link. (#1567)
*   [Repeat Schedules] Fixed the missing line below the Refine Results button. (#1568)
*   [Repeat Schedules] Fixed the color of the paginator in the results to match the selected Colorway. (#1570)
*   [Repeat Schedules] Fixed the styling for the Locations filter. (#1571)
*   [Repeat Schedules] Resolved an issue with the Location details window not displaying in mobile devices. (#1572)
*   [Repeat Schedules] Fixed styling of the Schedules block for the Canadian Colorway. (#1573)
*   [Layout Builder - Admin UX] Ensured the entity modal browser close button is visible. (#1582)
*   [Layout Builder - Branch Header] Fixed long email addresses so they don’t go beyond the border in Branch Contacts Info section. (#1594)
*   [Layout Builder - Partners] Resolved an issue with a missing image file stopping the block from being saved. (#1600)
*   [Layout Builder - Events] Fixed an issue with event listing and featured event images being stretched on tablet devices. (#1607)
*   [Layout Builder - Staff] Fixed long email addresses so they wrap properly. (#1590)
