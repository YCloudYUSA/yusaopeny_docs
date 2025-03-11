---
title: Membership Calculator
description: This application provides an interactive "membership wizard" with location and pricing options. It is the default membership experience for attracting new members.
tags:
  - "Decoupled Applications"
  - "Membership Calculator"
---

The Membership Calculator is bundled with the distribution in the [`openy_calc` module](https://github.com/open-y-subprojects/openy_custom/tree/main/openy_calc).

As of August 2024, the Membership Calculator has [an updated design](https://www.figma.com/design/wVbmVOI5zwOMDYRjI3GLEI/YUSA-Design-System?node-id=5095-21390&t=R5aJZuowJGTQIvNk-1) with improved functionality and user experience. The improved design also responds to the selected [colorway and page styles](../../layout-builder/advanced-options/#page-styles).

## Configuring the Calculator

The **Membership Calculator** uses [Membership](../../content-types/membership) content items. These must be created for the **Membership Calculator** to function.

1.  Create a Membership node for each membership type your Branch or Association offers.
2.  Inside each Membership node, add a **Membership Info Paragraph** with the details of that membership at each of your Locations. This paragraph includes fields for:

    *   **Location:** A reference to an existing [Branch](../../content-types/branch) content type.
    *   **Link:** The URL a member is directed to for signing up for the membership at the selected location.
    *   **Join Fee:** The one-time fee to join.
    *   **Monthly Rate:** The recurring monthly membership fee.

The Membership Calculator presents a three-step process:

1.  Membership Type
2.  Primary Location
3.  Summary

### Membership Type

This step displays the Title, Image, and Description of each published Membership node. This information is pulled directly from the corresponding Membership content items.

![A screenshot of the Membership Calculator Type step.](membership-calculator--type.png)

### Primary Location

This step shows a map with radio buttons, enabling members to select their preferred primary location. All locations listed in the **YMCA Website Services Location Filter Settings** (see the Troubleshooting section below) are included in the list.

![A screenshot of the Membership Calculator Location step.](membership-calculator--location.png)

### Summary

This final page displays a link for members to continue their registration or a message stating that the selected membership is unavailable at the chosen location. The summary includes:

*   The selected branch location.
*   The selected membership type.
*   The monthly rate and join fee, if applicable.
*   A button to proceed to the registration link, if a membership is available at the selected location.

![A screenshot of the Membership Calculator Summary step displaying a price.](membership-calculator--summary-price.png)
![A screenshot of the Membership Calculator Summary step indicating no membership is available.](membership-calculator--summary-none.png)

## Placing the Calculator on a page

Once configured, the Membership Calculator can be placed on a page using:

*   [Paragraphs](../../paragraphs/membership-calculator)
*   [Layout Builder](../../layout-builder)

## Troubleshooting

If the second step of the *Membership Calculator* does not display any locations, navigate to **Administration** > **YMCA Website Services** > **Settings** > **YMCA Website Services Location Filter Settings**. Ensure that all Branches you want to include in the location search are selected.

![A screenshot displaying the Location Filter settings.](membership-calculator--locations-filter.png)
