```markdown
---
title: "User Segmentation"
---

User segmentation is a feature within Virtual Y that allows you to categorize your users. This enables you to:

*   Diversify your membership strategy.
*   Organize your Virtual Y content into categories such as fitness, wellness, and family enrichment.

## Set Up User Segmentation

1.  In your Drupal toolbar, hover over **Virtual Y** and click **Virtual YMCA Settings**.
2.  Click the **AUTH Settings** tab. A list of authentication method options appears. If your desired authentication method isn't listed, install it from the **Extend** menu.

    ![A screenshot of the the Virtual Y settings tabs with "AUTH Settings" highlighted](./segmentation-auth-settings.png)

3.  Click **Edit** on the authentication method you want to use. User segmentation settings are located in the **Permissions Mapping** field at the top of the page.
4.  In the membership field, carefully type or paste the name of a membership type from your CRM that you want to grant access to Virtual Y. Then, use the dropdown to select the appropriate access level for users with that membership type.

    ![A screenshot of the "Permissions Mapping" dialog](./segmentation-permission-mapping.png)

5.  To add more membership types, click the **Add one more** button until all desired membership types are listed.
6.  **To remove a membership type:** Delete the membership name from the field and select **None** as the Virtual Y role. Then, scroll to the bottom of the page and click the blue **Save** button. The empty line should then disappear from your mapping list.

## Add a New Role

You might need to add roles beyond the default three included in Virtual Y. While you can, keeping the number of roles to five or fewer is recommended, as managing content and avoiding fragmentation becomes more difficult with more roles.

If you're unfamiliar with Drupal roles, consult with your agency partner for help customizing your Virtual Y roles.

1.  Click **People** in the Drupal toolbar.
2.  Select the **Roles** tab.

    ![A screenshot of the People tabs with Roles highlighted](./segmentation-roles.png)

3.  Click the blue **Add Role** button.
4.  Enter the name of your new role in the field.

    ![A screenshot of the Role Name field](./segmentation-role-name.png)

    **Note:** The **Machine Name** for your role must begin with `virtual_y_`, or it won't be included in the permissions mapping table. To ensure this, either name your official role "Virtual Y [Desired Role Name]" or click the small **Edit** button link next to the **Machine Name** and edit the text.

    ![A screenshot showing the Role name and Machine-readable name fields](./segmentation-machine-name.png)
```