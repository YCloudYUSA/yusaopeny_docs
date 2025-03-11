```markdown
---
title: How to Avoid Outdated Configuration
linkTitle: Avoid Outdated Configuration
description: Managing configuration across versions of a module can result in unexpected challenges.
---

Sometimes, in the process of making successive configuration changes, we need to maintain old configuration files so that outdated update hooks can still run successfully for sites that are running a module that might be many releases behind.

When a new update runs into an error like:

> Configuration ______ depends on the ______ configuration that will not exist after import.

the error most often means that some configuration that's expected in a prior update hook has been removed from the codebase. This can also happen when configuration schema changes.

In order to enable our modules to move quickly and minimize the need for developers to [stop their update process at important versions](../../development/important-versions-for-upgrade-path#important-versions), we have come up with a process of retaining "outdated" configuration when necessary.  This often involves creating a new directory to house the older configuration files.

## Overview

This process results in a configuration directory that looks like this:

```shell
config/
├── 1.0/
│   └── a.bunch.of.yml
├── 1.3/
│   └── some.different.yml
├── install/
│   └── the.regular.yml
└── optional/
    └── other.optional.yml
```

Here are a few examples of this process in action:

-   [ws_event - MR !72](https://git.drupalcode.org/project/ws_event/-/merge_requests/72)
-   [lb_accordion - MR !24](https://git.drupalcode.org/project/lb_accordion/-/merge_requests/24)
-   [lb_cards - MR !45](https://git.drupalcode.org/project/lb_cards/-/merge_requests/45)

## Fixing an Update Hook

When you encounter this error, follow these steps:

1.  **Identify the culprit:** Find the version of the module where the failing update hook was committed.
2.  **Isolate the code:** Checkout or download the old version of the module to a separate working directory.
3.  **Preserve the config:** Copy all the configuration files that are being imported in that update hook into a new directory, such as `config/outdated/x.x.x`.  Name the directory to clearly indicate the module version that the configuration pertains to.  Consider creating a `README.md` file inside this directory to document its purpose and the specific module version it supports.
4.  **Adapt the path:** Modify the `$path` line in the failing update hook, changing `/config/optional` to `/config/outdated/x.x.x`.
5.  **Test thoroughly:** Commit these changes and test them thoroughly to ensure the update hook now runs successfully and doesn't introduce regressions.

## Warning Signs

While the error message described above is the most direct indicator of an issue, it's better to prevent these errors proactively.

Watch out for changes in these types of files:

*   `core.entity_form_display.block_content.*.default.yml`
*   `core.entity_view_display.block_content.*.default.yml`

Consider also using the [Configuration Update module](https://www.drupal.org/project/config_update) to identify configuration changes between the default configuration and the active configuration on your site.

Adding or removing major features or fields can also lead to this type of error. Be particularly cautious when:

*   Removing configuration entities.
*   Changing configuration schema (e.g., renaming properties, changing data types).
*   Introducing dependencies on new modules in configuration.
