---
title: Code Review Quality Best Practices
aliases:
  - /docs/wiki/code-review-quality-best-practices/
---

This document supplements our [Code of Conduct and Best Practices]({{< relref "Open-Y-Code-of-Conduct-and-Best-Practices" >}}). It provides technical and in-depth guidelines for specific cases discussed during code quality reviews by the YMCA Website Services team.  All code should be reviewed by 1-2 developers before being merged into the YMCA Website Services codebase.

# General Rules

Components in YMCA Website Services (modules, themes, or other code structures) should be reusable and atomic whenever possible. Bundle all features, content types, settings, and styles to create cohesive components.

1.  General naming conventions
    1.  Features module naming
        1.  **openy\_${entity\_type|abbr}\_${entity\_bundle|abbr}\_${feature|optional}**
            1.  Example: **openy\_node\_blog\_feature**
            1.  **openy\_prgf\_sc\_feature** -> OpenY Paragraph Simple Content (name within yml)
    1.  Fields naming (<=20 chars)
        1.  **field\_${entity\_type|abbr}\_${entity\_bundle|abbr}\_{name|abbr}**
            1.  Example: **field\_prgf\_sc\_body**
    1.  **All descriptions are mandatory!**
1.  Module naming conventions - Choose the name from this list, depending on the context:
    1.  **\${project\_name|abbr}_\${business\_name|abbr}** - when the code looks like legacy and has specifics that are not ready to be open-sourced.
    1.  **openy_\${business\_name|abbr}** - when the code is ready to be extracted to an OpenY package.
    1.  **\${business\_name}** - when the code is so abstract that it has no connection to OpenY and is ready to be hosted on Drupal.org as an independent project.

## Code Sharing

To support community reuse, the `MODULE-NAME` should relate to the module's business logic. Avoid creating modules by abstracting them out of the business context. Modules shared to Drupal.org from past projects were shareable because they represented a feature tied to a business need. For example:

-   personify - module for SOAP related methods for working with Personify API
-   acrypt - Asymmetric crypt algorithm

and so on.

# PHP

## Return Early Pattern

To improve readability in functions and methods, return early if simple conditions can be checked at the beginning of a method:

```php
<?php

function foo($bar, $baz)
{
    if ($foo) {
        // logic goes here
        return $calculated_value;
    } else {
        return null;
    }
}
?>
```

Returning early reduces indentation and cognitive load.

```php
<?php

function foo($bar, $baz)
{
    if (!$foo) {
        return null;
    }

    // logic goes here
    return $calculated_value;
}
?>
```

## Define Early Pattern

When a condition aims to change a variable's value without additional logic, define the variable early and change it based on conditions, avoiding `if else elseif` structures.

Before:

```php
<?php
if ($a == 'hello') {
 $text = 'Welcome to site';
}
else {
 $text = 'Register please';
}
?>
```

After:

```php
<?php
$text = 'Register please';
if ($a == 'hello') {
 $text = 'Welcome to site';
}
?>
```

## Null Checks with `isset()`

[`isset()`](https://www.php.net/manual/en/function.isset.php) verifies if a variable is set and not null.  Additional verification against `NULL` is unnecessary.

Before:

```php
<?php
...
'video' => (isset($feed['profile_media_videos']) || $feed['profile_media_videos'] != NULL) ? $feed['profile_media_videos'] : '',
...
?>
```

After:

```php
<?php
...
'video' => (isset($feed['profile_media_videos'])) ? $feed['profile_media_videos'] : '',
...
?>
```

## Dependency Injection

Use dependency injection instead of calling methods from services statically for decoupled and easier-to-upgrade code in Drupal 8+.

See the Drupal API [Overview of the Dependency Injection Container and Services](https://api.drupal.org/api/drupal/core%21core.api.php/group/container/9.3.x).

Before:

```php
<?php
...
$node = Drupal::entityTypeManager()->getStorage('node')->load($result->getField('nid')->getValues()[0]);
...
?>
```

After:

```php
<?php
...

$node = $this->entityTypeManager->getStorage('node')->load($result->getField('nid')->getValues()[0]);
...
?>
```

## Creating Meaningful Log Messages

Write meaningful log messages with proper context to provide useful logging for site managers.

Before:

```php
<?php
...
        if($type == 'program') {

          if ($feed['profile_media_videos'] != NULL || $feed['profile_media_images'] != NULL) {
          \Drupal::logger('272')->notice($type);
...
?>
```

After:

```php
<?php
...
        if($type == 'program') {

          if ($feed['profile_media_videos'] != NULL || $feed['profile_media_images'] != NULL) {
          \Drupal::logger('form_import')->notice("FORM IMPORT: type is $type");
...
?>
```

# Maintaining an Upgrade Path

Add all configuration changes to appropriate `hook_update_N` functions to update existing environments.  We suggest using the [Config Importer and Tools](https://www.drupal.org/project/confi) package for working with `hook_update_N`.

## Install Files

### `openy.install` in Profile

Place updates related to the distribution in general and not specific to any feature in this file.

-   Enable/Disable module
-   General configs

### `openy_*.install` in Modules

If you update a configuration for a specific feature, put the updates in the appropriate module's install file.

## Config Management

### Revert Only Specific Property from Config

This is the preferred method for updating configurations, resulting in fewer conflicts when upgrading customized YMCA Website Services instances.

You can update only part of the full config with the [Config Importer module](https://www.drupal.org/project/confi).

Use the `openy_upgrade_tool.param_updater` service to update a specific property in config:

1.  Find the module where your config lives.
2.  Create a new `hook_update_N` in the `openy_*.install` file.
3.  Add the update code to that hook (for example):

```php
<?php
$config = drupal_get_path('module', 'openy_media_image') . '/config/install/views.view.images_library.yml';
$config_importer = \Drupal::service('openy_upgrade_tool.param_updater');
$config_importer->update($config, 'views.view.images_library', 'display.default.display_options.pager');
?>
```

Where:

-   `$config` variable contains the path to the config file.
-   `views.view.images_library` - config name
-   `display.default.display_options.pager` - config specific property (you can set value from a nested array with variable depth)

### Revert Full Configs

This method involves extensive config file manipulation and increases upgrade time.

Use the `openy_upgrade_tool.importer` service to update a full config or several configs from a directory:

```php
<?php
$config_dir = drupal_get_path('module', 'openy_media_image') . '/config/install';
$config_importer = \Drupal::service('openy_upgrade_tool.importer');
$config_importer->setDirectory($config_dir);
$config_importer->importConfigs(['views.view.images_library']);
?>
```

Where:

-   `$config_dir` - path to directory with config files
-   `views.view.images_library` - config name

You can also update several configs from a directory:

```php
<?php
$config_importer->importConfigs([
  'views.view.images_library',
  'views.view.example_view',
]);
?>
```

# JavaScript Includes

![JavaScript Includes Example](https://user-images.githubusercontent.com/563412/122801945-6f28b700-d2cd-11eb-8d0c-694432e8cbf0.png)
