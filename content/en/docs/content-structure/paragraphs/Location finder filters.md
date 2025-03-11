---
title: Location Finder Filters
---

This paragraph renders the Location Finder map with pins and filters. It allows users to filter locations displayed on the map based on tags or other criteria.

### Fields

| Name             | Machine name              | Required | Description                                                                                                                                                   |
| ---------------- | -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location Finder  | field\_prgf\_location\_finder | No       | Block reference to the `location_finder` block. This field should have a default value and be hidden in the form display to prevent direct user modification. |
| Tags Style       | field\_prgf\_lf\_tags\_style | Yes      | Determines the style of tags used for the map tags filter. Options include: <br> - Checkboxes (default) <br> - Multiselect widget with checkboxes.           |
