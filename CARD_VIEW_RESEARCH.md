# Card View Implementation Research

**Date:** October 8, 2025
**Constraint:** Maximum 4 cards per row (can be smaller than 2x2 grid)

---

## Summary

Research identified **7 high-priority pages** that would significantly benefit from card-styled views. These pages currently display lists of links or text that could be transformed into visual, scannable card grids.

---

## Option 1: Layout Builder Blocks Index ⭐ **HIGHEST PRIORITY**

**Page:** `/docs/user-documentation/layout-builder/_index.md`
**Current State:** Long text page with sidebar navigation to 28 block types
**Cards Needed:** 28 blocks

### Why This Needs Cards:
- Currently users must scroll through long text or navigate sidebar
- 28 different blocks are hard to discover
- Visual cards would make blocks immediately scannable
- Each block could show icon, name, description, and link

### Proposed Card Layout:
- **Desktop:** 4 cards per row (7 rows total)
- **Tablet:** 3 cards per row
- **Mobile:** 1 card per row

### Card Content:
Each card would include:
- **Icon** (Font Awesome or block-specific)
- **Block Name** (e.g., "Banner", "Accordion", "Cards")
- **1-sentence description**
- **"Learn More →" button**
- **Category badge** (e.g., "Content", "Layout", "Media")

### Block Categories:
1. **Hero/Banner Blocks:** Banner, Carousel, Promo Card
2. **Content Blocks:** Accordion, Tabs, Modal, Code, Table
3. **Grid Blocks:** Cards, Icon Grid, Grid CTA
4. **People Blocks:** Staff Members, Testimonials
5. **Location Blocks:** Location Finder, Simple Menu
6. **Activity Blocks:** Activity Finder, Simple Schedule, Repeat Schedules
7. **Views Blocks:** Article Views, Event Views, Related Articles, Related Events
8. **Media Blocks:** Partners/Sponsors
9. **Forms:** Webform, Donate
10. **System:** Breadcrumbs, Ping-pong, Statistics
11. **Header/Footer:** Navigation blocks

### Implementation Complexity: **HIGH**
- Need to read 28 subdirectories for descriptions
- Extract icons from each block documentation
- Create category taxonomy
- Design card component with category badges
- Estimated: **4-6 hours**

---

## Option 2: Content Types Index ⭐ **HIGH PRIORITY**

**Page:** `/docs/user-documentation/content-types/_index.md`
**Current State:** Bullet list with 12+ content types
**Cards Needed:** 15 content types (12 standalone + 3 helper)

### Why This Needs Cards:
- Currently just a flat bullet list
- No visual differentiation between content types
- Hard to scan and understand differences
- Could benefit from visual hierarchy

### Proposed Card Layout:
- **Desktop:** 3-4 cards per row
- **Tablet:** 2 cards per row
- **Mobile:** 1 card per row

### Card Content:
Each card would include:
- **Icon** (content-type specific)
- **Content Type Name**
- **1-2 sentence description**
- **Badge:** "Layout Builder" or "Paragraphs" or "Helper"
- **"Learn More →" button**

### Content Types to Display:

**Standalone - Layout Builder (Green badge):**
1. Article (Layout Builder)
2. Event (Layout Builder)
3. Branch
4. Camp
5. Facility
6. Landing Page (Layout Builder)
7. Program
8. Program Subcategory
9. Promotion

**Standalone - Paragraphs (Orange badge - deprecated):**
10. Blog Post
11. Landing Page
12. News Post

**Helper Types (Blue badge):**
13. Activity, Class, and Session
14. Alert
15. Membership

### Implementation Complexity: **MEDIUM**
- Read 15 content type pages for descriptions
- Assign appropriate icons
- Create badge system for Layout Builder vs Paragraphs
- Estimated: **2-3 hours**

---

## Option 3: Getting Started Page ⭐ **HIGH PRIORITY**

