```markdown
---
title: Tour
---

### Using YMCA Website Services Tour Tokens

Some modules offer tour tips. To enhance interactivity, you can add a token that triggers an action (like a click) on a specific selector.

**Important:** Tours provide users with guided tours of the administrative interface, highlighting elements and explaining key concepts. Users need "Access tour" permission and JavaScript enabled in their browsers to view tours.

#### Adding a Token

1.  **Locate the Tour YAML file:** Open the tour's YAML configuration file within your module.
    ![Configuration project add/update form](../../assets/openy_tour_place.png)

2.  **Edit the Tip:** Select the specific tour tip you want to modify. Within the tip's body, insert the token using the following format: `[openy_tour:click:button_name:selector]`
    ![Configuration project add/update form](../../assets/openy_tour_add_to_tip.png)

3.  **Apply the Changes:** Implement a hook update for your changes and run `drush updb -y` in the command line to apply the database updates.

#### Token Components

```
[openy_tour:click:button_name:selector]
```

*   `openy_tour`:  (Required) This is the base token name.
*   `click`: (Required) This is the command to execute. Currently, `click` is the only supported command, which simulates a user click.
*   `button_name`: (Required)  The text to display on the button within the tour tip.
*   `selector`: (Required) A [jQuery selector](https://www.w3schools.com/jquery/jquery_ref_selectors.asp) that identifies the element to be clicked. Ensure the selector accurately targets the desired element on the page.

**Example:**

`[openy_tour:click:Add content:.toolbar-icon-node-add]`

This token will render a button with the text "Add content" in the tour tip. When clicked, it will trigger a click event on the element matching the selector `.toolbar-icon-node-add`.

**Important Considerations:**

*   **jQuery Selectors:** Use precise jQuery selectors to avoid unintended clicks on other elements. Test your selectors thoroughly.
*   **Accessibility:** Consider the accessibility implications of automated clicks. Ensure the tour remains navigable and understandable for all users, including those using assistive technologies.
*   **Alternative Creation:** Tours can be written as YAML documents or by using the contributed [Tour UI](https://www.drupal.org/project/tour_ui) module.
