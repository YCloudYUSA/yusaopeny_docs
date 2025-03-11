---
title: Featured Highlights
---

The Featured Highlights paragraph type provides a way to display specific content blocks in a grid layout, with options for 2, 3, or 4 blocks per row.

### Fields

| Name                      | Machine name               | Required | Description                                                                                                                                                                                                                                                                                     |
| ------------------------- | -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title                     | `field_prgf_title`           | No       | Optional paragraph title displayed above the grid of blocks.                                                                                                                                                                                                                                   |
| Style                     | `field_prgf_grid_style`      | Yes      | Determines the number of blocks displayed per row. A select list with the following values: `2`: 2 items per row, `3`: 3 items per row, `4`: 4 items per row.                                                                                                                               |
| Featured Highlights block | `field_prgf_block_ref_unlim` | Yes      | References blocks to be displayed in the grid. You can create a new block or select an existing block. Allowed block types: Featured Highlight Block, Basic Block, Simple Block, and Date block.  The "Featured Highlight Block" provides a title, link, image, and description for each item. |
