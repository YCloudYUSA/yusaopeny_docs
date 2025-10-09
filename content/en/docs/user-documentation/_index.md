---
title: "Getting Started for Content Editors"
linkTitle: "Content Editor Guide"
weight: 20
description: >
  Your complete guide to creating and managing content on YMCA websites.
---

Welcome to YMCA Website Services! This guide will help you get started creating beautiful, engaging content for your YMCA website.

## What You'll Learn

By the end of this guide, you'll be able to:

- ✅ Log in and navigate the admin interface
- ✅ Create your first landing page with Layout Builder
- ✅ Add and configure blocks from the Block Library
- ✅ Upload and manage images and media
- ✅ Publish and preview your content

**Estimated time:** 15-20 minutes

---

## Step 1: Log In and Find Your Way Around

### Accessing the Admin

1. Navigate to your YMCA website and add `/user/login` to the end of the URL
   - Example: `https://yourymca.org/user/login`
2. Enter your username and password
3. Click **Log in**

### The Admin Toolbar

Once logged in, you'll see a black toolbar at the top of the page. This is your admin toolbar with quick access to:

- **Content** - Create and manage all your pages and posts
- **Structure** - Configure menus, blocks, and site structure
- **Appearance** - Theme and visual settings
- **Extend** - Add new features and modules

![Admin toolbar screenshot](content-editing-basics/basics-content.png)

---

## Step 2: Explore the Block Library 🧱

**The Block Library is your toolkit** for building pages. Before creating your first page, take 5 minutes to browse what's available.

<div class="alert alert-info" role="alert">
  <i class="fas fa-star me-2"></i><strong>Pro Tip:</strong> Bookmark the <a href="/docs/user-documentation/layout-builder/block-library/">Block Library</a> - you'll reference it often!
</div>

### Most Popular Blocks for Beginners

- **Banner** - Full-width hero images with headlines and CTAs
- **Cards** - Flexible card grid layouts (2-4 columns)
- **Accordion** - Expandable Q&A sections
- **Article Views** - Automatically display recent blog posts
- **Testimonials** - Member quote carousels

[**→ Browse the Full Block Library**](/docs/user-documentation/layout-builder/block-library/) (30+ blocks organized by category)

---

## Step 3: Create Your First Landing Page

Let's build a simple landing page using Layout Builder!

### Create the Page

1. Click **Content** in the admin toolbar
2. Click the blue **Add content** button
3. Select **Landing Page (Layout Builder)**
4. Fill in the required fields:
   - **Title**: "Welcome to [Your YMCA Name]"
   - Leave other fields as defaults for now
5. Click **Save and edit layout**

You're now in Layout Builder! This is where the magic happens.

### Understanding Sections and Blocks

- **Sections** = Rows that structure your page (like shelves)
- **Blocks** = Content components that fill sections (like items on shelves)

### Add Your First Section

1. Click **Add section** at the top
2. Choose **One column** layout
3. Click **Add section**

### Add a Banner Block

1. In your new section, click **Add block**
2. Click **Create custom block**
3. Select **Banner**
4. Fill in:
   - **Title**: "Welcome to Our YMCA"
   - **Description**: "Building healthy communities since [year]"
   - **Image**: Click **Select Image** and upload a photo
   - **Link URL**: `/join` (or your membership page)
   - **Link text**: "Join Today"
5. Click **Add block**

### Save and Publish

1. Click **Save layout** at the top
2. Click the **Edit** tab
3. Check the **Published** checkbox
4. Click **Save**

**🎉 Congratulations!** You've created your first page. Click **View** to see it live.

---

## Step 4: Add More Content

Now let's add variety to your page.

### Add a Cards Block

1. Click the **Layout** tab
2. Click **Add section** below your banner
3. Choose **One column** layout
4. Click **Add block** → **Create custom block** → **Cards**
5. Set **# of columns** to **3**
6. Add 3 card items with:
   - **Heading**: Program names (e.g., "Youth Sports")
   - **Description**: Brief summary
   - **Link**: Link to program page
7. Click **Add block**

### Add an Accordion (FAQ Section)

1. Add another section
2. Add an **Accordion** block
3. Add 3-4 accordion items with common questions:
   - "What are your hours?"
   - "How do I join?"
   - "Do you offer financial assistance?"
4. Fill in the answers
5. Save the block

