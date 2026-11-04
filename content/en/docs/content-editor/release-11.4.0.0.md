---
title: "Release 11.4.0.0 for Content Editors"
linkTitle: "Release 11.4.0.0"
description: What changes for content editors in YMCA Website Services 11.4.0.0
weight: 9
---

## YMCA Website Services 11.4.0.0: What Changes in Your Daily Work

Most of this release is security and platform work that happens behind the scenes. Your content, pages and media stay
as they are. The changes you can notice:

### Activity Finder

- **Category Tags filter**: your site team can switch the Activity Finder to filter programs by Category Tags. Once it
  is on, tag sessions with Category Tags so they show up under the right filter.
- **"Filters on Top" layout**: a new layout option for the Activity Finder block that puts the filters above the
  results.
- Fixed: the "Limit by Location" dropdown is no longer empty; sessions that have a date but no time no longer show
  `6:00pm-6:00pm`.

### Tables

A table without a header row no longer breaks the other tables on the same page.

### Webform UI always available with the Webform block

Wherever the Layout Builder Webform block is used, the Webform UI is now enabled too, so forms can be built and edited
in the admin UI.

### Small Y demo images have alt text

All 132 Small Y demo images now have alternative text. On existing sites the update fills it in only where alt text is
empty, so text you wrote yourself is kept.

### GroupEx Pro

The old GroupEx Pro integration is retired: its API is no longer available and Drupal.org marked the project
unsupported. The **Embedded GroupEx Pro Schedule** paragraph keeps working; pages that use it need no changes.

### Fewer random page errors

Pages no longer load jQuery Migrate from an external server. This fixes the random `jQuery is not defined` errors that
could break menus, sliders or forms on page load.

Full technical notes: [Digital Services Release 11.4.0.0]({{< relref "/blog/releases/release-ds-11.4.0.0" >}}).
