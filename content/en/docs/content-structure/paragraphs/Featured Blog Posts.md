---
title: Featured Blog Posts
---

The "Featured Blog Posts" paragraph type displays a listing of featured blog posts. It utilizes the `openy_prgf_featured_blogs` module.

### Fields

| Name        | Machine Name        | Required | Description                                                                                                                    |
|-------------|---------------------|----------|--------------------------------------------------------------------------------------------------------------------------------|
| Headline    | `field_prgf_headline` | No       | Headline of the banner.  This is a simple text field.                                                                         |
| Blog Posts  | `field_fblog_posts`   | Yes      | Multiple values.  A reference field that links to Blog posts.  The blog posts are sourced from nodes of the "Blog" content type. |

### Module Information

*   **Module:** `openy_prgf_featured_blogs`
*   **Description:** Provides a dynamic paragraph that renders a featured blog posts listing.
*   **Dependencies:**
    *   `drupal:field`
    *   `drupal:node`
    *   `openy_node_blog:openy_node_blog`
    *   `openy_prgf:openy_prgf`
    *   `paragraphs:paragraphs`

### Templates

The appearance of this paragraph can be customized via Twig templates. The following templates are used by default, and can be overridden in your theme:

*   `themes/contrib/openy_rose/templates/paragraph/paragraph--featured-blogs--default.html.twig`
*   `themes/contrib/openy_lily/templates/paragraphs/paragraph--featured-blogs--default.html.twig`
*   `themes/contrib/openy_carnation/templates/paragraph/paragraph--featured-blogs--default.html.twig`
