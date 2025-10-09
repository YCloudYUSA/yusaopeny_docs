---
title: Release processes
aliases:
  - /docs/wiki/how-we-release-openy-distribution-from-code-perspective/
---

### Repos involved in releases

1. YMCA Website Services Drupal Profile Distribution [YCloudYUSA/yusaopeny](https://github.com/YCloudYUSA/yusaopeny)
1. YMCA Website Services Project for initiating an YMCA Website Services instance - [YCloudYUSA/yusaopeny-project](https://github.com/YCloudYUSA/yusaopeny-project)
1. Continuous Integration/DevOps for rebuilding/installing YMCA Website Services - [YCloudYUSA/yusaopeny-cibox-build](https://github.com/YCloudYUSA/yusaopeny-cibox-build)

### Release Management

When tagging a new release of YMCA Website Services, the Lead Architect takes the following steps:

1. Review/Merge/Update [YCloudYUSA/yusaopeny-project](https://github.com/YCloudYUSA/yusaopeny-project) (usually composer.json or/and oneline script install) and tag a new release there.
1. Review/Merge all Pull Requests in [YCloudYUSA/yusaopeny](https://github.com/YCloudYUSA/yusaopeny) that were planned for release.
1. Change the YMCA Website Services version in [`openy.info.yml`](https://github.com/YCloudYUSA/yusaopeny/blob/9.x-2.x/openy.info.yml#L5).
1. Change the YMCA Website Services version in major modules if there were changes to them (Activity Finder, PEF, etc).
1. Create Changelog release notes as a draft and include Contributors as well as major issues fixed/introduced.
1. Spin up a copy of an YMCA Website Services site and check top priority functionality for regressions.
1. Send for review to Core Team, get approval.
1. Change the YMCA Website Services version to next with -dev suffix for developers in [`openy.info.yml`](https://github.com/YCloudYUSA/yusaopeny/blob/main/openy.info.yml#L5).
1. Refresh the YMCA Website Services private mirror on the `openy.cibox.tools` CI server.
1. Ensure the version of YMCA Website Services is the proper one in site info (`admin/reports/status`).
1. Publish announcement in #developers YMCA Website Services Slack channel.
1. Publish announcement in #general YMCA Website Services Slack channel.
