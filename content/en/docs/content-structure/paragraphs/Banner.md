---
title: Banner
---

The Banner paragraph type is used to display eye-catching content, often at the top of a page or section. It typically includes a headline, description, image, and a call to action link.

### Fields

| Name          | Machine name        | Required | Description                                                                                                                                                                                                                                                          | Notes                                         |
| ------------- | ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Headline      | `field_prgf_headline` | Yes      | The main heading of the banner. This should be concise and attention-grabbing.                                                                                                                                                                                     | Plain text, maximum 255 characters            |
| Color         | `field_prgf_color`    | Yes      | A reference field that allows you to select a color from the "Color" vocabulary. This color is often used as a background or accent color for the banner.                                                                                                          | Choose a term from the "Color" vocabulary |
| Image         | `field_prgf_image`    | No       | An entity reference to a media image. This image should be visually appealing and relevant to the banner's content.                                                                                                                                             | Single value                                  |
| Description   | `field_prgf_description` | No       | A WYSIWYG field where you can add descriptive text to the banner. Use this to provide more context or details about the banner's topic.  It is recommended to avoid using a summary for this field.                                                                                                   |                                               |
| Link          | `field_prgf_link`     | No       | A link field that stores both internal and external links. Use this to direct users to relevant pages or resources. This can be a call to action.                                                                                                                 | Use for internal and external links           |
