# Homepage Popular Topics Link Validation

**Date:** October 8, 2025
**Page:** http://localhost:1313/ - Popular Topics Section (Lines 343-392)

---

## Current State vs. Reality

### 1. ⚠️ **Upgrading Card** (Border: Primary/Blue)

| Link Text | Current URL | Status | Actual Page |
|-----------|-------------|--------|-------------|
| Upgrade Guide | `/docs/development/` | ❌ **BROKEN** | Should be `/docs/development/drupal-10-update/` |
| Release Schedule | `/docs/development/` | ❌ **BROKEN** | Should be `/docs/development/Open-Y-Release-Schedule-and-Guidelines/` |
| Release Notes | `/blog/releases/` | ✅ **CORRECT** | Points to releases blog |

**Problems:**
- Two links point to same generic page `/docs/development/`
- Users can't find specific upgrade information
- Release schedule not accessible from homepage

**Proposed Fix:**
```html
<h5 class="card-title"><i class="fas fa-arrow-circle-up text-primary"></i> Upgrading</h5>
<ul class="list-unstyled">
  <li><a href="/docs/development/drupal-10-update/">Drupal 10 → 11 Upgrade</a></li>
  <li><a href="/docs/development/Upgrade path/">Upgrade Path Guide</a></li>
  <li><a href="/blog/releases/">Release Notes</a></li>
</ul>
```

---

### 2. ⚠️ **Components Card** (Border: Success/Green)

| Link Text | Current URL | Status | Actual Page |
|-----------|-------------|--------|-------------|
| Content Types | `/docs/content-structure/` | ✅ **ACCEPTABLE** | Points to content structure docs |
| User Guide | `/docs/user-documentation/` | ⚠️ **MISLEADING** | Now called "Content Editor Guide" |
| UI Kit | `/ui-kit/` | ⚠️ **MISLEADING** | Just a Figma embed, not really "Components" |

**Problems:**
- "User Guide" link uses old terminology (renamed to "Content Editor Guide")
- "UI Kit" is just Figma embed, not actual components documentation
- Missing link to Layout Builder components (most important!)

**Proposed Fix:**
```html
<h5 class="card-title"><i class="fas fa-puzzle-piece text-success"></i> Components</h5>
<ul class="list-unstyled">
  <li><a href="/docs/user-documentation/layout-builder/">Layout Builder Blocks</a></li>
  <li><a href="/docs/content-structure/">Content Types</a></li>
  <li><a href="/ui-kit/">Design System</a></li>
</ul>
```

**Alternative Option (Remove "Components", Add "Support"):**
```html
<h5 class="card-title"><i class="fas fa-life-ring text-success"></i> Support</h5>
<ul class="list-unstyled">
  <li><a href="/docs/quick-reference/">Quick Reference</a></li>
  <li><a href="/docs/troubleshooting/">Troubleshooting</a></li>
  <li><a href="/docs/getting-started/">Getting Started</a></li>
</ul>
```

---

### 3. ⚠️ **Configuration Card** (Border: Warning/Yellow)

| Link Text | Current URL | Status | Actual Page |
|-----------|-------------|--------|-------------|
| Setup Guides | `/docs/howto/` | ✅ **CORRECT** | Points to How-to guides |
| Tech Stack | `/docs/development/` | ❌ **BROKEN** | Should be `/docs/development/Open-Y-technology-pipeline/` |
| Best Practices | `/docs/development/` | ❌ **BROKEN** | Should be `/docs/development/Code-Review-Quality-Best-Practices/` |

**Problems:**
- Two links point to same generic page `/docs/development/`
- Tech Stack page exists but isn't linked
- Best Practices page exists but isn't linked

**Proposed Fix:**
```html
<h5 class="card-title"><i class="fas fa-cogs text-warning"></i> Configuration</h5>
<ul class="list-unstyled">
  <li><a href="/docs/howto/">Setup Guides</a></li>
  <li><a href="/docs/development/Open-Y-technology-pipeline/">Technology Pipeline</a></li>
  <li><a href="/docs/development/Server Requirements/">Server Requirements</a></li>
</ul>
```

