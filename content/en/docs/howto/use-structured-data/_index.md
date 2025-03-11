---
title: How to leverage structured data
linkTitle: use structured data
description: Structured data helps the machines reading your site - search engines, AI models, and more - understand your content.
---

> Adding structured data can enable search results that are more engaging to users and might encourage them to interact more with your website
>
> -- [Why add structured data to a page (Google)](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data#why)

The distribution (as of [version 10.3.0]({{% relref "release-ds-10.3.0.md" %}})) leverages the community contributed [Schema.org metatag module](https://www.drupal.org/project/schema_metatag) and custom code to integrate structured data into many content types. You can test if your page is outputting structured data by using the [Schema.org Validator](https://validator.schema.org/) or [Google's Rich Results Test](https://search.google.com/test/rich-results).

Once your site is updated, structured data will be _automatically generated_ 🎉 with no additional work from content editors.

## Articles

The [Article (Layout Builder)](../../user-documentation/content-types/lb-article) content type implements the [Article Schema](https://schema.org/Article) as per [Google's Article structured data docs](https://developers.google.com/search/docs/appearance/structured-data/article).

Articles have three options for the **Type**, which map to their appropriate Schema:

- Blog → [BlogPosting](https://schema.org/BlogPosting)
- News → [NewsArticle](https://schema.org/NewsArticle)
- Press Release → [Article](https://schema.org/Article) (there is currently no other appropriate Schema)

### Customizing Articles

This mapping is set in code (`y_lb_article_metatags_alter` in [y_lb_article.module](https://git.drupalcode.org/project/y_lb_article/-/blob/1.1.x/y_lb_article.module)), but all other settings are configurable via the Metatag configuration (`/admin/config/search/metatag/node__article_lb`).

## Branches

The [Branch](../../user-documentation/content-types/branch) content type implements the [LocalBusiness Schema](https://schema.org/LocalBusiness) as per [Google's Local business structured data docs](https://developers.google.com/search/docs/appearance/structured-data/local-business).

Any time the Branch Hours are updated, that content will also be reflected in the Structured Data that's read by search engines.

### Customizing Branches

The mapping is configurable in the Metatag configuration (`/admin/config/search/metatag/node__branch`). Hours configuration uses the [Open Y Hours_metatag tokens](https://github.com/open-y-subprojects/openy_hours_formatter#open-y-hours-metatag-tokens).

## FAQs

The [Accordion Layout Builder Block](../../user-documentation/layout-builder/accordion) has an option to implement the [FAQPage Schema](https://schema.org/FAQPage) as per [Google's FAQ structured data docs](https://developers.google.com/search/docs/appearance/structured-data/faqpage).

If an Accordion section contains Frequently Asked Questions, check the **FAQ?** checkbox to output them as structured data.

Tips for writing good FAQ content:

- Ensure the content contains individual sets of questions ("How old does my child need to be to swim at the YMCA?") and answers ("The YMCA offers swim classes starting at age 3 and the pool is open to children of all ages with parental supervision").
- Only one FAQ should be added to a page. If more than one is added, only the first will be output to the structured data. See [Google's Content guidelines for FAQs](https://developers.google.com/search/docs/appearance/structured-data/faqpage#content-guidelines) for more information.

### Customizing FAQs

Due to the complexity of the FAQ data, the structured data is [managed entirely in code](https://git.drupalcode.org/project/lb_accordion/-/blob/1.0.x/lb_accordion.module?ref_type=heads#L40) and is not customizable via the Drupal admin. If you need specific customizations, please post your ideas in Slack or suggest them on [the Roadmap](/roadmap) for the core team to discuss and implement.

## Other Metatags

The distribution also includes metadata configuration for each content type, which can be found in the Metatag configuration (`/admin/config/search/metatag`).  Refer to the [Metatag module documentation](https://www.drupal.org/docs/contributed-modules/metatag) for more information.

### Homepage Metatag Overrides

On some sites, the homepage may have unique metadata requirements. The homepage metatags can be overridden in the "Front page" metatag configuration.

For sites that use Layout Builder, it may be necessary to disable the **Front Page** metatag settings so that the **Landing Page (Layout Builder)** tags can be used instead.

1.  Go to `/admin/config/search/metatag/front`
2.  Scroll to the bottom of the form.
3.  Uncheck **Active** and Save the settings.

Once you have changed the settings, check the metadata of the homepage with a tool like [Social Share Preview](https://socialsharepreview.com/) to ensure the correct data is being output.
