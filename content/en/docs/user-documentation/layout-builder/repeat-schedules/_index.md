---
title: Repeat Schedules
description: Place the Repeat Schedules application in a Layout Builder page.
tags:
  - "Group Schedules"
---

Repeat Schedules combines data from [the Activity, Class, and Session](../../content-types/activity-class-session/) content types into an interactive tool. Learn more about [Group Schedules](../../schedules/group-schedules).

Before you can use the Repeat Schedules block, you will need to:

- Ensure the `openy_repeat` module is updated to [at least 2.2.0](https://github.com/ynorth-projects/openy_repeat/releases).
- Enable the **Repeat (Group) Schedules** (`lb_repeat_schedules`) module at **Admin** > **Extend** (`/admin/modules`).

{{< readfile "../lb-add-block.partial" >}}

Configure the options:

-  The **Repeat (Group) Schedules** block uses the `lb_repeat_schedules` block content type.
- See [Group Schedules Block Configuration](../../schedules/group-schedules#block-configuration) for configuration details.

{{< readfile "../lb-save-block.partial" >}}
