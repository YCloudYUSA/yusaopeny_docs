---
title: "Release 11.3.1.0 for Site Builders"
linkTitle: "Release 11.3.1.0"
description: Configuration updates and migration tasks for YUSA Open Y 11.3.1.0
weight: 10
---

## YUSA Open Y 11.3.1.0: Layout Builder Updates & Configuration Changes

**What You Need to Know for Site Building:**

### 🧱 Layout Builder & Blocks

**All blocks updated for Drupal 11.3 compatibility:**
- Every Layout Builder block received major version updates
- All 71 PRs tested across GitHub and drupal.org repositories
- Themes updated for compatibility
- Custom block configurations should be reviewed post-upgrade

**CKEditor 5 improvements in Layout Builder:**
- Fixed balloon toolbar positioning in Layout Builder dialogs
- No more tooltips disappearing behind modal windows
- Smoother editing experience when building complex layouts

### 🎨 Theme & Styling Updates

**Y Styles expansion:**
- Now available across Landing Pages, Events, and Articles
- Global table styling configured via `editor.settings.yml`
- Consistent design system across all content types
- More style options for content formatting

**What works out of the box:**
- All existing themes compatible with 11.3.3
- Color schemes preserved
- Custom theme modifications need testing

### 📦 Media Management for Site Builders

**Entity Browser → Media Library migration:**

**What changed:**
```
Old: entity_browser for media selection
New: Core media_library_widget for all media fields
```

**Impact on your work:**
- All media reference fields now use Drupal's built-in Media Library
- Cleaner, more intuitive media selection UI
- Better performance and maintenance
- 34 modules updated automatically

**Media Tags replace Media Directories:**
- Configure taxonomy-based tagging at `/admin/structure/taxonomy/manage/media_tags`
- Set up hierarchical tag structures
- Configure autocomplete behavior
- Migration from folders happens automatically

### Site Configuration Tasks

**Required after upgrade:**

1. **Review media field widgets** - Ensure forms using media work correctly

2. **Test Layout Builder blocks** - Verify all blocks render properly

3. **Check user permissions:**
   - Remove old `entity_browser` permissions
   - Configure `media_library` permissions

4. **Configure Google Tag** at `/admin/config/services/google_tag`
   - Replace Google Analytics with GA4 measurement IDs
   - Test tracking is firing correctly

### 🗑️ Trash Module Configuration

**New soft-delete system:**
- Enabled by default for all content types
- Configure at `/admin/config/content/trash` (path may vary)
- Set retention periods for different content types
- Configure which roles can permanently delete vs. soft delete

**Typical settings:**
```
Articles: 30 days in trash
Events: 90 days (for annual recurring events)
Landing Pages: 60 days
News: 30 days
```

### ⚙️ Modules Removed (Check Your Dependencies)

**Uninstalled automatically:**
- entity_browser (5 related modules)
- media_directories
- google_analytics
- history
- GroupEx Pro modules

**Before upgrade:**
- Export configurations that reference these modules
- Document any custom entity_browser view modes
- Note any custom permissions referencing removed modules

**After upgrade:**
- Update documentation
- Train content editors on new media workflow
- Update any custom forms/views

### 🔧 Configuration Management

**If using config sync:**

**Pre-upgrade export:**
```bash
drush config:export -y
```

**Post-upgrade verification:**
```bash
drush config:status
# Review any configuration changes
# Update configs that reference removed modules
```

**Key config files to review:**
- `core.entity_form_display.*.*.yml` (media field widgets)
- `field.field.*.*.field_*_media.yml` (media reference fields)
- `user.role.*.yml` (permissions for removed modules)
- `google_tag.settings.yml` (new GA4 configuration)

### 🎯 Site Building Best Practices Post-Upgrade

**Test these workflows:**
1. Create new Landing Page with Layout Builder
2. Add media to content (images, videos, documents)
3. Edit existing pages with complex layouts
4. Test media selection in different contexts
5. Verify table styling in CKEditor
6. Check Y Styles rendering on frontend
7. Test content deletion and recovery from Trash

**Performance benefits you'll notice:**
- Faster admin pages (50% fewer database queries for menus)
- Quicker site builds and configuration imports
- Better breadcrumb caching (faster page loads)

### 🚨 Known Issues for Site Builders

**Custom entity_browser configurations:**
- Must be manually migrated to media_library
- Custom view modes need recreation
- Custom selection widgets need refactoring

**Third-party modules:**
- Test compatibility with any contrib modules using entity_browser
- Check module issue queues for 11.3 compatibility

**Custom themes:**
- Review if theme implements entity_browser styling
- Update to media_library equivalents
- Test Layout Builder block rendering

### 📚 Resources for Site Builders

**Configuration references:**
- Media Library documentation: `/admin/help/media_library`
- Media Tags configuration: `/admin/structure/taxonomy/manage/media_tags`
- Google Tag setup: `/admin/config/services/google_tag`
- Trash settings: Check Content management settings

**Testing checklist:**
- [ ] All Layout Builder blocks render correctly
- [ ] Media selection works in all forms
- [ ] Content types display properly
- [ ] Y Styles appear on frontend
- [ ] Trash functionality works for all content types
- [ ] Google Tag fires on page loads
- [ ] User permissions are correct (no entity_browser leftovers)

---

## Related Resources

- [Main Release Announcement](/blog/releases/release-ds-11.3.1.0/)
- [Full Changelog on GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.3.1.0)
- [Site Builder Documentation](/docs/site-builder/)
- [Community Support](https://ycloud-usa.slack.com/)
