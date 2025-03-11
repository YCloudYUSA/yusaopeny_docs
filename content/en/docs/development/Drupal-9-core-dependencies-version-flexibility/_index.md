---
title: Drupal Core Dependencies Version Flexibility
aliases:
  - /docs/wiki/drupal-9-core-dependencies-version-flexibility/
---

:::caution
This document is no longer actively maintained. The information it contains may be outdated.
:::

To update the version of Drupal being used on your site independently of YMCA Website Services, see the official Drupal documentation: [Updating Drupal Core via Composer](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer).

**Important:** The `openy/composer.json` file may set [Drupal core version constraints](https://github.com/YCloudYUSA/yusaopeny/blob/9.x-2.x/composer.json#:~:text=%22drupal/-,core%2Drecommended,-%22%3A%20%22%3E%3D9.1%2C%20%3C9.3%22%2C).  Always review these constraints before updating Drupal core.  These constraints define the compatible Drupal core versions for the YMCA Website Services distribution.

## Working with Drupal Core Versions (Example: Drupal 9)

In the February 2021 release, YMCA Website Services tagged Drupal core versions 9.0.x and 9.1.x as allowed dependencies.

Composer, by default, installs the latest stable version that satisfies the defined constraints.  Therefore, executing the following command:

```bash
composer create-project YCloudYUSA/yusaopeny-project:dev-9.2.x-development OPENY --no-interaction
```

will typically install YMCA Website Services with the latest stable 9.1.x Drupal core version (subject to the constraints in `composer.json`).

### Pinning to a Specific Drupal Core Version

If you need to stay on a specific Drupal 9.0.x stable core version (e.g., for compatibility reasons), use the following commands:

```bash
composer create-project YCloudYUSA/yusaopeny-project:dev-9.2.x-development OPENY --no-interaction
cd OPENY
composer require drupal/core:~9.0.7
```

In this example, `9.0.7` represents the specific Drupal core version you want to use for your YMCA Website Services instance. Replace this with your desired version number.

### Module Version Constraints

Refer to [Composer-version-constraints-for-Open-Y]({{< relref "Composer-version-constraints-for-Open-Y.md" >}}) for information about module version constraints within the Open Y distribution.  This document provides guidance on how module versions are managed and constrained within the YMCA Website Services ecosystem.
