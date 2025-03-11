---
title: Accordion
description: Expandable pairs of question/answer or header/section fields.
---

{{< tabpane text=true >}}
  {{< tab header="Video" lang="vid" >}}
    {{< youtube QczjkFL23W0 >}}
  {{< /tab >}}
  {{% tab header="Diagram" lang="pic" %}}
![Screenshot of the Accordion component with block labels](lb-accordion.png)
  {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**
- [Design System](../../../../../../assets/img/designs/lb-ui-kit/Accordion.jpg)
- Pre-release: [Mobile](<../../../../../../assets/img/designs/lb/Accordion Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Accordion Desktop.png>)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

- **Title** (required): Displayed if **Display title** is checked; otherwise, this is for administrative use.
- **Section Subheading**: The subheading of the accordion section.
- **Accordion Item**: Add as many items as you like using the **Add Accordion Item** or **Add new custom block** button. When you are finished adding or editing each item, be sure to click **Create/Update tab** or **Create/Update custom block** to finalize the item. Each item contains:
  - **Heading** (required): The heading that will be used to expand/contract the accordion.
  - **Body** (required): The content of the accordion.
- **FAQ?**: If this section contains Frequently Asked Questions, check this box to output them as structured data. Ensure the content contains individual sets of questions (e.g., "How old does my child need to be to swim at the YMCA?") and answers (e.g., "The YMCA offers swim classes starting at age 3 and the pool is open to children of all ages with parental supervision"). Review [Google's Content guidelines for FAQs](https://developers.google.com/search/docs/appearance/structured-data/faqpage#content-guidelines) for more information. Only one FAQ should be added to a page. If more than one is added, only the first will be output to the structured data.

{{< readfile "../lb-save-block.partial" >}}
