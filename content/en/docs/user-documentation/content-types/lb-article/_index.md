---
title: Article (Layout Builder)
description: Create news articles, blog posts, and press releases with flexible Layout Builder layouts.
weight: -1
---

The **Article (Layout Builder)** content type is the modern, flexible way to publish news, blog posts, and press releases on your YMCA website. It combines all news-related content into a single content type with drag-and-drop Layout Builder capabilities.

**Machine name:** `article_lb`

**Designs:** [Mobile](<../../../../../../assets/img/designs/lb/Article Mobile.png>) | [Desktop](<../../../../../../assets/img/designs/lb/Article Desktop.png>)

{{% youtube FBtQmfy9C7Q %}}

---

## When to Use Article (Layout Builder)

### Use Article (LB) for:

- ✅ **News articles** - Organization announcements, community news, press coverage
- ✅ **Blog posts** - Staff stories, member spotlights, program highlights
- ✅ **Press releases** - Official statements, media announcements
- ✅ **Timely content** - Date-based content that needs publishing workflow
- ✅ **Categorized content** - Content that needs tags/categories for organization

###Do NOT Use Article (LB) for:

- ❌ **Static pages** - Use Landing Page (Layout Builder) instead
- ❌ **Event listings** - Use Event (Layout Builder) for date/time-specific events
- ❌ **Program information** - Use Program or Program Subcategory content types

---

## Article Types Explained

Article (LB) includes three types to help you organize content:

### Blog
**Best for:** Personal stories, staff perspectives, member journeys, program highlights

**Example uses:**
- "Meet Our New Aquatics Director"
- "5 Tips for Staying Active This Winter"
- "Member Spotlight: Sarah's Weight Loss Journey"

**Display:** Typically shown on `/blog` page or blog listing views

### News
**Best for:** Organization announcements, community news, updates

**Example uses:**
- "New Youth Center Opens Next Month"
- "YMCA Breaks Ground on Expansion Project"
- "Summer Camp Registration Now Open"

**Display:** Typically shown on `/news` page or news listing views

### Press Release
**Best for:** Official statements, media announcements, formal communications

**Example uses:**
- "YMCA Announces Partnership with Local Schools"
- "YMCA Responds to Community Needs During Crisis"
- "Annual Report Shows Record Membership Growth"

**Display:** Typically shown on `/press` page or press release archives

**Pro Tip:** The type you select determines where the article appears in Views-based listings. Choose the type that matches how you want to organize your site.

---

## Creating an Article

### Step 1: Add New Article

1. Navigate to **Admin** > **Content** > **Add Content**
2. Select **Article (Layout Builder)**
3. You'll see the Article creation form

### Step 2: Fill in Required Fields

#### Title (Required)
The headline of your article. This appears at the top of the page and in listing views.

**Best practices:**
- Keep under 60-70 characters (Google truncates longer titles)
- Front-load important keywords
- Be specific and descriptive
- Use active voice

**Examples:**
- ✅ "Youth Soccer Program Adds Saturday Classes"
- ✅ "5 Benefits of Family Swim Lessons"
- ❌ "Program Update" (too vague)
- ❌ "The YMCA is excited to announce that we are expanding our youth soccer program with new Saturday classes starting in March" (too long)

#### Subtitle (Optional)
Additional context or supporting detail for the title.

**Best practices:**
- Use to add context without cluttering the title
- Keep to 1-2 short sentences
- Appears below title in article header

**Example:**
- Title: "New Childcare Center Opening"
- Subtitle: "State-of-the-art facility will serve 100 families starting September 1"

#### Type (Required)
Select **Blog**, **News**, or **Press Release** based on content purpose (see Article Types above).

#### Header Image (Required for most themes)
Featured image displayed at the top of the article and in listing views.

**Best practices:**
- **Size:** 1920x1080px recommended (16:9 aspect ratio)
- **File size:** Under 500KB (compress with TinyPNG or similar)
- **Format:** JPG or WebP for photos, PNG for graphics
- **Alt text:** Always include descriptive alt text for accessibility
- **Content:** High-quality, relevant image that reflects article topic

**Image tips:**
- Use real photos of your YMCA when possible (authentic > stock photos)
- Ensure faces are visible and in-focus for people-focused stories
- Avoid text-heavy images (text may not scale on mobile)
- Check image looks good when cropped to square (for some listing views)

#### Tags (Recommended)
Categories/topics for organizing and filtering articles.

