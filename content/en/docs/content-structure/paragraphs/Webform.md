---
title: Webform
---

This is a paragraph type used for embedding webforms within content. It allows you to add existing webforms to a page.

### Prerequisites

*   You must have already created your webform using the Webform module before embedding it. This paragraph type does not create a new webform.
*   Consider reviewing the [Drupal Webform Tutorials (by Jacob Rockowitz)](https://www.youtube.com/playlist?list=PLXu9x8jV-0fDQz_7BXVeAbFNOoYLQhcJ1) for comprehensive guidance on creating and managing webforms.

### How to Use the Webform Paragraph

1.  **Add the Webform Paragraph:** Select "Webform" from the available paragraph types when editing a content item.
2.  **Select the Webform:** Choose the desired webform from the "Embedded Webform" field. This field displays a list of available webforms created using the Webform module.

    ![Webform paragraph admin fields](paragraphs--webform--admin.png)

3.  **Configure Webform Status:** Use the "Webform status" field to control the webform's availability:

    *   **Open:** Allows users to submit the webform.
    *   **Closed:** Prevents new submissions. Existing submissions remain accessible.
    *   **Scheduled:** Set open and close dates for the webform.

4.  **Default Webform Submission Data (Optional):** The "Default webform submission data (YAML)" field allows you to pre-populate webform fields with default values.

    *   Enter YAML code to define the default values.
    *   This is useful for providing guidance or setting common values for users.
    *   Consult the [YAML specification](https://yaml.org) for correct syntax.

### Fields

| Name                                 | Machine name                   | Required | Description                                                                                                    |
| :----------------------------------- | :----------------------------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| Embedded Webform                       | `field_prgf_webform`           | No       | Webform entity reference field. Select the webform you want to embed.                                            |
| Default webform submission data (YAML) | `field_prgf_webform_default_data` | No       | YAML code to pre-populate webform fields with default values.                                                  |
| Webform status                         | `field_prgf_webform_status`     | No       | Controls the availability of the webform. Options: Open, Closed, or Scheduled.                                |

### Content Types That Support Webform

*   [Landing Page](../../content-types/landing-page)
*   [Branch](../../content-types/branch)
*   [Camp](../../content-types/camp)
*   Facility
*   [Program](../../content-types/program)
*   [Program Subcategory](../../content-types/program-subcategory)
*   [Blog Post (Lily/Rose only](../../content-types/blog-post))
*   [News Post](../../content-types/news-post)
*   Event
