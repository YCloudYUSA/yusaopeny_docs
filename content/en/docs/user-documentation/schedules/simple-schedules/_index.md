---
title: Simple Schedules
description: The PEF Schedules module allows Ys to create and manage schedules with a simple, calendar-based view powered by FullCalendar.
tags:
    - "Decoupled Applications"
---

[YCloudYUSA/y_pef_schedule](https://github.com/YCloudYUSA/y_pef_schedule)

See [PEF Schedules](../../../development/program-event-framework/pef-schedules) for installation instructions. Also reference the [README.md](https://github.com/YCloudYUSA/y_pef_schedule/blob/main/README.md) file in the module for additional information.

Once you install the PEF Schedules module, you will be able to build schedules and add sessions via a calendar-based builder.

## Before you start

### Create schedule groupings

The Schedule editor allows Content Editors to create Sessions on a WYSIWYG calendar interface. As described in the [PEF data model](../../../development/program-event-framework#data-model), [Sessions](../../content-types/activity-class-session#session) require [Classes](../../content-types/activity-class-session#class), which reference [Activities](../../content-types/activity-class-session#activity), which reference [Program Subcategories](../../content-types/program-subcategory), which require [Programs](../../content-types/program).

```mermaid
flowchart LR
    subgraph "PEF Relationships"
        direction LR
        Session -- requires --> Class
        Class -- references --> Activity
        Activity -- references --> PS
        PS -- requires --> Program
        PS["Program Subcategory"]
    end
```

You will need to create **at least** a Class and Activity to start adding events to the calendar. Go to **Admin** > **Content** > **Add Content** (`/node/add`) to start adding items.

If you have preexisting content for any of these content types you can use them here. You may first need to configure the Activity Color for existing Activities.

### Activity colors

PEF Schedules adds a new **Color** field to Activities which is used to style the categories on the calendar.

![An example of different colored Activity labels](simple-schedules--activity-colors.png)

The **Color** field takes a hex value (`#XXXXXX` where `X` is a hexadecimal character (`0-9`, `a-f`)). We recommend using colors from the [Brand Standard Color Wheel](../../../development/colorways#base-variables). The default color is configurable in the Calendar Settings. We recommend selecting dark tones from the color wheel as the item titles are displayed with white text.

### Calendar settings

Settings for the calendar are configurable at **Admin** > **YMCA Website Services** > **Settings** > **Schedules calendar settings** (`admin/openy/settings/schedules-calendar`). This form is managed by the `\Drupal\y_pef_schedule\Form\FullCalendarSettingsForm`.

Options include:

- **Slot settings** - These relate to creating events on the calendar.
    - **Slot Duration** - The default length of each time slot. This setting defines the length of each time slot in the calendar (e.g., `00:30:00` for 30 minutes). Must be in the format of `HH:MM:SS`.
    - **Snap Duration** - The default granularity to which events "snap" when clicking and dragging on the calendar.  This setting determines the granularity of time slot selection and event dragging (e.g., `00:30:00` for 30 minutes). Must be in the format of `HH:MM:SS`.
    - **Slot Label Interval** - The interval between time labels on the calendar's time axis.  This setting specifies the interval between time labels displayed along the calendar's axis (e.g., `01:00` for every hour).  Must be in the format of `HH:MM`.
- **Time Settings** - These help make the calendar display more relevant to your user's needs.
    - **Min Time** - The earliest time that is visible on the calendar view. Enter the earliest time in `HH:MM:SS` format that you want to be visible in the calendar’s view. This setting helps to limit the view to specific hours, making the calendar more relevant to the user’s needs.
    - **Max Time** - The latest time that is visible on the calendar view. Enter the latest time in `HH:MM:SS` format that you want to be visible in the calendar’s view. This time represents the cutoff point at which the calendar view will stop displaying events for the day.
- **Default Color** - Enter the default color for activities in the calendar. Enter the color in hexadecimal string format `#XXXXXX` where `X` is a hexadecimal character (`0-9`, `a-f`).

## Manage schedules

Once everything is configured, you can start managing schedules. See a list of available schedules at **Admin** >
**Content** > **Schedules Calendar** (`admin/openy/branch-schedules`). Click on one of the options to open the editable schedule.

![A description of the options available when managing the schedule.](simple-schedules--manage.png)

When in the schedule, you can:

- Click **Download PDF** to download a PDF of the current display.
- Click **Legend** to open the legend, then click items in the legend to filter the view.
- Use the **Week/Day** buttons to filter and change the view or page between weeks/days.
- Click anywhere in the calendar to add a session.
- Click on an existing item to view its details and edit.
- Drag from the middle of an item to change its time.
- Drag from the bottom of an item to change its duration.

### Create sessions

When creating a session from the schedule, you'll see a simplified version of the **Add Session** (`/node/add/session`) form.

![The options available when creating a session.](simple-schedules--create.png)

- Enter a **Title** (required).
- Select a **Class** from the dropdown (required).
- Enter a **Room** and/or **Instructor** (optional).
- Choose a **Location** (required).
- Add a **Session Description** (optional).
- Set a **Start date/time** and **End date/time** (required). The **time** values will determine when on each day the session happens. The **dates** will determine the start and end of its recurrence if it happens across multiple days.
- Set the **Days** on which the Session recurs during the duration of the dates set above (required).

## Display schedules

Once content is added to the schedule, you have several options for showing it to users:

1.  Place the [Simple Schedule block](../../layout-builder/simple-schedule) on any Layout Builder page. This block adds a calendar view of a Branch schedule to a page.  Configure the block by selecting the desired schedule.
2.  All items added via the Simple Schedule will be shown in [Activity Finder](../activity-finder) or [Group Schedules](../group-schedules). Follow the directions on those pages to configure the respective components and add them to a page.
3.  Download the schedule PDF and upload it somewhere on your site.
