---
title: Upgrade OpenY 8.1.3 to 8.2.2.1
aliases:
  - /docs/wiki/upgrade-openy-8.1.3-to-8.2.2.1/
---

This document is archived but may contain useful information for troubleshooting future updates. For updated update steps, visit [How to upgrade YMCA Website Services]({{< relref OpenY-upgrade-how-to-for-Developers.md >}}).

---

### Video tutorials

Upgrade OpenY from 8.0.7 to 8.2.2.1 - <https://www.youtube.com/watch?v=U_mg0-yKGOI>

### Document is work in progress

These are instructions for upgrading a very old version of YMCA Website Services to the latest version.
Given the fact [Drupal 8.7+ has no support for automatic entity updates](https://www.drupal.org/node/3034742) ( BaseFieldDefinitions ) we have to upgrade to 8.2.2.1 of OpenY, which is still on Drupal 8.6 Core, and then update to the latest YMCA Website Services version as usual.

# Environment

```sh
vagrant@vagrant:/var/www/docroot$ uname -a
Linux vagrant 4.15.0-29-generic #31-Ubuntu SMP Tue Jul 17 15:39:52 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux
vagrant@vagrant:/var/www/docroot$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 18.04.1 LTS
Release:	18.04
Codename:	bionic
vagrant@vagrant:/var/www/docroot$ php -v
**PHP 7.1.31-1**+ubuntu18.04.1+deb.sury.org+1 (cli) (built: Aug  7 2019 10:23:12) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.1.0, Copyright (c) 1998-2018 Zend Technologies
    with Zend OPcache v7.1.31-1+ubuntu18.04.1+deb.sury.org+1, Copyright (c) 1999-2018, by Zend Technologies
    with Xdebug v2.7.2, Copyright (c) 2002-2019, by Derick Rethans
vagrant@vagrant:/var/www/docroot$ drush --version
 **Drush Version   :  8.2.3**
vagrant@vagrant:/var/www/docroot$ composer --version
**Composer version 1.7.2** 2018-08-16 16:57:12
```

# Step-by-step guide for update

*   Use PHP7.1 for upgrade and install `php7.1-mysql php7.1-mcrypt php7.1-cli php7.1-common php7.1-curl php7.1-dev php7.1-fpm php7.1-gd php7.1-mysql php7.1-memcached php7.1-imagic php7.1-xml php7.1-xdebug php7.1-mbstring php7.1-soap php7.1-zip php7.1-xml`
*   Go to the folder of OpenY code tree where `docroot` folder is contained
*   `mv composer.json composer.json.orig`
*   `wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.2.x/composer.json`
*   `mkdir -p scripts ; cd scripts && wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/8.2.x/scripts/remove_libraries_gitignore_files.sh && cd ..`
*   `composer require YCloudYUSA/yusaopeny:8.2.2.1 --no-suggest --no-update`
*   `composer install --ignore-platform-reqs --no-suggest`
*   `composer update --prefer-stable --no-suggest`
*   `cd docroot`
*   `drush dl -y plugin-8.x-2.5 contribute-8.x-1.0-beta7 scheduler-8.x-1.0 views_block_filter_block datalayer simple_menu_icons rabbit_hole metatag simple_sitemap-8.x-3.0 easy_breadcrumb-8.x-1.6`
*   `drush en openy_upgrade_tool openy_er openy_prgf_loc_finder openy_map openy_data_wrapper openy_loc_branch content_moderation focal_point`
*   `drush ev "Drupal::service('module_installer')->install(['openy']);"` <- This steps fixes some hidden bug when `openy` profile removed from `core.extension` configuration for unknown reason.
*   Manual step (optional, if you have issues with `drush updatedb`): Edit all yml files in `profiles` folder to comment `media.type.image` , `field.field.node.program.field_header_content`, `field.field.node.branch.field_location_amenities` in dependencies sections.

    ![image](https://user-images.githubusercontent.com/563412/64005803-bc94cc80-cb19-11e9-8137-702d141c48e5.png)

    ![image](https://user-images.githubusercontent.com/563412/64005817-c1598080-cb19-11e9-8a04-9be0c7f3a15a.png)

    ![image](https://user-images.githubusercontent.com/563412/64005820-c61e3480-cb19-11e9-9853-dbad3c17d851.png)

*   run `drush updatedb -y` <- this will fail for the first time ( Media not installed yet ), disregard
*   run `drush updatedb -y` <- this should run properly.
*   run `drush entup`
