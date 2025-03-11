---
title: Event
---

The Event content type is used for adding and managing events on the site.

### Fields

| Label             | Machine Name            | Required | Description                                                                                                                               | Field Settings | Notes                                                                                                                                      |
| ----------------- | ------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Title             | drupal's default          | Yes      | Title of the event.                                                                                                                     |                |                                                                                                                                            |
| Sub-title         | N/A                       | No       | Subtitle of the event.                                                                                                                    | Plain text     |                                                                                                                                            |
| Locations         | field\_event_location     | Yes      | Reference field to `branch` and `camp` nodes. Allows multiple values.                                                                    |                | Address for the event; can be either a branch or a non-branch location.                                                                   |
| Category          | field\_event_category     | No       | Reference field for choosing terms from the "Event Category" vocabulary. Allows multiple values.                                        |                |                                                                                                                                            |
| Meta Tags         | field\_meta_tags          | No       | Allows providing structured metadata and Open Graph meta tags for social networking sites like Facebook, Pinterest, and LinkedIn.            |                |                                                                                                                                            |
| Image             | field\_event_image        | No       | Image for the event. Entity reference to a Media bundle.                                                                                 | Media          |                                                                                                                                            |
| Date              | field\_event_date         | Yes      | Uses Drupal's built-in date/time fields.                                                                                                  |                |                                                                                                                                            |
| Add to Calendar   | field\_add_to_calendar_link | No       | Link to add event to calendar.                                                                                                            | Link           |                                                                                                                                            |
| Body              | body                      | No       | Textarea for the event description with WYSIWYG editor, without summary.                                                               |                |                                                                                                                                            |
| Content           | field\_content            | No       | Filter list of available layout builder components.                                                                                     |                |                                                                                                                                            |
| Related Content   | field\_event_related      | No       | Reference field for choosing related Event nodes. Allows multiple values.                                                                 |                |                                                                                                                                            |

### URL pattern

The Event content type uses the following URL pattern:

`/event/[node:title]`
