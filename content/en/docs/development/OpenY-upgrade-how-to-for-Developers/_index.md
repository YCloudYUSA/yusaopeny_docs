---
title: Upgrading to a new version of the distribution
aliases:
  - /docs/wiki/openy-upgrade-how-to-for-developers/
---

Review a [video about this document](https://youtu.be/geeO2goJo9s).

Before upgrading, please review the [required version steps for your upgrade path]({{< relref "Important-versions-for-upgrade-path" >}}).

## Overview

-   [Prepare a dedicated environment for upgrade testing](#prepare-a-dedicated-environment-for-upgrade-testing)
-   [Obtain a local copy of your production site](#obtain-a-local-copy-of-your-production-site)
-   [Run the composer update command](#run-the-composer-update-command)
-   [Update the database](#update-the-database)
-   [Visit the OpenY upgrade tool dashboard](#visit-the-openy-upgrade-tool-dashboard)
-   [Check for regressions/Run smoke tests](#check-for-regressionsrun-smoke-tests)
-   [Backup the updated site](#backup-the-updated-site)
-   [Proceed to the next version (repeat from step 1)](#proceed-to-the-next-version-repeat-from-step-1)

## Upgrade Steps

### Prepare a Dedicated Environment for Upgrade Testing

Ensure you have a working computer or virtual machine with:

-   Ubuntu 20.04 (16.04, 18.04, or any decent Ubuntu LTS version) 64 bit
-   MySQL 5.7+ (8+ is preferred because of the performance improvements)
-   Apache 2.4 (or Nginx + php-fpm, but be aware of potential `.htaccess` issues)
-   PHP 8.1 (older versions might have issues with some contributed modules)
-   Drush 12, 11, or 10

The YMCA Website Services team maintains a [Vagrant preconfigured Virtualbox based virtual machine with OpenY](https://github.com/YCloudYUSA/yusaopeny-cibox-vm). Feel free to use it to get a working virtual environment. Follow the [Vagrant documentation](https://github.com/ymcatwincities/openy-cibox-vm/blob/master/README.md) after locating the `Vagrantfile` within your YMCA Website Services instance's codebase. Execute `vagrant up` to provision the virtual machine.

### Obtain a Local Copy of Your Production Site

To proceed with the upgrade, create a local copy of your production site.

1.  **Database Backup:** Make a backup of your production database and copy it to your local machine.
2.  **Codebase Copy:** Make a copy of your production site codebase and copy it to your local machine.
3.  **Check for Manually Removed Modules:** Ensure you have *not* manually removed Drupal modules in your database *without* uninstalling them first! If you have, return the module to the codebase and uninstall it via the Drupal Extend UI or Drush *before* proceeding.
4.  **Upgrade to the latest Open Y 9.2.x version:** Ensure your site is on the latest 9.2.x release before proceeding to newer major versions. See the [Open Y documentation](https://github.com/open-y-subprojects/openy_docs/blob/main/content/en/docs/wiki/OpenY-upgrade-how-to-for-Developers.md) for specific instructions on upgrading to the latest 9.2.x release.

### Run the Composer Update Command

In the same folder as your `docroot`, run the following commands:

```sh
mv composer.json composer.json.bak || true
wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/9.2.x/composer.json
composer update -W
```

This script *replaces* your `composer.json` file. Therefore, it is only suitable for websites with an unmodified `composer.json`.

If your `composer.json` file has been modified, manually merge the changes. The most important part is usually updating the `repositories` section.

### Update the Database

Navigate to the `docroot` folder of your codebase and run:

```sh
drush updatedb
```

#### If `updatedb` Fails...

You can use Drupal's `hook_update_dependencies` API to alter the order of updates. See [this example](https://github.com/YCloudYUSA/yusaopeny/pull/1560/files) for guidance.

Ensure the commands finish without errors. Run them a second time. If the output is:

```sh
$ drush updatedb
No database updates required                                                                                    [success]
```

This confirms the updates were executed correctly.

#### If Loading the Site Fails...

You might encounter an error like this:

> Error: Class ... not found in ...

This occurs when Drupal cannot find renamed modules. Manually clear Drupal's caches:

```sh
drush ev "drupal_flush_all_caches();"
drush cr
```

This should resolve the errors.

### Visit the OpenY Upgrade Tool Dashboard

Review and revert or apply updated configuration versions after the upgrade.

![OpenY Upgrade Tool Dashboard](https://user-images.githubusercontent.com/563412/55151463-01759b00-5157-11e9-878e-dc744698a021.png)

### Check for Regressions/Run Smoke Tests

Perform smoke tests to identify regressions after the upgrade. The YMCA Website Services team maintains a [smoke tests database document](https://docs.google.com/spreadsheets/d/1yLUkMgJKK94hABy107_V-1AcJbRSSEf2s4wsQto1wfI/edit?usp=sharing) to assist with this process.

### Backup the Updated Site

Use [`drush sql-dump`](https://www.drush.org/latest/commands/sql_dump/) or another backup tool to create a backup of the site in its current state.

### Proceed to the Next Version (Repeat from Step 1)

Repeat these steps to upgrade to the next desired version.
