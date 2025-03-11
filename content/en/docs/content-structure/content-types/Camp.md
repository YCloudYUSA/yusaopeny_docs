---
title: Camp
---

The Camp content type is used for adding camp information to the site.

### Fields

| Name             | Machine name              | Required | Description                                                                                                                                                                                                                                 |
| ---------------- | -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title            | Drupal's default          | Yes      | Title of the camp item.                                                                                                                                                                                                                     |
| Menu links       | field\_camp\_menu\_links   | Yes      | Link field with multiple values, that should have the Title and Link field. Based on it, we will complete the Camp Menu.                                                                                                                      |
| Meta Tags        | field\_meta\_tags           | No       | A meta tags field allows us to provide structured metadata and Graph meta tags for Facebook, Pinterest, LinkedIn, and other social networking sites.                                                                                          |
| **Contact**      | Field group               |          |                                                                                                                                                                                                                                           |
| Address          | field\_location\_address  | Yes      | An address field that will provide the ability to add details about the locations. Details to be completed:                                                                                                                                |
|                  |                           |          | -   Address                                                                                                                                                                                                                                 |
|                  |                           |          | -   City                                                                                                                                                                                                                                    |
|                  |                           |          | -   State                                                                                                                                                                                                                                   |
|                  |                           |          | -   Zip Code                                                                                                                                                                                                                                |
| Camp Coordinates | field\_location\_coordinates | No       | Input for providing the latitude and longitude information.                                                                                                                                                                                 |
| Phone            | field\_location\_phone      | Yes      | Input for providing the phone information.                                                                                                                                                                                                  |
| Fax              | field\_location\_fax        | No       | Input for providing the fax information.                                                                                                                                                                                                  |
| Email            | field\_location\_email      | No       | Input for providing the email information.                                                                                                                                                                                                  |
| Directions       | field\_location\_directions | No       | A link field for adding the directions link.                                                                                                                                                                                              |
| **Header Area**  | Field group               |          |                                                                                                                                                                                                                                           |
| Content          | field\_header\_content      | No       | A paragraph embed field that will allow us to add various flexible content modules from the predefined list of paragraph types.                                                                                                            |
| **Content Area** | Field group               |          |                                                                                                                                                                                                                                           |
| Content          | field\_content            | No       | A paragraph embed field that will allow us to add various flexible content modules from the predefined list of paragraph types.                                                                                                            |
| **Bottom Area**  | Field group               |          |                                                                                                                                                                                                                                           |
| Content          | field\_bottom\_content      | No       | A paragraph embed field that will allow us to add various flexible content modules from the predefined list of paragraph types.                                                                                                            |

### URL pattern

This content type uses the following URL pattern:

`/camps/[node:title]`
