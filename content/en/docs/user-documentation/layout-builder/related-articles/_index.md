---
title: Related Articles
description: Component for displaying related articles within an Article node page and within other pages (i.e. landing pages) using Layout Builder.
---

{{< tabpane text=true >}}
    {{< tab header="Video" lang="vid" >}}
        {{< youtube FBtQmfy9C7Q >}}
    {{< /tab >}}
    {{% tab header="Diagram" lang="pic" %}}
![Screenshot showing the field titles overlaid on the design](lb-related-articles-fields.png)
    {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**

*   [Design System](<../../../../../../assets/img/designs/lb-ui-kit/Article CT.jpg>)
*   Pre-release: [Mobile](<../../../../../../assets/img/designs/lb/Related Articles Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Related Articles Desktop.png>)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

*   **Title** (required): This title is for administrative purposes only and is never displayed to end users, even if "Display Title" is checked.
*   **Section title** (required): The heading for this section.
*   **Link**: An optional link to be displayed near the title.
*   **Type**: Select how you would like to choose the related articles in the block. Each type has different options:

    ![Screenshot showing the Related Articles filter options.](lb-related-articles-filters.png)

    *   **Article type**: Use the Article Type to filter Related Articles.
        *   By default, this will allow all Article Types. Choose a type to filter the list to only that type.
    *   **Locations**: Use the Locations field to filter Related Articles.
        *   Choose one or more Branch Locations to filter the list of Articles.
    *   **Tags**: Use the Tags field to filter Related Articles.
        *   Choose one or more Tags to filter the list of Articles.
    *   **Manual**: Directly specify the Articles to be listed.
        *   Use the autocomplete field to add one or more Articles to be displayed.
*   **Items count to display**: The maximum number of items to display in the list: 3, 6, 9, or 12.

{{% alert color=info title=Note: %}}

*   Related Articles will always be sorted by the Published Date on the Article.
*   It may display in the preview, but the current page will not display in the list of Related Articles once published.

{{% /alert %}}

{{< readfile "../lb-save-block.partial" >}}
