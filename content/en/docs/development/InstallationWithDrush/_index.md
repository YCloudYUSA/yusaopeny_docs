---
title: Installation With Drush
---

You can use the [drush site-install](https://drushcommands.com/drush-8x/core/site-install/) command to quickly set up the OpenY distribution.

The basic syntax is:

```
drush site-install openy --account-pass=password --db-url="mysql://user:pass@host:3306/db" --root=/var/www/docroot
```

This command uses the complete YMCA Website Services profile preset and the YMCA Website Services Rose theme.

To specify a different profile preset or theme, use the `openy_configure_profile.preset` and `openy_theme_select.theme` variables:

```
drush site-install openy --account-pass=password --db-url="mysql://user:pass@host:3306/db" --root=/var/www/docroot openy_configure_profile.preset=extended openy_theme_select.theme=openy_rose
```

**Explanation of parameters:**

*   `openy`: Specifies the installation profile to use (OpenY).
*   `--account-pass=password`: Sets the administrator password.  Replace `"password"` with a secure password.
*   `--db-url="mysql://user:pass@host:3306/db"`: Defines the database connection details.
    *   `user`: Database username.
    *   `pass`: Database password.
    *   `host`: Database host.
    *   `3306`: Database port (default MySQL port).
    *   `db`: Database name.
*   `--root=/var/www/docroot`: Specifies the Drupal root directory.  Adjust this to the correct path on your server.
*   `openy_configure_profile.preset=extended`: Selects the "extended" installation preset.
*   `openy_theme_select.theme=openy_rose`:  Selects the "openy_rose" theme.
