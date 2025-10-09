# Release Notes Documentation Update Plan

**Date:** October 9, 2025
**Analyzed Releases:** 11.1.0.0-beta1, 11.1.0.0-alpha3, 11.1.0.0-alpha2, 11.0.0.0-alpha1, 10.5.0.1, 10.4.0.0, 10.3.10.2, 10.3.10.1
**Purpose:** Identify documentation gaps based on recent YMCA Website Services releases

---

## Executive Summary

**Total documentation updates needed:** 37 across 12 documentation areas
**Priority breakdown:**
- 🔴 **Critical (8):** Drupal 11 upgrade, PHP 8.3, removed modules, breaking changes
- 🟡 **High (15):** New features, module migrations, workflow changes
- 🟢 **Medium (14):** Bug fixes, performance improvements, UI enhancements

---

## 🔴 Priority 1: Critical Infrastructure Changes

### 1.1 Drupal 11 Upgrade Documentation

**Source:** 11.1.0.0-beta1, 11.0.0.0-alpha1

**Required updates:**

#### Server Requirements Page
**File:** `content/en/docs/development/Server Requirements/_index.md`

**Changes needed:**
- ✅ Update minimum PHP version: **8.1 → 8.3+** (ALREADY DONE in earlier work)
- ❌ **Add Symfony 7 requirement**
- ❌ **Document removed core modules:**
  - `ckeditor` (replaced by CKEditor 5)
  - `inline_entity_menu_form`
  - `bartik` theme (removed)
  - `seven` theme (removed)
  - `panelbutton`

**New section needed:**
```markdown
### Drupal 11 Specific Requirements

- **PHP:** 8.3 or higher (PHP 8.2 minimum, 8.3+ recommended)
- **Symfony:** 7.x (automatically managed by Composer)
- **jQuery:** 3.x with jquery-migrate for legacy script support
- **Composer:** Required for all module management (module upload UI removed)

### Removed in Drupal 11

The following Drupal 10 features are no longer available:

- **CKEditor 4** - Replaced by CKEditor 5 (automatic migration available)
- **Bartik theme** - Use Carnation theme instead
- **Seven admin theme** - Use Claro (default Drupal 11 admin theme)
- **Module/theme upload UI** - Use Composer exclusively
```

#### Upgrade Guide
**File:** `content/en/docs/development/OpenY-upgrade-how-to-for-Developers/_index.md`

**New section needed:**
```markdown
## Drupal 10 → 11 Upgrade Path

### Prerequisites

Before upgrading to Drupal 11:

1. Ensure your site is on Drupal 10.3.x or higher
2. Update PHP to 8.3 or higher
3. Verify all modules are Drupal 11 compatible
4. Update YMCA Website Services to 11.1.0.0-beta1 or higher

### Step-by-Step Upgrade

1. **Update composer.json Drupal core constraint:**
   ```bash
   composer require 'drupal/core-recommended:^11' 'drupal/core-composer-scaffold:^11' --update-with-all-dependencies
   ```

2. **Run database updates:**
   ```bash
   drush updatedb -y
   drush cr
   ```

3. **Update YMCA Website Services:**
   ```bash
   composer require 'ycloudyusa/yusaopeny:^11.1'
   ```

4. **Verify configuration:**
   - Check CKEditor 5 migration: `/admin/config/content/formats`
   - Verify theme compatibility: `/admin/appearance`
   - Test all custom modules

### Known Issues

- **CKEditor font module removed** - Font family selection moved to CKEditor 5 Style plugin
- **Bartik/Seven themes removed** - Migrate to Carnation theme before upgrade
- **Module upload UI removed** - Must use Composer for all module installations

### Rollback Plan

If issues occur, rollback to Drupal 10:

```bash
composer require 'drupal/core-recommended:^10.3' --update-with-all-dependencies
drush updatedb -y
drush cr
```
```

---

### 1.2 New Drupal 11 Features Documentation

**Source:** 11.1.0.0-beta1

**Required updates:**

#### Create New Page: Single Directory Components (SDC)
**File:** `content/en/docs/development/single-directory-components/_index.md` **(NEW FILE)**

**Content outline:**
```markdown
---
title: Single Directory Components (SDC)
description: Modern Drupal 11 component architecture for themes and modules.
tags:
  - "Drupal 11"
  - "Components"
  - "Theming"
---

## Overview

Single Directory Components (SDC) is a new Drupal 11 feature that co-locates all component files in one directory.

### Benefits

- Organized component structure
- Better reusability
- Improved maintainability
- Native Twig integration

### Component Structure

```
my_component/
  ├── my_component.component.yml
  ├── my_component.twig
  ├── my_component.css
  └── my_component.js
