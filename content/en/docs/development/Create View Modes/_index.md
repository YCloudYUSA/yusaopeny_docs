---
title: Create & Use New View Modes
---

As with any other entity in Drupal, when it comes to render the rendering it in different contexts, you might want to have specific view modes.

Here you can find instructions how you can add new view modes into embedded entity form on YMCA Website Services distribution.

### Create a new View Mode

1. Go to 'View modes' page: Structure -> Display modes -> View modes (or visit the URL: `/admin/structure/display-modes/view`
![Configuration project add/update form](../../assets/view_mode_in_menu.png)

![Configuration project add/update form](../../assets/view_mode_types.png)

2. Create new view mode: click 'Add view mode' button and select entity type (or visit the URL: `/admin/structure/display-modes/view/add`

![Configuration project add/update form](../../assets/view_mode_firt_way_to_create.png)

or after each entity type you can see 'Add new {Name} view mode' and click on it
![Configuration project add/update form](../../assets/view_mode_seond_way.png)

3. Select "Media" and then give a name to your new view mode (or visit the URL: /`admin/structure/display-modes/view/add/media`
![Configuration project add/update form](../../assets/view_mode_creating.png)

### Use the View Mode

1. Go to Configuration -> Text editor embed buttons (or visit the URL: `/admin/config/content/embed`
![Configuration project add/update form](../../assets/view_mode_using.png)

![Configuration project add/update form](../../assets/view_mode_using_list.png)

2. Then make sure you enable the new view mode in "Allowed Entity Embed Display plugins", and at the bottom of the page click "Save".
![Configuration project add/update form](../../assets/view_mode_enable.png)
