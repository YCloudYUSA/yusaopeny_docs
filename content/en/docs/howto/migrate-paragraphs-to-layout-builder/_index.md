---
title: "Migrate from Paragraphs to Layout Builder"
linkTitle: "Migrate to Layout Builder"
weight: 50
description: >
  Comprehensive guide to migrating legacy Paragraphs-based content to modern Layout Builder pages.
---

This guide will help you migrate your YMCA website from legacy Paragraphs-based content types to modern Layout Builder content types.

## Overview

### What You'll Learn

By the end of this guide, you'll understand:

- ✅ When to migrate vs. when to use alternatives
- ✅ How to audit your existing Paragraphs content
- ✅ Migration approaches and their trade-offs
- ✅ Step-by-step migration process
- ✅ Tools and resources available

**Estimated time:** Planning: 1-2 hours | Migration: Varies by content volume

---

## Step 1: Assess Your Migration Need

### Should You Migrate?

**✅ Strong reasons to migrate:**
- Your site is on the legacy Paragraphs system (`landing_page`, `blog`, `news`)
- You want modern drag-and-drop Layout Builder experience
- You're planning a site redesign or major content refresh
- You have < 500 pages to migrate (manageable manual effort)
- Your team prefers visual page building over structured forms

**⚠️ Consider alternatives if:**
- You have thousands of Paragraphs pages (migration effort is high)
- Your content editors are comfortable with current Paragraphs workflow
- You need a hybrid approach (some Paragraphs, some Layout Builder)
- You have complex nested Paragraphs structures
- Budget/timeline is constrained

### Content Types Affected

**Legacy Paragraphs-based content types in YMCA Website Services:**
- `landing_page` - Landing Page (Paragraphs) → **Migrate to:** `landing_page_lb` (Layout Builder)
- `blog` - Blog Post (Paragraphs) → **Migrate to:** `article_lb` (Layout Builder)
- `news` - News Post (Paragraphs) → **Migrate to:** `article_lb` (Layout Builder)

**Note:** Location content types (Branch, Camp, Facility, Program) use structured fields, not true Paragraphs page building. These typically don't need Layout Builder migration.

---

## Step 2: Audit Your Content

Before migrating, understand what you have.

### Run a Content Audit

1. **Count your Paragraphs content:**

```bash
# Count Landing Pages (Paragraphs)
drush sqlq "SELECT COUNT(*) FROM node_field_data WHERE type = 'landing_page'"

# Count Blog Posts
drush sqlq "SELECT COUNT(*) FROM node_field_data WHERE type = 'blog'"

# Count News Posts
drush sqlq "SELECT COUNT(*) FROM node_field_data WHERE type = 'news'"
```

2. **Identify your most-used Paragraph types:**

```bash
# List all paragraph types in use
drush sqlq "SELECT DISTINCT type, COUNT(*) as count FROM paragraphs_item_field_data GROUP BY type ORDER BY count DESC"
```

3. **Export content inventory:**

```bash
# Export all landing pages to CSV
drush sqlq "SELECT nid, title, status, created, changed FROM node_field_data WHERE type = 'landing_page' ORDER BY changed DESC" --extra=--csv > landing_pages_audit.csv
```

### Analyze Your Content

**Questions to answer:**
- How many pages use each Paragraph type?
- Which pages are most important (high traffic, business-critical)?
- Which pages are outdated and can be archived?
- Are there common patterns you can templatize in Layout Builder?

**Create a migration priority list:**
1. **High priority:** Homepage, key landing pages, high-traffic content
2. **Medium priority:** Active campaign pages, recent content
3. **Low priority:** Archived content, low-traffic pages

---

## Step 3: Choose Your Migration Approach

There are three main approaches to migrating Paragraphs content to Layout Builder:

### Approach 1: Manual Recreation (Recommended for Most)

**Best for:** < 500 pages, significant content refresh desired

**Process:**
1. Create new Layout Builder pages (`landing_page_lb`)
2. Manually recreate content using Layout Builder blocks
3. Review and improve content during migration
4. Redirect old URLs to new pages
5. Archive or delete old Paragraphs content

**Pros:**
- ✅ Clean slate - opportunity to improve content
- ✅ No custom code required
- ✅ Quality control on every page
- ✅ Learn Layout Builder thoroughly
- ✅ Can be done incrementally

