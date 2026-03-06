---
title: "Release 11.3.1.0 for Developers"
linkTitle: "Release 11.3.1.0"
description: Technical details and breaking changes in YUSA Open Y 11.3.1.0
weight: 10
---

## YUSA Open Y 11.3.1.0: Breaking Changes & Performance Architecture

### ⚠️ Breaking Changes - Action Required

#### 1. Entity Browser Removal

```php
// REMOVED - No longer available
use Drupal\entity_browser\...

// MIGRATE TO - Core media library
use Drupal\media_library\...
```

**Impact:**
- 34 modules migrated automatically
- Custom code using entity_browser WILL BREAK
- Form alterations referencing `entity_browser_entity_reference` need updates

**Migration pattern:**
```php
// Before
$form['field_media']['widget']['#type'] = 'entity_browser_entity_reference';

// After
$form['field_media']['widget']['#type'] = 'media_library_widget';
```

**Required actions:**
- Search codebase: `grep -r "entity_browser" custom/`
- Update form displays programmatically altering media fields
- Remove entity_browser service dependencies
- Update tests mocking entity_browser interactions

#### 2. PHP 8.4/8.5 Compatibility

**Deprecated patterns eliminated (~256K warnings/day fixed):**

```php
// DEPRECATED - Will error in PHP 8.4+
function foo($bar = null, $required) { }
Request::get('param');

// CORRECT - PHP 8.4/8.5 compatible
function foo($required, $bar = null) { }
$request->query->get('param');
```

**44 patterns fixed across 6 modules:**
- Nullable parameter ordering
- Deprecated `Request` static methods
- Type hint compliance
- Return type declarations

**Scan custom modules:**
```bash
# Find deprecated patterns
vendor/bin/phpstan analyze custom/ --level=8

# Find Request static calls
grep -r "Request::" custom/
```

#### 3. Google Analytics Module Removed

```php
// REMOVED
\Drupal::service('google_analytics.tracking');

// MIGRATE TO
\Drupal::service('google_tag.tag_manager');
```

**Update custom tracking:**
- Replace google_analytics hooks with google_tag events
- Migrate custom dimensions to GA4 event parameters
- Update JavaScript tracking calls

#### 4. Drupal Core 11.3.3 API Changes

**New requirements:**
- Drupal 11.1.9 → 11.3.3 (review change records)
- Updated deprecation notices
- New APIs for Layout Builder, Media, Form systems

**Check for:**
```bash
# Find deprecated core API calls
composer require phpstan/phpstan-deprecation-rules
vendor/bin/phpstan analyze
```

---

## 🚀 Performance Optimizations to Understand

### 1. MenuTreeStorage Query Optimization

**What changed:**
- 50% reduction in SELECT queries for menu rendering
- Optimized tree traversal algorithm
- Better caching strategy

**If you have custom menu code:**
```php
// Review custom implementations using:
\Drupal::menuTree()->load()
MenuTreeStorage queries
Menu link plugins
```

### 2. Route Rebuild Optimization

**What changed:**
- Prevents unnecessary route rebuilds during module installation
- Reduces memory consumption during updates
- Faster deployment times

**If you implement routes:**
- Test module installation performance
- Verify dynamic routes still rebuild when needed
- Check route subscriber timing

### 3. Breadcrumb Caching Fix

**What changed:**
```php
// Before: Breadcrumbs had max-age=0
#cache: ['max-age' => 0]

// After: Proper cache tags
#cache: [
  'contexts' => ['route'],
  'tags' => ['route_match'],
]
```

**If you have custom breadcrumb builders:**
- Review `getCacheTags()` implementation
- Ensure proper cache context declaration
- Test breadcrumb invalidation

---

## 🏷️ New Media Tags Architecture

**Technical implementation:**

**Database structure:**
```sql
-- New taxonomy vocabulary
taxonomy_term_data: media_tags
taxonomy_term_field_data: name, parent, weight
taxonomy_term_hierarchy: parent relationships
```

**API usage:**
```php
// Load media tags
$tags = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->loadTree('media_tags', 0, NULL, TRUE);

// Tag media entity
$media->field_media_tags->appendItem(['target_id' => $tag_id]);
```

**Migration from media_directories:**
```php
// Automatic migration in hook_update_N()
// Custom directories may need manual migration
// Check: /admin/structure/taxonomy/manage/media_tags
```

**Frontend rendering:**
- Badge/chip UI with hierarchical display
- Autocomplete multi-select widget
- Tree structure with depth indicators

---

## 🗑️ Trash Module Integration

**Soft-delete pattern:**

```php
// Entity deletion now routes through trash
$entity->delete(); // Soft delete (moves to trash)

// Permanent deletion (bypass trash)
$entity->delete(['force' => TRUE]);

// Restore from trash
\Drupal::service('trash.manager')->restore($entity);
```

**Hooks available:**
```php
hook_trash_entity_predelete($entity)
hook_trash_entity_delete($entity)
hook_trash_entity_restore($entity)
```