### Preview and Publish

1. Click **Save layout**
2. View your page to see how it looks
3. Make adjustments as needed

---

## Step 5: Working with Images and Media

### Upload an Image

1. When adding a block with an image field
2. Click **Select Image**
3. Click **Upload** tab
4. Drag and drop your image or click **Choose File**
5. Fill in:
   - **Alternative text**: Describe the image for accessibility
   - **Name**: Descriptive file name
6. Click **Save**

### Image Best Practices

- **File size**: Keep under 500KB (use tools like TinyPNG to compress)
- **Dimensions**: 1920x1080 for banners, 800x600 for cards
- **Alt text**: Always describe the image for screen readers
- **File names**: Use descriptive names like `youth-soccer-team.jpg`

[**→ Learn more about media management**](/docs/user-documentation/media/)

---

## Next Steps

Now that you've mastered the basics, explore these topics:

### Continue Learning

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3 mb-4">
  <div class="col">
    <div class="card h-100 border-primary">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-cubes text-warning me-2"></i>Block Library</h5>
        <p class="card-text small">Explore all 30+ blocks and learn when to use each one.</p>
        <a href="/docs/user-documentation/layout-builder/block-library/" class="btn btn-sm btn-outline-primary">Browse Blocks</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border-success">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-file-alt text-success me-2"></i>Content Types</h5>
        <p class="card-text small">Learn about Articles, Events, Branches, and more.</p>
        <a href="/docs/user-documentation/content-types/" class="btn btn-sm btn-outline-success">View Types</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border-info">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-palette text-info me-2"></i>Text Editor</h5>
        <p class="card-text small">Format text, add links, embed videos, and build tables.</p>
        <a href="/docs/user-documentation/text-editor/" class="btn btn-sm btn-outline-info">Learn Editing</a>
      </div>
    </div>
  </div>
</div>

### Advanced Topics

- **[Schedules](/docs/user-documentation/schedules/)** - Display class schedules and programs
- **[Membership Calculator](/docs/user-documentation/membership/)** - Add membership pricing tools
- **[SEO & Structured Data](/docs/howto/use-structured-data/)** - Improve search rankings
- **[Content Editing Basics](/docs/user-documentation/content-editing-basics/)** - Deep dive into fields and workflows

---

## Quick Reference

### Common Tasks

| Task | Steps |
|------|-------|
| **Create a page** | Content → Add content → Landing Page (Layout Builder) |
| **Edit a page** | Navigate to page → Click Edit tab |
| **Add a block** | Layout tab → Add section → Add block → Create custom block |
| **Upload image** | Select Image → Upload tab → Drag file → Save |
| **Publish** | Edit tab → Check "Published" → Save |

### Keyboard Shortcuts

- **Ctrl+S** (Cmd+S on Mac) - Save content
- **Ctrl+Shift+S** - Save and continue editing
- **Ctrl+F** - Search page

---

## Need Help?

### Troubleshooting

- **Blocks not appearing?** [Troubleshoot Layout Builder Issues](/docs/troubleshooting/layout-builder/)
- **Images not uploading?** Check file size and format (JPG, PNG, WebP under 500KB)
- **Page not saving?** Try clearing your browser cache (Ctrl+Shift+R)

### Get Support

- **[Quick Reference](/docs/quick-reference/)** - Instant answers to common questions
- **[Troubleshooting Guide](/docs/troubleshooting/)** - Solutions organized by category
- **[Community Forum](https://community.ycloud.y.org)** - Ask questions and share tips
- **[Monthly Community Calls](/blog/monthly-calls/)** - Live Q&A with experts

---

## Additional Resources

- **[Original User Manual](https://drive.google.com/file/d/15aF_g7Q1ItOUNZUGR-6Tmlfz72m5ms2M/view?usp=sharing)** - Comprehensive PDF guide
- **[Video Tutorials](/docs/user-documentation/layout-builder/)** - Watch the Layout Builder playlist
- **[Content Editing Basics](/docs/user-documentation/content-editing-basics/)** - Detailed field-by-field reference

---

**Ready to build amazing content?** Start with the [Block Library](/docs/user-documentation/layout-builder/block-library/) and explore what's possible! 🚀

<style>
.alert-info {
  background-color: rgba(0, 167, 157, 0.1);
  border-left: 4px solid #00A79D;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
}

.card {
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
</style>