**Cons:**
- ⏱️ Time-consuming for large sites
- ⏱️ Requires content editor availability

**Estimated effort:** 15-30 minutes per page

### Approach 2: Automated Migration (Advanced)

**Best for:** Large sites (500+ pages), technical resources available

**Process:**
1. Develop custom Drupal migration module
2. Map each Paragraph type to equivalent Layout Builder blocks
3. Create migration process plugins
4. Test thoroughly on staging environment
5. Run automated migration in batches
6. Manual QA and cleanup

**Pros:**
- ✅ Fast for large content volumes (1000+ pages)
- ✅ Consistent mapping rules applied uniformly
- ✅ Preserves exact content structure
- ✅ Repeatable and version-controlled

**Cons:**
- 🔧 Requires experienced Drupal developer
- 🔧 Complex for nested Paragraphs structures
- 🔧 May miss content nuances
- 💰 Higher upfront development cost
- ⚠️ Still requires manual QA afterward

**When to consider:** If you have 500+ pages AND in-house Drupal development expertise OR budget to hire professional help.

### Approach 3: Phased Migration

**Best for:** Large sites with limited resources, need gradual transition

**Process:**
1. Keep both old Paragraphs and new Layout Builder content types enabled
2. Create new content using Layout Builder (`landing_page_lb`, `article_lb`)
3. Migrate high-priority pages manually first (homepage, key landing pages)
4. Leave low-traffic legacy content as-is temporarily
5. Set migration deadlines by content category
6. Gradually migrate remaining content over 6-12 months

**Pros:**
- ✅ No "big bang" cutover - reduced risk
- ✅ Spread effort over time
- ✅ Learn and improve process as you go
- ✅ Prioritize business-critical content
- ✅ Staff can learn Layout Builder gradually

**Cons:**
- ⏱️ Longer overall timeline
- ⏱️ Maintain both systems during transition
- 🔧 Risk of leaving old content unmigrated

---

## Step 4: Manual Migration Process (Recommended)

Here's the step-by-step process for manually migrating Paragraphs content to Layout Builder.

### Prepare Your Environment

1. **Enable Layout Builder content types:**

```bash
# Ensure Layout Builder content types are available
drush pm:list --type=module --status=enabled | grep openy

# If not enabled, enable them
drush en openy_node_landing_page_lb openy_node_article_lb -y
drush cr
```

2. **Set up parallel content workflow:**
   - Keep old Paragraphs content published during migration
   - Create new Layout Builder versions at new URLs (e.g., `/new-about-us`)
   - Switch URLs when migration is complete

### Migrate a Single Page (Example Workflow)

**Original:** Landing Page (Paragraphs) at `/about-us`
**New:** Landing Page (Layout Builder) at `/new-about-us`

#### Step 1: Create New Layout Builder Page

1. Navigate to **Content** > **Add content** > **Landing Page (Layout Builder)**
2. Fill in basic fields:
   - **Title:** Same as original
   - **URL alias:** `/new-about-us` (temporary)
   - Leave **Published** unchecked (draft mode)
3. Click **Save and edit layout**

#### Step 2: Recreate Content with Layout Builder

**For each Paragraph on the original page:**

1. **Identify the Paragraph type** (Banner, Text, Cards, etc.)
2. **Find equivalent Layout Builder block** (see mapping table below)
3. **Add section** → Choose layout (1 column, 2 column, etc.)
4. **Add block** → Create custom block → Select block type
5. **Copy content** from original Paragraph fields
6. **Configure block** settings (colors, alignment, etc.)
7. Repeat for all Paragraphs

#### Step 3: Review and Improve

- Check responsive display (mobile, tablet, desktop)
- Optimize images (compress, alt text, proper sizing)
- Improve content (update outdated info, fix broken links)
- Test all CTAs and forms
- Preview before publishing

#### Step 4: Publish and Redirect

1. **Unpublish old page** (Content → find old page → Edit → uncheck Published)
2. **Update new page URL** to `/about-us`
3. **Publish new page** (check Published → Save)
4. **Add redirect** (if old page had different URL):

```bash
drush redirect:create /old-url /about-us
```

5. **Archive old content** (optional: keep for reference or delete)

### Paragraph to Block Mapping

