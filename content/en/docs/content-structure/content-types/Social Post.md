---
title: Social Post
---

The Social Post content type is used for adding social media posts to the site. Social Posts are typically fetched from social networks using a module like the [Social Feed Fetcher](https://www.drupal.org/project/social_feed_fetcher).

### Fields

| Name          | Machine name         | Required | Description                                                                                                                                                                                                           |
|---------------|----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Title         | drupal's default     | Yes      | Title of the social post content item.                                                                                                                                                                              |
| ID            | field_id             | Yes      | Post ID in the social network. This is a system field used by the post fetcher to identify the social post.                                                                                                           |
| Image         | field_sp_image       | No       | Image field for saving the post image. Supports `jpg`, `png`, and `gif` formats.                                                                                                                                     |
| Link          | field_link           | No       | Contains the link to the original post on the social network.                                                                                                                                                           |
| Platform      | field_platform       | Yes      | The name of the platform where the post was imported from (e.g., Facebook, Twitter, Instagram).                                                                                                                   |
| Post          | field_post           | Yes      | The text content of the post. May contain HTML markup.                                                                                                                                                             |
| Posted        | field_posted         | Yes      | The date and time when the post was originally posted on the social network.                                                                                                                                      |

### URL pattern

The content type uses the following URL pattern:

`/social_post/[node:title]`
