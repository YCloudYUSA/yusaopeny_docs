---
title: Simple Menu
description: A simple 1-level sidebar menu that can display in either the right or left sidebar area.
---

{{< tabpane text=true >}}
  {{< tab header="Video" lang="vid" >}}
    {{< youtube UZVurubBti8 >}}
  {{< /tab >}}
  {{% tab header="Diagram" lang="pic" %}}
![Screenshot of the Simple Menu component with block labels](lb-simple-menu.png)
  {{% /tab %}}
{{< /tabpane >}}

-----

**Designs:**
- [Design System](<../../../../../../assets/img/designs/lb-ui-kit/Side Menu.jpg>)
- Pre-release: [Mobile](<../../../../../../assets/img/designs/lb/Simple Menu Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Simple Menu Desktop.png>)

{{< readfile "../lb-add-block.partial" >}}

Fill in the content fields:

- **Title** (required): Displayed if **Display title** is checked, otherwise this is for administrative use.
- **Icon**: Optional icon (or small image) to be displayed to the left of the menu title.
- **Links**: An unlimited number of internal or external links.

{{< readfile "../lb-save-block.partial" >}}
