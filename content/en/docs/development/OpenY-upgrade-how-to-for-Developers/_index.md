---
title: Upgrading to a new version of the distribution
aliases:
  - /docs/wiki/openy-upgrade-how-to-for-developers/
---

Review a [video about this document](https://youtu.be/geeO2goJo9s).

Before upgrading, please review these [required version steps for your upgrade path]({{< relref "Important-versions-for-upgrade-path" >}}).

## Overview

- [Prepare a dedicated environment for upgrade testing](#prepare-dedicated-environment-for-upgrade-testing)
- [Obtain a local copy of your production site](#obtain-local-copy-of-your-production-site)
- [Run command](#run-command)
- [Update the site](#update-the-site)
- [Visit the YMCA Website Services upgrade tool dashboard](#visit-openy-upgrade-tool-dashboard)
- [Check for regressions/Smoke tests](#check-for-regressions)
- [Backup current state of the updated site](#backup-current-state-of-the-updated-site)
- [Proceed with an update to next version until succeeded (Start from item 1)](#proceed-with-an-update-to-next-version-until-succeeded-start-from-item-1)

## Upgrade steps

### Prepare dedicated environment for upgrade testing

Ensure you have a working computer or virtual machine with:

- Ubuntu 20.04 (16.04, 18.04, or any decent Ubuntu LTS version) 64 bit
- MySQL 5.7+ (8+ is preferred because of the performance improvements)
- Apache 2.4 (or Nginx + php-fpm in case if you are fine with htaccess issues down the road)
- PHP 8.1 (pre 8.1 could be an issue with some contrib modules)
- Drush 12 || 10 || 11

**Recommended development environment**: [DDEV](https://ddev.com/) (Docker-based development environment)

### Obtain local copy of your production site

You have to create a local copy of your site locally to be able to proceed with the upgrade.

For that:

- Make a backup of your production database and copy it to your local machine
- Make a copy of your production site codebase and copy it to your local machine
- **Ensure you have not manually removed Drupal modules in your database without the uninstallation step being executed!** In this case you'll need to return the module back to the codebase and uninstall it via Drupal Extend UI or Drush before running the next steps to upgrade YMCA Website Services.
- **Upgrade your site to latest Open Y - 9.2.11.3** See [respective docs from Open Y documentation](https://github.com/open-y-subprojects/openy_docs/blob/main/content/en/docs/wiki/OpenY-upgrade-how-to-for-Developers.md)

### Run command

In the same folder where your `docroot` is, run:

```sh
mv composer.json composer.json.bak || true
wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/9.2.x/composer.json
composer update -W
```

The script above *replaces* your `composer.json` file, so it's only applicable to websites that have the file unmodified.

If your `composer.json` file is modified, merge the changes manually. Essentially, the `repositories` section of the file is updated.

### Update the site

Go to the `docroot` folder of your codebase and run:

```sh
drush updatedb
```

#### If updatedb fails...
you can use Drupal's `hook_update_dependencies` API to change the order of running updates to eliminate issues. [See this example](https://github.com/YCloudYUSA/yusaopeny/pull/1560/files).

Ensure commands above have finished with no error messages. The best way to check it is to run them one more time. If the next run shows:

```sh
$ drush updatedb
No database updates required                                                                                    [success]
```

You have almost 100% proven updates were executed correctly.

#### If loading the site fails...
you may receive an error like this:

> Error: Class ... not found in ...

This happens due to Drupal not finding the renamed modules. To resolve this, manually clear the Drupal caches:

```
drush ev "drupal_flush_all_caches();"
drush cr
```

which should clear up the errors.

### Visit OpenY upgrade tool dashboard

Review and revert or apply an updated version of the configs after the upgrade.

![image](https://user-images.githubusercontent.com/563412/55151463-01759b00-5157-11e9-878e-dc744698a021.png)

### Check for regressions

In order to check for regressions during the upgrade, it is best to work with smoke tests. YMCA Website Services maintains the [smoke tests database document](https://docs.google.com/spreadsheets/d/1yLUkMgJKK94hABy107_V-1AcJbRSSEf2s4wsQto1wfI/edit?usp=sharing) you should use for the process.

### Backup current state of the updated site

Use [`drush sql-dump`](https://www.drush.org/latest/commands/sql_dump/) or another backup tool to take a backup of the site in its current state.

### Proceed with an update to next version until succeeded (Start from item 1)

---

## Version-Specific Upgrade Guides

For major version upgrades between Drupal core versions, refer to these dedicated guides:

- **[Drupal 9 to Drupal 10](../drupal-10-update/)** - Detailed guide for upgrading from Drupal 9.x to Drupal 10.x
- **[Drupal 10 to Drupal 11](../drupal-11-migration/)** - Beta release guide for early adopters (stable Q4 2025)

**Note:** Most YMCAs should remain on Drupal 10 until the stable Drupal 11 release in Q4 2025. Drupal 10 is supported until December 9, 2026.

---

## Additional Resources

- [Important Versions for Upgrade Path](../important-versions-for-upgrade-path/)
- [Server Requirements](../server-requirements/)
- [YMCA Website Services Releases](https://github.com/YCloudYUSA/yusaopeny/releases)


