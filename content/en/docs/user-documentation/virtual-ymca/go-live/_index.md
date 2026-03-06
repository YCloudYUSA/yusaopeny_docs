---
title: "Go-live Checklist"
weight: 5
---

Here are some things you should check before you go live with your Virtual Y site:

## Review your content
* [Disable any Virtual Y sections](https://github.com/ymcatwincities/openy_gated_content/releases/tag/1.4) that you’re not using.
  * Ensure that you’ve disabled links to those sections in your Main Navigation.
* Review and click through Main Navigation and [Footer links](../managing-footer-links) to ensure they’re all valid.
* Visit `/admin/content` and ensure any demo content is deleted or unpublished.
* Visit **Virtual Y** > **Event Series** and ensure any demo content is deleted.
* Ensure that Virtual Y content is displaying as you expect.
  * If some content is not displaying, check to ensure all fields are filled in (the Description field is not required but can sometimes prevent content from displaying if left empty).

## Review your Authentication
* Review and test your Virtual Y Auth provider.
  * If you’re using the Daxko Barcode provider, ensure you’ve set the **Message for login failures** at **Virtual Y** > **Virtual YMCA Settings** > **GC Auth Settings** > **Edit Daxko barcode provider**.

## Final clean-up
* If you’re using it, ensure you’ve set up Google Tag at **Configuration** > **Services** > **Google Tag** (`/admin/config/services/google_tag`) with your GA4 measurement ID.
* If you’re using any basic authentication to protect the site before it goes live (what Y Cloud calls “Site Lock”), ask your hosting partner to turn it off.
* If you'd like to share content with other Ys, review [Shared Content](../shared-content/) and initiate a connection to the Open Y Shared Content server
