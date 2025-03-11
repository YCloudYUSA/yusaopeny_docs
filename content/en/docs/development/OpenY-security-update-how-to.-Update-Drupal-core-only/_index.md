```markdown
---
title: SA-CORE-2018-002 security update
aliases:
  - /docs/wiki/openy-security-update-how-to.-update-drupal-core-only/
---

This document is archived but may contain useful information for troubleshooting future updates. For updated update steps, visit [How to upgrade YMCA Website Services]({{< relref OpenY-upgrade-how-to-for-Developers.md >}}).

---

To update your OpenY site with the security fix from Drupal core [SA-CORE-2018-002](https://www.drupal.org/sa-core-2018-002), the OpenY team suggests two options: applying a patch or upgrading Drupal core (or upgrading OpenY). While a Drupal core or OpenY upgrade isn't always immediately feasible, security issues should be addressed as soon as possible. Therefore, consider applying the patch and planning an OpenY upgrade for later.

### How to Apply the Patch

Before you begin, it is crucial to identify the OpenY release version you are using. This will determine the correct patch to apply. You can find your OpenY version in the `openy.info.yml` file located in the root of your OpenY installation (e.g., `/docroot/profiles/contrib/yusaopeny/openy.info.yml`). The `version` key in that file indicates your OpenY version.

### Patching OpenY Releases 8.0.1 - 8.1.0 (Drupal core 8.2.x)

For older OpenY releases, it's highly recommended to upgrade to the latest version of OpenY or at least to a version between 8.1.1 and 8.1.6 (Drupal core 8.3.x) and then upgrade Drupal core to 8.3.9 ([Drupal 8.3.9 Release Notes](https://www.drupal.org/project/drupal/releases/8.3.9)). If an immediate upgrade isn't possible, follow these steps:

1.  **Log in to your production server:** Access your server environment via SSH and locate the `docroot` folder of your site's codebase. If you followed an OpenY installation tutorial, you should:

    ```sh
    ssh -l root YOUR_SERVER_DOMAIN_NAME
    cd /var/www/html
    wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/scripts/patches/8.2.x.patch
    ```

2.  **Back up the file to be patched:** Before applying the patch, create a backup of `DrupalKernel.php`:

    ```sh
    cp docroot/core/lib/Drupal/Core/DrupalKernel.php /var/backups/DrupalKernel.php
    ```

3.  **Test the patch:** Run the following command to check if the patch can be applied successfully:

    ```sh
    patch -p1 --dry-run < 8.2.x.patch
    ```

    You should see the following output:

    ```sh
    # patch -p1 --dry-run < 8.2.x.patch
    checking file docroot/core/lib/Drupal/Core/DrupalKernel.php
    checking file docroot/core/lib/Drupal/Core/Security/RequestSanitizer.php
    ```

    If the output differs, stop and seek assistance.

4.  **Apply the patch:** If the dry run was successful, apply the patch with the following command:

    ```sh
    patch -p1 < 8.2.x.patch
    ```

    You should see the same output as the dry run, indicating that your site is now patched.

    If the patch fails with an error message like "Hunk #1 FAILED at 123", this means the file has been modified since the patch was created. You will need to manually resolve the conflicts or revert to a clean version of the file before applying the patch.

    Common causes for patch failures include:

    *   The file has been previously patched with a different patch.
    *   The file has been customized or modified.
    *   The patch is for a different version of Drupal core.

    If you encounter issues, consult the Drupal documentation on patching or seek assistance from the OpenY community.

    After successfully applying the patch, clear the Drupal cache to ensure the changes take effect:

    ```sh
    drush cr
    ```

**Tip:** If you're using a Git repository for your site, run the following commands to commit and push the patched core:

```sh
git add docroot/core/lib/Drupal/Core/DrupalKernel.php docroot/core/lib/Drupal/Core/Security/RequestSanitizer.php && git commit -m "Patching OpenY core" && git push
```

This will store the patched core in your repository.

### Patching OpenY Releases 8.1.1 - 8.1.6 (Drupal core 8.3.x)

For these OpenY releases, upgrading to the latest version or at least to one of the 8.1.7-8.1.10 releases (Drupal core 8.4.x) with a Drupal core upgrade to 8.4.6 ([Drupal 8.4.6 Release Notes](https://www.drupal.org/project/drupal/releases/8.4.6)) is highly recommended. If that is not currently possible, follow these steps:

1.  **Log in to your production server:** Access your server environment via SSH and locate the `docroot` folder of your site's codebase. If you followed an OpenY installation tutorial, you should:

    ```sh
    ssh -l root YOUR_SERVER_DOMAIN_NAME
    cd /var/www/html
    wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/scripts/patches/8.3.x.patch
    ```

2.  **Back up the file to be patched:** Before applying the patch, create a backup of `DrupalKernel.php`:

    ```sh
    cp docroot/core/lib/Drupal/Core/DrupalKernel.php /var/backups/DrupalKernel.php
    ```

3.  **Test the patch:** Run the following command to check if the patch can be applied successfully:

    ```sh
    patch -p1 --dry-run < 8.3.x.patch
    ```

    You should see the following output:

    ```sh
    # patch -p1 --dry-run < 8.3.x.patch
    checking file docroot/core/lib/Drupal/Core/DrupalKernel.php
    checking file docroot/core/lib/Drupal/Core/Security/RequestSanitizer.php
    ```

    If the output differs, stop and seek assistance.

4.  **Apply the patch:** If the dry run was successful, apply the patch with the following command:

    ```sh
    patch -p1 < 8.3.x.patch
    ```

    You should see the same output as previously, indicating that your site is now patched.

    After successfully applying the patch, clear the Drupal cache to ensure the changes take effect:

    ```sh
    drush cr
    ```

**Tip:** If you're using a Git repository for your site, run:

```sh
git add docroot/core/lib/Drupal/Core/DrupalKernel.php docroot/core/lib/Drupal/Core/Security/RequestSanitizer.php && git commit -m "Patching OpenY core" && git push
```

to store your patched core into your own repository.

### Patching OpenY Releases 8.1.7 - 8.1.9 (Drupal core 8.4.x)

For these OpenY releases, it is highly recommended to upgrade to the latest version (8.1.10 or later) or at least to version 8.1.10 (Drupal core 8.4.x) with a Drupal core upgrade to 8.4.6 ([Drupal 8.4.6 Release Notes](https://www.drupal.org/project/drupal/releases/8.4.6)). If that is not currently possible, follow these steps:

1.  **Log in to your production server:** Access your server environment via SSH and locate the `docroot` folder of your site's codebase. If you followed an OpenY installation tutorial, you should:

    ```sh
    ssh -l root YOUR_SERVER_DOMAIN_NAME
    cd /var/www/html
    wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/scripts/patches/8.4.x.patch
    ```

2.  **Back up the file to be patched:** Before applying the patch, create a backup of `DrupalKernel.php`:

    ```sh
    cp docroot/core/lib/Drupal/Core/DrupalKernel.php /var/backups/DrupalKernel.php
    ```

3.  **Test the patch:** Run the following command to check if the patch can be applied successfully:

    ```sh
    patch -p1 --dry-run < 8.4.x.patch
    ```

    You should see the following output:

    ```sh
    # patch -p1 --dry-run < 8.4.x.patch
    checking file docroot/core/lib/Drupal/Core/DrupalKernel.php
    checking file docroot/core/lib/Drupal/Core/Security/RequestSanitizer.php
    ```

    If the output differs, stop and seek assistance.

4.  **Apply the patch:** If the dry run was successful, apply the patch with the following command:

    ```sh
    patch -p1 < 8.4.x.patch
    ```

    You should see the same output as previously, indicating that your site is now patched.

    After successfully applying the patch, clear the Drupal cache to ensure the changes take effect:

    ```sh
    drush cr
    ```

**Tip:** If you're using a Git repository for your site, run:

```sh
git add docroot/core/lib/Drupal/Core/DrupalKernel.php docroot/core/lib/Drupal/Core/Security/RequestSanitizer.php && git commit -m "Patching OpenY core" && git push
```

to store your patched core into your own repository.

==========================

### How to Patch Your DigitalOcean OpenY Install

If you followed a tutorial to install OpenY on DigitalOcean, your OpenY installation should be located in a predictable folder. This section provides a simplified method for patching your OpenY site, designed for users who are not technical experts.

1.  **Log in to your site:** Log in to your site's administrative interface as an administrator by visiting the `/user/login` URL.

2.  **Check Drupal Version:** Go to `/admin/reports/status` after login and search for Drupal Version string. It should be something like `8.2.x`, `8.3.x` or `8.4.x` (`x` - some number too, like `8.4.2`, for example). Based on your finding follow the steps below to your version

3.  **Access the DigitalOcean Console:** Log in to your DigitalOcean cloud console at digitalocean.com and find "Access Console" in the dropdown menu for the droplet you're using for OpenY.

    ![DigitalOcean Access Console](https://user-images.githubusercontent.com/563412/38104705-b2ebf8fe-3392-11e8-8c27-55db3ed032ff.png)

4.  **Log in to the Console:** A popup window with a black screen will appear, prompting you for login credentials. Use `root` as the username and the password generated for you when the droplet was created.

5.  **Run the Patch Script:** After logging in to the console, run the command corresponding to your Drupal core version.

### One-Line Script to Patch 8.2.x Drupal Core for OpenY

Type the following line manually and press Enter:

```sh
bash < <(curl -s https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/scripts/patches/run8.2.x.sh)
```

You should see the message `OpenY was patched`.

### One-Line Script to Patch 8.3.x Drupal Core for OpenY

Type the following line manually and press Enter:

```sh
bash < <(curl -s https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/scripts/patches/run8.3.x.sh)
```

You should see the message `OpenY was patched`.

### One-Line Script to Patch 8.4.x Drupal Core for OpenY

Type the following line manually and press Enter:

```sh
bash < <(curl -s https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/scripts/patches/run8.2.x.sh)
```

You should see the message `OpenY was patched`.
