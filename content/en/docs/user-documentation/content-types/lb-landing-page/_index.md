---
title: Landing Page (Layout Builder)
description: Create flexible, high-converting landing pages with drag-and-drop Layout Builder for programs, campaigns, storytelling, and conversions.
weight: -1
---

The **Landing Page (Layout Builder)** content type is the foundation of your YMCA website. It's the most flexible, powerful content type for creating program pages, campaign pages, storytelling pages, and any content that doesn't fit other specialized content types. With drag-and-drop Layout Builder, you can create unique, conversion-focused pages without coding.

**Machine name:** `landing_page_lb`

**Designs:** [Mobile](<../../../../../../assets/img/designs/lb/Landing Page Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Landing Page Desktop.png>)

---

## When to Use Landing Page (Layout Builder)

### Use Landing Page (LB) for:

- ✅ **Program pages** - Youth sports, aquatics, wellness programs, childcare
- ✅ **Campaign pages** - Annual campaigns, fundraising drives, capital campaigns
- ✅ **About pages** - Mission, history, leadership team, community impact
- ✅ **Membership pages** - Join the Y, membership benefits, pricing tiers
- ✅ **Conversion pages** - Registration, donation, volunteer sign-up
- ✅ **Storytelling pages** - Impact stories, testimonials, success stories
- ✅ **Resource pages** - Guides, toolkits, FAQs, support resources
- ✅ **Static pages** - Evergreen content that doesn't change frequently

### Do NOT Use Landing Page (LB) for:

- ❌ **News/blogs** - Use Article (Layout Builder) for dated, categorized content
- ❌ **Events** - Use Event (Layout Builder) for date/time-specific events
- ❌ **Branch pages** - Use Branch content type for location pages
- ❌ **Camp microsites** - Use Camp and Camp Subpage content types

---

## Landing Page vs. Other Content Types

| Criteria | Use Landing Page (LB) | Use Article (LB) | Use Event (LB) |
|----------|----------------------|-----------------|--------------|
| **Purpose** | Evergreen pages, programs, campaigns | News, blogs, press releases | Date/time-specific events |
| **Date display** | No date needed | Visible publish date | Event date/time prominent |
| **Organization** | By topic/category in menu | By tags, date archives | By date, location, tags |
| **Lifespan** | Permanent (updated as needed) | Temporary (archived after time) | Temporary (after event date) |
| **Examples** | About Us, Programs, Membership | News article, blog post | Charity 5K, workshop |

**Simple rule:** If it's evergreen and doesn't have a date, use Landing Page. If it's news/dated, use Article. If it's an event with specific date/time, use Event.

---

## Creating a Landing Page

### Step 1: Add New Landing Page

1. Navigate to **Admin** > **Content** > **Add Content**
2. Select **Landing Page (Layout Builder)**
3. You'll see the Landing Page creation form

### Step 2: Fill in Required Fields

#### Title (Required)
The page name used internally and for SEO (not automatically displayed on page).

**Best practices:**
- Descriptive and keyword-rich
- Match URL alias (e.g., "Youth Programs" → `/youth-programs`)
- Keep under 60 characters for search display
- Manually add title to page using Banner block or heading

**Examples:**
- ✅ "Youth Programs at the YMCA"
- ✅ "Aquatics & Swimming Lessons"
- ✅ "Join the Y - Membership Information"
- ✅ "About Our YMCA"
- ❌ "Page 1" (not descriptive)
- ❌ "Youth" (too vague for SEO)

**Important:** Title field is NOT automatically displayed on the page. Add your visible title using:
- **Banner block** (hero image with title overlay)
- **Simple Content block** with H1 heading
- **Heading block** (if available in your theme)

#### Metadata (Recommended)

**Meta Description (Recommended):**
- 150-160 characters summarizing page content
- Include primary keyword and benefit
- Appears in search results below title
- Compelling preview that encourages clicks

**Example:**
> "Discover youth sports, swim lessons, and after-school programs at [Your Y]. Safe, fun, and inclusive programs for ages 5-18. Learn more and register today!"

**Meta Image (Recommended):**
- Image used for social media sharing (Facebook, LinkedIn, etc.)
- 1200x630px recommended (Facebook/LinkedIn optimal)
- Should represent page content
- Alternative to generic site logo

**Meta Tags (Advanced - Optional):**
- Advanced SEO configuration
- Only edit if you understand structured data/Schema.org
- Can include Open Graph tags, Twitter cards, etc.

### Step 3: Save and Configure Layout

