```markdown
---
title: Profile custom configuration
description: The distribution supplements the Drupal install process with a number of custom additions.
aliases:
  - /docs/wiki/open-y-2.0-root-yaml-files/
---

There are many [YAML](http://en.wikipedia.org/wiki/YAML) configuration files at the root of the profile. Some are standard Drupal configuration, and others are YMCA Website Services specific.

## Basic .yml files

The following files are very common and can be found in many Drupal modules:

-   `openy.info.yml` ([documentation](https://www.drupal.org/docs/8/creating-custom-modules/let-drupal-8-know-about-your-module-with-an-infoyml-file)) - Defines YMCA Website Services as a profile and defines its name and dependencies. See `openy.info.yml` file located in the `/docroot/profiles/contrib/yusaopeny/` directory.
-   `openy.libraries.yml` ([documentation](https://www.drupal.org/docs/8/creating-custom-modules/adding-stylesheets-css-and-javascript-js-to-a-drupal-8-module)) - Defines global YMCA Website Services Drupal asset libraries.
-   `openy.permissions.yml` - Defines global YMCA Website Services permissions.
-   `openy.services.yml` ([documentation](https://www.drupal.org/docs/8/api/services-and-dependency-injection/structure-of-a-service-file)) - If you are introducing a service that is needed by all (or the majority of) YMCA Website Services modules, add it here and store the service class file in the `openy/src` directory.

## YMCA Website Services specific .yml files

There are also a few configurations related to the YMCA Website Services installation process and the YMCA Website Services package system:

-   `openy.installation_types.yml`
-   `openy.themes.yml`
-   `openy.packages.yml`

### YMCA Website Services packages

The YMCA Website Services package system introduces a new level of abstraction, shifting from the Drupal standard module level to packages. Packages represent complete YMCA Website Services features, which could include multiple modules. A package is a declaration of a group of several modules. You can enable and disable a package, which means the whole set of the associated Drupal modules are enabled or disabled.

This approach provides a convenient way of managing YMCA Website Services features.

The YMCA Website Services system module provides a page where the enabled and available packages are listed and can be installed/uninstalled. See the YMCA Website Services Extend page (at `/admin/openy/extend`).

### YMCA Website Services Installation types

When an YMCA Website Services site is installed, there is also another abstraction level - the installation type - which groups packages.

The hierarchy is as follows:

-   installation type
    -   package
        -   module
        -   module
    -   package
        -   module
        -   module
        -   module
    -   package
        -   module
-   installation type
    -   package
        -   module

### openy.installation_types.yml

`openy.installation_types.yml` defines the high-level presets available during website installation.

File structure:

```yaml
standard:
  name: Standard
  packages:
    - alerts
    - editorial
    - news
    - seo
    - webform

extended:
  name: Extended
  packages:
    - alerts
    - analytics
    - ...

complete:
  name: Complete/Developer
  hidden: true
  packages:
    - activenet
    - ...
```

Each installation type has a machine name which is a key of the top-level items.

#### Properties of installation types:

-   **name** (required) - A human-friendly name of the installation type.
-   **packages** (required) - A list of YMCA Website Services packages that are associated with the installation type. The packages are listed when a website is installed via the web-interface.
-   **hidden** (optional) - If the installation type must be hidden when a website is installed via the web interface.

If an YMCA Website Services site is installed using the web interface, there is a step where the installation type can be selected.

If an YMCA Website Services site is installed using Drush, then the installation type can be specified by an optional argument for the `drush site-install` command ([Installation with Drush](https://github.com/YCloudYUSA/yusaopeny/blob/8.x-2.x/docs/Development/InstallationWithDrush.md)):

```bash
drush site-install openy \
  --db-url="mysql://user:pass@host:3306/db" \
  --root=/docroot \
  openy_configure_profile.preset=extended
```

### openy.packages.yml

Packages are defined in `openy.packages.yml`. This file is placed in the root of the profile, and it's automatically detected and used by the YMCA Website Services installation process.

File structure

```yaml
blog:
  name: "Blog"
  description: "Blog package provides a set of modules to maintain and create different blog post listings."
  help: '<p>Using Blog package you can create and maintain blog posts and create flexible listings of blog posts. Watch a video below to learn more about blog anatomy.</p>
  <iframe width="560" height="315"
               src="https://www.youtube.com/embed/Vg1fy29DhdQ"
               frameborder="0" allow="autoplay; encrypted-media"
               allowfullscreen></iframe>'
  modules:
    - openy_node_blog
    - openy_prgf_blog_listing
    - openy_prgf_featured_blogs
    - openy_prgf_blog_branch
    - openy_prgf_blog_camp
    - openy_prgf_blog_latest
    - openy_txnm_blog_category

camps:
  name: "Camps"
  description: "Camps package provides a set of modules to maintain camps and add them to the location finder page."
  help: '<p>Using Camps package you can create and maintain Camps and extend location finder page to include them.</p>'
  modules:
    - openy_prgf_camp_menu
    - openy_loc_camp
```

Each package has a machine name which is a key of the top-level items.

#### Properties of packages:

-   **name** (required) - A human-friendly name of the package.
-   **description** (required) - A short description of the package features to show up on the YMCA Website Services Extend page.
-   **help** (required) - An HTML markup for the installation via web interface. It contains a help message that pops up when the package name is clicked on the `Select installation type` step.
-   **modules** (required) - A list of Drupal modules that are associated with the package. When the package is installed/uninstalled, the associated modules are installed/uninstalled respectively. When a website is installed via the web interface, all the available packages are listed there but split into two groups - the ones that are to be installed (associated with the selected package) and all the rest.

### openy.theme.yml

The file defines which YMCA Website Services themes are available for installation when a website is being installed.

If an YMCA Website Services site is installed using Drush, then the theme can be specified by an optional argument for the `drush site-install` command ([Installation with Drush](https://github.com/YCloudYUSA/yusaopeny/blob/8.x-2.x/docs/Development/InstallationWithDrush.md)):

```bash
drush site-install openy \
  --db-url="mysql://user:pass@host:3306/db" \
  --root=/docroot \
  openy_configure_profile.preset=extended \
  openy_theme_select.theme=openy_rose
```