**Best practices:**
- **Number:** Choose 1-3 relevant tags per article
- **Consistency:** Use existing tags when possible (avoid creating duplicates)
- **Broad topics:** Think categories, not keywords
- **User-focused:** Use terms your audience would search for

**Example tag structure:**
- Program areas: Youth Programs, Aquatics, Wellness, Childcare
- Content types: Member Stories, Staff Updates, Community News
- Seasonal: Summer Camp, Holiday Hours, Back to School

**Common tag list (3-10 tags recommended):**
- Youth Programs
- Aquatics
- Wellness & Fitness
- Childcare
- Community Impact
- Member Stories
- Healthy Living

**Avoid:** Over-tagging (10+ tags), one-off tags, jargon-heavy tags

#### Body (Required)
Main article content using the WYSIWYG editor.

**Best practices:**
- **Paragraph length:** 2-3 sentences per paragraph (easier to scan)
- **Subheadings:** Use H2 and H3 headings to break up long content
- **Length:** 300-800 words for most articles (longer for in-depth content)
- **Links:** Link to related programs, registration pages, other articles
- **Lists:** Use bulleted or numbered lists for scannable content
- **Bold:** Use sparingly to highlight key points

**Structure template:**
1. **Lead paragraph:** Hook + key information (who, what, when, where, why)
2. **Body paragraphs:** Details, quotes, context
3. **Call to action:** What should readers do next?

**Example structure:**
```
[LEAD] The YMCA is launching a new Saturday morning youth soccer program starting March 15. The program will serve ages 5-12 and includes skill development, teamwork, and fun games.

[H2] Program Details

The eight-week program runs every Saturday from 9-10:30am at Miller Park. Sessions are divided by age group...

[H2] How to Register

Registration opens February 1. Visit our Activity Finder or call (555) 123-4567...
```

#### Locations (Optional)
Associate the article with specific Branch pages.

**When to use:**
- Article is specific to one branch location
- You want the article to appear on the Branch page's "News" section
- Local community stories

**Example:** Article about "Westside YMCA Pool Renovation" should be tagged with Westside YMCA location.

#### Published Date (Required)
The date displayed on the article (defaults to today).

**Best practices:**
- Use actual publication date for news
- Can backdate for archival content
- Determines sorting order in listing views
- Visible to readers on article page

### Step 3: Configure Layout (Optional)

After saving, click **Layout** tab to add Layout Builder sections and blocks.

**Common Article layouts:**
- **Simple:** Header image + body text only (default)
- **Enhanced:** Add Related Articles block at bottom
- **Rich media:** Embed videos, image galleries, testimonial blocks
- **Call to action:** Add Cards or Button blocks for program registration

[**→ See Layout Builder documentation**](../../layout-builder/)

### Step 4: Set SEO & Metadata (Recommended)

If your site has SEO modules enabled (Meta tags, Pathauto):

**Meta title:** Auto-generated from article title (usually fine)
**Meta description:** 150-160 characters summarizing article
**URL alias:** Auto-generated from title (e.g., `/news/youth-soccer-program-adds-saturday-classes`)

**Pro Tip:** Write meta description in your own words - don't just copy first sentence of article.

### Step 5: Preview and Publish

1. Click **Save** to create draft
2. Click **Preview** to see how article looks
3. Check mobile responsive display
4. Verify all links work
5. Check **Published** checkbox
6. Click **Save** to publish live

---

## Article Workflow Best Practices

### Publishing Frequency

**Recommended publishing schedule:**
- **Small YMCAs:** 1-2 articles per month minimum
- **Medium YMCAs:** 2-3 articles per month (weekly is ideal)
- **Large YMCAs:** 3-4 articles per week for consistent engagement

**Why consistency matters:**
- Keeps website fresh and updated
- Improves SEO (search engines favor regularly updated sites)
- Engages members and community
- Provides shareable content for social media

### Content Planning

**Topic clusters approach:**
1. **Identify 3-5 main topic areas** (e.g., Youth Programs, Healthy Living, Community Impact)
2. **Create pillar content** - Comprehensive overview pages for each topic
3. **Write supporting articles** - Specific stories that link back to pillar pages

**Example cluster:**
- **Pillar:** "Youth Programs at Our YMCA" (Landing Page)
- **Articles:**
  - "Why Youth Sports Build Character" (Blog)
  - "New After-School Program Launches" (News)
  - "Meet Our Youth Director" (Blog)

### Editorial Calendar

