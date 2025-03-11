```markdown
---
title: Upgrade use case from 8.2.2.3 to 8.2.7.3
aliases:
  - /docs/wiki/upgrade-use-case-from-8.2.2.3-to-8.2.7.3/
---

This document is archived but may contain useful information for troubleshooting future updates. For updated upgrade steps, visit [How to upgrade YMCA Website Services]({{< relref OpenY-upgrade-how-to-for-Developers.md >}}).

---

Follow these steps to upgrade from version 8.2.2.3 to 8.2.7.3.

1.  Uninstall the `lndr` and `optimizely` modules before running the [composer update commands]({{< relref "OpenY-upgrade-how-to-for-Developers#run-command-with-next-never-version--replace-new_version_here-with-the-version-you-are-upgrading-to-eg-8207-" >}}).

2.  Remove the `image.style.browser_thumbnail` configuration:

    ```sh
    drush cdel image.style.browser_thumbnail
    ```

3.  Enable the `openy_focal_point` and `media_directories_ui` modules.

4.  Run `drush updatedb` and follow the remaining steps in the [upgrade tutorial]({{< relref "OpenY-upgrade-how-to-for-Developers#update-the-site" >}}).
