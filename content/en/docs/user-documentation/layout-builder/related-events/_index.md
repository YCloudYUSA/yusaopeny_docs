---
title: Related Events
description: Component for displaying related events within an event node page and within other pages using Layout Builder.
---

{{< tabpane text=true >}}
{{< tab header="Video" lang="vid" >}}
{{< youtube "cxRxuYkWy-4?start=183" >}}
{{< /tab >}}
{{% tab header="Diagram" lang="pic" %}}
![Screenshot showing the field titles overlaid on the design](lb-related-events-fields.png)
{{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**

*   [Design System](../../../../../../assets/img/designs/lb-ui-kit/Event.jpg)
*   Pre-release: [Mobile](<../../../../../../assets/img/designs/lb/Related Events Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Related Events Desktop.png>)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

*   **Title** (required): This title is for administrative purposes only and is never displayed, even if "Display Title" is checked.
*   **Section title** (required): The heading for the related events section.
*   **Link**: An optional link to be displayed near the section title. This can be a link to a page with more events, for example. As of the December 2024 release, Related Events links can use [link attributes](../../content-editing-basics#link-attributes).
*   **Type**: Select how you would like to choose the related events in the block. Each type has different options:

    ![Screenshot showing the Related Events filter options.](lb-related-events-filters.png)

    *   **Tags**: Show upcoming events filtered by related tags.
    *   **Upcoming**: Show upcoming events sorted by date.
    *   **Locations**: Use the Locations field to filter related events.
        *   Choose one or more Branch Locations to filter the list of events.
    *   **Manual**: Directly specify the events to be listed.
        *   Use the autocomplete field to add one or more events to be displayed.

*   **Items count to display**: The maximum number of items to display in the list: 3, 6, 9, or 12.

{{% alert color=info title=Note: %}}

*   Related events will always be sorted by the event date unless **Manual** filtering is selected. When using manual filtering, events are displayed in the order in which they appear in the configuration.
*   The current page will not display in the list of related events once published, although it may appear in the preview.
*   For Tags, Upcoming, and Locations, "Sticky" events that match the filter criteria will show up first.

{{% /alert %}}

{{< readfile "../lb-save-block.partial" >}}
