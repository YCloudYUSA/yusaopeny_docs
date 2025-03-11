---
title: Anti-spam Protection
aliases:
  - /docs/wiki/openy-anti-spam-protection/
---

To protect YMCA Website Services customers, anti-spam protection based on CAPTCHA and Google reCAPTCHA is included in the YMCA Website Services core. This solution leverages the [CAPTCHA](https://www.drupal.org/project/captcha) and [reCAPTCHA](https://www.drupal.org/project/recaptcha) Drupal modules.

## Understanding CAPTCHA and reCAPTCHA

*   **CAPTCHA:** A challenge-response test used to determine whether the user is human. It blocks form submissions by spambots, which are automated scripts that post spam content. The CAPTCHA module provides this feature to virtually any user-facing web form.
*   **reCAPTCHA:** A free service from Google that protects your website from spam and abuse while letting real people pass through with ease. It uses an advanced risk analysis engine and adaptive CAPTCHAs to keep automated software from engaging in abusive activities on your site.

## Configuration

1.  **Install and Enable Modules:** Install both the [CAPTCHA module](https://www.drupal.org/project/captcha) and the [reCAPTCHA module](https://www.drupal.org/project/recaptcha). Enable them in the Extend administration page (`/admin/modules`).
2.  **reCAPTCHA Settings:** Configure reCAPTCHA settings at `/admin/config/people/captcha/recaptcha`. You'll need a Site key and a Secret key.
3.  **Get API Keys:** Register your website at the [reCAPTCHA Admin console](https://www.google.com/recaptcha/admin/create) to obtain your Site key and Secret key.
4.  **Enter API Keys:** Input the Site key and Secret key into the reCAPTCHA settings form.
5.  **CAPTCHA Settings:** Configure where you want the CAPTCHA/reCAPTCHA to appear on your site at `/admin/config/people/captcha`.

## Additional Spam Protection

In most cases, the above configuration protects you from most spam. However, human-entered spam may require additional protection.

*   **Blacklist Logic:** Implement blacklist logic to block email domains frequently used in spam messages.
*   **Protected Submissions Module:**  Consider using the [Protected Submissions module](https://www.drupal.org/project/protected_submissions) to harden all submissions on a site with a list of stop words and per-language settings.

## Virtual Y Use Case

For Virtual Y, the [simple_recaptcha](https://www.drupal.org/project/simple_recaptcha) module is used to address caching issues and may be suitable in similar cases.  The standard CAPTCHA + reCAPTCHA module combination has sometimes presented reliability issues.  Replacing those modules with "Simple reCAPTCHA" may resolve those issues.
