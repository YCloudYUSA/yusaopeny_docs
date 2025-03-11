---
title: Staff Members
description: Component for displaying simple staff member info cards (with image, name, title) within a page using Layout Builder.
---

{{< tabpane text=true >}}
    {{< tab header="Video" lang="vid" >}}
        {{< youtube h2fq9FNdMco >}}
    {{< /tab >}}
    {{% tab header="Diagram" lang="pic" %}}
![Screenshot showing the field titles overlaid on the design](lb-staff-fields.png)
    {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**

-   [Design System](../../../../../../assets/img/designs/lb-ui-kit/Staff.jpg)
-   Pre-release: [Mobile](../../../../../../assets/img/designs/lb/Staff Mobile.png) | [Desktop](../../../../../../assets/img/designs/lb/Staff Desktop.png)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

-   **Title** (required): Never displayed, even if "Display Title" is checked. For administrative use only.
-   **Section heading**: Displayed as a heading above the items.
-   **Section subheading**: Displayed below the heading.
-   **Staff items**: Click **Add new custom block** to add a new Staff item, **Add existing custom block** to reuse an existing item from another block, or click **Duplicate** to reuse an entry from the same block. Items can be reused across pages. Add unlimited items. Each item has:
    -   **Image**: Image of the staff member.
    -   **First name** (required)
    -   **Last name** (required)
    -   **Job title** (required)
    -   **Email**: Email address of the staff member.
    -   After filling in the fields for an item, click **Create custom block** to save the item.

{{< readfile "../lb-save-block.partial" >}}
