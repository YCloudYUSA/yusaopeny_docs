---
title: Area
---

The Area vocabulary is used to categorize location areas on the site. This vocabulary is used by the Location Branch and Facility content types to classify the areas they serve. Areas can represent neighborhoods, regions, or any other relevant geographical or logical division.

**Machine name**: `area`

**Details:**

*   This vocabulary is implemented as a taxonomy.
*   Terms within this vocabulary are referenced by the `field_location_area` field on the Location Branch and Facility content types.
*   Consider using a hierarchical structure for your Area taxonomy to allow for more granular categorization (e.g., Continent > Country > Region > City > Neighborhood).
*   When creating terms, ensure that the names are clear, concise, and representative of the area they describe. Use title case for term names (e.g., "Downtown").

**Related Content Types:**

*   [Location Branch](/docs/content-structure/content-types/branch)
*   [Facility](/docs/content-structure/content-types/facility)