1. Click **Save** to create the page
2. Click **Layout** tab to access Layout Builder
3. You'll see pre-configured sections:
   - **Header** - Site navigation and logo
   - **Banner** - Hero section (edge-to-edge, no margins)
   - **Body** - Main content area (with left/right margins)
   - **Footer** - Site footer

4. Begin building your page with Layout Builder blocks

[**→ Complete Layout Builder guide**](../../layout-builder/)

---

## Landing Page Design Patterns

### Hero Section (Above the Fold)

**Purpose:** Grab attention and communicate value proposition in 5 seconds or less

**Essential elements:**
1. **Compelling headline** - Clear benefit, action-oriented
2. **Supporting subheading** - Expand on headline, add context
3. **Hero image or video** - Show people, action, impact
4. **Primary CTA** - One clear action (Register, Join, Donate, Learn More)

**Block pattern:**
```
[Banner Section - edge-to-edge]
- Banner Block
  - Background image: Hero image (1920x1080px)
  - Headline: "Transform Your Life at the Y"
  - Subheading: "Programs for every age, every goal, every family"
  - CTA Button: "Find Your Program" → /programs
```

**Best practices:**
- **Headline:** 6-10 words, benefit-focused (not feature-focused)
  - ✅ "Discover Your Potential at the Y" (benefit)
  - ❌ "We Have Fitness Equipment" (feature)
- **Image:** Show real people from your YMCA, diverse representation
- **CTA:** Action verb + benefit ("Start Your Journey", "Join Today", "Give Hope")
- **Mobile:** Ensure text readable on mobile (test on phone before publishing)

---

### Body Content (Mid-Page)

**Purpose:** Provide details, build trust, address objections, guide toward conversion

**Common body patterns:**

**Program Overview Pattern:**
```
[Body Section - with margins]

[Simple Content Block]
H2: What We Offer
Paragraph: Brief overview of program categories (2-3 sentences)

[3-Column Cards Block]
- Card 1: Youth Programs (icon, title, description, "Learn More" link)
- Card 2: Aquatics (icon, title, description, "Learn More" link)
- Card 3: Wellness (icon, title, description, "Learn More" link)

[Simple Content Block]
H2: Why Choose Our Programs?
Paragraph: Benefits and differentiators
```

**Impact Story Pattern:**
```
[2-Column Section]

Left Column:
- Image Block: Photo of member/participant

Right Column:
- Simple Content Block
  H2: "Meet Sarah: How the Y Changed My Life"
  Quote: "The Y's swim program gave my daughter confidence..."
  - Sarah, YMCA Member
```

**Social Proof Pattern:**
```
[Simple Content Block]
H2: What Our Members Say

[Testimonial Carousel Block] (if available)
- Testimonial 1
- Testimonial 2
- Testimonial 3

[Simple Content Block - Stats]
"Join 150,000+ members nationwide"
[Icons with numbers: 1,200 programs | 500 locations | 75 years serving]
```

---

### Call-to-Action Strategy

**CTA Placement Best Practices (2025):**

**1. Above-the-fold CTA** - Primary action in hero section
- Best for: Pages with clear single action (Join, Donate, Register)
- Button or prominent link in banner

**2. Mid-page CTA** - After building value and trust
- Best for: Pages that need explanation first (programs, membership)
- After describing benefits, before testimonials

**3. End-of-page CTA** - Final conversion opportunity
- Best for: All landing pages (reinforce primary action)
- Can be same as hero CTA or complementary (e.g., "Questions? Contact Us")

**4. Sticky/Floating CTA** - Always visible as user scrolls
- Best for: Mobile-first design, complex pages
- Sticky button block or sticky header CTA

**Example CTA progression:**
```
Hero: "Join the Y Today" [Primary CTA]
↓
Mid-page (after benefits): "Find Your Membership" [CTA with options]
↓
Mid-page (after testimonials): "Experience the Y - Free Guest Pass" [Alternative CTA]
↓
Footer: "Questions? We're Here to Help" [Support CTA]
```

