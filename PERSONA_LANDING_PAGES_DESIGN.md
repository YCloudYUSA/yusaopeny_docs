# Persona Landing Pages - Design & Implementation Plan

**Date:** October 8, 2025
**Goal:** Create dedicated landing pages for each persona with card-based navigation matching homepage Quick Links

---

## Concept Overview

Each persona gets a dedicated landing page that expands on their homepage Quick Links with detailed card components. These pages act as curated starting points for each user type.

### User Flow
```
Homepage Persona Card → "Get Started" button → Persona Landing Page → Topic Cards → Specific Documentation
```

**Example:**
```
Homepage > Content Editor Card > Click "Get Started"
  ↓
/docs/content-editor/ (NEW Persona Landing Page)
  ↓
4 Cards: Getting Started | Layout Builder | Quick Reference | Troubleshooting
  ↓
Click "Layout Builder" card → /docs/user-documentation/layout-builder/
```

---

## Proposed Structure

### 1. Content Editor Landing Page
**Path:** `/docs/content-editor/_index.md`
**URL:** `http://localhost:1313/docs/content-editor/`
**Weight:** 15 (between Getting Started and Content Editor Guide)

**Hero Section:**
```markdown
---
title: "Content Editor Hub"
linkTitle: "Content Editor"
weight: 15
description: >
  Your starting point for creating and managing content on YMCA websites.
---

# Welcome, Content Editors! 🎨

Everything you need to create beautiful pages, manage content, and publish updates to your YMCA website.

**New here?** Start with our [Getting Started Guide](/docs/getting-started/).
```

**Card Grid (4 cards):**

| Card | Icon | Color | Description | CTA |
|------|------|-------|-------------|-----|
| Getting Started | 🚀 `rocket` | Teal | New to YMCA Website Services? Learn the basics of content editing. | Start Learning |
| Layout Builder | 📄 `th-large` | Purple | Build beautiful pages with drag-and-drop blocks. | Explore Blocks |
| Quick Reference | 📚 `book-open` | Blue | Common tasks, shortcuts, and cheat sheets. | View Reference |
| Troubleshooting | 🔧 `wrench` | Red | Stuck? Find solutions to common issues. | Get Help |

---

### 2. Developer Landing Page
**Path:** `/docs/developer/_index.md`
**URL:** `http://localhost:1313/docs/developer/`
**Weight:** 16

**Hero Section:**
```markdown
---
title: "Developer Hub"
linkTitle: "Developer"
weight: 16
description: >
  Build features, contribute code, and customize YMCA Website Services.
---

# Welcome, Developers! 💻

Tools, documentation, and resources for building with YMCA Website Services.

**Ready to code?** Check out the [Tech Stack](/docs/development/Open-Y-technology-pipeline/).
```

**Card Grid (4 cards):**

| Card | Icon | Color | Description | CTA |
|------|------|-------|-------------|-----|
| Tech Stack | ⚙️ `cogs` | Teal | Understand our architecture: Drupal, Composer, Docker. | View Stack |
| Quick Reference | 📚 `terminal` | Purple | Drush commands, Git workflows, and dev shortcuts. | See Commands |
| Troubleshooting | 🔧 `bug` | Blue | Debug errors, performance issues, and conflicts. | Debug Now |
| Contributing | 🤝 `code-branch` | Red | Submit PRs, follow standards, and join the community. | Start Contributing |

---

### 3. Site Builder Landing Page
**Path:** `/docs/site-builder/_index.md`
**URL:** `http://localhost:1313/docs/site-builder/`
**Weight:** 17

**Hero Section:**
```markdown
---
title: "Site Builder Hub"
linkTitle: "Site Builder"
weight: 17
description: >
  Install, configure, and deploy YMCA Website Services for your association.
---

# Welcome, Site Builders! 🏗️

Configure and launch YMCA websites for your organization.

**First time setup?** Follow the [Installation Guide](https://github.com/YCloudYUSA/yusaopeny-project#installation).
```

**Card Grid (4 cards):**

| Card | Icon | Color | Description | CTA |
|------|------|-------|-------------|-----|
| Installation | 🚀 `download` | Teal | Install YMCA Website Services using Composer. | Install Now |
| Small Y Template | ✨ `star` | Purple | Lightweight solution for small YMCAs. Perfect starting point. | Explore Small Y |
| Configuration | 🔧 `sliders-h` | Blue | Configure modules, themes, and integrations. | Configure Site |
| Troubleshooting | 🛠️ `toolbox` | Red | Solve installation and deployment issues. | Find Solutions |

---

### 4. Decision Maker Landing Page
**Path:** `/docs/decision-maker/_index.md`
**URL:** `http://localhost:1313/docs/decision-maker/`
**Weight:** 18

