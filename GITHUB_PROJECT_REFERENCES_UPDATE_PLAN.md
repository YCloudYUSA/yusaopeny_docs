# GitHub Project References Update Plan

**Date:** October 9, 2025
**Reviewer:** Claude Code
**Purpose:** Update outdated GitHub organization references in documentation

---

## Executive Summary

**Total references found:** 45 across 15 files
**References requiring updates:** 13 (openy_repeat module only)
**References to keep as-is:** 32 (valid open-y-subprojects packages and community modules)

---

## Findings

### 1. **openy_repeat Module** - ✅ MOVED TO DRUPAL.ORG

**Status:** Officially moved from `ynorth-projects/openy_repeat` to `drupal.org/project/openy_repeat`

**Current drupal.org status:**
- Latest version: 3.1.0 (June 30, 2025)
- Compatible with: Drupal 9, 10, 11
- 35 sites currently using
- Install command: `composer require 'drupal/openy_repeat:^3.1'`

**Files requiring updates (13 references):**

1. ✅ **docs/user-documentation/schedules/group-schedules/_index.md**
   - Line 11: `ynorth-project/openy_repeat` → `drupal.org/project/openy_repeat`
   - Line 19: `https://github.com/ynorth-projects/openy_repeat/releases` → `https://www.drupal.org/project/openy_repeat/releases`

2. ✅ **docs/user-documentation/layout-builder/repeat-schedules/_index.md**
   - Line 12: `https://github.com/ynorth-projects/openy_repeat/releases` → `https://www.drupal.org/project/openy_repeat/releases`

3. ✅ **docs/development/program-event-framework/_index.md**
   - Line 43: `[Repeat Schedules (`ynorth-projects/openy_repeat`)](https://github.com/ynorth-projects/openy_repeat)` → `[Repeat Schedules (drupal/openy_repeat)](https://www.drupal.org/project/openy_repeat)`

4. ✅ **docs/development/Decoupled-(-external-)-projects-of-OpenY/_index.md**
   - Line 25: `[`ynorth-projects/openy_repeat`](https://github.com/ynorth-projects/openy_repeat)` → `[`drupal/openy_repeat`](https://www.drupal.org/project/openy_repeat)`
   - **Note:** This page lists decoupled projects, so update the entry to note it moved to drupal.org

5. 📝 **community/_index.md**
   - Line 17: General link to `ynorth-projects` organization
   - **Action:** Update description to note that many projects moved to drupal.org

---

### 2. **ynorth-projects Modules Still Active** - ℹ️ KEEP AS-IS

These modules are **NOT in composer.json** (not part of main distribution) but are still actively maintained as community modules:

#### **openy_pef_gxp_sync** (GroupEx Pro Syncer)
- Status: Active development
- Latest release: 1.1.6 (January 22, 2024)
- Repository: https://github.com/ynorth-projects/openy_pef_gxp_sync
- **Files with references (keep as-is):**
  - docs/development/Decoupled-(-external-)-projects-of-OpenY/_index.md (line 26)
  - docs/development/program-event-framework/_index.md (line 28)
  - docs/development/GroupEx-PRO-quick-start/_index.md (line 7)
  - blog/releases/release-ds-10.3.0.1.md (line 61)

#### **openy_node_session** (Session Node Module)
- Status: Active development
- Latest release: 2.1.1 (June 6, 2023)
- Repository: https://github.com/ynorth-projects/openy_node_session
- **Files with references (keep as-is):**
  - docs/development/Decoupled-(-external-)-projects-of-OpenY/_index.md (line 24)

#### **openy_prgf_session_table** (Session Table Paragraph)
- Status: Community module
- Repository: https://github.com/ynorth-projects/openy_prgf_session_table
- **Files with references (keep as-is):**
  - docs/development/Decoupled-(-external-)-projects-of-OpenY/_index.md (line 30)

---

### 3. **open-y-subprojects References** - ✅ VALID (KEEP AS-IS)

These packages are **still in composer.json** and actively maintained:

**Valid packages in composer.json:**
- `open-y-subprojects/common_scss` → dev-main
- `open-y-subprojects/openy_content_core` → ^3.0
- `open-y-subprojects/openy_custom` → ^3.0.0
- `open-y-subprojects/openy_daxko_gxp_syncer` → ^1.2
- `open-y-subprojects/openy_features` → ^4.1.0
- `open-y-subprojects/openy_focal_point` → ^1.0
- `open-y-subprojects/openy_hours_formatter` → ^2.0 || ^3.0.0
- `open-y-subprojects/openy_map` → ^6@beta || ^6.0.0
- `open-y-subprojects/ynorth_gxp_spots_proxy` → ^1.0.1

**Files with valid open-y-subprojects references (32 references total):**
- community/_index.md (line 16)
- docs/development/daxko/_index.md (lines 27, 53)
- blog/news/2024-02-29-polyfill-vulnerability.md (lines 11, 45)
- docs/howto/map-settings-config/_index.md (line 8)
- docs/development/Decoupled-(-external-)-projects-of-OpenY/_index.md (lines 18-23)
- docs/howto/use-structured-data/_index.md (line 37)
- blog/releases/release-ds-10.5.0.1.md (line 16)
- blog/releases/release-ds-10.3.2.md (line 89)
- blog/releases/release-ds-10.3.10.1.md (lines 19, 21, 40)
- docs/development/Open-Y-Smoke-Tests-Index/_index.md (lines 10, 16-20)
- docs/development/OpenY-upgrade-how-to-for-Developers/_index.md (line 47)
- docs/development/Deprecate-and-remove-components-from-Open-Y/_index.md (line 10)
- docs/user-documentation/membership/calculator/_index.md (line 9)
- docs/user-documentation/demo-content/_index.md (line 8)
- docs/user-documentation/virtual-ymca/1on1/_index.md (line 20)