**CTA Design Tips:**
- **Color:** High contrast with background (YMCA red #E31E24 pops on white/gray)
- **Size:** Minimum 44x44px tappable area (mobile-friendly)
- **Text:** Action verb + benefit (not "Click Here")
  - ✅ "Start My Free Trial"
  - ✅ "Register My Child Today"
  - ❌ "Submit" or "Click Here"

---

## Landing Page Best Practices by Type

### Program Landing Page

**Purpose:** Showcase program, drive registration/sign-up

**Recommended structure:**
1. **Hero Section** - Program benefit and primary CTA
2. **What is [Program]?** - Overview (2-3 paragraphs)
3. **Program Benefits** - Cards or icons (3-5 benefits)
4. **Schedule & Pricing** - Table or accordion (by age group)
5. **Who Should Join?** - Target audience descriptions
6. **Instructor/Staff** - Bios with photos (builds trust)
7. **FAQs** - Accordion block (common questions)
8. **Testimonials** - Member quotes with photos
9. **CTA** - Register or learn more

**Block layout example:**
```
[Banner] Hero with "Transform Your Child Through Youth Sports"
[Body - Simple Content] Program overview
[Body - Cards] Benefits: Teamwork, Fitness, Fun, Character Building
[Body - Table] Schedule by age group (5-7, 8-10, 11-13)
[Body - Accordion] FAQs (What to bring, Cost, Skill level, etc.)
[Body - Cards] Testimonials with photos
[Body - Button] "Register Your Child Today"
```

---

### Membership Landing Page

**Purpose:** Convert visitors to members, highlight benefits and value

**Recommended structure:**
1. **Hero** - "Belong at the Y" with join CTA
2. **Membership Benefits** - Why join? (health, community, impact)
3. **Membership Types** - Cards with pricing tiers (Individual, Family, Senior)
4. **What's Included** - Checklist or icons (facilities, programs, discounts)
5. **Financial Assistance** - Sliding scale, scholarships available
6. **Member Stories** - Testimonials from real members
7. **Tour CTA** - "Schedule a Free Tour" button
8. **Final CTA** - "Join the Y Today"

**Pricing display example:**
```
[3-Column Cards Block]

INDIVIDUAL
$49/month
✓ Unlimited facility access
✓ Group fitness classes
✓ Member discounts
[Join Now Button]

FAMILY
$89/month
✓ 2 adults + children under 18
✓ All Individual benefits
✓ Family programming
[Join Now Button]

SENIOR (65+)
$39/month
✓ All facility access
✓ Senior programs
✓ Wellness support
[Join Now Button]
```

**Conversion tips:**
- Show value, not just price ("$1.63/day" vs "$49/month")
- Address objections in FAQ (cost, commitment, intimidation)
- Offer trial or guest pass ("Try us free for 7 days")
- Include financial assistance info (remove cost barrier)

---

### Campaign Landing Page

**Purpose:** Drive specific campaign action (donate, volunteer, participate)

**Recommended structure:**
1. **Hero** - Campaign theme with urgent CTA
2. **The Problem** - What issue you're addressing
3. **Our Solution** - How the Y helps (your programs/impact)
4. **Your Impact** - What donation/participation achieves
   - "$50 = 1 child in swim lessons for a month"
5. **Giving Levels** - Cards with donation tiers
6. **Donor Stories** - Why others give (testimonials)
7. **Urgency** - Countdown, matching gift, limited time
8. **Multiple CTAs** - Donate, volunteer, share

**Impact storytelling example:**
```
[2-Column Section]

Left: Image of child in swim lesson

Right:
H2: "Every Child Deserves to Swim Safely"

"Last year, drowning was the leading cause of death for children ages 1-4. Your donation gives kids like Emma the swimming skills to stay safe—and the confidence to thrive.

$25 = 1 swim lesson
$100 = 4 lessons (one month)
$500 = Full semester for one child

[Donate Now Button]
```

**Campaign best practices:**
- **Urgency:** Deadline, matching gift, or goal tracker
- **Specificity:** Concrete impact, not vague "support our work"
- **Emotion:** Real stories, real photos (with permission)
- **Social proof:** "$45K raised by 180 donors - join them!"
- **Multiple ways to help:** Donate, volunteer, share on social

---

### About/Storytelling Page

**Purpose:** Build trust, communicate mission, connect emotionally

**Recommended structure:**
1. **Hero** - Mission statement or impact stat
2. **Our Story** - History, founding, growth (brief timeline)
3. **Our Mission** - What we do, who we serve, why we exist
4. **Our Impact** - Stats, outcomes, testimonials
5. **Our People** - Leadership team, staff highlights
6. **Community Partners** - Logos, collaboration stories
7. **Join Our Story** - CTA to get involved

**Mission communication example:**
```
[Full-Width Banner]
Background: Community photo
Headline: "Strengthening Community for 75 Years"
Subheading: "At the Y, we believe everyone deserves the opportunity to learn, grow, and thrive."

[Body - Simple Content]
H2: Our Mission
"To put Christian principles into practice through programs that build healthy spirit, mind, and body for all."

[3-Column Stats]
150,000 members served
1,200 programs offered
$2M in financial assistance

[Impact Story]
[Photo] + "Meet Carlos: How the Y changed his family's life..."
```

**Storytelling best practices:**
- **Authentic images:** Real photos from your YMCA (not stock)
- **Specific stories:** Names, faces, concrete outcomes
- **"You" language:** "You can help change lives" (not "We change lives")
- **Emotional connection:** Show impact on real people
- **Clear CTA:** How visitors can join your mission

---

## Advanced Layout Builder Techniques

### Multi-Column Layouts

**When to use columns:**
- Compare options side-by-side (membership tiers, program levels)
- Feature + image layouts (text left, image right)
- Icon grids (3-4 columns of icon + text)

**Column best practices:**
- **2 columns:** 60/40 or 50/50 split (text/image or equal)
- **3 columns:** Cards, statistics, feature lists
- **4 columns:** Icons, small features, partner logos
- **Mobile:** All columns stack vertically on mobile (test!)

**Example:**
```
[2-Column Section: 60/40]

Left (60%):
- Simple Content
  H2: "Aquatics Programs for All Ages"
  Paragraph describing programs
  - Bullet list of offerings
  [Register Now Button]

Right (40%):
- Image Block
  Photo of swim lessons (vertical orientation works best)
```

---

### Background Colors & Sections

**Use background colors to:**
- Create visual hierarchy (alternate white/gray sections)
- Highlight important content (colored background for CTA section)
- Separate content themes (programs, testimonials, CTAs)

**Best practices:**
- **Alternate sections:** White → Light Gray → White → Light Gray
- **CTA sections:** YMCA Teal (#00A79D) or Red (#E31E24) background
- **Text contrast:** Ensure readable (dark text on light, light text on dark)
- **Accessibility:** Minimum 4.5:1 contrast ratio (WCAG AA standard)

**Example:**
```
[White Background Section]
- Simple Content: Program overview

[Light Gray Background Section]
- Cards: Program benefits

[YMCA Teal Background Section]
- Simple Content (white text): "Ready to Get Started?"
- Button (white with teal border): "Register Today"

[White Background Section]
- Testimonials
```

---

### Responsive Design

**Mobile optimization (critical - 82.9% access on mobile!):**

- **Touch targets:** Minimum 44x44px for buttons/links
- **Font sizes:** Minimum 16px body text (prevents zoom on iOS)
- **Images:** Optimize for mobile (under 500KB, compress)
- **Columns:** Test how columns stack on mobile
- **Forms:** Keep short (mobile users abandon long forms)

**Test checklist:**
- [ ] Text readable on phone (not too small)
- [ ] Images load quickly on 4G
- [ ] Buttons easy to tap (not too close together)
- [ ] Forms work smoothly (large input fields)
- [ ] No horizontal scrolling
- [ ] CTAs visible without scrolling (sticky button?)

**Tools:**
- Chrome DevTools device emulation (F12 → Toggle device toolbar)
- Test on real phone (iPhone and Android)
- Browser "responsive design mode"

---

## Conversion Optimization

### A/B Testing Ideas

**What to test:**
- **Headlines:** Benefit-focused vs. feature-focused
- **CTA text:** "Join Now" vs. "Start Your Free Trial"
- **CTA color:** Red vs. Teal vs. Blue
- **Image:** People vs. facility vs. activity
- **Form length:** Short (name/email) vs. long (detailed)
- **Social proof:** Testimonials vs. stats vs. logos

**Simple tests (no tools required):**
1. Change headline on homepage, track bounce rate + time on site (Google Analytics)
2. Test CTA button text, measure clicks (heatmap tools like Hotjar)
3. Try different hero images, monitor conversions

**"Three-word test" success story:**
One organization changed just three words in their CTA and saw **104% conversion lift**.
- Before: "Request a Quote"
- After: "Get My Free Quote"
(Added "My" and "Free" - personalization + value)

---

### Heatmaps & User Testing

**Tools to understand user behavior:**
- **Hotjar** - Heatmaps, session recordings, surveys (free tier available)
- **Microsoft Clarity** - Free heatmaps and session recordings
- **Google Analytics** - Behavior flow, exit pages, conversion funnels

**What to look for:**
- **Heatmaps:** Where do users click? Are they finding CTAs?
- **Scroll depth:** How far down page do users scroll? (CTA too low?)
- **Exit pages:** Where do users leave? Fix those pages first
- **Form abandonment:** Which form fields cause drop-off?

**User testing (no budget):**
- Ask 5 members to navigate your page while you watch
- "Find the membership pricing" - can they do it in 10 seconds?
- "Register for swim lessons" - where do they get stuck?

---

### SEO Optimization

**On-Page SEO checklist:**
- [ ] **Title tag:** Primary keyword near beginning (50-60 chars)
- [ ] **Meta description:** Compelling preview with keyword (150-160 chars)
- [ ] **URL:** Clean, descriptive (`/youth-programs` not `/node/12345`)
- [ ] **H1 heading:** One H1 per page (in Banner or Simple Content block)
- [ ] **H2/H3 subheadings:** Organize content, include related keywords
- [ ] **Alt text:** Describe all images (accessibility + SEO)
- [ ] **Internal links:** Link to related pages (2-5 links per page)
- [ ] **Page speed:** Optimize images, minimize blocks (< 3 second load)

**Keyword research tips:**
- Use Google Autocomplete (type "YMCA [your city]" - see suggestions)
- Check "People also ask" and "Related searches" on Google
- Focus on long-tail keywords (3-4 words) with lower competition
  - ✅ "youth swim lessons [city]" (specific, local)
  - ❌ "swimming" (too broad, high competition)

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Too Many CTAs
**Problem:** Multiple competing CTAs confuse users, reduce conversions
**Solution:** One primary CTA per page (can repeat same CTA, but not 5 different CTAs)

### ❌ Mistake 2: Walls of Text
**Problem:** Long paragraphs intimidate readers, especially on mobile
**Solution:** 2-3 sentences per paragraph, use bullets, headings, whitespace

### ❌ Mistake 3: Generic Stock Photos
**Problem:** Inauthentic images don't build trust, feel corporate
**Solution:** Use real photos from your YMCA - real members, real staff, real programs

### ❌ Mistake 4: Buried Value Proposition
**Problem:** Visitors don't understand what you offer in 5 seconds
**Solution:** Clear headline + subheading in hero section (not "Welcome to Our Website")

### ❌ Mistake 5: No Social Proof
**Problem:** Visitors don't trust claims without evidence
**Solution:** Add testimonials, stats, logos, member quotes

### ❌ Mistake 6: Missing Mobile Optimization
**Problem:** 82.9% of users on mobile have poor experience
**Solution:** Test on real phone, ensure text readable, buttons tappable

### ❌ Mistake 7: Weak CTAs
**Problem:** "Click here" or "Submit" don't motivate action
**Solution:** Action verb + benefit ("Start Your Free Trial", "Get My Pass")

---

## Troubleshooting

### Title Not Displaying on Page

**Problem:** Entered title but doesn't appear on published page

**Solution:** Title field is for SEO/admin only. Add visible title using:
- Banner block with headline
- Simple Content block with H1 heading
- Heading block (if available)

---

### Layout Looks Different on Mobile

**Problem:** Desktop layout perfect but mobile is broken

**Solutions:**
- Columns stack on mobile - test order makes sense
- Reduce image sizes (large images slow mobile load)
- Simplify mobile layout (hide decorative elements if needed)
- Test on real phone (emulator not always accurate)
- Check block configuration for mobile-specific settings

---

### Page Loading Slowly

**Problem:** Page takes >3 seconds to load (bad for SEO and conversions)

**Solutions:**
- **Optimize images:** Compress to under 500KB each (use TinyPNG, Squoosh)
- **Reduce blocks:** Too many blocks (especially complex ones) slow page
- **Enable caching:** Check site performance settings (Admin → Configuration → Performance)
- **Use CDN:** If available, enable CDN for images/assets
- **Test speed:** Use PageSpeed Insights (Google) or GTmetrix

---

### SEO Not Working

**Problem:** Page not ranking in search results

**Solutions:**
- **Give it time:** New pages take 1-3 months to rank
- **Check indexing:** Use Google Search Console to verify page is indexed
- **Optimize title/description:** Include target keyword naturally
- **Add internal links:** Link to this page from other pages on site
- **Build backlinks:** Get other sites to link to your page (partners, community pages)
- **Mobile-friendly:** Google prioritizes mobile-friendly pages

---

## Related Resources

- [Layout Builder Documentation](../../layout-builder/) - Complete Layout Builder guide
- [Block Library](../../layout-builder/block-library/) - 30+ Layout Builder blocks
- [Text Editor Guide](../../text-editor/) - Format content with WYSIWYG editor
- [Content Types Library](../) - Compare all content types
- [SEO Best Practices](../../seo/) - Optimize for search engines

---

## Need Help?

- [YMCA Community Slack](https://ycloud.y.org/slack) - #content-editors channel
- [Monthly Community Calls](/blog/monthly-calls/) - Ask questions live
- [Troubleshooting Guide](/docs/troubleshooting/) - Common solutions
- [Quick Reference](/docs/quick-reference/) - Fast answers

**Happy building!** Landing Page (Layout Builder) is your most powerful tool for creating high-converting, mission-driven pages that engage your community and drive results. 🚀

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
