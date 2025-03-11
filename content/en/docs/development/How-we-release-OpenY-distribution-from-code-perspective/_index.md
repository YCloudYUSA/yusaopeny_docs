---
title: Release processes
aliases:
  - /docs/wiki/how-we-release-openy-distribution-from-code-perspective/
---

### Repositories Involved in Releases

The following repositories are involved in the release process for YMCA Website Services:

1.  **YMCA Website Services Drupal Profile Distribution:** [YCloudYUSA/yusaopeny](https://github.com/YCloudYUSA/yusaopeny) - This repository contains the core Drupal profile distribution for YMCA Website Services.
2.  **YMCA Website Services Project:** [YCloudYUSA/yusaopeny-project](https://github.com/YCloudYUSA/yusaopeny-project) - This repository is used to initiate a new YMCA Website Services instance. It typically includes the `composer.json` file and installation scripts.
3.  **Continuous Integration/DevOps for YMCA Website Services:** [YCloudYUSA/yusaopeny-cibox-build](https://github.com/YCloudYUSA/yusaopeny-cibox-build) - This repository manages the CI/CD processes for rebuilding and installing YMCA Website Services.
4.  **CIBox Development Environment:** [YCloudYUSA/yusaopeny-cibox-vm](https://github.com/YCloudYUSA/yusaopeny-cibox-vm) - This repository contains the configuration for the CIBox development environment, which uses Virtualbox, Docker, and Vagrant.
5.  **Docksal Development Environment:** [YCloudYUSA/yusaopeny-docksal](https://github.com/YCloudYUSA/yusaopeny-docksal) - This repository provides a Docksal-based development environment using Docker and VirtualBox.

### Release Management Process

The Lead Architect follows these steps when tagging a new release of YMCA Website Services:

1.  **Update the Project Repository:** Review, merge, and update the [YCloudYUSA/yusaopeny-project](https://github.com/YCloudYUSA/yusaopeny-project) repository. This usually involves updating the `composer.json` file or the one-line installation script. Tag a new release in this repository.
2.  **Review and Merge Pull Requests:** Review and merge all pull requests in the [YCloudYUSA/yusaopeny](https://github.com/YCloudYUSA/yusaopeny) repository that are planned for the release.
3.  **Update the Distribution Version:** Change the YMCA Website Services version in the `openy.info.yml` file located in the `yusaopeny` repository.  The file path is [`openy.info.yml`](https://github.com/YCloudYUSA/yusaopeny/blob/main/openy.info.yml#L5).
4.  **Update Module Versions:** If there were changes to major modules (e.g., Activity Finder, PEF), update the YMCA Website Services version in those modules as well.
5.  **Create Changelog Release Notes:** Create a draft changelog with release notes. Include a list of contributors and major issues fixed or introduced in the release.
6.  **Regression Testing:** Spin up a copy of an YMCA Website Services site and check top-priority functionality for regressions.
7.  **Core Team Review and Approval:** Send the release candidate to the Core Team for review and get their approval.
8.  **Update Development Version:** After approval, change the YMCA Website Services version in [`openy.info.yml`](https://github.com/YCloudYUSA/yusaopeny/blob/main/openy.info.yml#L5) to the next version with the `-dev` suffix for developers.
9.  **Refresh Private Mirror:** Refresh the YMCA Website Services private mirror on the `openy.cibox.tools` CI server.
10. **Verify Version in Site Info:** Ensure the version of YMCA Website Services is correct in the site information page (`admin/reports/status`).
11. **Announce Release - Developers:** Publish an announcement in the `#developers` YMCA Website Services Slack channel.
12. **Announce Release - General:** Publish an announcement in the `#general` YMCA Website Services Slack channel.
