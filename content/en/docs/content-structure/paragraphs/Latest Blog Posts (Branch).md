```markdown
---
title: Latest Blog Posts (Branch)
---

This dynamic paragraph renders the latest blog posts associated with a specific branch. It displays posts in chronological order, with the newest posts at the top, and utilizes the "sticky at the top" option to highlight important content.

### Functionality

This paragraph type automatically filters and displays blog posts based on the branch context in which it is placed. For example, if this paragraph is added to a "Downtown YMCA" branch page, it will only display blog posts associated with the "Downtown YMCA" branch. If placed on a non-branch page, only the headline will be visible.

### Fields

| Name  | Machine name | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| Block | field\_prgf_block | Yes | Block reference to the view/block.  This field should have a default value and be hidden in the form display. It determines the view or block used to render the blog posts. |
```