**Configuration:**
```php
// Get trash settings
$config = \Drupal::config('trash.settings');
$retention_days = $config->get('retention_days');
```

---

## 📦 Removed Modules - Check Dependencies

```json
{
  "removed": [
    "entity_browser",
    "entity_browser_entity_reference",
    "entity_embed",
    "inline_entity_form",
    "media_directories",
    "google_analytics",
    "history",
    "groupexpro",
    "groupexpro_auth",
    "groupexpro_recurring_event",
    "openy_node_session"
  ]
}
```

**Composer updates:**
```bash
# These will be removed automatically
# Check composer.json for custom dependencies
composer why drupal/entity_browser
composer why drupal/media_directories
```

---

## 🔧 Development Workflow Updates

**Local development:**

```bash
# Prerequisites
composer require yusaopeny/yusaopeny:11.3.1.0

# Enable AVIF support (required)
# macOS:
brew install gd --with-avif

# Ubuntu:
apt-get install php-gd libavif-dev

# Verify
php -r "var_dump(gd_info());" | grep AVIF
```

**Database updates:**
```bash
drush updatedb -y
# Watch for:
# - Entity browser cleanup
# - Media tags migration
# - GroupEx Pro removal
# - Permission cleanup
```

**Testing checklist:**
```bash
# Unit tests
vendor/bin/phpunit custom/

# Check deprecations
export SYMFONY_DEPRECATIONS_HELPER=weak
vendor/bin/phpunit

# Code standards
vendor/bin/phpcs custom/ --standard=Drupal

# Static analysis
vendor/bin/phpstan analyze custom/ --level=5
```

---

## 🧪 Testing Custom Code

**High-risk areas to test:**

### 1. Media field usage
```php
// Test all custom code using:
$form['field_media']
EntityBrowserWidget
entity_browser_entity_reference
MediaLibraryState
```

### 2. Tracking code
```php
// Test all custom:
Google Analytics hooks
Custom tracking JavaScript
Analytics event handlers
```

### 3. Form alterations
```php
// Test forms with:
hook_form_alter() on media forms
Custom entity_browser configurations
Media upload workflows
```

### 4. Entity operations
```php
// Test deletion workflows
$entity->delete()
Entity hooks (presave, delete, update)
Batch operations deleting entities
```

---

## 📊 Performance Profiling

**Benchmark these metrics:**

```php
// Installation time
time composer install && drush site:install

// Memory usage during updates
drush updatedb -y --verbose

// Menu rendering queries
drush debug:event kernel.response

// Route rebuild time
drush router:rebuild
```

**Expected improvements:**
- Installation: 537s → 180s (67% faster)
- Memory: 4.38GB → 326MB (93% reduction)
- Menu queries: ~50% reduction
- Route rebuilds: Fewer unnecessary rebuilds

---

## 🔍 Debugging Tools

**New debugging approaches:**

```php
// Debug media library
\Drupal::service('media_library.opener_resolver')->get($state);

// Debug trash operations
\Drupal::service('trash.manager')->getTrashedEntities();

// Debug google_tag
\Drupal::service('google_tag.tag_manager')->getContainer();
```

**Logging:**
```php
// Key subsystems to monitor
'media_library', 'trash', 'google_tag', 'route', 'menu'
```

---

## 🚨 Common Pitfalls

### 1. Entity browser assumptions
```php
// DON'T assume entity_browser exists
if (\Drupal::moduleHandler()->moduleExists('entity_browser')) {
  // This will be FALSE
}
```

### 2. Static Request calls
```php
// DON'T use static methods
$param = Request::get('id'); // Deprecated

// DO inject request_stack
$request = \Drupal::requestStack()->getCurrentRequest();
$param = $request->query->get('id');
```

### 3. Nullable parameters
```php
// DON'T put nullable before required
function foo($optional = null, $required) { } // Error in PHP 8.4+

// DO put required parameters first
function foo($required, $optional = null) { } // Correct
```

---

## 📚 Developer Resources

**API documentation:**
- Media Library: `core/modules/media_library/media_library.api.php`
- Trash: Custom module, check `trash.api.php`
- Google Tag: `modules/contrib/google_tag/google_tag.api.php`

**Change records:**
- [Drupal 11.3 Changes](https://www.drupal.org/list-changes/drupal?to_branch=11.3.x)
- [PHP 8.4 Migration Guide](https://www.php.net/manual/en/migration84.php)

**Testing:**
- 71 PRs merged (GitHub + drupal.org)
- 30+ production sites validated
- 64 releases published across packages

**Code references:**
- Entity Browser migration: `entity_browser` → `media_library_widget`
- Media Tags: `modules/custom/*/media_tags/*`
- Trash implementation: `modules/contrib/trash/src/`

---

## Related Resources

- [Main Release Announcement](/blog/releases/release-ds-11.3.1.0/)
- [Full Changelog on GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.0)
- [Developer Documentation](/docs/developer/)
- [GitHub Issue Queue](https://github.com/YCloudYUSA/yusaopeny/issues)
