```markdown
---
title: "Go-live Checklist"
weight: 5
---

Here are some things you should check before you go live with your Virtual Y site:

## Review Your Content

*   [Disable any Virtual Y sections](https://github.com/ymcatwincities/openy_gated_content/releases/tag/1.4) that you’re not using.
    *   Ensure that you’ve disabled links to those sections in your Main Navigation.
*   Review and click through Main Navigation and [Footer links](../managing-footer-links) to ensure they’re all valid.
*   Visit `/admin/content` and ensure any demo content is deleted or unpublished. This is important to ensure a clean and professional launch.
*   Visit **Virtual Y** > **Event Series** and ensure any demo content is deleted.
*   Ensure that Virtual Y content is displaying as you expect.
    *   If some content is not displaying, check to ensure all required fields are filled in. While the Description field is not technically required, leaving it empty can sometimes prevent content from displaying.

## Review Your Authentication

*   Review and test your Virtual Y Authentication provider.
    *   If you’re using the Daxko Barcode provider, ensure you’ve set the **Message for login failures** at **Virtual Y** > **Virtual YMCA Settings** > **GC Auth Settings** > **Edit Daxko barcode provider**.  This message will be displayed to users if their barcode is invalid.

## Final Clean-up

*   If you’re using it, ensure you’ve set up Google Analytics at **Configuration** > **System** > **Google Analytics**.
*   If you’re using any basic authentication to protect the site before it goes live (what Y Cloud calls “Site Lock”), ask your hosting partner to turn it off.  Leaving it on will prevent public access to your site.
*   If you'd like to share content with other Ys, review [Shared Content](../shared-content/) and initiate a connection to the Open Y Shared Content server.  This allows you to leverage content created by other Ys and share your own.
