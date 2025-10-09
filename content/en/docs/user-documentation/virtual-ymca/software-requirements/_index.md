---
title: Software Requirements
---
 
## Open Y Sites 
* Open Y version 2.0 or newer.
* The ability to install Virtual YMCA modules

## Virtual Y Standalone Site
### Hosting
**Tech stack required**

* Ubuntu Server (local or Cloud environment) with 2CPU and 2GB of RAM minimum.
* Server configured with LAMP stack (Linux/Apache/MySQL/PHP).
* **PHP:** 8.3 or higher
* **Database:** MySQL 8.0+ or MariaDB 10.6+
* **Web Server:** Apache 2.4+ or Nginx 1.18+
* **Composer:** 2.0 or higher

For detailed requirements, see [Server Requirements](/docs/development/server-requirements/).

**Recommended Hosting Solutions**
* Digital Ocean – Cost-effective. For self-installs.
* OneEach Technologies – Mid-range. For Ys with developer partners.
* Acquia/Pantheon/Platform.sh – Enterprise. For large YMCAs.

### SSL (Security Certificate)

Security certificate that authenticates that you own your website. Displays lock icon in user’s web browser. Required by most modern browsers. SSLs are widely available for a large number of reputable providers.

### Domain Name (Website Address)

*Only required for standalone Y sites* . Can be set up with its own unique web address (i.e.,virtualymcatn.org), a unique directory within your existing site (ymcamidtn.org/virtual) or as a subdomain of your existing site (virtual.ymcamidtn.org).

Requirements for each of these setups is unique. Contact your developer partner or the Open Y community for help with your setup.

### Sign-In Integration

**CRMs with Full Integration**

* Daxko
* Personify
* Salesforce (Coming Soon)

**Other CRMs**
* Upload a .csv file of emails to your server to use the manual sign-in experience.
