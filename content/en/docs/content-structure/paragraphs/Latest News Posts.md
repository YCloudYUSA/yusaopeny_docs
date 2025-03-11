```markdown
---
title: Latest News Posts
---

This paragraph type dynamically renders the latest news posts. It is typically used to display news promoted to the front page, ordering them by published date with the newest at the top. The "sticky at the top" option can be used to highlight certain posts.

This paragraph leverages a block reference to display content.

### Fields

| Name  | Machine name | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| Block | `field_prgf_block` | Yes | A block reference to a view or block.  A default value should be configured, and the field should be hidden in the form display. This block will contain the actual list of news posts. |
```