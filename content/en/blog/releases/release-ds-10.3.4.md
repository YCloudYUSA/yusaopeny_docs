```markdown
---
title: "Digital Services Release 10.3.4"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.4)
date: 2024-12-09
---

## Updates & New Features

### Small Y Template Features

Full list of components and content types that will be available in the Small Y Template. The Small Y Template utilizes the [Small Y module](https://www.drupal.org/project/ws_small_y). Note that Paragraphs are removed from configuration settings for the Small Y Template.

*   Navigation / Menus
    *   Global Header
    *   Utility Menu
    *   Mega Menu
    *   Global Footer
    *   Breadcrumbs
*   Banners
    *   Tall Hero Banner
    *   Sub-page Hero Banners
        *   Chevron
        *   Frame
    *   Promo Banner
*   Simple Content / WYSIWYG / Tables
*   Cards
*   Ping Pongs
*   Icon Grid
*   Statistics
*   Testimonials
*   Staff
*   Location Finder
*   Accordions
*   Carousels
*   Partners
*   Tabs
*   Branches / Facilities
    *   Branch Amenities
    *   Branch Social Links
*   Articles
    *   Article Views & Filters
    *   Related Articles
*   Events
    *   Event Views & Filters
    *   Related Events
*   Alerts
*   Donations
*   Webforms
*   Search Results

### Layout Builder Updates

Continuing general cleanup, updated documentation, and improvements to the content editing experience for new Layout Builder components and content types.

[Learn more in our docs](https://ds-docs.y.org/docs/user-documentation/layout-builder/).

*   **Layout Builder - Event CT** - Created 'term pages' for Event category tags to display all event items tagged with that term. (#1279)
*   **Layout Builder - Simple Content / WYSIWYG** - Added styles for highlighted text that was missing in the 4 Colorways. (#1508)
*   **Layout Builder - Event & Article listings**
    *   Allow editors to choose how many items to show in Events & Articles Listing views - 3, 6, or 9. (#1542)
    *   Allow editors to choose the type of article to display - News, Press Release, Blog. (#1663)
*   **Layout Builder - Header** - Y Logo / Areas of Impact updates - made 2 configuration options available in the distribution. (#1546)
    *   With tagline
    *   Without tagline
*   **Layout Builder - Banners** - Headers for in-page banners default to H2 to prevent multiple H1 banners being placed on a page. This prevents multiple H1 banners from being placed on a single page, which impacts SEO and accessibility. (#1552)

### Activity Finder / Schedules

*   Added several styling fixes for the Colorways for Activity Finder. (#1625)
*   **Activity Finder** - Added a new "Skip wizard" option on the Activity Finder v4 block that hides the "Start your search for an activity..." wizard and takes users directly to the results (with any filters applied). (#1578)

### Core & Module Updates

*   Updated ColorAPI module. (#1558)

### Sandboxes

*   Added a new Sandbox for the Small Y Template: [https://small-y-stable.y.org/demo-ui-kit](https://small-y-stable.y.org/demo-ui-kit)

### Bug Fixes

*   Fixed a 500 Internal Server Error on Layout Builder Pages Post-August Release. (#1735)
*   Fixed an issue with responsive images in the Simple Content / Text Editor. (#1549)
*   Improved the UI of the Membership Calculator step buttons to look better on tablets. (#1613)
*   Updated the UI of the Membership Calculator to match the design for the four Colorways. (#1611)
*   Resolved an issue with the Table arrows in mobile devices not working. (#1593)
*   Made it possible for admins to override the system 404 page on D10.2+. (#1619)
*   Fixed auto creation of redirects provided by the Redirects module that was not working in combination with openy_redirect. (#1620)
*   **Layout Builder - Banners** - Fixed video plays to play inline on iPhone instead of fullscreen. (#1646)
*   **Activity Finder** - Ensured if the solr server is unavailable Activity Finder will not throw a 500 error and WSOD (White Screen of Death). (#1753)
    *   Credit: YMCA Central Ohio
*   Fixed an issue with y_camp module when attempting to upgrade Open Y from version 10.3.2 to 10.3.2.3. (#1765)
```