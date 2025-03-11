---
title: Location Finder
description: A set of components to view and search YMCA locations.
---

{{< tabpane text=true >}}
  {{< tab header="Video" lang="vid" >}}
    {{< youtube UyOI3ubns8k >}}
  {{< /tab >}}
  {{% tab header="Diagram" lang="pic" %}}
![A screenshot of the Locations block filters and map.](lb-location-finder--filters-map.png)
![A screenshot of the Locations block listing.](lb-location-finder--listing.png)
  {{% /tab %}}
{{< /tabpane >}}

**Designs:** [Mobile & Desktop](<../../../../../../assets/img/designs/lb-ui-kit/Locations.jpg>)

The **Location Finder** block provides search, filters, a map, and a listing of your YMCA locations.

## Amenities Filters

![A screenshot of the Location Finder's "filter by amenities" section.](lb-location-finder--amenities.png)

**Location Finder** also now supports hierarchical amenities. That means you can arrange your list of amenities into categories instead of a simple alphabetical list.

The Amenities taxonomy is managed at **Administration** > **Structure** > **Taxonomy** > **Amenities**. See [Taxonomy, Vocabularies, and Terms](/docs/user-documentation/taxonomy) for more info on managing Vocabularies.

### Single-Level Amenities

![A screenshot showing the Amenities taxonomy administration on the left and the filters display on the right.](lb-location-finder--flat-amenities.png)

If you leave the Amenities terms in a flat list on their configuration page, the Location Finder filters will display according to their configured weights. Drag terms up or down in the list to rearrange them in the filters.

### Hierarchical (Parent/Child) Amenities

![A screenshot showing a parent-child relationship in the Location finder filters.](lb-location-finder--parent-amenities.png)

Y's with many amenities may choose to group them in categories. Once any Amenities term is nested, the Location Finder filters switch to a hierarchical display.

To nest terms:

- Go to the Amenities administration page at **Administration** > **Structure** > **Taxonomy** > **Amenities**.
- **Add term** to create new parent terms if necessary.
- Use the drag handle [✥] to arrange terms into nested groups.

> **NOTE:**
>
> *   Any terms more than two levels deep will be ignored. (That is, parents and children will be displayed, grandchildren will not.)
> *   When nesting is enabled, any amenities that are not grouped will be hidden from the filter list.
>
> ![A screenshot showing amenities in a hierarchy with labels. Amenities greater than two levels deep are marked as hidden, amenities that do not have children are marked as hidden. All others are marked as shown.](lb-location-finder--hidden-amenities.png)

## Using Location Finder

The Location Finder block is best placed in an edge-to-edge Section with no gutters.

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

*   **Title** (required): Never displayed, even if "Display Title" is checked. For administrative use only.

{{< readfile "../lb-save-block.partial" >}}
