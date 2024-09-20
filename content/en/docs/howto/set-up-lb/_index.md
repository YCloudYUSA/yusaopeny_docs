---
title: "How to set up a Layout Builder site"
linkTitle: "set up a Layout Builder site"
description: Before you build content with Layout Builder, you (or your development partner) must install and configure your site.
---

## Install and prepare

1. Install YMCA Website Services 10.3.0 or higher.
  - If you are starting a new site, follow the [distribution install instructions](https://github.com/YCloudYUSA/yusaopeny#installation).
  - If you are starting with an internal toolchain, `composer require ycloudyusa/yusaopeny` at the root of the project.
2. Go to **Admin** > **Configuration** > **Basic site settings** and configure the website name and slogan.

## Enable Layout Builder modules

The core functionality of the Layout Builder features is packaged inside the [Y Layout Builder module (`y_lb`)](https://github.com/YCloudYUSA/y_lb). This module is required by the profile and comes with it out of the box.

Layout Builder modules could be disabled by default. The complete [list of available components](https://github.com/YCloudYUSA/y_lb/blob/main/composer.json#L16) is available in `y_lb/composer.json`. There are two different methods to enable them:

1. To install only selected modules: Go to **Admin** > **Extend** (`/admin/modules`) and enable only the components that you choose to use.
2. To install all the modules: Go to **Admin** > **YMCA Website Services** > **Extend** > **Install** (`/admin/openy/extend/list`). Check the box for **Layout Builder**, then **Install**.

## Configure layouts & listings

Layout Builder relies on a system of [Layout Defaults](https://www.drupal.org/docs/8/core/modules/layout-builder/creating-layout-defaults) and [Layout Overrides](https://www.drupal.org/docs/8/core/modules/layout-builder/creating-layout-overrides). An important concept to understand from these pages is:

> Once a Layout is overridden on an entity, that entity will not be impacted by changes to Layout Defaults.

In building Landing Pages, we will override the Default Layout for every page (by placing content blocks). For this reason, it is important that we **configure the desired defaults before building pages**.

### Landing Pages

You will use the [Landing Page (with Layout Builder)](../../user-documentation/content-types/lb-landing-page) content type to build landing pages.

- Configure its [content type styles](../../user-documentation/layout-builder/advanced-options/#content-type-styles) at `/admin/structure/types/manage/landing_page_lb/display` first. Configure:

  - Colorway
  - Border style
  - Border radius
  - Text/button alignment
  - Button position
  - Button fill

### Locations

You will use the [Branch](../../user-documentation/content-types/branch), [Camp](../../user-documentation/content-types/camp), and [Facility](../../user-documentation/content-types/facility) content types to build pages that contain the contact and amenity details for each location.

- For new sites, you may set the **Use Layout Builder** checkbox to be true by default at `/admin/structure/types/manage/branch/fields/node.branch.field_use_layout_builder`.
- Configure the default layout and settings for each type on their corresponding layout settings pages:
  - Branch: `/admin/structure/types/manage/branch/display`
  - Camp: `/admin/structure/types/manage/camp/display`
  - Facility: `/admin/structure/types/manage/facility/display`
- Create a locations page with the URL alias `/locations` using [Location Finder](../../user-documentation/layout-builder/location-finder).

### Events

Enable [Events with Layout Builder (`ws_event`)](https://www.drupal.org/project/ws_event) to use Events with Layout Builder.

- Configure its default layout and settings at `admin/structure/types/manage/lb_event/display`.
- Create an events listing page with the URL alias `/events` using [Events Views & Filters](../../user-documentation/layout-builder/event-views)

### Articles

Enable [Articles with Layout Builder (`y_lb_article`)](https://www.drupal.org/project/y_lb_article) to use Articles with Layout Builder.

- Configure its default layout and settings at `/admin/structure/types/manage/article_lb/display`.
- Add an article listing page with the URL alias `/news` using [Article Views & Filters](../../user-documentation/layout-builder/article-views).

## Activity Finder

Enable `openy_node_session`, `openy_node_program`, `openy_node_category`, `openy_node_activity`, and `openy_node_class` to set up the Program Event Framework (PEF) if you plan to use Schedules or Activity Finder on the project.

Then require and enable [`yusaopeny_activity_finder`](https://github.com/YCloudYUSA/yusaopeny_activity_finder) to use [Activity Finder](../../user-documentation/schedules/activity-finder).

## Canadian YMCAs

See [How to use the Canadian Colorway for Layout Builder](../canada).

## Configure Permissions

By default (as of September 2024), Layout Builder content is only editable by the Administrator user. In order for Layout Builder to be used by the Contributor or Editor Roles (or any custom roles), a number of permissions must be set. To get started, go to **Admin** > **People** > **Permissions** (`/admin/people/permissions`).

This list contains the relevant permissions for using Layout Builder in the YMCA Website Services distribution (out of the box). Assign permissions to roles on your site based on your individual content workflows.

- In this **Permissions Section**...
  - assign these permissions.
- **Layout Builder** - These permissions allow users to use "layout overrides" (aka the "Layout tab"), which is how pages are composed with Layout Builder.
  - Either give permission for all content types:
    - **Configure any layout** - will give permission to edit layouts for ALL content types
  - Or give permission to only specific content types:
    - **Content - {Content Type}: Configure all layout overrides**
  - **Create and edit content blocks** is required for anyone who needs to build Layout Builder pages.
- **Block content** - These permissions allow users to create, edit, delete, or revert specific block types.
  - Either give permission for all block types:
    - **Administer block content**
  - Or, give permissions to only specific block types:
    - **{Block type}: {View/Edit/Delete/Revert} content block**
- Add other necessary permissions for managing content:
  - **Entity Browser**
    - **Access Media Directories: Field widget pages**
    - **Access Media Directories: Standalone pages**
  - **Media Directories UI**
    - **Access to Media Directories browser**
  - **Contextual Links**
    - **Use Contextual Links**
- **Node** - These permissions allow users to create, edit, delete, or revert the Layout Builder _content types_.
  - Either give permission for all content types:
    - **Administer content**
  - Or give permission for only specific content types:
    - **{Content Type}: {Create/Edit/Delete/Revert} {Own} content**
    - For example:
      - **Landing Page (Layout Builder): Create new content**
      - **Landing Page (Layout Builder): Delete any/own content**
      - **Landing Page (Layout Builder): Edit any/own content**
