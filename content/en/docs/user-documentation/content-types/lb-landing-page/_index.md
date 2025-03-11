---
title: Landing Page (Layout Builder)
description: A flexible content type that uses Sections and Blocks, managed with Layout Builder, to build content.
---

This page is the base for building pages with [Layout Builder](../../layout-builder).

## Creating a Landing Page

1.  Go to **Admin** > **Content** > **Add Content** > **Landing Page (Layout Builder)**.

2.  Fill in the content fields:

    *   **Title** (required): The title of the page. This is for internal use, such as in the admin content list. It will not be displayed on the page itself unless you add it manually with a block in the [Banner section](#customizing-a-landing-page).

    *   **Metadata**: This content is used to provide context to search engines and page previews. For the best user experience:
        *   Create [clickable titles](https://backlinko.com/on-page-seo#optimize-title-and-description-tags).
        *   Write a [compelling description](https://moz.com/learn/seo/meta-description).
        *   Add a [descriptive image](https://yoast.com/image-seo/#always).

        *   **Meta description**: A brief and concise summary of the page's content, with a recommended maximum length of 160 characters.
        *   **Meta image**: Choose or upload an image to be used as a thumbnail for social sharing and preview cards.
        *   **Meta tags**: Advanced meta tag configuration. **Caution:** This section should not be edited unless you are familiar with meta tags and their impact on SEO.

## Customizing a Landing Page

Once you create a Landing Page, you can customize its layout and content using [Layout Builder](../../layout-builder).

Landing Pages come with these pre-configured sections:

*   [**Header**](../../layout-builder/header-footer/#header-section): Typically contains the site logo, site name, and navigation menus.

*   **Banner**: An edge-to-edge section, without margins (gutters), that is designed for visual impact. It works best with a single [Banner](../../layout-builder/banner) or [Carousel](../../layout-builder/carousel) block.

*   **Body**: A section with left and right margins, designed to contain the bulk of your page content.

*   [**Footer**](../../layout-builder/header-footer/#footer-section): Generally includes copyright information, social media links, and secondary navigation menus.

You can [edit, reorder, or remove](../../layout-builder/#sections) these sections to configure your page as desired. For specialized content, such as digital displays or embedded systems, you can even remove the header and footer altogether.

### Blocks

Blocks are boxes of content rendered into a region of a web page. Blocks are placed and configured specifically for each theme. Blocks can contain a variety of content types, including text, images, menus, and forms.

Content blocks are blocks whose content you can edit. You can define one or more _block types_, and attach fields to each block type. Content blocks can be placed just like blocks provided by other modules.

The block description is an identification name for a block, which is shown in the administrative interface. It is not displayed on the site. The block title is the heading that is optionally shown to site visitors when the block is placed in a region.
