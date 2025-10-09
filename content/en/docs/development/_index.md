---
title: Development
weight: 98
aliases:
  - /docs/wiki/
---

Welcome to the development corner of the YMCA Website Services distribution.

## For YMCA Associations

- [OpenY Release Schedule]({{< relref "Open-Y-Release-Schedule-and-Guidelines" >}})

## For Developers

- [Development Processes]({{< relref "Open-Y-technology-pipeline" >}})
- [Updating YMCA Website Services]({{< relref "OpenY-upgrade-how-to-for-Developers" >}})
- [Development FAQ]({{< relref "Development-FAQ" >}})
- [Code review best practices]({{< relref "Code-Review-Quality-Best-Practices" >}})

## For QA Engineers

- [YMCA Website Services Smoke Tests Index]({{< relref "Open-Y-Smoke-Tests-Index" >}})

---

## Community Guidelines

### Best Practices

- [Code of Conduct]({{< relref "Open-Y-Code-of-Conduct-and-Best-Practices" >}})
- [Coding Standards]({{< relref "Code-Review-Quality-Best-Practices" >}})
- [Pull Request Standards]({{< relref "Open-Y-Pull-Requests-review-standard" >}})

### Legal

- [Participant Agreement]({{< relref "WS-Participant-Agreement" >}})
- [Terms of Use]({{< relref "WS-Terms-of-Use" >}})
- [Terms and Conditions]({{< relref "ws-terms-conditions" >}})

## Getting Started with YMCA Website Services Development

Whether you are just getting started with YMCA Website Services or need to test a feature in a stable environment, the YMCA Website Services Core Team maintains a number of [Sandboxes]({{< relref "Sandboxes" >}}) that you can use.

### Processes & Components

- [Development Processes]({{< relref "Open-Y-technology-pipeline" >}})
- [Development-FAQ]({{< relref "Development-FAQ" >}})
- [Videos]({{< relref "Videos" >}})
- [Spam Protection Strategies]({{< relref "OpenY-anti-spam-protection" >}})

### Environment Setup

- [Tech Stack]({{< relref "Open-Y-3rd-party-dependencies" >}})
- [Open-Y-one-click-install-how-to]({{< relref "Open-Y-one-click-install-how-to" >}})
- [Install-Solr-site-search-for-Open-Y]({{< relref "Install-Solr-site-search-for-Open-Y" >}})
- [Install-SSL-certificate-for-the-OpenY-site]({{< relref "Install-SSL-certificate-for-the-OpenY-site" >}})
- [Switching Drupal Core Versions]({{< relref "Drupal-9-core-dependencies-version-flexibility" >}})

### Advanced: Multi-Domain Configuration

**As of version 10.4.0.0**, YMCA Website Services includes support for the Domain Access module, enabling multi-domain and multi-branch site architectures.

**Use cases:**
- Multiple YMCAs sharing one Drupal installation
- Branch-specific domains (e.g., `downtown.ymca.org`, `westside.ymca.org`)
- White-label YMCA sites

**To enable Domain Access:**

```bash
composer require drupal/domain
drush en domain domain_access -y
```

Configure domains at **Configuration** > **Domain Access** (`/admin/config/domain`).

For more details, see the [10.4.0.0 release notes](https://github.com/YCloudYUSA/yusaopeny/releases/tag/10.4.0.0) and the [Domain Access module documentation](https://www.drupal.org/project/domain).

## Contributing to YMCA Website Services

### Working with Existing Functionality

- [Working with Themes]({{< relref "How-to-develop-themes-in-Open-Y" >}})
- [Working with the YMCA Website Services Profile]({{< relref "Open-Y-2.0-root-YAML-files" >}})
- [Smoke Tests for Validating Changes]({{< relref "Open-Y-Smoke-Tests-Index" >}})

### Adding and Removing Functionality

- [How to Contribute a New Component]({{< relref "How-to-contribute-large-features-into-Open-Y-(backporting,-etc)" >}})
- [How we Deprecate Components]({{< relref "Deprecate-and-remove-components-from-Open-Y" >}})

### Dependency Management

- [Managing Composer Version Constraints]({{< relref "Composer-version-constraints-for-Open-Y" >}})
- [Updating to Composer 2]({{< relref "Secure-devops-for-composer-2-release" >}})

### Decoupling YMCA Website Services

- [Intro to Decoupling YMCA Website Services Components]({{< relref "Decouple-component-from-Open-Y-as-independent-module-project" >}})
- [List of Decoupled Components]({{< relref "Decoupled-(-external-)-projects-of-OpenY" >}})
- [Managing Drupal Dependencies while Decoupling]({{< relref "Dependencies-in-drupal-info.yml" >}})
- [Analytics Decoupling and Opt-out]({{< relref "Open-Y-update-sunset---opt-out-tutorial" >}})

## Ongoing Maintenance

### Releases

- [Open-Y-Release-Schedule-and-Guidelines]({{< relref "Open-Y-Release-Schedule-and-Guidelines" >}})
- [How-we-release-OpenY-distribution-from-code-perspective]({{< relref "How-we-release-OpenY-distribution-from-code-perspective" >}})

### Update Processes & Notices

- [Updating YMCA Website Services]({{< relref "OpenY-upgrade-how-to-for-Developers" >}})
- [Drupal 9 to Drupal 10 Upgrade]({{< relref "drupal-10-update" >}})
- [Drupal 11 Migration Guide]({{< relref "drupal-11-migration" >}}) (Beta - stable Q4 2025)
- [Important-versions-for-upgrade-path]({{< relref "Important-versions-for-upgrade-path" >}})

These documents are for old versions of YMCA Website Services, but may contain useful information for troubleshooting future update issues.

- [SA-CORE-2018-004]({{< relref "OpenY-security---Drupal-SA-CORE-2018-004" >}})
- [SA-CORE-2018-002]({{< relref "OpenY-security-update-how-to.-Update-Drupal-core-only" >}})
- [Upgrade from 8.0.x to 8.1.x]({{< relref "OpenY-upgrade-for-developers.-Upgrade-to-old-OpenY-1.x-version" >}})
- [Upgrade-OpenY-8.1.3-to-8.2.2.1]({{< relref "Upgrade-OpenY-8.1.3-to-8.2.2.1" >}})
- [Upgrade-use-case-from-8.2.2.3-to-8.2.7.3]({{< relref "Upgrade-use-case-from-8.2.2.3-to-8.2.7.3" >}})
- [openy-9.x-2.11.5 to 10.3 latest distribution]({{< relref "upgrade_use_case_drupal_9_drupal_10_1" >}})