**Hero Section:**
```markdown
---
title: "Decision Maker Hub"
linkTitle: "Decision Maker"
weight: 18
description: >
  Understand the platform, explore features, and connect with the YMCA community.
---

# Welcome, Decision Makers! 📊

Explore YMCA Website Services capabilities and connect with the community.

**Evaluating the platform?** Start with [Getting Started](/docs/getting-started/).
```

**Card Grid (4 cards):**

| Card | Icon | Color | Description | CTA |
|------|------|-------|-------------|-----|
| Getting Started | 🚀 `compass` | Teal | Understand what YMCA Website Services can do for your Y. | Learn More |
| Small Y Template | ✨ `lightbulb` | Purple | Our flagship solution for resource-conscious YMCAs. | See Features |
| Release Notes | 📰 `newspaper` | Blue | Stay informed about new features and updates. | Read Updates |
| Community | 👥 `users` | Red | Connect with other YMCAs and the development team. | Join Community |

---

## Design System

### Card Component Template

```html
<div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
  <!-- Card 1 -->
  <div class="col">
    <div class="card h-100 shadow-sm border-0 hover-lift persona-topic-card">
      <div class="card-body p-4">
        <div class="d-flex align-items-start mb-3">
          <div class="card-icon-small me-3">
            <i class="fas fa-rocket fa-2x" style="color: var(--ymca-teal);"></i>
          </div>
          <div class="flex-grow-1">
            <h4 class="card-title mb-2">Getting Started</h4>
            <p class="card-text text-muted small mb-3">
              New to YMCA Website Services? Learn the basics of content editing,
              understand the interface, and create your first page.
            </p>
          </div>
        </div>
        <div class="mt-auto">
          <a href="/docs/getting-started/" class="btn btn-outline-primary btn-sm w-100">
            Start Learning <i class="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
        <hr class="my-3">
        <div class="small text-muted">
          <strong>You'll learn:</strong>
          <ul class="mb-0 mt-2">
            <li>Logging in and navigating the admin</li>
            <li>Creating your first landing page</li>
            <li>Understanding content types</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Card 2, 3, 4... -->
</div>

<style>
.persona-topic-card {
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.persona-topic-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 167, 157, 0.15) !important;
  border-color: var(--ymca-teal);
}

.card-icon-small {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 167, 157, 0.1), rgba(0, 167, 157, 0.05));
  flex-shrink: 0;
}
</style>
```

---

## Content Structure for Each Card

### Card Anatomy
1. **Icon + Title** - Visual identifier
2. **Description** (2-3 sentences) - What this topic covers
3. **CTA Button** - Primary action
4. **"You'll learn" list** - 3-4 specific outcomes/topics

### Example: Content Editor > Layout Builder Card

