---
title: 3rd-party dependencies
aliases:
  - /docs/wiki/open-y-3rd-party-dependencies/

---

YMCA Website Services's system requirements generally track [those of Drupal](https://www.drupal.org/docs/system-requirements) with some occasional more opinionated recommendations. YMCA Website Services leverages many other open source frameworks including, but not limited to, the ones listed below. These dependencies are reviewed periodically for new features and deprecations.

## General Requirements

Supported versions may differ based on your Drupal version. Refer to Drupal's documentation for specific version compatibility.

- A [supported web server](https://www.drupal.org/docs/system-requirements/web-server-requirements) like Apache or Nginx
- A [supported database server](https://www.drupal.org/docs/system-requirements/database-server-requirements) like MySQL or MariaDB
- A [supported version of PHP](https://www.drupal.org/docs/system-requirements/php-requirements)
- A Linux-based operating system
  - [Ubuntu](https://ubuntu.com/) 16, 18, and 20 are supported.
  - CentOS or similar may work as well.

Recommended for advanced functionality, but not required:

- [Apache SOLR](https://lucene.apache.org/solr/) search server
  - Version 4.9.1 and version 8 have been tested for Activity Finder. Other versions are works in progress.

### For high load/performance sites

- A memory-based key-value store
  - [Memcached](http://memcached.org/)
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

- [Drupal](https://drupal.org/project/drupal) - Content management framework
- [Symfony](https://symfony.com/) - PHP framework
- [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vue.js](https://vuejs.org/) - JavaScript framework for building user interfaces
- [Google reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html) - Service to protect your website from spam and abuse
- [NodeJS](https://nodejs.org/en/) - JavaScript runtime environment
- [CommonMark](https://commonmark.org/) and [Michel Fortin's PHP Markdown Extra](https://michelf.ca/projects/php-markdown/extra/) - Markdown parsers for converting Markdown text to HTML (used within modules such as Blazy for processing help text).
