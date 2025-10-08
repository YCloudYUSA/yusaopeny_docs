---
title: Camp Subpage (Layout Builder)
description: Create flexible camp microsite pages for activities, schedules, packing lists, and registration information.
weight: -1
---

The **Camp Subpage (Layout Builder)** content type allows you to build comprehensive camp microsites with flexible, drag-and-drop pages for activities, schedules, packing lists, registration, and more.

**Machine name:** `camp_lp`

**Designs:** [Mobile](<../../../../../../assets/img/designs/lb/Camp Subpage Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Camp Subpage Desktop.png>)

---

## When to Use Camp Subpage (Layout Builder)

### Use Camp Subpage (LB) for:

- ✅ **Activity pages** - Detailed descriptions of camp activities (swimming, archery, hiking)
- ✅ **Schedule pages** - Daily schedules, weekly calendars, session timelines
- ✅ **Packing lists** - What to bring, what not to bring, gear recommendations
- ✅ **Registration pages** - How to register, deadlines, forms, pricing details
- ✅ **FAQ pages** - Common questions about safety, health, policies, refunds
- ✅ **Staff pages** - Meet the counselors, director bios, staff qualifications
- ✅ **Policies pages** - Rules, safety protocols, medical procedures, cancellation policies

### Do NOT Use Camp Subpage (LB) for:

- ❌ **Main camp location page** - Use Camp content type for the primary camp landing page
- ❌ **Branch day camps** - Use Program Subcategory or Landing Page (LB) instead
- ❌ **Event-specific pages** - Use Event (Layout Builder) for time-specific camp events

---

## Camp Subpage vs. Other Content Types

| Criteria | Use Camp Subpage (LB) | Use Camp | Use Program Subcategory |
|----------|----------------------|----------|-------------------------|
| **Purpose** | Internal microsite pages | Main camp landing page | Branch day camp programs |
| **Parent page** | Requires Camp page | Standalone | Requires Program page |
| **Menus** | Inherits camp menus | Creates camp menus | Uses site navigation |
| **Location** | Outdoor camp facilities | Outdoor camp locations | Branch facilities |
| **Examples** | Activities, schedules, packing lists | Camp Widjiwagan homepage | Summer Day Camp |

**Simple rule:** Camp Subpage is for **additional pages** within a camp microsite. Camp is the **main landing page**. Program Subcategory is for **branch-based** day camps.

---

## Creating a Camp Subpage

### Prerequisites

Before creating Camp Subpages, you must:

1. **Create a parent Camp page** - Navigate to **Admin** > **Content** > **Add Content** > **Camp**
2. **Set up Camp menus** - Configure Camp Menu and Camp Quick Links on the parent Camp page
3. **Enable Layout Builder on Camp page** - Check "Use Layout Builder" on the Camp page

[**→ See Camp content type documentation**](../camp/)

### Step 1: Add New Camp Subpage

1. Navigate to **Admin** > **Content** > **Add Content**
2. Select **Camp Subpage** (or **Camp Landing Page** in older versions)
3. You'll see the Camp Subpage creation form

### Step 2: Fill in Required Fields

#### Title (Required)
The page headline that appears at the top and in navigation menus.

**Best practices:**
- Be specific and descriptive ("Daily Schedule" not "Schedule")
- Use terminology parents/campers understand
- Keep under 60 characters for menu display
- Match menu link text exactly

**Examples:**
- ✅ "What to Pack for Camp"
- ✅ "Daily Schedule & Activities"
- ✅ "How to Register"
- ✅ "Meet Our Camp Staff"
- ❌ "Info" (too vague)
- ❌ "Everything You Need to Know About What to Bring to Camp Coleman This Summer" (too long)

#### Camp (Required)
The parent Camp page this subpage belongs to.

**How to select:**
1. Click in the **Camp** field
2. Start typing the name of your Camp page (e.g., "Camp Coleman")
3. Select from autocomplete dropdown

![Camp Subpage admin with Camp selection field](../../camp/camp--lp-select.png)

**Important:** This creates the parent-child relationship and ensures camp menus appear on this subpage.

### Step 3: Configure Layout

After clicking **Save and edit layout**, you'll see the Layout Builder interface with camp menus pre-populated.

![Camp Subpage layout with inherited menus](../../camp/camp--lp-menus.png)

**What's pre-populated:**
- ✅ Camp Quick Links (utility menu)
- ✅ Camp Menu (main navigation)
- ✅ Site logo and branding
- ✅ Camp Header layout

