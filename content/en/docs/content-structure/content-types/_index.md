---
title: Content Types
---

Welcome to the YMCA Website Services Content Types documentation.

In terms of YMCA Website Services, content types are "bundles" of a "node" entity within the Drupal Framework. For more low-level documentation, refer to [drupal.org](https://www.drupal.org/docs/8).

YMCA Website Services ships with a set of content types to simplify site usage. While the number of content types isn't restricted and developers can add more, the goal is to ensure that the shipped list of content types is covered by the YMCA Website Services upgrade path.

**Understanding Content Types**

*   **Content Entity:** A content entity is an item of content data like text, images, or files. Content entities are grouped into entity types, which are further divided into entity sub-types to allow for variations in how the entities are used and displayed.
*   **Fields:** Data within content entities is stored in individual fields. Each field holds a specific data type (formatted text, plain text, images, etc.) Fields can be single or multiple-valued.
*   **Reference Field:** A reference field stores a relationship between one entity and one or more other entities.
*   **Formatter:** A formatter determines how a field is displayed.
*   **Widget:** A widget determines how a field is edited.

**Managing Content Structure**

Several core modules are used to manage content structure:

*   Node, Comment, Content Block, Custom Menu Links, User, File, Image, Media, Taxonomy, and Contact modules: Provide content entity types.
*   Field UI module: Provides a user interface for managing fields and their display on entities.
*   Layout Builder module: Provides a user interface for configuring the display of entities.
*   Filter, Responsive Image, and Path modules: Provide settings and display options for entities and fields.