**Plan ahead with an editorial calendar:**
- Schedule articles 2-4 weeks in advance
- Align with program registration dates
- Cover seasonal topics (summer camp, holiday hours)
- Include staff spotlights and member stories
- Balance news vs. blog vs. press releases

**Monthly content mix (example):**
- 2 news articles (announcements, updates)
- 1-2 blog posts (stories, tips, spotlights)
- 1 seasonal/timely piece
- 0-1 press releases (as needed)

### Roles and Permissions

**Common workflow:**
1. **Content Editor** - Creates draft articles
2. **Communications Manager** - Reviews and edits
3. **Administrator** - Approves and publishes

**Drupal permissions:**
- Content Editor: Create Article (Layout Builder), Edit own Article
- Communications Manager: Edit any Article (Layout Builder)
- Administrator: Delete any Article, Manage publishing

---

## SEO Best Practices for Articles

### Headline Optimization

- **Length:** 60-70 characters (Google's display limit)
- **Keywords:** Include main keyword/topic near the beginning
- **Clarity:** Readers should know what article is about from headline
- **Avoid:** Clickbait, vague headlines, excessive punctuation

### Meta Description

- **Length:** 150-160 characters for desktop, 120 for mobile
- **Include:** Primary keyword and call to action
- **Purpose:** Convince searchers to click your result
- **Avoid:** Duplicate descriptions (each article should be unique)

### Image Optimization

- **Alt text:** Describe image content (helpful for screen readers and SEO)
- **File names:** Use descriptive names (`youth-soccer-team.jpg` not `IMG_1234.jpg`)
- **Compression:** Keep under 500KB without sacrificing quality
- **Dimensions:** 1920x1080px standard (optimized versions created automatically)

### Internal Linking

- **Link to related content:** Other articles, program pages, registration
- **Anchor text:** Use descriptive link text ("youth soccer program" not "click here")
- **Quantity:** 2-5 internal links per article is good
- **Context:** Links should add value and make sense in context

### Structured Data (Advanced)

If your site has Schema.org structured data enabled, articles automatically include:
- Article headline
- Publication date
- Author information
- Featured image
- Organization details

This helps search engines display rich snippets (enhanced search results with images and metadata).

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Not Using Tags
**Problem:** Articles can't be filtered or organized
**Solution:** Always select 1-3 relevant tags

### ❌ Mistake 2: Missing Header Images
**Problem:** Articles look incomplete in listing views
**Solution:** Always upload a header image before publishing

### ❌ Mistake 3: Walls of Text
**Problem:** Long paragraphs are hard to read, especially on mobile
**Solution:** Keep paragraphs to 2-3 sentences, use subheadings

### ❌ Mistake 4: Vague Titles
**Problem:** "Program Update" doesn't tell readers what the article is about
**Solution:** Be specific: "Youth Soccer Program Adds Saturday Classes"

### ❌ Mistake 5: No Call to Action
**Problem:** Readers don't know what to do next
**Solution:** End with clear CTA (register, learn more, contact us)

### ❌ Mistake 6: Ignoring Mobile
**Problem:** Article looks great on desktop but broken on mobile
**Solution:** Always preview on mobile before publishing

### ❌ Mistake 7: Publishing Without Review
**Problem:** Typos, broken links, missing information
**Solution:** Use draft workflow, have second person review before publishing

---

## Use Cases & Examples

### Use Case 1: Member Spotlight Blog Post

**Title:** "Member Spotlight: How Sarah Lost 50 Pounds at the Y"
**Type:** Blog
**Tags:** Member Stories, Wellness & Fitness
**Header Image:** Photo of Sarah (with permission)
**Body:**
- Lead: Sarah's transformation story
- Middle: Her routine, challenges, support from staff
- End: Call to action to join wellness programs

**Layout additions:**
- Related Articles block (link to other member stories)
- Cards block (link to wellness programs)

### Use Case 2: Program Announcement News Article

**Title:** "Summer Day Camp Registration Opens March 1"
**Type:** News
**Tags:** Youth Programs, Summer Camp
**Header Image:** Kids at camp from previous summer
**Body:**
- Lead: Key dates and registration information
- Middle: Camp schedule, activities, pricing
- End: How to register

**Layout additions:**
- Button block (Register Now CTA)
- Accordion block (FAQs about camp)

### Use Case 3: Press Release

**Title:** "YMCA Partners with School District for After-School Programs"
**Type:** Press Release
**Tags:** Community Impact, Youth Programs
**Header Image:** Partnership signing photo
**Body:**
- Lead: Partnership announcement, key details
- Middle: Program benefits, quotes from partners
- End: Contact information for media inquiries

**Layout additions:**
- Simple layout (press releases typically don't need extra blocks)

---

## Article vs. Landing Page: Which to Use?

| Criteria | Use Article (LB) | Use Landing Page (LB) |
|----------|------------------|------------------------|
| **Timely content** | ✅ News, announcements, time-sensitive | ❌ Evergreen, static information |
| **Publishing date** | ✅ Needs visible date | ❌ No date needed |
| **Organization** | ✅ Needs tags/categories | ❌ Doesn't need categorization |
| **Display** | ✅ In news/blog listing views | ❌ Standalone page |
| **Lifespan** | ✅ Temporary (archived after time) | ❌ Permanent (updated as needed) |
| **Examples** | News, blog posts, press releases | About Us, program pages, static content |

**Simple rule:** If it's news or has a date, use Article. If it's evergreen, use Landing Page.

---

## Quick Reference

### Common Tasks

| Task | Steps |
|------|-------|
| **Create article** | Admin → Content → Add Content → Article (Layout Builder) |
| **Edit article** | Content → Find article → Edit |
| **Change type** | Edit → Change Type dropdown → Save |
| **Add to branch** | Edit → Locations field → Select branch → Save |
| **Unpublish** | Edit → Uncheck Published → Save |
| **Schedule publishing** | Requires Scheduler module (ask admin) |

### Field Summary

| Field | Required | Purpose | Best Practice |
|-------|----------|---------|---------------|
| **Title** | Yes | Article headline | 60-70 characters, descriptive |
| **Subtitle** | No | Supporting detail | 1-2 sentences |
| **Type** | Yes | Blog/News/Press Release | Choose based on content purpose |
| **Header Image** | Recommended | Featured image | 1920x1080px, under 500KB |
| **Tags** | Recommended | Categories | 1-3 tags, use existing when possible |
| **Body** | Yes | Main content | 2-3 sentences per paragraph, use headings |
| **Locations** | No | Associate with branch | Use for branch-specific news |
| **Published Date** | Yes | Display date | Defaults to today, can backdate |

### Tag Organization Tips

**3-5 Core Categories (Broad):**
- Youth Programs
- Aquatics
- Wellness & Fitness
- Childcare
- Community Impact

**5-10 Subcategories (Specific):**
- Member Stories
- Staff Updates
- Healthy Living Tips
- Program Announcements
- Facility Updates

**Avoid:**
- Too many tags (10+ creates decision paralysis)
- One-off tags (creates clutter)
- Duplicate tags with slightly different names

---

## Troubleshooting

### Header Image Not Displaying

**Problem:** Uploaded image doesn't show on article page
**Solutions:**
- Check image file size (should be under 10MB)
- Verify image uploaded successfully (check Media library)
- Clear cache (Admin → Configuration → Performance → Clear all caches)
- Check theme settings (some themes hide header images)

### Article Not Appearing in News View

**Problem:** Published article doesn't show on /news page
**Solutions:**
- Verify Type is set to "News" (not Blog or Press Release)
- Check Published checkbox is checked
- Verify Published Date is not in future
- Clear cache

### Can't Edit Layout

**Problem:** Layout tab is missing or disabled
**Solutions:**
- Ensure you have "Use Layout Builder" permission
- Check content type has Layout Builder enabled
- Save article first (must exist before editing layout)

### Tags Not Showing

**Problem:** Tags appear in form but not on article page
**Solutions:**
- Check theme displays tags (some themes hide tags)
- Verify Display settings (Admin → Structure → Content types → Article → Manage display)
- Tags may only display in listing views, not full article page

---

## Related Resources

- [Layout Builder Documentation](../../layout-builder/) - Customize article layouts
- [Block Library](../../layout-builder/block-library/) - Add components to articles
- [Text Editor Guide](../../text-editor/) - Format article body content
- [Taxonomy Guide](../../taxonomy/) - Manage tags and categories
- [Content Types Library](../) - Compare all content types

---

## Need Help?

- [YMCA Community Slack](https://ycloud.y.org/slack) - #content-editors channel
- [Monthly Community Calls](/blog/monthly-calls/) - Ask questions live
- [Troubleshooting Guide](/docs/troubleshooting/) - Common solutions
- [Quick Reference](/docs/quick-reference/) - Fast answers

**Happy publishing!** Articles are one of the best ways to keep your YMCA website fresh, engage your community, and showcase the great work you do. 📰

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
