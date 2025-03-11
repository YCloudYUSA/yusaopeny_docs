---
title: Simple Schedule
description: A calendar-based schedule.
---

The Simple Schedule block pulls content that is added via the [Simple Schedules](../../schedules/simple-schedules) module, along with other Sessions on the site, displaying them in a calendar format.  It's crucial to configure your schedules using the Simple Schedules module *before* adding this block to your site to ensure content is displayed correctly.  This block leverages existing session data and presents it in a user-friendly, calendar-based view.

{{< tabpane text=true >}}
  {{< tab header="Video" lang="vid" >}}
    Coming soon.
  {{< /tab >}}
  {{% tab header="Diagram" lang="pic" %}}
![Screenshot of the Simple Schedule block](lb-simple-schedule.png)
  {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**
- [Design System](https://www.figma.com/design/wVbmVOI5zwOMDYRjI3GLEI/YUSA-Design-System?node-id=4980-1903)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

-   **Location** (required): Select the location for which you would like to display scheduled events. This setting determines which sessions are included in the schedule.

{{< readfile "../lb-save-block.partial" >}}
