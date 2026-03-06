---
title: How to migrate content into Layout Builder
linkTitle: "migrate to Layout Builder"
description: Leaping to Layout Builder can seem daunting, but we have resources to help.
---

Before you start your migration, we recommend you:

- understand your current site with a [Content Audit](../content-audit),
- familiarize yourself with the [new Layout Builder Components](../../user-documentation/layout-builder/),
- watch our [comparison of Paragraphs and Layout Builder](https://youtu.be/YdYaYE0bd6w?t=794&si=xPvRoLM0O-VxABDZ), and
- see a side-by-side demo of the [old vs. new page building experiences](https://youtu.be/jrRY3q2lP4s).

## How long do I have?

Layout Builder components for YMCA Website Services were developed and released throughout 2023. The plan at the outset was that Paragraphs-based components would be supported for one year from the time of the Layout Builder components' completion, then would cease being supported. Site owners can begin migrating their content at any time. Upon the deprecation of Paragraphs components, they will not "disappear", but they will no longer be supported by the YMCA Website Services core team.

As of October 2023, the timeline is:

- **December 2023** -  Layout Builder components are considered "feature complete"
- **2024** - refinement and bug fixing of Layout Builder components, basic bug fixing only for Paragraphs components.
- **December 2024** - end of support for Paragraphs components.

Site owners are encouraged to plan a migration of their content to Layout Builder in 2024, after which point they will be responsible for maintaining Paragraphs components.

(Timeline is subject to change based on community feedback and priorities.)

## Plan your migration

The migration from Paragraphs to Layout Builder is not a small one, but it can be done in bite-sized pieces and spread out over some time if necessary. We recommend working with a [partner agency](https://ds.ymca.org/partners) to assist you through the process.

> **TIP**: As you work through the migration, the new pieces of your site _will_ look different than others. Help members through the process with some messaging in an [Alert](../../user-documentation/content-types/alert) or [news post](../../user-documentation/content-types/lb-article) letting them know that things will be changing.

## Decide where to start

If you're doing your migration throughout your regular business, without starting from scratch (sometimes called a "lazy migration"), it helps to identify a strategy for planning the migration. These are a few possible strategies:

### A campaign or goal

If you have an upcoming marketing campaign you could build one or a few brand new Landing Pages with Layout Builder to try out the process. This way you're easing both your editors and members into the new designs without getting too deep.

If you have a natural pause in events (maybe over a holiday) or a big series coming up you could use that as the break point for new events. Old events don't necessarily have to be converted to the new design as they're not often viewed after their date has passed.

### A section of the site

Maybe you want to ease into the process with some lesser-used pages, maybe you want to change the home page and top-level menu items to show off the new designs right from the outset. Either way, you can decide on a section and carve off a few pages at a time.

### A content type

Events or News articles are a good option to try out the new designs, although you'll need to ensure any Landing Pages that display lists of that content are also updated. Branch pages can be converted one by one without changing their listing on the Locations page.

## Prepare your content

Once you know what you're going to move, you'll want to get the content ready to migrate. Most text will need to be copied and pasted to the new pages (this is a great opportunity for review), but images and documents will be able to be re-used from the [Media Library](../../user-documentation/media).

It could be helpful to print or screenshot pages (Firefox can capture a [full-page screenshot](https://support.mozilla.org/en-US/kb/take-screenshots-firefox)) and then annotate them to decide how each section of the page will map to its Layout Builder component. You could even use the [Wayback Machine](https://web.archive.org/) to save a snapshot of the page.

### Component mapping

While the exact mappings are up to each site's content editors, here are some possible mappings from Paragraphs to Layout Builder

> Paragraph
> : the Layout Builder component it maps to.

1 Column
2 Columns
3 Columns
4 Columns
Secondary Description and Sidebar
: These paragraphs can be replicated using 1-4 column [Layouts](../../user-documentation/layout-builder/#layouts)

Activity Finder
: [Activity Finder](../../user-documentation/layout-builder/activity-finder)

All Amenities
: [Branch Amenities](../../user-documentation/content-types/branch/#layout-builder-blocks)

Banner
Small Banner
: [Banner](../../user-documentation/layout-builder/banner)

Blog Posts Listing
Featured Blog Posts
Featured News Posts
Latest Blog Posts
Latest News Posts
News Posts Listing
: [Articles Filter, Articles Listing, Featured Articles](../../user-documentation/layout-builder/article-views)

Camp Menu
: [Camp Menu](../../user-documentation/content-types/camp/#camp-menus)

Categories Listing
: TBD

Code
: [Code](../../user-documentation/layout-builder/code)

Date Block
: None

Embedded GroupEx Pro Schedule
: Due to changes in the GroupEx Pro embed functionality, we recommend moving to a [Code](../../user-documentation/layout-builder/code) block.

FAQ
: [Accordion](../../user-documentation/layout-builder/accordion)

Featured Content
Story Card
: [Cards](../../user-documentation/layout-builder/cards) or [Grid CTA](../../user-documentation/layout-builder/grid-cta)

Gallery
: [Carousel](../../user-documentation/layout-builder/carousel)

Grid Content
: [Grid CTA](../../user-documentation/layout-builder/grid-cta) or [Icon Grid](../../user-documentation/layout-builder/icon-grid)

Limited Time Offer
: Banner (small variant) or Alert

Membership Calculator Paragraph
: [Membership Calculator](../../user-documentation/membership)

Promo Card
: [Promo Card](../../user-documentation/layout-builder/promo-card)

Simple Content
: [Table](../../user-documentation/layout-builder/table)

Social Share Icons
: [Deprecated](../../user-documentation/paragraphs/social-share-icons)

Teaser
: [Ping-pong](../../user-documentation/layout-builder/ping-pong)

Webform
: [Webform](../../user-documentation/layout-builder/webform)

## Build it

Once you have a plan, go build it! Use the [Layout Builder](../../user-documentation/layout-builder) documentation to help you through the process. Building each page might look something like this:

- Create a new, unpublished, Landing Page (with Layout Builder)
- Add blocks and content to the new page
- Ensure the URL Alias of the new page matches that of the old page
- Un-publish the old page and publish the new page.
- Test out the new page in a new browser, an incognito window, or your phone or tablet

## Get help

If at any point in this process you need help, be sure to reach out to [our community](../../../community). The functionality is always being improved, and we have a wide variety of developers and builders from other Ys who are happy to help.