**Page:** `/docs/getting-started/_index.md`
**Current State:** Text-based persona sections with bullets
**Cards Needed:** 4 persona cards

### Why This Needs Cards:
- Currently just markdown headers and bullets
- Personas are the core navigation concept
- Should match the homepage persona block style
- Would create visual consistency

### Proposed Card Layout:
- **Desktop:** 2x2 grid (4 cards)
- **Tablet:** 2x2 grid
- **Mobile:** 1 column (4 cards stacked)

### Card Content:
Reuse persona card design from homepage:
1. **🎨 Content Editor**
   - Description: "You create and manage website content"
   - Quick Links: Layout Builder, Content Types, Media, Text Editor

2. **🏗️ Site Builder**
   - Description: "You configure site features and integrations"
   - Quick Links: Webforms, Schedules, Membership, Taxonomy

3. **👨‍💻 Developer**
   - Description: "You work with code and customize sites"
   - Quick Links: Development Guide, Content Structure, How-to, Contributing

4. **📊 Decision Maker**
   - Description: "You evaluate features and plan roadmaps"
   - Quick Links: Overview, Community, Sandboxes

### Implementation Complexity: **LOW**
- Reuse existing persona card CSS from homepage
- Extract quick links from current content
- Match YMCA brand colors
- Estimated: **1-2 hours**

---

## Option 4: How-to Guides Index ⭐ **HIGH PRIORITY**

**Page:** `/docs/howto/_index.md`
**Current State:** Minimal page, relies on sidebar navigation
**Cards Needed:** 11 guide cards

### Why This Needs Cards:
- Currently shows nothing - just a quote
- Users must navigate sidebar to find guides
- Task-based guides should be immediately visible
- Visual cards would improve discoverability

### Proposed Card Layout:
- **Desktop:** 4 cards per row (3 rows)
- **Tablet:** 3 cards per row
- **Mobile:** 1 card per row

### Card Content:
Each card would include:
- **Icon** (task-specific)
- **Guide Title**
- **1-sentence goal description**
- **Difficulty badge:** "Beginner", "Intermediate", "Advanced"
- **"Start Guide →" button**

### Guides to Display:
1. **Small Y Template** 🌟
   - Goal: "Set up a lightweight YMCA website"
   - Difficulty: Beginner

2. **Set Up Layout Builder**
   - Goal: "Enable drag-and-drop page building"
   - Difficulty: Beginner

3. **Migrate to Layout Builder**
   - Goal: "Convert Paragraphs pages to Layout Builder"
   - Difficulty: Advanced

4. **Track Users**
   - Goal: "Set up Google Analytics and monitoring"
   - Difficulty: Intermediate

5. **Use Two-Factor Authentication**
   - Goal: "Secure your admin account with 2FA"
   - Difficulty: Beginner

6. **Add Social Media Feeds**
   - Goal: "Display social feeds on your site"
   - Difficulty: Intermediate

7. **Configure Maps**
   - Goal: "Set up Google Maps integration"
   - Difficulty: Intermediate

8. **Use Structured Data**
   - Goal: "Improve SEO with schema.org markup"
   - Difficulty: Advanced

9. **Avoid Outdated Config**
   - Goal: "Prevent configuration conflicts"
   - Difficulty: Intermediate

10. **Install Cachet**
    - Goal: "Set up status page for downtime notices"
    - Difficulty: Advanced

11. **Canada Localization**
    - Goal: "Configure site for Canadian YMCAs"
    - Difficulty: Beginner

12. **Content Audit**
    - Goal: "Plan and organize your site content"
    - Difficulty: Beginner

### Implementation Complexity: **MEDIUM-HIGH**
- Read 11 guide pages for descriptions
- Determine difficulty levels
- Assign task-specific icons
- Create difficulty badge system
- Estimated: **3-4 hours**

---

## Option 5: Development Index ⭐ **HIGH PRIORITY**