```html
<div class="col">
  <div class="card h-100 shadow-sm border-0 hover-lift persona-topic-card">
    <div class="card-body p-4">
      <div class="d-flex align-items-start mb-3">
        <div class="card-icon-small me-3" style="background: linear-gradient(135deg, rgba(88, 44, 131, 0.1), rgba(88, 44, 131, 0.05));">
          <i class="fas fa-th-large fa-2x" style="color: var(--ymca-purple);"></i>
        </div>
        <div class="flex-grow-1">
          <h4 class="card-title mb-2">Layout Builder</h4>
          <p class="card-text text-muted small mb-3">
            Build beautiful, flexible pages with Layout Builder's drag-and-drop interface.
            Add sections, blocks, and customize your page design without code.
          </p>
        </div>
      </div>
      <div class="mt-auto">
        <a href="/docs/user-documentation/layout-builder/" class="btn btn-outline-primary btn-sm w-100">
          Explore Blocks <i class="fas fa-arrow-right ms-2"></i>
        </a>
      </div>
      <hr class="my-3">
      <div class="small text-muted">
        <strong>You'll learn:</strong>
        <ul class="mb-0 mt-2">
          <li>Adding sections and blocks</li>
          <li>Banner, cards, and grid components</li>
          <li>Section styling and layouts</li>
          <li>Publishing and previewing changes</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

---

## Card Content Details

### Content Editor Cards

#### Card 1: Getting Started
- **Description:** New to YMCA Website Services? Learn the basics of content editing, understand the interface, and create your first page.
- **You'll learn:**
  - Logging in and navigating the admin
  - Creating your first landing page
  - Understanding content types
  - Working with media and images

#### Card 2: Layout Builder
- **Description:** Build beautiful, flexible pages with Layout Builder's drag-and-drop interface. Add sections, blocks, and customize your page design without code.
- **You'll learn:**
  - Adding sections and blocks
  - Banner, cards, and grid components
  - Section styling and layouts
  - Publishing and previewing changes

#### Card 3: Quick Reference
- **Description:** Common tasks, keyboard shortcuts, and quick answers. Bookmark this page for instant access to frequently-used workflows.
- **You'll learn:**
  - Creating pages and articles
  - Uploading images
  - Managing menus
  - Publishing workflows

#### Card 4: Troubleshooting
- **Description:** Stuck? Find solutions to common content editing issues like blocks not appearing, images not uploading, or styling problems.
- **You'll learn:**
  - Fixing block visibility issues
  - Resolving media upload errors
  - Cache clearing procedures
  - When to contact support

---

### Developer Cards

#### Card 1: Tech Stack
- **Description:** Understand YMCA Website Services architecture: Drupal 11, Composer workflows, Docker environments, and development tools.
- **You'll learn:**
  - Drupal 11 core and modules
  - Composer dependency management
  - Local development setup (Docksal/DDEV)
  - CI/CD pipeline

#### Card 2: Quick Reference
- **Description:** Drush commands, Git workflows, debugging techniques, and developer shortcuts. Essential commands at your fingertips.
- **You'll learn:**
  - Common Drush commands
  - Configuration import/export
  - Cache clearing and rebuilding
  - Database updates

#### Card 3: Troubleshooting
- **Description:** Debug WSOD, permission errors, Composer conflicts, and performance issues. Comprehensive error solutions.
- **You'll learn:**
  - Debugging White Screen of Death
  - Fixing Composer dependencies
  - Resolving permission errors
  - Performance optimization

#### Card 4: Contributing
- **Description:** Submit pull requests, follow code standards, and join the YMCA Website Services community. Your contributions matter!
- **You'll learn:**
  - Contribution workflow
  - Code review standards
  - Pull request guidelines
  - Community communication

---

### Site Builder Cards

#### Card 1: Installation
- **Description:** Install YMCA Website Services using Composer. Step-by-step guide for setting up your first YMCA website.
- **You'll learn:**
  - System requirements
  - Composer installation
  - Database configuration
  - Initial site setup

#### Card 2: Small Y Template
- **Description:** Lightweight solution designed for small YMCAs. Modern design system with essential features and simplified administration.
- **You'll learn:**
  - What's included in Small Y
  - Installation via Composer
  - Key differences from full distribution
  - Best use cases

#### Card 3: Configuration
- **Description:** Configure modules, themes, menus, and integrations. Set up Activity Finder, branches, and other YMCA-specific features.
- **You'll learn:**
  - Module configuration
  - Theme customization
  - Menu structure
  - Activity Finder setup

#### Card 4: Troubleshooting
- **Description:** Solve installation issues, deployment errors, and configuration problems. Get your site running smoothly.
- **You'll learn:**
  - Installation troubleshooting
  - Permission and ownership fixes
  - Server configuration issues
  - Database connection errors

---

### Decision Maker Cards

#### Card 1: Getting Started
- **Description:** Understand what YMCA Website Services can do for your Y. Explore features, capabilities, and community resources.
- **You'll learn:**
  - Platform overview
  - Key features and benefits
  - Success stories
  - Implementation options

#### Card 2: Small Y Template
- **Description:** Our flagship solution for resource-conscious YMCAs. Modern design, essential features, and simplified maintenance.
- **You'll learn:**
  - Small Y value proposition
  - Cost and resource savings
  - Feature comparison
  - Migration path from legacy systems

#### Card 3: Release Notes
- **Description:** Stay informed about new features, security updates, and improvements. See what's coming in future releases.
- **You'll learn:**
  - Latest release (Drupal 11.1.x)
  - Recent feature additions
  - Security updates
  - Upgrade timeline

#### Card 4: Community
- **Description:** Connect with 400+ YMCAs using the platform. Join monthly calls, ask questions, and share experiences.
- **You'll learn:**
  - Monthly community calls
  - Message board access
  - Slack community
  - How to get support

---

## Homepage Integration

### Update "Get Started" Buttons

Currently, persona card "Get Started" buttons point to generic pages. Update them to point to new persona landing pages:

```html
<!-- Content Editor Card -->
<a href="/docs/content-editor/" class="btn btn-primary">Get Started</a>

<!-- Developer Card -->
<a href="/docs/developer/" class="btn btn-success">Get Started</a>

<!-- Site Builder Card -->
<a href="/docs/site-builder/" class="btn btn-warning text-white">Get Started</a>

