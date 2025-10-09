---
title: Quick Reference
linkTitle: Quick Reference
weight: 15
description: >
  Fast access to common commands, tasks, and patterns for YMCA Website Services users.
---

Quick answers to common tasks. Bookmark this page for instant access to frequently-used commands and workflows.

---

## For Content Editors

### Create a New Landing Page
1. **Content** > **Add Content** > **Landing Page (Layout Builder)**
2. Add title and click **Save and edit layout**
3. Add sections and blocks using **Add Section** button
4. Click **Save layout** when done
5. Switch to **Edit** tab, check **Published**, and **Save**

### Add a Banner Block
1. In Layout Builder, click **Add Block** in any section
2. Choose **Create custom block** > **Banner**
3. Configure:
   - Title (required)
   - Image (upload from media library)
   - Description text
   - CTA button text and link
4. Click **Add block**

### Upload an Image
1. **Content** > **Media** > **Add media** > **Image**
2. Upload image file (recommended: JPG for photos, PNG for graphics)
3. Add alt text (required for accessibility)
4. **Save**

### Create an Article or Event
1. **Content** > **Add Content** > **Article (LB)** or **Event (LB)**
2. Fill in:
   - Title
   - Date (for events)
   - Category/Tags
   - Featured image
3. Use Layout Builder to design the page layout
4. **Save** and **Publish**

---

## For Developers

### Update YMCA Website Services
```bash
# Update to latest version
composer update ymca/website-services

# Run database updates
drush updb -y

# Clear cache
drush cr

# Export configuration (if needed)
drush cex -y
```

### Run Tests
```bash
# Run all tests
./vendor/bin/phpunit

# Run specific test group
./vendor/bin/phpunit --group=ymca

# Run with code coverage
./vendor/bin/phpunit --coverage-html ./coverage
```

### Clear Cache
```bash
# Drupal cache clear
drush cr

# Or via admin UI
/admin/config/development/performance > Clear all caches
```

### Enable a Module
```bash
# Via Drush
drush en module_name -y

# Via UI
/admin/modules > Check box > Install
```

### Import/Export Configuration
```bash
# Export configuration
drush cex -y

# Import configuration
drush cim -y

# View configuration differences
drush config:status
```

### Debugging
```bash
# Enable development settings
cp sites/example.settings.local.php sites/default/settings.local.php

# Tail logs
drush watchdog:tail

# Check PHP errors
tail -f /var/log/apache2/error.log
```

---

## For Site Builders

### Install Small Y Template
```bash
# Via Drush
drush si openy openy_configure_profile.preset=small_y \
  openy_theme_select.theme=openy_carnation \
  openy_terms_of_use.agree_openy_terms=1 \
  --account-name=admin \
  --site-name='YMCA Website Services'
```

### Create a New Branch Location
1. **Content** > **Add Content** > **Branch**
2. Fill in:
   - Branch name
   - Address
   - Phone number
   - Hours of operation
   - Amenities
3. Add featured image and description
4. **Save** and **Publish**

### Configure Main Menu
1. **Structure** > **Menus** > **Main navigation**
2. **Add link** or drag to reorder existing links
3. Click **Save**

### Set Up Activity Finder (for Daxko/ActiveNet)
1. Install Activity Finder module: `drush en openy_activity_finder -y`
2. Configure: **/admin/openy/integrations/activity-finder**
3. Enter API credentials from your CRM provider
4. Map program categories
5. Create an Activity Finder page using Layout Builder
6. Add **Activity Finder** block to the page

### Manage Alerts
1. **Content** > **Add Content** > **Alert**
2. Choose alert type (Info, Warning, Emergency)
3. Set:
   - Alert message
   - Placement (Global, specific pages, specific branches)
   - Start/End dates
4. **Save** and **Publish**

### Configure Homepage
1. Navigate to homepage node
2. Click **Layout** tab
3. Add/edit sections and blocks:
   - Hero banner
   - Latest news
   - Program highlights
   - Branch locations
4. **Save layout** and **Publish**

---

## Common Drush Commands

| Task | Command |
|------|---------|
| Clear cache | `drush cr` |
| Update database | `drush updb -y` |
| Export config | `drush cex -y` |
| Import config | `drush cim -y` |
| Enable module | `drush en module_name -y` |
| Disable module | `drush pmu module_name -y` |
| One-time login | `drush uli` |
| Check status | `drush status` |
| View logs | `drush watchdog:tail` |
| Run cron | `drush cron` |

---

## Keyboard Shortcuts

### Layout Builder
- **Shift + A** - Add new section
- **Shift + B** - Add new block
- **Shift + S** - Save layout
- **Esc** - Close modal

### Content Editor
- **Ctrl/Cmd + S** - Save content
- **Ctrl/Cmd + P** - Preview
- **Ctrl/Cmd + Shift + P** - Preview in new tab

---

## URLs to Bookmark

| Page | URL |
|------|-----|
| Content list | `/admin/content` |
| Add content | `/node/add` |
| Media library | `/admin/content/media` |
| Menus | `/admin/structure/menu` |
| Activity Finder config | `/admin/openy/integrations/activity-finder` |
| Performance (cache) | `/admin/config/development/performance` |
| Reports | `/admin/reports` |
| Module list | `/admin/modules` |

---

## File Size Recommendations

| Media Type | Recommended Size | Max Size | Format |
|------------|------------------|----------|---------|
| Hero banner | 1920x800px | 2MB | JPG |
| Blog featured image | 1200x630px | 1MB | JPG |
| Staff photo | 600x600px | 500KB | JPG |
| Logo | 400x200px | 200KB | PNG |
| Icon | 128x128px | 50KB | PNG/SVG |
| Video thumbnail | 1280x720px | 1MB | JPG |

---

## Need More Help?

- **Full Documentation**: Browse complete guides in the [documentation section](/docs/)
- **Troubleshooting**: Check our [troubleshooting guide](/docs/troubleshooting/) for common issues
- **Community**: Ask questions on our [message board](https://community.ycloud.y.org)
- **Support**: Contact your YMCA Website Services partner
- **Monthly Calls**: Join our [monthly community calls](/blog/monthly-calls/) for updates and Q&A
