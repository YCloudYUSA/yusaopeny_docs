---
title: Blog Post (Paragraphs)
description: Legacy Paragraphs-based blog content. Migrate to Article (Layout Builder) for modern blog/news functionality.
---

<div class="alert alert-warning" role="alert">
  <h4 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Legacy Content Type</h4>
  <p><strong>This is a legacy Paragraphs-based content type.</strong> For new blog posts and news, use <a href="../lb-article/"><strong>Article (Layout Builder)</strong></a> instead.</p>
  <hr>
  <p class="mb-0">
    <strong>Why migrate?</strong> Article (Layout Builder) offers:
    <ul class="mb-0">
      <li>✅ Unified content type for blogs, news, and press releases</li>
      <li>✅ Flexible Layout Builder layouts (vs rigid 2-column only)</li>
      <li>✅ Better SEO with modern meta fields and structured data</li>
      <li>✅ Improved categorization with Tags taxonomy</li>
      <li>✅ Active development and support</li>
    </ul>
  </p>
  <p class="mt-2 mb-0">
    <a href="../../howto/migrate-paragraphs-to-layout-builder/" class="alert-link"><strong>→ See Migration Guide</strong></a> |
    <a href="../lb-article/" class="alert-link"><strong>→ Article (Layout Builder) Documentation</strong></a>
  </p>
</div>

---

> *Note: This Content Type is [similar to the News Post content type](../news-post).* Both have been replaced by **Article (Layout Builder)**.

![An example of a blog post page](blog-post--example.jpeg)

## About Blog Post (Paragraphs)

Blog posts in YMCA Website Services allow you the flexibility to both create simple posts using only the text editor and more robust layouts with paragraphs.

## When Should I Use a Blog Post?

When you decide to use a blog post [depends greatly on your Association's content strategy](https://www.youtube.com/watch?v=myGNK_qUGDM). However, blog posts are designed so you can post timely pages and list them throughout your site. Examples of blogs may include:

* Member Stories
* Workouts and Recipes
* Updates about a Center/Branch
* Promotions and Contests
* Press Releases

## How Do I Use a Blog Post?

There are three fields that appear above the accordion tabs below:

* **Title**: The name of the blog. Displays in the header area on your blog post and in [the cards that display in a list of blogs](../../paragraphs/blog-posts-listing).

* **Locations**: An *option select* for you to tag a post with one or more locations (Camp or Branch). Use Ctrl+Click (Windows) or Cmd⌘+Click (Mac) to select multiple locations.

> Each time you create a new Branch Page or Camp Page it populates into the locations field automatically

* **Category**: An *entity reference* to [the Blog Category vocabulary](../../taxonomy/#blognews-category). Type in the name of the category and select from the options that appear, or create a new category/term by typing in a new one.

![Selecting a category in the blog post admin](blog-post--category.gif)

### Style

This dropdown changes the style of the post's card when it appears in a listing format. This dropdown does not affect any layouts on the page.

![The blog post style dropdown](blog-post--style.png)

#### Story Card

| Carnation                                                         | Lily                                                    |
|-------------------------------------------------------------------|---------------------------------------------------------|
| ![A blog story card in Carnation](blog-post--carnation-story.png) | ![A blog story card in Lily](blog-post--lily-story.png) |

#### Photo Card

| Carnation                                                         | Lily                                                    |
|-------------------------------------------------------------------|---------------------------------------------------------|
| ![A blog photo card in Carnation](blog-post--carnation-photo.png) | ![A blog photo card in Lily](blog-post--lily-photo.png) |

#### News Card

![A blog news card in Carnation](blog-post--carnation-news.png)

#### Color Card

When choosing color card, you are presented with two styling options in dropdowns. Both are *entity references* to [the Color vocabulary](../../taxonomy/#color):

* **Background color**: Changes the color of the card.
* **Text color**: Changes the color of the text. It's recommended you only use white or black.

| Carnation                                                         | Lily                                                    |
|-------------------------------------------------------------------|---------------------------------------------------------|
| ![A blog color card in Carnation](blog-post--carnation-color.png) | ![A blog color card in Lily](blog-post--lily-color.png) |

### Content Area

The content area is the main body of your page. You can use the default fields entered below for a simple block post or build a more robust layout using paragraphs.

* **Image**: Displays above your description and inside a Photo Card. Not required. Uses the [media browser and image field.](../../media)

* **Description**: [Using the text editor](../../text-editor), you can enter anything from a brief summary to the entire body of your text.

### Sidebar Area

The sidebar area also allows you embed paragraphs below a section that links to the centers tagged in the post, the categories and a *Related Content field* that allows you to promote other Blog Posts by tagging them with the autocomplete widget.

### Layouts

While you have the option to build layouts in blog posts using paragraphs, all blog posts are strictly two-column layouts. The Content Area displays on the left while the Sidebar Area displays on the right.
