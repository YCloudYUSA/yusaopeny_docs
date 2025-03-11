---
title: 1-on-1 Meetings
description: Enable direct, secure, scheduled person-to-person calls inside your Virtual Y site.
---

This module is distributed as part of the YCMA Virtual Experience Platform (Virtual Y). Review [the README](https://github.com/YCloudYUSA/yusaopeny_gated_content/tree/master/modules/openy_gc_personal_training) for more technical information.

## Initial Configuration

1. Go to **Admin** > **Extend** (`/admin/modules`) and enable the **Virtual Y 1on1 Meeting** (`openy_gc_personal_training`) module.
2. Go to **Admin** > **Virtual Y** > **1on1 Meeting** > **Settings** (`/admin/virtual-y/personal_training/settings`) and enter `signals.cibox.tools:8091` as the Signaling PRL. This is the address of the signaling server that facilitates the connection between participants.
3. Go to **Admin** > **People** (`/admin/people`) and add the **Virtual YMCA Editor** role to the user profile of any users who will create meetings.
    - **NOTE:** The `admin` user will also need to have this role set.  This role grants the necessary permissions to manage 1-on-1 meetings.
4. Also at **Admin** > **People** (`/admin/people`), add the `Virtual trainer` role to at least one user. This role identifies users as trainers within the system.
5. If you are starting a new site, log in as a Virtual Y member at least once. This ensures that member accounts are properly initialized.
6. Go to **Admin** > **Virtual Y** > **1on1 Meeting** (`/admin/virtual-y/personal_training`) and you should be able to see a dashboard with links to add a 1on1 meeting.
    - If you receive an `Access denied` error, be sure to check that you have the **Virtual YMCA Editor** role as noted in step 3. This is the most common cause of this error.

{{% alert color="info" %}}
The community-maintained server, `signals.cibox.tools`, will work for most sites at small to medium levels of 1-on-1 traffic. If you are planning to scale up this service you may need to maintain a separate [signaling server](https://github.com/open-y-subprojects/virtual_y_signaling_server/blob/main/README.md).  A dedicated signaling server provides better performance and reliability for high-volume usage.
{{% /alert %}}

## Creating a 1on1 Meeting

1. Go to **Admin** > **Virtual Y** > **1on1 Meeting** (`/admin/virtual-y/personal_training`). This is the central management interface for 1-on-1 meetings.
2. Choose to add a single 1on1 meeting or a series and fill in the form.  When creating a series, be sure to configure the recurrence options appropriately.

![Add 1-on-1 Meeting Form](1on1-add-personal-training.png)

## Joining a 1on1 Meeting

1. Once a 1on1 meeting is created, the customer and trainer will see a card for the call in the Virtual Y dashboard. The dashboard provides a convenient overview of upcoming meetings.
![1-on-1 Meeting Card on Dashboard](1on1-view-personal-training.png)
2. Both the Trainer and Customer should open this card, join the meeting, provide their names, and proceed with the call.  Ensure that both participants have a stable internet connection and working audio/video devices for the best experience.