**You now add:**
- Content sections (1 column, 2 column, etc.)
- Layout Builder blocks (Text, Cards, Images, etc.)
- Camp-specific content

[**→ See Layout Builder documentation**](../../layout-builder/)

### Step 4: Add Content Blocks

Common block patterns for Camp Subpages:

#### Activity Page Example
```
[Banner Block] - Hero image of activity
[Simple Content Block] - Overview paragraph
[Cards Block] - Skill levels (Beginner, Intermediate, Advanced)
[Accordion Block] - FAQ about the activity
[Gallery Block] - Photos from past sessions
```

#### Schedule Page Example
```
[Simple Content Block] - Introduction to daily flow
[Table Block] - Daily schedule table
[Accordion Block] - Schedule variations by age group
[Simple Content Block] - Special event callouts
```

#### Packing List Page Example
```
[Banner Block] - Header image
[Simple Content Block] - Introduction
[2-Column Section]
  - Left: "What to Bring" (bulleted list)
  - Right: "What NOT to Bring" (bulleted list)
[Accordion Block] - Optional items by activity
[Cards Block] - Gear recommendations with links
```

#### Registration Page Example
```
[Banner Block] - Registration header
[Simple Content Block] - Key dates and deadlines
[Cards Block] - Pricing tiers (week 1, week 2, full summer)
[Webform Block] - Registration interest form
[Accordion Block] - Payment FAQ
[Simple Content Block] - Contact information
```

### Step 5: Add to Camp Menu

Camp Subpages are **not automatically added** to camp navigation.

**To add your new subpage to the Camp Menu:**

1. Go to your parent **Camp** page → **Layout** tab
2. Find the **Camp Menu** block → Click <kbd><i class="fas fa-pencil"></i></kbd> **Configure**
3. Click **Edit links**
4. Click **Add new link**
5. Fill in:
   - **Menu link title:** Display name (e.g., "Daily Schedule")
   - **Link:** Internal path (e.g., `/camp-subpage/daily-schedule`) or start typing page title
   - **Enabled:** Checked
   - **Show as expanded:** Checked (if it has child items)
6. **Save** the link
7. **Save** the menu configuration
8. **Update** the block
9. **Save layout** on the Camp page

**Pro Tip:** Menu changes on the Camp page will reflect on all Camp Subpages since menus are copied when subpages are created.

### Step 6: Preview and Publish

1. Click **Save layout** to create draft
2. Click **Preview** to see how page looks
3. Check that camp menus display correctly
4. Verify navigation between camp pages works
5. Test mobile responsive display
6. Check **Published** checkbox
7. Click **Save** to publish live

---

## Camp Subpage Best Practices

### Microsite Structure

**Recommended camp microsite structure:**
```
Camp Coleman (Camp page)
├── About Camp Coleman (Camp Subpage)
├── Daily Schedule (Camp Subpage)
├── Activities (Camp Subpage)
│   ├── Swimming (Camp Subpage - child)
│   ├── Archery (Camp Subpage - child)
│   └── Hiking (Camp Subpage - child)
├── What to Pack (Camp Subpage)
├── Registration (Camp Subpage)
├── Staff (Camp Subpage)
└── FAQ (Camp Subpage)
```

**Menu organization tips:**
- Group related pages (all activities under "Activities" parent)
- Limit top-level menu items to 5-7 (avoid overwhelming parents)
- Use child menu items for detailed sub-topics
- Order by user journey (About → Schedule → Activities → Registration)

### Seasonal Content Planning

**Content planning timeline:**

| Timeline | Action | Content Type |
|----------|--------|--------------|
| **2-3 months before** | Publish registration, dates, pricing | Registration page |
| **1-2 months before** | Update activities, schedules, staff bios | Activity/Staff pages |
| **3-4 weeks before** | Release packing lists, FAQ updates | Packing/FAQ pages |
| **1 week before** | Final reminders, check-in details | Updates across pages |
| **During camp** | Photo galleries, daily updates | Gallery blocks, news |
| **After camp** | Testimonials, next year preview | Testimonial blocks |

**Why timing matters:**
- SEO: Google needs 1-2 months to crawl and rank seasonal content
- Parents: Research and compare camps 2-3 months in advance
- Planning: Staff needs lead time to prepare content

### Content Freshness

**Update frequency by page type:**
- **Registration pages:** Update 3-4 months before each season (dates, pricing, deadlines)
- **Activity pages:** Annual review (new activities, updated descriptions)
- **Packing lists:** Annual review + weather-based updates
- **FAQ pages:** Update as questions arise (rolling updates)
- **Staff pages:** Update when staff changes (usually annually)
- **Photo galleries:** Update during/after each camp session

