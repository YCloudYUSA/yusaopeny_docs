---
title: Activity Finder
description: Place the Activity Finder application in a Layout Builder page.
tags:
  - "Activity Finder"
---

Activity Finder combines data from [the Activity, Class, and Session](/docs/user-documentation/content-types/activity-class-session/) content types into an interactive tool. Learn more about [Activity Finder](/docs/user-documentation/schedules/activity-finder/).

{{< readfile "../lb-add-block.partial" >}}

## Configuration

Configure the Activity Finder block after adding it to a Layout Builder page:

1.  **Edit** the block within the Layout Builder.
2.  Configure the available options. See [Activity Finder Block Configuration](../../schedules/activity-finder#block-configuration) for field details.  These configurations will affect what users see and can do on the front end.

    *   **Location & Category Filters:** Restrict the block to show sessions from only certain Locations or Categories. Choose either "Limit" to show only the specified options or "Exclude" to remove the specified options. It's generally recommended to choose either Exclude or Limit, but not both.
        *   **Limit by location:** Only show sessions at specific locations in the results.
        *   **Exclude by location:** Remove sessions at specific locations from the results.
        *   **Limit by category:** Only show sessions related to specific Program Subcategories in the results.
        *   **Exclude by category:** Remove sessions related to specific Program Subcategories from the results.
    *   **Legacy mode:**  Shows some data as it was in the previous version of Activity Finder (v3):
        *   Disables bookmark functionality on the results screen.
        *   Doesn't display the age indicator in the result card of activities.
        *   Changes the days + times wizard step. Displays only days of the week, but not times of each day (doesn't support DaysTimes filter).
    *   **Weeks filter:** Changes the Day/Time filter to use custom defined Week filters.
        *   This requires setting the **Weeks** configuration in the **Activity Finder settings** (`/admin/openy/settings/activity-finder`).
        *   Only sessions that have "Camp" in the title or room fields will return for this filter.
    *   **Additional filters:** These filters are off by default, but can be enabled in the Block Configuration.
        *   **Start Month:** Filters based on the month in the **Session Time** field.
        *   **In Membership:** Shows Sessions that have **In membership** checked.
        *   **Duration:** The length of the Session. This is configurable in the **Activity Finder settings** (`/admin/openy/settings/activity-finder`) and defaults to:
            *   Single day
            *   Multi-day (up to 5 days)
            *   Weekly (up to 3 weeks)
            *   Monthly (up to 5 weeks)
            *   Season (up to 12 weeks)
            *   School year (~9 months)
            *   Full year
        *   **Hide Home Branch info block:** Disables functionality related to the users selected home branch.
        *   **Background image:** An image that's displayed in the background of the banner above Activity Finder.
3.  **Save** the block.

{{< readfile "../lb-save-block.partial" >}}
