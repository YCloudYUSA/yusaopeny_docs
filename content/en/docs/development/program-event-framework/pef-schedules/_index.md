---
title: PEF Schedules
description: The PEF Schedules module allows Ys to create and manage schedules with a simple, calendar-based view. It leverages the FullCalendar library for a rich, interactive experience.
tags:
    - "Decoupled Applications"
---

[YCloudYUSA/y_pef_schedule](https://github.com/YCloudYUSA/y_pef_schedule)

The "PEF Schedules" module provides a calendar-based interface for creating and managing branch schedules. It integrates with the Open Y platform, allowing for seamless schedule creation and display.

**Key Features:**

*   **Calendar-Based Interface:** Utilizes the FullCalendar library for an intuitive drag-and-drop scheduling experience.
*   **Branch Schedules:** Allows administrators to create and manage schedules for different branches.
*   **Configuration Options:** Settings include configurable time intervals for calendar slots, event snapping granularity, and slot label intervals.
*   **Integration with Open Y:** Works with existing Open Y content types like Activities and Classes.
*   **Display Options:** Schedules can be displayed using the Simple Schedule block, Activity Finder, or Group Schedules.
*   **PDF Export:** Option to download schedules as PDF documents.

**Configuration**

The module provides settings for customizing the calendar's appearance and behavior:

*   **Slot Duration:**  Defines the length of each time slot (e.g., `00:30:00` for 30 minutes).
*   **Snap Duration:** Determines the granularity of time slot selection and event dragging (e.g., `00:15:00` for 15 minutes).
*   **Slot Label Interval:** Specifies the interval between time labels displayed along the calendar's axis (e.g., `01:00:00` for every hour).
*   **Min Time:**  The earliest time visible on the calendar (e.g., `04:00:00`).
*   **Max Time:** The latest time visible on the calendar (e.g., `23:00:00`).
*   **Default Color:** Sets the default color for activities displayed on the calendar, using a hexadecimal color code (e.g., `#3788d8`).

These settings can be accessed at **Admin** > **YMCA Website Services** > **Settings** > **Schedules calendar settings** (`/admin/openy/settings/schedules-calendar`).

**Block Content Type**

The module introduces a new block content type:

*   **Simple Schedule:** Provides a calendar view of a branch schedule.

**Menu Links**

The module adds the following menu links:

*   **Schedules Calendar:**  Located under **Admin** > **Content**, allows administrators to select a branch and view its schedule.
*   **Schedules calendar settings:** Located under **Admin** > **YMCA Website Services** > **Settings**, provides access to the module's configuration settings.

**Dependencies**

*   `drupal:openy_repeat`
*   `drupal:colorapi`

**Repeat Schedules Paragraph**

The "Repeat Schedules" paragraph type provides additional configuration options for displaying schedules:

*   **Display instructor:** A boolean field to show or hide the instructor's name in the schedule display.
*   **Display end time:**  A boolean field to show or hide the end time in the schedule display.
*   **Categories exclude:** Allows excluding specific activity categories from the schedule display.
*   **Filter:** Allows filtering content by category, class name, or instructor name.

**Templates**

*   `branches-list.html.twig`:  Template for displaying a list of branches with links to their respective schedules.
*   `block--lb-simple-schedule.html.twig`:  Template for rendering the Simple Schedule block.

**Additional Information**

For installation instructions and usage details, refer to the following resources:

*   [PEF Schedules Documentation](/docs/development/program-event-framework/pef-schedules)
*   [Simple Schedules Documentation](/docs/user-documentation/schedules/simple-schedules)

[comment]: <> (This file is imported from GitHub. It will be rebuilt from the source any time the repo is updated.)
{{% include-remote-md "https://github.com/YCloudYUSA/y_pef_schedule/raw/main/README.md" "# Y PEF Schedule" %}}
