```markdown
---
title: Latest News Posts (Branch)
---

The "Latest News Posts (Branch)" paragraph type is a dynamic element that displays the most recent news articles associated with a specific branch location. It's designed to highlight timely and relevant information, ensuring that users are presented with the newest content first.

This paragraph automatically orders news items by their published date, with the most recent articles appearing at the top. Additionally, it utilizes a "sticky at the top" feature, which can be configured in the associated View to keep specific, important news posts prominently displayed.

### Fields

| Name  | Machine name | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| Block | `field_prgf_block` | Yes | This field is a block reference to a View block that lists news posts. The View should have a default value set and is typically hidden in the form display to simplify content editing. The view should filter by branch. |

### Module Dependencies

This paragraph type is provided by the `openy_prgf_news_branch` module, which has the following dependencies:

*   `field`: Part of Drupal core.
*   `node`: Part of Drupal core.
*   `openy_loc_branch`: Open Y Branch Location module.
*   `openy_node_news`: Open Y News Node module.
*   `openy_prgf`: Open Y Paragraphs base module.
*   `paragraphs`: Paragraphs module for creating structured content.
*   `plugin`: Part of Drupal core.
*   `user`: Part of Drupal core.
*   `views`: Part of Drupal core.
*   `views_infinite_scroll`: Views Infinite Scroll module for paginating results.
```