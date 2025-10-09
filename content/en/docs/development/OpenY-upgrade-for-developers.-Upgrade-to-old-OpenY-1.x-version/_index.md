---
title: Upgrade to Open Y 1.x
aliases:
  - /docs/wiki/openy-upgrade-for-developers.-upgrade-to-old-openy-1.x-version/
---

This document is archived but may contain useful information for troubleshooting future updates. For updated update steps, visit [How to upgrade YMCA Website Services]({{< relref OpenY-upgrade-how-to-for-Developers.md >}}).

---

Upgrade to old, Open Y 1.x version ( tested on upgrading 8.0.2 to 8.1.1.14 )
=====

See [upgrade from 8.1.3 to 8.2.2.1]({{< relref "Upgrade-OpenY-8.1.3-to-8.2.2.1.md" >}})

We found the oldest OpenY instance working on 8.0.2 version of OpenY so this document should cover all the way of updating it to the latest version.

### Prepare dedicated environment for upgrade testing

Ensure you have working computer or virtual machine with
 - Ubuntu 14.04(16.04 or any decent Ubuntu LTS versions) 64 bit
 - MySQL 5.5+
 - Apache 2.4
 - PHP 5.6-7.1 (7.2 is not supported yet)

**Recommended development environment**: [DDEV](https://ddev.com/) (Docker-based development environment)

### Obtain local copy of your production site

You have to create local copy of your site locally to be able to proceed with the upgrade.
For that
 - Make a backup of your production database and copy it to your local machine
 - Make a copy of your production site codebase and copy it to your local machine

...

1. ### Detect version of your OpenY

Starting from OpenY 1.10 release you should see a version of OpenY in your site reports dashboard.
For previous versions the best way to check your version is to analyze creation date of index.php pr README.txt file in the docroot folder of your site and compare it to the release date from https://github.com/YCloudYUSA/yusaopeny/releases . Your OpenY version should be the one which is older than creation date of the files.

2. ### Run command with next never version

In a same folder where is your ```docroot``` folder run

```sh
mv composer.json composer.json.bak || true
wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/composer.json
cd docroot/profiles/contrib/openy/
rm -f yparse*
wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.1.x/scripts/yparse.sh
drush cr
sh yparse.sh | xargs drush en -y
cd ../../../../
composer require YCloudYUSA/yusaopeny:NEW_VERSION_HERE --no-update
composer update --prefer-dist --with-dependencies --prefer-stable --update-with-all-dependencies --no-suggest

```

3. ### Update the site

Go to docroot folder of your codebase and run
```sh
drush updatedb
drush entup
```

Sometimes, when ```updatedb``` fails, it is important to get stable version of some modules we found causing problems
```sh
drush dl -y plugin-8.x-2.5 contribute-8.x-1.0-beta7 scheduler-8.x-1.0 views_block_filter_block datalayer simple_menu_icons rabbit_hole metatag simple_sitemap-8.x-2.9 easy_breadcrumb-8.x-1.6
drush en -y plugin contribute scheduler views_block_filter_block datalayer simple_menu_icons rabbit_hole metatag simple_sitemap || true
drush ev "Drupal::service('module_installer')->install(['content_moderation','openy']);"
```


Ensure commands above finished with no error messages. Best way to check it - run them one more time. If next run shows
```sh
$ drush updatedb
No database updates required                                                                                    [success]
$ drush entup
No entity schema updates required                                                                               [success]
```
You almost 100% proved updated were executed correctly.

4. ### Check for regressions

...

5. ### Backup current state of the updated site

...

6. ### Proceed with an update to next version until succeeded (Start from item 1)

...
