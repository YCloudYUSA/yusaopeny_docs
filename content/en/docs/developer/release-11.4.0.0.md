---
title: "Release 11.4.0.0 for Developers"
linkTitle: "Release 11.4.0.0"
description: Upgrade steps and breaking changes in YMCA Website Services 11.4.0.0
weight: 9
---

## YMCA Website Services 11.4.0.0: Upgrade Steps & Breaking Changes

### Upgrade

From 11.3.1.x or an 11.4.0.0 release candidate:

```bash
composer config allow-plugins.symfony/runtime true
composer require ycloudyusa/yusaopeny:^11.4 --no-update
composer update -W
drush updb -y --no-cache-clear
drush cr
```

`composer require` without `--no-update` (or `-W`) fails on an 11.3 site: the locked dependencies (e.g. `drupal/confi`
4.1) block a partial update and composer reverts `composer.json`. A fresh `extended` 11.3.1.5 install runs 34 updates;
sites with more modules run more.

### Root `composer.json`: remove conflicting requires

| Root require | Why it blocks | Action |
|---|---|---|
| `drupal/openy_repeat: ^3.x` | distribution requires `^4.0.0` | remove |
| `drupal/groupexpro`, `drupal/openy_gxp`, `drupal/openy_pef_gxp_sync` | `useless_machines` 2.2.0 conflicts with them | remove |
| path repository forks of Activity Finder or `openy_node_session` | released packages are required | drop the fork |
| `library-ckeditor/*` | removed from the distribution | remove |

### Breaking changes of Drupal core 11.4

| Issue on 11.4 | What to do in custom code |
|---|---|
| Strict config schema: legacy `blazy` formatter keys throw | Use the core image formatter; the distribution converts its own displays |
| `module_installer` ProxyClass removed | Type hint `Drupal\Core\Extension\ModuleInstallerInterface` |
| `path.matcher` decorated by `AliasPathMatcher` | Modules built on the old service break (`protected_pages` 1.x: HTTP 500 on every page); update them |
| `entity_type.manager` decorated by Trash | Do not type hint the concrete `EntityTypeManager`; use `EntityTypeManagerInterface` |

### Other changes

- jQuery Migrate 4.0.2 ships with the profile as `openy/jquery_migrate` (depends on `core/jquery`); no
  `code.jquery.com` request.
- Vue 3 for Activity Finder 4 and Group Schedules, from the shared `openy_system/vue3` library (`openy_custom` 3.2+).
- Activity Finder backend is a plugin (`solr` / `mock`); `openy_activity_finder_update_9006` converts the
  setting.
- Direct `guzzlehttp/guzzle` require dropped (core still requires `^7.10`).
- Major bumps: `drupal/openy_repeat` 4, `drupal/protected_pages` 3, `ycloudyusa/yusaopeny_activity_finder` 7,
  `solarium/solarium` 7, `enshrined/svg-sanitize` 1, `consolidation/site-process` 6, `symfony/dom-crawler` 8,
  `symfony/string` 8.

### Security

55 advisories in 21 packages are fixed (core, webform, paragraphs, captcha, blazy, guzzle, symfony and others).
`composer audit` on a fresh 11.4 install: none. Site packages outside the distribution (e.g. `drupal/shield`,
`drupal/simple_oauth`) are fixed by `composer update -W` when the site's own constraint allows it.

Full technical notes, package tables and all PRs/MRs: [Digital Services Release 11.4.0.0]({{< relref "/blog/releases/release-ds-11.4.0.0" >}}).
