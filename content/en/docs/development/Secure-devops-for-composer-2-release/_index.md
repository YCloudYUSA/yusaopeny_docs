---
title: Secure DevOps for Composer 2 Release
aliases:
  - /docs/wiki/secure-devops-for-composer-2-release/
---

This article primarily applies to long-term users of YMCA Website Services. YMCA Website Services supports Composer 2 as of version 8.2.7, released in November 2020.  New installations of YMCA Website Services use Composer 2 by default. You can find the release notes [here](https://github.com/YCloudYUSA/yusaopeny/releases/tag/8.2.7).

----

Composer was upgraded to version `2.x` on October 30, 2020. An older Composer version (`1.x`) might accidentally auto-update to version `2.x`, potentially causing instability. Issues might include Composer failing to run commands, which would block OpenY upgrades or maintenance. This instability would occur in the developer environment, not within YMCA Website Services or Drupal itself.

The YMCA Website Services team prepared an avoidance plan for the community to take action before the release, while YMCA Website Services verified that Composer `2.x` caused no issues or regressions.

If you use Docksal or Vagrant local environments, your Composer version will not update automatically, so you are currently safe from inadvertent updates. Instructions for updating these environments will be included with any necessary YMCA Website Services updates at a later date.

### If you are on Composer 1.x before October 30, 2020

With Composer 2 on the horizon, older versions of Composer `1.x` may display the following message:

```
Composer 2.0 is about to be released and the older 1.x releases will self-update directly to it once it is released. To avoid surprises update now to the latest 1.x version
```

If you see this message, ensure your environments have updated Composer to the latest `1.x` version by running:

```sh
composer selfupdate --1
```

To verify that the command updated to version `1.x`, check the Composer version:

```sh
composer --version
```

You should see output similar to the following:

```sh
MacBook-Pro-Andrii:www podarok$ composer --version
Composer version 1.10.15 2020-10-13 15:59:09
```

### If you accidentally upgrade to Composer 2.x before upgrading to the latest 1.x version (before October 30, 2020)

If Composer has updated to version 2 and you are experiencing issues, downgrade Composer to the latest `1.x` version by running:

```sh
composer selfupdate --1
```

If you encounter any issues, connect with the YMCA Website Services team on GitHub ([create issue](https://github.com/YCloudYUSA/yusaopeny/issues/new)) or the #developers channel on [Slack](mailto:ycloud@ymca.net?subject=Slack%20Access%20Request).
