```markdown
---
title: Class Sessions
---

This dynamic paragraph renders class session instances based on the URL query parameter `location` with a valid ID.

Relates to [Branches Popup (Class)](Branches Popup (Class).md).

### Fields

| Name | Machine name | Required | Description |
|---|---|---|---|
| Block | `field_prgf_block` | Yes | Block reference to the view/block. Should have a default value and should be hidden in form display. |

### Displayed Table

The following fields are displayed in a table format:

*   **Location:** Displayed unless `&location=%` is present in the URL, in which case it is hidden.
*   **Time + Date**
*   **Registration:** A link to the registration page.
*   **Details:**
    *   Online registration information
    *   Ticket requirement status
    *   Membership eligibility
*   **Age:** Minimum and maximum age range for the class.

### Use Cases

These use cases describe the behavior of the Class Sessions paragraph in different scenarios, specifically regarding location filtering.

#### Class Page WITHOUT Location Popup

*Use case 3: Class page WITHOUT location popup*

##### Location Specified in URL

3.  1 Location in specified URL

    *   When a Class page **without** a location popup is opened.
    *   **And** the URL contains `location=%`.
    *   The system skips any existing cookie values.
    *   The class session results are filtered based on the location specified in the URL.
    *   A location teaser is displayed in the sidebar.

##### Preferred Branch Empty or Selected, No Location in URL

3.  2 Preferred branch is empty and no location in URL or Preferred branch is selected and no location in URL

    *   When a Class page **without** a location popup is opened.
    *   **And either:**
        *   No preferred branch is selected.
        *   A preferred branch is selected, **but** the URL **does not** contain `location=%`.
    *   The class session results include all branches.
    *   "All locations..." is displayed in the sidebar.

#### Class Page WITH Location Popup

*Use case 4: Class page WITH location popup*

##### Location Specified in URL

4.  1 Location in specified URL

    *   When a Class page **with** a location popup is opened.
    *   **And** the URL contains `location=%`.
    *   The system skips any existing cookie values.
    *   The class session results are filtered based on the location specified in the URL.
    *   A location teaser is displayed in the sidebar.
    *   The location teaser in the sidebar includes an "Edit" link that opens the location popup.

##### Preferred Branch Empty or Selected, No Location in URL

5.  2 Preferred branch is empty and no location in URL or Preferred branch is selected and no location in URL

    *   When a Class page **with** a location popup is opened.
    *   **And either:**
        *   No preferred branch is selected.
        *   A preferred branch is selected, **but** the URL **does not** contain `location=%`.
    *   The class session results include all branches.
    *   "All locations..." is displayed in the sidebar.
    *   The location popup is displayed, unless only one location is associated with the class.
