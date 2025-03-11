---
title: Building Blocks & Basics
weight: 1
---

Virtual YMCA (VY) is based on Open Y and was originally built as an extension for Open Y sites. Therefore, it shares many of the same underlying functionalities and concepts.

Virtual YMCA utilizes the same content editing tools as Open Y. However, the pre-configured features and modules available "out-of-the-box" may differ from a standard Open Y installation. It's best to review the specific modules enabled in your VY instance, such as the ones provided by the `ws_small_y` module collection (see below), to understand its capabilities.

## Content Types

Virtual YMCA comes with several content types designed for delivering exclusive member experiences. These content types are typically accessible behind a login.

### Virtual Y Video

Reach your members even when they're away from the physical Y. Provide on-demand classes, kids' activities, and other engaging video content. This is an excellent option for health seekers, families, and active older adults.

Virtual Y Videos can be added [individually](../add-video) or through automation using the separate [Virtual Y Video Automation](https://github.com/fivejars/vyva/wiki) application.

_Integrates with:_ YouTube and Vimeo

### Live Streams

Stream your popular classes and events to members in real-time. Live Streams are well-suited for events where audience interaction is minimal.

Live Streams can be added individually or scheduled on a recurring basis. Unlike Virtual Events, Live Streams are embedded directly within the Virtual Y site.

_Integrates with:_ YouTube and Vimeo

### Virtual Events

Host interactive group fitness classes and other live events with member participation. Virtual Events are ideal for classes with Y instructors and personal or small group training sessions.

Virtual Events can be added individually or on a recurring basis. Unlike Live Streams, users are directed to an external video link for Virtual Events.

_Integrates with:_ Any URL/link, including GoToMeeting, Google Meet, Microsoft Teams, Zoom, Instagram Live, and Facebook

### Blog Posts

Provide members with written workouts, recipes, activity suggestions, and other engaging content. Blog Posts are perfect for members who prefer self-guided activities and need inspiration.

Virtual Y Blog Posts can be added via the standard **Add Content** list or menu within the Drupal interface.

_No integrations required._

## Small Y Module Collection

The `ws_small_y` module and its submodules provide a collection of features that customize the appearance and functionality of smaller Y associations. These modules can include enhanced article displays, staff directories, and customized styling. Review the list of enabled modules within the `ws_small_y` collection on your site to understand the features available.
```