**Page:** `/docs/development/_index.md`
**Current State:** Long page with 30+ links organized in sections
**Cards Needed:** 7 topic area cards

### Why This Needs Cards:
- Currently overwhelming wall of links
- Developers need to quickly find their task area
- 6-7 major topic areas could be visual cards
- Progressive disclosure - click card to see all links

### Proposed Card Layout:
- **Desktop:** 4 cards per row (2 rows)
- **Tablet:** 2 cards per row
- **Mobile:** 1 card per row

### Card Content:
Each card would include:
- **Icon** (topic-specific)
- **Topic Area Title**
- **Number of guides** (e.g., "5 guides")
- **2-3 top links** (expandable)
- **"View All →" button**

### Topic Area Cards:

1. **📋 Getting Started** (YMCA Teal)
   - Sandboxes
   - Tech Stack
   - Development Processes
   - Development FAQ

2. **🔧 Environment Setup** (YMCA Purple)
   - One-click Install
   - Solr Search Setup
   - SSL Certificates
   - Docker/Docksal

3. **🚀 Contributing** (YMCA Blue)
   - Contribution Guidelines
   - Code Review Standards
   - Pull Request Process
   - How to Add Features

4. **📦 Dependency Management** (YMCA Yellow)
   - Composer Constraints
   - Composer 2 Update
   - Decoupling Components
   - Drupal Dependencies

5. **🔄 Updates & Upgrades** (YMCA Red)
   - Update Process
   - Upgrade Guides
   - Important Versions
   - Security Updates

6. **🧪 Quality Assurance** (YMCA Teal)
   - Smoke Tests
   - Acceptance Testing
   - Code Quality Standards

7. **📜 Legal & Policies** (YMCA Purple)
   - Code of Conduct
   - Participant Agreement
   - Terms of Use

### Implementation Complexity: **MEDIUM**
- Categorize 30+ existing links into 7 topic areas
- Design expandable card component
- Add progressive disclosure interaction
- Estimated: **3-4 hours**

---

## Option 6: Content Editor Guide Index (Medium Priority)

**Page:** `/docs/user-documentation/_index.md`
**Current State:** Minimal page with just intro text
**Cards Needed:** 8-10 topic cards

### Why This Needs Cards:
- Currently shows almost nothing
- Users must navigate sidebar
- Content editors need visual topic discovery

### Proposed Card Layout:
- **Desktop:** 3-4 cards per row
- **Tablet:** 2 cards per row
- **Mobile:** 1 card per row

### Potential Topic Cards:
1. Layout Builder
2. Content Types
3. Blocks
4. Media Management
5. Text Editing
6. Menus & Navigation
7. Taxonomy
8. Webforms
9. Schedules
10. Paragraphs (deprecated)

### Implementation Complexity: **MEDIUM**
- Estimated: **2-3 hours**

---

## Option 7: Troubleshooting Index (Lower Priority)

**Page:** `/docs/troubleshooting/_index.md`
**Current State:** Long list of issues and solutions
**Cards Needed:** 10-12 issue category cards

### Why This Needs Cards:
- Users need to quickly find their specific issue
- Visual categories would improve triage
- Card-based layout more scannable than long list

### Proposed Card Layout:
- **Desktop:** 4 cards per row
- **Tablet:** 2 cards per row
- **Mobile:** 1 card per row

### Issue Category Cards:
1. **Installation Issues** 🔨
2. **White Screen of Death** ⚠️
3. **Permission Errors** 🔒
4. **Composer Conflicts** 📦
5. **Performance Issues** ⚡
6. **Layout Builder Problems** 🧩
7. **Database Errors** 🗄️
8. **Cache Issues** 🔄
9. **Module Conflicts** ⚙️
10. **Theme Problems** 🎨
11. **Migration Issues** 🚛
12. **Upgrade Failures** ⬆️

