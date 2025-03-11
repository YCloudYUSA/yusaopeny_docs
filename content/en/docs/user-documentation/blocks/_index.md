---
title: "Blocks"
weight: 3
description: >
  Blocks allow content editors to reuse sections of content across multiple pages.
---

## Understanding Blocks

Blocks are reusable content containers that can be placed in different areas, or *regions*, of a webpage. Think of them as building blocks that you can assemble in various ways to create different layouts.

**Key Features:**

*   **Reusability:** Create a block once and use it on multiple pages.
*   **Flexibility:** Different block types support different content formats.
*   **Efficiency:** Updates to a block are reflected everywhere it's used.

A block works by selecting a paragraph, which prompts you to create or select an existing block. You then add content to that block.

![landing-page__2-column-block](../../../../../assets/img/blocks-add-block.gif)

You can then embed that block on another page by searching for it by its description and selecting it from the list of results.

{{% alert %}}
### Site-wide Blocks and Block Layout

Blocks can be configured on a site-wide level using the *Block Layout*. These blocks contain global elements such as menus.

Themes define Regions where blocks can be placed. In YMCA Website Services, these regions are typically static.

To view your site's regions, go to **Structure > Block Layout** and click on **Demonstrate block regions**. *It is generally not recommended to change the configuration in the Block Layout without proper training.*

To change layouts on individual content pages, editors and website managers typically use Paragraphs or Layout Builder.
{{% /alert %}}

Paragraphs that support blocks will usually have two buttons: **Add New Custom Block** and **Add Existing Custom Block**.

*   **Add New Custom Block:** Creates a new block that can be reused later.
*   **Add Existing Custom Block:** Allows you to select a block that was previously created. Type the Block Description in the search field, and choose from the options that appear.

![admin__date-block--exsiting-block](../../../../../assets/img/blocks-existing-block.gif)

### Block Descriptions

The **block description** field is required for all block types. This serves as the *name* for your block and is displayed in the administrative interface. Use clear and descriptive names to easily identify your blocks when embedding them onto pages. *Block descriptions are not displayed on the site's front end.*

![admin--code__block__cropped](../../../../../assets/img/blocks-description.png)

## Block Types

YMCA Website Services supports different block types for different content needs:

### Basic Block

A basic block provides a [basic text editor](../text-editor). It is suitable for simple text content, such as descriptions on cards across multiple pages.

### Simple Block

The simple block is the block type you will likely use most often. It also provides a [basic text editor](../text-editor) and is also great for embedding descriptions on cards across multiple pages.

![landing-page__1-column-demo-block|690x474, 75%](../../../../../assets/img/blocks-new-custom.gif)

#### Paragraphs that Support Simple Blocks

*   [1 column](../paragraphs/1c)
*   [2 columns](../paragraphs/2c)
*   [3 columns](../paragraphs/3c)
*   [4 columns](../paragraphs/4c)
*   Featured Highlights

---

### Date Block

Use this block to schedule and unschedule sections or paragraphs on your page(s).

[Using the Date Block Paragraph ⇒](../paragraphs/date-block)

### Code Block

This block allows you to use any type of HTML tag, making it useful for embedding scripts and iframes onto multiple pages. The code block provides more flexibility for technically-inclined content editors.

[Using the Code Block Paragraph ⇒](../paragraphs/code)
