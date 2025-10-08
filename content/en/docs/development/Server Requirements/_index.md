---
title: Server Requirements
---

If you need to prepare server for the YMCA Website Services instance, here below you should find all needed software to meet its requirements.

## System Requirements

### For Drupal 11 (Current Version)

- **Drupal**: 11.1.x or higher
- **PHP**: 8.3 or higher
- **Composer**: 2.0 or higher
- **Database**:
  - MySQL 8.0+ OR
  - MariaDB 10.6+
- **Web Server**:
  - Apache 2.4+ OR
  - Nginx 1.18+
- **Operating System**: Linux-based OS (Ubuntu LTS 20.04+ recommended)

For detailed requirements, see the [official Drupal system requirements](https://www.drupal.org/docs/system-requirements).

### Required PHP Modules

  - php8.3 (or higher)
  - php8.3-cli
  - php8.3-common
  - php8.3-curl
  - php8.3-dev
  - php8.3-fpm (for Nginx)
  - php8.3-gd
  - php8.3-mysql
  - php8.3-xml
  - php8.3-mbstring
  - php8.3-soap
  - php8.3-zip

### Optional but Recommended

- **Cache**: Memcached or Redis for improved performance
- **Search**: Apache SOLR 8.x for advanced search functionality
- **HTTP Cache**: Varnish or Nginx reverse proxy for high-traffic sites
- **Development Tools**:
  - Docker (recommended for local development via Docksal or DDEV)
  - Ansible (for server provisioning)

## Development Environments

**Recommended**: [Docksal](https://docksal.io/) (Docker-based development environment)

**Alternatives**:
- [DDEV](https://ddev.com/)
- Manual installation following the [installation guide](https://github.com/YCloudYUSA/yusaopeny-project#installation)

## Legacy Version Requirements

### Drupal 10

- **PHP**: 8.1 or higher
- **MySQL**: 5.7.8+ or MariaDB 10.3.7+
- See [Drupal 10 upgrade guide](../drupal-10-update/)

### Drupal 9 (End of Life)

- **PHP**: 7.3 or higher (8.0+ recommended)
- **MySQL**: 5.5.3+ or MariaDB 10.1.0+
- See [Drupal 9 to 10 upgrade guide](../upgrade_use_case_drupal_9_drupal_10_1/)
