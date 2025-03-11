---
title: Class Location
---

This dynamic paragraph renders the location's "class location" view mode based on the `location` URL query parameter with a valid ID. This paragraph is typically used on class pages to display location-specific information.

**Context:**

*   This paragraph is used to display location information, such as address, phone number, and hours, for a specific class.
*   The "class location" view mode defines how the location information is displayed.

Relates to [Branches Popup (Class)](Branches Popup (Class).md).

*   When the page has a `location` parameter, the Branches Popup paragraph will make an "Edit" link on this paragraph visible. That link triggers the Branches Popup to open, allowing the user to select a different location.

### Fields

| Name  | Machine name        | Required | Description                                                                                                                                                                                                                                                                                                                                                                             |
| :---- | :------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block | `field_prgf_block`  | Yes      | Block reference to the view/block. Should have a default value and should be hidden in the form display.  This field determines which block is rendered within the paragraph.  The referenced block provides the actual content and formatting for the location information.  Consider using a view block to display dynamic content related to the location. |
