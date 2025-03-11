---
title: Daxko Barcode Authentication
---

Open Y Gated Content (Virtual Y) [release 0.13](https://github.com/ymcatwincities/openy_gated_content/releases/tag/0.13) includes a new authentication provider to support Daxko Virtual Areas. This allows associations using Daxko to set up Virtual Areas that enable members to access Virtual Y content using only their member barcode.

Instructions for setting up Virtual Areas are in [Daxko's documentation](./Daxko%20Operations%20-%20Virtual%20Check%20In%20-%20Barcode.pdf). If you need assistance configuring Virtual Areas, Daxko's support team can assist you with setup: [support@daxko.com](mailto:support@daxko.com).

## Configuration

1.  Enable `Daxko Barcode Virtual YMCA integration`.
2.  OPTIONAL (but highly recommended): Configure reCaptcha settings at `/admin/config/people/captcha/recaptcha`.
3.  Add your validation secret and form URL, and check the help messages at `/admin/openy/virtual-ymca/gc-auth-settings/provider/daxkobarcode`.
4.  Save your settings.
5.  Set Daxko Barcode as your main authorization plugin in the Virtual YMCA settings: `/admin/openy/openy-gc-auth/settings`.

Once enabled, the module allows granular configuration of messages that users will receive on the page. You can change "Barcode" to something different, like "Member ID", and add help text to assist members in finding their ID. It also allows for global help text to direct members to help channels if they're unable to log in.

![The Daxko Barcode configuration form](./daxko-barcode-config.png)

Once the module is enabled, members will be presented with the appropriately titled field to log in to Virtual Y.

![The Virtual Y login page with Daxko Barcode authentication and reCAPCHA enabled](./daxko-barcode-login.png)

Upon success, the user will be logged in to Virtual Y. Upon failure, the failure state will be returned along with a help message provided by the association.

![The Virtual Y login page with an error from a failed authentication](./daxko-barcode-error.png)

## Notes

### Members with a Balance Due

> Anyone with a balance due in Daxko doesn't have access to Virtual Y [via Daxko Barcode]. A lot of the accounts with balances are families with memberships who receive state scholarships for child care. The balance in Daxko is the portion the state pays, so it's a bit of a "fake" balance. Is there any way to allow any ACTIVE member to use [Virtual Y], regardless of whether they have a balance or not?

The fix:

> There’s a setting on the Daxko Operations virtual area at **Membership** > **Virtual Area** > **Virtual Y** > **Edit** that you can check/uncheck for "Block access when balance due." Unchecking that should let the member access the virtual area.
