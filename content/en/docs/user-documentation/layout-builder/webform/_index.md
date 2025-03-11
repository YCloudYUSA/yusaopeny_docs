---
title: Webform
description: Embed an existing webform on a page.
---

{{< tabpane text=true >}}
  {{< tab header="Video" lang="vid" >}}
    {{< youtube dsHpcLDjLEo >}}
  {{< /tab >}}
  {{% tab header="Diagram" lang="pic" %}}
![Screenshot of the Webform component with block labels](lb-webform.png)
  {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**

*   [Design System](../../../../../../assets/img/designs/lb-ui-kit/Forms.jpg)
*   Pre-release: [Mobile](../../../../../../assets/img/designs/lb/Webforms Mobile.png) | [Desktop](../../../../../../assets/img/designs/lb/Webforms Desktop.png)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

*   **Title** (required): This title is for administrative purposes only and is never displayed, even if "Display Title" is checked.
*   **Form title**: This title is displayed as a heading above the embedded webform.
*   **Form subtitle**: This subtitle is displayed below the heading.
*   **Webform** (required): Choose the Webform to embed on the page from the list of existing forms.

    *   Expand **Webform settings** to access additional webform configuration options. You can use these settings to open, close, or schedule the form.

{{< readfile "../lb-save-block.partial" >}}
