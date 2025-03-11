---
title: Landing Page
---

The Landing Page content type is used for creating landing pages on the site.

### Fields

| Name             | Machine name         | Required | Description                                                                                                                                                               |
| ---------------- | -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title            | drupal's default     | Yes      | Title of the landing page item.                                                                                                                                            |
| Layout           | field\_lp_layout     | Yes      | Select list with the options: <ul><li>`one_column_clean`\|One Column - Full width</li><li>`one_column`\|One Column</li><li>`two_column`\|Two Columns</li><li>`two_column_fixed`\|Two Columns with fixed sidebar (sticky at the top)</li></ul>                                                                                                                                       |
| Meta Tags        | field\_meta_tags     | No       | A meta tags field allows us to provide structured metadata and Graph meta tags for Facebook, Pinterest, LinkedIn, and other social networking sites. |
| **Header Area**  | Field group          |          |                                                                                                                                                                           |
| Content          | field\_header_content | No       | A paragraph embed field that allows you to add various flexible content modules from the predefined list of paragraph types.                                                     |
| **Content Area** | Field group          |          |                                                                                                                                                                           |
| Content          | field_content        | No       | A paragraph embed field that allows you to add various flexible content modules from the predefined list of paragraph types.                                                     |
| **Sidebar Area** | Field group          |          |                                                                                                                                                                           |
| Content          | field\_sidebar_content | No       | A paragraph embed field that allows you to add various flexible content modules from the predefined list of paragraph types.                                                     |
| **Bottom Area**  | Field group          |          |                                                                                                                                                                           |
| Content          | field\_bottom_content | No       | A paragraph embed field that allows you to add various flexible content modules from the predefined list of paragraph types.                                                     |

### URL pattern

The content type uses the following pattern:

`[node:title]`