```

### Using SDC in YMCA Website Services

Carnation theme (3.2.0+) supports Single Directory Components...

[Continue with examples and migration guide from Paragraphs]
```

#### Create New Page: Object-Oriented Hooks
**File:** `content/en/docs/development/object-oriented-hooks/_index.md` **(NEW FILE)**

**Content outline:**
```markdown
---
title: Object-Oriented Hooks in Drupal 11
description: Transition from procedural to class-based hooks in custom modules.
---

## Overview

Drupal 11 introduces class-based hooks to replace traditional procedural hooks.

### Old Way (Drupal 10)

```php
function mymodule_node_insert($node) {
  // Hook implementation
}
```

### New Way (Drupal 11)

```php
namespace Drupal\mymodule\Hook;

use Drupal\Core\Hook\Attribute\Hook;
use Drupal\node\NodeInterface;

class NodeHooks {
  #[Hook('node_insert')]
  public function nodeInsert(NodeInterface $node): void {
    // Hook implementation
  }
}
```

[Continue with more examples and migration guide]
```

---

### 1.3 Removed/Deprecated Features

**Source:** 10.4.0.0, 11.1.0.0-beta1

**Required updates:**

#### Glossary Page Update
**File:** `content/en/docs/glossary/_index.md`

**Add deprecation entries:**
```markdown
## Deprecated Themes

### Lily Theme
- **Status:** Removed in Drupal 11
- **Replacement:** Carnation theme
- **Last supported version:** Drupal 10.x
- **Migration:** See [Theme Migration Guide](../development/theme-migration)

### Rose Theme
- **Status:** Removed in Drupal 11
- **Replacement:** Carnation theme
- **Last supported version:** Drupal 10.x

### Bartik Theme (Drupal Core)
- **Status:** Removed in Drupal 11
- **Replacement:** Carnation theme (for YMCA sites)
- **Migration:** Required before Drupal 11 upgrade

### Seven Admin Theme (Drupal Core)
- **Status:** Removed in Drupal 11
- **Replacement:** Claro (default Drupal 11 admin theme)
- **Migration:** Automatic on Drupal 11 upgrade

## Deprecated Modules

### CKEditor 4
- **Status:** Removed in Drupal 11
- **Replacement:** CKEditor 5
- **Migration:** Automatic migration available via Drupal core

### ckeditor5_font
- **Status:** Removed in Drupal 11
- **Replacement:** CKEditor 5 Style plugin
- **Impact:** Font family selection workflow changed
```

---

## 🟡 Priority 2: New Features & Module Changes

### 2.1 Module Migrations to Drupal.org

**Source:** 10.4.0.0

**Status:** ✅ **ALREADY COMPLETED** (in earlier work today)

The following module references were updated:
- ✅ `openy_repeat` → `drupal/openy_repeat`
- ✅ Community organization list updated with ycloudyusa

**Remaining:** Verify all documentation references to migrated modules use drupal.org URLs

---

### 2.2 Domain Access Module

**Source:** 10.4.0.0

**Required updates:**

#### Create New Page: Domain Access Configuration
**File:** `content/en/docs/howto/configure-domain-access/_index.md` **(NEW FILE)**

**Content outline:**
```markdown
---
title: Domain Access Configuration
description: Configure multi-domain support for YMCA Website Services.
tags:
  - "Multi-site"
  - "Domain Access"
---

## Overview

As of version 10.4.0.0, YMCA Website Services includes Domain Access module support for multi-domain installations.

### Use Cases

- Multiple YMCAs sharing one Drupal installation
- Branch-specific domains (e.g., downtown.ymca.org, westside.ymca.org)
- White-label YMCA sites

### Installation

Domain Access is included in YMCA Website Services 10.4.0.0+:

```bash
drush en domain domain_access -y
```

### Configuration

1. Navigate to **Configuration** > **Domain Access** (`/admin/config/domain`)
2. Add domains...

[Continue with configuration steps]
```

---

### 2.3 Project Browser Module

**Source:** 11.1.0.0-beta1

**Required updates:**

#### Create New Section: Module Installation via Project Browser
**File:** `content/en/docs/howto/install-modules/_index.md` **(NEW FILE)**

