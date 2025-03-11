```markdown
---
title: Story Card
description: Add a simple card to the sidebar with a title, headline, and call to action.
---

> The Story Card Paragraph works best with the Lily and Rose themes. It is available, but not themed with a border in Carnation.

## Areas it Can Be Used

*   Sidebar Area

## How to Use It

1.  In the sidebar area of a content page, select **Story Card**.
2.  Add a **Title** and **Headline**. The Title will be larger than the Headline and display above it.
3.  Add your link in the **Link** field. Unlike most paragraph types, the link field does not create a button or standalone link; the entire card becomes the link. The link text is required. The link will not stand out like a typical call to action.

To work around this, add a `>` or another special character to indicate to users that they are clicking on a link.

### Recommendations for use with Carnation

While this component is available to use in Carnation, it is not themed with a border as in Lily or Rose. The best practice is to use this paragraph sparingly and only in the following content types:

*   Facility
*   Event

In Carnation, the Story Card works best inside the News Post, Event, and Blog Post paragraphs.

## Advanced

**Note:** In the headline area on Lily and Rose, a large quotation mark will display to the left of your headline. This can be easily disabled using the following CSS:

```css
.story-card .quote svg { display: none; }
```

## Content Types That Support Story Card

*   [Landing Page](../../content-types/landing-page)
*   [News Post](../../content-types/news-post)
*   [Blog Post](../../content-types/blog-post)
*   [Facility](../../content-types/facility)
*   [Program](../../content-types/program)
*   [Program Subcategory](../../content-types/program-subcategory)
```