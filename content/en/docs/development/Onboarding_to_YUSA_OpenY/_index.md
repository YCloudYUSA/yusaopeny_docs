---
title: Onboarding
description: Welcome to YMCA Website Services 
weight: -50
---

## List of migrated repositories/projects

In 2022, maintenance of the distribution moved from Open Y LLC to Y-USA. With this, repository locations have changed:

- YMCA Website Services (formerly Open Y):  [YCloudYUSA/yusaopeny](https://github.com/YCloudYUSA/yusaopeny)
- YMCA Virtual Experience (formerly Virtual Y): [YCloudYUSA/yusaopeny_gated_content](https://github.com/YCloudYUSA/yusaopeny_gated_content)
- Activity Finder: [YCloudYUSA/yusaopeny_activity_finder](https://github.com/YCloudYUSA/yusaopeny_activity_finder)
- Membership Framework: [YCloudYUSA/yusaopeny_memberships](https://github.com/YCloudYUSA/yusaopeny_memberships)
- YMCA Digital Services Docs: [YCloudYUSA/yusaopeny_docs](https://github.com/YCloudYUSA/yusaopeny_docs)
- YMCA Website Services distribution (formerly Open Y project) [YCloudYUSA/yusaopeny-project](https://github.com/YCloudYUSA/yusaopeny-project)

## How to start developing Open Y

In order to get a copy of the latest development version of the distribution, please follow steps from [YUSA OpenY README](https://github.com/YCloudYUSA/yusaopeny#latest-development-version-drupal-9-2x).

Pay attention Open Y has a modular structure, so if you plan changes to specific component - create Pull Request/Merge Request in respective project or repository, based on component's composer.json data.

In order to test specific component, create a PR to [yusaopeny](https://github.com/YCloudYUSA/yusaopeny/pulls) and add a reference in composer.json of Open Y in order for the build system to start using updated component.

### QA sandboxes for Open Y

The YMCA Website Services core team manages [sandboxes](../../wiki/sandboxes) for various configurations of the distribution to facilitate evaluation, to help with QA, and enable investigation of issues.

## How to start developing Virtual Y

[Get started with the README](https://github.com/YCloudYUSA/yusaopeny_gated_content#development)

[QA sandboxes for Virtual Y](../../wiki/sandboxes/#virtual-y-sandboxes)

## How to start developing Membership Framework

[Get started with the README](https://github.com/YCloudYUSA/yusaopeny_memberships#installation)

[QA sandboxes for Membership Framework](../../wiki/sandboxes/#membership-framework-sandboxes)

## How to start developing Activity Finder

Activity Finder is installed with the distribution by default.

[Get started with the README](https://github.com/YCloudYUSA/yusaopeny_activity_finder#open-y-activity-finder)

[QA Sandboxes for Activity Finder](../../wiki/sandboxes/#activity-finder-sandboxes)