**Content outline:**
```markdown
---
title: Installing Modules in YMCA Website Services
description: How to install modules using Composer and Project Browser (Drupal 11).
---

## Installation Methods

### Method 1: Composer (Recommended)

For all Drupal versions:

```bash
composer require drupal/module_name
drush en module_name -y
```

### Method 2: Project Browser (Drupal 11+)

Drupal 11 includes a new Project Browser for visual module installation:

1. Navigate to **Extend** > **Install new module** (`/admin/modules/browse`)
2. Search for the module by name
3. Click **Add to project**
4. Enable the module

**Note:** Composer is still used behind the scenes. Ensure your site has Composer configured properly.

### Deprecated: File Upload Method

⚠️ **The module upload UI was removed in Drupal 11.** Use Composer or Project Browser instead.
```

---

### 2.4 Workspaces Module (Content Staging)

**Source:** 11.1.0.0-beta1

**Required updates:**

#### Create New Page: Content Staging with Workspaces
**File:** `content/en/docs/howto/use-workspaces/_index.md` **(NEW FILE)**

**Content outline:**
```markdown
---
title: Content Staging with Workspaces
description: Use Drupal 11 Workspaces for content staging and approval workflows.
tags:
  - "Content Management"
  - "Workspaces"
  - "Drupal 11"
---

## Overview

Drupal 11 includes the Workspaces module for content staging and editorial workflows.

### Enabling Workspaces

```bash
drush en workspaces -y
```

### Creating Workspaces

1. Navigate to **Structure** > **Workspaces** (`/admin/structure/workspaces`)
2. Click **Add workspace**
3. Configure workspace settings

### Workflow

1. Switch to a workspace: `/admin/structure/workspaces/[workspace-id]/activate`
2. Edit content (changes saved only in workspace)
3. Review changes: **Content** > **Workspace** tab
4. Publish to Live: Click **Deploy to Live**

### Use Cases for YMCAs

- **Seasonal campaigns:** Prepare fall program launch
- **Multi-editor review:** Draft content for approval before publishing
- **A/B testing:** Test landing page variations

[Continue with more examples]
```

---

### 2.5 WebP Image Support

**Source:** 11.1.0.0-beta1

**Required updates:**

#### Add Section to Image Handling Documentation
**File:** `content/en/docs/user-documentation/media/_index.md`

**New section:**
```markdown
### Native WebP Support (Drupal 11+)

Drupal 11 includes native WebP image format support for better performance.

**Benefits:**
- Smaller file sizes (25-35% smaller than JPEG)
- Faster page load times
- Better image quality at lower file sizes

**Uploading WebP Images:**

1. Navigate to **Content** > **Media** > **Add media** > **Image**
2. Upload `.webp` files directly (no conversion needed)
3. Images will display natively in all modern browsers

**Converting Existing Images to WebP:**

Use the Image Optimize (or WebP) module:

```bash
composer require drupal/imageapi_optimize_webp
drush en imageapi_optimize_webp -y
```

Configure at `/admin/config/media/image-styles`.

**Browser Compatibility:**
- Chrome, Edge, Firefox, Safari 14+ support WebP natively
- Older browsers automatically fallback to JPEG/PNG
```

---

## 🟢 Priority 3: Bug Fixes & Performance

### 3.1 CKEditor Issues

**Source:** 10.5.0.1, 10.3.10.2

**Required updates:**

#### Update Troubleshooting Guide
**File:** `content/en/docs/troubleshooting/common-errors/_index.md`

**New section:**
```markdown
### CKEditor Not Loading or Broken (Drupal 10.5.x)

**Symptoms:**
- CKEditor toolbar missing
- Rich text editor shows as plain textarea
- JavaScript console errors

**Solution:**

Update OpenY Features to version 3.7.0 or higher:

```bash
composer require 'open-y-subprojects/openy_features:^3.7.0'
drush cr
```

**Root cause:** Module compatibility issue in YMCA Website Services 10.5.0.x

**Affected versions:** 10.5.0.0, 10.5.0.1 (fixed in 10.5.0.2)

---

### CKEditor Font Selection Missing (Drupal 11)

**Symptoms:**
- Font family dropdown missing from CKEditor 5 toolbar

**Solution:**

The `ckeditor5_font` module was removed in Drupal 11. Use CKEditor 5 Style plugin instead:

1. Navigate to **Configuration** > **Text formats** > **Edit** (`/admin/config/content/formats/manage/full_html`)
2. Enable **Style** button in toolbar
3. Configure styles at **Style** dropdown settings

**Migration:** Font families must be reconfigured as styles.
```

