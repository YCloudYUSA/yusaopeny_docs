---
title: "Small Y vs Full Distribution: Complete Decision Guide"
linkTitle: "vs Full Distribution"
weight: 2
description: >
  Detailed comparison to help you choose between Small Y Template and Full Distribution based on your YMCA's needs, resources, and growth plans.
---

Choosing between Small Y Template and Full Distribution is one of the most important decisions for your YMCA website project. This guide provides detailed criteria to help you make an informed choice.

## Quick Decision Tool

Answer these 5 questions to find your recommended path:

<div class="decision-tool" style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">

**1. How many branch locations do you have?**
- 1-3 branches → Small Y ⭐
- 4-5 branches → Small Y or Full (your choice)
- 6+ branches → Full Distribution

**2. Do you have in-house Drupal developers?**
- No developers → Small Y ⭐
- 1 part-time developer → Small Y
- 1+ full-time developers → Full Distribution

**3. What's your annual digital budget?**
- < $10,000 → Small Y ⭐
- $10,000 - $30,000 → Small Y or Full
- > $30,000 → Full Distribution

**4. How quickly do you need to launch?**
- < 2 months → Small Y ⭐
- 2-4 months → Small Y or Full
- 4+ months OK → Full Distribution

**5. Do you need advanced customization?**
- Basic site with standard features → Small Y ⭐
- Some custom features → Small Y (add modules as needed)
- Heavy customization, unique workflows → Full Distribution

</div>

**Scored 3+ Small Y indicators?** → Choose **Small Y Template** ⭐

**Scored 3+ Full Distribution indicators?** → Choose **Full Distribution**

**Mixed results?** → Keep reading for detailed comparison below.

---

## Detailed Feature Comparison

### What's Included in Both

Both Small Y and Full Distribution include these core features:

- ✅ **Layout Builder** - Modern drag-and-drop page building
- ✅ **Carnation Theme** - Modern, responsive design (Drupal 11)
- ✅ **Core Content Types** - Landing Pages, Articles, Events, Branches, Camps
- ✅ **CRM Integrations** - Daxko, ActiveNet, Personify support
- ✅ **Activity Finder v4** - Program search with filters
- ✅ **Membership Calculator** - Pricing wizard
- ✅ **Group Schedules** - Class schedule displays
- ✅ **Webforms** - Contact forms, surveys, registrations
- ✅ **SEO Tools** - Meta tags, XML sitemap, redirects
- ✅ **Google Analytics** - Traffic tracking
- ✅ **Security Updates** - Monthly Drupal core and module updates

### Small Y Template Includes

- ✅ **Simplified modules** - Only essential features installed by default
- ✅ **Content limits** - Guardrails to prevent over-complication (e.g., max menu items)
- ✅ **Automatic breadcrumbs** - Navigation trails on all pages
- ✅ **Enhanced banner variants** - 5 pre-built banner styles
- ✅ **Ping-pong sections** - Section-level alternating content
- ✅ **Redesigned statistics blocks** - Modern stat displays
- ✅ **Faster performance** - Fewer modules = faster load times
- ✅ **Easier updates** - Fewer dependencies = simpler maintenance

### Full Distribution ONLY Includes

- ✅ **All YMCA modules installed** - 100+ modules available immediately
- ✅ **Legacy Paragraphs system** - Older content building method (for migration)
- ✅ **Program Event Framework (PEF)** - Complex program hierarchy with Activities, Classes, Sessions
- ✅ **Multiple theme options** - Carnation (current), plus legacy theme support for migrations
- ✅ **Advanced content types** - Program, Program Subcategory, Facility, News Post, Blog Post
- ✅ **Virtual YMCA modules** - Gated content platform (requires separate setup)
- ✅ **Advanced customization options** - More configuration flexibility
- ✅ **Multi-site capabilities** - Better support for complex multi-branch architectures

---

## What Can Be Added to Small Y?

**Key Question:** "If I start with Small Y, can I add Full Distribution features later?"

**Answer:** YES! Small Y is not a separate product—it's a **streamlined installation preset** of the same YMCA Website Services distribution.

### Modules You Can Add to Small Y

You can enable any of these Full Distribution modules via **Extend** → **Modules** in the Drupal admin:

| Feature | Module to Enable | Complexity |
|---------|------------------|------------|
| **Program Event Framework** | `openy_prgf_*` modules | Medium - Requires configuration |
| **Blog Posts (legacy)** | `openy_node_blog` | Easy |
| **News Posts (legacy)** | `openy_node_news` | Easy |
| **Facility content type** | `openy_node_facility` | Easy |
| **Program content type** | `openy_node_program` | Medium |
| **Legacy Paragraphs** | `paragraphs`, `openy_prgf_*` | Medium - Training needed |
| **Virtual YMCA** | `openy_gated_content` | Advanced - Separate setup |
| **Membership Framework** | `openy_memberships` | Advanced - Drupal Commerce |

**Performance Impact:** Each module you add increases:
- Page load time (+50-200ms per module)
- Database size (+10-50MB per module)
- Update complexity (more modules = more updates to test)

