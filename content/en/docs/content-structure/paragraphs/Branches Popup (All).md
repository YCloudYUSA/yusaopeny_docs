---
title: Branches Popup (All)
---

This dynamic paragraph renders the locations selection popup, based on the current node. It's typically used to allow users to select a branch or location from a popup window. This selection can then influence other elements on the page, such as filtering schedules or classes.

Relates to:

*   [Schedule search list](Schedule search list.md)
*   [Classes Listing](Classes Listing.md)

### Fields

| Name  | Machine name | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| Block | `field_prgf_block` | Yes | Block reference to the view/block that provides the location selection options.  It should have a default value configured and is typically hidden in the form display to prevent direct user modification.  This field is the key to connecting the paragraph to the actual location data. |

### Usage

This paragraph is often used in conjunction with other paragraphs and blocks to create a location-aware experience.  For example, it might be used on a page with a schedule search to allow users to filter the schedule by location.

The `openy_branch_selector` module is often used to provide the functionality for selecting and saving a user's preferred branch. The selected branch can then be used to pre-populate location filters and customize the user's experience.

The specific appearance and behavior of the popup are determined by the view/block referenced in the `field_prgf_block` field. This allows for a high degree of customization to match the specific needs of the site.
