---
title: Grid columns
---

This paragraph type is used for the `field_grid_columns` within the Grid Content paragraph. It defines the structure and fields for individual columns within a grid layout.

### Fields

| Name          | Machine name                       | Required | Description                                                                                                                                            |
| ------------- | ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Description   | `field_prgf_grid_clm_description` | No       | Textarea for the column's description or body content. Supports WYSIWYG editing, but does not include a summary field.                                 |
| Headline      | `field_prgf_clm_headline`          | No       | Headline for the grid content within the column.                                                                                                        |
| Icon          | `field_prgf_clm_icon`              | No       | Entity reference to a media asset, typically an image.  Recommended to allow uploading of SVGs for scalability.                                      |
| Icon class    | `field_prgf_clm_class`             | No       | Input field for adding [Font Awesome](https://fontawesome.com/) icon classes (e.g., `flag`, `car`, `info`). Overrides the image specified in the Icon field. |
| Link          | `field_prgf_clm_link`              | No       | Link field that supports both internal and external URLs.                                                                                                |
