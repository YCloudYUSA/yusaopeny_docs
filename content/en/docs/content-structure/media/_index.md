---
title: Media
---

## What are Media Items?

Core media items include audio, images, documents, and videos. You can add other media types, such as social media posts, through the use of contributed modules. Media items may be files located in your site's file system or remote items referenced by a URL. Media items are content entities, and they are divided into media types (which are entity sub-types); media types can have fields. Refer to the [Content Structure documentation](./core.content_structure.html.twig) for more information on content entities and fields.

## What is the Media Library?

The media library is a visual user interface for managing and reusing media items. Add media items to content using Media reference fields and the Media library field widget.

## What is an Image Style?

An image style is a set of processing steps, known as *effects*, that can be applied to images. Examples of effects include scaling and cropping images to different sizes. Responsive image styles can associate image styles with your theme's size breakpoints. This allows serving images sized for the browser width.

## Overview of Managing Media

The following modules provide media-related functionality:

*   **Media items and media types** are managed by the core Media module.
*   The core Media module provides a **Media reference field** to add media to content entities. The core File and Image modules also provide reference fields. It is recommended to use the Media reference field because it is more versatile.
*   The core **Media Library module** provides the media library and the Media library field widget. With this module installed, the Media library field widget becomes the default widget for editing Media reference fields.
*   The core **Image module** provides a user interface for defining image styles. The core Responsive Image module provides responsive image styles. Using the core Breakpoint module and a breakpoint-enabled theme, these responsive styles can serve images sized for the browser.

See the related topics listed below for specific tasks.

## Additional Resources

*   [Media module documentation](https://www.drupal.org/docs/8/core/modules/media)
