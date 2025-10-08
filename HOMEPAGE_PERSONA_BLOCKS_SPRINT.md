# Homepage Persona Blocks - Sprint Plan

**Date:** October 8, 2025
**Goal:** Add links to new pages (Getting Started, Quick Reference, Troubleshooting, Small Y) to persona blocks
**Page:** http://localhost:1313/ - Lines 26-124 (_index.html)

---

## Sprint Overview

**New Pages Created:**
- ✅ `/docs/getting-started/` - Persona-based onboarding
- ✅ `/docs/quick-reference/` - Cheat sheets and common commands
- ✅ `/docs/troubleshooting/` - Error solutions and debugging
- ✅ `/docs/small-y/` - Small Y template documentation (top-level priority)

**Current State:**
Each persona card has 3 quick links. We need to decide which new pages fit each persona.

---

## Persona 1: Content Editor

**Current Quick Links:**
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/user-documentation/">📄 Content Basics</a></li>
  <li><a href="/docs/howto/">🎨 Creating Pages</a></li>
  <li><a href="/docs/content-structure/">🧩 Components</a></li>
</ul>
```

### Option A: Add 2 new links (5 total)
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/getting-started/">🚀 Getting Started</a></li>  <!-- NEW -->
  <li><a href="/docs/user-documentation/layout-builder/">📄 Layout Builder</a></li>
  <li><a href="/docs/quick-reference/">📚 Quick Reference</a></li>  <!-- NEW -->
  <li><a href="/docs/user-documentation/content-types/">📝 Content Types</a></li>
  <li><a href="/docs/troubleshooting/">🔧 Troubleshooting</a></li>  <!-- NEW -->
</ul>
```
**Pros:** Complete coverage, all new pages included
**Cons:** Too many links (visual clutter)

### Option B: Replace 1 link, add 1 new (4 total) - RECOMMENDED
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/getting-started/">🚀 Getting Started</a></li>  <!-- NEW -->
  <li><a href="/docs/user-documentation/layout-builder/">📄 Layout Builder</a></li>
  <li><a href="/docs/quick-reference/">📚 Quick Reference</a></li>  <!-- NEW -->
  <li><a href="/docs/troubleshooting/">🔧 Troubleshooting</a></li>  <!-- NEW (optional) -->
</ul>
```
**Changes:**
- Remove: "Components" (too technical for content editors)
- Remove: "Creating Pages" (covered by Layout Builder)
- Add: Getting Started, Quick Reference, Troubleshooting

**Pros:** Focused on content editor needs
**Cons:** Loses direct link to general how-to guides

### Option C: Keep 3 links, replace strategically
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/getting-started/">🚀 Getting Started</a></li>  <!-- REPLACES Content Basics -->
  <li><a href="/docs/user-documentation/layout-builder/">📄 Layout Builder</a></li>  <!-- REPLACES Creating Pages -->
  <li><a href="/docs/quick-reference/">📚 Quick Reference</a></li>  <!-- REPLACES Components -->
</ul>
```
**Pros:** Clean, focused on top content editor needs
**Cons:** No troubleshooting link

### ❓ Decision for Content Editor:
- [ ] Option A: 5 links (complete)
- [ ] Option B: 4 links (recommended)
- [ ] Option C: 3 links (minimal)
- [ ] Custom: _______________

---

## Persona 2: Developer

**Current Quick Links:**
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/development/">⚙️ Dev Setup</a></li>
  <li><a href="/docs/development/">📦 Upgrade Guides</a></li>
  <li><a href="/docs/contribution-guidelines/">🤝 Contributing</a></li>
</ul>
```

**Note:** First two links go to same page!

### Option A: Fix duplicates, add new pages (5 total)
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/development/Open-Y-technology-pipeline/">⚙️ Tech Stack</a></li>  <!-- FIXED -->
  <li><a href="/docs/development/drupal-10-update/">📦 Upgrade to D11</a></li>  <!-- FIXED -->
  <li><a href="/docs/quick-reference/">📚 Quick Reference</a></li>  <!-- NEW -->
  <li><a href="/docs/troubleshooting/">🔧 Troubleshooting</a></li>  <!-- NEW -->
  <li><a href="/docs/contribution-guidelines/">🤝 Contributing</a></li>
</ul>
```
**Pros:** Fixes broken links, adds essential dev resources
**Cons:** 5 links might be too many

### Option B: Strategic 4 links - RECOMMENDED
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/development/Open-Y-technology-pipeline/">⚙️ Tech Stack</a></li>
  <li><a href="/docs/quick-reference/">📚 Quick Reference</a></li>  <!-- NEW (commands!) -->
  <li><a href="/docs/troubleshooting/">🔧 Troubleshooting</a></li>  <!-- NEW (critical!) -->
  <li><a href="/docs/contribution-guidelines/">🤝 Contributing</a></li>
