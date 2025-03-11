---
title: Cards
description: Flexible card-style components that allow up to 4 cards to display across the page depending on the chosen layout.
---

{{< tabpane text=true >}}
  {{< tab header="Video" lang="vid" >}}
    {{< youtube vrtcxXl31f4 >}}
  {{< /tab >}}
  {{% tab header="Diagram" lang="pic" %}}
![Screenshot of the Cards component with block labels](lb-cards.png)
  {{% /tab %}}
{{< /tabpane >}}

-----

The Cards block is similar to the [Grid CTA](../grid-cta) block, but has more fields and places the image behind the item content.

**Designs:**
- [Design System](../../../../../../assets/img/designs/lb-ui-kit/Card.jpg) | [Variations](<../../../../../../assets/img/designs/lb-ui-kit/Card - Column Variations.jpg>)
- Pre-release: [Mobile](<../../../../../../assets/img/designs/lb/Cards Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Cards Desktop.png>)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

- **Title** (required): Never displayed, even if "Display Title" is checked. For administrative use only.
- **Section heading**: Displayed as a heading above the cards.
- **Section subheading**: Displayed below the heading.
- **Section link**: A link button displayed below the list of cards.
- **# of columns**: Allows 1 to 4 columns of cards.
- **Card items**: Add up to 4. When you are finished adding or editing each item, be sure to click **Create/Update tab** or **Create/Update custom block** to finalize the item. Each card has:
  - **Heading** (required)
  - **Image**: Choose from the library or add a new image to be displayed behind the card text.
  - **Description**: A full text editor to add card content.
  - **Link**: A link at the bottom of the card.
    - As of the December 2024 release, Card links can use [link attributes](../../content-editing-basics#link-attributes) such as `id`, `target`, and `class`.
  - **Topic Tag**: This is displayed at the top of the card and can be used to group cards visually.

The Cards block offers several variations that change the look and feel:

-   **Standard**: The default card style.
-   **Overlay**:  Places the card content over the image.
-   **Chevron**: Adds a chevron graphic to the image area.
-   **Color**:  Applies a background color to the card.

{{< readfile "../lb-styles.partial" >}}

![Card variants](../advanced-options/lb-advanced--card-variants.png)

{{< readfile "../lb-save-block.partial" >}}