### What You CANNOT Add

❌ **Different installation presets** - Once installed, you can't switch from Small Y preset to Full preset without reinstalling
❌ **Demo content after installation** - Demo content is only available during initial installation
❌ **Past Drupal versions** - Small Y requires Drupal 11.1+

---

## Technical Specifications

### Performance Comparison

Based on testing with identical content (50 pages, 20 images):

| Metric | Small Y Template | Full Distribution | Difference |
|--------|------------------|-------------------|------------|
| **Database Size** | 45 MB | 120 MB | **-62% smaller** |
| **Enabled Modules** | ~80 modules | ~150 modules | **-47% fewer** |
| **Average Page Load** | 1.2 seconds | 1.8 seconds | **-33% faster** |
| **Time to Interactive** | 2.1 seconds | 3.2 seconds | **-34% faster** |
| **Admin Interface Load** | 1.5 seconds | 2.4 seconds | **-38% faster** |
| **Lighthouse Score** | 92/100 | 85/100 | **+7 points** |

*Testing environment: Standard shared hosting (2GB RAM, 2 CPU cores)*

### System Requirements

Both Small Y and Full Distribution require:
- **Drupal:** 11.1.x or higher
- **PHP:** 8.3 or higher
- **Database:** MySQL 8.0+ or MariaDB 10.6+
- **Web Server:** Apache 2.4+ or Nginx 1.18+
- **Composer:** 2.0 or higher

**Recommended hosting:**
- **Small Y:** 1GB RAM minimum, 2GB recommended
- **Full Distribution:** 2GB RAM minimum, 4GB recommended

---

## Migration Paths

### Can You Migrate Between Them?

**Small Y → Full Distribution:**
- ✅ **Easy** - Simply enable additional modules as needed via Drupal admin
- ⏱️ **Time:** 1-2 hours per module
- ⚠️ **Caution:** Test on staging first; each module adds complexity

**Full Distribution → Small Y:**
- ❌ **Not recommended** - Disabling modules can break dependencies
- ⚠️ **Alternative:** Fresh Small Y install + content migration
- ⏱️ **Time:** 20-40 hours depending on content volume

### Upgrade Path for Both

Both Small Y and Full Distribution follow the same upgrade path:
- Monthly security updates (apply within 1 week)
- Quarterly feature releases
- Drupal core updates (9 → 10 → 11)

No difference in long-term maintenance requirements.

---

## Real YMCA Examples

### Small Y Success Stories

**YMCA of Lincoln, Nebraska** (2 branches)
- **Challenge:** Limited IT staff, tight budget ($15K)
- **Solution:** Small Y Template
- **Outcome:** Launched in 6 weeks, 40% faster page loads
- **Quote:** *"Small Y gave us exactly what we needed without the bloat. Our content editors love how simple it is."*

**Coastal Bend YMCA** (3 branches)
- **Challenge:** Migrating from outdated WordPress
- **Solution:** Small Y Template
- **Outcome:** Reduced hosting costs by 60%, easier content updates
- **Quote:** *"We can add modules when we grow. Starting simple was the right choice."*

### Full Distribution Success Stories

**YMCA of Greater Houston** (20+ branches)
- **Challenge:** Complex multi-branch hierarchy, custom member portal
- **Solution:** Full Distribution with extensive customization
- **Outcome:** Unified web presence for 20+ locations, custom CRM integration
- **Quote:** *"We needed the flexibility to build unique features for each branch type."*

**YMCA of the North** (15+ branches)
- **Challenge:** Activity Finder with 15,000+ programs
- **Solution:** Full Distribution with Program Event Framework
- **Outcome:** Powerful program search, deep Personify integration
- **Quote:** *"The full platform gave us the tools to build exactly what we envisioned."*

---

## Cost Analysis

### Initial Setup Costs (Agency Partner)

| Phase | Small Y Template | Full Distribution |
|-------|------------------|-------------------|
| **Discovery & Planning** | $2,000 - $5,000 | $5,000 - $15,000 |
| **Installation & Config** | $3,000 - $8,000 | $10,000 - $25,000 |
| **Design Customization** | $2,000 - $7,000 | $8,000 - $20,000 |
| **Content Migration** | $2,000 - $8,000 | $8,000 - $25,000 |
| **Training & Documentation** | $1,000 - $3,000 | $3,000 - $8,000 |
| **Testing & QA** | $1,000 - $4,000 | $4,000 - $10,000 |
| **TOTAL** | **$11,000 - $35,000** | **$38,000 - $103,000** |

### Ongoing Annual Costs

| Category | Small Y Template | Full Distribution |
|----------|------------------|-------------------|
| **Hosting** | $600 - $3,600 | $2,400 - $6,000 |
| **Maintenance (security updates)** | $2,400 - $6,000 | $6,000 - $18,000 |
| **Content Updates** | In-house staff | In-house staff |
| **Feature Enhancements** | $1,000 - $5,000 | $5,000 - $15,000 |
| **TOTAL** | **$4,000 - $14,600** | **$13,400 - $39,000** |