---

### 3.2 Media Document Embedding

**Source:** 10.3.10.2

**Required updates:**

#### Update Media Documentation
**File:** `content/en/docs/user-documentation/media/_index.md`

**Update document embedding section:**
```markdown
### Embedding Documents

**File types and embedding behavior:**

- **PDFs:** Embedded as iframe (inline display)
- **Images:** Embedded inline
- **Office documents (DOCX, XLSX, PPTX, CSV):** Download link generated (as of 10.3.10.2)

**Previous behavior (before 10.3.10.2):**
Office documents attempted iframe embedding, which caused browser compatibility issues.

**Current behavior (10.3.10.2+):**
Office documents generate download links with file name and size display.

**To embed a document:**

1. Navigate to **Content** > **Media** > **Add media** > **Document**
2. Upload file
3. Insert into content using **Insert Media** button in CKEditor
4. Select display mode:
   - **Link** - Download link
   - **Inline (PDFs only)** - Embedded viewer
```

---

### 3.3 Mobile Responsive Issues

**Source:** 10.4.0.0, 10.3.10.2, 10.3.10.1

**Required updates:**

#### Update Theme Documentation
**File:** `content/en/docs/user-documentation/themes/carnation/_index.md` (if exists) or create troubleshooting section

**New section:**
```markdown
### Mobile Responsive Fixes

Recent releases improved mobile display:

**10.4.0.0:**
- Fixed mobile burger menu visibility issue
- Menu now displays correctly on all screen sizes

**10.3.10.2:**
- Improved hero block image display on larger screens
- Fixed third-level menu title width
- Corrected event date alignment

**10.3.10.1:**
- Fixed email address wrapping on mobile devices (no more text overflow)

**Testing mobile responsiveness:**

Use browser DevTools:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test breakpoints: 320px (mobile), 768px (tablet), 1200px (desktop)
```

---

### 3.4 Membership Calculator Location Filtering

**Source:** 10.4.0.0

**Required updates:**

#### Update Membership Calculator Documentation
**File:** `content/en/docs/user-documentation/membership/calculator/_index.md`

**Update configuration section:**
```markdown
### Location Filtering

**Important:** As of version 10.4.0.0, the Membership Calculator excludes unpublished locations from pricing calculations.

**Impact:**
- Unpublished branches do not appear in location selector
- Pricing calculations only include published location rates
- Closed or seasonal branches can be unpublished to hide from calculator

**To manage location visibility:**

1. Navigate to **Content** > **Locations** (`/admin/content`)
2. Filter by **Branch** content type
3. **Publish** or **Unpublish** locations to control visibility

**Use case:** Temporarily close a branch for renovations by unpublishing it. The branch will automatically be excluded from membership pricing.
```

---

### 3.5 Contextual Links Issue

**Source:** 10.3.10.1

**Required updates:**

#### Update Troubleshooting Guide
**File:** `content/en/docs/troubleshooting/common-errors/_index.md`

**New section:**
```markdown
### Contextual Links Disappear After Drupal 10.3 Update

**Symptoms:**
- Block edit pencil icons missing
- "Configure" links don't appear on hover
- Intermittent issue after updating to Drupal ~10.3.0

**Solution:**

Update to YMCA Website Services 10.3.10.1 or higher:

```bash
composer require 'ycloudyusa/yusaopeny:^10.3.10.1'
drush cr
```

**Workaround (if update not immediately available):**

Clear all caches multiple times:

```bash
drush cr
drush cr
drush cr
```

**Root cause:** Drupal core bug in 10.3.0-10.3.9 with contextual links module initialization (fixed in YMCA Website Services 10.3.10.1).
```

---

## 📋 Documentation Update Priority Matrix

