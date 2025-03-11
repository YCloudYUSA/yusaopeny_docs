```markdown
---
title: Digital Services Release 9.2.13
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/9.2.13.0)
date: 2023-03-14
---

## Updates & New Features

### Layout Builder (v2)

Expanding upon the December release, we are making additional components and content types compatible with Layout Builder. [Learn more in our docs](https://ds-docs.y.org/docs/user-documentation/layout-builder/).

- Modals

    - A pop-up / modal that can display on page load.
    - [Modal Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/modal/)

- Breadcrumbs

    - Secondary navigation that allows users to understand where they are located within a site.
    - [Breadcrumb Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/breadcrumbs/)

- Testimonials component

    - Component for displaying short testimonials or quotes from Y members in an interactive carousel-style format.
    - [Testimonials Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/testimonials/)

- Partners component

    - Component for displaying logos / info of partners or sponsors within a page using Layout Builder.
    - [Partners Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/partners/)

- Staff Members component

    - Component for displaying simple staff member info cards (with image, name, title) within a page using Layout Builder.
    - [Staff Members Training & Documentation](https://ds-docs.y.org/docs/user-documentation/layout-builder/staff-members/)

- Articles

    - A new Article content type combines all news-related content types into a flexible content type and allows content editors to include Layout Builder components within an article page.
    - [Articles Training & Documentation](https://ds-docs.y.org/docs/user-documentation/content-types/lb-article/)

- Related Articles

    - Component for displaying related articles within an article node page and within other pages (i.e. landing pages) using layout builder.
    - [Related Articles Training & Documentation](https://ds-docs.y.org/docs/user-documentation/layout-builder/related-articles/)

- Events

    - A new Event content type that allows content editors to include Layout Builder components within an event page.
    - [Events Training & Documentation](https://ds-docs.y.org/docs/user-documentation/content-types/lb-event/)

- Related Events

    - Component for displaying related events within an event node page and within other pages using layout builder.
    - [Related Events Training & Documentation](https://ds-docs.y.org/docs/user-documentation/layout-builder/related-events/)

- Branches

    - Updated Branch content type that allows for layout builder components to be included within a Branch page, in addition to branch-specific content.
    - [Branch Training & Documentation](https://ds-docs.y.org/docs/user-documentation/content-types/branch/)

- Branch Hours

  - Banner for displaying individual branch hours with a breakdown by day and space for highlighting variable hours such as Holiday hours.
  - [Branch Hours Training & Documentation](https://ds-docs.y.org/docs/user-documentation/content-types/branch/#--branch-hours)

- Branch Menu

    - Single level sub-menu that displays within a branch page (and sub-pages) that allows users to drill down to additional content specific to that branch.
    - [Branch Menu Training & Documentation](https://ds-docs.y.org/docs/user-documentation/content-types/branch/#branch-menu)

- Branch Amenities

  - A component for displaying all Amenities available at an individual branch.
  - [Branch Amenities Training & Documentation](https://ds-docs.y.org/docs/user-documentation/content-types/branch/#branch-amenities)

- Branch Social Links

    - Component for placing Branch-specific social media links on a Branch page.
    - [Branch Social Links Training & Documentation](https://ds-docs.y.org/docs/user-documentation/content-types/branch/#branch-social-links)

- Additional Layout Builder improvements, updates, and documentation:

    - Added Layout Builder roadmap summary to docs
    - Standardized and updated existing component field names for consistency
    - Resolved issues with low contrast of text over images
    - Updated documentation to include [new components](https://ds-docs.y.org/docs/content-structure/layout-builder/) and [updates to content types](https://ds-docs.y.org/docs/content-structure/content-types/)
    - Included `node_revision_delete` in distribution w/ default settings


### Drupal Core Update

- Updated the YUSA Distribution to the most recent stable version of Drupal Core - **Drupal Core 9.5.**


### Activity Finder / Schedules

- Resolved an issue with the guided flow for Activity Finder not showing results if users skip a step
- Admin alert for Daxko API updates - Created an alert message for admins that directs Y admins to update from GroupEx to the newer version of the Daxko API, along with [documentation on how to make the update](https://ds-docs.y.org/docs/development/daxko/).
- Removed a filter within the Code block that was preventing direct pasting of GroupEx Pro embed codes.


### Locations & Maps

- Allow “Directions” link text to be customized by content editors


### UX Improvements

- 404 Page Improvements - users who reach a 404 page will see a 404 page with the association’s basic contact information and a contact webform


### Admin / Content Editor Updates

- Created documentation for all YUSA Sandbox environments.
- Added a [Glossary](https://ds-docs.y.org/docs/glossary/) to Website Services documentation.
- Sandboxes, Event Content Type - ensure dates for demo event content are always set to be in the future.
- Included `node_revision_delete` in distribution w/ default settings


## Bug Fixes

- Resolved an issue with H2 text size not displaying correctly
- Removed Google Translate logo from Select Language menu
```