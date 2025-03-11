```markdown
---
title: Blog Posts Listing
---

This paragraph is dynamic and renders the latest blog posts, utilizing exposed filters for enhanced content discovery. It's based on the `openy_prgf_blog_listing` module.

**Key Features:**

*   **Filtering:** Allows users to filter blog posts based on:
    *   Location
    *   Category
    *   Text (Search Keywords)
*   **Sticky at Top:** Supports the "sticky at top" functionality to highlight important posts.
*   **Ordering:** Orders blog posts by published date, displaying the newest posts first.
*   **Views Integration:** Leverages Drupal's Views module for flexible content display and filtering.  The exposed filters are part of the View configuration.
*   **Infinite Scroll:** Supports the `views_infinite_scroll` module for a better user experience.

### Fields

| Name  | Machine name | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| Block | `field_prgf_block` | Yes | Block reference to the view/block that provides the blog post listing.  It should have a default value and ideally be hidden in the form display to prevent accidental modification. The view should be configured to use exposed filters for Location, Category, and Text. |

**Module Dependencies:**

*   `openy_prgf_blog_listing`
*   `views_infinite_scroll`

**Related Paragraphs:**

*   [Latest Blog Posts](./Latest%20Blog%20Posts.md):  Displays blog posts promoted to the front page.
*   [Latest Blog Posts (Branch)](./Latest%20Blog%20Posts%20(Branch).md): Displays blog posts associated with a specific branch.
*   [Latest Blog Posts (Camp)](./Latest%20Blog%20Posts%20(Camp).md): Displays blog posts associated with a specific camp.
*   [News Posts Listing](./News%20Posts%20Listing.md)
```