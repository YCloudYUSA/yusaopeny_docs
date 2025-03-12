---
title: Module Development
---

## Module content removal

When deleting an entity, where plugins or services of removing module are used,
then content removal should be done in the hook_uninstall() of that module.
See openy_prgf_camp_menu.install as example.

## Creating a new module

When creating a module on Drupal.org, be sure to check the following:

1. Add all current maintainers.
2. Edit and add this module template:

```html
<table class="views-view-grid" bgcolor="#d4efcc"><tr><td><h2>🇺🇦</h2></td><td>This module is maintained by Ukrainian developers. Please consider <a href="https://supportukrainenow.org">supporting Ukraine</a> in a fight for their freedom and the safety of Europe.</td></tr></table>

<!-- Edit this section with a short intro to the module -->
This component/module allows you to ... when using the <a href="https://github.com/YCloudYUSA/y_lb">YMCA Layout Builder</a> package.

<!-- Leave this section as is -->

<ul>
    <li>Read our <a href="https://github.com/YCloudYUSA/yusaopeny#installation">instructions for getting started</a>.</li>
    <li><a href="https://ds-docs.y.org/docs/">Search our documentation</a> for assistance.</li>
    <li><a href="https://ds-docs.y.org/community/">Review our Community Resources</a> for more information.</li>
</ul>

<h3 id="project-requirements">Requirements</h3>

This project is meant to be used with the <a href="https://www.drupal.org/project/openy">YMCA's Website Service distribution</a>.
```
