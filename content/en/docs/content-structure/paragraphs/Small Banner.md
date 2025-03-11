---
title: Small Banner
---

The Small Banner paragraph type is used to display banner content in a compact format.

### Fields

| Name        | Machine name          | Required | Description                                                                 | Notes                                                                              |
| :---------- | :-------------------- | :------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| Color       | field\_prgf_color    | Yes      | Reference field for choosing a color from the "Color" vocabulary.          | Used for the banner's background color.                                           |
| Headline    | field\_prgf_headline | Yes      | Headline of the Small Banner.                                              | Plain text, maximum 255 characters.                                                |
| Image       | field\_prgf_image    | No       | Entity reference to a media image.                                        | Single value.  Recommended image dimensions: [TBD].                             |
| Description | field\_prgf_description  | No       | WYSIWYG field for the banner's description, supports rich text formatting. | No summary option. Use sparingly to maintain a clean banner appearance.          |