| Paragraphs Type | Layout Builder Block | Notes |
|-----------------|---------------------|-------|
| **Banner** | Banner | Direct 1:1 mapping |
| **Text** | Simple Content | Basic text block |
| **1 Column** | Section: One column | Layout section |
| **2 Columns** | Section: Two column | Layout section |
| **3 Columns** | Section: Three column | Layout section |
| **4 Columns** | Section: Four column | Layout section |
| **Grid Content** | Cards | Card grid layouts |
| **Featured News** | Article Views | Recent articles |
| **Event Listing** | Event Views | Recent events |
| **Webform** | Webform Block | Embed forms |
| **Accordion** | Accordion | Q&A sections |
| **Gallery** | Gallery | Image galleries |
| **Promo Card** | Cards (single) | Promotional cards |
| **Membership Info** | Membership Calculator | Pricing tools |

**Missing a block type?** Check the [Block Library](/docs/user-documentation/layout-builder/block-library/) for 30+ available blocks.

---

## Step 5: Bulk Migration Tips

If you're migrating many pages, use these strategies to speed up the process:

### Batch Migration Strategy

1. **Create templates** for common page patterns:
   - Homepage pattern
   - Program landing page pattern
   - Event landing page pattern
   - Branch landing page pattern

2. **Use Layout Builder templates** (if available):
   - Save frequently-used layouts as templates
   - Clone similar pages and update content

3. **Assign migration in batches:**
   - Batch 1: High-priority pages (team leads)
   - Batch 2: Program pages (program coordinators)
   - Batch 3: News/blog migration (communications team)

### Quality Assurance Checklist

For each migrated page, verify:

- [ ] All content present (no missing Paragraphs)
- [ ] Images display correctly (proper sizing, alt text)
- [ ] Links work (internal and external)
- [ ] Forms function (webforms, buttons)
- [ ] Mobile responsive (test on phone)
- [ ] SEO metadata (page title, description)
- [ ] URL redirects (old URLs point to new)

---

## Step 6: Automated Migration (Advanced)

For sites with 500+ pages, automated migration using Drupal's Migrate API can speed up the process significantly.

### Prerequisites

- Experienced Drupal developer on staff or contracted
- Development environment (local DDEV/Docker setup)
- Version control (Git)
- Staging environment for testing

### High-Level Approach

**Note:** Automated migration is technically complex and requires custom development. This is an overview of the approach, not a complete tutorial.

1. **Create custom migration module** in `modules/custom/ymca_paragraphs_migration/`

2. **Map Paragraph types to Layout Builder blocks:**
   - Analyze your existing Paragraph types
   - Identify equivalent Layout Builder blocks
   - Document field mappings (Paragraph fields → Block fields)

3. **Develop migration process plugins:**
   - Custom PHP code to transform Paragraph data into Layout Builder section structure
   - Handle field mappings, media references, and nested structures
   - Create Layout Builder sections and regions
   - Place blocks in appropriate sections

4. **Test thoroughly:**
   - Migrate 5-10 sample pages
   - Verify content accuracy
   - Check responsive display
   - Test all links and media
   - Iterate and fix issues

5. **Run production migration:**
   - Backup database
   - Run migration in batches (100-200 pages at a time)
   - QA each batch before proceeding
   - Manual cleanup as needed

### Complexity Factors

**Simple migrations (easier):**
- Flat Paragraph structures (no nesting)
- Standard Paragraph types (Banner, Text, Cards)
- Small number of unique Paragraph types (5-10)

**Complex migrations (harder):**
- Deeply nested Paragraphs (3+ levels)
- Custom Paragraph types
- Complex field relationships
- Media galleries with custom displays

### When to Hire Professional Help

**Consider contracting a Drupal developer if:**
- You have 1,000+ pages to migrate
- You have complex nested Paragraphs structures
- You lack in-house Drupal development expertise
- You need the migration completed quickly (< 3 months)
- You want post-migration support and training