### Implementation Complexity: **MEDIUM**
- Categorize existing troubleshooting content
- Create issue-specific icons
- Design error-focused card style (red accents)
- Estimated: **2-3 hours**

---

## Recommended Implementation Priority

### Phase 1: Immediate Impact (Week 1)
1. ✅ **Layout Builder Blocks** (Option 1) - 4-6 hours
   - Highest traffic page for content editors
   - 28 blocks → visual card grid
   - Biggest UX improvement

2. ✅ **Getting Started Persona Cards** (Option 3) - 1-2 hours
   - Quick win, reuses existing design
   - Matches homepage consistency
   - Core navigation improvement

### Phase 2: High Value (Week 2)
3. ✅ **Content Types** (Option 2) - 2-3 hours
   - Essential reference page
   - Clear visual hierarchy needed

4. ✅ **How-to Guides** (Option 4) - 3-4 hours
   - Improves task-based discovery
   - Currently invisible guides

### Phase 3: Developer Experience (Week 3)
5. ✅ **Development Index** (Option 5) - 3-4 hours
   - Helps developers find resources faster
   - Progressive disclosure UX

### Phase 4: Polish (Week 4)
6. ⚪ **Content Editor Guide** (Option 6) - 2-3 hours
7. ⚪ **Troubleshooting** (Option 7) - 2-3 hours

---

## Card Design Specifications

### Card Size Constraints
- **Maximum:** 4 cards per row on desktop (as requested)
- **Minimum card width:** 250px
- **Maximum card width:** 350px
- **Card height:** Auto (maintain aspect ratio)

### Standard Card Anatomy
```html
<div class="doc-card">
  <div class="doc-card-icon">
    <i class="fas fa-icon"></i>
  </div>
  <div class="doc-card-badge">
    Category/Status Badge
  </div>
  <h3 class="doc-card-title">Card Title</h3>
  <p class="doc-card-description">
    1-2 sentence description of the topic
  </p>
  <ul class="doc-card-links">
    <li><a href="#">Quick Link 1</a></li>
    <li><a href="#">Quick Link 2</a></li>
  </ul>
  <a href="#" class="doc-card-cta">
    Learn More <i class="fas fa-arrow-right"></i>
  </a>
</div>
```

### Responsive Breakpoints
- **Desktop (≥1200px):** 4 cards per row
- **Laptop (992px-1199px):** 3 cards per row
- **Tablet (768px-991px):** 2 cards per row
- **Mobile (<768px):** 1 card per row

### Color Coding System
Use YMCA brand colors for card accents:
- **Teal (#00A79D):** Content Editor topics
- **Purple (#582C83):** Developer topics
- **Blue (#0060AF):** Site Builder topics
- **Red (#E31E24):** Decision Maker topics
- **Yellow (#FDB912):** Featured/Important items

---

## Total Implementation Effort

### If All 7 Options Implemented:
- **Phase 1 (High Priority):** 5-8 hours
- **Phase 2 (High Value):** 5-7 hours
- **Phase 3 (Developer):** 3-4 hours
- **Phase 4 (Polish):** 4-6 hours
- **Total:** ~17-25 hours

### If Only Phase 1+2 (Top 4):
- **Total:** ~10-15 hours

---

## Questions for Decision

1. **Which options should we prioritize?** (Recommend: Phase 1 + Phase 2)
2. **Should cards be interactive?** (Hover effects, expand/collapse)
3. **Icon source?** (Font Awesome, custom SVG, or emoji)
4. **Badge system?** (Categories, difficulty, status)
5. **Progressive disclosure?** (Show top 3 links, expand for more)
6. **Search integration?** (Filter cards by keyword)

---

## Next Steps

Once priorities are confirmed:
1. Create reusable card component CSS
2. Implement Option 1 (Layout Builder) as proof of concept
3. Iterate based on feedback
4. Roll out to remaining pages
5. Document card component for future use

---

**Status:** ⏳ AWAITING DECISION
**Updated:** October 8, 2025