</ul>
```
**Pros:** Prioritizes most-used dev resources (commands + errors)
**Cons:** Removes direct upgrade link

### Option C: Minimal 3 links (keep structure)
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/quick-reference/">📚 Quick Reference</a></li>  <!-- NEW -->
  <li><a href="/docs/troubleshooting/">🔧 Troubleshooting</a></li>  <!-- NEW -->
  <li><a href="/docs/contribution-guidelines/">🤝 Contributing</a></li>
</ul>
```
**Pros:** Most essential developer needs (commands, errors, contributing)
**Cons:** No architecture/tech stack link

### ❓ Decision for Developer:
- [ ] Option A: 5 links (complete)
- [ ] Option B: 4 links (recommended)
- [ ] Option C: 3 links (essential only)
- [ ] Custom: _______________

---

## Persona 3: Site Builder

**Current Quick Links:**
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="https://github.com/YCloudYUSA/yusaopeny-project#installation">🚀 Installation</a></li>
  <li><a href="/docs/howto/">🔧 Configuration</a></li>
  <li><a href="/docs/development/">☁️ Deployment</a></li>
</ul>
```

### Option A: Add Small Y (HIGH PRIORITY!) + utilities
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="https://github.com/YCloudYUSA/yusaopeny-project#installation">🚀 Installation</a></li>
  <li><a href="/docs/small-y/">✨ Small Y Template</a></li>  <!-- NEW - HIGH PRIORITY! -->
  <li><a href="/docs/quick-reference/">📚 Quick Reference</a></li>  <!-- NEW -->
  <li><a href="/docs/troubleshooting/">🔧 Troubleshooting</a></li>  <!-- NEW -->
</ul>
```
**Pros:** Prioritizes Small Y (main focus per user), adds essential utilities
**Cons:** Removes Configuration and Deployment links

### Option B: Small Y + Keep essentials - RECOMMENDED
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="https://github.com/YCloudYUSA/yusaopeny-project#installation">🚀 Installation</a></li>
  <li><a href="/docs/small-y/">✨ Small Y Template</a></li>  <!-- NEW - HIGH PRIORITY! -->
  <li><a href="/docs/howto/">🔧 Configuration</a></li>
  <li><a href="/docs/troubleshooting/">🛠️ Troubleshooting</a></li>  <!-- NEW -->
</ul>
```
**Pros:** Balances Small Y priority with practical needs
**Cons:** No Quick Reference (but can access via other personas)

### Option C: Small Y focus with Getting Started
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/getting-started/">🚀 Getting Started</a></li>  <!-- NEW -->
  <li><a href="/docs/small-y/">✨ Small Y Template</a></li>  <!-- NEW - HIGH PRIORITY! -->
  <li><a href="/docs/howto/">🔧 How-to Guides</a></li>
</ul>
```
**Pros:** Clean onboarding flow: Start → Small Y → Guides
**Cons:** No troubleshooting

### ❓ Decision for Site Builder:
- [ ] Option A: 4 links with utilities
- [ ] Option B: 4 links balanced (recommended)
- [ ] Option C: 3 links onboarding-focused
- [ ] Custom: _______________

**🔴 CRITICAL:** Small Y Template MUST be included (user specified "Main Focus")

---

## Persona 4: Decision Maker

**Current Quick Links:**
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/">📘 Overview</a></li>
  <li><span class="text-muted">🗺️ Roadmap <em>(on hold 2025)</em></span></li>
  <li><a href="/community/">👥 Community</a></li>
</ul>
```

### Option A: Replace Roadmap with Small Y Features
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/">📘 Overview</a></li>
  <li><a href="/docs/small-y/">✨ Small Y Features</a></li>  <!-- REPLACES Roadmap -->
  <li><a href="/community/">👥 Community</a></li>
</ul>
```
**Pros:** Shows flagship feature, removes "on hold" item
**Cons:** Loses future-looking roadmap mention

### Option B: Add Getting Started, keep Roadmap
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/getting-started/">🚀 Getting Started</a></li>  <!-- NEW -->
  <li><a href="/docs/small-y/">✨ Small Y Template</a></li>  <!-- NEW -->
  <li><span class="text-muted">🗺️ Roadmap <em>(on hold 2025)</em></span></li>
  <li><a href="/community/">👥 Community</a></li>
