---
title: Class
---

The Class content type is used for adding Classes to the site.

### Fields

| Name            | Machine name          | Required | Description                                                                                                                                                                                                                                 |
| :---------------- | :-------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Title           | drupal's default      | Yes      | Title of the class item.                                                                                                                                                                                                                    |
| Activity        | field\_class_activity | No       | A reference field for selecting the activity the class belongs to.  This field references a taxonomy term from the "Activity" vocabulary.                                                                                                   |
| Meta Tags       | field\_meta_tags      | No       | A meta tags field that allows you to provide structured metadata and Graph meta tags for Facebook, Pinterest, LinkedIn, and other social networking sites. This helps with SEO and social sharing.                                        |
| **Header Area** |                       |          |                                                                                                                                                                                                                                         |
| Content         | field\_header_content | No       | A paragraph embed field that allows you to add various flexible content modules from a predefined list of paragraph types.  This allows for rich and structured content within the header.                                                  |
| **Content Area**|                       |          |                                                                                                                                                                                                                                         |
| Description     | field\_class_description| No       | Text area for the class description/body, using a WYSIWYG editor. A summary is not available for this field.                                                                                                                               |
| Content         | field_content         | No       | A paragraph embed field that allows you to add various flexible content modules from a predefined list of paragraph types.  This is the main content area for the class.                                                                 |
| **Sidebar Area**|                       |          |                                                                                                                                                                                                                                         |
| Content         | field\_sidebar_content| No       | A paragraph embed field that allows you to add various flexible content modules from a predefined list of paragraph types. This is for content that will appear in the sidebar of the class page.                                           |
| **Bottom Area** |                       |          |                                                                                                                                                                                                                                         |
| Content         | field\_bottom_content | No       | A paragraph embed field that allows you to add various flexible content modules from a predefined list of paragraph types. This is for content that appears at the bottom of the class page, often used for calls to action or related links. |

**Note:** Fields marked as "**Field group**" are not actual fields but are used to group the fields in the table for better readability.

### URL pattern

The Class content type uses the following URL pattern:

`/programs/[program-category]/[activity-category]/[class-title]/class-times`

**Example:**

`/programs/adult-programs/yoga/beginner-yoga-class/class-times`

**Explanation:**

*   `/programs`: Base path for program content.
*   `[program-category]`: The title of the program category, derived from the `field_class_activity` reference field to the Activity taxonomy term, which in turn references the Program taxonomy term: `[node:field_class_activity:entity:field_activity_category:entity:field_category_program:entity:title]`.
*   `[activity-category]`: The title of the activity category, derived from the `field_class_activity` reference field to the Activity taxonomy term: `[node:field_class_activity:entity:field_activity_category:entity:title]`.
*   `[class-title]`: The title of the class node: `[node:title]`.
*   `/class-times`:  A fixed suffix for the class times page.
