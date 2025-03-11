---
title: Layout Builder Roadmap
date: 2023-03-09
description: Our product plan for 2023
---

Skip to: [v1](#layout-builder-v1) | [v2](#layout-builder-v2) | [v3](#layout-builder-v3)

## Layout Builder v1

Released in [9.2.12](https://github.com/YCloudYUSA/yusaopeny/releases/tag/9.2.12), December 2022

### Page components

**Accordions**
: Expandable pairs of question/answer or header/section fields. Maps to paragraphs: `accordion_section, faq, ymca_accordion`.

**Cards (Horizontal & Vertical)**
: Flexible cards style components.

**Carousels**
: A full-width display with multiple sets of a header, description, and call to action overlaid on an image.

**Grid CTA Content**
: Sets of headline, description, and link displayed in n-item wide rows. Sometimes icons or images are added.

**Hero Banners**
: A full-width, almost full-height display with a header, description, and call to action overlaid on an image.

**Ping Pong Blocks**
: Usually paired, sets of media, header, description, and call to action arranged horizontally.

**Promo Cards (sidebar only)**
: A title, headline, description, and link that usually display in the sidebar.

**Statistics**
: Infographic-like display to highlight relevant stats.

**Tabs**
: Allows users to switch page views by selecting tabs across the top of the page instead of having to navigate to a new page. This component relies on the [Paragraphs](https://www.drupal.org/project/paragraphs) and [Entity Reference Revisions](https://www.drupal.org/project/entity_reference_revisions) modules.

**Simple Content (w/ responsive tables)**
: Allows for the management of responsive tables within a page.

**Webforms**
: Basic webform that can be embedded within a page.

### Menu / Navigation

**Simple Menu (sidebar only)**
: A simple 1-level sidebar menu that can display in either the right or left sidebar area.

## Layout Builder v2

Planned for release 9.2.13, March 2023.

### Content types

**Articles (News / Blog / Press Release)**
: Ability to include Layout Builder components in Article pages; combining existing like-content types into a single CT.

**Events**
: Ability to include Layout Builder components in Event pages.

**Branch**
: Ability to include Layout Builder components in Branch pages.

### Menu / Navigation

**Breadcrumbs**
: Secondary navigation that allows users to understand where they are located within a site.

**Branch Menu (microsite menu)**
: Sub-menu that displays within a branch page (and sub-pages) that allows users to drill down to additional content specific to that branch.

### Page components

**Modals**
: Modals can be triggered on page load or when a button is clicked (i.e. confirmation screen).

**Testimonials**
: Display of short testimonials or quotes from Y members.

**Partners / Sponsors**
: Displays logos / info of partners or sponsors.

**Staff Members**
: Displays simple staff member info cards with image, name, title.

**Related Articles**
: Component for displaying related articles within an article node page and within other pages using layout builder.

**Related Events**
: Component for displaying related events within an event node page and within other pages using layout builder.

**Branch Hours**
: Banner display individual branch hours and other branch-related info.

**Branch Amenities**
: All Amenities available at an individual branch. There is a version of branch amenities that includes open vs closed amenities. For this version, we are keeping it simple and only implementing the version that displays available/open amenities. We will come back to the one that lists open vs closed (see Middle Tennessee).

**Branch Social Links**
: Should we include an area for social sharing links on individual branch / location pages in v2 or v3?

## Layout Builder v3

Planned for June 2023.

### Content Types

**Camp**
: Content type for camp locations. Allows for flexibility to include Layout Builder components in the Camp CT pages. Additional items to consider including within the Camp CT template are: Pricing Charts, Schedules (see links for Camp Hanes).

**Facility**
: Flexible CT for other location types, such as Child Cares. Allows for ability to include layout builder components in Facility CT pages.

**Alerts**
: Ensure Alerts are working with the Layout Builder landing page content type, and other content types that might use alerts (Branches, Camps, etc.).

### Custom Pages / Applications

**Locations Page**
: Ability to include Layout Builder components into the Location finder page, below the locations listing.

**Membership Calculator**
: Ability to include Layout Builder components within the Membership Calculator landing pages.

**Virtual Y**
: Ability to include Layout Builder components into VirtualY pages.

**Activity Finder**
: Ability to include Layout Builder components within pages that display Activity Finder content.

### Menu / Navigation

**Global Header**
: Global header elements.

**Global Footer**
: Global footer elements.

**Utility Menu**
: Utility menu links.

**Mega Menu**
: Multi-level interactive menu (up to 3 levels).

**Home / Preferred Branch**
: Allow for users to select a single branch location as their home / preferred branch via a modal that displays on the associations' home page when the user first arrives on the site. Selecting a home branch will have a link to the Branch display in the user's utility menu for easier access to the Branch page(s). Users can also select their home / preferred branch by checking the "My Home Branch" checkbox once on a Branch page. They can also deselect a Branch as their home Branch, and can click on the "Change" link to select another location from a modal.

**Camp Menu**
: Menu for camp-specific pages; similar to Branch menu, but allows for 2 levels instead of a single level.

**Camp Quick Links**
: Additional menu for camps that will allow for the placement of up to 6 additional links in addition to the camp menu.

### Page Components

**Event Views & Filters**
: Views & filters for event listings that allow users to sort events by location and search by keyword.

**Article Views & Filters**
: Views & filters for article listings that allow users to sort articles by location and topic tag, and search by keyword.

**Location Amenities Filter (sidebar filter)**
: Amenities filter on Location finder page where users can select one or more amenities and have the location results display locations where those amenities are available. Amenities can be placed into categories, and those categories can be related to location content types (Branches, Camps, Facilities).

**Camp Video Banner**
: Hero banner that displays an auto-playing video in desktop views, and a video on-click in mobile views.

**Code Block**
: Need to move the Code Block into a Layout Builder component.
