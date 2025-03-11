---
title: Virtual Y 1.6.5
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny_gated_content/releases/tag/1.6.5).
date: 2022-12-16
---

## Updates & New Features

### 9.4 Virtual Y Update

- Updated Virtual Y to version 9.4.

## Bug Fixes

### Virtual Y: In Event Series, Host's Name is not editable

- The Host's Name is now included as an editable field when updating an existing Event Series. It will copy the values from the editable Instructor field upon each Save.

### Virtual Y: Released bug fixes - April 2022

- Removed additional styling below the menu.
- **Chat:** Fixed an issue with Chat to remove message history/previous chat.
- Fixed an issue with the page layout breaking for small videos.
- Resolved an error that was displaying when admin tried to install the Virtual 1:1 Meeting module.
- Fixed an issue with megamenu links going to the secondary menu.
- Resolved an error that was displaying when admin tried to create an export file with logs.
- Resolved an error that was displaying when admin tried to install the Open Y Virtual YMCA Search module.
- Resolved an error that was displaying when admin tried to install the Open Y Virtual Y shared content server module.
- Resolved an error that was displaying when admin tried to install the Virtual Y Shared Content module.
- Resolved an error that was displaying when admin tried to export Users logs.
- Fixed an issue where the time of a 1:1 meeting didn’t match on the Schedules and 1:1 meeting page.
- Fixed an issue where users weren’t able to join the 1:1 meeting.
- Fixed an issue where admins could not index searches.
- Fixed a problem with the secondary menu shifting.
- Resolved an issue in Lily where page titles were partially hidden on mobile devices.

### VirtualY 1.6.4 - Additional Bulk Fixes

- Migrate to YUSA.
- Improved error handling for Reclique SSO.
- Resolved an issue where VY is hidden for users that have the admin toolbar.
- Small fix to icon paths.
- Added option for dummy provider to "auto-login", providing a kind of "demo mode" for VY.
- Added permissions mapping to `gc_auth_reclique_sso`.
- Added on|off toggle for `log_archiver` cron job in config.
