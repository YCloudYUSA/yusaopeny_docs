---
title: Digital Services Release 10.3.10 
menu:
    main:
        weight: 60
        name: Updates
---

# YMCA Website Services Distribution 10.3.10  

## What's Changed in yusaopeny 10.3.10  

The YMCA of the USA's YMCA Website Services Drupal distribution, **yusaopeny**, has been updated to version **10.3.10**. This release includes several updates, including an updated PHP requirement, new features, and bug fixes.  
👉 [View Full Changelog (10.3.4...10.3.10)](yusaopeny/compare/10.3.4...10.3.10)  

### PHP Requirement Updated  
- The minimum PHP requirement has been updated to **v8.3**.  
- This change was a collaborative effort between updates **#219** and **#220**.  
- **Update #219** prepared the codebase by pointing the development environment to a fork and updating composer packages.  
- **Update #220** officially set the minimum PHP version to 8.3.  
- While no specific benefits of PHP 8.3 for yusaopeny are mentioned, upgrading to the latest PHP version generally provides **performance improvements and enhanced security**.  

### New Features  
- **Update #221** added a profile name to the `core.extension.module` list.  
- This improves module organization and management, making it easier for users to identify and work with different profiles.  

### Bug Fixes  
- **Update #226** introduced fixes for Drupal core **10.3**, ensuring stability and compatibility with the latest version.  

### Drupal Core Updates  
- **Update #200**: Updated Drupal core to **10.3** (Released).  
- **Update #224**: Updated Drupal core to **10.4** (Work in Progress for next release).  
- These updates bring new features, performance improvements, and security enhancements.  

### Other Changes  
- **Update #264** in the `y_lb` repository improved Layout Builder functionality within YMCA Website Services.  
- **Update #92** in the `openy_features` repository enhanced the features module, offering more flexibility and customization options.  

## Conclusion  
This release of **yusaopeny 10.3.10** introduces **important updates and enhancements** to the YMCA Website Services Drupal distribution.  
✅ **Updated PHP requirement** ensures compatibility with the latest PHP version.  
✅ **New features and bug fixes** enhance functionality and user experience.  
✅ **Drupal core updates** bring security and performance improvements.  

These changes collectively improve the **stability, performance, and user experience** of the YMCA Website Services distribution.  

## What's Changed  
- **[DS-1771]** Update PHP requirement to v8.3 by @rollki in **#219**  
- **feat!:** min PHP 8.3 by @podarok in **#220**  
- **[DS-1545]** Add a profile name to `core.extension.module` list by @aleevas in **#221**  
- **Fixes for core 10.3** by @svicervlad in **#226**  
- **feat:** Drupal core 10.3 by @podarok in **#200**  
- **Drupal core 10.4** by @podarok in **#224**  

👉 **[Full Changelog (10.3.4...10.3.10)](yusaopeny/compare/10.3.4...10.3.10)**  
