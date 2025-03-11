---
title: Article (Layout Builder)
description: The Article content type combines news-related content into a single content type, offering flexible layout options with Layout Builder.
weight: -1
---

The Article content type allows content editors to create various news-related content such as news items, blog posts, and press releases using a single content type. Editors can customize the layout and display of these articles based on their type, enabling them to show news items on a dedicated news page and blog posts on a blog page.

The Article content type also allows content editors to incorporate Layout Builder components directly within the page, providing enhanced control over content presentation.

**Designs:** [Mobile](<../../../../../../assets/img/designs/lb/Article Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Article Desktop.png>)

{{% youtube FBtQmfy9C7Q %}}

## Creating an Article

1.  Go to **Admin** > **Content** > **Add Content** > **Article (Layout Builder)**.
2.  Fill in the content fields:

    *   **Title** (required): The title of the article.
    *   **Subtitle**: An optional subtitle to provide additional context.
    *   **Type**: Select "Blog", "News", or "Press Release". Each type uses the same fields but enables administrators to group articles for display on different pages (e.g., Blog types on a Blog page, Press Releases on a Press Release page).
    *   **Header image**: This image displays on the Article page and in listing views.
    *   **Tags**: References terms from the Tags vocabulary. See [Taxonomy](../../taxonomy) for more information. Tags provide a way to categorize and organize content.
    *   **Body** (required): Add the main text of the article using the [WYSIWYG editor](../../text-editor). The WYSIWYG editor allows for rich text formatting.
    *   **Locations**: If the Article relates to a specific [Branch](../branch), select it here. This will display the Article in listings on the Branch page.
    *   **Published Date** (required): Defaults to today's date. This date displays on the Article page and is used for sorting and in listings.

## Customizing Articles

After creating an Article, you can customize its layout using [Layout Builder](../../layout-builder). The following components are designed to work specifically with the Article content type:

*   [Related Articles](../../layout-builder/related-articles): Displays a list of related articles based on predefined criteria.
