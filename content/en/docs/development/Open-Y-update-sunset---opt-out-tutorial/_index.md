---
title: Open Y Analytics Sunset
aliases:
  - /docs/wiki/open-y-update-sunset---opt-out-tutorial/
---

## Preamble

On January 28, 2020, the Open Y initiative introduced an anonymous analytics module, [`openy_analytics`](https://github.com/YCloudYUSA/yusaopeny/tree/9.x-2.x/modules/custom/openy_analytics). This module was designed as a free, opt-in/opt-out solution, allowing the Core Team to gather statistics from Open Y sites regarding the usage frequency of various components.

The primary goal was to collect data that would inform decision-making and enhance our understanding of component demand within the Open Y ecosystem.

Recently, the Open Y Core Team decided to sunset this functionality and remove both the `openy_analytics` and `openy_update` modules from the Open Y distribution due to low usage. This sunsetting reduces the server load on Open Y instances and allows us to archive the analytics server.

## How to Opt-Out of the Analytics Subsystem

To opt-out, navigate to **YMCA Website Services -> Terms and Conditions** within your YMCA Website Services site instance and uncheck the **Optional Permissions** checkbox.

![Terms and Conditions Checkbox](https://user-images.githubusercontent.com/563412/130236284-5979a4fe-289c-4ccc-9c18-059d17d143e8.png)

After submitting the form, your site will no longer transmit anonymous data. If the checkbox was already disabled, no action is needed, as you had not previously opted in.

## Deprecation Details

The uninstall and deprecation process was implemented in [Pull Request #2537](https://github.com/YCloudYUSA/yusaopeny/pull/2537).

## Related Packages

The `openy_analytics` module was part of the **Analytics** package. This package, as described in `openy.packages.yml`, aimed to "integrate the website with analytic systems and capture website statistic." It included modules like `google_tag` and `google_analytics` to configure integrations with Google Analytics or Google Tag Manager.