| Priority | Documentation Item | Pages to Create/Update | Estimated Hours |
|----------|-------------------|------------------------|-----------------|
| 🔴 Critical | Drupal 11 upgrade guide | 3 pages | 8-12 hours |
| 🔴 Critical | PHP 8.3 requirements | 1 page (update) | 1-2 hours |
| 🔴 Critical | Removed modules/themes | 1 page (update) | 2-3 hours |
| 🔴 Critical | Single Directory Components | 1 page (new) | 4-6 hours |
| 🔴 Critical | Object-Oriented Hooks | 1 page (new) | 3-4 hours |
| 🟡 High | Domain Access | 1 page (new) | 3-4 hours |
| 🟡 High | Project Browser | 1 section (new) | 2-3 hours |
| 🟡 High | Workspaces/Content Staging | 1 page (new) | 4-5 hours |
| 🟡 High | WebP image support | 1 section (update) | 1-2 hours |
| 🟡 High | Module migration updates | Multiple pages (update) | 3-4 hours |
| 🟢 Medium | CKEditor troubleshooting | 2 sections (update) | 2-3 hours |
| 🟢 Medium | Media document embedding | 1 section (update) | 1-2 hours |
| 🟢 Medium | Mobile responsive fixes | 1 section (update) | 1-2 hours |
| 🟢 Medium | Membership calculator | 1 section (update) | 1 hour |
| 🟢 Medium | Contextual links fix | 1 section (update) | 1 hour |

**Total estimated effort:** 38-57 hours

---

## 📊 Impact Analysis

### By User Persona

**Decision Makers:**
- 🔴 Drupal 11 upgrade path (affects planning and budget)
- 🔴 PHP 8.3 hosting requirements
- 🟡 Domain Access for multi-branch sites

**Site Builders:**
- 🔴 Drupal 11 upgrade process
- 🔴 Removed modules/themes migration
- 🟡 Project Browser for module installation
- 🟡 Workspaces for content staging

**Content Editors:**
- 🟡 WebP image upload support
- 🟢 Media document embedding behavior
- 🟢 CKEditor 5 changes

**Developers:**
- 🔴 Object-Oriented Hooks
- 🔴 Single Directory Components
- 🟡 Domain Access module
- 🟢 jQuery migrate support

---

## 🎯 Recommended Implementation Plan

### Phase 1: Critical Infrastructure (Week 1-2)
1. Update Server Requirements page with PHP 8.3, Symfony 7
2. Create Drupal 10 → 11 upgrade guide
3. Document removed/deprecated modules and themes
4. Update Glossary with deprecations

### Phase 2: Drupal 11 New Features (Week 3-4)
1. Create Single Directory Components guide
2. Create Object-Oriented Hooks guide
3. Update module installation documentation (Project Browser)
4. Create Workspaces/Content Staging guide

### Phase 3: Module & Feature Updates (Week 5)
1. Create Domain Access configuration guide
2. Update media documentation (WebP, document embedding)
3. Update Membership Calculator documentation
4. Verify all module migration references

### Phase 4: Bug Fixes & Troubleshooting (Week 6)
1. Update troubleshooting guide (CKEditor, contextual links)
2. Update theme documentation (mobile responsive fixes)
3. Add performance optimization notes
4. Final review and cross-linking

---

## 🔗 Cross-Reference Checklist

After creating new pages, add links from:

- [ ] Getting Started guides (all personas)
- [ ] Upgrade documentation (link to Drupal 11 upgrade)
- [ ] Server Requirements (link to PHP 8.3 notes)
- [ ] Troubleshooting hub (link to all troubleshooting sections)
- [ ] Module installation guides (link to Project Browser)
- [ ] Media documentation (link to WebP and document embedding)
- [ ] Theme documentation (link to SDC and Carnation updates)

---

## 📝 Notes for Review

### Questions for User:

1. **Drupal 11 adoption timeline:** What percentage of YMCAs are on Drupal 11 vs 10?
   - Affects prioritization of Drupal 11-specific docs

2. **Domain Access usage:** How many YMCAs use or plan to use multi-domain setups?
   - Affects depth of Domain Access documentation

3. **Existing SDC/Hook documentation:** Is there existing developer documentation for Drupal 11 patterns?
   - Affects whether to create new pages or update existing

4. **Workspaces adoption:** Are YMCAs using content staging workflows?
   - Affects prioritization of Workspaces documentation

### Technical Verification Needed:

- [ ] Verify jQuery migrate behavior in 11.1.0.0-alpha2
- [ ] Test Project Browser in Drupal 11 sandbox
- [ ] Confirm WebP browser compatibility claims
- [ ] Verify CKEditor 5 font/style workflow
- [ ] Test Domain Access with Carnation theme

---

**Status:** Ready for user review and prioritization

**Next Steps:**
1. Review plan with user
2. Prioritize documentation items based on YMCA community needs
3. Create GitHub issues for each documentation task
4. Assign writers/developers to documentation sections
5. Set target completion dates for each phase
