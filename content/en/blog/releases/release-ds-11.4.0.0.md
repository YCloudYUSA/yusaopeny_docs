---
title: "Digital Services Release 11.4.0.0"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/compare/11.3.1.6...11.4.0.0)
date: 2026-11-04
---

**Full Changelog**: https://github.com/YCloudYUSA/yusaopeny/compare/11.3.1.6...11.4.0.0

## Summary

YMCA Website Services 11.4 moves the distribution to **Drupal 11.4** and closes every open security advisory on the
current fleet:

- **Drupal Core 11.3.13 → 11.4.11** — security coverage on the current minor; 204 packages changed
- **Security** — all advisories `composer audit` reports for the distribution on 11.3 / 11.4-rc sites are fixed (core,
  webform, captcha, paragraphs, blazy, rabbit_hole, svg-sanitize, guzzle, symfony and more — see Security)
- **GroupEx Pro retired** — `drupal/groupexpro` ([SA-CONTRIB-2026-278](https://www.drupal.org/sa-contrib-2026-278), unsupported) is gone from the codebase; the Embedded GroupEx Pro Schedule continues as its own package
- **Activity Finder 7.2** — Vue 3, Category Tags filter, "Filters on Top" layout, location and schedule fixes
- **jQuery Migrate self-hosted** — no more `code.jquery.com` request on every page (fixes random
  `jQuery is not defined` errors)
- **Alt text on all Small Y demo images**
- **Drupal 12 readiness** — Layout Builder blocks, themes and content types got releases that declare `^12` (e.g. lb_cards 3.1.0, y_camp 3.1.0, ws_event 2.1.0)

## Platform

| | 11.3 site (11.3.1.5) | 11.4.0.0 |
|---|---|---|
| Drupal Core | 11.3.x (`<11.4`) | 11.4.11 |
| Activity Finder | 6.2.1 | 7.2.1 |
| Layout Builder (`y_lb`) | 5.0.4 | 5.2.1 |
| Carnation theme | 4.0.0-beta7 | 4.2.0 |
| Group Schedules (`openy_repeat`) | 3.3.0 | 4.1.0 |
| Protected Pages | 1.9.0 | 3.0.0 |
| GroupEx Pro | `drupal/groupexpro` | `ycloudyusa/embedded_groupexpro_schedule` 1.0.0 (embed only) |

---

## Highlights

### Drupal 11.4 Support

`drupal/core` and `drupal/core-composer-scaffold` raised to `^11.4` ([#372](https://github.com/YCloudYUSA/yusaopeny/pull/372)).
Core release notes: [Drupal 11.4.0](https://www.drupal.org/project/drupal/releases/11.4.0); every core release from 11.3.13 to 11.4.11 is under All Releases.
Breaking changes of core 11.4 fixed in the packages that hit them:

| Issue on 11.4 | Fix |
|---|---|
| Strict config schema: legacy `blazy` formatter keys throw | Core image formatter instead of blazy, with update hooks for existing sites ([openy_features#122](https://github.com/open-y-subprojects/openy_features/pull/122), [y_lb#312](https://github.com/YCloudYUSA/y_lb/pull/312)) |
| `module_installer` ProxyClass removed | Type hint `ModuleInstallerInterface` ([upgrade_tool!14](https://git.drupalcode.org/project/upgrade_tool/-/merge_requests/14), [confi!15](https://git.drupalcode.org/project/confi/-/merge_requests/15)) |
| `path.matcher` decorated by `AliasPathMatcher` → HTTP 500 on every page with protected_pages 1.x | `drupal/protected_pages ^3.0` ([#383](https://github.com/YCloudYUSA/yusaopeny/pull/383)) |
| `entity_type.manager` decorated by Trash → TypeError in services typed with the concrete class | `openy_repeat` 4.1.0 (Group Schedules), `openy_features` 5.4.0 (Class Location block, [openy_features#128](https://github.com/open-y-subprojects/openy_features/pull/128)) |

### GroupEx Pro retired

The drupal.org project `groupexpro` was marked **unsupported** by the Drupal Security Team
([SA-CONTRIB-2026-278](https://www.drupal.org/sa-contrib-2026-278), Critical, all versions). The GroupEx Pro API it
was built for is no longer available.

- `drupal/groupexpro`, its `drupal/openy_gxp` package and `drupal/openy_pef_gxp_sync` are removed from the
  distribution ([#393](https://github.com/YCloudYUSA/yusaopeny/pull/393)).
- The **Embedded GroupEx Pro Schedule** (the paragraph that embeds the GroupEx schedule widget) keeps working: the
  module moved to [`ycloudyusa/embedded_groupexpro_schedule`](https://github.com/YCloudYUSA/embedded_groupexpro_schedule)
  1.0.0 with the same module name. The account id is stored and output as a number only; the widget scripts load over
  https only.
- `openy_gxp`, `openy_group_schedules`, `groupex_form_cache` and `openy_pef_gxp_sync` come as self-uninstalling stubs
  from [`ycloudyusa/useless_machines`](https://github.com/YCloudYUSA/useless_machines) 2.2.0
  ([useless_machines#15](https://github.com/YCloudYUSA/useless_machines/pull/15), [#394](https://github.com/YCloudYUSA/yusaopeny/pull/394)):
  `drush updb` drops any remaining GroupEx Form Cache / GXP mapping data and tables, then uninstalls them.

### Activity Finder 7.2

- **Vue 3** for Activity Finder 4 and the Group Schedules dashboard (`openy_repeat` 4.x), loaded from the shared
  `openy_system/vue3` library (`openy_custom` 3.2+) ([#384](https://github.com/YCloudYUSA/yusaopeny/pull/384)).
- **Category Tags** — new filter mode in the AF4 block, Solr facet, wizard step and sidebar; needs
  `openy_node_session` 2.4 (Category Tags vocabulary and session field) ([AF#85](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/85),
  [openy_node_session!5](https://git.drupalcode.org/project/openy_node_session/-/merge_requests/5), [#390](https://github.com/YCloudYUSA/yusaopeny/pull/390)).
- **Filters on Top** layout style for the Activity Finder block.
- Fixes: "Limit by Location" dropdown no longer empty; location limits work as a constraint on the selection;
  date-only sessions no longer show `6:00pm-6:00pm`; results load when the page URL contains credentials.
- Backend is now a plugin (`solr` / `daxko` / `mock`); `openy_activity_finder_update_9006` converts the setting and
  enables the Solr submodule only on sites that have `search_api_solr` ([AF#86](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/86)).

### jQuery Migrate self-hosted

The profile used to inject `jquery-migrate-4.0.0-beta.1.js` from `code.jquery.com` into core's jQuery library. Under load
it raced ahead of jQuery (`Uncaught ReferenceError: jQuery is not defined`, seen on 15 of 26 sites). Now jQuery Migrate
**4.0.2** ships with the profile as `openy/jquery_migrate` with a dependency on `core/jquery`
([#386](https://github.com/YCloudYUSA/yusaopeny/pull/386)).

### Layout Builder Tables

`drupal/lb_table` **1.1.1+** (required by `y_lb` 5.2.1): tables without a `<thead>` are no longer turned into tablesaw
tables, so one header-less table no longer breaks the other tables on the page
([lb_table!16](https://git.drupalcode.org/project/lb_table/-/merge_requests/16), [y_lb#317](https://github.com/YCloudYUSA/y_lb/pull/317)).

### Small Y demo images: alt text

All 132 Small Y demo images get alt text on new installs; existing sites get it from `ws_small_y_update_91009`
(only where alt is empty) — `ws_small_y` 2.2.0 ([!85](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/85),
[!86](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/86)).

### Webform UI enabled with the Webform block

`drupal/lb_webform` 2.1.1 requires `webform_ui`, so the Webform UI is on wherever the Layout Builder Webform block is;
existing sites get it from `lb_webform_update_10001`
([lb_webform!14](https://git.drupalcode.org/project/lb_webform/-/merge_requests/14)).

### Cleanup

- Stale composer patches dropped; the rabbit_hole patch that downloaded as an empty diff is fixed; direct
  `guzzlehttp/guzzle` require removed (Guzzle is still installed because Drupal core requires `guzzlehttp/guzzle: ^7.10`) ([#387](https://github.com/YCloudYUSA/yusaopeny/pull/387)).
- CKEditor 4 library plugins removed: `library-ckeditor/font`, `colorbutton`, `panelbutton` — CKEditor 5 only
  ([#374](https://github.com/YCloudYUSA/yusaopeny/pull/374)).
- Minimums raised: `openy_carnation ^4.2` ([#389](https://github.com/YCloudYUSA/yusaopeny/pull/389)), `openy_features ^5.2`,
  `y_lb ^5.1`, `confi ^4.2`, `upgrade_tool ^4.2`, `useless_machines ^2.2.0`.

---

## Security


55 advisories in 21 packages affect the 11.3 site lock and not the upgraded one (packages.drupal.org and packagist.org advisory APIs, matched against the locked versions):

| Package | Advisories | IDs | Fixed in |
|---|---|---|---|
| `drupal/blazy` | 1 | [SA-CONTRIB-2026-104](https://www.drupal.org/sa-contrib-2026-pckf1wc_t0) | 3.0.19 |
| `drupal/captcha` | 1 | [SA-CONTRIB-2026-281](https://www.drupal.org/sa-contrib-2026-281) | 2.0.12 |
| `drupal/core` | 7 | [SA-CORE-2026-010](https://www.drupal.org/sa-core-2026-010), [SA-CORE-2026-011](https://www.drupal.org/sa-core-2026-011), [SA-CORE-2026-012](https://www.drupal.org/sa-core-2026-012), [SA-CORE-2026-013](https://www.drupal.org/sa-core-2026-na0isdadth), [SA-CORE-2026-014](https://www.drupal.org/sa-core-2026-014), [SA-CORE-2026-015](https://www.drupal.org/sa-core-2026-015), [SA-CORE-2026-016](https://www.drupal.org/sa-core-2026-016) | 11.4.11 |
| `drupal/custom_formatters` | 1 | [SA-CONTRIB-2026-225](https://www.drupal.org/sa-contrib-2026-zdighudwjf) | 4.2.1 |
| `drupal/diff` | 1 | [SA-CONTRIB-2026-096](https://www.drupal.org/sa-contrib-2026-096) | 2.1.1 |
| `drupal/easy_breadcrumb` | 1 | [SA-CONTRIB-2026-212](https://www.drupal.org/sa-contrib-2026-ahw1av9s_9) | 2.0.11 |
| `drupal/entity` | 1 | [SA-CONTRIB-2026-113](https://www.drupal.org/sa-contrib-2026-113) | 1.8.0 |
| `drupal/entity_browser` | 1 | [SA-CONTRIB-2026-094](https://www.drupal.org/sa-contrib-2026-9ycmpcajri) | 2.17.0 |
| `drupal/geolocation` | 1 | [SA-CONTRIB-2026-062](https://www.drupal.org/sa-contrib-2026-xuq567xe4o) | 3.15.0 |
| `drupal/groupexpro` | 1 | [SA-CONTRIB-2026-278](https://www.drupal.org/sa-contrib-2026-ydaojteruc) | removed |
| `drupal/paragraphs` | 2 | [SA-CONTRIB-2026-060](https://www.drupal.org/sa-contrib-2026-mgwv6qpzfz), [SA-CONTRIB-2026-061](https://www.drupal.org/sa-contrib-2026-4vcblnrxz1) | 1.23.0 |
| `drupal/rabbit_hole` | 1 | [SA-CONTRIB-2026-252](https://www.drupal.org/sa-contrib-2026-9cagfbicvj) | 1.3.0 |
| `drupal/stage_file_proxy` | 1 | [SA-CONTRIB-2026-286](https://www.drupal.org/sa-contrib-2026-286) | 3.1.7 |
| `drupal/webform` | 20 | [SA-CONTRIB-2026-154](https://www.drupal.org/sa-contrib-2026-154), [SA-CONTRIB-2026-155](https://www.drupal.org/sa-contrib-2026-155), [SA-CONTRIB-2026-158](https://www.drupal.org/sa-contrib-2026-158), [SA-CONTRIB-2026-159](https://www.drupal.org/sa-contrib-2026-159), [SA-CONTRIB-2026-160](https://www.drupal.org/sa-contrib-2026-160), [SA-CONTRIB-2026-161](https://www.drupal.org/sa-contrib-2026-161), [SA-CONTRIB-2026-162](https://www.drupal.org/sa-contrib-2026-162), [SA-CONTRIB-2026-163](https://www.drupal.org/sa-contrib-2026-163), [SA-CONTRIB-2026-164](https://www.drupal.org/sa-contrib-2026-164), [SA-CONTRIB-2026-165](https://www.drupal.org/sa-contrib-2026-165), [SA-CONTRIB-2026-166](https://www.drupal.org/sa-contrib-2026-166), [SA-CONTRIB-2026-167](https://www.drupal.org/sa-contrib-2026-167), [SA-CONTRIB-2026-168](https://www.drupal.org/sa-contrib-2026-168), [SA-CONTRIB-2026-169](https://www.drupal.org/sa-contrib-2026-169), [SA-CONTRIB-2026-170](https://www.drupal.org/sa-contrib-2026-170), [SA-CONTRIB-2026-171](https://www.drupal.org/sa-contrib-2026-171), [SA-CONTRIB-2026-172](https://www.drupal.org/sa-contrib-2026-172), [SA-CONTRIB-2026-173](https://www.drupal.org/sa-contrib-2026-173), [SA-CONTRIB-2026-174](https://www.drupal.org/sa-contrib-2026-174), [SA-CONTRIB-2026-175](https://www.drupal.org/sa-contrib-2026-175) | 6.3.1 |
| `enshrined/svg-sanitize` | 3 | [GHSA-m9xh-6747-9r6f](https://github.com/advisories/GHSA-m9xh-6747-9r6f), [GHSA-9rjx-3jch-6vjf](https://github.com/advisories/GHSA-9rjx-3jch-6vjf), [GHSA-v383-3rw5-q8rf](https://github.com/advisories/GHSA-v383-3rw5-q8rf) | 1.1.1 |
| `guzzlehttp/guzzle` | 7 | [GHSA-f283-ghqc-fg79](https://github.com/advisories/GHSA-f283-ghqc-fg79), [GHSA-g446-98w2-8p5w](https://github.com/advisories/GHSA-g446-98w2-8p5w), [GHSA-f7vp-7xgx-4w4r](https://github.com/advisories/GHSA-f7vp-7xgx-4w4r), [GHSA-h95v-h523-3mw8](https://github.com/advisories/GHSA-h95v-h523-3mw8), [GHSA-v5mv-p594-2x33](https://github.com/advisories/GHSA-v5mv-p594-2x33), [GHSA-94pj-82f3-465w](https://github.com/advisories/GHSA-94pj-82f3-465w), [GHSA-wm3w-8rrp-j577](https://github.com/advisories/GHSA-wm3w-8rrp-j577) | 7.16.1 |
| `guzzlehttp/psr7` | 1 | [GHSA-c2w2-prh8-qm98](https://github.com/advisories/GHSA-c2w2-prh8-qm98) | 2.13.2 |
| `squizlabs/php_codesniffer` | 1 | [squizlabs/php_codesniffer/CVE-2026-67434.yaml](https://github.com/PHPCSStandards/PHP_CodeSniffer/security/advisories/GHSA-hmqg-cxww-wqhq) | 3.13.6 |
| `symfony/http-foundation` | 1 | [symfony/http-foundation/CVE-2026-108082.yaml](https://symfony.com/cve-2026-108082) | v7.4.22 |
| `symfony/mime` | 1 | [symfony/mime/CVE-2026-45070.yaml](https://symfony.com/cve-2026-45070) | v7.4.22 |
| `symfony/yaml` | 1 | [symfony/yaml/CVE-2026-109413.yaml](https://symfony.com/cve-2026-109413) | v7.4.22 |

Still open after the upgrade: none.


The live audit of the 27 sites on 11.4 release candidates reported 4 core advisories (FLEET-AUDIT-2026-10-28); 11.4.11 fixes them.

Site packages (not required by the distribution), fixed by the site's `composer update -W` when its own constraint allows it:

| Package | Advisory | Fixed in |
|---|---|---|
| `drupal/shield` | SA-CONTRIB-2026-248 | 1.10 |
| `drupal/simple_oauth` | SA-CONTRIB-2026-242 | 6.1.3 |

`composer audit` on a fresh install: 11.3.1.6 — SA-CONTRIB-2026-278; 11.4 — none.

---

## Migration Guide

### Composer: allow `symfony/runtime`

Drupal 11.4 core pulls `symfony/runtime`, whose Composer plugin is blocked unless the site allows it (root-only config):

```json
"config": { "allow-plugins": { "symfony/runtime": true } }
```

### GroupEx Pro

- No action for sites that use the Embedded GroupEx Pro Schedule paragraph: the module keeps its name; `updb` converts
  a stored account id to a number (`embedded_groupexpro_schedule_update_10001`).
- Remove any root `require` of `drupal/groupexpro`, `drupal/openy_gxp` or `drupal/openy_pef_gxp_sync`:
  `useless_machines` 2.2.0 conflicts with them.
- `openy_prgf_group_schedules` (openy_features) depends on `openy_group_schedules`; where it is still enabled, the stub
  uninstalls it together with itself.

### Activity Finder

- Sites with Solr keep the Solr backend (submodule enabled by `openy_activity_finder_update_9006`).
- Sites on the Solr backend without `search_api_solr` are switched to the `mock` backend; Daxko sites stay on Daxko.
- **Category Tags are opt-in per block**: Activity Finder block → *Location & Category filters* → *Category filters* →
  **Category Tag**. The default stays *Activity (Program Subcategory)*.
- Sites that run their own fork of Activity Finder or `openy_node_session` as a path repository must drop it and
  move to the released packages.

### Group Schedules (`openy_repeat` 4)

The distribution requires `drupal/openy_repeat ^4.0.0`. Remove a root `require` of `drupal/openy_repeat: ^3.x`, or the
update does not resolve.

### CKEditor 4 plugins

If a custom module still references `library-ckeditor/*`, remove it; font family/size and colours come from
`ckeditor5_plugin_pack_font`.

## Removed Modules


Extensions in the codebase before the upgrade and gone after it (`drush pm:list`, fresh `extended` 11.3.1.5 install of the site code, then the Upgrade Path):

None.

Uninstalled by `drush updb`:

None.

Same machine name, now shipped by another package (the old package is removed):

| Module | Was in | Now in |
|---|---|---|
| `embedded_groupexpro_schedule` | `modules/contrib/groupexpro` | `modules/contrib/embedded_groupexpro_schedule` |
| `groupex_form_cache` | `modules/contrib/groupexpro` | `modules/contrib/useless_machines` |
| `openy_group_schedules` | `modules/contrib/groupexpro` | `modules/contrib/useless_machines` |
| `openy_gxp` | `modules/contrib/groupexpro` | `modules/contrib/useless_machines` |
| `openy_pef_gxp_sync` | `modules/contrib/openy_pef_gxp_sync` | `modules/contrib/useless_machines` |


## New Modules


Extensions that the upgrade adds to the codebase:

| Module | Name | Package |
|---|---|---|
| `default_admin` | Default Admin (default_admin) | Core |
| `lb_activity_finder_demo` | LB Activity Finder Demo (lb_activity_finder_demo) | YMCA Website Services |
| `openy_activity_finder_solr` | Activity Finder Solr Backend (openy_activity_finder_solr) | YMCA Website Services |
| `search_help` | Search help (search_help) | Core |
| `search_node` | Search node (search_node) | Core |

Installed by `drush updb`:

| Module | Name | Package |
|---|---|---|
| `webform_ui` | Webform UI (webform_ui) | Webform |


## Removed Packages

| Package | Version on the 11.3 site | Reason |
|---|---|---|
| `drupal/groupexpro` | 2.1.0 | Unsupported (SA-CONTRIB-2026-278); embed moved to `ycloudyusa/embedded_groupexpro_schedule` |
| `drupal/openy_gxp` | 2.1.0 | Part of groupexpro; stub in useless_machines |
| `drupal/openy_pef_gxp_sync` | 2.0.1 | GroupEx Pro API discontinued; stub in useless_machines |
| `library-ckeditor/colorbutton` | 4.10.1 | CKEditor 4 only |
| `library-ckeditor/font` | 4.12.1 | CKEditor 4 only |
| `library-ckeditor/panelbutton` | 4.10.1 | CKEditor 4 only |

New packages: `ycloudyusa/embedded_groupexpro_schedule`, `symfony/runtime`, `symfony/polyfill-php86`, `twig/html-extra`,
`justinrainbow/json-schema`, `marc-mabe/php-enum`.

---

## Updated Packages


A site on 11.3.1.5 updated to 11.4 (`composer update -W`): 204 (updated 192, added 6, removed 6) packages changed. `dev-*` packages show `version@commit`. Changes: advisories fixed, merged PRs/MRs (our packages), releases in the range (links to the release notes or the tag).

<details>
<summary><strong>Layout Builder Blocks — 23 packages</strong></summary>

| Package | Old | New | Changes |
|---|---|---|---|
| `drupal/lb_accordion` | 3.0.0 | 3.2.0 | 3 MRs; [3.1.0](https://www.drupal.org/project/lb_accordion/releases/3.1.0), [3.1.1](https://www.drupal.org/project/lb_accordion/releases/3.1.1), [3.2.0](https://www.drupal.org/project/lb_accordion/releases/3.2.0) |
| `drupal/lb_branch_amenities_blocks` | 3.0.0 | 3.1.0 | 1 MR; [3.1.0](https://www.drupal.org/project/lb_branch_amenities_blocks/releases/3.1.0) |
| `drupal/lb_branch_hours_blocks` | 3.0.0 | 3.1.0 | 1 MR; [3.1.0](https://www.drupal.org/project/lb_branch_hours_blocks/releases/3.1.0) |
| `drupal/lb_branch_social_links_blocks` | 1.0.7 | 1.1.0 | 1 MR; [1.1.0](https://www.drupal.org/project/lb_branch_social_links_blocks/releases/1.1.0) |
| `drupal/lb_cards` | 3.0.2 | 3.1.0 | 2 MRs; [3.0.3](https://www.drupal.org/project/lb_cards/releases/3.0.3), [3.1.0](https://www.drupal.org/project/lb_cards/releases/3.1.0) |
| `drupal/lb_carousel` | 3.0.0 | 3.1.0 | 1 MR; [3.1.0](https://www.drupal.org/project/lb_carousel/releases/3.1.0) |
| `drupal/lb_grid_cta` | 4.0.0 | 4.1.0 | 1 MR; [4.1.0](https://www.drupal.org/project/lb_grid_cta/releases/4.1.0) |
| `drupal/lb_hero` | 2.0.3 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/lb_hero/releases/2.1.0) |
| `drupal/lb_modal` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/lb_modal/releases/2.1.0) |
| `drupal/lb_partners_blocks` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/lb_partners_blocks/releases/2.1.0) |
| `drupal/lb_ping_pong` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/lb_ping_pong/releases/2.1.0) |
| `drupal/lb_promo` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/lb_promo/releases/2.1.0) |
| `drupal/lb_related_articles_blocks` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/lb_related_articles_blocks/releases/2.1.0) |
| `drupal/lb_related_events_blocks` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/lb_related_events_blocks/releases/2.1.0) |
| `drupal/lb_simple_menu` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/lb_simple_menu/releases/2.1.0) |
| `drupal/lb_staff_members_blocks` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/lb_staff_members_blocks/releases/2.1.0) |
| `drupal/lb_statistics` | 3.0.0 | 3.1.0 | 1 MR; [3.1.0](https://www.drupal.org/project/lb_statistics/releases/3.1.0) |
| `drupal/lb_table` | 1.1.0 | 1.2.0 | 2 MRs; [1.1.1](https://www.drupal.org/project/lb_table/releases/1.1.1), [1.2.0](https://www.drupal.org/project/lb_table/releases/1.2.0) |
| `drupal/lb_testimonial_blocks` | 2.1.0 | 2.2.0 | 1 MR; [2.2.0](https://www.drupal.org/project/lb_testimonial_blocks/releases/2.2.0) |
| `drupal/lb_webform` | 2.0.0 | 2.1.1 | 2 MRs; [2.1.0](https://www.drupal.org/project/lb_webform/releases/2.1.0), [2.1.1](https://www.drupal.org/project/lb_webform/releases/2.1.1) |
| `ycloudyusa/lb_claro` | 3.0.2 | 3.1.1 | 2 PRs; [3.1.0](https://github.com/YCloudYUSA/lb_claro/releases/tag/3.1.0), [3.1.1](https://github.com/YCloudYUSA/lb_claro/releases/tag/3.1.1) |
| `ycloudyusa/y_lb` | 5.0.4 | 5.2.1 | 4 PRs; [5.0.5](https://github.com/YCloudYUSA/y_lb/releases/tag/5.0.5), [5.1.0](https://github.com/YCloudYUSA/y_lb/releases/tag/5.1.0), [5.2.0](https://github.com/YCloudYUSA/y_lb/releases/tag/5.2.0), [5.2.1](https://github.com/YCloudYUSA/y_lb/releases/tag/5.2.1) |
| `ycloudyusa/y_lb_demo_content` | 5.1.0 | 5.2.0 | 1 PR; [5.2.0](https://github.com/YCloudYUSA/y_lb_demo_content/releases/tag/5.2.0) |

</details>

<details>
<summary><strong>Website Services Themes and Small Y — 7 packages</strong></summary>

| Package | Old | New | Changes |
|---|---|---|---|
| `drupal/openy_carnation` | 4.0.0-beta7 | 4.2.0 | 2 MRs; [4.1.0](https://www.drupal.org/project/openy_carnation/releases/4.1.0), [4.2.0](https://www.drupal.org/project/openy_carnation/releases/4.2.0) |
| `drupal/ws_code_block` | 1.1.0 | 1.2.0 | 1 MR; [1.2.0](https://www.drupal.org/project/ws_code_block/releases/1.2.0) |
| `drupal/ws_colorway_canada` | 2.0.1 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/ws_colorway_canada/releases/2.1.0) |
| `drupal/ws_event` | 2.0.1 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/ws_event/releases/2.1.0) |
| `drupal/ws_lb_tabs` | 3.0.0 | 3.1.0 | 1 MR; [3.1.0](https://www.drupal.org/project/ws_lb_tabs/releases/3.1.0) |
| `drupal/ws_promotion` | 2.0.0 | 2.1.0 | 2 MRs; [2.1.0](https://www.drupal.org/project/ws_promotion/releases/2.1.0) |
| `drupal/ws_small_y` | 2.0.4 | 2.2.0 | 6 MRs; [2.0.5](https://www.drupal.org/project/ws_small_y/releases/2.0.5), [2.0.6](https://www.drupal.org/project/ws_small_y/releases/2.0.6), [2.1.0](https://www.drupal.org/project/ws_small_y/releases/2.1.0), [2.2.0](https://www.drupal.org/project/ws_small_y/releases/2.2.0) |

</details>

<details>
<summary><strong>Content Types — 8 packages</strong></summary>

| Package | Old | New | Changes |
|---|---|---|---|
| `drupal/y_branch` | 1.1.1 | 1.2.0 | 1 MR; [1.2.0](https://www.drupal.org/project/y_branch/releases/1.2.0) |
| `drupal/y_branch_menu` | 1.1.1 | 1.2.0 | 1 MR; [1.2.0](https://www.drupal.org/project/y_branch_menu/releases/1.2.0) |
| `drupal/y_camp` | 3.0.0 | 3.1.0 | 1 MR; [3.1.0](https://www.drupal.org/project/y_camp/releases/3.1.0) |
| `drupal/y_donate` | 3.0.1 | 3.1.0 | 1 MR; [3.1.0](https://www.drupal.org/project/y_donate/releases/3.1.0) |
| `drupal/y_facility` | 3.0.0 | 3.1.0 | 1 MR; [3.1.0](https://www.drupal.org/project/y_facility/releases/3.1.0) |
| `drupal/y_lb_article` | 2.0.1 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/y_lb_article/releases/2.1.0) |
| `drupal/y_program` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/y_program/releases/2.1.0) |
| `drupal/y_program_subcategory` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/y_program_subcategory/releases/2.1.0) |

</details>

<details>
<summary><strong>YUSAOpenY Modules — 27 packages</strong></summary>

| Package | Old | New | Changes |
|---|---|---|---|
| `drupal/openy_branch_selector` | 1.1.2 | 1.2.0 | 1 MR; [1.2.0](https://www.drupal.org/project/openy_branch_selector/releases/1.2.0) |
| `drupal/openy_daxko2` | 1.0.7 | 1.1.0 | 1 MR; [1.1.0](https://www.drupal.org/project/openy_daxko2/releases/1.1.0) |
| `drupal/openy_er` | 1.1.1 | 1.2.0 | 1 MR; [1.2.0](https://www.drupal.org/project/openy_er/releases/1.2.0) |
| `drupal/openy_gtranslate` | 2.0.0 | 2.1.0 | 1 MR; [2.1.0](https://www.drupal.org/project/openy_gtranslate/releases/2.1.0) |
| `drupal/openy_gxp` | 2.1.0 | — | — |
| `drupal/openy_mappings` | 1.1.1 | 1.2.0 | 1 MR; [1.2.0](https://www.drupal.org/project/openy_mappings/releases/1.2.0) |
| `drupal/openy_node_session` | 2.2.0 | 2.4.0 | 3 MRs; [2.3.0](https://www.drupal.org/project/openy_node_session/releases/2.3.0), [2.4.0](https://www.drupal.org/project/openy_node_session/releases/2.4.0) |
| `drupal/openy_pef_gxp_sync` | 2.0.1 | — | — |
| `drupal/openy_repeat` | 3.3.0 | 4.1.0 **major** | 3 MRs; [3.4.0](https://www.drupal.org/project/openy_repeat/releases/3.4.0), [4.0.0](https://www.drupal.org/project/openy_repeat/releases/4.0.0), [4.1.0](https://www.drupal.org/project/openy_repeat/releases/4.1.0) |
| `drupal/openy_socrates` | 1.1.0 | 1.2.1 | 2 MRs; [1.2.0](https://www.drupal.org/project/openy_socrates/releases/1.2.0), [1.2.1](https://www.drupal.org/project/openy_socrates/releases/1.2.1) |
| `open-y-subprojects/common_scss` | dev-main@6c3bbed | dev-main@ecc3542 | 1 PR |
| `open-y-subprojects/openy_content_core` | 3.3 | 3.4.0 | 1 PR; [3.4.0](https://github.com/open-y-subprojects/openy_content_core/releases/tag/3.4.0) |
| `open-y-subprojects/openy_custom` | 3.1.5 | 3.3.0 | 4 PRs; [3.2.0](https://github.com/open-y-subprojects/openy_custom/releases/tag/3.2.0), [3.3.0](https://github.com/open-y-subprojects/openy_custom/releases/tag/3.3.0) |
| `open-y-subprojects/openy_daxko_gxp_syncer` | 1.4.1 | 1.5.0 | 1 PR; [1.5.0](https://github.com/open-y-subprojects/openy_daxko_gxp_syncer/releases/tag/1.5.0) |
| `open-y-subprojects/openy_demo_content` | 2.6.0 | 2.7.0 | 1 PR; [2.7.0](https://github.com/open-y-subprojects/openy_demo_content/releases/tag/2.7.0) |
| `open-y-subprojects/openy_features` | 5.1.4 | 5.4.0 | 4 PRs; [5.2.0](https://github.com/open-y-subprojects/openy_features/releases/tag/5.2.0), [5.3.0](https://github.com/open-y-subprojects/openy_features/releases/tag/5.3.0), [5.4.0](https://github.com/open-y-subprojects/openy_features/releases/tag/5.4.0) |
| `open-y-subprojects/openy_focal_point` | 2.1.0 | 2.2.0 | 3 PRs; [2.2.0](https://github.com/open-y-subprojects/openy_focal_point/releases/tag/2.2.0) |
| `open-y-subprojects/openy_hours_formatter` | 3.0.2 | 3.1.0 | 2 PRs; [3.0.3](https://github.com/open-y-subprojects/openy_hours_formatter/releases/tag/3.0.3), [3.1.0](https://github.com/open-y-subprojects/openy_hours_formatter/releases/tag/3.1.0) |
| `open-y-subprojects/openy_map` | 6.0.0-beta4 | 6.1.0 | 3 PRs; [6.0.1](https://github.com/open-y-subprojects/openy_map/releases/tag/6.0.1), [6.1.0](https://github.com/open-y-subprojects/openy_map/releases/tag/6.1.0) |
| `open-y-subprojects/openy_node_alert` | 2.4.2 | 2.5.0 | 2 PRs; [2.4.3](https://github.com/open-y-subprojects/openy_node_alert/releases/tag/2.4.3), [2.5.0](https://github.com/open-y-subprojects/openy_node_alert/releases/tag/2.5.0) |
| `open-y-subprojects/ynorth_gxp_spots_proxy` | 1.0.1 | 1.1.0 | 1 PR; [1.1.0](https://github.com/open-y-subprojects/ynorth_gxp_spots_proxy/releases/tag/1.1.0) |
| `ycloudyusa/embedded_groupexpro_schedule` | — | 1.0.0 | — |
| `ycloudyusa/useless_machines` | 2.1.0 | 2.2.0 | 1 PR; [2.2.0](https://github.com/YCloudYUSA/useless_machines/releases/tag/2.2.0) |
| `ycloudyusa/y_pef_schedule` | 2.1.1 | 2.2.0 | 3 PRs; [2.2.0](https://github.com/YCloudYUSA/y_pef_schedule/releases/tag/2.2.0) |
| `ycloudyusa/yusaopeny` | 11.3.1.5 | 11.4.0.0-rc4 | 16 PRs; [11.3.1.6](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.6), [11.4.0.0-rc1](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.4.0.0-rc1), [11.4.0.0-rc2](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.4.0.0-rc2), [11.4.0.0-rc3](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.4.0.0-rc3), [11.4.0.0-rc4](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.4.0.0-rc4) |
| `ycloudyusa/yusaopeny_activity_finder` | 6.2.1 | 7.2.1 **major** | 8 PRs; [7.0.0](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/7.0.0), [7.1.0](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/7.1.0), [7.2.0](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/7.2.0), [7.2.1](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/7.2.1) |
| `ycloudyusa/yusaopeny_ymca360` | 2.1.2 | 2.4.0 | 3 PRs; [2.2.0](https://github.com/YCloudYUSA/yusaopeny_ymca360/releases/tag/2.2.0), [2.3.0](https://github.com/YCloudYUSA/yusaopeny_ymca360/releases/tag/2.3.0), [2.4.0](https://github.com/YCloudYUSA/yusaopeny_ymca360/releases/tag/2.4.0) |

</details>

<details>
<summary><strong>Drupal Core, Drush, Symfony — 41 packages</strong></summary>

| Package | Old | New | Changes |
|---|---|---|---|
| `composer/ca-bundle` | 1.5.12 | 1.6.1 | [1.5.13](https://github.com/composer/ca-bundle/tree/1.5.13), [1.5.14](https://github.com/composer/ca-bundle/tree/1.5.14), [1.6.0](https://github.com/composer/ca-bundle/tree/1.6.0), [1.6.1](https://github.com/composer/ca-bundle/tree/1.6.1) |
| `composer/semver` | 3.4.4 | 3.6.0 | [3.5.0](https://github.com/composer/semver/tree/3.5.0), [3.5.1](https://github.com/composer/semver/tree/3.5.1), [3.5.2](https://github.com/composer/semver/tree/3.5.2), [3.6.0](https://github.com/composer/semver/tree/3.6.0) |
| `drupal/core-composer-scaffold` | 11.3.13 | 11.4.11 | [11.3.14](https://www.drupal.org/project/drupal/releases/11.3.14) (security), [11.3.16](https://www.drupal.org/project/drupal/releases/11.3.16), [11.3.17](https://www.drupal.org/project/drupal/releases/11.3.17) (security), [11.3.18](https://www.drupal.org/project/drupal/releases/11.3.18), [11.3.19](https://www.drupal.org/project/drupal/releases/11.3.19) (security), [11.3.20](https://www.drupal.org/project/drupal/releases/11.3.20), [11.4.0-beta1](https://www.drupal.org/project/drupal/releases/11.4.0-beta1), [11.4.0-rc1](https://www.drupal.org/project/drupal/releases/11.4.0-rc1), [11.4.0-rc2](https://www.drupal.org/project/drupal/releases/11.4.0-rc2) (security), [11.4.0](https://www.drupal.org/project/drupal/releases/11.4.0), [11.4.1](https://www.drupal.org/project/drupal/releases/11.4.1), [11.4.2](https://www.drupal.org/project/drupal/releases/11.4.2), [11.4.3](https://www.drupal.org/project/drupal/releases/11.4.3), [11.4.4](https://www.drupal.org/project/drupal/releases/11.4.4) (security), [11.4.5](https://www.drupal.org/project/drupal/releases/11.4.5), [11.4.6](https://www.drupal.org/project/drupal/releases/11.4.6), [11.4.7](https://www.drupal.org/project/drupal/releases/11.4.7) (security), [11.4.8](https://www.drupal.org/project/drupal/releases/11.4.8), [11.4.9](https://www.drupal.org/project/drupal/releases/11.4.9), [11.4.10](https://www.drupal.org/project/drupal/releases/11.4.10) (security), [11.4.11](https://www.drupal.org/project/drupal/releases/11.4.11) |
| `drupal/core` | 11.3.13 | 11.4.11 | fixes [SA-CORE-2026-010](https://www.drupal.org/sa-core-2026-010), [SA-CORE-2026-011](https://www.drupal.org/sa-core-2026-011), [SA-CORE-2026-012](https://www.drupal.org/sa-core-2026-012), [SA-CORE-2026-013](https://www.drupal.org/sa-core-2026-na0isdadth), [SA-CORE-2026-014](https://www.drupal.org/sa-core-2026-014), [SA-CORE-2026-015](https://www.drupal.org/sa-core-2026-015), [SA-CORE-2026-016](https://www.drupal.org/sa-core-2026-016); [11.3.14](https://www.drupal.org/project/drupal/releases/11.3.14) (security), [11.3.16](https://www.drupal.org/project/drupal/releases/11.3.16), [11.3.17](https://www.drupal.org/project/drupal/releases/11.3.17) (security), [11.3.18](https://www.drupal.org/project/drupal/releases/11.3.18), [11.3.19](https://www.drupal.org/project/drupal/releases/11.3.19) (security), [11.3.20](https://www.drupal.org/project/drupal/releases/11.3.20), [11.4.0-beta1](https://www.drupal.org/project/drupal/releases/11.4.0-beta1), [11.4.0-rc1](https://www.drupal.org/project/drupal/releases/11.4.0-rc1), [11.4.0-rc2](https://www.drupal.org/project/drupal/releases/11.4.0-rc2) (security), [11.4.0](https://www.drupal.org/project/drupal/releases/11.4.0), [11.4.1](https://www.drupal.org/project/drupal/releases/11.4.1), [11.4.2](https://www.drupal.org/project/drupal/releases/11.4.2), [11.4.3](https://www.drupal.org/project/drupal/releases/11.4.3), [11.4.4](https://www.drupal.org/project/drupal/releases/11.4.4) (security), [11.4.5](https://www.drupal.org/project/drupal/releases/11.4.5), [11.4.6](https://www.drupal.org/project/drupal/releases/11.4.6), [11.4.7](https://www.drupal.org/project/drupal/releases/11.4.7) (security), [11.4.8](https://www.drupal.org/project/drupal/releases/11.4.8), [11.4.9](https://www.drupal.org/project/drupal/releases/11.4.9), [11.4.10](https://www.drupal.org/project/drupal/releases/11.4.10) (security), [11.4.11](https://www.drupal.org/project/drupal/releases/11.4.11) |
| `drush/drush` | 13.7.3 | 13.8.0 | [13.7.4](https://github.com/drush-ops/drush/tree/13.7.4), [13.7.5](https://github.com/drush-ops/drush/tree/13.7.5), [13.7.6](https://github.com/drush-ops/drush/tree/13.7.6), [13.7.7](https://github.com/drush-ops/drush/tree/13.7.7), [13.8.0](https://github.com/drush-ops/drush/tree/13.8.0) |
| `symfony/console` | v7.4.13 | v7.4.22 | [v7.4.14](https://github.com/symfony/console/tree/v7.4.14), [v7.4.15](https://github.com/symfony/console/tree/v7.4.15), [v7.4.16](https://github.com/symfony/console/tree/v7.4.16), [v7.4.17](https://github.com/symfony/console/tree/v7.4.17), [v7.4.18](https://github.com/symfony/console/tree/v7.4.18), [v7.4.19](https://github.com/symfony/console/tree/v7.4.19), [v7.4.20](https://github.com/symfony/console/tree/v7.4.20), [v7.4.21](https://github.com/symfony/console/tree/v7.4.21), [v7.4.22](https://github.com/symfony/console/tree/v7.4.22) |
| `symfony/dependency-injection` | v7.4.13 | v7.4.22 | [v7.4.14](https://github.com/symfony/dependency-injection/tree/v7.4.14), [v7.4.15](https://github.com/symfony/dependency-injection/tree/v7.4.15), [v7.4.16](https://github.com/symfony/dependency-injection/tree/v7.4.16), [v7.4.17](https://github.com/symfony/dependency-injection/tree/v7.4.17), [v7.4.20](https://github.com/symfony/dependency-injection/tree/v7.4.20), [v7.4.21](https://github.com/symfony/dependency-injection/tree/v7.4.21), [v7.4.22](https://github.com/symfony/dependency-injection/tree/v7.4.22) |
| `symfony/deprecation-contracts` | v3.7.0 | v3.7.1 | [v3.7.1](https://github.com/symfony/deprecation-contracts/tree/v3.7.1) |
| `symfony/dom-crawler` | v7.4.12 | v8.1.10 **major** | [v7.4.17](https://github.com/symfony/dom-crawler/tree/v7.4.17), [v7.4.22](https://github.com/symfony/dom-crawler/tree/v7.4.22), [v8.0.0-BETA1](https://github.com/symfony/dom-crawler/tree/v8.0.0-BETA1), [v8.0.0-BETA2](https://github.com/symfony/dom-crawler/tree/v8.0.0-BETA2), [v8.0.0-RC1](https://github.com/symfony/dom-crawler/tree/v8.0.0-RC1), [v8.0.0](https://github.com/symfony/dom-crawler/tree/v8.0.0), [v8.0.1](https://github.com/symfony/dom-crawler/tree/v8.0.1), [v8.0.4](https://github.com/symfony/dom-crawler/tree/v8.0.4), [v8.0.6](https://github.com/symfony/dom-crawler/tree/v8.0.6), [v8.0.8](https://github.com/symfony/dom-crawler/tree/v8.0.8), [v8.0.12](https://github.com/symfony/dom-crawler/tree/v8.0.12), [v8.1.0-BETA1](https://github.com/symfony/dom-crawler/tree/v8.1.0-BETA1), [v8.1.0-BETA3](https://github.com/symfony/dom-crawler/tree/v8.1.0-BETA3), [v8.1.0](https://github.com/symfony/dom-crawler/tree/v8.1.0), [v8.1.1](https://github.com/symfony/dom-crawler/tree/v8.1.1), [v8.1.5](https://github.com/symfony/dom-crawler/tree/v8.1.5), [v8.1.10](https://github.com/symfony/dom-crawler/tree/v8.1.10) |
| `symfony/error-handler` | v8.1.0 | v8.1.10 | [v8.1.2](https://github.com/symfony/error-handler/tree/v8.1.2), [v8.1.5](https://github.com/symfony/error-handler/tree/v8.1.5), [v8.1.8](https://github.com/symfony/error-handler/tree/v8.1.8), [v8.1.10](https://github.com/symfony/error-handler/tree/v8.1.10) |
| `symfony/event-dispatcher-contracts` | v3.7.0 | v3.7.1 | [v3.7.1](https://github.com/symfony/event-dispatcher-contracts/tree/v3.7.1) |
| `symfony/event-dispatcher` | v7.4.9 | v7.4.17 | [v7.4.14](https://github.com/symfony/event-dispatcher/tree/v7.4.14), [v7.4.15](https://github.com/symfony/event-dispatcher/tree/v7.4.15), [v7.4.17](https://github.com/symfony/event-dispatcher/tree/v7.4.17) |
| `symfony/filesystem` | v7.4.11 | v7.4.21 | [v7.4.15](https://github.com/symfony/filesystem/tree/v7.4.15), [v7.4.17](https://github.com/symfony/filesystem/tree/v7.4.17), [v7.4.18](https://github.com/symfony/filesystem/tree/v7.4.18), [v7.4.21](https://github.com/symfony/filesystem/tree/v7.4.21) |
| `symfony/finder` | v7.4.8 | v7.4.22 | [v7.4.14](https://github.com/symfony/finder/tree/v7.4.14), [v7.4.17](https://github.com/symfony/finder/tree/v7.4.17), [v7.4.19](https://github.com/symfony/finder/tree/v7.4.19), [v7.4.20](https://github.com/symfony/finder/tree/v7.4.20), [v7.4.22](https://github.com/symfony/finder/tree/v7.4.22) |
| `symfony/http-foundation` | v7.4.13 | v7.4.22 | fixes [symfony/http-foundation/CVE-2026-108082.yaml](https://symfony.com/cve-2026-108082); [v7.4.14](https://github.com/symfony/http-foundation/tree/v7.4.14), [v7.4.15](https://github.com/symfony/http-foundation/tree/v7.4.15), [v7.4.16](https://github.com/symfony/http-foundation/tree/v7.4.16), [v7.4.17](https://github.com/symfony/http-foundation/tree/v7.4.17), [v7.4.18](https://github.com/symfony/http-foundation/tree/v7.4.18), [v7.4.19](https://github.com/symfony/http-foundation/tree/v7.4.19), [v7.4.20](https://github.com/symfony/http-foundation/tree/v7.4.20), [v7.4.21](https://github.com/symfony/http-foundation/tree/v7.4.21), [v7.4.22](https://github.com/symfony/http-foundation/tree/v7.4.22) |
| `symfony/http-kernel` | v7.4.13 | v7.4.22 | [v7.4.14](https://github.com/symfony/http-kernel/tree/v7.4.14), [v7.4.15](https://github.com/symfony/http-kernel/tree/v7.4.15), [v7.4.16](https://github.com/symfony/http-kernel/tree/v7.4.16), [v7.4.17](https://github.com/symfony/http-kernel/tree/v7.4.17), [v7.4.18](https://github.com/symfony/http-kernel/tree/v7.4.18), [v7.4.19](https://github.com/symfony/http-kernel/tree/v7.4.19), [v7.4.20](https://github.com/symfony/http-kernel/tree/v7.4.20), [v7.4.21](https://github.com/symfony/http-kernel/tree/v7.4.21), [v7.4.22](https://github.com/symfony/http-kernel/tree/v7.4.22) |
| `symfony/mailer` | v7.4.12 | v7.4.22 | [v7.4.14](https://github.com/symfony/mailer/tree/v7.4.14), [v7.4.15](https://github.com/symfony/mailer/tree/v7.4.15), [v7.4.17](https://github.com/symfony/mailer/tree/v7.4.17), [v7.4.19](https://github.com/symfony/mailer/tree/v7.4.19), [v7.4.22](https://github.com/symfony/mailer/tree/v7.4.22) |
| `symfony/mime` | v7.4.13 | v7.4.22 | fixes [symfony/mime/CVE-2026-45070.yaml](https://symfony.com/cve-2026-45070); [v7.4.15](https://github.com/symfony/mime/tree/v7.4.15), [v7.4.16](https://github.com/symfony/mime/tree/v7.4.16), [v7.4.17](https://github.com/symfony/mime/tree/v7.4.17), [v7.4.18](https://github.com/symfony/mime/tree/v7.4.18), [v7.4.19](https://github.com/symfony/mime/tree/v7.4.19), [v7.4.22](https://github.com/symfony/mime/tree/v7.4.22) |
| `symfony/polyfill-deepclone` | v1.40.0 | v1.43.2 | [v1.42.0](https://github.com/symfony/polyfill-deepclone/tree/v1.42.0), [v1.43.0](https://github.com/symfony/polyfill-deepclone/tree/v1.43.0), [v1.43.1](https://github.com/symfony/polyfill-deepclone/tree/v1.43.1), [v1.43.2](https://github.com/symfony/polyfill-deepclone/tree/v1.43.2) |
| `symfony/polyfill-iconv` | v1.37.0 | v1.43.0 | [v1.43.0](https://github.com/symfony/polyfill-iconv/tree/v1.43.0) |
| `symfony/polyfill-intl-grapheme` | v1.38.1 | v1.43.3 | [v1.41.0](https://github.com/symfony/polyfill-intl-grapheme/tree/v1.41.0), [v1.43.0](https://github.com/symfony/polyfill-intl-grapheme/tree/v1.43.0), [v1.43.3](https://github.com/symfony/polyfill-intl-grapheme/tree/v1.43.3) |
| `symfony/polyfill-intl-idn` | v1.38.1 | v1.43.0 | [v1.42.0](https://github.com/symfony/polyfill-intl-idn/tree/v1.42.0), [v1.43.0](https://github.com/symfony/polyfill-intl-idn/tree/v1.43.0) |
| `symfony/polyfill-intl-normalizer` | v1.38.0 | v1.43.0 | [v1.42.0](https://github.com/symfony/polyfill-intl-normalizer/tree/v1.42.0), [v1.43.0](https://github.com/symfony/polyfill-intl-normalizer/tree/v1.43.0) |
| `symfony/polyfill-mbstring` | v1.38.2 | v1.43.3 | [v1.43.0](https://github.com/symfony/polyfill-mbstring/tree/v1.43.0), [v1.43.3](https://github.com/symfony/polyfill-mbstring/tree/v1.43.3) |
| `symfony/polyfill-php80` | v1.37.0 | v1.43.0 | [v1.43.0](https://github.com/symfony/polyfill-php80/tree/v1.43.0) |
| `symfony/polyfill-php83` | v1.38.2 | v1.43.0 | [v1.41.0](https://github.com/symfony/polyfill-php83/tree/v1.41.0), [v1.43.0](https://github.com/symfony/polyfill-php83/tree/v1.43.0) |
| `symfony/polyfill-php84` | v1.38.1 | v1.43.0 | [v1.43.0](https://github.com/symfony/polyfill-php84/tree/v1.43.0) |
| `symfony/polyfill-php85` | v1.38.1 | v1.43.0 | [v1.41.0](https://github.com/symfony/polyfill-php85/tree/v1.41.0), [v1.43.0](https://github.com/symfony/polyfill-php85/tree/v1.43.0) |
| `symfony/polyfill-php86` | — | v1.43.0 | — |
| `symfony/process` | v7.4.13 | v7.4.22 | [v7.4.17](https://github.com/symfony/process/tree/v7.4.17), [v7.4.18](https://github.com/symfony/process/tree/v7.4.18), [v7.4.19](https://github.com/symfony/process/tree/v7.4.19), [v7.4.21](https://github.com/symfony/process/tree/v7.4.21), [v7.4.22](https://github.com/symfony/process/tree/v7.4.22) |
| `symfony/psr-http-message-bridge` | v7.4.8 | v7.4.21 | [v7.4.21](https://github.com/symfony/psr-http-message-bridge/tree/v7.4.21) |
| `symfony/routing` | v7.4.13 | v7.4.22 | [v7.4.15](https://github.com/symfony/routing/tree/v7.4.15), [v7.4.17](https://github.com/symfony/routing/tree/v7.4.17), [v7.4.18](https://github.com/symfony/routing/tree/v7.4.18), [v7.4.20](https://github.com/symfony/routing/tree/v7.4.20), [v7.4.21](https://github.com/symfony/routing/tree/v7.4.21), [v7.4.22](https://github.com/symfony/routing/tree/v7.4.22) |
| `symfony/runtime` | — | v7.4.22 | — |
| `symfony/serializer` | v7.4.10 | v7.4.22 | [v7.4.14](https://github.com/symfony/serializer/tree/v7.4.14), [v7.4.15](https://github.com/symfony/serializer/tree/v7.4.15), [v7.4.16](https://github.com/symfony/serializer/tree/v7.4.16), [v7.4.17](https://github.com/symfony/serializer/tree/v7.4.17), [v7.4.18](https://github.com/symfony/serializer/tree/v7.4.18), [v7.4.19](https://github.com/symfony/serializer/tree/v7.4.19), [v7.4.20](https://github.com/symfony/serializer/tree/v7.4.20), [v7.4.21](https://github.com/symfony/serializer/tree/v7.4.21), [v7.4.22](https://github.com/symfony/serializer/tree/v7.4.22) |
| `symfony/service-contracts` | v3.7.0 | v3.7.3 | [v3.7.1](https://github.com/symfony/service-contracts/tree/v3.7.1), [v3.7.3](https://github.com/symfony/service-contracts/tree/v3.7.3) |
| `symfony/string` | v7.4.13 | v8.1.10 **major** | [v7.4.15](https://github.com/symfony/string/tree/v7.4.15), [v7.4.19](https://github.com/symfony/string/tree/v7.4.19), [v7.4.21](https://github.com/symfony/string/tree/v7.4.21), [v7.4.22](https://github.com/symfony/string/tree/v7.4.22), [v8.0.0-BETA1](https://github.com/symfony/string/tree/v8.0.0-BETA1), [v8.0.0-RC1](https://github.com/symfony/string/tree/v8.0.0-RC1), [v8.0.0](https://github.com/symfony/string/tree/v8.0.0), [v8.0.1](https://github.com/symfony/string/tree/v8.0.1), [v8.0.4](https://github.com/symfony/string/tree/v8.0.4), [v8.0.6](https://github.com/symfony/string/tree/v8.0.6), [v8.0.8](https://github.com/symfony/string/tree/v8.0.8), [v8.0.11](https://github.com/symfony/string/tree/v8.0.11), [v8.0.13](https://github.com/symfony/string/tree/v8.0.13), [v8.0.15](https://github.com/symfony/string/tree/v8.0.15), [v8.1.0-BETA1](https://github.com/symfony/string/tree/v8.1.0-BETA1), [v8.1.0-BETA2](https://github.com/symfony/string/tree/v8.1.0-BETA2), [v8.1.0-RC1](https://github.com/symfony/string/tree/v8.1.0-RC1), [v8.1.0](https://github.com/symfony/string/tree/v8.1.0), [v8.1.2](https://github.com/symfony/string/tree/v8.1.2), [v8.1.7](https://github.com/symfony/string/tree/v8.1.7), [v8.1.9](https://github.com/symfony/string/tree/v8.1.9), [v8.1.10](https://github.com/symfony/string/tree/v8.1.10) |
| `symfony/translation-contracts` | v3.7.0 | v3.7.1 | [v3.7.1](https://github.com/symfony/translation-contracts/tree/v3.7.1) |
| `symfony/validator` | v7.4.10 | v7.4.22 | [v7.4.14](https://github.com/symfony/validator/tree/v7.4.14), [v7.4.15](https://github.com/symfony/validator/tree/v7.4.15), [v7.4.16](https://github.com/symfony/validator/tree/v7.4.16), [v7.4.17](https://github.com/symfony/validator/tree/v7.4.17), [v7.4.18](https://github.com/symfony/validator/tree/v7.4.18), [v7.4.19](https://github.com/symfony/validator/tree/v7.4.19), [v7.4.20](https://github.com/symfony/validator/tree/v7.4.20), [v7.4.21](https://github.com/symfony/validator/tree/v7.4.21), [v7.4.22](https://github.com/symfony/validator/tree/v7.4.22) |
| `symfony/var-dumper` | v7.4.8 | v7.4.22 | [v7.4.14](https://github.com/symfony/var-dumper/tree/v7.4.14), [v7.4.15](https://github.com/symfony/var-dumper/tree/v7.4.15), [v7.4.17](https://github.com/symfony/var-dumper/tree/v7.4.17), [v7.4.18](https://github.com/symfony/var-dumper/tree/v7.4.18), [v7.4.21](https://github.com/symfony/var-dumper/tree/v7.4.21), [v7.4.22](https://github.com/symfony/var-dumper/tree/v7.4.22) |
| `symfony/var-exporter` | v8.1.0 | v8.1.10 | [v8.1.1](https://github.com/symfony/var-exporter/tree/v8.1.1), [v8.1.3](https://github.com/symfony/var-exporter/tree/v8.1.3), [v8.1.4](https://github.com/symfony/var-exporter/tree/v8.1.4), [v8.1.5](https://github.com/symfony/var-exporter/tree/v8.1.5), [v8.1.6](https://github.com/symfony/var-exporter/tree/v8.1.6), [v8.1.9](https://github.com/symfony/var-exporter/tree/v8.1.9), [v8.1.10](https://github.com/symfony/var-exporter/tree/v8.1.10) |
| `symfony/yaml` | v7.4.13 | v7.4.22 | fixes [symfony/yaml/CVE-2026-109413.yaml](https://symfony.com/cve-2026-109413); [v7.4.14](https://github.com/symfony/yaml/tree/v7.4.14), [v7.4.15](https://github.com/symfony/yaml/tree/v7.4.15), [v7.4.17](https://github.com/symfony/yaml/tree/v7.4.17), [v7.4.18](https://github.com/symfony/yaml/tree/v7.4.18), [v7.4.20](https://github.com/symfony/yaml/tree/v7.4.20), [v7.4.21](https://github.com/symfony/yaml/tree/v7.4.21), [v7.4.22](https://github.com/symfony/yaml/tree/v7.4.22) |

</details>

<details>
<summary><strong>Contrib Modules — 66 packages</strong></summary>

| Package | Old | New | Changes |
|---|---|---|---|
| `drupal/activenet` | 1.0.6 | 1.1.0 | [1.1.0](https://www.drupal.org/project/activenet/releases/1.1.0) |
| `drupal/addtocal_augment` | 1.2.5 | 1.2.6 | [1.2.6](https://www.drupal.org/project/addtocal_augment/releases/1.2.6) |
| `drupal/advanced_help_block` | 1.0.8 | 1.1.0 | [1.1.0](https://www.drupal.org/project/advanced_help_block/releases/1.1.0) |
| `drupal/better_exposed_filters` | 7.1.2 | 7.2.0 | [7.1.3](https://www.drupal.org/project/better_exposed_filters/releases/7.1.3), [7.2.0](https://www.drupal.org/project/better_exposed_filters/releases/7.2.0) |
| `drupal/blazy` | 3.0.17 | 3.0.19 | fixes [SA-CONTRIB-2026-104](https://www.drupal.org/sa-contrib-2026-pckf1wc_t0); [3.0.18](https://www.drupal.org/project/blazy/releases/3.0.18) (security), [3.0.19](https://www.drupal.org/project/blazy/releases/3.0.19) |
| `drupal/captcha` | 2.0.10 | 2.0.12 | fixes [SA-CONTRIB-2026-281](https://www.drupal.org/sa-contrib-2026-281); [2.0.11](https://www.drupal.org/project/captcha/releases/2.0.11) (security), [2.0.12](https://www.drupal.org/project/captcha/releases/2.0.12) |
| `drupal/ckeditor5_plugin_pack` | 1.5.2 | 1.5.6 | [1.5.3](https://www.drupal.org/project/ckeditor5_plugin_pack/releases/1.5.3), [1.5.4](https://www.drupal.org/project/ckeditor5_plugin_pack/releases/1.5.4), [1.5.5](https://www.drupal.org/project/ckeditor5_plugin_pack/releases/1.5.5), [1.5.6](https://www.drupal.org/project/ckeditor5_plugin_pack/releases/1.5.6) |
| `drupal/ckeditor5_premium_features` | 1.8.1 | 1.8.6 | [1.8.2](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.2), [1.8.3](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.3), [1.8.4](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.4), [1.8.5](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.5), [1.8.6](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.6) |
| `drupal/colorapi` | 2.1.0 | 2.2.0 | [2.2.0](https://www.drupal.org/project/colorapi/releases/2.2.0) |
| `drupal/confi` | 4.1.1 | 4.3.0 | 3 MRs; [4.2.0](https://www.drupal.org/project/confi/releases/4.2.0), [4.3.0](https://www.drupal.org/project/confi/releases/4.3.0) |
| `drupal/css_editor` | 2.0.4 | 2.1.0 | [2.1.0](https://www.drupal.org/project/css_editor/releases/2.1.0) |
| `drupal/ctools` | 4.1.0 | 4.1.1 | [4.1.1](https://www.drupal.org/project/ctools/releases/4.1.1) |
| `drupal/ctools_views` | 4.1.0 | 4.1.1 | metapackage: releases of drupal/ctools |
| `drupal/custom_formatters` | 4.1.0-beta2 | 4.2.1 | fixes [SA-CONTRIB-2026-225](https://www.drupal.org/sa-contrib-2026-zdighudwjf); [4.1.0-beta3](https://www.drupal.org/project/custom_formatters/releases/4.1.0-beta3), [4.1.0](https://www.drupal.org/project/custom_formatters/releases/4.1.0), [4.2.0](https://www.drupal.org/project/custom_formatters/releases/4.2.0), [4.2.1](https://www.drupal.org/project/custom_formatters/releases/4.2.1) (security) |
| `drupal/daterange_compact` | 2.1.1 | 2.1.2 | [2.1.2](https://www.drupal.org/project/daterange_compact/releases/2.1.2) |
| `drupal/daxko` | 1.0.5 | 1.1.0 | [1.1.0](https://www.drupal.org/project/daxko/releases/1.1.0) |
| `drupal/diff` | 2.0.0 | 2.1.1 | fixes [SA-CONTRIB-2026-096](https://www.drupal.org/sa-contrib-2026-096); [2.0.1](https://www.drupal.org/project/diff/releases/2.0.1) (security), [2.1.0](https://www.drupal.org/project/diff/releases/2.1.0), [2.1.1](https://www.drupal.org/project/diff/releases/2.1.1) (security) |
| `drupal/draggableviews` | 2.1.4 | 2.1.5 | [2.1.5](https://www.drupal.org/project/draggableviews/releases/2.1.5) |
| `drupal/easy_breadcrumb` | 2.0.9 | 2.0.11 | fixes [SA-CONTRIB-2026-212](https://www.drupal.org/sa-contrib-2026-ahw1av9s_9); [2.0.10](https://www.drupal.org/project/easy_breadcrumb/releases/2.0.10), [2.0.11](https://www.drupal.org/project/easy_breadcrumb/releases/2.0.11) (security) |
| `drupal/entity` | 1.6.0 | 1.8.0 | fixes [SA-CONTRIB-2026-113](https://www.drupal.org/sa-contrib-2026-113); [8.x-1.7](https://www.drupal.org/project/entity/releases/8.x-1.7), [8.x-1.8](https://www.drupal.org/project/entity/releases/8.x-1.8) (security) |
| `drupal/entity_browser` | 2.15.0 | 2.17.0 | fixes [SA-CONTRIB-2026-094](https://www.drupal.org/sa-contrib-2026-9ycmpcajri); [8.x-2.16](https://www.drupal.org/project/entity_browser/releases/8.x-2.16) (security), [8.x-2.17](https://www.drupal.org/project/entity_browser/releases/8.x-2.17) |
| `drupal/file_delete` | 3.0.2 | 3.0.3 | [3.0.3](https://www.drupal.org/project/file_delete/releases/3.0.3) |
| `drupal/focal_point` | 2.1.2 | 2.1.3 | [2.1.3](https://www.drupal.org/project/focal_point/releases/2.1.3) |
| `drupal/fontyourface` | 4.2.0 | 4.3.1 | [4.3.0](https://www.drupal.org/project/fontyourface/releases/4.3.0), [4.3.1](https://www.drupal.org/project/fontyourface/releases/4.3.1) |
| `drupal/geolocation` | 3.14.0 | 3.15.0 | fixes [SA-CONTRIB-2026-062](https://www.drupal.org/sa-contrib-2026-xuq567xe4o); [8.x-3.15](https://www.drupal.org/project/geolocation/releases/8.x-3.15) (security) |
| `drupal/groupexpro` | 2.1.0 | — | fixes [SA-CONTRIB-2026-278](https://www.drupal.org/sa-contrib-2026-ydaojteruc) |
| `drupal/hal` | 2.0.4 | 2.0.5 | [2.0.5](https://www.drupal.org/project/hal/releases/2.0.5) |
| `drupal/jquery_ui_touch_punch` | 1.1.1 | 1.1.2 | [1.1.2](https://www.drupal.org/project/jquery_ui_touch_punch/releases/1.1.2) |
| `drupal/layout_builder_restrictions` | 3.0.4 | 3.0.6 | [3.0.5](https://www.drupal.org/project/layout_builder_restrictions/releases/3.0.5), [3.0.6](https://www.drupal.org/project/layout_builder_restrictions/releases/3.0.6) |
| `drupal/layout_builder_save_and_edit` | 1.1.0 | 1.2.0 | [1.2.0](https://www.drupal.org/project/layout_builder_save_and_edit/releases/1.2.0) |
| `drupal/libraries` | 4.1.1 | 4.2.1 | [4.2.0](https://www.drupal.org/project/libraries/releases/4.2.0), [4.2.1](https://www.drupal.org/project/libraries/releases/4.2.1) |
| `drupal/link_attributes` | 2.1.2 | 2.1.3 | [2.1.3](https://www.drupal.org/project/link_attributes/releases/2.1.3) |
| `drupal/link_attributes_menu_link_content` | 2.1.2 | 2.1.3 | metapackage: releases of drupal/link_attributes |
| `drupal/media_directories` | dev-2.2.x@1bcbfb5 | dev-2.2.x@6e50cb5 | — |
| `drupal/media_library_form_element` | 2.1.4 | 2.1.5 | [2.1.5](https://www.drupal.org/project/media_library_form_element/releases/2.1.5) |
| `drupal/menu_item_extras` | 3.1.0 | 3.2.0 | [3.1.1](https://www.drupal.org/project/menu_item_extras/releases/3.1.1), [3.1.2](https://www.drupal.org/project/menu_item_extras/releases/3.1.2), [3.1.3](https://www.drupal.org/project/menu_item_extras/releases/3.1.3), [3.2.0](https://www.drupal.org/project/menu_item_extras/releases/3.2.0) |
| `drupal/metatag` | 2.2.0 | 2.2.5 | [2.2.1](https://www.drupal.org/project/metatag/releases/2.2.1), [2.2.2](https://www.drupal.org/project/metatag/releases/2.2.2), [2.2.3](https://www.drupal.org/project/metatag/releases/2.2.3), [2.2.4](https://www.drupal.org/project/metatag/releases/2.2.4), [2.2.5](https://www.drupal.org/project/metatag/releases/2.2.5) |
| `drupal/migrate_plus` | 6.0.10 | 6.0.11 | [6.0.11](https://www.drupal.org/project/migrate_plus/releases/6.0.11) |
| `drupal/migrate_tools` | 6.1.4 | 6.1.5 | [6.1.5](https://www.drupal.org/project/migrate_tools/releases/6.1.5) |
| `drupal/paragraphs` | 1.20.0 | 1.23.0 | fixes [SA-CONTRIB-2026-060](https://www.drupal.org/sa-contrib-2026-mgwv6qpzfz), [SA-CONTRIB-2026-061](https://www.drupal.org/sa-contrib-2026-4vcblnrxz1); [8.x-1.21](https://www.drupal.org/project/paragraphs/releases/8.x-1.21) (security), [8.x-1.22](https://www.drupal.org/project/paragraphs/releases/8.x-1.22), [8.x-1.23](https://www.drupal.org/project/paragraphs/releases/8.x-1.23) |
| `drupal/personify` | 1.0.4 | 1.1.0 | [1.1.0](https://www.drupal.org/project/personify/releases/1.1.0) |
| `drupal/program_search` | 2.0.0 | 2.1.1 | [2.1.0](https://www.drupal.org/project/program_search/releases/2.1.0), [2.1.1](https://www.drupal.org/project/program_search/releases/2.1.1) |
| `drupal/protected_pages` | 1.9.0 | 3.0.0 **major** | [8.x-2.0](https://www.drupal.org/project/protected_pages/releases/8.x-2.0), [3.0.0](https://www.drupal.org/project/protected_pages/releases/3.0.0) |
| `drupal/rabbit_hole` | 1.2.0 | 1.3.0 | fixes [SA-CONTRIB-2026-252](https://www.drupal.org/sa-contrib-2026-9cagfbicvj); [8.x-1.3](https://www.drupal.org/project/rabbit_hole/releases/8.x-1.3) (security) |
| `drupal/recaptcha` | 3.5.0-rc1 | 3.5.0 | [8.x-3.5](https://www.drupal.org/project/recaptcha/releases/8.x-3.5) |
| `drupal/search_api` | 1.40.0 | 1.43.0 | [8.x-1.41](https://www.drupal.org/project/search_api/releases/8.x-1.41), [8.x-1.42](https://www.drupal.org/project/search_api/releases/8.x-1.42), [8.x-1.43](https://www.drupal.org/project/search_api/releases/8.x-1.43) |
| `drupal/search_api_solr` | 4.3.10 | 4.4.0 | [4.3.11](https://www.drupal.org/project/search_api_solr/releases/4.3.11), [4.3.12](https://www.drupal.org/project/search_api_solr/releases/4.3.12), [4.3.13](https://www.drupal.org/project/search_api_solr/releases/4.3.13), [4.3.14](https://www.drupal.org/project/search_api_solr/releases/4.3.14), [4.4.0](https://www.drupal.org/project/search_api_solr/releases/4.4.0) |
| `drupal/seven` | 2.0.0-beta7 | 2.0.0-beta8 | [2.0.0-beta8](https://www.drupal.org/project/seven/releases/2.0.0-beta8) |
| `drupal/simple_menu_icons` | 3.1.0 | 3.2.0 | [3.2.0](https://www.drupal.org/project/simple_menu_icons/releases/3.2.0) |
| `drupal/slick` | 3.0.7 | 3.0.8 | [3.0.8](https://www.drupal.org/project/slick/releases/3.0.8) |
| `drupal/smart_date` | 4.2.5 | 4.3.0 | [4.2.6](https://www.drupal.org/project/smart_date/releases/4.2.6), [4.2.7](https://www.drupal.org/project/smart_date/releases/4.2.7), [4.2.8](https://www.drupal.org/project/smart_date/releases/4.2.8), [4.3.0-beta1](https://www.drupal.org/project/smart_date/releases/4.3.0-beta1), [4.3.0-rc1](https://www.drupal.org/project/smart_date/releases/4.3.0-rc1), [4.3.0](https://www.drupal.org/project/smart_date/releases/4.3.0) |
| `drupal/social_feed_fetcher` | 3.1.1 | 3.2.1 | [3.2.0](https://www.drupal.org/project/social_feed_fetcher/releases/3.2.0), [3.2.1](https://www.drupal.org/project/social_feed_fetcher/releases/3.2.1) |
| `drupal/stage_file_proxy` | 3.1.6 | 3.1.7 | fixes [SA-CONTRIB-2026-286](https://www.drupal.org/sa-contrib-2026-286); [3.1.7](https://www.drupal.org/project/stage_file_proxy/releases/3.1.7) (security) |
| `drupal/svg_image` | 3.2.2 | 3.2.5 | [3.2.3](https://www.drupal.org/project/svg_image/releases/3.2.3), [3.2.4](https://www.drupal.org/project/svg_image/releases/3.2.4), [3.2.5](https://www.drupal.org/project/svg_image/releases/3.2.5) |
| `drupal/token` | 1.17.0 | 1.18.0 | [8.x-1.18](https://www.drupal.org/project/token/releases/8.x-1.18) |
| `drupal/trash` | 3.0.27 | 3.1.2 | [3.0.28](https://www.drupal.org/project/trash/releases/3.0.28), [3.0.29](https://www.drupal.org/project/trash/releases/3.0.29), [3.0.30](https://www.drupal.org/project/trash/releases/3.0.30), [3.0.31](https://www.drupal.org/project/trash/releases/3.0.31), [3.0.32](https://www.drupal.org/project/trash/releases/3.0.32), [3.0.33](https://www.drupal.org/project/trash/releases/3.0.33), [3.0.34](https://www.drupal.org/project/trash/releases/3.0.34), [3.0.35](https://www.drupal.org/project/trash/releases/3.0.35), [3.0.36](https://www.drupal.org/project/trash/releases/3.0.36), [3.1.0-beta1](https://www.drupal.org/project/trash/releases/3.1.0-beta1), [3.1.0-beta2](https://www.drupal.org/project/trash/releases/3.1.0-beta2), [3.1.0-beta3](https://www.drupal.org/project/trash/releases/3.1.0-beta3), [3.1.0-rc1](https://www.drupal.org/project/trash/releases/3.1.0-rc1), [3.1.0](https://www.drupal.org/project/trash/releases/3.1.0), [3.1.1](https://www.drupal.org/project/trash/releases/3.1.1), [3.1.2](https://www.drupal.org/project/trash/releases/3.1.2) |
| `drupal/tzfield` | 1.13.0 | 1.14.0 | [8.x-1.14](https://www.drupal.org/project/tzfield/releases/8.x-1.14) |
| `drupal/upgrade_tool` | 4.1.2 | 4.3.0 | 2 MRs; [4.2.0](https://www.drupal.org/project/upgrade_tool/releases/4.2.0), [4.3.0](https://www.drupal.org/project/upgrade_tool/releases/4.3.0) |
| `drupal/vendor_stream_wrapper` | 2.0.5 | 2.1.0 | [2.1.0](https://www.drupal.org/project/vendor_stream_wrapper/releases/2.1.0) |
| `drupal/verf` | 2.1.0 | 2.2.0 | [2.2.0](https://www.drupal.org/project/verf/releases/2.2.0) |
| `drupal/video` | 3.1.0 | 3.2.0 | [3.2.0](https://www.drupal.org/project/video/releases/3.2.0) |
| `drupal/video_embed_field` | 3.1.0 | 3.1.1 | [3.1.1](https://www.drupal.org/project/video_embed_field/releases/3.1.1) |
| `drupal/views_block_filter_block` | 2.1.2 | 2.2.0 | [2.2.0](https://www.drupal.org/project/views_block_filter_block/releases/2.2.0) |
| `drupal/views_field_formatter` | 4.1.1 | 4.2.0 | [4.2.0](https://www.drupal.org/project/views_field_formatter/releases/4.2.0) |
| `drupal/webform` | 6.3.0-beta9 | 6.3.1 | fixes [SA-CONTRIB-2026-154](https://www.drupal.org/sa-contrib-2026-154), [SA-CONTRIB-2026-155](https://www.drupal.org/sa-contrib-2026-155), [SA-CONTRIB-2026-158](https://www.drupal.org/sa-contrib-2026-158), [SA-CONTRIB-2026-159](https://www.drupal.org/sa-contrib-2026-159), [SA-CONTRIB-2026-160](https://www.drupal.org/sa-contrib-2026-160), [SA-CONTRIB-2026-161](https://www.drupal.org/sa-contrib-2026-161), [SA-CONTRIB-2026-162](https://www.drupal.org/sa-contrib-2026-162), [SA-CONTRIB-2026-163](https://www.drupal.org/sa-contrib-2026-163), [SA-CONTRIB-2026-164](https://www.drupal.org/sa-contrib-2026-164), [SA-CONTRIB-2026-165](https://www.drupal.org/sa-contrib-2026-165), [SA-CONTRIB-2026-166](https://www.drupal.org/sa-contrib-2026-166), [SA-CONTRIB-2026-167](https://www.drupal.org/sa-contrib-2026-167), [SA-CONTRIB-2026-168](https://www.drupal.org/sa-contrib-2026-168), [SA-CONTRIB-2026-169](https://www.drupal.org/sa-contrib-2026-169), [SA-CONTRIB-2026-170](https://www.drupal.org/sa-contrib-2026-170), [SA-CONTRIB-2026-171](https://www.drupal.org/sa-contrib-2026-171), [SA-CONTRIB-2026-172](https://www.drupal.org/sa-contrib-2026-172), [SA-CONTRIB-2026-173](https://www.drupal.org/sa-contrib-2026-173), [SA-CONTRIB-2026-174](https://www.drupal.org/sa-contrib-2026-174), [SA-CONTRIB-2026-175](https://www.drupal.org/sa-contrib-2026-175); [6.3.0-rc1](https://www.drupal.org/project/webform/releases/6.3.0-rc1), [6.3.0-rc2](https://www.drupal.org/project/webform/releases/6.3.0-rc2), [6.3.0](https://www.drupal.org/project/webform/releases/6.3.0), [6.3.1](https://www.drupal.org/project/webform/releases/6.3.1) (security) |
| `drupal/ymca_sync` | 11.0.0 | 11.1.2 | [11.1.1](https://www.drupal.org/project/ymca_sync/releases/11.1.1), [11.1.2](https://www.drupal.org/project/ymca_sync/releases/11.1.2) |

</details>

<details>
<summary><strong>Libraries — 32 packages</strong></summary>

| Package | Old | New | Changes |
|---|---|---|---|
| `chi-teck/drupal-code-generator` | 4.2.0 | 4.x-dev@ee02eb9 | — |
| `commerceguys/addressing` | v2.2.5 | v2.3.2 | [v2.3.0](https://github.com/commerceguys/addressing/tree/v2.3.0), [v2.3.1](https://github.com/commerceguys/addressing/tree/v2.3.1), [v2.3.2](https://github.com/commerceguys/addressing/tree/v2.3.2) |
| `consolidation/site-process` | 5.4.2 | 6.1.0 **major** | [6.0.0](https://github.com/consolidation/site-process/tree/6.0.0), [6.0.1](https://github.com/consolidation/site-process/tree/6.0.1), [6.1.0](https://github.com/consolidation/site-process/tree/6.1.0) |
| `doctrine/lexer` | 3.0.1 | 3.0.3 | [3.0.2](https://github.com/doctrine/lexer/tree/3.0.2), [3.0.3](https://github.com/doctrine/lexer/tree/3.0.3) |
| `enshrined/svg-sanitize` | 0.22.0 | 1.1.1 **major** | fixes [GHSA-m9xh-6747-9r6f](https://github.com/advisories/GHSA-m9xh-6747-9r6f), [GHSA-9rjx-3jch-6vjf](https://github.com/advisories/GHSA-9rjx-3jch-6vjf), [GHSA-v383-3rw5-q8rf](https://github.com/advisories/GHSA-v383-3rw5-q8rf); [1.0.0](https://github.com/darylldoyle/svg-sanitizer/tree/1.0.0), [1.1.0](https://github.com/darylldoyle/svg-sanitizer/tree/1.1.0), [1.1.1](https://github.com/darylldoyle/svg-sanitizer/tree/1.1.1) |
| `ezyang/htmlpurifier` | v4.19.0 | v4.19.1 | [v4.19.1](https://github.com/ezyang/htmlpurifier/tree/v4.19.1) |
| `google/recaptcha` | 1.5 | 1.5.2 | [1.5.1](https://github.com/google/recaptcha/tree/1.5.1), [1.5.2](https://github.com/google/recaptcha/tree/1.5.2) |
| `guzzlehttp/guzzle` | 7.12.1 | 7.16.1 | fixes [GHSA-f283-ghqc-fg79](https://github.com/advisories/GHSA-f283-ghqc-fg79), [GHSA-g446-98w2-8p5w](https://github.com/advisories/GHSA-g446-98w2-8p5w), [GHSA-f7vp-7xgx-4w4r](https://github.com/advisories/GHSA-f7vp-7xgx-4w4r), [GHSA-h95v-h523-3mw8](https://github.com/advisories/GHSA-h95v-h523-3mw8), [GHSA-v5mv-p594-2x33](https://github.com/advisories/GHSA-v5mv-p594-2x33), [GHSA-94pj-82f3-465w](https://github.com/advisories/GHSA-94pj-82f3-465w), [GHSA-wm3w-8rrp-j577](https://github.com/advisories/GHSA-wm3w-8rrp-j577); [7.12.2](https://github.com/guzzle/guzzle/tree/7.12.2), [7.12.3](https://github.com/guzzle/guzzle/tree/7.12.3), [7.13.0](https://github.com/guzzle/guzzle/tree/7.13.0), [7.13.1](https://github.com/guzzle/guzzle/tree/7.13.1), [7.13.2](https://github.com/guzzle/guzzle/tree/7.13.2), [7.13.3](https://github.com/guzzle/guzzle/tree/7.13.3), [7.14.0](https://github.com/guzzle/guzzle/tree/7.14.0), [7.14.1](https://github.com/guzzle/guzzle/tree/7.14.1), [7.14.2](https://github.com/guzzle/guzzle/tree/7.14.2), [7.15.0](https://github.com/guzzle/guzzle/tree/7.15.0), [7.15.1](https://github.com/guzzle/guzzle/tree/7.15.1), [7.15.2](https://github.com/guzzle/guzzle/tree/7.15.2), [7.15.3](https://github.com/guzzle/guzzle/tree/7.15.3), [7.15.4](https://github.com/guzzle/guzzle/tree/7.15.4), [7.15.5](https://github.com/guzzle/guzzle/tree/7.15.5), [7.15.6](https://github.com/guzzle/guzzle/tree/7.15.6), [7.16.0](https://github.com/guzzle/guzzle/tree/7.16.0), [7.16.1](https://github.com/guzzle/guzzle/tree/7.16.1) |
| `guzzlehttp/promises` | 2.5.0 | 2.6.0 | [2.5.1](https://github.com/guzzle/promises/tree/2.5.1), [2.5.2](https://github.com/guzzle/promises/tree/2.5.2), [2.5.3](https://github.com/guzzle/promises/tree/2.5.3), [2.6.0](https://github.com/guzzle/promises/tree/2.6.0) |
| `guzzlehttp/psr7` | 2.12.1 | 2.13.2 | fixes [GHSA-c2w2-prh8-qm98](https://github.com/advisories/GHSA-c2w2-prh8-qm98); [2.12.2](https://github.com/guzzle/psr7/tree/2.12.2), [2.12.3](https://github.com/guzzle/psr7/tree/2.12.3), [2.12.4](https://github.com/guzzle/psr7/tree/2.12.4), [2.12.5](https://github.com/guzzle/psr7/tree/2.12.5), [2.13.0](https://github.com/guzzle/psr7/tree/2.13.0), [2.13.1](https://github.com/guzzle/psr7/tree/2.13.1), [2.13.2](https://github.com/guzzle/psr7/tree/2.13.2) |
| `justinrainbow/json-schema` | — | 6.14.0 | — |
| `laravel/prompts` | v0.3.18 | v0.3.26 | [v0.3.19](https://github.com/laravel/prompts/tree/v0.3.19), [v0.3.20](https://github.com/laravel/prompts/tree/v0.3.20), [v0.3.21](https://github.com/laravel/prompts/tree/v0.3.21), [v0.3.22](https://github.com/laravel/prompts/tree/v0.3.22), [v0.3.23](https://github.com/laravel/prompts/tree/v0.3.23), [v0.3.24](https://github.com/laravel/prompts/tree/v0.3.24), [v0.3.25](https://github.com/laravel/prompts/tree/v0.3.25), [v0.3.26](https://github.com/laravel/prompts/tree/v0.3.26) |
| `league/csv` | 9.28.0 | 9.29.0 | [9.29.0](https://github.com/thephpleague/csv/tree/9.29.0) |
| `league/oauth2-client` | 2.9.0 | 2.9.1 | [2.9.1](https://github.com/thephpleague/oauth2-client/tree/2.9.1) |
| `library-ckeditor/colorbutton` | 4.10.1 | — | — |
| `library-ckeditor/font` | 4.12.1 | — | — |
| `library-ckeditor/panelbutton` | 4.10.1 | — | — |
| `marc-mabe/php-enum` | — | v4.7.2 | — |
| `masterminds/html5` | 2.10.0 | 2.12.0 | [2.10.1](https://github.com/Masterminds/html5-php/tree/2.10.1), [2.11.0](https://github.com/Masterminds/html5-php/tree/2.11.0), [2.12.0](https://github.com/Masterminds/html5-php/tree/2.12.0) |
| `mck89/peast` | v1.17.6 | v1.18.1 | [v1.17.7](https://github.com/mck89/peast/tree/v1.17.7), [v1.18.0](https://github.com/mck89/peast/tree/v1.18.0), [v1.18.1](https://github.com/mck89/peast/tree/v1.18.1) |
| `myclabs/deep-copy` | 1.13.4 | 1.14.0 | [1.14.0](https://github.com/myclabs/DeepCopy/tree/1.14.0) |
| `nikic/php-parser` | v5.7.0 | v5.9.0 | [v5.8.0](https://github.com/nikic/PHP-Parser/tree/v5.8.0), [v5.9.0](https://github.com/nikic/PHP-Parser/tree/v5.9.0) |
| `pear/archive_tar` | 1.6.0 | 1.6.1 | [1.6.1](https://github.com/pear/Archive_Tar/tree/1.6.1) |
| `php-tuf/composer-stager` | v2.1.0 | v2.1.1 | [v2.1.1](https://github.com/php-tuf/composer-stager/tree/v2.1.1) |
| `phpstan/phpdoc-parser` | 2.3.2 | 2.4.1 | [2.3.3](https://github.com/phpstan/phpdoc-parser/tree/2.3.3), [2.3.4](https://github.com/phpstan/phpdoc-parser/tree/2.3.4), [2.3.5](https://github.com/phpstan/phpdoc-parser/tree/2.3.5), [2.3.6](https://github.com/phpstan/phpdoc-parser/tree/2.3.6), [2.3.7](https://github.com/phpstan/phpdoc-parser/tree/2.3.7), [2.3.8](https://github.com/phpstan/phpdoc-parser/tree/2.3.8), [2.3.9](https://github.com/phpstan/phpdoc-parser/tree/2.3.9), [2.3.10](https://github.com/phpstan/phpdoc-parser/tree/2.3.10), [2.3.11](https://github.com/phpstan/phpdoc-parser/tree/2.3.11), [2.3.12](https://github.com/phpstan/phpdoc-parser/tree/2.3.12), [2.4.0](https://github.com/phpstan/phpdoc-parser/tree/2.4.0), [2.4.1](https://github.com/phpstan/phpdoc-parser/tree/2.4.1) |
| `psy/psysh` | v0.12.23 | v0.12.24 | [v0.12.24](https://github.com/bobthecow/psysh/tree/v0.12.24) |
| `sebastian/diff` | 7.0.0 | 7.0.1 | [7.0.1](https://github.com/sebastianbergmann/diff/tree/7.0.1) |
| `setasign/fpdi` | v2.6.7 | v2.6.9 | [v2.6.8](https://github.com/Setasign/FPDI/tree/v2.6.8), [v2.6.9](https://github.com/Setasign/FPDI/tree/v2.6.9) |
| `solarium/solarium` | 6.4.1 | 7.0.0 **major** | [6.4.2](https://github.com/solariumphp/solarium/tree/6.4.2), [7.0.0-alpha.1](https://github.com/solariumphp/solarium/tree/7.0.0-alpha.1), [7.0.0-alpha.2](https://github.com/solariumphp/solarium/tree/7.0.0-alpha.2), [7.0.0](https://github.com/solariumphp/solarium/tree/7.0.0) |
| `squizlabs/php_codesniffer` | 3.13.5 | 3.13.6 | fixes [squizlabs/php_codesniffer/CVE-2026-67434.yaml](https://github.com/PHPCSStandards/PHP_CodeSniffer/security/advisories/GHSA-hmqg-cxww-wqhq); [3.13.6](https://github.com/PHPCSStandards/PHP_CodeSniffer/tree/3.13.6) |
| `twig/html-extra` | — | v3.29.0 | — |
| `twig/twig` | v3.27.1 | v3.30.0 | [v3.28.0](https://github.com/twigphp/Twig/tree/v3.28.0), [v3.29.0](https://github.com/twigphp/Twig/tree/v3.29.0), [v3.30.0](https://github.com/twigphp/Twig/tree/v3.30.0) |

</details>


The after lock is one upgrade run (2026-11-03); a later run also brings newer releases inside the same constraints (a second run the same day resolved `drupal/ckeditor5_premium_features` 1.8.7 instead of 1.8.6).

## Distribution requirements (`composer.json`)

| Package | 11.3.1.6 | 11.4.0.0 |
|---|---|---|
| `drupal/core`, `drupal/core-composer-scaffold` | `>=11.3 <11.4` | `^11.4` |
| `ycloudyusa/yusaopeny_activity_finder` | `^6.0` | `^7.2` |
| `drupal/openy_repeat` | `^3.1.0` | `^4.0.0` |
| `drupal/protected_pages` | `^1.4` | `^3.0` |
| `open-y-subprojects/openy_custom` | `^3.1.5` | `^3.2.0` |
| `open-y-subprojects/openy_features` | `^5.0` | `^5.2` |
| `ycloudyusa/y_lb` | `^5.0` | `^5.1` |
| `drupal/openy_carnation` | `^4.0.0-beta7 \|\| ^4.0@rc \|\| ^4.0.0` | `^4.2` |
| `drupal/confi` | `^4.0.0` | `^4.2` |
| `drupal/upgrade_tool` | `^4.1.0` | `^4.2` |
| `ycloudyusa/useless_machines` | `^2.0.3` | `^2.2.0` |
| `ycloudyusa/embedded_groupexpro_schedule` | — | `^1.0` |
| `drupal/openy_pef_gxp_sync` | `^2.0.0` | removed |
| `guzzlehttp/guzzle` | `^6 \|\| ^7` | direct require dropped; Guzzle is still installed because Drupal core requires `guzzlehttp/guzzle: ^7.10` |
| `library-ckeditor/colorbutton`, `font`, `panelbutton` | pinned | removed |

Patches: 3 `drupal/core`, 1 `drupal/search_api`, 1 `drupal/webform` patches removed; the `drupal/rabbit_hole` patch replaced.

## Bug Fixes


27 merged PR/MRs of our packages whose title says fix or bug:

- fix(ITCR-1271): widen module_installer typehint to ModuleInstallerInterface (D11.4) ([drupal/confi!15](https://git.drupalcode.org/project/confi/-/merge_requests/15))
- Fix: run text format filters (media_embed) on accordion item body ([drupal/lb_accordion!30](https://git.drupalcode.org/project/lb_accordion/-/merge_requests/30))
- Fix: Render field_block_item from block_content entity in accordion template ([drupal/lb_accordion!27](https://git.drupalcode.org/project/lb_accordion/-/merge_requests/27))
- fix: prevent button gap in equal-height card rows ([drupal/lb_cards!58](https://git.drupalcode.org/project/lb_cards/-/merge_requests/58))
- D12: fix RangeAsteriksValidator::validate() signature for Symfony 8 ([drupal/openy_repeat!16](https://git.drupalcode.org/project/openy_repeat/-/merge_requests/16))
- ITCR-1271: allow openy_carnation ^4.1 (D11.4 field media image fix) ([drupal/openy_repeat!15](https://git.drupalcode.org/project/openy_repeat/-/merge_requests/15))
- D12: Attribute-based plugin discovery + config pre-existing names fix ([drupal/upgrade_tool!15](https://git.drupalcode.org/project/upgrade_tool/-/merge_requests/15))
- fix(ITCR-1271): widen module_installer typehint to ModuleInstallerInterface (D11.4) ([drupal/upgrade_tool!14](https://git.drupalcode.org/project/upgrade_tool/-/merge_requests/14))
- Fix: alert description hidden on all header/footer alerts ([drupal/ws_small_y!82](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/82))
- fix: replace min-height with aspect-ratio on card-img-wrapper (Safari fix) ([drupal/ws_small_y!81](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/81))
- openy_migrate: fix MigrateSkipProcessException removed in Drupal core 12 ([open-y-subprojects/openy_custom#100](https://github.com/open-y-subprojects/openy_custom/pull/100))
- Fix getDefaultOperations() missing CacheableMetadata param (core 12) ([open-y-subprojects/openy_daxko_gxp_syncer#18](https://github.com/open-y-subprojects/openy_daxko_gxp_syncer/pull/18))
- fix(ITCR-1271): use core image formatter instead of blazy (D11.4 config schema) ([open-y-subprojects/openy_features#122](https://github.com/open-y-subprojects/openy_features/pull/122))
- fix(ITCR-1347): Replace Request::get() in preview controller (removed in Symfony 8) ([open-y-subprojects/openy_focal_point#9](https://github.com/open-y-subprojects/openy_focal_point/pull/9))
- fix(ITCR-1344): Switch map elements to RenderElementBase (RenderElement removed in D12) ([open-y-subprojects/openy_map#99](https://github.com/open-y-subprojects/openy_map/pull/99))
- fix(ITCP-730): do not load alert widget on backend routes ([open-y-subprojects/openy_node_alert#173](https://github.com/open-y-subprojects/openy_node_alert/pull/173))
- fix(ITCP-752): require drupal/lb_table ^1.1.1 for the tablesaw thead guard ([YCloudYUSA/y_lb#317](https://github.com/YCloudYUSA/y_lb/pull/317))
- fix(ITCR-1271): use core image formatter instead of blazy (D11.4 config schema) ([YCloudYUSA/y_lb#312](https://github.com/YCloudYUSA/y_lb/pull/312))
- fix/issue-310-incorrect-route-processing|Fix for the issue with incor… ([YCloudYUSA/y_lb#311](https://github.com/YCloudYUSA/y_lb/pull/311))
- fix(ITCR-1346): Replace Request::get() in schedule controller (removed in Symfony 8) ([YCloudYUSA/y_pef_schedule#24](https://github.com/YCloudYUSA/y_pef_schedule/pull/24))
- fix(ITCR-1336): drop stale composer patches, fix empty rabbit_hole patch ([YCloudYUSA/yusaopeny#387](https://github.com/YCloudYUSA/yusaopeny/pull/387))
- fix(ITCP-741): self-host jQuery Migrate, drop code.jquery.com CDN ([YCloudYUSA/yusaopeny#386](https://github.com/YCloudYUSA/yusaopeny/pull/386))
- fix: bump protected_pages to ^3.0 (Drupal core 11.4+ compat) ([YCloudYUSA/yusaopeny#383](https://github.com/YCloudYUSA/yusaopeny/pull/383))
- fix: update 9006 enables the Solr submodule only when search_api_solr is enabled ([YCloudYUSA/yusaopeny_activity_finder#86](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/86))
- Category Tags, Filters on Top and location/fetch fixes for the AF4 app ([YCloudYUSA/yusaopeny_activity_finder#85](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/85))
- fix(ITCR-1345): Drop removed core cookie library dependencies ([YCloudYUSA/yusaopeny_activity_finder#81](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/81))
- fix: widen y360id from int to string, sync no longer aborts ([YCloudYUSA/yusaopeny_ymca360#21](https://github.com/YCloudYUSA/yusaopeny_ymca360/pull/21))


## Contrib Changes


Release type terms, advisories and the issue count come from the drupal.org release pages; quoted text is the first line of a release's notes. Security first.

<details>
<summary><strong>Contrib modules — 60 packages</strong></summary>

- `drupal/blazy` 3.0.17 → 3.0.19 — **Security update**, Bug fixes, New features; fixes [SA-CONTRIB-2026-104](https://www.drupal.org/sa-contrib-2026-pckf1wc_t0); 3.0.18: “Blazy 3.0.x-dev, 2026-07-04”; 3.0.19: “Hot fix for Media player collapsed display regression”
- `drupal/captcha` 2.0.10 → 2.0.12 — **Security update**, Bug fixes, New features; fixes [SA-CONTRIB-2026-281](https://www.drupal.org/sa-contrib-2026-281); 24 issues resolved; 2.0.11: “This is a bugfix and security release for captcha”; 2.0.12: “This is a compatibility and bugfix release for CAPTCHA”
- `drupal/custom_formatters` 4.1.0-beta2 → 4.2.1 — **Security update**, Bug fixes, New features; fixes [SA-CONTRIB-2026-225](https://www.drupal.org/sa-contrib-2026-zdighudwjf); 4.1.0-beta3: “The third beta release of Custom Formatters 4.1.0 for Drupal 10 and 11, adding per-formatter configurable fields via Field UI, raw settings access across all engine plugins, and context-aware…”; 4.1.0: “First stable release of the 4.1.x branch”; 4.2.1: “Security release”
- `drupal/diff` 2.0.0 → 2.1.1 — **Security update**, Bug fixes, New features; fixes [SA-CONTRIB-2026-096](https://www.drupal.org/sa-contrib-2026-096); 9 issues resolved; 2.1.0: “Diff supports all entity types”; 2.1.1: “Minor bug fixes”
- `drupal/easy_breadcrumb` 2.0.9 → 2.0.11 — **Security update**, Bug fixes; fixes [SA-CONTRIB-2026-212](https://www.drupal.org/sa-contrib-2026-ahw1av9s_9); 47 issues resolved; 2.0.10: “Bugfix/small improvements release”; 2.0.11: “Bug fixes, tests, and code quality”
- `drupal/entity` 1.6.0 → 1.8.0 — **Security update**, Bug fixes; fixes [SA-CONTRIB-2026-113](https://www.drupal.org/sa-contrib-2026-113); 4 issues resolved; 8.x-1.7: “Minor maintenance release”; 8.x-1.8: “This release changes JSONAPI entity collection access control. In certain circumstances this may mean that JSONAPI clients can access less data than expected. Sites should carefully review their…”
- `drupal/entity_browser` 2.15.0 → 2.17.0 — **Security update**, Bug fixes, New features; fixes [SA-CONTRIB-2026-094](https://www.drupal.org/sa-contrib-2026-9ycmpcajri); 19 issues resolved; 8.x-2.16: “Security release”; 8.x-2.17: “Drupal 12 compatibility, many bugfixes and improvements”
- `drupal/geolocation` 3.14.0 → 3.15.0 — **Security update**, Bug fixes; fixes [SA-CONTRIB-2026-062](https://www.drupal.org/sa-contrib-2026-xuq567xe4o); 8.x-3.15: “140b7f35 Query issues”
- `drupal/paragraphs` 1.20.0 → 1.23.0 — **Security update**, Bug fixes, New features; fixes [SA-CONTRIB-2026-060](https://www.drupal.org/sa-contrib-2026-mgwv6qpzfz), [SA-CONTRIB-2026-061](https://www.drupal.org/sa-contrib-2026-4vcblnrxz1); 11 issues resolved; 8.x-1.21: “Security release”; 8.x-1.22: “Bugfixes, performance improvements and preparations for Drupal 12”; 8.x-1.23: “Fixes a regression with summaries on Drupal 10”
- `drupal/rabbit_hole` 1.2.0 → 1.3.0 — **Security update**, Bug fixes; fixes [SA-CONTRIB-2026-252](https://www.drupal.org/sa-contrib-2026-9cagfbicvj); 5 issues resolved; 8.x-1.3: “This is a bugfix and security release for the rabbit_hole module”
- `drupal/stage_file_proxy` 3.1.6 → 3.1.7 — **Security update**; fixes [SA-CONTRIB-2026-286](https://www.drupal.org/sa-contrib-2026-286); 3 issues resolved
- `drupal/webform` 6.3.0-beta9 → 6.3.1 — **Security update**, Bug fixes, New features; fixes [SA-CONTRIB-2026-154](https://www.drupal.org/sa-contrib-2026-154), [SA-CONTRIB-2026-155](https://www.drupal.org/sa-contrib-2026-155), [SA-CONTRIB-2026-158](https://www.drupal.org/sa-contrib-2026-158), [SA-CONTRIB-2026-159](https://www.drupal.org/sa-contrib-2026-159), [SA-CONTRIB-2026-160](https://www.drupal.org/sa-contrib-2026-160), [SA-CONTRIB-2026-161](https://www.drupal.org/sa-contrib-2026-161), [SA-CONTRIB-2026-162](https://www.drupal.org/sa-contrib-2026-162), [SA-CONTRIB-2026-163](https://www.drupal.org/sa-contrib-2026-163), [SA-CONTRIB-2026-164](https://www.drupal.org/sa-contrib-2026-164), [SA-CONTRIB-2026-165](https://www.drupal.org/sa-contrib-2026-165), [SA-CONTRIB-2026-166](https://www.drupal.org/sa-contrib-2026-166), [SA-CONTRIB-2026-167](https://www.drupal.org/sa-contrib-2026-167), [SA-CONTRIB-2026-168](https://www.drupal.org/sa-contrib-2026-168), [SA-CONTRIB-2026-169](https://www.drupal.org/sa-contrib-2026-169), [SA-CONTRIB-2026-170](https://www.drupal.org/sa-contrib-2026-170), [SA-CONTRIB-2026-171](https://www.drupal.org/sa-contrib-2026-171), [SA-CONTRIB-2026-172](https://www.drupal.org/sa-contrib-2026-172), [SA-CONTRIB-2026-173](https://www.drupal.org/sa-contrib-2026-173), [SA-CONTRIB-2026-174](https://www.drupal.org/sa-contrib-2026-174), [SA-CONTRIB-2026-175](https://www.drupal.org/sa-contrib-2026-175); 314 issues resolved; 6.3.0: “Webform 6.3.0-rc2 released as 6.3.0. This is the first release with support for Drupal 11. There are some outstanding issues; see #3530589: Stable Version for Drupal 11. In particular, you may wish…”; 6.3.1: “Webform 6.3.1 for Drupal 11 contains a coordinated set of 22 security fixes with advisories and one additional hardening change. Sites using a supported Webform release should update”
- `drupal/activenet` 1.0.6 → 1.1.0 — New features; 1.1.0: “Drupal 12 kick-off https://git.drupalcode.org/project/activenet/-/tags/1.1.0”
- `drupal/addtocal_augment` 1.2.5 → 1.2.6 — no release type; 1.2.6: “This release marks the module as compatible with the forthcoming Drupal 12 release”
- `drupal/advanced_help_block` 1.0.8 → 1.1.0 — New features
- `drupal/better_exposed_filters` 7.1.2 → 7.2.0 — Bug fixes, New features; 15 issues resolved
- `drupal/ckeditor5_plugin_pack` 1.5.2 → 1.5.6 — Bug fixes, New features
- `drupal/ckeditor5_premium_features` 1.8.1 → 1.8.6 — Bug fixes, New features
- `drupal/colorapi` 2.1.0 → 2.2.0 — New features
- `drupal/css_editor` 2.0.4 → 2.1.0 — New features
- `drupal/ctools` 4.1.0 → 4.1.1 — Bug fixes, New features; 7 issues resolved; 4.1.1: “This is a bugfix and compatibility release for ctools”
- `drupal/daterange_compact` 2.1.1 → 2.1.2 — Bug fixes; 2.1.2: “Fix fatal error in admin UI due to non-existent "entity.daterange_compact_format.canonical" route (#3512773)”
- `drupal/daxko` 1.0.5 → 1.1.0 — New features
- `drupal/draggableviews` 2.1.4 → 2.1.5 — New features
- `drupal/file_delete` 3.0.2 → 3.0.3 — Bug fixes; 2 issues resolved
- `drupal/focal_point` 2.1.2 → 2.1.3 — Bug fixes; 6 issues resolved
- `drupal/fontyourface` 4.2.0 → 4.3.1 — New features
- `drupal/hal` 2.0.4 → 2.0.5 — no release type; 2.0.5: “#3601383: PHP 8.5: curl_close() is deprecated”
- `drupal/jquery_ui_touch_punch` 1.1.1 → 1.1.2 — no release type; 1.1.2: “Drupal 12 compatibility”
- `drupal/layout_builder_restrictions` 3.0.4 → 3.0.6 — no release type; 5 issues resolved; 3.0.5: “This release marks Layout Builder Restrictions as explicitly compatible with Drupal 12, while maintaining backwards support for Drupal 10.1+ and Drupal 11”; 3.0.6: “This release simply marks the module's Composer dependency for Drupal core as compatible with version ^12; the previous release, 3.0.5, indicated general compatible with Drupal core version 12, which…”
- `drupal/layout_builder_save_and_edit` 1.1.0 → 1.2.0 — New features
- `drupal/libraries` 4.1.1 → 4.2.1 — New features
- `drupal/link_attributes` 2.1.2 → 2.1.3 — no release type; 2.1.3: “#[3591563]”
- `drupal/media_library_form_element` 2.1.4 → 2.1.5 — no release type; 1 issue resolved; 2.1.5: “This release provides nominal Drupal 12 compatibility”
- `drupal/menu_item_extras` 3.1.0 → 3.2.0 — Bug fixes, New features; 3.1.1: “- Fixed PHP 8.4 compatibility in mie_demo_base”; 3.1.2: “Performance”; 3.1.3: “- #3615084: Reverted unsafe render-array caching introduced in 3.1.2. Fixes fatal errors, cross-user cache reuse, stale menu items, and missing children”
- `drupal/metatag` 2.2.0 → 2.2.5 — Bug fixes; 52 issues resolved; 2.2.1: “This release includes support for Drupal 12 and resolves many bugs. Updating is recommended for all sites. As always, thanks to everyone who contributed to this release”; 2.2.2: “This release includes some critical fixes for the last one - apologies for releasing 2.2.1 with some serious bugs. Thanks to everyone who collaborated on the fix”; 2.2.3: “This fixes a bug in the update script from the last release. Sorry about that”; 2.2.5: “Happy Halloween!”
- `drupal/migrate_plus` 6.0.10 → 6.0.11 — Bug fixes, New features; 5 issues resolved; 6.0.11: “Fixes/improvements and Drupal 12 / Drush 14 support”
- `drupal/migrate_tools` 6.1.4 → 6.1.5 — no release type; 3 issues resolved; 6.1.5: “Fixes, improvements, maintenance. Drupal 12 & Drush 14 support”
- `drupal/personify` 1.0.4 → 1.1.0 — New features
- `drupal/program_search` 2.0.0 → 2.1.1 — New features
- `drupal/protected_pages` 1.9.0 → 3.0.0 — Bug fixes; 8.x-2.0: “Maintenance fixes”; 3.0.0: “Protected Pages 3.0.0”
- `drupal/recaptcha` 3.5.0-rc1 → 3.5.0 — Bug fixes; 3 issues resolved; 8.x-3.5: “recaptcha 8.x-3.5-rc1 released as 8.x-3.5”
- `drupal/search_api` 1.40.0 → 1.43.0 — Bug fixes, New features; 21 issues resolved; 8.x-1.41: “This is release 1.41 of the Search API module, containing several bug fixes and new features”; 8.x-1.42: “This is release 1.42 of the Search API module, containing several bug fixes and adding compatibility with Drupal 12”; 8.x-1.43: “This is release 1.43 of the Search API module, containing one bugfix for a cache poisoning issue”
- `drupal/search_api_solr` 4.3.10 → 4.4.0 — Bug fixes, New features; 4.3.11: “This release focuses on compatibility, indexing fixes, and several internal cleanups across Search API Solr, the drush commands, and Solr jump-start configuration”; 4.3.12: “Drupal 10 compatibility fix release, otherwise the same as 4.3.11”; 4.3.13: “This release focuses on compatibility, indexing fixes, and several internal cleanups across Search API Solr, the drush commands, and Solr jump-start configuration”; 4.3.14: “solr_text_unstemmed fields are no longer populated after updating Search API Solr from 4.3.10 to 4.3.11/4.3.12”; 4.4.0: “Release 4.4.0 is identical to 4.3.13. But 4.4.x drops support for Drupal 10 and Drupal < 11.3”
- `drupal/seven` 2.0.0-beta7 → 2.0.0-beta8 — no release type
- `drupal/simple_menu_icons` 3.1.0 → 3.2.0 — New features
- `drupal/slick` 3.0.7 → 3.0.8 — Bug fixes, New features; 3.0.8: “Updated to Blazy 3.18 deprecation notices for Blazy 4.x compatibility”
- `drupal/smart_date` 4.2.5 → 4.3.0 — Bug fixes, New features; 43 issues resolved; 4.2.6: “A couple of bugfixes, and a new README section”; 4.2.7: “Resolves a fatal error in Drupal 11.4 for sites using serialization”; 4.2.8: “Resolves an error on sites running Drupal <11.2”; 4.3.0-beta1: “This beta release introduces compatibility updates for upcoming Drupal versions, new migration paths, user experience enhancements, and important bug fixes. These include Drupal 12 readiness, the…”; 4.3.0-rc1: “Mostly smallish fixes and stability improvements as we edge closer to a stable release for the 4.3.x branch”; 4.3.0: “The most significant change in this specific release is improved support for paragraphs. Since the 4.2.8 release, however, significant additions include improved tokens support, improvements to the…”
- `drupal/social_feed_fetcher` 3.1.1 → 3.2.1 — New features
- `drupal/svg_image` 3.2.2 → 3.2.5 — Bug fixes; 6 issues resolved; 3.2.3: “This release fixes a compatibility warning so the module keeps working smoothly on the latest version of PHP (8.5)”; 3.2.5: “Security update: svg_image now requires enshrined/svg-sanitize ^1.0, the library that sanitizes inline SVGs. Every 0.x release, up to and including 0.22.0, is covered by security advisories published…”
- `drupal/token` 1.17.0 → 1.18.0 — Bug fixes, New features; 12 issues resolved; 8.x-1.18: “Drupal 12 compatibility, bugfixes”
- `drupal/trash` 3.0.27 → 3.1.2 — Bug fixes, New features; 37 issues resolved; 3.1.0-beta1: “First beta of the 3.1.x branch. What's new vs. 3.0.x:”; 3.1.0: “The first stable release of the 3.1.x branch! The main differences with 3.0.x are:”
- `drupal/tzfield` 1.13.0 → 1.14.0 — no release type; 8.x-1.14: “Resolve phpstan warnings”
- `drupal/vendor_stream_wrapper` 2.0.5 → 2.1.0 — New features
- `drupal/verf` 2.1.0 → 2.2.0 — New features
- `drupal/video` 3.1.0 → 3.2.0 — New features
- `drupal/video_embed_field` 3.1.0 → 3.1.1 — Bug fixes
- `drupal/views_block_filter_block` 2.1.2 → 2.2.0 — New features
- `drupal/views_field_formatter` 4.1.1 → 4.2.0 — New features
- `drupal/ymca_sync` 11.0.0 → 11.1.2 — Bug fixes, New features; 11.1.2: “Issue #3609993: Drupal 11 changes to ConfigFormBase constructor: Pass the typed config manager to ConfigFormBase in SettingsForm”

</details>


---

## Upgrade Path

From 11.3.1.x or an 11.4.0.0 release candidate:

```bash
composer config allow-plugins.symfony/runtime true
composer require ycloudyusa/yusaopeny:^11.4 --no-update
composer update -W
drush updb -y --no-cache-clear
drush cr
```

`composer require` without `--no-update` (or `-W`) fails on an 11.3 site — the locked dependencies (e.g. `drupal/confi`
4.1) block a partial update — and composer reverts `composer.json`.

All migrations run in `drush updb`: 34 updates on a fresh `extended` 11.3.1.5 install upgraded to 11.4.0.0-rc4 (sites
with more modules run more), among them the blazy→image display updates, the Activity Finder 6.2.1 → 7.2.1 backend
conversion (`openy_activity_finder_update_9006`), metatag 403/404 defaults, rabbit_hole and Trash storage updates,
`lb_webform_update_10001`; on sites that use them also the GroupEx Pro stub clean-up and uninstall, the embed account
conversion and `ws_small_y_update_91009`.

## QA & Testing

- 27 managed sites run 11.4 release candidates on staging and live: 23 on rc2, 4 on rc1.
- Upgrade test 11.3.1.5 (`extended`) → 11.4.0.0-rc4 with the commands above: 34 updates, no errors.
- PR builder upgrade test and fresh install sandboxes green on [#390](https://github.com/YCloudYUSA/yusaopeny/pull/390).
- GroupEx Pro retirement: PR builder green on [#394](https://github.com/YCloudYUSA/yusaopeny/pull/394) (composer removes `drupal/groupexpro`, `drupal/openy_gxp`, `drupal/openy_pef_gxp_sync`); on a live-site copy with the old modules and data, one `updb` pass drops the storage and uninstalls the stubs, the embed renders with a numeric account.
- Local upgrade of a live site copy from 11.4.0.0-rc2 to main: `updb` clean, `composer audit` 0 advisories (before
  SA-CONTRIB-2026-286; `composer update -W` brings `stage_file_proxy` 3.1.7), no
  `code.jquery.com` request, header-less tables not enhanced.

## Statistics


- **126** PRs/MRs merged in our packages (61 GitHub + 65 drupal.org)
- **540** releases between the old and new versions of the changed packages
- **204** packages changed: 192 updated, 6 added, 6 removed
- **55** security advisories fixed
- Major version bumps (8): `consolidation/site-process` 5.4.2 → 6.1.0, `drupal/openy_repeat` 3.3.0 → 4.1.0, `drupal/protected_pages` 1.9.0 → 3.0.0, `enshrined/svg-sanitize` 0.22.0 → 1.1.1, `solarium/solarium` 6.4.1 → 7.0.0, `symfony/dom-crawler` v7.4.12 → v8.1.10, `symfony/string` v7.4.13 → v8.1.10, `ycloudyusa/yusaopeny_activity_finder` 6.2.1 → 7.2.1
- **5** new and **0** removed Drupal extensions; `drush updb`: 34 updates

- **14** PRs merged in yusaopeny between the tags 11.3.1.6 and 11.4.0.0-rc4 (43 commits); **18** requirement changes in the distribution `composer.json`

---

## All Merged PRs/MRs


Every PR/MR merged into a commit between the two locked references of each of our packages (GitHub `compare` + `commits/<sha>/pulls`, GitLab `compare` + `commits/<sha>/merge_requests`).

<details>
<summary><strong>GitHub — 61 PRs in 19 repositories</strong></summary>

**open-y-subprojects/common_scss** (1 PR, 0 releases, dev-main@6c3bbed → dev-main@ecc3542)

| PR | Title | Merged |
|---|---|---|
| [#4](https://github.com/open-y-subprojects/common_scss/pull/4) | Declare Drupal core constraint ^10 // ^11 // ^12 | 2026-10-15 |

**open-y-subprojects/openy_content_core** (1 PR, 1 release, 3.3 → 3.4.0)

| PR | Title | Merged |
|---|---|---|
| [#11](https://github.com/open-y-subprojects/openy_content_core/pull/11) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**open-y-subprojects/openy_custom** (4 PRs, 2 releases, 3.1.5 → 3.3.0)

| PR | Title | Merged |
|---|---|---|
| [#102](https://github.com/open-y-subprojects/openy_custom/pull/102) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |
| [#101](https://github.com/open-y-subprojects/openy_custom/pull/101) | D12 compat: replace deprecated text_summary() with TextSummary service | 2026-10-08 |
| [#100](https://github.com/open-y-subprojects/openy_custom/pull/100) | openy_migrate: fix MigrateSkipProcessException removed in Drupal core 12 | 2026-10-08 |
| [#99](https://github.com/open-y-subprojects/openy_custom/pull/99) | feat(openy_system): add shared Vue 3 library (ITCR-1273 / ITCR-1301) | 2026-08-27 |

**open-y-subprojects/openy_daxko_gxp_syncer** (1 PR, 1 release, 1.4.1 → 1.5.0)

| PR | Title | Merged |
|---|---|---|
| [#18](https://github.com/open-y-subprojects/openy_daxko_gxp_syncer/pull/18) | Fix getDefaultOperations() missing CacheableMetadata param (core 12) | 2026-10-09 |

**open-y-subprojects/openy_demo_content** (1 PR, 1 release, 2.6.0 → 2.7.0)

| PR | Title | Merged |
|---|---|---|
| [#33](https://github.com/open-y-subprojects/openy_demo_content/pull/33) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**open-y-subprojects/openy_features** (4 PRs, 3 releases, 5.1.4 → 5.4.0)

| PR | Title | Merged |
|---|---|---|
| [#128](https://github.com/open-y-subprojects/openy_features/pull/128) | D12: pattern sweep leftovers (cookie, check_markup, EntityTypeManager, views.inc) | 2026-10-15 |
| [#127](https://github.com/open-y-subprojects/openy_features/pull/127) | D12: getOriginal() (CR 3295826) | 2026-10-08 |
| [#125](https://github.com/open-y-subprojects/openy_features/pull/125) | D12 compat: add ^12 and OOP hook / FileExists changes, with core floors | 2026-10-08 |
| [#122](https://github.com/open-y-subprojects/openy_features/pull/122) | fix(ITCR-1271): use core image formatter instead of blazy (D11.4 config schema) | 2026-08-07 |

**open-y-subprojects/openy_focal_point** (3 PRs, 1 release, 2.1.0 → 2.2.0)

| PR | Title | Merged |
|---|---|---|
| [#11](https://github.com/open-y-subprojects/openy_focal_point/pull/11) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |
| [#10](https://github.com/open-y-subprojects/openy_focal_point/pull/10) | D12 compat: replace deprecated image_path_flush() with service call | 2026-10-08 |
| [#9](https://github.com/open-y-subprojects/openy_focal_point/pull/9) | fix(ITCR-1347): Replace Request::get() in preview controller (removed in Symfony 8) | 2026-10-08 |

**open-y-subprojects/openy_hours_formatter** (2 PRs, 2 releases, 3.0.2 → 3.1.0)

| PR | Title | Merged |
|---|---|---|
| [#13](https://github.com/open-y-subprojects/openy_hours_formatter/pull/13) | Parse only the leading time range in openy_hours tokens | 2026-10-07 |
| [#12](https://github.com/open-y-subprojects/openy_hours_formatter/pull/12) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**open-y-subprojects/openy_map** (3 PRs, 2 releases, 6.0.0-beta4 → 6.1.0)

| PR | Title | Merged |
|---|---|---|
| [#100](https://github.com/open-y-subprojects/openy_map/pull/100) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |
| [#99](https://github.com/open-y-subprojects/openy_map/pull/99) | fix(ITCR-1344): Switch map elements to RenderElementBase (RenderElement removed in D12) | 2026-10-08 |
| [#97](https://github.com/open-y-subprojects/openy_map/pull/97) | Honor geolocation_google_maps.settings region/language config for the Maps API script | 2026-09-10 |

**open-y-subprojects/openy_node_alert** (2 PRs, 2 releases, 2.4.2 → 2.5.0)

| PR | Title | Merged |
|---|---|---|
| [#174](https://github.com/open-y-subprojects/openy_node_alert/pull/174) | D12: core_version_requirement bump to add ^12, 1 file(s) | 2026-10-08 |
| [#173](https://github.com/open-y-subprojects/openy_node_alert/pull/173) | fix(ITCP-730): do not load alert widget on backend routes | 2026-09-15 |

**open-y-subprojects/ynorth_gxp_spots_proxy** (1 PR, 1 release, 1.0.1 → 1.1.0)

| PR | Title | Merged |
|---|---|---|
| [#3](https://github.com/open-y-subprojects/ynorth_gxp_spots_proxy/pull/3) | Drupal 12 readiness: core_version_requirement | 2026-10-09 |

**YCloudYUSA/lb_claro** (2 PRs, 2 releases, 3.0.2 → 3.1.1)

| PR | Title | Merged |
|---|---|---|
| [#8](https://github.com/YCloudYUSA/lb_claro/pull/8) | composer.json: admit Drupal 12 in drupal/core constraint | 2026-10-15 |
| [#7](https://github.com/YCloudYUSA/lb_claro/pull/7) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**YCloudYUSA/useless_machines** (1 PR, 1 release, 2.1.0 → 2.2.0)

| PR | Title | Merged |
|---|---|---|
| [#15](https://github.com/YCloudYUSA/useless_machines/pull/15) | Add stub modules for retired GroupEx Pro modules | 2026-11-02 |

**YCloudYUSA/y_lb** (4 PRs, 4 releases, 5.0.4 → 5.2.1)

| PR | Title | Merged |
|---|---|---|
| [#317](https://github.com/YCloudYUSA/y_lb/pull/317) | fix(ITCP-752): require drupal/lb_table ^1.1.1 for the tablesaw thead guard | 2026-10-28 |
| [#315](https://github.com/YCloudYUSA/y_lb/pull/315) | D12/Symfony 8: getSubscribedEvents() return type | 2026-10-08 |
| [#312](https://github.com/YCloudYUSA/y_lb/pull/312) | fix(ITCR-1271): use core image formatter instead of blazy (D11.4 config schema) | 2026-08-07 |
| [#311](https://github.com/YCloudYUSA/y_lb/pull/311) | fix/issue-310-incorrect-route-processing/Fix for the issue with incor… | 2026-06-23 |

**YCloudYUSA/y_lb_demo_content** (1 PR, 1 release, 5.1.0 → 5.2.0)

| PR | Title | Merged |
|---|---|---|
| [#61](https://github.com/YCloudYUSA/y_lb_demo_content/pull/61) | D12/Symfony 8: getSubscribedEvents() return type | 2026-10-08 |

**YCloudYUSA/y_pef_schedule** (3 PRs, 1 release, 2.1.1 → 2.2.0)

| PR | Title | Merged |
|---|---|---|
| [#25](https://github.com/YCloudYUSA/y_pef_schedule/pull/25) | D12 compat: add ^12 to core_version_requirement | 2026-10-08 |
| [#24](https://github.com/YCloudYUSA/y_pef_schedule/pull/24) | fix(ITCR-1346): Replace Request::get() in schedule controller (removed in Symfony 8) | 2026-10-08 |
| [#23](https://github.com/YCloudYUSA/y_pef_schedule/pull/23) | Use official drupal/openy_repeat package instead of ynorth-projects | 2026-10-08 |

**YCloudYUSA/yusaopeny** (16 PRs, 5 releases, 11.3.1.5 → 11.4.0.0-rc4)

| PR | Title | Merged |
|---|---|---|
| [#395](https://github.com/YCloudYUSA/yusaopeny/pull/395) | chore: set distribution version 11.4.0.0-rc4 | 2026-11-02 |
| [#394](https://github.com/YCloudYUSA/yusaopeny/pull/394) | chore(ITCP-752): require useless_machines ^2.2.0 | 2026-11-02 |
| [#393](https://github.com/YCloudYUSA/yusaopeny/pull/393) | Replace drupal/groupexpro with ycloudyusa/embedded_groupexpro_schedule | 2026-11-02 |
| [#392](https://github.com/YCloudYUSA/yusaopeny/pull/392) | chore: bump version to 11.4.0.3-dev in openy.info.yml | 2026-10-30 |
| [#391](https://github.com/YCloudYUSA/yusaopeny/pull/391) | chore: set distribution version 11.4.0.0-rc3 | 2026-10-30 |
| [#390](https://github.com/YCloudYUSA/yusaopeny/pull/390) | chore(ITCP-752): require yusaopeny_activity_finder ^7.2 | 2026-10-30 |
| [#389](https://github.com/YCloudYUSA/yusaopeny/pull/389) | feat(ITCP-592): bump openy_carnation minimum to ^4.2 | 2026-10-27 |
| [#387](https://github.com/YCloudYUSA/yusaopeny/pull/387) | fix(ITCR-1336): drop stale composer patches, fix empty rabbit_hole patch | 2026-10-08 |
| [#386](https://github.com/YCloudYUSA/yusaopeny/pull/386) | fix(ITCP-741): self-host jQuery Migrate, drop code.jquery.com CDN | 2026-09-18 |
| [#384](https://github.com/YCloudYUSA/yusaopeny/pull/384) | chore: bump openy_repeat, yusaopeny_activity_finder, openy_custom | 2026-09-03 |
| [#383](https://github.com/YCloudYUSA/yusaopeny/pull/383) | fix: bump protected_pages to ^3.0 (Drupal core 11.4+ compat) | 2026-09-03 |
| [#377](https://github.com/YCloudYUSA/yusaopeny/pull/377) | chore: post-release bump to 11.3.1.7-dev + docs | 2026-07-06 |
| [#376](https://github.com/YCloudYUSA/yusaopeny/pull/376) | chore: constrain drupal/core to <11.4 | 2026-07-06 |
| [#374](https://github.com/YCloudYUSA/yusaopeny/pull/374) | chore: remove deprecated CKEditor 4 library plugins | 2026-10-27 |
| [#372](https://github.com/YCloudYUSA/yusaopeny/pull/372) | feat: add Drupal 11.4 support | 2026-08-11 |
| [#371](https://github.com/YCloudYUSA/yusaopeny/pull/371) | chore: bump version to 11.3.1.6-dev | 2026-05-27 |

**YCloudYUSA/yusaopeny_activity_finder** (8 PRs, 4 releases, 6.2.1 → 7.2.1)

| PR | Title | Merged |
|---|---|---|
| [#86](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/86) | fix: update 9006 enables the Solr submodule only when search_api_solr is enabled | 2026-10-29 |
| [#85](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/85) | Category Tags, Filters on Top and location/fetch fixes for the AF4 app | 2026-10-29 |
| [#84](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/84) | D12 compat: text_summary() fallback for Drupal < 11.4 | 2026-10-08 |
| [#83](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/83) | D12 compat: require Drupal 11.4+ // 12 in core_version_requirement | 2026-10-08 |
| [#82](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/82) | D12 compat: replace deprecated text_summary() with TextSummary service | 2026-10-08 |
| [#81](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/81) | fix(ITCR-1345): Drop removed core cookie library dependencies | 2026-10-08 |
| [#80](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/80) | docs(af): refine CHANGELOG to be more human-friendly | 2026-09-03 |
| [#79](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/79) | AF4: Vue 2 to Vue 3 migration (ITCR-1273) | 2026-09-03 |

**YCloudYUSA/yusaopeny_ymca360** (3 PRs, 3 releases, 2.1.2 → 2.4.0)

| PR | Title | Merged |
|---|---|---|
| [#22](https://github.com/YCloudYUSA/yusaopeny_ymca360/pull/22) | D12 compat: add ^12 to core_version_requirement | 2026-10-08 |
| [#21](https://github.com/YCloudYUSA/yusaopeny_ymca360/pull/21) | fix: widen y360id from int to string, sync no longer aborts | 2026-08-31 |
| [#18](https://github.com/YCloudYUSA/yusaopeny_ymca360/pull/18) | Harden windowed pagination: page ceiling + no-progress guard | 2026-06-17 |

</details>

<details>
<summary><strong>drupal.org — 65 MRs in 45 repositories</strong></summary>

**drupal/confi** (3 MRs, 2 releases, 4.1.1 → 4.3.0)

| MR | Title | Merged |
|---|---|---|
| [!17](https://git.drupalcode.org/project/confi/-/merge_requests/17) | Use injected file_system service instead of \Drupal::service() | 2026-10-08 |
| [!16](https://git.drupalcode.org/project/confi/-/merge_requests/16) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |
| [!15](https://git.drupalcode.org/project/confi/-/merge_requests/15) | fix(ITCR-1271): widen module_installer typehint to ModuleInstallerInterface (D11.4) | 2026-08-07 |

**drupal/lb_accordion** (3 MRs, 3 releases, 3.0.0 → 3.2.0)

| MR | Title | Merged |
|---|---|---|
| [!31](https://git.drupalcode.org/project/lb_accordion/-/merge_requests/31) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |
| [!30](https://git.drupalcode.org/project/lb_accordion/-/merge_requests/30) | Fix: run text format filters (media_embed) on accordion item body | 2026-09-14 |
| [!27](https://git.drupalcode.org/project/lb_accordion/-/merge_requests/27) | Fix: Render field_block_item from block_content entity in accordion template | 2026-08-27 |

**drupal/lb_branch_amenities_blocks** (1 MR, 1 release, 3.0.0 → 3.1.0)

| MR | Title | Merged |
|---|---|---|
| [!20](https://git.drupalcode.org/project/lb_branch_amenities_blocks/-/merge_requests/20) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_branch_hours_blocks** (1 MR, 1 release, 3.0.0 → 3.1.0)

| MR | Title | Merged |
|---|---|---|
| [!37](https://git.drupalcode.org/project/lb_branch_hours_blocks/-/merge_requests/37) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_branch_social_links_blocks** (1 MR, 1 release, 1.0.7 → 1.1.0)

| MR | Title | Merged |
|---|---|---|
| [!12](https://git.drupalcode.org/project/lb_branch_social_links_blocks/-/merge_requests/12) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_cards** (2 MRs, 2 releases, 3.0.2 → 3.1.0)

| MR | Title | Merged |
|---|---|---|
| [!59](https://git.drupalcode.org/project/lb_cards/-/merge_requests/59) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |
| [!58](https://git.drupalcode.org/project/lb_cards/-/merge_requests/58) | fix: prevent button gap in equal-height card rows | 2026-06-12 |

**drupal/lb_carousel** (1 MR, 1 release, 3.0.0 → 3.1.0)

| MR | Title | Merged |
|---|---|---|
| [!34](https://git.drupalcode.org/project/lb_carousel/-/merge_requests/34) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_grid_cta** (1 MR, 1 release, 4.0.0 → 4.1.0)

| MR | Title | Merged |
|---|---|---|
| [!38](https://git.drupalcode.org/project/lb_grid_cta/-/merge_requests/38) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_hero** (1 MR, 1 release, 2.0.3 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!46](https://git.drupalcode.org/project/lb_hero/-/merge_requests/46) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_modal** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!14](https://git.drupalcode.org/project/lb_modal/-/merge_requests/14) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_partners_blocks** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!26](https://git.drupalcode.org/project/lb_partners_blocks/-/merge_requests/26) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_ping_pong** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!35](https://git.drupalcode.org/project/lb_ping_pong/-/merge_requests/35) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_promo** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!22](https://git.drupalcode.org/project/lb_promo/-/merge_requests/22) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_related_articles_blocks** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!21](https://git.drupalcode.org/project/lb_related_articles_blocks/-/merge_requests/21) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_related_events_blocks** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!29](https://git.drupalcode.org/project/lb_related_events_blocks/-/merge_requests/29) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_simple_menu** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!16](https://git.drupalcode.org/project/lb_simple_menu/-/merge_requests/16) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_staff_members_blocks** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!30](https://git.drupalcode.org/project/lb_staff_members_blocks/-/merge_requests/30) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_statistics** (1 MR, 1 release, 3.0.0 → 3.1.0)

| MR | Title | Merged |
|---|---|---|
| [!21](https://git.drupalcode.org/project/lb_statistics/-/merge_requests/21) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_table** (2 MRs, 2 releases, 1.1.0 → 1.2.0)

| MR | Title | Merged |
|---|---|---|
| [!17](https://git.drupalcode.org/project/lb_table/-/merge_requests/17) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |
| [!16](https://git.drupalcode.org/project/lb_table/-/merge_requests/16) | Guard tablesaw enhancement: only add markup to tables with header cells | 2026-09-14 |

**drupal/lb_testimonial_blocks** (1 MR, 1 release, 2.1.0 → 2.2.0)

| MR | Title | Merged |
|---|---|---|
| [!28](https://git.drupalcode.org/project/lb_testimonial_blocks/-/merge_requests/28) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/lb_webform** (2 MRs, 2 releases, 2.0.0 → 2.1.1)

| MR | Title | Merged |
|---|---|---|
| [!14](https://git.drupalcode.org/project/lb_webform/-/merge_requests/14) | Add webform_ui as a dependency | 2026-11-03 |
| [!13](https://git.drupalcode.org/project/lb_webform/-/merge_requests/13) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/openy_branch_selector** (1 MR, 1 release, 1.1.2 → 1.2.0)

| MR | Title | Merged |
|---|---|---|
| [!4](https://git.drupalcode.org/project/openy_branch_selector/-/merge_requests/4) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/openy_carnation** (2 MRs, 2 releases, 4.0.0-beta7 → 4.2.0)

| MR | Title | Merged |
|---|---|---|
| [!127](https://git.drupalcode.org/project/openy_carnation/-/merge_requests/127) | D12 compat: add missing description_classes on before branch (CR#3482370) | 2026-10-08 |
| [!125](https://git.drupalcode.org/project/openy_carnation/-/merge_requests/125) | ITCR-1271: keep field media images fluid after blazy->image swap | 2026-08-07 |

**drupal/openy_daxko2** (1 MR, 1 release, 1.0.7 → 1.1.0)

| MR | Title | Merged |
|---|---|---|
| [!9](https://git.drupalcode.org/project/openy_daxko2/-/merge_requests/9) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/openy_er** (1 MR, 1 release, 1.1.1 → 1.2.0)

| MR | Title | Merged |
|---|---|---|
| [!5](https://git.drupalcode.org/project/openy_er/-/merge_requests/5) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/openy_gtranslate** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!7](https://git.drupalcode.org/project/openy_gtranslate/-/merge_requests/7) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/openy_mappings** (1 MR, 1 release, 1.1.1 → 1.2.0)

| MR | Title | Merged |
|---|---|---|
| [!7](https://git.drupalcode.org/project/openy_mappings/-/merge_requests/7) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/openy_node_session** (3 MRs, 2 releases, 2.2.0 → 2.4.0)

| MR | Title | Merged |
|---|---|---|
| [!5](https://git.drupalcode.org/project/openy_node_session/-/merge_requests/5) | Add the Category Tags vocabulary and session tag field | 2026-10-29 |
| [!4](https://git.drupalcode.org/project/openy_node_session/-/merge_requests/4) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |
| [!2](https://git.drupalcode.org/project/openy_node_session/-/merge_requests/2) | Drupal 11 upgrade: staged changes | 2025-05-29 |

**drupal/openy_repeat** (3 MRs, 3 releases, 3.3.0 → 4.1.0)

| MR | Title | Merged |
|---|---|---|
| [!16](https://git.drupalcode.org/project/openy_repeat/-/merge_requests/16) | D12: fix RangeAsteriksValidator::validate() signature for Symfony 8 | 2026-10-08 |
| [!15](https://git.drupalcode.org/project/openy_repeat/-/merge_requests/15) | ITCR-1271: allow openy_carnation ^4.1 (D11.4 field media image fix) | 2026-08-07 |
| [!14](https://git.drupalcode.org/project/openy_repeat/-/merge_requests/14) | Schedules Vue 2 to Vue 3 migration (ITCR-1301) | 2026-09-03 |

**drupal/openy_socrates** (2 MRs, 2 releases, 1.1.0 → 1.2.1)

| MR | Title | Merged |
|---|---|---|
| [!4](https://git.drupalcode.org/project/openy_socrates/-/merge_requests/4) | composer.json: admit Drupal 12 in drupal/core constraint | 2026-10-15 |
| [!3](https://git.drupalcode.org/project/openy_socrates/-/merge_requests/3) | Add Symfony 8 return type to OpenySocratesCompilerPass::process() | 2026-10-08 |

**drupal/upgrade_tool** (2 MRs, 2 releases, 4.1.2 → 4.3.0)

| MR | Title | Merged |
|---|---|---|
| [!15](https://git.drupalcode.org/project/upgrade_tool/-/merge_requests/15) | D12: Attribute-based plugin discovery + config pre-existing names fix | 2026-10-08 |
| [!14](https://git.drupalcode.org/project/upgrade_tool/-/merge_requests/14) | fix(ITCR-1271): widen module_installer typehint to ModuleInstallerInterface (D11.4) | 2026-08-07 |

**drupal/ws_code_block** (1 MR, 1 release, 1.1.0 → 1.2.0)

| MR | Title | Merged |
|---|---|---|
| [!3](https://git.drupalcode.org/project/ws_code_block/-/merge_requests/3) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/ws_colorway_canada** (1 MR, 1 release, 2.0.1 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!23](https://git.drupalcode.org/project/ws_colorway_canada/-/merge_requests/23) | Add ^12 to core_version_requirement (Drupal 12 readiness) | 2026-10-09 |

**drupal/ws_event** (1 MR, 1 release, 2.0.1 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!97](https://git.drupalcode.org/project/ws_event/-/merge_requests/97) | Allow drush/drush ^14 for Drupal 12 compatibility | 2026-10-08 |

**drupal/ws_lb_tabs** (1 MR, 1 release, 3.0.0 → 3.1.0)

| MR | Title | Merged |
|---|---|---|
| [!17](https://git.drupalcode.org/project/ws_lb_tabs/-/merge_requests/17) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/ws_promotion** (2 MRs, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!14](https://git.drupalcode.org/project/ws_promotion/-/merge_requests/14) | Add ^12 to core_version_requirement (Drupal 12 readiness) | 2026-10-09 |
| [!13](https://git.drupalcode.org/project/ws_promotion/-/merge_requests/13) | D12/Symfony 8: add missing return type to getSubscribedEvents() | 2026-10-08 |

**drupal/ws_small_y** (6 MRs, 4 releases, 2.0.4 → 2.2.0)

| MR | Title | Merged |
|---|---|---|
| [!86](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/86) | Add alt text to existing Small Y demo media images | 2026-10-30 |
| [!85](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/85) | Add alt text to Small Y demo media images | 2026-10-30 |
| [!84](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/84) | Add ^12 to core_version_requirement (Drupal 12 readiness) | 2026-10-09 |
| [!83](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/83) | D12/Symfony 8: add missing return type to getSubscribedEvents() | 2026-10-08 |
| [!82](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/82) | Fix: alert description hidden on all header/footer alerts | 2026-08-04 |
| [!81](https://git.drupalcode.org/project/ws_small_y/-/merge_requests/81) | fix: replace min-height with aspect-ratio on card-img-wrapper (Safari fix) | 2026-07-17 |

**drupal/y_branch** (1 MR, 1 release, 1.1.1 → 1.2.0)

| MR | Title | Merged |
|---|---|---|
| [!31](https://git.drupalcode.org/project/y_branch/-/merge_requests/31) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/y_branch_menu** (1 MR, 1 release, 1.1.1 → 1.2.0)

| MR | Title | Merged |
|---|---|---|
| [!19](https://git.drupalcode.org/project/y_branch_menu/-/merge_requests/19) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/y_camp** (1 MR, 1 release, 3.0.0 → 3.1.0)

| MR | Title | Merged |
|---|---|---|
| [!54](https://git.drupalcode.org/project/y_camp/-/merge_requests/54) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/y_donate** (1 MR, 1 release, 3.0.1 → 3.1.0)

| MR | Title | Merged |
|---|---|---|
| [!22](https://git.drupalcode.org/project/y_donate/-/merge_requests/22) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/y_facility** (1 MR, 1 release, 3.0.0 → 3.1.0)

| MR | Title | Merged |
|---|---|---|
| [!12](https://git.drupalcode.org/project/y_facility/-/merge_requests/12) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/y_lb_article** (1 MR, 1 release, 2.0.1 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!63](https://git.drupalcode.org/project/y_lb_article/-/merge_requests/63) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/y_program** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!11](https://git.drupalcode.org/project/y_program/-/merge_requests/11) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

**drupal/y_program_subcategory** (1 MR, 1 release, 2.0.0 → 2.1.0)

| MR | Title | Merged |
|---|---|---|
| [!8](https://git.drupalcode.org/project/y_program_subcategory/-/merge_requests/8) | Add Drupal 12 (^12) to core_version_requirement | 2026-10-08 |

</details>


Ranges are the locked references, so yusaopeny starts at 11.3.1.5 and includes the 11.3.1.6 PRs (#371, #376).

## All Releases


Releases between the old and the new locked version (date = release date).

<details>
<summary><strong>Layout Builder Blocks — 32 releases</strong></summary>

- `drupal/lb_accordion`: [3.1.0](https://www.drupal.org/project/lb_accordion/releases/3.1.0) 2026-08-27, [3.1.1](https://www.drupal.org/project/lb_accordion/releases/3.1.1) 2026-09-14, [3.2.0](https://www.drupal.org/project/lb_accordion/releases/3.2.0) 2026-10-08
- `drupal/lb_branch_amenities_blocks`: [3.1.0](https://www.drupal.org/project/lb_branch_amenities_blocks/releases/3.1.0) 2026-10-08
- `drupal/lb_branch_hours_blocks`: [3.1.0](https://www.drupal.org/project/lb_branch_hours_blocks/releases/3.1.0) 2026-10-08
- `drupal/lb_branch_social_links_blocks`: [1.1.0](https://www.drupal.org/project/lb_branch_social_links_blocks/releases/1.1.0) 2026-10-09
- `drupal/lb_cards`: [3.0.3](https://www.drupal.org/project/lb_cards/releases/3.0.3) 2026-06-12, [3.1.0](https://www.drupal.org/project/lb_cards/releases/3.1.0) 2026-10-08
- `drupal/lb_carousel`: [3.1.0](https://www.drupal.org/project/lb_carousel/releases/3.1.0) 2026-10-08
- `drupal/lb_grid_cta`: [4.1.0](https://www.drupal.org/project/lb_grid_cta/releases/4.1.0) 2026-10-08
- `drupal/lb_hero`: [2.1.0](https://www.drupal.org/project/lb_hero/releases/2.1.0) 2026-10-08
- `drupal/lb_modal`: [2.1.0](https://www.drupal.org/project/lb_modal/releases/2.1.0) 2026-10-08
- `drupal/lb_partners_blocks`: [2.1.0](https://www.drupal.org/project/lb_partners_blocks/releases/2.1.0) 2026-10-08
- `drupal/lb_ping_pong`: [2.1.0](https://www.drupal.org/project/lb_ping_pong/releases/2.1.0) 2026-10-08
- `drupal/lb_promo`: [2.1.0](https://www.drupal.org/project/lb_promo/releases/2.1.0) 2026-10-08
- `drupal/lb_related_articles_blocks`: [2.1.0](https://www.drupal.org/project/lb_related_articles_blocks/releases/2.1.0) 2026-10-08
- `drupal/lb_related_events_blocks`: [2.1.0](https://www.drupal.org/project/lb_related_events_blocks/releases/2.1.0) 2026-10-08
- `drupal/lb_simple_menu`: [2.1.0](https://www.drupal.org/project/lb_simple_menu/releases/2.1.0) 2026-10-08
- `drupal/lb_staff_members_blocks`: [2.1.0](https://www.drupal.org/project/lb_staff_members_blocks/releases/2.1.0) 2026-10-08
- `drupal/lb_statistics`: [3.1.0](https://www.drupal.org/project/lb_statistics/releases/3.1.0) 2026-10-08
- `drupal/lb_table`: [1.1.1](https://www.drupal.org/project/lb_table/releases/1.1.1) 2026-09-14, [1.2.0](https://www.drupal.org/project/lb_table/releases/1.2.0) 2026-10-08
- `drupal/lb_testimonial_blocks`: [2.2.0](https://www.drupal.org/project/lb_testimonial_blocks/releases/2.2.0) 2026-10-08
- `drupal/lb_webform`: [2.1.0](https://www.drupal.org/project/lb_webform/releases/2.1.0) 2026-10-08, [2.1.1](https://www.drupal.org/project/lb_webform/releases/2.1.1) 2026-11-03
- `ycloudyusa/lb_claro`: [3.1.0](https://github.com/YCloudYUSA/lb_claro/releases/tag/3.1.0) 2026-10-08, [3.1.1](https://github.com/YCloudYUSA/lb_claro/releases/tag/3.1.1) 2026-10-15
- `ycloudyusa/y_lb`: [5.0.5](https://github.com/YCloudYUSA/y_lb/releases/tag/5.0.5) 2026-06-23, [5.1.0](https://github.com/YCloudYUSA/y_lb/releases/tag/5.1.0) 2026-08-07, [5.2.0](https://github.com/YCloudYUSA/y_lb/releases/tag/5.2.0) 2026-10-08, [5.2.1](https://github.com/YCloudYUSA/y_lb/releases/tag/5.2.1) 2026-10-28
- `ycloudyusa/y_lb_demo_content`: [5.2.0](https://github.com/YCloudYUSA/y_lb_demo_content/releases/tag/5.2.0) 2026-10-08

</details>

<details>
<summary><strong>Website Services Themes and Small Y — 11 releases</strong></summary>

- `drupal/openy_carnation`: [4.1.0](https://www.drupal.org/project/openy_carnation/releases/4.1.0) 2026-08-07, [4.2.0](https://www.drupal.org/project/openy_carnation/releases/4.2.0) 2026-10-08
- `drupal/ws_code_block`: [1.2.0](https://www.drupal.org/project/ws_code_block/releases/1.2.0) 2026-10-08
- `drupal/ws_colorway_canada`: [2.1.0](https://www.drupal.org/project/ws_colorway_canada/releases/2.1.0) 2026-10-09
- `drupal/ws_event`: [2.1.0](https://www.drupal.org/project/ws_event/releases/2.1.0) 2026-10-08
- `drupal/ws_lb_tabs`: [3.1.0](https://www.drupal.org/project/ws_lb_tabs/releases/3.1.0) 2026-10-08
- `drupal/ws_promotion`: [2.1.0](https://www.drupal.org/project/ws_promotion/releases/2.1.0) 2026-10-09
- `drupal/ws_small_y`: [2.0.5](https://www.drupal.org/project/ws_small_y/releases/2.0.5) 2026-07-17, [2.0.6](https://www.drupal.org/project/ws_small_y/releases/2.0.6) 2026-08-04, [2.1.0](https://www.drupal.org/project/ws_small_y/releases/2.1.0) 2026-10-09, [2.2.0](https://www.drupal.org/project/ws_small_y/releases/2.2.0) 2026-10-30

</details>

<details>
<summary><strong>Content Types — 8 releases</strong></summary>

- `drupal/y_branch`: [1.2.0](https://www.drupal.org/project/y_branch/releases/1.2.0) 2026-10-08
- `drupal/y_branch_menu`: [1.2.0](https://www.drupal.org/project/y_branch_menu/releases/1.2.0) 2026-10-08
- `drupal/y_camp`: [3.1.0](https://www.drupal.org/project/y_camp/releases/3.1.0) 2026-10-08
- `drupal/y_donate`: [3.1.0](https://www.drupal.org/project/y_donate/releases/3.1.0) 2026-10-08
- `drupal/y_facility`: [3.1.0](https://www.drupal.org/project/y_facility/releases/3.1.0) 2026-10-08
- `drupal/y_lb_article`: [2.1.0](https://www.drupal.org/project/y_lb_article/releases/2.1.0) 2026-10-08
- `drupal/y_program`: [2.1.0](https://www.drupal.org/project/y_program/releases/2.1.0) 2026-10-08
- `drupal/y_program_subcategory`: [2.1.0](https://www.drupal.org/project/y_program_subcategory/releases/2.1.0) 2026-10-08

</details>

<details>
<summary><strong>YUSAOpenY Modules — 42 releases</strong></summary>

- `drupal/openy_branch_selector`: [1.2.0](https://www.drupal.org/project/openy_branch_selector/releases/1.2.0) 2026-10-08
- `drupal/openy_daxko2`: [1.1.0](https://www.drupal.org/project/openy_daxko2/releases/1.1.0) 2026-10-08
- `drupal/openy_er`: [1.2.0](https://www.drupal.org/project/openy_er/releases/1.2.0) 2026-10-08
- `drupal/openy_gtranslate`: [2.1.0](https://www.drupal.org/project/openy_gtranslate/releases/2.1.0) 2026-10-08
- `drupal/openy_mappings`: [1.2.0](https://www.drupal.org/project/openy_mappings/releases/1.2.0) 2026-10-08
- `drupal/openy_node_session`: [2.3.0](https://www.drupal.org/project/openy_node_session/releases/2.3.0) 2026-10-09, [2.4.0](https://www.drupal.org/project/openy_node_session/releases/2.4.0) 2026-10-29
- `drupal/openy_repeat`: [3.4.0](https://www.drupal.org/project/openy_repeat/releases/3.4.0) 2026-08-07, [4.0.0](https://www.drupal.org/project/openy_repeat/releases/4.0.0) 2026-09-03, [4.1.0](https://www.drupal.org/project/openy_repeat/releases/4.1.0) 2026-10-08
- `drupal/openy_socrates`: [1.2.0](https://www.drupal.org/project/openy_socrates/releases/1.2.0) 2026-10-08, [1.2.1](https://www.drupal.org/project/openy_socrates/releases/1.2.1) 2026-10-15
- `open-y-subprojects/openy_content_core`: [3.4.0](https://github.com/open-y-subprojects/openy_content_core/releases/tag/3.4.0) 2026-10-08
- `open-y-subprojects/openy_custom`: [3.2.0](https://github.com/open-y-subprojects/openy_custom/releases/tag/3.2.0) 2026-08-27, [3.3.0](https://github.com/open-y-subprojects/openy_custom/releases/tag/3.3.0) 2026-10-08
- `open-y-subprojects/openy_daxko_gxp_syncer`: [1.5.0](https://github.com/open-y-subprojects/openy_daxko_gxp_syncer/releases/tag/1.5.0) 2026-10-09
- `open-y-subprojects/openy_demo_content`: [2.7.0](https://github.com/open-y-subprojects/openy_demo_content/releases/tag/2.7.0) 2026-10-08
- `open-y-subprojects/openy_features`: [5.2.0](https://github.com/open-y-subprojects/openy_features/releases/tag/5.2.0) 2026-08-07, [5.3.0](https://github.com/open-y-subprojects/openy_features/releases/tag/5.3.0) 2026-10-08, [5.4.0](https://github.com/open-y-subprojects/openy_features/releases/tag/5.4.0) 2026-10-15
- `open-y-subprojects/openy_focal_point`: [2.2.0](https://github.com/open-y-subprojects/openy_focal_point/releases/tag/2.2.0) 2026-10-08
- `open-y-subprojects/openy_hours_formatter`: [3.0.3](https://github.com/open-y-subprojects/openy_hours_formatter/releases/tag/3.0.3) 2026-10-07, [3.1.0](https://github.com/open-y-subprojects/openy_hours_formatter/releases/tag/3.1.0) 2026-10-08
- `open-y-subprojects/openy_map`: [6.0.1](https://github.com/open-y-subprojects/openy_map/releases/tag/6.0.1) 2026-09-10, [6.1.0](https://github.com/open-y-subprojects/openy_map/releases/tag/6.1.0) 2026-10-08
- `open-y-subprojects/openy_node_alert`: [2.4.3](https://github.com/open-y-subprojects/openy_node_alert/releases/tag/2.4.3) 2026-09-15, [2.5.0](https://github.com/open-y-subprojects/openy_node_alert/releases/tag/2.5.0) 2026-10-08
- `open-y-subprojects/ynorth_gxp_spots_proxy`: [1.1.0](https://github.com/open-y-subprojects/ynorth_gxp_spots_proxy/releases/tag/1.1.0) 2026-10-09
- `ycloudyusa/useless_machines`: [2.2.0](https://github.com/YCloudYUSA/useless_machines/releases/tag/2.2.0) 2026-11-02
- `ycloudyusa/y_pef_schedule`: [2.2.0](https://github.com/YCloudYUSA/y_pef_schedule/releases/tag/2.2.0) 2026-10-08
- `ycloudyusa/yusaopeny`: [11.3.1.6](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.6) 2026-07-06, [11.4.0.0-rc1](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.4.0.0-rc1) 2026-08-11, [11.4.0.0-rc2](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.4.0.0-rc2) 2026-09-03, [11.4.0.0-rc3](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.4.0.0-rc3) 2026-10-30, [11.4.0.0-rc4](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.4.0.0-rc4) 2026-11-02
- `ycloudyusa/yusaopeny_activity_finder`: [7.0.0](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/7.0.0) 2026-09-03, [7.1.0](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/7.1.0) 2026-10-08, [7.2.0](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/7.2.0) 2026-10-29, [7.2.1](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/7.2.1) 2026-10-29
- `ycloudyusa/yusaopeny_ymca360`: [2.2.0](https://github.com/YCloudYUSA/yusaopeny_ymca360/releases/tag/2.2.0) 2026-06-17, [2.3.0](https://github.com/YCloudYUSA/yusaopeny_ymca360/releases/tag/2.3.0) 2026-08-31, [2.4.0](https://github.com/YCloudYUSA/yusaopeny_ymca360/releases/tag/2.4.0) 2026-10-08

</details>

<details>
<summary><strong>Drupal Core, Drush, Symfony — 230 releases</strong></summary>

- `composer/ca-bundle`: [1.5.13](https://github.com/composer/ca-bundle/tree/1.5.13) 2026-07-18, [1.5.14](https://github.com/composer/ca-bundle/tree/1.5.14) 2026-08-21, [1.6.0](https://github.com/composer/ca-bundle/tree/1.6.0) 2026-10-20, [1.6.1](https://github.com/composer/ca-bundle/tree/1.6.1) 2026-10-29
- `composer/semver`: [3.5.0](https://github.com/composer/semver/tree/3.5.0) 2026-09-24, [3.5.1](https://github.com/composer/semver/tree/3.5.1) 2026-10-05, [3.5.2](https://github.com/composer/semver/tree/3.5.2) 2026-10-22, [3.6.0](https://github.com/composer/semver/tree/3.6.0) 2026-10-29
- `drupal/core-composer-scaffold`: [11.3.14](https://www.drupal.org/project/drupal/releases/11.3.14) (security) 2026-07-15, [11.3.16](https://www.drupal.org/project/drupal/releases/11.3.16) 2026-07-23, [11.3.17](https://www.drupal.org/project/drupal/releases/11.3.17) (security) 2026-09-16, [11.3.18](https://www.drupal.org/project/drupal/releases/11.3.18) 2026-09-28, [11.3.19](https://www.drupal.org/project/drupal/releases/11.3.19) (security) 2026-10-14, [11.3.20](https://www.drupal.org/project/drupal/releases/11.3.20) 2026-10-21, [11.4.0-beta1](https://www.drupal.org/project/drupal/releases/11.4.0-beta1) 2026-06-03, [11.4.0-rc1](https://www.drupal.org/project/drupal/releases/11.4.0-rc1) 2026-06-11, [11.4.0-rc2](https://www.drupal.org/project/drupal/releases/11.4.0-rc2) (security) 2026-06-17, [11.4.0](https://www.drupal.org/project/drupal/releases/11.4.0) 2026-07-01, [11.4.1](https://www.drupal.org/project/drupal/releases/11.4.1) 2026-07-03, [11.4.2](https://www.drupal.org/project/drupal/releases/11.4.2) 2026-07-10, [11.4.3](https://www.drupal.org/project/drupal/releases/11.4.3) 2026-07-14, [11.4.4](https://www.drupal.org/project/drupal/releases/11.4.4) (security) 2026-07-15, [11.4.5](https://www.drupal.org/project/drupal/releases/11.4.5) 2026-08-06, [11.4.6](https://www.drupal.org/project/drupal/releases/11.4.6) 2026-09-03, [11.4.7](https://www.drupal.org/project/drupal/releases/11.4.7) (security) 2026-09-16, [11.4.8](https://www.drupal.org/project/drupal/releases/11.4.8) 2026-09-26, [11.4.9](https://www.drupal.org/project/drupal/releases/11.4.9) 2026-10-09, [11.4.10](https://www.drupal.org/project/drupal/releases/11.4.10) (security) 2026-10-14, [11.4.11](https://www.drupal.org/project/drupal/releases/11.4.11) 2026-10-21
- `drupal/core`: [11.3.14](https://www.drupal.org/project/drupal/releases/11.3.14) (security) 2026-07-15, [11.3.16](https://www.drupal.org/project/drupal/releases/11.3.16) 2026-07-23, [11.3.17](https://www.drupal.org/project/drupal/releases/11.3.17) (security) 2026-09-16, [11.3.18](https://www.drupal.org/project/drupal/releases/11.3.18) 2026-09-28, [11.3.19](https://www.drupal.org/project/drupal/releases/11.3.19) (security) 2026-10-14, [11.3.20](https://www.drupal.org/project/drupal/releases/11.3.20) 2026-10-21, [11.4.0-beta1](https://www.drupal.org/project/drupal/releases/11.4.0-beta1) 2026-06-03, [11.4.0-rc1](https://www.drupal.org/project/drupal/releases/11.4.0-rc1) 2026-06-11, [11.4.0-rc2](https://www.drupal.org/project/drupal/releases/11.4.0-rc2) (security) 2026-06-17, [11.4.0](https://www.drupal.org/project/drupal/releases/11.4.0) 2026-07-01, [11.4.1](https://www.drupal.org/project/drupal/releases/11.4.1) 2026-07-03, [11.4.2](https://www.drupal.org/project/drupal/releases/11.4.2) 2026-07-10, [11.4.3](https://www.drupal.org/project/drupal/releases/11.4.3) 2026-07-14, [11.4.4](https://www.drupal.org/project/drupal/releases/11.4.4) (security) 2026-07-15, [11.4.5](https://www.drupal.org/project/drupal/releases/11.4.5) 2026-08-06, [11.4.6](https://www.drupal.org/project/drupal/releases/11.4.6) 2026-09-03, [11.4.7](https://www.drupal.org/project/drupal/releases/11.4.7) (security) 2026-09-16, [11.4.8](https://www.drupal.org/project/drupal/releases/11.4.8) 2026-09-26, [11.4.9](https://www.drupal.org/project/drupal/releases/11.4.9) 2026-10-09, [11.4.10](https://www.drupal.org/project/drupal/releases/11.4.10) (security) 2026-10-14, [11.4.11](https://www.drupal.org/project/drupal/releases/11.4.11) 2026-10-21
- `drush/drush`: [13.7.4](https://github.com/drush-ops/drush/tree/13.7.4) 2026-06-15, [13.7.5](https://github.com/drush-ops/drush/tree/13.7.5) 2026-07-07, [13.7.6](https://github.com/drush-ops/drush/tree/13.7.6) 2026-07-08, [13.7.7](https://github.com/drush-ops/drush/tree/13.7.7) 2026-09-04, [13.8.0](https://github.com/drush-ops/drush/tree/13.8.0) 2026-09-08
- `symfony/console`: [v7.4.14](https://github.com/symfony/console/tree/v7.4.14) 2026-06-16, [v7.4.15](https://github.com/symfony/console/tree/v7.4.15) 2026-07-27, [v7.4.16](https://github.com/symfony/console/tree/v7.4.16) 2026-07-31, [v7.4.17](https://github.com/symfony/console/tree/v7.4.17) 2026-08-21, [v7.4.18](https://github.com/symfony/console/tree/v7.4.18) 2026-08-25, [v7.4.19](https://github.com/symfony/console/tree/v7.4.19) 2026-09-13, [v7.4.20](https://github.com/symfony/console/tree/v7.4.20) 2026-09-18, [v7.4.21](https://github.com/symfony/console/tree/v7.4.21) 2026-10-12, [v7.4.22](https://github.com/symfony/console/tree/v7.4.22) 2026-10-28
- `symfony/dependency-injection`: [v7.4.14](https://github.com/symfony/dependency-injection/tree/v7.4.14) 2026-06-24, [v7.4.15](https://github.com/symfony/dependency-injection/tree/v7.4.15) 2026-07-22, [v7.4.16](https://github.com/symfony/dependency-injection/tree/v7.4.16) 2026-08-06, [v7.4.17](https://github.com/symfony/dependency-injection/tree/v7.4.17) 2026-08-21, [v7.4.20](https://github.com/symfony/dependency-injection/tree/v7.4.20) 2026-09-29, [v7.4.21](https://github.com/symfony/dependency-injection/tree/v7.4.21) 2026-10-13, [v7.4.22](https://github.com/symfony/dependency-injection/tree/v7.4.22) 2026-10-25
- `symfony/deprecation-contracts`: [v3.7.1](https://github.com/symfony/deprecation-contracts/tree/v3.7.1) 2026-06-05
- `symfony/dom-crawler`: [v7.4.17](https://github.com/symfony/dom-crawler/tree/v7.4.17) 2026-08-21, [v7.4.22](https://github.com/symfony/dom-crawler/tree/v7.4.22) 2026-10-25, [v8.0.0-BETA1](https://github.com/symfony/dom-crawler/tree/v8.0.0-BETA1) 2025-10-09, [v8.0.0-BETA2](https://github.com/symfony/dom-crawler/tree/v8.0.0-BETA2) 2025-11-01, [v8.0.0-RC1](https://github.com/symfony/dom-crawler/tree/v8.0.0-RC1) 2025-11-01, [v8.0.0](https://github.com/symfony/dom-crawler/tree/v8.0.0) 2025-11-01, [v8.0.1](https://github.com/symfony/dom-crawler/tree/v8.0.1) 2025-12-06, [v8.0.4](https://github.com/symfony/dom-crawler/tree/v8.0.4) 2026-01-05, [v8.0.6](https://github.com/symfony/dom-crawler/tree/v8.0.6) 2026-02-17, [v8.0.8](https://github.com/symfony/dom-crawler/tree/v8.0.8) 2026-03-30, [v8.0.12](https://github.com/symfony/dom-crawler/tree/v8.0.12) 2026-05-20, [v8.1.0-BETA1](https://github.com/symfony/dom-crawler/tree/v8.1.0-BETA1) 2026-05-05, [v8.1.0-BETA3](https://github.com/symfony/dom-crawler/tree/v8.1.0-BETA3) 2026-05-20, [v8.1.0](https://github.com/symfony/dom-crawler/tree/v8.1.0) 2026-05-29, [v8.1.1](https://github.com/symfony/dom-crawler/tree/v8.1.1) 2026-06-05, [v8.1.5](https://github.com/symfony/dom-crawler/tree/v8.1.5) 2026-08-21, [v8.1.10](https://github.com/symfony/dom-crawler/tree/v8.1.10) 2026-10-25
- `symfony/error-handler`: [v8.1.2](https://github.com/symfony/error-handler/tree/v8.1.2) 2026-07-22, [v8.1.5](https://github.com/symfony/error-handler/tree/v8.1.5) 2026-08-21, [v8.1.8](https://github.com/symfony/error-handler/tree/v8.1.8) 2026-09-22, [v8.1.10](https://github.com/symfony/error-handler/tree/v8.1.10) 2026-10-25
- `symfony/event-dispatcher-contracts`: [v3.7.1](https://github.com/symfony/event-dispatcher-contracts/tree/v3.7.1) 2026-06-05
- `symfony/event-dispatcher`: [v7.4.14](https://github.com/symfony/event-dispatcher/tree/v7.4.14) 2026-06-06, [v7.4.15](https://github.com/symfony/event-dispatcher/tree/v7.4.15) 2026-07-21, [v7.4.17](https://github.com/symfony/event-dispatcher/tree/v7.4.17) 2026-08-21
- `symfony/filesystem`: [v7.4.15](https://github.com/symfony/filesystem/tree/v7.4.15) 2026-07-22, [v7.4.17](https://github.com/symfony/filesystem/tree/v7.4.17) 2026-08-21, [v7.4.18](https://github.com/symfony/filesystem/tree/v7.4.18) 2026-08-23, [v7.4.21](https://github.com/symfony/filesystem/tree/v7.4.21) 2026-10-06
- `symfony/finder`: [v7.4.14](https://github.com/symfony/finder/tree/v7.4.14) 2026-06-27, [v7.4.17](https://github.com/symfony/finder/tree/v7.4.17) 2026-08-21, [v7.4.19](https://github.com/symfony/finder/tree/v7.4.19) 2026-09-10, [v7.4.20](https://github.com/symfony/finder/tree/v7.4.20) 2026-09-26, [v7.4.22](https://github.com/symfony/finder/tree/v7.4.22) 2026-10-19
- `symfony/http-foundation`: [v7.4.14](https://github.com/symfony/http-foundation/tree/v7.4.14) 2026-06-11, [v7.4.15](https://github.com/symfony/http-foundation/tree/v7.4.15) 2026-07-29, [v7.4.16](https://github.com/symfony/http-foundation/tree/v7.4.16) 2026-08-07, [v7.4.17](https://github.com/symfony/http-foundation/tree/v7.4.17) 2026-08-20, [v7.4.18](https://github.com/symfony/http-foundation/tree/v7.4.18) 2026-08-30, [v7.4.19](https://github.com/symfony/http-foundation/tree/v7.4.19) 2026-09-14, [v7.4.20](https://github.com/symfony/http-foundation/tree/v7.4.20) 2026-09-24, [v7.4.21](https://github.com/symfony/http-foundation/tree/v7.4.21) 2026-10-08, [v7.4.22](https://github.com/symfony/http-foundation/tree/v7.4.22) 2026-10-27
- `symfony/http-kernel`: [v7.4.14](https://github.com/symfony/http-kernel/tree/v7.4.14) 2026-06-27, [v7.4.15](https://github.com/symfony/http-kernel/tree/v7.4.15) 2026-07-29, [v7.4.16](https://github.com/symfony/http-kernel/tree/v7.4.16) 2026-08-07, [v7.4.17](https://github.com/symfony/http-kernel/tree/v7.4.17) 2026-08-22, [v7.4.18](https://github.com/symfony/http-kernel/tree/v7.4.18) 2026-08-30, [v7.4.19](https://github.com/symfony/http-kernel/tree/v7.4.19) 2026-09-15, [v7.4.20](https://github.com/symfony/http-kernel/tree/v7.4.20) 2026-09-29, [v7.4.21](https://github.com/symfony/http-kernel/tree/v7.4.21) 2026-10-14, [v7.4.22](https://github.com/symfony/http-kernel/tree/v7.4.22) 2026-10-28
- `symfony/mailer`: [v7.4.14](https://github.com/symfony/mailer/tree/v7.4.14) 2026-06-13, [v7.4.15](https://github.com/symfony/mailer/tree/v7.4.15) 2026-07-28, [v7.4.17](https://github.com/symfony/mailer/tree/v7.4.17) 2026-08-21, [v7.4.19](https://github.com/symfony/mailer/tree/v7.4.19) 2026-09-15, [v7.4.22](https://github.com/symfony/mailer/tree/v7.4.22) 2026-10-23
- `symfony/mime`: [v7.4.15](https://github.com/symfony/mime/tree/v7.4.15) 2026-07-29, [v7.4.16](https://github.com/symfony/mime/tree/v7.4.16) 2026-08-07, [v7.4.17](https://github.com/symfony/mime/tree/v7.4.17) 2026-08-22, [v7.4.18](https://github.com/symfony/mime/tree/v7.4.18) 2026-08-22, [v7.4.19](https://github.com/symfony/mime/tree/v7.4.19) 2026-09-04, [v7.4.22](https://github.com/symfony/mime/tree/v7.4.22) 2026-10-28
- `symfony/polyfill-deepclone`: [v1.42.0](https://github.com/symfony/polyfill-deepclone/tree/v1.42.0) 2026-08-07, [v1.43.0](https://github.com/symfony/polyfill-deepclone/tree/v1.43.0) 2026-09-30, [v1.43.1](https://github.com/symfony/polyfill-deepclone/tree/v1.43.1) 2026-10-06, [v1.43.2](https://github.com/symfony/polyfill-deepclone/tree/v1.43.2) 2026-10-14
- `symfony/polyfill-iconv`: [v1.43.0](https://github.com/symfony/polyfill-iconv/tree/v1.43.0) 2026-09-29
- `symfony/polyfill-intl-grapheme`: [v1.41.0](https://github.com/symfony/polyfill-intl-grapheme/tree/v1.41.0) 2026-07-28, [v1.43.0](https://github.com/symfony/polyfill-intl-grapheme/tree/v1.43.0) 2026-09-25, [v1.43.3](https://github.com/symfony/polyfill-intl-grapheme/tree/v1.43.3) 2026-10-15
- `symfony/polyfill-intl-idn`: [v1.42.0](https://github.com/symfony/polyfill-intl-idn/tree/v1.42.0) 2026-08-24, [v1.43.0](https://github.com/symfony/polyfill-intl-idn/tree/v1.43.0) 2026-09-23
- `symfony/polyfill-intl-normalizer`: [v1.42.0](https://github.com/symfony/polyfill-intl-normalizer/tree/v1.42.0) 2026-08-07, [v1.43.0](https://github.com/symfony/polyfill-intl-normalizer/tree/v1.43.0) 2026-09-23
- `symfony/polyfill-mbstring`: [v1.43.0](https://github.com/symfony/polyfill-mbstring/tree/v1.43.0) 2026-09-24, [v1.43.3](https://github.com/symfony/polyfill-mbstring/tree/v1.43.3) 2026-10-28
- `symfony/polyfill-php80`: [v1.43.0](https://github.com/symfony/polyfill-php80/tree/v1.43.0) 2026-09-25
- `symfony/polyfill-php83`: [v1.41.0](https://github.com/symfony/polyfill-php83/tree/v1.41.0) 2026-07-01, [v1.43.0](https://github.com/symfony/polyfill-php83/tree/v1.43.0) 2026-09-25
- `symfony/polyfill-php84`: [v1.43.0](https://github.com/symfony/polyfill-php84/tree/v1.43.0) 2026-09-23
- `symfony/polyfill-php85`: [v1.41.0](https://github.com/symfony/polyfill-php85/tree/v1.41.0) 2026-07-01, [v1.43.0](https://github.com/symfony/polyfill-php85/tree/v1.43.0) 2026-09-25
- `symfony/process`: [v7.4.17](https://github.com/symfony/process/tree/v7.4.17) 2026-08-21, [v7.4.18](https://github.com/symfony/process/tree/v7.4.18) 2026-08-21, [v7.4.19](https://github.com/symfony/process/tree/v7.4.19) 2026-09-02, [v7.4.21](https://github.com/symfony/process/tree/v7.4.21) 2026-10-08, [v7.4.22](https://github.com/symfony/process/tree/v7.4.22) 2026-10-25
- `symfony/psr-http-message-bridge`: [v7.4.21](https://github.com/symfony/psr-http-message-bridge/tree/v7.4.21) 2026-10-07
- `symfony/routing`: [v7.4.15](https://github.com/symfony/routing/tree/v7.4.15) 2026-07-21, [v7.4.17](https://github.com/symfony/routing/tree/v7.4.17) 2026-08-17, [v7.4.18](https://github.com/symfony/routing/tree/v7.4.18) 2026-08-17, [v7.4.20](https://github.com/symfony/routing/tree/v7.4.20) 2026-09-28, [v7.4.21](https://github.com/symfony/routing/tree/v7.4.21) 2026-10-11, [v7.4.22](https://github.com/symfony/routing/tree/v7.4.22) 2026-10-26
- `symfony/serializer`: [v7.4.14](https://github.com/symfony/serializer/tree/v7.4.14) 2026-06-27, [v7.4.15](https://github.com/symfony/serializer/tree/v7.4.15) 2026-07-29, [v7.4.16](https://github.com/symfony/serializer/tree/v7.4.16) 2026-08-06, [v7.4.17](https://github.com/symfony/serializer/tree/v7.4.17) 2026-08-22, [v7.4.18](https://github.com/symfony/serializer/tree/v7.4.18) 2026-08-30, [v7.4.19](https://github.com/symfony/serializer/tree/v7.4.19) 2026-09-08, [v7.4.20](https://github.com/symfony/serializer/tree/v7.4.20) 2026-09-28, [v7.4.21](https://github.com/symfony/serializer/tree/v7.4.21) 2026-10-12, [v7.4.22](https://github.com/symfony/serializer/tree/v7.4.22) 2026-10-25
- `symfony/service-contracts`: [v3.7.1](https://github.com/symfony/service-contracts/tree/v3.7.1) 2026-06-16, [v3.7.3](https://github.com/symfony/service-contracts/tree/v3.7.3) 2026-07-27
- `symfony/string`: [v7.4.15](https://github.com/symfony/string/tree/v7.4.15) 2026-07-28, [v7.4.19](https://github.com/symfony/string/tree/v7.4.19) 2026-09-11, [v7.4.21](https://github.com/symfony/string/tree/v7.4.21) 2026-10-03, [v7.4.22](https://github.com/symfony/string/tree/v7.4.22) 2026-10-23, [v8.0.0-BETA1](https://github.com/symfony/string/tree/v8.0.0-BETA1) 2025-09-11, [v8.0.0-RC1](https://github.com/symfony/string/tree/v8.0.0-RC1) 2025-09-11, [v8.0.0](https://github.com/symfony/string/tree/v8.0.0) 2025-09-11, [v8.0.1](https://github.com/symfony/string/tree/v8.0.1) 2025-12-01, [v8.0.4](https://github.com/symfony/string/tree/v8.0.4) 2026-01-12, [v8.0.6](https://github.com/symfony/string/tree/v8.0.6) 2026-02-09, [v8.0.8](https://github.com/symfony/string/tree/v8.0.8) 2026-03-30, [v8.0.11](https://github.com/symfony/string/tree/v8.0.11) 2026-05-13, [v8.0.13](https://github.com/symfony/string/tree/v8.0.13) 2026-05-23, [v8.0.15](https://github.com/symfony/string/tree/v8.0.15) 2026-07-28, [v8.1.0-BETA1](https://github.com/symfony/string/tree/v8.1.0-BETA1) 2026-05-05, [v8.1.0-BETA2](https://github.com/symfony/string/tree/v8.1.0-BETA2) 2026-05-13, [v8.1.0-RC1](https://github.com/symfony/string/tree/v8.1.0-RC1) 2026-05-23, [v8.1.0](https://github.com/symfony/string/tree/v8.1.0) 2026-05-29, [v8.1.2](https://github.com/symfony/string/tree/v8.1.2) 2026-07-28, [v8.1.7](https://github.com/symfony/string/tree/v8.1.7) 2026-09-11, [v8.1.9](https://github.com/symfony/string/tree/v8.1.9) 2026-10-03, [v8.1.10](https://github.com/symfony/string/tree/v8.1.10) 2026-10-23
- `symfony/translation-contracts`: [v3.7.1](https://github.com/symfony/translation-contracts/tree/v3.7.1) 2026-06-05
- `symfony/validator`: [v7.4.14](https://github.com/symfony/validator/tree/v7.4.14) 2026-06-27, [v7.4.15](https://github.com/symfony/validator/tree/v7.4.15) 2026-07-28, [v7.4.16](https://github.com/symfony/validator/tree/v7.4.16) 2026-08-06, [v7.4.17](https://github.com/symfony/validator/tree/v7.4.17) 2026-08-22, [v7.4.18](https://github.com/symfony/validator/tree/v7.4.18) 2026-08-30, [v7.4.19](https://github.com/symfony/validator/tree/v7.4.19) 2026-09-09, [v7.4.20](https://github.com/symfony/validator/tree/v7.4.20) 2026-09-29, [v7.4.21](https://github.com/symfony/validator/tree/v7.4.21) 2026-10-13, [v7.4.22](https://github.com/symfony/validator/tree/v7.4.22) 2026-10-27
- `symfony/var-dumper`: [v7.4.14](https://github.com/symfony/var-dumper/tree/v7.4.14) 2026-06-08, [v7.4.15](https://github.com/symfony/var-dumper/tree/v7.4.15) 2026-07-21, [v7.4.17](https://github.com/symfony/var-dumper/tree/v7.4.17) 2026-08-21, [v7.4.18](https://github.com/symfony/var-dumper/tree/v7.4.18) 2026-08-30, [v7.4.21](https://github.com/symfony/var-dumper/tree/v7.4.21) 2026-10-13, [v7.4.22](https://github.com/symfony/var-dumper/tree/v7.4.22) 2026-10-25
- `symfony/var-exporter`: [v8.1.1](https://github.com/symfony/var-exporter/tree/v8.1.1) 2026-06-27, [v8.1.3](https://github.com/symfony/var-exporter/tree/v8.1.3) 2026-07-29, [v8.1.4](https://github.com/symfony/var-exporter/tree/v8.1.4) 2026-07-30, [v8.1.5](https://github.com/symfony/var-exporter/tree/v8.1.5) 2026-08-13, [v8.1.6](https://github.com/symfony/var-exporter/tree/v8.1.6) 2026-08-29, [v8.1.9](https://github.com/symfony/var-exporter/tree/v8.1.9) 2026-10-07, [v8.1.10](https://github.com/symfony/var-exporter/tree/v8.1.10) 2026-10-22
- `symfony/yaml`: [v7.4.14](https://github.com/symfony/yaml/tree/v7.4.14) 2026-06-08, [v7.4.15](https://github.com/symfony/yaml/tree/v7.4.15) 2026-07-21, [v7.4.17](https://github.com/symfony/yaml/tree/v7.4.17) 2026-08-21, [v7.4.18](https://github.com/symfony/yaml/tree/v7.4.18) 2026-08-30, [v7.4.20](https://github.com/symfony/yaml/tree/v7.4.20) 2026-09-26, [v7.4.21](https://github.com/symfony/yaml/tree/v7.4.21) 2026-10-12, [v7.4.22](https://github.com/symfony/yaml/tree/v7.4.22) 2026-10-18

</details>

<details>
<summary><strong>Contrib Modules — 129 releases</strong></summary>

- `drupal/activenet`: [1.1.0](https://www.drupal.org/project/activenet/releases/1.1.0) 2026-10-08
- `drupal/addtocal_augment`: [1.2.6](https://www.drupal.org/project/addtocal_augment/releases/1.2.6) 2026-06-25
- `drupal/advanced_help_block`: [1.1.0](https://www.drupal.org/project/advanced_help_block/releases/1.1.0) 2026-10-08
- `drupal/better_exposed_filters`: [7.1.3](https://www.drupal.org/project/better_exposed_filters/releases/7.1.3) 2026-07-25, [7.2.0](https://www.drupal.org/project/better_exposed_filters/releases/7.2.0) 2026-10-09
- `drupal/blazy`: [3.0.18](https://www.drupal.org/project/blazy/releases/3.0.18) (security) 2026-08-26, [3.0.19](https://www.drupal.org/project/blazy/releases/3.0.19) 2026-08-26
- `drupal/captcha`: [2.0.11](https://www.drupal.org/project/captcha/releases/2.0.11) (security) 2026-10-28, [2.0.12](https://www.drupal.org/project/captcha/releases/2.0.12) 2026-11-03
- `drupal/ckeditor5_plugin_pack`: [1.5.3](https://www.drupal.org/project/ckeditor5_plugin_pack/releases/1.5.3) 2026-06-03, [1.5.4](https://www.drupal.org/project/ckeditor5_plugin_pack/releases/1.5.4) 2026-07-29, [1.5.5](https://www.drupal.org/project/ckeditor5_plugin_pack/releases/1.5.5) 2026-09-16, [1.5.6](https://www.drupal.org/project/ckeditor5_plugin_pack/releases/1.5.6) 2026-10-14
- `drupal/ckeditor5_premium_features`: [1.8.2](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.2) 2026-06-03, [1.8.3](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.3) 2026-07-29, [1.8.4](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.4) 2026-09-16, [1.8.5](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.5) 2026-09-30, [1.8.6](https://www.drupal.org/project/ckeditor5_premium_features/releases/1.8.6) 2026-10-14
- `drupal/colorapi`: [2.2.0](https://www.drupal.org/project/colorapi/releases/2.2.0) 2026-10-08
- `drupal/confi`: [4.2.0](https://www.drupal.org/project/confi/releases/4.2.0) 2026-08-07, [4.3.0](https://www.drupal.org/project/confi/releases/4.3.0) 2026-10-08
- `drupal/css_editor`: [2.1.0](https://www.drupal.org/project/css_editor/releases/2.1.0) 2026-10-09
- `drupal/ctools`: [4.1.1](https://www.drupal.org/project/ctools/releases/4.1.1) 2026-07-24
- `drupal/custom_formatters`: [4.1.0-beta3](https://www.drupal.org/project/custom_formatters/releases/4.1.0-beta3) 2026-06-07, [4.1.0](https://www.drupal.org/project/custom_formatters/releases/4.1.0) 2026-07-31, [4.2.0](https://www.drupal.org/project/custom_formatters/releases/4.2.0) 2026-10-08, [4.2.1](https://www.drupal.org/project/custom_formatters/releases/4.2.1) (security) 2026-10-20
- `drupal/daterange_compact`: [2.1.2](https://www.drupal.org/project/daterange_compact/releases/2.1.2) 2026-07-25
- `drupal/daxko`: [1.1.0](https://www.drupal.org/project/daxko/releases/1.1.0) 2026-10-09
- `drupal/diff`: [2.0.1](https://www.drupal.org/project/diff/releases/2.0.1) (security) 2026-08-11, [2.1.0](https://www.drupal.org/project/diff/releases/2.1.0) 2026-06-10, [2.1.1](https://www.drupal.org/project/diff/releases/2.1.1) (security) 2026-08-11
- `drupal/draggableviews`: [2.1.5](https://www.drupal.org/project/draggableviews/releases/2.1.5) 2026-10-09
- `drupal/easy_breadcrumb`: [2.0.10](https://www.drupal.org/project/easy_breadcrumb/releases/2.0.10) 2026-08-28, [2.0.11](https://www.drupal.org/project/easy_breadcrumb/releases/2.0.11) (security) 2026-10-06
- `drupal/entity`: [8.x-1.7](https://www.drupal.org/project/entity/releases/8.x-1.7) 2026-08-14, [8.x-1.8](https://www.drupal.org/project/entity/releases/8.x-1.8) (security) 2026-08-26
- `drupal/entity_browser`: [8.x-2.16](https://www.drupal.org/project/entity_browser/releases/8.x-2.16) (security) 2026-08-05, [8.x-2.17](https://www.drupal.org/project/entity_browser/releases/8.x-2.17) 2026-08-11
- `drupal/file_delete`: [3.0.3](https://www.drupal.org/project/file_delete/releases/3.0.3) 2026-06-17
- `drupal/focal_point`: [2.1.3](https://www.drupal.org/project/focal_point/releases/2.1.3) 2026-09-23
- `drupal/fontyourface`: [4.3.0](https://www.drupal.org/project/fontyourface/releases/4.3.0) 2026-10-09, [4.3.1](https://www.drupal.org/project/fontyourface/releases/4.3.1) 2026-10-15
- `drupal/geolocation`: [8.x-3.15](https://www.drupal.org/project/geolocation/releases/8.x-3.15) (security) 2026-06-21
- `drupal/hal`: [2.0.5](https://www.drupal.org/project/hal/releases/2.0.5) 2026-06-29
- `drupal/jquery_ui_touch_punch`: [1.1.2](https://www.drupal.org/project/jquery_ui_touch_punch/releases/1.1.2) 2026-07-31
- `drupal/layout_builder_restrictions`: [3.0.5](https://www.drupal.org/project/layout_builder_restrictions/releases/3.0.5) 2026-07-23, [3.0.6](https://www.drupal.org/project/layout_builder_restrictions/releases/3.0.6) 2026-08-17
- `drupal/layout_builder_save_and_edit`: [1.2.0](https://www.drupal.org/project/layout_builder_save_and_edit/releases/1.2.0) 2026-10-09
- `drupal/libraries`: [4.2.0](https://www.drupal.org/project/libraries/releases/4.2.0) 2026-10-08, [4.2.1](https://www.drupal.org/project/libraries/releases/4.2.1) 2026-10-08
- `drupal/link_attributes`: [2.1.3](https://www.drupal.org/project/link_attributes/releases/2.1.3) 2026-06-20
- `drupal/media_library_form_element`: [2.1.5](https://www.drupal.org/project/media_library_form_element/releases/2.1.5) 2026-08-07
- `drupal/menu_item_extras`: [3.1.1](https://www.drupal.org/project/menu_item_extras/releases/3.1.1) 2026-06-05, [3.1.2](https://www.drupal.org/project/menu_item_extras/releases/3.1.2) 2026-08-02, [3.1.3](https://www.drupal.org/project/menu_item_extras/releases/3.1.3) 2026-09-28, [3.2.0](https://www.drupal.org/project/menu_item_extras/releases/3.2.0) 2026-10-08
- `drupal/metatag`: [2.2.1](https://www.drupal.org/project/metatag/releases/2.2.1) 2026-10-24, [2.2.2](https://www.drupal.org/project/metatag/releases/2.2.2) 2026-10-27, [2.2.3](https://www.drupal.org/project/metatag/releases/2.2.3) 2026-10-27, [2.2.4](https://www.drupal.org/project/metatag/releases/2.2.4) 2026-10-29, [2.2.5](https://www.drupal.org/project/metatag/releases/2.2.5) 2026-10-31
- `drupal/migrate_plus`: [6.0.11](https://www.drupal.org/project/migrate_plus/releases/6.0.11) 2026-11-02
- `drupal/migrate_tools`: [6.1.5](https://www.drupal.org/project/migrate_tools/releases/6.1.5) 2026-11-02
- `drupal/paragraphs`: [8.x-1.21](https://www.drupal.org/project/paragraphs/releases/8.x-1.21) (security) 2026-06-24, [8.x-1.22](https://www.drupal.org/project/paragraphs/releases/8.x-1.22) 2026-08-02, [8.x-1.23](https://www.drupal.org/project/paragraphs/releases/8.x-1.23) 2026-08-05
- `drupal/personify`: [1.1.0](https://www.drupal.org/project/personify/releases/1.1.0) 2026-10-09
- `drupal/program_search`: [2.1.0](https://www.drupal.org/project/program_search/releases/2.1.0) 2026-10-08, [2.1.1](https://www.drupal.org/project/program_search/releases/2.1.1) 2026-10-15
- `drupal/protected_pages`: [8.x-2.0](https://www.drupal.org/project/protected_pages/releases/8.x-2.0) 2026-07-17, [3.0.0](https://www.drupal.org/project/protected_pages/releases/3.0.0) 2026-07-17
- `drupal/rabbit_hole`: [8.x-1.3](https://www.drupal.org/project/rabbit_hole/releases/8.x-1.3) (security) 2026-10-21
- `drupal/recaptcha`: [8.x-3.5](https://www.drupal.org/project/recaptcha/releases/8.x-3.5) 2026-08-10
- `drupal/search_api`: [8.x-1.41](https://www.drupal.org/project/search_api/releases/8.x-1.41) 2026-06-08, [8.x-1.42](https://www.drupal.org/project/search_api/releases/8.x-1.42) 2026-10-11, [8.x-1.43](https://www.drupal.org/project/search_api/releases/8.x-1.43) 2026-10-28
- `drupal/search_api_solr`: [4.3.11](https://www.drupal.org/project/search_api_solr/releases/4.3.11) 2026-07-17, [4.3.12](https://www.drupal.org/project/search_api_solr/releases/4.3.12) 2026-07-18, [4.3.13](https://www.drupal.org/project/search_api_solr/releases/4.3.13) 2026-07-18, [4.3.14](https://www.drupal.org/project/search_api_solr/releases/4.3.14) 2026-08-11, [4.4.0](https://www.drupal.org/project/search_api_solr/releases/4.4.0) 2026-07-28
- `drupal/seven`: [2.0.0-beta8](https://www.drupal.org/project/seven/releases/2.0.0-beta8) 2026-07-23
- `drupal/simple_menu_icons`: [3.2.0](https://www.drupal.org/project/simple_menu_icons/releases/3.2.0) 2026-10-08
- `drupal/slick`: [3.0.8](https://www.drupal.org/project/slick/releases/3.0.8) 2026-08-26
- `drupal/smart_date`: [4.2.6](https://www.drupal.org/project/smart_date/releases/4.2.6) 2026-06-17, [4.2.7](https://www.drupal.org/project/smart_date/releases/4.2.7) 2026-06-19, [4.2.8](https://www.drupal.org/project/smart_date/releases/4.2.8) 2026-06-19, [4.3.0-beta1](https://www.drupal.org/project/smart_date/releases/4.3.0-beta1) 2026-06-30, [4.3.0-rc1](https://www.drupal.org/project/smart_date/releases/4.3.0-rc1) 2026-07-03, [4.3.0](https://www.drupal.org/project/smart_date/releases/4.3.0) 2026-07-12
- `drupal/social_feed_fetcher`: [3.2.0](https://www.drupal.org/project/social_feed_fetcher/releases/3.2.0) 2026-10-08, [3.2.1](https://www.drupal.org/project/social_feed_fetcher/releases/3.2.1) 2026-10-15
- `drupal/stage_file_proxy`: [3.1.7](https://www.drupal.org/project/stage_file_proxy/releases/3.1.7) (security) 2026-10-28
- `drupal/svg_image`: [3.2.3](https://www.drupal.org/project/svg_image/releases/3.2.3) 2026-06-20, [3.2.4](https://www.drupal.org/project/svg_image/releases/3.2.4) 2026-07-02, [3.2.5](https://www.drupal.org/project/svg_image/releases/3.2.5) 2026-10-09
- `drupal/token`: [8.x-1.18](https://www.drupal.org/project/token/releases/8.x-1.18) 2026-10-30
- `drupal/trash`: [3.0.28](https://www.drupal.org/project/trash/releases/3.0.28) 2026-06-05, [3.0.29](https://www.drupal.org/project/trash/releases/3.0.29) 2026-07-02, [3.0.30](https://www.drupal.org/project/trash/releases/3.0.30) 2026-07-16, [3.0.31](https://www.drupal.org/project/trash/releases/3.0.31) 2026-08-03, [3.0.32](https://www.drupal.org/project/trash/releases/3.0.32) 2026-08-06, [3.0.33](https://www.drupal.org/project/trash/releases/3.0.33) 2026-08-28, [3.0.34](https://www.drupal.org/project/trash/releases/3.0.34) 2026-09-18, [3.0.35](https://www.drupal.org/project/trash/releases/3.0.35) 2026-10-13, [3.0.36](https://www.drupal.org/project/trash/releases/3.0.36) 2026-10-24, [3.1.0-beta1](https://www.drupal.org/project/trash/releases/3.1.0-beta1) 2026-07-16, [3.1.0-beta2](https://www.drupal.org/project/trash/releases/3.1.0-beta2) 2026-07-28, [3.1.0-beta3](https://www.drupal.org/project/trash/releases/3.1.0-beta3) 2026-08-06, [3.1.0-rc1](https://www.drupal.org/project/trash/releases/3.1.0-rc1) 2026-08-28, [3.1.0](https://www.drupal.org/project/trash/releases/3.1.0) 2026-09-18, [3.1.1](https://www.drupal.org/project/trash/releases/3.1.1) 2026-10-13, [3.1.2](https://www.drupal.org/project/trash/releases/3.1.2) 2026-10-24
- `drupal/tzfield`: [8.x-1.14](https://www.drupal.org/project/tzfield/releases/8.x-1.14) 2026-08-14
- `drupal/upgrade_tool`: [4.2.0](https://www.drupal.org/project/upgrade_tool/releases/4.2.0) 2026-08-07, [4.3.0](https://www.drupal.org/project/upgrade_tool/releases/4.3.0) 2026-10-08
- `drupal/vendor_stream_wrapper`: [2.1.0](https://www.drupal.org/project/vendor_stream_wrapper/releases/2.1.0) 2026-10-09
- `drupal/verf`: [2.2.0](https://www.drupal.org/project/verf/releases/2.2.0) 2026-10-08
- `drupal/video`: [3.2.0](https://www.drupal.org/project/video/releases/3.2.0) 2026-10-08
- `drupal/video_embed_field`: [3.1.1](https://www.drupal.org/project/video_embed_field/releases/3.1.1) 2026-09-30
- `drupal/views_block_filter_block`: [2.2.0](https://www.drupal.org/project/views_block_filter_block/releases/2.2.0) 2026-10-09
- `drupal/views_field_formatter`: [4.2.0](https://www.drupal.org/project/views_field_formatter/releases/4.2.0) 2026-10-09
- `drupal/webform`: [6.3.0-rc1](https://www.drupal.org/project/webform/releases/6.3.0-rc1) 2026-06-04, [6.3.0-rc2](https://www.drupal.org/project/webform/releases/6.3.0-rc2) 2026-06-22, [6.3.0](https://www.drupal.org/project/webform/releases/6.3.0) 2026-07-07, [6.3.1](https://www.drupal.org/project/webform/releases/6.3.1) (security) 2026-09-23
- `drupal/ymca_sync`: [11.1.1](https://www.drupal.org/project/ymca_sync/releases/11.1.1) 2026-10-09, [11.1.2](https://www.drupal.org/project/ymca_sync/releases/11.1.2) 2026-11-02

</details>

<details>
<summary><strong>Libraries — 88 releases</strong></summary>

- `commerceguys/addressing`: [v2.3.0](https://github.com/commerceguys/addressing/tree/v2.3.0) 2026-08-23, [v2.3.1](https://github.com/commerceguys/addressing/tree/v2.3.1) 2026-08-23, [v2.3.2](https://github.com/commerceguys/addressing/tree/v2.3.2) 2026-10-09
- `consolidation/site-process`: [6.0.0](https://github.com/consolidation/site-process/tree/6.0.0) 2025-11-14, [6.0.1](https://github.com/consolidation/site-process/tree/6.0.1) 2026-03-28, [6.1.0](https://github.com/consolidation/site-process/tree/6.1.0) 2026-06-07
- `doctrine/lexer`: [3.0.2](https://github.com/doctrine/lexer/tree/3.0.2) 2026-06-14, [3.0.3](https://github.com/doctrine/lexer/tree/3.0.3) 2026-10-01
- `enshrined/svg-sanitize`: [1.0.0](https://github.com/darylldoyle/svg-sanitizer/tree/1.0.0) 2026-09-01, [1.1.0](https://github.com/darylldoyle/svg-sanitizer/tree/1.1.0) 2026-10-19, [1.1.1](https://github.com/darylldoyle/svg-sanitizer/tree/1.1.1) 2026-10-20
- `ezyang/htmlpurifier`: [v4.19.1](https://github.com/ezyang/htmlpurifier/tree/v4.19.1) 2026-09-15
- `google/recaptcha`: [1.5.1](https://github.com/google/recaptcha/tree/1.5.1) 2026-09-22, [1.5.2](https://github.com/google/recaptcha/tree/1.5.2) 2026-09-22
- `guzzlehttp/guzzle`: [7.12.2](https://github.com/guzzle/guzzle/tree/7.12.2) 2026-06-23, [7.12.3](https://github.com/guzzle/guzzle/tree/7.12.3) 2026-06-23, [7.13.0](https://github.com/guzzle/guzzle/tree/7.13.0) 2026-06-29, [7.13.1](https://github.com/guzzle/guzzle/tree/7.13.1) 2026-06-29, [7.13.2](https://github.com/guzzle/guzzle/tree/7.13.2) 2026-07-05, [7.13.3](https://github.com/guzzle/guzzle/tree/7.13.3) 2026-07-08, [7.14.0](https://github.com/guzzle/guzzle/tree/7.14.0) 2026-07-08, [7.14.1](https://github.com/guzzle/guzzle/tree/7.14.1) 2026-07-13, [7.14.2](https://github.com/guzzle/guzzle/tree/7.14.2) 2026-07-14, [7.15.0](https://github.com/guzzle/guzzle/tree/7.15.0) 2026-07-17, [7.15.1](https://github.com/guzzle/guzzle/tree/7.15.1) 2026-07-18, [7.15.2](https://github.com/guzzle/guzzle/tree/7.15.2) 2026-07-26, [7.15.3](https://github.com/guzzle/guzzle/tree/7.15.3) 2026-08-05, [7.15.4](https://github.com/guzzle/guzzle/tree/7.15.4) 2026-08-24, [7.15.5](https://github.com/guzzle/guzzle/tree/7.15.5) 2026-08-24, [7.15.6](https://github.com/guzzle/guzzle/tree/7.15.6) 2026-10-18, [7.16.0](https://github.com/guzzle/guzzle/tree/7.16.0) 2026-10-18, [7.16.1](https://github.com/guzzle/guzzle/tree/7.16.1) 2026-10-25
- `guzzlehttp/promises`: [2.5.1](https://github.com/guzzle/promises/tree/2.5.1) 2026-07-08, [2.5.2](https://github.com/guzzle/promises/tree/2.5.2) 2026-08-05, [2.5.3](https://github.com/guzzle/promises/tree/2.5.3) 2026-08-24, [2.6.0](https://github.com/guzzle/promises/tree/2.6.0) 2026-10-18
- `guzzlehttp/psr7`: [2.12.2](https://github.com/guzzle/psr7/tree/2.12.2) 2026-06-23, [2.12.3](https://github.com/guzzle/psr7/tree/2.12.3) 2026-06-23, [2.12.4](https://github.com/guzzle/psr7/tree/2.12.4) 2026-07-08, [2.12.5](https://github.com/guzzle/psr7/tree/2.12.5) 2026-07-13, [2.13.0](https://github.com/guzzle/psr7/tree/2.13.0) 2026-07-16, [2.13.1](https://github.com/guzzle/psr7/tree/2.13.1) 2026-08-24, [2.13.2](https://github.com/guzzle/psr7/tree/2.13.2) 2026-10-17
- `laravel/prompts`: [v0.3.19](https://github.com/laravel/prompts/tree/v0.3.19) 2026-06-23, [v0.3.20](https://github.com/laravel/prompts/tree/v0.3.20) 2026-06-24, [v0.3.21](https://github.com/laravel/prompts/tree/v0.3.21) 2026-06-26, [v0.3.22](https://github.com/laravel/prompts/tree/v0.3.22) 2026-08-04, [v0.3.23](https://github.com/laravel/prompts/tree/v0.3.23) 2026-08-11, [v0.3.24](https://github.com/laravel/prompts/tree/v0.3.24) 2026-08-20, [v0.3.25](https://github.com/laravel/prompts/tree/v0.3.25) 2026-10-06, [v0.3.26](https://github.com/laravel/prompts/tree/v0.3.26) 2026-10-09
- `league/csv`: [9.29.0](https://github.com/thephpleague/csv/tree/9.29.0) 2026-10-28
- `league/oauth2-client`: [2.9.1](https://github.com/thephpleague/oauth2-client/tree/2.9.1) 2026-09-16
- `masterminds/html5`: [2.10.1](https://github.com/Masterminds/html5-php/tree/2.10.1) 2026-06-23, [2.11.0](https://github.com/Masterminds/html5-php/tree/2.11.0) 2026-08-18, [2.12.0](https://github.com/Masterminds/html5-php/tree/2.12.0) 2026-10-25
- `mck89/peast`: [v1.17.7](https://github.com/mck89/peast/tree/v1.17.7) 2026-07-21, [v1.18.0](https://github.com/mck89/peast/tree/v1.18.0) 2026-08-19, [v1.18.1](https://github.com/mck89/peast/tree/v1.18.1) 2026-09-15
- `myclabs/deep-copy`: [1.14.0](https://github.com/myclabs/DeepCopy/tree/1.14.0) 2026-08-11
- `nikic/php-parser`: [v5.8.0](https://github.com/nikic/PHP-Parser/tree/v5.8.0) 2026-07-04, [v5.9.0](https://github.com/nikic/PHP-Parser/tree/v5.9.0) 2026-09-13
- `pear/archive_tar`: [1.6.1](https://github.com/pear/Archive_Tar/tree/1.6.1) 2026-08-19
- `php-tuf/composer-stager`: [v2.1.1](https://github.com/php-tuf/composer-stager/tree/v2.1.1) 2026-07-07
- `phpstan/phpdoc-parser`: [2.3.3](https://github.com/phpstan/phpdoc-parser/tree/2.3.3) 2026-07-08, [2.3.4](https://github.com/phpstan/phpdoc-parser/tree/2.3.4) 2026-08-30, [2.3.5](https://github.com/phpstan/phpdoc-parser/tree/2.3.5) 2026-08-31, [2.3.6](https://github.com/phpstan/phpdoc-parser/tree/2.3.6) 2026-09-27, [2.3.7](https://github.com/phpstan/phpdoc-parser/tree/2.3.7) 2026-10-26, [2.3.8](https://github.com/phpstan/phpdoc-parser/tree/2.3.8) 2026-10-26, [2.3.9](https://github.com/phpstan/phpdoc-parser/tree/2.3.9) 2026-10-27, [2.3.10](https://github.com/phpstan/phpdoc-parser/tree/2.3.10) 2026-10-28, [2.3.11](https://github.com/phpstan/phpdoc-parser/tree/2.3.11) 2026-10-28, [2.3.12](https://github.com/phpstan/phpdoc-parser/tree/2.3.12) 2026-10-28, [2.4.0](https://github.com/phpstan/phpdoc-parser/tree/2.4.0) 2026-10-28, [2.4.1](https://github.com/phpstan/phpdoc-parser/tree/2.4.1) 2026-10-30
- `psy/psysh`: [v0.12.24](https://github.com/bobthecow/psysh/tree/v0.12.24) 2026-06-29
- `sebastian/diff`: [7.0.1](https://github.com/sebastianbergmann/diff/tree/7.0.1) 2026-08-25
- `setasign/fpdi`: [v2.6.8](https://github.com/Setasign/FPDI/tree/v2.6.8) 2026-06-11, [v2.6.9](https://github.com/Setasign/FPDI/tree/v2.6.9) 2026-10-13
- `solarium/solarium`: [6.4.2](https://github.com/solariumphp/solarium/tree/6.4.2) 2026-07-17, [7.0.0-alpha.1](https://github.com/solariumphp/solarium/tree/7.0.0-alpha.1) 2025-10-18, [7.0.0-alpha.2](https://github.com/solariumphp/solarium/tree/7.0.0-alpha.2) 2026-01-06, [7.0.0](https://github.com/solariumphp/solarium/tree/7.0.0) 2026-04-27
- `squizlabs/php_codesniffer`: [3.13.6](https://github.com/PHPCSStandards/PHP_CodeSniffer/tree/3.13.6) 2026-08-06
- `twig/twig`: [v3.28.0](https://github.com/twigphp/Twig/tree/v3.28.0) 2026-07-03, [v3.29.0](https://github.com/twigphp/Twig/tree/v3.29.0) 2026-09-18, [v3.30.0](https://github.com/twigphp/Twig/tree/v3.30.0) 2026-09-25

</details>

No release data: `drupal/ctools_views` (metapackage: releases of drupal/ctools); `drupal/link_attributes_menu_link_content` (metapackage: releases of drupal/link_attributes)

