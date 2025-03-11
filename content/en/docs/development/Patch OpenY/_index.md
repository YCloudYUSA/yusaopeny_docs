```markdown
---
title: Patch YMCA Website Services
---

Here you can find instructions on how to patch a YMCA Website Services distribution used in your project.

## When to Patch YMCA Website Services

-   If you've found a bug and created a patch for YMCA Website Services on GitHub.
-   If you've developed a new feature that would benefit YMCA Website Services and created a Pull Request (PR) to the YMCA Website Services repository.
-   If you want to use a feature that has been added to YMCA Website Services but isn't yet included in a released version.

### How to Patch YMCA Website Services via Composer

If you followed the instructions in [docs/Development/Start new YMCA Website Services project](https://github.com/YCloudYUSA/yusaopeny/blob/8.x-1.x/docs/Development/Start%20new%20OpenY%20project.md) and your `composer.json` is configured correctly, follow these steps:

1.  **Create a patch link using the Pull Request ID:**

    ```
    https://patch-diff.githubusercontent.com/raw/YCloudYUSA/yusaopeny/pull/XXX.patch
    ```

    Replace `XXX` with the number of the pull request you want to use.

2.  **Add a `patches` section to the `extra` section of your `composer.json` file:**

    ```json
    "extra": {
        "installer-paths": {
          ...
        },
        "enable-patching": true,
        "patches": {
            "YCloudYUSA/yusaopeny": {
                "Patch description": "https://patch-diff.githubusercontent.com/raw/YCloudYUSA/yusaopeny/pull/XXX.patch"
            }
        }
    }
    ```

    -   `Patch description`:  A brief description of what the patch does.  This helps you remember the purpose of the patch later.
    -   `https://...XXX.patch`: The patch link created in step 1.

3.  **Run `composer update`:**

    This command applies the patch to your project.

4.  **Verify the Changes:**

    Check that the changes from the patch are present in your YMCA Website Services installation.

5.  **Enjoy!**
```