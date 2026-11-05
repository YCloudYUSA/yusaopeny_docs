---
title: "Release 11.4.0.0 for Developers"
linkTitle: "Release 11.4.0.0"
description: Upgrade steps and breaking changes in YMCA Website Services 11.4.0.0
weight: 9
---

## YMCA Website Services 11.4.0.0: Upgrade Steps & Breaking Changes

### Upgrade

From 11.3.1.x or an 11.4.0.0 release candidate (current: 11.4.0.0-rc5). After GA, drop `@RC`:

```bash
composer config allow-plugins.symfony/runtime true
composer require ycloudyusa/yusaopeny:^11.4@RC --no-update
composer update -W
drush updb -y --no-cache-clear
drush cr
```

`composer require` without `--no-update` (or `-W`) fails on an 11.3 site: the locked dependencies (e.g. `drupal/confi`
4.1) block a partial update and composer reverts `composer.json`. A fresh `extended` 11.3.1.5 install ran 34 updates
(measured on rc4; not re-measured on rc5). Sites with more modules run more.

### Root `composer.json`: remove conflicting requires

| Root require | Why it blocks | Action |
|---|---|---|
| `drupal/openy_repeat: ^3.x` | distribution requires `^4.0.0` | remove |
| `drupal/groupexpro`, `drupal/openy_gxp`, `drupal/openy_pef_gxp_sync` | `useless_machines` 2.2.0 conflicts with them | remove (see GroupEx Pro below) |
| path repository forks of Activity Finder or `openy_node_session` | released packages are required | drop the fork |
| `library-ckeditor/*` | CKEditor 4 libraries (`font`, `colorbutton`, `panelbutton`) removed from the distribution | remove |
| your own patch for fontyourface [#3630630](https://www.drupal.org/node/3630630) | the distribution now patches `drupal/fontyourface` itself | remove your patch |

### Breaking changes of Drupal core 11.4

| Issue on 11.4 | What to do in custom code |
|---|---|
| Strict config schema: legacy `blazy` formatter keys throw | Use the core image formatter; the distribution converts its own displays |
| `module_installer` ProxyClass removed | Type hint `Drupal\Core\Extension\ModuleInstallerInterface` |
| `path.matcher` decorated by `AliasPathMatcher` | Modules built on the old service break (`protected_pages` 1.x: HTTP 500 on every page); update them |
| `entity_type.manager` decorated by Trash | Do not type hint the concrete `EntityTypeManager`; use `EntityTypeManagerInterface` |

### GroupEx Pro

- `drupal/groupexpro` is no longer part of the distribution (removed in rc4, [#393](https://github.com/YCloudYUSA/yusaopeny/pull/393)).
  It was never a direct requirement in the distribution `composer.json`.
- The Embedded GroupEx Pro Schedule moved to `ycloudyusa/embedded_groupexpro_schedule` 1.0.0. Scripts load over https only.
  The account id is now stored as a number. `embedded_groupexpro_schedule_update_10001` sets a non-numeric stored id to 0,
  so enter the account id again after `drush updb`.
- `openy_gxp`, `openy_group_schedules`, `groupex_form_cache` and `openy_pef_gxp_sync` are now stubs from
  `ycloudyusa/useless_machines` 2.2.0. They uninstall themselves in `drush updb`. `openy_prgf_group_schedules` is
  uninstalled with `openy_group_schedules`; check that no content depends on it first.
- SA-CONTRIB-2026-278 ([advisory](https://www.drupal.org/sa-contrib-2026-278), Critical, PHP object injection) affects
  `drupal/groupexpro` before 2.2.1. The project was marked unsupported on 2026-10-28 and restored on 2026-11-04 with the
  fix in 2.2.1. `useless_machines` 2.2.0 conflicts with `drupal/groupexpro`, so a site on this release cannot keep it.

### fontyourface 4.3.0 (rc5)

fontyourface 4.3.0 moved its `page_attachments` hook into a hook class that runs last. Provider submodules
(`local_fonts`, `google_fonts_api` and others) run before it, find no fonts, and no font stylesheet is attached.
The distribution patches `drupal/fontyourface` with
[merge request 20](https://git.drupalcode.org/project/fontyourface/-/merge_requests/20)
(issue [#3630630](https://www.drupal.org/node/3630630), still open). Sites that use `y_fonts` are not affected:
it has its own `page_attachments` hook and no fontyourface dependency.

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

The distribution requires Drupal core `^11.4`. A fresh `composer update -W` resolves the current releases of
all packages that allow it (the 11.4.0.0-rc3 release notes name core 11.4.11 as the version it resolved). Site packages outside the
distribution (e.g. `drupal/shield`, `drupal/simple_oauth`) update only when the site's own constraint allows it.
Run `composer audit` on your own site after the update. For the GroupEx Pro advisory see above.

Full technical notes, package tables and all PRs/MRs: [Digital Services Release 11.4.0.0]({{< relref "/blog/releases/release-ds-11.4.0.0" >}}).
