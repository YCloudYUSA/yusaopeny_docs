```markdown
---
title: Upgrade path
---

All changes in configurations should be added to the appropriate `hook_update_N` function in order to update already existing environments. We suggest using the [Config installer module](https://www.drupal.org/project/config_installer) for working with `hook_update_N`.

### `openy.install` in profile

In this file, include updates that are related to the distribution in general and don't fit into any specific feature. Examples include:

- Enabling/disabling modules
- General configuration changes

### `openy_*.install` in modules

If you are updating a configuration for a specific feature, be sure to place the updates into the appropriate module's `.install` file.

### Updating specific configuration properties

With the help of the `openy_upgrade_tool.param_updater` service, you can update only a specific part of a full configuration.

To update a specific property in a configuration:

1.  Go to the module related to the configuration.
2.  Create a new `hook_update_N` function in the `openy_*.install` file.
3.  Add the code similar to the example below:

```php
$config = \Drupal::service('extension.list.module')->getPath('openy_media_image') . '/config/install/views.view.images_library.yml';
$config_importer = \Drupal::service('openy_upgrade_tool.param_updater');
$config_importer->update($config, 'views.view.images_library', 'display.default.display_options.pager');
```

Where:

-   `$config` variable contains the full path to the configuration file.
-   `views.view.images_library` - is the configuration name.
-   `display.default.display_options.pager` - is the specific property within the configuration that you want to update. You can target values within nested arrays of variable depth.

**Example using `openy_block_basic` module:**
```php
use Drupal\Core\Extension\Extension;

/**
 * Update description for field and block.
 */
function openy_block_basic_update_8001() {
  $config_dir = \Drupal::service('extension.list.module')->getPath('openy_block_basic') . '/config/install/';
  // Update multiple configurations.
  $configs = [
    'block_content.type.basic_block' => [
      'description',
    ],
    'field.field.block_content.basic_block.field_block_content' => [
      'description',
    ],
  ];

  $config_updater = \Drupal::service('openy_upgrade_tool.param_updater');
  foreach ($configs as $config_name => $params) {
    $config = $config_dir . $config_name . '.yml';
    foreach ($params as $param) {
      $config_updater->update($config, $config_name, $param);
    }
  }
}
```
### Updating entire configurations

To update an entire configuration or multiple configurations from a directory, use the `openy_upgrade_tool.importer` service.

```php
$config_dir = \Drupal::service('extension.list.module')->getPath('openy_media_image') . '/config/install';
$config_importer = \Drupal::service('openy_upgrade_tool.importer');
$config_importer->setDirectory($config_dir);
$config_importer->importConfigs(['views.view.images_library']);
```

Where:

-   `$config_dir` is the path to the directory containing the configuration files.
-   `views.view.images_library` is the name of the configuration to import.

You can also update several configurations from a directory at once:

```php
$config_importer->importConfigs([
  'views.view.images_library',
  'views.view.example_view',
]);
```
