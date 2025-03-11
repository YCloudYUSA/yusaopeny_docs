---
title: Software Requirements
---

## Open Y Sites

*   Open Y version 2.0 or newer.
*   The ability to install Virtual YMCA modules.

## Virtual Y Standalone Site

### Hosting

**Tech stack required:**

*   Ubuntu Server (local or Cloud environment) with 2CPU and 2GB of RAM minimum.
*   Server configured with LAMP stack (Linux/Apache/MySQL/PHP).
*   PHP 7.4+ (PHP 8.1+ is recommended)
*   [Composer](https://getcomposer.org/)

**Recommended Hosting Solutions:**

*   Digital Ocean – Cost-effective. For self-installs.
*   OneEach Technologies – Mid-range. For Ys with developer partners.
*   Acquia/Pantheon/Platform.sh – Enterprise. For large YMCAs.

### SSL (Security Certificate)

A security certificate authenticates that you own your website and displays a lock icon in the user’s web browser. Most modern browsers require SSL certificates. SSLs are widely available from a large number of reputable providers.

### Domain Name (Website Address)

*Only required for standalone Y sites*. Can be set up with its own unique web address (i.e., virtualymcatn.org), a unique directory within your existing site (ymcamidtn.org/virtual) or as a subdomain of your existing site (virtual.ymcamidtn.org).

Requirements for each of these setups are unique. Contact your developer partner or the Open Y community for help with your setup.

### Sign-In Integration

**CRMs with Full Integration:**

*   Daxko
*   Personify
*   Salesforce (Coming Soon)

**Other CRMs:**

*   Upload a .csv file of emails to your server to use the manual sign-in experience.
