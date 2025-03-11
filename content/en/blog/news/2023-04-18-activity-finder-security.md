---
title: Activity Finder Security Notice
date: 2023-04-18
description: Trusted hosts settings are now required for sites that use Activity Finder.
---

## Summary

Activity Finder presented a potential attack vector where a malicious site could exploit the "trusted" YMCA domain to redirect users to untrusted sites.

Sites using Activity Finder are strongly advised to immediately verify the `activity_finder_trusted_redirect_host_patterns` configuration in their `settings.php` file. Refer to [the documentation](https://github.com/YCloudYUSA/yusaopeny_activity_finder#trusted-redirect-host-patterns) for configuration instructions.  Additionally, upgrade to the [latest release of Activity Finder](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/).

## What is the problem?

[Activity Finder](https://github.com/YCloudYUSA/yusaopeny_activity_finder) enables sites to redirect users for activity registration. This is done by passing a URL in a query string, such as `exampleymca.org/af/register-redirect/1234?url=https://exampleactivities.com...`.

A security flaw existed where **if no trusted host was configured, any host was allowed for redirection.** Activity Finder includes a method to [restrict redirects to only trusted hosts](https://github.com/YCloudYUSA/yusaopeny_activity_finder#trusted-redirect-host-patterns).

This created a potential vulnerability where a malicious site could use the "trusted" YMCA domain to redirect users to a phishing or malware site, for example: `exampleymca.org/af/register-redirect/1234?url=https://examplephishers.net`.

## How bad is it?

The [Drupal Security Risk Calculator](https://security.drupal.org/riskcalc) assessed this risk as 12/25 (Moderately Critical): `AC:Basic/A:None/CI:None/II:None/E:Exploit/TD:Default`.

Key definitions:

*   **Access complexity:**  The vulnerability is easily exploitable by an attacker.
*   **Authentication:** No authentication is required to exploit this vulnerability.
*   **Confidentiality Impact:** Exploitation does not expose non-public data.
*   **Integrity Impact:**  Exploitation cannot compromise system data.
*   **Zero-day Impact:** A documented exploit exists.
*   **Target Distribution:** Default module configurations are vulnerable, but configuration changes can mitigate the risk.

## What do we do?

Two immediate mitigation steps are available:

1.  **If your site actively uses Activity Finder:** Immediately ensure that the `activity_finder_trusted_redirect_host_patterns` setting is configured in your `settings.php` file, following [the documentation](https://github.com/YCloudYUSA/yusaopeny_activity_finder#trusted-redirect-host-patterns).  Deploy these changes and clear your site's cache. **Failure to make this change** may cause Activity Finder links to stop functioning after the next code update.

2.  **If your site does NOT actively use Activity Finder:**  Upgrade to the [latest release of Activity Finder](https://github.com/YCloudYUSA/yusaopeny_activity_finder/releases/tag/4.1.15) or [apply this patch](https://github.com/YCloudYUSA/yusaopeny_activity_finder/pull/9) to secure your site.  Even if not actively used, the vulnerable Activity Finder code could still be present and exploitable.
