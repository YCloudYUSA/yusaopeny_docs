---
title: Release Process
linkTitle: Release Process
description: Step-by-step code release process for YMCA Website Services, including version bumps in info.yml, tagging, and announcements.
keywords:
  - release
  - releasing
  - tagging
  - tag
  - version-bump
  - info.yml
  - openy.info.yml
  - mirror
  - cibox
  - slack-announcement
  - lead-architect
aliases:
  - /docs/wiki/how-we-release-openy-distribution-from-code-perspective/
---

> Looking for **how to write release notes** (structure, audiences, formatting)? See the [Release Notes Structure Guide]({{< relref "/docs/contribution-guidelines/release-notes-guide" >}}).
>
> Looking for **when to release** (cadence, schedule)? See [Release Schedule and Guidelines]({{< relref "/docs/development/Open-Y-Release-Schedule-and-Guidelines" >}}).

This page documents the code-side release process: what repositories are tagged, where version numbers live, and the announcement workflow.

## Repos involved in releases

1. YMCA Website Services Drupal Profile Distribution — [YCloudYUSA/yusaopeny](https://github.com/YCloudYUSA/yusaopeny)
2. YMCA Website Services Project for initiating a YMCA Website Services instance — [YCloudYUSA/yusaopeny-project](https://github.com/YCloudYUSA/yusaopeny-project)
3. Continuous Integration/DevOps for rebuilding/installing YMCA Website Services — [YCloudYUSA/yusaopeny-cibox-build](https://github.com/YCloudYUSA/yusaopeny-cibox-build)

## Release Management

When tagging a new release of YMCA Website Services, the Lead Architect takes the following steps:

### 1. Merge and tag `yusaopeny-project`

Review, merge, and update [YCloudYUSA/yusaopeny-project](https://github.com/YCloudYUSA/yusaopeny-project) (usually `composer.json` and/or the one-line install script) and tag a new release there.

### 2. Merge planned PRs in `yusaopeny`

Review and merge all Pull Requests in [YCloudYUSA/yusaopeny](https://github.com/YCloudYUSA/yusaopeny) that were planned for this release.

### 3. Bump version in `openy.info.yml`

Change the YMCA Website Services version in [`openy.info.yml`](https://github.com/YCloudYUSA/yusaopeny/blob/main/openy.info.yml) (the `version:` field).

```yaml
# openy.info.yml
name: YMCA Website Services
type: profile
version: 11.3.1.1
```

This is the canonical version reported in `admin/reports/status` and used by Composer/Drush tooling. The release tag in Git must match this value.

### 4. Bump version in major module info.yml files (if changed)

If major modules changed in this release (Activity Finder, PEF, etc.), bump their `version:` in each module's `*.info.yml` as well.

### 5. Draft Changelog release notes

Create Changelog release notes as a draft. Include contributors and major issues fixed or introduced. For structure and audience guidance, see the [Release Notes Structure Guide]({{< relref "/docs/contribution-guidelines/release-notes-guide" >}}).

### 6. Regression check

Spin up a copy of a YMCA Website Services site and check top-priority functionality for regressions.

### 7. Core Team review

Send for review to the Core Team and get approval.

### 8. Bump `openy.info.yml` to next `-dev`

After tagging, change the YMCA Website Services version in [`openy.info.yml`](https://github.com/YCloudYUSA/yusaopeny/blob/main/openy.info.yml) to the next version with a `-dev` suffix for developers (for example, `11.3.1.2-dev`).

### 9. Refresh the private mirror

Refresh the YMCA Website Services private mirror on the `openy.cibox.tools` CI server.

### 10. Verify version in site info

Ensure the version of YMCA Website Services is the proper one in site info (`admin/reports/status`).

### 11. Announce

Publish announcements in:
- `#developers` YMCA Website Services Slack channel
- `#general` YMCA Website Services Slack channel

## Related

- [Release Notes Structure Guide]({{< relref "/docs/contribution-guidelines/release-notes-guide" >}}) — how to write the notes themselves
- [Release Schedule and Guidelines]({{< relref "/docs/development/Open-Y-Release-Schedule-and-Guidelines" >}}) — cadence and policy
- [Secure DevOps for Composer 2 release]({{< relref "/docs/development/Secure-devops-for-composer-2-release" >}}) — Composer security considerations
