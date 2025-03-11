---
title: Branch
---

The Branch content type is used for adding and managing branch locations on the site. Each branch can have detailed information, including address, contact details, hours of operation, and associated content.

### Fields

| Name             | Machine name              | Required | Description                                                                                                                                                                                                      |
| ---------------- | ------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title            | Drupal's default          | Yes      | Title of the branch item. This is the main identifier for the branch.                                                                                                                                              |
| Neighborhood     | field\_location\_area     | No       | A taxonomy reference field using the "Area" vocabulary. This allows you to categorize branches by geographical area or neighborhood.                                                                               |
| Coming Soon      | field\_location\_state    | No       | A checkbox field to indicate if the branch is still in development or not yet open to the public.                                                                                                               |
| Temporary URL    | field\_location\_temp_url | No       | A link field to provide a temporary page URL (e.g., a blog post or announcement) if the branch is coming soon and doesn't have a permanent page yet.                                                             |
| Meta Tags        | field\_meta\_tags         | No       | A meta tags field allows you to provide structured metadata and Graph meta tags for Facebook, Pinterest, LinkedIn, and other social networking sites. This helps with SEO and social sharing.                      |
| **Contact**      | Field group               |          |                                                                                                                                                                                                                  |
| Address          | field\_location\_address  | Yes      | An address field that allows you to add detailed location information.  This field stores: <ul><li>Address</li><li>City</li><li>State</li><li>Zip Code</li></ul>                                                  |
| Branch Coordinates | field\_location\_coordinates    | No   | Input for providing the latitude and longitude information.                                                                                                                                       |
| Phone            | field\_location\_phone    | Yes      | Input for providing the branch's phone number.                                                                                                                                                                   |
| Fax              | field\_location\_fax      | No       | Input for providing the branch's fax number (if applicable).                                                                                                                                                     |
| Email            | field\_location\_email    | No       | Input for providing the branch's email address.                                                                                                                                                                  |
| Directions       | field\_location\_directions | No       | A link field for adding a directions link (e.g., to a Google Maps page or other online mapping service).                                                                                                         |
| **Branch Hours** | Field group               |          |                                                                                                                                                                                                                  |
| Branch Hours     | field\_branch\_hours      | Paragraph | A paragraph field to indicate the branch's hours of operation. This allows for flexible scheduling, including different hours for different days.                                                                  |
| Day of the week  | field\_branch\_hours_day  | No       | A select list with the following values: <ul><li>sunday&#124;Sunday</li><li>monday&#124;Monday</li><li>tuesday&#124;Tuesday</li><li>wednesday&#124;Wednesday</li><li>thursday&#124;Thursday</li><li>friday&#124;Friday</li><li>saturday&#124;Saturday</li></ul> |
| Start/End Time   | field\_branch\_hours_time | No       | A text field with a description "e.g. 9am - 5pm, closed." This field stores the opening and closing times for a specific day.                                                                                     |
| **Header Area**  | Field group               |          |                                                                                                                                                                                                                  |
| Content          | field\_header_content     | No       | A paragraph embed field that allows you to add various flexible content modules from a predefined list of paragraph types. This allows you to customize the header area of the branch page.                      |
| **Content Area** | Field group               |          |                                                                                                                                                                                                                  |
| Content          | field\_content            | No       | A paragraph embed field that allows you to add various flexible content modules from a predefined list of paragraph types. This is the main content area of the branch page.                                     |
| **Bottom Area**  | Field group               |          |                                                                                                                                                                                                                  |
| Content          | field\_bottom_content     | No       | A paragraph embed field that allows you to add various flexible content modules from a predefined list of paragraph types. This allows you to add content to the bottom area of the branch page.                   |

### URL pattern

The Branch content type uses the following URL pattern:

`/locations/[node:title]`
