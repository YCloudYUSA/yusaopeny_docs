# Features & Improvements Report

**Generated**: 2025-11-11 14:54:08

**Repository**: git@github.com:YCloudYUSA/yusaopeny.git
**Comparing**:
- 10.5.0.1 (Jul 14, 2025)- 11.1.0.0-beta3 (Nov 7, 2025)


---

## Summary

- **Total Changes**: 109
- **Added Packages**: 19
- **Updated Packages**: 81
- **Removed Packages**: 9
- **Unchanged Packages**: 0

### Changes by Category

**Drupal Core**:
- Added: 0
- Updated: 3
- Removed: 0

**Drupal Contributed Module**:
- Added: 2
- Updated: 25
- Removed: 9

**PHP Library**:
- Added: 17
- Updated: 53
- Removed: 0


---


---

## Changes by Persona

These changes are organized by the user personas most likely to care about them.

### ✏️ For Content Editors

*Creates and manages content, builds pages, and uses components on the YMCA website*

**drupal/core-composer-scaffold** (10.3.14 → 11.1.8)

- `79e3fcb1` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project
  - *Why relevant*: Adds recipe support in drupal/recommended-project and legacy-project, enabling content editors to create recipes, requiring site builders to configure the new module, developers added code for support, decision makers see expanded platform capabilities.

**drupal/admin_toolbar** (3.6.1 → 3.6.2)

- `0412425d` Issue #3527344 by justcaldwell, erutan, dydave: Fixed support for new keyboard shortcuts for MacOS.
  - *Why relevant*: Adds MacOS keyboard shortcuts for the admin toolbar, improving content editor usability; involves code changes.

**drupal/better_exposed_filters** (6.0.6 → 7.1.0-beta4)

