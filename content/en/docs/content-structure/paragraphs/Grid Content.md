---
title: Grid Content
---

The Grid Content paragraph type is used to create grid layouts within stories.

### Fields

| Name            | Machine name                    | Required | Description                                                                                                                                                                   |
| --------------- | ------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Style           | field\_prgf\_grid_style        | Yes      | Select list with the following values: `2`: 2 items per row, `3`: 3 items per row, `4`: 4 items per row.  This determines the number of columns in the grid.               |
| **Content**     | field\_grid_columns            | Paragraph| Grid columns.  This field references the `Grid columns` paragraph type, allowing you to add individual columns to the grid.                                                     |
| Description     | field\_prgf\_grid\_clm\_description | No       | Textarea for the column description/body. Supports WYSIWYG editing, but without a summary option.                                                                                |
| Headline        | field\_prgf\_clm_headline       | No       | Headline for the grid content column.                                                                                                                                             |
| Icon            | field\_prgf\_clm_icon           | No       | Entity reference to a media asset, typically an SVG image.  Allows uploading of new SVG files.                                                                                    |
| Icon class      | field\_prgf\_clm_class          | No       | Input field for adding [Font Awesome](https://fontawesome.com/) icon classes (e.g., `flag`, `car`, `info`). This will override the image Icon.                               |
| Link            | field\_prgf\_clm_link           | No       | Link field that supports both internal and external URLs.                                                                                                                            |
