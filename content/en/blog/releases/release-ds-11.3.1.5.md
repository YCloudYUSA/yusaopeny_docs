---
title: "Digital Services Release 11.3.1.5"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.5).
date: 2026-05-27
---

## Summary

Patch release. Fixes a fatal error on form submission when reCAPTCHA v2 is enabled, by raising the `drupal/recaptcha` constraint to `^3.5@RC`.

## For Developers

### Bug Fixes

- **drupal/recaptcha `^3` → `^3.5@RC`** ([PR #369](https://github.com/YCloudYUSA/yusaopeny/pull/369))

  `drupal/recaptcha` versions below 3.5.0-rc1 declared:

  ```php
  public function submit(RequestParameters $params)
  ```

  Upstream `google/recaptcha` (already required transitively) bumped the interface to:

  ```php
  public function submit(RequestParameters $params): string
  ```

  Submitting a form with reCAPTCHA v2 enabled produced:

  ```
  Fatal error: Declaration of Drupal\recaptcha\ReCaptcha\RequestMethod\Drupal8Post::submit(ReCaptcha\RequestParameters $params)
  must be compatible with ReCaptcha\RequestMethod::submit(ReCaptcha\RequestParameters $params): string
  in docroot/modules/contrib/recaptcha/src/ReCaptcha/RequestMethod/Drupal8Post.php on line 39
  ```

  `drupal/recaptcha` [8.x-3.5-rc1](https://www.drupal.org/project/recaptcha/releases/8.x-3.5-rc1) adds the `: string` return type to `Drupal8Post::submit()`. The bumped constraint allows installs to pick up the fix while staying inside the 3.x line.

## Upgrade Instructions

```bash
composer update drupal/recaptcha -W
drush updb -y
drush cr
```

Verify on a form with reCAPTCHA v2 enabled — submission should succeed without the signature-compatibility fatal.

## Full Changelog

[`11.3.1.4...11.3.1.5`](https://github.com/YCloudYUSA/yusaopeny/compare/11.3.1.4...11.3.1.5) on GitHub.
