```markdown
---
title: Tabs
description: Gives users the ability to switch page views by selecting in-page tabs. This component is built using the Paragraphs module and Entity Reference Revisions module.
---

{{< tabpane text=true >}}
  {{< tab header="Video" lang="vid" >}}
    {{< youtube I3GPm718hn8 >}}
  {{< /tab >}}
  {{% tab header="Diagram" lang="pic" %}}
![Screenshot of the Tabs component with block labels](lb-tabs.png)
  {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**
- [Design System](../../../../../../assets/img/designs/lb-ui-kit/Tabs.jpg)
- Pre-release: [Mobile](<../../../../../../assets/img/designs/lb/Tabs Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Tabs Desktop.png>)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

-   **Title** (required): Never displayed, even if "Display Title" is checked. For administrative use only.
-   **Section heading**: Displayed as a heading above the item.
-   **Section subheading**: Displayed below the heading.
-   **Tab Item**: Add as many Tabs as you like using the **Add Tab** or **Add new custom block** button (depending on your version). When you are finished adding or editing each item, be sure to click **Create/Update tab** or **Create/Update custom block** to finalize the item. Each item contains:
    -   **Heading**: The heading that will be used to select the tab. This corresponds to the `field_title` field of the `tab_item` block content type.
    -   **Body**: The content of the tab. This corresponds to the `field_description` field of the `tab_item` block content type.

{{< readfile "../lb-save-block.partial" >}}
```