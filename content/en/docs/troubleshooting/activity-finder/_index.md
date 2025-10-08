---
title: Activity Finder Issues
weight: 5
description: >
  Troubleshoot Activity Finder API connections and program display problems.
---

Having trouble with Activity Finder? Find solutions to common integration issues below.

---

## API Connection Failures

**Error:** `Could not connect to Daxko/ActiveNet/Personify API`

**Solutions:**

1. **Check API Credentials**
   - Visit `/admin/openy/integrations/activity-finder`
   - Re-enter API key and secret
   - Test connection

2. **Check Firewall**
   ```bash
   # Test API endpoint
   curl -I https://api.daxko.com/
   ```

3. **Check Logs**
   ```bash
   drush watchdog:show --severity=Error | grep activity
   ```

4. **Contact CRM Provider**
   - Verify API credentials with Daxko/ActiveNet/Personify
   - Check for API endpoint changes

---

## Programs Not Displaying

**Problem:** Activity Finder shows no programs.

**Solutions:**

1. **Check Mapping**
   - Visit `/admin/openy/integrations/activity-finder/mapping`
   - Ensure categories are mapped

2. **Clear Cache**
   ```bash
   drush cr
   drush cron
   ```

3. **Check API Response**
   ```bash
   drush watchdog:tail
   # Visit Activity Finder page and watch for errors
   ```

---

**Need more help?** See [Debugging Techniques](../debugging/) or [Get Support](../#getting-help).
