---
title: Article
---

The Article content type is used for creating blog posts, news items, and press releases on the site.

### Fields

| Name             | Machine name            | Required | Description                                                                                                                                                                                                                                                                                     |
| ---------------- | ----------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title            | drupal's default        | Yes      | Title of the article item. This field utilizes the core `text` field type. See [TextItem.php](https://git.drupalcode.org/core/drupal/-/blob/11.0.x/core/modules/text/src/Plugin/Field/FieldType/TextItem.php) for more information.                                                                     |
| Sub-title        | field_article_subtitle  | No       | Sub-title of the article item.                                                                                                                                                                                                                                                                 |
| Locations        | field\_article_location | Yes      | Reference field to `branch` and `camp` nodes. Allows multiple values.                                                                                                                                                                                                                            |
| Category         | field\_article_category | No       | Reference field for choosing terms from the "Blog Category" vocabulary. Allows multiple values.                                                                                                                                                                                              |
| Meta Tags        | field\_meta_tags        | No       | A meta tags field that allows providing structured metadata and Graph meta tags for Facebook, Pinterest, LinkedIn, and other social networking sites.  This utilizes the [Metatag](https://www.drupal.org/project/metatag) module.                                                                 |
| Type             | field\_article_type     | Yes      | Select list field with the following options for choosing the article type:                                                                                                                                                                                                                     |
|                  |                         |          | -   News Item (default)                                                                                                                                                                                                                                                                         |
|                  |                         |          | -   Blog Post                                                                                                                                                                                                                                                                                     |
|                  |                         |          | -   Press Release                                                                                                                                                                                                                                                                                 |
| Image            | field\_article_image    | No       | Image field for the article item. Entity reference to a Media bundle.                                                                                                                                                                                                                           |
| Body             | body                    | No       | Text area for the main content of the article. This field uses a WYSIWYG editor and does not include a summary field.                                                                                                                                                                         |
| Content          | field\_content          | No       | Filter list of available [Layout Builder](https://www.drupal.org/docs/drupal-user-guide/layout-builder/what-is-layout-builder) components. This field enables the arrangement of content using configurable layouts.                                                                            |
| Related Content  | field\_article_related  | No       | Reference field for selecting related Article nodes. Allows multiple values.                                                                                                                                                                                                                         |

### URL patterns

The Article content type uses the following URL patterns:

-   `/blog/[node:title]`
-   `/news/[node:title]`
-   `/press-release/[node:title]`
