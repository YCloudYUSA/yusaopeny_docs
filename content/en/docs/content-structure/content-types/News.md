---
title: News
---

The News Post content type is used for adding news posts to the site. News posts are typically displayed in a list or grid format, with the most recent posts appearing first.

### Fields

| Name              | Machine name         | Required | Description                                                                                                                                                   |
| ----------------- | -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title             | drupal's default     | Yes      | Title of the news item. This field is a standard Drupal title field.                                                                                            |
| Locations         | field\_news_location | Yes      | Reference field to `branch` and `camp` nodes. Allows multiple values, enabling you to associate the news item with multiple locations.                         |
| Category          | field\_news_category | No       | Reference field for choosing a term from the "News Category" vocabulary. Allows multiple values, enabling categorization of the news item.                    |
| Meta Tags         | field\_meta_tags     | No       | A meta tags field that allows you to provide structured metadata and Open Graph meta tags for Facebook, Pinterest, LinkedIn, and other social networking sites. |
| **Content Area**  | Field group          |          |                                                                                                                                                                 |
| Image             | field\_news_image    | No       | Image field for the News item. Entity reference to a Media bundle. This allows you to select an existing image from the media library.                           |
| Description       | field\_news_description | No       | Text area for the description/body with WYSIWYG (What You See Is What You Get) editor, without summary option.                                                   |
| Content           | field_content        | No       | A paragraph embed field that allows you to add various flexible content modules from a predefined list of paragraph types.                                      |
| **Sidebar Area**  | Field group          |          |                                                                                                                                                                 |
| Related content   | field\_news_related  | No       | Reference field for choosing related News nodes. Allows multiple values to link to other relevant news items.                                                    |
| Content           | field\_sidebar_content | No       | A paragraph embed field that allows you to add various flexible content modules to the sidebar from a predefined list of paragraph types.                         |

### URL pattern

This content type uses the following URL pattern:

`/news/[node:title]`

The `[node:title]` token is replaced with the title of the news item, with spaces replaced by hyphens. For example, a news item with the title "New Branch Opens" would have the URL `/news/new-branch-opens`.