### Parent-Focused Writing

**Write for your audience - parents and guardians:**
- **Safety first:** Address safety concerns upfront (certified staff, medical procedures, supervision ratios)
- **Clear logistics:** Dates, times, drop-off/pick-up, what to bring
- **Authenticity:** Use real photos, real camper testimonials, real staff bios
- **Scannable:** Use bullet points, headings, short paragraphs (2-3 sentences)
- **Action-oriented:** Clear calls to action (Register Now, Download Packing List, Contact Us)

**Example - Good vs. Bad:**

❌ **Bad (vague, jargon):**
> "Camp Coleman offers a comprehensive aquatics program with certified instruction in a supervised environment."

✅ **Good (specific, parent-focused):**
> **Swimming Program**
>
> All campers swim daily with Red Cross certified lifeguards. We offer:
> - Beginner lessons (learn to swim)
> - Intermediate skills (stroke improvement)
> - Advanced training (diving, water safety)
> - Free swim periods (supervised fun)
>
> **Safety:** 1 lifeguard per 10 swimmers. All campers take swim test on Day 1.

### Accessibility

**Make content accessible:**
- **Alt text:** Describe all images (especially activity photos)
- **Headings:** Use H2, H3 structure for screen readers
- **Links:** Descriptive link text ("Download packing list PDF" not "click here")
- **Color contrast:** Ensure text readable on backgrounds
- **Tables:** Use proper table headers for schedules

### Mobile Optimization

**70% of parents browse camp info on mobile:**
- Test all pages on phone/tablet before publishing
- Use responsive images (compress to under 500KB)
- Avoid wide tables (use accordion blocks for schedules on mobile)
- Keep forms short (only essential fields)
- Make buttons large and tappable (minimum 44x44px)

---

## Common Patterns by Page Type

### Activity Page

**Purpose:** Detailed description of single camp activity

**Recommended blocks:**
1. **Banner** - Activity hero image
2. **Simple Content** - What is this activity? (2-3 paragraphs)
3. **Cards** - Skill levels or age groups
4. **Gallery** - Photos from past sessions
5. **Accordion** - FAQs (equipment, safety, experience level)
6. **Simple Content** - Staff qualifications for this activity

**SEO tip:** Include keywords like "camp [activity] for kids" in title and first paragraph

---

### Daily Schedule Page

**Purpose:** Show typical day at camp

**Recommended blocks:**
1. **Simple Content** - Overview of daily flow
2. **Table** or **Accordion** - Hour-by-hour schedule
3. **Cards** - Highlight special activities (campfire, talent show)
4. **Accordion** - Schedule variations by age group
5. **Simple Content** - Evening activities and lights-out

**Pro Tip:** Use Accordion blocks for schedules on mobile (better than wide tables)

---

### Packing List Page

**Purpose:** Help parents pack appropriately

**Recommended blocks:**
1. **Banner** - Packing theme image
2. **Simple Content** - General packing guidance
3. **Two-column section:**
   - Left: **What to Bring** (bulleted list in Simple Content)
   - Right: **What NOT to Bring** (bulleted list in Simple Content)
4. **Accordion** - Optional items by activity (horseback riding gear, etc.)
5. **Cards** - Recommended gear with purchase links
6. **Download** - Printable packing list PDF

**Content tips:**
- Group by category (clothing, toiletries, bedding, personal items)
- Specify quantities ("3-5 t-shirts" not just "shirts")
- Explain WHY for restricted items ("No electronics - we focus on outdoor connection")

---

### Registration Page

**Purpose:** Guide parents through registration process

**Recommended blocks:**
1. **Banner** - Registration header
2. **Alert** - Key deadlines and dates (use alert block if available)
3. **Simple Content** - How to register (step-by-step)
4. **Cards** - Pricing options (early bird, regular, late)
5. **Webform** - Registration interest form
6. **Accordion** - Payment FAQs (deposits, refunds, financial aid)
7. **Button** - Link to external registration system (Daxko, CampMinder, etc.)
8. **Simple Content** - Contact info for questions

**Conversion tips:**
- Show total cost upfront (no hidden fees)
- Offer multiple payment options (deposit + installments)
- Address objections in FAQ (cancellation policy, refunds)
- Create urgency (early bird deadline, limited spots)

---

### FAQ Page

**Purpose:** Answer common parent concerns

