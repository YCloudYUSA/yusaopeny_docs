---
title: Code
description: Embed unfiltered HTML code in a page.
---

{{< tabpane text=true >}}
  {{< tab header="Video" lang="vid" >}}
    {{< youtube YVjg-0PjsOM >}}
  {{< /tab >}}
  {{% tab header="Diagram" lang="pic" %}}
![](lb-code.png)
  {{% /tab %}}
{{< /tabpane >}}

**Designs:** This block provides no additional presentation outside of the embedded content.

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

- **Title** (required): Never displayed, even if "Display Title" is checked. For administrative use only.
- **Code**: Paste in the code to be embedded on the page.

{{< readfile "../lb-save-block.partial" >}}
