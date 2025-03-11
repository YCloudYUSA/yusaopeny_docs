```markdown
---
title: Digital Services Release 10.3.0
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.0)
date: 2023-09-12
---

## Updates & New Features

### Layout Builder

Expanding upon the June 2023 release, we are making the final set of page components and content types compatible with Layout Builder. We have also improved the design and functionality of some existing components and content types.

[Learn more in our docs](https://ds-docs.y.org/docs/user-documentation/layout-builder/).

The following components and content types are now compatible with Layout Builder:

*   Home / Preferred Branch
*   Camp Content Type
*   Camp Menu (Microsite Menu)
*   Camp Quick Links
*   Facility Content Type
*   Alerts
*   VirtualY
*   Small Banner
*   Branch Amenities component redesign
*   Icon Grid component redesign

#### LB Events

*   Allow Content Editors to customize Branch Contact info on Layout Builder Event node pages.

#### LB Locations

*   Modified the front end display of Location hours used in the Location cards on the Layout Builder Location Finder page.

### Admin / Content Editor Enhancements

*   Made Paragraphs Type help available to content editors and site admins so that they can easily learn more about how to use Paragraph components.
*   Created Standard and Custom install packages for Layout Builder components.
    *   More about [installation types](/docs/wiki/open-y-2.0-root-yaml-files/#openyinstallation_typesyml)
*   Improved the revision functionality in Layout Builder.
*   Gave administrators the ability to resolve Upgrade conflicts from within the Upgrade Dashboard UI.
*   Updated Meta tags to version 2.
*   Turned off a default Carnation setting that was making buttons display text in all caps.

### CKEditor 5 Upgrade

*   Updated the YUSA Distribution from CKEditor 4 to CKEditor 5.
*   Added Full HTML Configuration to CKEditor 5.
*   Deprecated old media CKEditor 4 plugins in favor of new Media CKEditor5 button.

### SEO

*   Article Content Type - Set up Meta Tags & Schema.org configuration
*   Landing Page Content Type - Set up Meta Tags
*   Branch Content Type - Set up Meta Tags and Schema.org configuration for Locations.
*   Accordion component - Allow content editors to designate an accordion as an FAQ item so that FAQ schema can be added to the component when relevant.

### Accessibility

*   Resolved accessibility issues found in audits from Spring 2023:
    *   WAVE browser tool
    *   Keyboard accessibility
    *   Screen Reader

### Design System - Y Styles

“Y Styles” helps site builders customize their sites in an accessible and brand-compliant manner.

[Documentation for Y Styles](https://ds-docs.y.org/docs/user-documentation/layout-builder/advanced-options/)

*   Created Border style variations
*   Created Corner radius variations
*   Created Button fill style variations
*   Created Button position variations
*   Created Text/Button alignment variations
*   Created variations of page components and content types to match the 4 brand compliant color schemes (Green, Blue, Purple, Red), including:
    *   Article Content Type
    *   Article Filters & Views
    *   Branch Content Type
    *   Branch Amenities
    *   Branch Hours
    *   Branch Menu
    *   Branch Social Links
    *   Home / Preferred Branch
    *   Camp Content Type
    *   Camp Menu
    *   Camp Quick Links
    *   Event Content Type
    *   Event Filters & Views
    *   Facility Content Type
    *   Icon Grid

### Documentation

*   How to upgrade your Y association website to Drupal 10.
*   How to resolve upgrade conflicts within the Upgrade Dashboard UI.
*   How to allow UTM codes in Activity Finder.
*   Updates to Layout Builder advanced help links for all Layout Builder compatible components and content types.
*   How to include a social media feed on a Camp page.
*   How to use CKEditor 5 updates including new media buttons, new button interface, new color plugins, etc.
*   How to use global style settings for the Design System.
*   How to batch upload media files.
*   How to use Linkit Module.

## Bug Fixes

*   Fixed Preferred Location in Drupal 10.
*   Fixed an issue where memory consumption was too high.
*   Fixed CKEditor 4 to 5 upgrade path for use cases when an association uses a customized Full Html WYSIWYG editor configuration.
