```markdown
---
title: Digital Services Release 10.2.14
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.2.14)
date: 2023-06-14
---

## Updates & New Features

### Layout Builder v3.1

Expanding upon the March 2023 release, we are making additional page components and content types compatible with Layout Builder. [Learn more in our docs](https://ds-docs.y.org/docs/user-documentation/layout-builder/).

The final set of components and content types will be completed in the September 2023 release.

*   Global Header / Footer Elements
    *   All the components needed for a configurable header and footer, including logo, search, translate menu, main menu, footer, etc.
    *   [Header / Footer Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/header-footer/)
*   Event Views & Filters
    *   Components to feature, filter, and list events using Layout Builder.
    *   [Event Views & Filters Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/event-views/)
*   Article Views & Filters
    *   Components to feature, filter, and list articles using Layout Builder.
    *   [Article Views & Filters Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/article-views/)
*   Location Finder & Amenities Filters
    *   A set of components for searching, filtering and viewing YMCA Locations.
    *   [Location Finder Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/location-finder/)
*   Membership Framework
    *   Place the Membership Framework in a Layout Builder page
    *   [Membership Framework Documentation & Training](https://ds-docs.y.org/docs/user-documentation/membership/)
*   VirtualY
    *   Place VirtualY in a Layout Builder page
*   Activity Finder
    *   Place the Activity Finder application in a Layout Builder page.
    *   [Activity Finder Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/activity-finder/)
*   Donations
    *   Component allowing content editors to add an embedded donation form to their site and create a separate call to action to direct users there.
    *   [Donations Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/donate/)

### Updated Component Designs

Existing Layout Builder components have been modified to improve accessibility compliance and include use of brand colors.

*   Cards
    *   Updated Card styles to make the text over image more accessible and include additional brand colors.
*   Carousels
    *   Updated Carousels to remove the text and CTA covering the image, and placed controls below the component to reduce visual noise; included additional brand colors.
*   Statistics
    *   Updated Statistics to remove text, statistics and CTA overlaying the image, and placed them in their own distinct elements; included additional brand colors.
*   Sidebar Menu
    *   Sidebar Menu updated to include additional brand colors.
*   Tabs
    *   Tabs updated to include additional brand colors.

### Drupal Core Update

*   Updated the YUSA Distribution to the most recent stable version of Drupal Core - **Drupal Core 10**

### Activity Finder / Schedules

*   Resolved an issue with keyword search not working
*   Patched a security issue that allowed malicious redirects

### Locations & Maps

*   Branches - Hid Holiday hours if it contains no content, and ensured Holiday hours display if the current date is a holiday
*   Allowed Canadian addresses on Branch Layout Builder pages

### UX Improvements

*   Resolved issue with Focal Point module that was causing issues with the front end display of responsive images

### Admin / Content Editor Updates

*   Set the global default theme to Carnation
*   Removed “Font” and “Size” options from WYSIWYG styles

### Design System - Y Styles

“Y Styles” helps site builders customize their sites in an accessible and brand-compliant manner.

[Documentation for Y Styles](https://ds-docs.y.org/docs/user-documentation/layout-builder/advanced-options/)

*   Colorway Configuration - Created 4 YMCA brand compliant color schemes for associations to choose from when building website pages:
    *   Green / blue
    *   Blue / purple
    *   Purple / red
    *   Red / yellow
*   Created variations of Banners and Cards to allow more design flexibility for content editors when creating pages.
*   Created variations of Landing Page components to match the 4 brand compliant color schemes, including:
    *   Global elements (header, footer, utility menu, mega menu)
    *   Hero Banners + Banner variations
    *   Accordions
    *   Breadcrumbs
    *   Cards + Card variations
    *   Carousels
    *   Location finder
    *   Modals
    *   Ping Pongs
    *   Promo Cards
    *   Sidebar Menus
    *   Simple Content / Tables
    *   Sponsors
    *   Statistics
    *   Tabs
    *   Testimonials
    *   Webforms

## Bug Fixes

*   Added pathauto aliases for new Layout Builder Content Types
