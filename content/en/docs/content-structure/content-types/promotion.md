```markdown
---
title: Promotion
description:
---

Promotions are timed pieces of content that allow content editors the flexibility to create a single item that can be placed in multiple locations on the site, without having to duplicate or manage content in multiple locations. This content type is typically not displayed on its own page.

## Fields

| Name                       | Machine name                 | Field type             | Required? | Description                                                                                                                                                                                             |
|----------------------------|------------------------------|------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Title                      | title                        | Text (plain)           | Yes       | The main title of the promotion.                                                                                                                                                                        |
| Subtitle                   | field_subtitle               | Text (plain)           | No        | A secondary title or short description displayed below the main title.                                                                                                                                    |
| CTA / link                 | field_link                   | Link                   | No        | A call-to-action link that directs users to a specific page or external resource.                                                                                                                     |
| Description                | field_promo_description      | Text (formatted, long) | No        | A longer description providing more details about the promotion. This field supports rich text formatting (e.g., bold, italics, lists, links).                                                          |
| Image                      | field_promo_media            | Entity reference       | Yes       | An image associated with the promotion. This is an entity reference to a media item.                                                                                                                  |
| Pages                      | field_promo_visibility_pages | Text (plain, long)     | No        | A list of internal page paths where the promotion should be displayed. Use relative paths. One path per line. Use  `<front>` for the front page.                                                        |
| Promotion Category         | field_promo_category         | Entity reference       | No        | A category that classifies the promotion (e.g., "New Product," "Sale," "Event"). This is an entity reference to a taxonomy term.                                                                     |
| Promotion Priority         | field_promo_priority         | List (text)            | Yes       | Determines the order in which promotions are displayed. Options might include "High," "Medium," and "Low."                                                                                          |
| Promotion visibility state | field_promo_visibility_state | List (text)            | Yes       |  Controls whether the promotion is visible or hidden. Options may include "Published", "Unpublished".                                                                                                   |

## URL pattern

Promotions are generally embedded within other pages and do not have their own dedicated URL. Therefore, no URL pattern is defined for this content type.
```