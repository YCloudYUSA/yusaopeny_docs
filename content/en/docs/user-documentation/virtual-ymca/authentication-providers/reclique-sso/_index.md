```markdown
---
title: ReClique SSO Configuration
---

The ReClique Core API enables check-in access by specifying a member's email address. The following steps are necessary to fully configure the ReClique Provider for your Virtual Y site.

## Acquire ReClique Core API Access

To get started, you will need to perform the following steps in the ReClique CORE portal, while logged in as a YMCA super admin user:

*   Locate and note your YMCA association’s YMCA ID, known within the ReClique CORE documentation as the “Association Slug”.
*   Create a separate user for executing the ReClique CORE authentication API and grant this user API-level access.

**In Detail:**

1.  Log into the ReClique Core portal using a user with the YMCA super administrator role.

2.  Click **Profile** in the top-right corner of the CORE portal.

    ![ReClique Profile](./reclique-sso-002.png)

3.  The YMCA ID is the non-numeric part of the “Association Slug” in front of the numeric user ID. Note this value for use in the Verification URL. In this example, the text `midtn` is the association slug value and is needed for the YMCA ID.

    ![ReClique Association Slug](./reclique-sso-003.png)

4.  Click **Users** from the navigation menu (**Users** > **Add New User**).

    ![ReClique Users Menu](./reclique-sso-004.png)

5.  Select the **+ Add User / Staff** button.

    ![ReClique Add User Button](./reclique-sso-005.png)

6.  Create a stand-alone user for the purpose of executing API calls only. A suggested name is `virtual_y`, but any suitable name can be used.

7.  Assign this user the API Access role by selecting **Use Core API** in the Other list of role options.

    ![ReClique API Access Role](./reclique-sso-007.png)

## Configure the Virtual Y ReClique Provider

To enable the Virtual Y site to communicate with the ReClique Core API, you’ll need to configure the ReClique provider.

1.  Navigate to the Gated Content Auth Setting Page at **Manage** > **Virtual Y** > **Virtual YMCA Settings** > **GC Auth Settings**.

    ![GC Auth Settings Navigation](./reclique-sso-009.png)

    The **GC Auth Settings** page, when loaded, will look like this:

    ![GC Auth Settings Page](./reclique-sso-011.png)

2.  Find the ReClique Provider option and click the **Edit Action**.

    ![ReClique Provider Edit Action](./reclique-sso-012.jpg)

3.  Enter Your ReClique Provider Settings.

    The ReClique Provider configuration page allows the specification of permission mappings, settings for accessing the ReClique CORE authentication API, and Email Verification settings.

    ![ReClique Provider Configuration Page](./reclique-sso-014.png)

    1.  **Specify Permission Mappings**

        This is used for User Segmentation. User Segmentation will allow YMCAs to segment content to particular Virtual Y roles based on membership types. Refer to documentation from the Open Y Community for more information about [Setting up user segmentation](../../user-segmentation/).

        ![ReClique Permission Mappings](./reclique-sso-016.png)

    2.  **Add ReClique CORE API settings**

        Add the values needed to connect to the ReClique Core API.

        ![ReClique CORE API Settings](./reclique-sso-017.png)

        | Field                       | Value                                                                                                                                                                                            |
        | :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | Verification URL            | The API endpoint provided by ReClique to verify member logins. It takes the form `https://{Y_ID}.recliquecore.com/api/v1/members/virtual_y/?Email=` (This is the Production verification URL). |
        | Authentication login        | The login for the dedicated user created with ‘Use Core API’ access in the ReClique Core portal.                                                                                                 |
        | Authentication password     | The password for the dedicated user created with ‘Use Core API’ access in the ReClique Core portal.                                                                                              |
        | ID field text               | The text to be displayed on the Virtual Y login form. The default value is “Enter your Email:”.                                                                                                |

    3.  **Specify the Email Verification options**

        This enables a one-time login link to be sent to the member’s email for verification. Here, you can configure the length of time the login link will last before needing to generate another, email verification text, and a message displayed to the member with instructions on how to proceed with logging into the Virtual Y site.

        ![ReClique Email Verification Options](./reclique-sso-019.png)

    4.  **Specify the Verification Message**

        This is the message the member will see when logging in if they are inactive. The phone number must be added at the very least.

        ![ReClique Verification Message](./reclique-sso-020.png)

    5.  After configuring the ReClique provider, click **Save**.

    6.  From the GC Auth Settings page, ensure only **ReClique Provider** is selected and click **Save**.

Your ReClique Provider is now fully configured and ready for use.

To test, log out from the admin portal. You should now see your new login form configured and ready to accept input from the Home Page.

If a valid email address is entered and the member is active, the member will be allowed access to your gated content (videos, blog posts, virtual meetings).
