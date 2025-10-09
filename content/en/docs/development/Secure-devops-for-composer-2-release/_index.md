---
title: Secure devops for composer 2 release
aliases:
  - /docs/wiki/secure-devops-for-composer-2-release/
---

This article only applies to long-term users of YMCA Website Services. YMCA Website Services supports Composer 2 [as of version 8.2.7 in November 2020](https://github.com/YCloudYUSA/yusaopeny/releases/tag/8.2.7) and new installs use Composer 2 by default.

----

Composer was upgraded to `2.x` on October 30, 2020. This could cause instability when your older composer `1.x` accidentally auto-updates to the `2.x` version. Issues could include: composer fails to run any commands and blocks OpenY upgrade/maintenance. The instability would be in the developer environment, not YMCA Website Services/Drupal.

The YMCA Website Services team prepared an avoidance plan for the community to take action steps before the release while YMCA Website Services will be verifying Composer `2.x` causes no issues or regressions.

If you use DDEV local environment your composer version will not update automatically, so you're currently safe from inadvertent updates. Instructions for updating DDEV will be included with any necessary YMCA Website Services updates at a later date.

### Case before October 30, 2020, when you are on composer 1.x

Composer 2 is coming and older versions of composer `1.x` show the message below.

```
Composer 2.0 is about to be released and the older 1.x releases will self-update directly to it once it is released. To avoid surprises update now to the latest 1.x version
```

If you see the message above, ensure your environments have updated composer to the latest `1.x` version by running:

```sh
composer selfupdate --1
```

To ensure the above command shows your version `1.x` after an upgrade, check the version of composer:

```sh
composer --version
```

You should see something like

```sh
MacBook-Pro-Andrii:www podarok$ composer --version
Composer version 1.10.15 2020-10-13 15:59:09
```

as an output of the command.

### If you do not upgrade to the latest 1.x version before October 30, 2020. i.e. if you accidentally upgrade to Composer 2.x

If your composer updated to version 2 and you have issues with this upgrade, the solution is to downgrade Composer to the latest `1.x` version by running:

```sh
composer selfupdate --1
```

If you are faced with any issues connect with the YMCA Website Services team on GitHub ([create issue](https://github.com/YCloudYUSA/yusaopeny/issues/new)) and the #developers channel [on Slack](<mailto:ycloud@ymca.net?subject=Slack Access Request>).
