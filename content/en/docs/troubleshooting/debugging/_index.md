---
title: Debugging Techniques
weight: 6
description: >
  Essential debugging tools and techniques for diagnosing issues.
---

Learn how to effectively debug issues in YMCA Website Services using these essential techniques and tools.

---

## Enable Verbose Error Messages

```php
// In settings.local.php (development only)
$config['system.logging']['error_level'] = 'verbose';
```

---

## Use Drush for Debugging

```bash
# Watch logs in real-time
drush watchdog:tail

# Show recent errors
drush watchdog:show --severity=Error --count=20

# Check site status
drush status

# Check for security updates
drush pm:security
```

---

## Browser Developer Tools

1. **Network Tab** - Check for failed requests
2. **Console Tab** - Check for JavaScript errors
3. **Application Tab** - Check cookies and local storage

---

## Enable Twig Debugging

```yaml
# In sites/default/services.yml
parameters:
  twig.config:
    debug: true
    auto_reload: true
    cache: false
```

Then clear cache: `drush cr`

---

**Need more help?** See specific error categories or [Get Support](../#getting-help).
