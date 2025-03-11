---
title: Story Card
---

The Story Card is a Paragraph type designed for use in sidebars, featuring a title, headline, and a link that turns the entire card into a call to action. This paragraph type is commonly used to highlight specific information or direct users to related content.

### Fields

| Name        | Machine name         | Required | Description                                                                                                                                   |
| ----------- | -------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Title       | `field_prgf_title`    | No       | Title of the Story Card.                                                                                                                      |
| Headline    | `field_prgf_headline` | Yes      | Headline of the Story Card. A quotation mark will be displayed to the left of your headline in the Lily and Rose themes.  |
| Link        | `field_prgf_link`     | No       | Link field that stores an internal or external URL. The entire card becomes the link, so use link text that encourages users to click.        |

### Usage Notes

*   **Themes:** The Story Card Paragraph renders with specific styling in the Lily and Rose themes, including a border. It may not have the same visual emphasis in other themes like Carnation.

*   **Best Practices:** To enhance usability, consider adding a `>` or other special character to the link text to visually indicate it's a clickable link.

*   **Content Types:** Story Cards are primarily designed for use in the sidebar region of content types, including:

    *   Landing Page
    *   News Post
    *   Blog Post
    *   Facility
    *   Program
    *   Program Subcategory

### Advanced

*   **Custom CSS:** To disable the quotation mark in the headline area (Lily and Rose), use the following CSS:

    ```css
    .story-card .quote svg {
      display: none;
    }
    ```
