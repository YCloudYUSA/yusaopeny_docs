---
title: WYSIWYG View Modes
---

The following view modes are available for embedding media assets within a WYSIWYG editor, such as CKEditor 5. These view modes offer different display options for media assets, allowing content creators to choose the most appropriate presentation for their content.

### View Modes

| Name   | Machine name  | Description                                                                                                                    |
| :----- | :------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Full   | `embedded_full` | Displays the media asset at its full width within the available container.                                                    |
| Half   | `embedded_half` | Displays the media asset at half its original width, typically with alignment options (left or right) to control its placement. |
| Link   | `embedded_link` | Displays a simple link to the media asset, directing the user to the original file.                                           |

### Bundle Details

The display of each media asset type (Image, Video, Document) varies depending on the selected view mode. The following outlines the specific rendering for each bundle:

#### Image

*   **Full & Half View Modes:** Images are displayed using the `<img>` tag with appropriate CSS classes applied for styling and responsiveness. The specific classes may vary depending on the theme and styling configuration.
*   **Link View Mode:** A hyperlink (`<a>` tag) is generated, pointing to the original image file.  The link includes `target="_blank"` to open the image in a new tab or window.

#### Video

*   **Full & Half View Modes:** Videos are displayed as embedded video players, likely using the `<video>` tag or an `<iframe>` to embed from a video hosting platform.  Appropriate CSS classes are applied for styling.
*   **Link View Mode:**  A hyperlink (`<a>` tag) is generated, pointing to the original video file. The link includes `target="_blank"` to open the video in a new tab or window.

#### Document

*   **Full & Half View Modes:** Documents are displayed using an `<iframe>` tag. The `src` attribute of the `<iframe>` points to a service like Google Docs Viewer, which renders the document within the iframe. Replace `URL` with the actual URL of the document. Appropriate CSS classes are applied for styling.

    ```html
    <iframe src="//docs.google.com/gview?url=URL&embedded=true" frameborder="0"></iframe>
    ```

*   **Link View Mode:** A hyperlink (`<a>` tag) is generated, pointing to the original document file. The link includes `target="_blank"` to open the document in a new tab or window.