<!-- Decision Maker Card -->
<a href="/docs/decision-maker/" class="btn btn-info text-white">Get Started</a>
```

---

## Sidebar Navigation

Add new persona pages to sidebar menu (in `config.toml` or via frontmatter):

```
Docs
├── Getting Started (weight: 5)
├── Small Y (weight: 10)
├── Content Editor (weight: 15) ← NEW
├── Developer (weight: 16) ← NEW
├── Site Builder (weight: 17) ← NEW
├── Decision Maker (weight: 18) ← NEW
├── Content Editor Guide (weight: 20)
├── Development (weight: 30)
└── ...
```

---

## Responsive Design

### Mobile (< 768px)
- 1 column grid
- Cards stack vertically
- Full-width CTA buttons
- Collapsed "You'll learn" sections (optional)

### Tablet (768px - 991px)
- 2 column grid (2x2)
- Maintain card heights
- Responsive icons

### Desktop (≥ 992px)
- 2 column grid (2x2)
- Larger cards with more breathing room
- Hover animations

---

## Implementation Checklist

### Phase 1: Structure (30 min)
- [ ] Create `/docs/content-editor/_index.md`
- [ ] Create `/docs/developer/_index.md`
- [ ] Create `/docs/site-builder/_index.md`
- [ ] Create `/docs/decision-maker/_index.md`
- [ ] Set weights (15, 16, 17, 18)

### Phase 2: Content Editor Page (45 min)
- [ ] Write hero section
- [ ] Create 4 cards with descriptions
- [ ] Add "You'll learn" lists
- [ ] Add custom CSS for persona-topic-card
- [ ] Test responsive layout

### Phase 3: Developer Page (45 min)
- [ ] Write hero section
- [ ] Create 4 cards with descriptions
- [ ] Add "You'll learn" lists
- [ ] Test links

### Phase 4: Site Builder Page (45 min)
- [ ] Write hero section
- [ ] Create 4 cards (emphasize Small Y!)
- [ ] Add "You'll learn" lists
- [ ] Test links

### Phase 5: Decision Maker Page (45 min)
- [ ] Write hero section
- [ ] Create 4 cards
- [ ] Add "You'll learn" lists
- [ ] Test links

### Phase 6: Homepage Integration (30 min)
- [ ] Update 4 "Get Started" button URLs
- [ ] Test navigation flow
- [ ] Screenshot verification

### Phase 7: Polish (30 min)
- [ ] Ensure consistent card heights
- [ ] Verify all hover states
- [ ] Test on mobile/tablet
- [ ] Check sidebar menu

**Total Time:** ~5 hours

---

## Benefits

### For Users
1. **Clear onboarding path** - Homepage → Persona Landing → Specific Docs
2. **Curated content** - Only see what's relevant to your role
3. **Reduced cognitive load** - 4 focused topics instead of 100+ doc pages
4. **Progress tracking** - "You'll learn" lists set expectations

### For Documentation
1. **Better analytics** - Track persona engagement separately
2. **A/B testing** - Test different card descriptions/CTAs
3. **Progressive disclosure** - Start simple, drill down as needed
4. **SEO benefits** - Dedicated landing pages for each persona type

---

## Questions for Approval

1. **Naming Convention:**
   - Option A: `/docs/content-editor/` (kebab-case)
   - Option B: `/docs/personas/content-editor/` (nested under personas)
   - Option C: `/content-editor/` (top-level, outside /docs/)

   **Recommendation:** Option A (keeps them in /docs/, consistent with existing structure)

2. **Sidebar Placement:**
   - Option A: Between "Small Y" and "Content Editor Guide" (weights 15-18)
   - Option B: At the top, before "Getting Started" (weights 1-4)
   - Option C: Separate "Personas" section in sidebar

   **Recommendation:** Option A (logical flow from Getting Started → Persona → Specific Docs)

3. **Card Layout:**
   - Option A: 2x2 grid (4 cards, matches homepage Quick Links exactly)
   - Option B: 1x4 column (vertical stack, more detail per card)
   - Option C: 3+1 layout (3 primary cards, 1 secondary card)

   **Recommendation:** Option A (2x2 grid, clean and scannable)

4. **Additional Content:**
   - Should each persona page include:
     - [ ] Testimonials from that persona type?
     - [ ] Video introduction/tour?
     - [ ] "Success story" case study?
     - [ ] Estimated time to complete each topic?

   **Recommendation:** Start simple with cards only, add enhancements later based on feedback

---

## Next Steps

Once approved:
1. Review and approve naming, placement, and layout options
2. Implement Phase 1 (structure)
3. Build Content Editor page first (most users)
4. Test and screenshot
5. Build remaining 3 pages
6. Update homepage links
7. Deploy and monitor analytics

**Ready to proceed?**

---

**Document Version:** 1.0
**Last Updated:** October 8, 2025
