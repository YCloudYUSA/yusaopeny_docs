---
title: "Digital Services Release 11.3.1.6"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.6)
date: 2026-07-06
---

## Updates & New Features

- **Drupal Core constrained to 11.3.x:**
  `drupal/core` and `drupal/core-composer-scaffold` are now constrained to `>=11.3 <11.4`. Drupal core 11.4 introduces errors in the distribution, so this release pins sites to the 11.3.x line until 11.4+ compatibility is verified. ([PR #376](https://github.com/YCloudYUSA/yusaopeny/pull/376))

---

## Core & Module Updates

- **Drupal Core**
    - Constrained to `>=11.3 <11.4` — do not upgrade core to 11.4 on this release.

---

## What's Changed

### YCloudYUSA/yusaopeny
* Constrain drupal/core to <11.4 to avoid 11.4 errors in https://github.com/YCloudYUSA/yusaopeny/pull/376

**Full Changelog**: https://github.com/YCloudYUSA/yusaopeny/compare/11.3.1.5...11.3.1.6
