---
title: Performance Issues
weight: 2
description: >
  Diagnose and fix slow page loads, memory issues, and performance bottlenecks.
---

Having performance problems? This guide will help you diagnose and optimize your YMCA website.

---

## Slow Page Loads

**Symptoms:** Pages take 5+ seconds to load.

**Diagnosis:**

1. **Check Caching**
   - Admin: `/admin/config/development/performance`
   - Ensure "Aggregate CSS files" is checked
   - Ensure "Aggregate JavaScript files" is checked
   - Enable page caching for anonymous users

2. **Install Devel Module** (Development only)
   ```bash
   composer require drupal/devel --dev
   drush en devel webprofiler -y
   ```
   - Visit any page to see performance metrics
   - Check for slow queries

3. **Database Performance**
   ```bash
   # Check slow queries
   drush sql-query "SHOW FULL PROCESSLIST;"

   # Check database size
   drush sql-query "SELECT
     table_name AS 'Table',
     ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
   FROM information_schema.TABLES
   WHERE table_schema = 'DATABASE_NAME'
   ORDER BY (data_length + index_length) DESC;"
   ```

**Solutions:**

1. **Enable Redis/Memcache**
   ```bash
   composer require drupal/redis
   drush en redis -y
   ```
   ```php
   // In settings.php
   $settings['redis.connection']['interface'] = 'PhpRedis';
   $settings['redis.connection']['host'] = '127.0.0.1';
   $settings['cache']['default'] = 'cache.backend.redis';
   ```

2. **Optimize Images**
   - Use WebP format where possible
   - Enable image optimization: `/admin/config/media/image-styles`

3. **Clean Up Database**
   ```bash
   # Truncate watchdog logs
   drush sql-query "TRUNCATE watchdog;"

   # Remove old revisions
   drush entity:delete node --bundle=article --chunks=10
   ```

---

## High Memory Usage

**Error:** `PHP Fatal error: Allowed memory size of ... bytes exhausted`

**Solutions:**

1. **Increase PHP Memory Limit**
   ```php
   // In settings.php
   ini_set('memory_limit', '512M');
   ```

2. **For Composer**
   ```bash
   php -d memory_limit=-1 /usr/local/bin/composer update
   ```

3. **Optimize Composer Autoloader**
   ```bash
   composer dump-autoload --optimize
   ```

---

**Need more help?** See [Debugging Techniques](../debugging/) or [Get Support](../#getting-help).