**Recommended blocks:**
1. **Simple Content** - FAQ introduction
2. **Accordion** - Questions grouped by category:
   - Safety & Supervision
   - Health & Medication
   - Daily Activities
   - What to Bring
   - Communication & Visits
   - Refunds & Cancellations
3. **Simple Content** - Contact info for unlisted questions

**FAQ best practices:**
- Group questions by topic (use accordion sections)
- Write conversationally ("What if my child gets homesick?" not "Homesickness policy")
- Link to related pages (packing list, schedule, activities)
- Update seasonally based on actual parent questions

---

### Staff Page

**Purpose:** Build trust by introducing camp team

**Recommended blocks:**
1. **Banner** - Staff team photo
2. **Simple Content** - Staff philosophy and qualifications
3. **Cards** - Staff bios with photos (Director, Program Director, Head Counselor)
4. **Simple Content** - Counselor training and certifications
5. **Testimonials** - Parent/camper quotes about staff (if testimonial block available)

**Bio tips:**
- Include photo, name, role, certifications
- Add personal touch (years at camp, favorite activity)
- Highlight safety credentials (CPR, First Aid, lifeguard)
- Show diversity of staff (age, background, skills)

---

## Camp Menu Strategy

### Menu Types

**Camp Quick Links** (utility menu in header):
- Contact
- Register
- Dates & Pricing
- FAQ
- Packing List

**Camp Menu** (main navigation):
- About
- Schedule
- Activities (with child items)
- Staff
- Registration

### Menu Best Practices

**Navigation principles:**
- **Limit top-level items:** 5-7 maximum
- **Logical order:** Follow parent journey (About → What We Do → How to Register)
- **Descriptive labels:** "Daily Schedule" not "Schedule"
- **Consistent naming:** Use same terminology across site

**Example menu structure:**
```
Camp Quick Links (utility):
- Register Now
- Dates & Pricing
- Contact Us
- FAQ

Camp Menu (main):
- About Camp Coleman
- Daily Schedule
- Activities ▼
  - Swimming
  - Archery
  - Hiking & Nature
  - Arts & Crafts
- What to Pack
- Registration
```

---

## SEO Best Practices for Camp Subpages

### Page Titles

- **Format:** `[Topic] | [Camp Name]` (e.g., "Daily Schedule | Camp Coleman")
- **Length:** 50-60 characters
- **Keywords:** Include primary search term (activity name, "camp schedule", "packing list")

### Meta Descriptions

- **Length:** 150-160 characters
- **Include:** Camp name, key benefit, call to action
- **Example:** "Camp Coleman's daily schedule balances outdoor activities, skill-building, and fun. View our hour-by-hour schedule for ages 7-15. Register today!"

### Image Optimization

- **File names:** Descriptive (`camp-coleman-archery.jpg` not `IMG_1234.jpg`)
- **Alt text:** Describe image for accessibility and SEO ("Campers practicing archery with certified instructor")
- **Compression:** Keep under 500KB (use TinyPNG or similar)
- **Dimensions:** 1920x1080px for banners, 800x600px for content images

### Internal Linking

- Link between camp subpages ("See our [Daily Schedule](#) for activity times")
- Link to registration from all pages (sticky CTA, footer button)
- Link to Camp homepage for location/contact
- 2-5 internal links per page

### Content Freshness

- Update dates annually (schedule, registration, pricing)
- Add new photos each season (galleries, staff, activities)
- Refresh FAQ based on real parent questions
- Google favors recently updated seasonal content

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Not Adding Subpages to Menu
**Problem:** New pages invisible to users
**Solution:** Always add new Camp Subpages to Camp Menu after creation

### ❌ Mistake 2: Outdated Dates/Pricing
**Problem:** Parents see old information, lose trust
**Solution:** Calendar reminder to update registration pages 3 months before season

### ❌ Mistake 3: Walls of Text
**Problem:** Parents don't read long paragraphs
**Solution:** Use bullets, accordions, cards for scannable content

### ❌ Mistake 4: Missing Parent Concerns
**Problem:** FAQ doesn't address real questions
**Solution:** Track actual parent questions, update FAQ quarterly

### ❌ Mistake 5: Stock Photos Only
**Problem:** Looks generic, not authentic
**Solution:** Use real photos from your camp (with parent permission)

### ❌ Mistake 6: No Clear Call to Action
**Problem:** Parents browse but don't register
**Solution:** Registration CTA on every page (button, sticky header, footer)

