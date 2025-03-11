```markdown
---
title: Server Requirements
---

If you need to prepare a server for the YMCA Website Services instance, the information below outlines the necessary software and configurations.

### Requirements

1.  **Operating System:** Ubuntu LTS (Long Term Support) versions 14 or 16 are preferred. CentOS is also acceptable. Other Linux distributions may work, but have not been fully tested by the YMCA Website Services team.

2.  **Drupal 8/9/10 Requirements:** Meet the server requirements specified by Drupal.
    *   [Drupal 8 server requirements](https://www.drupal.org/docs/8/system-requirements)
    *   [Drupal 9 server requirements](https://www.drupal.org/docs/9/how-to-prepare-your-site-for-drupal-9/server-requirements)
    *   [Drupal 10 server requirements](https://www.drupal.org/docs/10/system-requirements)

3.  **PHP:** PHP 7.4 or higher is strongly recommended for performance and security reasons.  Refer to the specific Drupal version's documentation for supported PHP versions.

### PHP Modules

The following PHP modules are required:

  - php
  - php-cli
  - php-common
  - php-curl
  - php-fpm
  - php-gd
  - php-mysql or php-pgsql (depending on your database)
  - php-intl
  - php-mbstring
  - php-xml
  - php-zip
  - php-opcache (recommended)
  - imagick (recommended for image processing)
  - memcached or redis (for caching)

**Note:** Replace `php` with the specific PHP version (e.g., `php7.4`, `php8.1`). Use your system's package manager (e.g., `apt`, `yum`) to install these modules.

4.  **Database Server:** MySQL 5.7+ or MariaDB 10.3+ are recommended. PostgreSQL is also supported.  Optimized MySQL settings can be found at [cibox/cibox](https://github.com/cibox/cibox/blob/master/core/facade-mysql/defaults/main.yml). Note that these settings may need adjustments based on your specific server resources and workload.

5.  **Web Server:** Apache 2 with `mod_php` (known for stability) or Nginx with `php-fpm` (better for speed and scalability)
    *   Apache: `libapache2-mod-php`
    *   Nginx: Requires configuration to proxy PHP requests to `php-fpm`.

6.  **Caching (Optional but Recommended):**
    *   Memcached server
    *   Redis server

7.  **Server Tools (Optional):**
    *   Ansible (for provisioning and configuration management)
    *   Docker (for containerization)
    *   SOLR 4.x or higher (for advanced search functionality)
    *   Varnish (for HTTP caching and acceleration)

**Note:** Ensure that your firewall is properly configured and only necessary ports are open for security reasons. Regularly update your server software to patch security vulnerabilities.
```