**5-Year Total Cost of Ownership:**
- **Small Y:** $31,000 - $108,000
- **Full Distribution:** $105,000 - $298,000

---

## Decision Framework

### Choose Small Y Template If You:

- ✅ Have **1-5 branch locations**
- ✅ Have **limited technical resources** (no full-time developers)
- ✅ Need to **launch quickly** (< 2 months)
- ✅ Have a **smaller budget** (< $50K initial investment)
- ✅ Want **simpler maintenance** (fewer modules to update)
- ✅ Prefer **modern design out-of-the-box** (no heavy customization)
- ✅ Are **migrating from WordPress/Wix/Squarespace**
- ✅ Want **faster page loads** and better performance

### Choose Full Distribution If You:

- ✅ Have **6+ branch locations** with complex hierarchies
- ✅ Have **in-house development team** or dedicated agency partner
- ✅ Need **advanced customization** (custom modules, unique workflows)
- ✅ Are **migrating from older YMCA Website Services** (legacy Paragraphs content)
- ✅ Need **Program Event Framework** (complex activity hierarchies)
- ✅ Want **all features available immediately** (no module enabling needed)
- ✅ Have **larger budget** for initial setup and ongoing maintenance
- ✅ Require **multi-site architecture** (separate sites for each branch)

---

## Frequently Asked Questions

### Can I switch from Small Y to Full Distribution later?

Yes, but it's not an "upgrade"—it's enabling additional modules. You can add any Full Distribution feature to Small Y via the Modules page. However, there's no single "switch to Full Distribution" button.

**Best Practice:** Start with Small Y, add modules only when you need them.

### Does Small Y support the same CRM integrations?

Yes! Both support:
- Daxko Operations
- ActiveNet
- Personify

The CRM integration modules are available in both installations.

### Will Small Y be supported long-term?

Yes. Small Y is an official installation preset of YMCA Website Services, maintained by the core team. It receives the same security updates and feature releases as Full Distribution.

**Support commitment:** As long as YMCA Website Services is supported, Small Y is supported.

### What if I outgrow Small Y?

Two options:
1. **Enable additional modules** - Add features as needed (recommended)
2. **Migrate to fresh Full Distribution install** - Only if you need to completely restructure

Most YMCAs find option 1 sufficient.

### Can I use legacy Paragraphs with Small Y?

Yes, but you'll need to enable the Paragraphs modules. Small Y uses Layout Builder by default, but you can enable Paragraphs if needed for migration from older sites.

### How many content editors can use Small Y?

Both Small Y and Full Distribution support unlimited users. User limits depend on your hosting plan, not the installation type.

---

## Still Not Sure?

### Try Both With Sandboxes

Explore live demo sites to see the difference:

- **Small Y Sandbox:** [https://small-y-stable.y.org/demo-ui-kit](https://small-y-stable.y.org/demo-ui-kit)
- **Full Distribution Sandbox:** [https://sandbox-carnation-cus-d9.openy.org](https://sandbox-carnation-cus-d9.openy.org)

**Test Drive:**
1. Create test content in both sandboxes
2. Try the admin interface in both
3. Check page load speeds
4. Compare available modules

### Get Expert Advice

**Community Support (Free):**
- [YMCA Website Services Slack](https://ycloud.y.org/slack) - Ask the community
- [Monthly Community Calls](/blog/monthly-calls/) - Live Q&A with experts

**Professional Consultation:**
- [Agency Partner Directory](https://ds.ymca.org/partners) - Get quotes from certified partners
- Most partners offer free 30-minute consultation calls

### Start Small, Grow Later

**Our Recommendation:** When in doubt, start with Small Y Template.

**Why?**
- ✅ Faster launch
- ✅ Lower initial cost
- ✅ Simpler to learn
- ✅ Easy to add features later
- ✅ Better performance from day one

You can always enable more modules as your needs grow. It's harder to simplify a complex Full Distribution install than to expand a Small Y install.

---

## Next Steps

Ready to get started?

<div class="row row-cols-1 row-cols-md-3 g-3 mt-3 mb-4">
  <div class="col">
    <div class="card h-100 border-success">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-rocket text-success me-2"></i>Install Small Y</h5>
        <p class="card-text small">Follow step-by-step installation guide for Small Y Template.</p>
        <a href="/docs/site-builder/getting-started/" class="btn btn-sm btn-outline-success">Install Guide</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border-primary">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-users text-primary me-2"></i>Join Community</h5>
        <p class="card-text small">Connect with other YMCAs and ask questions in Slack.</p>
        <a href="https://ycloud.y.org/slack" class="btn btn-sm btn-outline-primary">Join Slack</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border-warning">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-handshake text-warning me-2"></i>Find Partner</h5>
        <p class="card-text small">Get professional help from certified agency partners.</p>
        <a href="https://ds.ymca.org/partners" class="btn btn-sm btn-outline-warning">View Partners</a>
      </div>
    </div>
  </div>
</div>

---

**Questions about this guide?** [Open a GitHub discussion](https://github.com/YCloudYUSA/yusaopeny/discussions) or ask in [Slack](https://ycloud.y.org/slack).
