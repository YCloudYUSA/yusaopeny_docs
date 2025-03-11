---
title: Drupal 10 update
description: The update from Drupal 9 to 10 is easier than some, but still comes with some challenges.
---

The distribution core team has gone through these steps to ensure as smooth of a transition as possible. If your site is up-to-date and using no additional dependencies you may be able to skip right to the update, but otherwise you'll want to review these steps.

## Resources

-   [Upgrading from Drupal 9 to Drupal 10 (drupal.org)](https://www.drupal.org/docs/upgrading-drupal/upgrading-from-drupal-8-or-later/upgrading-from-drupal-9-to-drupal-10)
-   [Deprecated and obsolete extensions (drupal.org)](https://www.drupal.org/docs/core-modules-and-themes/deprecated-and-obsolete)
-   [mglaman/composer-drupal-lenient](https://github.com/mglaman/composer-drupal-lenient) - can help install modules that do not yet have official Drupal 10 support.

## Review Important Versions

Step through the distribution's [important versions](../important-versions-for-upgrade-path/#important-versions) until you reach `9.2.13.0`. You should be running the latest Drupal 9.5.x before you begin the upgrade to 10.

## Pre-checks

1.  **CKEditor**
    1.  If any custom/contrib modules are used, CKE5 should likely be done AFTER your D10 upgrade
    2.  Contrib checks will NOT be found in the next step, be sure to check these manually
2.  **Dependency cleanup**
    1.  Modules not installed, but in composer.json should be cleaned up to prevent unwanted dependency issues in trying to update.
3.  **Admin theme**
    1.  If your website uses a [deprecated admin theme](https://www.drupal.org/docs/core-modules-and-themes/deprecated-and-obsolete#s-recommendations-for-deprecated-themes), you should migrate to the Claro theme and test the admin experience. If necessary you can keep the deprecated theme as a contrib package but that is not recommended and won't be supported by the distribution.

## Upgrade Report

-   Install Upgrade Status
    -   `fin composer show drupal/core | grep versions`
    -   `fin composer require --dev drupal/core-dev:[copy version above] --update-with-all-dependencies`
    -   `fin composer require drupal/upgrade_status`
    -   `fin drush en upgrade_status`
-   Run the report
    -   `/admin/reports/upgrade-status`
-   Check if the website is using custom CKEditor plugins with [CKEditor Plugin Report](https://www.drupal.org/project/ckeditor_plugin_report)

## Keep / Kill

-   Based from the report above, determine which modules (if any) could be removed without impacting the site
-   From the remaining, review if the module
    -   Has a D10 ready version
    -   Has a D10 ready Fork/Patch
        -   [mglaman/composer-drupal-lenient](https://github.com/mglaman/composer-drupal-lenient) allows you to install outdated modules without using forks!
    -   Has been abandoned
-   Itemize based on the above with notes of efforts to continue using the modules

## Custom Modules and Themes

-   Run custom modules and themes through [drupal-check](https://github.com/mglaman/drupal-check) and [phpcs](https://www.drupal.org/docs/contributed-modules/code-review-module/php-codesniffer-command-line-usage) and fix issues
    -   Some common issues:
        -   [Remove jQuery dependency from the once feature](https://www.drupal.org/node/3158256)
        -   [Migrating dependencies on core jQuery UI libraries](https://www.drupal.org/docs/upgrading-drupal/upgrading-from-drupal-8-or-later/upgrading-from-drupal-9-to-drupal-10-0/migrating-dependencies-on-core-jquery-ui-libraries)
        -   [Functions file_create_url() and file_url_transform_relative() are deprecated](https://www.drupal.org/node/2940031)
        -   [Access checking must be explicitly specified on content entity queries](https://www.drupal.org/node/3201242)
        -   [drupal_get_path() and drupal_get_filename() have been deprecated in favor of extension listing services](https://www.drupal.org/node/2940438)
        -   [Preparing for Twig 2 in Drupal 9](https://www.drupal.org/node/3071078)
-   Search for `hook_field_widget_form_alter`, `hook_field_widget_multivalue_form_alter`, `hook_field_widget_WIDGET_TYPE_form_alter` and `hook_field_widget_multivalue_WIDGET_TYPE_form_alter`. These hooks have been deprecated in Drupal 9.2 and not available anymore in Drupal 10. [Streamline field widget hooks](https://www.drupal.org/node/3180429)

## Patches

-   Review patches in `composer.json`. Review any that are no longer applying or may be duplicated by the distribution.
-   Carefully review and re-roll custom patches.

## Update

At this point you should be ready to update to the latest version of the distribution:

-   Edit the `ycloudyusa` version in your project root `composer.json`: `"ycloudyusa/yusaopeny":"^10.3",`
-   Run `composer update`
-   If errors occur, review the conflicts, check out the [known issues](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer#known-issues), and attempt to resolve them.
-   Re-run the previous steps until they complete successfully
-   Run `drush updb`, review the updates, and run them.

## Smoke Tests

We recommend reviewing critical functionality after the update to ensure any custom functionality still works.

## Troubleshooting

### Composer Issues

Composer can be ... tricky. To resolve composer conflicts:

-   If specific modules conflict, try requiring them directly to get more information about the conflict.
-   Make good use of [composer why](https://getcomposer.org/doc/03-cli.md#depends-why) and [composer why-not](https://getcomposer.org/doc/03-cli.md#prohibits-why-not)

### Update Hook Conflicts

If you run into an error like this:

> \> \[notice] Update started: y\_lb\_update\_9011
>
> \> \[error] Configuration <em class="placeholder">core.entity\_view\_display.node.lb\_event.featured</em> depends on the <em class="placeholder">core.entity\_view\_mode.node.featured</em> configuration that will not exist after import.

you may be able to resolve it yourself.

Breaking down the error message:

-   `core.entity_view_mode.node.featured` is missing, which is blocking [y\_lb\_update\_9011](https://github.com/YCloudYUSA/y_lb/blob/main/y_lb.install#L199) from installing `core.entity_view_display.node.lb_event.featured`
-   We need to figure out where `core.entity_view_mode.node.featured` _should_ be coming from, so we can search our code for that.
    -   Use the "Find in files" command in your IDE to search `docroot/modules`, or
    -   from the command line:

    ```shell
    ╰─ grep -rI "core.entity_view_mode.node.featured"
    ./contrib/ws_event/config/optional/core.entity_view_display.node.lb_event.featured.yml:    - core.entity_view_mode.node.featured
    ./contrib/y_lb_article/config/optional/core.entity_view_display.node.article_lb.featured.yml:    - core.entity_view_mode.node.featured
    ```

    -   Looking at those files in the codebase, they are identical, so we could manually import them from either module. Let's do it.

1.  Add an update hook to your own custom module [like this example](https://github.com/YCloudYUSA/yusaopeny/pull/108/files#diff-2b10287d954ae6b7c36a1af05970dc0f2ee602047b2215d60d9052a15a8819b5R1233-R1240).

    ```php
    // This goes in mymodule.install as the next update hook.
    // Increment the number accordingly.
    function mymodule_update_9000() {
        $path = \Drupal::service('extension.list.module')->getPath('ws_event') . '/config/optional';
        /** @var \Drupal\config_import\ConfigImporterService $config_importer */
        $config_importer = \Drupal::service('config_import.importer');
        $config_importer->setDirectory($path);
        $config_importer->importConfigs([
            'core.entity_view_mode.node.featured',
        ]);
    }
    ```

2.  Use [hook\_update\_dependencies](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Extension%21module.api.php/function/hook_update_dependencies/10.0.x) to ensure this new update runs before the failing one.

    ```php
    // This also goes in mymodule.install.
    function mymodule_update_dependencies() {
      $dependencies['y_lb'][9011] = [
        'mymodule' => 9000,
      ];
    }
    ```

3.  Re-run `drush updb`.
4.  If you run into other missing configs, add them to the list to be imported in `update` hook and re-run `updb`.
5.  Consider backporting your customization which led to the challenge of doing this upgrade in order for it to be covered and tested by distribution developers.
