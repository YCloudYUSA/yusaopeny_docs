---
title: Dependencies in Drupal info.yml
aliases:
  - /docs/wiki/dependencies-in-drupal-info.yml/
---

In order to generate `composer.json` files for Drupal projects, Drupal.org uses specific rules defined in a module's `info.yml` file. These dependencies are used to manage the module's external libraries and Drupal core module requirements.

## Declaring Dependencies

If your module depends on another Drupal module, you should declare it in your module's `info.yml` file using the following format:

```yaml
dependencies:
  - drupal:webform
```

This tells the packager to include `drupal/webform` as a Composer dependency for your module. The Drupal.org packaging system resolves `drupal:webform` to the correct package name and version.

You can find the correct Drupal.org project shortname to use for dependency declarations on the project page near the bottom. For example, the [Webform project](https://www.drupal.org/project/webform) is `webform`. The corresponding composer package name is `drupal/webform`.

## Incorrect Dependency Declaration

If you were to specify a dependency like this:

```yaml
dependencies:
  - whatevernameyouwish:webform
```

The Drupal.org packaging routine will automatically correct it to `drupal:webform` during the packaging process.

## Soft Dependencies (Drupal Core Only)

There may be situations where you want to express a dependency for Drupal core to manage during module installation and enabling, but not require Composer to manage it. This is sometimes referred to as a "soft dependency". In such cases, you can use the simplified format:

```yaml
dependencies:
  - webform
```

In this scenario:

*   Composer will *not* include any dependency.
*   Drupal core *will* require that the `webform` module be present in the codebase before your module can be enabled.  Drupal will check for the existence of the module when resolving dependencies during module installation.

This approach is useful when a module's functionality degrades gracefully if another module is not present, but is enhanced if it is.
