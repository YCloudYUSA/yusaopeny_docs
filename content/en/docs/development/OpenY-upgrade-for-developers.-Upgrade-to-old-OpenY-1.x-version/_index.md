```markdown
---
title: Upgrade to Open Y 1.x
aliases:
  - /docs/wiki/openy-upgrade-for-developers.-upgrade-to-old-openy-1.x-version/
---

This document is archived but may contain useful information for troubleshooting future updates. For updated update steps, visit [How to upgrade YMCA Website Services]({{< relref OpenY-upgrade-how-to-for-Developers.md >}}).

---

Upgrade to old, Open Y 1.x version (tested on upgrading 8.0.2 to 8.1.1.14)

See [upgrade from 8.1.3 to 8.2.2.1]({{< relref "Upgrade-OpenY-8.1.3-to-8.2.2.1.md" >}})

We found the oldest OpenY instance working on 8.0.2 version of OpenY so this document should cover all the way of updating it to the latest version.

### Prepare a dedicated environment for upgrade testing

Ensure you have a working computer or virtual machine with:

*   Ubuntu 14.04 (16.04 or any decent Ubuntu LTS versions) 64 bit
*   MySQL 5.5+
*   Apache 2.4
*   PHP 5.6-7.1 (7.2 is not supported yet)

The OpenY team maintains a [Vagrant preconfigured Virtualbox based virtual machine with OpenY](https://github.com/YCloudYUSA/yusaopeny-cibox-vm). Feel free to use it to get a working virtual environment.

Your own OpenY instance should have a Virtual machine injected into your site codebase. Just find `Vagrantfile` and proceed with `vagrant up` [accordingly to the documentation](https://github.com/YCloudYUSA/yusaopeny-cibox-vm/blob/master/README.md).

### Obtain a local copy of your production site

You have to create a local copy of your site locally to be able to proceed with the upgrade.

For that:

*   Make a backup of your production database and copy it to your local machine.
*   Make a copy of your production site codebase and copy it to your local machine.

...

### Detect the version of your OpenY

Starting from OpenY 1.10 release, you should see the version of OpenY in your site reports dashboard.
For previous versions, the best way to check your version is to analyze the creation date of `index.php` or `README.txt` file in the docroot folder of your site and compare it to the release date from <https://github.com/YCloudYUSA/yusaopeny/releases>. Your OpenY version should be the one which is older than the creation date of the files.

### Run the command with the next never version

In the same folder where your `docroot` folder is located, run:

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

### Update the site

Go to the docroot folder of your codebase and run:

```sh
drush updatedb
drush entup
```

Sometimes, when `updatedb` fails, it is important to get a stable version of some modules we found causing problems:

```sh
drush dl -y plugin-8.x-2.5 contribute-8.x-1.0-beta7 scheduler-8.x-1.0 views_block_filter_block datalayer simple_menu_icons rabbit_hole metatag simple_sitemap-8.x-2.9 easy_breadcrumb-8.x-1.6
drush en -y plugin contribute scheduler views_block_filter_block datalayer simple_menu_icons rabbit_hole metatag simple_sitemap || true
drush ev "Drupal::service('module_installer')->install(['content_moderation','openy']);"
```

Ensure the commands above finished with no error messages. The best way to check it - run them one more time. If the next run shows:

```sh
$ drush updatedb
No database updates required                                                                                    [success]
$ drush entup
No entity schema updates required                                                                               [success]
```

You almost 100% proved the updates were executed correctly.

### Check for regressions

...

### Backup current state of the updated site

...

### Proceed with an update to the next version until succeeded (Start from item 1)

...
