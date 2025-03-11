---
title: Composer Version Constraints for YMCA Website Services
aliases:
  - /docs/wiki/composer-version-constraints-for-open-y/
---

In 2020, due to changes in Drupal core release management and demand from YMCA Website Services customers to improve upgrade path flexibility and stability, the YMCA Website Services team added extended composer version constraints to our `composer.json`. This allows for greater flexibility and stability when upgrading the YMCA Website Services platform.

Examples from [composer.json](https://github.com/YCloudYUSA/yusaopeny/blob/9.x-2.x/composer.json):

*   `"drupal/ckeditor_bootstrap_buttons": "^1.2 || ^2.0.0",` - This line means the project is compatible with version 1.2 and any subsequent 1.x versions starting from 1.2. It also indicates that version 2.0.0 has been tested and that any stable 2.x versions starting from 2.0.0 are allowed.
*   `"drupal/custom_formatters": "^3.0 || ^3.0@beta",` - This indicates testing with the 3.0 beta of `custom_formatters` and allows any 3.x version starting from 3.0 once it is released as stable.

By having multiple OR (`||`) conditions, we provide developers with information on which versions can be used for upgrades. In some cases, the latest stable version of a dependency might be incompatible with other functionalities. Using older versions is a valid strategy while other functionalities are being upgraded to be compatible.

For example, if `custom_formatters` version 3.0 is incompatible with any YMCA Website Services dependencies at the time of its release, a developer can select an older beta version to proceed with the upgrade.

To select a specific version of a dependency during an upgrade of YMCA Website Services, add the dependency and its version alongside YMCA Website Services in the `composer require` step.

For example, from the [upgrade documentation]({{< relref "OpenY-upgrade-how-to-for-Developers" >}}):

```bash
composer require YCloudYUSA/yusaopeny:NEW_VERSION_HERE --no-update
composer update --prefer-dist --with-dependencies --prefer-stable --no-suggest
```

To change a dependency version:

```bash
composer require YCloudYUSA/yusaopeny:NEW_VERSION_HERE --no-update
composer require drupal/custom_formatters:3.0@beta1
```

You can change any dependency version without upgrading YMCA Website Services by running the `composer require` command for specific dependencies and then running the Drupal Update DB routines.

Check the [official Composer documentation about version constraints](https://getcomposer.org/doc/articles/versions.md) and [updating Drupal modules with Composer](https://www.drupal.org/docs/updating-drupal/updating-modules-and-themes-using-composer).

It's important to note that many YMCA Website Services modules and themes specify core version requirements in their `.info.yml` files. These constraints define the compatible Drupal core versions for each component.

For Example:

```yaml
core_version_requirement: ^10 || ^11
```

This example indicates that the module is compatible with Drupal 10 and 11. When managing dependencies with composer, you must ensure that the version constraints defined in the `.info.yml` files are respected.
