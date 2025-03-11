---
title: Composer
---

It's crucial to keep your `composer.lock` file synchronized with your `composer.json` file. Here's how:

*   **After any changes to `composer.json`**: Ensure you update the `composer.lock` file.

*   **Update a specific package:** Use the `composer update` command, which automatically updates the `composer.lock` file.

    ```
    composer update drupal/metatag
    ```

*   **Force update the `composer.lock` file:** Use `composer update --lock` to regenerate the `composer.lock` file based on the dependencies defined in `composer.json`. This is useful if you suspect the lock file is out of sync.

    ```
    composer update --lock
    ```

For comprehensive information, refer to the official Composer documentation:

[https://getcomposer.org/doc/01-basic-usage.md](https://getcomposer.org/doc/01-basic-usage.md)