- `dca6c148` [#3526885] feat: Accessibility: Orphaned form label
  - *Why relevant*: Improves form accessibility by properly labeling orphaned fields; content editors benefit from accessible forms and developers implement the change.
- `c9fd8966` [#3534975] feat: Move JS range slider out of the minimum field wrapper (noUISlider)
  - *Why relevant*: Moves JS range slider out of wrapper for better UI layout; content editors use sliders in forms, developers modify component structure.

**drupal/inline_entity_form** (2.0.0-rc10 → 3.0.0-rc21)

- `23cd78d5` Issue #3311501 by dcam, edmund.dunn, geek-merlin: Add label to weight select field for accessibility
  - *Why relevant*: Adds a label for accessibility on a form field used by content editors; involves code changes.
- `d8419f6d` Issue #3358281 by bkosborne, geek-merlin: Wrong bundle form is displayed if user has permissions to create only of the available bundles
  - *Why relevant*: Fixes incorrect bundle form display based on user permissions, affecting content editor UI and requires developer code fix.

**drupal/metatag** (2.1.1 → 2.2.0)

- `fa211c54` Issue #3458724 by damienmckenna, rachel_norfolk, pacproduct, petr illek: Add support for fediverse:creator.
  - *Why relevant*: Adds support for a new meta tag type (fediverse:creator), requiring code changes and enabling content editors to use it; also expands platform capabilities.
- `b6d61dea` Issue #3535155 by feyp, damienmckenna: Add SVG icon meta tag.
  - *Why relevant*: Introduces a new SVG icon meta tag, needing implementation and allowing content editors to set it; enhances feature set.

**drupal/openy_gtranslate** (1.0.8 → 2.0.0)

- `84deeef8` Fix Google Translate functionality on legacy Carnation theme
  - *Why relevant*: Fixes a bug in Google Translate for the legacy Carnation theme, impacting developers who work on code and content editors who rely on translation functionality.

**drupal/video_embed_field** (3.0.0-beta2 → 3.0.0-beta3)

- `9c292f30` Issue #3524143 by mably: Add custom icon to video_embed_field field type
  - *Why relevant*: Adds a custom icon to the video embed field type, improving UI for content editors and requiring code changes.
- `fb252c5d` Issue #3313587 by hitchshock, reszli, jorgik, mably: Missing Drupal Behaviors for added content by formatters.
  - *Why relevant*: Fixes missing Drupal behaviors for added content by formatters, affecting front‑end behavior seen by content editors and needing developer fixes.
- `b8fe8689` [#2879932] feat: Provide a URL field formatter
  - *Why relevant*: Introduces a URL field formatter, a new component for content editors and code implementation by developers.

**solarium/solarium** (6.3.7 → 6.4.1)

- `02a3b688` Vector filters (#1162)
  - *Why relevant*: Introduces vector filters for content filtering, useful for editors, developers, deployment, and strategic planning

**open-y-subprojects/openy_features** (4.1.2 → 4.1.4)

- `b6c5ce9e` feat: migrate from ckeditor5_font to ckeditor5_plugin_pack
  - *Why relevant*: Migrating CKEditor plugin affects editor code and UI features used by content editors.

**ycloudyusa/y_lb_demo_content** (4.0.0-beta1 → 4.0.0-beta3)

- `24071476` Add icons to the Media Library
  - *Why relevant*: The commit adds visual icons to the Media Library, improving the UI for content editors and requiring code changes that developers would handle.

**ycloudyusa/y_lb** (4.0.3 → 4.0.6-rc2)

- `6aed1a9a` feat: back lb_claro
  - *Why relevant*: Adds a new back feature for lb_claro component, useful for content editors and developers.
- `f01e6bdf` Add an option to control if the styles can be overriden on each node.
  - *Why relevant*: Introduces option to control style overrides per node, enabling content editors customization and developers code changes.


### 🔧 For Site Builders

*Installs, configures, and deploys YMCA Website Services platform*

**drupal/core-composer-scaffold** (10.3.14 → 11.1.8)

- `79e3fcb1` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project
  - *Why relevant*: Adds recipe support in drupal/recommended-project and legacy-project, enabling content editors to create recipes, requiring site builders to configure the new module, developers added code for support, decision makers see expanded platform capabilities.

**drupal/core-recommended** (10.5.1 → 9.3.22)

- `3c968908` Issue #3249233 by longwave: Update 9.3&#039;s Symfony 5 components to 5.4
  - *Why relevant*: Upgrades Symfony components; affects core framework and deployment.

**drupal/admin_toolbar** (3.6.1 → 3.6.2)

- `1e71df02` Issue #3532010 by phily, dydave, benjifisher: Dropped support for Core Update module routes &#039;update.module_update&#039; and &#039;update.theme_update&#039; for Core versions above 11.2.
  - *Why relevant*: Removes outdated Core Update module routes affecting update management; developers need to adjust code and site builders may rely on these routes for deployment updates.

**drupal/advanced_help_block** (1.0.7 → 1.0.8)

- `a9d90031` 3547063: Add missing dependency. Advanced Help Block requires Help module.
  - *Why relevant*: Adds a missing dependency for Advanced Help Block requiring the Help module; developers need to understand code changes and site builders must enable the dependency.

**drupal/media_library_form_element** (2.1.2 → 2.1.4)

- `98b4d01a` Issue #3469293: RenderElement is deprecated in drupal:10.3.0 and is removed from drupal:12.0.0
  - *Why relevant*: Removal of RenderElement deprecation in Drupal 10.3 and 12.0 impacts developers using this element; site builders need to know for compatibility.
- `68eb4ed9` Issue #3537789: Add support for integer and array default values
  - *Why relevant*: Adds support for integer and array default values, affecting API usage for developers and configuration for site builders.

**drupal/csv_serialization** (3.0.1 → 4.0.1)

- `5322d4f7` Issue #3389415 by ericgsmith: PHP 8.1 deprecated function warning
  - *Why relevant*: Addresses a PHP 8.1 deprecated function warning that could affect deployment compatibility.

**drupal/inline_entity_form** (2.0.0-rc10 → 3.0.0-rc21)

- `45bc6296` Issue #3511502 by jakegibs617: Implicitly marking parameter $entity as nullable is deprecated
  - *Why relevant*: Deprecates nullable parameter in API; impacts developers using the API and site builders who deploy or configure it.

**drupal/media_directories** (2.1.0-beta6 → 2.2.0-beta1)

- `7826237a` Issue #3504427: Removing support for libraries API
  - *Why relevant*: Removed libraries API support affects code architecture and deployment configuration.
- `aa851980` Issue #3467707 by ytsurk: Lifts compability to Dupal 11
  - *Why relevant*: Upgrade to Drupal 11 compatibility enables platform deployment on new version, impacting developers, site builders, and strategic planning.

**drupal/migrate_tools** (6.0.5 → 6.1.2)

- `13cae612` Issue #3452721 by codebymikey, divyansh.gupta, heddn: Provide the ability to use all available entity operations on the Migration list builder
  - *Why relevant*: Adds ability to use all entity operations on migration list builder; developers modify code; site builders configure migrations.
- `8c7029dd` Issue #3536657 by heddn, mrshowerman: New parameters introduced in MigrateExecutable class constructor
  - *Why relevant*: Introduces new parameters in MigrateExecutable constructor affecting API and configuration.

**drupal/openy_carnation** (3.2.1 → 4.0.0-beta4)

- `353e0d80` feat: add bootstrap jquery migrate tools
  - *Why relevant*: Introduces Bootstrap and jQuery migrate tools as new features, impacting developers, site builders for configuration/deployment, and decision makers for platform capabilities.

**drupal/scheduler** (2.2.1 → 2.2.2)

- `5e9592e4` Issue #3356800 by jonathan1055: Add rules to run jobs on commit and in MR, defaulting to manual
  - *Why relevant*: Adds automated job rules for commits and merge requests, affecting deployment configuration and platform behavior.

**psr/container** (2.0.2 → 1.1.2)

- `eae17cb7` Removing Throwable on ContainerExceptionInterface
  - *Why relevant*: The commit removes Throwable from ContainerExceptionInterface, an API change that developers must adapt to and site builders may need to update dependencies or configuration for compatibility.

**symfony/dependency-injection** (v6.4.23 → v7.4.0-BETA2)

- `942cea70` feature #61885 [DependencyInjection] Handle returning arrays and config-builders from config files (nicolas-grekas)
  - *Why relevant*: Feature updates the Dependency Injection component to handle arrays and config-builders from config files, affecting how configuration is parsed and used by developers and site builders.
- `d1f7528f` bug #61940 [DependencyInjection] Register a custom autoloader to generate `*Config` classes when they don&#039;t exist yet (alexandre-daubois)
  - *Why relevant*: Bug fix registers a custom autoloader to generate missing *Config classes, improving the Dependency Injection system for developers and site builders.

**symfony/filesystem** (v6.4.24 → v7.3.6)

- `900b2f14` Remove BC layers related to new methods and new parameters
  - *Why relevant*: Removing backward‑compatibility layers for new methods/parameters is an API change that developers need to adjust their code for, and site builders may need to update deployments if they rely on older APIs.

**doctrine/lexer** (2.1.1 → 3.0.1)

- `c4f371c0` Drop support for php &lt; 8.1
  - *Why relevant*: Dropping PHP &lt;8.1 support requires developers to update code, site builders to ensure deployment environments meet the new PHP requirement, and decision makers to evaluate platform compatibility.

**guzzlehttp/psr7** (2.7.1 → 2.8.0)

- `b0b99b85` [2.8] Add PHP 8.5 support (#628)
  - *Why relevant*: Adds PHP 8.5 support enabling platform deployment on newer PHP version; developers need to ensure code compatibility, site builders must update configuration, decision makers see a major upgrade.

**masterminds/html5** (2.9.0 → 2.10.0)

- `dc8be119` Add PHP 8.4 to CI config
  - *Why relevant*: Adds PHP 8.4 support to CI configuration, a deployment/system update relevant to site builders.

**pear/archive_tar** (1.5.0 → 1.6.0)

- `bb299860` add older PHP5&#039;s since pear/composer allow back to 5.4
  - *Why relevant*: Adds support for older PHP5 versions (back to 5.4), affecting platform compatibility and deployment requirements.
- `bc24cf89` remove old PHP 5 and add new PHP 8 versions
  - *Why relevant*: Removes old PHP5 support and adds new PHP8 support, impacting deployment settings and code compatibility.

**solarium/solarium** (6.3.7 → 6.4.1)

- `321a1ccf` Support for CBOR update queries (#1148)
  - *Why relevant*: Adds CBOR support for update queries, a backend API change that developers and site builders need to handle
- `02a3b688` Vector filters (#1162)
  - *Why relevant*: Introduces vector filters for content filtering, useful for editors, developers, deployment, and strategic planning

**open-y-subprojects/openy_features** (4.1.2 → 4.1.4)

- `4ac52fd5` feat: add drupal/ckeditor5_plugin_pack module in composer.json
  - *Why relevant*: Adding the module to composer.json updates dependencies, relevant for developers and site builders during deployment.
- `119a73c7` feat: extracted SCSS styles into a separate library for the module
  - *Why relevant*: Extracting SCSS into a separate library is a code architecture change that impacts developers and may affect site builder configuration.

**ycloudyusa/useless_machines** (1.2 → 2.0.3)

- `d703f518` feat: uninstall redundant drupal modules
  - *Why relevant*: Uninstalling redundant Drupal modules reduces configuration complexity and improves deployment stability, relevant to site builders and developers.
- `2472719c` feat: uninstall panelbutton for ckeditor
  - *Why relevant*: Removing panelbutton for CKEditor cleans up the editor configuration, affecting system setup and developer maintenance.
- `fe59e491` feat: uninstall unspoerted modules
  - *Why relevant*: Uninstalling unsupported modules removes obsolete dependencies, benefiting site deployment and code architecture.

**ycloudyusa/yusaopeny_activity_finder** (5.3.0 → 5.5.0)

- `e2ce493c` Replace deprecated package &#039;node-sass&#039; with &#039;sass&#039; package
  - *Why relevant*: Dependency update replacing deprecated node-sass with sass package improves build process and platform stability.


### 💻 For Developers

*Builds features, contributes code, and customizes YMCA Website Services*

**drupal/core-composer-scaffold** (10.3.14 → 11.1.8)

- `79e3fcb1` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project
  - *Why relevant*: Adds recipe support in drupal/recommended-project and legacy-project, enabling content editors to create recipes, requiring site builders to configure the new module, developers added code for support, decision makers see expanded platform capabilities.

**drupal/core-recommended** (10.5.1 → 9.3.22)

- `3c968908` Issue #3249233 by longwave: Update 9.3&#039;s Symfony 5 components to 5.4
  - *Why relevant*: Upgrades Symfony components; affects core framework and deployment.

**drupal/admin_toolbar** (3.6.1 → 3.6.2)

- `0412425d` Issue #3527344 by justcaldwell, erutan, dydave: Fixed support for new keyboard shortcuts for MacOS.
  - *Why relevant*: Adds MacOS keyboard shortcuts for the admin toolbar, improving content editor usability; involves code changes.
- `1e71df02` Issue #3532010 by phily, dydave, benjifisher: Dropped support for Core Update module routes &#039;update.module_update&#039; and &#039;update.theme_update&#039; for Core versions above 11.2.
  - *Why relevant*: Removes outdated Core Update module routes affecting update management; developers need to adjust code and site builders may rely on these routes for deployment updates.

**drupal/advanced_help_block** (1.0.7 → 1.0.8)

- `a9d90031` 3547063: Add missing dependency. Advanced Help Block requires Help module.
  - *Why relevant*: Adds a missing dependency for Advanced Help Block requiring the Help module; developers need to understand code changes and site builders must enable the dependency.

**drupal/libraries** (4.1.0 → 4.1.1)

- `19621134` [#3485329] fix: Libraries API fails when no install profile is installed. Add check that install_profile is not false before running getPath on it.
  - *Why relevant*: Bug fix in Libraries API to prevent failure when no install profile is installed; developers need to know this change.
- `e67c53a0` [#3533910] feat: PHP 8.4 - Implicitly nullable via default value null deprecation
  - *Why relevant*: Adds PHP 8.4 deprecation handling, indicating platform&#039;s support for the new PHP version and potential impact on future deployments; decision makers evaluate platform compatibility.

**drupal/better_exposed_filters** (6.0.6 → 7.1.0-beta4)

- `dca6c148` [#3526885] feat: Accessibility: Orphaned form label
  - *Why relevant*: Improves form accessibility by properly labeling orphaned fields; content editors benefit from accessible forms and developers implement the change.
- `c9fd8966` [#3534975] feat: Move JS range slider out of the minimum field wrapper (noUISlider)
  - *Why relevant*: Moves JS range slider out of wrapper for better UI layout; content editors use sliders in forms, developers modify component structure.

**drupal/blazy** (3.0.13 → 3.0.15)

- `62ec0b76` Added blazy bio.ajax library only if both core drupal.ajax and blazy exist.
  - *Why relevant*: Adds conditional loading for blazy bio.ajax library ensuring it only loads when core drupal.ajax and blazy are present; this affects code architecture.

**drupal/media_library_form_element** (2.1.2 → 2.1.4)

- `98b4d01a` Issue #3469293: RenderElement is deprecated in drupal:10.3.0 and is removed from drupal:12.0.0
  - *Why relevant*: Removal of RenderElement deprecation in Drupal 10.3 and 12.0 impacts developers using this element; site builders need to know for compatibility.
- `68eb4ed9` Issue #3537789: Add support for integer and array default values
  - *Why relevant*: Adds support for integer and array default values, affecting API usage for developers and configuration for site builders.

**drupal/captcha** (2.0.7 → 2.0.9)

- `f40e0f59` Issue #3536050 by grevil, anybody: Add data-nosnippet around captcha
  - *Why relevant*: Adds a data-nosnippet attribute around the captcha to prevent search engines from indexing it, which is a code change affecting the captcha module.

**drupal/csv_serialization** (3.0.1 → 4.0.1)

- `11f675ba` Issue #3402274: Call to deprecated method setNewline()
  - *Why relevant*: Fixes a deprecated method call in the CSV serialization code.
- `feed0f8b` Issue #3455761 by markdorison, david.muffley: Replace deprecated usage of League\Csv\ByteSequence::BOF_UTF8
  - *Why relevant*: Replaces deprecated usage of League\Csv\ByteSequence::BOF_UTF8 in the module.
- `5322d4f7` Issue #3389415 by ericgsmith: PHP 8.1 deprecated function warning
  - *Why relevant*: Addresses a PHP 8.1 deprecated function warning that could affect deployment compatibility.

**drupal/google_tag** (2.0.8 → 2.0.9)

- `c21f8494` Issue 3484190, 3328262: Add comment clarifying why the dev id exists.
  - *Why relevant*: Adds a comment clarifying the purpose of the dev ID, which helps developers understand code changes.

**drupal/inline_entity_form** (2.0.0-rc10 → 3.0.0-rc21)

- `23cd78d5` Issue #3311501 by dcam, edmund.dunn, geek-merlin: Add label to weight select field for accessibility
  - *Why relevant*: Adds a label for accessibility on a form field used by content editors; involves code changes.
- `d8419f6d` Issue #3358281 by bkosborne, geek-merlin: Wrong bundle form is displayed if user has permissions to create only of the available bundles
  - *Why relevant*: Fixes incorrect bundle form display based on user permissions, affecting content editor UI and requires developer code fix.
- `45bc6296` Issue #3511502 by jakegibs617: Implicitly marking parameter $entity as nullable is deprecated
  - *Why relevant*: Deprecates nullable parameter in API; impacts developers using the API and site builders who deploy or configure it.

**drupal/media_directories** (2.1.0-beta6 → 2.2.0-beta1)

- `7826237a` Issue #3504427: Removing support for libraries API
  - *Why relevant*: Removed libraries API support affects code architecture and deployment configuration.
- `aa851980` Issue #3467707 by ytsurk: Lifts compability to Dupal 11
  - *Why relevant*: Upgrade to Drupal 11 compatibility enables platform deployment on new version, impacting developers, site builders, and strategic planning.

**drupal/metatag** (2.1.1 → 2.2.0)

- `fa211c54` Issue #3458724 by damienmckenna, rachel_norfolk, pacproduct, petr illek: Add support for fediverse:creator.
  - *Why relevant*: Adds support for a new meta tag type (fediverse:creator), requiring code changes and enabling content editors to use it; also expands platform capabilities.
- `b6d61dea` Issue #3535155 by feyp, damienmckenna: Add SVG icon meta tag.
  - *Why relevant*: Introduces a new SVG icon meta tag, needing implementation and allowing content editors to set it; enhances feature set.
- `aa44d4ba` Issue #3272202 by anybody, damienmckenna, grevil: Add &lt;none&gt; placeholder to clear / unset inherited value.
  - *Why relevant*: Adds a placeholder for clearing inherited values, a backend improvement without UI impact.
- `85dfe411` Issue #3545780 by damienmckenna: Optionally add suffix after meta tags are trimmed.
  - *Why relevant*: Allows optional suffix after trimming meta tags; purely technical change.

**drupal/migrate_tools** (6.0.5 → 6.1.2)

- `13cae612` Issue #3452721 by codebymikey, divyansh.gupta, heddn: Provide the ability to use all available entity operations on the Migration list builder
  - *Why relevant*: Adds ability to use all entity operations on migration list builder; developers modify code; site builders configure migrations.
- `8c7029dd` Issue #3536657 by heddn, mrshowerman: New parameters introduced in MigrateExecutable class constructor
  - *Why relevant*: Introduces new parameters in MigrateExecutable constructor affecting API and configuration.

**drupal/openy_carnation** (3.2.1 → 4.0.0-beta4)

- `a37f190c` [Drupal 11] fix: add jquery_legacy library
  - *Why relevant*: Adds a legacy jQuery library, a technical fix affecting code and platform compatibility.
- `353e0d80` feat: add bootstrap jquery migrate tools
  - *Why relevant*: Introduces Bootstrap and jQuery migrate tools as new features, impacting developers, site builders for configuration/deployment, and decision makers for platform capabilities.

**drupal/openy_gtranslate** (1.0.8 → 2.0.0)

- `84deeef8` Fix Google Translate functionality on legacy Carnation theme
  - *Why relevant*: Fixes a bug in Google Translate for the legacy Carnation theme, impacting developers who work on code and content editors who rely on translation functionality.

**drupal/scheduler** (2.2.1 → 2.2.2)

- `5e9592e4` Issue #3356800 by jonathan1055: Add rules to run jobs on commit and in MR, defaulting to manual
  - *Why relevant*: Adds automated job rules for commits and merge requests, affecting deployment configuration and platform behavior.
- `89456f77` Issue #3533739 by jsacksick: Implement static caching around SchedulerManager::getPlugins()
  - *Why relevant*: Implements static caching for plugin retrieval, improving performance of the Scheduler API.
- `d8aa902f` [#3514380] fix: Autoloading hooks in the file scheduler.tokens.inc is deprecated D11.2
  - *Why relevant*: Fixes deprecated autoloading hooks in scheduler.tokens.inc, maintaining code quality.
- `58172b63` [#3545432] feat: Improve caching around SchedulerManager::getPlugins() and SchedulerManager::getEntityFormIds()
  - *Why relevant*: Enhances caching for plugin and entity form ID retrieval, boosting platform efficiency.
- `c4f9af05` #3553242 Ignore deprecated getSystemData()
  - *Why relevant*: Ignores deprecated getSystemData() to avoid deprecation warnings.

**drupal/video_embed_field** (3.0.0-beta2 → 3.0.0-beta3)

- `9c292f30` Issue #3524143 by mably: Add custom icon to video_embed_field field type
  - *Why relevant*: Adds a custom icon to the video embed field type, improving UI for content editors and requiring code changes.
- `fb252c5d` Issue #3313587 by hitchshock, reszli, jorgik, mably: Missing Drupal Behaviors for added content by formatters.
  - *Why relevant*: Fixes missing Drupal behaviors for added content by formatters, affecting front‑end behavior seen by content editors and needing developer fixes.
- `d00f2605` Issue #3550450 by prudloff, mably: Add referrerpolicy attribute
  - *Why relevant*: Adds a referrerpolicy attribute, a small technical enhancement relevant mainly to developers.
- `b8fe8689` [#2879932] feat: Provide a URL field formatter
  - *Why relevant*: Introduces a URL field formatter, a new component for content editors and code implementation by developers.

**psr/container** (2.0.2 → 1.1.2)

- `eae17cb7` Removing Throwable on ContainerExceptionInterface
  - *Why relevant*: The commit removes Throwable from ContainerExceptionInterface, an API change that developers must adapt to and site builders may need to update dependencies or configuration for compatibility.

**symfony/dependency-injection** (v6.4.23 → v7.4.0-BETA2)

- `942cea70` feature #61885 [DependencyInjection] Handle returning arrays and config-builders from config files (nicolas-grekas)
  - *Why relevant*: Feature updates the Dependency Injection component to handle arrays and config-builders from config files, affecting how configuration is parsed and used by developers and site builders.
- `d1f7528f` bug #61940 [DependencyInjection] Register a custom autoloader to generate `*Config` classes when they don&#039;t exist yet (alexandre-daubois)
  - *Why relevant*: Bug fix registers a custom autoloader to generate missing *Config classes, improving the Dependency Injection system for developers and site builders.

**symfony/var-exporter** (v6.4.24 → v8.0.0-BETA1)

- `ba8bedec` Add types to public and protected properties
  - *Why relevant*: Adds type annotations to public/protected properties in the var-exporter library, a code quality improvement relevant only to developers.
- `a546e8d1` [VarExporter] Drop support for partially initialized lazy object
  - *Why relevant*: Drops support for partially initialized lazy objects; an internal change affecting only developers.
- `ea260e7b` [VarExporter] Allow reinitializing lazy objects with a new initializer
  - *Why relevant*: Allows reinitializing lazy objects with a new initializer, a feature modification relevant to developers.
- `4cc55530` Remove deprecated calls to deprecated methods of SplObjectStorage
  - *Why relevant*: Removes deprecated calls to deprecated methods of SplObjectStorage; internal refactoring for developers.
- `374e1b00` [VarExporter] Add support for exporting named closures
  - *Why relevant*: Adds support for exporting named closures, a technical enhancement relevant only to developers.

**symfony/event-dispatcher** (v6.4.24 → v7.4.0-BETA2)

- `c459b40f` Add types to public and protected properties
  - *Why relevant*: Adds type hints to public/protected properties, improving code quality and maintainability for developers.
- `b0cf3162` Remove deprecated calls to deprecated methods of SplObjectStorage
  - *Why relevant*: Removes deprecated calls to SplObjectStorage methods, a code cleanup relevant for developers.
- `899a660f` Add support for union types on AsEventListener
  - *Why relevant*: Adds support for union types on AsEventListener, enhancing API functionality for developers.

**symfony/filesystem** (v6.4.24 → v7.3.6)

- `900b2f14` Remove BC layers related to new methods and new parameters
  - *Why relevant*: Removing backward‑compatibility layers for new methods/parameters is an API change that developers need to adjust their code for, and site builders may need to update deployments if they rely on older APIs.
- `40f7a3ad` [Filesystem] Add the readFile() method
  - *Why relevant*: Adding a readFile() method extends the Filesystem API; developers will use this new functionality.
- `c46c178f` stop using uniqid() to create temporary files
  - *Why relevant*: Replacing uniqid() for temporary file creation is an internal code change affecting how developers interact with the filesystem, but not a public feature.

**symfony/finder** (v6.4.17 → v7.4.0-BETA1)

- `fa965929` Add types to public and protected properties
  - *Why relevant*: Adds explicit types to public and protected properties, a developer-level refactoring improving type safety.
- `c1a41e8e` chore(finder): add better type information using phpdoc
  - *Why relevant*: Adds better phpdoc type information for the finder package, a technical improvement for developers.

**symfony/var-dumper** (v6.4.23 → v7.4.0-BETA2)

- `c6cd9248` Remove deprecated calls to deprecated methods of SplObjectStorage
  - *Why relevant*: Removal of deprecated calls to SplObjectStorage methods improves code quality and reduces potential runtime errors.

**doctrine/lexer** (2.1.1 → 3.0.1)

- `c4f371c0` Drop support for php &lt; 8.1
  - *Why relevant*: Dropping PHP &lt;8.1 support requires developers to update code, site builders to ensure deployment environments meet the new PHP requirement, and decision makers to evaluate platform compatibility.

**guzzlehttp/psr7** (2.7.1 → 2.8.0)

- `b0b99b85` [2.8] Add PHP 8.5 support (#628)
  - *Why relevant*: Adds PHP 8.5 support enabling platform deployment on newer PHP version; developers need to ensure code compatibility, site builders must update configuration, decision makers see a major upgrade.

**masterminds/html5** (2.9.0 → 2.10.0)

- `9e650079` Address php-cs-fixer remarks
  - *Why relevant*: Fixes code style issues reported by php-cs-fixer, a developer-level bug fix.

**pear/archive_tar** (1.5.0 → 1.6.0)

- `bb299860` add older PHP5&#039;s since pear/composer allow back to 5.4
  - *Why relevant*: Adds support for older PHP5 versions (back to 5.4), affecting platform compatibility and deployment requirements.
- `bc24cf89` remove old PHP 5 and add new PHP 8 versions
  - *Why relevant*: Removes old PHP5 support and adds new PHP8 support, impacting deployment settings and code compatibility.

**league/csv** (9.24.1 → 9.27.1)

- `be8fcb02` Assure DOMDocument::createTextNode() receives a string (#567)
  - *Why relevant*: Bug fix ensuring DOMDocument::createTextNode receives a string
- `1afbb9a9` Adding ndjson support in the JsonConverter
  - *Why relevant*: Adds ndjson support in JsonConverter, expanding platform capabilities
- `45932246` Adding support for TabularDataProvider and TabularData on Converters
  - *Why relevant*: Adds TabularDataProvider and TabularData support on Converters, new feature
- `db834f07` Adding support for TabularDataProvider and TabularData on Writer
  - *Why relevant*: Adds TabularDataProvider and TabularData support on Writer, new feature
- `128e5419` Improve AbstractCsv::download implementation #569
  - *Why relevant*: Improves AbstractCsv::download implementation, technical improvement

**consolidation/annotated-command** (4.10.1 → 4.10.2)

- `0cf112da` Fix #315: default value for the escape parameter for fputcsv() is now deprecated (#316)
  - *Why relevant*: Fixes a bug related to the fputcsv API, impacting developers.

**solarium/solarium** (6.3.7 → 6.4.1)

- `321a1ccf` Support for CBOR update queries (#1148)
  - *Why relevant*: Adds CBOR support for update queries, a backend API change that developers and site builders need to handle
- `02a3b688` Vector filters (#1162)
  - *Why relevant*: Introduces vector filters for content filtering, useful for editors, developers, deployment, and strategic planning

**setasign/fpdi** (v2.6.3 → v2.6.4)

- `555d0952` Added check for false of readBytes() to avoid PHP warning
  - *Why relevant*: Bug fix that adds a check for false of readBytes() to prevent PHP warnings, affecting the codebase.

**open-y-subprojects/openy_custom** (2.7.2 → 3.0.4)

- `489ca1b8` fix: update deprecated code by rector
  - *Why relevant*: Fixes deprecated code via Rector, a developer-level bug fix.

**open-y-subprojects/openy_features** (4.1.2 → 4.1.4)

- `b6c5ce9e` feat: migrate from ckeditor5_font to ckeditor5_plugin_pack
  - *Why relevant*: Migrating CKEditor plugin affects editor code and UI features used by content editors.
- `4ac52fd5` feat: add drupal/ckeditor5_plugin_pack module in composer.json
  - *Why relevant*: Adding the module to composer.json updates dependencies, relevant for developers and site builders during deployment.
- `119a73c7` feat: extracted SCSS styles into a separate library for the module
  - *Why relevant*: Extracting SCSS into a separate library is a code architecture change that impacts developers and may affect site builder configuration.

**open-y-subprojects/openy_map** (5.2.5 → 6.0.0-beta4)

- `136aed0a` feat: alow open-y-subprojects/openy_custom 3 version
  - *Why relevant*: Adds support for version 3 of the open-y_subprojects/openy_custom subproject, a technical feature change.

**ycloudyusa/useless_machines** (1.2 → 2.0.3)

- `d703f518` feat: uninstall redundant drupal modules
  - *Why relevant*: Uninstalling redundant Drupal modules reduces configuration complexity and improves deployment stability, relevant to site builders and developers.
- `2472719c` feat: uninstall panelbutton for ckeditor
  - *Why relevant*: Removing panelbutton for CKEditor cleans up the editor configuration, affecting system setup and developer maintenance.
- `fe59e491` feat: uninstall unspoerted modules
  - *Why relevant*: Uninstalling unsupported modules removes obsolete dependencies, benefiting site deployment and code architecture.

**ycloudyusa/y_lb_demo_content** (4.0.0-beta1 → 4.0.0-beta3)

- `24071476` Add icons to the Media Library
  - *Why relevant*: The commit adds visual icons to the Media Library, improving the UI for content editors and requiring code changes that developers would handle.

**ycloudyusa/y_lb** (4.0.3 → 4.0.6-rc2)

- `6aed1a9a` feat: back lb_claro
  - *Why relevant*: Adds a new back feature for lb_claro component, useful for content editors and developers.
- `f01e6bdf` Add an option to control if the styles can be overriden on each node.
  - *Why relevant*: Introduces option to control style overrides per node, enabling content editors customization and developers code changes.
- `9791b7de` Added entity_builders on form build to call method that saves new info.
  - *Why relevant*: Adds entity builders on form build to save new info, a backend implementation relevant to developers.

**ycloudyusa/yusaopeny_activity_finder** (5.3.0 → 5.5.0)

- `e2ce493c` Replace deprecated package &#039;node-sass&#039; with &#039;sass&#039; package
  - *Why relevant*: Dependency update replacing deprecated node-sass with sass package improves build process and platform stability.


### 📊 For Decision Makers

*Understands the platform, explores features, and evaluates value for strategic planning*

**drupal/core-composer-scaffold** (10.3.14 → 11.1.8)

- `79e3fcb1` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project
  - *Why relevant*: Adds recipe support in drupal/recommended-project and legacy-project, enabling content editors to create recipes, requiring site builders to configure the new module, developers added code for support, decision makers see expanded platform capabilities.

**drupal/core-recommended** (10.5.1 → 9.3.22)

- `3c968908` Issue #3249233 by longwave: Update 9.3&#039;s Symfony 5 components to 5.4
  - *Why relevant*: Upgrades Symfony components; affects core framework and deployment.

**drupal/libraries** (4.1.0 → 4.1.1)

- `e67c53a0` [#3533910] feat: PHP 8.4 - Implicitly nullable via default value null deprecation
  - *Why relevant*: Adds PHP 8.4 deprecation handling, indicating platform&#039;s support for the new PHP version and potential impact on future deployments; decision makers evaluate platform compatibility.

**drupal/media_directories** (2.1.0-beta6 → 2.2.0-beta1)

- `aa851980` Issue #3467707 by ytsurk: Lifts compability to Dupal 11
  - *Why relevant*: Upgrade to Drupal 11 compatibility enables platform deployment on new version, impacting developers, site builders, and strategic planning.

**drupal/metatag** (2.1.1 → 2.2.0)

- `fa211c54` Issue #3458724 by damienmckenna, rachel_norfolk, pacproduct, petr illek: Add support for fediverse:creator.
  - *Why relevant*: Adds support for a new meta tag type (fediverse:creator), requiring code changes and enabling content editors to use it; also expands platform capabilities.
- `b6d61dea` Issue #3535155 by feyp, damienmckenna: Add SVG icon meta tag.
  - *Why relevant*: Introduces a new SVG icon meta tag, needing implementation and allowing content editors to set it; enhances feature set.

**drupal/openy_carnation** (3.2.1 → 4.0.0-beta4)

- `353e0d80` feat: add bootstrap jquery migrate tools
  - *Why relevant*: Introduces Bootstrap and jQuery migrate tools as new features, impacting developers, site builders for configuration/deployment, and decision makers for platform capabilities.

**drupal/scheduler** (2.2.1 → 2.2.2)

- `5e9592e4` Issue #3356800 by jonathan1055: Add rules to run jobs on commit and in MR, defaulting to manual
  - *Why relevant*: Adds automated job rules for commits and merge requests, affecting deployment configuration and platform behavior.
- `89456f77` Issue #3533739 by jsacksick: Implement static caching around SchedulerManager::getPlugins()
  - *Why relevant*: Implements static caching for plugin retrieval, improving performance of the Scheduler API.
- `58172b63` [#3545432] feat: Improve caching around SchedulerManager::getPlugins() and SchedulerManager::getEntityFormIds()
  - *Why relevant*: Enhances caching for plugin and entity form ID retrieval, boosting platform efficiency.

**doctrine/lexer** (2.1.1 → 3.0.1)

- `c4f371c0` Drop support for php &lt; 8.1
  - *Why relevant*: Dropping PHP &lt;8.1 support requires developers to update code, site builders to ensure deployment environments meet the new PHP requirement, and decision makers to evaluate platform compatibility.

**guzzlehttp/psr7** (2.7.1 → 2.8.0)

- `b0b99b85` [2.8] Add PHP 8.5 support (#628)
  - *Why relevant*: Adds PHP 8.5 support enabling platform deployment on newer PHP version; developers need to ensure code compatibility, site builders must update configuration, decision makers see a major upgrade.

**pear/archive_tar** (1.5.0 → 1.6.0)

- `bb299860` add older PHP5&#039;s since pear/composer allow back to 5.4
  - *Why relevant*: Adds support for older PHP5 versions (back to 5.4), affecting platform compatibility and deployment requirements.
- `bc24cf89` remove old PHP 5 and add new PHP 8 versions
  - *Why relevant*: Removes old PHP5 support and adds new PHP8 support, impacting deployment settings and code compatibility.

**league/csv** (9.24.1 → 9.27.1)

- `1afbb9a9` Adding ndjson support in the JsonConverter
  - *Why relevant*: Adds ndjson support in JsonConverter, expanding platform capabilities
- `45932246` Adding support for TabularDataProvider and TabularData on Converters
  - *Why relevant*: Adds TabularDataProvider and TabularData support on Converters, new feature
- `db834f07` Adding support for TabularDataProvider and TabularData on Writer
  - *Why relevant*: Adds TabularDataProvider and TabularData support on Writer, new feature

**solarium/solarium** (6.3.7 → 6.4.1)

- `02a3b688` Vector filters (#1162)
  - *Why relevant*: Introduces vector filters for content filtering, useful for editors, developers, deployment, and strategic planning


---

## Significant Package Changes

The following packages had notable changes requiring attention:

### drupal/core

- **Change Type**: Updated
- **Reason**: Drupal core update
- **Version**: 10.5.1 → 11.2.7
- **Priority**: 100
- **Project Page**: https://www.drupal.org/project/core
- **Repository**: https://git.drupalcode.org/project/core

### drupal/core-composer-scaffold

- **Change Type**: Updated
- **Reason**: Drupal core update
- **Version**: 10.3.14 → 11.1.8
- **Priority**: 100
- **Project Page**: https://www.drupal.org/project/core-composer-scaffold
- **Repository**: https://git.drupalcode.org/project/core-composer-scaffold

### drupal/core-recommended

- **Change Type**: Updated
- **Reason**: Drupal core update
- **Version**: 10.5.1 → 9.3.22
- **Priority**: 100
- **Project Page**: https://www.drupal.org/project/core-recommended
- **Repository**: https://git.drupalcode.org/project/core-recommended

### drupal/better_exposed_filters

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 6.0.6 → 7.1.0-beta4
- **Priority**: 90
- **Project Page**: https://www.drupal.org/project/better_exposed_filters
- **Repository**: https://git.drupalcode.org/project/better_exposed_filters

### drupal/confi

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 3.2.3 → 4.0.1
- **Priority**: 90
- **Project Page**: https://www.drupal.org/project/confi
- **Repository**: https://git.drupalcode.org/project/confi

### drupal/csv_serialization

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 3.0.1 → 4.0.1
- **Priority**: 90
- **Project Page**: https://www.drupal.org/project/csv_serialization
- **Repository**: https://git.drupalcode.org/project/csv_serialization

### drupal/inline_entity_form

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 2.0.0-rc10 → 3.0.0-rc21
- **Priority**: 90
- **Project Page**: https://www.drupal.org/project/inline_entity_form
- **Repository**: https://git.drupalcode.org/project/inline_entity_form

### drupal/openy_carnation

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 3.2.1 → 4.0.0-beta4
- **Priority**: 90
- **Project Page**: https://www.drupal.org/project/openy_carnation
- **Repository**: https://git.drupalcode.org/project/openy_carnation

### drupal/openy_gtranslate

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 1.0.8 → 2.0.0
- **Priority**: 90
- **Project Page**: https://www.drupal.org/project/openy_gtranslate
- **Repository**: https://git.drupalcode.org/project/openy_gtranslate

### drupal/openy_repeat

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 2.8.2 → 3.1.0
- **Priority**: 90
- **Project Page**: https://www.drupal.org/project/openy_repeat
- **Repository**: https://git.drupalcode.org/project/openy_repeat

### drupal/nouislider_js

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 15.8.1
- **Priority**: 80
- **Project Page**: https://www.drupal.org/project/nouislider_js
- **Repository**: https://git.drupalcode.org/project/nouislider_js

### drupal/exif_orientation

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.5.0
- **Priority**: 80
- **Project Page**: https://www.drupal.org/project/exif_orientation
- **Repository**: https://git.drupalcode.org/project/exif_orientation

### drupal/bartik

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.2
- **Priority**: 70
- **Project Page**: https://www.drupal.org/project/bartik
- **Repository**: https://git.drupalcode.org/project/bartik

### drupal/jquery_ui_slider

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 2.1.0
- **Priority**: 70
- **Project Page**: https://www.drupal.org/project/jquery_ui_slider
- **Repository**: https://git.drupalcode.org/project/jquery_ui_slider

### drupal/jquery_ui_datepicker

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 2.1.1
- **Priority**: 70
- **Project Page**: https://www.drupal.org/project/jquery_ui_datepicker
- **Repository**: https://git.drupalcode.org/project/jquery_ui_datepicker

### drupal/ckeditor5_font

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.1.2-beta1
- **Priority**: 70
- **Project Page**: https://www.drupal.org/project/ckeditor5_font
- **Repository**: https://git.drupalcode.org/project/ckeditor5_font

### drupal/color

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.3
- **Priority**: 70
- **Project Page**: https://www.drupal.org/project/color
- **Repository**: https://git.drupalcode.org/project/color

### drupal/features

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 5.0.0-alpha1
- **Priority**: 70
- **Project Page**: https://www.drupal.org/project/features
- **Repository**: https://git.drupalcode.org/project/features

### drupal/media_library_bulk_upload

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.2
- **Priority**: 70
- **Project Page**: https://www.drupal.org/project/media_library_bulk_upload
- **Repository**: https://git.drupalcode.org/project/media_library_bulk_upload

### drupal/seven

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.0
- **Priority**: 70
- **Project Page**: https://www.drupal.org/project/seven
- **Repository**: https://git.drupalcode.org/project/seven

### drupal/yusaopeny_ymca360

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.0-rc4
- **Priority**: 70
- **Project Page**: https://www.drupal.org/project/yusaopeny_ymca360
- **Repository**: https://git.drupalcode.org/project/yusaopeny_ymca360


---


## Detailed Package Changes

### ➕ Added Drupal Modules

- **drupal/nouislider_js** (15.8.1)
- **drupal/exif_orientation** (1.5.0)


### 🔄 Updated Drupal Modules

- **drupal/admin_toolbar**: 3.6.1 → 3.6.2
    <details>
  <summary>📋 Show 4 commits</summary>

    - `fix` Issue #3527344 by justcaldwell, erutan, dydave: Fixed support for new keyboard shortcuts for MacOS.
    - `fix` Issue #3532249 by anybody, dydave: Fixed JS error &#039;Uncaught TypeError: toolbarElement.querySelector(...) is null&#039; when selected HTML IDs are not found in the page.
    - `fix` Issue #3532010 by phily, dydave, benjifisher: Dropped support for Core Update module routes &#039;update.module_update&#039; and &#039;update.theme_update&#039; for Core versions above 11.2.
    - `chore` Issue #3537721 by dydave: Admin Toolbar Search: Removed dependency on Admin Toolbar Tools.
  
  </details>
  
- **drupal/advanced_help_block**: 1.0.7 → 1.0.8
    <details>
  <summary>📋 Show 1 commits</summary>

    - `feat` 3547063: Add missing dependency. Advanced Help Block requires Help module.
  
  </details>
  
- **drupal/libraries**: 4.1.0 → 4.1.1
    <details>
  <summary>📋 Show 4 commits</summary>

    - `fix` [#3367706] fix: Drupal\Component\DependencyInjection\ReverseContainer::generateServiceIdHash(): after installing libraries module
    - `feat` Revert &quot;[#3367706] fix: Drupal\Component\DependencyInjection\ReverseContainer::generateServiceIdHash(): after installing libraries module&quot;
    - `fix` [#3485329] fix: Libraries API fails when no install profile is installed. Add check that install_profile is not false before running getPath on it.
    - `feat` [#3533910] feat: PHP 8.4 - Implicitly nullable via default value null deprecation
  
  </details>
  
- **drupal/better_exposed_filters**: 6.0.6 → 7.1.0-beta4
    <details>
  <summary>📋 Show 120 commits</summary>

    - `chore` Issue #3210946 by eojthebrave, dxvargas, metallized, joegraduate, heddn, trackleft2, naveenvalecha, mstrelan, Berdir: Remove dependency on jquery_ui_touch_punch
    - `chore` Merge branch &#039;6.0.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.0.x
    - `chore` Merge branch &#039;6.0.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.0.x
    - `chore` Merge branch &#039;6.0.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.0.x
    - `chore` Merge branch &#039;6.0.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.0.x
    - `chore` Merge branch &#039;6.0.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.0.x
    - `chore` Merge branch &#039;6.0.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.0.x
    - `feat` D11 + typehints
    - `test` Test something
    - `chore` Remove const parameters
    - `chore` revert
    - `feat` Issue #3243081 by Graber, smustgrave: Date offsets displayed with date picker
    - `chore` Issue #3168035 by damondt, Etroid: hook_better_exposed_filters_filter_widgets_alter not invoked
    - `chore` exclude select2 autocomplete fields
    - `chore` Issue #3456465 by FeyP: Use correct library directory name for local nouislider library in README
    - `chore` Issue #3452764 by smustgrave, Lucky723: Reset button deactivated but still there
    - `chore` Cspell + PHCPS
    - `feat` Issue #3462298: Improve theme suggestions to allow finer overrides
    - `chore` Issue #3440172 by rodrigoaguilera: Placeholder text not translatable using configuration translation
    - `fix` Cspell fix
    - `feat` Issue #3282228 by FeyP, DamienMcKenna, smustgrave, neclimdul, matthewmessmer: Add option to hide exposed field labels
    - `feat` Issue #3466314 by jpieper, larowlan, rlhawk, poker10, greggles, xjm: Inclusion...
    - `chore` Issue #3024267 by jrochate, gfed: Do not autosubmit view if using a chosen.js search widget
    - `chore` New attempt
    - `chore` update
    - `other` Expand coverage
    - `chore` PHPSTAN ESTLINT
    - `feat` PHPSTAN Next major
    - `feat` Issue #3468358 by andre.bonon: Text fields are auto-submitted twice when...
    - `refactor` Resolve #3427438 &quot;Refactor&quot;
    - `style` Issue #3469224: Nondescript error when trying to edit Exposed Form Style settings in view
    - `chore` Issue #2756233 by gstivanin, JaceRider, jakub_89: Nested all/none selection weird behavior
    - `chore` Unused files
    - `chore` Issue #3469712 by sander wemagine: Remembered filters don&#039;t reset with BEF
    - `feat` Issue #3468358: UPDATE 1 - Text fields are auto-submitted twice when filters are exposed as block
    - `chore` Resolve #3365381 &quot;Auto submit fires&quot;
    - `feat` Resolve #3472881 &quot;Local lobraries not&quot;
    - `chore` Typo
    - `feat` ANother missed
    - `feat` Updated bef_test view to illustrate how secondary options are displaying...
    - `chore` on blur of the max input. pass the index of 1.
    - `chore` Resolve #3299687 &quot;Date input triggers&quot;
    - `chore` Revert &quot;on blur of the max input. pass the index of 1.&quot;
    - `feat` #3477417: Add warning to status page if external library nouislider does not exist.
    - `chore` Resolve #3477440 &quot;7.x add composer.libraries.json&quot;
    - `feat` Resolve #3262456 &quot;Add minimum length&quot;
    - `chore` Issue #3478411: Altering the BEF options propagate properly.
    - `docs` Issue #3480552 by gaurav gupta: Twig Filter &quot;spaceless&quot; is deprecated warning in upgrade status
    - `feat` Add support for RTL in slider filters
    - `feat` Issue #3485649 by dropa: Autosubmit focuses fields it shouldn&#039;t
    - `feat` 3487805 Ensure title info is only added if form element is not empty
    - `chore` Use JS for textfield autosubmit exclusion
    - `chore` Remove VERSION from libraries.yml
    - `chore` Issue #3484533 by phjou: Reset button not working with Sort, Combine and AJAX
    - `feat` Issue #3494833 by liam morland: The README contains invalid links
    - `feat` Issue #3462685 by dieterholvoet, dejan0, smustgrave, Debra, karamveersingh, mike-kelly: The sliders range widget formats values with decimals
    - `chore` Issue #3494220 by jurgenhaas: Create a mirror for external library dependency for composer support
    - `chore` Issue #3494220 by jurgenhaas: Create a mirror for external library dependency for composer support
    - `feat` Issue #3498286: Slider behavior reversed?
    - `chore` Issue #3379736 by smustgrave, erichhaemmerle, mlncn, sarsion, laborouge: Collapsible details element not hidden if &quot;Hide filter, if no options&quot; is selected
    - `chore` restore update function
    - `chore` Issue #3501692 by marios anagnostopoulos: Inconsistent behavior when changing slider values from the textarea inputs
    - `chore` Merge branch &#039;7.0.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.0.x
    - `chore` Issue #3493882 by thoogend: Filter rewrite never gets applied to values like 0 considered empty by PHP
    - `feat` Revert &quot;Issue #3493882 by thoogend: Filter rewrite never gets applied to values like 0...&quot;
    - `test` Issue #3501764: Add basic test coverage for Slider
    - `chore` Issue #3493882 by smustgrave, thoogend: Filter rewrite never gets applied to values like 0 considered empty by PHP
    - `feat` Issue #3503630: Create attribute
    - `chore` Issue #3503638: 7.1.x restrict to 10.3 and use attributes
    - `feat` Issue #3501676 by marios anagnostopoulos: Allow themes to alter bef slider options
    - `fix` Issue #3470965 by escuriola, ebremner: Warning: Undefined array key &quot;#type&quot; in Drupal\\better_exposed_filters\\Plugin\\better_exposed_filters\\filterDatePickers-&gt;exposedFormAlter() (line 65 of /var/www/html/web/modules/contrib/better_exposed_filters/src/Plugin/better_exposed_filters/filter/Dat
    - `chore` Issue #3475063 by fskreuz, smustgrave: Hide labels for wrapped filters
    - `chore` Issue #3500630 provide a better way of including the nouislider library.
    - `feat` Places slider between min/max inputs (3214300).
    - `chore` Issue #3359254 by mdranove, joshf, smustgrave, muriqui, vensires: Enable changing sort_bef_combine parameter key
    - `fix` Fix
    - `feat` Attribute update
    - `chore` Issue #3507542 by gsquirrel: Collapsible details element no longer working for...
    - `test` Auto submit test coverage
    - `chore` Issue #3470965: Warning: Undefined array key &quot;#type&quot; in...
    - `chore` Merge branch &#039;7.1.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.1.x
    - `chore` Issue #3512039 by tbcs: better_exposed_filters/general library depends on, but does not require, core/once
    - `feat` Add form-item class to sort details/summary element
    - `chore` Minor phpcs
    - `chore` Issue #3512871 by mxr576, chrisolof: Automatic opening of collapsed filters with selections not working for single checkbox selection
    - `chore` Issue #3516547 by dcine: Views exposed filters adds a random suffix with letters and numbers
    - `chore` Issue #3265275 by casey: Allow to auto submit elements that have a form attribute and are rendered outside their &lt;form&gt;
    - `fix` #3520717: Fix alphabetical sorting when no &quot;- Any -&quot; option exists
    - `chore` Issue #3489773 by monaw, smustgrave: Single checkbox for &quot;is not empty&quot; filter
    - `chore` Issue #3515863 by smustgrave, pjotr.savitski: Secondary group is not opened when it has a collapsible filter that has user input
    - `chore` Merge branch &#039;7.1.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.1.x
    - `chore` Revert js
    - `chore` 3504532 Soft limit for radios/checkboxes and links
    - `feat` Issue #2921024: Not possible to unselect the checkbox
    - `chore` Issue #3519991 by yes_max: WSOD when query parameter empty
    - `chore` Issue #3529637: Remove redundant code in bef-links.html.twig
    - `chore` Resolve #3531924 &quot;7.1.x&quot;
    - `feat` Issue #3525725 by lus: Custom classes for filter elements
    - `chore` Resolve #3396769 &quot;7.1.x 404&quot;
    - `docs` Getting started
    - `chore` Issue #3495331 by liquidcms, plopesc: Sort logic is wrong
    - `chore` Resolve #2992372 &quot;When module uninstall&quot;
    - `chore` Clean install
    - `chore` Issue #3535071 by averagejoe3000: Space key should not auto submit form
    - `chore` Issue #3540832 by tregonia: Views reset button creates anonymous sessions
    - `chore` Resolve #3452004 &quot;Disable autosubmit with 7.1.x&quot;
    - `chore` Update bef_links filters widget to stop rendering empty options
    - `feat` [#3528584] feat: Html validation error due to non allowed attributes
    - `chore` Prevent fatal error on 404 pages when default 404 path is empty
    - `feat` [#3495503] feat: Allow auto-submit for sorts only
    - `feat` [#3538204] feat: resetForm() triggers warning when exposed sort elements is missing #default_value
    - `refactor` Refactor some
    - `feat` [#3546432] feat: Better Exposed Filters (BEF) multiple select links generate...
    - `feat` [#3546812] feat: Checkboxes are broken
    - `feat` [#3547366] feat: Issue with changes to filter definitions breaks with older versions.
    - `fix` Resolves &quot;3547871&quot; Fix php8 type error
    - `chore` Resolve #2935312 &quot;Checkboxes with remember&quot;
    - `chore` Issue #3493882 by smustgrave, thoogend: Filter rewrite never gets applied to...
    - `feat` [#3526885] feat: Accessibility: Orphaned form label
    - `feat` [#3534975] feat: Move JS range slider out of the minimum field wrapper (noUISlider)
  
  </details>
  
- **drupal/blazy**: 3.0.13 → 3.0.15
    <details>
  <summary>📋 Show 9 commits</summary>

    - `fix` Fixed for rare cache rebuild error at LB: Call to a member function getSource() on null.
    - `feat` Issue #3513440 by bgreco: Responsive image preloads multiple sizes
    - `feat` Issue #3513440 by bgreco: Responsive image preloads multiple sizes
    - `fix` Fixed for empty source field.
    - `chore` Added blazy bio.ajax library only if both core drupal.ajax and blazy exist.
    - `chore` CS.
    - `chore` CS.
    - `chore` CS.
    - `fix` Fixed for Preload and image item validity.
  
  </details>
  
- **drupal/media_library_form_element**: 2.1.2 → 2.1.4
    <details>
  <summary>📋 Show 8 commits</summary>

    - `feat` Restore modifications from RenderElementBase
    - `chore` Issue #3469293: RenderElement is deprecated in drupal:10.3.0 and is removed from drupal:12.0.0
    - `chore` Issue #3498513: Outdated local tooling package-lock.json -- Trivy Scan reports security updates
    - `chore` Resolve #3458296 &quot;Completely remove build step&quot;
    - `feat` Issue #3537789: Add support for integer and array default values
    - `feat` Description in webform is overridden by description (#3522726)
    - `feat` [#3321051] feat: Replace README.txt with README.md
    - `other` Check for description before evaluating [#3522726]
  
  </details>
  
- **drupal/captcha**: 2.0.7 → 2.0.9
    <details>
  <summary>📋 Show 6 commits</summary>

    - `test` Issue #3497314 by murat_kekic, dlevchik: Tests are failing for Drupal 11.1
    - `feat` Issue #3489166 by jordik, feyp: Image captcha reload produces a JSON error
    - `chore` Issue #3221197 by jaydarnell, adriancruz, anybody, mrdrewkeller, simon georges: Captcha Math question needs to be more accessible
    - `chore` Issue #3507522 by jurgenhaas, anybody: Insert captcha widget even if placement is NULL
    - `chore` Issue #3536050 by grevil, anybody: Add data-nosnippet around captcha
    - `chore` Issue #3538311 by grevil: Fix test regression causes through issue 3221197
  
  </details>
  
- **drupal/confi**: 3.2.3 → 4.0.1
    <details>
  <summary>📋 Show 1 commits</summary>

    - `fix` fix: break drupal 10 compatibility and fix code in tests section by rector
  
  </details>
  
- **drupal/csv_serialization**: 3.0.1 → 4.0.1
    <details>
  <summary>📋 Show 8 commits</summary>

    - `chore` Issue #3402274: Call to deprecated method setNewline()
    - `chore` Issue #3405366: Resolve issues reported by PHPCS, PHPStan
    - `feat` Issue #3192772 by Aerzas: Allow to override encoder settings
    - `chore` Issue #3385335 by devad, markdorison, Shane Birley: [D10] Ludwig integration needs an update
    - `chore` Issue #3455761 by markdorison, david.muffley: Replace deprecated usage of League\Csv\ByteSequence::BOF_UTF8
    - `feat` Issue #3451668 by david.muffley: Use constructor property promotion
    - `chore` Issue #3389415 by ericgsmith: PHP 8.1 deprecated function warning
    - `fix` Issue #3429690 by claudiu.cristea: Automated Drupal 11 compatibility fixes for csv_serialization
  
  </details>
  
- **drupal/openy_mappings**: 1.1.0 → 1.1.1
    <details>
  <summary>📋 Show 1 commits</summary>

    - `feat` Openy mappings 3537349
  
  </details>
  
- **drupal/editor_advanced_link**: 2.2.8 → 2.3.2
    <details>
  <summary>📋 Show 5 commits</summary>

    - `other` Issue #3531194 by mradcliffe, rajab natshah, vladimiraus, netsliver, alexgreyhead, mark_fullmer, nicxvan, alemadlei, jannakha: D11.2 / D10.5: Uncaught CKEditorError: Cannot read properties of undefined (reading &#039;viewUid&#039;)
    - `chore` Issue #3531194 by duaelfr: remove code related to moving stuff in the old CKEditor linkUI.
    - `fix` Issue #3531194 by duaelfr: fix advanced attributes persist.
    - `fix` [#3495882] fix: Remove VERSION from libraries.yml
    - `fix` [#3534704] fix: Fix CI issues and unit tests
  
  </details>
  
- **drupal/google_tag**: 2.0.8 → 2.0.9
    <details>
  <summary>📋 Show 2 commits</summary>

    - `chore` Issue 3484190, 3328262: Add comment clarifying why the dev id exists.
    - `chore` Issue #3501147 by danharper, phenaproxima: PHP 8.4 deprecations
  
  </details>
  
- **drupal/inline_entity_form**: 2.0.0-rc10 → 3.0.0-rc21
    <details>
  <summary>📋 Show 19 commits</summary>

    - `chore` Patch #9 applied, Issue #2855627
    - `chore` Issue #3410055 by Nikolay Shapovalov, dcam, Anjali Mehta, dww: Adopt GitlabCi
    - `chore` Issue #3325698 by dcam, geek-merlin, dsnopek, podarok: Using &#039;migrate&#039; without &#039;migrate_plus&#039; leads to fatal PHP error
    - `chore` Issue #3311501 by dcam, edmund.dunn, geek-merlin: Add label to weight select field for accessibility
    - `fix` Issue #3204518 by stefan.korn: Change type hints in inline_entity_form.api.php to align with Drupal core
    - `chore` Issue #3359875 by dcam, tte, geek-merlin, Sophie.SK: Memory allocation error
    - `fix` Issue #3315720 by gauravjeet, geek-merlin, podarok, dcam: TypeError: krsort(): Argument #1 ($array) must be of type array, null given in krsort()
    - `chore` Issue #3224955 by rp7, geek-merlin: Allow themes to alter inline entity forms
    - `test` Issue #3209349 by Spokje, geek-merlin: Speed up FunctionalJavascriptTests tests
    - `chore` Issue #3358281 by bkosborne, geek-merlin: Wrong bundle form is displayed if user has permissions to create only of the available bundles
    - `chore` Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override
    - `fix` Fixup Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override
    - `fix` Revert &quot;Fixup Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override&quot;
    - `revert` Revert &quot;Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override&quot;
    - `fix` Issue #3362087 by Nikolay Shapovalov, urvashi_vora, Prem Suthar, Anjali Mehta, apaderno, geek-merlin, podarok, dww, dcam: Fix the issues reported by phpcs
    - `chore` Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override
    - `fix` task: #3149783: Remove hardcoded word &#039;entities&#039; in EntityInlineForm::getEntityTypeLabels()
    - `chore` Resolve #3438428 &quot;Automated drupal 11&quot;
    - `chore` Issue #3511502 by jakegibs617: Implicitly marking parameter $entity as nullable is deprecated
  
  </details>
  
- **drupal/media_directories**: 2.1.0-beta6 → 2.2.0-beta1
    <details>
  <summary>📋 Show 7 commits</summary>

    - `chore` Issue #3504427: Removing support for libraries API
    - `chore` Issue #3467707 by sarigaraghunath, rajan kumar@2026, bhaveshdas, ytsurk: Drupal 11 compatibility
    - `chore` Issue #3467707 by ytsurk: Lifts compability to Dupal 11
    - `feat` Issue #3185648 by ytsurk: Extending page size to 24
    - `chore` Issue #3505101: The &quot;file_validate_size&quot; plugin does not exist
    - `chore` Issue #3505416 by ytsurk: Respecting file validator API
    - `chore` Issue #3444544 by carlopogus: Support OEmbed remote url
  
  </details>
  
- **drupal/metatag**: 2.1.1 → 2.2.0
    <details>
  <summary>📋 Show 22 commits</summary>

    - `chore` Preparing for further changes.
    - `chore` Replace annotations with attributes.
    - `feat` Revert &quot;Replace annotations with attributes.&quot;
    - `chore` Issue #3531026 by wengerk, damienmckenna: V2UpdatesTest::doSelectionTest() must be compatible with parent UpdatePathTestBase::doSelectionTest
    - `fix` Issue #3541868: Fix styleint test failures.
    - `fix` Issue #3541868 by DamienMcKenna: Fix styleint test failures.
    - `feat` Issue #3541896 by damienmckenna: Field API changed in 11.2, broke MetatagFieldTestBase::testFieldCanBeAdded().
    - `fix` Issue #3332769 by damienmckenna: Rework random string usage to be safer, fixes erratic Views test failure.
    - `fix` Issue #3529741 by damienmckenna, jchatard: Fixed UTF-8 character handling in meta tag tidy().
    - `test` Issue #3543538 by damienmckenna: Remove redundant MetatagTokenStatusTest.
    - `chore` Releasing v2.1.2.
    - `chore` Preparing for further changes.
    - `chore` Issue #3458724 by damienmckenna, rachel_norfolk, pacproduct, petr illek: Add support for fediverse:creator.
    - `chore` Issue #3535155 by feyp, damienmckenna: Add SVG icon meta tag.
    - `chore` Issue #3541817 by damienmckenna: Replace annotation plugins with attribute plugins, require core 10.3+.
    - `chore` Issue #3272202 by anybody, damienmckenna, grevil: Add &lt;none&gt; placeholder to clear / unset inherited value.
    - `chore` Issue #3545780 by damienmckenna: Optionally add suffix after meta tags are trimmed.
    - `chore` Issue #3545780 by damienmckenna: Follow-up to correct a config var name.
    - `chore` Issue #3545784 by damienmckenna: Rework MetaTagCustomTag to extend MetaNameBase.
    - `feat` Issue #3336142 by damienmckenna, pooja_sharma, sidharth_soman, jvbrian, schillerm, admirlju: List the total number of plugins on the reports page.
    - `chore` Issue #3488276 by monaw, naveenvalecha, gillesbailleux, damienmckenna, eleonel: Custom Meta tags: Support multiple attributes.
    - `chore` Releasing v2.2.0.
  
  </details>
  
- **drupal/migrate_plus**: 6.0.7 → 6.0.8
    <details>
  <summary>📋 Show 1 commits</summary>

    - `chore` Issue #3535862 by xurizaemon, evac9, bogdan.dinu, heddn: drush migrate:status throws error for migrations using XML dataparser
  
  </details>
  
- **drupal/migrate_tools**: 6.0.5 → 6.1.2
    <details>
  <summary>📋 Show 13 commits</summary>

    - `chore` Issue #3256236 by lazysoundsystem, benjifisher, heddn: Use of unsupported exclamation mark placeholders
    - `fix` Issue #3411051 by jeremy1606, heddn: Fix PHPCS issues
    - `chore` Issue #3497145 by fjgarlin, mjpa, heddn: Remove the old migrate_tools_sync state entry
    - `fix` Issue #3498688 by scott_euser, heddn: PHPCS fixes for MigrateToolsCommands
    - `chore` Issue #3331137 by benabaird, heddn: Shared configuration not available when using migrate plus config entities
    - `chore` Issue #3412074 by peacog, heddn: Drush command to disable a migration
    - `chore` Issue #3273978 by martin_klima, heddn: Drush migrate:rollback should skip disabled migrations
    - `chore` Issue #3104268 by scott_euser, heddn, robertom, ahebrank, nicxvan, jrockowitz, mikelutz, jrockowitz: Sync is too strict during id comparison and can roll back everything
    - `feat` Issue #3452721 by codebymikey, divyansh.gupta, heddn: Provide the ability to use all available entity operations on the Migration list builder
    - `chore` Issue #3534606 by peterwcm, heddn, d.fisher, tstoeckler: hook_config_schema_info_alter injected optional migrate_plus config schema
    - `fix` Issue #3125378 by ergonlogic, spiderman, divyansh.gupta, heddn: MigrationGroup shared configuration breaks UI
    - `feat` Issue #3534844: MigrateExecutable and MigrateBatchExecutable should use TranslationInterface
    - `chore` Issue #3536657 by heddn, mrshowerman: New parameters introduced in MigrateExecutable class constructor
  
  </details>
  
- **drupal/openy_carnation**: 3.2.1 → 4.0.0-beta4
    <details>
  <summary>📋 Show 6 commits</summary>

    - `feat` [Drupal 11] fix: add jquery_legacy library
    - `refactor` Редагувати openy_carnation.info.yml
    - `fix` fix: typo
    - `fix` fix: remove references to openy_rose
    - `feat` feat: add bootstrap jquery migrate tools
    - `fix` Fix navbar menu item color
  
  </details>
  
- **drupal/openy_gtranslate**: 1.0.8 → 2.0.0
    <details>
  <summary>📋 Show 1 commits</summary>

    - `fix` Fix Google Translate functionality on legacy Carnation theme
  
  </details>
  
- **drupal/scheduler**: 2.2.1 → 2.2.2
    <details>
  <summary>📋 Show 22 commits</summary>

    - `chore` Issue #3356800 by jonathan1055: Pipeline enhancements - workflow, collapse phpstan summary, show eslint files, testgroups
    - `feat` Add ECA to test_dependencies in .info.yml
    - `test` Revert &quot;Add ECA to test_dependencies in .info.yml&quot;
    - `chore` Issue #3510926 by jonathan1055: Remove tempoary D11 alternative composer.json
    - `chore` Issue #3495229 by jonathan1055: Restore Workbench Moderation test
    - `chore` Issue #3356800 by jonathan1055: Pipeline enhancements - remove mink_driver_args_webdriver and services, cater for single test groups
    - `chore` Issue #3356800 by jonathan1055: Extra assertions in SchedulerJavascriptDefaultTimeTest.php
    - `chore` Issue #3356800 by jonathan1055: Read build.env using export to cater for spaces
    - `chore` Issue #3356800 by jonathan1055: Improvments to variables output and phpunit matrix
    - `chore` Issue #3356800 by jonathan1055: Pipeline rules, allow concurrent=0 in Next Minor, phpcs.xml extensions
    - `test` Issue #3527579 by jonathan1055: Ignore 3-party deprecations in phpunit testing at 11.2.x
    - `chore` Issue #3446881: Undefined array key &quot;translatable&quot; when Language is enabled but not Content Translation
    - `chore` Issue #3527579: Add #[Group] attributes for Core 11.2 and PHPUnit 11
    - `chore` Issue #3356800 by jonathan1055: Add rules to run jobs on commit and in MR, defaulting to manual
    - `fix` Issue #3155034 by jonathan1055: Delete unused missingAction() function
    - `feat` Issue #3533739 by jsacksick: Implement static caching around SchedulerManager::getPlugins()
    - `feat` [#3527579] feat: Add #[Group] and #[DataProvider] attributes to test classes for PHPUnit 11
    - `feat` [#3356800] feat: Do not revert .deprecations-ignore.txt in Test-only job
    - `fix` [#3514380] fix: Autoloading hooks in the file scheduler.tokens.inc is deprecated D11.2
    - `feat` [#3545432] feat: Improve caching around SchedulerManager::getPlugins() and SchedulerManager::getEntityFormIds()
    - `feat` #3507012 Dependency injection instead of \Drupal calls (part 1)
    - `feat` #3553242 Ignore deprecated getSystemData()
  
  </details>
  
- **drupal/webform**: 6.3.0-beta3 → 6.3.0-beta5
    <details>
  <summary>📋 Show 113 commits</summary>

    - `chore` Issue #3133280: Remove obsolete comment
    - `chore` Issue #3537579: Restore use of legacy SanitizePluginInterface
    - `feat` Issue #3441905: Correct name of FunctionalJavascript directory
    - `test` Issue #3538392: Fix test failure in WebformElementCaptchaTest
    - `chore` Issue #3523478: Add `minified: true` to files in webform.libraries.yml
    - `feat` Issue #3541370: Replace deprecated rgba()
    - `chore` Issue #3487957: Add LegacyModuleImplementsAlter attribute annotation
    - `feat` Issue #3538392: Make @dataProvider methods static
    - `test` Issue #3538392: Update tests to handle differences in Drupal 11
    - `test` Issue #3538392: Use XPath in WebformElementValidateRequiredTest
    - `chore` Issue #3517902: Remove deprecated dialogClass
    - `chore` Issue #3541440 by eric.vvf, liam morland, jrockowitz: Visual alignment issue: .webform-addons-summary floats beside warning messages instead of appearing above
    - `chore` Issue #3532527 by divyansh.gupta, majid.ali, jrockowitz, norman.lol, thamas: All errors should have role alert for better accessibility when using client side validation
    - `feat` Issue #3516134: Add access check for &quot;notes&quot; operation
    - `chore` Issue #3542169: Remove fix checkbox via dialog/off-canvas tray
    - `feat` Issue #3524067 by tom konda: strpos($a, $b) which compares with FALSE or 0 should replace with str_contains($a, $b) or str_starts_with($a, $b) if possible
    - `fix` Issue #3542319: array_intersect(): Argument #1 ($array) must be of type array, null given
    - `chore` Issue #3204456 by jrockowitz, angrytoast, berdir, liam morland, heinvdb, catch: getParagraphWebformsRecursive causes slow load times
    - `feat` Issue #3279642 by matthijs: Duplicate default element callbacks
    - `feat` Issue #3538042: Add autocomplete for date element to be a11y compliant
    - `test` Issue #3514708 by jrockowitz, mandclu: Add a test for the Likert &quot;average&quot; formatter
    - `chore` Issue #3473834 by liam morland, jrockowitz: Remove JS shims for Internet Explorer (IE)
    - `chore` Issue #3508995 by jrockowitz, ryanrobinson_wlu, cilefen: Column Not Found: user.name
    - `fix` Issue #3523961 by marthinal, jwilson3: Avoid addcslashes() deprecation warning during Webform submission preview
    - `chore` Issue #3526756 by huzooka, liam morland, jrockowitz, dxvargas: Exception thrown when trying to submit element / wrapper attributes with invalid string
    - `chore` Issue #3466356 by damienmckenna, liam morland: WebformElementStates::buildConditionRow() has faulty code
    - `test` Issue #3542583: Date test values can be out of range in case of maximum and no minimum date
    - `chore` Issue #3452423 by jrockowitz, tichris59: Mode test - Date list restriction not applied
    - `feat` Issue #3488049 by jrockowitz, berdir: Delay discovery/init logic in WebformHelpManager
    - `chore` Issue #3443385 by arno_vgh, cilefen, jrockowitz: Update remote_post Webform handler name &amp; description
    - `feat` Issue #3537938 by n-m-daz, eric.vvf, jrockowitz, liam morland, divya.sejekan: The placeholder text in the filter submissions field is cropped and not fully visible
    - `perf` Issue #3456597: Cascading effect creates loss of performance
    - `chore` Issue #3473153 by jrockowitz, rraney, flyke, cilefen, s3b0un3t, rajeevk, carma03, anurag_2711, lukey: Route &quot;webform.addons&quot; does not exist
    - `chore` Issue #3538258 by jrockowitz, andrew.wang: &quot;You have unsaved changes.&quot; prompt does not display when &quot;Required&quot; checkboxes are clicked
    - `chore` Issue #3477308 by jrockowitz, anybody, gogowitsch: Access denied when using webform dialog as anonymous user
    - `chore` Issue #3526888 by liam morland, occupant, jrockowitz, jeeva r: Unable to install webform_node module via recipe
    - `chore` Issue #3469200: Allow to use rendered entities (in selected view mode) as webform entity checkboxes / radios options
    - `chore` Issue #3500627 by jrockowitz, albertho425, girish_lnweb, cilefen: Drupal 10 webform validation issue when using checkboxes
    - `chore` Issue #3533744 by apparatchik: Allow Signature Element To Notify Value Changes And Work With Webform Conditions
    - `chore` Issue #3531961 by jrockowitz, imranbcc, avpaderno: Unnecessary element access properties in yaml
    - `chore` Issue #3516047 by marthinal, jwilson3: Accessibility violation: Tippy.js adds aria-expanded to &lt;span&gt; with role=&quot;tooltip&quot;
    - `feat` Issue #3524488 by jrockowitz, martonlaci, liam morland: Activate Title case input mask option
    - `chore` Issue #3458484 by jrockowitz, abhijith s, nupur badola, cilefen, luke.leber: Provide option to disable default Js validation on Telephone element
    - `feat` Issue #3504078 by liam morland, milosr, jrockowitz, crutch, ivan616: Operations Dropbutton improvement, need webform node id/class or form id for a webform node
    - `chore` Issue #3466750 by chrisolof, liam morland: Date-time strings in log messages generated by webform_scheduled_email lack important timezone information
    - `feat` Issue #3487468: Extend &quot;Terms of service&quot; element with the option to add a link
    - `chore` Issue #3493832: Allow custom data-options to added to elements JavaScript options
    - `chore` Issue #3522507 by jrockowitz, liam morland: SchemaIncompleteException for webform.settings:ui.description_help_disabled
    - `feat` Issue #3524488 by jrockowitz, martonlaci, liam morland: Activate Title case input mask option
    - `feat` Issue #3520508: Maxlength on text format field causes TypeError
    - `chore` Issue #3537919: Crash after update request
    - `chore` Issue #3462726 by jrockowitz, Ana Bozhilova, cskeers, liam morland: Webform Export Option &quot;Separate, with each possible option value in its own column&quot; Doesn&#039;t Show Values for Specific Options
    - `feat` Add &quot;titlecase&quot; to cspell project words list
    - `chore` Issue #3524877 by yovince, liam morland: Remove return value from WebformSubmissionDevelGenerate::generateSubmissions()
    - `feat` Issue #3483410: Add justify content settings in WebformFlexbox Element
    - `chore` Issue #3471061 by jrockowitz, adhershmnair, regina.meow, cilefen: &quot;Filter webforms&quot; not working after using browser&#039;s back button
    - `chore` Issue #3413266 by danflanagan8, jrockowitz, cilefen, tinny: Uncaught GuzzleHttp\Exception\ConnectException in remote post hander
    - `feat` Issue #3542964: Remove Add-ons feature
    - `chore` Issue #3439662 by jrockowitz, arno_vgh: Allow a WebformEmailHandler to specify the language of an email message
    - `feat` Issue #3524216 by jrockowitz, robijntje94, liam morland, pepeprawn, anpri31, cilefen, cp_dev, dmitrii puiandaikin, abramm, daletrexel: jQuery timepicker setting is not respected
    - `chore` Issue #3337640 by jrockowitz, tgoeg, kensuke-imamura: drush wfi does not import data exported with wfx
    - `chore` Issue #3534519 by jrockowitz, khiminrm: Warnings when exporting submissions with empty composite element
    - `chore` Issue #3449523 by jrockowitz, nicholosophy, cilefen: Add option to add css class to fieldset legend element
    - `chore` Issue #3543591: The validateUnique() and validateUniqueMultiple() functions don&#039;t evaluate #unique = false correctly
    - `chore` Issue #3424031 by jrockowitz, alex20001111:  Report of Issue with Options/Checkbox Limit in Custom Option SVG Module
    - `chore` Remove excluded children from containers
    - `chore` Issue #3414361: UX regression / error when duplicating webform in D10.2
    - `feat` Add Spanish words to cspell project word list
    - `chore` Issue #3380667: Remote post handler triggers session related error messages when remote post fails
    - `feat` [#3441600] feat: Webform might create invalid link renderable arrays on submission list.
    - `feat` [#3513032] feat: Remove &quot;use strict&quot; statements from JS where cited by eslint
    - `feat` [#3543014] feat: Make form_file_limit error message configurable
    - `feat` [#3449370] feat: Values not shown on submission display when multiple items and UL used
    - `feat` [#3510410] feat: Disabled webform text format -- unable to reenable
    - `feat` [#3497954] feat: Excessive memory use when building dynamic library definitions
    - `feat` [#3440309] feat: First option of required checkboxes/checkboxes other become required under conditional state while wrapper type set to &#039;form element&#039;
    - `chore` Linting
    - `chore` Issue #3497954 by weseze, catch, heddn, cilefen, jrockowitz, liam morland: Excessive memory use when building dynamic library definitions. Minor Fix.
    - `feat` [#3432428] feat: Information message for file uploads is confusing when form limit is enabled
    - `feat` [#3484772] feat: Managed file element using &quot;button&quot; option appears to incorrectly invalidate valid uploads
    - `feat` [#3449549] feat: Webform &#039;remote_post&#039; handler doesn&#039;t exclude fields without access
    - `feat` [#3315197] feat: [Performance] Add an index on webform_submission_data name and property
    - `chore` Issue #3497954 by weseze, catch, heddn, cilefen, jrockowitz, liam morland: Excessive memory use when building dynamic library definitions. Minor Fix.
    - `chore` Issue #3497954 by weseze, catch, heddn, cilefen, jrockowitz, liam morland: Excessive memory use when building dynamic library definitions. Minor Fix.
    - `feat` [#3487061] feat: Fix coding standards
    - `feat` [#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection
    - `feat` Revert &quot;[#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection&quot;
    - `feat` [#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection
    - `feat` [#3464731] feat: webform_bootstrap: Bootstrap Theme vs. Bootstrap Framework (e.g. Radix)
    - `feat` [#3490096] feat: Entity reference field fails to create entities that don&#039;t exist for taxonomy when only one target bundle selected
    - `feat` [#3515391] feat: There&#039;s no &#039;group_relation&#039; entity type.
    - `feat` [#3501983] feat: Duplicate Submission should allow &#039;edit own&#039; instead of &#039;edit any&#039;
    - `feat` [#3495192] feat: Date List element title display options not applying.
    - `feat` [#3468142] feat: Wizard previous and next label not overridden
    - `feat` [#3517077] feat: Error and inconcistency when deleting form element after reordering
    - `feat` [#3519674] feat: Telephone validation issues when using states and pages
    - `feat` [#3520969] feat: Validate US ZIP codes in the Advanced Address element
    - `feat` [#3512775] feat: Minimum items not respected when multi-value element is required
    - `feat` [#3462738] feat: webform_submission and webform_submission_data schema don&#039;t match for sid
    - `feat` [#3544435] feat: Upgrade 6.2.x → 6.3.x removes webform_shortcuts → causes missing-module errors during updb/cim
    - `feat` [#3257570] feat: Ensure that submission are deleted when a webform is deleted
    - `feat` [#3487530] feat: New permission for filter and bulk action on overview page
    - `feat` [#3440133] feat: Submissions can be purged immediately after submission
    - `feat` [#3487530] feat: New permission for filter and bulk action on overview page
    - `feat` [#3426141] feat: Deleting submissions using webform_submission_bulk_form fails because row order is random
    - `feat` [#3546716] feat: data-options doesn&#039;t override existing config
    - `feat` feat: Update WebformNodeReferencesListController to support paragraph-based webform references
    - `feat` [#3414928] feat: Webform submission import: failed to import a lot of records executed in multiple batches
    - `feat` [#3423775] feat: Error message when using SymfonyMailer plugin
    - `feat` [#3546389] feat: Error: Call to undefined function Drupal\webform\Hook\_webform_token_get_submission_value()
    - `feat` [#3504274] feat: Variants do not override the title and description
    - `feat` [#3491104] feat: Warning: foreach() argument must be of type array|object, null given in Drupal\webform\WebformTranslationLingotekManager
    - `feat` [#3484204] feat: [Performance] Timeout when removing a webform field
  
  </details>
  
- **drupal/openy_repeat**: 2.8.2 → 3.1.0
    <details>
  <summary>📋 Show 4 commits</summary>

    - `feat` Convert uri to query
    - `chore` Update version
    - `fix` Fix location query
    - `chore` Drupal 11 upgrade: staged changes
  
  </details>
  
- **drupal/slick**: 3.0.4 → 3.0.6
    <details>
  <summary>📋 Show 10 commits</summary>

    - `fix` Issue #3483766: Automated Drupal 11 compatibility fixes for slick
    - `chore` Issue #3516976 by bwaindwain: Position of prev/next arrows in RTL
    - `chore` Issue #3312264 by ericdsd, dahousecat, michelle: Allow setting float value in slide to show to partially display next slide
    - `chore` CS.
    - `chore` Issue #3544178 by mullzk, sourabhsisodia_: Drupal11/jquery4 breaks slick-slider with random order
    - `chore` CS.
    - `chore` CS.
    - `chore` CS.
    - `fix` Issue #3467129 by petrsocha, dadderley, terminator727, tuthanh, jwilson3, mably, ivnish, trydoknight, walkingdexter, alfonsotem, parasxous, fanton, anybody, danrod, michèle, jay.chen, luca.pecchiura, sami-an, chike, vishal choudhary, dydave, diaodiallo, thatfinegentleman, jrb, jaydarnell, lissy, mullzk, vegantriathlete, iamdroid, m4olivei, dahousecat, j.: Incompatibility with Drupal 11/jQuery 4gitk
    - `chore` CS
  
  </details>
  
- **drupal/ws_small_y**: 1.2.1 → 1.2.2
    <details>
  <summary>📋 Show 2 commits</summary>

    - `chore` Update drupal/openy_gtranslate to 2.0.0
    - `fix` Merge branch &#039;update/openy_gtranslate-2.0.0&#039; into &#039;1.0.x&#039;
  
  </details>
  
- **drupal/video_embed_field**: 3.0.0-beta2 → 3.0.0-beta3
    <details>
  <summary>📋 Show 11 commits</summary>

    - `feat` Issue #3524143 by mably: Add custom icon to video_embed_field field type
    - `chore` Resolve #3526845 &quot;Upgrade path&quot;
    - `chore` Issue #3539994 by mably: phpcs, phpstan and phpunit fixes
    - `fix` Issue #3540057 by mably: Fix FieldConfigurationTest for compatibility with Drupal 11.2
    - `chore` Issue #3540057 by mably: Fix FieldConfigurationTest for compatibility with Drupal 11.2 (suite)
    - `feat` Issue #3193601 by kkumaren, rybchynski, redneko, mably: Accessibility: Buttons do not have an accessible name
    - `chore` Issue #3313587 by hitchshock, reszli, jorgik, mably: Missing Drupal Behaviors for added content by formatters.
    - `feat` Issue #3526845 by cchiste, mably, jwmorris: Upgrade Path to resolve raw output
    - `docs` Issue #3550450 by prudloff, mably: Add referrerpolicy attribute
    - `test` Issue #3554816 by grevil, anybody: Fix PHPUnit tests
    - `fix` [#2879932] feat: Provide a URL field formatter
  
  </details>
  


### ➖ Removed Drupal Modules

- **drupal/bartik** (was 1.0.2)
- **drupal/jquery_ui_slider** (was 2.1.0)
- **drupal/jquery_ui_datepicker** (was 2.1.1)
- **drupal/ckeditor5_font** (was 1.1.2-beta1)
- **drupal/color** (was 1.0.3)
- **drupal/features** (was 5.0.0-alpha1)
- **drupal/media_library_bulk_upload** (was 1.0.2)
- **drupal/seven** (was 1.0.0)
- **drupal/yusaopeny_ymca360** (was 1.0.0-rc4)


### ➕ Added PHP Libraries

- **symfony/polyfill-intl-grapheme** (v1.33.0)
- **symfony/polyfill-php83** (v1.33.0)
- **symfony/polyfill-php84** (v1.33.0)
- **revolt/event-loop** (v1.0.7)
- **commerceguys/addressing** (v2.2.4)
- **doctrine/collections** (2.4.0)
- **doctrine/reflection** (1.2.2)
- **laminas/laminas-diactoros** (2.11.1)
- **laminas/laminas-escaper** (2.9.0)
- **laminas/laminas-feed** (2.15.0)
- **stack/builder** (v1.0.6)
- **symfony-cmf/routing** (2.3.4)
- **symfony/debug** (v4.4.31)
- **symfony/http-client-contracts** (v2.5.0)
- **symfony/translation** (v4.4.34)
- **typo3/phar-stream-wrapper** (v3.1.7)
- **consolidation/output-formatters** (4.6.1)


### 🔄 Updated PHP Libraries

- **symfony/console**: v6.4.23 → v7.3.6
    <details>
  <summary>📋 Show 250 commits</summary>

    - `security` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Console] Remove deprecations across the component
    - `chore` Remove BC layers related to new methods and new parameters
    - `feat` [7.0] Remove remaining deprecated code paths
    - `feat` [Components] Convert to native return types
    - `refactor` [HttpKernel][Console] Revert native return types on Bundle and Command classes
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Fix ProgressBar::iterate on empty iterator
    - `feat` feature #52605 [Console] Support `ProgressBar::iterate()` on empty array (GromNaN)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `refactor` [CssSelector][Serializer][Translation] [Command] Clean unused code
    - `feat` minor #52659 [CssSelector][Serializer][Translation] [Command] Clean unused code (alamirault)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Set `strict` parameter of `in_array` to true where possible
    - `feat` Code updates
    - `feat` minor #53073 Set `strict` parameter of `in_array` to true where possible (alexandre-daubois)
    - `security` [Console][EventDispatcher][Security][Serializer][Workflow] Add PHPDoc to attribute classes and properties
    - `chore` CS: trailing commas
    - `other` [Asset][BrowserKit][Cache][Console][CssSelector] Use CPP
    - `feat` CS: enable ordered_types.null_adjustment=always_last
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Console] Remove needless state from QuestionHelper
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `refactor` [Console] `InputArgument` and `InputOption` code cleanup
    - `chore` re-add accidentally removed property
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `chore` [Console] Add descriptions to Fish completion output
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Console] Document argv arrays for static analysis
    - `feat` [Console] Add `ArgvInput::getRawTokens()`
    - `other` [Console] Add a way to use custom lock factory in lockableTrait
    - `feat` feature #54135 [Console] Add a way to use custom lock factory in lockableTrait (VincentLanglet)
    - `feat` [Console] Allow to returns all tokens after the command name
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Remove unnecessary empty usages
    - `feat` minor #54447 Remove unnecessary empty usages (ostrolucky)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` [Console] Handle SIGQUIT signal
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Cleanup past sponsors
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Console] Better error handling when misuse of `ArgvInput` with arrays
    - `fix` bug #54576 [Console] Better error handling when misuse of `ArgvInput` with arrays (symfonyaml)
    - `fix` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `feat` Add return type to __toString() methods
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `other` Update .gitattributes
    - `fix` [Console] Remove a redundant check in `ErrorListener`
    - `chore` Replace `TestCase::assertTrue(true)` with `TestCase::expectNotToPerformAssertions()`
    - `chore` Use CPP where possible
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` minor #57795 Use CPP where possible (alexandre-daubois)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` [Cache][Config][Console][DependencyInjection][FrameworkBundle] Remove dead code and useless casts
    - `refactor` Remove unused code and unnecessary `else` branches
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `feat` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [PhpUnitBridge][Console][VarDumper] Add support for `FORCE_COLOR` environment variable
    - `feat` feature #57777 [VarDumper] Add support for `FORCE_COLOR` environment variable (artshade)
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Console][Process] Add `$verbosity` argument to `mustRun` helper method
    - `fix` no longer use the internal TestFailure class
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Console] Add silent verbosity mode suppressing all output, including errors
    - `fix` Fix `$this` calls to static ones when relevant
    - `test` Remove useless parent method calls in tests
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Remove unused imports
    - `feat` minor #58374 Remove useless parent method calls in tests (alexandre-daubois)
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Remove a few unnecessary full qualifier
    - `feat` Add finished indicator to ProgressIndicator
    - `feat` Various CS fix for consistency
    - `test` [Console] Use assertSame for input tests
    - `feat` minor #58443 Various CS fix for consistency (alexandre-daubois)
    - `feat` feature #57576 [Console] Add finished indicator to `ProgressIndicator` (LauLaman)
    - `feat` [Console] Add ability to schedule alarm signals and a `console.alarm` event
    - `chore` CS: clean some whitespaces/indentation
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Add `$seconds` to `keepalive` methods
    - `chore` Reduce common control flows
    - `refactor` Remove always true/false occurrences
    - `perf` Don&#039;t use `die()` in PHPT `--SKIPIF--`
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` [Console] Add support of millisecondes for `formatTime`
    - `feat` feature #58946 [Console] Add support of millisecondes for `formatTime` (SebLevDev)
    - `fix` [Console] Fix time display in tests
    - `fix` [Console] Fix tests
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `feat` Add support for invokable commands and input attributes
    - `refactor` [Console] Invokable command deprecations
    - `fix` [Console] Fix invokable command profiler representation
    - `chore` [Console] Invokable command adjustments
    - `feat` [Console] Add broader support for command &quot;help&quot; definition
    - `chore` Deprecating command getDefault* methods
    - `other` [Console] Add markdown format to Table
    - `style` [Console] Add a Tree Helper + multiple Styles
    - `feat` feature #59588 [Console] Add a Tree Helper + multiple Styles  (smnandre)
    - `fix` fix tests on Windows
    - `refactor` replace assertEmpty() with stricter assertions
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Fixed support for Kernel as command
    - `chore` chore: PHP CS Fixer fixes
    - `fix` minor #59972 chore: PHP CS Fixer fixes (keradus)
    - `feat` Add support for invokable commands in LockableTrait
    - `chore` Deprecate returning a non-integer value from a `\Closure` function set via `Command::setCode()`
    - `refactor` [Console] Mark `AsCommand` attribute as `@final`
    - `chore` replace expectDeprecation() with expectUserDeprecationMessage()
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `docs` [Console] Use kebab-case for auto-guessed input arguments/options names
    - `chore` remove conflict rule
    - `feat` Ensure overriding Command::execute() keep priority over __invoke
    - `feat` [Console] Set description as first parameter to Argument and Option attributes
    - `feat` minor #60360 [Console] remove conflict rule (xabbuh)
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `other` [Console] `#[Option]` rules &amp; restrictions
    - `feat` [Console] Add support for `SignalableCommandInterface` with invokable commands
    - `feat` feature #59602 [Console] `#[Option]` rules &amp; restrictions (kbond)
    - `other` [Console] Invokable command `#[Option]` adjustments
    - `feat` [Console] Improve `#[Argument]`/`#[Option]` exception messages
    - `fix` [Console][Messenger] Fix: Allow UnrecoverableExceptionInterface to bypass retry in RunCommandMessageHandler
    - `other` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` bug #60507 [Console][Messenger] Fix: Allow `UnrecoverableExceptionInterface` to bypass retry in `RunCommandMessageHandler` (santysisi)
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Fix @var phpdoc
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` [Console] fix profiler with overridden `run()` method
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` [Console] Windows Test Error - change completecar for windows for passing test
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` [Console] Fix JSON description for negatable input flags
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` [Console] Fix `TreeHelper::addChild` when providing a string
    - `fix` bug #61080 [Console] Fix `TreeHelper::addChild` when providing a string (jtattevin)
    - `fix` [Console][Table] Fix invalid UTF-8 due to text wrapping
    - `fix` [Console][Table] Fix unnecessary wrapping
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `chore` [Console][Table] Don&#039;t split grapheme clusters
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [Console] Restore SHELL_VERBOSITY after a command is ran
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Console] Fix testing multiline question
    - `fix` bug #61033 [Console] Restore `SHELL_VERBOSITY` after a command is ran (lyrixx)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` use the empty string instead of null as an array offset
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [Console] Don’t automatically append EOT to multiline test inputs
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [Console] Don’t append a new line to test inputs ending with an EOT
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Console] Fix handling of `\E` in Bash completion
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [Console] Specify types of interactive question choices
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` fix transient Console output related test
    - `chore` do not pass the empty string to ord()
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `chore` [Console] Ensure terminal is usable after termination signal
    - `fix` bug #61861 [Console] Ensure terminal is usable after termination signal (johnstevenson)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` fixup! [Console] Specify types of interactive question choices
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `chore` [Console] ensure `SHELL_VERBOSITY` is always restored properly
    - `feat` [Console] Add missing VERBOSITY_SILENT case in CommandDataCollector
  
  </details>
  
- **symfony/service-contracts**: v3.5.1 → v3.6.1
    <details>
  <summary>📋 Show 12 commits</summary>

    - `feat` use constructor property promotion
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Prefix all sprintf() calls
    - `feat` Add more precise types in reusable test cases
    - `test` make test case classes compatible with PHPUnit 10+
    - `chore` Remove calls to getExpectedException()
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Fix ServiceMethodsSubscriberTrait for nullable service
    - `fix` Fix ServiceMethodsSubscriberTrait for nullable service
    - `feat` CS fixes
    - `fix` Fix @var phpdoc
    - `feat` Merge branch &#039;6.4&#039; into 7.2
  
  </details>
  
- **psr/container**: 2.0.2 → 1.1.2
    <details>
  <summary>📋 Show 5 commits</summary>

    - `feat` Removing Throwable on ContainerExceptionInterface
    - `refactor` Merge pull request #31 from moufmouf/fix/remove_throwable
    - `refactor` Remove branch alias (branch name is named in a way that matches)
    - `fix` fix: bump minimum supported PHP version to 7.4
    - `revert` revert: re-instate extension of Throwable in supplied exception interfaces
  
  </details>
  
- **symfony/string**: v6.4.24 → v7.4.0-BETA1
    <details>
  <summary>📋 Show 126 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` [String] New locale aware casing methods
    - `feat` feature #52198 [String] New locale aware casing methods (bram123)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Leverage ReflectionFunction::isAnonymous()
    - `other` [String] Use CPP
    - `fix` Move &amp; adapt &quot;emoji code&quot; from Intl into its own component
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` feature #53096 [Intl] [Emoji] Move emoji data in a new component (smnandre)
    - `chore` bump version for symfony/emoji
    - `feat` [String] Leverage Randomizer::getBytesFromString()
    - `chore` chore: CS fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Prefix all sprintf() calls
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` chore: CS fixes
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [String] Add WORD_STRICT mode to truncate method
    - `security` Merge branch &#039;6.4&#039; into 7.0
    - `security` Merge branch &#039;7.0&#039; into 7.1
    - `security` Merge branch &#039;7.1&#039; into 7.2
    - `feat` feature #57243 [String] Add `TruncateMode` mode to `truncate` methods (Korbeil)
    - `other` Update .gitattributes
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` fix truncating in WordBefore mode with length after last space
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `test` Merge branch &#039;7.1&#039; into 7.2
    - `feat` bug #57778 [String] fix truncating in WordBefore mode with length after last space (xabbuh)
    - `feat` Remove useless code
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [String] Add Spanish inflector with some rules
    - `feat` feature #58228 [String] Add Spanish inflector with some rules (dennistobar)
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `docs` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [String] Add the `AbstractString::kebab()` method
    - `feat` feature #58385 [String] Add the `AbstractString::kebab()` method (alexandre-daubois)
    - `chore` Remove always true/false occurrences
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [String] Add `AbstractString::pascal()` method
    - `fix` Fix typo
    - `chore` chore: PHP CS Fixer - allow header validator
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `feat` [String] Leverage grapheme_str_split()
    - `feat` Various CS fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` optimize `in_array` calls
    - `fix` Fix typos
    - `test` run tests using PHPUnit 11.5
    - `feat` replace PHPUnit annotations with attributes
    - `chore` Remove some implicit bool type juggling
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` run tests with PHPUnit 12.3
    - `fix` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `feat` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
    - `chore` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
    - `chore` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `fix` specific fix to avoid &#039;outag&#039; when inflecting &#039;outages&#039;
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [String] Fix issues singular
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [String] Fix nodes singular
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [String][Inflector] Fix edge cases
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` use the empty string instead of null as an array offset
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [PhpUnitBridge] Fix gathering deprecation in phpt
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **symfony/dependency-injection**: v6.4.23 → v7.4.0-BETA2
    <details>
  <summary>📋 Show 250 commits</summary>

    - `fix` Fix prepending strategy for php config loader
    - `other` change error msg
    - `fix` Fix singular phpdoc
    - `fix` bug #54977 [DependencyInjection] Fix prepending strategy for php config loader (yceruto)
    - `feat` Add simple tagging to phpdoc for Autoconfigure attribute
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` minor #54890 [DependencyInjection] Improve error message when a class in not instantiable during auto-discovery (HMRDevil)
    - `feat` use constructor property promotion
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `other` [DependencyInjection] Add `#[WhenNot]` attribute
    - `fix` [DependencyInjection] Fix phpdoc for $calls
    - `fix` bug #57289 [DependencyInjection] Fix phpdoc for $calls in class Autoconfigure (ThomasTr)
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Add return type to __toString() methods
    - `feat` Allow service locators to be ordered by priority.
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Update .gitattributes
    - `other` [PhpUnitBridge] Add ExpectUserDeprecationMessageTrait
    - `chore` Use CPP where possible
    - `feat` feature #54593 [PhpUnitBridge] Add `ExpectUserDeprecationMessageTrait` (derrabus)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` [Cache][Config][Console][DependencyInjection][FrameworkBundle] Remove dead code and useless casts
    - `refactor` Remove unused code and unnecessary `else` branches
    - `fix` Fix multiple CS errors
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `feat` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `fix` Fix importing PHP config in prepend extension method
    - `feat` [DependencyInjection] Deprecate `!tagged` tag, use `!tagged_iterator` instead
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Config][DependencyInjection] Optimize dumped resources for tracking
    - `fix` fix tests on Windows
    - `feat` minor #57948 [Config][DependencyInjection] Optimize dumped resources for tracking (nicolas-grekas)
    - `feat` [DependencyInjection] Add `ContainerBuilder::registerChild()` shortcut method
    - `feat` [DependencyInjection] Add support for `key-type` in `XmlFileLoader`
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` fix tests
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Use Stringable whenever possible
    - `feat` minor #58094 Use Stringable whenever possible (fabpot)
    - `feat` feature #58035 [DependencyInjection] Add support for `key-type` in `XmlFileLoader` (alexandre-daubois)
    - `fix` [DependencyInjection] Fix test paths on Windows
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` bug correction
    - `feat` CS: re-apply `trailing_comma_in_multiline`
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Introducing container non-empty parameters
    - `feat` Switch to ExpectUserDeprecationMessageTrait
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` rename non-empty parameter methods
    - `fix` Fix `$this` calls to static ones when relevant
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Remove unused imports
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Remove a few unnecessary full qualifier
    - `feat` Various CS fix for consistency
    - `fix` [DependencyInjection] Resolve container parameter used in index attribute of service tags
    - `chore` CS: clean some whitespaces/indentation
    - `chore` [DependencyInjection] Sort PassConfig:TYPE_* by order of execution
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Reduce common control flows
    - `fix` [DependencyInjection] Fix parsing nested AutowireInline attributes
    - `chore` Remove always true/false occurrences
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `chore` [DependencyInjection][Routing][HttpClient] Reject URIs that contain invalid characters
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `ci` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [DependencyInjection] Make `#[AsTaggedItem]` repeatable
    - `chore` chore: PHP CS Fixer fixes
    - `feat` feature #59088 [DependencyInjection] Make `#[AsTaggedItem]` repeatable (alexandre-daubois)
    - `feat` reuse the reflector tracked by the container builder
    - `feat` [DependencyInjection] Support @&gt; as a shorthand for !service_closure in YamlFileLoader (Issue #59255)
    - `refactor` Sync Security\ExpressionLanguage constructor with parent
    - `feat` minor #59277 [Security] Sync Security\ExpressionLanguage constructor with parent (kor3k)
    - `fix` fix(dependency-injection): reset env vars with kernel.reset
    - `chore` chore: PHP CS Fixer fixes
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `chore` chore: PHP CS Fixer fixes
    - `feat` [DependencyInjection] Don&#039;t skip classes with private constructor when autodiscovering
    - `feat` [DependencyInjection] Add `Definition::addExcludedTag()` and `ContainerBuilder::findExcludedServiceIds()` for auto-discovering value-objects
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Fix merge
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` [DependencyInjection] Fix phpdoc for $configurator in Autoconfigure attribute
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `refactor` replace assertEmpty() with stricter assertions
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `refactor` [DependencyInjection] Leverage native lazy objects for lazy services
    - `chore` chore: PHP CS Fixer fixes
    - `chore` [DI] Rename &quot;exclude tag&quot; to &quot;resource tag&quot;
    - `feat` [DependencyInjection] Enable multiple attribute autoconfiguration callbacks on the same class
    - `chore` [VarExporter] Leverage native lazy objects
    - `feat` feature #59890 [VarExporter] Leverage native lazy objects (nicolas-grekas)
    - `other` [DependencyInjection] Add &quot;when&quot; argument to #[AsAlias]
    - `other` [DependencyInjection] Add better return type on ContainerInterface::get()
    - `chore` Remove unneeded use statements
    - `chore` Remove unneeded use statements
    - `fix` [DependencyInjection][FrameworkBundle] Fix precedence of App\Kernel alias and ignore container.excluded tag on synthetic services
    - `fix` [DependencyInjection] Fix missing binding for ServiceCollectionInterface when declaring a service subscriber
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `refactor` Replace get_class() calls by ::class
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [DependencyInjection][FrameworkBundle] Use php-serialize to dump the container for debug/lint commands
    - `feat` Allow Symfony ^8.0
    - `fix` [DependencyInjection] Fix `ServiceLocatorTagPass` indexes handling
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [DependencyInjection] Allow extending `#[AsAlias]` attribute
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Fix merge
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `other` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `docs` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` feature #60597 [DependencyInjection][FrameworkBundle] Use php-serialize to dump the container for debug/lint commands (nicolas-grekas)
    - `feat` [DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()`
    - `feat` feature #60910 [DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()` (nicolas-grekas)
    - `fix` [FrameworkBundle] fix `lint:container` command
    - `feat` Various CS fixes
    - `fix` [DependencyInjection] CS fix
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Fix @var phpdoc
    - `fix` [DependencyInjection] Fix proxying services defined with an abstract class and a factory
    - `feat` optimize `in_array` calls
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Fix various bool-type coercions
    - `fix` minor #61103 Fix various bool-type coercions (Girgias)
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Form][PhpUnitBridge] Remove usage of noop `ReflectionProperty::setAccessible()`
    - `refactor` [DependencyInjection] Update `ResolveClassPass` to check class existence
    - `feat` [DependencyInjection] Deprecate registering a service without a class when its id is a non-existing FQCN
    - `chore` [DependencyInjection] Dump XML using plain PHP, no DOM needed
    - `chore` [DependencyInjection] Escape parameters before resolving env placeholders
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `test` run tests using PHPUnit 11.5
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` replace PHPUnit annotations with attributes
    - `feat` minor #61299 replace PHPUnit annotations with attributes (xabbuh)
    - `fix` Fix wrong boolean values
    - `feat` minor #61280 [DependencyInjection] Dump XML using plain PHP, no DOM needed (nicolas-grekas)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Remove some implicit bool type juggling
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` Run high-deps tests on PHP 8.4
    - `fix` Fix tests
    - `fix`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `fix` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `feat` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix`  chore: PHP CS Fixer - update heredoc handling
    - `fix` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `feat` [DependencyInjection] Don’t autowire excluded services
    - `feat` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files
    - `feat` feature #61282 [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files (nicolas-grekas)
    - `feat` [DependencyInjection] Respect original service class when a proxy is defined
    - `fix` [DI]: removed unnecessary checks on `Definition`s and `Alias`es
    - `feat` [DependencyInjection] Allow adding resource tags using any config formats
    - `feat` feature #61536 [DependencyInjection] Allow adding resource tags using any config formats (nicolas-grekas)
    - `feat` [DependencyInjection] Parse attributes found on abstract classes for resource definitions
    - `feat` [DependencyInjection] Allow multiple `#[AsDecorator]` attributes
    - `feat` feature #61575 [DependencyInjection] Allow multiple `#[AsDecorator]` attributes (Jean-Beru)
    - `feat` [DependencyInjection] Optimize `AutowireRequiredMethodsPass`
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [DependencyInjection] Fix optimizing ClassExistenceResource
    - `other` [DependencyInjection] Minor optims
    - `test` [DependencyInjection] Add test case to ensure XML parse exception message includes filename and position
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `refactor` [DependencyInjection][Validator] Remove needless code
    - `fix` use the empty string instead of null as an array offset
    - `other` [DependencyInjection] Allow `Class::function(...)` and `global_function(...)` closures in PHP DSL for factories
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `ci` Merge branch &#039;6.4&#039; into 7.3
    - `other` [DependencyInjection] Improve services.schema.json
    - `feat` do not use deprecated PHPUnit features
    - `chore` [DependencyInjection] Handle returning arrays and config-builders from config files
    - `feat` feature #61885 [DependencyInjection] Handle returning arrays and config-builders from config files (nicolas-grekas)
    - `refactor` [DependencyInjection][Config][Routing] Deprecate using `$this` or the internal scope of the loader from PHP config files
    - `other` [DependencyInjection][Routing] Handle declaring services and routes using PHP arrays that follow the same shape as corresponding yaml files
    - `chore` [DependencyInjection][Routing] Deprecate XML configuration format
    - `other` [DependencyInjection] Deprecate ExtensionInterface::getXsdValidationBasePath() and getNamespace()
    - `feat` [DependencyInjection] Register a custom autoloader to generate `*Config` classes when they don&#039;t exist yet
    - `feat` bug #61940 [DependencyInjection] Register a custom autoloader to generate `*Config` classes when they don&#039;t exist yet (alexandre-daubois)
    - `fix` fix deprecation version
    - `feat` [DependencyInjection][Routing] Define array-shapes to help writing PHP configs using yaml-like arrays
    - `fix` [DependencyInjection][Routing] Fix nested config imports when returning PHP arrays
    - `refactor` [DependencyInjection] Split ImportsConfig and ParametersConfig out of ServicesConfig
    - `feat` [Config][DependencyInjection] Deprecate the fluent PHP format for semantic configuration
    - `test`  Add `TEST_GENERATE_FIXTURES=1` to generate fixtures in tests
    - `feat` [FrameworkBundle] Auto-generate `config/reference.php` to assist in writing and discovering app&#039;s configuration
    - `fix` [DependencyInjection] Fix FC with Config v8
    - `fix` [DependencyInjection] Fix FC layer with Config v8
    - `refactor` clean up legacy groups in tests
    - `fix` [DependencyInjection] Fix PHPDoc syntax for InstantiatorInterface
    - `fix` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **symfony/var-exporter**: v6.4.24 → v8.0.0-BETA1
    <details>
  <summary>📋 Show 99 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` [Components] Convert to native return types
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [VarDumper] Remove obsolete PHP version check
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [VarExporter] Drop support for partially initialized lazy object
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` fix merge
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `perf` [VarExporter] Improve performance when creating lazy objects
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Prefix all sprintf() calls
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `other` Update .gitattributes
    - `refactor` Remove unused code and unnecessary `else` branches
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `feat` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `feat` [VarExporter] Allow reinitializing lazy objects with a new initializer
    - `feat` CS: re-apply `trailing_comma_in_multiline`
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [VarExporter] Fix phpdoc of `LazyGhostTrait` and `LazyProxyTrait`
    - `refactor` Reduce common control flows
    - `feat` minor #58566 Reduce common control flows (alexandre-daubois)
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Various cleanups
    - `feat` [VarExporter] Leverage native lazy objects
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Remove unneeded use statements
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `docs` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `chore` Bump Symfony 8 to PHP &gt;= 8.4
    - `refactor` Remove deadcode after the bump to PHP &gt;= 8.4
    - `feat` [VarExporter] Remove `LazyGhostTrait` and `LazyProxyTrait` in favor of native lazy objects
    - `feat` Various CS fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `test` run tests using PHPUnit 11.5
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `feat` replace PHPUnit annotations with attributes
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `feat` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `fix` [VarExporter] Fix serializing classes with __serialize() returning unprefixed private properties
    - `other` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `chore` [VarExporter] Add support for exporting named closures
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `chore` -
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;7.4&#039; into 8.0
  
  </details>
  
- **symfony/event-dispatcher**: v6.4.24 → v7.4.0-BETA2
    <details>
  <summary>📋 Show 38 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` [Components] Convert to native return types
    - `refactor` [EventDispatcher] Revert native return types on EventSubscriberInterface
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Leverage ReflectionFunction::isAnonymous()
    - `security` [Console][EventDispatcher][Security][Serializer][Workflow] Add PHPDoc to attribute classes and properties
    - `feat` minor #51974 [Console][EventDispatcher][Security][Serializer][Workflow] Add PHPDoc to attribute classes and properties (alexandre-daubois)
    - `other` [Dotenv][ErrorHandler][EventDispatcher] Use CPP
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Prefix all sprintf() calls
    - `other` Update .gitattributes
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` replace assertEmpty() with stricter assertions
    - `feat` Don&#039;t enable tracing unless the profiler is enabled
    - `feat` Allow Symfony ^8.0
    - `test` run tests using PHPUnit 11.5
    - `feat` replace PHPUnit annotations with attributes
    - `test` run tests with PHPUnit 12.0 on PHP &gt;= 8.3
    - `feat` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Add support for union types on AsEventListener
    - `other` [EventDispatcher][FrameworkBundle] Rework union types on `#[AsEventListener]`
  
  </details>
  
- **symfony/event-dispatcher-contracts**: v3.5.1 → v3.6.0
    <details>
  <summary>📋 Show 2 commits</summary>

    - `test` make test case classes compatible with PHPUnit 10+
    - `chore` Merge branch &#039;7.1&#039; into 7.2
  
  </details>
  
- **symfony/filesystem**: v6.4.24 → v7.3.6
    <details>
  <summary>📋 Show 60 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `security` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` Remove BC layers related to new methods and new parameters
    - `chore` [Components] Convert to native return types
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Set `strict` parameter of `in_array` to true where possible
    - `feat` Code updates
    - `feat` minor #53073 Set `strict` parameter of `in_array` to true where possible (alexandre-daubois)
    - `refactor` [Filesystem][Finder][Form] Use CPP
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `other` [Filesystem] Add the readFile() method
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` fix tests on Windows
    - `feat` Remove unnecessary empty usages
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` update constraint
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Prefix all sprintf() calls
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `other` Update .gitattributes
    - `test` do not use uniqid() in tests
    - `fix` stop using uniqid() to create temporary files
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` CS: clean some whitespaces/indentation
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `test` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `other` [Filesystem] Unify logic for isAbsolute() in Path
  
  </details>
  
- **symfony/finder**: v6.4.17 → v7.4.0-BETA1
    <details>
  <summary>📋 Show 62 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `chore` [Components] Convert to native return types
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `chore` clean up method argument handling
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` DX: re-apply CS
    - `feat` [Filesystem][Finder][Form] Use CPP
    - `chore` chore: CS fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Remove extra space after full stop.
    - `feat` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `other` Update .gitattributes
    - `chore` Replace `TestCase::assertTrue(true)` with `TestCase::expectNotToPerformAssertions()`
    - `chore` Use CPP where possible
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` minor #57795 Use CPP where possible (alexandre-daubois)
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` stop using TestCase::iniSet()
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` Remove always true/false occurrences
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `feat` CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `feat` optimize `in_array` calls
    - `fix` Fix various bool-type coercions
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `test` run tests using PHPUnit 11.5
    - `fix` replace PHPUnit annotations with attributes
    - `fix` Remove some implicit bool type juggling
    - `fix`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `chore` chore(finder): add better type information using phpdoc
    - `feat` don&#039;t use a fixed date fixture when assertions depend on relative times
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **symfony/http-foundation**: v7.3.2 → v7.3.6
    <details>
  <summary>📋 Show 13 commits</summary>

    - `fix` fix session cookie options assertions on PHP 8.5
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` SQLSRV: Change column type from TEXT to STRING
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` use the empty string instead of null as an array offset
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Fix ord()-related PHP 8.5 deprecations
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [HttpFoundation] Fix issue where ServerEvent with &quot;0&quot; data is not sent
    - `feat` [HttpFoundation] Allow Request::setFormat() to override predefined formats
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [HttpFoundation] Fix parsing hosts and schemes in URLs
    - `feat` Merge branch &#039;6.4&#039; into 7.3
  
  </details>
  
- **symfony/http-kernel**: v7.3.1 → v7.3.6
    <details>
  <summary>📋 Show 45 commits</summary>

    - `chore` Update VERSION for 6.4.23
    - `chore` Bump Symfony version to 6.4.24
    - `chore` Update VERSION for 7.2.8
    - `chore` Bump Symfony version to 7.2.9
    - `chore` Bump Symfony version to 7.3.2
    - `feat` CS fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Fix various bool-type coercions
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Update VERSION for 6.4.24
    - `chore` Bump Symfony version to 6.4.25
    - `chore` Update VERSION for 7.3.2
    - `chore` Bump Symfony version to 7.3.3
    - `fix` Fix wrong boolean values
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [HttpKernel] #[MapUploadedFile] throws http exception on empty files array if argument not nullable nor has default value
    - `fix` bug #61381 [HttpKernel] #[MapUploadedFile] throws http exception on empty files array if argument not nullable nor has default value (hwawshy)
    - `chore` Update VERSION for 6.4.25
    - `chore` Bump Symfony version to 6.4.26
    - `chore` Update VERSION for 7.3.3
    - `chore` Bump Symfony version to 7.3.4
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `refactor` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [HttpKernel] Handle an array vary header in the http cache store for write
    - `feat` bug #61518 [HttpKernel] Handle an array vary header in the http cache store for write (philpichet)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `refactor` [HttpKernel] Refine Vary header check to skip special handling of &#039;Accept-Language&#039; when it&#039;s the only entry and &#039;_vary_by_language&#039; is `true` in `CacheAttributeListener`
    - `feat` bug #61368 [HttpKernel] Refine Vary header check to skip special handling of &#039;Accept-Language&#039; when it&#039;s the only entry and &#039;_vary_by_language&#039; is `true`  in `CacheAttributeListener` (santysisi)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Update VERSION for 6.4.26
    - `chore` Bump Symfony version to 6.4.27
    - `chore` Update VERSION for 7.3.4
    - `chore` Bump Symfony version to 7.3.5
    - `chore` [Console] ensure `SHELL_VERBOSITY` is always restored properly
    - `chore` Update VERSION for 6.4.27
    - `chore` Bump Symfony version to 6.4.28
    - `feat` Update VERSION for 7.3.5
    - `chore` Bump Symfony version to 7.3.6
    - `fix` [HttpFoundation] Fix parsing hosts and schemes in URLs
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Update VERSION for 7.3.6
  
  </details>
  
- **symfony/error-handler**: v6.4.23 → v7.3.6
    <details>
  <summary>📋 Show 113 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` [Lock] 7.0 remove deprecations in Lock Component
    - `feat` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` [Components] Convert to native return types
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Do not use hyphens in exception message
    - `feat` Fx README files
    - `fix` Fix typo
    - `style` DX: re-apply CS
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` [Dotenv][ErrorHandler][EventDispatcher] Use CPP
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` CS: enable ordered_types.null_adjustment=always_last
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` [HttpKernel] Increase log level to &quot;error&quot; at least for all PHP errors
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` minor #54046 [HttpKernel] Increase log level to &quot;error&quot; at least for all PHP errors (lyrixx)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Update the hyphenate character
    - `feat` minor #52511 [ErrorHandler] Do not use hyphens in exception message (jkrzefski, javiereguiluz)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Prefix all sprintf() calls
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` chore: CS fixes
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `other` Update .gitattributes
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Use CPP where possible
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [ErrorHandler] Fix `E_STRICT` logging level
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Fix multiple CS errors
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `feat` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `feat` Use Stringable whenever possible
    - `feat` minor #58094 Use Stringable whenever possible (fabpot)
    - `feat` CS: re-apply `trailing_comma_in_multiline`
    - `fix` Remove no-op `ReflectionProperty::setAccessible()` calls
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` resolve class constant types when patching return types
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` support non-empty-string/non-empty-list when patching return types
    - `feat` feature #59114 [ErrorHandler] support non-empty-string/non-empty-list when patching return types (xabbuh)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [ErrorHandler] Add a command to dump static error pages
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `other` Merge branch &#039;7.2&#039; into 7.3
    - `other` [ErrorHandler] Improve an error message
    - `chore` chore: PHP CS Fixer fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Fix php.net links
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` CS fixes
    - `fix` [Form][PhpUnitBridge] Remove usage of noop `ReflectionProperty::setAccessible()`
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `ci` [ErrorHandler] Improve PHPDoc precision in SerializerErrorRenderer
  
  </details>
  
- **symfony/var-dumper**: v6.4.23 → v7.4.0-BETA2
    <details>
  <summary>📋 Show 219 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` feature #50404 [7.0] Bump to PHP 8.2 minimum (nicolas-grekas)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` Remove BC layers related to new methods and new parameters
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` [Components] Convert to native return types
    - `feat` [VarDumper] Revert native return types on DataDumperInterface
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.3&#039; into 6.4
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Drop support for Twig 2
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Remove legacy Twig_ namespace support
    - `fix` fix typo
    - `chore` remove not needed method existance check
    - `feat` minor #52755 [VarDumper]  remove not needed method existance check (xabbuh)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` allow Twig 4
    - `feat` Code updates
    - `feat` [VarDumper] Added default message for dd function
    - `feat` feature #53123 [VarDumper] Added default message for dd function (Shamimul Alam)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Leverage ReflectionFunction::isAnonymous()
    - `style` DX: re-apply CS
    - `feat` minor #53322 Leverage ReflectionFunction::isAnonymous() (nicolas-grekas)
    - `chore` CS: trailing commas
    - `other` [Notifier][PropertyInfo][VarDumper] Remove unused code
    - `fix` [VarDumper] Fixes `Typed property Symfony\Component\VarDumper\Dumper\CliDumper::$colors must not be accessed before initialization`
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` [VarDumper] prevent error in value to Typed property must not be accessed before initialization
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [VarDumper] Add support for new DOM extension classes in `DOMCaster`
    - `feat` feature #54320 [VarDumper] Add support for new DOM extension classes in `DOMCaster` (alexandre-daubois)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` adapt namespace changes for new DOM extension classes
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` use constructor property promotion
    - `fix` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `feat` Add more precise types in reusable test cases
    - `feat` take the new DOM HTMLElement class into account
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `other` Update .gitattributes
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` replace uniqid() with random_bytes() to create identifiers
    - `fix` Fix multiple CS errors
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `feat` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `other` [PhpUnitBridge][Console][VarDumper] Add support for `FORCE_COLOR` environment variable
    - `feat` feature #57777 [VarDumper] Add support for `FORCE_COLOR` environment variable (artshade)
    - `ci` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [HttpClient] Add support for amphp/http-client v5
    - `feat` [VarDumper] Add support for virtual properties
    - `feat` feature #57833 [VarDumper] Add support for virtual properties (alexandre-daubois)
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `other` bump requirement for Twig to 3.12+
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` CS: re-apply `trailing_comma_in_multiline`
    - `feat` allow Twig 4
    - `fix` [VarDumper] Fix `DOMCaster` test dumps
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [VarDumper] Fix dumping `ext-dom` virtual properties
    - `feat` Remove useless parent method calls in tests
    - `docs` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` relax mock class name matching
    - `feat` minor #58374 Remove useless parent method calls in tests (alexandre-daubois)
    - `chore` revert allowing Twig 4
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [VarDumper] Add caster for AddressInfo objects
    - `chore` [VarDumper] Add caster for Socket instances
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [VarDumper] Add casters for object-converted resources
    - `feat` feature #59035 [VarDumper] Add casters for object-converted resources (alexandre-daubois)
    - `fix` [VarDumper] Fix dumped content type in `CurlCasterTest`
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `chore` chore: PHP CS Fixer fixes
    - `fix` [VarDumper] Don&#039;t make `CurlCasterTest` response status dependant
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `feat` replace expectDeprecation() with expectUserDeprecationMessage()
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [VarDumper] Remove unused code
    - `feat` Allow Symfony ^8.0
    - `fix` [VarDumper] Fix tests on PHP 8.4
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Tweak return type declarations and related CI checks
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Console] Simplify using invokable commands when the component is used standalone
    - `feat` Add support for adding more default castors to `AbstractCloner::addDefaultCasters()`
    - `fix` Fix ResourceCaster deprecation messages
    - `feat` GdImage objects are handled by GdCaster
    - `feat` minor #60810 [VarDumper] Fix ResourceCaster deprecation messages (derrabus)
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `other` [VarDumper] Remove duplicate default caster for Socket
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` feature #60480 [VarDumper] Add support for adding more default casters to `AbstractCloner::addDefaultCasters()` (lyrixx)
    - `other` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Various CS fixes
    - `feat` CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `fix` [VarDumper] Fix dumping on systems that don&#039;t have a working iconv
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [VarDumper][Serializer] Remove require php 8.2 from tests
    - `feat` Use unique identifier for RequestContextProvider
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `test` run tests using PHPUnit 11.5
    - `fix` Fix tests sensitive to SYMFONY_IDE env var
    - `fix` replace PHPUnit annotations with attributes
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `other` Merge branch &#039;7.3&#039; into 7.4
    - `feat` minor #61299 replace PHPUnit annotations with attributes (xabbuh)
    - `feat` CS
    - `fix` [VarDumper] Fix dumping objects from the DOM extension
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` run tests with PHPUnit 12.3
    - `feat` minor #61390  run tests with PHPUnit 12.3 (xabbuh)
    - `fix` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `fix`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `fix` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `feat` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix`  chore: PHP CS Fixer - update heredoc handling
    - `fix` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `feat` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `docs` Use &lt;info&gt; for options in command description
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `chore` [VarDumper] Select HtmlDumper only if `Accept` header contains &quot;html&quot;
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` do not coerce NAN to other types
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `feat` do not use deprecated PHPUnit features
    - `fix` [VarDumper] Fix dumping CurlHttpClient instances
    - `fix` bug #62182 [VarDumper] Fix dumping CurlHttpClient instances (nicolas-grekas)
  
  </details>
  
- **symfony/mailer**: v6.4.23 → v7.4.0-BETA1
    <details>
  <summary>📋 Show 179 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Make some classes final
    - `feat` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` [Components] Convert to native return types
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `other` [Mailer] Remove the Sendinblue bridge
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Mailer] Dispatch event for Postmark&#039;s &quot;inactive recipient&quot; API error
    - `feat` Fx README files
    - `other` [Mailer] Add Azure bridge
    - `feat` Set `strict` parameter of `in_array` to true where possible
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Mailer][Notifier] Simplify transport service registration + sorting
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` add Azure and Resend support to the UnsupportedSchemeException
    - `feat` register the ResendTransportFactory
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Mailer] [Smtp] Add DSN param &#039;auto_tls&#039; to disable automatic STARTTLS
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Mailer] Add timestamp to SMTP debug log
    - `feat` feature #53706 [Mailer] Add timestamp to SMTP debug log (bytestream)
    - `test` [Mailer] Simplify MailerTestCommand
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `chore` chore: CS fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Mailer] Add support for allowing some users even if `recipients` is defined in `EnvelopeListener`
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` use constructor property promotion
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `other` [Mailer] Add mailomat bridge
    - `feat` Prefix all sprintf() calls
    - `feat` Add more precise types in reusable test cases
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `feat` feature #57456 [Mailer] Add mailomat bridge (scuben)
    - `other` Update .gitattributes
    - `chore` Replace `TestCase::assertTrue(true)` with `TestCase::expectNotToPerformAssertions()`
    - `refactor` Remove unused code and unnecessary `else` branches
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `feat` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `chore` [Mailer] Implement Postal mailer
    - `feat` feature #57903 [Mailer] Implement Postal mailer (jonasclaes)
    - `feat` Add Sweego Mailer Bridge
    - `fix` Remove no-op `ReflectionProperty::setAccessible()` calls
    - `test` make test case classes compatible with PHPUnit 10+
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `other` [Mailer] add Mailtrap bridge
    - `test` deprecate the TransportFactoryTestCase
    - `feat` Add new accessors to help determine whether to use the SMTPUTF8 extension
    - `feat` Send SMTPUTF8 if the message needs it and the server supports it.
    - `fix` Fix minor spelling error.
    - `chore` Resolve code review comments from stof and oska
    - `test` Remove useless parent method calls in tests
    - `style` Code style conformance and dependency updates.
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` get rid of getInvocationCount() calls in tests
    - `fix` minor #58374 Remove useless parent method calls in tests (alexandre-daubois)
    - `feat` feature #58351 [Mailer] deprecate the TransportFactoryTestCase (xabbuh)
    - `feat` Reinstate the restriction that the sender&#039;s localpart must be all-ASCII.
    - `feat` feature #58361 [Mailer][Mime] Support unicode email addresses (arnt, OskarStark)
    - `fix` Fix typo
    - `ci` [Mailer] use microsecond precision SMTP logging
    - `feat` [Mailer][Notifier] Sweego is backing their bridges, thanks to them!
    - `chore` Proofread UPGRADE guide
    - `feat` Add retry_period option for email transport
    - `refactor` Simplify code
    - `other` [Mailer] Add AhaSend Bridge
    - `feat` feature #58698 [Mailer] Add AhaSend Bridge (farhadhf)
    - `fix` [Mailer] Fix AhaSend composer name
    - `feat` [Mailer] Add missing retry_period DSN option
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `chore` [Mailer][Notifier] Add and use `Dsn::getBooleanOption()`
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Mailer] [Smtp] Add DSN option to make SocketStream bind to IPv4
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `chore` [Mailer] Add configuration for dkim and smime signers
    - `feat` [Mailer] [Smtp] Add DSN param to enforce TLS/STARTTLS
    - `refactor` Refactor S/MIME encrypter to use certificate repository
    - `feat` replace assertEmpty() with stricter assertions
    - `feat` feature #59831 [Mailer][Mime] Refactor S/MIME encryption handling in `SMimeEncryptionListener` (Spomky)
    - `other` [Mailer][TwigBridge] Add support for translatable subject
    - `feat` feature #59967 [Mailer][TwigBridge] Add support for translatable subject (norkunas)
    - `fix` fix compatibility with TwigBridge &lt; 7.3
    - `fix` Revert &quot;fix compatibility with TwigBridge &lt; 7.3&quot;
    - `revert` Revert &quot;[Mailer][TwigBridge] Add support for translatable subject&quot;
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `other` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Mailer] [Transport] Allow exception logging for `RoundRobinTransport` mailer
    - `feat` feature #60110 [Mailer] [Transport] Allow exception logging for `RoundRobinTransport` mailer (jnoordsij)
    - `feat` Various CS fixes
    - `feat` CS fixes
    - `fix` Fix @var phpdoc
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Form][PhpUnitBridge] Remove usage of noop `ReflectionProperty::setAccessible()`
    - `test` run tests using PHPUnit 11.5
    - `feat` replace PHPUnit annotations with attributes
    - `fix` Fix inline var annotations
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` [Mailer] Add MicrosoftGraph API Transport
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `feat` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix`  chore: PHP CS Fixer - update heredoc handling
    - `fix` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `feat` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `fix` Fix low-deps tests
    - `feat` Add global lower bounds to deps on the CI
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `ci` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Mailer] Fix memory leak with `mailer.message_logger_listener`
    - `fix` bug #60515 [Mailer] Fix memory leak with `mailer.message_logger_listener` (andrew-demb)
    - `other` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Revert &quot;[Mailer] Fix memory leak with `mailer.message_logger_listener`&quot;
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Mailer] Fix parsing message ids in SMTP responses
    - `other` [Mailer] Relax regexp to parse message ids
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **doctrine/lexer**: 2.1.1 → 3.0.1
    <details>
  <summary>📋 Show 11 commits</summary>

    - `chore` Remove deprecation layer
    - `chore` Merge pull request #96 from greg0ire/remove-deprecation-layer
    - `chore` Remove rules related to BC layer
    - `chore` Trigger static analysis workflow on psalm* change
    - `chore` Merge pull request #97 from greg0ire/cleanup-psalm-rules
    - `perf` Merge remote-tracking branch &#039;origin/2.1.x&#039; into 2.1.x-merge-up-into-3.0.x_GyzLhYcQ
    - `chore` Merge pull request #104 from doctrine/2.1.x-merge-up-into-3.0.x_GyzLhYcQ
    - `chore` Drop support for php &lt; 8.1
    - `chore` Merge pull request #80 from greg0ire/php8-syntax
    - `chore` Merge branch &#039;2.1.x&#039; into 3.0.x
    - `chore` PHPUnit 10 (#117)
  
  </details>
  
- **symfony/mime**: v6.4.21 → v8.0.0-BETA1
    <details>
  <summary>📋 Show 138 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Lock] 7.0 remove deprecations in Lock Component
    - `feat` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `chore` [7.0] Cleanup legacy code paths
    - `feat` Set `strict` parameter of `in_array` to true where possible
    - `chore` Update .gitattributes
    - `feat` Code updates
    - `feat` minor #53119 Code updates (javiereguiluz)
    - `feat` minor #53073 Set `strict` parameter of `in_array` to true where possible (alexandre-daubois)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Use CPP - Mime component
    - `refactor` [Mime] Update mime types
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` feat: support custom encoders in mime parts
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` feature #54975 [Mime] Support custom encoders in mime parts (KDederichs)
    - `fix` Fix typo
    - `fix` fix test
    - `revert` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `other` [Mime] Tweak an exception to be more descriptive
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Prefix all sprintf() calls
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `other` Update .gitattributes
    - `refactor` Remove unused code and unnecessary `else` branches
    - `fix` Fix multiple CS errors
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `feat` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `feat` Remove useless code
    - `feat` minor #57868 Remove useless code (alexandre-daubois)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` remove constructor argument type-hint
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Mime] Cache finfo objects to reduce open file handles and optimize perf
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Add new accessors to help determine whether to use the SMTPUTF8 extension
    - `feat` Update src/Symfony/Component/Mime/Address.php
    - `chore` Resolve code review comments from stof and oska
    - `style` Code style conformance and dependency updates.
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `feat` feature #58361 [Mailer][Mime] Support unicode email addresses (arnt, OskarStark)
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Mime] Don&#039;t require passig the encoder name to TextPart
    - `feat` [Mime] Update mime types
    - `chore` chore: fix some typos
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Allow Symfony ^8.0
    - `chore` Bump Symfony 8 to PHP &gt;= 8.4
    - `fix` Fix php.net links
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `feat` CS fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Fix various bool-type coercions
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `test` run tests using PHPUnit 11.5
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `fix` replace PHPUnit annotations with attributes
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `fix` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `feat` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `feat` [HttpKernel][Mime][Serializer][String][Validator] Replace `__sleep/wakeup()` by `__(un)serialize()`
    - `fix` use the empty string instead of null as an array offset
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Fix ord()-related PHP 8.5 deprecations
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;7.4&#039; into 8.0
    - `feat` mime: remove obsolete property
  
  </details>
  
- **symfony/routing**: v6.4.22 → v7.3.6
    <details>
  <summary>📋 Show 143 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Remove BC layers related to new methods and new parameters
    - `feat` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` [Components] Convert to native return types
    - `chore` [Routing] Revert native return types on AnnotationClassLoader
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Routing] Remove Doctrine annotations support
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` feature #51082 [Routing] Remove Doctrine annotations support (derrabus)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `fix` Fix requiring symfony/deprecation-contracts in symfony/routing
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `other` [FrameworkBundle][Routing] Remove remaining deprecations
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` [7.0] Cleanup legacy code paths
    - `fix` [Routing] Fix requiring symfony/deprecation-contracts
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` minor #52176 [Routing] Fix requiring symfony/deprecation-contracts (fancyweb)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` [7.0] minor cleanup
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Fx README files
    - `feat` Set `strict` parameter of `in_array` to true where possible
    - `test` [Tests] Streamline
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` CS: trailing commas
    - `other` [FrameworkBundle][RemoteEvent][Routing][Scheduler] Add PHPDoc to attributes properties
    - `fix` Fix AttributeClassLoaderTestCase   + Added -&gt;setUp()   - Removed &#039;abstract&#039; so it&#039;d be picked up by Tests.   * Changed getNamespace() to full path Qualified Name.   * Rename file AttributeClassLoaderTestCase to AttributeClassLoaderTest and the class.
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` minor #51996 [FrameworkBundle][RemoteEvent][Routing][Scheduler] Add PHPDoc to attributes properties (alexandre-daubois)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `refactor` refactor(routing): use constructor property promotion
    - `feat` minor #54290 [Routing] Use constructor property promotion (PierreCapel)
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `ci` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Routing] Add `{foo:bar}` syntax to define a mapping between a route parameter and its corresponding request attribute
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` gracefully handle cases when no resolver is set
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `revert` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `feat` Add return type to __toString() methods
    - `fix` Remove useless uniqid in tempnam calls
    - `other` [Router] Remove dead is_object() check
    - `security` Merge branch &#039;6.4&#039; into 7.0
    - `security` Merge branch &#039;7.0&#039; into 7.1
    - `security` Merge branch &#039;7.1&#039; into 7.2
    - `other` Update .gitattributes
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` [PhpUnitBridge] Add ExpectUserDeprecationMessageTrait
    - `chore` Use CPP where possible
    - `feat` feature #54593 [PhpUnitBridge] Add `ExpectUserDeprecationMessageTrait` (derrabus)
    - `test` [Routing] Add tests for `Requirement::UUID_V7` &amp; `UuidV8`
    - `refactor` Remove unused code and unnecessary `else` branches
    - `fix` minor #57897 Remove unused code and unnecessary `else` branches (alexandre-daubois)
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `feat` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `feat` Remove useless code
    - `fix` minor #57868 Remove useless code (alexandre-daubois)
    - `feat` Use Stringable whenever possible
    - `feat` minor #58094 Use Stringable whenever possible (fabpot)
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` CS: re-apply `trailing_comma_in_multiline`
    - `feat` [Routing] Add the `Requirement::UID_RFC9562` constant
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Remove calls to getExpectedException()
    - `test` Remove useless parent method calls in tests
    - `docs` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` minor #58374 Remove useless parent method calls in tests (alexandre-daubois)
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Make `@var` occurrences consistent
    - `feat` Various CS fix for consistency
    - `chore` [Routing] Rename annotations to attribute in `AttributeClassLoader`
    - `feat` [DependencyInjection][Routing][HttpClient] Reject URIs that contain invalid characters
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` CS: re-apply trailing_comma_in_multiline
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `feat` [Routing] Validate &quot;namespace&quot; (when using `Psr4DirectoryLoader`)
    - `feat` minor #59189 [Routing] Validate &quot;namespace&quot; (when using `Psr4DirectoryLoader`) (Kocal)
    - `fix` fix test method parameter names
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Routing] Allow aliases in `#[Route]` attribute
    - `feat` feature #58819 [Routing] Allow aliases in `#[Route]` attribute (damienfern)
    - `other` [Routing] Add MONGODB_ID regex to requirement patterns
    - `chore` [Routing] Add alias in `{foo:bar}` syntax in route parameter
    - `feat` feature #59904 [Routing] Add alias in `{foo:bar}` syntax in route parameter (eltharin)
    - `fix` [Routing] Fix inline default `null`
    - `feat` CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `test` [Routing] Add test to validate that default value is allowed to not match requirement
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Routing] Don&#039;t rebuild cache when controller action body changes
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Routing] Fix matching the &quot;0&quot; URL
    - `other` Merge branch &#039;6.4&#039; into 7.3
  
  </details>
  
- **symfony/serializer**: v6.4.24 → v7.4.0-BETA2
    <details>
  <summary>📋 Show 250 commits</summary>

    - `refactor` [Serializer] rename the first parameter of ``NormalizerInterface::normalize`` from object to data because of type mixed
    - `feat` add missing deprecation contracts dependency
    - `feat` add test
    - `fix` bug #54851 [Serializer] Fixed &quot;Warning: Attempt to read property &quot;value&quot; on string&quot; (michaljusiega, xabbuh)
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` [Serializer] Fix denormalizing a collection of union types
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` use constructor property promotion
    - `fix` avoid calling undefined built-in is_*() functions
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Prefix all sprintf() calls
    - `fix` Update ClassMetadata.php
    - `chore` [Serializer] Use `SUPPORTED_TYPES` in Normalizers when available
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` chore: CS fixes
    - `feat` minor #57480 [Serializer] Small CS improvement in ClassMetadata (hbgamra)
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [Serializer] Fix access to wrong Type class
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [Serializer] Check if exception message in test is correct
    - `feat` forward exceptions caught in the AbstractObjectNormalizer
    - `refactor` [Serializer] [ObjectNormalizer] Use bool filter when FILTER_BOOL is set
    - `feat` bug #57541 [Serializer] [ObjectNormalizer] Use bool filter when FILTER_BOOL is set (Maximilian Zumbansen)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `feat` minor #54880 [Serializer] Rename object to data in ``NormalizerInterface::normalize`` (maxbeckers)
    - `feat` Remove useless uniqid in tempnam calls
    - `other` [Serializer] Raise correct exception in ArrayDenormalizer
    - `fix` [Serializer] Remove ArrayDenormalizer::setDenormalizer()
    - `chore` Update .gitattributes
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` do not use uniqid() for generating dev tool tokens
    - `refactor` Remove unused code and unnecessary `else` branches
    - `test` [Serializer] Rework `XmlEncoderTest`
    - `fix` minor #57897 Remove unused code and unnecessary `else` branches (alexandre-daubois)
    - `fix` Fix multiple CS errors
    - `fix` fix denormalizing mixed collection values
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `feat` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `fix` [Serializer] Remove useless calls to `func_get_arg()`
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` bug #57928 [Serializer] fix denormalizing mixed collection values (rynhndrcksn)
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `other` [Serializer][Translation] Deprecate passing a non-empty CSV escape char
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `ci` [Serializer] more precise type for CamelCaseToSnakeCaseNameConverter::$attributes
    - `fix` [Serializer] Fix CamelCaseToSnakeCaseNameConverterTest::testDenormalizeWithContext
    - `other` [Serializer] Add SnakeCaseToCamelCaseNameConverter
    - `feat` feature #58060 [Serializer] Add SnakeCaseToCamelCaseNameConverter (dunglas)
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Serializer] Support subclasses of `DateTime` and `DateTimeImmutable`
    - `feat` feature #57793 [Serializer] Support subclasses of `DateTime` and `DateTimeImmutable` (amcsi)
    - `feat` CS fixes
    - `feat` [Serializer][Uid] Add the `Uuid::FORMAT_RFC_9562` and `UidNormalizer::NORMALIZATION_FORMAT_RFC9562` constants
    - `fix` Fix `TemplateType` handling in `AbstractObjectNormalizer`
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` bug #58259 [TypeInfo] Return bound type as base type in `TemplateType` (valtzu)
    - `feat` Miscellaneous tests improvements
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Serializer] Introduce named serializers
    - `feat` feature #56823 [Serializer] Introduce named serializers (HypeMC)
    - `feat` Switch to ExpectUserDeprecationMessageTrait
    - `feat` Make more data providers static
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` fix tests
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [Serializer] Readd AdvancedNameConverterInterface to MetadataAwareNameConverter.
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` [Serializer] Deprecate `AdvancedNameConverterInterface`
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Remove unused imports
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `feat` minor #58303 Miscellaneous tests improvements (alexandre-daubois)
    - `feat` feature #58308 [Serializer] Deprecate `AdvancedNameConverterInterface` (mtarld)
    - `feat` Various CS fix for consistency
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` Reduce common control flows
    - `feat` [TypeInfo] Redesign Type methods and nullability
    - `other` [Serializer] Improve `AttributeLoader`
    - `refactor` [Serializer] Rename annotations to attributes in AttributeLoader
    - `feat` [Serializer] Revert default groups
    - `fix` fix support for phpstan/phpdoc-parser 2
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `fix` bug #58705 [Serializer] Revert Default groups (mtarld)
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` feature #57630 [TypeInfo] Redesign Type methods and nullability (mtarld)
    - `fix` prevent failures around not existing TypeInfo classes
    - `feat` [Serializer][PropertyInfo][Validator] TypeInfo 7.2 compatibility
    - `feat` bug #58870 [Serializer][Validator] prevent failures around not existing TypeInfo classes (xabbuh)
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [TypeInfo][Serializer][PropertyInfo][Validator] TypeInfo 7.1 compatibility
    - `chore` chore: fix some typos
    - `feat` CS: re-apply trailing_comma_in_multiline
    - `chore` Proofread UPGRADE guide
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `chore` [Serializer] Deprecate the `CompiledClassMetadataFactory`
    - `docs` [Serializer] Document `SerializerInterface` exceptions
    - `feat` Use spl_object_id() instead of spl_object_hash()
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `chore` chore: PHP CS Fixer fixes
    - `other` [Serializer] Add xml context option to ignore empty attributes
    - `feat` feature #58599 [Serializer] Add xml context option to ignore empty attributes (qdequippe)
    - `feat` Revert bad merge
    - `other` [Serializer] [ObjectNormalizer] Filter int when using FILTER_BOOL
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Serializer] register named normalizer &amp; denormalizer aliases
    - `feat` feature #59641 [Serializer] register named normalizer &amp; denormalizer aliases (mathroc)
    - `feat` [Serializer] Handle default context in named Serializer
    - `feat` Add `NumberNormalizer`
    - `chore` Correct all implementations of the NormalizerInterface to have the correct method signature
    - `feat` minor #59496 [Serializer] Correct all implementations of the `NormalizerInterface` to have the correct method signature (Kefisu)
    - `chore` clean up unused property
    - `test` separate NumberNormalizer tests per PHP extension
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` [Serializer] Fix deserializing XML Attributes into string properties
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `test` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Serializer] Add defaultType to DiscriminatorMap
    - `other` [Serializer] Add discriminator map to debug commmand output
    - `feat` feature #52749 [Serializer] Add discriminator map to debug commmand output (jschaedl)
    - `refactor` replace assertEmpty() with stricter assertions
    - `chore` chore: PHP CS Fixer fixes
    - `fix` [Serializer] Fix ObjectNormalizer default context with named serializers
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` add PHP version and extension that are required to run tests
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Allow Symfony ^8.0
    - `chore` [Serializer] improve phpdoc for normalizer
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `other` [Serializer] Remove unused variable
    - `feat` [FrameworkBundle] Allow using their name without added suffix when using #[Target] for custom services
    - `fix` [TypeInfo] Fix handling `ConstFetchNode`
    - `fix` bug #60820 [TypeInfo] Fix handling `ConstFetchNode` (norkunas)
    - `other` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` chore: Increase minimum version of type-info component
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Various CS fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` optimize `in_array` calls
    - `feat` [Serializer] add `can` to the accessor prefixes recognized by the `AttributeLoader`
    - `feat` feature #61023 [Serializer] add `can` to the accessor prefixes recognized by the `AttributeLoader` (Mark Schmale)
    - `feat` [VarDumper][Serializer] Remove require php 8.2 from tests
    - `feat` [Serializer] Add CDATA_WRAPPING_NAME_PATTERN support to XmlEncoder
    - `fix` Fix typos
    - `feat` feature #60355 [Serializer] Add `CDATA_WRAPPING_NAME_PATTERN` support to `XmlEncoder` (Maximilian Ruta)
    - `other` [Serializer] Add missing CHANGELOG entry
    - `other` [Serializer] Handle invalid mapping type property type
    - `feat` bug #60296 [Serializer] Handle invalid mapping type property type (KorvinSzanto)
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Serializer] Make data provider return type match its PHPDoc
    - `test` run tests using PHPUnit 11.5
    - `feat` replace PHPUnit annotations with attributes
    - `feat` CS fixes
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `fix`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `fix` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `fix`  chore: PHP CS Fixer - update heredoc handling
    - `fix` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `feat` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `refactor` [Serializer] Make `AttributeMetadata` and `ClassMetadata` final
    - `refactor` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
    - `refactor` [Validator][Serializer] Make internal properties private
    - `refactor` [Serializer] Replace Japan timezone with Asia/Tokyo
    - `feat` minor #61438 [Serializer] Replace Japan timezone with Asia/Tokyo (mttsch)
    - `feat` [Routing][Serializer] Deprecate annotation aliases and getters and setters in favor of public properties on attributes
    - `chore` [Serializer] Don&#039;t fallback to default serializer if tags specify a named one
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Validator] Skip tests using unavailable timezone on the local host
    - `other` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files
    - `fix` fix tests
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Serializer] Fix serializer crash due to asymmetric visibility on `protected(set)` properties
    - `fix` bug #61571 [Serializer] Fix dealing with asymmetric visilibity for properties (santysisi)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Serializer] Fix normalizing objects with accessors having the same name as a property
    - `feat` [Serializer] Allow using attributes to declare compile-time serialization metadata
    - `feat` [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Serializer] Adjust ObjectNormalizerTest for the accessor method changes from #61097
    - `fix` use the empty string instead of null as an array offset
    - `feat` minor #61662  use the empty string instead of null as an array offset (xabbuh)
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Serializer] add correct psalm and phpstan return types for `DenormalizerInterface`
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `feat` feature #61563 [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class (nicolas-grekas)
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `refactor` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [Serializer] Allows to instantiate property when creating a `NotNormalizableValueException`
    - `feat` minor #61279 [Serializer] Allows to instantiate property when creating a `NotNormalizableValueException` (VincentLanglet)
    - `fix` [Serializer] Fix unknown type in denormalization errors when union type used in constructor
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Serializer] Add `XmlEncoder::PRESERVE_NUMERIC_KEYS` context option
    - `fix` Fix various typo
    - `other` [Serializer] xml empty array encoding
    - `feat` do not use deprecated PHPUnit features
    - `feat` bug #61887 [Serializer] Fix discriminator class mapping with allow_extra_attributes=false
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Serializer] CsvEncoder to escape values starting with line feed when escape formulas is enabled
    - `fix` fix unexpected type in denormalization errors when union type used in constructor in xml
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `other` Merge branch &#039;7.3&#039; into 7.4
    - `feat` minor #61951 [Serializer] Escape values starting with line feed when using `csv_escape_formulas` (Peter Mead)
    - `feat` Move readonly keyword from class to properties
    - `feat` [Serializer] Allow forcing timezone in `DateTimeNormalizer` during denormalization
  
  </details>
  
- **symfony/validator**: v6.4.23 → v7.4.0-BETA2
    <details>
  <summary>📋 Show 250 commits</summary>

    - `fix` fix test setup and skip test until bug is fixed in PHP
    - `other` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `refactor` replace assertEmpty() with stricter assertions
    - `fix` [Validator] Fix docblock of `All` constraint constructor
    - `chore` chore: PHP CS Fixer fixes
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Validator] Don&#039;t skip `WhenTest` case after fix merge in `php-src`
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` [Validator] fix php doc
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `docs` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Don&#039;t enable tracing unless the profiler is enabled
    - `feat` [Validator] [WordCount] Treat 0 as one character word and do not exclude it
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `docs` docs: Update @param for $match to reflect the correct default value.
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `docs` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` let the SlugValidator accept AsciiSlugger results
    - `feat` bug #60426 [Validator] let the `SlugValidator` accept `AsciiSlugger` results (xabbuh)
    - `revert` Revert Slug constraint
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` feature #60475 [Validator] Revert Slug constraint (wouterj)
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` fix merge
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `test` [Validator] Add tests for `MacAddress`
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `chore` re-add accidentally removed changelog examples
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` fix merge
    - `other` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `other` [Validator] Add missing HasNamedArguments to some constraints
    - `revert` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` fix merge
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` chore: Increase minimum version of type-info component
    - `chore` deprecate handling options in the base Constraint class
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` feature #60801 [Validator] deprecate handling options in the base Constraint class (xabbuh)
    - `feat` Allow mixed root on CompoundConstraintTestCase validator
    - `feat` Various CS fixes
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Validator] Add missing Polish plural form for filename length validator
    - `fix` fix BC layer for Expression constraint from options array
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` CS fixes
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Fixed validator translations for Albanian
    - `fix` Fix @var phpdoc
    - `fix` bug #61106 Fix `@var` phpdoc (fabpot)
    - `fix` fix handling required options
    - `feat` optimize `in_array` calls
    - `fix` bug #61117 [Validator] fix handling required options (xabbuh)
    - `other` mark getRequiredOptions()/getDefaultOption() of UniqueEntity as deprecated
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Fix various bool-type coercions
    - `fix` minor #61103 Fix various bool-type coercions (Girgias)
    - `test` remove an invalid test
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `fix` fix merge
    - `feat` error if the fields option is missing for the Collection constraint
    - `fix` fix CS
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `fix` fix detecting missing required options
    - `chore` remove docblocks for deprecated argument types
    - `feat` [Validator] Add `min` and `max` in both error messages of `LengthValidator`
    - `feat` feature #60805 [Validator] Add `min` and `max` in both error messages of `LengthValidator` (VincentLanglet)
    - `docs` [Validator] review Persian translation for Twig template
    - `feat` [Validator] Add Japanese translation for Twig template validator
    - `ci` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` deprecate passing choices as $options argument to Choice constraint
    - `feat` feature #61255 [Validator] deprecate passing choices as `$options` argument to `Choice` constraint (xabbuh)
    - `test` run tests using PHPUnit 11.5
    - `feat` minor #61283 [Validator] Review Persian translation for Twig template (MMMahmoodian)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` replace PHPUnit annotations with attributes
    - `feat` minor #61299 replace PHPUnit annotations with attributes (xabbuh)
    - `feat` CS fixes
    - `fix` Fix wrong boolean values
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` (60474) Remove translation state attribute for Twig template validator in Ukrainian translation
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `other` [Validator] (60455) Validate translations for Arabic (ar)
    - `other` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` run tests with PHPUnit 12.3
    - `feat` minor #61390  run tests with PHPUnit 12.3 (xabbuh)
    - `fix` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `fix` Fix tests
    - `chore` Remove calls to no-op functions, deprecated in PHP 8.5
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix`  chore: PHP CS Fixer - update heredoc handling
    - `fix` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `refactor` More cleanups related to internal sleep/wakeup usages
    - `chore` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
    - `chore` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `test` [Validator] Optimize serialized metadata and cleanup tests
    - `refactor` [Validator][Serializer] Make internal properties private
    - `fix` Fix low-deps tests
    - `refactor` [Security][Validator] Review translations.
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Validator] Skip tests using unavailable timezone on the local host
    - `other` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [DI]: removed unnecessary checks on `Definition`s and `Alias`es
    - `feat` [Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files
    - `other` [Validator] Update Romanian translations
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `other` [Validator] Update translation for the Video constraint
    - `fix` fix Resources translations validators.pt.xlf
    - `refactor` refactor: Unify &amp; more humane translation message
    - `feat` [Validator] Add the Video constraint for validating video files
    - `feat` minor #61591 [Validator] Update translation for the Video constraint (nicolas-grekas)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Validator] Allow using attributes to declare compile-time constraint metadata
    - `feat` [Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class
    - `feat` fall back to legacy options handling if configured named arguments do not match
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` review the German translations
    - `fix` fix tests
    - `other` [Validator] review the French translations
    - `refactor` [DependencyInjection][Validator] Remove needless code
    - `other` [Validator] updated Dutch translations
    - `feat` minor #61648 [Validator] review the French translations (lyrixx)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `ci` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Review translations for Chinese (zh_TW)
    - `docs` [Validator] Review translations for Polish (pl)
    - `other` [Validator] Review Croatian translations
    - `other` [Validator] Review Turkish translations
    - `feat` minor #61670 [Validator] Review Turkish translations (invalid-email-address)
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `other` [Validator] Review Albanian translations
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `other` [Validator] Review Romanian translations
    - `feat` restore translation source entries
    - `feat` minor #61700 [Validator] Review Romanian translations (Florin1)
    - `other` [Validator] Review Slovak translations
    - `feat` minor #61704 [Validator] Review Slovak translations (fbuchlak)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `feat` feature #61545 [Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class (nicolas-grekas)
    - `feat` Update Arabic translations for video and image validation messages, native translations
    - `other` Merge branch &#039;6.4&#039; into 7.3
    - `other` Merge branch &#039;7.3&#039; into 7.4
    - `other` [Validator] Expression constraint docblock incorrectly states default value for negate
    - `other` [Validator] Add option to allow ANY protocol in Assert\Url constraint
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Remove useless comments
    - `other` [Validator] Reviewed and corrected Ukrainian translations for the Val…
    - `other` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` allow protocols to be passed as a string
    - `chore` deprecate implicit constraint option names in YAML/XML mapping files
    - `feat` feature #61791 [Validator] deprecate implicit constraint option names in YAML/XML mapping files (xabbuh)
    - `chore` deprecate passing an associative array to GroupSequence
    - `fix` do not coerce NAN to other types
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Validator] Review and fix Czech translation
    - `fix` [Validator] Fix Polish translation for word count validation message
    - `feat` [Validator] Improve and complete Japanese translations
    - `feat` minor #61871 [Validator] Improve and complete Japanese translations (GK-302)
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `ci` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Validator] bad value on AbstractComparison constructor using array parameter
    - `fix` bug #61909 [Validator] bad value on AbstractComparison constructor using array parameter (vincent4vx)
    - `fix` fix handling Doctrine-style options handling
    - `feat` [Translation] Update Danish (da) translations - Remove needs-review-translation state from validated translations in security.da.xlf and validators.da.xlf
    - `feat` Validator: finalize pt translations for video/image (ids 122–142); set state=translated; unify wording
    - `feat` minor #61937  Validator: finalize pt translations for video/image (ids 122–142); se… (benkarrer-lab)
    - `fix` bug #61926 [Validator] fix handling Doctrine-style options handling (xabbuh)
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Issue #51941 galician translation
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` issue fix #59412 catalan translation
    - `other` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Translation][sv] Remove needs-review on Swedish strings; align phrasing and punctuation
    - `fix` [Validator] it: approve video/image/Twig translations and fix spacing (refs #60464)
    - `feat` Improve Russian translations for video and image validators
    - `feat` Update Luxembourgish translations by removing &#039;needs-review-translation&#039; state from multiple entries in security and validator files.
    - `feat` minor #62021 [Translation][sv] Remove needs-review on Swedish strings; align phras… (Billy110984)
    - `fix` Fix Norwegian translations - remove needs-review-translation status
    - `fix` fix: added new indonesian translations
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` sync nb translations with no translations
    - `other` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Update regular expression in URL validator
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `docs` Reviewed translations
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` [Validator] Correct PHPDoc for Collection constructor
    - `fix` [Validator] Fix call to undefined getParser() in YamlValidator
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` fix merge
  
  </details>
  
- **symfony/translation-contracts**: v3.5.1 → v3.6.1
    <details>
  <summary>📋 Show 9 commits</summary>

    - `feat` Prefix all sprintf() calls
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `test` make test case classes compatible with PHPUnit 10+
    - `feat` Miscellaneous tests improvements
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` minor #58303 Miscellaneous tests improvements (alexandre-daubois)
    - `feat` CS fixes
    - `feat` [Translation] fix support of `TranslatableInterface` in `IdentityTranslator`
    - `feat` Merge branch &#039;6.4&#039; into 7.2
  
  </details>
  
- **symfony/process**: v6.4.24 → v7.4.0-BETA1
    <details>
  <summary>📋 Show 111 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` [Components] Convert to native return types
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` [Process] Pass the commandline as array to `proc_open()`
    - `feat` minor #52409 [Process] Pass the commandline as array to `proc_open()` (ausi)
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `test` [Tests] Streamline
    - `feat` minor #52402 [Tests] Streamline (OskarStark)
    - `feat` CS: enable ordered_types.null_adjustment=always_last
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` chore: CS fixes
    - `feat` feat(process): allow to ignore signals when executing a process
    - `fix` fix(process): don&#039;t call sigprocmask if there is no ignored signals
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` use constructor property promotion
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Process] `ExecutableFinder::addSuffix()` has no effect
    - `fix` Prefix all sprintf() calls
    - `feat` [Lock][Process] Replace `strtok` calls
    - `other` Update .gitattributes
    - `fix` Fix ProcessTest - testIgnoringSignal for local
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` replace uniqid() with random_bytes() to create identifiers
    - `other` [Process] Fix backwards compatibility for invalid commands
    - `other` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Process] Add Laravel Herd php detection path
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Make more data providers static
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `ci` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Remove unused imports
    - `chore` [Process] On Windows, don&#039;t rely on the OS to find executables
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` minor #58710 [Process] On Windows, don&#039;t rely on the OS to find executables (nicolas-grekas)
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `other` Merge branch &#039;7.1&#039; into 7.2
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `test` skip transient test on GitHub Actions
    - `test` skip transient test on GitHub Actions
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `other` [Messenger][Process] add `fromShellCommandline` to `RunProcessMessage`
    - `refactor` replace assertEmpty() with stricter assertions
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `other` [Process] Narrow `PhpExecutableFinder` return types
    - `feat` [Process] Improve typing for process callback
    - `test` run tests using PHPUnit 11.5
    - `feat` replace PHPUnit annotations with attributes
    - `fix` Fix wrong boolean values
    - `test` run tests with PHPUnit 12.1 on PHP &gt;= 8.3
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Remove some implicit bool type juggling
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `fix`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `fix` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `feat` [Process] Enhance hasSystemCallBeenInterrupted function for non-english locale
    - `feat` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Add missing return type for docblock Closure
  
  </details>
  
- **symfony/polyfill-iconv**: v1.31.0 → v1.33.0
    <details>
  <summary>📋 Show 1 commits</summary>

    - `feat` Various fixes and removed deprecations
  
  </details>
  
- **symfony/yaml**: v6.4.24 → v7.4.0-BETA1
    <details>
  <summary>📋 Show 92 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [7.0] Remove remaining deprecated code paths
    - `chore` [Components] Convert to native return types
    - `test` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Yaml] Allow Yaml component to get all the enum cases
    - `feat` Code updates
    - `test` [Tests] Streamline
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` dump enums with the !php/enum tag
    - `feat` feature #52230 [Yaml] Allow to get all the enum cases (phansys)
    - `feat` use constructor property promotion
    - `feat` Remove unnecessary empty usages
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Yaml] Throw on duplicate key even when value is NULL
    - `feat` Add more precise types for the Yaml flags
    - `feat` Prefix all sprintf() calls
    - `fix` [Yaml] Fix typo in changelog
    - `feat` Unify how --format is handle by commands
    - `feat` feature #57518 Unify how --format is handled by commands (fabpot)
    - `chore` Deprecate duplicate mapping keys containing null
    - `other` Update .gitattributes
    - `other` [PhpUnitBridge] Add ExpectUserDeprecationMessageTrait
    - `fix` Fix multiple CS errors
    - `feat` Remove useless code
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Yaml] Use CPP in `Dumper`
    - `docs` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` Remove always true/false occurrences
    - `feat` [Yaml] Add support for dumping `null` as an empty value by using the `Yaml::DUMP_NULL_AS_EMPTY` flag
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `feat` feature #58243 [Yaml] Add support for dumping `null` as an empty value by using the `Yaml::DUMP_NULL_AS_EMPTY` flag (alexandre-daubois)
    - `feat` [Yaml] Add compact nested mapping support to `Dumper`
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `feat` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `feat` [Yaml] Yaml::DUMP_COMPACT_NESTED_MAPPING does not apply when dumping sequences
    - `fix` bug #59671 [Yaml] Yaml::DUMP_COMPACT_NESTED_MAPPING does not apply when dumping sequences (xabbuh)
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `docs` [Yaml] Add the `Yaml::DUMP_FORCE_DOUBLE_QUOTES_ON_VALUES` flag to enforce double quotes around string values
    - `chore` chore: PHP CS Fixer fixes
    - `feat` feature #59880 [Yaml] Add the `Yaml::DUMP_FORCE_DOUBLE_QUOTES_ON_VALUES` flag to enforce double quotes around string values (dkarlovi)
    - `chore` make data provider static
    - `other` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `other` Merge branch &#039;6.4&#039; into 7.2
    - `other` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Console] Simplify using invokable commands when the component is used standalone
    - `feat` Various CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` optimize `in_array` calls
    - `fix` Fix typos
    - `test` run tests using PHPUnit 11.5
    - `feat` replace PHPUnit annotations with attributes
    - `fix` [Yaml] Fix code style
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` run tests with PHPUnit 12.3
    - `feat` minor #61390  run tests with PHPUnit 12.3 (xabbuh)
    - `fix` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `fix`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `fix` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `fix`  chore: PHP CS Fixer - update heredoc handling
    - `fix` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `chore` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `fix` [Yaml] Fix scope resolution operator in flow mapping keys
    - `feat` Merge branch &#039;6.4&#039; into 7.3
    - `feat` Merge branch &#039;7.3&#039; into 7.4
    - `fix` don&#039;t cast strings exceeding the min/max int ranges
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **twig/twig**: v3.20.0 → v3.22.0
    <details>
  <summary>📋 Show 155 commits</summary>

    - `chore` Bump version
    - `chore` Bump version to 3.21
    - `feat` Introduce operator classes to describe operators provided by extensions instead of arrays
    - `feat` Extract operators logic from ExpressionParser to their own classes
    - `feat` Add a script to update operator precedence documentation
    - `chore` Move Operators to ExpressionParsers, deprecate ExpressionParser
    - `feat` Add deprecation notices in CHANGELOG and docs
    - `fix` Fix precedence rules
    - `feat` Use generics in ExpressionParsers
    - `chore` Remove obsolete code
    - `fix` Fix CS
    - `fix` Fix version
    - `feat` feature #4543 Move operator definitions to objects (fabpot)
    - `fix` Fix cache-extra impl
    - `fix` bug #4579 Fix cache-extra impl (fabpot)
    - `fix` Avoid storing expression parser instances in Node attributes
    - `fix` Fix docs
    - `feat` minor #4578 Avoid storing expression parser instances in Node attributes (fabpot)
    - `feat` Add a proper prefix spread operator
    - `feat` feature #4580 Add a proper prefix spread operator (fabpot)
    - `fix` Fix CS
    - `feat` minor #4581 Fix CS (fabpot)
    - `feat` re-add mixed return type
    - `feat` minor #4582 re-add mixed return type (xabbuh)
    - `fix` fix the rst syntax of the operator precedence table
    - `feat` minor #4584 fix the rst syntax of the operator precedence table (xabbuh)
    - `fix` fix typo
    - `fix` minor #4587 fix typo (xabbuh)
    - `feat` Make `in_array()` calls strict
    - `feat` Make the defined test implementation more generic
    - `feat` Simplify Error implementation
    - `feat` minor #4592 Simplify Error implementation (fabpot)
    - `feat` feature #4590 Make the defined test implementation more generic (fabpot)
    - `fix` Fix testing and expression when it evaluates to an instance of Markup
    - `feat` feature #4591 Fix testing and expression when it evaluates to an instance of Markup (fabpot)
    - `feat` minor #4589 Make `in_array()` calls strict (alexandre-daubois)
    - `fix` Remove $templateName from Template::loadTemplate()
    - `refactor` Simplify code
    - `refactor` Simplify Error
    - `feat` minor #4593 Simplify code (fabpot)
    - `feat` minor #4594 Simplify Error (smnandre)
    - `feat` Improve error reporting
    - `feat` bug #4583 Remove template source from Template::loadTemplate() (fabpot)
    - `fix` bug #4595 Improve error reporting (fabpot)
    - `other` Sync Error file and line
    - `fix` bug #4598 Sync Error file and line (fabpot)
    - `fix` Fix Error when the trace has Twig file/line information instead of the original PHP info
    - `fix` bug #4599 Fix Error when the trace has Twig file/line information instead of the original PHP info (fabpot)
    - `test` Move some tests
    - `feat` minor #4600 Move some tests (fabpot)
    - `chore` Remove obsolete files
    - `docs` Remove obsolete comment
    - `chore` remove not needed code
    - `docs` Improve docs on creating new tags
    - `feat` minor #4601 Improve docs on creating new tags (fabpot)
    - `feat` Tweak Sandbox docs
    - `feat` Add tests
    - `refactor` Simplify code
    - `feat` minor #4603 remove not needed code (xabbuh, fabpot)
    - `fix` Avoid polluting ModuleNode::toString() with embedded templates
    - `feat` minor #4604 Avoid polluting ModuleNode::toString() with embedded templates (fabpot)
    - `feat` Add missing @deprecated tag
    - `refactor` reduce the number of deprecations being triggered
    - `feat` merge the Nodes and Node sections
    - `feat` minor #4606 merge the Nodes and Node sections (xabbuh)
    - `feat` minor #4605 reduce the number of deprecations being triggered (xabbuh)
    - `fix` Fix `ModuleNode` instanciation when `$embeddedTemplates` is null
    - `feat` minor #4607 Fix `ModuleNode` instanciation when `$embeddedTemplates` is null (alexandre-daubois)
    - `feat` use EmptyNode instead of an Nodes instance without children
    - `feat` minor #4608 use EmptyNode instead of an Nodes instance without children (xabbuh)
    - `docs` Use `:` instead of `=` for named argument in the docs
    - `feat` minor #4610 Use `:` instead of `=` for named argument in the docs (jdreesen)
    - `feat` Update html_cva.rst
    - `fix` fix: deprecated documentation
    - `feat` minor #4615 fix: deprecated documentation (Garfield-fr)
    - `docs` [Docs] Replace `=` by `:` in code examples
    - `fix` [Doc] Fix `code-block` in html_cva
    - `fix` fix: update extension references in docs to use backticks
    - `feat` minor #4618 fix: update extension references in docs to use backticks (smnandre)
    - `feat` minor #4617 [Doc] Fix `code-block` in html_cva (smnandre)
    - `feat` minor #4616 [Docs] Replace `=` by `:` in code examples (smnandre)
    - `fix` Fix wrong array index (again)
    - `fix` bug #4619 Fix wrong array index (again) (fabpot)
    - `feat` Create attributes `AsTwigFilter`, `AsTwigFunction` and `AsTwigTest` to ease extension development
    - `feat` feature #3916 Create attributes `AsTwigFilter`, `AsTwigFunction` and `AsTwigTest` to ease extension development (GromNaN)
    - `chore` Update CHANGELOG
    - `feat` minor #4621 Update CHANGELOG (andreybolonin)
    - `feat` minor #4613 Update html_cva.rst (seb-jean)
    - `docs` Tweaks html_cva docs
    - `feat` minor #4626 Tweaks html_cva docs (fabpot)
    - `chore` Prepare the 3.21.0 release
    - `chore` Bump version
    - `fix` Fix instantiation
    - `fix` Fix warning
    - `fix` bug #4633 Fix ExtensionSet usage of BinaryOperatorExpressionParser (VincentLanglet)
    - `feat` Update CHANGELOG
    - `chore` Prepare the 3.21.1 release
    - `chore` Bump version
    - `chore` Update reduce.rst
    - `feat` Add TwigCsFixer in tools list
    - `feat` minor #4639 [Docs] Add TwigCsFixer in tools list (smnandre)
    - `chore` replace typographic quote with straigt single quote
    - `feat` minor #4640 replace typographic quote with straigt single quote (xabbuh)
    - `feat` minor #4638 Update reduce.rst (AndCycle)
    - `feat` Update configuration keys + allow extra keys for extensions
    - `feat` feature #4642 [CommonMark] Update configuration keys + allow extra keys for extensions (doekenorg)
    - `docs` Update templates.rst: Removing duplication
    - `feat` minor #4645 Update templates.rst: Removing duplication (ThomasLandauer)
    - `chore` Stof suggestion about empty content
    - `feat` minor #4649 Coding standard suggestion about empty content (VincentLanglet)
    - `other` Update LeagueMarkdown.php
    - `feat` Add documentation for use_yield option
    - `feat` minor #4660 Add documentation for use_yield option (hschletz)
    - `fix` Fix compatibility with Symfony 8
    - `fix` bug #4665 Fix compatibility with Symfony 8 (nicolas-grekas)
    - `feat` Escaper performance: avoid static variables
    - `feat` minor #4663 Escaper performance: avoid static variables (gharlan)
    - `feat` Enable Fabbot as a GHA
    - `feat` CS fixes
    - `feat` minor #4664 CS fixes (nicolas-grekas)
    - `feat` minor #4671 Enable Fabbot as a GHA (nicolas-grekas)
    - `feat` bug #4653 Allow usage of other Markdown converters than CommonMark in LeagueMarkdown (xJuvi)
    - `chore` #4677: Add use statements for classes referenced in the getOperators @psalm-return doc
    - `fix` Fix wrong rounding_mode values
    - `fix` minor #4682 Fix wrong rounding_mode documentation (bodendorfer-simplethings)
    - `feat` minor #4678 Add missing use statements in ExtensionInterface (KevinVanSonsbeek)
    - `fix` Fix compatibility layer
    - `fix` bug #4683 Fix compatibility layer (fabpot)
    - `feat` Add note to format_datetime explaining how to install required extensions
    - `feat` minor #4685 Add note to format_datetime explaining how to install required extensions (LucileDT)
    - `fix` Avoid errors when failing to guess the template info for an error
    - `feat` bug #4688 Avoid errors when failing to guess the template info for an error (stof)
    - `other` Improve documentation examples for `enum` and `enum_cases`
    - `feat` minor #4690 Improve documentation examples for `enum` and `enum_cases` (Kocal)
    - `chore` Bump version
    - `feat` Support two words test guard
    - `feat` feature #4689 Support two words test guard (VincentLanglet)
    - `chore` Bump minimum Commonmark requirement
    - `feat` minor #4691 Bump minimum Commonmark requirement (fabpot)
    - `fix` Fix intl test
    - `feat` minor #4692 Fix intl test (fabpot)
    - `feat` Introduce registerUndefinedTestCallback
    - `feat` feature #4687 Introduce registerUndefinedTestCallback (VincentLanglet)
    - `fix` Compile &#039;index&#039; with repr (not string) in EmbedNode
    - `other` [Doc] Tweaks in the escaping article
    - `feat` bug #4693 Compile &#039;index&#039; with repr (not string) in EmbedNode (smnandre)
    - `feat` minor #4694 [Doc] Tweaks in the escaping article (javiereguiluz)
    - `docs` Update replace.rst
    - `feat` minor #4695 Update replace.rst (cyphix333)
    - `docs` Update inky_to_html.rst: Updating link
    - `feat` minor #4699 Update inky_to_html.rst: Updating link (ThomasLandauer)
    - `fix` Fix accessing arrays with stringable objects as key
    - `fix` bug #4704 Fix accessing arrays with stringable objects as key (nicolas-grekas)
    - `chore` Update CHANGELOG
    - `chore` Prepare the 3.22.0 release
  
  </details>
  
- **doctrine/annotations**: 1.14.4 → 2.0.2
    <details>
  <summary>📋 Show 27 commits</summary>

    - `chore` Drop Lexer 1
    - `chore` Merge pull request #465 from greg0ire/drop-lexer-1
    - `chore` Remove deprecated APIs (#468)
    - `chore` Bump PHP to 7.2
    - `feat` Merge pull request #467 from greg0ire/param-type-declarations
    - `chore` Allow doctrine/lexer 3
    - `chore` Merge pull request #466 from greg0ire/allow-lexer-3
    - `chore` Remove SimpleAnnotationReader (#469)
    - `chore` Remove NamedArgumentConstructorAnnotation interface (#470)
    - `chore` Remove deprecated method
    - `chore` Merge pull request #471 from greg0ire/drop-deprecated-method
    - `chore` Update branch metadata for documentation
    - `feat` Merge pull request #477 from greg0ire/update-branch-metadata
    - `other` Merge branch &#039;1.14.x&#039; into 2.0.x
    - `fix` Update README.md - fix 404 (link to doctrine-project website) (#481)
    - `feat` Add hint to use PsrCachedReader instead of `CachedReader` and `FileCacheReader`
    - `other` Merge pull request #483 from alexander-schranz/patch-1
    - `feat` Add psalm.xml to .gitattributes
    - `chore` Address coding standard issues
    - `other` Merge pull request #484 from VincentLanglet/patch-1
    - `chore` Mark project as inactive
    - `chore` Merge pull request #489 from greg0ire/inactive
    - `chore` Merge remote-tracking branch &#039;origin/1.14.x&#039; into 2.0.x
    - `chore` Merge pull request #496 from greg0ire/2.0.x
    - `other` Merge branch &#039;1.14.x&#039; into 2.0.x
    - `other` Merge branch &#039;1.14.x&#039; into 2.0.x
    - `fix` Merge branch &#039;1.14.x&#039; into 2.0.x
  
  </details>
  
- **guzzlehttp/guzzle**: 7.9.3 → 7.10.0
    <details>
  <summary>📋 Show 4 commits</summary>

    - `feat` Add PHP 8.5 support (#3300)
    - `chore` Remove obsolete reference capturing of `$http_response_header` (#3294)
    - `chore` Use the `http_get_last_response_headers` function (#3301)
    - `chore` Release 7.10.0
  
  </details>
  
- **guzzlehttp/promises**: 2.2.0 → 2.3.0
    <details>
  <summary>📋 Show 2 commits</summary>

    - `feat` [2.3] PHP 8.5 support (#183)
    - `feat` Release 2.3.0
  
  </details>
  
- **guzzlehttp/psr7**: 2.7.1 → 2.8.0
    <details>
  <summary>📋 Show 4 commits</summary>

    - `fix` [2.8] Add PHP 8.5 support (#628)
    - `other` [2.8] Allow empty lists as header values (#625)
    - `feat` Update README.md
    - `feat` Release 2.8.0
  
  </details>
  
- **masterminds/html5**: 2.9.0 → 2.10.0
    <details>
  <summary>📋 Show 15 commits</summary>

    - `fix` Just a quick typo fix.
    - `fix` Merge pull request #248 from citricguy/hex-typo
    - `chore` Bump actions/checkout version
    - `feat` Add PHP 8.4 to CI config
    - `chore` Bump actions/checkout version
    - `feat` Apply cs fixer v2.19.3
    - `fix` Merge pull request #255 from W0rma/fix-cs
    - `chore` Merge pull request #256 from W0rma/php84
    - `fix` fix(Tokenizer): ignore duplicate attributes
    - `test` test(Tokenizer): add tests for duplicate attribute validation
    - `fix` Merge pull request #258 from Link1515/fix/duplicate-attributes
    - `fix` Address php-cs-fixer remarks
    - `feat` minor #260 Address php-cs-fixer remarks (ohader)
    - `feat` Ensure empty inline svg and math tags are serialized as void tags
    - `chore` Merge pull request #259 from ohader/void-svg-math-tags
  
  </details>
  
- **symfony/psr-http-message-bridge**: v6.4.24 → v7.4.0-BETA1
    <details>
  <summary>📋 Show 38 commits</summary>

    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [PsrHttpMessageBridge] Remove HttpFoundation 5.4 compat code
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Remove unnecessary empty usages
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `other` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `fix` Remove redundant check
    - `feat` minor #57610 [PsrHttpMessageBridge] Remove a redundant check in HttpFoundationFactory class (seriquynh)
    - `feat` Remove uniqid() from tempnam() calls
    - `test` do not use uniqid() in tests
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `refactor` Remove unused code and unnecessary `else` branches
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Remove unused imports
    - `feat` Allow Symfony ^8.0
    - `fix` Fix typos in documentation and code comments
    - `feat` Remove legacy config for disabling annotations
    - `test` run tests using PHPUnit 11.5
    - `feat` replace PHPUnit annotations with attributes
    - `fix`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
  
  </details>
  
- **composer/semver**: 3.4.3 → 3.4.4
    <details>
  <summary>📋 Show 2 commits</summary>

    - `fix` Fix phpstan error
    - `other` SemVer: list return types (#171)
  
  </details>
  
- **pear/archive_tar**: 1.5.0 → 1.6.0
    <details>
  <summary>📋 Show 22 commits</summary>

    - `feat` add older PHP5&#039;s since pear/composer allow back to 5.4
    - `other` Merge pull request #1 from ashnazg/testing
    - `chore` Merge pull request #49 from ashnazg/master
    - `test` adding tests for big files
    - `feat` unpack size from the binary header with the older &#039;a&#039; format
    - `test` much much smaller test archive for big file using bz2
    - `test` bz2 works with github tests so remove much bigger gz archive
    - `chore` try same format for all PHP verisons
    - `feat` Revert &quot;try same format for all PHP verisons&quot;
    - `chore` try Z for PHP &lt; 5.5
    - `revert` Revert &quot;try Z for PHP &lt; 5.5&quot;
    - `chore` Merge pull request #51 from mcdruid/fix_big_files
    - `fix` Fix return value of _writeBlock
    - `feat` add very simple test to ensure tarballs can be created
    - `chore` remove old PHP 5 and add new PHP 8 versions
    - `fix` Remove gzopen/gztell/gzseek shim
    - `chore` Merge pull request #56 from mcdruid/update_php_versions
    - `fix` Merge pull request #54 from mcdruid/create_test
    - `fix` Merge pull request #53 from Super-Visions/fix/write_return
    - `chore` Merge pull request #58 from mcdruid/remove_php5_shim
    - `chore` prep for 1.6.0
    - `chore` Merge pull request #59 from ashnazg/rel-1.6
  
  </details>
  
- **mck89/peast**: v1.17.2 → v1.17.4
    <details>
  <summary>📋 Show 10 commits</summary>

    - `fix` Fix PHP 8.5 compatibility
    - `fix` Merge pull request #72 from andypost/php85
    - `fix` Fixed unsupported syntax on older php versions
    - `test` Test upcoming php 8.5
    - `feat` Changelog and marked new release
    - `refactor` Avoid warning in PHP 8.5 when converting to int a number that is outside the int limit
    - `feat` Older php versions don&#039;t have PHP_INT_MIN and PHP_INT_MAX constants
    - `feat` Cast by default if INT constants are not defined
    - `fix` Seems that in older version only the MIN constant is not defined
    - `chore` Changelog and version
  
  </details>
  
- **sebastian/diff**: 4.0.6 → 7.0.0
    <details>
  <summary>📋 Show 250 commits</summary>

    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `feat` Update PHPUnit configuration
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Bump copyright year
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `feat` Remove deprecated totallyTyped attribute
    - `chore` Update tools
    - `chore` Update tools
    - `feat` Convert deprecations to exceptions
    - `chore` Cleanup
    - `fix` Fix issues identified by Psalm
    - `fix` Fix CS/WS issues
    - `chore` Update ChangeLog
    - `refactor` Simplify
    - `feat` Use str_ends_with() instead of substr()
    - `feat` Improve comments (hopefully)
    - `feat` Declare property type
    - `perf` Remove superfluous escape
    - `other` Use ?-&gt; operator
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Cleanup
    - `test` Test with PHP 8.2
    - `chore` Bump
    - `chore` Update tools
    - `chore` Drop support for PHP 8.0
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Rename development branch
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `feat` Restrict token permissions
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Fix CS/WS issues
    - `fix` Revert &quot;Fix CS/WS issues&quot;
    - `revert` Revert &quot;Update tools&quot;
    - `chore` Update tools
    - `fix` Fix CS/WS issues
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Do not use deprecated/removed attributes
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Fix CS/WS issues
    - `fix` Fix/Tweak
    - `test` Test with PHP 8.3
    - `chore` Reformat so that tools recognize the license
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Fix StrictUnifiedDiffOutputBuilder README example
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `other` Update Psalm baseline
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Fix CS/WS issues
    - `feat` Declare parameter types
    - `refactor` Make data provider methods static (and use attribute instead of annotation)
    - `other` Update Psalm baseline
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Bump copyright year
    - `chore` Update ChangeLog
    - `feat` Update PHP-CS-Fixer configuration
    - `fix` Fix CS/WS issues
    - `feat` Use attributes instead of annotations
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update badges
    - `chore` Update tools
    - `fix` Fix CS/WS issues
    - `feat` Add Security Policy
    - `chore` Prepare release
    - `security` Update security policy
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Do not cache dependencies installed with Composer
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Use PHP 8.2
    - `chore` Update tools
    - `feat` Add link to security policy
    - `chore` Update tools
    - `chore` Set COMPOSER_ROOT_VERSION
    - `other` Parser: 0 is valid range
    - `fix` Parser: isset($match[&#039;startrange&#039;]) was always true
    - `fix` Fix
    - `chore` Prepare release
    - `feat` Tweak
    - `docs` readme: added note about Git diffs
    - `chore` Update tools
    - `chore` Update tools
    - `feat` Update PHP-CS-Fixer configuration
    - `fix` Fix CS/WS issues
    - `perf` Perf optimize MemoryEfficientLongestCommonSubsequenceCalculator
    - `chore` Prepare release
    - `feat` Improve performance of TimeEfficientLongestCommonSubsequenceCalculator
    - `chore` Prepare release
    - `chore` Update tools
    - `chore` Update PHPUnit configuration
    - `feat` Update Psalm configuration
    - `chore` Bump
    - `feat` Rename methods
    - `feat` Narrow types
    - `feat` Implement SebastianBergmann\Diff\Line::isAdded(), SebastianBergmann\Diff\Line::isRemoved(), and SebastianBergmann\Diff\Line::isUnchanged()
    - `feat` Improve code coverage metadata
    - `test` Improve test names
    - `feat` Implement IteratorAggregate
    - `fix` Fix CS/WS issue
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `test` Test with PHP 8.4
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Use PHP 8.3
    - `chore` Prepare release
    - `chore` Start development of next major version
    - `test` Do not use deprecated TestCase::iniSet() method
    - `feat` Use attributes
    - `fix` Do not use deprecated TestCase::iniSet() method
    - `feat` Use attributes
    - `fix` Remove deprecated functionality
    - `chore` Bump
    - `ci` Use more specific string functions
    - `perf` Remove superfluous annotations
    - `feat` Update PHP-CS-Fixer configuration
    - `fix` Fix CS/WS issues
    - `chore` Suppress PhpStorm warning
    - `chore` Merge branch &#039;5.1&#039;
    - `chore` Bump copyright year
    - `chore` Merge branch &#039;5.1&#039;
    - `chore` Bump
    - `other` Merge branch &#039;5.1&#039;
    - `chore` Prepare release
    - `chore` Do not use implicitly nullable parameters and prepare release
    - `chore` Do not use implicitly nullable parameters and prepare release
    - `other` Create release when tag is pushed
    - `other` Merge branch &#039;5.1&#039;
    - `feat` Allow write operations
    - `feat` Include package name in release name
    - `other` Merge branch &#039;5.1&#039;
    - `chore` Ignore build directory
    - `other` Merge branch &#039;5.1&#039;
    - `chore` Use PHPStan instead of Psalm
    - `chore` Update PHPUnit configuration
    - `feat` Narrow types
    - `feat` Lower level for now
    - `chore` Remove Psalm type coverage badge
    - `feat` Remove .gitignore entry for Psalm cache
    - `chore` Prepare release
    - `fix` Fix some phpstan findings
    - `fix` Fix CS/WS issues
    - `feat` Use CoversTrait instead of CoversClass
    - `chore` Update badge URL
    - `feat` Use Xdebug
    - `chore` Merge branch &#039;5.1&#039;
    - `other` Update Codecov.io action(s)
    - `chore` Update tools
    - `feat` Closes #125
    - `feat` Enable strict interpretation of scalar type declarations in example
    - `fix` Fix whitespace
    - `refactor` Simplify
    - `feat` Bump
    - `feat` Set COMPOSER_ROOT_VERSION to X.Y.x-dev instead of X.Y-dev
    - `chore` Update PHPUnit configuration
    - `other` Merge branch &#039;5.1&#039;
    - `test` Test with PHP 8.5
    - `other` Merge branch &#039;5.1&#039;
    - `chore` Update tools
    - `feat` Update PHP-CS-Fixer configuration
    - `fix` Fix CS/WS issue
    - `fix` Fix issues indentifed by PHPStan 2
    - `feat` Add documentation on how to contribute
    - `fix` Fix code coverage metadata
    - `chore` Update tools
    - `chore` Bump copyright year
    - `other` Merge branch &#039;5.1&#039;
    - `chore` Update tools
    - `chore` Start development of next major version
    - `feat` Update PHPUnit configuration
    - `chore` Update dependencies
    - `feat` Update PHPUnit configuration
    - `chore` Prepare release
  
  </details>
  
- **league/csv**: 9.24.1 → 9.27.1
    <details>
  <summary>📋 Show 20 commits</summary>

    - `feat` Assure DOMDocument::createTextNode() receives a string (#567)
    - `fix` Fix JsonConverterTest #568
    - `docs` Update documentation
    - `feat` Adding ndjson support in the JsonConverter
    - `feat` Improve NDJson support
    - `fix` Fix github action on PHP8.4 for phpstan
    - `fix` Fix markdown documentation
    - `chore` Prepare next release
    - `chore` Prepare next release
    - `fix` Fix warning handling in the package
    - `feat` Improve NDJson encoding feature
    - `feat` Adding support for TabularDataProvider and TabularData on Converters
    - `feat` Adding support for TabularDataProvider and TabularData on Writer
    - `chore` Prepare next release
    - `feat` Simplify Reader and Writer instantiation
    - `docs` Update documentation with new static methods usage
    - `chore` Prepare next release
    - `chore` Prepare next release
    - `feat` Improve AbstractCsv::download implementation #569
    - `chore` prepare next release
  
  </details>
  
- **doctrine/inflector**: 2.0.10 → 2.1.0
    <details>
  <summary>📋 Show 95 commits</summary>

    - `chore` master is now 2.1.x-dev
    - `chore` Merge pull request #150 from doctrine/2.0.x-merge-up-into-master_5eb936a2997a33.26919477
    - `chore` Merge pull request #160 from doctrine/2.0.x-merge-up-into-master_5ecc2b133d20d0.86431431
    - `chore` Merge pull request #165 from doctrine/2.0.x-merge-up-into-master_5ed1281097a7b7.73136187
    - `chore` Merge pull request #168 from doctrine/2.0.x
    - `chore` Merge pull request #175 from doctrine/2.0.x
    - `other` Merge remote-tracking branch &#039;origin/2.0.x&#039;
    - `other` Merge remote-tracking branch &#039;origin/2.0.x&#039; into master
    - `chore` Merge pull request #182 from doctrine/2.0.x
    - `chore` Merge pull request #191 from doctrine/2.0.x-merge-up-into-2.1.x_qqGoVa8U
    - `chore` Merge release 2.0.5 into 2.1.x (#203)
    - `chore` Merge release 2.0.6 into 2.1.x (#210)
    - `feat` Add support for Esperanto
    - `feat` Merge pull request #213 from RobinvanderVliet/2.0.x
    - `chore` Merge pull request #215 from doctrine/2.0.x
    - `other` Merge pull request #220 from doctrine/2.0.x-merge-up-into-2.1.x_mR7yk9Ms
    - `other` Merge pull request #224 from doctrine/2.0.x-merge-up-into-2.1.x_tZMQjWj7
    - `chore` Merge pull request #242 from doctrine/2.0.x-merge-up-into-2.1.x_9obhxGeY
    - `chore` Merge pull request #244 from doctrine/2.0.x-merge-up-into-2.1.x_ZcxM93zp
    - `chore` Upgrade CI workflow to v5
    - `chore` Setup Dependabot for Github actions
    - `chore` Merge pull request #248 from greg0ire/setup-dependabot
    - `chore` Bump doctrine/.github from 2.1.0 to 5.0.1
    - `chore` Bump actions/checkout from 3 to 4
    - `chore` Merge pull request #250 from doctrine/dependabot/github_actions/actions/checkout-4
    - `chore` Merge pull request #249 from doctrine/dependabot/github_actions/doctrine/dot-github-5.0.1
    - `fix` Fix wrong pluralization of &quot;stadium&quot;
    - `feat` Remove duplicated &quot;medium&quot; from English irregular list
    - `refactor` Sort list of English irregulars
    - `fix` Merge pull request #251 from thrashzone13/2.0.x
    - `chore` Remove references to non-existent directory
    - `test` Analyze test directory
    - `other` Merge pull request #252 from greg0ire/remove-common-refs
    - `test` Merge pull request #253 from greg0ire/analyze-tests
    - `chore` Use a shallow tree
    - `chore` Merge pull request #254 from greg0ire/shallow-tree
    - `feat` Normalize composer.json
    - `feat` Explicitly configure Psalm
    - `chore` Remove unused private property
    - `chore` Merge pull request #255 from greg0ire/maintenance
    - `fix` Fix wrong singularization of &#039;nurseries&#039;
    - `feat` Correct singularization of bois
    - `other` Merge pull request #257 from vdauchy/singular-bois
    - `feat` Correct singularization of mas
    - `feat` singular-locaux
    - `chore` Merge pull request #259 from vdauchy/singular-locaux
    - `chore` Merge pull request #258 from vdauchy/singular-mas
    - `chore` Bump doctrine/.github from 5.0.1 to 5.1.0 (#260)
    - `chore` Bump doctrine/.github from 5.1.0 to 5.2.0 (#261)
    - `chore` Bump doctrine/.github from 5.2.0 to 5.3.0
    - `chore` Merge pull request #262 from doctrine/dependabot/github_actions/doctrine/dot-github-5.3.0
    - `chore` Drop Psalm
    - `chore` Merge pull request #264 from greg0ire/drop-psalm
    - `chore` Bump doctrine/.github from 5.3.0 to 6.0.0
    - `chore` Merge pull request #263 from doctrine/dependabot/github_actions/doctrine/dot-github-6.0.0
    - `chore` Bump doctrine/.github from 6.0.0 to 7.1.0
    - `chore` Merge pull request #265 from doctrine/dependabot/github_actions/doctrine/dot-github-7.1.0
    - `feat` Create website schema validation workflow
    - `chore` Merge pull request #267 from SenseException/website-schema
    - `chore` Bump doctrine/.github from 7.1.0 to 7.2.0
    - `chore` Merge pull request #268 from doctrine/dependabot/github_actions/doctrine/dot-github-7.2.0
    - `chore` Bump doctrine/.github from 7.2.0 to 7.2.1 (#269)
    - `chore` Bump doctrine/.github from 7.2.1 to 7.2.2
    - `other` Merge remote-tracking branch &#039;origin/2.0.x&#039; into 2.1.x
    - `chore` Merge pull request #278 from greg0ire/2.1.x
    - `feat` Add italian rules
    - `feat` Merge pull request #276 from f-liva/2.0.x
    - `fix` Merge pull request #256 from thrashzone13/2.0.x
    - `chore` Correct pluralization of die
    - `chore` Merge pull request #270 from doctrine/dependabot/github_actions/doctrine/dot-github-7.2.2
    - `chore` Merge pull request #233 from Muffinman/2.0.x
    - `feat` add &#039;alga&#039; to irregular words list
    - `feat` Merge pull request #230 from Quarasique/update_irregular_words
    - `chore` Bump doctrine/.github from 7.2.2 to 7.3.0
    - `chore` Merge pull request #281 from doctrine/dependabot/github_actions/doctrine/dot-github-7.3.0
    - `chore` Upgrade to doctrine/coding-standard 13
    - `chore` Upgrade to PHPStan 2
    - `chore` Upgrade to PHPUnit 12
    - `chore` Merge pull request #280 from doctrine/maintenance
    - `feat` Define XML schema for phpcs configuration
    - `docs` Use the proper operator
    - `chore` Merge pull request #283 from doctrine/ampersand
    - `chore` Upgrade PHPStan to level 10
    - `chore` Merge pull request #284 from doctrine/phpstan-10
    - `fix` Merge pull request #282 from greg0ire/phpcs-schema
    - `chore` Merge remote-tracking branch &#039;origin/2.0.x&#039; into 2.1.x
    - `chore` Merge pull request #286 from greg0ire/2.1.x
    - `test` Address test rename
    - `chore` Merge pull request #288 from greg0ire/fix-build
    - `feat` Replace more occurrences of |MockObject
    - `chore` Merge pull request #289 from greg0ire/use-proper-operator-2
    - `chore` Merge pull request #291 from doctrine/2.0.x
    - `chore` Use PHP 8.4 in the CI
    - `chore` Merge pull request #294 from greg0ire/8-4-ci
    - `chore` Merge pull request #296 from doctrine/2.0.x-merge-up-into-2.1.x_N1sw6PZw
  
  </details>
  
- **laminas/laminas-stdlib**: 3.20.0 → 3.6.1
  
- **symfony/polyfill-php80**: v1.33.0 → v1.23.1
  
- **consolidation/annotated-command**: 4.10.1 → 4.10.2
    <details>
  <summary>📋 Show 2 commits</summary>

    - `fix` Fix #315: default value for the escape parameter for fputcsv() is now deprecated (#316)
    - `feat` Add changelog
  
  </details>
  
- **maennchen/zipstream-php**: 3.1.2 → 3.2.0
    <details>
  <summary>📋 Show 30 commits</summary>

    - `chore` Bump github/codeql-action in the github-actions group (#336)
    - `chore` Bump github/codeql-action in the github-actions group (#337)
    - `chore` Bump step-security/harden-runner in the github-actions group (#338)
    - `fix` Fixes for Dev Dependencies
    - `feat` Use ScoreCard file_mode git
    - `revert` Revert &quot;Remove Export Ingore for .github files&quot;
    - `chore` Bump the github-actions group with 3 updates (#340)
    - `chore` Bump the github-actions group with 3 updates (#341)
    - `chore` Bump the github-actions group with 2 updates (#342)
    - `chore` Bump fastify/github-action-merge-dependabot in the github-actions group (#347)
    - `chore` Bump the github-actions group with 4 updates (#348)
    - `chore` Bump github/codeql-action in the github-actions group (#350)
    - `chore` Update Deps &amp; Raise PHP Requirement (#351)
    - `chore` Bump the github-actions group with 2 updates (#352)
    - `chore` Bump github/codeql-action in the github-actions group (#353)
    - `chore` Bump shivammathur/setup-php in the github-actions group (#354)
    - `feat` Add Questions Section to README
    - `chore` Bump the github-actions group with 3 updates (#355)
    - `chore` Bump the github-actions group with 2 updates (#356)
    - `chore` Bump actions/dependency-review-action in the github-actions group (#357)
    - `chore` Bump the github-actions group with 2 updates (#358)
    - `fix` Fix typos (#361)
    - `chore` Bump ossf/scorecard-action in the github-actions group (#362)
    - `chore` Bump github/codeql-action in the github-actions group (#364)
    - `chore` Bump the github-actions group with 4 updates (#365)
    - `chore` Bump github/codeql-action in the github-actions group (#366)
    - `chore` Bump the github-actions group with 2 updates (#367)
    - `feat` Add CallbackStreamWrapper for custom ZIP output (#363)
    - `feat` Updates &amp; Deprecation Fixes
    - `chore` Setup GH Token for Phive Install in CI
  
  </details>
  
- **solarium/solarium**: 6.3.7 → 6.4.1
    <details>
  <summary>📋 Show 13 commits</summary>

    - `chore` prepared development
    - `chore` PHPStan 1 → 2 (#1147)
    - `feat` Support for CBOR update queries (#1148)
    - `chore` Use phpstan.dist.neon instead of phpstan.neon (#1149)
    - `fix` Fix broken link in docs (#1150)
    - `style` Style fixes (#1151)
    - `chore` Grammar nitpick (#1153)
    - `chore` Exclude `phpstan.dist.neon` from release (#1154)
    - `test` Solr 9.8 → 9.9 for integration tests (#1159)
    - `fix` Fix `ReturnTypeWillChange` attribute position (it must be above the function otherwise it&#039;s not applied) (#1161)
    - `feat` Vector filters (#1162)
    - `chore` prepared corrected 6.4.x minor releases
    - `feat` 6.4.1
  
  </details>
  
- **myclabs/deep-copy**: 1.13.3 → 1.13.4
    <details>
  <summary>📋 Show 2 commits</summary>

    - `chore` setAccessible() has no effect as of PHP 8.1
    - `chore` Merge pull request #207 from W0rma/reflection-set-accessible
  
  </details>
  
- **setasign/fpdi**: v2.6.3 → v2.6.4
    <details>
  <summary>📋 Show 17 commits</summary>

    - `test` Updated test action runner environment
    - `test` Merge pull request #231 from Setasign/development
    - `feat` Added check for false of readBytes() to avoid PHP warning
    - `test` Added test to reproduce issue 235
    - `fix` Fixed @throws doc-block annotation
    - `fix` Fixed @throws doc-block annotation
    - `fix` Merge pull request #236 from Setasign/issue-235
    - `chore` chore: Increase minimum version of tecnickcom/tcpdf
    - `chore` Merge pull request #237 from mitelg/chore/update-tcpdf
    - `feat` Fixed infinite loop in case of a recursive pages dictionary
    - `feat` Added test cases for handling recursive page tree structures
    - `fix` Fixed possible infinite recursion in PdfType::resolve()
    - `feat` Moved infinite recursion tests from functional to unit
    - `fix` Fixed namespace of PdfReaderTest
    - `feat` Merge commit from fork
    - `fix` Merge pull request #238 from Setasign/development
    - `feat` Updated version constant
  
  </details>
  
- **ycloudyusa/yusaopeny**: 11.0.0.0-alpha1 → 11.1.0.0-beta2
    <details>
  <summary>📋 Show 65 commits</summary>

    - `feat` feat: D11 build testing
    - `fix` fix: remove ckeditor5_font from deps
    - `feat` feat: update open-y-subprojects/openy_custom
    - `fix` Merge pull request #272 from YCloudYUSA/svicervlad-patch-2
    - `chore` Update composer.json
    - `other` Merge branch &#039;main&#039; into svicervlad-patch-3
    - `feat` Merge pull request #273 from YCloudYUSA/svicervlad-patch-3
    - `chore` Merge branch &#039;main&#039; into d11build
    - `fix` fix: add patch for migrate_tools
    - `other` Merge branch &#039;d11build&#039; into svicervlad-patch-2
    - `fix` Merge pull request #274 from YCloudYUSA/svicervlad-patch-2
    - `fix` fix: remove openy_tour deps from info.yml
    - `other` Update open-y-subprojects/openy_hours_formatter
    - `feat` add drupal/features
    - `feat` feat: remove symfony/dom-crawler
    - `chore` update deps
    - `other` update openy_map
    - `feat` feat: update carnation
    - `feat` feat: update carnation
    - `fix` Merge pull request #275 from YCloudYUSA/svicervlad-patch-2
    - `feat` feat: alow beta and rc releases for openy_carnation
    - `feat` Merge pull request #276 from YCloudYUSA/svicervlad-patch-3
    - `feat` Merge pull request #271 from YCloudYUSA/d11build
    - `feat` feat: update Drupal core to 11.1.8
    - `feat` Merge pull request #286 from YCloudYUSA/drupal11.1
    - `feat` feat: Drupal 11 upgrade path
    - `fix` fix: CSS class is not added to MediaLibrary dialog
    - `chore` Update composer.json
    - `fix` Merge pull request #288 from YCloudYUSA/ITCR-808
    - `feat` Merge pull request #287 from YCloudYUSA/upgrade_path
    - `feat` feat: add jquery-migrate to core jquery to support jQuery 3.x scripts
    - `docs` doc: more informative comments
    - `feat` Merge branch &#039;main&#039; into jquery-migrate-tools
    - `feat` Merge pull request #289 from YCloudYUSA/jquery-migrate-tools
    - `feat` Update composer.json set minimal openy_carnation version to beta3
    - `feat` Merge pull request #290 from YCloudYUSA/set-minimal-version-for-carnation
    - `fix` fix: cannot add camp menu block
    - `other` Merge branch &#039;main&#039; of github.com:YCloudYUSA/yusaopeny into ITCR-856
    - `fix` Merge pull request #292 from YCloudYUSA/ITCR-856
    - `fix` fix: uninsall themes  does not exist in the codebase anymore.
    - `feat` tmp: check modules uninstall
    - `feat` feat: update useless_machines
    - `chore` Apply suggestion from @podarok
    - `chore` Merge branch &#039;main&#039; into upgrade-path
    - `fix` Merge pull request #293 from YCloudYUSA/upgrade-path
    - `fix` fix: creating an lb_event without location data causes a 500
    - `fix` fix: back MissingDependencyException throw, dependecies already fixed
    - `fix` Merge pull request #296 from YCloudYUSA/ITCR-821
    - `feat` Update program_search
    - `feat` Merge pull request #297 from YCloudYUSA/fix-500-error-upgrade-path
    - `other` Merge branch &#039;main&#039; of github.com:YCloudYUSA/yusaopeny into ITCR-877
    - `chore` Install and enable module exif_orientation
    - `chore` Remove patch
    - `chore` Update RoboFile.php for PR builder
    - `fix` Merge pull request #302 from YCloudYUSA/svicervlad-patch-3
    - `other` Update y_lb_demo_content module
    - `feat` Merge pull request #303 from YCloudYUSA/ITCR-757
    - `fix` Fix type in the composer.json
    - `other` Merge branch &#039;main&#039; of github.com:YCloudYUSA/yusaopeny into ITCR-877
    - `fix` Merge pull request #304 from YCloudYUSA/ITCR-877
    - `docs` docs: updates
    - `docs` docs: updates
    - `docs` Merge pull request #305 from YCloudYUSA/new_readme
    - `feat` D11 - Missing field when adding media in Layout Builder
    - `chore` Merge pull request #306 from YCloudYUSA/ITCR-889
  
  </details>
  
- **open-y-subprojects/openy_custom**: 2.7.2 → 3.0.4
    <details>
  <summary>📋 Show 19 commits</summary>

    - `feat` Remove unpublished locations from Membership Calc
    - `feat` Support Domain Access
    - `feat` Merge pull request #85 from froboy/search-support-domain
    - `feat` Merge pull request #84 from atiupa/main
    - `feat` feat: Drupal 11 enabler. Untested
    - `feat` Drupal 11 upgrade: staged changes
    - `fix` fix: remove -&gt;condition(&#039;status&#039;, 1)
    - `fix` fix: revert code
    - `other` Merge branch &#039;main&#039; into upgrade-drupal11-20250528_183856
    - `chore` Merge pull request #87 from open-y-subprojects/upgrade-drupal11-20250528_183856
    - `feat` Merge pull request #86 from open-y-subprojects/drupal11
    - `fix` fix: update deprecated code by rector
    - `fix` fix: legacy code
    - `fix` Merge pull request #88 from open-y-subprojects/drupal11-rector-fixes
    - `fix` fix: update openy_migrate to migrate_tools 6.1.0
    - `fix` Merge pull request #89 from open-y-subprojects/migrate_tools
    - `feat` Drupal 10: replace jquery.once &amp; jquery.cookie in openy_custom
    - `fix` Small fix
    - `feat` Merge pull request #90 from open-y-subprojects/ITCP-358
  
  </details>
  
- **open-y-subprojects/openy_features**: 4.1.2 → 4.1.4
    <details>
  <summary>📋 Show 6 commits</summary>

    - `feat` feat: migrate from ckeditor5_font to ckeditor5_plugin_pack
    - `feat` feat: add drupal/ckeditor5_plugin_pack module in composer.json
    - `fix` fix: composer.json after get code from 3.7.0
    - `feat` Merge pull request #103 from open-y-subprojects/migrate-color-font
    - `feat` feat: extracted SCSS styles into a separate library for the module
    - `feat` Merge pull request #105 from open-y-subprojects/ITCP-351
  
  </details>
  
- **open-y-subprojects/openy_hours_formatter**: 2.0.4 → 3.0.1
    <details>
  <summary>📋 Show 4 commits</summary>

    - `other` Update openy_hours_formatter.info.yml
    - `feat` Merge pull request #9 from open-y-subprojects/drupal11
    - `feat` Drupal 11 upgrade: staged changes
    - `chore` Merge pull request #10 from open-y-subprojects/upgrade-drupal11-20250529_110919
  
  </details>
  
- **open-y-subprojects/openy_map**: 5.2.5 → 6.0.0-beta4
    <details>
  <summary>📋 Show 10 commits</summary>

    - `feat` feat: Drupal 11 enabler. Untested
    - `feat` Merge pull request #88 from open-y-subprojects/drupal11
    - `feat` feat: alow open-y-subprojects/openy_custom 3 version
    - `fix` fix: dependecies
    - `fix` fix: drupal/y_branch version
    - `feat` Merge pull request #89 from open-y-subprojects/svicervlad-patch-1
    - `chore` chore(openy_map_lb): don&#039;t use dynamic property
    - `chore` Merge pull request #90 from FabbDev/openy-map-lb-dynamic-property
    - `fix` fix: Open Y map settings returns error 500
    - `fix` Merge pull request #94 from shuklina/ITCR-869
  
  </details>
  
- **ycloudyusa/useless_machines**: 1.2 → 2.0.3
    <details>
  <summary>📋 Show 15 commits</summary>

    - `feat` Drupal 11 upgrade: staged changes
    - `other` Update action/action.info.yml
    - `feat` Update action/action.info.yml
    - `fix` fix: this version will be compability pnly with drupal 11
    - `fix` Merge pull request #8 from YCloudYUSA/svicervlad-patch-2
    - `chore` Update composer.json
    - `chore` Merge pull request #5 from YCloudYUSA/upgrade-drupal11-20250528_185328
    - `feat` feat: uninstall redundant drupal modules
    - `fix` Merge pull request #9 from YCloudYUSA/upgrade_path
    - `feat` feat: uninstall panelbutton for ckeditor
    - `feat` Merge pull request #10 from YCloudYUSA/uninstall-panelbutton
    - `feat` feat: uninstall unspoerted modules
    - `feat` Merge pull request #11 from YCloudYUSA/uninstall-unsuported-modules
    - `fix` fix: typo
    - `fix` Merge pull request #12 from YCloudYUSA/uninstall-unsuported-modules
  
  </details>
  
- **ycloudyusa/y_lb_demo_content**: 4.0.0-beta1 → 4.0.0-beta3
    <details>
  <summary>📋 Show 5 commits</summary>

    - `feat` Drupal 11 upgrade: staged changes
    - `chore` Merge pull request #56 from YCloudYUSA/upgrade-drupal11-20250528_185553
    - `feat` Add icons to the Media Library
    - `other` Merge pull request #57 from YCloudYUSA/ITCR-757
    - `feat` Merge pull request #55 from YCloudYUSA/drupal11
  
  </details>
  
- **ycloudyusa/y_lb**: 4.0.3 → 4.0.6-rc2
    <details>
  <summary>📋 Show 15 commits</summary>

    - `feat` Fixed missing level-3 menu title on desktop
    - `feat` Fixed missing level-3 menu title on desktop
    - `fix` Merge pull request #285 from YCloudYUSA/fix-level-3-title
    - `feat` Merge pull request #286 from YCloudYUSA/3x-fix-level-3-title
    - `feat` feat: back lb_claro
    - `feat` Merge pull request #287 from YCloudYUSA/lb_claro
    - `feat` Add an option to control if the styles can be overriden on each node.
    - `fix` Fixed condition to avoid warning message.
    - `feat` Added entity_builders on form build to call method that saves new info.
    - `fix` Fixed return of form when not cannonical.
    - `feat` Update src/Form/YLBOverridesEntityForm.php
    - `style` Merge pull request #290 from mario-imagex/issue-288
    - `chore` Merge pull request #294 from YCloudYUSA/3.x
    - `chore` Update drupal/openy_gtranslate to 2.0.0
    - `chore` Merge pull request #295 from YCloudYUSA/update/openy_gtranslate-2.0.0
  
  </details>
  
- **ycloudyusa/yusaopeny_activity_finder**: 5.3.0 → 5.5.0
    <details>
  <summary>📋 Show 6 commits</summary>

    - `refactor` Replace deprecated package &#039;node-sass&#039; with &#039;sass&#039; package
    - `test` Use latest Node LTS version (v22.17.0) for builds
    - `feat` Replace &#039;node-sass&#039; with &#039;sass&#039; for LB Activity Finder
    - `refactor` Merge pull request #58 from dchubar-fj/af4-replace-node-sass
    - `fix` Fix condition for time comparison in WeekdaysPartsOfDay
    - `fix` Merge pull request #61 from YCloudYUSA/bug/weekday-afternoon-evenings
  
  </details>
  






### 🔄 Drupal Core Updates

- **drupal/core**: 10.5.1 → 11.2.7
    <details>
  <summary>📋 Show 250 commits</summary>

    - `chore` Issue #3497431 by mondrake, catch, larowlan, godotislate: Deprecate TestDiscovery test file scanning, use PHPUnit API instead
    - `chore` Issue #3526690 by cilefen, xmacinfo, andypost, grimreaper, mstrelan: Call to undefined function Drupal\system\Plugin\ImageToolkit\imageavif()
    - `chore` Issue #3524613: Add Cristina Chumillas as UX Manager, Emma Horrell as provisional UX Manager to Drupal core
    - `chore` Issue #3520750 by alexpott: Use a transaction PoDatabaseWriter to improve performance
    - `chore` Issue #3526117 by phenaproxima: Conflict with Project Browser &lt;2.1 and Automatic Updates &lt;4
    - `feat` Issue #3523649 by znerol: Extract testUriHost from UuidValidatorTest into its own class
    - `chore` Issue #3515774 by prudloff, smustgrave: Cache tags added by hook_block_view_BASE_BLOCK_ID_alter are ignored on blocks that implement MainContentBlockPluginInterface or TitleBlockPluginInterface
    - `docs` Issue #3526251 by prudloff: Incorrect type for #access in RenderElementBase documentation
    - `chore` Issue #3522970 by longwave, smustgrave: Remove unused BrowserTestBase::$originalContainer
    - `test` Issue #3517024 by acbramley: Convert ckEditor5EditorHeightTest to WebDriver test
    - `fix` Issue #3522969 by annmarysruthy: Deprecate BrowserTestBase::getOptions()
    - `chore` Issue #3523629 by znerol, longwave: Update config schema for Symfony 7.3 mailer security improvements
    - `chore` Issue #3521327 by avpaderno: The insecure examples code does not include delimiters for strings
    - `feat` Revert &quot;Issue #3497431 by mondrake, catch, larowlan, godotislate: Deprecate TestDiscovery test file scanning, use PHPUnit API instead&quot;
    - `chore` Issue #3527053 by nod_, phenaproxima: Random failure: &quot;Drupal.contextual.ContextualModelView is not a constructor&quot;
    - `chore` Issue #3514197 by donquixote, acbramley, nicxvan, godotislate, longwave: ModuleHandler::resetImplementations should reset all properties with hook implementations
    - `revert` Revert &quot;Issue #3515093 by sandip, catch, smustgrave: Olivero table.css should be in its own library and #attached to tables&quot;
    - `feat` Issue #3524547 by thejimbirch, ishani patel, quietone: Navigation module&#039;s help text should not link to the contrib module
    - `chore` Issue #3483996 by kentr, kim.pepper, godotislate, acbramley: Remove lazy declaration and proxy class for cron and use service closure instead
    - `chore` Issue #3518917 by penyaskito: Invalid service alias for backend_overridable services in some cases when default_backend is set
    - `chore` Issue #3255804 by godotislate, longwave, berdir, alexpott, catch, andypost, smustgrave: Hidden dependency on block_content in layout_builder
    - `chore` Issue #3255804 by godotislate, longwave, berdir, alexpott, catch, andypost, smustgrave: Hidden dependency on block_content in layout_builder
    - `chore` Issue #3526180 by mherchel, godotislate: Regression: Drupal.displace() not working on new Navigation module in 11.2
    - `chore` Issue #3521953 by tom konda, smustgrave, quietone: Existence check for JavaScript object and it&#039;s property across multi-lines can replace with optional chaining
    - `fix` Issue #3519766 by amateescu: WorkspacesHtmlEntityFormController builds entity forms twice
    - `chore` Issue #3527314 by amateescu: Stop creating a &quot;Stage&quot; workspace by default on module installation
    - `chore` Issue #3527518 by phenaproxima, tim.plunkett: Package Manager&#039;s direct-write mode still tries to check for rsync
    - `style` Issue #3410681 by charlliequadros, hritik parihar, ahsannazir, smustgrave, finnsky, akshayadhav, larowlan: Remove @nest from claro stylesheets
    - `style` Issue #3523078 by sd9121, longwave, godotislate, mherchel: Update prettier/PostCSS/stylelint for 11.2
    - `fix` Issue #3526266 by mherchel, finnsky, andy-blum: Navigation top bar should utilize Drupal.displace()
    - `feat` Issue #3493070 by penyaskito, griffynh, wim leers, longwave, pdureau, effulgentsia, xjm, phenaproxima, mradcliffe, danielveza, lauriii, catch: SDC `enum` props should have translatable labels: use `meta:enum`
    - `chore` Issue #3523705 by amateescu, rkoller, poker10: InvalidComponentException when workspaces ui is installed
    - `chore` Issue #3528680 by godotislate, xjm, longwave: Update to Symfony 7.3.0
    - `chore` Issue #3523018 by godotislate, longwave, quietone, xjm, catch, salmonek, smustgrave: Update CKEditor 5 to 45.2.0
    - `chore` Issue #3522406 by quietone, longwave, klausi, bbrala: Update Coder to 8.3.30
    - `chore` Issue #3527142 by andypost, catch, longwave, xjm: Update Composer and development dependencies for 11.2.0
    - `feat` Issue #3528998 by grimreaper, larowlan, pdureau, xjm, wim leers, catch, penyaskito: Follow-up: SDC `enum` props should have translatable labels: use `meta:enum`
    - `feat` Issue #3529504 by acbramley, cmlara, nicxvan: Fix phpstan errors in UpdatePathTestTrait
    - `chore` Issue #3526142 by mondrake, xjm: Update PHPStan to 2.1.17
    - `chore` Issue #3487533 by mglaman, catch, larowlan, wim leers, daffie, longwave: Cannot modify a table which uses JSON type
    - `chore` Issue #3529592 by lussoluca, znerol, kristiaanvandeneynde: Wrong alias for access_policy_processor service in core.services.yml
    - `chore` Issue #3488681 by dcam, jazzsequence, mradcliffe, nicxvan, quietone, mmenavas, heilop: Fix defgroup open and close that were separated during Hook conversion
    - `fix` Issue #3480321 by scott_euser, godotislate, catch, grimreaper, kensae, joelpittet, pameeela, lauriii, m4olivei, michaellander, aaronmchale, smustgrave, anruether, ckrina, plopesc, finnsky, xjm, berdir: Second level menu items can&#039;t be reached if they have children
    - `chore` Drupal 11.2.0-rc2
    - `other` Back to dev.
    - `chore` Issue #3497431 by mondrake, catch, larowlan, godotislate, fjgarlin: Deprecate TestDiscovery test file scanning, use PHPUnit API instead
    - `chore` Issue #2473093 by acbramley, xjm: Node access default grant behavior is not clear
    - `other` Issue #3476224 by pwolanin, heddn, bbrala, tstoeckler: JSON:API assumes entity reference field&#039;s main property must be the entity ID
    - `feat` Issue #3529714 by mstrelan, xjm, smustgrave, acbramley: Add return types to EntityDefinitionTestTrait
    - `chore` Issue #3497647 by prudloff, xjm, quietone: StringDatabaseStorage::deleteStrings() does not work
    - `chore` Issue #3497431 by mondrake, catch, larowlan, godotislate, jonathan1055, fjgarlin, xjm: Deprecate TestDiscovery test file scanning, use PHPUnit API instead
    - `chore` Issue #3526397 by catch: Split PackageInstallTest into two
    - `test` Issue #3530363 by catch, smustgrave: Add @group #slow to some additional tests
    - `chore` Issue #3514262 by berdir, smustgrave, xjm, quietone: entity_browser_entity_form_field_widget_third_party_settings_form hooks can no longer return NULL
    - `chore` Drupal 11.2.0
    - `other` Back to dev.
    - `docs` Issue #2776661 by brandonlira, ameymudras, er.pushpinderrana, quietone, joachim: incorrect uses of isRebuilding() in inline docs in processForm()
    - `feat` Issue #3109284 by prudloff: locale_translation queue loop
    - `chore` Issue #1822440 by mohit_aghera, acbramley, smustgrave, dawehner, ezra-g, catch: &quot;Content access&quot; filter should check for node_grants implementations before adding node access grant queries
    - `fix` Issue #3414173 by joelpittet, anybody, nicxvan: Add support for minified external CSS libraries
    - `chore` Issue #2866619 by acbramley, kksandr, shabana.navas, hkirsman: Don&#039;t use link in message after node save if user doesn&#039;t have permissions
    - `chore` Issue #3531044 by godotislate, nicxvan, zigazou: Unknown fieldViewsDataHelper method called from deprecated datetime_type_field_views_data_helper function
    - `chore` Issue #3521884 by nigelcunningham, nod_, smustgrave, catch: tableresponsive.js causes huge page load time for extensions page
    - `feat` Issue #3531412 by alexpott, xjm, nicxvan, catch, longwave: New constants in \Drupal\Core\Theme\Registry are private but they are accessed with static::
    - `chore` Issue #3530730 by catch: Remove catch as maintainer of the &#039;path&#039; and &#039;taxonomy&#039; modules
    - `fix` Issue #2987548 by alexpott, johnv, euphoric_mv, HbtTundar, cilefen, xjm, samlerner, pratip.ghosh, jrochate, alezu: LogicException: The database connection is not serializable
    - `chore` Issue #3494354 by catch, mstrelan, acbramley, smustgrave: AssetResolver::getJsAssets cache id doesn&#039;t consider attached settings, leads to ajax issues
    - `chore` Issue #3525174 by benjifisher, smustgrave, greggles, catch, larowlan, mcdruid: Clean up unserialize() in the config system
    - `feat` Issue #3340142 by mstrelan, quietone, xjm: Convert testJail() to use expectException
    - `chore` Drupal 11.2.1
    - `other` Back to dev.
    - `chore` Issue #3471194 by shalini_jha, kim.pepper, smustgrave, quietone, longwave, larowlan: ImageItem and FileItem generateSampleValue methods makes bad Uris
    - `chore` Issue #3532199 by joelpittet, griffynh: Remove joelpittet as maintainer for Theme API
    - `chore` Drupal 11.2.2
    - `other` Back to dev.
    - `chore` Issue #3532532 by lauriii: Remove lauriii as subsystem maintainer of CKEditor 5 and Claro
    - `chore` Issue #3531688 by gabesullice, griffynh: Remove gabesullice as maintainer for JSON:API
    - `chore` Issue #3505049 by nicxvan, godotislate, raveen_thakur51, sher1, catch, jnicola, johnv, reinimax, rudi teschner: Drupal 11.1.2 upgrade causes  \Drupal::$container is not initialized yet error
    - `feat` Issue #2077977 by mohit_aghera, plopesc, er.pushpinderrana, nielsonm, xjm, smustgrave: Use FormBase class for the test module&#039;s form in file.module
    - `chore` Issue #3008943 by tim.plunkett, amateescu, brandonlira, sahil.goyal, yogeshmpawar, smustgrave, alexpott, ameymudras: Clean up todo in InlineBlockEntityOperations::handleEntityDelete()
    - `chore` Issue #3532916 by catch: Unpack recipe test is in the wrong namespace (Tests vs BuildTest)
    - `test` Issue #3527408 by prudloff, smustgrave, xjm, benjifisher, catch, kim.pepper, larowlan: Add test for SA-CORE-2024-002
    - `chore` Issue #3465041 by prudloff, xjm, smustgrave, larowlan: FormState::getTriggeringElement() behaves inconsistently when request is malformed
    - `fix` Issue #3196798 by acbramley, juhog, ranjith_kumar_k_u, paulocs, smustgrave, alexpott, catch: Fix EntityController::addPage so bundles are sorted by label and not ID
    - `feat` Issue #3530276 by mstrelan, smustgrave, xjm: Add return types to CookieResourceTestTrait
    - `chore` Issue #3055319 by idebr, mmbk, cilefen, quietone, catch: Constraint violations are not triggered for Roles on a user&#039;s account form
    - `feat` Issue #3525642 by amateescu, smustgrave: The active workspace is not persisted for the entire lifecycle of a form
    - `test` Issue #3530149 by xjm, smustgrave, larowlan, bramdriesen, benjifisher, longwave, mcdruid, catch, alexpott: Add tests for SA-CORE-2025-004: Link field attribute XSS
    - `chore` Issue #3447550 by brandonlira, sadamafridi, charlliequadros, joachim, santhosh@21: defaultStorageSettings() and defaultFieldSettings() should document that they must not have setting names in common
    - `test` Issue #3531022 by mondrake: Let run-tests.sh print db type and version in the initial output
    - `chore` Issue #3530262 by mohit_aghera, kim.pepper, quietone, xjm: Add mohit_aghera as File sub-system co-maintainer
    - `feat` Issue #3530154 by mondrake, xjm, borisson_, mstrelan: Fix test classes with no *Test suffix
    - `chore` Issue #3490639 by dcam, seanb: Checking for duplicate emails in user_requirements() does not take langcode into account
    - `chore` Issue #3533300 by mstrelan, xjm: PHPStan baseline is out of sync
    - `chore` Issue #3529507 by nicxvan, xjm, alexpott: Allow setting memory limit to -1 for phpstan precommit hooks
    - `chore` Issue #3464426 by dcam, kksandr, alexpott: AutowireTrait and autowire for services behave differently for nullable types
    - `chore` Issue #3532962 by phenaproxima: Ensure that the default content system can import a workspace with content in it
    - `chore` Issue #3337882 by dcam, enaznin, tirupati_singh, pameeela, catch, smustgrave: Deleted menus are not removed from content type config
    - `feat` Issue #3513879 by nicxvan: Convert experimental_module_requirements_test_requirements to new Class
    - `chore` Issue #3532187 by sleitner, immaculatexavier, alexpott, catch, adrianm6254, xjm, sharif.elshobkshy: Composer issue when dealerdirect/phpcodesniffer-composer-installer update from v1.0.0 to v1.1.0
    - `chore` Issue #3532704 by griffynh, yoroy: Remove yoroy as maintainer for Usability
    - `chore` Issue #3531687 by immaculatexavier, xjm, sam152: Remove Sam152 as maintainer for Content Moderation and Workflows
    - `fix` Issue #3524738 by berdir, xjm, godotislate, oily, catch, penyaskito, larowlan, kristiaanvandeneynde: Fatal error when passing NULL to Renderer::render()
    - `test` Issue #3533030 by catch, mondrake: Move QuickStart tests to build tests
    - `chore` Issue #3518224 by alecsmrekar, plach: Duplicate path alias when adding node translation
    - `feat` Issue #3238618 by gauravvvv, rpayanm, Harish1688, tauoms, roshanibhangale, mherchel, quietone: Olivero: Allow primary &amp; secondary navigation focus outline to work with long text
    - `docs` Issue #3528994 by annmarysruthy, joachim: hook_views_query_alter() docs missing use QueryPluginBase import
    - `feat` Issue #3223147 by kentr, kostyashupenko, nikhil_110, smustgrave, hop, kristen pol: Claro breadcrumb doesn&#039;t meet minimum target-size
    - `chore` Issue #3518192 by joville, igorgoncalves, sandip, ressa: Dropdown does not show desired arrow on open state
    - `chore` Issue #3532159 by fathershawn, nicxvan, smustgrave: HTMX behavior attachment fails with some swap strategies
    - `chore` Issue #3504582 by artem_sylchuk, nod_, smustgrave, reinfate, anjaliprasannan, alexdoma: [regression] Tags td, tr or th ignored by new parseHTML implementation
    - `chore` Issue #3501582 by phenaproxima, juxelle: Package Manager should always run Composer through the PHP interpreter, rather than directly
    - `chore` Issue #3473029 by dcam, annmarysruthy, igorgoncalves, smustgrave, guillaumepacilly: Wrong maxlength on Authored By field for translation
    - `chore` Issue #3534893 by quietone: [regression] Wrong doc link on database update page
    - `chore` Issue #3533926 by alexpott: Config of the type plural_label can never be valid due to the label constraint
    - `chore` Issue #3535199 by alexpott, godotislate: Saving untrusted config results in memory leak
    - `chore` Issue #3511972 by phenaproxima, azizos, quietone, rkoller, pameeela, catch, poker10, tedbow, alexpott, larowlan, gábor hojtsy, mcdruid, xjm, benjifisher, yesct: Allow Composer and rsync location to be configured via the UI
    - `chore` Issue #3528139 by phenaproxima, tim.plunkett, catch: Package Manager should use a copy of Composer that is local to the current project, if available
    - `chore` Issue #3533698 by nod_, longwave, danflanagan8, hammerslammer, wim leers: BigPipe does not handle multiple &lt;/body&gt; tags correctly
    - `chore` Issue #3521081 by bircher: Deleting a config checkpoint breaks the checkpoint storage
    - `chore` Issue #3530043 by catch, xjm, smustgrave, gábor hojtsy, markconroy, ckrina, pameeela: Display Umami warning on all pages (not just admin pages)
    - `fix` Issue #3534047 by fathershawn, xjm, nod_: Add fathershawn as a subsystem maintainer for the Ajax subsystem
    - `chore` Issue #3534386 by sijumpk, griffynh, benjy: Remove benjy as maintainer for Block subsystem
    - `chore` Issue #3534455 by juampynr: Remove juampynr from MAINTAINERS.txt
    - `chore` Issue #3525074 by quietone: Move JSON:API coverage for Contact to the Contact module
    - `chore` Issue #3530855 by libbna, rkoller, the_g_bomb: The border of field types on the &quot;add field&quot; step has a too low color contrast
    - `chore` Issue #3536939 by phenaproxima, savage1974, thejimbirch: The unpacker chokes on Composer platform dependencies, like `ext-mbstring`
    - `feat` Issue #3534278 by phenaproxima, longwave, xjm: The vendor hardening plugin should provide a way to skip cleaning certain packages
    - `chore` Issue #3537420 by dcam, smustgrave, larowlan: Add dcam as a subsystem maintainer of the Link module
    - `chore` Issue #3537409 by andrewmacpherson, nicxvan: Remove accessibility topic maintainer - andrewmacpherson
    - `chore` Issue #3536185 by ankusht1515, griffynh, david strauss: Remove David Strauss as maintainer for MySQL DB driver subsystem
    - `chore` Issue #3536192 by rainbreaw, xjm: Remove rainbreaw as maintainer for Accessibility subsystem
    - `chore` Issue #3536189 by griffynh, mpdonadio: Remove mpdonadio as maintainer for DateTime and DateTime Range
    - `chore` Issue #3536749 by xjm, griffynh, sun, smustgrave, larowlan: Remove sun as maintainer for Language subsystem
    - `chore` Issue #3534830 by Bojhan: Remove Bojhan as maintainer for Usability topic
    - `chore` Issue #3535351 by acbramley, nod_, mstrelan: [random test failure] ToolbarActiveTrail::testToolbarActiveTrail
    - `fix` Issue #3537720 by acbramley, mstrelan: Remove return type from BlockBase::submitConfigurationForm()
    - `fix` Issue #3537572 by michagru, joachim: PageVariantInterface docs mention class that doesn&#039;t exist
    - `fix` Issue #3515661 by quietone, joaopauloscho, xjm, charlliequadros: Fix &#039;DocComment.MissingShort&#039; in FunctionalJavascript tests
    - `test` Issue #3043127 by liam morland, mohit_aghera, pancho, smustgrave, xjm, quietone: FileFieldTestBase::assertFileEntryNotExists() should be documented, typehinted, and accept a null value for $message
    - `feat` Issue #3506321 by libbna, rkoller, sdhruvi5142, mgifford, ckrina: Increase the color contrast of the toggle button border
    - `feat` Issue #3535330 by joelpittet, benabaird: Assets paths in CSS no longer rewritten when aggregation is enabled
    - `chore` Issue #3002019 by hanoii, dcam, rpayanm, giuseppe87: Register a user without email verification should still send an email
    - `fix` Issue #3537668 by phenaproxima: Dynamically figure out the actual path to Composer&#039;s binary, and make it read-only
    - `chore` Issue #3539331 by dww, godotislate, nicxvan: Incorrect warning for system requirements for APCu memory
    - `docs` Issue #3533061 by nob, nexusnovaz, joachim: ConditionInterface docs mention nonexistent QueryConditionInterface
    - `chore` Issue #3526769 by mcdruid, smustgrave: Avoid abuse of config sync import tarballs
    - `chore` Issue #3362726 by alexpott, oily, jrb, neclimdul: READ COMMITTED requirement check doesn&#039;t account for database views
    - `feat` Revert &quot;Issue #3362726 by alexpott, oily, jrb, neclimdul: READ COMMITTED requirement check doesn&#039;t account for database views&quot;
    - `chore` Issue #3538236 by grimreaper, smustgrave: Empty top bar actions dropdown
    - `revert` Revert &quot;Issue #3537668 by phenaproxima: Dynamically figure out the actual path to Composer&#039;s binary, and make it read-only&quot;
    - `feat` Revert &quot;Issue #3534278 by phenaproxima, longwave, xjm: The vendor hardening plugin should provide a way to skip cleaning certain packages&quot;
    - `revert` Revert &quot;Issue #3511972 by phenaproxima, azizos, quietone, rkoller, pameeela, catch, poker10, tedbow, alexpott, larowlan, gábor hojtsy, mcdruid, xjm, benjifisher, yesct: Allow Composer and rsync location to be configured via the UI&quot;
    - `chore` Issue #3489311 by xjm, bradjones1, smustgrave, alexpott, damiankloip: Remove damiankloip as subsystem maintainer
    - `chore` Issue #3536751 by xjm, griffynh, yched, alexpott: Remove yched as maintainer for Field UI subsystem
    - `chore` Issue #3534831 by xjm, griffynh, dmsmidt, smustgrave: Remove dmsmidt as maintainer for Inline Form Errors subsystem
    - `chore` Issue #3534832 by xjm, griffynh, jelle_s, smustgrave: Remove Jelle_S as maintainer for Responsive Image subsystem
    - `chore` Issue #3536188 by ankusht1515, divyansh.gupta, smustgrave, griffynh, dcam, mac_weber: Remove Mac_Weber as maintainer for Link Field subsystem
    - `chore` Issue #3536193 by griffynh, shaal, markconroy: Remove shaal as maintainer for Umami demo subsystem
    - `chore` Issue #3536190 by mherchel, griffynh, smustgrave, proeung, johnalbin: Remove proeung as maintainer for Olivero subsystem
    - `chore` Drupal 11.2.3
    - `chore` Back to dev.
    - `chore` Issue #3537282 by xjm, divyansh.gupta, griffynh, tedbow, smustgrave: Remove tedbow as maintainer for Settings Tray subsystem
    - `chore` Issue #3537396 by jesseh, borisson_: Removed function block_themes_installed() is still referenced in comments
    - `feat` Issue #2950869 by amateescu, alexpott, fabianx, lucassc, abhishek-anand, pavlosdan, ravi.shankar, adam.weingarten, timmy_cos, rassoni, bryanmanalo, pooja saraah, _pratik_, enrocean167, matsbla, berdir, catch, wim leers, yakoub, neclimdul, dixon_, camoa, daffie, effulgentsia, mariancalinro, mheip, nicobot, krzysztof domański: Entity queries querying the latest revision very slow with lots of revisions
    - `chore` Issue #3534278 by phenaproxima, longwave, xjm, catch: The vendor hardening plugin should provide a way to skip cleaning certain packages
    - `feat` Issue #3540305 by phenaproxima, thejimbirch: The addComponentToLayout config action should support adding multiple components
    - `fix` Issue #3539501 by danrod, tanushree gupta, mstrelan, bramdriesen: Remove duplicate GenericTest in system.module
    - `chore` Issue #3540646 by andypost, penyaskito: Fix deprecated readdir() without argument for PHP 8.5
    - `fix` Issue #3540525 by andypost: Remove remaining usage of setAccessible()
    - `fix` Issue #3541053 by andypost: Fix deprecated curl_close() for PHP 8.5
    - `refactor` Issue #3540528 by andypost, jacktonkin: Clean-up deprecated non-standard cast names
    - `chore` Issue #3486481 by mxr576, berdir: Recipe install command prints out to stdout and not error, but RecipeTestTrait::applyRecipe() only prints out error output
    - `docs` Issue #3539530 by neerajsingh, joachim, nicxvan: VersionHistoryController should document its soft expectations
    - `chore` Issue #3453692 by nhojivar7, agunjan085, joachim, isa.bel, xdequinze: hook_entity_reference_selection_alter() is undocumented
    - `chore` Issue #3538854 by dww, driskell, andypost, godotislate: APCu requirement for 32MB always displays since APCu 5.1.25
    - `fix` Issue #3541487 by alexpott: Fix EntityQueryTest on SQLite and Postgres
    - `chore` Issue #3540886 by immaculatexavier, nod_, gábor hojtsy: Update to jQuery 4 RC1
    - `chore` Issue #3539366 by dimitriskr, andypost, godotislate: Default DB transaction isolation set to read-committed breaks InstallerIsolationLevelExistingSettingsTest test
    - `chore` Issue #3351597 by acbramley, smustgrave, catch: [random test failure] Drupal\Tests\ckeditor5\FunctionalJavascript\MediaLibraryTest
    - `chore` Issue #3530456 by nexusnovaz, karimb, nicxvan, aubjr_drupal, longwave: Indicate that hook_post_update_NAME() hooks do not run at installation time
    - `chore` Issue #3532792 by nicrodgers, greg.harvey: avif error - Could not encode image: No codec available
    - `chore` Issue #3540554 by tstoeckler: Functional tests attempting to release locks for a no-longer existing site throws an exception
    - `feat` Issue #3440399 by prudloff, akalata, larowlan, longwave, smustgrave, mrszymon, greggles, berdir: Malicious fingerprinting of visitors via role name on content translation screen
    - `feat` Issue #3215368 by xjm, smustgrave, ghost of drupal past, valthebald, andypost: Use a more standard transliteration for Cyrillic щ
    - `fix` Issue #3536999 by chesn0k, niklan: Drupal\comment\Controller\CommentController::getReplyForm() never returns a response object
    - `chore` Issue #3253897 by mohit_aghera, oily, joakland, smustgrave, lendude: Regression: &quot;Display the file download URI&quot; on related file entity shows relative path
    - `chore` Issue #3544581 by catch, longwave, godotislate: Update to CKEditor5 v45.2.2
    - `chore` Drupal 11.2.4
    - `other` Back to dev.
    - `chore` Issue #3522474 by yannickoo, smustgrave, sd9121, mogtofu33, nod_: Fix RegEx for Icon library schema definition
    - `chore` Issue #3522463 by klemendev, o&#039;briat, kim.pepper: FileImageDimensionsConstraintValidator does not update file size (regression)
    - `chore` Issue #3541291 by griffynh, grimreaper, pdureau: Add pdureau and grimreaper as co-maintainers for Asset library subsystem
    - `chore` Issue #3540215 by phenaproxima, catch, benjifisher, dww, poker10: Remove the ability to configure the path to Composer
    - `test` Issue #3543941 by catch, smustgrave: [random test failure] OpenTelemetryNodePagePerformanceTest random failure
    - `chore` Issue #3539924 by griffynh, yoroy: Remove yoroy from Core Committer role
    - `chore` Issue #3420372 by drubb, jurgenhaas, znerol, m.stenta, mkdok: Core Symfony Mailer throws error on transport shutdown
    - `chore` Issue #3539537 by drunken monkey: Deprecation warning in DefaultPluginManager::__construct() is too unspecific
    - `chore` Issue #3269890 by prudloff, smustgrave, catch, shalini_jha, alexpott, oily: #date_year_range is not validated server-side
    - `chore` Issue #3542967 by dcam, smustgrave, mondrake: Bad test in LinkNotExistingInternalConstraintValidatorTest
    - `chore` Issue #3537382 by jurgenhaas, smustgrave: Link attributes in top bar are lost for featured links
    - `feat` Issue #2334319 by joelpittet, berdir, fabianx, thenchev, calebtr, xjm, slashrsm, dawehner, andypost, alexpott, lauriii, webflo, duaelfr, godotislate, acbramley, wim leers, manuel garcia, quietone: {% trans %} does not support render array and MarkupInterface valued expressions
    - `chore` Issue #3543939 by penyaskito, grimreaper, catch: SDC `ComponentRenderTest` is error-prone
    - `chore` Issue #3052479 by hart0554, longwave, andregp, catch, alexpott, pflora, asad_ahmed, smustgrave, dcam, abhijith s, pooja saraah, aarti zikre, ravi.shankar, xjm: ShortcutSetForm ID element description is wrong and misleads users
    - `fix` Issue #3544005 by benjifisher, nicxvan, luismagr: hook_field_type_category_info_alter should not be in group field_purge
    - `chore` Issue #3489026 by phenaproxima, ajinkya45: Document InputCollectorInterface
    - `chore` Issue #3408607 by larowlan, poker10, smustgrave, akhil babu, ghost of drupal past, chhavi.sharma, luismagr: Document that EntityAccessControlHandler::checkFieldAccess returns AccessResultAllowed by default
    - `chore` Issue #3541862 by avpaderno, smustgrave: The output shown for example code is wrong
    - `chore` Issue #3537413 by codebymikey, smustgrave, quietone: Add codebymikey as a subsystem maintainer for the Basic Auth module
    - `chore` Issue #3532771 by jepster_, quietone, smustgrave, xjm, dcam, poker10: Misleading method parameter comment for
    - `chore` Issue #3549023 by joachim, ishani patel: remove obsolete comment about issue 2513094
    - `chore` Issue #3522754 by hfernandes, catch, joaopauloc.dev, alexpott: Access to systemAdminMenuBlockPage is denied if it contains links using the url attribute
    - `chore` Drupal 11.2.5
    - `other` Back to dev.
    - `feat` Issue #3549717 by drcolossos, luismagr, cilefen: ckeditor5.api.php fix @encode
    - `feat` Issue #2411767 by smustgrave, mile23, mohit_aghera, pritish.kumar: locale_translation_check_projects() should return batch or NULL.
    - `fix` Issue #3539565 by catch, godotislate, nicxvan: block--bundle--banner-block.html.twig uses invalid duplicate block names
    - `chore` Issue #3546740 by amateescu, dcam: Initial workspace-published revisions are marked as new too late
    - `chore` Issue #3537774 by kksandr, smustgrave: text_textarea_with_summary widget fails if violation lacks value/summary in property path
    - `chore` Issue #3544746 by mstrelan, borisson_: Use phpdoc conditional returns for access functions
    - `chore` Issue #3032737 by heddn, smustgrave, xjm, dww, longwave, larowlan, klonos, anpel, znerol, quietone, sourabhjain, nexusnovaz: Comment in \Drupal\Component\PhpStorage\FileStorage::createDirectory() that additional information is not included for security reasons
    - `feat` Issue #3546740: update the phpstan baseline.
    - `chore` Issue #3542769 by tame4tex, smustgrave: PHP warning when setting/changing “Reference method” in Views EntityReference filter extra settings
    - `chore` Issue #3539822 by mxr576, phenaproxima, alexpott: Recipe installer fails when programmatically providing input to dependent recipes
    - `chore` Issue #3550174 by thejimbirch, phenaproxima, b_sharpe: TypeError in CreateForEachBundle when processing config with integer or boolean schema types
    - `fix` Issue #3546496 by joachim, shayaanmiyy, mstrelan, lostcarpark, michael.j.gleeson, xjm, jberghammer, ranzinator2000, antojose: PluginTestBase has undeclared dependency on user module
    - `chore` Issue #3552181 by mstrelan, bbrala: Stop passing null as the label to createEntityReferenceField
    - `fix` Issue #3550070 by mstrelan: DatabaseStorage::decode() docs are incorrect
    - `chore` Issue #2871217 by michelle, dawehner, fgm, longwave, ndobromirov, wizonesolutions, sivaji_ganesh_jojodae, alexpott, anmolgoyal74, elgordogrande, kleiton_rodrigues, kuldeep_mehra27, shaktik, droath, nikhil_110, ravi.shankar, mr.baileys, dcam: Handle NULL URL options in LinkFormatter::buildUrl()
    - `feat` Issue #3553601 by grimreaper, gxleano: Icon API: Allow dot in library
    - `feat` Issue #3536886 by mglaman, phenaproxima, larowlan, thejimbirch: RecipeCommand does not terminate services, leaving a broken router
    - `chore` Issue #3553664 by phenaproxima, alexpott, nicxvan: BootableCommandTrait mangles the global base_url and breaks URL generation
    - `fix` Revert &quot;Issue #3471459 by nayana_mvr, ahsannazir, marc.bau, bnjmnm, larowlan: Prefix/Suffix not inline with autocomplete field&quot;
    - `chore` Issue #3546740 by amateescu, dcam, catch: Initial workspace-published revisions are marked as new too late
    - `chore` Issue #3554269 by amateescu, berdir: Impossible to save a pending revision as the default one without creating a new revision
    - `feat` Issue #3535332 by camhoward, annmarysruthy, sagarsingh24, oily, benjifisher, abhijith s, ultimike, nod_: Primary tabs order when editing a taxonomy term are reversed
    - `feat` Issue #3525727 by alexpott, mxr576, grimreaper, phenaproxima, b_sharpe: Recipe Composer plugin: support wikimedia/composer-merge-plugin
    - `chore` Issue #3532741 by amateescu, smustgrave, plach: Switching workspaces shouldn&#039;t clear the persistent entity cache
    - `fix` Issue #3554522 by alexpott: Only parse and mess with the URI in \Drupal\Core\Utility\UnroutedUrlAssembler::buildExternalUrl() if we have to
    - `chore` Issue #3549953 by idebr: No interface language switch links available on the content translation &#039;add&#039; form
    - `chore` Issue #3549608 by amateescu, plach: Language-neutral path aliases are not deleted with the parent entity
    - `chore` Issue #3554133 by pameeela, phenaproxima, darren oh: Default content importer creates a `public:` directory in the web root when copying certain files
    - `chore` Issue #3548313 by ericpoir, klausi, liam morland, dmitry.korhov, rick bergmann, pwolanin, alexpott: Updating to 10.5.3 causes gateway timeouts on revisioned content
    - `fix` Issue #3555522 by tobiasb: Fix account mock in \Drupal\Tests\menu_link_content\Unit\MenuLinkContentEntityAccessTest::testUnrecognizedOperation for php 8.5
    - `feat` Issue #3555720 by alexpott, adam-vessey, kristiaanvandeneynde: Latest revision subquery optimisation
    - `chore` Drupal 11.2.6
    - `other` Back to dev.
    - `chore` Issue #3556493 by longwave, alexpott: Revert deprecation in ContentEntityStorageBase::__get()
    - `chore` Issue #3556493 by longwave, alexpott: Revert deprecation in ContentEntityStorageBase::__get()
    - `chore` Drupal 11.2.7
  
  </details>
  
- **drupal/core-composer-scaffold**: 10.3.14 → 11.1.8
    <details>
  <summary>📋 Show 12 commits</summary>

    - `fix` Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings
    - `fix` Revert &quot;Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings&quot;
    - `fix` Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings
    - `fix` Issue #3438034 by tannguyenhn, adwivedi008, alex.skrypnyk, alexpott: Fix Composer Scaffold plugin event listeners
    - `chore` Issue #3437335 by fromme, catch: Remove web.config from 11.x
    - `fix` Issue #3444020 by andypost, smustgrave: [8.4] Fix implicitly nullable type declarations in composer plugin
    - `feat` Issue #3266160 by smustgrave, alex.skrypnyk, tannguyenhn, beatrizrodrigues, joachim, larowlan: Composer Scaffold plugin calls dispatch() instead of dispatchScript()
    - `chore` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project
    - `fix` Issue #3463440 by mstrelan, smustgrave: Fix param docs identified by phpstan
    - `fix` Revert &quot;Issue #3463440 by mstrelan, smustgrave: Fix param docs identified by phpstan&quot;
    - `fix` Issue #3463440 by mstrelan, smustgrave, quietone, longwave: Fix param docs identified by phpstan
    - `fix` Issue #3330481 by spokje, quietone, mstrelan, smustgrave: Fix PHPStan L2 error &quot;PHPDoc tag @foo has invalid value (Bar)&quot;
  
  </details>
  
- **drupal/core-recommended**: 10.5.1 → 9.3.22
    <details>
  <summary>📋 Show 68 commits</summary>

    - `chore` Drupal 9.3.0-alpha1
    - `other` Back to dev.
    - `chore` Issue #3246595 by andypost: Update dependencies for 9.3.x
    - `chore` Issue #3248156 by alexpott, longwave: Update dependencies prior to 9.3.0 beta
    - `chore` Issue #3248600 by andypost, longwave: Update dependencies for 9.3.x
    - `chore` Drupal 9.3.0-beta1
    - `other` Back to dev.
    - `chore` Issue #3249233 by longwave: Update 9.3&#039;s Symfony 5 components to 5.4
    - `chore` Drupal 9.3.0-beta2
    - `other` Back to dev.
    - `chore` Issue #3251000 by alexpott, andypost: Update dependencies for 9.1.x/9.2.x/9.3.x/9.4.x
    - `chore` Drupal 9.3.0-beta3
    - `other` Back to dev.
    - `chore` Issue #3238763 by longwave, Spokje, Krzysztof Domański, tstoeckler, quietone: Upgrade egulias/email-validator to v3
    - `chore` Drupal 9.3.0-rc1
    - `other` Back to dev.
    - `chore` Issue #3251768 by longwave: Update Symfony 5 dependencies to 5.4.0
    - `chore` Drupal 9.3.0
    - `other` Back to dev.
    - `chore` Drupal 9.3.1
    - `other` Back to dev.
    - `chore` Drupal 9.3.2
    - `other` Back to dev.
    - `chore` Drupal 9.3.3
    - `chore` Merged 9.3.3.
    - `chore` Drupal 9.3.4
    - `other` Back to dev.
    - `chore` Issue #3262583 by xjm, neclimdul, bnjmnm, catch: Update Twig to 2.14.11
    - `chore` Drupal 9.3.5
    - `chore` Merge 9.3.5, resolve merge conflicts, and update lockfile and dev versions.
    - `chore` Drupal 9.3.6
    - `chore` Merged 9.3.6.
    - `chore` Drupal 9.3.7
    - `other` Back to dev.
    - `chore` Drupal 9.3.8
    - `chore` Merged 9.3.8.
    - `chore` SA-CORE-2022-006 by JeroenT, DamienMcKenna, xjm, pwolanin, alexpott, larowlan, greggles
    - `chore` Drupal 9.3.9
    - `chore` Merge 9.3.9, resolve merge conflicts, and update lockfile and dev versions.
    - `chore` Drupal 9.3.10
    - `other` Back to dev.
    - `chore` Drupal 9.3.11
    - `other` Back to dev.
    - `chore` Drupal 9.3.12
    - `chore` Merged 9.3.12.
    - `chore` Drupal 9.3.13
    - `other` Back to dev.
    - `chore` SA-CORE-2022-010 by mayela, mxr576, xjm, cilefen, greggles, benjifisher, alexpott
    - `chore` Drupal 9.3.14
    - `chore` Merge 9.3.14, resolve merge conflicts, and update lockfile and dev versions.
    - `chore` Drupal 9.3.15
    - `other` Back to dev.
    - `feat` SA-CORE-2022-011 by GHaddon, JeroenT, yivanov, Heine, longwave, DamienMcKenna, mlhess, cilefen, xjm, benjifisher
    - `chore` Drupal 9.3.16
    - `chore` Merge 9.3.16, resolve merge conflicts, and update lockfile and dev versions.
    - `chore` Issue #3291780 by longwave, xjm: guzzlehttp/guzzle 6.5.8 requires guzzlehttp/psr7 ^1.9
    - `chore` Drupal 9.3.17
    - `other` Back to dev.
    - `chore` Drupal 9.3.18
    - `other` Back to dev.
    - `chore` Drupal 9.3.19
    - `chore` Merged 9.3.19.
    - `chore` Issue #3300518 by xjm, catch, neclimdul: Update Diactoros lock file version
    - `chore` Drupal 9.3.20
    - `other` Back to dev.
    - `chore` Drupal 9.3.21
    - `feat` SA-CORE-2022-016 by fabpot, nicolas.grekas, xjm, lauriii, alexpott, Berdir, larowlan, catch, longwave, cilefen, james.williams, benjifisher
    - `chore` Drupal 9.3.22
  
  </details>
  


---

*Report generated by Feature Analyzer*
