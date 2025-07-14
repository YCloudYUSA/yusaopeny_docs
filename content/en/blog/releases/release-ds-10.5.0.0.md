---
title: "Digital Services Release 10.5.0.0"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.5.0.0)
date: 2025-07-08
---
## Highlights:

- **A More User-Friendly Future:**  
Drupal's commitment to User Experience (UX) is now formalized with new leadership. This means we can expect a more intuitive and efficient admin interface in future updates.

- **A Safer, More Secure Platform:**  
The core security reporting process has been enhanced, making the platform safer for everyone by allowing vulnerabilities to be fixed faster.

- **Theme Fix:**  
The misaligned arrow on alert components has been corrected.

- **New Feature for Branch Locations:**  
A new **“Show All Holidays”** checkbox has been added, giving admins more control over how holiday hours are displayed.

---

## Key Architectural Improvements:

- **Closer Alignment with Drupal Core:**  
We've removed the `media_entity_document` module, as its functionality is now fully handled by Drupal core.

- **Standardized Synchronization:**  
We've switched to using `drupal/ymca_sync`, moving away from association-specific solutions toward a more unified, community-aligned approach.

- These changes reduce custom code and simplify long-term maintenance.

---

## Important Upgrade Note for Deprecated Themes

If you are **not using Rose or Lily theme**, you need to **uninstall them before applying 10.5.0.0**.  
If you are **using Rose theme**, you need to **re-require `Drupal/openy_rose` before applying 10.5.0.0**.  
If you are **using Lily theme**, you need to **re-require `Drupal/openy_lily` before applying 10.5.0.0**.

---

Please review the full changelog here:  
[OpenY 10.5.0.0 Release Notes](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.5.0.0)
