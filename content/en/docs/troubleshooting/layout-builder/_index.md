---
title: Layout Builder Issues
weight: 3
description: >
  Fix common problems with Layout Builder blocks, sections, and media uploads.
---

Having trouble with Layout Builder? Find solutions to common issues below.

---

## Blocks Not Appearing

**Problem:** Added blocks don't show up on the page.

**Solutions:**

1. **Check Block Placement**
   - Ensure block is in a visible region
   - Check block's visibility settings

2. **Clear Cache**
   ```bash
   drush cr
   ```

3. **Check Permissions**
   - Visit `/admin/people/permissions`
   - Ensure role has "Create and edit custom blocks"

4. **Check Block Configuration**
   - Inline blocks must be configured before adding
   - Some blocks require additional fields

---

## Section Styling Not Working

**Problem:** Section background colors or styles don't apply.

**Solutions:**

1. **Clear Cache**
   ```bash
   drush cr
   ```

2. **Check Theme Compatibility**
   - Small Y template required for some styles
   - Some styles only work with specific themes

3. **Rebuild CSS**
   ```bash
   drush cron
   drush cr
   ```

---

## Media Upload Failures

**Error:** `The file could not be uploaded.`

**Solutions:**

1. **Check File Permissions**
   ```bash
   chmod -R 755 sites/default/files
   chown -R www-data:www-data sites/default/files
   ```

2. **Check File Size Limits**
   ```php
   // In php.ini or .htaccess
   upload_max_filesize = 64M
   post_max_size = 64M
   ```

3. **Check Disk Space**
   ```bash
   df -h
   ```

4. **Check Allowed File Extensions**
   - Visit `/admin/config/media/file-system`
   - Add extension if needed (e.g., `.webp`)

---

**Need more help?** Browse the [Block Library](/docs/user-documentation/layout-builder/block-library/) or [Get Support](../#getting-help).
