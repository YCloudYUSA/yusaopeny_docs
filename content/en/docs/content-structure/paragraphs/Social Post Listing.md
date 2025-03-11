```markdown
---
title: Social Post Listing
---

This paragraph type renders the latest social posts imported from social networks and displays them in a masonry grid. It leverages a View block to select and format the posts.

### Fields

| Name          | Machine name            | Required | Description                                                                                                    |
|---------------|-------------------------|----------|----------------------------------------------------------------------------------------------------------------|
| Title         | field_prgrf_sl_title    | No       | Title for the social posts block.  This is a plain text field.                                              |
| Description   | field_prgrf_sl_description| No       | Description for the social posts block.  This field supports longer text and can be used for introductory content. |
| Social List   | field_prgrf_sl_block      | No       | Reference to a View block.  This block is configured to select social posts and display them.                   |

**Details about the Social List (field_prgrf_sl_block) View Block:**

*   **View:** `social_posts_view`
*   **Block Display:** `social_posts_block`
*   This view selects nodes of the `social_post` content type.
*   The view provides an administrative interface at `admin/social-posts` to manage social posts.
*   The view displays the platform, ID, post content, and posted date for each social post.
```