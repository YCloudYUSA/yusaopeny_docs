---
title: Upgrade Problems
weight: 4
description: >
  Resolve issues during Drupal core or module upgrades.
---

Encountering problems during an upgrade? Find solutions to common upgrade issues below.

---

## Version Compatibility Issues

**Error:** `ymca/website-services requires drupal/core ^11.0 but drupal/core 10.x.x is installed`

**Solutions:**

1. **Check Current Versions**
   ```bash
   drush status
   composer show | grep drupal/core
   ```

2. **Follow Official Upgrade Path**
   - Drupal 9 → 10: [Upgrade Guide](/docs/development/drupal-10-update/)
   - Drupal 10 → 11: [Upgrade Guide](/docs/development/upgrade_use_case_drupal_9_drupal_10_1/)

3. **Use Upgrade Status Module**
   ```bash
   composer require drupal/upgrade_status --dev
   drush en upgrade_status -y
   ```
   - Visit `/admin/reports/upgrade-status`

---

## Module Conflicts After Upgrade

**Problem:** Site broken after upgrading modules.

**Solutions:**

1. **Restore from Backup**
   ```bash
   drush sql-drop
   drush sql-cli < backup-20250101.sql
   ```

2. **Update One Module at a Time**
   ```bash
   composer update drupal/module_name
   drush updb -y
   drush cr
   # Test thoroughly before updating next module
   ```

3. **Check Incompatible Modules**
   ```bash
   drush pm:list --status=enabled
   # Check drupal.org for Drupal 11 compatibility
   ```

---

## Configuration Import Failures

**Error:** `Entities exist of type ... These entities need to be deleted before importing.`

**Solutions:**

1. **Import with Force**
   ```bash
   drush cim -y --partial
   ```

2. **Delete Conflicting Entities**
   ```bash
   drush entity:delete view view_name
   drush cim -y
   ```

3. **Sync Configuration Manually**
   - Visit `/admin/config/development/configuration`
   - Review and import specific changes

---

**Need more help?** See [Debugging Techniques](../debugging/) or [Get Support](../#getting-help).