[**→ Contact YMCA community for developer recommendations**](https://ycloud.y.org/slack)

---

## Step 7: Post-Migration Cleanup

After migrating all content, clean up legacy systems:

### Archive Old Content

```bash
# Export old Paragraphs content for archival
drush sql:dump --gzip --result-file=backup-pre-paragraphs-cleanup.sql

# Unpublish all old landing pages
drush sqlq "UPDATE node_field_data SET status = 0 WHERE type = 'landing_page'"
```

### Remove Old Content Types (Optional)

**⚠️ Warning:** Only do this after confirming all content is successfully migrated!

```bash
# Disable old content types
# (This is permanent - backup first!)
drush entity:delete node --bundle=landing_page

# Or keep for reference but hide from editors
# Configuration → Content types → Landing Page → Edit → Disable
```

### Update Documentation

- Update internal wiki/documentation to reference new Layout Builder pages
- Train content editors on Layout Builder (if not done already)
- Update style guides to reflect new block library

---

## Troubleshooting

### Common Issues

**Issue:** "Block not found" error during automated migration

**Solution:** Ensure all Layout Builder blocks are enabled. Check that custom blocks exist before running migration.

---

**Issue:** Migrated pages missing images

**Solution:** Images may not migrate automatically. Check file references in source Paragraphs and manually map to Layout Builder blocks.

---

**Issue:** Layout looks different than original

**Solution:** Layout Builder uses different CSS classes than Paragraphs. Update theme styling or recreate layouts to match desired design.

---

**Issue:** Performance issues after migrating thousands of blocks

**Solution:** Set `reusable` field to `0` for migrated blocks to avoid permission calculation overhead:

```php
$block->set('reusable', FALSE);
```

---

## Related Resources

### YMCA Website Services Documentation

- [Content Types Library](/docs/user-documentation/content-types/) - Browse all available content types
- [Block Library](/docs/user-documentation/layout-builder/block-library/) - 30+ Layout Builder blocks
- [Layout Builder Documentation](/docs/user-documentation/layout-builder/) - Complete Layout Builder guide
- [Content Editor Getting Started](/docs/user-documentation/) - Learn Layout Builder basics
- [Site Builder Getting Started](/docs/site-builder/getting-started/) - Configuration and setup

### Get Help with Your Migration

- [YMCA Community Slack](https://ycloud.y.org/slack) - Join #development channel for migration questions
- [Monthly Community Calls](/blog/monthly-calls/) - Ask questions live, share experiences
- [GitHub Discussions](https://github.com/YCloudYUSA/yusaopeny/discussions) - Community Q&A
- [Troubleshooting Guide](/docs/troubleshooting/) - Common issues and solutions

---

## Decision Framework

Still not sure which approach to take? Use this decision tree:

```
Do you have < 100 pages to migrate?
├─ YES → Manual recreation (Approach 1)
└─ NO → Do you have < 500 pages?
    ├─ YES → Manual or Phased migration (Approach 1 or 3)
    └─ NO → Do you have in-house Drupal developers?
        ├─ YES → Automated migration (Approach 2)
        └─ NO → Do you have budget for professional help?
            ├─ YES → Hire Drupal developer
            └─ NO → Phased migration (Approach 3) - spread over 6-12 months
```

---

## Success Patterns from YMCA Migrations

**Medium-sized YMCA (200 pages):**
> Manual migration over 3 months worked well. The process provided an opportunity to refresh outdated content and archive low-value pages. Content editors reported that Layout Builder reduced page creation time from 45 minutes to 15 minutes.

**Large YMCA (500+ pages):**
> Phased approach with high-priority pages first. Migrated homepage and program landing pages manually (50 pages), then tackled category pages over 6 months. Still have low-traffic archive content on old system - planning to migrate or archive in year 2.

**Small YMCA (75 pages):**
> Completed manual migration in 6 weeks with part-time content editor. Spread work across team - different staff owned different content areas. Used migration as training opportunity to learn Layout Builder.

---

## Next Steps

Ready to start your migration? Follow these steps:

1. **[Run content audit](#step-2-audit-your-content)** - Understand your content volume
2. **[Choose approach](#step-3-choose-your-migration-approach)** - Manual, automated, or hybrid
3. **[Create migration plan](#step-5-bulk-migration-tips)** - Prioritize pages, assign owners
4. **[Start small](#step-4-manual-migration-process-recommended)** - Migrate 5-10 pages as pilot
5. **[Get help if needed](/community/partners/)** - Contact agency partners

**Questions?** Join [YMCA Community Slack](https://ycloud.y.org/slack) and ask in #development! 🚀

<style>
table {
  width: 100%;
  margin: 1rem 0;
  border-collapse: collapse;
}

table th,
table td {
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: left;
}

table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

code {
  background-color: #f4f4f4;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

pre code {
  background: none;
  color: inherit;
  padding: 0;
}
</style>