**Alternative (More relevant to "Configuration"):**
```html
<h5 class="card-title"><i class="fas fa-cogs text-warning"></i> Installation & Setup</h5>
<ul class="list-unstyled">
  <li><a href="https://github.com/YCloudYUSA/yusaopeny-project#installation">Installation Guide</a></li>
  <li><a href="/docs/small-y/">Small Y Template</a></li>
  <li><a href="/docs/development/Server Requirements/">Server Requirements</a></li>
</ul>
```

---

### 4. ✅ **Contributing Card** (Border: Info/Light Blue)

| Link Text | Current URL | Status | Actual Page |
|-----------|-------------|--------|-------------|
| Contribution Guide | `/docs/contribution-guidelines/` | ✅ **CORRECT** | Points to contribution docs |
| Code Standards | `/docs/development/` | ❌ **BROKEN** | Should be `/docs/development/Code-Review-Quality-Best-Practices/` |
| GitHub Repo | `https://github.com/YCloudYUSA/yusaopeny` | ✅ **CORRECT** | External GitHub link |

**Problems:**
- "Code Standards" points to generic `/docs/development/` page
- Specific code standards page exists but isn't linked

**Proposed Fix:**
```html
<h5 class="card-title"><i class="fas fa-hands-helping text-info"></i> Contributing</h5>
<ul class="list-unstyled">
  <li><a href="/docs/contribution-guidelines/">Contribution Guide</a></li>
  <li><a href="/docs/development/Code-Review-Quality-Best-Practices/">Code Standards</a></li>
  <li><a href="https://github.com/YCloudYUSA/yusaopeny">GitHub Repo</a></li>
</ul>
```

---

## Summary of Issues

### Critical Issues (❌)
1. **6 out of 12 links** (50%) point to wrong or generic pages
2. **3 links** all point to the same generic `/docs/development/` page
3. Specific pages exist but aren't accessible from homepage

### Link Accuracy Scorecard
- ✅ **Correct:** 4/12 (33%)
- ⚠️ **Misleading:** 2/12 (17%)
- ❌ **Broken/Wrong:** 6/12 (50%)

---

## Recommended Action Plan

### Option A: Fix Existing Cards (Conservative)
**Time:** ~30 minutes
**Scope:** Update URLs to point to correct existing pages

1. Upgrading Card:
   - Change "Upgrade Guide" → `/docs/development/drupal-10-update/`
   - Change "Release Schedule" → `/docs/development/Open-Y-Release-Schedule-and-Guidelines/`

2. Components Card:
   - Change "User Guide" text to "Content Editor Guide"
   - Add Layout Builder link

3. Configuration Card:
   - Change "Tech Stack" → `/docs/development/Open-Y-technology-pipeline/`
   - Change "Best Practices" → `/docs/development/Server Requirements/`

4. Contributing Card:
   - Change "Code Standards" → `/docs/development/Code-Review-Quality-Best-Practices/`

### Option B: Redesign Cards for 2025 (Recommended)
**Time:** ~2 hours
**Scope:** Restructure cards to reflect current priorities and new pages

**Proposed 4-Card Layout:**

1. **🚀 Getting Started** (New!)
   - Getting Started Guide
   - Small Y Template
   - Installation Guide

2. **📚 Support & Reference** (Replaces "Components")
   - Quick Reference
   - Troubleshooting
   - Content Editor Guide

3. **⚙️ Development** (Replaces "Configuration" + "Upgrading")
   - Drupal 10 → 11 Upgrade
   - Technology Pipeline
   - Code Standards

4. **🤝 Contributing** (Keep as-is, fix links)
   - Contribution Guide
   - Code Standards
   - GitHub Repo

### Option C: Add 5th Card
**Time:** ~1 hour
**Scope:** Keep existing 4, fix their links, add new "Support" card

Adds "Support" card with Quick Reference, Troubleshooting, Getting Started

---

## Decision Required

**Which option should we implement?**

- [ ] Option A: Quick fix (30 min)
- [ ] Option B: Redesign for 2025 (2 hours) - **RECOMMENDED**
- [ ] Option C: Add 5th card (1 hour)

---

**Next Steps:**
1. Review and approve this analysis
2. Choose implementation option
3. Update `/content/en/_index.html` with new links
4. Test all links locally
5. Take screenshots to verify
