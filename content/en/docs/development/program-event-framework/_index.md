---
title: Program Event Framework
description: A robust set of content types and syncer modules that build interactive tools to help members find and book activities.
tags:
    - "Activity Finder"
    - "Group Schedules"
---

"Program Event Framework" refers to the entire ecosystem of content and modules in YMCA Website Services that work together to build Activity Finder, Group Schedules, and more.

## Content Types

These provide the containers for PEF content in Drupal:

- [Program](../../user-documentation/content-types/program)
- [Program Subcategory](../../user-documentation/content-types/program-subcategory)
- [Activity, Class, Session](../../user-documentation/content-types/activity-class-session)

## Syncers

These provide integrations to pull content from external systems into the content types:

- [Extended Daxko API Integration (`drupal/openy_daxko2`)](https://www.drupal.org/project/openy_daxko2)
- [Simple Daxko Integration (deprecated) (`drupal/daxko`)](https://www.drupal.org/project/daxko)
- [ActiveNet Integration (`drupal/activenet`)](https://www.drupal.org/project/activenet)
- [Personify Integration (`drupal/personify`)](https://www.drupal.org/project/personify)
- [GroupEx Pro (Daxko) Integration (`drupal/groupexpro`)](https://www.drupal.org/project/groupexpro)
- [PEF (Program Event Framework) GXP (GroupEx Pro) Sync (`ynorth-projects/openy_pef_gxp_sync`)](https://github.com/ynorth-projects/openy_pef_gxp_sync)
- [YMCA 360 (Y360) Integration (`drupal/yusaopeny_ymca360`)](https://www.drupal.org/project/yusaopeny_ymca360)
- [Traction Rec Integration (`ycloudyusa/openy_traction_rec`)](https://github.com/YCloudYUSA/openy_traction_rec)
  - [How to configure the Traction Rec integration](https://github.com/YCloudYUSA/openy_traction_rec?tab=readme-ov-file#ymca-website-services-traction-rec-integration)
  - [How to import data from Traction Rec](https://github.com/YCloudYUSA/openy_traction_rec/blob/main/modules/openy_traction_rec_import/README.md#ymca-website-services-traction-rec-pef-integration)

## Displays

These display the content for users to discover:

- Activity Finder
  - [Activity Finder (User Docs)](../../user-documentation/schedules/activity-finder)
    - [Activity Finder (`ycloudyusa/yusaopeny_activity_finder`)](https://github.com/YCloudYUSA/yusaopeny_activity_finder) - this repo contains in-depth developer documentation.
- Group Schedules
  - [Group Schedules (User Docs)](../../user-documentation/schedules/group-schedules)
  - [Repeat Schedules (`drupal/openy_repeat`)](https://www.drupal.org/project/openy_repeat) - contains the "Repeat Schedules" block which is the basis for Group Schedules.

## Data model

The network of data structures in PEF can be confusing. Here's how it all works

```mermaid
---
title: PEF Relationships
---
erDiagram
    program {
        entityRefTerm field_program_color
        paragraph field_content
        paragraph field_header_content
        paragraph field_sidebar_content
        textFormattedLong field_program_description
        entityRefMedia field_program_icon
        entityRefMedia field_program_image
        layout layout_builder__layout
        meta field_meta_tags
        bool field_use_layout_builder
    }
    program_subcategory {
        paragraph field_bottom_content
        entityRefTerm field_category_color
        paragraph field_content
        paragraph field_sidebar_content
        textFormattedLong field_category_description
        paragraph field_header_content
        entityRefMedia field_category_image
        layout layout_builder__layout
        meta field_meta_tags
        entityRefProgram field_category_program
        bool field_use_layout_builder
    }
    program_subcategory }|--|| program : field_category_program
    activity {
        textFormattedLong field_activity_description
        entityRefProgSub field_activity_category
    }
    activity }o--|| program_subcategory : field_activity_category
    "class" {
        entityRefActivity field_class_activity
        paragraph field_bottom_content
        paragraph field_content
        textFormattedLong field_class_description
        paragraph field_header_content
        meta field_meta_tags
        paragraph field_sidebar_content
    }
    "class" }o--|| activity : field_class_activity
    session {
        listText field_activity_type
        entityRefClass field_session_class
        textFormattedLong field_session_description
        dateRange field_session_exclusions
        listText field_session_gender
        numberInt field_availability
        bool field_session_in_mbrsh
        textPlain field_session_instructor
        entityRefLoc field_session_location
        numberInt field_session_max_age
        listText field_session_max_grade
        numberDec field_session_mbr_price
        numberInt field_session_min_age
        listText field_session_min_grade
        numberDec field_session_nmbr_price
        bool field_session_online
        entityRef field_session_plocation
        numberInt field_productid
        link field_session_reg_link
        textPlain field_session_room
        paragraph field_session_time
        numberInt field_wait_list_availability
    }
    session }|--|| "class" : field_session_class
    session ||--o{ session_time_paragraph : field_session_type
    session_time_paragraph {
        dateRange field_session_time_date
        listText field_session_time_days
        textPlain field_session_time_override
    }
    branch {

    }
    camp {

    }
    facility {

    }
    session }o--|| branch : field_session_location
    session }o--|| camp : field_session_location
    session }o--|| facility : field_session_location
    session }o--|| facility : field_session_plocation
```

More information on how this data gets out into each display will be coming soon.