### ❌ Mistake 7: Buried Registration Info
**Problem:** Parents can't find how to sign up
**Solution:** Registration link in Camp Quick Links + CTA on every subpage

---

## Use Cases & Examples

### Use Case 1: Summer Camp Activity Microsite

**Goal:** Showcase 8 core camp activities with detailed pages

**Structure:**
- Camp page: Camp Pinewood
- Camp Subpage: Activities (overview)
  - Camp Subpage: Swimming & Waterfront
  - Camp Subpage: Archery & Shooting Sports
  - Camp Subpage: Hiking & Nature
  - Camp Subpage: Arts & Crafts
  - Camp Subpage: Team Sports
  - Camp Subpage: Campfire & Songs
  - Camp Subpage: STEM & Robotics
  - Camp Subpage: Leadership Training

**Menu setup:**
```
Activities ▼
├── Swimming & Waterfront
├── Archery & Shooting Sports
├── Hiking & Nature
├── Arts & Crafts
├── Team Sports
├── Campfire & Songs
├── STEM & Robotics
└── Leadership Training
```

---

### Use Case 2: Session-Based Schedule Pages

**Goal:** Different schedules for different age groups

**Structure:**
- Camp Subpage: Daily Schedule (overview)
  - Camp Subpage: Tadpoles Schedule (ages 6-8)
  - Camp Subpage: Campers Schedule (ages 9-11)
  - Camp Subpage: Explorers Schedule (ages 12-14)
  - Camp Subpage: Leaders Schedule (ages 15-17)

**Each schedule page includes:**
- Hour-by-hour table
- Activity rotation explanation
- Special events callout
- Free time details

---

### Use Case 3: Registration Information Hub

**Goal:** One-stop registration resource

**Structure:**
- Camp Subpage: Registration (main)
  - Camp Subpage: Dates & Pricing
  - Camp Subpage: How to Register (step-by-step)
  - Camp Subpage: Payment Options
  - Camp Subpage: Financial Aid
  - Camp Subpage: Cancellation Policy
  - Camp Subpage: Registration FAQ

**Registration page includes:**
- Webform: Interest/waitlist signup
- Cards: Pricing tiers (early bird, regular, sibling discount)
- Button: Link to external registration system
- Accordion: Payment FAQ

---

## Troubleshooting

### Camp Menus Not Appearing on Subpage

**Problem:** Camp Subpage missing navigation menus

**Solutions:**
- Verify **Camp** field is filled in (must select parent Camp page)
- Check parent Camp page has menus configured
- Camp menus are copied when subpage is created - if Camp page menus were added later, you may need to manually add menu blocks to subpage layout
- Compare subpage Layout with parent Camp page Layout

---

### Menu Updates Not Reflecting on Subpages

**Problem:** Changed menu items on Camp page but subpages unchanged

**Solution:**
- Menu content (links, items) updates automatically across all pages
- Menu block configuration (which menu is selected) does NOT update automatically
- If you changed which menu is linked to the block, update each Camp Subpage layout individually

---

### Cannot Find Parent Camp in Dropdown

**Problem:** Camp field autocomplete doesn't show Camp page

**Solutions:**
- Verify Camp page is published
- Check Camp page is content type "Camp" (not Landing Page or other)
- Try typing exact camp title
- Clear cache (`drush cr`)

---

### Broken Links in Camp Menu

**Problem:** Menu links return 404 errors

**Solutions:**
- Verify linked Camp Subpage is published
- Check URL path is correct (use autocomplete when adding menu links)
- If page was deleted, remove menu link
- Clear cache

---

## Related Resources

- [Camp Content Type Documentation](../camp/) - Create parent Camp pages
- [Layout Builder Documentation](../../layout-builder/) - Build flexible layouts
- [Block Library](../../layout-builder/block-library/) - 30+ Layout Builder blocks
- [Content Editor Getting Started](../../../content-editor/) - Learn Layout Builder basics
- [Migrate to Layout Builder](../../../howto/migrate-paragraphs-to-layout-builder/) - Migrate legacy camp pages

---

## Need Help?

- [YMCA Community Slack](https://ycloud.y.org/slack) - #content-editors channel
- [Monthly Community Calls](/blog/monthly-calls/) - Ask questions live
- [Troubleshooting Guide](/docs/troubleshooting/) - Common solutions
- [Quick Reference](/docs/quick-reference/) - Fast answers

**Happy camping!** Camp Subpages help you create rich, informative microsites that give parents confidence and get campers excited. 🏕️

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
</style>
