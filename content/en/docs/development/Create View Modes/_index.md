---
title: Create & Use New View Modes
---

As with any other entity in Drupal, when rendering it in different contexts, you might want to have specific view modes.

Here you can find instructions on how to add new view modes into the embedded entity form on the YMCA Website Services distribution.

### Create a New View Mode

1.  Go to the 'View modes' page: **Structure** \> **Display modes** \> **View modes** (or visit the URL: `/admin/structure/display-modes/view`).

    ![View Modes in Menu](../../assets/view_mode_in_menu.png)

    ![View Mode Types](../../assets/view_mode_types.png)

2.  Create a new view mode: click the 'Add view mode' button and select an entity type (or visit the URL: `/admin/structure/display-modes/view/add`).

    ![Add View Mode - First Way](../../assets/view_mode_firt_way_to_create.png)

    Alternatively, after each entity type, you can see 'Add new {Name} view mode' and click on it.

    ![Add View Mode - Second Way](../../assets/view_mode_seond_way.png)

3. Select "Media" and then give a name to your new view mode (or visit the URL: `/admin/structure/display-modes/view/add/media`).

    ![Creating View Mode](../../assets/view_mode_creating.png)

### Use the View Mode

1.  Go to **Configuration** \> **Text editor embed buttons** (or visit the URL: `/admin/config/content/embed`).

    ![Using View Mode](../../assets/view_mode_using.png)

    ![View Mode Using List](../../assets/view_mode_using_list.png)

2.  Ensure you enable the new view mode in "Allowed Entity Embed Display plugins" and click "Save" at the bottom of the page.

    ![Enable View Mode](../../assets/view_mode_enable.png)
