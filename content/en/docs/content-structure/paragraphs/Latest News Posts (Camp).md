```markdown
---
title: Latest News Posts (Camp)
---

This paragraph type dynamically renders the latest news posts associated with a specific camp. It displays news articles in reverse chronological order (newest first) and can utilize a "sticky" option to highlight certain posts at the top of the list.

### Functionality

This paragraph is designed to be placed on a Camp page. When placed on a Camp page, it will display only news posts associated with that specific camp. If placed on a non-Camp page, it will display only the title (if one is configured).

### Fields

| Name  | Machine name | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| Block | `field_prgf_block` | Yes | Block reference to the view/block that displays the news posts.  A default value should be configured for this field, and it should typically be hidden in the form display to prevent accidental modification. |
```