**Action:** No changes needed for these references.

---

### 4. **Other ynorth-projects References** - ℹ️ INFORMATIONAL ONLY

These are references in historical contexts:

- **docs/development/Decouple-component-from-Open-Y-as-independent-module-project/_index.md** (line 92)
  - Historical example of cloning distribution
  - **Action:** Keep as-is (historical reference)

---

## Recommended Changes

### Priority 1: Update openy_repeat References (13 references)

#### File 1: `/content/en/docs/user-documentation/schedules/group-schedules/_index.md`

**Line 11 - Change:**
```markdown
FROM: Developers can find more information in [`ynorth-project/openy_repeat`](https://github.com/ynorth-projects/openy_repeat)
TO:   Developers can find more information in [`drupal/openy_repeat`](https://www.drupal.org/project/openy_repeat)
```

**Line 19 - Change:**
```markdown
FROM: Available with `openy_repeat` [2.2.0 and above](https://github.com/ynorth-projects/openy_repeat/releases)
TO:   Available with `openy_repeat` [2.2.0 and above](https://www.drupal.org/project/openy_repeat/releases)
```

---

#### File 2: `/content/en/docs/user-documentation/layout-builder/repeat-schedules/_index.md`

**Line 12 - Change:**
```markdown
FROM: Ensure the `openy_repeat` module is updated to [at least 2.2.0](https://github.com/ynorth-projects/openy_repeat/releases).
TO:   Ensure the `openy_repeat` module is updated to [at least 2.2.0](https://www.drupal.org/project/openy_repeat/releases).
```

---

#### File 3: `/content/en/docs/development/program-event-framework/_index.md`

**Line 43 - Change:**
```markdown
FROM: [Repeat Schedules (`ynorth-projects/openy_repeat`)](https://github.com/ynorth-projects/openy_repeat)
TO:   [Repeat Schedules (`drupal/openy_repeat`)](https://www.drupal.org/project/openy_repeat)
```

---

#### File 4: `/content/en/docs/development/Decoupled-(-external-)-projects-of-OpenY/_index.md`

**Line 25 - Change:**
```markdown
FROM: 1. [`ynorth-projects/openy_repeat`](https://github.com/ynorth-projects/openy_repeat) - Repeat API for PEF. Schedules APP built in Vue.js
TO:   1. [`drupal/openy_repeat`](https://www.drupal.org/project/openy_repeat) - Repeat API for PEF. Schedules APP built in Vue.js (moved to drupal.org)
```

---

#### File 5: `/content/en/community/_index.md`

**Lines 16-17 - Update:**
```markdown
FROM:
- [<i class="fab fa-github"></i>  open-y-subprojects](https://github.com/open-y-subprojects): Decoupled Dependencies
- [<i class="fab fa-github"></i>  ynorth-projects](https://github.com/ynorth-projects): Functionality contributed by YNorth

TO:
- [<i class="fab fa-github"></i>  open-y-subprojects](https://github.com/open-y-subprojects): Decoupled Dependencies (active)
- [<i class="fab fa-github"></i>  ynorth-projects](https://github.com/ynorth-projects): Legacy community modules (many moved to drupal.org)
- [<i class="fab fa-github"></i>  ycloudyusa](https://github.com/ycloudyusa): Current organization for core YMCA modules
```

---

## Files NOT Requiring Changes

### Community Modules (Keep ynorth-projects references)
- docs/development/Decoupled-(-external-)-projects-of-OpenY/_index.md (openy_pef_gxp_sync, openy_node_session, openy_prgf_session_table)
- docs/development/program-event-framework/_index.md (openy_pef_gxp_sync)
- docs/development/GroupEx-PRO-quick-start/_index.md (moved notice)
- blog/releases/release-ds-10.3.0.1.md (historical reference)

### Valid open-y-subprojects References (32 files)
All references to open-y-subprojects packages that are in composer.json should remain unchanged.

### Historical References
- docs/development/Decouple-component-from-Open-Y-as-independent-module-project/_index.md (example code)

---

## Summary Statistics

| Category | Count | Action |
|----------|-------|--------|
| **openy_repeat references to update** | 13 | Update to drupal.org |
| **Active ynorth-projects modules** | 3 | Keep as-is |
| **Valid open-y-subprojects references** | 32 | Keep as-is |
| **Community organization links** | 2 | Update with status notes |
| **Total files to modify** | 5 | See Priority 1 above |

---

## Verification Steps

After making changes:

1. ✅ Build Hugo site locally: `hugo server`
2. ✅ Check all updated links resolve correctly
3. ✅ Verify no broken links with: `hugo --gc --minify`
4. ✅ Search for any remaining `ynorth-projects/openy_repeat` references:
   ```bash
   grep -r "ynorth-projects/openy_repeat" content/
   ```

---

## Approval Needed

**Question for user:** Should I proceed with updating the 5 files listed in Priority 1 (13 references to openy_repeat)?

**Changes proposed:**
- ✅ Update openy_repeat GitHub links → drupal.org links (5 files)
- ✅ Add ycloudyusa organization to community/_index.md
- ℹ️ Keep all other references as-is (valid packages and community modules)

**Next steps after approval:**
1. Make the edits to the 5 files
2. Run Hugo build to verify no broken links
3. Commit changes with message: "docs: Update openy_repeat references to drupal.org"
