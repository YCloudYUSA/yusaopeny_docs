---
title: Program
---

The Program content type is used for adding Programs to the site.

### Fields

| Name              | Machine name           | Required | Description                                                                                                                                                                                                                                                                                                                |
| ----------------- | ---------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title             | drupal's default        | Yes      | Title of the program item.                                                                                                                                                                                                                                                                                               |
| Meta Tags         | field\_meta_tags       | No       | A meta tags field allows us to provide structured metadata and Graph meta tags for Facebook, Pinterest, LinkedIn, and other social networking sites.                                                                                                                                                                   |
| **Header Area**   | Field group            |          |                                                                                                                                                                                                                                                                                                                            |
| Icon              | field\_program_icon    | No       | An image field, supporting `.svg` for uploading the program icon.                                                                                                                                                                                                                                                           |
| Image             | field\_program_image   | No       | An image field, for uploading the program image.                                                                                                                                                                                                                                                                           |
| Color             | field\_program_color   | No       | Reference field for choosing a term from the "Color" vocabulary.                                                                                                                                                                                                                                                          |
| Content           | field\_header_content  | No       | A paragraph embed field that allows adding various flexible content modules from a predefined list of paragraph types. If this field is not empty, the image and icon are not displayed on the page.                                                                                                                         |
| **Content Area**  | Field group            |          |                                                                                                                                                                                                                                                                                                                            |
| Description       | field\_program_description | No       | Text area for the description/body with WYSIWYG, without summary.                                                                                                                                                                                                                                                        |
| Content           | field_content          | No       | A paragraph embed field that allows adding various flexible content modules from a predefined list of paragraph types.                                                                                                                                                                                                     |
| **Sidebar Area**  | Field group            |          |                                                                                                                                                                                                                                                                                                                            |
| Content           | field\_sidebar_content | No       | A paragraph embed field that allows adding various flexible content modules from a predefined list of paragraph types.                                                                                                                                                                                                     |

### URL pattern

This content type uses the following URL pattern:

`/programs/[node:title]`
