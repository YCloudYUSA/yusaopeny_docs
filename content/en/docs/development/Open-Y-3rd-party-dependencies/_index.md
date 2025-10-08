---
title: 3rd-party dependencies
aliases:
  - /docs/wiki/open-y-3rd-party-dependencies/
---

YMCA Website Services's system requirements generally track [those of Drupal](https://www.drupal.org/docs/system-requirements) with some occasional more opinionated recommendations.

## Current Version Requirements (Drupal 11)

- **Drupal**: 11.1.x or higher
- **PHP**: 8.3 or higher
- **Composer**: 2.0 or higher
- **Database**: MySQL 8.0+ OR MariaDB 10.6+
- **Web Server**: Apache 2.4+ OR Nginx 1.18+
- **Operating System**: Linux-based (Ubuntu LTS 20.04+ recommended)

For complete requirements, see our [Server Requirements](../server-requirements/) page.

## General Requirements

Supported versions may differ based on your Drupal version.

- A [supported web server](https://www.drupal.org/docs/system-requirements/web-server-requirements) like Apache or Nginx
- A [supported database server](https://www.drupal.org/docs/system-requirements/database-server-requirements) like MySQL or MariaDB
- A [supported version of PHP](https://www.drupal.org/docs/system-requirements/php-requirements)
- A Linux-based operating system
  - [Ubuntu](https://ubuntu.com/) 20.04 LTS and 22.04 LTS are supported
  - CentOS or similar may work as well

Recommended for advanced functionality, but not required:

- [Apache SOLR](https://lucene.apache.org/solr/) search server
  - Version 4.9.1 and version 8 have been tested for Activity Finder. Other versions are works in progress.

### For high load/performance sites

- A memory-based key-value store
  - [Memcache](http://memcached.org/)
  - [Redis](https://redis.io)
- A reverse proxy/HTTP cache
  - [Varnish](https://varnish-cache.org/)
  - [Nginx reverse proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)

See also Drupal's recommendations for [managing site performance and scalability](https://www.drupal.org/docs/managing-site-performance-and-scalability).

### For development

- [Oracle VM Virtualbox](https://www.virtualbox.org/)
- [Vagrant configuration manager](https://www.vagrantup.com/)
- [Ansible configuration manager and automation](https://www.ansible.com/)
- [Composer package manager](https://getcomposer.org/)
- [Docker virtual environments](https://www.docker.com/)

See our [installation instructions](https://github.com/YCloudYUSA/yusaopeny-project#installation) for a full walkthrough of these tools.

## Software libraries and frameworks

YMCA Website Services leverages many other open source frameworks including, but not limited to:

- [Drupal](https://drupal.org/project/drupal)
- [Symfony](https://symfony.com/)
- [ReactJS](https://reactjs.org/)
- [Vue.js](https://vuejs.org/)
- [Google reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html)
- [NodeJS](https://nodejs.org/en/)
