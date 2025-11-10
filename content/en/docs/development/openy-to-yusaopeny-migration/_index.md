---
title: Migrating from Open Y to YUSA Open Y
description: Guide for upgrading from ymcatwincities/openy to ycloudyusa/yusaopeny package
aliases:
  - /docs/development/openy-migration/
  - /docs/development/yusa-migration/
tags:
  - "Migration"
  - "Upgrade"
  - "Package Rename"
---

## Overview

In July 2022, the YMCA Website Services installation profile package was renamed from `ymcatwincities/openy` to `ycloudyusa/yusaopeny` to reflect the project's evolution and governance transition to Y-USA.

This change affects the installation profile path and may cause issues during upgrades if not handled correctly.

**Issue Reference**: [GitHub Issue #5](https://github.com/YCloudYUSA/yusaopeny/issues/5)

---

## What Changed

### Package Name
- **Old**: `ymcatwincities/openy`
- **New**: `ycloudyusa/yusaopeny`

### Profile Installation Path
When Composer installs the profile, the path changes based on the package name:
- **Old path**: `profiles/contrib/openy/` or `profiles/ymcatwincities/openy/`
- **New path**: `profiles/contrib/yusaopeny/` or `profiles/ycloudyusa/yusaopeny/`

### Impact on Existing Sites

When upgrading from the old package name to the new one, Drupal may lose track of the profile location because:
1. Database stores extension paths in `core.extension` configuration
2. Theme and module references may point to the old profile path
3. Drupal's extension discovery system expects the profile at the old location

---

## Who Needs This Guide?

You need to follow this migration guide if:

- ✅ Your site was originally installed with `ymcatwincities/openy` package
- ✅ You're upgrading from Open Y version **9.2.11.3 or earlier** to YUSA Open Y **9.2.12+**
- ✅ You see errors about missing profile, themes, or modules after upgrade
- ✅ You encounter "profile not found" errors during `drush updb`

**You can skip this guide if:**
- ❌ Your site was freshly installed with `ycloudyusa/yusaopeny` (version 9.2.12+)
- ❌ You're only upgrading between YUSA Open Y versions (e.g., 11.1.0.0-beta2 → 11.1.0.0-beta3)

---

## Before You Begin

### Prerequisites

1. **Backup everything**:
   - Database dump: `drush sql:dump > backup.sql`
   - Files directory: `tar -czf files-backup.tar.gz docroot/sites/default/files/`
   - Codebase: Create a Git commit or full copy

2. **Test on staging environment** - Never perform this migration directly on production

3. **Required tools**:
   - Composer 2.x
   - Drush 10+ (Drush 12 recommended)
   - SSH/command-line access to your server
   - DDEV (recommended for local testing)

4. **Verify current version**:
   ```bash
   drush core:status
   composer show ycloudyusa/yusaopeny || composer show ymcatwincities/openy
   ```

---

## Migration Steps

### Step 1: Prepare Local Environment

Set up a local copy of your production site for testing:

```bash
# 1. Create local project directory
mkdir openy-migration && cd openy-migration

# 2. Copy production codebase
# (copy your production files here)

# 3. Import database
drush sql:cli < production-backup.sql

# 4. Verify site works
drush status
drush core:requirements
```

### Step 2: Update composer.json

Update your project to use the new package name:

```bash
# Backup current composer.json
cp composer.json composer.json.backup

# Option A: Download new composer.json from yusaopeny-project
# (Recommended for unmodified composer.json)
wget https://raw.githubusercontent.com/YCloudYUSA/yusaopeny-project/9.2.x/composer.json

# Option B: Manual update (if you have custom modifications)
# Edit composer.json and change:
#   "ymcatwincities/openy" → "ycloudyusa/yusaopeny"
```

**If using Option B (manual update)**, ensure these changes:

```json
{
  "require": {
    "ycloudyusa/yusaopeny": "^9.2.12 || ^10.3 || ^11.1"
  },
  "repositories": [
    {
      "type": "composer",
      "url": "https://packages.drupal.org/8"
    }
  ]
}
```

### Step 3: Run Composer Update

Update dependencies to install the new package:

```bash
# Remove old package and install new one
composer update ycloudyusa/yusaopeny --with-all-dependencies

# If you encounter conflicts, try:
composer remove ymcatwincities/openy
composer require ycloudyusa/yusaopeny:^9.2.12 --with-all-dependencies

# Verify installation
composer show ycloudyusa/yusaopeny
```

### Step 4: Clear Caches and Rebuild Registry

After Composer installs the new package, force Drupal to rediscover the profile location:

```bash
# Clear all caches
drush cr

# Rebuild container and registry
drush ev "drupal_flush_all_caches();"

# Alternative: Delete cache tables directly if drush fails
# drush sql:query "TRUNCATE cache_bootstrap;"
# drush sql:query "TRUNCATE cache_discovery;"
```

### Step 5: Run Database Updates

Execute any pending database updates:

```bash
# Run update hooks
drush updatedb -y

# Clear caches again
drush cr

# Verify no pending updates
drush updatedb
# Should show: "No database updates required"
```

### Step 6: Verify Profile and Extensions

Check that Drupal recognizes the profile at the new path:

```bash
# Check core requirements
drush core:requirements

# Verify profile is detected
drush pm:list --type=profile

# Check for missing modules/themes
drush pm:list --status=enabled | grep openy
```

### Step 7: Test Your Site

Perform thorough testing to ensure everything works:

1. **Access admin interface**: `/admin`
2. **Check theme loading**: Verify openy_admin theme works
3. **Test core modules**: Ensure all YMCA modules are functional
4. **Review content**: Check a few content types (Branch, Landing Page, etc.)
5. **Test configuration**: Visit Configuration pages
6. **Run cron**: `drush cron`

---

## Troubleshooting

### Issue: "Profile openy not found" Error

**Symptoms**:
```
Error: The profile openy does not exist.
```

**Solution**:
```bash
# Force extension list rebuild
drush ev "\Drupal::service('extension.list.profile')->reset();"
drush ev "\Drupal::service('extension.list.module')->reset();"
drush ev "\Drupal::service('extension.list.theme')->reset();"
drush cr
```

### Issue: openy_admin Theme Not Loading

**Symptoms**: Admin theme reverts to default or shows errors

**Solution**:
```bash
# Refresh theme handler
drush ev "\Drupal::service('theme_handler')->refreshInfo();"

# Re-set admin theme
drush config:set system.theme admin claro
drush cr
```

### Issue: Modules Show as Missing

**Symptoms**: Modules listed in status report as missing

**Solution**:
```bash
# Rebuild module discovery cache
drush ev "drupal_flush_all_caches();"
drush cr

# If specific modules are missing, reinstall them:
# drush pm:install module_name
```

### Issue: Composer Shows Both Packages

**Symptoms**: `composer show` lists both old and new packages

**Solution**:
```bash
# Remove old package explicitly
composer remove ymcatwincities/openy --no-update

# Update lock file
composer update --lock

# Verify only new package exists
composer show | grep openy
```

### Issue: "Class not found" Errors After Upgrade

**Symptoms**:
```
Error: Class 'Drupal\openy\...' not found
```

**Solution**:
```bash
# Clear class autoload cache
composer dump-autoload -o

# Rebuild Drupal caches
drush cr
drush ev "drupal_flush_all_caches();"
```

---

## Post-Migration Checklist

After completing the migration, verify:

- [ ] Site loads without errors
- [ ] Admin interface accessible (`/admin`)
- [ ] openy_admin theme displays correctly
- [ ] All YMCA modules show as enabled
- [ ] Content types are accessible
- [ ] Configuration pages load
- [ ] No "missing extension" warnings in status report
- [ ] Cron runs successfully: `drush cron`
- [ ] Search functionality works (if using Search API/Solr)
- [ ] Forms submit correctly
- [ ] Smoke tests pass

---

## Important Version Milestones

### Key Version for Migration

**Version 9.2.12** (December 2022) - First stable release with `ycloudyusa/yusaopeny` package name.

### Upgrade Path

If upgrading from very old versions:

1. **Pre-9.2.11.3**: First upgrade to **Open Y 9.2.11.3** using old package
2. **9.2.11.3 → 9.2.12+**: Perform package migration (this guide)
3. **9.2.12+ → 10.x**: Follow standard upgrade path
4. **10.x → 11.x**: Follow [Drupal 11 Migration Guide]({{< relref "drupal-11-migration" >}})

See [Important versions for upgrade path]({{< relref "Important-versions-for-upgrade-path" >}}) for detailed version matrix.

---

## Getting Help

### Community Support

If you encounter issues during migration:

- **GitHub Issues**: [Report upgrade problems](https://github.com/YCloudYUSA/yusaopeny/issues/5)
- **Slack**: Join [YMCA Website Services Slack](https://ycloud.y.org/slack) #support channel
- **Community Calls**: Attend [monthly community calls](/blog/monthly-calls/) for live Q&A
- **Documentation**: Review [upgrade guides]({{< relref "OpenY-upgrade-how-to-for-Developers" >}})

### Professional Assistance

For complex migrations or production assistance:
- [Agency Partner Directory](https://ds.ymca.org/partners) - Find certified partners
- Professional services available from Y-USA Digital Services team

---

## Additional Resources

- [GitHub Issue #5 - Original bug report](https://github.com/YCloudYUSA/yusaopeny/issues/5)
- [Standard upgrade guide for developers]({{< relref "OpenY-upgrade-how-to-for-Developers" >}})
- [Drupal 10 upgrade guide]({{< relref "drupal-10-update" >}})
- [Drupal 11 migration guide]({{< relref "drupal-11-migration" >}})
- [How we release the distribution]({{< relref "How-we-release-OpenY-distribution-from-code-perspective" >}})

---

**Last Updated**: 2025-10-21
**GitHub Issue**: [#5 - Upgrade path for openy_admin theme and core modules](https://github.com/YCloudYUSA/yusaopeny/issues/5)