</ul>
```
**Pros:** Comprehensive info for decision-makers
**Cons:** 4 items (one disabled) might be cluttered

### Option C: Strategic replacement - RECOMMENDED
```html
<ul class="list-unstyled mt-2 mb-0">
  <li><a href="/docs/getting-started/">🚀 Getting Started</a></li>  <!-- REPLACES Overview -->
  <li><a href="/docs/small-y/">✨ Small Y Template</a></li>  <!-- REPLACES Roadmap -->
  <li><a href="/blog/releases/">📰 Release Notes</a></li>  <!-- NEW -->
  <li><a href="/community/">👥 Community</a></li>
</ul>
```
**Pros:** Action-oriented, shows current capabilities + plans
**Cons:** No general overview

### ❓ Decision for Decision Maker:
- [ ] Option A: Replace Roadmap only
- [ ] Option B: Add 2, keep all
- [ ] Option C: Strategic 4 links (recommended)
- [ ] Custom: _______________

---

## Cross-Cutting Concerns

### Question 1: Should all personas link to Quick Reference?
- [ ] Yes - It's universally useful (commands, shortcuts, etc.)
- [ ] No - Only developers and content editors need it
- [ ] Maybe - Add to 2-3 personas only

### Question 2: Should all personas link to Troubleshooting?
- [ ] Yes - Everyone encounters errors
- [ ] No - Only technical personas (Developer, Site Builder)
- [ ] Maybe - Content Editor + Developer + Site Builder (not Decision Maker)

### Question 3: Should we maintain 3 links per persona or vary?
- [ ] Strict 3 links - Clean, consistent visual design
- [ ] Flexible 3-4 links - Depends on persona needs
- [ ] Flexible 3-5 links - Maximum coverage

---

## Implementation Sprint

### Sprint Tasks (Estimated: 2-3 hours total)

#### Task 1: Fix Popular Topics Links (High Priority)
**Time:** 30 min - 2 hours (depending on option)
**Files:** `/content/en/_index.html` (lines 343-392)
**Dependencies:** HOMEPAGE_POPULAR_TOPICS_ANALYSIS.md decisions
**Options:**
- [ ] Option A: Quick fix URLs
- [ ] Option B: Redesign cards for 2025 ✅ RECOMMENDED
- [ ] Option C: Add 5th card

#### Task 2: Update Content Editor Persona Block
**Time:** 15 min
**Files:** `/content/en/_index.html` (lines 26-49)
**Decision:** _______________ (A/B/C/Custom)

#### Task 3: Update Developer Persona Block
**Time:** 15 min
**Files:** `/content/en/_index.html` (lines 52-74)
**Decision:** _______________ (A/B/C/Custom)

#### Task 4: Update Site Builder Persona Block
**Time:** 15 min
**Files:** `/content/en/_index.html` (lines 77-99)
**Decision:** _______________ (A/B/C/Custom)
**🔴 MUST INCLUDE:** Small Y Template link

#### Task 5: Update Decision Maker Persona Block
**Time:** 15 min
**Files:** `/content/en/_index.html` (lines 102-124)
**Decision:** _______________ (A/B/C/Custom)

#### Task 6: Test All Links
**Time:** 30 min
**Actions:**
- [ ] Verify all new links work locally
- [ ] Check mobile responsive layout
- [ ] Ensure hover states work
- [ ] Screenshot all persona cards
- [ ] Screenshot Popular Topics section

---

## Recommended Sprint Decisions (Team Review Required)

### My Recommendations:

**Popular Topics:**
- ✅ Option B: Redesign for 2025 (reflects current priorities)

**Content Editor:**
- ✅ Option B: 4 links - Getting Started, Layout Builder, Quick Reference, Troubleshooting

**Developer:**
- ✅ Option B: 4 links - Tech Stack, Quick Reference, Troubleshooting, Contributing

**Site Builder:**
- ✅ Option B: 4 links - Installation, Small Y Template ⭐, Configuration, Troubleshooting

**Decision Maker:**
- ✅ Option C: 4 links - Getting Started, Small Y Template ⭐, Release Notes, Community

**Cross-Cutting:**
- Quick Reference: Add to Content Editor + Developer
- Troubleshooting: Add to Content Editor + Developer + Site Builder
- Link count: Flexible 3-4 links per persona

---

## Approval Required

**Please review and approve:**

1. Popular Topics option: A / B / C / Custom: _______________
2. Content Editor option: A / B / C / Custom: _______________
3. Developer option: A / B / C / Custom: _______________
4. Site Builder option: A / B / C / Custom: _______________
5. Decision Maker option: A / B / C / Custom: _______________

**Once approved, I will implement all changes in a single sprint.**

---

**Document Version:** 1.0
**Next Update:** After approval and implementation
