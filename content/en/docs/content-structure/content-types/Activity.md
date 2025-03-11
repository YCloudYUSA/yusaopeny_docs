---
title: Activity
---

The Activity content type is used for adding Activities to the site. Activities are typically associated with Programs and Classes.

### Fields

| Name                  | Machine name             | Required | Description                                                                                                                                                                                              |
| --------------------- | ------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title                 | `drupal's default`       | Yes      | Title of the activity item. This is the standard Drupal title field.                                                                                                                                   |
| Program Subcategory   | `field_activity_category` | Yes      | A reference field for selecting the program subcategory to which the activity belongs.  This field connects the Activity to a specific subcategory within the broader program structure.              |
| **Content Area**      | Field group             |          |  A field group to organize the main content of the Activity.                                                                                                             |
| Description           | `field_activity_description`    | No      | Textarea for the description/body of the activity.  This field uses a WYSIWYG editor (like CKEditor) for rich text formatting, but does not support a summary field.                                                                                           |

### URL pattern

This content type uses the following URL pattern:

```
/programs/[node:field_activity_category:entity:field_category_program:entity:title]/[node:field_activity_category:entity:title]/[node:title]
```

**Explanation:**

*   `/programs/`:  Indicates that this is part of the Programs section of the site.
*   `[node:field_activity_category:entity:field_category_program:entity:title]`: This part of the URL is dynamically generated from the title of the Program to which the activity subcategory is associated.
*   `[node:field_activity_category:entity:title]`: This is dynamically generated from the title of the Activity Category.
*   `[node:title]`: This part is dynamically generated from the title of the Activity node itself.