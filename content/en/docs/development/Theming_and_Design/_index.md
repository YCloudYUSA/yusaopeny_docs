---
title: Theming and Design
---

Welcome to YMCA Website Services Theming and Design documentation.

### How to Change Styles on a Content Type Level

**Given:**
As a YMCA Website Services site developer, I want to be able to easily change the CSS for a Camp page independently from a Location page, so I can better customize the site to meet the needs of my customers.

**How to:**

1.  **Enable Custom CSS:** Navigate to the theme configuration page and check "Enable or disable custom CSS" within the "Custom CSS" section.
2.  **Input CSS Code:** Enter your custom CSS code into the provided textarea.

To target CSS changes to specific pages, use the following selectors:

*   `.page-node-type-{node-type}` - Targets pages based on their content type.  For example, `.page-node-type-camp` would apply styles only to Camp pages.
*   `.node-id-{node-ID}` - Targets a specific page based on its node ID. For example, `.node-id-123` would apply styles only to the page with a node ID of 123.
*   `.path-frontpage` - Targets the site's front page.

Here's a list of existing node types in the YMCA Website Services distribution:

*   `activity`
*   `alert`
*   `blog`
*   `branch`
*   `camp`
*   `class`
*   `facility`
*   `landing-page`
*   `membership`
*   `news`
*   `program`
*   `program-subcategory`
*   `session`

**Example:**

To change the background color of all Camp pages to light blue, you would add the following CSS to the Custom CSS textarea:

```css
.page-node-type-camp {
  background-color: lightblue;
}
```

**Important Considerations:**

*   **CSS Specificity:** Be aware of CSS specificity when writing your custom styles.  More specific selectors will override less specific selectors.  You may need to use `!important` in some cases, but it's generally best to avoid it if possible by writing more specific selectors.
*   **Theme Updates:**  Custom CSS is stored in the database. Theme updates will not overwrite your CSS changes.
*   **Performance:**  While Custom CSS provides flexibility, excessive use of custom CSS can impact site performance. Consider using a child theme for more extensive customizations.
*   **Alternative approach:** If you are developing a new module or a small customization, consider using SASS following the info in `/docroot/modules/contrib/paragraphs/css/README.md` or `/docroot/modules/contrib/ws_small_y/README.md`.
