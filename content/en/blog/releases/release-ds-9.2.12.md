```markdown
---
title: Website Services 9.2.12
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/9.2.12.1)
date: 2022-12-14
---

## Updates & New Features

### Layout Builder (version 1)

Content editors now have a new tool to build dynamic landing pages: Layout Builder! The "Landing Page (Layout Builder)" content type enables editors to build custom landing pages with a drag-and-drop interface. [Learn more in our docs](https://ds-docs.y.org/docs/user-documentation/layout-builder/).

The following components are available in Layout Builder v1.0:

- **Accordion Components**
    - Pairs of question/answer or header/body components that expand or collapse on click to either hide or reveal content.
    - [Accordion Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/accordion/)

- **Card Components**
    - Flexible card-style components that allow for up to 4 cards with images to display across a page, depending on the chosen layout.
    - [Cards Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/cards/)

- **Carousel Components**
    - A full-width interactive page component that displays multiple images for users to scroll through.
    - [Carousel Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/carousel/)

- **Grid CTA Components**
    - Flexible grid-style components that allow for up to 4 grid items to display across a page, with the option to include icons in place of images.
    - [Grid CTA Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/grid-cta/)

- **Hero Banner Components**
    - A full-width, almost full-height banner displaying at the top of a page, with a title/header, description, and call to action overlaying an image.
    - [Hero Banner Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/hero-banner/)

- **Ping Pong Components**
    - Paired sets of full-width page components that allow for an image and text to display either right or left aligned (i.e., image on right, text on left; text on right, image on left).
    - [Ping-pong Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/ping-pong/)

- **Promo Card Components (Sidebar)**
    - A component with a title, headline, description, and link that can be placed in the right or left sidebar of a page.
    - [Promo Card Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/promo-card/)

- **Simple Menu Components (Sidebar)**
    - A simple 1-level sidebar menu that can display in either the right or left sidebar of a page.
    - [Simple Menu Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/simple-menu/)

- **Statistics Components**
    - A full-width infographic-like display that highlights relevant figures and statistics to front end users.
    - [Statistics Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/statistics/)

- **Table Components**
    - A component for organizing and displaying content in rows and columns.
    - [Table Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/table/)

- **Tabs Components**
    - A component with tabs displaying at the top that allows users to see more content by selecting a new tab.
    - [Tabs Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/tabs/)

- **Webform Components**
    - Embed an existing webform on a page.
    - [Webform Documentation & Training](https://ds-docs.y.org/docs/user-documentation/layout-builder/webform/)

### 9.4 Drupal Core Update

- Updated the YUSA Distribution to the most recent stable version of Drupal Core.

### Gated Content - Private Pages

- Allows Y's to have one or more pages of their website gated so that only association employees or members of their board of directors are allowed access.

### Branches - Improvements for displaying Branch location Holiday hours

- In the Branch Hours section, the day of the week labels (Mon, Tue, Wed, etc.) can be overridden with custom text.
    - Gives branches the ability to overwrite "Mon" with "Monday, July 4th" and/or "Sat" with "Christmas Day".

### Activity Finder / Schedules

- Disabled "View PDF" button when schedule page returns no results
    - When no results are returned in Activity Finder, the "Download Weekly PDF" button does not display on the page.

- Improvements to file names for PDF schedule downloads
    - PDF Schedule download files have been given more user-friendly names.
    - Example: "West YMCA October 24 - October 30"

- Drupal 10 support
- PHP 8.1 compatibility fixes

### Locations & Maps

- Location Page Improvement on Tablet Breakpoint
    - On tablets, users will now be able to see the list of amenities displaying below the content rather than in the sidebar.

- Filter Locations by ID instead of title
    - Locations are now filtered by ID instead of title/name. This resolves an issue where duplicate location names were causing problems with results when filtering by amenities.

### UX Improvements - Previous story / Next story (for Blogs)

- Users can view suggested blog posts at the bottom of a blog post page and can click through to view the previous or next blog post.

### Admin / Content Editor Updates

- Show "Add Content" in Admin Menu
    - Made the "Add Content" menu item available by default for site administrators.

- Ability to quickly clone a node or entity
    - Gives site admins the ability to clone a node or entity so they can create new content quickly without having to create each node from scratch.

- Batch Upload of Media Files
    - Content editors can now upload multiple images and PDFs in a single step to streamline their workflows.

- Update to Admin menu items
    - Renamed OpenY admin menu to YMCA Website Services.

## Bug Fixes

### Unpublished Branches show "Restricted Access" in "Blog Posts Listing" Block

- Resolves an issue where unpublished branches were displaying as "Restricted Access" in the blog post listing locations filter.

### Status page is partially empty

- Fixed an issue where the Status Report page was missing information.

### Membership Builder - The button label isn't changed to the "Selected" on the membership page

- Resolved a UX issue where buttons were missing indicators ("selected" text or button color changes) that a membership type had been selected.

### Reduce z-index of fixed header

- Prevents unwanted side effects in layout builder.

### Openy_custom fixes/changes minor release

- Resolved 'failed to open stream error' on Drupal backend
- Renamed admin menu to YMCA Website Services
- Updated home branch module learn more help text
- Made home branch popup configurable
- Enabled translation of form buttons with extra submit check

### Alerts updates & bug fixes

- Ensured `<front>` or `/` work for setting homepage Alert visibility
- Cleaned up help text for Alert visibility section
- Resolved PHP 8 deprecation warnings
- Handled edge case for missing `alert_location` field
- Cleaned up backend warnings for alert requests
```