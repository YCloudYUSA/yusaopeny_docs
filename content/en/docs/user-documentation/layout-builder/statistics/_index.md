---
title: Statistics
description: Infographic-like display that highlights relevant statistics to users.
---

{{< tabpane text=true >}}
  {{< tab header="Video" lang="vid" >}}
    {{< youtube _RQcnMw4X5U >}}
  {{< /tab >}}
  {{% tab header="Diagram" lang="pic" %}}
![Screenshot of the Statistics component with block labels](lb-statistics.png)
  {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**

*   [Design System](../../../../../../assets/img/designs/lb-ui-kit/Statistics.jpg)
*   Pre-release: [Mobile](../../../../../../assets/img/designs/lb/Statistics Mobile.png) | [Desktop](../../../../../../assets/img/designs/lb/Statistics Desktop.png)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

*   **Title** (required): This title is for administrative purposes only and is never displayed to users, even if "Display Title" is checked.
*   **Section heading**: Displayed as a heading above the statistics items.
*   **Section subheading**: Displayed below the heading.
*   **Media**: Choose an existing image from the media library or upload a new image. The image will be displayed to the left of the statistics.
*   **Section link**: Add a link to be displayed below the statistics items.
*   **Statistics items**: Add as many statistics items as needed by using the **Add Statistics Item** or **Add new custom block** button. After adding or editing each item, remember to click **Create/Update tab** or **Create/Update custom block** to save your changes. Each item includes the following fields:
    *   **Number value**: The numerical value of the statistic. This field accepts a prefix (e.g., "$100") and/or a suffix (e.g., "100M").
    *   **Description**: A description of the statistic.

{{< readfile "../lb-save-block.partial" >}}
