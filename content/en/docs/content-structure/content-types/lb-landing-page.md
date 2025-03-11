```markdown
---
title: Landing Page (Layout Builder)
---

Landing Page content type is used to add Landing Pages to your website using Layout Builder widgets.

This page is managed with Layout Builder. You may want to uncheck "Published" before creating a page, use the "Layout" tab to build the content, then Publish when the page is complete. See our [User Guide](../../user-documentation/layout-builder) for help. You can also use the "Save and edit layout" button to stay in Layout Builder after saving.

## Fields

| Label            | Machine Name           | Required | Description                                                                 | Field Settings                 | Notes                                                                                                                               |
| ---------------- | ---------------------- | -------- | --------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Title            | title                  | Yes      | Title of Landing Page                                                       |                                | This is used as the administrative title and may also be displayed on the page, depending on your Layout Builder configuration. |
| **Metadata**     | Field group            |          |                                                                             |                                |                                                                                                                                     |
| Meta description | field_meta_description | No       | Short text used for metatags and cards                                      | Text (plain, long)             |  A brief and concise summary of the pages content that is a maximum of 160 characters in length.                             |
| Meta image       | field_meta_image       | No       | Media image reference for use in metatags and cards                         | Entity reference (Media image) |  Choose or upload an image to be used as a thumbnail for social sharing and preview cards.                                 |
| Meta tags        | field_meta_tags        | No       | Provided by Metatag module.  Advanced meta tag configuration.              |                                | This section should not be edited unless you are familiar with meta tags.                                                           |

## URL pattern

This content type uses the following pattern by default: `[node:title]`
