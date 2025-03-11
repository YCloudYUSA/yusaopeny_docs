---
title: Module Development
---

## Module Content Removal

When deleting an entity where plugins or services of the removing module are used, content removal should be done in the `hook_uninstall()` function of that module. This ensures that no orphaned data or references remain in the system after the module is uninstalled.

**Example:**

See `openy_prgf_camp_menu.install` for an example of how to implement this. The `hook_uninstall()` function in this file removes paragraphs before the module uninstall to avoid errors related to missing services used in the camp menu block.

## Creating a New Module

When creating a new module on Drupal.org, ensure the following:

1.  **Add all current maintainers:** Properly credit and involve all individuals actively contributing to the module.
2.  **Add a module template:**  This template provides essential information and resources for users. Use the following HTML snippet and customize it for your module:

```html
<table class="views-view-grid" bgcolor="#d4efcc">
  <tr>
    <td>
      <h2>🇺🇦</h2>
    </td>
    <td>
      This module is maintained by Ukrainian developers. Please consider
      <a href="https://supportukrainenow.org">supporting Ukraine</a> in a fight for their freedom and the safety of Europe.
    </td>
  </tr>
</table>

<!-- Edit this section with a short intro to the module -->
This component/module allows you to ... when using the
<a href="https://github.com/YCloudYUSA/y_lb">YMCA Layout Builder</a> package.

<!-- Leave this section as is -->

<ul>
  <li>
    Read our
    <a href="https://github.com/YCloudYUSA/yusaopeny#installation">instructions for getting started</a>.
  </li>
  <li>
    <a href="https://ds-docs.y.org/docs/">Search our documentation</a> for
    assistance.
  </li>
  <li>
    <a href="https://ds-docs.y.org/community/">Review our Community Resources</a>
    for more information.
  </li>
</ul>

<h3 id="project-requirements">Requirements</h3>

This project is meant to be used with the
<a href="https://www.drupal.org/project/openy">YMCA's Website Service distribution</a>.
```
