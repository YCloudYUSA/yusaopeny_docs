---
title: Layout Builder
weight: 1
description: >
  Build beautiful, flexible pages with Layout Builder's drag-and-drop interface.
---

Layout Builder is a powerful new page-building addition to your YMCA website.

> Drupal's Layout Builder allows content editors and site builders to easily and quickly create visual layouts for displaying content. Users can customize how content is arranged on a single page, across types of content, or even create custom landing pages with an easy-to-use drag-and-drop interface.
>
> \- [Layout Builder on Drupal.org](https://www.drupal.org/docs/8/core/modules/layout-builder)

## Getting Started with Layout Builder

YMCA Website Services 9.2.12 introduces a new Content Type: **Landing Page (Layout Builder)**. This new page will allow you to build pages using **[Sections](#sections)** with different **[Layouts](#layouts)** that contain **[Custom Blocks](#blocks)**. Please contact your development partner if you need assistance updating the latest version.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL6Wo-UX6nhySupPRWKqy0BFlzYLzYR8rB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Creating a new page

To use Layout Builder, you'll first have to create a new page:

- Choose any Layout Builder-enabled content type, or start with a basic [Landing Page](../content-types/lb-landing-page)
- Go to **Content** > **Add Content** > **The Content Type**.

Once you've saved, you will see an empty page. Click the **Layout** tab to enter Layout Builder or go directly there with **Save and edit layout**.

![Drupal admin tabs with an arrow pointing to "Layout"](lb_layout_tab.png)

### Updating an existing page

Navigate to the page you'd like to update, then click the **Layout** tab, like above.

Once you are in the Layout editor, you can create, edit, rearrange, and delete sections and blocks while viewing the page in a what-you-see-is-what-you-get preview mode.

### Saving and publishing

Changes to the page are not displayed to site viewers until you **Save Layout** on the page and **Publish** it.

When in the **Layout** editor, you will have these options at the top of the page:

- **Save Layout** will save your changes and return you to the main page view.
- **Save and edit layout** will save your changes and keep you in Layout Builder.
- **Discard Changes**
- **Revert to Defaults** will reset your page to the default empty layout.

After saving your changes, be sure your page is published:

- Click the **Edit** tab.
- Check **Published**.
- **Save** the page.

## Fundamentals

In Layout Builder, you will see the page divided up into Sections and Blocks. Your page may already be populated with some sections to get you started building, and you can change or edit those to fit your page.

### Sections

Sections create the structure of the page and contain blocks. You can drag and drop blocks between sections, but you cannot move sections themselves—you can only create sections above or below existing sections.

You can remove sections by clicking the small "X" link at the top left of the section. Click on "Configure <Name of Section>" to edit the section layout and other options.

![A screenshot of a Layout Builder page with Remove, Configure, and Add buttons labeled.](lb_section_crud.png)

#### Layouts

Layouts define the structure of a section. YMCA Website Services comes with 1-, 2-, 3-, and 4-column layouts, and each layout has additional configuration options once it's created. See [advanced options](advanced-options) for more details.

![A screenshot of the "Choose a layout for this section" dialog with options for 1 to 4 columns.](lb_choose_layout.png "Choose a layout")

![A screenshot of the "Configure Section" dialog with Layout, Style, and Settings options.](lb_section_settings.gif "Then configure the advanced Layout, Styles, and Settings.")

Some options in this configuration may not yet be fully supported.

### Blocks

While **Sections** contain the page's **structure**, **Blocks** contain its **content**.

To create a block, click Add Block in any section of the page, then Create Custom Block.

![A screenshot showing the Add Block and Create Custom Block buttons.](lb_add_block.png)

Your YMCA website has a wide array of blocks to choose from.

<div class="block-library-cta card border-0 shadow-sm mb-4" style="background: linear-gradient(135deg, rgba(0, 167, 157, 0.05), rgba(88, 44, 131, 0.05)); border-radius: 16px;">
  <div class="card-body p-4">
    <div class="row align-items-center">
      <div class="col-md-8">
        <h3 class="mb-2" style="color: var(--ymca-teal);">
          <i class="fas fa-th-large me-2"></i>Browse the Block Library
        </h3>
        <p class="mb-0 text-muted" style="font-size: 1.05rem;">
          Explore 30+ Layout Builder blocks organized by category. Find banners, cards, grids, views, testimonials, schedules, and more.
        </p>
      </div>
      <div class="col-md-4 text-md-end mt-3 mt-md-0">
        <a href="block-library/" class="btn btn-lg btn-primary" style="background: var(--ymca-teal); border-color: var(--ymca-teal); padding: 0.75rem 2rem;">
          View All Blocks <i class="fas fa-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  </div>
</div>

---

## Tips and Tricks

### Get more space for writing

The Content Editing Pane—the sidebar where you edit blocks —can sometimes be too small to get all of your content in there nicely. Simply drag anywhere on its left border to expand the pane.

![Animation showing a user dragging the border of the content editing pane to expand it.](lb_drag_content_pane.gif)

### Rearrange blocks easily

When rearranging large blocks on the page it can often be challenging to drag them around. To make this easier, uncheck **Show content preview** at the top of the page. This will substitute the "WYSIWYG" preview for block titles, making the content much more compact.

![Animation showing the show content preview checkbox being unchecked and a block being moved.](lb_show_content_preview.gif)

---

If you run into a problem, [get in touch](../../../community).

<small>Content on this page is adapted from [Drupal.org](https://www.drupal.org/docs/8/core/modules/layout-builder) and [Western Washington University](https://brand.wwu.edu/layout-builder)</small>

<style>
:root {
  --ymca-teal: #00A79D;
  --ymca-purple: #582C83;
  --ymca-blue: #0060AF;
  --ymca-red: #E31E24;
  --ymca-yellow: #FDB912;
}

.block-library-cta {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.block-library-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0, 167, 157, 0.15) !important;
}

.block-library-cta .btn:hover {
  transform: translateX(4px);
}
</style>
