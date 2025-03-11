---
title: 1 Column
description: Embeds a single column of content into a container, with an option to embed reusable content.
---

## Examples

### Rose - Without Block

![rose--landing-page_1-column-no-block](paragraphs--1c--rose-without.png)

### Rose - With Block

![rose--landing-page__1-column-with-block](paragraphs--1c--rose-with.png)

### Carnation - With Custom Block

![carnation--landing-page_1-column-with-block|690x186](paragraphs--1c--carnation.png)

---

## Areas 1 Column Should Be Used

*   Content Area
*   Sidebar Area
*   Bottom Area

---

## How to Use 1 Column

After selecting “1 Column” from the paragraphs dropdown, you will notice the following fields:

*   Paragraph title (optional)
*   Checkbox (optional, for horizontal rules)
*   Description (required)

Details on each field are below.

*   **Paragraph title** adds an all-caps heading at the top of your paragraph. This is optional.
*   **The checkbox** adds dual horizontal rules. Check this only if you’re planning on using the paragraph title.
*   **Description (required)** - Adds simple text [through a text editor.](../../text-editor) Font color defaults to purple in Lily and Rose.

### Custom Block Feature

While the paragraph can be used only with the fields above, 1 column also supports custom blocks of content. For this paragraph type, it’s recommended that users stick with “Simple block” types.

When adding your custom block, use the font-awesome icon class instead of the custom icon image field. In Carnation, the image option tends to get too large.

[Learn more about custom blocks ⇒](../../blocks/)

[Read about the Font Awesome icon library ⇒](https://fontawesome.com/cheatsheet?from=io)

## Advanced

The purple font color for paragraph descriptions can be overridden in Lily and Rose by targeting `.paragraph-1c-wrapper .field-prgf-1c-description`.

**Example:**

    .paragraph-1c-wrapper .field-prgf-1c-description {
      color: inherit;
    }

Content editors who want to edit this CSS can ask their developers to install the [CSS Editor module](https://www.drupal.org/project/css_editor) and edit their styles directly from the User Interface.

## Content Types that Support This Paragraph

*   [Landing Page](../../content-types/landing-page)
*   [Branch](../../content-types/branch)
*   [Camp](../../content-types/camp)
*   Facility
*   [Blog Post](../../content-types/blog-post)
*   [News Post](../../content-types/news-post)
*   Event
*   [Program](../../content-types/program)
*   [Program Subcategory](../../content-types/program-subcategory)
