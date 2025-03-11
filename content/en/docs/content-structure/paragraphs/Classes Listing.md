```markdown
---
title: Classes Listing
description: "Displays published classes and provides filtering options."
---

The **Classes Listing** paragraph displays all published classes, grouped by activity.

The **Classes Listing Filters** provide a filter form with the following fields:

- Location
- Program
- Sub-program
- Activity

Relates to [Branches Popup (All)](Branches Popup (All).md).

### Fields

| Name  | Machine name | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| Block | `field_prgf_block` | Yes | Block reference to the view/block.  A default value should be set, and this field should be hidden in the form display. |

### Use Cases

#### Use case 1: Classes Listing paragraph on a Program subcategory page **WITHOUT** location popup paragraph

**1.1 Preferred branch is selected and no location in URL**

*   When I open a Program subcategory page with the Classes Listing paragraph **WITHOUT** a location popup on the page.
*   And I have a preferred branch set (via cookie).
*   And I don't have `location=%` in the URL.
*   Then the filter by location should be pre-defined based on the cookie value.
*   And the results should be filtered accordingly.

**1.2 Preferred branch is empty and no location in URL**

*   When I open a Program subcategory page with the Classes Listing paragraph **WITHOUT** a location popup on the page.
*   And I don't have a preferred branch set (cookie is empty).
*   And I don't have `location=%` in the URL.
*   Then the filter by location should show "All".
*   And the results should be shown for all branches.

**1.3 Location specified in URL**

*   When I open a Program subcategory page with the Classes Listing paragraph **WITHOUT** a location popup on the page.
*   And I have `location=%` in the URL.
*   Then the preferred branch cookie should be ignored, regardless of its value.
*   And the filter by location should show the branch from the URL.
*   And the results should be filtered accordingly.

#### Use case 2: Classes Listing paragraph on a Program subcategory page **WITH** location popup

**2.1 Preferred branch is selected and no location in URL**

*   When I open a Program subcategory page with the Classes Listing paragraph **WITH** a location popup on the page.
*   And I have a preferred branch set (via cookie).
*   And I don't have `location=%` in the URL.
*   Then the location popup shouldn't be shown.
*   And the filter by location should be pre-defined based on the cookie value.
*   And the results should be filtered accordingly.

**2.2 Preferred branch is empty and no location in URL**

*   When I open a Program subcategory page with the Classes Listing paragraph **WITH** a location popup on the page.
*   And I don't have a preferred branch set (cookie is empty).
*   And I don't have `location=%` in the URL.
*   Then the filter by location should show "All".
*   And the results should be shown for all branches.
*   And the location popup should be shown.

**2.3 Location specified in URL**

*   When I open a Program subcategory page with the Classes Listing paragraph **WITH** a location popup on the page.
*   And I have `location=%` in the URL.
*   Then the preferred branch cookie should be ignored, regardless of its value.
*   And the location popup shouldn't be shown.
*   And the filter by location should show the branch from the URL.
*   And the results should be filtered accordingly.
