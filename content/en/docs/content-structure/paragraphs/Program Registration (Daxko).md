```markdown
---
title: Program Registration (Daxko)
---

This paragraph renders the Programs Search Block.

The Programs Search Block provides a form to search programs from Daxko.

**Related topics:** [Daxko](../Development/Daxko.md)

**Important:** The Daxko and Program Registration (Daxko) configurations must be set up before the Program Registration paragraph will work.

Configuration settings are located at `/admin/config/development/daxko/programs-search`.  You must have the `administer daxko` permission to configure these settings. See the [Daxko settings documentation](./Daxko.md) for more information on configuring the connection to Daxko.

### Fields

| Name                         | Machine name          | Required | Description                                                                                                                    |
| ---------------------------- | ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Program registration block | field\_prgf\_reg\_block | No       | Block reference to the `programs_search_block` block. Should have a default value and should be hidden in the form display. |
