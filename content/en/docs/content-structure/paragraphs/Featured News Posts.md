```markdown
---
title: Featured News Posts
---

The Featured News Posts paragraph type displays a set of news articles. It allows content editors to highlight timely and relevant news items on a page. This paragraph leverages the `openy_prgf_featured_news` module.

### Fields

| Name        | Machine name          | Required | Description                                                                                                                              |
| ----------- | ----------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Headline    | `field_prgf_headline`   | No       | Headline for the featured news section. This will appear above the linked news posts.                                                    |
| News Posts  | `field_fnews_posts`     | Yes      | Multiple values.  References existing News posts (nodes of type "News"). The referenced news posts will be displayed in this section. |

### Usage

1.  When creating or editing a page or content type that supports paragraphs, select the "Featured News Posts" paragraph type.
2.  Enter a "Headline" for the section (optional).
3.  In the "News Posts" field, select one or more existing News posts.  Use the autocomplete functionality to search for news posts by title.
4.  Save the paragraph and the parent content.

The selected news posts will now be displayed on the page, under the specified headline. The display of each news post will use the "teaser" view mode.
