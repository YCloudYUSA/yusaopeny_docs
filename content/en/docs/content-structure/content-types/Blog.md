```markdown
---
title: Blog
---

The Blog Post content type is used for adding blog posts to the site.

### Fields

| Name             | Machine name           | Required | Description                                                                                                                                                 |
| ---------------- | ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title            | Drupal's default       | Yes      | Title of the blog item.                                                                                                                                     |
| Locations        | field\_blog\_location   | Yes      | Reference field to `branch` and `camp` nodes. Allows multiple values, enabling association with multiple locations.                                     |
| Category         | field\_blog\_category   | No       | Reference field for choosing terms from the "Blog Category" vocabulary. Allows multiple values, categorizing blogs under several topics.                      |
| Meta Tags        | field\_meta\_tags       | No       | Allows providing structured metadata and Open Graph meta tags for social networking sites like Facebook, Pinterest, and LinkedIn, enhancing SEO and sharing. |
| **Styles**       | Field group            |          |                                                                                                                                                             |
| Style            | field\_blog\_style      | Yes      | Select list field with multiple options for choosing a style:                                                                                             |
|                  |                        |          | -   Story Card                                                                                                                                               |
|                  |                        |          | -   Photo Card                                                                                                                                               |
|                  |                        |          | -   News Card (default)                                                                                                                                      |
|                  |                        |          | -   Color Card                                                                                                                                               |
| Background color | field\_blog\_color      | No       | Background color for the teaser, used when the "Color Card" style is selected.                                                                              |
| Text color       | field\_blog\_text\_color | No       | Text color for the teaser, used when the "Color Card" style is selected.                                                                                    |
| **Content Area** | Field group            |          |                                                                                                                                                             |
| Image            | field\_blog\_image      | No       | Image field for the Blog item. Entity reference to a Media bundle, allowing selection of pre-uploaded images.                                               |
| Description      | field\_blog\_description | No       | Textarea for the description/body with WYSIWYG editing capabilities and no summary field.                                                                      |
| Content          | field\_content         | No       | A Paragraph embed field that allows adding various flexible content modules from a predefined list of paragraph types.                                      |
| **Sidebar Area** | Field group            |          |                                                                                                                                                             |
| Related content  | field\_blog\_related    | No       | Reference field for choosing related Blog nodes. Allows multiple values for cross-linking content.                                                             |
| Content          | field\_sidebar\_content | No       | A Paragraph embed field that allows adding various flexible content modules to the sidebar, from a predefined list of paragraph types.                        |

### URL pattern

This content type uses the following URL pattern:

`/blog/[node:title]`
