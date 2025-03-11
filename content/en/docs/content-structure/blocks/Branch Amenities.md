---
title: Branch Amenities
---

A block displaying a list of amenities for the current branch.

### Fields

| Name               | Machine name    | Required | Description                                                                                                                                                                                                  |
| ------------------ | --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Branch amenities   | field_branch_am | Yes      | Uses a custom formatter to display a list of amenities within a Paragraph block. This field is a boolean to indicate if the amenity is available. Hidden from content managers by default.                 |
| Link               | field_sb_link   | No       | A link to display at the bottom of the block.  Allows for adding attributes like `target`, `rel`, and `class`.                                                                                            |
| Title              | field_sb_title  | No       | A title to display at the top of the block.                                                                                                                                                                |
| Icon class         | field_icon_class| No       | A Font Awesome icon name, e.g., `flag`, `car`, or `info`.  This overrides the image icon.  See [Font Awesome](https://fontawesome.com/) for available icons.                                                  |
| Section Title      | field_section_title | No       | Section heading                                                                                                                                                                                        |
| Section Subtitle   | field_section_subtitle | No    | Section subheading                                                                                                                                                                                           |
| Image              | field_image           | No       | Image for the block. Uses the `amenities_image` image style.                                                                                                                                         |
