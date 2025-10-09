---
title: Common Errors
weight: 1
description: >
  Solutions to frequently encountered errors in YMCA Website Services.
---

This guide covers the most common errors you'll encounter and how to fix them. Use Ctrl+F / Cmd+F to search for your specific error message.

---

## White Screen of Death (WSOD)

**Symptoms:** Blank white page with no content or error messages.

**Causes & Solutions:**

1. **PHP Fatal Error**
   ```bash
   # Check PHP error logs
   tail -f /var/log/apache2/error.log
   # Or
   drush watchdog:tail
   ```

2. **Memory Limit Exceeded**
   ```php
   # In settings.php or settings.local.php
   ini_set('memory_limit', '512M');
   ```

3. **Module Conflict**
   ```bash
   # Disable recently installed modules
   drush pmu module_name -y
   drush cr
   ```

4. **Corrupted Cache**
   ```bash
   # Clear all caches
   drush cr
   # Or via database if Drush fails
   drush sql-cli
   TRUNCATE TABLE cache_bootstrap;
   TRUNCATE TABLE cache_render;
   exit
   ```

**Prevention:**
- Enable error reporting in development: `$config['system.logging']['error_level'] = 'verbose';`
- Always test module updates on staging first

---

## Permission Denied Errors

**Error:** `Warning: file_put_contents(sites/default/files/...): failed to open stream: Permission denied`

**Solutions:**

1. **Fix File Permissions**
   ```bash
   # Set correct ownership (replace www-data with your web server user)
   sudo chown -R www-data:www-data sites/default/files

   # Set correct permissions
   sudo chmod -R 755 sites/default/files
   ```

2. **SELinux Issues (CentOS/RHEL)**
   ```bash
   # Check SELinux status
   getenforce

   # Set correct SELinux context
   sudo chcon -R -t httpd_sys_rw_content_t sites/default/files
   ```

3. **Temporary Fix (Development Only)**
   ```bash
   chmod 777 sites/default/files
   # NEVER use 777 in production!
   ```

---

## Composer Dependency Conflicts

**Error:** `Your requirements could not be resolved to an installable set of packages.`

**Solutions:**

1. **Update Composer**
   ```bash
   composer self-update
   composer --version  # Should be 2.0+
   ```

2. **Clear Composer Cache**
   ```bash
   composer clear-cache
   composer update --no-cache
   ```

3. **Check PHP Version**
   ```bash
   php -v  # Should match composer.json requirements
   ```

4. **Use Specific Versions**
   ```bash
   # Instead of ymca/website-services:*
   composer require ymca/website-services:^11.1
   ```

5. **Diagnose Conflicts**
   ```bash
   composer why-not ymca/website-services 11.1.0
   composer prohibits ymca/website-services 11.1.0
   ```

---

## Database Update Failures

**Error:** `Exception: ... in update hook`

**Solutions:**

1. **Backup First!**
   ```bash
   drush sql-dump > backup-$(date +%Y%m%d).sql
   ```

2. **Run in Safe Mode**
   ```bash
   # Skip problematic hooks
   drush updb --entity-updates -y
   ```

3. **Check Error Logs**
   ```bash
   drush watchdog:show --severity=Error
   ```

4. **Manual Fix**
   ```sql
   # Mark update as complete manually (last resort)
   drush sql-cli
   INSERT INTO key_value (collection, name, value)
   VALUES ('system.schema', 'module_name', 's:4:"9001";');
   exit
   ```

---

**Need more help?** See [Debugging Techniques](../debugging/) or [Get Support](../#getting-help).
