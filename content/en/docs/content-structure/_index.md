```markdown
---
title: Content Structure
weight: 97
---

Welcome to the Content Structure documentation.

Here you can find technical descriptions of content entities and fields used by YMCA Website Services site builders. The YMCA Website Services core team has established specifications for fields and created naming conventions to help developers maintain and upgrade their sites alongside the YMCA Website Services development timeline.

## Key Concepts

*   **Content Entity:** A fundamental unit of content, such as a page, article, or block.
*   **Field:** A specific data element within a content entity, like a title, body, image, or date.
*   **Content Type:**  A pre-defined structure for content entities, specifying the available fields and their configuration.
*   **Module:** A collection of code that extends Drupal's functionality, potentially introducing new content types, fields, or other features. See [Extending and Altering Drupal](https://api.drupal.org/api/drupal/core%21core.api.php/group/extending/10.3.x).
*   **Small Y:** Refers to a specific set of modules within the YMCA Website Services ecosystem designed for smaller YMCA branches, as detailed in the [Small Y module README](https://git.drupalcode.org/project/ws_small_y/-/blob/1.x/README.md).

## Content Entities

Content entities are the building blocks of your website's content. Each content type has a defined set of fields. Here are some commonly used content entities in YMCA Website Services:

*   **Article:**  Used for news, announcements, and blog posts. Often includes fields for title, body, image, and publication date. (See also: `ws_small_y/modules/small_y_articles/small_y_articles.info.yml`)
*   **Landing Page:**  Designed for creating visually appealing and informative pages. Offers flexible layouts and various content areas. (See also: `openy_node_landing.info.yml`)
*   **Promotion:** Used to highlight special offers, events, or campaigns. Typically includes fields for title, description, image, and link. (See also: `ws_promotion.info.yml`)
*   **Branch/Facility:** Represents a physical YMCA location, including address, hours, amenities, and social links. (See also: `ws_small_y/modules/small_y_branch/small_y_branch.info.yml`, `y_facility.info.yml`)
*   **Camp:** Content type for YMCA Camps, including integration with Layout Builder. (See also: `y_camp/y_camp.info.yml`)

## Fields

Fields store specific data within content entities. Here are some common field types used in YMCA Website Services:

*   **Text:** Stores text content, with options for plain text, formatted text, and summaries.
*   **Image:**  Uploads and stores images, with options for alt text and display settings.
*   **Link:** Stores URLs and link text.
*   **Date:** Stores dates and times.
*   **Entity Reference:** Establishes a relationship between one entity and one or more other entities. For example, a "Related Articles" field can link an article to other relevant articles.
*   **Boolean:** Stores true/false values (e.g., a "Featured" checkbox).
*   **List (Options):** Allows users to select a value from a predefined list.

## Modules and Content Structure

Several modules contribute to the content structure of YMCA Website Services:

*   **Y Layout Builder (`y_lb`):** Provides a base for layout building functionalities.
*   **Small Y (`ws_small_y`):**  Offers customizations for smaller YMCAs. See [Small Y module README](https://git.drupalcode.org/project/ws_small_y/-/blob/1.x/README.md).
*   **Layout Builder Restrictions:**  Allows administrators to restrict the available blocks and layouts within the Layout Builder.
*   **Branch Modules (`lb_branch_*_blocks`):**  Provide specific block types for displaying branch-related information, such as amenities, hours, and social links.
*    **Staff Members (`lb_staff_members_blocks` & `ws_small_y_staff`):** Modules for displaying staff members.

## Configuration Management

Configuration is managed through YAML files, which define the structure, data types, and translatability of content.  See the [Configuration API](https://api.drupal.org/api/drupal/core%21core.api.php/group/config_api/10.3.x) for details.

## Additional Resources

*   [Drupal User Guide: Managing Content Structure](https://www.drupal.org/docs/user_guide/en/content-structure.html)
*   [Drupal API: Content Entity](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21ContentEntityBase.php/class/ContentEntityBase/10.3.x)
*   [Drupal API: Field API](https://api.drupal.org/api/drupal/core%21modules%21field%21field.api.php/group/field/10.3.x)
