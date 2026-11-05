---
title: "Release 11.4.0.0 for Site Builders"
linkTitle: "Release 11.4.0.0"
description: Configuration changes and post-upgrade checks for YMCA Website Services 11.4.0.0
weight: 9
---

## YMCA Website Services 11.4.0.0: Configuration Changes & Post-Upgrade Checks

Configuration changes run in `drush updb`. After the upgrade, re-enter the GroupEx Pro account id if it was reset (see below) and check the items below. The baseline is 11.4.0.0-rc5.

### Activity Finder 7.2

- **Backend setting**: the backend is now a plugin (`solr` / `mock`). Sites with Solr keep Solr;
  sites set to Solr without `search_api_solr` are switched to `mock`. Check the Activity Finder settings
  page after the upgrade.
- **Category Tags are opt-in per block**: Activity Finder block → *Location & Category filters* → *Category filters* →
  **Category Tag**. The default stays *Activity (Program Subcategory)*. Category Tags need the Category Tags vocabulary
  and session field from `openy_node_session` 2.4 (Activity Finder 7.2 needs `^2.4`).
- **Filters on Top**: new layout style for the Activity Finder block.
- **Limit by Location** works as a constraint on the selection again.

### Group Schedules (`openy_repeat` 4)

The Group Schedules dashboard moves to Vue 3 (`openy_repeat` 4.1.0). Check the schedules page after the upgrade.

### GroupEx Pro

- Embedded GroupEx Pro Schedule is now in `ycloudyusa/embedded_groupexpro_schedule` 1.0.0. The account id is stored as a
  number. If the stored id was not numeric, `drush updb` resets it to 0: enter the account id again in the
  GroupEx Pro settings and check each embed.
- `openy_gxp`, `openy_group_schedules`, `groupex_form_cache` and `openy_pef_gxp_sync` uninstall themselves in `updb` and
  drop their data. `openy_prgf_group_schedules`, where still enabled, is uninstalled with them.

### Layout Builder

- Image displays that used the `blazy` formatter are switched to the core image formatter by update hooks.
- Tables without a header row no longer get tablesaw (`lb_table` 1.1.1+, comes with `y_lb` 5.2.1).
- Small Y demo images get alt text from an update hook (`ws_small_y` 2.2.0), so existing sites get it after `drush updb`.
- `lb_webform` 2.1.1 enables Webform UI (`lb_webform_update_10001`).

### Fonts

fontyourface 4.3.0 stopped attaching font stylesheets; the distribution patches this. Sites that use `y_fonts` are
not affected.

### Protected Pages 3.0

`drupal/protected_pages` goes from 1.9.0 to 3.0.0 (1.x returns HTTP 500 on every page on Drupal 11.4). Check that
protected pages still ask for the password.

### Removed

- CKEditor 4 library plugins (`font`, `colorbutton`, `panelbutton`); font family/size and colours come from
  `ckeditor5_plugin_pack_font`.
- GroupEx Pro packages (see above).

New core extensions available (not enabled by the update): `default_admin`, `search_help`, `search_node`.

Full technical notes: [Digital Services Release 11.4.0.0]({{< relref "/blog/releases/release-ds-11.4.0.0" >}}).
