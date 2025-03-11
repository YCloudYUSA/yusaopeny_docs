---
title: Breadcrumbs
description: Secondary navigation that helps users understand their location within a website.
---

{{< tabpane text=true >}}
    {{< tab header="Video" lang="vid" >}}
        {{< youtube bQxO1E2OFeE >}}
    {{< /tab >}}
    {{% tab header="Diagram" lang="pic" %}}
![Breadcrumbs Block Diagram](lb-breadcrumbs-add.png)
    {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**

*   [Design System](../../../../../../assets/img/designs/lb-ui-kit/Breadcrumbs.jpg)
*   Pre-release: [Mobile](<../../../../../../assets/img/designs/lb/Breadcrumbs Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Breadcrumbs Desktop.png>)

### Adding Breadcrumbs to a Page

To use Breadcrumbs within the Layout Builder:

1.  Click the **Layout** tab at the top of the page.
2.  Scroll to the location on the page where you want to add the breadcrumbs (typically the bottom of the **Header** section or the top of the **Content** section).
3.  Click **Add block**.
4.  In the sidebar, expand **All system blocks**.
5.  Search for "Breadcrumbs" or scroll to **System** > **Breadcrumbs**.
6.  Click on **Breadcrumbs**.

### Configuring the Breadcrumbs Block

After adding the block, you will need to configure it:

*   **Title** (required): This field is for administrative use only and will not be displayed on the front end. It is recommended to uncheck **Display title**.

{{< readfile "../lb-save-block.partial" >}}

{{% alert color=warning title=Important Note %}}
The Breadcrumbs block might not display the correct path while editing the page layout. However, it will display correctly for site viewers.
{{% /alert %}}

### Additional Information

*   **What are Breadcrumbs?** Breadcrumbs are a navigational aid used in user interfaces. They allow users to keep track of their location within a website or web application. The term comes from the Hansel and Gretel fairy tale.

*   **Easy Breadcrumb Module:** For more advanced breadcrumb functionality, consider using the [Easy Breadcrumb](https://www.drupal.org/project/easy_breadcrumb) module. This module allows for customization of the breadcrumb trail, including:

    *   Including/excluding the front page as a segment.
    *   Including/excluding the current page as the last segment.
    *   Using the real page title instead of deducing it from the URL.
    *   Printing the page title segment as a link.
    *   Using menu titles as a fallback.
    *   Removing identical segments.
    *   And more.
