```markdown
---
title: Drupal-SA-CORE-2018-004 Security Update
aliases:
  - /docs/wiki/openy-security---drupal-sa-core-2018-004/
---

This document is archived but may contain useful information for troubleshooting future updates. For updated upgrade steps, visit [How to upgrade YMCA Website Services]({{< relref OpenY-upgrade-how-to-for-Developers.md >}}).

---

This document provides instructions for applying the security fix described in Drupal core's [SA-CORE-2018-004](https://www.drupal.org/SA-CORE-2018-004) security advisory to your OpenY site.

The OpenY team suggests two options:

*   **Apply a patch:** Use this method for a quick resolution.
*   **Upgrade Drupal core (or OpenY):** This is a more comprehensive solution but may require more planning and testing.

Applying the patch is recommended to address the security issue promptly. You can then schedule a Drupal core or OpenY upgrade for a later date.

### How to Apply the Patch

The following instructions are for patching OpenY releases 8.0.1 - 8.1.10, which correspond to Drupal cores 8.2.x, 8.3.x, and 8.4.x.

1.  **Access your server via SSH:**

    Log in to your production server environment via SSH and navigate to the `docroot` folder of your site codebase.  If you followed a standard OpenY installation tutorial, your site is likely located in either `/var/www/html` or `/var/www/openy`.

    *   **If your site is located in `/var/www/html`:**

        ```sh
        ssh -l root YOUR_SERVER_DOMAIN_NAME
        cd /var/www/html
        ```

    *   **If your site is located in `/var/www/openy`:**

        ```sh
        ssh -l root YOUR_SERVER_DOMAIN_NAME
        cd /var/www/openy
        ```

2.  **Download the patch:**

    Download the appropriate patch file.

    ```sh
    wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/scripts/patches/SA-CORE-2018-004.patch
    ```

3.  **Back up the files to be patched:**

    Before applying the patch, create backups of the files that will be modified. This allows you to revert the changes if necessary.

    ```sh
    sudo cp docroot/core/lib/Drupal/Core/Security/RequestSanitizer.php /var/backups/RequestSanitizer.php
    sudo cp docroot/core/modules/file/src/Element/ManagedFile.php /var/backups/ManagedFile.php
    ```

4.  **Test the patch:**

    Run the following command to test if the patch can be applied successfully:

    ```sh
    patch -p1 --dry-run < SA-CORE-2018-004.patch
    ```

    You should see the following output:

    ```sh
    # patch -p1 --dry-run < SA-CORE-2018-004.patch
    checking file core/lib/Drupal/Core/Security/RequestSanitizer.php
    checking file core/modules/file/src/Element/ManagedFile.php
    ```

    If the output is different, stop and seek assistance.  A failed dry-run indicates a problem applying the patch, and applying it anyway could break your site.

5.  **Apply the patch:**

    If the dry run was successful, apply the patch with the following command:

    ```sh
    patch -p1 < SA-CORE-2018-004.patch
    ```

    You should see the same output as in the dry run.  Your site is now patched.

    **Important:** Clear all caches after applying the patch. This can be done via the Drupal UI or using Drush: `drush cr`

6.  **(Optional) Commit changes to your Git repository:**

    If you are using Git for version control, add the patched files to your repository and commit the changes.

    ```sh
    git add docroot/core/modules/file/src/Element/ManagedFile.php docroot/core/lib/Drupal/Core/Security/RequestSanitizer.php
    git commit -m "Apply SA-CORE-2018-004 security patch"
    git push
    ```

### Patching a DigitalOcean OpenY Installation

If you installed OpenY on a DigitalOcean server (droplet) using a tutorial, these steps provide a simplified patching method.

1.  **Log in to the Drupal admin UI:**

    Access your site's admin interface by navigating to `/user/login`.

2.  **Access the DigitalOcean console:**

    Log in to the DigitalOcean cloud console at digitalocean.com and find the "Access Console" option in the dropdown menu for your OpenY droplet.

    ![DigitalOcean Access Console](https://user-images.githubusercontent.com/563412/38104705-b2ebf8fe-3392-11e8-8c27-55db3ed032ff.png)

3.  **Log in to the console:**

    A popup window with a black screen will appear, prompting for login credentials. Use `root` as the username and the password generated during droplet creation.

4.  **Run the one-line script:**

    Execute the following command in the console. This script automatically applies the patch:

    ```sh
    bash < <(curl -s https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/scripts/patches/runSA-CORE-2018-004.sh)
    ```

    After the script completes, you should see the message `OpenY was patched`.

    **Important:** Clear all caches after applying the patch. This can be done via the Drupal UI or using Drush: `drush cr`
