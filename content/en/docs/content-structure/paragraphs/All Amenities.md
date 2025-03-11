```markdown
---
title: All Amenities
---

This paragraph displays a list of amenities, typically in a table view. It's useful for showcasing available features or services.

### Fields

| Name            | Machine name              | Required | Description                                                                                                                                                                                                                                                           |
| --------------- | ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All amenities   | field_field_prgf_amnts_view | No       | Predefined reference to a view that displays all amenities. Configure this view to control which amenities are shown and how they are formatted.                                                                                                                    |
| Title           | field_prgf_title          | No       | Enter the title that will be displayed at the top of the paragraph. This provides context for the list of amenities.                                                                                                                                                 |

**Important Considerations:**

*   **View Configuration:** The "All amenities" field relies on a pre-existing view. Ensure this view is properly configured to display the desired amenity information.
*   **Paragraph Usage:** This paragraph type is generally intended for use within a larger page structure, like a landing page or a branch details page.
*   **Alternative:** Consider using "Branch Amenities" block if you want to show the amenities for the *current* branch.
```