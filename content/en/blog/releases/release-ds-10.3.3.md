```markdown
---
title: "Digital Services Release 10.3.3"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.3)
date: 2024-06-12
---

## Updates & New Features

### Drupal Updates

Learn more about the improvements in [Drupal 10.1](https://www.drupal.org/blog/drupal-10-1-0) and [Drupal 10.2](https://www.drupal.org/blog/drupal-10-2-0).

For users who wish to apply all the updates below *without* Drupal 10.2, we've released [YMCA Website Services 10.3.2.4](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.3.2.4). This can be applied as a stepping stone to Drupal 10.2, but we recommend moving to 10.2 as community security support for Drupal 10.0 [ended in December 2023](https://endoflife.date/drupal).

*   Updated to Drupal core version 10.2. (#758)
    *   **NOTE:** This release will work with Drupal 10.1 or Drupal 10.2. Run `composer require drupal/core-recommended:"^10.1" -W` to force your site to use Drupal 10.1.
*   Updated to OpenY map version 5.2. (#1497)

### Layout Builder Updates

Continuing general cleanup, updated documentation, and improvements to the content editing experience for new Layout Builder components and content types.

Learn more in [Layout Builder](/docs/user-documentation/layout-builder/).

*   **Memberships** - Membership Calculator can be placed in a page using Layout Builder. (#555)
*   **Schedules** - Schedules can be placed in a page using Layout Builder. (#1341)
*   **Mega Menu** - Allow main menu items with `<nolink>`. (#1299)
*   **Footer** - Added hover states to Y footer logo and social icons, fixed spacing on social icons. (#1356)
*   **Events** - Made End Date/Time field optional. (#1386)
*   **Events** - Set up metatags and configured Schema.org for new Layout Builder Events content type. (#849)
*   **Events** - Enabled ‘Schedule for publishing’ option for the Layout Builder Event content type for content editors to schedule an event to publish at a specific date / time. (#1359)
*   **Articles** - Enabled ‘Schedule for publishing’ option for the Layout Builder Article content type for content editors to schedule an article to publish at a specific date / time. (#1492)
*   **Landing Pages** - Enabled ‘Schedule for publishing’ option for the Layout Builder Landing Page content type for content editors to schedule landing pages to publish at a specific date / time. (#1493)
*   **Cards** - Improved styling for buttons using the "overlapping" style configuration. (#1305)
*   **Cards** - Added text formatting to the Card description field. (#1464)
*   **Branch Amenities** - Made `field_amenities_icon` optional so that content editors do not have to include icons. (#1401)
*   **Alerts** - Translated Alerts should show the correct/current language. (#1453)

### Design System Updates

*   **Colorways** - Updated Search Results page to match the 4 Colorways. (#1398)
*   **Colorways** - Updated Activity Finder to match the 4 Colorways. (#1340)
*   **Colorways** - Ensured Montserrat is being used as the Heading font for Canadian Colorway. (#1407)
*   **Colorways** - Ensured Montserrat is being used as body text for the Canadian Colorway. (#1378, #1454)
*   Added support for responsive favicons to the Distribution. (#1287)

### Activity Finder Updates

*   Added advanced filtering to include additional filters. (#384)
    *   Time of day
    *   Start month
    *   Duration
    *   Included in Membership

### Internal Weekly Schedules Updates

*   Y admins can now access the Create/Edit form component on the FrontEnd APP in the Schedules admin interface. (#1276)
*   Changed configuration for the color picker field so it is set via the category in the activity content type, and not in the session. (#1400)
*   Fixed an issue with the close button being hidden for the Schedules modal. (#1388)

### Admin / Content Editor Enhancements

*   Fixed the height for the media directories browser so that admins can view the footer section containing the "Select Media" button without resorting to scrolling. (#1417)
*   Added help / description text for new Activity Finder filters. (#1494)

### Sandboxes

*   Added a new sandbox for the Traction Rec Activity Finder integration. (#1328)

### Documentation

*   TractionRec Integration - Documented how to [set up and configure the integration with TractionRec](/docs/development/program-event-framework/#syncers). (#1394)
*   Camp Content Type - Documented how to use the [Camp Content Type](/docs/user-documentation/content-types/camp/) in Layout Builder. (#1313)

### Bug Fixes

*   **Menus** - Fixed issue with menu links with long text not wrapping on mobile devices. (#1337)
*   **LB Testimonials** - Adjusted the line height of the Testimonial component. (#1365)
*   **Membership Framework** - Users no longer redirected to an empty page after selecting a membership product. (#1418)
*   **LB Camp Menu / Microsite Menu** - Fixed issues with mobile Camp Menu styles. (#1422)
*   **LB Donate** - Fixed issue with content editors not being able to add the Donate component. (#1425)
*   Resolved PHP message: `Error: Call to a member function getEntityTypeId() on null` (#1426)
*   **LB Cards** - Ensured Card top corner settings apply when no image is displayed. (#1431)
*   **LB Cards** - Fixed issue with Overlay Card variation title spacing when no image is displayed. (#1432)
*   **LB Cards** - Resolved an issue with incorrect button display for Cards with longer titles. (#1465)
*   **LB Camp Content Type** - Ensured Alerts on Camp nodes can be closed on mobile devices. (#1450)
*   **LB Home Branch Feature** - Resolved an issue where the branch location changes to the previously set location when the user unchecks the “Don’t ask me again” box. (#1421)
*   **LB Accordion** - Added missing subheading/description field. (#1446)
*   **LB Locations - Amenities Filters** - Fixed an issue where Amenities filters fail with content types that don't have amenities field. (#1449)
*   **LB Alerts** - Fixed issue with Alerts containing markup in the description that are not getting hidden if they are longer than 150 characters. (#1455)
*   **LB Alerts** - Resolved an issue with Alert display settings preventing Alerts from displaying. (#1403)
*   **LB Locations - Amenities Filters** - Adjusted the Amenities Filter margins to prevent tops getting cut off. (#1457)
*   **LB Ping Pongs** - Resolved an issue with images getting pixelated in ping pongs when the text area contains a lot of text. (#1349)
*   **LB Tables** - Fixed missing table properties. (#1369)
*   **LB Donate** - Fixed an error with external links failing to validate. (#1317)
*   **LB Branch Content Type** - Email icon no longer shows if the email field is empty. (#1405)
*   **LB Branch Amenities** - Fixed the colour of the open amenities icon. (#1406)
*   **LB media browser** - Fixed an issue with videos not being able to be uploaded to LB components via the media browser. (#1342)
*   **LB Camp CT** - Ensured the hamburger menu does not display if there are no menu links. (#1463)
*   **LB Article / Event / Landing Page CTs** - Fixed the preview button when creating LB Articles, Events and Landing Pages. (#1498)
*   **LB Promo Card** - Fixed an issue with the display of the icons. (#1430)
*   **Virtual Y** - Fixed header on Virtual Y Sandboxes. (#1322)
*   Fixed failing update hooks causing errors when updating distro versions. (#1510)
*   Resolved some CMS login and content creation issues for admins. (#1471)
```