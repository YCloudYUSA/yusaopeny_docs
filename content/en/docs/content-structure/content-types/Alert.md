---
title: Alert
---

The Alert content type is used for displaying timely information in a banner across the site. Unlike most content types, you don't use Alert to create pages. Instead, Alerts display as a rendered entity, as a section of content on other pages, either just below the header or above the footer.

### Fields

| Name               | Machine name           | Required | Description                                                                                                                                                               |
| ------------------ | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title              | drupal's default       | Yes      | Title of the alert, which will display as the headline.                                                                                                               |
| Background color   | field\_alert_color     | Yes      | Reference field for choosing a term from the "Color" vocabulary.                                                                                                         |
| Text color         | field\_alert_text_color | Yes      | Reference field for choosing a term from the "Color" vocabulary. For accessibility, stick to using either black or white.                                              |
| Icon color         | field\_alert_icon_color | No       | Reference field for choosing a term from the "Color" vocabulary. Leave empty to hide the icon.                                                                            |
| Placement          | field\_alert_place     | Yes      | Select list field (singular) for choosing placement:<ul><li>Header</li><li>Footer</li></ul>                                                                               |
| Description        | field\_alert_description | Yes      | Textarea for the main body of the alert with WYSIWYG (What You See Is What You Get) editor, without summary. Sentences should be short and minimally styled in this section. |
| Link               | field\_alert_link      | No       | Internal or external link. Adds a button with a call to action to the alert on the right. The button color defaults to black.                                             |
| Reference          | field\_alert_belongs   | No       | Entity reference with autocomplete to any node. Reference to a node (branch, camp, landing page, etc.) where the alert will be displayed.                             |

### URL pattern

Content type uses the following pattern: `/alert/[node:title]`.
