---
title: "Digital Services Release 11.1.0.0-beta1"
description: Annotated release notes. Full changelog on [GitHub](https://github.com/YCloudYUSA/yusaopeny/releases/tag/11.1.0.0-beta1)
date: 2025-25-09
---
# Purpose of beta1 release for YMCA Website Services
The main goal of this beta release is to start field testing the upgrade to Drupal 11 and collect initial feedback from the community.  

This release marks a major architectural evolution of the YMCA Website Services platform, centered on the upgrade from Drupal 10.5 to Drupal 11.1.  
This foundational shift introduces:
- A modern, more efficient development paradigm  
- Enhanced site-building capabilities for non-technical users  
- Substantial improvements in performance and security  

---

## New Features

### Drupal 11 Upgrade
- Entire platform upgraded to **Drupal 11** for a modern, secure, performant experience.  
- PRs: #231, #256  
- Ensured compatibility with **Symfony 7** (required by Drupal 11).  
- Key updates:  
  - `drupal/core` → `~11.0.13`  
  - `drupal/ymca_sync` → `^10 || ^11`  
  - New modules: `ymcatwincities/media_entity_document`, `ycloudyusa/ws_outsiders`  
- Fixes and commits included staged changes, CI/CD results, and dependency alignment.  

### ws_outsiders Module
- Introduced `ws_outsiders`, built with standard coding styles and conventional commit messages. (#253)

### Enhanced Upgrade Path
- Dedicated upgrade path for smoother Drupal 11 transition. (#287)

### Future-Forward AI Integration
- Core AI module for automating titles, summaries, SEO tags.  

### Content Editor Improvements
- **Project Browser**: Intuitive admin interface for module discovery/installation.  
- **Workspaces**: Stable for staged content sets.  
- **Streamlined Administration**: Experimental, more intuitive admin navigation.  

---

## Technical Changes

- **jQuery 3.x Support**: Added `jquery-migrate` for legacy scripts. (#289)  
- **Improved Drupal 11 Compatibility**: Multiple PRs (#250, #273)  
- **Beta/RC for openy_carnation**: Theme now supports beta and release candidate versions. (#276)  
- **Media Library Fix**: CSS class issue resolved. (#288)  
- **Camp Menu/Quick Links Fix**: Blocks now created correctly. (#292)  
- **Upgrade Path Stability**: Fixed issues with uninstalling unsupported modules/themes. (#293)  
- **Dependency Handling**: Fixed `MissingDependencyException`. (#296)  
- **CKEditor 5 Font Plugin**: Removed for stability. (#272, #269)  
- **Migration Tools**: Patch applied. (#274)  
- **Module/Composer Updates**: Multiple fixes (#275)  
- **Composer Dependencies**: Updated for Drupal 11 compatibility, removed `symfony/dom-crawler`. (#267, #268, #275)  
- **openy_carnation Theme**: Min version set to `beta3`. (#290)  
- **Composer Scaffold**: Added `drupal/core-composer-scaffold`. (#270)  
- **Build Testing**: Completed for Drupal 11. (#271)  

---

## Development Experience Changes

- **Single Directory Components (SDC)**: UI component files colocated (Twig, CSS, JS, metadata).  
- **Object-Oriented Hooks**: Procedural → Object-oriented with PHP attributes, supporting DI.  
- **Symfony 7 + PHP 8.3+**: Performance and modern language features.  
- **New Icon Management API**  
- **Native WebP Image Support**  
- **Dependency-Based Asset Ordering**: Correct CSS/JS load order.  
- **Improved Cache Headers**  
- **Granular Access Control**: Conditional policies.  
- **Removed UI for Module/Theme Installation**: Composer-only workflow.  

---

## Removals

- **Deprecated Modules Removed** (via self-uninstall dummy modules):  
  - `ckeditor`, `ckeditor5_font`, `inline_entity_menu_form` (#9)  
  - Themes: `bartik`, `seven` + block configs  
  - `openy_txnm_color` (from `openy.info.yml`)  
  - `media_library_bulk_upload`, `color` (commented out in `openy.packages.yml`)  
- **Panelbutton for CKEditor Removed** (#10)  
- **End of Drupal 10 Support**: Platform now requires **Drupal 11**. (#8)  

---

Please review the full changelog here: 
[10.5.0.1 → 11.1.0.0-beta1](https://github.com/open-y-project/ymca/compare/10.5.0.1...11.1.0.0-beta1)
