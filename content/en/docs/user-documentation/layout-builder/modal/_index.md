---
title: Modal
description: A simple pop-up dialog that is triggered when a page loads.
---

{{< tabpane text=true >}}
    {{< tab header="Video" lang="vid" >}}
        {{< youtube 2vsqLGy-I8Q >}}
    {{< /tab >}}
    {{% tab header="Diagram" lang="pic" %}}
![Screenshot showing the field titles overlaid on the design](lb-modal-fields.png)
    {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**

*   [Design System](../../../../../../assets/img/designs/lb-ui-kit/Modal.jpg)
*   Pre-release: [Mobile](../../../../../../assets/img/designs/lb/Modals%20Mobile.png) | [Desktop](../../../../../../assets/img/designs/lb/Modals%20Desktop.png)

{{< readfile "../lb-add-block.partial" >}}

{{% alert color=warning title=Note %}}
The position on the page does not matter for the Modal block. It will always display as a popup in the center of the page and be completely hidden when dismissed.
{{% /alert %}}

Fill in the content fields:

*   **Title** (required): Never displayed, even if "Display Title" is checked. For administrative use only.
*   **Modal title**: The displayed title of the popup.
*   **Modal description**: The text displayed in the body of the popup.
*   **Modal CTA/Link** (required): A link at the bottom of the popup.
*   **Modal Dismissible**:
    *   If "Yes," the modal will be shown to the user **once** on first load.
    *   If "No," the modal will be shown on **every** page load.

{{< readfile "../lb-save-block.partial" >}}
