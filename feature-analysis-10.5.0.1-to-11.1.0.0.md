# Features & Improvements Report

**Generated**: 2025-11-19 05:38:01

**Repository**: git@github.com:YCloudYUSA/yusaopeny.git
**Comparing**:
- 10.5.0.1 (Jul 14, 2025)- 11.1.0.0 (Nov 17, 2025)


---

## Summary

- **Total Changes**: 158
- **Added Packages**: 59
- **Updated Packages**: 87
- **Removed Packages**: 12
- **Unchanged Packages**: 0

### Changes by Category

**Drupal Core**:
- Added: 0
- Updated: 2
- Removed: 2

**Drupal Contributed Module**:
- Added: 42
- Updated: 30
- Removed: 9

**PHP Library**:
- Added: 17
- Updated: 55
- Removed: 1


---


---

## Changes by Persona

These changes are organized by the user personas most likely to care about them.

**Quick Navigation:**
- [✏️ Content Editors](#-for-content-editors)
- [🔧 Site Builders](#-for-site-builders)
- [💻 Developers](#-for-developers)
- [📊 Decision Makers](#-for-decision-makers)

### ✏️ For Content Editors

*Creates and manages content, builds pages, and uses components on the YMCA website*

**drupal/core** (10.5.1 → 11.1.9)

- **Provides default vertical‑align: top alignment for tables in content editor, ensuring consistent table formatting without manual CSS adjustments**
  - `9f5dc888`- `9f5dc888` Issue #3405277 by scott_euser, anybody: Add vertical-align: top as default for table cells
- **Introduces new block example sections that help content editors understand how to configure blocks within the CMS, enabling easier content creation and layout design**
  - `f1bf725f`- `f1bf725f` Issue #2798531 by quietone, jp.stacey, ranjith_kumar_k_u, Ankit.Gupta, longwave, smustgrave, LoMo, Gábor Hojtsy: Add example and sections to Block API documentation
- **Enables developers to create custom placeholder elements that can be inserted into page layouts, allowing editors to use more flexible content components**
  - `65f5ac35`- `65f5ac35` Issue #3463038 by longwave: Add helper method to generate HTML placeholders
- **Adds support for workspace translations in the admin content overview, enabling editors to view and manage translated content directly from the admin interface**
  - `9d302e5d`- `9d302e5d` Issue #3154087 by amateescu, Tim Bozeman, mallezie, smustgrave: Translations created in a workspace are not shown in the admin content overview
- **Improves CKEditor toolbar customization using ::before content, but has invalid screen‑re‑use? …**
  - `15a01f56`- `15a01f56` Issue #3270139 by jannakha, bnjmnm, smustgrave, mgifford: CKEditor admin toolbar config buttons using ::before to add content: have invalid screen reader text
- **Ensures that URLs entered without a protocol (e.g., &quot;example.com&quot;) are correctly interpreted and displayed, reducing manual corrections when creating or editing pages**
  - `d4c8c21b`- `d4c8c21b` Issue #2893568 by Wim Leers, lee.cocklin, AaronBauman, anon, ainarend: Linking in CKEditor 5: URLs with top-level domain but without protocol should get a protocol added automatically
- **Adds a link to Drupal Support in the Olivero Welcome text, giving content editors quick access to help resources when creating or editing pages**
  - `fdda4128`- `fdda4128` Issue #3416039 by ressa, divya.sejekan, catch, Gábor Hojtsy: Add link to Drupal Support in Olivero Welcome text
- **Creates a new header component for Umami with JavaScript functionality, allowing editors to add dynamic header elements and customize page layouts without writing code**
  - `13a680ce`- `13a680ce` Issue #3404302 by finnsky, smustgrave, lauriii, markconroy: Create header component for Umami, with JS
- **Develops new SDC (Sustainability Data Center) component for Umami Banner, enabling editors to display banner content with custom styling**
  - `7186f7f9`- `7186f7f9` Issue #3365497 by finnsky, Gauravvvv, sarahjean, smustgrave, snig, e0ipso, pdureau: Create new SDC component for Umami Banner

**drupal/better_exposed_filters** (6.0.6 → 7.1.0-beta4)

- **Provides a toggle that lets content editors hide labels on exposed filters, enabling a more streamlined page layout without cluttering the interface with unnecessary text.**
  - `278c293d`- `278c293d` Issue #3282228 by FeyP, DamienMcKenna, smustgrave, neclimdul, matthewmessmer: Add option to hide exposed field labels

**drupal/inline_entity_form** (2.0.0-rc10 → 3.0.0-rc21)

- **Provides an accessible label for the weight selection dropdown, enabling content editors to understand the purpose of the option when using assistive technologies**
  - `23cd78d5`- `23cd78d5` Issue #3311501 by dcam, edmund.dunn, geek-merlin: Add label to weight select field for accessibility

**drupal/webform** (6.3.0-beta3 → 6.3.0-beta5)

- **Fixed visual alignment of webform add‑ons summary on warning messages, ensuring the layout looks clean for users editing forms and preventing misplacement of error notifications**
  - `7227446b`- `7227446b` Issue #3541440 by eric.vvf, liam morland, jrockowitz: Visual alignment issue: .webform-addons-summary floats beside warning messages instead of appearing above
- **Extends the Terms of Service element with an option to add a link, allowing editors to embed external references directly within form fields for better user guidance**
  - `174cea37`- `174cea37` Issue #3487468: Extend &quot;Terms of service&quot; element with the option to add a link
- **Provides content editors with an additional layout option for Webform Flexbox fields, enabling them to align form sections horizontally or vertically without code changes.**
  - `7595248c`- `7595248c` Issue #3483410: Add justify content settings in WebformFlexbox Element

**symfony/validator** (v6.4.23 → v7.4.0-RC1)

- **Adds Indonesian translations for validation messages, enabling content editors to use the platform in Indonesian language and improve user experience for local audiences.**
  - `448b9923`- `448b9923` fix: added new indonesian translations

**sebastian/diff** (4.0.6 → 5.1.1)

- **Adds a link to the security policy page in the site navigation, enabling editors to quickly reference and share the policy with users and stakeholders.**
  - `2c9aad82`- `2c9aad82` Add link to security policy

**ezyang/htmlpurifier** (v4.18.0 → v4.19.0)

- **Provides a feature that allows content editors to use larger image sizes without needing additional configuration or editing tools; this enhances visual presentation on the YMCA website**
  - `00a07484`- `00a07484` feat: Allow more image widths by default (#430)

**ycloudyusa/y_lb_demo_content** (3.4.5 → 4.0.0-beta4)

- **Adds icons to the Media Library, enabling editors to visually identify media items and quickly select appropriate images or assets for pages.**
  - `24071476`- `24071476` Add icons to the Media Library


### 🔧 For Site Builders

*Installs, configures, and deploys YMCA Website Services platform*

**drupal/core** (10.5.1 → 11.1.9)

- **Updates the MAINTAINERS.txt file to reflect current maintainer roles, which affects deployment and configuration management during platform updates**
  - `48661d8c`- `48661d8c` Issue #3516253 by lostcarpark, mradcliffe, rachel_norfolk, chrisdarke, volkswagenchick: Add lostcarpark as Mentoring Coordinator to MAINTAINERS.txt
- **Issue #3516770 by acbramley, larowlan, bbrala, quietone: Add acbramley as co-maintainer for node module**
  - `01fd59b2`- `01fd59b2` Issue #3516770 by acbramley, larowlan, bbrala, quietone: Add acbramley as co-maintainer for node module
- **Issue #3516359 by larowlan, smustgrave, longwave, lauriii, wim leers, mstrelan: ComponentValidator ignores the set validator and creates a new one**
  - `2cee90be`- `2cee90be` Issue #3516359 by larowlan, smustgrave, longwave, lauriii, wim leers, mstrelan: ComponentValidator ignores the set validator and creates a new one
- **Issue #3508733 by gábor hojtsy, griffynh: Add griffynh as provisional core team facilitator**
  - `0a8fe056`- `0a8fe056` Issue #3508733 by gábor hojtsy, griffynh: Add griffynh as provisional core team facilitator
- **Issue #2927338 by berdir, anmolgoyal74, swatichouhan012, smustgrave, alexpott, gábor hojtsy: Ensure config entity langcode property does not change when installing, adding or editing a language**
  - `48ec1302`- `48ec1302` Issue #2927338 by berdir, anmolgoyal74, swatichouhan012, smustgrave, alexpott, gábor hojtsy: Ensure config entity langcode property does not change when installing, adding or editing a language
- **Adds a hook for module integration at the top of the content section, simplifying deployment of custom modules that require placement in the new navigation structure**
  - `6d278495`- `6d278495` Issue #3463142 by plopesc, m4olivei, larowlan, penyaskito: Allow modules to hook into top of content section of new core navigation
- **Enables caching of navigation render arrays, simplifying deployment and configuration by ensuring consistent page load times across environments**
  - `cacbe74b`- `cacbe74b` Issue #3493406 by catch, godotislate: Add render caching for the navigation render array
- **Issue #3478628 by oily, alexpott, catch, sheshsharma, osopolar, dunx, shane birley, joegl: Fatal error: Uncaught TypeError: Drupal\Core\Extension\ThemeHandler::addTheme()**
  - `0372fb2b`- `0372fb2b` Issue #3478628 by oily, alexpott, catch, sheshsharma, osopolar, dunx, shane birley, joegl: Fatal error: Uncaught TypeError: Drupal\Core\Extension\ThemeHandler::addTheme()
- **Updating view plugin code removes deprecated testing method, ensuring the platform remains compatible with current PHP and PHPUnit environments during deployment**
  - `37d224d5`- `37d224d5` Issue #3480419 by mondrake, smustgrave, catch: Method getMockForAbstractClass() is deprecated - replace in views plugins
- **Issue #3490954 by nexusnovaz, mstrelan: Add return types to hook_update_N implementations**
  - `1d629fe1`- `1d629fe1` Issue #3490954 by nexusnovaz, mstrelan: Add return types to hook_update_N implementations
- **Introduces a new equivalent updates API that allows site builders to specify the minimum and maximum version ranges for automated updates, simplifying deployment configuration and preventing unexpected major upgrades**
  - `2b1e0890`- `2b1e0890` Issue #3463226 by quietone, dww, smustgrave, catch, xjm: Use the new equivalent updates API to prevent updates from 10.4.0 to 11.0.0
- **Introduces a Config Action that allows site builders to add new blocks to the navigation via recipes, simplifying deployment of custom navigation elements without manual configuration**
  - `90406aa4`- `90406aa4` Issue #3478224 by plopesc, m4olivei, penyaskito, dmitry.korhov, phenaproxima: Provide Config Action to add new blocks to navigation from recipes
- **Provides a new API endpoint for managing icons, allowing site builders to configure icon libraries during deployment and automate icon updates without manual file handling.**
  - `a9db6605`- `a9db6605` Issue #3471494 by mogtofu33, catch, pdureau, nod_, larowlan, andypost, mxh, grimreaper, ckrina, quietone: Add an icon management API
- **Issue #3478621 by catch, nicxvan, longwave, alexpott: Add filecache to OOP hook attribute parsing**
  - `0b3e06f7`- `0b3e06f7` Issue #3478621 by catch, nicxvan, longwave, alexpott: Add filecache to OOP hook attribute parsing
- **The removal of createCopy action and addition of cloneAs method affects deployment scripts and configuration settings for entity displays, ensuring consistency across environments**
  - `80341a8c`- `80341a8c` Issue #3483353 by a.dmitriiev, phenaproxima, atul_ghate, alexpott, roderik: Remove the createCopy action from EntityDisplayBase, and make cloneAs compatible with wildcards
- **The change eliminates a deprecated function call that’s part of the core configuration workflow, which may affect deployment scripts and cross‑platform compatibility**
  - `d518cd48`- `d518cd48` Issue #3488742 by catch, phenaproxima, gábor hojtsy: Stop calling node_add_body_field() from NodeTypeForm
- **Issue #3418136 by shalini_jha, smustgrave, rohit sankhla: Add last() function to ItemInterface/ItemList**
  - `1cd878a8`- `1cd878a8` Issue #3418136 by shalini_jha, smustgrave, rohit sankhla: Add last() function to ItemInterface/ItemList
- **Introduces a reusable trait for recipe‑form handling, which can be enabled in deployed sites to standardize form behavior and simplify configuration during deployment**
  - `2f638cb0`- `2f638cb0` Issue #3483435 by phenaproxima, alexpott, thejimbirch: Add a trait for forms that want to collect input on behalf of a recipe
- **Issue #3478621 by catch, longwave, nicxvan: Add filecache to OOP hook attribute parsing**
  - `f0843d43`- `f0843d43` Issue #3478621 by catch, longwave, nicxvan: Add filecache to OOP hook attribute parsing
- **Issue #3480442 by mstrelan, alexpott, smustgrave: Add return types to UserCreationTrait**
  - `cb324402`- `cb324402` Issue #3480442 by mstrelan, alexpott, smustgrave: Add return types to UserCreationTrait
- **Issue #3483050 by mstrelan, nicxvan: Add int return type to all hook_update_last_removed implementations**
  - `a5d57126`- `a5d57126` Issue #3483050 by mstrelan, nicxvan: Add int return type to all hook_update_last_removed implementations
- **Ensures accurate hook documentation is available during deployment and configuration, aiding site builders in understanding hook usage and avoiding misconfiguration**
  - `8e4e9839`- `8e4e9839` Issue #3485690 by nicxvan: Update Implements hook comments to be accurate or add them if missing
- **Issue #3480029 by kim.pepper, mstrelan: Add return typehint to \Drupal\Core\DependencyInjection\DeprecatedServicePropertyTrait::__get()**
  - `b0db4fa1`- `b0db4fa1` Issue #3480029 by kim.pepper, mstrelan: Add return typehint to \Drupal\Core\DependencyInjection\DeprecatedServicePropertyTrait::__get()
- **Issue #3483899 by nicxvan, godotislate: hook_module_implements_alter hook_cache_flush can only be procedural**
  - `3be754e4`- `3be754e4` Issue #3483899 by nicxvan, godotislate: hook_module_implements_alter hook_cache_flush can only be procedural
- **Introduces a new config action that can be executed via the admin UI or CLI, simplifying deployment of cloned configurations across environments and streamlining site setup**
  - `9d12b2c8`- `9d12b2c8` Issue #3481238 follow-up by phenaproxima, a.dmitriiev, b_sharpe, alexpott: Add a config action to clone a config entity
- **Introduces a new config action that allows site builders to clone configuration entities via the UI or command line, simplifying deployment workflows and ensuring consistent configuration across environments.**
  - `417d0416`- `417d0416` Issue #3481238 by phenaproxima, a.dmitriiev, b_sharpe, alexpott: Add a config action to clone a config entity
- **Adds a taxonomy term view configuration file to the tag_taxonomy recipe, enabling automated deployment of taxonomy views and simplifying site setup for new sites**
  - `2bc8f11f`- `2bc8f11f` Issue #3479665 by thejimbirch, danny englander, phenaproxima, pameeela: Add views.view.taxonomy_term.yml to tag_taxonomy recipe
- **Introduces a new comparison rule for recipe imports that simplifies deployment configuration management by reducing unnecessary strict comparisons**
  - `5881f9dd`- `5881f9dd` Issue #3478332 by phenaproxima, nicxvan, thejimbirch, alexpott: Add a way to prevent recipes&#039; imported config from being compared too strictly to active config
- **Eliminates outdated JavaScript that may cause conflicts during deployment, improving platform stability and simplifying maintenance**
  - `b008e50c`- `b008e50c` Issue #3470694 by tom konda: Remove deprecated document.all in /misc/tabledrag.js
- **Requires updating the dependency configuration for daily automated builds, ensuring continuous integration pipelines are stable**
  - `47899c48`- `47899c48` Issue #3470235 by Spokje: open-telemetry/sem-conv:1.27.0 introduces new deprecation, breaks daily updated deps run
- **Incorporates the latest dependency version, which needs deployment updates and cross‑compatibility testing**
  - `de0c8701`- `de0c8701` Issue #3468502 by Spokje, mondrake: sebastianbergmann/comparator:5.0.2 Introduces (for Drupal) breaking changes
- **Ensures that AJAX-loaded JavaScript is processed for optimization regardless of maintenance mode, allowing site builders to deploy updates without needing to toggle maintenance mode for the script optimization step**
  - `1791c83a`- `1791c83a` Issue #3452672 by catch, PunamShelke, cilefen, smustgrave, mmillford: JavaScript files added by AJAX responses are only optimized in maintenance mode
- **Introduces new validation rules in the system.logging API, requiring configuration updates for logging services during deployment and ensuring consistent behavior across environments**
  - `5c08461f`- `5c08461f` Issue #3436632 by omkar.podey, yash.rode, Wim Leers, smustgrave: Add validation constraints to system.logging
- **Updates core to use current Entity API, ensuring deployments run without errors caused by deprecated classes**
  - `4ffd3eee`- `4ffd3eee` Issue #3094865 by quietone, _utsavsharma, hchonov, Berdir, smustgrave, catch: Fix references to the deprecated Entity class
- **Improves error handling during deployment or configuration, ensuring that users can identify connection issues with more detailed messages**
  - `4ffe6c00`- `4ffe6c00` Issue #3457009 by ankitv18, quietone, joachim: Add input string to exception message thrown in createConnectionOptionsFromUrl()
- **Introduced a new flexible configuration mechanism, providing site builders with the ability to modify core settings through configuration files without needing manual code changes or redeployments.**
  - `0e39184c`- `0e39184c` Issue #3448131 by mandclu, phenaproxima, ultrabob, immaculatexavier, alexpott, thejimbirch, mtift, laura.j.johnson@gmail.com: Create flexible config actions to place a block in the admin or default themes
- **Extends the recommended and legacy project templates with recipe modules and configuration defaults, simplifying deployment of sites that require recipe functionality without manual module installation**
  - `72abc007`- `72abc007` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project
- **Adds a requirement check for the access block library in BlockContentAccessControlHandler, ensuring that deployments on environments lacking this module fail gracefully and allowing site builders to validate dependencies before deployment**
  - `e72e0fd3`- `e72e0fd3` Issue #3412420 by acbramley, douggreen, Hardik_Patel_12, xjm, smustgrave, larowlan: BlockContentAccessControlHandler requires access block library permission for create
- **Introduces validation checks for action configuration files, ensuring that deployment scripts and automated actions run correctly without manual intervention**
  - `71912c8f`- `71912c8f` Issue #3449259 by narendraR, alexpott, catch, Wim Leers: Add validation constraints to system.action.*
- **Index creation alters the database schema; site builders must update deployment scripts or migration plans to include this new index when provisioning environments**
  - `f5a1a23c`- `f5a1a23c` Issue #3156439 by alexpott, catch, bonsaipuppy, mkalkbrenner, longwave, xjm: Add an index on locales_location on type and name
- **Introduces a new navigation subsystem maintainer configuration, enabling site builders to assign specific maintenance roles for navigation modules and streamline deployment of navigation-related updates**
  - `c9d05df6`- `c9d05df6` Issue #3458246 by ckrina, finnsky, nod_, m4olivei, plopesc: Add subsystem maintainers for Navigation
- **Introduces a new validation layer that requires configuration checks before deployment, ensuring consistency of service configurations during site builds**
  - `3310b1fa`- `3310b1fa` Issue #3436164 by omkar.podey, kunal.sachdev, pradhumanjain2311, smustgrave, Wim Leers, narendraR, alexpott, larowlan, borisson_: Add validation constraints to user.settings
- **Adds a new co-maintainer for the core theme system, ensuring that site builders can rely on updated theme support and maintain consistency across deployments when configuring themes.**
  - `4e051663`- `4e051663` Issue #3447487 by e0ipso: Add e0ipso as a co-maintainer of core theme system with focus on SDC
- **Updates the core misc module configuration by ignoring jquery.form.js, simplifying deployment scripts and ensuring cleaner build artifacts**
  - `252f9fc2`- `252f9fc2` Issue #3444587 by alexpott: Add CSS to prettier command and fix core/misc/jquery.form.js to be ignored
- **Ensures proper BigPipe integration with Claro theme, which is crucial for accurate deployment of the core theme and site configuration**
  - `ae329a76`- `ae329a76` Issue #3441137 by catch, mherchel: BigPipe injecting Local Actions block creates large janky layout shift in Claro
- **Simplifies configuration by removing deprecated render components, ensuring a stable deployment environment**
  - `142fee31`- `142fee31` Issue #3441392 by Binoli Lalani, smustgrave, andypost, quietone, pradhumanjain2311, longwave, catch: Removed deprecated code in Render system
- **Introduces pagination support on the workspace management interface, allowing site builders to configure and deploy sites with larger workspace collections without manual list truncation or UI clutter.**
  - `23eeb724`- `23eeb724` Issue #3273461 by amateescu, smustgrave, alexpott: Add pagination to the workspace manage page
- **Removal of deprecated modules simplifies deployment, reduces potential conflicts during installation, and streamlines configuration for a clean production environment**
  - `30f78685`- `30f78685` Issue #3443493 by smustgrave, mikelutz, Gábor Hojtsy, catch, longwave: Remove deprecated code from lib/State and lib/Session
- **Allows configuration of workspace-safe VBO actions via admin settings, enabling site builders to enforce consistent workflow across environments**
  - `399ef4ac`- `399ef4ac` Issue #2986005 by amateescu, longwave: Add the ability to mark (VBO) actions as workspace-safe
- **Simplifies deployment and maintenance by removing outdated modules and ensuring that the core system remains fully compatible with current Drupal settings**
  - `86450c78`- `86450c78` Issue #3443495 by smustgrave, mikelutz: Remove deprecated code from lib/Update, lib/Updated, and lib/Validation
- **Updates core menu schema with new validation rules, requiring site builders to review menu configurations during deployment to avoid errors**
  - `a8aec03f`- `a8aec03f` Issue #3441434 by narendraR, Wim Leers: Add validation constraints to core.menu.schema.yml
- **Decommissioned legacy logger and menu utilities simplifies deployment configuration and reduces the risk of mis‑configured logging or menu handling during site build**
  - `2a223b0a`- `2a223b0a` Issue #3443490 by smustgrave: Remove deprecated code from lib/Logger and lib/Menu
- **Cleaning up deprecated libraries improves system stability and reduces maintenance overhead during deployment and configuration updates.**
  - `09182a40`- `09182a40` Issue #3443488 by smustgrave: Remove deprecated code from lib/Flood and lib/Form
- **Eliminates obsolete migration module code that may affect deployment stability and configuration consistency during site builds**
  - `05302f31`- `05302f31` Issue #3443205 by andypost, smustgrave: Remove deprecated code from migration modules
- **Reduces potential conflicts with deprecated search/option settings during deployment or configuration updates**
  - `173ea49d`- `173ea49d` Issue #3443206 by smustgrave: Remove deprecated code from search and options modules
- **...**
  - `828fa2af`- `828fa2af` Issue #3443203 by smustgrave, andypost: Remove deprecated code from menu link content module
- **Eliminates outdated user module functions, reducing potential configuration conflicts during deployment and ensuring the platform runs on newer Drupal core APIs**
  - `3ae7cbb9`- `3ae7cbb9` Issue #3432868 by smustgrave, obsidian_, longwave, quietone, mstrelan, catch: Remove deprecated code from user module
- **The removal of deprecated migration‑tied‑s the … …?**
  - `a15d5701`- `a15d5701` Issue #3439369 by fromme, quietone, pradhumanjain2311, smustgrave, alexpott: Remove deprecated code in migration system
- **Deprecated code removal improves system stability and reduces maintenance overhead during platform deployment, ensuring newer Drupal versions run without legacy dependencies.**
  - `78f4e11c`- `78f4e11c` Issue #3439824 by quietone: Remove deprecated code from assertion, eventdispatcher and plugin components
- **Corrects label/description formatting in the core module, enabling site builders to deploy sites with consistent UI labels and proper documentation during configuration setup**
  - `98ca9a14`- `98ca9a14` Issue #3295078 by quietone, dww, AaronMcHale, Anybody, benjifisher, andregp, shaal, rkoller, xjm, worldlinemine, simohell: Fix the label and description of the new &quot;view update notifications&quot; permission
- **Introduces an optional configuration option for site builders to reposition comment forms within pages, enabling easier layout adjustments without modifying code**
  - `4dccbe9f`- `4dccbe9f` Issue #3439844 by ivnish, KrakenBite, larowlan, smustgrave: Add setting to move comment form after comments
- **Improved image handling support for site builders—more accurate image constraints and improved performance when using images in content**
  - `f96ec551`- `f96ec551` Issue #3439932 by phenaproxima, narendraR, Wim Leers, larowlan: Add validation constraints to system.image and system.image.gd
- **The removal of legacy attributes and addition of supported_branches in update.module XML fixtures simplifies deployment configuration for site builders, allowing them to manage updates across different branches without dealing with outdated settings.**
  - `b136381b`- `b136381b` Issue #3280679 by quietone, Wim Leers: Remove legacy attributes, add supported_branches and consistently name update.module&#039;s XML fixtures
- **The alter table change affects deployment and configuration of the Drupal core, ensuring proper database migration during site setup**
  - `e04c062b`- `e04c062b` Issue #3001496 by jonathanshaw, SmovS, Prashant.c, ptmkenny, smustgrave, manish-31, alexpott, bojanz, tedbow, elber, Berdir, quietone: Add an alter hook to EntityQuery
- **Provides an updated link in the Update module docs, aiding site builders in locating installation instructions during deployment and troubleshooting**
  - `10655fc4`- `10655fc4` Issue #3420356 by dww, thursday_bw, Kanchan Bhogade, smustgrave, benjifisher, catch, alexpott: Add link to Update module documentation about installer settings
- **Defines the enum-based configuration options for file existence behavior, enabling site builders to set precise file handling policies in Drupal settings**
  - `7e71fba3`- `7e71fba3` Issue #3426506 by kim.pepper, smustgrave, mstrelan, alexpott: Create enums for File exists options and deprecate consts
- **Enhances the platform’s configuration loader by adding tagged_iterator support, allowing site builders to load custom YAML configurations more efficiently during deployment**
  - `e6a316b5`- `e6a316b5` Issue #3414208 by kim.pepper, longwave, alexpott: Add support for tagged_iterator to YamlFileLoader
- **Simplifies the shortcut module’s configuration by removing deprecated functions, ensuring smoother deployment and compatibility with newer Drupal core versions**
  - `35aceade`- `35aceade` Issue #3436892 by plopesc, smustgrave: Remove deprecated code from shortcut module
- **Improved cron scheduling configuration for site builders; the new validation constraints ensure that cron schedules are properly defined and user‑tuned **
  - `fae8e584`- `fae8e584` Issue #3436671 by narendraR, Wim Leers, phenaproxima: Add validation constraints to system.cron
- **Adds PHP 8.3 as a minimum requirement for Drupal 11.0.x, ensuring that deployments on the YMCA website use a supported runtime and preventing compatibility issues during installation or upgrade.**
  - `b6331db0`- `b6331db0` Issue #3413268 by BramDriesen, longwave, Spokje, catch, mondrake, quietone, andypost: Add PHP 8.3 requirement to Drupal 11.0.x
- **Adds configuration option to enable or disable lazy session database creation, allowing site builders to control the behavior of session persistence and optimize deployment settings**
  - `e7017f6a`- `e7017f6a` Issue #3428565 by catch, phenaproxima, alexpott: Implement lazy database creation for sessions
- **Updates core JavaScript to remove deprecated functions, reducing potential build failures during deployment and improving overall platform stability**
  - `19a71a3a`- `19a71a3a` Issue #3432151 by Tom Konda, longwave: [jQuery 4] ajax.js and jquery.form.js use deprecated function $.parseJSON()
- **Ensures that creating new workspace creates automatically switch to it, simplifying workspace setup for deployment and configuration management**
  - `c4d64828`- `c4d64828` Issue #3278377 by amateescu, s_leu, smustgrave, pooja saraah, rkoller, simohell: Creating a new workspace should also switch to it
- **Addresses workspace‑specific issues related to entity creation, enabling site builders to reliably deploy new content types and configurations without encountering errors during deployment or staging**
  - `62ccc2af`- `62ccc2af` Issue #3025785 by amateescu, mallezie, s_leu, smustgrave, tim.plunkett: Cannot create entity with image in a workspace
- **Adds outline for active state buttons in the UI, enabling site builders to configure button styles more easily and improve accessibility**
  - `87416478`- `87416478` Issue #3306209 by jannakha, Gauravvvv, smustgrave, athyamvidyasagar, pameeela, Wim Leers, mgifford: Add outline to buttons with active state
- **Add … ?**
  - `322ba45c`- `322ba45c` Issue #3408849 by markconroy, finnsky: Add @finnsky as core maintainer for Umami
- **Adds an interface to the Views module that enables site builders to configure advanced view operations through code, simplifying deployment of complex view configurations across environments**
  - `6290bae4`- `6290bae4` Issue #3320569 by Spokje, mondrake, smustgrave, longwave, quietone, Lendude, alexpott: Add an interface for operators() on views
- **Introduces a new owner property on BlockContent entities, allowing site builders to configure deployment settings that track block ownership for better content management across environments**
  - `c4e09053`- `c4e09053` Issue #3038365 by acbramley, Grimreaper, smustgrave, catch: Add owner to the BlockContent entity type
- **Introduces configuration option for workspaces that allows administrators to exclude certain entity types from processing, simplifying deployment scripts and ensuring consistent environment setup across different site builds**
  - `ff7343d4`- `ff7343d4` Issue #3101671 by amateescu, webdrips, smithmilner, s_leu, smustgrave: Add mechanism to have workspaces skip processing entity types
- **Corrects the sync check for config installers, improving deployment reliability by guaranteeing that field configurations are correctly applied during site builds**
  - `499d8e77`- `499d8e77` Issue #3421731 by larowlan, byrond: field_field_config_create should check if the config installer is syncing
- **...**
  - `302317ad`- `302317ad` Issue #3358581 by pfrenssen, _tarik_, a.dmitriiev, smustgrave, longwave, larowlan: Deprecated function: array_slice(): Passing null to parameter #2 ($offset) of type int is deprecated in Drupal\Core\Config\Entity\Query\Query-&gt;execute()

**drupal/core-composer-scaffold** (10.5.6 → 11.1.9)

- **Provides recipe support within the default project scaffolds, allowing site builders to deploy sites that already contain recipe modules or content types without additional configuration steps**
  - `79e3fcb1`- `79e3fcb1` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project

**drupal/admin_toolbar** (3.6.1 → 3.6.2)

- **Backported the MacOS shortcut fix to the current release, ensuring deployment environments run with consistent admin toolbar functionality across macOS users**
  - `0412425d`- `0412425d` Issue #3527344 by justcaldwell, erutan, dydave: Fixed support for new keyboard shortcuts for MacOS.

**drupal/better_exposed_filters** (6.0.6 → 7.1.0-beta4)

- **Enables right‑to‑left language layouts on the site by adding RTL support to slider filters, simplifying deployment of multilingual sites without manual CSS tweaks**
  - `939d0c50`- `939d0c50` Add support for RTL in slider filters
- **Addresses a bug in the resetForm() functionality that affects deployment stability, allowing site builders to avoid unexpected warning messages on live sites**
  - `d77a2d53`- `d77a2d53` [#3538204] feat: resetForm() triggers warning when exposed sort elements is missing #default_value

**drupal/captcha** (2.0.7 → 2.0.9)

- **The change modifies the rendering of the CAPTCHA module, requiring site builders to verify that the generated markup includes the data-nosnippet attribute when deploying or updating the site**
  - `f40e0f59`- `f40e0f59` Issue #3536050 by grevil, anybody: Add data-nosnippet around captcha

**drupal/inline_entity_form** (2.0.0-rc10 → 3.0.0-rc21)

- **Ensures that deployments in environments where users have limited bundle creation permissions correctly display the appropriate inline entity form, preventing confusion during site configuration and reducing deployment errors**
  - `d8419f6d`- `d8419f6d` Issue #3358281 by bkosborne, geek-merlin: Wrong bundle form is displayed if user has permissions to create only of the available bundles

**drupal/metatag** (2.1.1 → 2.2.0)

- **Introduces a new configuration option for the metatag module to enable or disable fediverse:creator tag generation, simplifying deployment of sites that need compliance with federated social media standards**
  - `fa211c54`- `fa211c54` Issue #3458724 by damienmckenna, rachel_norfolk, pacproduct, petr illek: Add support for fediverse:creator.

**drupal/openy_gtranslate** (1.0.8 → 2.0.0)

- **Updates the legacy Carnation theme configuration to include proper Google Translate widget setup, allowing site builders to deploy sites with accurate multilingual functionality without manual adjustments**
  - `84deeef8`- `84deeef8` Fix Google Translate functionality on legacy Carnation theme

**drupal/scheduler** (2.2.1 → 2.2.2)

- **Provides a new rule that can be set via the site builder UI or config files to trigger job runs during commits or MR events, enabling automated deployment workflows and reducing manual intervention.**
  - `5e9592e4`- `5e9592e4` Issue #3356800 by jonathan1055: Add rules to run jobs on commit and in MR, defaulting to manual
- **Eliminates obsolete system data retrieval function, simplifying deployment scripts and reducing potential configuration errors during site build**
  - `c4f9af05`- `c4f9af05` #3553242 Ignore deprecated getSystemData()

**drupal/webform** (6.3.0-beta3 → 6.3.0-beta5)

- **Updates the configuration of webform libraries to include minification settings, allowing site builders to configure deployment build steps and ensure efficient asset delivery**
  - `1285584a`- `1285584a` Issue #3523478: Add `minified: true` to files in webform.libraries.yml
- **Ensures that the deployed YMCA website’s tooltip component complies with accessibility standards, allowing site builders to confidently deploy without encountering compliance failures**
  - `12467387`- `12467387` Issue #3516047 by marthinal, jwilson3: Accessibility violation: Tippy.js adds aria-expanded to &lt;span&gt; with role=&quot;tooltip&quot;
- **Adds support for identifying webform nodes in the Drupal site configuration, simplifying deployment of custom forms and ensuring consistency across environments**
  - `516877dc`- `516877dc` Issue #3504078 by liam morland, milosr, jrockowitz, crutch, ivan616: Operations Dropbutton improvement, need webform node id/class or form id for a webform node
- **The removal of Add-ons simplifies deployment configuration by eliminating unused module dependencies and updates the platform’s component list.**
  - `893122a6`- `893122a6` Issue #3542964: Remove Add-ons feature
- **Adds a configurable error message for file upload limits in Drupal webform, allowing site builders to adjust user-facing messages without modifying code**
  - `9eb1fb52`- `9eb1fb52` [#3543014] feat: Make form_file_limit error message configurable
- **Ensures correct file upload behavior across deployments by resolving an issue that would otherwise cause failed uploads during site builds**
  - `af56ea0e`- `af56ea0e` [#3484772] feat: Managed file element using &quot;button&quot; option appears to incorrectly invalidate valid uploads
- **Enhances the phone number field validation across multiple sites by integrating state-aware checks, simplifying deployment of consistent form behavior in different regions**
  - `d4dc5e73`- `d4dc5e73` [#3519674] feat: Telephone validation issues when using states and pages
- **Provides a reliable ZIP code validation across all deployments, enabling consistent form handling and reducing errors from user input**
  - `e2f907f5`- `e2f907f5` [#3520969] feat: Validate US ZIP codes in the Advanced Address element
- **Ensures that required multi‑value fields are correctly validated across deployments, which improves form reliability and user experience**
  - `84dfe5c0`- `84dfe5c0` [#3512775] feat: Minimum items not respected when multi-value element is required
- **Adds a cleanup routine during webform deletion that deletes related submissions, simplifying maintenance tasks for site builders by ensuring no residual data remains after form removal**
  - `36247b0c`- `36247b0c` [#3257570] feat: Ensure that submission are deleted when a webform is deleted
- **The feature introduces configuration options for setting the purge behavior on form submissions, simplifying deployment by allowing site builders to control how long data persists without manual intervention**
  - `dba0924f`- `dba0924f` [#3440133] feat: Submissions can be purged immediately after submission
- **Provides reliable import functionality for webform submission data, allowing site builders to deploy and update sites with accurate historical records without manual re‑import**
  - `a91016d1`- `a91016d1` [#3414928] feat: Webform submission import: failed to import a lot of records executed in multiple batches
- **Improves configuration stability by ensuring the SymfonyMailer plugin‑related errors are handled without affecting deployment or runtime performance**
  - `708da243`- `708da243` [#3423775] feat: Error message when using SymfonyMailer plugin
- **Corrects the loop handling in the translation manager, which may affect deployment stability when translating webforms across environments; this patch ensures consistent behavior on all deployed sites**
  - `92d18cdf`- `92d18cdf` [#3491104] feat: Warning: foreach() argument must be of type array|object, null given in Drupal\webform\WebformTranslationLingotekManager

**drupal/openy_pef_gxp_sync** (1.1.10 → 2.0.1)

- **Updates composer dependencies by adding drupal/groupexpro, simplifying deployment scripts and ensuring consistent package versions across environments**
  - `8a953b4e`- `8a953b4e` feat: add drupal/groupexpro as deps
- **Incorporates new dependency on openy_mappings via composer, which requires updating deployment scripts and configuration; this ensures consistent application version **
  - `e3827a0c`- `e3827a0c` feat: add drupal/openy_mappings as deps in composer.json

**drupal/ymca_sync** (10.0.6 → 11.0.0)

- **The replace entry in composer.json allows site builders to manage the package version hierarchy, simplifying deployment and avoiding duplicate dependencies**
  - `23b20c69`- `23b20c69` Add replace to composer.json
- **Upgrading Drupal core to Drupal 11 requires site builders to update configuration files and deploy the updated platform; this changes the system architecture and supports newer features**
  - `3e63f504`- `3e63f504` feat: update to drupal 11

**drupal/responsive_favicons** (2.0.1 → 3.0.1)

- **Changes the URL generation logic for favicons in the responsive_favicons module, requiring site builders to update deployment scripts or configuration to reflect new URL patterns and maintain correct icon references across environments**
  - `d2d2ad5a`- `d2d2ad5a` Issue #3510938 by mably: Add suffix to icons URLs for better browser cache handling

**ycloudyusa/yusaopeny** (10.5.0.1 → 11.1.0.0)

- **Provides a new deployment configuration option for the YUSA platform in Drupal 11, enabling site builders to deploy with more granular control over environment settings**
  - `5c91318a`- `5c91318a` feat: Add features dev
- **Forking Drupal features into ws_outsiders enables site builders to deploy and configure the platform with isolated feature sets, reducing conflicts during installation and deployment.**
  - `13ebee60`- `13ebee60` feat: move drupal/features to fork in ws_outsiders
- **Adds Drupal core Composer scaffold version ~11.0.13 to the project dependencies, enabling the platform to install and run with the latest Drupal 11 environment, simplifying deployment and ensuring compatibility with newer modules.**
  - `44770558`- `44770558` feat: add &quot;drupal/core-composer-scaffold&quot;: &quot;~11.0.13&quot;,
- **Introduces configuration options to allow beta and RC releases of openy_carnation, simplifying deployment and version management for site builders**
  - `f5926031`- `f5926031` feat: alow beta and rc releases for openy_carnation
- **Updates Drupal core to version 11.1.8, ensuring compatibility with existing modules and security patches; site builders must deploy this update to maintain stability and access new platform features.**
  - `6730ebc2`- `6730ebc2` feat: update Drupal core to 11.1.8
- **Provides a structured upgrade process for Drupal 11, including configuration adjustments and deployment scripts, enabling site builders to plan and execute the migration with minimal downtime**
  - `3ea5e1b5`- `3ea5e1b5` feat: Drupal 11 upgrade path

**symfony/console** (v6.4.23 → v7.4.0-RC2)

- **Adds support for interactive console commands, simplifying deployment scripts by allowing automated user interaction during configuration steps**
  - `cd2f31f1`- `cd2f31f1` feature #61748 [Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes (yceruto)
- **Introduces a new input annotation that allows configuration of command parameters via Symfony&#039;s dependency injection container, simplifying deployment scripts and reducing manual parameter parsing**
  - `525f69f6`- `525f69f6` [Console] Add #[Input] attribute to support DTOs in commands

**symfony/dependency-injection** (v6.4.23 → v7.4.0-RC2)

- **Provides a JSON schema that can be used to validate YAML config files during deployment, ensuring correct syntax and preventing runtime errors when configuring dependency injection or routing settings.**
  - `2d38f116`- `2d38f116` feature #61282 [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files (nicolas-grekas)

**symfony/http-kernel** (v6.4.23 → v7.4.0-RC2)

- **Eliminates unnecessary signer configuration options, making deployment and system setup more straightforward**
  - `4e1be73e`- `4e1be73e` drop the ability to configure a signer with the IsSignatureValid attribute
- **Adds new attribute that requires configuration of the HTTP kernel&#039;s signer settings, affecting deployment and system setup**
  - `e129d986`- `e129d986` [HttpKernel] Add `#[IsSignatureValid]` attribute
- **Ensures proper caching support in deployment environments, because the bug was affecting cache performance and reliability**
  - `5be86590`- `5be86590` bug #61518 [HttpKernel] Handle an array vary header in the http cache store for write (philpichet)

**symfony/var-dumper** (v6.4.23 → v8.0.0-RC1)

- **Updates the minimum PHP version to 8.2 for the symfony/var-dumper package, ensuring compatibility with newer PHP releases and preventing deployment failures on servers that run older versions.**
  - `ab6d26bc`- `ab6d26bc` feature #50404 [7.0] Bump to PHP 8.2 minimum (nicolas-grekas)

**symfony/mailer** (v6.4.23 → v7.4.0-RC1)

- **Cleaning up deprecated paths ensures smoother deployment and reduces potential runtime errors during platform updates**
  - `ff357d80`- `ff357d80` [7.0] Remove remaining deprecated code paths
- **Introduces a new configuration option &quot;auto_tls&quot; for SMTP DSNs, enabling site builders to control STARTTLS behavior during deployment without needing code modifications, simplifying server compatibility adjustments.**
  - `87877980`- `87877980` [Mailer] [Smtp] Add DSN param &#039;auto_tls&#039; to disable automatic STARTTLS
- **Adds the Sweego Mailer Bridge as a configurable transport option in Symfony Mailer, enabling site builders to deploy and configure this third‑party mail service without manual code changes**
  - `2cf98fa0`- `2cf98fa0` Add Sweego Mailer Bridge
- **Adds configuration options for DKIM and SMIME signers in Symfony Mailer, enabling secure email signing and authentication during deployment and mail server setup**
  - `871cf21c`- `871cf21c` [Mailer] Add configuration for dkim and smime signers

**symfony/routing** (v6.4.24 → v7.4.0-RC2)

- **Provides an automated validation tool for routing configuration, allowing site builders to quickly detect and fix syntax or structure issues before deployment**
  - `29106470`- `29106470` feature #61282 [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files (nicolas-grekas)

**symfony/validator** (v6.4.23 → v7.4.0-RC1)

- **Changes the mapping syntax that site builders must update when configuring validation rules, ensuring consistency across deployments and preventing misconfigurations.**
  - `4f9b77c9`- `4f9b77c9` feature #61791 [Validator] deprecate implicit constraint option names in YAML/XML mapping files (xabbuh)

**symfony/yaml** (v6.4.24 → v7.4.0-RC2)

- **Provides an updated Yaml Dumper implementation that can be deployed in newer platform releases, ensuring compatibility with current deployment configurations**
  - `b5176af9`- `b5176af9` [Yaml] Add compact nested mapping support to `Dumper`

**guzzlehttp/psr7** (2.7.1 → 2.8.0)

- **Enables deployment of the library on PHP 8.5 environments, allowing site builders to upgrade servers without breaking existing code**
  - `b0b99b85`- `b0b99b85` [2.8] Add PHP 8.5 support (#628)

**masterminds/html5** (2.9.0 → 2.10.0)

- **The CI configuration now supports PHP 8.4, enabling the build pipeline to run tests and deployments against the latest PHP runtime; this ensures compatibility with newer server environments and helps maintain accurate test coverage.**
  - `dc8be119`- `dc8be119` Add PHP 8.4 to CI config

**pear/archive_tar** (1.5.0 → 1.6.0)

- **Allows site builders to deploy the YMCA website using PHP 5.4 environments by updating configuration to include support for older PHP versions**
  - `bb299860`- `bb299860` add older PHP5&#039;s since pear/composer allow back to 5.4
- **Updates the deployment configuration to reflect PHP 8 support, enabling site builders to upgrade or transition to newer PHP environments**
  - `bc24cf89`- `bc24cf89` remove old PHP 5 and add new PHP 8 versions

**sebastian/diff** (4.0.6 → 5.1.1)

- **Dropped support for PHP 8.0 in the platform, requiring site builders to update their environment to compatible PHP versions for deployment**
  - `aa6da0de`- `aa6da0de` Drop support for PHP 8.0
- **Incorporates a new URL for the security policy, which may require updates to routing or menu configuration during deployment.**
  - `2c9aad82`- `2c9aad82` Add link to security policy

**commerceguys/addressing** (v1.4.2 → v2.2.4)

- **Enforces a required region field in Turkey within the platform’s configuration, affecting deployment scripts that validate address input during site setup**
  - `242aa104`- `242aa104` Make the region field required in Turkey.
- **Updates the platform’s address configuration data, requiring deployment scripts to incorporate new ISO codes for Turkish subdivisions when setting up or validating addresses**
  - `04c8ec7a`- `04c8ec7a` Add missing ISO codes for two TW subdivisions.
- **Updated the PH subdivision mapping in the address validation component, enabling more reliable deployment of address lookup services across different regions**
  - `48a0e531`- `48a0e531` Further improvements to PH subdivisions. Fixes #155.
- **Introduces a new configuration option in the addressing module that enables the display of patronymic names, affecting deployment settings and ensuring correct data handling across environments**
  - `0e0ab2b7`- `0e0ab2b7` Show the additional name field for countries that use patronymics.
- **Updated GitHub Actions checkout to v4, simplifying CI configuration and ensuring compatibility with newer workflow syntax, which improves deployment reliability**
  - `3493cda8`- `3493cda8` feat: bump gh action version for actions/checkout  v3 =&gt; v4 (#202)
- **Updates the addressing module’s configuration to include new Indonesian provinces, allowing site builders to deploy sites that support these regions without manual code changes**
  - `431b0794`- `431b0794` Add missing Indonesian (ID) provinces: PD, PE, PS, PT.
- **Updates the addressing module’s configuration and deployment scripts to reflect updated Indian sub‑division names, enabling accurate location mapping in deployed sites**
  - `fd8c6ce9`- `fd8c6ce9` Add the India subdivision renames to the updater to ensure BC.
- **Provides a configuration update that requires site builders to modify or re‑deploy sites with updated Chile region definitions for accurate localization**
  - `975a6528`- `975a6528` Chile&#039;s administrative areas are called regions, not provinces.

**solarium/solarium** (6.3.7 → 6.4.1)

- **Backport of CBOR update query support adds configuration options for specifying CBOR payloads during deployment, ensuring consistent behavior across environments**
  - `321a1ccf`- `321a1ccf` Support for CBOR update queries (#1148)

**ycloudyusa/y_lb** (3.10.7 → 4.0.6-rc4)

- **Updates dependency versions to support y_lb 4 and Drupal 11, ensuring compatibility with the latest platform releases and preventing deployment failures.**
  - `a643ae9d`- `a643ae9d` feat: update deps version to supoort y_lb 4 and drupal 11
- **Introduces an option in the node configuration that can be toggled during deployment or runtime to control style inheritance, simplifying environment‑specific styling adjustments**
  - `f01e6bdf`- `f01e6bdf` Add an option to control if the styles can be overriden on each node.
- **Adds a backend configuration change that triggers entity saving during form construction, allowing site builders to deploy updates without manual intervention and ensuring consistent database state across deployments**
  - `9791b7de`- `9791b7de` Added entity_builders on form build to call method that saves new info.

**ycloudyusa/yusaopeny_activity_finder** (5.3.0 → 6.0.0)

- **Updates build tooling by switching from node-sass to sass, ensuring future builds run smoothly and reducing dependency maintenance**
  - `e2ce493c`- `e2ce493c` Replace deprecated package &#039;node-sass&#039; with &#039;sass&#039; package

**ezyang/htmlpurifier** (v4.18.0 → v4.19.0)

- **Adds a configuration setting for safe iframe host whitelisting, enabling site builders to enforce domain restrictions during deployment without manual code changes**
  - `b5cbf0cc`- `b5cbf0cc` feat: Add option for safe iframe hosts using array lookup (#423)
- **Corrects a potential runtime error in the library that may affect deployment environments; ensuring reliable execution during site build processes**
  - `5d154a23`- `5d154a23` fix: Deprecated: preg_replace(): Passing null to parameter #3 ($subject) o… (#421)
- **Provides a new CSS direction feature that allows site builders to configure directionality of pages without requiring custom CSS modifications**
  - `63e631eb`- `63e631eb` feat: Add CSS direction support (#429)
- **The warning informs site builders about potential misconfigurations in deployment settings, helping them avoid issues during platform setup**
  - `b21a5910`- `b21a5910` fix: add warning for misleading option (#433)
- **Allows site builders to deploy the library in environments that use PHP 8.4, enabling broader platform compatibility**
  - `ff005f6e`- `ff005f6e` feat: PHP 8.4 support (#441)
- **Adds Docker ignore files to the installation process, simplifying deployment by ensuring that build artifacts and temporary directories are excluded from container images, which reduces image size and improves build time**
  - `9f99c615`- `9f99c615` add the docker files to be ignored with installation (#451)

**ycloudyusa/useless_machines** (1.2 → 2.0.4)

- **Uninstalls a redundant Drupal module that was previously installed on the platform, reducing unnecessary dependencies and simplifying deployment configuration for site builders.**
  - `d703f518`- `d703f518` feat: uninstall redundant drupal modules


### 💻 For Developers

*Builds features, contributes code, and customizes YMCA Website Services*

**drupal/core** (10.5.1 → 11.1.9)

- **This commit adds new user roles (UX Manager and provisional UX Manager) to Drupal core, extending the role hierarchy and permissions system. Developers need to know about the updated role definitions and associated permission changes for custom module integration and API usage.**
  - `c8e2a74a`- `c8e2a74a` Issue #3524613: Add Cristina Chumillas as UX Manager, Emma Horrell as provisional UX Manager to Drupal core
- **Fixes a bug where adding or editing a node triggers a call to an undefined member in the Node API, preventing runtime errors and ensuring consistent behavior when creating or updating content through Drupal&#039;s core node module**
  - `4152c9db`- `4152c9db` Issue #3161212 by joseph.olstad, acbramley, asubit, eduardo morales alberti, sandeepsingh199, berdir, catch: Node add/edit gives a Call to a member function getAccountName() on null when author is NULL
- **[11.1.x] Add BC stubs for Hook ordering**
  - `f9d28688`- `f9d28688` Issue #3512835 by nicxvan: [11.1.x] Add BC stubs for Hook ordering
- **Fixes URL generation logic in LanguageNegotiationUrl to prevent unnecessary domain prefixes on outbound URLs, ensuring correct redirect behavior and API consistency for multilingual routing.**
  - `e66b1bbf`- `e66b1bbf` Issue #3424720 by vidorado, douggreen, immaculatexavier, smustgrave, uri_frazier: LanguageNegotiationUrl unnecessarily adds domain to outbound URL&#039;s
- **Adds a new entry to MAINTAINERS.txt for lostcarpark, updating maintenance responsibilities and ensuring code quality checks are assigned to the correct maintainer**
  - `48661d8c`- `48661d8c` Issue #3516253 by lostcarpark, mradcliffe, rachel_norfolk, chrisdarke, volkswagenchick: Add lostcarpark as Mentoring Coordinator to MAINTAINERS.txt
- **Add pdureau as provisional Frontend Framework Manager … — the new i18n‑t‑s‑2‑? … ...**
  - `d00a6fe1`- `d00a6fe1` Issue #3517517 by nod_, pdureau: Add pdureau as provisional Frontend Framework Manager
- **Issue #3516770 by acbramley, larowlan, bbrala, quietone: Add acbramley as co-maintainer for node module**
  - `01fd59b2`- `01fd59b2` Issue #3516770 by acbramley, larowlan, bbrala, quietone: Add acbramley as co-maintainer for node module
- **Adds mogtofu33 as a SDC and new theme system&#039;s Icon API maintainer, updating code that manages icon handling and maintaining the Icon API in the new theme system; this affects developers working on custom themes or icon-related features.**
  - `6151eac5`- `6151eac5` Issue #3493617 by mogtofu33: Add mogtofu33 as a SDC and new theme system&#039;s Icon API maintainer
- **Issue #3516359 by larowlan, smustgrave, longwave, lauriii, wim leers, mstrelan: ComponentValidator ignores the set validator and creates a new one**
  - `2cee90be`- `2cee90be` Issue #3516359 by larowlan, smustgrave, longwave, lauriii, wim leers, mstrelan: ComponentValidator ignores the set validator and creates a new one
- **Issue #3508733 by gábor hojtsy, griffynh: Add griffynh as provisional core team facilitator**
  - `0a8fe056`- `0a8fe056` Issue #3508733 by gábor hojtsy, griffynh: Add griffynh as provisional core team facilitator
- **Fixes SQLite connection handling by preventing conversion of relative paths to full URLs in createConnectionOptionsFromUrl, ensuring correct database file resolution and avoiding accidental path errors that could break application logic or lead to data corruption.**
  - `fce26f74`- `fce26f74` Issue #3056698 by mondrake, quietone: Sqlite Connection::createConnectionOptionsFromUrl should not convert relative paths to full
- **Issue #2927338 by berdir, anmolgoyal74, swatichouhan012, smustgrave, alexpott, gábor hojtsy: Ensure config entity langcode property does not change when installing, adding or editing a language**
  - `48ec1302`- `48ec1302` Issue #2927338 by berdir, anmolgoyal74, swatichouhan012, smustgrave, alexpott, gábor hojtsy: Ensure config entity langcode property does not change when installing, adding or editing a language
- **Implemented a comprehensive EntityAccessControlHandler update that refines permission checks for entity access, adding type hints and improving API consistency across Drupal core modules; this change enhances static analysis support and ensures accurate access control logic.**
  - `73a97cf5`- `73a97cf5` Issue #2886800 by jonathanshaw, claudiu.cristea, quietone, hctom, geek-merlin, larowlan, sam152, joachim, smustgrave: EntityAccessControlHandler::createAccess() returns false positive cache hits because it ignores context
- **Fixes ContentEntityBase::createDuplicate() to reset default revision flag, ensuring new duplicate entities start with a draft revision instead of an active one, preventing unintended publication and improving data integrity.**
  - `b2de8152`- `b2de8152` Issue #3220784 by berdir, johnchque, mathilde_dumond, dww, quietone: ContentEntityBase::createDuplicate() should reset default revision flag
- **Allows modules to hook into the top of the content section in the new core navigation, enabling developers to add custom components or alter layout behavior via hooks such as hook_navigation_top_content() and improving extensibility**
  - `6d278495`- `6d278495` Issue #3463142 by plopesc, m4olivei, larowlan, penyaskito: Allow modules to hook into top of content section of new core navigation
- **Adds render caching for navigation render arrays, improving performance by preventing repeated rendering of the navigation structure and reducing CPU usage in Drupal core**
  - `cacbe74b`- `cacbe74b` Issue #3493406 by catch, godotislate: Add render caching for the navigation render array
- **The commit addresses issue #3358586 and includes a runtime fix that likely resolves a bug affecting core functionality; developers need to know this change for compatibility and debugging.**
  - `2cfaabae`- `2cfaabae` Issue #3358586 by godotislate, kala4ek, jaswinsingh, benjifisher, creact, catch, simohell, alexpott, alfthecat, aaronbauman, rupertj, poker10: RuntimeException: Adding non-existent permissions to a role is not allowed
- **Adds a new maintainer role for the serialization subsystem, enabling developers to manage and maintain the serialization API in Drupal 8.0.3, ensuring consistent behavior across modules.**
  - `f81963fe`- `f81963fe` Issue #3484008 by bradjones1, smustgrave, alexpott: Add bradjones1 as Serialization subsystem maintainer
- **Issue #3478628 by oily, alexpott, catch, sheshsharma, osopolar, dunx, shane birley, joegl: Fatal error: Uncaught TypeError: Drupal\Core\Extension\ThemeHandler::addTheme()**
  - `0372fb2b`- `0372fb2b` Issue #3478628 by oily, alexpott, catch, sheshsharma, osopolar, dunx, shane birley, joegl: Fatal error: Uncaught TypeError: Drupal\Core\Extension\ThemeHandler::addTheme()
- **Adds void return type to all procedural alter hook implementations, improving static analysis and IDE support by ensuring consistent function signatures across Drupal core hooks.**
  - `3c751f06`- `3c751f06` Issue #3494678 by mstrelan, nicxvan: Add void return type to all procedural alter hook implementations
- **Deprecated method getMockForAbstractClass() is replaced in views plugins to avoid compatibility issues with newer PHPUnit versions and improve test reliability**
  - `37d224d5`- `37d224d5` Issue #3480419 by mondrake, smustgrave, catch: Method getMockForAbstractClass() is deprecated - replace in views plugins
- **Issue #3490954 by nexusnovaz, mstrelan: Add return types to hook_update_N implementations**
  - `1d629fe1`- `1d629fe1` Issue #3490954 by nexusnovaz, mstrelan: Add return types to hook_update_N implementations
- **Updates API for Drupal core upgrades to prevent automatic updates from 10.4.0 to 11.0.0, ensuring developers can control upgrade paths and avoid breaking changes**
  - `2b1e0890`- `2b1e0890` Issue #3463226 by quietone, dww, smustgrave, catch, xjm: Use the new equivalent updates API to prevent updates from 10.4.0 to 11.0.0
- **Removed deprecated &quot;spaceless&quot; filter from core templates to eliminate runtime warnings and improve template rendering consistency across Drupal 8+ environments.**
  - `754ced85`- `754ced85` Issue #3486170 by godotislate, bbrala, finnsky, longwave: Remove use of deprecated &quot;spaceless&quot; filter in core templates
- **Adds a procedural hook short circuit per module or file to allow early exit from hooks, improving performance and enabling developers to control hook execution order by specifying a short‑circuited return value.**
  - `c351bb37`- `c351bb37` Issue #3490355 by nicxvan, godotislate, catch: Add procedural hook short circuit per module or file
- **Fixes a potential exception in PathBasedBreadcrumbBuilder when Request::create() is called, preventing runtime errors during breadcrumb generation and improving code stability for developers working on navigation logic**
  - `ed4d2ac5`- `ed4d2ac5` Issue #3490710 by mfb: Catch potential exception when calling Request::create() in PathBasedBreadcrumbBuilder
- **Adds a new configuration action for adding navigation block items from recipe modules, providing an API to programmatically modify navigation menus and enabling developers to extend or customize menu structures**
  - `90406aa4`- `90406aa4` Issue #3478224 by plopesc, m4olivei, penyaskito, dmitry.korhov, phenaproxima: Provide Config Action to add new blocks to navigation from recipes
- **Adds return type arrays to all hook_views_data and hook_field_views_data implementations, improving static analysis support, IDE autocomplete, and ensuring consistent API behavior for developers working with Views data structures**
  - `4bcb237b`- `4bcb237b` Issue #3490570 by nexusnovaz, mstrelan, nicxvan: Add array return to all hook_views_data and hook_field_views_data implementations
- **Adds an icon management API that exposes a programmatic interface for registering, retrieving, and updating icons in Drupal’s theme system, enabling developers to extend or customize icon sets across modules.**
  - `a9db6605`- `a9db6605` Issue #3471494 by mogtofu33, catch, pdureau, nod_, larowlan, andypost, mxh, grimreaper, ckrina, quietone: Add an icon management API
- **Adds void return type to pageAttachments, pageTop and pageBottom hook implementations, improving static analysis, IDE support, and ensuring consistent API behavior for developers working with these hooks**
  - `fc537128`- `fc537128` Issue #3489776 by mstrelan, nicxvan: Add void return to all pageAttachments, pageTop and pageBottom hook implementations
- **Issue #3478621 by catch, nicxvan, longwave, alexpott: Add filecache to OOP hook attribute parsing**
  - `0b3e06f7`- `0b3e06f7` Issue #3478621 by catch, nicxvan, longwave, alexpott: Add filecache to OOP hook attribute parsing
- **Adds filecache to OOP hook attribute parsing, improving cache handling for dynamic hooks and reducing redundant processing during runtime, which enhances performance and stability of core modules**
  - `b3803559`- `b3803559` Issue #3478621 by catch, nicxvan, longwave: Add filecache to OOP hook attribute parsing
- **Removed the createCopy action from EntityDisplayBase and introduced cloneAs functionality, simplifying entity display API usage and improving code maintainability by eliminating redundant copy logic**
  - `80341a8c`- `80341a8c` Issue #3483353 by a.dmitriiev, phenaproxima, atul_ghate, alexpott, roderik: Remove the createCopy action from EntityDisplayBase, and make cloneAs compatible with wildcards
- **Stop using node_add_body_field() in NodeTypeForm to prevent redundant code paths and reduce potential errors during node type creation; this refactor improves maintainability and stability**
  - `d518cd48`- `d518cd48` Issue #3488742 by catch, phenaproxima, gábor hojtsy: Stop calling node_add_body_field() from NodeTypeForm
- **Issue #3418136 by shalini_jha, smustgrave, rohit sankhla: Add last() function to ItemInterface/ItemList**
  - `1cd878a8`- `1cd878a8` Issue #3418136 by shalini_jha, smustgrave, rohit sankhla: Add last() function to ItemInterface/ItemList
- **Provides a mechanism for other modules to flag content as &quot;bl&quot; (likely &quot;blocked&quot; or “blockable”) through a new API, enabling cross‑module communication and consistent handling of flagged content. This adds an extensible hook and improves code quality by allowing developers to extend the core.**
  - `a1db8ccf`- `a1db8ccf` Issue #3443833 by plopesc, m4olivei, gábor hojtsy, matthieuscarset, penyaskito, larowlan, tim.plunkett: Provide a way for other modules to flag block plugin implementations as &#039;navigation safe&#039;
- **Adds a trait to form classes that collect input on behalf of recipes, enabling developers to reuse logic for recipe‑related forms and improving code consistency across modules**
  - `2f638cb0`- `2f638cb0` Issue #3483435 by phenaproxima, alexpott, thejimbirch: Add a trait for forms that want to collect input on behalf of a recipe
- **Adds void return type to all hook_cron implementations, ensuring static analysis and IDE support for correct cron execution callbacks; developers can rely on consistent API signatures**
  - `9acafe2c`- `9acafe2c` Issue #3487665 by mstrelan, nicxvan: Add void return type to all hook_cron implementations
- **The @return type annotations added for the StringTranslationTrait::formatPlural() and return‑value i..…**
  - `f99d1329`- `f99d1329` Issue #3484349 by amateescu: Add missing @return types for StringTranslationTrait::formatPlural() and ::getNumberOfPlurals()
- **Adds void return type to all *_alter hook implementations, improving static analysis and IDE support by ensuring hooks explicitly return nothing; this helps developers maintain consistent API contracts and avoid accidental data leakage.**
  - `919089fb`- `919089fb` Issue #3487666 by mstrelan, nicxvan: Add void return type to all *_alter hook implementations
- **Adds explicit array return type to all hook_schema implementations, improving static analysis and IDE support for developers by ensuring that hook schema functions consistently return arrays rather than generic values.**
  - `8201fc3a`- `8201fc3a` Issue #3483341 by mstrelan, smustgrave: Add array return type to all hook_schema implementations
- **Adds explicit void return type to all preprocess hook implementations, improving static analysis, IDE autocomplete, and ensuring consistent API behavior across Drupal core modules**
  - `a28ce055`- `a28ce055` Issue #3483299 by tstoeckler, mstrelan, nicxvan: Add void return type to all preprocess hook implementations
- **Issue #3478621 by catch, longwave, nicxvan: Add filecache to OOP hook attribute parsing**
  - `f0843d43`- `f0843d43` Issue #3478621 by catch, longwave, nicxvan: Add filecache to OOP hook attribute parsing
- **Issue #3480442 by mstrelan, alexpott, smustgrave: Add return types to UserCreationTrait**
  - `cb324402`- `cb324402` Issue #3480442 by mstrelan, alexpott, smustgrave: Add return types to UserCreationTrait
- **Converts procedural hook implementations to Hook classes, enhancing code readability, enabling static analysis and IDE support for hook signatures; developers can refactor hooks more easily and maintain consistency across modules.**
  - `3a31a596`- `3a31a596` Issue #3483599 by nicxvan, ghost of drupal past, catch, longwave, fabianx: Convert all procedural hook implementations to Hook classes
- **Issue #3483050 by mstrelan, nicxvan: Add int return type to all hook_update_last_removed implementations**
  - `a5d57126`- `a5d57126` Issue #3483050 by mstrelan, nicxvan: Add int return type to all hook_update_last_removed implementations
- **Adds a void return type to all hook_form_alter, hook_form_FORM_ID_alter and hook_form_BASE_FORM_ID_alalter implementations, improving static analysis, IDE support, and ensuring consistent API behavior for developers.**
  - `87e523b2`- `87e523b2` Issue #3483065 by nicxvan, mstrelan: Add void return type to all hook_form_alter, hook_form_FORM_ID_alter and hook_form_BASE_FORM_ID_alter implementations
- **Adds a void return type to all hook_entity_type_alter implementations in Drupal core, improving static analysis and IDE support by ensuring consistent function signatures and eliminating potential runtime errors related to unexpected return values.**
  - `8a55e0d0`- `8a55e0d0` Issue #3484249 by mstrelan: Add void return type to all hook_entity_type_alter implementations
- **Updates hook comment documentation to accurately reflect implementation details and adds missing comments, improving code readability, IDE support, and static analysis for developers working with Drupal hooks**
  - `8e4e9839`- `8e4e9839` Issue #3485690 by nicxvan: Update Implements hook comments to be accurate or add them if missing
- **Adds explicit array return type annotations for all hook_removed_post_updates implementations, enhancing static analysis, IDE support, and consistency across Drupal core API hooks**
  - `8dfa661d`- `8dfa661d` Issue #3483040 by quietone: Add array return type to all hook_removed_post_updates implementations
- **Fixes deprecated OOP hook handling in ModuleHandler::alterDeprecated to correct behavior when using deprecated hooks from module classes, enabling proper deprecation handling and debugging**
  - `18f89ca0`- `18f89ca0` Issue #3482618 by nicxvan, godotislate: ModuleHandler-&gt;alterDeprecated does not properly handle deprecated OOP hooks
- **Fixes the return type of HookCollectorPass::collectAllHookImplementations() to provide accurate type hints for static analysis and IDE autocomplete, improving code quality and preventing runtime errors when hook implementations are collected.**
  - `67720198`- `67720198` Issue #3485117 by nexusnovaz, godotislate, nicxvan: Fix return type on HookCollectorPass::collectAllHookImplementations()
- **Fixes a bug in toolbar configuration logic that prevents duplicate items from being added to the toolbar by default, ensuring consistent API behavior and avoiding unintended UI clutter for developers.**
  - `cdac41d0`- `cdac41d0` Issue #3479411 by phenaproxima, thejimbirch: The addItemToToolbar config action should not, by default, add items that are already in the toolbar
- **Issue #3480029 by kim.pepper, mstrelan: Add return typehint to \Drupal\Core\DependencyInjection\DeprecatedServicePropertyTrait::__get()**
  - `b0db4fa1`- `b0db4fa1` Issue #3480029 by kim.pepper, mstrelan: Add return typehint to \Drupal\Core\DependencyInjection\DeprecatedServicePropertyTrait::__get()
- **Issue #3483899 by nicxvan, godotislate: hook_module_implements_alter hook_cache_flush can only be procedural**
  - `3be754e4`- `3be754e4` Issue #3483899 by nicxvan, godotislate: hook_module_implements_alter hook_cache_flush can only be procedural
- **Adds explicit return type annotations to all hook_theme implementations, improving static analysis and IDE support for developers by ensuring that theme hooks return arrays as expected**
  - `9ef2ea71`- `9ef2ea71` Issue #3483039 by mstrelan, bbrala: Add array return type to all hook_theme implementations
- **Adds explicit void return type annotations to all hook_install and hook_uninstall implementations, enhancing code clarity and preventing accidental returns in installation/uninstallation logic**
  - `3aa87e67`- `3aa87e67` Issue #3483057 by mstrelan, bbrala, smustgrave: Add void return type to all hook_install and hook_uninstall implementations
- **Issue #3346707 by tedbow, phenaproxima, alexpott, catch, wim leers, dww, effulgentsia, gábor hojtsy, drumm, grasmash, chrisfromredfin, fizcs3, cola, capysara, diegors, daisyleroy, abhishek_gupta1, bnjmnm, quietone, lauriii, poker10, xjm, anish.a, ajits, traviscarden, heddn, Idoni, srishtiiee, siramsay, shabbir, rocketeerbkw, Schnitzel, s_leu, Theresa.Grannum, yash.rode, wiifm, wendyZ, tim.plunkett, Webbeh, rkoller, Ranjit1032002, kunal.sachdev, kjankowski, jayesh.d, immaculatexavier, Ishani Patel, leksat, lhridley, percoction, rahul_, p.ayekumi, omkar.podey, narendra.rajwar27, narendrar: Add Alpha level Experimental Package Manager module**
  - `66e74c95`- `66e74c95` Issue #3346707 by tedbow, phenaproxima, alexpott, catch, wim leers, dww, effulgentsia, gábor hojtsy, drumm, grasmash, chrisfromredfin, fizcs3, cola, capysara, diegors, daisyleroy, abhishek_gupta1, bnjmnm, quietone, lauriii, poker10, xjm, anish.a, ajits, traviscarden, heddn, Idoni, srishtiiee, siramsay, shabbir, rocketeerbkw, Schnitzel, s_leu, Theresa.Grannum, yash.rode, wiifm, wendyZ, tim.plunkett, Webbeh, rkoller, Ranjit1032002, kunal.sachdev, kjankowski, jayesh.d, immaculatexavier, Ishani Patel, leksat, lhridley, percoction, rahul_, p.ayekumi, omkar.podey, narendra.rajwar27, narendrar: Add Alpha level Experimental Package Manager module
- **Adds a new dependency on revolt/event-loop to core, enabling asynchronous event handling and improving performance for developers with custom event-driven code**
  - `d5a6567a`- `d5a6567a` Issue #3425114 by kingdutch, godotislate, mxr576, catch, larowlan: Add revolt/event-loop dependency to core
- **Adds MissingParamType for form, form_state and form_id to improve type safety and IDE support in Drupal core APIs, enabling developers to catch incorrect parameter usage early.**
  - `7601bef9`- `7601bef9` Issue #3478166 by quietone, smustgrave, mstrelan: Add MissingParamType for form, form_state and form_id
- **Adds a configuration action to clone config entities, enabling developers to programmatically duplicate settings for testing or migration, improving code reuse and reducing manual copy effort**
  - `9d12b2c8`- `9d12b2c8` Issue #3481238 follow-up by phenaproxima, a.dmitriiev, b_sharpe, alexpott: Add a config action to clone a config entity
- **Adds a configuration action to clone a config entity, providing developers with an API for duplicating configuration objects programmatically and enabling easier testing and migration of settings.**
  - `417d0416`- `417d0416` Issue #3481238 by phenaproxima, a.dmitriiev, b_sharpe, alexpott: Add a config action to clone a config entity
- **Adds a new configuration action that can programmatically create an entity for each bundle of another entity, enabling developers to automate bulk entity creation via the Drupal config system and improving code reuse.**
  - `99b300fe`- `99b300fe` Issue #3464550 by phenaproxima, a.dmitriiev, b_sharpe, alexpott: Create config action which can create an entity for every bundle of another entity type
- **Provides a YAML definition for taxonomic views that can be imported into Drupal’s config system, allowing developers to extend or modify the view logic without altering core code**
  - `2bc8f11f`- `2bc8f11f` Issue #3479665 by thejimbirch, danny englander, phenaproxima, pameeela: Add views.view.taxonomy_term.yml to tag_taxonomy recipe
- **Enforces return types in all new method signatures across the codebase, improving static analysis, IDE support and debugging reliability.**
  - `6dae8f50`- `6dae8f50` Issue #3461318 by mstrelan, smustgrave, bbrala, catch, kingdutch, longwave, quietone, spokje, xjm, larowlan: Enforce return types in all new methods and functions
- **Issue #3458167 by sokru, andypost, prashant.c, quietone: Add password option to Drupal\Core\Command\InstallCommand**
  - `71937659`- `71937659` Issue #3458167 by sokru, andypost, prashant.c, quietone: Add password option to Drupal\Core\Command\InstallCommand
- **Adds a mechanism to prevent imported recipe configuration from being compared too strictly, improving compatibility and avoiding false positives when merging config changes across deployments**
  - `5881f9dd`- `5881f9dd` Issue #3478332 by phenaproxima, nicxvan, thejimbirch, alexpott: Add a way to prevent recipes&#039; imported config from being compared too strictly to active config
- **Adds a &quot;node:&quot; prefix to require() calls for Node.js built‑in modules, ensuring correct module resolution and preventing accidental loading of non‑Node modules when writing custom JavaScript code**
  - `ef8420a1`- `ef8420a1` Issue #3473014 by tom konda: Prefer to add &quot;node:&quot; prefix to require() which imports Node.js built-in module
- **Issue #2005626 by sukr_s, gold, jhedstrom, neelam_wadhwani, neslee canil pinto, jweowu, Mixologic, quietone, daffie, smustgrave, longwave, mondrake: Implement \Drupal\Core\Database\Query\Update::arguments**
  - `2192bec3`- `2192bec3` Issue #2005626 by sukr_s, gold, jhedstrom, neelam_wadhwani, neslee canil pinto, jweowu, Mixologic, quietone, daffie, smustgrave, longwave, mondrake: Implement \Drupal\Core\Database\Query\Update::arguments
- **Adds a JavaScript message theme override for Drupal core’s messaging system, enabling developers to customize the visual style of status, warning, and error messages via a new JS hook that can be overridden in custom themes or modules.**
  - `8c22cbe9`- `8c22cbe9` Issue #3100083 by finnsky, Zsuffa Dávid, ankithashetty, _utsavsharma, gauravvvv, smustgrave, zrpnr, markconroy: Add js message theme override to match Umami message markup
- **Fixes a bug in Twig function creation where passing an instance of &quot;TwigFunction&quot; was incorrectly handled for FunctionExpression types, restoring correct behavior and preventing runtime errors during template rendering.**
  - `05e5bd98`- `05e5bd98` Issue #3477373 by finnsky, bbrala, longwave: Fix &quot;Not passing an instance of &quot;TwigFunction&quot; when creating a function of type &quot;FunctionExpression&quot; is deprecated.&quot;
- **Fixes a deprecated constructor argument in Drupal\Core\Template\TwigNodeTrans, removing potential runtime errors and improving compatibility with newer Twig versions; developers benefit from updated API usage and reduced deprecation warnings.**
  - `f723b401`- `f723b401` Issue #3477374 by finnsky, longwave, bbrala: Fix &quot;The &quot;tag&quot; constructor argument of the &quot;Drupal\\Core\\Template\\TwigNodeTrans&quot; class is deprecated and ignored&quot;
- **Fixes a deprecation in Twig’s FilterExpression class introduced by Twig 3.12.0, ensuring compatibility with newer Twig versions and preventing runtime errors during template rendering**
  - `8562e1e6`- `8562e1e6` Issue #3474692 by longwave, foxtrotcharlie, bbrala: Fix &quot;Twig\Node\Expression\FilterExpression&quot; deprecation introduced in twig/twig 3.12.0
- **Issue #3458565 by nishtha.pradhan, sadamafridi, joachim, smustgrave, vinmayiswamy, rodrigoaguilera, dksdev01, bibliophileaxe, devjuarez: TablesInterface::addField() doesn&#039;t document that $field can contain relationships**
  - `4e7d0cf8`- `4e7d0cf8` Issue #3458565 by nishtha.pradhan, sadamafridi, joachim, smustgrave, vinmayiswamy, rodrigoaguilera, dksdev01, bibliophileaxe, devjuarez: TablesInterface::addField() doesn&#039;t document that $field can contain relationships
- **Fixes type‑safety for DateTimePlus::createFromFormat and DrupalDateTime::createFromFormat by preventing integer arguments, improving static analysis and IDE support, ensuring accurate date parsing across the platform**
  - `f0af7deb`- `f0af7deb` Issue #3473214 by mstrelan: Stop passing ints to DateTimePlus::createFromFormat and DrupalDateTime::createFromFormat
- **Removed deprecated PHP constant \\E_STRICT in PHP 8.4, updating core code to comply with new language standards and preventing runtime errors; improves static analysis and IDE support for developers**
  - `73233616`- `73233616` Issue #3465826 by arunkumark, andypost: Remove deprecated in PHP 8.4 the \E_STRICT usage
- **Deprecated PHP 8.4 GET/POST session handling in core removes support for legacy session methods; developers must update code to use new session APIs or adjust compatibility checks to avoid runtime errors.**
  - `2d888850`- `2d888850` Issue #3470075 by andypost, ankitv18: PHP 8.4 GET/POST sessions are deprecated
- **Deprecated PHP session configuration constants (session.sid_length and session.sid_bits_per_character) are removed in PHP 8.4, requiring developers to update code that references these constants or adjust session handling logic to remain compatible with newer PHP versions.**
  - `310a26c8`- `310a26c8` Issue #3465836 by andypost: PHP 8.4 session.sid_length and session.sid_bits_per_character are deprecated
- **Fixes attribute handling in Drupal\Core\Template\Attribute to allow adding attributes via array syntax, improving API compatibility and preventing runtime errors when templates use dynamic attribute arrays**
  - `e2c50b5c`- `e2c50b5c` Issue #3334045 by yash.rode, joachim, quietone: Drupal\Core\Template\Attribute doesn&#039;t support adding attributes with array syntax if attribute name not already initialised
- **Removes deprecated document.all usage in misc/tabledrag.js, eliminating legacy browser support code and reducing potential security risks, ensuring table drag functionality works with modern browsers**
  - `b008e50c`- `b008e50c` Issue #3470694 by tom konda: Remove deprecated document.all in /misc/tabledrag.js
- **Adds new deprecation in open-telemetry/sem-conv 1.27.0, breaking daily update dependencies; developers need to adjust dependency versions to maintain build consistency**
  - `47899c48`- `47899c48` Issue #3470235 by Spokje: open-telemetry/sem-conv:1.27.0 introduces new deprecation, breaks daily updated deps run
- **The new version of sebastianbergmann/comparator 5.0.2 introduces breaking changes for Drupal; developers must update code to reflect these changes and maintain compatibility**
  - `de0c8701`- `de0c8701` Issue #3468502 by Spokje, mondrake: sebastianbergmann/comparator:5.0.2 Introduces (for Drupal) breaking changes
- **Fixes a bug where JavaScript files added by AJAX responses were only optimized in maintenance mode; this ensures that dynamic scripts are correctly minified and cached during normal site operation, improving performance and preventing potential runtime errors**
  - `1791c83a`- `1791c83a` Issue #3452672 by catch, PunamShelke, cilefen, smustgrave, mmillford: JavaScript files added by AJAX responses are only optimized in maintenance mode
- **Twig 3.11.0 introduces breaking changes for Drupal, affecting template rendering and API usage. Developers must update twig syntax and ensure compatibility with the new Twig version to avoid runtime errors.**
  - `87f4dfdc`- `87f4dfdc` Issue #3467293 by Spokje, longwave: twig/twig 3.11.0 introduces (for Drupal) breaking changes
- **Issue #3461741 by Sourav_Paul, avpaderno, smustgrave: Add form class to summary for hooks and form submission handler in contact.module**
  - `fa4d1993`- `fa4d1993` Issue #3461741 by Sourav_Paul, avpaderno, smustgrave: Add form class to summary for hooks and form submission handler in contact.module
- **Fixes a bug in the PECL UUID library that can return invalid UUIDs, ensuring the UUID generator used by Drupal core and extensions remains reliable for identifiers and security checks.**
  - `4d37577e`- `4d37577e` Issue #2613926 by quietone, Arla, jofitz, Berdir, alexpott: The PECL UUID implementation can return invalid UUIDs
- **Adds new SQL NULL checking operators &quot;Is empty (NULL)&quot; and &quot;Is not empty (NOT NULL)&quot; to Drupal’s query API, enabling developers to write more expressive filter conditions and improving code clarity. This change enhances the query builder’s type safety and reduces potential runtime errors.**
  - `75ae0d4d`- `75ae0d4d` Issue #3322402 by idebr, smustgrave, Lendude, lind101, akalata, quietone, alexpott: Add &#039;Is empty (NULL)&#039; and &#039;Is not empty (NOT NULL)&#039; operators to boolean field filtering
- **Adds an XML namespace attribute to throbber SVG images, ensuring proper rendering and avoiding XSS or parsing errors when the images are embedded in Drupal content or theme templates.**
  - `9bd4b2a6`- `9bd4b2a6` Issue #3466480 by Tom Konda, smustgrave: New throbber SVG images lack xmlns attribute
- **Adds example and sections to Block module for better documentation and code readability, providing developers with clearer API usage patterns and improving maintainability**
  - `f1bf725f`- `f1bf725f` Issue #2798531 by quietone, jp.stacey, ranjith_kumar_k_u, Ankit.Gupta, longwave, smustgrave, LoMo, Gábor Hojtsy: Add example and sections to Block API documentation
- **Issue #3347343 by vasike, scott_euser, acbramley, fjgarlin, smustgrave, recrit, catch, BramDriesen, heddn, DamienMcKenna, Berdir, Lendude, Graber, Kasey_MK, akalam, klaasvw, jhedstrom, joachim, johnwebdev, gbirch, jksloan2974, jsst, dww, avpaderno, C.E.A, andypost, ankithashetty, caspervoogt, anmolgoyal74, ckaotik, gambry, DiDebru, dawehner, das-peter, rlmumford, Krzysztof Domański, _Archy_, yogeshmpawar, xjm, muriqui, mr.york, mparker17, Lukas von Blarer, mdolnik, Murz, nuez, Taran2L, willpepsi, seanB, RoSk0, oriol_e9g, Pancho: Add Views EntityReference filter to support better UX for exposed filters**
  - `0d679d63`- `0d679d63` Issue #3347343 by vasike, scott_euser, acbramley, fjgarlin, smustgrave, recrit, catch, BramDriesen, heddn, DamienMcKenna, Berdir, Lendude, Graber, Kasey_MK, akalam, klaasvw, jhedstrom, joachim, johnwebdev, gbirch, jksloan2974, jsst, dww, avpaderno, C.E.A, andypost, ankithashetty, caspervoogt, anmolgoyal74, ckaotik, gambry, DiDebru, dawehner, das-peter, rlmumford, Krzysztof Domański, _Archy_, yogeshmpawar, xjm, muriqui, mr.york, mparker17, Lukas von Blarer, mdolnik, Murz, nuez, Taran2L, willpepsi, seanB, RoSk0, oriol_e9g, Pancho: Add Views EntityReference filter to support better UX for exposed filters
- **Adds validation constraints to system.logging, tightening input checks for log entries and ensuring data integrity across logging modules, improving code quality and reducing runtime errors**
  - `5c08461f`- `5c08461f` Issue #3436632 by omkar.podey, yash.rode, Wim Leers, smustgrave: Add validation constraints to system.logging
- **Fixes deprecated Entity class references in core code, removing legacy API calls that could break compatibility and improve static analysis support for developers**
  - `4ffd3eee`- `4ffd3eee` Issue #3094865 by quietone, _utsavsharma, hchonov, Berdir, smustgrave, catch: Fix references to the deprecated Entity class
- **Adds a helper method to generate HTML placeholders, providing reusable code for building dynamic content blocks and improving developer productivity**
  - `65f5ac35`- `65f5ac35` Issue #3463038 by longwave: Add helper method to generate HTML placeholders
- **Adds input string to exception message in createConnectionOptionsFromUrl(), enhancing error reporting for debugging and improving code quality**
  - `4ffe6c00`- `4ffe6c00` Issue #3457009 by ankitv18, quietone, joachim: Add input string to exception message thrown in createConnectionOptionsFromUrl()
- **Adds validation constraints to language.content_settings.*.*, enabling developers to enforce stricter data integrity and use the API for customization**
  - `1b8cedce`- `1b8cedce` Issue #3458321 by narendraR, smustgrave, alexpott: Add validation constraints to language.content_settings.*.*
- **Implemented a flexible configuration system for Drupal core that allows developers to customize settings via code and YAML files, improving maintainability and enabling more granular control over core behavior.**
  - `0e39184c`- `0e39184c` Issue #3448131 by mandclu, phenaproxima, ultrabob, immaculatexavier, alexpott, thejimbirch, mtift, laura.j.johnson@gmail.com: Create flexible config actions to place a block in the admin or default themes
- **Removes the ability to add extensions via a URL, simplifying the extension API and eliminating potential security or configuration issues that developers can now rely on a more controlled mechanism for adding extensions.**
  - `de8b03d5`- `de8b03d5` Issue #3417136 by dww, quietone, longwave, catch, xjm, lostcarpark, andypost, phenaproxima: Remove adding an extension via a URL
- **Adds support for recipes to drupal/recommended-project and drupal/legacy-project, introducing new API hooks and configuration options that enable developers to integrate recipe content types and custom fields into existing projects**
  - `72abc007`- `72abc007` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project
- **Issue #3399970 by markconroy, catch, smustgrave: Umami content is all created in the same second**
  - `324554b9`- `324554b9` Issue #3399970 by markconroy, catch, smustgrave: Umami content is all created in the same second
- **Issue #3392572 by benjifisher, Liam Morland, ricovandevin, Anybody, smustgrave, quietone, sabrina.liman, carolpettirossi, longwave, alexpott: Add missing category to Drupal\layout_builder\Plugin\Layout\BlankLayout and let modules and themes alter the list of layouts**
  - `d85745b7`- `d85745b7` Issue #3392572 by benjifisher, Liam Morland, ricovandevin, Anybody, smustgrave, quietone, sabrina.liman, carolpettirossi, longwave, alexpott: Add missing category to Drupal\layout_builder\Plugin\Layout\BlankLayout and let modules and themes alter the list of layouts
- **Adds validation constraints to user.mail field ensuring email format compliance and preventing invalid data entry, improving data integrity across the platform.**
  - `8b65c455`- `8b65c455` Issue #3458701 by yash.rode: Add validation constraints to user.mail
- **Fixes BlockContentAccessControlHandler to correctly require access block library and ensures proper dependency injection for the Block API, preventing runtime errors when blocks are accessed without the required module**
  - `e72e0fd3`- `e72e0fd3` Issue #3412420 by acbramley, douggreen, Hardik_Patel_12, xjm, smustgrave, larowlan: BlockContentAccessControlHandler requires access block library permission for create
- **Adds validation constraints to system.action.* classes, enforcing stricter input rules and improving code quality by preventing invalid action configurations during runtime**
  - `71912c8f`- `71912c8f` Issue #3449259 by narendraR, alexpott, catch, Wim Leers: Add validation constraints to system.action.*
- **Issue #3457766 by narendraR, smustgrave: Add validation constraints to language.entity.***
  - `17bf277a`- `17bf277a` Issue #3457766 by narendraR, smustgrave: Add validation constraints to language.entity.*
- **Adds validation constraints to the search.page component, tightening input rules and improving data integrity for developers working with the search API and form handling**
  - `c9c2e50d`- `c9c2e50d` Issue #3456133 by narendraR, VinmayiSwamy: Add validation constraints to search.page.*
- **Adds an index on locales_location to improve database query performance for locale-based queries in Drupal core, reducing latency and enhancing scalability**
  - `f5a1a23c`- `f5a1a23c` Issue #3156439 by alexpott, catch, bonsaipuppy, mkalkbrenner, longwave, xjm: Add an index on locales_location on type and name
- **Adds subsystem maintainers for navigation, defining a new configuration structure and API hooks that allow developers to extend or customize navigation components within Drupal core**
  - `c9d05df6`- `c9d05df6` Issue #3458246 by ckrina, finnsky, nod_, m4olivei, plopesc: Add subsystem maintainers for Navigation
- **Adds validation constraints to user.role.* fields ensuring stricter data integrity and preventing invalid role assignments; developers must update API usage and tests accordingly.**
  - `ced8f1e9`- `ced8f1e9` Issue #3445215 by narendraR, borisson_, mtift, mikelutz, smustgrave, Wim Leers, alexpott: Add validation constraints to user.role.*
- **Renames the helper function from ensure_exists to createIfNotExists and adopts camel‑case naming conventions, improving code readability and consistency across the core API. This change also updates internal documentation and type hints for better IDE support.**
  - `15b96a53`- `15b96a53` Issue #3455113 by b_sharpe, ankitv18, alexpott, pooja_sharma, phenaproxima, thejimbirch: Rename ensure_exists to createIfNotExists, and camel-case simpleConfigUpdate for consistency
- **Adds validation logic for Drupal core services and components to enforce data integrity across modules, improving code quality and preventing runtime errors**
  - `3310b1fa`- `3310b1fa` Issue #3436164 by omkar.podey, kunal.sachdev, pradhumanjain2311, smustgrave, Wim Leers, narendraR, alexpott, larowlan, borisson_: Add validation constraints to user.settings
- **Adds &quot;writeable&quot; flag to cspell configuration for core/.cspell.json, enabling spell‑checking of writable code files and improving static analysis tooling**
  - `b425ccb3`- `b425ccb3` Issue #3155411 by quietone, smustgrave, jungle, longwave: Add &quot;writeable&quot; to the &quot;flagWords&quot; in core/.cspell.json
- **Adds a comment to install.core.inc describing the updated container, clarifying how Drupal’s dependency injection container is now configured and aiding developers in debugging or extending core services.**
  - `09da47c6`- `09da47c6` Issue #3456979 by joachim: add a comment to install.core.inc about the updated container
- **Issue #3313616 by mark_fullmer, Sandeep_k, nessthehero, bnjmnm, smustgrave, Wim Leers, itmaybejj, alexpott, Charles Belov, simohell, AaronMcHale: [drupalMedia] Ability to mark image media as &quot;decorative&quot;**
  - `1d8507d2`- `1d8507d2` Issue #3313616 by mark_fullmer, Sandeep_k, nessthehero, bnjmnm, smustgrave, Wim Leers, itmaybejj, alexpott, Charles Belov, simohell, AaronMcHale: [drupalMedia] Ability to mark image media as &quot;decorative&quot;
- **Issue #3443810 by SKAUGHT, plopesc, DishaKatariya, finnsky, smustgrave, ckrina, Prashant.c, larowlan: Custom Navigation logo is disconnected from new Layout template**
  - `ebc77b09`- `ebc77b09` Issue #3443810 by SKAUGHT, plopesc, DishaKatariya, finnsky, smustgrave, ckrina, Prashant.c, larowlan: Custom Navigation logo is disconnected from new Layout template
- **Fixes HtmlOutputLogger to remove an extra newline that was being appended after each output, improving log formatting and preventing unintended whitespace in generated HTML or logs.**
  - `e4e47f2e`- `e4e47f2e` Issue #3452630 by SandeepMahlawat, pooja_sharma, joachim, mondrake: HtmlOutputLogger outputs surplus newline
- **Adds static caching to LayoutTempstoreRepository, improving cache performance and reducing database load for layout data retrieval; developers can leverage this API change to optimize custom layout logic.**
  - `0e1da736`- `0e1da736` Issue #3445909 by seanB, smustgrave, alexpott, catch: Add static caching to LayoutTempstoreRepository
- **Adds support for the custom !service_closure tag in YamlFileLoader, enabling developers to extend YAML parsing logic and handle service closure configurations with new syntax, improving code extensibility and maintainability**
  - `5b0b5bf2`- `5b0b5bf2` Issue #3450516 by kim.pepper: Add support for !service_closure custom tag in YamlFileLoader
- **Adds a missing &#039;label&#039; key to navigation.layouts.yml, ensuring that navigation layout definitions correctly expose labels for rendering and API consistency; this fixes an undefined property used in theme templates and improves configuration reliability.**
  - `ca4e5f23`- `ca4e5f23` Issue #3450760 by SandeepMahlawat, benjifisher, smustgrave: Add missing &#039;label&#039; key to navigation.layouts.yml
- **Issue #3447625 by tim.plunkett, DanielVeza, DyanneNova, tedbow: Add DanielVeza as a co-maintainer of Layout Builder**
  - `6d22aed7`- `6d22aed7` Issue #3447625 by tim.plunkett, DanielVeza, DyanneNova, tedbow: Add DanielVeza as a co-maintainer of Layout Builder
- **Adds validation constraints to image.style.* API, ensuring image style definitions are correctly validated during configuration and runtime, improving code quality and preventing misconfigured styles**
  - `49de33ad`- `49de33ad` Issue #3447286 by narendraR, smustgrave: Add validation constraints to image.style.*
- **Adds zlib to the list of required extensions for runtime requirements check, ensuring that PHP’s zlib extension is verified during deployment and preventing runtime errors when compression functions are used in Drupal modules.**
  - `58aafb87`- `58aafb87` Issue #3447920 by mfb: Add zlib to list of required extensions for runtime requirements check
- **Removes deprecated moved_files entries from core code, eliminating legacy API references and improving maintainability by cleaning up unused configuration keys that could cause confusion or errors in future updates**
  - `768b30e9`- `768b30e9` Issue #3449469 by catch, mstrelan, smustgrave: Remove deprecated moved_files entries in core
- **Adds pdureau as a co-maintainer for the Theme API with a focus on SDC, expanding maintenance responsibilities and ensuring continued support for theme-related code, which is crucial for developers working on theme customization and API stability.**
  - `dc4efd22`- `dc4efd22` Issue #3447206 by pdureau: Add pdureau as a co-maintainer for the Theme API with a focus on SDC
- **Adds e0ipso as a co-maintainer of core theme system with focus on SDC, enabling developers to contribute to theme maintenance and improvements in Drupal&#039;s core theme infrastructure.**
  - `4e051663`- `4e051663` Issue #3447487 by e0ipso: Add e0ipso as a co-maintainer of core theme system with focus on SDC
- **Issue #3446504 by Utkarsh_33, smustgrave, Tom Konda: Mismatch between implementation and description for Drupal.Message.prototype.remove()**
  - `ced77c25`- `ced77c25` Issue #3446504 by Utkarsh_33, smustgrave, Tom Konda: Mismatch between implementation and description for Drupal.Message.prototype.remove()
- **Fixes mis‑implementation of moved_files syntax in core.libraries.yml, correcting library loading order and dependency resolution to prevent runtime errors and ensure proper asset inclusion during module development.**
  - `7402887b`- `7402887b` Issue #3449302 by catch: core.libraries.yml mis-implements moved_files syntax
- **Fixes CSS layout issue causing excessive white space in Claro dropbutton items, improving UI consistency and preventing visual clutter for developers working on component styling**
  - `5b061c9f`- `5b061c9f` Issue #3374464 by luenemann, Utkarsh_33, vpa24, jennypanighetti, smustgrave, bnjmnm: Claro CSS for dropbutton items adds large gap of white space
- **Removes deprecated code from Drupal 11, eliminating legacy API calls and improving code maintainability and static analysis accuracy.**
  - `5fe90bbf`- `5fe90bbf` Issue #3447307 by longwave, catch, quietone: Remove remaining deprecated code from Drupal 11
- **Adds composer dependency on ext-zlib to ensure PHP extensions required for Drupal core are available, improving code stability and preventing runtime errors during module installation or execution.**
  - `64057821`- `64057821` Issue #3439591 by quietone, mstrelan, pradhumanjain2311, andypost, catch, mfb, longwave, coaston, penyaskito: Add composer dependency on ext-zlib
- **Issue #3447072 by thejimbirch, alexpott, phenaproxima: Add &#039;recipe system&#039; and &#039;default content system&#039; subsystems and update Maintainers.txt**
  - `8cab4c34`- `8cab4c34` Issue #3447072 by thejimbirch, alexpott, phenaproxima: Add &#039;recipe system&#039; and &#039;default content system&#039; subsystems and update Maintainers.txt
- **Removes deprecated InputStreamUploadedFile methods to clean up API, ensuring future code compatibility and improving static analysis support**
  - `e39062ed`- `e39062ed` Issue #3446967 by kim.pepper, alexpott: [11.x] Remove deprecated methods in InputStreamUploadedFile
- **Removed an incorrect method from InputStreamUploadedFile::supportsMoveUploadedFile(), fixing a bug that could cause unexpected behavior during file uploads and improving API consistency for developers working with upload handling.**
  - `609ed2cb`- `609ed2cb` Issue #3446962 by kim.pepper: Remove incorrectly added InputStreamUploadedFile::supportsMoveUploadedFile()
- **Fixes a bug in the ViewsArgumentDefault plugin that prevents taxonomy_tid arguments from adding cache tags, ensuring proper caching behavior for views and improving API reliability.**
  - `cf17933b`- `cf17933b` Issue #3427374 by danflanagan8, Vighneshh: taxonomy_tid ViewsArgumentDefault plugin doesn&#039;t add cache tags
- **Implemented chaining for User::addRoles and related methods to enable fluent API calls, improving code readability and reducing boilerplate in custom modules that manage user permissions.**
  - `dad4106d`- `dad4106d` Issue #3331229 by pminf, chadhester, zshrestha, hardikpandya, _pratik_, rogerpfaff, ultimike, xjm, mandclu, alexb7217: Use chaining for User::addRole() and ::removeRole()
- **Deprecated PHP 8.4 ReflectionMethod constructor with one argument triggers a deprecation warning; developers must update code to use two-argument constructor or suppress warnings, ensuring compatibility and preventing runtime errors.**
  - `7de22287`- `7de22287` Issue #3444264 by andypost, alexpott, longwave: [PHP 8.4] ReflectionMethod constructor deprecated with one argument
- **Issue #3439923 by alexpott, longwave, thejimbirch, Wim Leers, phenaproxima, immaculatexavier, nedjo, bircher, deviantintegral, franz, narendraR, omkar.podey, srishtiiee, Rajab Natshah, millnut, mondrake, amateescu, larowlan, sonfd, tasc, vasike: Add recipes api as experimental API to core**
  - `87619154`- `87619154` Issue #3439923 by alexpott, longwave, thejimbirch, Wim Leers, phenaproxima, immaculatexavier, nedjo, bircher, deviantintegral, franz, narendraR, omkar.podey, srishtiiee, Rajab Natshah, millnut, mondrake, amateescu, larowlan, sonfd, tasc, vasike: Add recipes api as experimental API to core
- **Fixes incorrect padding on child menu items in Drupal core’s menu rendering code, correcting layout inconsistencies and ensuring consistent visual spacing for all menu levels; developers need to know this bug fix for compatibility and UI reliability.**
  - `3ea5423d`- `3ea5423d` Issue #3440223 by bronzehedwick, ahsannazir, jwitkowski79, adwivedi008: Incorrect padding on child menu items
- **Issue #3055807 by ptmkenny, murilohp, vladimir.krupin, smustgrave, ankithashetty, yogeshmpawar, ravi.shankar, rensingh99, vikashsoni, axel80, alexpott: User created via /user/register?_format=json get blocked**
  - `0f7c6345`- `0f7c6345` Issue #3055807 by ptmkenny, murilohp, vladimir.krupin, smustgrave, ankithashetty, yogeshmpawar, ravi.shankar, rensingh99, vikashsoni, axel80, alexpott: User created via /user/register?_format=json get blocked
- **Fix remaining deprecated string array keys in data sets returned by data provider methods that do not match the parameter names**
  - `a1c0e56b`- `a1c0e56b` Issue #3444566 by mondrake: Fix remaining deprecated string array keys in data sets returned by data provider methods that do not match the parameter names
- **Adds CSS to prettier command and updates jquery.form.js to be ignored in core/misc, improving code formatting consistency and preventing unnecessary lint errors for developers**
  - `252f9fc2`- `252f9fc2` Issue #3444587 by alexpott: Add CSS to prettier command and fix core/misc/jquery.form.js to be ignored
- **Fixes a bug in BigPipe rendering that causes layout shifts when injecting Local Actions block; developers need to understand the rendering pipeline and patch for consistent UI behavior**
  - `ae329a76`- `ae329a76` Issue #3441137 by catch, mherchel: BigPipe injecting Local Actions block creates large janky layout shift in Claro
- **Removes deprecated code in Render system; developers will be aware of updated API usage and clean up legacy code**
  - `142fee31`- `142fee31` Issue #3441392 by Binoli Lalani, smustgrave, andypost, quietone, pradhumanjain2311, longwave, catch: Removed deprecated code in Render system
- **The ...**
  - `07fe80bf`- `07fe80bf` Issue #3444264 by andypost: [PHP 8.4] ReflectionMethod constructor deprecated with one argument
- **Adds validation constraints to system.mail API, ensuring email settings are correctly formatted and preventing misconfigured mail sending which improves code reliability and developer debugging.**
  - `e8154b1a`- `e8154b1a` Issue #3440975 by kunal.sachdev, phenaproxima: Add validation constraints to system.mail
- **Adds pagination logic to the workspace manage page, improving data handling and performance for large lists of workspaces; includes API changes in the WorkspaceController and new service methods that developers can use or extend.**
  - `23eeb724`- `23eeb724` Issue #3273461 by amateescu, smustgrave, alexpott: Add pagination to the workspace manage page
- **Removed deprecated cron-related code from Drupal Core, eliminating legacy hooks and functions that could cause runtime errors or security issues. This cleanup improves code quality, reduces maintenance burden, and ensures developers use only current APIs for scheduling tasks.**
  - `1aa53a00`- `1aa53a00` Issue #3443497 by smustgrave, mikelutz: Remove deprecated code from \Drupal\Core\Cron
- **Adds validation constraints to update.settings, tightening data integrity for configuration updates and ensuring that submitted settings meet expected formats, which improves code reliability and prevents runtime errors.**
  - `718fff06`- `718fff06` Issue #3437319 by srishtiiee, narendraR, pradhumanjain2311, phenaproxima, Wim Leers: Add validation constraints to update.settings
- **Deprecated code in lib/State and lib/Session removed; improves code quality, reduces maintenance overhead, and ensures future compatibility with newer Drupal core APIs**
  - `30f78685`- `30f78685` Issue #3443493 by smustgrave, mikelutz, Gábor Hojtsy, catch, longwave: Remove deprecated code from lib/State and lib/Session
- **Adds workspace-safe marking for VBO actions; enhances API behavior, improves error handling, and provides developers with clearer control over action execution in multi‑workspace contexts**
  - `399ef4ac`- `399ef4ac` Issue #2986005 by amateescu, longwave: Add the ability to mark (VBO) actions as workspace-safe
- **Deprecated code removed from lib/Update, lib/Updated and lib.Validation; further clean‑up of core codebase, improved stability and compatibility with newer API versions**
  - `86450c78`- `86450c78` Issue #3443495 by smustgrave, mikelutz: Remove deprecated code from lib/Update, lib/Updated, and lib/Validation
- **Bug fix for UI layout shift when views UI action buttons on page load; improves developer experience and debugging, especially in theme development and CSS optimization**
  - `afa13181`- `afa13181` Issue #3441124 by mherchel, nod_, smustgrave, xjm: Views UI action buttons create janky layout shift on page load
- **Adds @file documentation to menu‑region–footer.html.twig template, providing clearer API reference for developers and improving IDE support for template usage**
  - `a33f086c`- `a33f086c` Issue #3443869 by kostyashupenko, smustgrave: Add @file documentation to menu-region--footer.html.twig template
- **Removes deprecated code from lib/Routing, cleaning up routing API and reducing potential runtime errors**
  - `68d7d6d4`- `68d7d6d4` Issue #3443492 by smustgrave, quietone, mikelutz: Remove deprecated code from lib/Routing
- **Remove deprecated code in bootstrap and lib/Controller, lib/Content, &amp; lib/Config, enhancing code quality and stability across the framework**
  - `92aa0e59`- `92aa0e59` Issue #3442766 by smustgrave, quietone, mikelutz, catch: Remove deprecated code from bootstrap and lib/Controller, lib/Config
- **Weird?**
  - `6d1eb461`- `6d1eb461` Issue #3443487 by smustgrave: Remove deprecated code from lib/EventSubscriber and lib/Field
- **Adds validation constraints to core.menu.schema.yml, tightening schema definitions for menu items and ensuring consistency across modules that rely on menu configuration**
  - `a8aec03f`- `a8aec03f` Issue #3441434 by narendraR, Wim Leers: Add validation constraints to core.menu.schema.yml
- **Removes deprecated code from MarkupInterfaceComparator, cleaning up the API and reducing potential bugs in markup comparison logic**
  - `598c7978`- `598c7978` Issue #3443886 by longwave: Remove deprecated code from MarkupInterfaceComparator
- **Adds @file documentation to navigation.html.twig layout template, improving code readability and IDE support for developers**
  - `11af8883`- `11af8883` Issue #3443867 by kekkis, YevKo: Add @file documentation to navigation.html.twig layout template
- **Remove deprecated code from lib/State and lib/Session, modernizing the library and reducing maintenance overhead**
  - `756bc282`- `756bc282` Issue #3443493 by smustgrave, Gábor Hojtsy, mikelutz: Remove deprecated code from lib/State and lib/Session
- **Adds documentation for arrow-navigation.js, improving code readability and aiding developers in understanding how the navigation component works, which assists with future customizations or debugging.**
  - `0da57783`- `0da57783` Issue #3443868 by Linh Le, YevKo: Add documentation to arrow-navigation.js
- **Issue #3438895 by finnsky, larowlan, plopesc, m4olivei, ckrina, mherchel, catch, alexpott, nod_, deviantintegral, jwitkowski79, nod_, jponch, jwitkowski79, rkoller, Ana Barcelona, YurkinPark, finnsky, javi-er, alvarito75, ctrlADel, AaronMcHale, Emma Horrell, akshayadhav, claireristow, baluv3, bronzehedwick, NikMis, deviantintegral, hot_sauce, kostyashupenko, gnuschichten, keyboardcowboy, gdd, silviu, Prashant.c, ehsann_95, pjudge, rkoller, Shreya_th, starshaped, bal krishna, meeni_dhobale, mherchel, johnpicozzi, chetan_, saschaeggi, markie, iro, abhishek_gupta, vensires, KurtTrowbridge, hooroomoo, Utkarsh_33, Svitlana, starshaped, KeyboardCowboy, benjifisher, ahsannazir, tim.plunkett, tedbow, flanneryla, Anandt846, Kanchan Bhogade, SKAUGHT, joaopauloc.dev, Silviu S., q0rban, rabbitlair, bnjmnm, Mithun S, Akhil Babu, gaurav_manerkar, dead_arm, YurkinPark, lauriii, sani, chetan 11, DieterHolvoet, Gábor Hojtsy, jwilson3, marcelreimer: Add the new Navigation to core as an Experimental module**
  - `f57c955b`- `f57c955b` Issue #3438895 by finnsky, larowlan, plopesc, m4olivei, ckrina, mherchel, catch, alexpott, nod_, deviantintegral, jwitkowski79, nod_, jponch, jwitkowski79, rkoller, Ana Barcelona, YurkinPark, finnsky, javi-er, alvarito75, ctrlADel, AaronMcHale, Emma Horrell, akshayadhav, claireristow, baluv3, bronzehedwick, NikMis, deviantintegral, hot_sauce, kostyashupenko, gnuschichten, keyboardcowboy, gdd, silviu, Prashant.c, ehsann_95, pjudge, rkoller, Shreya_th, starshaped, bal krishna, meeni_dhobale, mherchel, johnpicozzi, chetan_, saschaeggi, markie, iro, abhishek_gupta, vensires, KurtTrowbridge, hooroomoo, Utkarsh_33, Svitlana, starshaped, KeyboardCowboy, benjifisher, ahsannazir, tim.plunkett, tedbow, flanneryla, Anandt846, Kanchan Bhogade, SKAUGHT, joaopauloc.dev, Silviu S., q0rban, rabbitlair, bnjmnm, Mithun S, Akhil Babu, gaurav_manerkar, dead_arm, YurkinPark, lauriii, sani, chetan 11, DieterHolvoet, Gábor Hojtsy, jwilson3, marcelreimer: Add the new Navigation to core as an Experimental module
- **Removed deprecated code from Access, Ajax, and Asset modules to clean up legacy API calls, improve static analysis, and reduce runtime overhead, ensuring future compatibility with newer Drupal core versions**
  - `cc89392e`- `cc89392e` Issue #3443479 by smustgrave: Remove deprecated code from Access, Ajax, and Asset
- **Removed deprecated utilities code to eliminate legacy functions that could cause runtime errors or confusion in future maintenance; this cleanup improves static analysis, IDE support, and overall code quality.**
  - `9568ca07`- `9568ca07` Issue #3441394 by quietone, smustgrave, pradhumanjain2311, catch: Remove deprecated code in utilities
- **Adds validation constraints to system.advisories, ensuring that advisory messages meet required format and data integrity rules; this improves code quality and prevents runtime errors when processing advisories.**
  - `a9c47bf5`- `a9c47bf5` Issue #3439620 by omkar.podey, narendraR: Add validation constraints to system.advisories
- **Removed deprecated code from lib/Password and lib/Plugin, cleaning up legacy classes and improving maintainability, ensuring future API stability and reducing potential security vulnerabilities**
  - `a42a04b8`- `a42a04b8` Issue #3443491 by smustgrave: Remove deprecated code from lib/Password and lib/Plugin
- **Removed deprecated Logger and Menu classes from lib/Logger and lib/Menu, eliminating obsolete code paths, improving maintainability and reducing potential runtime errors; also cleans up API surface for developers**
  - `2a223b0a`- `2a223b0a` Issue #3443490 by smustgrave: Remove deprecated code from lib/Logger and lib/Menu
- **Removed deprecated code from lib/Installer and lib/KeyValueStore, eliminating obsolete API calls and improving code quality by ensuring only current interfaces are used.**
  - `96c2ec1a`- `96c2ec1a` Issue #3443489 by smustgrave: Remove deprecated code from lib/Installer and lib/KeyValueStore
- **Removed deprecated code from lib/Flood and lib/Form, eliminating legacy functions that may cause runtime errors or compatibility issues in future Drupal releases.**
  - `09182a40`- `09182a40` Issue #3443488 by smustgrave: Remove deprecated code from lib/Flood and lib/Form
- **Removes deprecated code from lib/Batch and lib/Datetime to clean up legacy API usage, improving static analysis, IDE support, and preventing future bugs by eliminating unused classes and methods**
  - `94a4993f`- `94a4993f` Issue #3443486 by smustgrave: Remove deprecated code from lib/Batch and lib/Datetime
- **Removed deprecated code in toolbar module**
  - `c91a9bb1`- `c91a9bb1` Issue #3443551 by andypost: Removed deprecated code in toolbar module
- **Removes deprecated code from the entity system, cleaning up legacy APIs and improving code quality; this reduces potential bugs, enhances static analysis, and ensures compatibility with future Drupal core updates**
  - `66bb13fb`- `66bb13fb` Issue #3442713 by smustgrave, catch, Binoli Lalani, longwave: Remove deprecated code from the entity system
- **Removed deprecated code from migration modules, cleaning up legacy API calls and improving code quality for developers working on migration scripts**
  - `05302f31`- `05302f31` Issue #3443205 by andypost, smustgrave: Remove deprecated code from migration modules
- **Removed deprecated code from search and options modules, simplifying the codebase and ensuring developers maintain clean APIs for search functionality**
  - `173ea49d`- `173ea49d` Issue #3443206 by smustgrave: Remove deprecated code from search and options modules
- **Removed de‑tached …?...? ...???...????...????...???????...**
  - `828fa2af`- `828fa2af` Issue #3443203 by smustgrave, andypost: Remove deprecated code from menu link content module
- **Removed deprecated phpPass and bigpipe code, cleaning up legacy functions that could cause runtime errors or security issues, improving code stability and reducing maintenance overhead**
  - `77e18ec5`- `77e18ec5` Issue #3443198 by andypost, smustgrave, catch: Remove deprecated code from phpPass + bigpipe
- **Removed deprecated configuration code in config module, eliminating legacy API calls and improving maintainability; developers can now use updated config interfaces without encountering obsolete functions or warnings.**
  - `d0d7e29f`- `d0d7e29f` Issue #3443197 by smustgrave: Remove deprecated code from config module
- **Removed deprecated media module code, eliminating legacy API calls and improving code quality for developers by ensuring future compatibility with newer media handling APIs**
  - `d7b58d44`- `d7b58d44` Issue #3443201 by smustgrave: Remove deprecated code from media module
- **Removed deprecated code from field and datetime modules, cleaning up legacy API calls and reducing potential runtime errors. This update eliminates obsolete functions, improves code maintainability, and ensures compatibility with newer Drupal core versions.**
  - `4b6d6615`- `4b6d6615` Issue #3443200 by smustgrave: Remove deprecated code from field + datetime modules
- **Removed deprecated code from help and history modules, cleaning up legacy API calls and improving maintainability; developers can now rely on current implementations without legacy compatibility concerns.**
  - `16eabf5f`- `16eabf5f` Issue #3443202 by andypost, smustgrave: Remove deprecated code from help + history modules
- **Removed deprecated code from content translations and locale handling, eliminating legacy translation APIs that were no longer used. This cleans up the codebase, improves static analysis, reduces runtime errors, and ensures future compatibility with newer Drupal core features.**
  - `c4ea627e`- `c4ea627e` Issue #3443199 by smustgrave, andypost: Remove deprecated code from content translations + locale
- **Remove deprecated code in RandomGeneratorTrait.php**
  - `c1b7ee75`- `c1b7ee75` Issue #3442763 by smustgrave: Remove deprecated code in RandomGeneratorTrait.php
- **Removed deprecated code in views module, eliminating legacy API calls and improving code quality by preventing future compatibility issues with newer Drupal core releases**
  - `2528a78d`- `2528a78d` Issue #3442532 by smustgrave, andypost, pradhumanjain2311, quietone: Removed deprecated code in views module
- **Issue #3432882 by kim.pepper, Satane, andypost, alexpott, longwave: Remove deprecated code in File module**
  - `c69cdf2a`- `c69cdf2a` Issue #3432882 by kim.pepper, Satane, andypost, alexpott, longwave: Remove deprecated code in File module
- **Removed deprecated user module code that cleans up obsolete API calls and improves runtime performance; developers will have a cleaner codebase and fewer legacy dependencies**
  - `3ae7cbb9`- `3ae7cbb9` Issue #3432868 by smustgrave, obsidian_, longwave, quietone, mstrelan, catch: Remove deprecated code from user module
- **A deprecation removal in migration system removes legacy migration paths and updates the API for modern migrations; developers will need to adjust code using new migration hooks**
  - `a15d5701`- `a15d5701` Issue #3439369 by fromme, quietone, pradhumanjain2311, smustgrave, alexpott: Remove deprecated code in migration system
- **Issue #3442660 by catch, smustgrave: Remove deprecated code from jsonapi and serialization modules**
  - `c36283b8`- `c36283b8` Issue #3442660 by catch, smustgrave: Remove deprecated code from jsonapi and serialization modules
- **Removed deprecated code from the update module, eliminating legacy API calls and improving maintainability for developers working on upgrade logic**
  - `d26010ee`- `d26010ee` Issue #3442697 by smustgrave, catch: Remove deprecated code from update module
- **Removed deprecated code from path_alias module, eliminating legacy functions and improving API stability, allowing developers to rely on current path alias handling without encountering obsolete methods.**
  - `1dc74bf5`- `1dc74bf5` Issue #3442693 by catch, smustgrave: Remove deprecated code from path_alias module
- **Removed deprecated code in taxonomy module, cleaning up legacy API calls and improving code quality for developers**
  - `ec6d2813`- `ec6d2813` Issue #3442365 by catch, Sandeep Sanwale: Removed deprecated code in taxonomy module
- **Removed deprecated code in field_ui module, cleaning up legacy API calls and improving maintainability for developers working with field UI components.**
  - `460414c4`- `460414c4` Issue #3442361 by catch, smustgrave: Remove deprecated code from field_ui
- **Removes deprecated code from Drupal\Core\Url, eliminating obsolete methods and properties that may cause warnings or errors in custom modules and third‑party extensions; this improves code quality, static analysis, and IDE support for developers.**
  - `9649f0eb`- `9649f0eb` Issue #3343153 by samit.310@gmail.com, andypost, smustgrave, alexpott: Remove deprecated code from \Drupal\Core\Url
- **Removed deprecated code and backward compatibility layers from the workspaces module, eliminating legacy API calls that could cause runtime errors or obscure debugging; this cleans up the module’s internal architecture and improves maintainability for developers.**
  - `2138ac30`- `2138ac30` Issue #3442399 by catch: Remove deprecated code/bc layers from workspaces module
- **Fixes a rendering bug where newly added menu links are invisible until published; ensures that menu items correctly display in the navigation UI even when draft content is pending, improving code reliability and preventing hidden navigation elements.**
  - `a77e5ed3`- `a77e5ed3` Issue #3438771 by amateescu, Michelle, smustgrave: Newly added menu links are invisible until published
- **Issue #3208390 by amateescu, s_leu, Fabianx, tim.plunkett, xjm, smustgrave, alexpott, catch, joachim, EclipseGc: Add an API for allowing modules to mark their forms as workspace-safe**
  - `fcc49e3b`- `fcc49e3b` Issue #3208390 by amateescu, s_leu, Fabianx, tim.plunkett, xjm, smustgrave, alexpott, catch, joachim, EclipseGc: Add an API for allowing modules to mark their forms as workspace-safe
- **Adds a hook for altering form modes of entities via &quot;hook_ENTITY_TYPE_form_mode_alter()&quot;, enabling developers to customize form behavior and extend entity forms in Drupal 8.0.0.**
  - `fcafca2b`- `fcafca2b` Issue #3419186 by Ruturaj Chaubey, phthlaap, balintpekker, smustgrave: Add a hook_ENTITY_TYPE_form_mode_alter()
- **Adds new database dump fixtures for Drupal 10.3.x, enabling developers to test against a realistic data set without modules slated for removal in 11.x; this improves regression testing and compatibility checks.**
  - `f5151255`- `f5151255` Issue #3414563 by quietone, catch, smustgrave, andypost, Spokje: Add new 10.3.x database dump fixtures, without modules deprecated for removal in 11.x
- **Adds validation constraints to the system.date field in core, tightening input rules for date values and improving data integrity across modules that rely on this type.**
  - `4053f045`- `4053f045` Issue #3437325 by narendraR, phenaproxima, alexpott, Wim Leers: Add validation constraints to system.date
- **Adds validation constraints to field_ui.settings, ensuring that configuration values for field UI settings are correctly validated and preventing mis‑configured fields from causing errors during form rendering or processing.**
  - `bb73461c`- `bb73461c` Issue #3417363 by narendraR, Wim Leers, catch, phenaproxima, alexpott: Add validation constraints to field_ui.settings
- **Removes deprecated PHP storage component code, cleaning up legacy API usage and improving static analysis support for developers using Drupal’s PhpStorage class**
  - `12a7aa17`- `12a7aa17` Issue #3441386 by quietone: Remove deprecated code in Drupal\Component\PhpStorage
- **Removed deprecated assertions, event dispatcher and plugin components from core codebase, eliminating legacy APIs that could cause runtime errors and simplifying static analysis for developers.**
  - `78f4e11c`- `78f4e11c` Issue #3439824 by quietone: Remove deprecated code from assertion, eventdispatcher and plugin components
- **Removes deprecated code in Drupal\Component\Serialization, cleaning up the serialization component and eliminating unused methods that may cause warnings or errors in future releases. This improves static analysis, IDE support, and overall code quality for developers working with serialization APIs.**
  - `1a889afc`- `1a889afc` Issue #3441388 by quietone: Remove deprecated code in Drupal\Component\Serialization
- **Adds type hints to WebAssert::address* and cleanUrl methods, improving static analysis, IDE autocomplete and ensuring stricter type safety for developers using these assertion helpers**
  - `b7a11f6d`- `b7a11f6d` Issue #3439527 by acbramley, smustgrave, alexpott: Add type hints to WebAssert::address* and cleanUrl
- **Issue #3389688 by kim.pepper, smustgrave, alexpott, quietone: Add a trait to get file upload location from a field definition**
  - `67932252`- `67932252` Issue #3389688 by kim.pepper, smustgrave, alexpott, quietone: Add a trait to get file upload location from a field definition
- **Fixes a label and description issue in core module code, improving UI consistency for developers working with Drupal&#039;s configuration API and ensuring accurate metadata for module settings**
  - `98ca9a14`- `98ca9a14` Issue #3295078 by quietone, dww, AaronMcHale, Anybody, benjifisher, andregp, shaal, rkoller, xjm, worldlinemine, simohell: Fix the label and description of the new &quot;view update notifications&quot; permission
- **Adds a new setting that allows developers to move the comment form after comments, providing more flexibility for theme customization and API integration**
  - `4dccbe9f`- `4dccbe9f` Issue #3439844 by ivnish, KrakenBite, larowlan, smustgrave: Add setting to move comment form after comments
- **Adds validation constraints for system.image and system.image.gd modules, enhancing code quality by enforcing stricter image file properties and improving API reliability**
  - `f96ec551`- `f96ec551` Issue #3439932 by phenaproxima, narendraR, Wim Leers, larowlan: Add validation constraints to system.image and system.image.gd
- **Removed legacy attributes and added a supported_branches field in update.module&#039;s XML fixtures to improve code quality and maintainability; this change cleans up obsolete configuration keys and ensures backward‑compatibility across multiple branches, aiding developers in understanding the module’s dependency structure.**
  - `b136381b`- `b136381b` Issue #3280679 by quietone, Wim Leers: Remove legacy attributes, add supported_branches and consistently name update.module&#039;s XML fixtures
- **Adds an alter table to the database schema for a new field or feature, updating the data model and requiring code changes to handle the altered structure**
  - `e04c062b`- `e04c062b` Issue #3001496 by jonathanshaw, SmovS, Prashant.c, ptmkenny, smustgrave, manish-31, alexpott, bojanz, tedbow, elber, Berdir, quietone: Add an alter hook to EntityQuery
- **Add validation constraints to contact.settings in Drupal core. We’re t‑h…**
  - `7017ba13`- `7017ba13` Issue #3422872 by kunal.sachdev, Wim Leers: Add validation constraints to contact.settings
- **Removes deprecated country call in Drupal 11.x, eliminating legacy API usage and improving code quality by preventing future deprecation warnings**
  - `cf7be165`- `cf7be165` Issue #3439711 by nicxvan: Remove deprecated country call from 11.x
- **Issue #540008 by kristiaanvandeneynde, Spokje, daffie, clayfreeman, alexpott, eelkeblok, michaelfavia, ianthomas_uk, zaporylie, johnwebdev, abhisekmazumdar, anmolgoyal74, greggles, quietone, shaal, catch, rivimey, AaronMcHale, Berdir, ndf, xjm, finne, Wim Leers, esolitos, heddn, webchick, Bojhan, andypost, efpapado, benjifisher, lauriii, Gábor Hojtsy, moshe weitzman, harings_rob: Add a container parameter that can remove the special behavior of UID#1**
  - `6e727b80`- `6e727b80` Issue #540008 by kristiaanvandeneynde, Spokje, daffie, clayfreeman, alexpott, eelkeblok, michaelfavia, ianthomas_uk, zaporylie, johnwebdev, abhisekmazumdar, anmolgoyal74, greggles, quietone, shaal, catch, rivimey, AaronMcHale, Berdir, ndf, xjm, finne, Wim Leers, esolitos, heddn, webchick, Bojhan, andypost, efpapado, benjifisher, lauriii, Gábor Hojtsy, moshe weitzman, harings_rob: Add a container parameter that can remove the special behavior of UID#1
- **Adds a link to Update module documentation about installation steps for Drupal core modules, improving developer understanding of module configuration and maintenance procedures**
  - `10655fc4`- `10655fc4` Issue #3420356 by dww, thursday_bw, Kanchan Bhogade, smustgrave, benjifisher, catch, alexpott: Add link to Update module documentation about installer settings
- **Creates new enum types for File existence options and deprecates existing constants, enhancing code clarity and type safety for file handling APIs**
  - `7e71fba3`- `7e71fba3` Issue #3426506 by kim.pepper, smustgrave, mstrelan, alexpott: Create enums for File exists options and deprecate consts
- **Adds return type hints for classes that inherit from Composer, improving static analysis and IDE support for developers working with Composer-related classes**
  - `ceb6154d`- `ceb6154d` Issue #3438846 by mondrake: Add return typehints for classes that inherit from Composer
- **Adds validation constraints to image.settings configuration, ensuring that image field settings are correctly validated and preventing mis‑configured values such as invalid MIME types or incorrect dimensions; this improves code quality and reduces runtime errors.**
  - `d0cc36ec`- `d0cc36ec` Issue #3425870 by phenaproxima, alexpott, Wim Leers: Add validation constraints to image.settings
- **Removes deprecated SDC code that will be removed in Drupal 11.0.0, ensuring the code base stays clean and compatible with future releases; developers must update their custom modules to avoid using legacy APIs.**
  - `8b77186b`- `8b77186b` Issue #3409456 by plopesc, smustgrave, quietone, e0ipso, catch: Remove SDC deprecated code before 11.0.0
- **Remove deprecated code from comment module**
  - `c802640a`- `c802640a` Issue #3437579 by andypost: Remove deprecated code from comment module
- **Adds validation constraints to the system.diff API for better data integrity and error handling in diff operations, improving code quality and debugging**
  - `6944c42f`- `6944c42f` Issue #3437587 by narendraR, Wim Leers: Add validation constraints to system.diff
- **Removed deprecated code in File module (core/module/file), cleaning up obsolete functions and constants to improve code quality and maintainability; developers benefit from clearer API surface and reduced risk of accidental usage.**
  - `94bbe550`- `94bbe550` Issue #3432882 by kim.pepper, Satane, andypost, alexpott, longwave: Removed deprecated code in File module (core/module/file)
- **Adds support for tagged_iterator to YamlFileLoader, enabling developers to iterate over YAML file entries with tags and improving code readability and API consistency**
  - `e6a316b5`- `e6a316b5` Issue #3414208 by kim.pepper, longwave, alexpott: Add support for tagged_iterator to YamlFileLoader
- **Remove deprecated code from shortcut module, cleaning up legacy API calls and reducing maintenance overhead for developers**
  - `35aceade`- `35aceade` Issue #3436892 by plopesc, smustgrave: Remove deprecated code from shortcut module
- **Add validation constraints to system.cron, enabling developers to enforce strict cron job scheduling limits and improve code reliability**
  - `fae8e584`- `fae8e584` Issue #3436671 by narendraR, Wim Leers, phenaproxima: Add validation constraints to system.cron
- **This commit involves multiple contributors but unclear specific changes; however, it likely includes code improvements or bug fixes related to some core components. **
  - `ced6eac5`- `ced6eac5` Issue #2827055 by yash.rode, srishtiiee, mrshowerman, rodrigoaguilera, herved, omkar.podey, MegaChriz, Lukas von Blarer, ravi.shankar, lauriii, c_archer, ifrik, froboy, Rudi Teschner, smustgrave, liquidcms, catch, quietone, mpdonadio, alexpott: Add option to show only start or end date in the DateTime Range custom formatter
- **Specifies PHP 8.3 as the lowest version needed for core code, tightening language support constraints and enabling developers to target compatible syntax and features, improving static analysis and IDE support.**
  - `b6331db0`- `b6331db0` Issue #3413268 by BramDriesen, longwave, Spokje, catch, mondrake, quietone, andypost: Add PHP 8.3 requirement to Drupal 11.0.x
- **Adds validation constraints to text.settings, enforcing stricter input rules for text fields and improving data integrity across the platform.**
  - `250b776e`- `250b776e` Issue #3436072 by omkar.podey, narendraR: Add validation constraints to text.settings
- **Adds deprecation and backward‑compatibility support for library overrides when files are moved, ensuring existing code that references overridden libraries remains functional across Drupal core updates. This change introduces new API checks and error handling to maintain compatibility with custom modules and themes.**
  - `a45115a9`- `a45115a9` Issue #3432601 by catch, quietone, smustgrave: Add deprecation/bc support for library-overrides when files are moved
- **Issue #3376846 by kristiaanvandeneynde, larowlan, smustgrave, catch: Implement the new access policy API**
  - `3698610c`- `3698610c` Issue #3376846 by kristiaanvandeneynde, larowlan, smustgrave, catch: Implement the new access policy API
- **Replaces deprecated help_topics module with an obsolete stub to remove legacy code and prevent runtime errors, improving code quality and ensuring compatibility with newer Drupal core.**
  - `26ed6408`- `26ed6408` Issue #3433019 by andypost, catch: Replace deprecated help_topics module with obsolete stub
- **The commit fixes a bug where published entities created in a workspace returned the wrong revision ID instead of the workspace‑specific revision. This change corrects API behavior for entity publishing and ensures proper version tracking in code that relies on revision IDs.**
  - `4c89783a`- `4c89783a` Issue #3432228 by amateescu, smustgrave: Published entities created in a workspace should return the workspace-specific revision
- **Issue #3425849 by jackwrfuller, joachim: DraggableListBuilderTrait needs to say that classes using it must implement FormInterface**
  - `d2745192`- `d2745192` Issue #3425849 by jackwrfuller, joachim: DraggableListBuilderTrait needs to say that classes using it must implement FormInterface
- **This commit removes deprecated Drupal\Core\StringTranslation\TranslationWr... classes and methods, updating the translation API to use newer StringTranslation interfaces. It eliminates obsolete code paths, improves static analysis, IDE support, and ensures compatibility with future core releases.**
  - `b167d74a`- `b167d74a` Issue #3269141 by ameymudras, longwave, ravi.shankar, sharayurajput, catch, alexpott: Remove deprecated Drupal\Core\StringTranslation\TranslationWrapper to TranslatableMarkup in Drupal 11
- **The commit removes deprecated functions from node.module, eliminating legacy code that could cause conflicts or unexpected behavior in node handling APIs and improving maintainability for developers working on node-related features.**
  - `c841aad1`- `c841aad1` Issue #3432871 by thhomas, mstrelan: Remove deprecated functions from node.module
- **Removes deprecated Extension API code, cleaning up legacy interfaces and improving maintainability; developers can now rely on updated APIs without legacy warnings or compatibility issues**
  - `f601a927`- `f601a927` Issue #3432326 by mondrake: Remove deprecated code from the Extension API
- **Deprecated ServiceIdHashTrait and related code removed, simplifying the internal API for services and improving code quality by eliminating legacy traits that are no longer used; developers can update their custom modules to avoid relying on deprecated functionality.**
  - `74d5726d`- `74d5726d` Issue #3432258 by longwave, andypost: Remove deprecated ServiceIdHashTrait and related code
- **Removed deprecated actions from node module, eliminating obsolete API calls and improving code quality by preventing future errors and simplifying maintenance**
  - `ff9344c1`- `ff9344c1` Issue #3432877 by thhomas, mstrelan: Remove deprecated actions from node module
- **Removed deprecated include files and related functions to clean up codebase, reducing legacy dependencies that could cause conflicts or maintenance issues in future builds.**
  - `b52b09f0`- `b52b09f0` Issue #3432256 by saurabh rawat, thhomas, longwave: Remove deprecated code from include files
- **Issue #3432482 by mondrake, smustgrave: Remove deprecated code from the Cache API**
  - `86d49119`- `86d49119` Issue #3432482 by mondrake, smustgrave: Remove deprecated code from the Cache API
- **Removed support for ContainerAwareInterface, simplifying dependency injection and reducing code complexity in Drupal core; developers must update services that previously relied on this interface to ensure compatibility with newer versions**
  - `0f8531cc`- `0f8531cc` Issue #3431362 by Spokje, longwave: Remove support for ContainerAwareInterface
- **Implements lazy database creation for sessions, reducing unnecessary database connections during session handling and improving performance by deferring database initialization until a session is actually needed**
  - `e7017f6a`- `e7017f6a` Issue #3428565 by catch, phenaproxima, alexpott: Implement lazy database creation for sessions
- **Fixes deprecated jQuery $.parseJSON() usage in ajax.js and jquery.form.js, eliminating runtime errors and ensuring compatibility with newer jQuery versions**
  - `19a71a3a`- `19a71a3a` Issue #3432151 by Tom Konda, longwave: [jQuery 4] ajax.js and jquery.form.js use deprecated function $.parseJSON()
- **Corrects translation visibility bug affecting backend UI rendering; improves code reliability and consistency across multilingual sites**
  - `9d302e5d`- `9d302e5d` Issue #3154087 by amateescu, Tim Bozeman, mallezie, smustgrave: Translations created in a workspace are not shown in the admin content overview
- **Adds logic to handle workspace creation and state transition; enhances code consistency and debugging ease**
  - `c4d64828`- `c4d64828` Issue #3278377 by amateescu, s_leu, smustgrave, pooja saraah, rkoller, simohell: Creating a new workspace should also switch to it
- **Fixes CKEditor 5 URL handling by adding protocol defaults for top‑level domain URLs, improving consistency and preventing broken links in content editors**
  - `d4c8c21b`- `d4c8c21b` Issue #2893568 by Wim Leers, lee.cocklin, AaronBauman, anon, ainarend: Linking in CKEditor 5: URLs with top-level domain but without protocol should get a protocol added automatically
- **Issue #3428122 by alexpott, longwave: Add packageManager key to core/package.json now we recommend corepack enable**
  - `cbc6c5e5`- `cbc6c5e5` Issue #3428122 by alexpott, longwave: Add packageManager key to core/package.json now we recommend corepack enable
- **Adds a void return type to Drupal\Component\DependencyInjection\Container::reset(), improving static analysis and IDE support by clarifying that the method does not return any value, which helps developers avoid unexpected return handling**
  - `fd447f3e`- `fd447f3e` Issue #3427744 by longwave: Add void return to Drupal\Component\DependencyInjection\Container::reset()
- **Introduces a new interface for sharing the definition of overridable properties in Drupal core, enabling developers to customize and extend components more flexibly by providing a clear contract for property overrides.**
  - `544a27a0`- `544a27a0` Issue #2985362 by DanielVeza, tim.plunkett, mstrelan, quietone, kim.pepper, acbramley: Create an interface to share the definition of the overridable methods on DefaultsSectionStorageInterface and LayoutEntityDisplayInterface
- **Adds validation constraints to search.settings, enforcing required fields and data types for search configurations; developers need to understand new API parameters and update code that interacts with search settings.**
  - `9e7182f3`- `9e7182f3` Issue #3425875 by Wim Leers, phenaproxima, smustgrave: Add validation constraints to search.settings
- **Issue #3425492 by smustgrave, Keshav Patel, Spokje: Remove deprecated code from block module**
  - `0886458a`- `0886458a` Issue #3425492 by smustgrave, Keshav Patel, Spokje: Remove deprecated code from block module
- **Fixes a bug that prevented entities with image fields from being created in workspace environments, ensuring entity creation works correctly across all Drupal core versions and improving stability for developers working on custom content types**
  - `62ccc2af`- `62ccc2af` Issue #3025785 by amateescu, mallezie, s_leu, smustgrave, tim.plunkett: Cannot create entity with image in a workspace
- **Issue #3057399 by quietone, Akhil Babu, kristiaanvandeneynde, alexpott, pradhumanjain2311, smustgrave, catch, poker10, longwave, jimafisk, Newb_Druper, robpowell, dpi, tomdewild: Add user_requirements to check for missing anonymous user**
  - `611fb344`- `611fb344` Issue #3057399 by quietone, Akhil Babu, kristiaanvandeneynde, alexpott, pradhumanjain2311, smustgrave, catch, poker10, longwave, jimafisk, Newb_Druper, robpowell, dpi, tomdewild: Add user_requirements to check for missing anonymous user
- **Introduces an additional hyperlink reference within core theme code, affecting template rendering and ensuring developers maintain consistent documentation links**
  - `fdda4128`- `fdda4128` Issue #3416039 by ressa, divya.sejekan, catch, Gábor Hojtsy: Add link to Drupal Support in Olivero Welcome text
- **Adds or modifies CSS classes and styling for active button states, including potential changes in component templates and rendering logic**
  - `87416478`- `87416478` Issue #3306209 by jannakha, Gauravvvv, smustgrave, athyamvidyasagar, pameeela, Wim Leers, mgifford: Add outline to buttons with active state
- **We...**
  - `322ba45c`- `322ba45c` Issue #3408849 by markconroy, finnsky: Add @finnsky as core maintainer for Umami
- **Adds configuration validation for block and filter weights to enforce correct numeric values, improving code reliability and preventing runtime errors when configuring weight settings in Drupal core.**
  - `27a54eb6`- `27a54eb6` Issue #3426309 by Wim Leers, smustgrave: Add config validation for weights (blocks, filters, etc. all use weights)
- **Implemented a new OpenAPI endpoint for external services, adding a dedicated API route and request/response schema to facilitate integration with third‑party systems. This improves code architecture and allows developers to extend functionality via custom modules.**
  - `af2ddbad`- `af2ddbad` Issue #3408738 by omkar.podey, srishtiiee, kunal.sachdev, lauriii, Utkarsh_33, arisen, smustgrave, Wim Leers, catch, benjifisher: Create a new OpenModalDialogWithUrl command
- **Issue #3043330 by acbramley, nterbogt, phenaproxima, Sam152, tim.plunkett, quietone, smustgrave, jibran, larowlan, azinck, catch, alexpott, tedbow, kim.pepper: Reduce the number of field blocks created for entities (possibly to zero)**
  - `2c2ca6bc`- `2c2ca6bc` Issue #3043330 by acbramley, nterbogt, phenaproxima, Sam152, tim.plunkett, quietone, smustgrave, jibran, larowlan, azinck, catch, alexpott, tedbow, kim.pepper: Reduce the number of field blocks created for entities (possibly to zero)
- **Removes deprecated ExternalCommandRequirementsTrait from Drupal core, eliminating obsolete code paths and simplifying command execution logic for developers working with custom CLI commands**
  - `1dcdbb9f`- `1dcdbb9f` Issue #3425660 by mondrake: [11.x] Remove deprecated ExternalCommandRequirementsTrait
- **Introduces a new interface `operators()` on views to allow developers to programmatically access and manipulate view operators, enhancing API flexibility for custom view logic and facilitating future extensions**
  - `6290bae4`- `6290bae4` Issue #3320569 by Spokje, mondrake, smustgrave, longwave, quietone, Lendude, alexpott: Add an interface for operators() on views
- **Removed deprecated taxonomy code, cleaning up the taxonomy module and eliminating obsolete API calls that could cause runtime errors or misbehave in future releases**
  - `efc03b35`- `efc03b35` Issue #3110671 by andypost, longwave: Remove remaining deprecated code from taxonomy.module
- **Issue #3425419 by andypost, smustgrave: [11.x] Remove deprecated code from system module**
  - `8da7cd4c`- `8da7cd4c` Issue #3425419 by andypost, smustgrave: [11.x] Remove deprecated code from system module
- **Adds an owner field to the BlockContent entity type, enabling developers to reference and manage block ownership through API changes and data relationships**
  - `c4e09053`- `c4e09053` Issue #3038365 by acbramley, Grimreaper, smustgrave, catch: Add owner to the BlockContent entity type
- **Adds a mechanism to skip processing of specific entity types in workspaces, improving workflow efficiency and reducing unnecessary API calls during workspace synchronization**
  - `ff7343d4`- `ff7343d4` Issue #3101671 by amateescu, webdrips, smithmilner, s_leu, smustgrave: Add mechanism to have workspaces skip processing entity types
- **Fixes a bug in field_field_config_create that incorrectly checks whether the config installer is syncing; ensures proper configuration synchronization during installation and prevents stale or missing fields when deploying modules**
  - `499d8e77`- `499d8e77` Issue #3421731 by larowlan, byrond: field_field_config_create should check if the config installer is syncing
- **Requires an array argument for AddCssCommand, ensuring that CSS additions are passed as a structured array; this changes the API signature and improves type safety for developers using the command in custom code.**
  - `846e584e`- `846e584e` Issue #3339374 by gapple, andypost, longwave, catch, smustgrave: [11.x] Require array argument for AddCssCommand
- **Issue #3197915 by quietone, joachim, Tanuj., karishmaamin, dww:  Add details to MigrateSkipRowException messages caused by stub creation**
  - `10bd4b94`- `10bd4b94` Issue #3197915 by quietone, joachim, Tanuj., karishmaamin, dww:  Add details to MigrateSkipRowException messages caused by stub creation
- **Removed deprecated non_lazy_route_enhancer and non_lazy_route_filter from Drupal core 11.x, eliminating legacy routing helpers that are no longer supported; this cleanup reduces code complexity and prevents future API conflicts. The change also updates static analysis tools to reflect current routing behavior.**
  - `4ba1c840`- `4ba1c840` Issue #3347710 by andypost: [11.x] Remove deprecated non_lazy_route_enhancer and non_lazy_route_filter
- **Removes deprecated ContextProvidersPass from Drupal 11.x, eliminating unused dependency injection passes that reduce build time and improve code clarity for developers working with service containers.**
  - `5ead2a17`- `5ead2a17` Issue #3396445 by tstoeckler: [11.x] Remove deprecated ContextProvidersPass
- **Removed an empty and deprecated IE11 polyfill library stub that was unused in modern browsers, cleaning up legacy code and reducing bundle size. This fixes potential confusion for developers who maintain or audit polyfills and ensures the core package stays lean.**
  - `6645ac94`- `6645ac94` Issue #3238501 by kostyashupenko, Spokje, mherchel, nod_, catch, longwave, lauriii, bnjmnm: Remove empty and deprecated IE11 polyfill library stub entries in 11.0.0
- **Adds file upload lock handling to FileUploadHandler, preventing concurrent uploads from corrupting files and ensuring data integrity when multiple users submit content simultaneously.**
  - `bbc4baeb`- `bbc4baeb` Issue #3389016 by kim.pepper, xjm, larowlan: Add file upload lock handling to FileUploadHandler
- **Fixes a regression in DraggableListBuilder::getWeight() by adding a fallback when entities have NULL weight, ensuring consistent ordering and preventing errors during list rendering.**
  - `1224497e`- `1224497e` Issue #3425058 by tstoeckler: [regression] Add a fallback in DraggableListBuilder::getWeight() to support entities with a NULL weight
- **Issue #2827055 by yash.rode, srishtiiee, mrshowerman, rodrigoaguilera, herved, omkar.podey, MegaChriz, Lukas von Blarer, ravi.shankar, lauriii, c_archer, ifrik, Rudi Teschner, froboy, smustgrave, liquidcms, quietone, mpdonadio: Add option to show only start or end date in the DateTime Range custom formatter**
  - `7a94c5d0`- `7a94c5d0` Issue #2827055 by yash.rode, srishtiiee, mrshowerman, rodrigoaguilera, herved, omkar.podey, MegaChriz, Lukas von Blarer, ravi.shankar, lauriii, c_archer, ifrik, Rudi Teschner, froboy, smustgrave, liquidcms, quietone, mpdonadio: Add option to show only start or end date in the DateTime Range custom formatter
- **Removes deprecated block content API functions and classes in Drupal 11, eliminating legacy code that could cause runtime errors or security issues. It cleans up the module’s internal structure and improves maintainability.**
  - `41f4ce1f`- `41f4ce1f` Issue #3423889 by smustgrave, Spokje: [11.x] Remove deprecated code from block content module
- **Adjusts Drupal 11 Database API to remove deprecated Drupal 10 code, ensuring compatibility with the new database layer and preventing runtime errors due to legacy function calls.**
  - `8cde52c9`- `8cde52c9` Issue #3256524 by mondrake: [11.x] Adjust Database API to remove deprecated Drupal 10 code in Drupal 11
- **Removed deprecated code from the Diff component in Drupal 11.x, cleaning up legacy functions and improving API stability for developers working with diff rendering and comparison logic**
  - `795e72a5`- `795e72a5` Issue #3424436 by mondrake, longwave: [11.x] Remove deprecated code from the Diff component
- **Adds a JavaScript-enabled header component that requires integration into the Drupal core API, impacting component architecture and requiring developers to update module dependencies**
  - `13a680ce`- `13a680ce` Issue #3404302 by finnsky, smustgrave, lauriii, markconroy: Create header component for Umami, with JS
- **Creates a new SDR/SDC component—…**
  - `7186f7f9`- `7186f7f9` Issue #3365497 by finnsky, Gauravvvv, sarahjean, smustgrave, snig, e0ipso, pdureau: Create new SDC component for Umami Banner
- **Issue #3407159 by longwave, quietone: [11.x] Add void returns for Symfony 7**
  - `02f2bb34`- `02f2bb34` Issue #3407159 by longwave, quietone: [11.x] Add void returns for Symfony 7
- **Issue #3422407 by Wim Leers, smustgrave: New config schema data type: bytes**
  - `191e88b5`- `191e88b5` Issue #3422407 by Wim Leers, smustgrave: New config schema data type: bytes

**drupal/core-composer-scaffold** (10.5.6 → 11.1.9)

- **Adds support for recipes in drupal/recommended-project and drupal/legacy-project, enabling developers to include recipe content types and associated APIs in their projects without modifying core scaffolding**
  - `79e3fcb1`- `79e3fcb1` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project

**drupal/admin_toolbar** (3.6.1 → 3.6.2)

- **Implemented keyboard shortcut support for MacOS in admin toolbar, adding new key bindings that trigger actions and improving cross‑platform usability by updating shortcut mappings and event handlers**
  - `0412425d`- `0412425d` Issue #3527344 by justcaldwell, erutan, dydave: Fixed support for new keyboard shortcuts for MacOS.
- **Dropped support for Core Update module routes &#039;update.module_update&#039; and &#039;update.theme_update&#039;, removing obsolete API endpoints that were no longer used in newer Drupal core releases; this change cleans up routing tables, reduces potential route conflicts, and simplifies maintenance for developers.**
  - `1e71df02`- `1e71df02` Issue #3532010 by phily, dydave, benjifisher: Dropped support for Core Update module routes &#039;update.module_update&#039; and &#039;update.theme_update&#039; for Core versions above 11.2.

**drupal/advanced_help_block** (1.0.7 → 1.0.8)

- **Adds a missing dependency on the Help module to Advanced Help Block, ensuring that the block’s API calls and rendering logic work correctly; developers need to know this change for compatibility and code stability**
  - `a9d90031`- `a9d90031` 3547063: Add missing dependency. Advanced Help Block requires Help module.

**drupal/libraries** (4.1.0 → 4.1.1)

- **Fixes a runtime error in the Libraries API when an install profile is missing; adds a guard to prevent calling getPath on a false value, ensuring code stability and preventing crashes during module installation or updates.**
  - `19621134`- `19621134` [#3485329] fix: Libraries API fails when no install profile is installed. Add check that install_profile is not false before running getPath on it.
- **Introduces PHP 8.4 deprecation for implicit nullable parameters via default null values, updating type hints and return types to be explicit and compatible with future PHP releases; developers must adjust code to avoid deprecated behavior and ensure static analysis compliance**
  - `e67c53a0`- `e67c53a0` [#3533910] feat: PHP 8.4 - Implicitly nullable via default value null deprecation

**drupal/better_exposed_filters** (6.0.6 → 7.1.0-beta4)

- **Adds an option to hide exposed field labels in Better Exposed Filters, allowing developers to customize the filter UI and control visibility of label elements for cleaner layouts.**
  - `278c293d`- `278c293d` Issue #3282228 by FeyP, DamienMcKenna, smustgrave, neclimdul, matthewmessmer: Add option to hide exposed field labels
- **New attempt**
  - `cb9f346f`- `cb9f346f` New attempt
- **#3477417: Add warning to status page if external library nouislider does not exist.**
  - `20fa1cca`- `20fa1cca` #3477417: Add warning to status page if external library nouislider does not exist.
- **Adds a composer.libraries.json file to support Composer dependency management for Drupal 7.x, enabling developers to declare external libraries and manage them through Composer instead of manual installation.**
  - `34a31a4b`- `34a31a4b` Resolve #3477440 &quot;7.x add composer.libraries.json&quot;
- **Adds a minimum length validation rule to Better Exposed Filters, ensuring that filter values meet a specified minimum character count before being applied, improving data integrity and preventing erroneous query results**
  - `2b3287f0`- `2b3287f0` Resolve #3262456 &quot;Add minimum length&quot;
- **Deprecated Twig filter &quot;spaceless&quot; triggers a warning during upgrade checks; developers must update templates to avoid deprecated syntax and maintain compatibility with newer Drupal core.**
  - `105dd68c`- `105dd68c` Issue #3480552 by gaurav gupta: Twig Filter &quot;spaceless&quot; is deprecated warning in upgrade status
- **Adds RTL support to slider filters in Better Exposed Filters, updating filter rendering logic and ensuring proper text alignment for right‑to‑left languages; developers must adjust code or test for language compatibility**
  - `939d0c50`- `939d0c50` Add support for RTL in slider filters
- **Fixes a bug that prevents title information from being added when the form element is empty, ensuring correct data handling and preventing unintended output in the exposed filters module**
  - `c56869ed`- `c56869ed` 3487805 Ensure title info is only added if form element is not empty
- **Creates a mirror for external library dependency in Composer, enabling the module to resolve composer packages without needing an external repository, improving dependency management and build consistency.**
  - `381c81ab`- `381c81ab` Issue #3494220 by jurgenhaas: Create a mirror for external library dependency for composer support
- **Creates a mirror for an external library dependency in Composer to ensure consistent and isolated package versions, allowing developers to manage and debug dependencies without affecting core code or other modules.**
  - `9c0cd6a6`- `9c0cd6a6` Issue #3494220 by jurgenhaas: Create a mirror for external library dependency for composer support
- **Adds a new attribute to the Better Exposed Filters API, enabling developers to extend filter behavior and customize query parameters via the exposed_filters attribute configuration**
  - `65909e19`- `65909e19` Issue #3503630: Create attribute
- **Adds a form-item class to the sort details/summary element in Drupal’s Better Exposed Filters module, improving CSS targeting and styling consistency for developers working with custom filter UI components.**
  - `50fc3df2`- `50fc3df2` Add form-item class to sort details/summary element
- **Fixes a bug where Views exposed filters added an unpredictable random suffix to filter identifiers, preventing duplicate IDs and ensuring consistent query parameter names for developers building custom views.**
  - `ae918715`- `ae918715` Issue #3516547 by dcine: Views exposed filters adds a random suffix with letters and numbers
- **Views reset button creates anonymous sessions**
  - `54de732e`- `54de732e` Issue #3540832 by tregonia: Views reset button creates anonymous sessions
- **[#3528584] feat: Html validation error due to non allowed attributes**
  - `a32a5a0c`- `a32a5a0c` [#3528584] feat: Html validation error due to non allowed attributes
- **[#3495503] feat: Allow auto-submit for sorts only**
  - `cdeb6297`- `cdeb6297` [#3495503] feat: Allow auto-submit for sorts only
- **Fixes a warning triggered by resetForm() when exposed sort elements are missing, ensuring that form reset logic behaves correctly and prevents unintended warnings during user interaction**
  - `d77a2d53`- `d77a2d53` [#3538204] feat: resetForm() triggers warning when exposed sort elements is missing #default_value
- **[#3546432] feat: Better Exposed Filters (BEF) multiple select links generate...**
  - `fa93f375`- `fa93f375` [#3546432] feat: Better Exposed Filters (BEF) multiple select links generate...
- **Fixes broken checkbox functionality in the Better Exposed Filters module, ensuring form elements correctly render and submit values. This resolves rendering bugs that could affect filter logic and data integrity.**
  - `5876c256`- `5876c256` [#3546812] feat: Checkboxes are broken
- **Fixes a bug where changes to filter definitions in Better Exposed Filters caused incompatibility with older Drupal versions, preventing broken filter functionality and ensuring backward‑compatible API behavior.**
  - `d7b328c5`- `d7b328c5` [#3547366] feat: Issue with changes to filter definitions breaks with older versions.
- **[#3526885] feat: Accessibility: Orphaned form label**
  - `dca6c148`- `dca6c148` [#3526885] feat: Accessibility: Orphaned form label
- **Moved the JavaScript range slider component out of the minimum field wrapper to isolate its DOM structure and improve code readability; this change refactors the noUISlider integration, making future maintenance easier and reducing potential conflicts with other form elements.**
  - `c9fd8966`- `c9fd8966` [#3534975] feat: Move JS range slider out of the minimum field wrapper (noUISlider)

**drupal/media_library_form_element** (2.1.2 → 2.1.4)

- **Deprecation of RenderElement in Drupal 10.3 and removal in Drupal 12 requires developers to update code that uses this API; it affects rendering logic and compatibility across platform versions.**
  - `98b4d01a`- `98b4d01a` Issue #3469293: RenderElement is deprecated in drupal:10.3.0 and is removed from drupal:12.0.0
- **Adds support for integer and array default values in media library form elements, enabling developers to define custom field defaults that are type‑safe and can be used programmatically without casting or runtime errors.**
  - `68eb4ed9`- `68eb4ed9` Issue #3537789: Add support for integer and array default values
- **Updates documentation format from plain text to Markdown, improving readability for developers and enabling better integration with tools like GitHub and IDEs that parse Markdown for code reference**
  - `c2cd61a0`- `c2cd61a0` [#3321051] feat: Replace README.txt with README.md

**drupal/captcha** (2.0.7 → 2.0.9)

- **Adds a data‑nosnippet attribute to the CAPTCHA component’s HTML output, preventing search engines from indexing the captcha text and improving privacy and SEO compliance**
  - `f40e0f59`- `f40e0f59` Issue #3536050 by grevil, anybody: Add data-nosnippet around captcha

**drupal/csv_serialization** (3.0.1 → 4.0.1)

- **Fixes a call to deprecated method setNewline() in CSV serialization code, ensuring compatibility with newer PHP versions and preventing runtime errors during data export**
  - `11f675ba`- `11f675ba` Issue #3402274: Call to deprecated method setNewline()
- **Replaces deprecated League\Csv\ByteSequence::BOF_UTF8 constant with a newer implementation, eliminating potential runtime errors and improving compatibility across PHP versions; this change updates internal CSV serialization logic and ensures static analysis tools recognize the correct byte order handling.**
  - `feed0f8b`- `feed0f8b` Issue #3455761 by markdorison, david.muffley: Replace deprecated usage of League\Csv\ByteSequence::BOF_UTF8
- **PHP 8.1 deprecated function warning**
  - `5322d4f7`- `5322d4f7` Issue #3389415 by ericgsmith: PHP 8.1 deprecated function warning

**drupal/inline_entity_form** (2.0.0-rc10 → 3.0.0-rc21)

- **Adds a label attribute to the weight select field in inline_entity_form, improving accessibility by providing screen‑reader context and ensuring better semantic markup for developers working on form components**
  - `23cd78d5`- `23cd78d5` Issue #3311501 by dcam, edmund.dunn, geek-merlin: Add label to weight select field for accessibility
- **Fixes a bug where the inline entity form displayed the wrong bundle when a user had permissions to create only one of the available bundles; corrects bundle selection logic and improves API consistency for developers working with entity forms**
  - `d8419f6d`- `d8419f6d` Issue #3358281 by bkosborne, geek-merlin: Wrong bundle form is displayed if user has permissions to create only of the available bundles
- **Implicitly marking parameter $entity as nullable is deprecated**
  - `45bc6296`- `45bc6296` Issue #3511502 by jakegibs617: Implicitly marking parameter $entity as nullable is deprecated

**drupal/metatag** (2.1.1 → 2.2.0)

- **Adds support for fediverse:creator metadata field in metatag module, extending API to expose a new property that developers can use in custom code and templates**
  - `fa211c54`- `fa211c54` Issue #3458724 by damienmckenna, rachel_norfolk, pacproduct, petr illek: Add support for fediverse:creator.
- **Adds an SVG icon meta tag to the metatag module, enabling developers to specify custom SVG icons for pages via the Metatag API. This improves SEO and accessibility by allowing unique icons in page metadata.**
  - `b6d61dea`- `b6d61dea` Issue #3535155 by feyp, damienmckenna: Add SVG icon meta tag.
- **Issue #3272202 by anybody, damienmckenna, grevil: Add &lt;none&gt; placeholder to clear / unset inherited value.**
  - `aa44d4ba`- `aa44d4ba` Issue #3272202 by anybody, damienmckenna, grevil: Add &lt;none&gt; placeholder to clear / unset inherited value.
- **Adds an optional suffix to meta tag values after trimming, improving string handling for metadata generation and ensuring consistent tag output across modules that rely on trimmed strings**
  - `85dfe411`- `85dfe411` Issue #3545780 by damienmckenna: Optionally add suffix after meta tags are trimmed.

**drupal/migrate_tools** (6.0.5 → 6.1.2)

- **Adds full entity operation support to Migration list builder, enabling developers to programmatically manage migration entities (create, delete, update) via API and improving automation scripts.**
  - `13cae612`- `13cae612` Issue #3452721 by codebymikey, divyansh.gupta, heddn: Provide the ability to use all available entity operations on the Migration list builder
- **Introduces new parameters in the MigrateExecutable constructor to allow finer control over migration execution, enabling developers to customize settings such as batch size, timeout and error handling directly through the API.**
  - `8c7029dd`- `8c7029dd` Issue #3536657 by heddn, mrshowerman: New parameters introduced in MigrateExecutable class constructor

**drupal/openy_carnation** (3.2.1 → 4.0.0-beta4)

- **Adds a legacy jQuery library to support older JavaScript plugins that rely on jQuery 1.x, ensuring backward‑compatibility and preventing runtime errors in custom modules that use legacy code**
  - `a37f190c`- `a37f190c` [Drupal 11] fix: add jquery_legacy library
- **feat: add bootstrap jquery migrate tools**
  - `353e0d80`- `353e0d80` feat: add bootstrap jquery migrate tools

**drupal/openy_gtranslate** (1.0.8 → 2.0.0)

- **Fixes a bug in the Google Translate integration for the legacy Carnation theme, correcting API calls and translation rendering logic that were previously failing, ensuring reliable language support across all pages**
  - `84deeef8`- `84deeef8` Fix Google Translate functionality on legacy Carnation theme

**drupal/scheduler** (2.2.1 → 2.2.2)

- **Adds a rule to automatically run scheduler jobs on commit and merge requests, defaulting to manual execution. This introduces new configuration options in SchedulerManager and improves CI integration for developers.**
  - `5e9592e4`- `5e9592e4` Issue #3356800 by jonathan1055: Add rules to run jobs on commit and in MR, defaulting to manual
- **Adds static caching around SchedulerManager::getPlugins() to reduce repeated plugin lookups and improve performance of scheduler queries, benefiting developers by optimizing code execution and reducing overhead.**
  - `89456f77`- `89456f77` Issue #3533739 by jsacksick: Implement static caching around SchedulerManager::getPlugins()
- **Fixes deprecated autoloading of hooks in scheduler.tokens.inc, ensuring proper hook registration and avoiding future compatibility issues with Drupal 11.2 and later.**
  - `d8aa902f`- `d8aa902f` [#3514380] fix: Autoloading hooks in the file scheduler.tokens.inc is deprecated D11.2
- **Improves caching of SchedulerManager::getPlugins() and SchedulerManager::getEntityFormIds(), reducing repeated calls to plugin discovery and entity form ID retrieval, enhancing performance and memory usage for code that relies on these APIs.**
  - `58172b63`- `58172b63` [#3545432] feat: Improve caching around SchedulerManager::getPlugins() and SchedulerManager::getEntityFormIds()
- **Removes deprecated getSystemData() method from scheduler module, cleaning up legacy API calls and improving code stability for future development**
  - `c4f9af05`- `c4f9af05` #3553242 Ignore deprecated getSystemData()

**drupal/webform** (6.3.0-beta3 → 6.3.0-beta5)

- **Issue #3133280: Remove obsolete comment**
  - `55b03e6d`- `55b03e6d` Issue #3133280: Remove obsolete comment
- **Adds a minified flag to webform library files in libraries.yml, enabling developers to load optimized JavaScript and CSS assets for performance improvements and easier debugging**
  - `1285584a`- `1285584a` Issue #3523478: Add `minified: true` to files in webform.libraries.yml
- **Replace deprecated rgba() function in CSS styles for webform components, ensuring compatibility with modern browsers and improving code quality.**
  - `04f7ca5f`- `04f7ca5f` Issue #3541370: Replace deprecated rgba()
- **Adds a LegacyModuleImplementsAlter attribute annotation to provide type‑hinted metadata for legacy module implementations, enabling static analysis and IDE support during code refactoring**
  - `c06d901d`- `c06d901d` Issue #3487957: Add LegacyModuleImplementsAlter attribute annotation
- **Removed deprecated dialogClass from Drupal Webform API, eliminating legacy code and improving compatibility with newer UI components; developers will avoid using outdated classes and reduce maintenance effort**
  - `a6f2b49a`- `a6f2b49a` Issue #3517902: Remove deprecated dialogClass
- **Implemented access check for &quot;notes&quot; operation in Webform, enhancing security by restricting note creation/editing to authorized users; developers must update permissions and handle potential errors**
  - `144913a0`- `144913a0` Issue #3516134: Add access check for &quot;notes&quot; operation
- **Added autocomplete for date element to improve accessibility compliance (a11y), allowing users with assistive technologies to navigate dates more efficiently; developers can integrate this feature into forms without additional code**
  - `7874e214`- `7874e214` Issue #3538042: Add autocomplete for date element to be a11y compliant
- **Removes deprecated addcslashes() usage in Webform preview, preventing deprecation warnings during form submission and improving code stability and compatibility with PHP 8+.**
  - `6a6dc6b9`- `6a6dc6b9` Issue #3523961 by marthinal, jwilson3: Avoid addcslashes() deprecation warning during Webform submission preview
- **Fixes a cascading effect that caused performance loss by optimizing data handling and reducing unnecessary re-renders in the webform module, improving code efficiency and reliability**
  - `afa51110`- `afa51110` Issue #3456597: Cascading effect creates loss of performance
- **Issue #3473153 by jrockowitz, rraney, flyke, cilefen, s3b0un3t, rajeevk, carma03, anurag_2711, lukey: Route &quot;webform.addons&quot; does not exist**
  - `da13b381`- `da13b381` Issue #3473153 by jrockowitz, rraney, flyke, cilefen, s3b0un3t, rajeevk, carma03, anurag_2711, lukey: Route &quot;webform.addons&quot; does not exist
- **Fixes an accessibility violation in Tippy.js by removing aria-expanded from a &lt;span&gt; element with role=&quot;tooltip&quot;, ensuring compliant tooltip behavior and preventing potential screen‑reader issues**
  - `12467387`- `12467387` Issue #3516047 by marthinal, jwilson3: Accessibility violation: Tippy.js adds aria-expanded to &lt;span&gt; with role=&quot;tooltip&quot;
- **Improves dropbutton UI by adding a webform node id/class or form id for better element targeting and JavaScript handling, enhancing code maintainability and debugging**
  - `516877dc`- `516877dc` Issue #3504078 by liam morland, milosr, jrockowitz, crutch, ivan616: Operations Dropbutton improvement, need webform node id/class or form id for a webform node
- **Issue #3493832: Allow custom data-options to added to elements JavaScript options**
  - `b085c3af`- `b085c3af` Issue #3493832: Allow custom data-options to added to elements JavaScript options
- **Adds &quot;titlecase&quot; to cspell project words list, enhancing static‑analysis tooling by including common title‑case terms in spell‑check suggestions, improving IDE support and reducing false positives during code review**
  - `25861d14`- `25861d14` Add &quot;titlecase&quot; to cspell project words list
- **Adds a new justify-content setting to WebformFlexbox element, extending the flexbox API and allowing developers to control alignment of form elements via the &quot;justifyContent&quot; property in configuration.**
  - `7595248c`- `7595248c` Issue #3483410: Add justify content settings in WebformFlexbox Element
- **Removal of the Add-ons feature removes a deprecated API and clean‑up code, reducing complexity and potential security vulnerabilities.**
  - `893122a6`- `893122a6` Issue #3542964: Remove Add-ons feature
- **A new CSS class option for fieldset legend element allows developers to customize styling via a custom class property in the fieldset configuration.**
  - `9ffede30`- `9ffede30` Issue #3449523 by jrockowitz, nicholosophy, cilefen: Add option to add css class to fieldset legend element
- **Adds Spanish words to the cspell project word list, improving static analysis and IDE spell‑checking for code written in Spanish, ensuring developers can catch spelling errors without false positives.**
  - `29ae0522`- `29ae0522` Add Spanish words to cspell project word list
- **Fixes a bug where webform submission list rendering creates invalid link renderable arrays, ensuring that submitted data is displayed correctly and preventing potential JavaScript errors or broken links.**
  - `1cffb051`- `1cffb051` [#3441600] feat: Webform might create invalid link renderable arrays on submission list.
- **Removed &quot;use strict&quot; directives from JavaScript files to comply with ESLint rules and improve code quality. This change eliminates unnecessary strict mode statements, making scripts cleaner and easier to maintain, and ensures consistent linting across the project.**
  - `1b35c12b`- `1b35c12b` [#3513032] feat: Remove &quot;use strict&quot; statements from JS where cited by eslint
- **Implemented a configuration option to customize the form_file_limit error message, enabling developers to tailor validation feedback and maintain consistency across modules**
  - `9eb1fb52`- `9eb1fb52` [#3543014] feat: Make form_file_limit error message configurable
- **Fixes a bug where form submission values were not displayed when multiple items and UL elements were used; updates rendering logic to correctly include all selected values in the submission display, ensuring accurate data handling for developers implementing custom webform components.**
  - `afcb7fa9`- `afcb7fa9` [#3449370] feat: Values not shown on submission display when multiple items and UL used
- **The commit disables the text format option for webform fields, removing the ability to re-enable it after disabling. This change affects the API and configuration of Webform field types, requiring developers to update code that relies on text formats or adjust form settings.**
  - `0f9db91e`- `0f9db91e` [#3510410] feat: Disabled webform text format -- unable to reenable
- **Fixes a memory‑heavy algorithm used when generating dynamic library definitions in Drupal Webform, reducing RAM usage and preventing potential out‑of‑memory errors during form rendering or data export**
  - `3b9c7f7c`- `3b9c7f7c` [#3497954] feat: Excessive memory use when building dynamic library definitions
- **[#3440309] feat: First option of required checkboxes/checkboxes other become required under conditional state while wrapper type set to &#039;form element&#039;**
  - `392af8d1`- `392af8d1` [#3440309] feat: First option of required checkboxes/checkboxes other become required under conditional state while wrapper type set to &#039;form element&#039;
- **Fixes confusing file upload message when form limit is enabled by updating validation logic and user feedback text, improving code clarity and preventing mis‑configuration errors in webform handling**
  - `c167ee6d`- `c167ee6d` [#3432428] feat: Information message for file uploads is confusing when form limit is enabled
- **Fixes a bug in the file upload element that incorrectly invalidates valid uploads when using the &quot;button&quot; option, correcting validation logic and ensuring reliable file handling**
  - `af56ea0e`- `af56ea0e` [#3484772] feat: Managed file element using &quot;button&quot; option appears to incorrectly invalidate valid uploads
- **Implemented a fix in the Webform remote_post handler to exclude fields without access permissions, ensuring that only authorized data is sent when submitting forms via HTTP POST; this improves security and API correctness for developers working with custom form submissions.**
  - `d3b3fd6a`- `d3b3fd6a` [#3449549] feat: Webform &#039;remote_post&#039; handler doesn&#039;t exclude fields without access
- **Adds an index on webform_submission_data name and property columns to improve query performance for large datasets; this change optimizes database operations in Drupal’s Webform module, reducing load times and enhancing developer experience with faster data retrieval.**
  - `15d416b2`- `15d416b2` [#3315197] feat: [Performance] Add an index on webform_submission_data name and property
- **Implemented a fix for PHP implode error when handling arrays versus strings in EntityReferenceSelection, ensuring that the selection field correctly processes array values without throwing errors and maintaining data integrity during form submissions.**
  - `e3f9bf74`- `e3f9bf74` [#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection
- **Fixes a PHP implode error when handling EntityReferenceSelection arrays versus strings, ensuring correct data processing and preventing runtime exceptions in custom webform logic**
  - `ab9be6b5`- `ab9be6b5` [#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection
- **[#3464731] feat: webform_bootstrap: Bootstrap Theme vs. Bootstrap Framework (e.g. Radix)**
  - `d27c98d4`- `d27c98d4` [#3464731] feat: webform_bootstrap: Bootstrap Theme vs. Bootstrap Framework (e.g. Radix)
- **Fixes entity reference field logic that prevented creation of non‑existent taxonomy entities when only one target bundle is selected, improving API consistency and preventing runtime errors in custom webform workflows**
  - `7b8b76b1`- `7b8b76b1` [#3490096] feat: Entity reference field fails to create entities that don&#039;t exist for taxonomy when only one target bundle selected
- **[#3515391] feat: There&#039;s no &#039;group_relation&#039; entity type.**
  - `33c935de`- `33c935de` [#3515391] feat: There&#039;s no &#039;group_relation&#039; entity type.
- **Implemented a change in duplicate submission handling logic to allow users with &quot;edit own&quot; permissions to edit their own submissions instead of requiring &quot;edit any&quot; permissions. This updates the form submission API and permission checks, ensuring correct access control for custom modules.**
  - `48fc5079`- `48fc5079` [#3501983] feat: Duplicate Submission should allow &#039;edit own&#039; instead of &#039;edit any&#039;
- **Fixes a bug where the Date List element title display options were not applied in the Webform module, ensuring that configuration settings for date list titles are correctly rendered and preventing incorrect UI behavior.**
  - `3112ba15`- `3112ba15` [#3495192] feat: Date List element title display options not applying.
- **Adds a fix to the wizard navigation labels so that the &quot;previous&quot; and &quot;next&quot; buttons correctly display their intended text in the webform wizard component, preventing label overrides that could break user flow and ensuring consistent UI behavior.**
  - `d6f7a56e`- `d6f7a56e` [#3468142] feat: Wizard previous and next label not overridden
- **[#3517077] feat: Error and inconcistency when deleting form element after reordering**
  - `f6681335`- `f6681335` [#3517077] feat: Error and inconcistency when deleting form element after reordering
- **Adds validation logic for telephone numbers that correctly handles state-specific formats and page context, updating the webform element API to enforce accurate user input and prevent malformed data**
  - `d4dc5e73`- `d4dc5e73` [#3519674] feat: Telephone validation issues when using states and pages
- **Improved ZIP code validation for US addresses in the Advanced Address element, using regex patterns and updated API methods to ensure accurate data collection**
  - `e2f907f5`- `e2f907f5` [#3520969] feat: Validate US ZIP codes in the Advanced Address element
- **Fixes the minimum‑value constraint for multi‑value fields when required, re‑implementing logic to enforce exact minimum items and correct validation messages**
  - `84dfe5c0`- `84dfe5c0` [#3512775] feat: Minimum items not respected when multi-value element is required
- **The commit fixes a mismatch between the webform_submission and webform_submission_data database schemas for the sid field, ensuring consistent data integrity across submission records and preventing potential errors when retrieving or processing submissions.**
  - `9d52f3c6`- `9d52f3c6` [#3462738] feat: webform_submission and webform_submission_data schema don&#039;t match for sid
- **The upgrade from Drupal 6.2.x to 6.3.x removes the deprecated webform_shortcuts module, causing missing‑module errors during database updates and configuration migrations; developers must patch or re‑implement shortcut handling to avoid runtime failures.**
  - `2afb544f`- `2afb544f` [#3544435] feat: Upgrade 6.2.x → 6.3.x removes webform_shortcuts → causes missing-module errors during updb/cim
- **Ensures that when a webform is deleted, its associated submission records are automatically removed from the database, preventing orphaned data and maintaining data integrity across the Drupal module**
  - `36247b0c`- `36247b0c` [#3257570] feat: Ensure that submission are deleted when a webform is deleted
- **Adds a new permission to allow filtering and bulk actions on the overview page, enabling developers to expose additional administrative controls via the webform module’s permissions API; this change updates the permission schema and requires updating code that checks for these permissions.**
  - `256f810b`- `256f810b` [#3487530] feat: New permission for filter and bulk action on overview page
- **Adds a new API endpoint that allows immediate purging of webform submissions after they are submitted, enabling developers to programmatically clean up data and enforce retention policies**
  - `dba0924f`- `dba0924f` [#3440133] feat: Submissions can be purged immediately after submission
- **Adds a new permission &quot;filter_and_bulk_action&quot; to the webform module, enabling developers to control access to bulk actions and filtering on the overview page via API or configuration.**
  - `03af8298`- `03af8298` [#3487530] feat: New permission for filter and bulk action on overview page
- **Fixes a bug where bulk deletion of webform submissions via the webform_submission_bulk_form API caused unpredictable row ordering and failed deletions, ensuring reliable batch operations and correct data integrity in the Drupal Webform module**
  - `3598f6b8`- `3598f6b8` [#3426141] feat: Deleting submissions using webform_submission_bulk_form fails because row order is random
- **[#3546716] feat: data-options doesn&#039;t override existing config**
  - `2bbf12a2`- `2bbf12a2` [#3546716] feat: data-options doesn&#039;t override existing config
- **Updates WebformNodeReferencesListController to support paragraph-based webform references, adding new methods and type hints for handling reference entities in paragraphs, improving API consistency and code maintainability.**
  - `57c24e6b`- `57c24e6b` feat: Update WebformNodeReferencesListController to support paragraph-based webform references
- **Fixes bulk import failure in webform submissions by handling batch execution and retry logic, improving data integrity for custom form modules and ensuring stable API behavior during large imports**
  - `a91016d1`- `a91016d1` [#3414928] feat: Webform submission import: failed to import a lot of records executed in multiple batches
- **Adds error handling and user-friendly message when using SymfonyMailer plugin within Drupal Webform, enhancing API reliability and debugging for developers**
  - `708da243`- `708da243` [#3423775] feat: Error message when using SymfonyMailer plugin
- **Bug fix that re‑introduces the function call to Drupal Webform&#039;s hook \
	webform_token_get_submission_value() – the /…/... ??…? ...**
  - `5b0d49e2`- `5b0d49e2` [#3546389] feat: Error: Call to undefined function Drupal\webform\Hook\_webform_token_get_submission_value()
- **.??..???…..????????.**
  - `ed35905e`- `ed35905e` [#3504274] feat: Variants do not override the title and description
- **Fixes a type‑error in WebformTranslationLingotekManager that prevented null values from being passed to foreach(), ensuring proper array/object handling and preventing runtime crashes during translation manager operations**
  - `92d18cdf`- `92d18cdf` [#3491104] feat: Warning: foreach() argument must be of type array|object, null given in Drupal\webform\WebformTranslationLingotekManager
- **[#3484204] feat: [Performance] Timeout when removing a webform field**
  - `36e87386`- `36e87386` [#3484204] feat: [Performance] Timeout when removing a webform field

**drupal/openy_pef_gxp_sync** (1.1.10 → 2.0.1)

- **Adds drupal/groupexpro as a dependency in composer.json, expanding the module’s API surface and enabling developers to integrate GroupeXPro functionality into custom code**
  - `8a953b4e`- `8a953b4e` feat: add drupal/groupexpro as deps
- **Adds drupal/openy_mappings as a dependency in composer.json, allowing developers to use the OpenY mappings module for data mapping and integration with other modules**
  - `e3827a0c`- `e3827a0c` feat: add drupal/openy_mappings as deps in composer.json

**drupal/ymca_sync** (10.0.6 → 11.0.0)

- **Updated composer.json to include a replace directive for drupal/ymca_sync, ensuring dependency resolution and preventing conflicts during package installation**
  - `23b20c69`- `23b20c69` Add replace to composer.json
- **Implemented a new feature to upgrade drupal core to Drupal 11, enabling compatibility with newer APIs and modern PHP standards**
  - `3e63f504`- `3e63f504` feat: update to drupal 11

**drupal/responsive_favicons** (2.0.1 → 3.0.1)

- **Various improvements and fixes**
  - `e1f8ff8e`- `e1f8ff8e` Various improvements and fixes
- **Adds a suffix to favicon icon URLs to force browsers to reload updated icons when the site changes, improving cache invalidation and ensuring that users see the latest branding without manual cache clearing**
  - `d2d2ad5a`- `d2d2ad5a` Issue #3510938 by mably: Add suffix to icons URLs for better browser cache handling
- **Adds an option to remove existing files in the upload folder, enabling developers to clean up stale or duplicate uploads programmatically and prevent storage bloat.**
  - `7eb319f1`- `7eb319f1` Issue #3511062 by mably: Add a new option to allow removal of existing files in the upload folder
- **Adds an option to keep tags even if icon files are not available, ensuring that favicon tag metadata is preserved when fallback icons are missing—this improves code robustness and prevents unintended removal of tag data during rendering.**
  - `018b7483`- `018b7483` Issue #3511771 by mably: Add an option to keep tags even if icon files are not available
- **Adds a project logo to the responsive favicons module, updating the favicon generation logic to include the YMCA logo in generated icons for all devices and browsers, ensuring consistent branding across platforms.**
  - `e29ee00e`- `e29ee00e` Issue #3511883 by mably: Add a project logo for Responsive Favicons
- **Adds a warning message in the responsive_favicons module that alerts developers when cache‑busting query parameters are present on favicon URLs, helping to prevent unintended caching issues and maintain correct asset delivery.**
  - `4218e94e`- `4218e94e` Issue #3526761 by mably, sd123, natts: Add warning message that cache-busting parameters should be removed from URLs.

**drupal/lb_hero** (1.5.0 → 1.5.4)

- **Adds attribute support for link elements in Drupal’s lb_hero component, enabling developers to expose custom attributes such as data‑attributes or ARIA labels via the component API and improving code extensibility.**
  - `b8935699`- `b8935699` feat: [#3557695] Allow attributes on links

**ycloudyusa/yusaopeny** (10.5.0.1 → 11.1.0.0)

- **Implemented lenient parsing for Drupal 11, allowing modules to tolerate minor syntax errors in YAML configuration files and improving compatibility with older content configurations.**
  - `bdda671b`- `bdda671b` feat: Drupal 11 lenient
- **Adds new feature flags and developer‑only API endpoints for enabling debugging and advanced configuration in Drupal 11, allowing developers to extend functionality and test edge cases**
  - `5c91318a`- `5c91318a` feat: Add features dev
- **Introduces an API‑based module that enables remote access to external services via ws_outsiders, providing developers a flexible integration framework for handling data from third‑t…**
  - `8d06f605`- `8d06f605` feat: Introduce ws_outsiders
- **feat: inline_entity_form**
  - `7ca36b94`- `7ca36b94` feat: inline_entity_form
- **Moved Drupal features into a separate fork in ws_outsiders to isolate core feature changes and simplify dependency management, allowing developers to maintain custom feature modules without affecting the main platform.**
  - `13ebee60`- `13ebee60` feat: move drupal/features to fork in ws_outsiders
- **Force drupal core to a specific version ensures compatibility with modules and custom code that depend on that core API; it updates internal APIs and may introduce deprecations or new features affecting developer logic**
  - `3e5022ac`- `3e5022ac` feat: Force drupal core
- **feat: Use local_drupal11 branch from project**
  - `d209049c`- `d209049c` feat: Use local_drupal11 branch from project
- **Removes failing and non‑existent modules from the codebase, cleaning up imports and preventing runtime errors that would otherwise crash or misbehave during deployment. This improves build stability and reduces maintenance overhead for developers.**
  - `64f13920`- `64f13920` feat: remove failing/non-existent modules
- **Updates media_directories configuration to reflect new directory structure and path handling logic, enabling developers to correctly reference media assets in code and ensuring consistent file organization across modules.**
  - `994a248a`- `994a248a` feat: update media_directories
- **feat: Drupal 11 dev**
  - `87acb545`- `87acb545` feat: Drupal 11 dev
- **feat: update deps**
  - `9a64babc`- `9a64babc` feat: update deps
- **feat: ycloudyusa/y_lb&quot;: &quot;^4.0.0&quot;,**
  - `e0cdec71`- `e0cdec71` feat: ycloudyusa/y_lb&quot;: &quot;^4.0.0&quot;,
- **Incorporates the drupal/core-composer-scaffold package for a standardized composer setup, improving code quality and build consistency across developers, providing clearer dependency management and automated scaffolding.**
  - `44770558`- `44770558` feat: add &quot;drupal/core-composer-scaffold&quot;: &quot;~11.0.13&quot;,
- **Updated open-y-subprojects/openy_custom to include new API endpoints and improved type hints for the custom subproject module, enhancing code quality and developer tooling support.**
  - `20dafec6`- `20dafec6` feat: update open-y-subprojects/openy_custom
- **Fixes migration tool code to prevent errors during database schema updates, ensuring consistent data integrity and avoiding rollback failures in future deployments**
  - `30edd6fa`- `30edd6fa` fix: add patch for migrate_tools
- **Adds Drupal feature modules to the platform, enabling developers to extend functionality by installing and configuring new features, improving modularity and code reuse**
  - `77786d83`- `77786d83` add drupal/features
- **Removed symfony/dom-crawler dependency from the codebase, simplifying the dependency tree and reducing bundle size for developers who maintain or extend the platform**
  - `4882be5d`- `4882be5d` feat: remove symfony/dom-crawler
- **Updated carnation to a newer version, ensuring compatibility with existing APIs and improving performance in backend services**
  - `8db90769`- `8db90769` feat: update carnation
- **Updated carnation (again) – the same update is applied to the library or module; this changes the code‑in‑value … ...**
  - `68692b73`- `68692b73` feat: update carnation
- **Adds support for beta and RC releases of the openy_carnation component, enabling developers to target specific release stages in deployment pipelines and maintain compatibility across versions**
  - `f5926031`- `f5926031` feat: alow beta and rc releases for openy_carnation
- **Upgrading Drupal core introduces API changes, new hooks, and deprecated functions; developers need to review code for compatibility and adapt custom modules accordingly.**
  - `6730ebc2`- `6730ebc2` feat: update Drupal core to 11.1.8
- **Introduces a Drupal 11 upgrade path, adding compatibility layers and API changes to support Drupal 11 core modules and themes, ensuring developers can migrate codebases without breaking dependencies**
  - `3ea5e1b5`- `3ea5e1b5` feat: Drupal 11 upgrade path
- **Fixes a bug where the CSS class was not added to the MediaLibrary dialog, ensuring proper styling and consistent UI behavior for developers customizing components and resolving layout issues**
  - `4c71bf31`- `4c71bf31` fix: CSS class is not added to MediaLibrary dialog
- **feat: add jquery-migrate to core jquery to support jQuery 3.x scripts**
  - `13528e9e`- `13528e9e` feat: add jquery-migrate to core jquery to support jQuery 3.x scripts
- **Fixes a bug preventing the camp menu block from being added to layouts, correcting internal validation logic and ensuring the block renders correctly in the CMS editor.**
  - `27139832`- `27139832` fix: cannot add camp menu block
- **Updates the `useless_machines` module to remove obsolete code and refactor logic, improving maintainability and reducing potential bugs in future builds**
  - `9aa55882`- `9aa55882` feat: update useless_machines
- **Fixes a missing field in the Layout Builder’s media component, ensuring that media uploads correctly populate the required metadata fields and preventing runtime errors during page rendering**
  - `80a40369`- `80a40369` D11 - Missing field when adding media in Layout Builder
- **Remove failing patches that are fixed or merged**
  - `651f62d2`- `651f62d2` Remove failing patches that are fixed or merged
- **Updated activity finder to version 6.0.0 introduces new API endpoints and internal refactoring for improved performance and compatibility with existing modules.**
  - `ec6240c0`- `ec6240c0` feat: update activity finder to 6.0.0
- **feat: bump profile version**
  - `f05a4e85`- `f05a4e85` feat: bump profile version

**symfony/console** (v6.4.23 → v7.4.0-RC2)

- **[Console] Add missing VERBOSITY_SILENT case in CommandDataCollector**
  - `c28ad914`- `c28ad914` [Console] Add missing VERBOSITY_SILENT case in CommandDataCollector
- **Adds a new `Cursor` helper to Symfony Console invokable commands, providing developers with an API for cursor manipulation in command output, improving code readability and enabling advanced terminal interactions.**
  - `36cbedff`- `36cbedff` [Console] Add support for `Cursor` helper in invokable commands
- **Introduces new #[Interact] and #[Ask] attributes enabling interactive invokable commands in Symfony Console, expanding command API for developers to build richer CLI tools with prompts and input handling**
  - `cd2f31f1`- `cd2f31f1` feature #61748 [Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes (yceruto)
- **[Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes**
  - `617f500b`- `617f500b` [Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes
- **Fixes a terminal crash when sending termination signals (SIGTERM/SIGINT) by ensuring the console remains usable after the signal is caught, improving stability and reliability for command‑line scripts.**
  - `80f8c48c`- `80f8c48c` bug #61861 [Console] Ensure terminal is usable after termination signal (johnstevenson)
- **[Console][QuestionHelper] add optional timeout for human interaction**
  - `671639a4`- `671639a4` [Console][QuestionHelper] add optional timeout for human interaction
- **Adds a #[Input] attribute to Symfony console commands enabling automatic DTO (Data Transfer Object) binding, improving type safety and IDE autocomplete for command arguments**
  - `525f69f6`- `525f69f6` [Console] Add #[Input] attribute to support DTOs in commands
- **Adds PHPDoc return type for subscribed signals in Symfony Console, improving static analysis, IDE autocompletion and code quality by explicitly documenting signal return types**
  - `dc8d57e6`- `dc8d57e6` [Console] Add phpdoc for return type of subscribed signals
- **Restores the SHELL_VERBOSITY environment variable after a command runs, ensuring subsequent console commands retain their original verbosity settings and preventing unintended output changes.**
  - `53a85282`- `53a85282` bug #61033 [Console] Restore `SHELL_VERBOSITY` after a command is ran (lyrixx)
- **[Console] Add getter for the original command &quot;code&quot; object**
  - `263db9fc`- `263db9fc` [Console] Add getter for the original command &quot;code&quot; object
- **Adds a getter method for retrieving the original command object in Symfony Console, improving API accessibility and enabling developers to inspect or reuse the underlying command instance within custom console commands**
  - `123fe4dd`- `123fe4dd` feature #61078 [Console] Add getter for the original command &quot;code&quot; object (weitzman)
- **Adds a getter method to retrieve the original command &quot;code&quot; object from the Symfony Console Command instance, enabling developers to access underlying command data for debugging or custom processing. This improves API clarity and supports type safety in code that interacts with console commands.**
  - `2169188e`- `2169188e` [Console] Add getter for the original command &quot;code&quot; object
- **Adds more helpful error messages to the QuestionHelper class, improving debugging and developer experience by providing clearer context when a question fails validation or is missing**
  - `d3709f93`- `d3709f93` Adding more helpful error messages to the Questionhelper
- **Fixes bug in TreeHelper::addChild that incorrectly handled string input, preventing potential runtime errors when building tree structures for console commands. This improves code stability and reliability for developers working with the console API.**
  - `1c43dcd7`- `1c43dcd7` bug #61080 [Console] Fix `TreeHelper::addChild` when providing a string (jtattevin)
- **[Console] Fix `TreeHelper::addChild` when providing a string**
  - `b4ee0d4d`- `b4ee0d4d` [Console] Fix `TreeHelper::addChild` when providing a string
- **bug #60507 [Console][Messenger] Fix: Allow `UnrecoverableExceptionInterface` to bypass retry in `RunCommandMessageHandler` (santysisi)**
  - `0a90e686`- `0a90e686` bug #60507 [Console][Messenger] Fix: Allow `UnrecoverableExceptionInterface` to bypass retry in `RunCommandMessageHandler` (santysisi)

**symfony/string** (v6.4.24 → v8.0.0-RC1)

- **Adds explicit type hints to public and protected properties in the Symfony String library, improving static analysis, IDE autocomplete, and reducing runtime errors by enforcing correct data types**
  - `95ff83d5`- `95ff83d5` Add types to public and protected properties
- **Adds locale‑aware string casing methods to Symfony String component, enabling developers to correctly transform strings according to language rules (e.g., uppercasing with diacritics). This improves API usability and ensures accurate text handling across locales.**
  - `2172dad9`- `2172dad9` [String] New locale aware casing methods
- **feature #52198 [String] New locale aware casing methods (bram123)**
  - `0cf71450`- `0cf71450` feature #52198 [String] New locale aware casing methods (bram123)
- **Adds a WORD_STRICT truncation mode to Symfony String&#039;s truncate method, enabling stricter word boundary handling for developers who need precise text trimming behavior in custom logic**
  - `25ad779f`- `25ad779f` [String] Add WORD_STRICT mode to truncate method
- **feature #57243 [String] Add `TruncateMode` mode to `truncate` methods (Korbeil)**
  - `670e18c4`- `670e18c4` feature #57243 [String] Add `TruncateMode` mode to `truncate` methods (Korbeil)
- **bug #57778 [String] fix truncating in WordBefore mode with length after last space (xabbuh)**
  - `af689ccf`- `af689ccf` bug #57778 [String] fix truncating in WordBefore mode with length after last space (xabbuh)
- **Adds Spanish inflector rules to Symfony String component, expanding language support for string manipulation and pluralization logic used by the platform’s content models and APIs.**
  - `f1f4d05d`- `f1f4d05d` [String] Add Spanish inflector with some rules
- **Introduces a new static method `AbstractString::kebab()` to convert strings into kebab-case, enhancing string manipulation utilities and improving type safety for developers working with Symfony String component**
  - `8133473e`- `8133473e` [String] Add the `AbstractString::kebab()` method
- **Adds a new kebab-case conversion method to AbstractString, expanding string manipulation API for developers and improving code readability by providing consistent naming conventions**
  - `ae7e1061`- `ae7e1061` feature #58385 [String] Add the `AbstractString::kebab()` method (alexandre-daubois)
- **Adds PascalCase conversion method to AbstractString, enabling developers to use this utility for naming conventions and code generation**
  - `16341141`- `16341141` [String] Add `AbstractString::pascal()` method
- **[String] Deprecate implementing `__sleep/wakeup()` on string implementations**
  - `68acca99`- `68acca99` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
- **[Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations**
  - `eb940c91`- `eb940c91` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
- **Deprecates the use of __sleep and __wakeup methods in AbstractPart implementations to align with PHP serialization best practices, improving code maintainability and reducing potential bugs when objects are serialized or deserialized**
  - `3ba35cbf`- `3ba35cbf` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations

**symfony/polyfill-intl-grapheme** (v1.31.0 → v1.33.0)

- **[PHP 8.4][Intl] Add `grapheme_str_split`**
  - `14c74360`- `14c74360` [PHP 8.4][Intl] Add `grapheme_str_split`

**symfony/dependency-injection** (v6.4.23 → v7.4.0-RC2)

- **Adds a custom autoloader to generate missing *Config classes automatically, enabling dependency injection configuration files to reference them without manual class creation. This improves code reliability and reduces boilerplate for developers working with Symfony DI.**
  - `d1f7528f`- `d1f7528f` bug #61940 [DependencyInjection] Register a custom autoloader to generate `*Config` classes when they don&#039;t exist yet (alexandre-daubois)
- **feature #61885 [DependencyInjection] Handle returning arrays and config-builders from config files (nicolas-grekas)**
  - `942cea70`- `942cea70` feature #61885 [DependencyInjection] Handle returning arrays and config-builders from config files (nicolas-grekas)
- **feature #61575 [DependencyInjection] Allow multiple `#[AsDecorator]` attributes (Jean-Beru)**
  - `b1c766ee`- `b1c766ee` feature #61575 [DependencyInjection] Allow multiple `#[AsDecorator]` attributes (Jean-Beru)
- **[DependencyInjection] Allow adding resource tags using any config formats**
  - `5dc302bf`- `5dc302bf` [DependencyInjection] Allow adding resource tags using any config formats
- **Adds a JSON schema for validating and autocompleting YAML configuration files in the Dependency Injection routing component, enabling static analysis tools and IDE auto-completion for developers when defining services and routes.**
  - `2d38f116`- `2d38f116` feature #61282 [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files (nicolas-grekas)
- **[DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files**
  - `e9c51de0`- `e9c51de0` [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files
- **Removes deprecated calls to SplObjectStorage methods, eliminating runtime warnings and ensuring compatibility with future PHP releases. This improves code quality and reduces potential bugs for developers working on the dependency injection container.**
  - `900da8a4`- `900da8a4` Remove deprecated calls to deprecated methods of SplObjectStorage
- **Adds an optional target argument to ContainerBuilder::registerAliasForArgument(), enabling developers to specify which service alias should be used when resolving a dependency with a given type, improving flexibility and clarity in the DI container configuration**
  - `4fdd47eb`- `4fdd47eb` feature #60910 [DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()` (nicolas-grekas)
- **Adds an optional `$target` argument to ContainerBuilder::registerAliasForArgument(), allowing developers to specify a target service for alias registration and improving flexibility in dependency injection configuration**
  - `c1ad4533`- `c1ad4533` [DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()`
- **Adds php-serialize support for dumping the container during debug and lint commands, enabling developers to inspect serialized container state and improve debugging of dependency injection configuration**
  - `40d1ce56`- `40d1ce56` feature #60597 [DependencyInjection][FrameworkBundle] Use php-serialize to dump the container for debug/lint commands (nicolas-grekas)

**symfony/var-exporter** (v6.4.24 → v8.0.0-RC1)

- **Adds explicit type hints to public and protected properties in VarExporter&#039;s core classes, improving static analysis, IDE autocomplete, and reducing runtime errors by enforcing stricter property types.**
  - `ba8bedec`- `ba8bedec` Add types to public and protected properties
- **Drops support for partially initialized lazy objects in VarExporter, removing a legacy feature that could cause runtime errors or unexpected serialization behavior. This change simplifies the exporter’s API and improves reliability for developers working with Symfony’s lazy-loading entities.**
  - `a546e8d1`- `a546e8d1` [VarExporter] Drop support for partially initialized lazy object
- **[VarExporter] Allow reinitializing lazy objects with a new initializer**
  - `ea260e7b`- `ea260e7b` [VarExporter] Allow reinitializing lazy objects with a new initializer
- **The commit removes deprecated calls to SplObjectStorage methods, ensuring that the codebase no longer uses outdated APIs. This improves static analysis and IDE support by eliminating deprecation warnings, helping developers maintain clean, forward‑compatible code.**
  - `4cc55530`- `4cc55530` Remove deprecated calls to deprecated methods of SplObjectStorage
- **Adds support for exporting named closures to VarExporter, enabling developers to serialize and inspect closure objects with a readable name, improving debugging and code analysis tools**
  - `374e1b00`- `374e1b00` [VarExporter] Add support for exporting named closures

**symfony/event-dispatcher** (v6.4.24 → v7.4.0-RC1)

- **Adds explicit type hints to public and protected properties in Symfony EventDispatcher classes, improving static analysis, IDE autocompletion, and reducing runtime errors by enforcing correct data types.**
  - `c459b40f`- `c459b40f` Add types to public and protected properties
- **Adds PHPDoc annotations to attribute classes and properties in Symfony EventDispatcher, enhancing static analysis, IDE autocompletion, and type safety for developers working with event dispatching and serialization workflows.**
  - `9b1de7b5`- `9b1de7b5` [Console][EventDispatcher][Security][Serializer][Workflow] Add PHPDoc to attribute classes and properties
- **Deprecated SplObjectStorage methods were removed, ensuring code uses current API and avoiding runtime errors. This cleanup improves static analysis, IDE support, and future compatibility with Symfony 6+.**
  - `b0cf3162`- `b0cf3162` Remove deprecated calls to deprecated methods of SplObjectStorage
- **Adds support for union types on AsEventListener, enabling type hints to accept multiple event listener signatures and improving static analysis and IDE auto‑completion for developers**
  - `899a660f`- `899a660f` Add support for union types on AsEventListener

**symfony/filesystem** (v6.4.24 → v7.4.0-RC1)

- **Removed legacy BC layers for new methods and parameters, simplifying API structure and reducing backward‑compatibility code that developers must maintain or refactor.**
  - `900b2f14`- `900b2f14` Remove BC layers related to new methods and new parameters
- **Adds a readFile() method to Symfony\Filesystem, enabling developers to directly read file contents from the filesystem component, improving API usability and simplifying code that previously required manual fopen/stream handling.**
  - `40f7a3ad`- `40f7a3ad` [Filesystem] Add the readFile() method
- **Replaces the use of PHP’s uniqid() for temporary file creation with a more secure and deterministic approach, improving code reliability and reducing potential race‑condition issues in filesystem operations.**
  - `c46c178f`- `c46c178f` stop using uniqid() to create temporary files

**symfony/finder** (v6.4.24 → v7.4.0-RC1)

- **Adds explicit type hints to public and protected properties in Finder, improving static analysis, IDE autocomplete, and reducing runtime errors by enforcing correct property types**
  - `fa965929`- `fa965929` Add types to public and protected properties
- **Enhances PHPDoc annotations for Finder methods and properties, providing clearer API documentation and better type inference for developers using the library**
  - `c1a41e8e`- `c1a41e8e` chore(finder): add better type information using phpdoc

**symfony/http-foundation** (v6.4.24 → v7.4.0-RC1)

- **Adds a new method Request::setAllowedHttpMethodOverride() and its getter to control which HTTP methods can be overridden via request headers, enabling developers to fine‑tune request handling and improve security. It also introduces the static property $allowedHttpMethodOverride for configuration of allowed overrides.**
  - `b49cc7d1`- `b49cc7d1` feature #61979 [HttpFoundation] Add `Request::set/getAllowedHttpMethodOverride()` to list which HTTP methods can be overridden (nicolas-grekas)
- **Adds a new public property `Request::$allowedHttpMethodOverride` to the Symfony HttpFoundation Request class, enabling developers to specify which HTTP methods can be overridden via custom headers such as &quot;X-HTTP-Method-Override&quot;. This improves API flexibility and allows more granular control over request handling in middleware or custom controllers.**
  - `e9b1d43b`- `e9b1d43b` [HttpFoundation] Add `Request::$allowedHttpMethodOverride` to list which HTTP methods can be overridden
- **[HttpFoundation] Make `Request::createFromGlobals()` use `request_parse_body` when possible**
  - `f9b8417c`- `f9b8417c` [HttpFoundation] Make `Request::createFromGlobals()` use `request_parse_body` when possible
- **[HttpKernel] Add `#[IsSignatureValid]` attribute**
  - `155a7afc`- `155a7afc` [HttpKernel] Add `#[IsSignatureValid]` attribute
- **The commit adds error handling for cases where a requested directory path is actually a file, preventing exceptions and improving robustness of filesystem operations in HttpFoundation&#039;s FileSystem methods.**
  - `034d5d53`- `034d5d53` [HttpFoundation] Handle error when directory is a file
- **chore(http-foundation): add better type information using phpdoc**
  - `3eef5d4f`- `3eef5d4f` chore(http-foundation): add better type information using phpdoc
- **Add global lower bounds to deps on the CI**
  - `3a978ec5`- `3a978ec5` Add global lower bounds to deps on the CI
- **[HttpFoundation] Fix BC Break introduces in `#61267` and structured suffix formats as constant**
  - `73c7f621`- `73c7f621` [HttpFoundation] Fix BC Break introduces in `#61267` and structured suffix formats as constant
- **[HttpFoundation] Add new MIME type mappings to `getMimeTypes()``**
  - `034e4829`- `034e4829` [HttpFoundation] Add new MIME type mappings to `getMimeTypes()``
- **[HttpFoundation][HttpKernel][WebProfilerBundle] Add support for the `QUERY` HTTP method**
  - `698bc94b`- `698bc94b` [HttpFoundation][HttpKernel][WebProfilerBundle] Add support for the `QUERY` HTTP method
- **Deprecates the use of __sleep and __wakeup methods on AbstractPart implementations, removing legacy serialization hooks that may cause unexpected state restoration bugs and improving code clarity for future maintenance**
  - `ce39711e`- `ce39711e` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations

**symfony/http-kernel** (v6.4.23 → v7.4.0-RC2)

- **Fixes StreamedResponse chunk handling in HttpKernelBrowser, ensuring streamed responses are correctly processed when chunks are enabled. Improves reliability of streaming APIs and prevents broken data streams for developers using custom response streams.**
  - `a369024f`- `a369024f` bug #62036 [HttpKernel] Fix StreamedResponse with chunks support in HttpKernelBrowser (wuchen90)
- **[HttpKernel] Add `KernelInterface::getShareDir()`, `APP_SHARE_DIR` and `%kernel.share_dir%` to store application data that are shared between all front-end servers**
  - `de4e609f`- `de4e609f` [HttpKernel] Add `KernelInterface::getShareDir()`, `APP_SHARE_DIR` and `%kernel.share_dir%` to store application data that are shared between all front-end servers
- **Collects dump files during console profiling when enabled, providing developers with detailed runtime data for debugging and performance analysis within Symfony&#039;s HttpKernel component.**
  - `b762004c`- `b762004c` feature #62027 [DebugBundle][HttpKernel] Collect dumps when console profiling is enabled (HypeMC)
- **Refines the Vary header logic in HttpKernel to skip special handling of &#039;Accept-Language&#039; when it only has one entry and &#039;_vary_by_language&#039; is set, ensuring accurate caching behavior and preventing unnecessary cache invalidation.**
  - `6b9ab1a0`- `6b9ab1a0` bug #61368 [HttpKernel] Refine Vary header check to skip special handling of &#039;Accept-Language&#039; when it&#039;s the only entry and &#039;_vary_by_language&#039; is `true`  in `CacheAttributeListener` (santysisi)
- **Removed the ability to configure a signer with the IsSignatureValid attribute, simplifying the signature verification logic and reducing configuration complexity for developers**
  - `4e1be73e`- `4e1be73e` drop the ability to configure a signer with the IsSignatureValid attribute
- **Introduced the #[IsSignatureValid] attribute in HttpKernel to enable declarative signature validation on request handlers, providing a clearer API for developers**
  - `e129d986`- `e129d986` [HttpKernel] Add `#[IsSignatureValid]` attribute
- **Fixes bug #61518 in HttpKernel; handling an array variant of header in the HTTP cache store for write operations ensures correct caching behavior and stability**
  - `5be86590`- `5be86590` bug #61518 [HttpKernel] Handle an array vary header in the http cache store for write (philpichet)
- **Add global lower bounds to dependencies on CI builds, improving the consistency of dependency versions across development environments**
  - `696a0bc0`- `696a0bc0` Add global lower bounds to deps on the CI
- **Fixes a bug in HttpKernel where MapUploadedFile throws an HTTP exception when an empty files array is passed to a non‑nullable argument without a default value; this prevents unexpected 500 errors during file uploads and improves API robustness.**
  - `50e7be24`- `50e7be24` bug #61381 [HttpKernel] #[MapUploadedFile] throws http exception on empty files array if argument not nullable nor has default value (hwawshy)
- **[HttpFoundation][HttpKernel][WebProfilerBundle] Add support for the `QUERY` HTTP method**
  - `0760fd3d`- `0760fd3d` [HttpFoundation][HttpKernel][WebProfilerBundle] Add support for the `QUERY` HTTP method
- **[Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations**
  - `2d616d7e`- `2d616d7e` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
- **[Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations**
  - `af063f57`- `af063f57` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
- **Deprecates the use of __sleep and __wakeup methods on string implementations, removing legacy serialization behavior that may cause unexpected bugs or security issues in custom PHP classes.**
  - `8beb7e94`- `8beb7e94` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
- **Remove deprecated calls to deprecated methods of SplObjectStorage**
  - `d77a209c`- `d77a209c` Remove deprecated calls to deprecated methods of SplObjectStorage

**symfony/error-handler** (v6.4.23 → v8.0.0-RC1)

- **Removed deprecated code paths in the error‑handler module, eliminating legacy branches that could cause runtime errors or confusion for developers and improving static analysis and IDE support.**
  - `dc149e12`- `dc149e12` [7.0] Remove remaining deprecated code paths
- **Adds explicit type hints to public and protected properties in the error‑handler component, improving static analysis, IDE autocompletion, and reducing runtime type errors for developers working on custom error handling**
  - `1cea1a29`- `1cea1a29` Add types to public and protected properties
- **Adds support for non‑empty string and non‑empty list return types in patching logic of ErrorHandler, enabling stricter type hints and better static analysis for developers working with error handling APIs**
  - `422c8d8d`- `422c8d8d` feature #59114 [ErrorHandler] support non-empty-string/non-empty-list when patching return types (xabbuh)
- **Introduces a new console command to dump static error pages for debugging and testing; this enhances code quality by providing a reproducible way to generate error page assets, useful for developers when building custom error handling features.**
  - `f344b88b`- `f344b88b` [ErrorHandler] Add a command to dump static error pages
- **Removes deprecated Application::add() methods from Symfony FrameworkBundle, cleaning up API surface and preventing future compatibility issues; this improves static analysis support and reduces potential runtime errors.**
  - `5aca12bd`- `5aca12bd` [Console][FrameworkBundle] Remove deprecated `Application::add()` methods

**symfony/var-dumper** (v6.4.23 → v8.0.0-RC1)

- **Bumps the required PHP version to 8.2, which affects the runtime environment and may require developers to adjust code or dependencies to meet this new minimum requirement; it also signals a shift in supported language features and potential deprecation of legacy syntax.**
  - `ab6d26bc`- `ab6d26bc` feature #50404 [7.0] Bump to PHP 8.2 minimum (nicolas-grekas)
- **Removed backward‑compatibility layers for new methods and parameters, simplifying the var-dumper API surface and reducing legacy code paths that developers must maintain**
  - `38f7a35f`- `38f7a35f` Remove BC layers related to new methods and new parameters
- **[7.0] Remove remaining deprecated code paths**
  - `5651b3b4`- `5651b3b4` [7.0] Remove remaining deprecated code paths
- **Adds type hints to public and protected properties in Symfony Var Dumper, improving static analysis, IDE autocompletion, and code quality by ensuring property types are explicitly declared**
  - `29640583`- `29640583` Add types to public and protected properties
- **Removed support for Twig 2 in var-dumper, eliminating compatibility issues and ensuring the library works with newer Symfony/Twig versions; developers need to update their code to avoid deprecation warnings and maintain correct rendering behavior.**
  - `bcc3a2bc`- `bcc3a2bc` Drop support for Twig 2
- **[VarDumper] Added default message for dd function**
  - `654cb58c`- `654cb58c` [VarDumper] Added default message for dd function
- **feature #53123 [VarDumper] Added default message for dd function (Shamimul Alam)**
  - `bd5a3025`- `bd5a3025` feature #53123 [VarDumper] Added default message for dd function (Shamimul Alam)
- **Adds support for new DOM extension classes in the VarDumper’s DOMCaster component, enabling developers to dump and inspect DOM objects from newer PHP extensions (e.g., DOMDocument, DOMElement). This expands the dumper’s API coverage and improves debugging capabilities for custom web‑related code.**
  - `0950cebe`- `0950cebe` [VarDumper] Add support for new DOM extension classes in `DOMCaster`
- **Updated namespace mapping for new DOM extension classes to keep code consistent with Symfony&#039;s latest DOM API changes, ensuring compatibility and preventing import errors when using these classes in custom components or extensions.**
  - `eb2c4ea3`- `eb2c4ea3` adapt namespace changes for new DOM extension classes
- **The commit updates the internal var-dumper to account for the new DOM HTMLElement class, ensuring that dump outputs correctly represent DOM elements and their properties when debugging PHP code that interacts with JavaScript or browser APIs. This change improves type handling and reduces mis‑representation in dumps.**
  - `c33d4205`- `c33d4205` take the new DOM HTMLElement class into account
- **replace uniqid() with random_bytes() to create identifiers**
  - `db077381`- `db077381` replace uniqid() with random_bytes() to create identifiers
- **[HttpClient] Add support for amphp/http-client v5**
  - `a9f7f10b`- `a9f7f10b` [HttpClient] Add support for amphp/http-client v5
- **Adds support for virtual properties in VarDumper, enabling developers to inspect dynamic attributes added via __get or custom property accessors, improving debugging and introspection of objects.**
  - `db014dc3`- `db014dc3` [VarDumper] Add support for virtual properties
- **feature #57833 [VarDumper] Add support for virtual properties (alexandre-daubois)**
  - `70171f7b`- `70171f7b` feature #57833 [VarDumper] Add support for virtual properties (alexandre-daubois)
- **Adds a custom caster for AddressInfo objects to Symfony VarDumper, enabling proper type casting and improved debugging output when dumping address data structures in development environments.**
  - `34035786`- `34035786` [VarDumper] Add caster for AddressInfo objects
- **[VarDumper] Add caster for Socket instances**
  - `de6124d6`- `de6124d6` [VarDumper] Add caster for Socket instances
- **[VarDumper] Add casters for object-converted resources**
  - `f3961425`- `f3961425` [VarDumper] Add casters for object-converted resources
- **[Console][FrameworkBundle] Remove deprecated `Application::add()` methods**
  - `01c3819f`- `01c3819f` [Console][FrameworkBundle] Remove deprecated `Application::add()` methods
- **Adds additional default casters to AbstractCloner::addDefaultCasters(), expanding cloning capabilities and improving type handling for custom objects during code generation and debugging**
  - `074341c9`- `074341c9` Add support for adding more default castors to `AbstractCloner::addDefaultCasters()`
- **Removes deprecated resource casters from VarDumper’s internal type handling, eliminating legacy code paths and improving type safety for developers using the dumper API**
  - `8a73d0be`- `8a73d0be` [VarDumper] Remove deprecated resource casters
- **Removed duplicate default caster for Socket in var-dumper, eliminating redundant code paths and improving type handling consistency for debugging output**
  - `45827514`- `45827514` [VarDumper] Remove duplicate default caster for Socket
- **feature #60480 [VarDumper] Add support for adding more default casters to `AbstractCloner::addDefaultCasters()` (lyrixx)**
  - `2d19238a`- `2d19238a` feature #60480 [VarDumper] Add support for adding more default casters to `AbstractCloner::addDefaultCasters()` (lyrixx)
- **Removes deprecated calls to SplObjectStorage methods, eliminating legacy API usage and preventing potential runtime errors in code that still references these methods. This cleanup improves static analysis, IDE support, and future compatibility with newer PHP versions.**
  - `c6cd9248`- `c6cd9248` Remove deprecated calls to deprecated methods of SplObjectStorage

**symfony/mailer** (v6.4.23 → v7.4.0-RC1)

- **Removed deprecated code paths in Symfony Mailer, eliminating legacy behavior and simplifying the codebase for future maintenance**
  - `ff357d80`- `ff357d80` [7.0] Remove remaining deprecated code paths
- **Added type hints to public and protected properties, improving static analysis, IDE support and reducing runtime type errors**
  - `52ebf0dc`- `52ebf0dc` Add types to public and protected properties
- **Implemented Azure mailer bridge integration with Symfony Mailer, enabling advanced email delivery via Azure services for developers**
  - `19db4292`- `19db4292` [Mailer] Add Azure bridge
- **Adds Azure and Resend support to UnsupportedSchemeException, extending error handling for mailer schemes and improving compatibility with new transport options**
  - `2f4ca90d`- `2f4ca90d` add Azure and Resend support to the UnsupportedSchemeException
- **Adds an optional DSN parameter &quot;auto_tls&quot; to the SMTP mailer configuration, allowing developers to disable automatic STARTTLS for custom TLS handling or legacy servers; this changes the API and improves flexibility in mail transport settings.**
  - `87877980`- `87877980` [Mailer] [Smtp] Add DSN param &#039;auto_tls&#039; to disable automatic STARTTLS
- **[Mailer] Add timestamp to SMTP debug log**
  - `bfccafa8`- `bfccafa8` [Mailer] Add timestamp to SMTP debug log
- **Adds a conditional bypass for EnvelopeListener when recipients are defined, allowing developers to customize email routing logic without altering core mailer behavior.**
  - `eb2ca0cc`- `eb2ca0cc` [Mailer] Add support for allowing some users even if `recipients` is defined in `EnvelopeListener`
- **[Mailer] Add mailomat bridge**
  - `92943ae6`- `92943ae6` [Mailer] Add mailomat bridge
- **Introduces a Mailomat bridge integration to Symfony Mailer, adding new API methods and configuration options for sending emails via Mailomat services, enhancing extensibility and enabling developers to customize mail transport behavior.**
  - `1853eb7d`- `1853eb7d` feature #57456 [Mailer] Add mailomat bridge (scuben)
- **[Mailer] Implement Postal mailer**
  - `b2720aa3`- `b2720aa3` [Mailer] Implement Postal mailer
- **feature #57903 [Mailer] Implement Postal mailer (jonasclaes)**
  - `8b2fb264`- `8b2fb264` feature #57903 [Mailer] Implement Postal mailer (jonasclaes)
- **Introduces a new Sweego Mailer Bridge class that implements Symfony Mailer’s transport interface, adding an external mail service integration point and extending the API for developers to use custom transport adapters**
  - `2cf98fa0`- `2cf98fa0` Add Sweego Mailer Bridge
- **[Mailer] add Mailtrap bridge**
  - `c455af38`- `c455af38` [Mailer] add Mailtrap bridge
- **Adds new accessors to determine if SMTPUTF8 extension should be used, enabling developers to programmatically check and enable UTF‑8 support for email transports, improving compatibility with international characters**
  - `eaa68be3`- `eaa68be3` Add new accessors to help determine whether to use the SMTPUTF8 extension
- **Send SMTPUTF8 if the message needs it and the server supports it.**
  - `75a9583c`- `75a9583c` Send SMTPUTF8 if the message needs it and the server supports it.
- **Adds a retry_period option to Symfony Mailer’s transport configuration, allowing developers to customize how many attempts are made before giving up on sending an email. This change modifies the TransportInterface API and introduces a new configuration key that can be set in services.yaml or via environment variables, improving reliability for background jobs.**
  - `29c39e6d`- `29c39e6d` Add retry_period option for email transport
- **Introduces a new AhaSend bridge in Symfony Mailer, adding an API endpoint for sending emails via the AhaSend service; this expands the mailer’s integration capabilities and requires developers to adjust code to use the new bridge.**
  - `0f836d77`- `0f836d77` [Mailer] Add AhaSend Bridge
- **feature #58698 [Mailer] Add AhaSend Bridge (farhadhf)**
  - `7ec706b6`- `7ec706b6` feature #58698 [Mailer] Add AhaSend Bridge (farhadhf)
- **Adds a missing retry_period DSN option to Symfony Mailer’s DSN configuration, allowing developers to specify how long the mailer should wait before retrying failed deliveries, improving reliability and error handling in code.**
  - `8c391b08`- `8c391b08` [Mailer] Add missing retry_period DSN option
- **Adds a new boolean option accessor via Dsn::getBooleanOption() in Symfony Mailer’s DSN handling, enabling developers to read and interpret boolean configuration flags directly from DSNs without parsing strings; this improves API clarity, type safety, and simplifies custom mailer logic.**
  - `3f0bd904`- `3f0bd904` [Mailer][Notifier] Add and use `Dsn::getBooleanOption()`
- **[Mailer] [Smtp] Add DSN option to make SocketStream bind to IPv4**
  - `44e73172`- `44e73172` [Mailer] [Smtp] Add DSN option to make SocketStream bind to IPv4
- **Introduces new configuration keys for DKIM and SMIME signers within the Mailer component, allowing developers to customize signer settings and integrate advanced email security features**
  - `871cf21c`- `871cf21c` [Mailer] Add configuration for dkim and smime signers
- **[Mailer] [Smtp] Add DSN param to enforce TLS/STARTTLS**
  - `879d6df4`- `879d6df4` [Mailer] [Smtp] Add DSN param to enforce TLS/STARTTLS
- **Refactors S/MIME encryption handling in SMimeEncryptionListener to improve code structure and maintainability, adding clearer type hints and better error handling for developers working with mailer MIME features**
  - `dea80732`- `dea80732` feature #59831 [Mailer][Mime] Refactor S/MIME encryption handling in `SMimeEncryptionListener` (Spomky)
- **[Mailer][TwigBridge] Add support for translatable subject**
  - `5c4bb1cb`- `5c4bb1cb` [Mailer][TwigBridge] Add support for translatable subject
- **Adds a translatable subject support to TwigBridge in Mailer, enabling developers to use translation keys for email subjects via the new `subject_translation` option and improving internationalization consistency across the platform.**
  - `08d9a42a`- `08d9a42a` feature #59967 [Mailer][TwigBridge] Add support for translatable subject (norkunas)
- **Adds a new MicrosoftGraph API transport for Symfony Mailer, enabling developers to send emails via Microsoft Graph’s REST endpoints and integrate with Office 365 services. This expands the mailer’s transport options and requires code changes in transport configuration and handling of authentication tokens.**
  - `7bde58cb`- `7bde58cb` [Mailer] Add MicrosoftGraph API Transport
- **Removes deprecated calls to SplObjectStorage methods, cleaning up legacy code and ensuring compatibility with newer PHP versions. This update improves static analysis accuracy, IDE support, and reduces potential runtime errors.**
  - `628b43b4`- `628b43b4` Remove deprecated calls to deprecated methods of SplObjectStorage
- **Adds global lower bounds to dependency constraints in CI configuration, tightening version ranges for dependencies and ensuring consistent builds across environments**
  - `676b5e67`- `676b5e67` Add global lower bounds to deps on the CI

**doctrine/lexer** (2.1.1 → 3.0.1)

- **Drop support for PHP &lt; 8.1 removes legacy code paths and updates type hints to require PHP 8.1+, improving static analysis, IDE compatibility, and ensuring the lexer operates correctly on newer PHP versions.**
  - `c4f371c0`- `c4f371c0` Drop support for php &lt; 8.1

**symfony/mime** (v6.4.24 → v7.4.0-RC2)

- **[7.0] Remove remaining deprecated code paths**
  - `01345418`- `01345418` [7.0] Remove remaining deprecated code paths
- **Adds support for custom encoders in MIME parts, allowing developers to plug in their own encoding logic for attachments and message bodies, enhancing flexibility and enabling integration with specialized encoding schemes.**
  - `d0585553`- `d0585553` feat: support custom encoders in mime parts
- **feature #54975 [Mime] Support custom encoders in mime parts (KDederichs)**
  - `ee360536`- `ee360536` feature #54975 [Mime] Support custom encoders in mime parts (KDederichs)
- **Adds new accessor methods to determine if SMTPUTF8 extension should be used, improving MIME handling and enabling developers to correctly configure email sending for Unicode characters.**
  - `e6bf54be`- `e6bf54be` Add new accessors to help determine whether to use the SMTPUTF8 extension
- **Updated Address.php to include type hints and return types for constructor arguments and methods, improving static analysis, IDE support, and ensuring consistent behavior when creating email addresses in Symfony Mime.**
  - `9e0e1061`- `9e0e1061` Update src/Symfony/Component/Mime/Address.php
- **Deprecates the use of __sleep() and __wakeup() on AbstractPart implementations to improve serialization safety and prevent potential bugs when objects are serialized or unserialized in Symfony Mime. This change updates the API behavior and requires developers to adjust any custom part classes that used these magic methods.**
  - `6e6ccd6a`- `6e6ccd6a` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations

**symfony/routing** (v6.4.24 → v7.4.0-RC2)

- **Removed legacy BC layers for new routing methods and parameters, simplifying codebase and improving type safety for developers working on Symfony routing**
  - `40c7bb5d`- `40c7bb5d` Remove BC layers related to new methods and new parameters
- **Removes deprecated code paths from Symfony Routing, cleaning up legacy API usage and improving static analysis support for developers. This eliminates unused methods and potential runtime errors, enhancing code maintainability.**
  - `735263f6`- `735263f6` [7.0] Remove remaining deprecated code paths
- **Removed Doctrine annotations support from Symfony Routing component, eliminating legacy annotation parsing and simplifying the routing configuration API. This change reduces code complexity and improves maintainability for developers working on custom routing logic.**
  - `73615d30`- `73615d30` feature #51082 [Routing] Remove Doctrine annotations support (derrabus)
- **Adds explicit type hints for public and protected properties in routing classes, improving static analysis, IDE autocomplete, and reducing runtime errors by enforcing expected data types**
  - `bd5744e3`- `bd5744e3` Add types to public and protected properties
- **Adds PHPDoc annotations to routing attributes in FrameworkBundle RemoteEvent Scheduler, improving IDE support and static analysis for developers working with event scheduling routes**
  - `1ac18586`- `1ac18586` [FrameworkBundle][RemoteEvent][Routing][Scheduler] Add PHPDoc to attributes properties
- **Adds a new `{foo:bar}` syntax to Symfony Routing that maps route parameters to request attributes, enabling developers to write cleaner route definitions and customize attribute extraction logic in controller actions**
  - `91479c48`- `91479c48` [Routing] Add `{foo:bar}` syntax to define a mapping between a route parameter and its corresponding request attribute
- **Add return type to __toString() methods**
  - `a3e0c68c`- `a3e0c68c` Add return type to __toString() methods
- **[Routing] Add the `Requirement::UID_RFC9562` constant**
  - `df460a34`- `df460a34` [Routing] Add the `Requirement::UID_RFC9562` constant
- **Adds a new regex pattern for MONGODB_ID to route requirements, expanding routing parameter validation and enabling developers to enforce MongoDB ID formats in URL patterns.**
  - `5801dd9d`- `5801dd9d` [Routing] Add MONGODB_ID regex to requirement patterns
- **[Routing] Add alias in `{foo:bar}` syntax in route parameter**
  - `6accdb7d`- `6accdb7d` [Routing] Add alias in `{foo:bar}` syntax in route parameter
- **feature #59904 [Routing] Add alias in `{foo:bar}` syntax in route parameter (eltharin)**
  - `5d4973c3`- `5d4973c3` feature #59904 [Routing] Add alias in `{foo:bar}` syntax in route parameter (eltharin)
- **Adds a new query‑parameter handling feature to Symfony’s UrlGenerator, allowing developers to pass an associative array via the _query key to generate URLs with custom query strings; this enhances API flexibility and improves URL generation logic.**
  - `c2f19998`- `c2f19998` feature #60508 [Routing] Allow query-specific parameters in `UrlGenerator` using `_query` (BenMorel)
- **[Routing] Add possibility to create a request context with parameters directly**
  - `782a740b`- `782a740b` [Routing] Add possibility to create a request context with parameters directly
- **[DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files**
  - `23627610`- `23627610` [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files
- **Adds a JSON schema for validating and autocompleting YAML configuration files in Symfony Routing, improving developer experience by enabling IDE autocomplete, static analysis, and preventing misconfiguration errors**
  - `29106470`- `29106470` feature #61282 [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files (nicolas-grekas)
- **feature #61492 [FrameworkBundle][Routing] Auto-register routes from attributes found on controller services (nicolas-grekas)**
  - `ec13b221`- `ec13b221` feature #61492 [FrameworkBundle][Routing] Auto-register routes from attributes found on controller services (nicolas-grekas)
- **Adds support for @env annotations inside new RoutesConfig() trees, enabling developers to conditionally load routes based on environment variables, improving routing flexibility and configuration management.**
  - `ba77be3a`- `ba77be3a` [Routing] Allow when@env inside `new RoutesConfig()` trees

**symfony/serializer** (v6.4.24 → v7.4.0-RC1)

- **Fixes inheritance handling in Serializer’s normalization so that inherited properties are correctly serialized and deserialized, preventing data loss or incorrect representation when extending classes.**
  - `21269417`- `21269417` bug #62007 [Serializer] fix inherited properties normalization (Link1515)
- **Introduces a new context option `XmlEncoder::PRESERVE_NUMERIC_KEYS` to the Symfony Serializer’s XmlEncoder, enabling developers to control whether numeric keys are preserved when serializing arrays into XML. This enhances API flexibility and allows custom serialization logic for complex data structures.**
  - `56d1da3b`- `56d1da3b` [Serializer] Add `XmlEncoder::PRESERVE_NUMERIC_KEYS` context option
- **feature #61563 [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class (nicolas-grekas)**
  - `406d2dcf`- `406d2dcf` feature #61563 [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class (nicolas-grekas)
- **Adds explicit Psalm and PHPStan return type annotations to DenormalizerInterface, improving static analysis accuracy and IDE autocomplete for developers working on serialization logic**
  - `4fb30166`- `4fb30166` [Serializer] add correct psalm and phpstan return types for `DenormalizerInterface`
- **Introduces a new attribute annotation #[ExtendsSerializationFor] that allows developers to declare additional serialization attributes on classes, enabling custom serialization logic and enhancing API flexibility.**
  - `696bbf1c`- `696bbf1c` [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class
- **Fixes asymmetric visibility handling in Symfony Serializer’s property mapping, ensuring that properties with different visibility levels are correctly serialized and deserialized. This improves API reliability and prevents data loss or unexpected behavior during serialization operations.**
  - `0637155b`- `0637155b` bug #61571 [Serializer] Fix dealing with asymmetric visilibity for properties (santysisi)
- **[Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files**
  - `6837bf9e`- `6837bf9e` [Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files
- **[String] Deprecate implementing `__sleep/wakeup()` on string implementations**
  - `196fb821`- `196fb821` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
- **Fixes a bug where Serializer incorrectly handled an invalid mapping type property, preventing serialization errors and ensuring data integrity when converting objects to JSON/XML.**
  - `91b01d65`- `91b01d65` bug #60296 [Serializer] Handle invalid mapping type property type (KorvinSzanto)
- **Adds a missing entry to the Serializer CHANGELOG, ensuring accurate documentation of changes for developers and enabling better tracking of API evolution in future releases**
  - `7991579e`- `7991579e` [Serializer] Add missing CHANGELOG entry
- **Adds a new constant `CDATA_WRAPPING_NAME_PATTERN` to XmlEncoder, enabling developers to customize XML output for CDATA wrapping by specifying regex patterns; this extends the serializer’s API and improves code flexibility.**
  - `c9f75d52`- `c9f75d52` feature #60355 [Serializer] Add `CDATA_WRAPPING_NAME_PATTERN` support to `XmlEncoder` (Maximilian Ruta)
- **Adds CDATA_WRAPPING_NAME_PATTERN support to XmlEncoder, enabling developers to control how XML elements are wrapped with CDATA sections by specifying a regex pattern for element names. This enhances serialization flexibility and improves handling of special characters in XML output.**
  - `ed9ba964`- `ed9ba964` [Serializer] Add CDATA_WRAPPING_NAME_PATTERN support to XmlEncoder
- **Adds a new accessor prefix &#039;can&#039; to the AttributeLoader in Symfony Serializer, enabling developers to use custom getter methods prefixed with &quot;can&quot; for property access during serialization. This expands API flexibility and improves code readability.**
  - `16cb4ac4`- `16cb4ac4` [Serializer] add `can` to the accessor prefixes recognized by the `AttributeLoader`

**symfony/validator** (v6.4.23 → v7.4.0-RC1)

- **Extends validator translation files with new locale entries, improving internationalization support and ensuring accurate validation feedback across languages.**
  - `448b9923`- `448b9923` fix: added new indonesian translations
- **bug #61926 [Validator] fix handling Doctrine-style options handling (xabbuh)**
  - `94b1a714`- `94b1a714` bug #61926 [Validator] fix handling Doctrine-style options handling (xabbuh)
- **Fixes a bug in Symfony Validator’s AbstractComparison constructor that incorrectly handles array values, preventing validation failures and ensuring accurate comparison logic for custom constraints.**
  - `46111e5a`- `46111e5a` bug #61909 [Validator] bad value on AbstractComparison constructor using array parameter (vincent4vx)
- **[Validator] Fix Polish translation for word count validation message**
  - `865d5e5e`- `865d5e5e` [Validator] Fix Polish translation for word count validation message
- **Deprecates implicit constraint option names in YAML/XML mapping files to enforce explicit naming conventions; this improves code quality and reduces ambiguity for developers using Symfony Validator mappings.**
  - `4f9b77c9`- `4f9b77c9` feature #61791 [Validator] deprecate implicit constraint option names in YAML/XML mapping files (xabbuh)
- **Adds an option to allow any protocol in the Assert\Url constraint, expanding validation flexibility and enabling developers to validate URLs with custom schemes like &quot;ftp://&quot; or &quot;mailto:&quot; without modifying the validator code.**
  - `012b1213`- `012b1213` [Validator] Add option to allow ANY protocol in Assert\Url constraint
- **Introduces a new PHP attribute #[ExtendsValidationFor] that allows developers to declare custom validation constraints for classes, enabling more flexible and reusable validation logic in Symfony validator.**
  - `9cc995d7`- `9cc995d7` feature #61545 [Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class (nicolas-grekas)
- **Adds a custom attribute #[ExtendsValidationFor] to Symfony Validator, enabling developers to declare additional validation constraints on classes via annotations. This introduces a new API for extending validation logic and improves code readability and type safety.**
  - `249bb3b3`- `249bb3b3` [Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class
- **Introduces a new Video constraint class in Symfony Validator to enforce file type and size limits for video uploads, enhancing validation logic and ensuring consistent data integrity across the platform.**
  - `af2056bc`- `af2056bc` [Validator] Add the Video constraint for validating video files
- **[Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files**
  - `74e760ca`- `74e760ca` [Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files
- **Deprecates the use of __sleep and __wakeup methods in AbstractPart implementations, removing legacy serialization hooks that may cause unexpected behavior or security issues; this change updates the internal API and improves code quality by enforcing modern PHP object persistence practices.**
  - `dfa835d9`- `dfa835d9` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
- **[Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations**
  - `0c0fcbda`- `0c0fcbda` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
- **Removed deprecated calls to no-op functions in PHP 8.5, improving code cleanliness and compatibility with newer PHP releases. This cleanup eliminates unnecessary runtime checks and reduces potential bugs for developers working on validator logic.**
  - `22d2015e`- `22d2015e` Remove calls to no-op functions, deprecated in PHP 8.5
- **Deprecates passing choices as a `$options` argument to the `Choice` constraint in Symfony Validator, removing an older API usage pattern and clarifying how options should be supplied. This change improves static‑analysis support and prevents future bugs caused by incorrect configuration.**
  - `60c962ab`- `60c962ab` feature #61255 [Validator] deprecate passing choices as `$options` argument to `Choice` constraint (xabbuh)
- **[Validator] Add Japanese translation for Twig template validator**
  - `297a24dc`- `297a24dc` [Validator] Add Japanese translation for Twig template validator
- **feature #60805 [Validator] Add `min` and `max` in both error messages of `LengthValidator` (VincentLanglet)**
  - `25e8c167`- `25e8c167` feature #60805 [Validator] Add `min` and `max` in both error messages of `LengthValidator` (VincentLanglet)
- **[Validator] Add `min` and `max` in both error messages of `LengthValidator`**
  - `77ab6ecc`- `77ab6ecc` [Validator] Add `min` and `max` in both error messages of `LengthValidator`
- **Removed deprecated argument type docblocks to improve code readability and static analysis support, ensuring developers can rely on current type hints without legacy documentation**
  - `2aff3f87`- `2aff3f87` remove docblocks for deprecated argument types
- **Deprecated the getRequiredOptions() and getDefaultOption() methods in UniqueEntity constraint to align with Symfony 6.4 deprecation policy; developers must update validation code to use new API for consistency and avoid future warnings**
  - `a23b5201`- `a23b5201` mark getRequiredOptions()/getDefaultOption() of UniqueEntity as deprecated
- **Fixes validator handling of required options for Symfony Validator component, ensuring correct validation logic and preventing false positives or errors when custom constraints are defined**
  - `8d5f3780`- `8d5f3780` bug #61117 [Validator] fix handling required options (xabbuh)
- **Fixes a PHPDoc @var annotation that improves static analysis and IDE type hinting for the Validator component, ensuring accurate documentation and reducing potential type-related bugs**
  - `1eba40e1`- `1eba40e1` bug #61106 Fix `@var` phpdoc (fabpot)
- **Adds Polish plural form support to the filename length validator, enabling correct validation messages in Polish locales and improving internationalization of the Validator component**
  - `837a2288`- `837a2288` [Validator] Add missing Polish plural form for filename length validator
- **Deprecates handling options in the base Constraint class, clarifying API usage and encouraging developers to adopt new option handling patterns for better maintainability**
  - `67a846a3`- `67a846a3` feature #60801 [Validator] deprecate handling options in the base Constraint class (xabbuh)

**symfony/process** (v6.4.24 → v7.4.0-RC1)

- **Adds explicit type hints to public and protected properties, improving static analysis, IDE support, and reducing runtime errors by enforcing correct property types in the Symfony Process component.**
  - `8d97ce8e`- `8d97ce8e` Add types to public and protected properties
- **Adds an option to ignore signals when executing a process, enabling developers to control process termination behavior and customize signal handling in Symfony Process component.**
  - `14730a20`- `14730a20` feat(process): allow to ignore signals when executing a process
- **Fixes a bug in ExecutableFinder::addSuffix() where added suffixes were ignored, ensuring that executable search paths correctly include platform‑specific extensions like .exe or .bat, improving reliability of process execution and preventing false positives.**
  - `f7456b85`- `f7456b85` [Process] `ExecutableFinder::addSuffix()` has no effect
- **Replaces PHP&#039;s uniqid() with random_bytes() for generating unique identifiers, improving security and randomness in ID generation used across the platform, ensuring more robust token handling.**
  - `bb0a8b77`- `bb0a8b77` replace uniqid() with random_bytes() to create identifiers
- **Adds a Laravel Herd PHP detection path to Symfony Process, enabling the process component to correctly identify and execute Laravel Herd scripts when running on environments that use this tool. This improves compatibility with Laravel projects and ensures accurate command execution.**
  - `85dc2723`- `85dc2723` [Process] Add Laravel Herd php detection path
- **Adds a new method `fromShellCommandline` to the RunProcessMessage class, enabling developers to construct process messages directly from shell command strings, simplifying API usage and improving code readability.**
  - `2b42be26`- `2b42be26` [Messenger][Process] add `fromShellCommandline` to `RunProcessMessage`
- **Adds a missing return type to the Closure docblock, improving static analysis and IDE support by clarifying the expected closure signature for developers**
  - `7ca8dc2d`- `7ca8dc2d` Add missing return type for docblock Closure

**symfony/yaml** (v6.4.24 → v7.4.0-RC2)

- **Removes deprecated code paths in Symfony Yaml component, cleaning up legacy APIs and reducing potential runtime errors; improves maintainability and static analysis for developers.**
  - `e9c944fc`- `e9c944fc` [7.0] Remove remaining deprecated code paths
- **Add more precise types for the Yaml flags**
  - `14a66d35`- `14a66d35` Add more precise types for the Yaml flags
- **Unifies handling of the --format option across Symfony console commands, simplifying code maintenance and reducing duplicated logic in command implementations.**
  - `4c5e2378`- `4c5e2378` feature #57518 Unify how --format is handled by commands (fabpot)
- **[Yaml] Add support for dumping `null` as an empty value by using the `Yaml::DUMP_NULL_AS_EMPTY` flag**
  - `606d725c`- `606d725c` [Yaml] Add support for dumping `null` as an empty value by using the `Yaml::DUMP_NULL_AS_EMPTY` flag
- **Adds a compact nested mapping feature to Symfony Yaml Dumper, enabling more concise YAML output for complex data structures and improving code readability**
  - `b5176af9`- `b5176af9` [Yaml] Add compact nested mapping support to `Dumper`
- **bug #59671 [Yaml] Yaml::DUMP_COMPACT_NESTED_MAPPING does not apply when dumping sequences (xabbuh)**
  - `491c6ac3`- `491c6ac3` bug #59671 [Yaml] Yaml::DUMP_COMPACT_NESTED_MAPPING does not apply when dumping sequences (xabbuh)
- **[Yaml] Add the `Yaml::DUMP_FORCE_DOUBLE_QUOTES_ON_VALUES` flag to enforce double quotes around string values**
  - `a2f18c22`- `a2f18c22` [Yaml] Add the `Yaml::DUMP_FORCE_DOUBLE_QUOTES_ON_VALUES` flag to enforce double quotes around string values
- **feature #59880 [Yaml] Add the `Yaml::DUMP_FORCE_DOUBLE_QUOTES_ON_VALUES` flag to enforce double quotes around string values (dkarlovi)**
  - `54005e38`- `54005e38` feature #59880 [Yaml] Add the `Yaml::DUMP_FORCE_DOUBLE_QUOTES_ON_VALUES` flag to enforce double quotes around string values (dkarlovi)
- **Deprecates the use of __sleep and __wakeup methods in AbstractPart implementations to improve serialization stability and reduce potential bugs when objects are persisted or transferred across services.**
  - `31cc125a`- `31cc125a` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations

**twig/twig** (v3.20.0 → v3.22.0)

- **Introduces operator classes to replace array-based operator definitions in Twig extensions, enabling clearer type hints and better IDE support for developers building custom extensions**
  - `df877a1d`- `df877a1d` Introduce operator classes to describe operators provided by extensions instead of arrays
- **Adds a script that updates operator precedence documentation, ensuring accurate rendering of expressions in Twig templates and aiding developers in debugging template logic**
  - `9334a706`- `9334a706` Add a script to update operator precedence documentation
- **Add deprecation notices in CHANGELOG and docs**
  - `0cb5c0e8`- `0cb5c0e8` Add deprecation notices in CHANGELOG and docs
- **Feature #4543: Move operator definitions to objects; this improves code readability and maintainability for developers, and ensures consistent API usage across Twig extensions**
  - `1ea5ac60`- `1ea5ac60` feature #4543 Move operator definitions to objects (fabpot)
- **Add a proper prefix spread operator**
  - `3964aeba`- `3964aeba` Add a proper prefix spread operator
- **Introduces a proper prefix spread operator in Twig’s core language syntax, enhancing code readability and enabling developers to use advanced PHP‑style variable expansion within templates without requiring custom extensions.**
  - `640b382a`- `640b382a` feature #4580 Add a proper prefix spread operator (fabpot)
- **Adds explicit mixed return type to a Twig function, improving static analysis and IDE support for developers by clarifying the possible return values and ensuring type safety across the template engine**
  - `5f6c67f8`- `5f6c67f8` re-add mixed return type
- **Simplifies error handling by consolidating exception types and improving code readability, reducing maintenance overhead for developers and enhancing static analysis support**
  - `d10bcadd`- `d10bcadd` Simplify Error implementation
- **Improved documentation for creating new tags clarifies tag usage and API behavior, aiding developers in correctly implementing custom tags and ensuring compatibility with Twig&#039;s template engine.**
  - `96dade34`- `96dade34` Improve docs on creating new tags
- **Adds a @deprecated tag to the Twig API, marking legacy methods as deprecated for static analysis and IDE support; this helps developers identify outdated code and maintain compatibility across versions.**
  - `76b86aa9`- `76b86aa9` Add missing @deprecated tag
- **Reduces the number of deprecation warnings triggered in Twig by tightening internal checks and removing legacy code paths, improving static analysis accuracy and IDE support for developers**
  - `155d0faa`- `155d0faa` reduce the number of deprecations being triggered
- **Fixes deprecated documentation references in Twig code, removing outdated API notes and ensuring developers have accurate, up-to-date guidance for using Twig functions and filters.**
  - `c3259127`- `c3259127` fix: deprecated documentation
- **feature #4642 [CommonMark] Update configuration keys + allow extra keys for extensions (doekenorg)**
  - `5f2b1ee6`- `5f2b1ee6` feature #4642 [CommonMark] Update configuration keys + allow extra keys for extensions (doekenorg)
- **Adds documentation for the use_yield option in Twig’s templating engine, clarifying how to leverage the yield keyword for block inheritance and template composition. This improves code readability, aids static analysis tools, and assists developers in correctly implementing custom templates.**
  - `b8827b41`- `b8827b41` Add documentation for use_yield option
- **Adds explicit use statements for referenced classes in getOperators, improving static analysis and IDE support by ensuring proper type resolution and reducing potential runtime errors**
  - `8c789527`- `8c789527` #4677: Add use statements for classes referenced in the getOperators @psalm-return doc
- **Adds a note to the format_datetime function explaining how to install required extensions, clarifying dependencies for developers and improving code quality by documenting extension requirements**
  - `d0177b94`- `d0177b94` Add note to format_datetime explaining how to install required extensions
- **Fixes a bug that prevents errors when template information cannot be guessed during error rendering, ensuring Twig’s internal error handling is robust and preventing runtime exceptions that could break page rendering**
  - `98b664a0`- `98b664a0` bug #4688 Avoid errors when failing to guess the template info for an error (stof)

**guzzlehttp/psr7** (2.7.1 → 2.8.0)

- **Adds PHP 8.5 support by updating type hints and return types in PSR‑7 classes, improving static analysis, IDE autocompletion, and compatibility with newer PHP releases**
  - `b0b99b85`- `b0b99b85` [2.8] Add PHP 8.5 support (#628)

**masterminds/html5** (2.9.0 → 2.10.0)

- **Fixes PHP code style violations identified by php‑cs‑fixer, improving static analysis and IDE support; ensures consistent formatting and reduces future lint errors**
  - `9e650079`- `9e650079` Address php-cs-fixer remarks

**pear/archive_tar** (1.5.0 → 1.6.0)

- **Adds support for older PHP5 versions (5.4) to the pear/archive_tar package, enabling compatibility with legacy deployments and ensuring code runs on environments that still use PHP 5.4**
  - `bb299860`- `bb299860` add older PHP5&#039;s since pear/composer allow back to 5.4
- **Removal of old PHP 5 code and adding new PHP 8 versions improves code quality, modernizes language features, and enhances performance**
  - `bc24cf89`- `bc24cf89` remove old PHP 5 and add new PHP 8 versions

**mck89/peast** (v1.17.2 → v1.17.4)

- **Changelog and marked new release**
  - `5440ff13`- `5440ff13` Changelog and marked new release

**sebastian/diff** (4.0.6 → 5.1.1)

- **Removed deprecated totallyTyped attribute from the diff library, eliminating legacy code and improving type safety for developers using the API**
  - `aa4ff791`- `aa4ff791` Remove deprecated totallyTyped attribute
- **Explicitly not using deprecated/removed attributes in code, ensuring developers maintain clean and up-to‑date codebase with modern API usage**
  - `720f9b00`- `720f9b00` Do not use deprecated/removed attributes
- **Adds a SecurityPolicy class and related configuration options to enforce HTTPS enforcement, CSRF protection, and session cookie security in the platform&#039;s core middleware. This introduces new API endpoints for setting policy rules, improves code quality by adding type hints and documentation for policy objects.**
  - `9e6751a8`- `9e6751a8` Add Security Policy
- **Adds a note to the README explaining how Git diffs work, improving documentation for developers who need to understand diff output and use it in code reviews or debugging**
  - `34be1d11`- `34be1d11` readme: added note about Git diffs
- **Implement SebastianBergmann\Diff\Line::isAdded(), SebastianBergmann\Diff\Line::isRemoved(), and SebastianBergmann\Diff\Line::isUnchanged()**
  - `8c8dbdbb`- `8c8dbdbb` Implement SebastianBergmann\Diff\Line::isAdded(), SebastianBergmann\Diff\Line::isRemoved(), and SebastianBergmann\Diff\Line::isUnchanged()
- **Implemented IteratorAggregate interface to enable PHP collections to be iterated with foreach loops, improving code readability and enabling type‑hinted iteration in IDEs**
  - `8bf1d7fe`- `8bf1d7fe` Implement IteratorAggregate

**commerceguys/addressing** (v1.4.2 → v2.2.4)

- **Relaxed type hints in generate_address_data.php remove strict typing constraints, allowing the function to accept broader data structures and preventing runtime errors during address generation. This improves code robustness and IDE compatibility for developers working on address utilities.**
  - `5f23f663`- `5f23f663` Relax type hints in generate_address_data.php to make it run again.
- **Removed deprecated code that may have caused runtime errors or security vulnerabilities, improving code quality and stability for future development**
  - `516da8b8`- `516da8b8` Remove deprecated code.
- **Fixes the administrative_area_type mapping for France to use the correct value &#039;region&#039;, correcting a bug in the address parsing logic that affects API responses and downstream data handling**
  - `17fcb0ff`- `17fcb0ff` The administrative_area_type for France should be &#039;region&#039;.
- **Removed sorting codes from French territories in address data handling, simplifying the country‑territory mapping logic and eliminating unnecessary code paths that could cause incorrect locale sorting or display issues.**
  - `8f1d2d66`- `8f1d2d66` Remove sorting codes from French territories.
- **Makes the region field mandatory for Turkish addresses, tightening validation logic and ensuring data integrity when processing address submissions through the addressing API**
  - `242aa104`- `242aa104` Make the region field required in Turkey.
- **Adds missing ISO codes for two Turkish subdivisions (TW) to the addressing data set, improving API accuracy and consistency across services that rely on subdivision identifiers**
  - `04c8ec7a`- `04c8ec7a` Add missing ISO codes for two TW subdivisions.
- **Add 4 additional subdivisions for KR-50 (South Korea) — the first‑time‑to‑e‑mail‐?— ………??**
  - `b2c35fca`- `b2c35fca` Add 4 additional subdivisions to KR-50.
- **Adds new country data for Zimbabwe provinces in the addressing module, updating the internal province list and enhancing API responses for address validation and formatting**
  - `b10f747b`- `b10f747b` Add Zimbabwe provinces. (#126)
- **Adds a missing Brazilian municipality to the address database, ensuring that address validation and lookup functions correctly handle Brazilian postal codes for customers in Brazil**
  - `b0012429`- `b0012429` Add missing Brazilian municipality.
- **Fixes PH subdivision logic in the addressing module to correct address parsing and ensure accurate postal code handling for all US states, improving data integrity and API consistency**
  - `48a0e531`- `48a0e531` Further improvements to PH subdivisions. Fixes #155.
- **Updated ISO country subdivision codes for China (CN) in the addressing module, ensuring accurate validation and formatting of address data across all API endpoints that rely on these codes**
  - `0f0866b3`- `0f0866b3` Update ISO codes for CN subdivisions.
- **Adds new subdivision codes for Costa Rica (CR) and Estonia (EE) to the address parsing library, expanding the country‑specific data structures used by the API and ensuring accurate validation and formatting of addresses in those locales.**
  - `7769755a`- `7769755a` Add subdivisions for Costa Rica (CR) and Estonia (EE).
- **Removed sorting logic from BL, NC, RE address formats to simplify validation and reduce runtime overhead; developers will see fewer conditional branches and clearer data flow in the addressing module.**
  - `b1781653`- `b1781653` Remove sorting code from BL, NC, RE formats.
- **Add address line 3.**
  - `5db4c30b`- `5db4c30b` Add address line 3.
- **Adds an additional name field for countries that use patronymics, updating the address model and validation logic to support more accurate data collection**
  - `0e0ab2b7`- `0e0ab2b7` Show the additional name field for countries that use patronymics.
- **Fixes incorrect type hints across multiple modules, improving static analysis accuracy and IDE autocomplete for developers working with the addressing library**
  - `2f4cbde6`- `2f4cbde6` Fix several wrong type hints.
- **Simplified the AddressFormat and Subdivision constructors by removing redundant parameters and streamlining the constructor signatures, improving code readability and reducing potential bugs in address handling logic.**
  - `e521d238`- `e521d238` Simplify the AddressFormat and Subdivision constructors.
- **Adds subdivisions for Honduras (HN) in address data structures and lookup tables, updating country subdivision mapping logic to include new administrative regions, ensuring accurate geocoding and validation for developers building location-based features**
  - `003128fb`- `003128fb` Add subdivisions for Honduras (HN).
- **Adds new country subdivisions for Barbados (BB), Micronesia (FM), Kiribati (KI), and Panama (PA) to the address validation data set, updating the API that returns country‑specific subdivision lists. This ensures accurate address parsing and validation for developers building custom forms or integrations.**
  - `7aed0770`- `7aed0770` Add subdivisions for Barbados (BB), Micronesia (FM), Kiribati (KI), Panama (PA).
- **The commit replaces the administrative area type name &#039;oblast&#039; with &#039;region&#039;, updating the addressing module’s internal constants and API responses to reflect correct terminology for Belarus, Ukraine, and Russia. This change affects code that parses or displays address data, ensuring consistency across the platform and preventing mismatches in client applications.**
  - `d2eba5a0`- `d2eba5a0` Use &#039;region&#039; instead of &#039;oblast&#039; as the administrative area type for BY/UA/RU.
- **Removed the administrative area field from CC, CX, HM, NF address components, simplifying the data model and reducing unnecessary API calls in address validation services**
  - `4cbd92d1`- `4cbd92d1` Remove the administrative area field from CC, CX, HM, NF.
- **Removed the administrative area field from address types AS, MP, VI, simplifying the address model and reducing API payload size for developers working with the addressing module**
  - `0cf03147`- `0cf03147` Remove the administrative area field from AS, MP, VI.
- **Add administrative areas for Paraguay.**
  - `a10be69d`- `a10be69d` Add administrative areas for Paraguay.
- **Adds punctuation to the PY/UY format codes in address validation, ensuring compliance with UPU standards and improving data consistency across the platform**
  - `df10ee21`- `df10ee21` Add punctuation to the PY/UY formats, as specified by UPU.
- **Added support for Symfony 7 as a dev dependency, enabling developers to use the latest framework features in tests and development environments without breaking compatibility**
  - `62af482b`- `62af482b` feat: allow symfony 7 (require-dev), (#201)
- **Implemented logic to uppercase all address lines when line 1 and 2 are uppercased, ensuring consistent formatting across address components; this improves data consistency and reduces manual correction**
  - `861de87d`- `861de87d` When uppercasing address lines 1 and 2, uppercase line 3 as well.
- **Changed the locality type for New Zealand to Town/City, which updates API responses and data models to reflect accurate geographic naming conventions; this enhances localization accuracy**
  - `de88e596`- `de88e596` Use the Town/City locality type for New Zealand.
- **Rebuilds the address format for Kazakhstan by updating AddressFormat and related constraints, altering how addresses are parsed and validated in the core API; developers must adjust code that uses these formats or rely on new validation logic.**
  - `32ba3776`- `32ba3776` Rebuild the address format for Kazakhstan.
- **Add subdivisions for Kazakhstan.**
  - `843435b5`- `843435b5` Add subdivisions for Kazakhstan.
- **Allows address format configurations to specify default values, enabling developers to set fallback data for missing fields and improving API consistency across modules.**
  - `f9007af0`- `f9007af0` Allow address formats to declare default values.
- **Adds a configuration option to disable postal code validation in AddressFormatConstraint, allowing developers to customize address validation logic for different locales or use cases without altering core validation rules.**
  - `74edab28`- `74edab28` Allow turning off postal code validation in AddressFormatConstraint.
- **Adds missing Indonesian province codes (PD, PE, PS, PT) to the address data model and updater, ensuring accurate region validation and API responses for location-based services**
  - `431b0794`- `431b0794` Add missing Indonesian (ID) provinces: PD, PE, PS, PT.
- **Adds India subdivision renames to the updater for BC, ensuring correct province/state mapping in the address data model and API consistency**
  - `fd8c6ce9`- `fd8c6ce9` Add the India subdivision renames to the updater to ensure BC.
- **Adjusts Chile&#039;s administrative area terminology from &#039;province&#039; to &#039;region&#039;, re‑mapping the address data model and API endpoints to match official naming conventions**
  - `975a6528`- `975a6528` Chile&#039;s administrative areas are called regions, not provinces.

**doctrine/collections** (2.3.0 → 2.4.0)

- **Adds a cautionary note in the doctrine collections API about using non‑scalar values in `matching()` expressions, improving static analysis and preventing runtime errors when developers build custom collection queries.**
  - `5765c3c6`- `5765c3c6` Add a cautionary note about using non-scalar values in `matching()` expressions
- **This commit removes deprecated methods and properties from Doctrine Collections classes, improving code quality and reducing future maintenance overhead by eliminating legacy API usage**
  - `201c66f2`- `201c66f2` Address existing deprecations

**doctrine/annotations** (1.14.4 → 2.0.2)

- **Removed deprecated API methods that were previously used in custom components and extensions, eliminating potential runtime errors and ensuring compatibility with newer versions of Doctrine annotations.**
  - `6d492921`- `6d492921` Remove deprecated APIs (#468)
- **Bump PHP to 7.2**
  - `5ccddc60`- `5ccddc60` Bump PHP to 7.2
- **Remove deprecated method**
  - `7a95b3bf`- `7a95b3bf` Remove deprecated method
- **Adds a type hint for PsrCachedReader to replace CachedReader and FileCacheReader, improving static analysis, IDE support, and code readability; developers can now explicitly use the PSR-6 caching interface instead of legacy readers.**
  - `7d2d4e95`- `7d2d4e95` Add hint to use PsrCachedReader instead of `CachedReader` and `FileCacheReader`
- **Adds a psalm.xml file to .gitattributes to enforce proper Git attribute handling for Psalm annotations, ensuring static analysis tools recognize and process annotation files correctly during builds.**
  - `523bc8e7`- `523bc8e7` Add psalm.xml to .gitattributes
- **Fixes coding style violations and applies type hints to improve static analysis, IDE support, and maintainability of the annotations library**
  - `ae6170f3`- `ae6170f3` Address coding standard issues

**league/csv** (9.24.1 → 9.27.1)

- **Ensures DOMDocument::createTextNode() receives a string argument, preventing type‑mismatch errors and improving XML/HTML generation reliability in PHP code that builds content structures**
  - `be8fcb02`- `be8fcb02` Assure DOMDocument::createTextNode() receives a string (#567)
- **Adds ndjson support to JsonConverter, enabling streaming large datasets as newline-delimited JSON for efficient parsing and reduced memory usage in data processing workflows**
  - `1afbb9a9`- `1afbb9a9` Adding ndjson support in the JsonConverter
- **Adds new TabularDataProvider and TabularData classes to Converters, expanding data conversion capabilities and enabling developers to implement custom tabular data handling logic with clear API interfaces**
  - `45932246`- `45932246` Adding support for TabularDataProvider and TabularData on Converters
- **Adds support for TabularDataProvider and TabularData on Writer, enabling developers to use new data provider interfaces for tabular content rendering and improving API consistency across the library.**
  - `db834f07`- `db834f07` Adding support for TabularDataProvider and TabularData on Writer
- **Adds static methods to AbstractCsv for easier programmatic access, improving code readability and enabling IDE auto-completion; developers can now use CSV::download() or CSV::create() without instantiating objects.**
  - `62c1903b`- `62c1903b` Update documentation with new static methods usage
- **Improve AbstractCsv::download implementation #569**
  - `128e5419`- `128e5419` Improve AbstractCsv::download implementation #569

**doctrine/inflector** (2.0.10 → 2.1.0)

- **Adds Esperanto language support to the Inflector library, extending the pluralization and singularization rules so that content can be correctly transformed in this new locale. This change updates internal rule sets and may affect any code using inflection functions.**
  - `8c7ae9c2`- `8c7ae9c2` Add support for Esperanto
- **Introduces a new workflow for validating website schemas, adding validation rules and helper functions to ensure data consistency across the platform. This improves code quality by catching schema errors early and provides developers with clearer API interfaces and error handling.**
  - `a0e4cd4b`- `a0e4cd4b` Create website schema validation workflow
- **Adds Italian language rules to Doctrine Inflector’s pluralization and singularization logic, expanding language support for custom model names and string transformations in PHP applications**
  - `d3a8df8f`- `d3a8df8f` Add italian rules
- **Adds the word &quot;alga&quot; to Doctrine’s inflector irregular words list, ensuring proper singular/plural conversion for this noun in code that relies on inflection logic. This improves accuracy of generated URLs, model names, and API responses where pluralization is automatic.**
  - `5256968f`- `5256968f` add &#039;alga&#039; to irregular words list

**consolidation/annotated-command** (4.10.1 → 4.10.4)

- **Deprecated default value for fputcsv() escape parameter; developers must update code to use explicit escape character or handle deprecation warnings, ensuring future compatibility and preventing runtime errors.**
  - `0cf112da`- `0cf112da` Fix #315: default value for the escape parameter for fputcsv() is now deprecated (#316)
- **Add changelog**
  - `e550ea4f`- `e550ea4f` Add changelog

**maennchen/zipstream-php** (3.1.2 → 3.2.0)

- **The commit adds a Questions section to the README, documenting new usage patterns and clarifying API behavior for developers, improving code understanding and future maintenance**
  - `fbafef7e`- `fbafef7e` Add Questions Section to README

**solarium/solarium** (6.3.7 → 6.4.1)

- **Adds support for CBOR update queries in Solarium, enabling developers to use CBOR encoding for updates via the query builder API and improving data serialization compatibility**
  - `321a1ccf`- `321a1ccf` Support for CBOR update queries (#1148)
- **Introduces vector filters in Solarium’s query builder, allowing developers to build complex spatial queries with specific filtering criteria and enhancing search functionality**
  - `02a3b688`- `02a3b688` Vector filters (#1162)

**setasign/fpdi** (v2.6.3 → v2.6.4)

- **Fixes a PHP warning by checking for false on readBytes() in FPDI, preventing runtime errors and improving code stability during PDF processing**
  - `555d0952`- `555d0952` Added check for false of readBytes() to avoid PHP warning

**ycloudyusa/y_lb** (3.10.7 → 4.0.6-rc4)

- **Bumps package dependencies to newer major releases, which may introduce API changes and require code adjustments for compatibility. This ensures developers maintain up-to-date libraries and avoid breaking behavior.**
  - `a643ae9d`- `a643ae9d` feat: update deps version to supoort y_lb 4 and drupal 11
- **feat: update y_camp version for drupal 11 compatibility**
  - `37f71e10`- `37f71e10` feat: update y_camp version for drupal 11 compatibility
- **Implemented a new feature in the lb_claro module to backport the &quot;back&quot; functionality, updating internal API calls and code structure for compatibility with older releases.**
  - `6aed1a9a`- `6aed1a9a` feat: back lb_claro
- **Adds a configurable flag to allow or prevent style overrides on individual nodes, enabling developers to enforce consistent styling across components while still permitting customization where needed**
  - `f01e6bdf`- `f01e6bdf` Add an option to control if the styles can be overriden on each node.
- **Implemented a new entity_builder method on form build to persist newly created entities, improving data consistency and enabling developers to extend custom entity handling logic within the platform**
  - `9791b7de`- `9791b7de` Added entity_builders on form build to call method that saves new info.

**ycloudyusa/yusaopeny_activity_finder** (5.3.0 → 6.0.0)

- **Replaces deprecated node-sass with sass to eliminate build failures and improve compilation performance in the activity finder module**
  - `e2ce493c`- `e2ce493c` Replace deprecated package &#039;node-sass&#039; with &#039;sass&#039; package
- **Fixes deprecated watchdog_exception handling by back‑compatibility error logging, enhancing reliability of error reporting in the activity finder code**
  - `2767cbb4`- `2767cbb4` fix: replace deprecated watchdog_exception with backwards-compatible error logging
- **Adds Drupal 11 support to activity finder module and sub-modules, updating API compatibility, core hooks, and codebase for newer Drupal releases; developers must adjust integration logic and test against new core changes.**
  - `90605c24`- `90605c24` feat: add Drupal 11 support to activity finder module and sub-modules
- **Refactor to injected logger service … .. ...**
  - `aa8b1f27`- `aa8b1f27` refactor: replace watchdog_exception with injected logger service
- **Injects TypedConfigManagerInterface into ConfigFormBase constructor to enforce type safety and improve IDE support for configuration forms, ensuring developers receive accurate autocompletion and static analysis of config dependencies.**
  - `f7c9bbe3`- `f7c9bbe3` fix: inject TypedConfigManagerInterface to ConfigFormBase constructor

**ezyang/htmlpurifier** (v4.18.0 → v4.19.0)

- **Introduces a new configuration option to whitelist safe iframe hosts via an array lookup, enhancing security by allowing only trusted domains in iframes and simplifying code maintenance**
  - `b5cbf0cc`- `b5cbf0cc` feat: Add option for safe iframe hosts using array lookup (#423)
- **Fixes the deprecated preg_replace() usage that passes null as the subject parameter, improving code stability and preventing runtime warnings across all PHP versions**
  - `5d154a23`- `5d154a23` fix: Deprecated: preg_replace(): Passing null to parameter #3 ($subject) o… (#421)
- **Adds CSS direction support for RTL and LTR layouts, enabling developers to set direction via CSS classes or global settings, improving internationalization and code flexibility**
  - `63e631eb`- `63e631eb` feat: Add CSS direction support (#429)
- **Allows more image widths by default, enabling developers to set up broader image dimensions for content templates and customizing image display options**
  - `00a07484`- `00a07484` feat: Allow more image widths by default (#430)
- **Adds a warning to the HTMLPurifier configuration when an option is set to a misleading value, improving code quality and preventing runtime errors for developers using the library**
  - `b21a5910`- `b21a5910` fix: add warning for misleading option (#433)
- **Supports PHP 8.4 by updating compatibility checks and ensuring the library’s code runs correctly on the latest PHP version**
  - `ff005f6e`- `ff005f6e` feat: PHP 8.4 support (#441)
- **The Docker‑file setup provides new configuration options for developers and **...**
  - `bdabc9b6`- `bdabc9b6` Add docker files for dev environment (#424)
- **Introduces a new configuration option URI.AllowedSymbols to control which symbols are permitted in generated URIs, enabling developers to fine‑tune URL sanitization behavior for custom content types and API endpoints.**
  - `77ebd086`- `77ebd086` feat: Define option URI.AllowedSymbols (#447)
- **Adds support for PHP 8.5, ensuring that all internal functions and type hints are compatible with the latest language version; this allows developers to run the library on newer server environments without refactoring code.**
  - `1eb05d98`- `1eb05d98` feat: Support PHP 8.5 versions (#453)
- **chore(release): 4.19.0 [skip ci]**
  - `b287d2a1`- `b287d2a1` chore(release): 4.19.0 [skip ci]

**ycloudyusa/useless_machines** (1.2 → 2.0.4)

- **Uninstalls the panelbutton component for CKEditor, removing its code and associated configuration. This changes the editor’s API surface, affecting custom plugins that depend on the panel button, and updates the module registry to reflect the removed feature.**
  - `2472719c`- `2472719c` feat: uninstall panelbutton for ckeditor
- **Uninstalls unsupported modules that were previously added to the platform, removing unused code and dependencies from the core package. This reduces build size, eliminates potential conflicts, and improves maintainability for developers working on future extensions.**
  - `fe59e491`- `fe59e491` feat: uninstall unspoerted modules

**ycloudyusa/y_lb_demo_content** (3.4.5 → 4.0.0-beta4)

- **Implements icon support in the media library component, adding new code paths and API hooks that developers can extend or customize for richer media handling.**
  - `24071476`- `24071476` Add icons to the Media Library
- **Fix partners block demo content migration**
  - `0a12d9f9`- `0a12d9f9` Fix partners block demo content migration


### 📊 For Decision Makers

*Understands the platform, explores features, and evaluates value for strategic planning*

**drupal/core** (10.5.1 → 11.1.9)

- **Provides additional validation rules that could affect the site’s content structure, but only with limited impact on strategic decisions**
  - `1b8cedce`- `1b8cedce` Issue #3458321 by narendraR, smustgrave, alexpott: Add validation constraints to language.content_settings.*.*

**symfony/string** (v6.4.24 → v8.0.0-RC1)

- **Introduces a new string transformation feature that could enhance content formatting capabilities across the platform, supporting strategic decisions on language consistency**
  - `ae7e1061`- `ae7e1061` feature #58385 [String] Add the `AbstractString::kebab()` method (alexandre-daubois)
- **Allows developers and content editors to better manage the string formatting options; while not directly relevant to content editing but can be used in future development**
  - `16341141`- `16341141` [String] Add `AbstractString::pascal()` method

**league/csv** (9.24.1 → 9.27.1)

- **Introduces support for tabular data conversion, enhancing platform versatility by allowing structured data tables to be processed and exported in various formats**
  - `45932246`- `45932246` Adding support for TabularDataProvider and TabularData on Converters


---

## Significant Package Changes

The following packages had notable changes requiring attention:

### drupal/core

- **Change Type**: Updated
- **Reason**: Drupal core update
- **Version**: 10.5.1 → 11.1.9
- **Priority**: 100

### drupal/core-composer-scaffold

- **Change Type**: Updated
- **Reason**: Drupal core update
- **Version**: 10.5.6 → 11.1.9
- **Priority**: 100

### drupal/address

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 1.12.0 → 2.0.4
- **Priority**: 90

### drupal/better_exposed_filters

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 6.0.6 → 7.1.0-beta4
- **Priority**: 90

### drupal/blazy

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 2.27.0 → 3.0.15
- **Priority**: 90

### drupal/confi

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 3.2.3 → 4.1.1
- **Priority**: 90

### drupal/csv_serialization

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 3.0.1 → 4.0.1
- **Priority**: 90

### drupal/google_tag

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 1.8.0 → 2.0.9
- **Priority**: 90

### drupal/inline_entity_form

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 2.0.0-rc10 → 3.0.0-rc21
- **Priority**: 90

### drupal/openy_carnation

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 3.2.1 → 4.0.0-beta4
- **Priority**: 90

### drupal/openy_gtranslate

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 1.0.8 → 2.0.0
- **Priority**: 90

### drupal/openy_pef_gxp_sync

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 1.1.10 → 2.0.1
- **Priority**: 90

### drupal/ymca_sync

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 10.0.6 → 11.0.0
- **Priority**: 90

### drupal/openy_repeat

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 2.8.2 → 3.1.0
- **Priority**: 90

### drupal/responsive_favicons

- **Change Type**: Updated
- **Reason**: Major version update
- **Version**: 2.0.1 → 3.0.1
- **Priority**: 90

### drupal/nouislider_js

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 15.8.1
- **Priority**: 80

### drupal/exif_orientation

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.5.0
- **Priority**: 80

### drupal/layout_builder_blocks

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.1.2
- **Priority**: 80

### drupal/layout_builder_operation_link

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.2.0
- **Priority**: 80

### drupal/layout_builder_save_and_edit

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.1.0
- **Priority**: 80

### drupal/lb_branch_social_links_blocks

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.0.7
- **Priority**: 80

### drupal/lb_accordion

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.3.1
- **Priority**: 80

### drupal/lb_carousel

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.1.1
- **Priority**: 80

### drupal/dropzonejs_eb_widget

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.11.0
- **Priority**: 80

### drupal/lb_grid_cta

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 3.1.3
- **Priority**: 80

### drupal/lb_modal

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.3.0
- **Priority**: 80

### drupal/lb_partners_blocks

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.1.0
- **Priority**: 80

### drupal/lb_ping_pong

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.3.0
- **Priority**: 80

### drupal/lb_promo

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.3.0
- **Priority**: 80

### drupal/lb_related_articles_blocks

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.3.0
- **Priority**: 80

### drupal/y_lb_article

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.3.3
- **Priority**: 80

### drupal/node_revision_delete

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.0.1
- **Priority**: 80

### drupal/lb_related_events_blocks

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.4.0
- **Priority**: 80

### drupal/ws_event

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.5.6
- **Priority**: 80

### drupal/addtocal_augment

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.2.4
- **Priority**: 80

### drupal/date_augmenter

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.1.2
- **Priority**: 80

### drupal/daterange_compact

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.1.1
- **Priority**: 80

### drupal/smart_date

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 4.2.4
- **Priority**: 80

### drupal/lb_simple_menu

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.1.0
- **Priority**: 80

### drupal/lb_statistics

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.1.0
- **Priority**: 80

### drupal/lb_table

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.1.0
- **Priority**: 80

### drupal/lb_webform

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.3.1
- **Priority**: 80

### drupal/menu_item_extras

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 3.1.0
- **Priority**: 80

### drupal/ws_colorway_canada

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.3.1
- **Priority**: 80

### drupal/ws_lb_tabs

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.1.0
- **Priority**: 80

### drupal/ws_code_block

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.1.0
- **Priority**: 80

### drupal/y_branch

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.1.1
- **Priority**: 80

### drupal/lb_branch_amenities_blocks

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.0.0
- **Priority**: 80

### drupal/y_branch_menu

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.1.0
- **Priority**: 80

### drupal/y_camp

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.0.1
- **Priority**: 80

### drupal/entity_browser_entity_form

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.15.0
- **Priority**: 80

### drupal/lb_branch_hours_blocks

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.0.1
- **Priority**: 80

### drupal/y_facility

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 2.0.0
- **Priority**: 80

### drupal/y_program

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.2.0
- **Priority**: 80

### drupal/y_program_subcategory

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.2.0
- **Priority**: 80

### drupal/ckeditor5_plugin_pack

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.4.1
- **Priority**: 80

### drupal/ckeditor5_premium_features

- **Change Type**: Added
- **Reason**: New Drupal module added
- **Version**: 1.6.2
- **Priority**: 80

### drupal/bartik

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.2
- **Priority**: 70

### drupal/jquery_ui_slider

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 2.1.0
- **Priority**: 70

### drupal/jquery_ui_datepicker

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 2.1.1
- **Priority**: 70

### drupal/ckeditor5_font

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.1.2-beta1
- **Priority**: 70

### drupal/color

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.3
- **Priority**: 70

### drupal/media_library_bulk_upload

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.2
- **Priority**: 70

### drupal/seven

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.0
- **Priority**: 70

### drupal/yusaopeny_ymca360

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 1.0.0-rc4
- **Priority**: 70

### drupal/features

- **Change Type**: Removed
- **Reason**: Drupal module removed
- **Version**: 5.0.0-alpha1
- **Priority**: 70


---


## Detailed Package Changes

### ➕ Added Drupal Modules

- **drupal/nouislider_js** (15.8.1)
- **drupal/exif_orientation** (1.5.0)
- **drupal/layout_builder_blocks** (1.1.2)
- **drupal/layout_builder_operation_link** (2.2.0)
- **drupal/layout_builder_save_and_edit** (1.1.0)
- **drupal/lb_branch_social_links_blocks** (1.0.7)
- **drupal/lb_accordion** (2.3.1)
- **drupal/lb_carousel** (2.1.1)
- **drupal/dropzonejs_eb_widget** (2.11.0)
- **drupal/lb_grid_cta** (3.1.3)
- **drupal/lb_modal** (1.3.0)
- **drupal/lb_partners_blocks** (1.1.0)
- **drupal/lb_ping_pong** (1.3.0)
- **drupal/lb_promo** (1.3.0)
- **drupal/lb_related_articles_blocks** (1.3.0)
- **drupal/y_lb_article** (1.3.3)
- **drupal/node_revision_delete** (2.0.1)
- **drupal/lb_related_events_blocks** (1.4.0)
- **drupal/ws_event** (1.5.6)
- **drupal/addtocal_augment** (1.2.4)
- **drupal/date_augmenter** (1.1.2)
- **drupal/daterange_compact** (2.1.1)
- **drupal/smart_date** (4.2.4)
- **drupal/lb_simple_menu** (1.1.0)
- **drupal/lb_statistics** (2.1.0)
- **drupal/lb_table** (1.1.0)
- **drupal/lb_webform** (1.3.1)
- **drupal/menu_item_extras** (3.1.0)
- **drupal/ws_colorway_canada** (1.3.1)
- **drupal/ws_lb_tabs** (2.1.0)
- **drupal/ws_code_block** (1.1.0)
- **drupal/y_branch** (1.1.1)
- **drupal/lb_branch_amenities_blocks** (2.0.0)
- **drupal/y_branch_menu** (1.1.0)
- **drupal/y_camp** (2.0.1)
- **drupal/entity_browser_entity_form** (2.15.0)
- **drupal/lb_branch_hours_blocks** (2.0.1)
- **drupal/y_facility** (2.0.0)
- **drupal/y_program** (1.2.0)
- **drupal/y_program_subcategory** (1.2.0)
- **drupal/ckeditor5_plugin_pack** (1.4.1)
- **drupal/ckeditor5_premium_features** (1.6.2)


### 🔄 Updated Drupal Modules

- **drupal/address**: 1.12.0 → 2.0.4
  
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

    - `chore` 3547063: Add missing dependency. Advanced Help Block requires Help module.
  
  </details>
  
- **drupal/libraries**: 4.1.0 → 4.1.1
    <details>
  <summary>📋 Show 4 commits</summary>

    - `fix` [#3367706] fix: Drupal\Component\DependencyInjection\ReverseContainer::generateServiceIdHash(): after installing libraries module
    - `fix` Revert &quot;[#3367706] fix: Drupal\Component\DependencyInjection\ReverseContainer::generateServiceIdHash(): after installing libraries module&quot;
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
    - `other` D11 + typehints
    - `test` Test something
    - `refactor` Remove const parameters
    - `chore` revert
    - `fix` Issue #3243081 by Graber, smustgrave: Date offsets displayed with date picker
    - `fix` Issue #3168035 by damondt, Etroid: hook_better_exposed_filters_filter_widgets_alter not invoked
    - `fix` exclude select2 autocomplete fields
    - `docs` Issue #3456465 by FeyP: Use correct library directory name for local nouislider library in README
    - `fix` Issue #3452764 by smustgrave, Lucky723: Reset button deactivated but still there
    - `chore` Cspell + PHCPS
    - `feat` Issue #3462298: Improve theme suggestions to allow finer overrides
    - `docs` Issue #3440172 by rodrigoaguilera: Placeholder text not translatable using configuration translation
    - `fix` Cspell fix
    - `feat` Issue #3282228 by FeyP, DamienMcKenna, smustgrave, neclimdul, matthewmessmer: Add option to hide exposed field labels
    - `feat` Issue #3466314 by jpieper, larowlan, rlhawk, poker10, greggles, xjm: Inclusion...
    - `fix` Issue #3024267 by jrochate, gfed: Do not autosubmit view if using a chosen.js search widget
    - `docs` New attempt
    - `chore` update
    - `feat` Expand coverage
    - `docs` PHPSTAN ESTLINT
    - `breaking` PHPSTAN Next major
    - `fix` Issue #3468358 by andre.bonon: Text fields are auto-submitted twice when...
    - `refactor` Resolve #3427438 &quot;Refactor&quot;
    - `docs` Issue #3469224: Nondescript error when trying to edit Exposed Form Style settings in view
    - `fix` Issue #2756233 by gstivanin, JaceRider, jakub_89: Nested all/none selection weird behavior
    - `chore` Unused files
    - `fix` Issue #3469712 by sander wemagine: Remembered filters don&#039;t reset with BEF
    - `fix` Issue #3468358: UPDATE 1 - Text fields are auto-submitted twice when filters are exposed as block
    - `fix` Resolve #3365381 &quot;Auto submit fires&quot;
    - `fix` Resolve #3472881 &quot;Local lobraries not&quot;
    - `style` Typo
    - `fix` ANother missed
    - `docs` Updated bef_test view to illustrate how secondary options are displaying...
    - `fix` on blur of the max input. pass the index of 1.
    - `fix` Resolve #3299687 &quot;Date input triggers&quot;
    - `revert` Revert &quot;on blur of the max input. pass the index of 1.&quot;
    - `fix` #3477417: Add warning to status page if external library nouislider does not exist.
    - `feat` Resolve #3477440 &quot;7.x add composer.libraries.json&quot;
    - `docs` Resolve #3262456 &quot;Add minimum length&quot;
    - `fix` Issue #3478411: Altering the BEF options propagate properly.
    - `fix` Issue #3480552 by gaurav gupta: Twig Filter &quot;spaceless&quot; is deprecated warning in upgrade status
    - `feat` Add support for RTL in slider filters
    - `fix` Issue #3485649 by dropa: Autosubmit focuses fields it shouldn&#039;t
    - `fix` 3487805 Ensure title info is only added if form element is not empty
    - `fix` Use JS for textfield autosubmit exclusion
    - `chore` Remove VERSION from libraries.yml
    - `fix` Issue #3484533 by phjou: Reset button not working with Sort, Combine and AJAX
    - `docs` Issue #3494833 by liam morland: The README contains invalid links
    - `docs` Issue #3462685 by dieterholvoet, dejan0, smustgrave, Debra, karamveersingh, mike-kelly: The sliders range widget formats values with decimals
    - `docs` Issue #3494220 by jurgenhaas: Create a mirror for external library dependency for composer support
    - `docs` Issue #3494220 by jurgenhaas: Create a mirror for external library dependency for composer support
    - `fix` Issue #3498286: Slider behavior reversed?
    - `fix` Issue #3379736 by smustgrave, erichhaemmerle, mlncn, sarsion, laborouge: Collapsible details element not hidden if &quot;Hide filter, if no options&quot; is selected
    - `fix` restore update function
    - `fix` Issue #3501692 by marios anagnostopoulos: Inconsistent behavior when changing slider values from the textarea inputs
    - `chore` Merge branch &#039;7.0.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.0.x
    - `fix` Issue #3493882 by thoogend: Filter rewrite never gets applied to values like 0 considered empty by PHP
    - `fix` Revert &quot;Issue #3493882 by thoogend: Filter rewrite never gets applied to values like 0...&quot;
    - `test` Issue #3501764: Add basic test coverage for Slider
    - `fix` Issue #3493882 by smustgrave, thoogend: Filter rewrite never gets applied to values like 0 considered empty by PHP
    - `feat` Issue #3503630: Create attribute
    - `fix` Issue #3503638: 7.1.x restrict to 10.3 and use attributes
    - `feat` Issue #3501676 by marios anagnostopoulos: Allow themes to alter bef slider options
    - `fix` Issue #3470965 by escuriola, ebremner: Warning: Undefined array key &quot;#type&quot; in Drupal\\better_exposed_filters\\Plugin\\better_exposed_filters\\filterDatePickers-&gt;exposedFormAlter() (line 65 of /var/www/html/web/modules/contrib/better_exposed_filters/src/Plugin/better_exposed_filters/filter/Dat
    - `docs` Issue #3475063 by fskreuz, smustgrave: Hide labels for wrapped filters
    - `feat` Issue #3500630 provide a better way of including the nouislider library.
    - `feat` Places slider between min/max inputs (3214300).
    - `feat` Issue #3359254 by mdranove, joshf, smustgrave, muriqui, vensires: Enable changing sort_bef_combine parameter key
    - `fix` Fix
    - `docs` Attribute update
    - `fix` Issue #3507542 by gsquirrel: Collapsible details element no longer working for...
    - `test` Auto submit test coverage
    - `fix` Issue #3470965: Warning: Undefined array key &quot;#type&quot; in...
    - `chore` Merge branch &#039;7.1.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.1.x
    - `fix` Issue #3512039 by tbcs: better_exposed_filters/general library depends on, but does not require, core/once
    - `feat` Add form-item class to sort details/summary element
    - `docs` Minor phpcs
    - `fix` Issue #3512871 by mxr576, chrisolof: Automatic opening of collapsed filters with selections not working for single checkbox selection
    - `fix` Issue #3516547 by dcine: Views exposed filters adds a random suffix with letters and numbers
    - `feat` Issue #3265275 by casey: Allow to auto submit elements that have a form attribute and are rendered outside their &lt;form&gt;
    - `fix` #3520717: Fix alphabetical sorting when no &quot;- Any -&quot; option exists
    - `feat` Issue #3489773 by monaw, smustgrave: Single checkbox for &quot;is not empty&quot; filter
    - `fix` Issue #3515863 by smustgrave, pjotr.savitski: Secondary group is not opened when it has a collapsible filter that has user input
    - `chore` Merge branch &#039;7.1.x&#039; of https://git.drupalcode.org/project/better_exposed_filters into 7.1.x
    - `chore` Revert js
    - `style` 3504532 Soft limit for radios/checkboxes and links
    - `fix` Issue #2921024: Not possible to unselect the checkbox
    - `fix` Issue #3519991 by yes_max: WSOD when query parameter empty
    - `refactor` Issue #3529637: Remove redundant code in bef-links.html.twig
    - `fix` Resolve #3531924 &quot;7.1.x&quot;
    - `feat` Issue #3525725 by lus: Custom classes for filter elements
    - `fix` Resolve #3396769 &quot;7.1.x 404&quot;
    - `docs` Getting started
    - `fix` Issue #3495331 by liquidcms, plopesc: Sort logic is wrong
    - `fix` Resolve #2992372 &quot;When module uninstall&quot;
    - `chore` Clean install
    - `fix` Issue #3535071 by averagejoe3000: Space key should not auto submit form
    - `fix` Issue #3540832 by tregonia: Views reset button creates anonymous sessions
    - `fix` Resolve #3452004 &quot;Disable autosubmit with 7.1.x&quot;
    - `fix` Update bef_links filters widget to stop rendering empty options
    - `feat` [#3528584] feat: Html validation error due to non allowed attributes
    - `fix` Prevent fatal error on 404 pages when default 404 path is empty
    - `feat` [#3495503] feat: Allow auto-submit for sorts only
    - `feat` [#3538204] feat: resetForm() triggers warning when exposed sort elements is missing #default_value
    - `refactor` Refactor some
    - `feat` [#3546432] feat: Better Exposed Filters (BEF) multiple select links generate...
    - `feat` [#3546812] feat: Checkboxes are broken
    - `feat` [#3547366] feat: Issue with changes to filter definitions breaks with older versions.
    - `fix` Resolves &quot;3547871&quot; Fix php8 type error
    - `fix` Resolve #2935312 &quot;Checkboxes with remember&quot;
    - `fix` Issue #3493882 by smustgrave, thoogend: Filter rewrite never gets applied to...
    - `feat` [#3526885] feat: Accessibility: Orphaned form label
    - `feat` [#3534975] feat: Move JS range slider out of the minimum field wrapper (noUISlider)
  
  </details>
  
- **drupal/blazy**: 2.27.0 → 3.0.15
  
- **drupal/media_library_form_element**: 2.1.2 → 2.1.4
    <details>
  <summary>📋 Show 8 commits</summary>

    - `fix` Restore modifications from RenderElementBase
    - `fix` Issue #3469293: RenderElement is deprecated in drupal:10.3.0 and is removed from drupal:12.0.0
    - `fix` Issue #3498513: Outdated local tooling package-lock.json -- Trivy Scan reports security updates
    - `chore` Resolve #3458296 &quot;Completely remove build step&quot;
    - `feat` Issue #3537789: Add support for integer and array default values
    - `chore` Description in webform is overridden by description (#3522726)
    - `feat` [#3321051] feat: Replace README.txt with README.md
    - `docs` Check for description before evaluating [#3522726]
  
  </details>
  
- **drupal/captcha**: 2.0.7 → 2.0.9
    <details>
  <summary>📋 Show 6 commits</summary>

    - `test` Issue #3497314 by murat_kekic, dlevchik: Tests are failing for Drupal 11.1
    - `fix` Issue #3489166 by jordik, feyp: Image captcha reload produces a JSON error
    - `docs` Issue #3221197 by jaydarnell, adriancruz, anybody, mrdrewkeller, simon georges: Captcha Math question needs to be more accessible
    - `fix` Issue #3507522 by jurgenhaas, anybody: Insert captcha widget even if placement is NULL
    - `docs` Issue #3536050 by grevil, anybody: Add data-nosnippet around captcha
    - `fix` Issue #3538311 by grevil: Fix test regression causes through issue 3221197
  
  </details>
  
- **drupal/confi**: 3.2.3 → 4.1.1
    <details>
  <summary>📋 Show 2 commits</summary>

    - `fix` fix: break drupal 10 compatibility and fix code in tests section by rector
    - `fix` Remove drupal/features integration from confi module
  
  </details>
  
- **drupal/csv_serialization**: 3.0.1 → 4.0.1
    <details>
  <summary>📋 Show 8 commits</summary>

    - `fix` Issue #3402274: Call to deprecated method setNewline()
    - `docs` Issue #3405366: Resolve issues reported by PHPCS, PHPStan
    - `feat` Issue #3192772 by Aerzas: Allow to override encoder settings
    - `docs` Issue #3385335 by devad, markdorison, Shane Birley: [D10] Ludwig integration needs an update
    - `fix` Issue #3455761 by markdorison, david.muffley: Replace deprecated usage of League\Csv\ByteSequence::BOF_UTF8
    - `feat` Issue #3451668 by david.muffley: Use constructor property promotion
    - `fix` Issue #3389415 by ericgsmith: PHP 8.1 deprecated function warning
    - `fix` Issue #3429690 by claudiu.cristea: Automated Drupal 11 compatibility fixes for csv_serialization
  
  </details>
  
- **drupal/openy_mappings**: 1.1.0 → 1.1.1
    <details>
  <summary>📋 Show 1 commits</summary>

    - `docs` Openy mappings 3537349
  
  </details>
  
- **drupal/editor_advanced_link**: 2.3.1 → 2.3.3
    <details>
  <summary>📋 Show 4 commits</summary>

    - `fix` [#3495882] fix: Remove VERSION from libraries.yml
    - `fix` [#3534704] fix: Fix CI issues and unit tests
    - `refactor` Issue #3534699 by jannakha: Refactor custom JS for CKEditor5 v45+
    - `docs` Edit AdvancedLink.php
  
  </details>
  
- **drupal/google_tag**: 1.8.0 → 2.0.9
  
- **drupal/inline_entity_form**: 2.0.0-rc10 → 3.0.0-rc21
    <details>
  <summary>📋 Show 19 commits</summary>

    - `fix` Patch #9 applied, Issue #2855627
    - `chore` Issue #3410055 by Nikolay Shapovalov, dcam, Anjali Mehta, dww: Adopt GitlabCi
    - `fix` Issue #3325698 by dcam, geek-merlin, dsnopek, podarok: Using &#039;migrate&#039; without &#039;migrate_plus&#039; leads to fatal PHP error
    - `feat` Issue #3311501 by dcam, edmund.dunn, geek-merlin: Add label to weight select field for accessibility
    - `docs` Issue #3204518 by stefan.korn: Change type hints in inline_entity_form.api.php to align with Drupal core
    - `fix` Issue #3359875 by dcam, tte, geek-merlin, Sophie.SK: Memory allocation error
    - `fix` Issue #3315720 by gauravjeet, geek-merlin, podarok, dcam: TypeError: krsort(): Argument #1 ($array) must be of type array, null given in krsort()
    - `feat` Issue #3224955 by rp7, geek-merlin: Allow themes to alter inline entity forms
    - `perf` Issue #3209349 by Spokje, geek-merlin: Speed up FunctionalJavascriptTests tests
    - `fix` Issue #3358281 by bkosborne, geek-merlin: Wrong bundle form is displayed if user has permissions to create only of the available bundles
    - `fix` Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override
    - `fix` Fixup Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override
    - `revert` Revert &quot;Fixup Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override&quot;
    - `revert` Revert &quot;Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override&quot;
    - `fix` Issue #3362087 by Nikolay Shapovalov, urvashi_vora, Prem Suthar, Anjali Mehta, apaderno, geek-merlin, podarok, dww, dcam: Fix the issues reported by phpcs
    - `fix` Issue #3144002 by shivam_tiwari, geek-merlin, kbriand, Chris Matthews: Field permissions access override
    - `fix` task: #3149783: Remove hardcoded word &#039;entities&#039; in EntityInlineForm::getEntityTypeLabels()
    - `fix` Resolve #3438428 &quot;Automated drupal 11&quot;
    - `fix` Issue #3511502 by jakegibs617: Implicitly marking parameter $entity as nullable is deprecated
  
  </details>
  
- **drupal/link_attributes**: 2.1.1 → 2.1.2
    <details>
  <summary>📋 Show 1 commits</summary>

    - `fix` Issue #3545260 by valery.suslov, larowlan: Optgroups on select attribute are not supported
  
  </details>
  
- **drupal/metatag**: 2.1.1 → 2.2.0
    <details>
  <summary>📋 Show 22 commits</summary>

    - `chore` Preparing for further changes.
    - `feat` Replace annotations with attributes.
    - `revert` Revert &quot;Replace annotations with attributes.&quot;
    - `fix` Issue #3531026 by wengerk, damienmckenna: V2UpdatesTest::doSelectionTest() must be compatible with parent UpdatePathTestBase::doSelectionTest
    - `fix` Issue #3541868: Fix styleint test failures.
    - `fix` Issue #3541868 by DamienMcKenna: Fix styleint test failures.
    - `fix` Issue #3541896 by damienmckenna: Field API changed in 11.2, broke MetatagFieldTestBase::testFieldCanBeAdded().
    - `fix` Issue #3332769 by damienmckenna: Rework random string usage to be safer, fixes erratic Views test failure.
    - `fix` Issue #3529741 by damienmckenna, jchatard: Fixed UTF-8 character handling in meta tag tidy().
    - `fix` Issue #3543538 by damienmckenna: Remove redundant MetatagTokenStatusTest.
    - `chore` Releasing v2.1.2.
    - `chore` Preparing for further changes.
    - `feat` Issue #3458724 by damienmckenna, rachel_norfolk, pacproduct, petr illek: Add support for fediverse:creator.
    - `docs` Issue #3535155 by feyp, damienmckenna: Add SVG icon meta tag.
    - `fix` Issue #3541817 by damienmckenna: Replace annotation plugins with attribute plugins, require core 10.3+.
    - `docs` Issue #3272202 by anybody, damienmckenna, grevil: Add &lt;none&gt; placeholder to clear / unset inherited value.
    - `feat` Issue #3545780 by damienmckenna: Optionally add suffix after meta tags are trimmed.
    - `fix` Issue #3545780 by damienmckenna: Follow-up to correct a config var name.
    - `refactor` Issue #3545784 by damienmckenna: Rework MetaTagCustomTag to extend MetaNameBase.
    - `feat` Issue #3336142 by damienmckenna, pooja_sharma, sidharth_soman, jvbrian, schillerm, admirlju: List the total number of plugins on the reports page.
    - `feat` Issue #3488276 by monaw, naveenvalecha, gillesbailleux, damienmckenna, eleonel: Custom Meta tags: Support multiple attributes.
    - `chore` Releasing v2.2.0.
  
  </details>
  
- **drupal/migrate_plus**: 6.0.7 → 6.0.8
    <details>
  <summary>📋 Show 1 commits</summary>

    - `fix` Issue #3535862 by xurizaemon, evac9, bogdan.dinu, heddn: drush migrate:status throws error for migrations using XML dataparser
  
  </details>
  
- **drupal/migrate_tools**: 6.0.5 → 6.1.2
    <details>
  <summary>📋 Show 13 commits</summary>

    - `docs` Issue #3256236 by lazysoundsystem, benjifisher, heddn: Use of unsupported exclamation mark placeholders
    - `fix` Issue #3411051 by jeremy1606, heddn: Fix PHPCS issues
    - `fix` Issue #3497145 by fjgarlin, mjpa, heddn: Remove the old migrate_tools_sync state entry
    - `chore` Issue #3498688 by scott_euser, heddn: PHPCS fixes for MigrateToolsCommands
    - `fix` Issue #3331137 by benabaird, heddn: Shared configuration not available when using migrate plus config entities
    - `feat` Issue #3412074 by peacog, heddn: Drush command to disable a migration
    - `fix` Issue #3273978 by martin_klima, heddn: Drush migrate:rollback should skip disabled migrations
    - `fix` Issue #3104268 by scott_euser, heddn, robertom, ahebrank, nicxvan, jrockowitz, mikelutz, jrockowitz: Sync is too strict during id comparison and can roll back everything
    - `feat` Issue #3452721 by codebymikey, divyansh.gupta, heddn: Provide the ability to use all available entity operations on the Migration list builder
    - `perf` Issue #3534606 by peterwcm, heddn, d.fisher, tstoeckler: hook_config_schema_info_alter injected optional migrate_plus config schema
    - `fix` Issue #3125378 by ergonlogic, spiderman, divyansh.gupta, heddn: MigrationGroup shared configuration breaks UI
    - `docs` Issue #3534844: MigrateExecutable and MigrateBatchExecutable should use TranslationInterface
    - `feat` Issue #3536657 by heddn, mrshowerman: New parameters introduced in MigrateExecutable class constructor
  
  </details>
  
- **drupal/openy_carnation**: 3.2.1 → 4.0.0-beta4
    <details>
  <summary>📋 Show 6 commits</summary>

    - `fix` [Drupal 11] fix: add jquery_legacy library
    - `docs` Редагувати openy_carnation.info.yml
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
    - `revert` Revert &quot;Add ECA to test_dependencies in .info.yml&quot;
    - `chore` Issue #3510926 by jonathan1055: Remove tempoary D11 alternative composer.json
    - `fix` Issue #3495229 by jonathan1055: Restore Workbench Moderation test
    - `chore` Issue #3356800 by jonathan1055: Pipeline enhancements - remove mink_driver_args_webdriver and services, cater for single test groups
    - `docs` Issue #3356800 by jonathan1055: Extra assertions in SchedulerJavascriptDefaultTimeTest.php
    - `docs` Issue #3356800 by jonathan1055: Read build.env using export to cater for spaces
    - `docs` Issue #3356800 by jonathan1055: Improvments to variables output and phpunit matrix
    - `chore` Issue #3356800 by jonathan1055: Pipeline rules, allow concurrent=0 in Next Minor, phpcs.xml extensions
    - `fix` Issue #3527579 by jonathan1055: Ignore 3-party deprecations in phpunit testing at 11.2.x
    - `fix` Issue #3446881: Undefined array key &quot;translatable&quot; when Language is enabled but not Content Translation
    - `docs` Issue #3527579: Add #[Group] attributes for Core 11.2 and PHPUnit 11
    - `feat` Issue #3356800 by jonathan1055: Add rules to run jobs on commit and in MR, defaulting to manual
    - `fix` Issue #3155034 by jonathan1055: Delete unused missingAction() function
    - `feat` Issue #3533739 by jsacksick: Implement static caching around SchedulerManager::getPlugins()
    - `feat` [#3527579] feat: Add #[Group] and #[DataProvider] attributes to test classes for PHPUnit 11
    - `feat` [#3356800] feat: Do not revert .deprecations-ignore.txt in Test-only job
    - `fix` [#3514380] fix: Autoloading hooks in the file scheduler.tokens.inc is deprecated D11.2
    - `feat` [#3545432] feat: Improve caching around SchedulerManager::getPlugins() and SchedulerManager::getEntityFormIds()
    - `feat` #3507012 Dependency injection instead of \Drupal calls (part 1)
    - `docs` #3553242 Ignore deprecated getSystemData()
  
  </details>
  
- **drupal/webform**: 6.3.0-beta3 → 6.3.0-beta5
    <details>
  <summary>📋 Show 113 commits</summary>

    - `docs` Issue #3133280: Remove obsolete comment
    - `chore` Issue #3537579: Restore use of legacy SanitizePluginInterface
    - `fix` Issue #3441905: Correct name of FunctionalJavascript directory
    - `fix` Issue #3538392: Fix test failure in WebformElementCaptchaTest
    - `docs` Issue #3523478: Add `minified: true` to files in webform.libraries.yml
    - `style` Issue #3541370: Replace deprecated rgba()
    - `docs` Issue #3487957: Add LegacyModuleImplementsAlter attribute annotation
    - `refactor` Issue #3538392: Make @dataProvider methods static
    - `test` Issue #3538392: Update tests to handle differences in Drupal 11
    - `docs` Issue #3538392: Use XPath in WebformElementValidateRequiredTest
    - `fix` Issue #3517902: Remove deprecated dialogClass
    - `fix` Issue #3541440 by eric.vvf, liam morland, jrockowitz: Visual alignment issue: .webform-addons-summary floats beside warning messages instead of appearing above
    - `fix` Issue #3532527 by divyansh.gupta, majid.ali, jrockowitz, norman.lol, thamas: All errors should have role alert for better accessibility when using client side validation
    - `feat` Issue #3516134: Add access check for &quot;notes&quot; operation
    - `chore` Issue #3542169: Remove fix checkbox via dialog/off-canvas tray
    - `fix` Issue #3524067 by tom konda: strpos($a, $b) which compares with FALSE or 0 should replace with str_contains($a, $b) or str_starts_with($a, $b) if possible
    - `fix` Issue #3542319: array_intersect(): Argument #1 ($array) must be of type array, null given
    - `fix` Issue #3204456 by jrockowitz, angrytoast, berdir, liam morland, heinvdb, catch: getParagraphWebformsRecursive causes slow load times
    - `fix` Issue #3279642 by matthijs: Duplicate default element callbacks
    - `feat` Issue #3538042: Add autocomplete for date element to be a11y compliant
    - `test` Issue #3514708 by jrockowitz, mandclu: Add a test for the Likert &quot;average&quot; formatter
    - `fix` Issue #3473834 by liam morland, jrockowitz: Remove JS shims for Internet Explorer (IE)
    - `fix` Issue #3508995 by jrockowitz, ryanrobinson_wlu, cilefen: Column Not Found: user.name
    - `fix` Issue #3523961 by marthinal, jwilson3: Avoid addcslashes() deprecation warning during Webform submission preview
    - `fix` Issue #3526756 by huzooka, liam morland, jrockowitz, dxvargas: Exception thrown when trying to submit element / wrapper attributes with invalid string
    - `fix` Issue #3466356 by damienmckenna, liam morland: WebformElementStates::buildConditionRow() has faulty code
    - `fix` Issue #3542583: Date test values can be out of range in case of maximum and no minimum date
    - `fix` Issue #3452423 by jrockowitz, tichris59: Mode test - Date list restriction not applied
    - `fix` Issue #3488049 by jrockowitz, berdir: Delay discovery/init logic in WebformHelpManager
    - `fix` Issue #3443385 by arno_vgh, cilefen, jrockowitz: Update remote_post Webform handler name &amp; description
    - `fix` Issue #3537938 by n-m-daz, eric.vvf, jrockowitz, liam morland, divya.sejekan: The placeholder text in the filter submissions field is cropped and not fully visible
    - `perf` Issue #3456597: Cascading effect creates loss of performance
    - `fix` Issue #3473153 by jrockowitz, rraney, flyke, cilefen, s3b0un3t, rajeevk, carma03, anurag_2711, lukey: Route &quot;webform.addons&quot; does not exist
    - `fix` Issue #3538258 by jrockowitz, andrew.wang: &quot;You have unsaved changes.&quot; prompt does not display when &quot;Required&quot; checkboxes are clicked
    - `fix` Issue #3477308 by jrockowitz, anybody, gogowitsch: Access denied when using webform dialog as anonymous user
    - `fix` Issue #3526888 by liam morland, occupant, jrockowitz, jeeva r: Unable to install webform_node module via recipe
    - `feat` Issue #3469200: Allow to use rendered entities (in selected view mode) as webform entity checkboxes / radios options
    - `fix` Issue #3500627 by jrockowitz, albertho425, girish_lnweb, cilefen: Drupal 10 webform validation issue when using checkboxes
    - `fix` Issue #3533744 by apparatchik: Allow Signature Element To Notify Value Changes And Work With Webform Conditions
    - `docs` Issue #3531961 by jrockowitz, imranbcc, avpaderno: Unnecessary element access properties in yaml
    - `fix` Issue #3516047 by marthinal, jwilson3: Accessibility violation: Tippy.js adds aria-expanded to &lt;span&gt; with role=&quot;tooltip&quot;
    - `feat` Issue #3524488 by jrockowitz, martonlaci, liam morland: Activate Title case input mask option
    - `feat` Issue #3458484 by jrockowitz, abhijith s, nupur badola, cilefen, luke.leber: Provide option to disable default Js validation on Telephone element
    - `fix` Issue #3504078 by liam morland, milosr, jrockowitz, crutch, ivan616: Operations Dropbutton improvement, need webform node id/class or form id for a webform node
    - `fix` Issue #3466750 by chrisolof, liam morland: Date-time strings in log messages generated by webform_scheduled_email lack important timezone information
    - `feat` Issue #3487468: Extend &quot;Terms of service&quot; element with the option to add a link
    - `feat` Issue #3493832: Allow custom data-options to added to elements JavaScript options
    - `fix` Issue #3522507 by jrockowitz, liam morland: SchemaIncompleteException for webform.settings:ui.description_help_disabled
    - `feat` Issue #3524488 by jrockowitz, martonlaci, liam morland: Activate Title case input mask option
    - `fix` Issue #3520508: Maxlength on text format field causes TypeError
    - `fix` Issue #3537919: Crash after update request
    - `fix` Issue #3462726 by jrockowitz, Ana Bozhilova, cskeers, liam morland: Webform Export Option &quot;Separate, with each possible option value in its own column&quot; Doesn&#039;t Show Values for Specific Options
    - `feat` Add &quot;titlecase&quot; to cspell project words list
    - `fix` Issue #3524877 by yovince, liam morland: Remove return value from WebformSubmissionDevelGenerate::generateSubmissions()
    - `feat` Issue #3483410: Add justify content settings in WebformFlexbox Element
    - `fix` Issue #3471061 by jrockowitz, adhershmnair, regina.meow, cilefen: &quot;Filter webforms&quot; not working after using browser&#039;s back button
    - `fix` Issue #3413266 by danflanagan8, jrockowitz, cilefen, tinny: Uncaught GuzzleHttp\Exception\ConnectException in remote post hander
    - `fix` Issue #3542964: Remove Add-ons feature
    - `feat` Issue #3439662 by jrockowitz, arno_vgh: Allow a WebformEmailHandler to specify the language of an email message
    - `fix` Issue #3524216 by jrockowitz, robijntje94, liam morland, pepeprawn, anpri31, cilefen, cp_dev, dmitrii puiandaikin, abramm, daletrexel: jQuery timepicker setting is not respected
    - `fix` Issue #3337640 by jrockowitz, tgoeg, kensuke-imamura: drush wfi does not import data exported with wfx
    - `fix` Issue #3534519 by jrockowitz, khiminrm: Warnings when exporting submissions with empty composite element
    - `feat` Issue #3449523 by jrockowitz, nicholosophy, cilefen: Add option to add css class to fieldset legend element
    - `fix` Issue #3543591: The validateUnique() and validateUniqueMultiple() functions don&#039;t evaluate #unique = false correctly
    - `docs` Issue #3424031 by jrockowitz, alex20001111:  Report of Issue with Options/Checkbox Limit in Custom Option SVG Module
    - `fix` Remove excluded children from containers
    - `fix` Issue #3414361: UX regression / error when duplicating webform in D10.2
    - `feat` Add Spanish words to cspell project word list
    - `fix` Issue #3380667: Remote post handler triggers session related error messages when remote post fails
    - `feat` [#3441600] feat: Webform might create invalid link renderable arrays on submission list.
    - `feat` [#3513032] feat: Remove &quot;use strict&quot; statements from JS where cited by eslint
    - `feat` [#3543014] feat: Make form_file_limit error message configurable
    - `feat` [#3449370] feat: Values not shown on submission display when multiple items and UL used
    - `feat` [#3510410] feat: Disabled webform text format -- unable to reenable
    - `feat` [#3497954] feat: Excessive memory use when building dynamic library definitions
    - `feat` [#3440309] feat: First option of required checkboxes/checkboxes other become required under conditional state while wrapper type set to &#039;form element&#039;
    - `chore` Linting
    - `fix` Issue #3497954 by weseze, catch, heddn, cilefen, jrockowitz, liam morland: Excessive memory use when building dynamic library definitions. Minor Fix.
    - `feat` [#3432428] feat: Information message for file uploads is confusing when form limit is enabled
    - `feat` [#3484772] feat: Managed file element using &quot;button&quot; option appears to incorrectly invalidate valid uploads
    - `feat` [#3449549] feat: Webform &#039;remote_post&#039; handler doesn&#039;t exclude fields without access
    - `feat` [#3315197] feat: [Performance] Add an index on webform_submission_data name and property
    - `fix` Issue #3497954 by weseze, catch, heddn, cilefen, jrockowitz, liam morland: Excessive memory use when building dynamic library definitions. Minor Fix.
    - `fix` Issue #3497954 by weseze, catch, heddn, cilefen, jrockowitz, liam morland: Excessive memory use when building dynamic library definitions. Minor Fix.
    - `feat` [#3487061] feat: Fix coding standards
    - `feat` [#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection
    - `revert` Revert &quot;[#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection&quot;
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
    - `fix` [#3544435] feat: Upgrade 6.2.x → 6.3.x removes webform_shortcuts → causes missing-module errors during updb/cim
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
  
- **drupal/openy_pef_gxp_sync**: 1.1.10 → 2.0.1
    <details>
  <summary>📋 Show 4 commits</summary>

    - `chore` Upgrade to Drupal 11
    - `feat` feat: add drupal/groupexpro as deps
    - `feat` feat: add drupal/openy_mappings as deps in composer.json
    - `docs` Редагувати openy_pef_gxp_sync.info.yml
  
  </details>
  
- **drupal/ymca_sync**: 10.0.6 → 11.0.0
    <details>
  <summary>📋 Show 4 commits</summary>

    - `feat` Add replace to composer.json
    - `fix` Fix name module
    - `feat` feat: update to drupal 11
    - `docs` Apply 1 suggestion(s) to 1 file(s)
  
  </details>
  
- **drupal/openy_repeat**: 2.8.2 → 3.1.0
    <details>
  <summary>📋 Show 4 commits</summary>

    - `fix` Convert uri to query
    - `chore` Update version
    - `fix` Fix location query
    - `chore` Drupal 11 upgrade: staged changes
  
  </details>
  
- **drupal/responsive_favicons**: 2.0.1 → 3.0.1
    <details>
  <summary>📋 Show 20 commits</summary>

    - `fix` Issue #3434213: Automated Drupal 11 compatibility fixes for responsive_favicons
    - `fix` Various improvements and fixes
    - `fix` Small fix
    - `docs` Issue #3510938 by mably: Add suffix to icons URLs for better browser cache handling
    - `feat` Issue #3347629 by mably: Support the domain module
    - `fix` Issue #3511062 by mably: Add a new option to allow removal of existing files in the upload folder
    - `refactor` Cache handling tweaks
    - `fix` Issue #3335794 by stevewilson, mably: Fast 404s no longer configured in settings.php
    - `fix` Conf validation error with boolean type
    - `chore` Issue #3238269 by mably: Default favicon output in maintenance mode
    - `fix` Issue #3360451 by mably: Conflict with PWA module - show warning
    - `feat` Issue #3076051 by arun ak, artem_bosenko, mably: Provide an option to alter icon image paths
    - `feat` Issue #3045218 by mably: Enable external public:// root
    - `feat` Issue #3511771 by mably: Add an option to keep tags even if icon files are not available
    - `fix` Issue #3152918 by driskell, mably: Cache-control header is missing so Drupal is hit every time for favicon
    - `feat` Issue #3511883 by mably: Add a project logo for Responsive Favicons
    - `fix` Issue #3513205 by mably, w01f: Update constructor for DefaultFavicons to ModuleHandlerInterface
    - `fix` Issue #3513941 by mably: DOMDocument::loadHTML(): Argument #1 ($source) must not be empty
    - `chore` Issue #3522855 by ioana apetri, mably: Compatibility with redirect module
    - `docs` Issue #3526761 by mably, sd123, natts: Add warning message that cache-busting parameters should be removed from URLs.
  
  </details>
  
- **drupal/ws_small_y**: 1.2.1 → 1.2.2
    <details>
  <summary>📋 Show 2 commits</summary>

    - `chore` Update drupal/openy_gtranslate to 2.0.0
    - `chore` Merge branch &#039;update/openy_gtranslate-2.0.0&#039; into &#039;1.0.x&#039;
  
  </details>
  
- **drupal/lb_cards**: 2.2.0 → 2.2.1
    <details>
  <summary>📋 Show 1 commits</summary>

    - `fix` fix: [#3551909] Update template to render description field
  
  </details>
  
- **drupal/lb_hero**: 1.5.0 → 1.5.4
    <details>
  <summary>📋 Show 4 commits</summary>

    - `feat` Issue #3543157: Improve Local Video styles in Frame variant 
    - `fix` fix: [#3551562] Render description field and update template
    - `docs` Updated docblock with clear description of the update action
    - `feat` feat: [#3557695] Allow attributes on links
  
  </details>
  
- **drupal/lb_staff_members_blocks**: 1.3.0 → 1.3.1
    <details>
  <summary>📋 Show 1 commits</summary>

    - `feat` [#3550036] Generate images with relative path.
  
  </details>
  


### ➖ Removed Drupal Modules

- **drupal/bartik** (was 1.0.2)
- **drupal/jquery_ui_slider** (was 2.1.0)
- **drupal/jquery_ui_datepicker** (was 2.1.1)
- **drupal/ckeditor5_font** (was 1.1.2-beta1)
- **drupal/color** (was 1.0.3)
- **drupal/media_library_bulk_upload** (was 1.0.2)
- **drupal/seven** (was 1.0.0)
- **drupal/yusaopeny_ymca360** (was 1.0.0-rc4)
- **drupal/features** (was 5.0.0-alpha1)


### ➕ Added PHP Libraries

- **symfony/polyfill-php85** (v1.33.0)
- **symfony/polyfill-php84** (v1.33.0)
- **revolt/event-loop** (v1.0.7)
- **ycloudyusa/fontyourface** (4.0.0)
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
- **consolidation/output-formatters** (4.7.0)
- **drush/drush** (13.7.0-rc1)
- **ycloudyusa/lb_claro** (2.0.2)


### 🔄 Updated PHP Libraries

- **symfony/console**: v6.4.23 → v7.4.0-RC2
    <details>
  <summary>📋 Show 123 commits</summary>

    - `fix` [Console] Remove a redundant local variable in the console Application class.
    - `fix` fix merge
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Console] Fix signal handlers not being cleared after command termination
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Console] Add missing VERBOSITY_SILENT case in CommandDataCollector
    - `refactor` Move readonly keyword from class to properties
    - `perf` [Console] Optimize mostRecentlyEnteredValue() method
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Console] ensure `SHELL_VERBOSITY` is always restored properly
    - `feat` [Console] Add support for `Cursor` helper in invokable commands
    - `feat` minor #61978 [Console] Fine-tuning the interactive `#[Ask]` attribute (yceruto)
    - `fix` [Console] Fine-tuning the interactive Ask attribute
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `fix` skip hidden question tests on Windows
    - `fix` fixup! [Console] Specify types of interactive question choices
    - `docs` [Console] Update CHANGELOG to reflect attribute name changes for interactive invokable commands
    - `feat` feature #61748 [Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes (yceruto)
    - `feat` [Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` bug #61861 [Console] Ensure terminal is usable after termination signal (johnstevenson)
    - `fix` [Console] Ensure terminal is usable after termination signal
    - `feat` [Console] Rename `#[Input]` to `#[MapInput]`
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` do not pass the empty string to ord()
    - `fix` fix transient Console output related test
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [Console] Specify types of interactive question choices
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [Console][QuestionHelper] add optional timeout for human interaction
    - `fix` [Console] Fix handling of `\E` in Bash completion
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Console] Don’t append a new line to test inputs ending with an EOT
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Console] Don’t automatically append EOT to multiline test inputs
    - `fix` minor #61672 [Console] Fix test after #61308 (vrana)
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Console] Fix test after #61308
    - `feat` [Console] Add #[Input] attribute to support DTOs in commands
    - `fix` use the empty string instead of null as an array offset
    - `fix` [Console] Harden array type for test-related user inputs
    - `docs` [Console] Add phpdoc for return type of subscribed signals
    - `fix` [DI]: removed unnecessary checks on `Definition`s and `Alias`es
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` bug #61033 [Console] Restore `SHELL_VERBOSITY` after a command is ran (lyrixx)
    - `feat` [Console] Add getter for the original command &quot;code&quot; object
    - `feat` feature #61078 [Console] Add getter for the original command &quot;code&quot; object (weitzman)
    - `feat` [Console] Add getter for the original command &quot;code&quot; object
    - `fix` [Console] Fix testing multiline question
    - `fix` bug #61367 [Console] Fix name/alias/usages when an invokable command has an alias (weitzman)
    - `fix` [Console] Fix name/alias/usages when an invokable command has an alias
    - `docs` Use &lt;info&gt; for options in command description
    - `chore` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `chore`  chore: PHP CS Fixer - update heredoc handling
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `chore` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `test` minor #61390  run tests with PHPUnit 12.3 (xabbuh)
    - `test` run tests with PHPUnit 12.3
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `fix` [Console] Restore SHELL_VERBOSITY after a command is ran
    - `feat` feature #61308 [Console] Adding more helpful error messages to the Questionhelper (mamazu)
    - `refactor` Remove some unneeded var annotations
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Console][Table] Don&#039;t split grapheme clusters
    - `refactor` replace PHPUnit annotations with attributes
    - `fix` Adding more helpful error messages to the Questionhelper
    - `test` run tests using PHPUnit 11.5
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` [Console][Table] Fix unnecessary wrapping
    - `fix` [Console][Table] Fix invalid UTF-8 due to text wrapping
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` bug #61080 [Console] Fix `TreeHelper::addChild` when providing a string (jtattevin)
    - `fix` [Console] Fix `TreeHelper::addChild` when providing a string
    - `fix` minor #61227 Fix typos (nicolas-grekas)
    - `fix` Fix typos
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `chore` [Console] cleanup
    - `fix` [Console] Fix JSON description for negatable input flags
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Console] Windows Test Error - change completecar for windows for passing test
    - `fix` [Console] Fix merge
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` [Console] fix profiler with overridden `run()` method
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `perf` optimize `in_array` calls
    - `fix` Fix @var phpdoc
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `fix` CS fixes
    - `fix` Various CS fixes
    - `chore` minor #61040 chore: PHP CS Fixer fixes (keradus)
    - `chore` chore: PHP CS Fixer fixes
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` bug #60507 [Console][Messenger] Fix: Allow `UnrecoverableExceptionInterface` to bypass retry in `RunCommandMessageHandler` (santysisi)
    - `fix` Fix tests
    - `fix` Fix typos in documentation and code comments
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
  
  </details>
  
- **symfony/service-contracts**: v3.5.1 → v3.6.1
    <details>
  <summary>📋 Show 12 commits</summary>

    - `feat` use constructor property promotion
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `style` Prefix all sprintf() calls
    - `feat` Add more precise types in reusable test cases
    - `perf` make test case classes compatible with PHPUnit 10+
    - `fix` Remove calls to getExpectedException()
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Fix ServiceMethodsSubscriberTrait for nullable service
    - `fix` Fix ServiceMethodsSubscriberTrait for nullable service
    - `fix` CS fixes
    - `fix` Fix @var phpdoc
    - `fix` Merge branch &#039;6.4&#039; into 7.2
  
  </details>
  
- **symfony/string**: v6.4.24 → v8.0.0-RC1
    <details>
  <summary>📋 Show 145 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [String] New locale aware casing methods
    - `feat` feature #52198 [String] New locale aware casing methods (bram123)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Leverage ReflectionFunction::isAnonymous()
    - `style` [String] Use CPP
    - `fix` Move &amp; adapt &quot;emoji code&quot; from Intl into its own component
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` feature #53096 [Intl] [Emoji] Move emoji data in a new component (smnandre)
    - `chore` bump version for symfony/emoji
    - `feat` [String] Leverage Randomizer::getBytesFromString()
    - `chore` chore: CS fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `style` Prefix all sprintf() calls
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` chore: CS fixes
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [String] Add WORD_STRICT mode to truncate method
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` feature #57243 [String] Add `TruncateMode` mode to `truncate` methods (Korbeil)
    - `docs` Update .gitattributes
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` fix truncating in WordBefore mode with length after last space
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;7.0&#039; into 7.1
    - `docs` Merge branch &#039;7.1&#039; into 7.2
    - `fix` bug #57778 [String] fix truncating in WordBefore mode with length after last space (xabbuh)
    - `refactor` Remove useless code
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [String] Add Spanish inflector with some rules
    - `feat` feature #58228 [String] Add Spanish inflector with some rules (dennistobar)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [String] Add the `AbstractString::kebab()` method
    - `feat` feature #58385 [String] Add the `AbstractString::kebab()` method (alexandre-daubois)
    - `fix` Remove always true/false occurrences
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [String] Add `AbstractString::pascal()` method
    - `fix` Fix typo
    - `chore` chore: PHP CS Fixer - allow header validator
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `chore` Bump Symfony 8 to PHP &gt;= 8.4
    - `refactor` Remove deadcode after the bump to PHP &gt;= 8.4
    - `feat` [String] Leverage grapheme_str_split()
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Various CS fixes
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `perf` optimize `in_array` calls
    - `refactor` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Fix typos
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `test` run tests using PHPUnit 11.5
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `refactor` replace PHPUnit annotations with attributes
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Remove some implicit bool type juggling
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` run tests with PHPUnit 12.3
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
    - `refactor` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
    - `refactor` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `refactor` Merge branch &#039;7.4&#039; into 8.0
    - `perf` [HttpKernel][Mime][Serializer][String][Validator] Replace `__sleep/wakeup()` by `__(un)serialize()`
    - `fix` specific fix to avoid &#039;outag&#039; when inflecting &#039;outages&#039;
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `refactor` Merge branch &#039;7.4&#039; into 8.0
    - `docs` [String] Fix issues singular
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` [String] Fix nodes singular
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` [String][Inflector] Fix edge cases
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` use the empty string instead of null as an array offset
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` [PhpUnitBridge] Fix gathering deprecation in phpt
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
  
  </details>
  
- **symfony/polyfill-intl-grapheme**: v1.31.0 → v1.33.0
    <details>
  <summary>📋 Show 3 commits</summary>

    - `feat` [PHP 8.4][Intl] Add `grapheme_str_split`
    - `fix` fix typo
    - `fix` Fix registrering grapheme_str_split()
  
  </details>
  
- **symfony/dependency-injection**: v6.4.23 → v7.4.0-RC2
    <details>
  <summary>📋 Show 109 commits</summary>

    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [DependencyInjection] Call default index method when index is not provided by tag
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` bug #62304 [DependencyInjection] Fix lazy proxy creation for interfaces aliased to final classes (yoeunes)
    - `fix` [DependencyInjection] Fix lazy proxy creation for interfaces aliased to final classes
    - `fix` [DependencyInjection] Fix merging explicit tags and #[AsTaggeditem]
    - `refactor` [DependencyInjection] Include return type in AppReference shape
    - `perf` [DependendcyInjection] Improve shape for &quot;from_callable&quot; definitions
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [DependencyInjection] Fix PHPDoc syntax for InstantiatorInterface
    - `docs` clean up legacy groups in tests
    - `fix` [DependencyInjection] Fix FC layer with Config v8
    - `fix` [DependencyInjection] Fix FC with Config v8
    - `feat` [FrameworkBundle] Auto-generate `config/reference.php` to assist in writing and discovering app&#039;s configuration
    - `test`  Add `TEST_GENERATE_FIXTURES=1` to generate fixtures in tests
    - `docs` [Config][DependencyInjection] Deprecate the fluent PHP format for semantic configuration
    - `refactor` [DependencyInjection] Split ImportsConfig and ParametersConfig out of ServicesConfig
    - `fix` [DependencyInjection][Routing] Fix nested config imports when returning PHP arrays
    - `feat` [DependencyInjection][Routing] Define array-shapes to help writing PHP configs using yaml-like arrays
    - `fix` fix deprecation version
    - `feat` bug #61940 [DependencyInjection] Register a custom autoloader to generate `*Config` classes when they don&#039;t exist yet (alexandre-daubois)
    - `feat` [DependencyInjection] Register a custom autoloader to generate `*Config` classes when they don&#039;t exist yet
    - `chore` [DependencyInjection] Deprecate ExtensionInterface::getXsdValidationBasePath() and getNamespace()
    - `chore` [DependencyInjection][Routing] Deprecate XML configuration format
    - `docs` [DependencyInjection][Routing] Handle declaring services and routes using PHP arrays that follow the same shape as corresponding yaml files
    - `chore` [DependencyInjection][Config][Routing] Deprecate using `$this` or the internal scope of the loader from PHP config files
    - `feat` feature #61885 [DependencyInjection] Handle returning arrays and config-builders from config files (nicolas-grekas)
    - `chore` [DependencyInjection] Handle returning arrays and config-builders from config files
    - `docs` do not use deprecated PHPUnit features
    - `docs` [DependencyInjection] Improve services.schema.json
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [DependencyInjection] Allow `Class::function(...)` and `global_function(...)` closures in PHP DSL for factories
    - `fix` use the empty string instead of null as an array offset
    - `refactor` [DependencyInjection][Validator] Remove needless code
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `test` [DependencyInjection] Add test case to ensure XML parse exception message includes filename and position
    - `chore` [DependencyInjection] Minor optims
    - `fix` [DependencyInjection] Fix optimizing ClassExistenceResource
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `refactor` [DependencyInjection] Optimize `AutowireRequiredMethodsPass`
    - `feat` feature #61575 [DependencyInjection] Allow multiple `#[AsDecorator]` attributes (Jean-Beru)
    - `chore` [DependencyInjection] Allow multiple `#[AsDecorator]` attributes
    - `refactor` [DependencyInjection] Parse attributes found on abstract classes for resource definitions
    - `feat` feature #61536 [DependencyInjection] Allow adding resource tags using any config formats (nicolas-grekas)
    - `chore` [DependencyInjection] Allow adding resource tags using any config formats
    - `fix` [DI]: removed unnecessary checks on `Definition`s and `Alias`es
    - `refactor` [DependencyInjection] Respect original service class when a proxy is defined
    - `feat` feature #61282 [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files (nicolas-grekas)
    - `docs` [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `perf` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `chore` [DependencyInjection] Don’t autowire excluded services
    - `chore` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `chore`  chore: PHP CS Fixer - update heredoc handling
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `chore` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `fix` Fix tests
    - `chore` Run high-deps tests on PHP 8.4
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `fix` Remove some implicit bool type juggling
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` minor #61280 [DependencyInjection] Dump XML using plain PHP, no DOM needed (nicolas-grekas)
    - `fix` Fix wrong boolean values
    - `fix` minor #61299 replace PHPUnit annotations with attributes (xabbuh)
    - `refactor` replace PHPUnit annotations with attributes
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `test` run tests using PHPUnit 11.5
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` [DependencyInjection] Escape parameters before resolving env placeholders
    - `refactor` [DependencyInjection] Dump XML using plain PHP, no DOM needed
    - `chore` [DependencyInjection] Deprecate registering a service without a class when its id is a non-existing FQCN
    - `refactor` [DependencyInjection] Update `ResolveClassPass` to check class existence
    - `fix` [Form][PhpUnitBridge] Remove usage of noop `ReflectionProperty::setAccessible()`
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` minor #61103 Fix various bool-type coercions (Girgias)
    - `fix` Fix various bool-type coercions
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `perf` optimize `in_array` calls
    - `fix` [DependencyInjection] Fix proxying services defined with an abstract class and a factory
    - `fix` Fix @var phpdoc
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `fix` CS fixes
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` [DependencyInjection] CS fix
    - `fix` Various CS fixes
    - `fix` [FrameworkBundle] fix `lint:container` command
    - `feat` feature #60910 [DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()` (nicolas-grekas)
    - `feat` [DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()`
    - `feat` feature #60597 [DependencyInjection][FrameworkBundle] Use php-serialize to dump the container for debug/lint commands (nicolas-grekas)
    - `docs` Merge branch &#039;7.3&#039; into 7.4
    - `docs` Merge branch &#039;7.2&#039; into 7.3
    - `docs` Merge branch &#039;6.4&#039; into 7.2
  
  </details>
  
- **symfony/var-exporter**: v6.4.24 → v8.0.0-RC1
    <details>
  <summary>📋 Show 100 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` [VarDumper] Remove obsolete PHP version check
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` [VarExporter] Drop support for partially initialized lazy object
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` fix merge
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `perf` [VarExporter] Improve performance when creating lazy objects
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `style` Prefix all sprintf() calls
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `docs` Update .gitattributes
    - `refactor` Remove unused code and unnecessary `else` branches
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `style` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `fix` [VarExporter] Allow reinitializing lazy objects with a new initializer
    - `docs` CS: re-apply `trailing_comma_in_multiline`
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [VarExporter] Fix phpdoc of `LazyGhostTrait` and `LazyProxyTrait`
    - `refactor` Reduce common control flows
    - `refactor` minor #58566 Reduce common control flows (alexandre-daubois)
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Various cleanups
    - `feat` [VarExporter] Leverage native lazy objects
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Remove unneeded use statements
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Merge branch &#039;6.4&#039; into 7.2
    - `docs` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `chore` Bump Symfony 8 to PHP &gt;= 8.4
    - `refactor` Remove deadcode after the bump to PHP &gt;= 8.4
    - `fix` [VarExporter] Remove `LazyGhostTrait` and `LazyProxyTrait` in favor of native lazy objects
    - `fix` Various CS fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `test` run tests using PHPUnit 11.5
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `refactor` replace PHPUnit annotations with attributes
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` [VarExporter] Fix serializing classes with __serialize() returning unprefixed private properties
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `refactor` Merge branch &#039;7.4&#039; into 8.0
    - `feat` [VarExporter] Add support for exporting named closures
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `chore` -
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` [VarExporter] Fixes phpdoc syntax in LazyObjectRegistry
  
  </details>
  
- **symfony/event-dispatcher**: v6.4.24 → v7.4.0-RC1
    <details>
  <summary>📋 Show 38 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `refactor` [EventDispatcher] Revert native return types on EventSubscriberInterface
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Leverage ReflectionFunction::isAnonymous()
    - `docs` [Console][EventDispatcher][Security][Serializer][Workflow] Add PHPDoc to attribute classes and properties
    - `docs` minor #51974 [Console][EventDispatcher][Security][Serializer][Workflow] Add PHPDoc to attribute classes and properties (alexandre-daubois)
    - `refactor` [Dotenv][ErrorHandler][EventDispatcher] Use CPP
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `style` Prefix all sprintf() calls
    - `docs` Update .gitattributes
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` replace assertEmpty() with stricter assertions
    - `fix` Don&#039;t enable tracing unless the profiler is enabled
    - `feat` Allow Symfony ^8.0
    - `test` run tests using PHPUnit 11.5
    - `refactor` replace PHPUnit annotations with attributes
    - `perf` run tests with PHPUnit 12.0 on PHP &gt;= 8.3
    - `fix` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Add support for union types on AsEventListener
    - `refactor` [EventDispatcher][FrameworkBundle] Rework union types on `#[AsEventListener]`
  
  </details>
  
- **symfony/event-dispatcher-contracts**: v3.5.1 → v3.6.0
    <details>
  <summary>📋 Show 2 commits</summary>

    - `perf` make test case classes compatible with PHPUnit 10+
    - `chore` Merge branch &#039;7.1&#039; into 7.2
  
  </details>
  
- **symfony/filesystem**: v6.4.24 → v7.4.0-RC1
    <details>
  <summary>📋 Show 67 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` Remove BC layers related to new methods and new parameters
    - `feat` [Components] Convert to native return types
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Set `strict` parameter of `in_array` to true where possible
    - `refactor` Code updates
    - `fix` minor #53073 Set `strict` parameter of `in_array` to true where possible (alexandre-daubois)
    - `perf` [Filesystem][Finder][Form] Use CPP
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Filesystem] Add the readFile() method
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` fix tests on Windows
    - `refactor` Remove unnecessary empty usages
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` update constraint
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `style` Prefix all sprintf() calls
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `docs` Update .gitattributes
    - `test` do not use uniqid() in tests
    - `fix` stop using uniqid() to create temporary files
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `style` CS: clean some whitespaces/indentation
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Allow Symfony ^8.0
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Fix typos
    - `test` run tests using PHPUnit 11.5
    - `refactor` replace PHPUnit annotations with attributes
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `fix` [Filesystem] Unify logic for isAbsolute() in Path
    - `fix` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **symfony/finder**: v6.4.24 → v7.4.0-RC1
    <details>
  <summary>📋 Show 61 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` [Components] Convert to native return types
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` clean up method argument handling
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `docs` DX: re-apply CS
    - `perf` [Filesystem][Finder][Form] Use CPP
    - `chore` chore: CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Remove extra space after full stop.
    - `style` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `docs` Update .gitattributes
    - `fix` Replace `TestCase::assertTrue(true)` with `TestCase::expectNotToPerformAssertions()`
    - `style` Use CPP where possible
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `docs` minor #57795 Use CPP where possible (alexandre-daubois)
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` stop using TestCase::iniSet()
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Remove always true/false occurrences
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `perf` optimize `in_array` calls
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `test` run tests using PHPUnit 11.5
    - `refactor` replace PHPUnit annotations with attributes
    - `fix` Remove some implicit bool type juggling
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `chore` chore(finder): add better type information using phpdoc
    - `fix` don&#039;t use a fixed date fixture when assertions depend on relative times
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `refactor` [Finder] Make method calls explicit in ExcludeDirectoryFilterIterator
  
  </details>
  
- **symfony/http-foundation**: v6.4.24 → v7.4.0-RC1
    <details>
  <summary>📋 Show 66 commits</summary>

    - `test` [HttpFoundation] Fix tests
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [HttpFoundation] Fix RequestTest insulation
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [HttpFoundation] Fix AcceptHeader overwrites items with different parameters
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;5.4&#039; into 6.4
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [HttpFoundation] Fix parsing hosts and schemes in URLs
    - `fix` [HttpFoundation] Fix parsing pathinfo with no leading slash
    - `chore` [HttpFoundation] Deprecate null $format argument to Request::setFormat()
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [HttpFoundation] Allow Request::setFormat() to override predefined formats
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [HttpFoundation] Fix issue where ServerEvent with &quot;0&quot; data is not sent
    - `docs` Use standard MONGODB_URI for test configuration
    - `fix` forbid HTTP method override of GET, HEAD, CONNECT and TRACE
    - `chore` [HttpFoundation] Deprecate HTTP method override for methods GET, HEAD, CONNECT and TRACE
    - `feat` feature #61979 [HttpFoundation] Add `Request::set/getAllowedHttpMethodOverride()` to list which HTTP methods can be overridden (nicolas-grekas)
    - `feat` [HttpFoundation] Add `Request::$allowedHttpMethodOverride` to list which HTTP methods can be overridden
    - `refactor` [HttpFoundation] Make `Request::createFromGlobals()` use `request_parse_body` when possible
    - `chore` [HttpFoundation] Deprecate Request::get() in favor of using properties -&gt;attributes, query or request directly
    - `fix` Fix various typo
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Fix ord()-related PHP 8.5 deprecations
    - `fix` replace HTTP response status code constants with their values
    - `feat` [HttpKernel] Add `#[IsSignatureValid]` attribute
    - `fix` [HttpFoundation] Handle error when directory is a file
    - `chore` chore(http-foundation): add better type information using phpdoc
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` use the empty string instead of null as an array offset
    - `feat` Add global lower bounds to deps on the CI
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` SQLSRV: Change column type from TEXT to STRING
    - `fix` [HttpFoundation] Fix BC Break introduces in `#61267` and structured suffix formats as constant
    - `fix` use PHPUnit&#039;s native expectUserDeprecationMessage() method
    - `fix` Fix low-deps tests
    - `fix` minor #61471 [HttpFoundation] Don’t check suffix on empty MIME type (MatTheCat)
    - `fix` [HttpFoundation] Don’t check suffix on empty MIME type
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` fix session cookie options assertions on PHP 8.5
    - `feat` [HttpFoundation] Add new MIME type mappings to `getMimeTypes()``
    - `feat` [HttpFoundation][HttpKernel][WebProfilerBundle] Add support for the `QUERY` HTTP method
    - `refactor` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `chore` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `chore` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `test` run tests with PHPUnit 12.3
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `fix` Remove some implicit bool type juggling
    - `refactor` replace PHPUnit annotations with attributes
    - `test` run tests using PHPUnit 11.5
    - `fix` fix deprecation message
    - `docs` Simplify UriSigner::verify to use match
    - `perf` optimize `in_array` calls
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
  
  </details>
  
- **symfony/http-kernel**: v6.4.23 → v7.4.0-RC2
    <details>
  <summary>📋 Show 106 commits</summary>

    - `chore` Update VERSION for 7.4.0-RC2
    - `fix` [HttpKernel] Conflict with symfony/flex &lt; 2.10
    - `chore` Bump Symfony version to 7.4.0
    - `chore` Update VERSION for 7.4.0-RC1
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` fix merge
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` bug #62036 [HttpKernel] Fix StreamedResponse with chunks support in HttpKernelBrowser (wuchen90)
    - `fix` [HttpKernel] Fix StreamedResponse with chunks support in HttpKernelBrowser
    - `chore` Bump Symfony version to 7.3.8
    - `chore` Update VERSION for 7.3.7
    - `chore` Bump Symfony version to 7.3.7
    - `chore` Update VERSION for 7.3.6
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [HttpFoundation] Fix parsing hosts and schemes in URLs
    - `chore` Bump Symfony version to 7.4.0
    - `chore` Update VERSION for 7.4.0-BETA2
    - `refactor` [HttpKernel] Make Kernel::getShareDir() nullable
    - `chore` Bump Symfony version to 7.3.6
    - `chore` Update VERSION for 7.3.5
    - `chore` Bump Symfony version to 6.4.28
    - `chore` Update VERSION for 6.4.27
    - `chore` Bump Symfony version to 7.4.0
    - `chore` Update VERSION for 7.4.0-BETA1
    - `feat` [HttpKernel] Add `KernelInterface::getShareDir()`, `APP_SHARE_DIR` and `%kernel.share_dir%` to store application data that are shared between all front-end servers
    - `feat` feature #62027 [DebugBundle][HttpKernel] Collect dumps when console profiling is enabled (HypeMC)
    - `fix` [HttpKernel] Fix FC layer with DI/Config v8
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Console] ensure `SHELL_VERBOSITY` is always restored properly
    - `feat` [HttpKernel][DebugBundle] Collect dumps when console profiling is enabled
    - `chore` [HttpFoundation] Deprecate HTTP method override for methods GET, HEAD, CONNECT and TRACE
    - `chore` [HttpFoundation] Deprecate Request::get() in favor of using properties -&gt;attributes, query or request directly
    - `fix` Ensure branch 7.4 will remain compatible with 8.0 once XML loaders are removed
    - `chore` [DependencyInjection] Deprecate ExtensionInterface::getXsdValidationBasePath() and getNamespace()
    - `chore` Bump Symfony version to 7.3.5
    - `chore` Update VERSION for 7.3.4
    - `chore` Bump Symfony version to 6.4.27
    - `chore` Update VERSION for 6.4.26
    - `fix` [HttpKernel] Remove legacy BC layer
    - `feat` [WebProfilerBundle][HttpKernel] Display runner class in the profiler toolbar
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` bug #61368 [HttpKernel] Refine Vary header check to skip special handling of &#039;Accept-Language&#039; when it&#039;s the only entry and &#039;_vary_by_language&#039; is `true`  in `CacheAttributeListener` (santysisi)
    - `refactor` [HttpKernel] Refine Vary header check to skip special handling of &#039;Accept-Language&#039; when it&#039;s the only entry and &#039;_vary_by_language&#039; is `true` in `CacheAttributeListener`
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` drop the ability to configure a signer with the IsSignatureValid attribute
    - `feat` [HttpKernel] Add `#[IsSignatureValid]` attribute
    - `fix` bug #61518 [HttpKernel] Handle an array vary header in the http cache store for write (philpichet)
    - `feat` [HttpKernel] Handle an array vary header in the http cache store for write
    - `refactor` [HttpKernel] Refine ControllerEvent::getAttributes() and ControllerArgumentsEvent::getAttributes() return types
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `feat` Add global lower bounds to deps on the CI
    - `chore` Bump Symfony version to 7.3.4
    - `chore` Update VERSION for 7.3.3
    - `chore` Bump Symfony version to 6.4.26
    - `chore` Update VERSION for 6.4.25
    - `fix` [DI]: removed unnecessary checks on `Definition`s and `Alias`es
    - `fix` Fix low-deps tests
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` bug #61381 [HttpKernel] #[MapUploadedFile] throws http exception on empty files array if argument not nullable nor has default value (hwawshy)
    - `fix` [HttpKernel] #[MapUploadedFile] throws http exception on empty files array if argument not nullable nor has default value
    - `feat` [HttpFoundation][HttpKernel][WebProfilerBundle] Add support for the `QUERY` HTTP method
    - `refactor` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `refactor` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
    - `chore` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
    - `refactor` [HttpKernel] Deprecate `__sleep/wakeup()` on kernels and data collectors and make `Profile` final
    - `perf` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `chore` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Fix wrong boolean values
    - `refactor` replace PHPUnit annotations with attributes
    - `chore` Bump Symfony version to 7.3.3
    - `chore` Update VERSION for 7.3.2
    - `chore` Bump Symfony version to 6.4.25
    - `test` run tests using PHPUnit 11.5
    - `chore` Update VERSION for 6.4.24
    - `fix` Fix typos
    - `docs` [HttpKernel] Remove outdated phpdoc
    - `docs` [HttpKernel] Update phpdoc description
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Fix various bool-type coercions
    - `refactor` minor #61112 [HttpKernel][Security] Refactor: use `getAttributes` with argument (santysisi)
    - `refactor` [HttpKernel][Security] Refactor: use `getAttributes` with argument
    - `perf` optimize `in_array` calls
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `fix` CS fixes
    - `fix` Various CS fixes
    - `fix` [HttpKernel] Avoid memory leaks cache attribute, profiler listener
    - `chore` Bump Symfony version to 7.3.2
    - `chore` Update VERSION for 7.3.1
    - `chore` Bump Symfony version to 7.2.9
    - `chore` Update VERSION for 7.2.8
    - `chore` Bump Symfony version to 6.4.24
  
  </details>
  
- **symfony/error-handler**: v6.4.23 → v8.0.0-RC1
    <details>
  <summary>📋 Show 151 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `fix` [Lock] 7.0 remove deprecations in Lock Component
    - `refactor` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Do not use hyphens in exception message
    - `docs` Fx README files
    - `fix` Fix typo
    - `docs` DX: re-apply CS
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `refactor` [Dotenv][ErrorHandler][EventDispatcher] Use CPP
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` CS: enable ordered_types.null_adjustment=always_last
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` [HttpKernel] Increase log level to &quot;error&quot; at least for all PHP errors
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` minor #54046 [HttpKernel] Increase log level to &quot;error&quot; at least for all PHP errors (lyrixx)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;7.0&#039; into 7.1
    - `docs` Update the hyphenate character
    - `style` minor #52511 [ErrorHandler] Do not use hyphens in exception message (jkrzefski, javiereguiluz)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `style` Prefix all sprintf() calls
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` chore: CS fixes
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `docs` Update .gitattributes
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `style` Use CPP where possible
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [ErrorHandler] Fix `E_STRICT` logging level
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Fix multiple CS errors
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `style` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `style` Use Stringable whenever possible
    - `docs` minor #58094 Use Stringable whenever possible (fabpot)
    - `docs` CS: re-apply `trailing_comma_in_multiline`
    - `fix` Remove no-op `ReflectionProperty::setAccessible()` calls
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` resolve class constant types when patching return types
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` support non-empty-string/non-empty-list when patching return types
    - `feat` feature #59114 [ErrorHandler] support non-empty-string/non-empty-list when patching return types (xabbuh)
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [ErrorHandler] Add a command to dump static error pages
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `fix` [ErrorHandler] Improve an error message
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `chore` Bump Symfony 8 to PHP &gt;= 8.4
    - `refactor` Remove deadcode after the bump to PHP &gt;= 8.4
    - `feat` [Console] Simplify using invokable commands when the component is used standalone
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` [Console][FrameworkBundle] Remove deprecated `Application::add()` methods
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Fix php.net links
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `docs` Leverage get_error_handler()
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` CS fixes
    - `perf` optimize `in_array` calls
    - `refactor` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Remove legacy code paths that rely on feature checks
    - `fix` [Form][PhpUnitBridge] Remove usage of noop `ReflectionProperty::setAccessible()`
    - `fix` Fix typos
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `test` run tests using PHPUnit 11.5
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `refactor` replace PHPUnit annotations with attributes
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` CS fixes
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Fix merge
    - `fix` Fix merge
    - `fix` Remove some implicit bool type juggling
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` run tests with PHPUnit 12.3
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `perf` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `refactor` Merge branch &#039;7.4&#039; into 8.0
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `docs` [ErrorHandler] Improve PHPDoc precision in SerializerErrorRenderer
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.4&#039; into 8.0
  
  </details>
  
- **symfony/var-dumper**: v6.4.23 → v8.0.0-RC1
    <details>
  <summary>📋 Show 250 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `feat` feature #50404 [7.0] Bump to PHP 8.2 minimum (nicolas-grekas)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` Remove BC layers related to new methods and new parameters
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `refactor` [VarDumper] Revert native return types on DataDumperInterface
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.3&#039; into 6.4
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `breaking` Drop support for Twig 2
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Remove legacy Twig_ namespace support
    - `fix` fix typo
    - `fix` remove not needed method existance check
    - `fix` minor #52755 [VarDumper]  remove not needed method existance check (xabbuh)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` allow Twig 4
    - `refactor` Code updates
    - `feat` [VarDumper] Added default message for dd function
    - `feat` feature #53123 [VarDumper] Added default message for dd function (Shamimul Alam)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Leverage ReflectionFunction::isAnonymous()
    - `docs` DX: re-apply CS
    - `perf` minor #53322 Leverage ReflectionFunction::isAnonymous() (nicolas-grekas)
    - `style` CS: trailing commas
    - `refactor` [Notifier][PropertyInfo][VarDumper] Remove unused code
    - `fix` [VarDumper] Fixes `Typed property Symfony\Component\VarDumper\Dumper\CliDumper::$colors must not be accessed before initialization`
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` [VarDumper] prevent error in value to Typed property must not be accessed before initialization
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [VarDumper] Add support for new DOM extension classes in `DOMCaster`
    - `feat` feature #54320 [VarDumper] Add support for new DOM extension classes in `DOMCaster` (alexandre-daubois)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` adapt namespace changes for new DOM extension classes
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` use constructor property promotion
    - `style` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `feat` Add more precise types in reusable test cases
    - `feat` take the new DOM HTMLElement class into account
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `docs` Update .gitattributes
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` replace uniqid() with random_bytes() to create identifiers
    - `fix` Fix multiple CS errors
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `style` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [PhpUnitBridge][Console][VarDumper] Add support for `FORCE_COLOR` environment variable
    - `feat` feature #57777 [VarDumper] Add support for `FORCE_COLOR` environment variable (artshade)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [HttpClient] Add support for amphp/http-client v5
    - `feat` [VarDumper] Add support for virtual properties
    - `feat` feature #57833 [VarDumper] Add support for virtual properties (alexandre-daubois)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` bump requirement for Twig to 3.12+
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `docs` CS: re-apply `trailing_comma_in_multiline`
    - `feat` allow Twig 4
    - `fix` [VarDumper] Fix `DOMCaster` test dumps
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [VarDumper] Fix dumping `ext-dom` virtual properties
    - `refactor` Remove useless parent method calls in tests
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` relax mock class name matching
    - `fix` minor #58374 Remove useless parent method calls in tests (alexandre-daubois)
    - `fix` revert allowing Twig 4
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [VarDumper] Add caster for AddressInfo objects
    - `feat` [VarDumper] Add caster for Socket instances
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [VarDumper] Add casters for object-converted resources
    - `feat` feature #59035 [VarDumper] Add casters for object-converted resources (alexandre-daubois)
    - `fix` [VarDumper] Fix dumped content type in `CurlCasterTest`
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `chore` chore: PHP CS Fixer fixes
    - `fix` [VarDumper] Don&#039;t make `CurlCasterTest` response status dependant
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `fix` replace expectDeprecation() with expectUserDeprecationMessage()
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `refactor` [VarDumper] Remove unused code
    - `feat` Allow Symfony ^8.0
    - `fix` [VarDumper] Fix tests on PHP 8.4
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Bump Symfony 8 to PHP &gt;= 8.4
    - `refactor` Remove deadcode after the bump to PHP &gt;= 8.4
    - `refactor` Tweak return type declarations and related CI checks
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `feat` Enforce return types on all components
    - `docs` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `feat` [Console] Simplify using invokable commands when the component is used standalone
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` [Console][FrameworkBundle] Remove deprecated `Application::add()` methods
    - `feat` Add support for adding more default castors to `AbstractCloner::addDefaultCasters()`
    - `fix` Fix ResourceCaster deprecation messages
    - `docs` GdImage objects are handled by GdCaster
    - `fix` minor #60810 [VarDumper] Fix ResourceCaster deprecation messages (derrabus)
    - `fix` [VarDumper] Remove deprecated resource casters
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `docs` remove version numbers from @internal annotations
    - `fix` [VarDumper] Remove duplicate default caster for Socket
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `feat` feature #60480 [VarDumper] Add support for adding more default casters to `AbstractCloner::addDefaultCasters()` (lyrixx)
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Various CS fixes
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `fix` [VarDumper] Fix dumping on systems that don&#039;t have a working iconv
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Remove legacy code paths that rely on feature checks
    - `refactor` clean up remaining ExpectUserDeprecationMessageTrait usages
    - `chore` [VarDumper][Serializer] Remove require php 8.2 from tests
    - `feat` Use unique identifier for RequestContextProvider
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `test` run tests using PHPUnit 11.5
    - `fix` Fix tests sensitive to SYMFONY_IDE env var
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `refactor` replace PHPUnit annotations with attributes
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `fix` minor #61299 replace PHPUnit annotations with attributes (xabbuh)
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `style` CS
    - `fix` [VarDumper] Fix dumping objects from the DOM extension
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` run tests with PHPUnit 12.3
    - `test` minor #61390  run tests with PHPUnit 12.3 (xabbuh)
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `chore` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `fix` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `chore`  chore: PHP CS Fixer - update heredoc handling
    - `chore` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `perf` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `refactor` Merge branch &#039;7.4&#039; into 8.0
    - `docs` Use &lt;info&gt; for options in command description
    - `refactor` Merge branch &#039;7.4&#039; into 8.0
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `feat` [VarDumper] Select HtmlDumper only if `Accept` header contains &quot;html&quot;
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` do not coerce NAN to other types
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.4&#039; into 8.0
    - `docs` do not use deprecated PHPUnit features
    - `chore` Merge branch &#039;7.4&#039; into 8.0
    - `fix` [VarDumper] Fix dumping CurlHttpClient instances
    - `fix` bug #62182 [VarDumper] Fix dumping CurlHttpClient instances (nicolas-grekas)
    - `fix` Merge branch &#039;7.4&#039; into 8.0
  
  </details>
  
- **symfony/mailer**: v6.4.23 → v7.4.0-RC1
    <details>
  <summary>📋 Show 179 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` Make some classes final
    - `refactor` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` [Mailer] Remove the Sendinblue bridge
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` [Mailer] Dispatch event for Postmark&#039;s &quot;inactive recipient&quot; API error
    - `docs` Fx README files
    - `feat` [Mailer] Add Azure bridge
    - `fix` Set `strict` parameter of `in_array` to true where possible
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Mailer][Notifier] Simplify transport service registration + sorting
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` add Azure and Resend support to the UnsupportedSchemeException
    - `feat` register the ResendTransportFactory
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` [Mailer] [Smtp] Add DSN param &#039;auto_tls&#039; to disable automatic STARTTLS
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Mailer] Add timestamp to SMTP debug log
    - `feat` feature #53706 [Mailer] Add timestamp to SMTP debug log (bytestream)
    - `refactor` [Mailer] Simplify MailerTestCommand
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` chore: CS fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Mailer] Add support for allowing some users even if `recipients` is defined in `EnvelopeListener`
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` use constructor property promotion
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Mailer] Add mailomat bridge
    - `style` Prefix all sprintf() calls
    - `feat` Add more precise types in reusable test cases
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` feature #57456 [Mailer] Add mailomat bridge (scuben)
    - `docs` Update .gitattributes
    - `fix` Replace `TestCase::assertTrue(true)` with `TestCase::expectNotToPerformAssertions()`
    - `refactor` Remove unused code and unnecessary `else` branches
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `style` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `feat` [Mailer] Implement Postal mailer
    - `feat` feature #57903 [Mailer] Implement Postal mailer (jonasclaes)
    - `feat` Add Sweego Mailer Bridge
    - `fix` Remove no-op `ReflectionProperty::setAccessible()` calls
    - `perf` make test case classes compatible with PHPUnit 10+
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Mailer] add Mailtrap bridge
    - `chore` deprecate the TransportFactoryTestCase
    - `feat` Add new accessors to help determine whether to use the SMTPUTF8 extension
    - `fix` Send SMTPUTF8 if the message needs it and the server supports it.
    - `fix` Fix minor spelling error.
    - `fix` Resolve code review comments from stof and oska
    - `refactor` Remove useless parent method calls in tests
    - `style` Code style conformance and dependency updates.
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `test` get rid of getInvocationCount() calls in tests
    - `fix` minor #58374 Remove useless parent method calls in tests (alexandre-daubois)
    - `refactor` feature #58351 [Mailer] deprecate the TransportFactoryTestCase (xabbuh)
    - `docs` Reinstate the restriction that the sender&#039;s localpart must be all-ASCII.
    - `feat` feature #58361 [Mailer][Mime] Support unicode email addresses (arnt, OskarStark)
    - `fix` Fix typo
    - `perf` [Mailer] use microsecond precision SMTP logging
    - `docs` [Mailer][Notifier] Sweego is backing their bridges, thanks to them!
    - `chore` Proofread UPGRADE guide
    - `feat` Add retry_period option for email transport
    - `refactor` Simplify code
    - `feat` [Mailer] Add AhaSend Bridge
    - `feat` feature #58698 [Mailer] Add AhaSend Bridge (farhadhf)
    - `fix` [Mailer] Fix AhaSend composer name
    - `feat` [Mailer] Add missing retry_period DSN option
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Mailer][Notifier] Add and use `Dsn::getBooleanOption()`
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Mailer] [Smtp] Add DSN option to make SocketStream bind to IPv4
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Mailer] Add configuration for dkim and smime signers
    - `fix` [Mailer] [Smtp] Add DSN param to enforce TLS/STARTTLS
    - `refactor` Refactor S/MIME encrypter to use certificate repository
    - `refactor` replace assertEmpty() with stricter assertions
    - `refactor` feature #59831 [Mailer][Mime] Refactor S/MIME encryption handling in `SMimeEncryptionListener` (Spomky)
    - `feat` [Mailer][TwigBridge] Add support for translatable subject
    - `feat` feature #59967 [Mailer][TwigBridge] Add support for translatable subject (norkunas)
    - `fix` fix compatibility with TwigBridge &lt; 7.3
    - `revert` Revert &quot;fix compatibility with TwigBridge &lt; 7.3&quot;
    - `revert` Revert &quot;[Mailer][TwigBridge] Add support for translatable subject&quot;
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Mailer] [Transport] Allow exception logging for `RoundRobinTransport` mailer
    - `feat` feature #60110 [Mailer] [Transport] Allow exception logging for `RoundRobinTransport` mailer (jnoordsij)
    - `fix` Various CS fixes
    - `fix` CS fixes
    - `fix` Fix @var phpdoc
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Form][PhpUnitBridge] Remove usage of noop `ReflectionProperty::setAccessible()`
    - `test` run tests using PHPUnit 11.5
    - `refactor` replace PHPUnit annotations with attributes
    - `fix` Fix inline var annotations
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Mailer] Add MicrosoftGraph API Transport
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `fix` Remove deprecated calls to deprecated methods of SplObjectStorage
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore`  chore: PHP CS Fixer - update heredoc handling
    - `chore` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `perf` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `fix` Fix low-deps tests
    - `feat` Add global lower bounds to deps on the CI
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Mailer] Fix memory leak with `mailer.message_logger_listener`
    - `fix` bug #60515 [Mailer] Fix memory leak with `mailer.message_logger_listener` (andrew-demb)
    - `docs` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Revert &quot;[Mailer] Fix memory leak with `mailer.message_logger_listener`&quot;
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Mailer] Fix parsing message ids in SMTP responses
    - `fix` [Mailer] Relax regexp to parse message ids
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **doctrine/lexer**: 2.1.1 → 3.0.1
    <details>
  <summary>📋 Show 11 commits</summary>

    - `chore` Remove deprecation layer
    - `chore` Merge pull request #96 from greg0ire/remove-deprecation-layer
    - `refactor` Remove rules related to BC layer
    - `chore` Trigger static analysis workflow on psalm* change
    - `chore` Merge pull request #97 from greg0ire/cleanup-psalm-rules
    - `chore` Merge remote-tracking branch &#039;origin/2.1.x&#039; into 2.1.x-merge-up-into-3.0.x_GyzLhYcQ
    - `chore` Merge pull request #104 from doctrine/2.1.x-merge-up-into-3.0.x_GyzLhYcQ
    - `fix` Drop support for php &lt; 8.1
    - `chore` Merge pull request #80 from greg0ire/php8-syntax
    - `chore` Merge branch &#039;2.1.x&#039; into 3.0.x
    - `chore` PHPUnit 10 (#117)
  
  </details>
  
- **symfony/mime**: v6.4.24 → v7.4.0-RC2
    <details>
  <summary>📋 Show 128 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` [Lock] 7.0 remove deprecations in Lock Component
    - `refactor` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` [7.0] Cleanup legacy code paths
    - `fix` Set `strict` parameter of `in_array` to true where possible
    - `chore` Update .gitattributes
    - `refactor` Code updates
    - `docs` minor #53119 Code updates (javiereguiluz)
    - `fix` minor #53073 Set `strict` parameter of `in_array` to true where possible (alexandre-daubois)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` Use CPP - Mime component
    - `docs` [Mime] Update mime types
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` feat: support custom encoders in mime parts
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` feature #54975 [Mime] Support custom encoders in mime parts (KDederichs)
    - `fix` Fix typo
    - `fix` fix test
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [Mime] Tweak an exception to be more descriptive
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `style` Prefix all sprintf() calls
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `docs` Update .gitattributes
    - `refactor` Remove unused code and unnecessary `else` branches
    - `fix` Fix multiple CS errors
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `style` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `refactor` Remove useless code
    - `fix` minor #57868 Remove useless code (alexandre-daubois)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` remove constructor argument type-hint
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `perf` [Mime] Cache finfo objects to reduce open file handles and optimize perf
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` Add new accessors to help determine whether to use the SMTPUTF8 extension
    - `docs` Update src/Symfony/Component/Mime/Address.php
    - `fix` Resolve code review comments from stof and oska
    - `style` Code style conformance and dependency updates.
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `feat` feature #58361 [Mailer][Mime] Support unicode email addresses (arnt, OskarStark)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Mime] Don&#039;t require passig the encoder name to TextPart
    - `docs` [Mime] Update mime types
    - `chore` chore: fix some typos
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `feat` Allow Symfony ^8.0
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `test` run tests using PHPUnit 11.5
    - `refactor` replace PHPUnit annotations with attributes
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `chore` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `refactor` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `fix` use the empty string instead of null as an array offset
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Fix ord()-related PHP 8.5 deprecations
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Mime] Remove unused  variable in Email::prepareParts
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `docs` [Mime] Update mime types
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **symfony/routing**: v6.4.24 → v7.4.0-RC2
    <details>
  <summary>📋 Show 184 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` Remove BC layers related to new methods and new parameters
    - `refactor` [7.0] Remove remaining deprecated code paths
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `refactor` [Routing] Revert native return types on AnnotationClassLoader
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` [Routing] Remove Doctrine annotations support
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` feature #51082 [Routing] Remove Doctrine annotations support (derrabus)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `fix` Fix requiring symfony/deprecation-contracts in symfony/routing
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` [FrameworkBundle][Routing] Remove remaining deprecations
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` [7.0] Cleanup legacy code paths
    - `fix` [Routing] Fix requiring symfony/deprecation-contracts
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` minor #52176 [Routing] Fix requiring symfony/deprecation-contracts (fancyweb)
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` [7.0] minor cleanup
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `docs` Fx README files
    - `fix` Set `strict` parameter of `in_array` to true where possible
    - `test` [Tests] Streamline
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `style` CS: trailing commas
    - `docs` [FrameworkBundle][RemoteEvent][Routing][Scheduler] Add PHPDoc to attributes properties
    - `fix` Fix AttributeClassLoaderTestCase   + Added -&gt;setUp()   - Removed &#039;abstract&#039; so it&#039;d be picked up by Tests.   * Changed getNamespace() to full path Qualified Name.   * Rename file AttributeClassLoaderTestCase to AttributeClassLoaderTest and the class.
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `docs` minor #51996 [FrameworkBundle][RemoteEvent][Routing][Scheduler] Add PHPDoc to attributes properties (alexandre-daubois)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;7.0&#039; into 7.1
    - `refactor` refactor(routing): use constructor property promotion
    - `refactor` minor #54290 [Routing] Use constructor property promotion (PierreCapel)
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `feat` [Routing] Add `{foo:bar}` syntax to define a mapping between a route parameter and its corresponding request attribute
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` gracefully handle cases when no resolver is set
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `style` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `feat` Add return type to __toString() methods
    - `fix` Remove useless uniqid in tempnam calls
    - `fix` [Router] Remove dead is_object() check
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `docs` Update .gitattributes
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `docs` [PhpUnitBridge] Add ExpectUserDeprecationMessageTrait
    - `style` Use CPP where possible
    - `feat` feature #54593 [PhpUnitBridge] Add `ExpectUserDeprecationMessageTrait` (derrabus)
    - `test` [Routing] Add tests for `Requirement::UUID_V7` &amp; `UuidV8`
    - `refactor` Remove unused code and unnecessary `else` branches
    - `fix` minor #57897 Remove unused code and unnecessary `else` branches (alexandre-daubois)
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `style` minor #57901 Code style change in ``@PER`-CS2.0` affecting ``@Symfony`` (parentheses for anonymous classes) (bonroyage)
    - `refactor` Remove useless code
    - `fix` minor #57868 Remove useless code (alexandre-daubois)
    - `style` Use Stringable whenever possible
    - `docs` minor #58094 Use Stringable whenever possible (fabpot)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `docs` CS: re-apply `trailing_comma_in_multiline`
    - `feat` [Routing] Add the `Requirement::UID_RFC9562` constant
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Remove calls to getExpectedException()
    - `refactor` Remove useless parent method calls in tests
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` minor #58374 Remove useless parent method calls in tests (alexandre-daubois)
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `docs` Make `@var` occurrences consistent
    - `fix` Various CS fix for consistency
    - `refactor` [Routing] Rename annotations to attribute in `AttributeClassLoader`
    - `refactor` [DependencyInjection][Routing][HttpClient] Reject URIs that contain invalid characters
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `style` CS: re-apply trailing_comma_in_multiline
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `feat` [Routing] Validate &quot;namespace&quot; (when using `Psr4DirectoryLoader`)
    - `feat` minor #59189 [Routing] Validate &quot;namespace&quot; (when using `Psr4DirectoryLoader`) (Kocal)
    - `fix` fix test method parameter names
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Routing] Allow aliases in `#[Route]` attribute
    - `feat` feature #58819 [Routing] Allow aliases in `#[Route]` attribute (damienfern)
    - `feat` [Routing] Add MONGODB_ID regex to requirement patterns
    - `feat` [Routing] Add alias in `{foo:bar}` syntax in route parameter
    - `feat` feature #59904 [Routing] Add alias in `{foo:bar}` syntax in route parameter (eltharin)
    - `fix` [Routing] Fix inline default `null`
    - `feat` Allow query-specific parameters in URL generator using `_query`
    - `feat` Allow Symfony ^8.0
    - `feat` feature #60508 [Routing] Allow query-specific parameters in `UrlGenerator` using `_query` (BenMorel)
    - `fix` replace expectDeprecation() with expectUserDeprecationMessage()
    - `fix` Various CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `perf` optimize `in_array` calls
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Fix typos
    - `test` run tests using PHPUnit 11.5
    - `refactor` replace PHPUnit annotations with attributes
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` run tests with PHPUnit 12.3
    - `chore` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `perf` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `feat` [Routing] allow setting multiple envs in `#[Route]` attribute
    - `feat` [Routing] Add possibility to create a request context with parameters directly
    - `feat` feature #60120 [Routing] Add possibility to create a request context with parameters directly (alexander-schranz)
    - `docs` Minor tweaks
    - `fix` [ROUTING] Fix Typo in CHANGELOG.md
    - `docs` [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files
    - `refactor` [Routing][Serializer] Deprecate annotation aliases and getters and setters in favor of public properties on attributes
    - `feat` [Routing][FrameworkBundle] Auto-register routes from attributes found on controller services
    - `feat` feature #61282 [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files (nicolas-grekas)
    - `feat` feature #61492 [FrameworkBundle][Routing] Auto-register routes from attributes found on controller services (nicolas-grekas)
    - `refactor` make RoutingControllerPass and AttributeServicesLoader final
    - `fix` [Routing] Don&#039;t rebuild cache when controller action body changes
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Remove needless calls to defined()
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` do not use deprecated PHPUnit features
    - `chore` [DependencyInjection][Config][Routing] Deprecate using `$this` or the internal scope of the loader from PHP config files
    - `docs` [DependencyInjection][Routing] Handle declaring services and routes using PHP arrays that follow the same shape as corresponding yaml files
    - `chore` [DependencyInjection][Routing] Deprecate XML configuration format
    - `fix` Ensure branch 7.4 will remain compatible with 8.0 once XML loaders are removed
    - `feat` [DependencyInjection][Routing] Define array-shapes to help writing PHP configs using yaml-like arrays
    - `fix` [DependencyInjection][Routing] Fix nested config imports when returning PHP arrays
    - `feat` [Routing] Allow when@env inside `new RoutesConfig()` trees
    - `feat` [FrameworkBundle] Auto-generate `config/reference.php` to assist in writing and discovering app&#039;s configuration
    - `docs` [Routing] Indicate type of rejected object in CompiledUrlMatcherDumper
    - `docs` clean up legacy groups in tests
    - `fix` [Routing] Fix matching the &quot;0&quot; URL
    - `refactor` [Routing] Simplify importing routes defined on controller services
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Routing] Fix default value not taken if usigng name:entity.attribute
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `docs` [Routing] Align routing.schema.json with YamlFileLoader behavior
  
  </details>
  
- **symfony/serializer**: v6.4.24 → v7.4.0-RC1
    <details>
  <summary>📋 Show 84 commits</summary>

    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `feat` ObjectNormalizer: allow null and scalar
    - `fix` bug #62007 [Serializer] fix inherited properties normalization (Link1515)
    - `fix` [Serializer] fix Inherited properties normalization
    - `fix` [Serializer] Fix BackedEnumNormalizer behavior with partial denormalization
    - `fix` [Serializer] Use Asia/Tokyo instead of Japan in tests
    - `feat` [Serializer] Allow forcing timezone in `DateTimeNormalizer` during denormalization
    - `refactor` Move readonly keyword from class to properties
    - `fix` minor #61951 [Serializer] Escape values starting with line feed when using `csv_escape_formulas` (Peter Mead)
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` fix unexpected type in denormalization errors when union type used in constructor in xml
    - `fix` [Serializer] CsvEncoder to escape values starting with line feed when escape formulas is enabled
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` bug #61887 [Serializer] Fix discriminator class mapping with allow_extra_attributes=false
    - `docs` do not use deprecated PHPUnit features
    - `feat` [Serializer] xml empty array encoding
    - `fix` Fix various typo
    - `feat` [Serializer] Add `XmlEncoder::PRESERVE_NUMERIC_KEYS` context option
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Serializer] Fix unknown type in denormalization errors when union type used in constructor
    - `feat` minor #61279 [Serializer] Allows to instantiate property when creating a `NotNormalizableValueException` (VincentLanglet)
    - `feat` [Serializer] Allows to instantiate property when creating a `NotNormalizableValueException`
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `refactor` Replace __sleep/wakeup() by __(un)serialize() for throwing and internal usages
    - `feat` feature #61563 [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class (nicolas-grekas)
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `feat` [Serializer] add correct psalm and phpstan return types for `DenormalizerInterface`
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` minor #61662  use the empty string instead of null as an array offset (xabbuh)
    - `fix` use the empty string instead of null as an array offset
    - `fix` [Serializer] Adjust ObjectNormalizerTest for the accessor method changes from #61097
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `feat` [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class
    - `feat` [Serializer] Allow using attributes to declare compile-time serialization metadata
    - `fix` [Serializer] Fix normalizing objects with accessors having the same name as a property
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` bug #61571 [Serializer] Fix dealing with asymmetric visilibity for properties (santysisi)
    - `fix` [Serializer] Fix serializer crash due to asymmetric visibility on `protected(set)` properties
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `fix` fix tests
    - `feat` [Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Validator] Skip tests using unavailable timezone on the local host
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Serializer] Don&#039;t fallback to default serializer if tags specify a named one
    - `refactor` [Routing][Serializer] Deprecate annotation aliases and getters and setters in favor of public properties on attributes
    - `fix` minor #61438 [Serializer] Replace Japan timezone with Asia/Tokyo (mttsch)
    - `fix` [Serializer] Replace Japan timezone with Asia/Tokyo
    - `refactor` [Validator][Serializer] Make internal properties private
    - `chore` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
    - `refactor` [Serializer] Make `AttributeMetadata` and `ClassMetadata` final
    - `perf` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `chore` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `chore`  chore: PHP CS Fixer - update heredoc handling
    - `chore` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `fix` CS fixes
    - `refactor` replace PHPUnit annotations with attributes
    - `test` run tests using PHPUnit 11.5
    - `docs` [Serializer] Make data provider return type match its PHPDoc
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` bug #60296 [Serializer] Handle invalid mapping type property type (KorvinSzanto)
    - `fix` [Serializer] Handle invalid mapping type property type
    - `docs` [Serializer] Add missing CHANGELOG entry
    - `feat` feature #60355 [Serializer] Add `CDATA_WRAPPING_NAME_PATTERN` support to `XmlEncoder` (Maximilian Ruta)
    - `fix` Fix typos
    - `feat` [Serializer] Add CDATA_WRAPPING_NAME_PATTERN support to XmlEncoder
    - `chore` [VarDumper][Serializer] Remove require php 8.2 from tests
    - `feat` feature #61023 [Serializer] add `can` to the accessor prefixes recognized by the `AttributeLoader` (Mark Schmale)
    - `feat` [Serializer] add `can` to the accessor prefixes recognized by the `AttributeLoader`
    - `perf` optimize `in_array` calls
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
  
  </details>
  
- **symfony/validator**: v6.4.23 → v7.4.0-RC1
    <details>
  <summary>📋 Show 198 commits</summary>

    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Remove review state for Belarusian translations (entries 141 and 142)
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Validator] Reviewed and corrected Belarussian translations for the Validator component in the validators.be.xlf file
    - `fix` fix merge
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Validator] Fix call to undefined getParser() in YamlValidator
    - `docs` [Validator] Correct PHPDoc for Collection constructor
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` Reviewed translations
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Update regular expression in URL validator
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `fix` sync nb translations with no translations
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` fix: added new indonesian translations
    - `fix` Fix Norwegian translations - remove needs-review-translation status
    - `docs` minor #62021 [Translation][sv] Remove needs-review on Swedish strings; align phras… (Billy110984)
    - `fix` Update Luxembourgish translations by removing &#039;needs-review-translation&#039; state from multiple entries in security and validator files.
    - `docs` Improve Russian translations for video and image validators
    - `fix` [Validator] it: approve video/image/Twig translations and fix spacing (refs #60464)
    - `docs` [Translation][sv] Remove needs-review on Swedish strings; align phrasing and punctuation
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` issue fix #59412 catalan translation
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `docs` Issue #51941 galician translation
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` bug #61926 [Validator] fix handling Doctrine-style options handling (xabbuh)
    - `fix` minor #61937  Validator: finalize pt translations for video/image (ids 122–142); se… (benkarrer-lab)
    - `feat` Validator: finalize pt translations for video/image (ids 122–142); set state=translated; unify wording
    - `fix` [Translation] Update Danish (da) translations - Remove needs-review-translation state from validated translations in security.da.xlf and validators.da.xlf
    - `fix` fix handling Doctrine-style options handling
    - `fix` bug #61909 [Validator] bad value on AbstractComparison constructor using array parameter (vincent4vx)
    - `fix` [Validator] bad value on AbstractComparison constructor using array parameter
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` minor #61871 [Validator] Improve and complete Japanese translations (GK-302)
    - `docs` [Validator] Improve and complete Japanese translations
    - `fix` [Validator] Fix Polish translation for word count validation message
    - `fix` [Validator] Review and fix Czech translation
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` do not coerce NAN to other types
    - `chore` deprecate passing an associative array to GroupSequence
    - `feat` feature #61791 [Validator] deprecate implicit constraint option names in YAML/XML mapping files (xabbuh)
    - `docs` deprecate implicit constraint option names in YAML/XML mapping files
    - `feat` allow protocols to be passed as a string
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` [Validator] Reviewed and corrected Ukrainian translations for the Val…
    - `docs` Remove useless comments
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Validator] Add option to allow ANY protocol in Assert\Url constraint
    - `docs` [Validator] Expression constraint docblock incorrectly states default value for negate
    - `docs` Merge branch &#039;7.3&#039; into 7.4
    - `docs` Merge branch &#039;6.4&#039; into 7.3
    - `docs` Update Arabic translations for video and image validation messages, native translations
    - `feat` feature #61545 [Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class (nicolas-grekas)
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` minor #61704 [Validator] Review Slovak translations (fbuchlak)
    - `docs` [Validator] Review Slovak translations
    - `docs` minor #61700 [Validator] Review Romanian translations (Florin1)
    - `fix` restore translation source entries
    - `docs` [Validator] Review Romanian translations
    - `feat` Use `&gt;=` operator in `#[RequiresPhp]` attributes to allow compatible versions
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` [Validator] Review Albanian translations
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` minor #61670 [Validator] Review Turkish translations (invalid-email-address)
    - `docs` [Validator] Review Turkish translations
    - `docs` [Validator] Review Croatian translations
    - `docs` [Validator] Review translations for Polish (pl)
    - `docs` Review translations for Chinese (zh_TW)
    - `docs` Merge branch &#039;7.3&#039; into 7.4
    - `docs` Merge branch &#039;6.4&#039; into 7.3
    - `docs` minor #61648 [Validator] review the French translations (lyrixx)
    - `docs` [Validator] updated Dutch translations
    - `refactor` [DependencyInjection][Validator] Remove needless code
    - `docs` [Validator] review the French translations
    - `fix` fix tests
    - `docs` review the German translations
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` fall back to legacy options handling if configured named arguments do not match
    - `feat` [Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class
    - `feat` [Validator] Allow using attributes to declare compile-time constraint metadata
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` minor #61591 [Validator] Update translation for the Video constraint (nicolas-grekas)
    - `feat` [Validator] Add the Video constraint for validating video files
    - `refactor` refactor: Unify &amp; more humane translation message
    - `fix` fix Resources translations validators.pt.xlf
    - `feat` [Validator] Update translation for the Video constraint
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;6.4&#039; into 7.3
    - `docs` [Validator] Update Romanian translations
    - `feat` [Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files
    - `fix` [DI]: removed unnecessary checks on `Definition`s and `Alias`es
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` [Validator] Skip tests using unavailable timezone on the local host
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` [Security][Validator] Review translations.
    - `fix` Fix low-deps tests
    - `refactor` [Validator][Serializer] Make internal properties private
    - `perf` [Validator] Optimize serialized metadata and cleanup tests
    - `refactor` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `refactor` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
    - `refactor` More cleanups related to internal sleep/wakeup usages
    - `chore` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `chore`  chore: PHP CS Fixer - update heredoc handling
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `refactor` Remove calls to no-op functions, deprecated in PHP 8.5
    - `fix` Fix tests
    - `chore` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `test` minor #61390  run tests with PHPUnit 12.3 (xabbuh)
    - `test` run tests with PHPUnit 12.3
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `docs` [Validator] (60455) Validate translations for Arabic (ar)
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` (60474) Remove translation state attribute for Twig template validator in Ukrainian translation
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Fix wrong boolean values
    - `fix` CS fixes
    - `fix` minor #61299 replace PHPUnit annotations with attributes (xabbuh)
    - `refactor` replace PHPUnit annotations with attributes
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `docs` Merge branch &#039;6.4&#039; into 7.3
    - `docs` minor #61283 [Validator] Review Persian translation for Twig template (MMMahmoodian)
    - `test` run tests using PHPUnit 11.5
    - `feat` feature #61255 [Validator] deprecate passing choices as `$options` argument to `Choice` constraint (xabbuh)
    - `chore` deprecate passing choices as $options argument to Choice constraint
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `feat` [Validator] Add Japanese translation for Twig template validator
    - `docs` [Validator] review Persian translation for Twig template
    - `feat` feature #60805 [Validator] Add `min` and `max` in both error messages of `LengthValidator` (VincentLanglet)
    - `feat` [Validator] Add `min` and `max` in both error messages of `LengthValidator`
    - `docs` remove docblocks for deprecated argument types
    - `fix` fix detecting missing required options
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` fix CS
    - `fix` error if the fields option is missing for the Collection constraint
    - `fix` fix merge
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `test` remove an invalid test
    - `fix` minor #61103 Fix various bool-type coercions (Girgias)
    - `fix` Fix various bool-type coercions
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `docs` mark getRequiredOptions()/getDefaultOption() of UniqueEntity as deprecated
    - `fix` bug #61117 [Validator] fix handling required options (xabbuh)
    - `perf` optimize `in_array` calls
    - `fix` fix handling required options
    - `fix` bug #61106 Fix `@var` phpdoc (fabpot)
    - `fix` Fix @var phpdoc
    - `fix` Fixed validator translations for Albanian
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `fix` CS fixes
    - `chore` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` fix BC layer for Expression constraint from options array
    - `fix` [Validator] Add missing Polish plural form for filename length validator
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Various CS fixes
    - `feat` Allow mixed root on CompoundConstraintTestCase validator
    - `feat` feature #60801 [Validator] deprecate handling options in the base Constraint class (xabbuh)
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `refactor` deprecate handling options in the base Constraint class
    - `chore` chore: Increase minimum version of type-info component
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` fix merge
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;6.4&#039; into 7.2
  
  </details>
  
- **symfony/polyfill-php83**: v1.31.0 → v1.33.0
    <details>
  <summary>📋 Show 1 commits</summary>

    - `fix` Fix json_validate edge case
  
  </details>
  
- **symfony/translation-contracts**: v3.5.1 → v3.6.1
    <details>
  <summary>📋 Show 9 commits</summary>

    - `style` Prefix all sprintf() calls
    - `style` Code style change in `@PER-CS2.0` affecting `@Symfony` (parentheses for anonymous classes)
    - `perf` make test case classes compatible with PHPUnit 10+
    - `test` Miscellaneous tests improvements
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `test` minor #58303 Miscellaneous tests improvements (alexandre-daubois)
    - `fix` CS fixes
    - `fix` [Translation] fix support of `TranslatableInterface` in `IdentityTranslator`
    - `fix` Merge branch &#039;6.4&#039; into 7.2
  
  </details>
  
- **symfony/process**: v6.4.24 → v7.4.0-RC1
    <details>
  <summary>📋 Show 111 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Components] Convert to native return types
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `feat` Add types to public and protected properties
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Process] Pass the commandline as array to `proc_open()`
    - `feat` minor #52409 [Process] Pass the commandline as array to `proc_open()` (ausi)
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `test` [Tests] Streamline
    - `test` minor #52402 [Tests] Streamline (OskarStark)
    - `feat` CS: enable ordered_types.null_adjustment=always_last
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` chore: CS fixes
    - `feat` feat(process): allow to ignore signals when executing a process
    - `fix` fix(process): don&#039;t call sigprocmask if there is no ignored signals
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `feat` use constructor property promotion
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` [Process] `ExecutableFinder::addSuffix()` has no effect
    - `style` Prefix all sprintf() calls
    - `fix` [Lock][Process] Replace `strtok` calls
    - `docs` Update .gitattributes
    - `fix` Fix ProcessTest - testIgnoringSignal for local
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` replace uniqid() with random_bytes() to create identifiers
    - `fix` [Process] Fix backwards compatibility for invalid commands
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Process] Add Laravel Herd php detection path
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `refactor` Make more data providers static
    - `refactor` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Remove unused imports
    - `fix` [Process] On Windows, don&#039;t rely on the OS to find executables
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` minor #58710 [Process] On Windows, don&#039;t rely on the OS to find executables (nicolas-grekas)
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` chore: PHP CS Fixer fixes
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `chore` skip transient test on GitHub Actions
    - `chore` skip transient test on GitHub Actions
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Messenger][Process] add `fromShellCommandline` to `RunProcessMessage`
    - `refactor` replace assertEmpty() with stricter assertions
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `docs` [Process] Narrow `PhpExecutableFinder` return types
    - `feat` [Process] Improve typing for process callback
    - `test` run tests using PHPUnit 11.5
    - `refactor` replace PHPUnit annotations with attributes
    - `fix` Fix wrong boolean values
    - `perf` run tests with PHPUnit 12.1 on PHP &gt;= 8.3
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` Remove some implicit bool type juggling
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `chore` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `docs` [Process] Enhance hasSystemCallBeenInterrupted function for non-english locale
    - `perf` Replace __sleep/wakeup() by __(un)serialize() when BC isn&#039;t a concern
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` Add missing return type for docblock Closure
  
  </details>
  
- **symfony/polyfill-iconv**: v1.31.0 → v1.33.0
    <details>
  <summary>📋 Show 1 commits</summary>

    - `fix` Various fixes and removed deprecations
  
  </details>
  
- **symfony/yaml**: v6.4.24 → v7.4.0-RC2
    <details>
  <summary>📋 Show 98 commits</summary>

    - `chore` [7.0] Bump to PHP 8.2 minimum
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` [7.0] Remove remaining deprecated code paths
    - `feat` [Components] Convert to native return types
    - `docs` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `feat` [Yaml] Allow Yaml component to get all the enum cases
    - `refactor` Code updates
    - `test` [Tests] Streamline
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `docs` dump enums with the !php/enum tag
    - `feat` feature #52230 [Yaml] Allow to get all the enum cases (phansys)
    - `feat` use constructor property promotion
    - `refactor` Remove unnecessary empty usages
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `fix` [Yaml] Throw on duplicate key even when value is NULL
    - `feat` Add more precise types for the Yaml flags
    - `style` Prefix all sprintf() calls
    - `fix` [Yaml] Fix typo in changelog
    - `docs` Unify how --format is handle by commands
    - `feat` feature #57518 Unify how --format is handled by commands (fabpot)
    - `fix` Deprecate duplicate mapping keys containing null
    - `docs` Update .gitattributes
    - `docs` [PhpUnitBridge] Add ExpectUserDeprecationMessageTrait
    - `fix` Fix multiple CS errors
    - `refactor` Remove useless code
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `feat` [Yaml] Use CPP in `Dumper`
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Remove always true/false occurrences
    - `feat` [Yaml] Add support for dumping `null` as an empty value by using the `Yaml::DUMP_NULL_AS_EMPTY` flag
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `feat` feature #58243 [Yaml] Add support for dumping `null` as an empty value by using the `Yaml::DUMP_NULL_AS_EMPTY` flag (alexandre-daubois)
    - `feat` [Yaml] Add compact nested mapping support to `Dumper`
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `chore` chore: PHP CS Fixer fixes
    - `chore` chore: PHP CS Fixer fixes
    - `fix` [Yaml] Yaml::DUMP_COMPACT_NESTED_MAPPING does not apply when dumping sequences
    - `fix` bug #59671 [Yaml] Yaml::DUMP_COMPACT_NESTED_MAPPING does not apply when dumping sequences (xabbuh)
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `feat` [Yaml] Add the `Yaml::DUMP_FORCE_DOUBLE_QUOTES_ON_VALUES` flag to enforce double quotes around string values
    - `chore` chore: PHP CS Fixer fixes
    - `feat` feature #59880 [Yaml] Add the `Yaml::DUMP_FORCE_DOUBLE_QUOTES_ON_VALUES` flag to enforce double quotes around string values (dkarlovi)
    - `refactor` make data provider static
    - `refactor` Merge branch &#039;6.4&#039; into 7.2
    - `refactor` Merge branch &#039;7.2&#039; into 7.3
    - `feat` Allow Symfony ^8.0
    - `fix` Merge branch &#039;6.4&#039; into 7.2
    - `fix` Merge branch &#039;7.2&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `feat` [Console] Simplify using invokable commands when the component is used standalone
    - `fix` Various CS fixes
    - `chore` Merge branch &#039;6.4&#039; into 7.2
    - `chore` Merge branch &#039;7.2&#039; into 7.3
    - `perf` optimize `in_array` calls
    - `fix` Fix typos
    - `test` run tests using PHPUnit 11.5
    - `refactor` replace PHPUnit annotations with attributes
    - `style` [Yaml] Fix code style
    - `chore` chore: heredoc indentation as of PHP 7.3
    - `test` run tests with PHPUnit 12.3
    - `test` minor #61390  run tests with PHPUnit 12.3 (xabbuh)
    - `chore` minor #61373  chore: PHP CS Fixer - heredoc indentation as of PHP 7.3 (keradus)
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `chore` minor #61371  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets (keradus)
    - `chore`  chore: PHP CS Fixer - update heredoc handling
    - `chore` minor #61372  chore: PHP CS Fixer - update heredoc handling (keradus)
    - `refactor` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
    - `fix` [Yaml] Fix scope resolution operator in flow mapping keys
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` don&#039;t cast strings exceeding the min/max int ranges
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` [Yaml] Fix parsing of unquoted multiline scalars with comments or blank lines
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `docs` [Yaml] Align unquoted multiline scalar parsing with spec for comments
    - `fix` Merge branch &#039;6.4&#039; into 7.3
    - `fix` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **twig/twig**: v3.20.0 → v3.22.0
    <details>
  <summary>📋 Show 155 commits</summary>

    - `chore` Bump version
    - `chore` Bump version to 3.21
    - `feat` Introduce operator classes to describe operators provided by extensions instead of arrays
    - `refactor` Extract operators logic from ExpressionParser to their own classes
    - `feat` Add a script to update operator precedence documentation
    - `refactor` Move Operators to ExpressionParsers, deprecate ExpressionParser
    - `feat` Add deprecation notices in CHANGELOG and docs
    - `fix` Fix precedence rules
    - `feat` Use generics in ExpressionParsers
    - `refactor` Remove obsolete code
    - `fix` Fix CS
    - `fix` Fix version
    - `feat` feature #4543 Move operator definitions to objects (fabpot)
    - `fix` Fix cache-extra impl
    - `fix` bug #4579 Fix cache-extra impl (fabpot)
    - `refactor` Avoid storing expression parser instances in Node attributes
    - `fix` Fix docs
    - `fix` minor #4578 Avoid storing expression parser instances in Node attributes (fabpot)
    - `feat` Add a proper prefix spread operator
    - `feat` feature #4580 Add a proper prefix spread operator (fabpot)
    - `fix` Fix CS
    - `fix` minor #4581 Fix CS (fabpot)
    - `feat` re-add mixed return type
    - `fix` minor #4582 re-add mixed return type (xabbuh)
    - `fix` fix the rst syntax of the operator precedence table
    - `fix` minor #4584 fix the rst syntax of the operator precedence table (xabbuh)
    - `fix` fix typo
    - `fix` minor #4587 fix typo (xabbuh)
    - `perf` Make `in_array()` calls strict
    - `docs` Make the defined test implementation more generic
    - `fix` Simplify Error implementation
    - `fix` minor #4592 Simplify Error implementation (fabpot)
    - `feat` feature #4590 Make the defined test implementation more generic (fabpot)
    - `fix` Fix testing and expression when it evaluates to an instance of Markup
    - `fix` feature #4591 Fix testing and expression when it evaluates to an instance of Markup (fabpot)
    - `fix` minor #4589 Make `in_array()` calls strict (alexandre-daubois)
    - `fix` Remove $templateName from Template::loadTemplate()
    - `refactor` Simplify code
    - `fix` Simplify Error
    - `refactor` minor #4593 Simplify code (fabpot)
    - `fix` minor #4594 Simplify Error (smnandre)
    - `fix` Improve error reporting
    - `fix` bug #4583 Remove template source from Template::loadTemplate() (fabpot)
    - `fix` bug #4595 Improve error reporting (fabpot)
    - `fix` Sync Error file and line
    - `fix` bug #4598 Sync Error file and line (fabpot)
    - `fix` Fix Error when the trace has Twig file/line information instead of the original PHP info
    - `fix` bug #4599 Fix Error when the trace has Twig file/line information instead of the original PHP info (fabpot)
    - `test` Move some tests
    - `test` minor #4600 Move some tests (fabpot)
    - `chore` Remove obsolete files
    - `docs` Remove obsolete comment
    - `refactor` remove not needed code
    - `docs` Improve docs on creating new tags
    - `docs` minor #4601 Improve docs on creating new tags (fabpot)
    - `docs` Tweak Sandbox docs
    - `feat` Add tests
    - `refactor` Simplify code
    - `fix` minor #4603 remove not needed code (xabbuh, fabpot)
    - `fix` Avoid polluting ModuleNode::toString() with embedded templates
    - `fix` minor #4604 Avoid polluting ModuleNode::toString() with embedded templates (fabpot)
    - `feat` Add missing @deprecated tag
    - `fix` reduce the number of deprecations being triggered
    - `docs` merge the Nodes and Node sections
    - `fix` minor #4606 merge the Nodes and Node sections (xabbuh)
    - `fix` minor #4605 reduce the number of deprecations being triggered (xabbuh)
    - `fix` Fix `ModuleNode` instanciation when `$embeddedTemplates` is null
    - `fix` minor #4607 Fix `ModuleNode` instanciation when `$embeddedTemplates` is null (alexandre-daubois)
    - `refactor` use EmptyNode instead of an Nodes instance without children
    - `fix` minor #4608 use EmptyNode instead of an Nodes instance without children (xabbuh)
    - `docs` Use `:` instead of `=` for named argument in the docs
    - `docs` minor #4610 Use `:` instead of `=` for named argument in the docs (jdreesen)
    - `docs` Update html_cva.rst
    - `fix` fix: deprecated documentation
    - `docs` minor #4615 fix: deprecated documentation (Garfield-fr)
    - `docs` [Docs] Replace `=` by `:` in code examples
    - `docs` [Doc] Fix `code-block` in html_cva
    - `fix` fix: update extension references in docs to use backticks
    - `fix` minor #4618 fix: update extension references in docs to use backticks (smnandre)
    - `docs` minor #4617 [Doc] Fix `code-block` in html_cva (smnandre)
    - `docs` minor #4616 [Docs] Replace `=` by `:` in code examples (smnandre)
    - `fix` Fix wrong array index (again)
    - `fix` bug #4619 Fix wrong array index (again) (fabpot)
    - `feat` Create attributes `AsTwigFilter`, `AsTwigFunction` and `AsTwigTest` to ease extension development
    - `feat` feature #3916 Create attributes `AsTwigFilter`, `AsTwigFunction` and `AsTwigTest` to ease extension development (GromNaN)
    - `docs` Update CHANGELOG
    - `docs` minor #4621 Update CHANGELOG (andreybolonin)
    - `docs` minor #4613 Update html_cva.rst (seb-jean)
    - `docs` Tweaks html_cva docs
    - `docs` minor #4626 Tweaks html_cva docs (fabpot)
    - `chore` Prepare the 3.21.0 release
    - `chore` Bump version
    - `fix` Fix instantiation
    - `fix` Fix warning
    - `fix` bug #4633 Fix ExtensionSet usage of BinaryOperatorExpressionParser (VincentLanglet)
    - `docs` Update CHANGELOG
    - `chore` Prepare the 3.21.1 release
    - `chore` Bump version
    - `docs` Update reduce.rst
    - `feat` Add TwigCsFixer in tools list
    - `docs` minor #4639 [Docs] Add TwigCsFixer in tools list (smnandre)
    - `docs` replace typographic quote with straigt single quote
    - `fix` minor #4640 replace typographic quote with straigt single quote (xabbuh)
    - `docs` minor #4638 Update reduce.rst (AndCycle)
    - `feat` Update configuration keys + allow extra keys for extensions
    - `feat` feature #4642 [CommonMark] Update configuration keys + allow extra keys for extensions (doekenorg)
    - `docs` Update templates.rst: Removing duplication
    - `fix` minor #4645 Update templates.rst: Removing duplication (ThomasLandauer)
    - `docs` Stof suggestion about empty content
    - `docs` minor #4649 Coding standard suggestion about empty content (VincentLanglet)
    - `docs` Update LeagueMarkdown.php
    - `feat` Add documentation for use_yield option
    - `docs` minor #4660 Add documentation for use_yield option (hschletz)
    - `fix` Fix compatibility with Symfony 8
    - `fix` bug #4665 Fix compatibility with Symfony 8 (nicolas-grekas)
    - `perf` Escaper performance: avoid static variables
    - `perf` minor #4663 Escaper performance: avoid static variables (gharlan)
    - `feat` Enable Fabbot as a GHA
    - `fix` CS fixes
    - `fix` minor #4664 CS fixes (nicolas-grekas)
    - `fix` minor #4671 Enable Fabbot as a GHA (nicolas-grekas)
    - `fix` bug #4653 Allow usage of other Markdown converters than CommonMark in LeagueMarkdown (xJuvi)
    - `docs` #4677: Add use statements for classes referenced in the getOperators @psalm-return doc
    - `fix` Fix wrong rounding_mode values
    - `fix` minor #4682 Fix wrong rounding_mode documentation (bodendorfer-simplethings)
    - `fix` minor #4678 Add missing use statements in ExtensionInterface (KevinVanSonsbeek)
    - `fix` Fix compatibility layer
    - `fix` bug #4683 Fix compatibility layer (fabpot)
    - `feat` Add note to format_datetime explaining how to install required extensions
    - `docs` minor #4685 Add note to format_datetime explaining how to install required extensions (LucileDT)
    - `fix` Avoid errors when failing to guess the template info for an error
    - `fix` bug #4688 Avoid errors when failing to guess the template info for an error (stof)
    - `docs` Improve documentation examples for `enum` and `enum_cases`
    - `docs` minor #4690 Improve documentation examples for `enum` and `enum_cases` (Kocal)
    - `chore` Bump version
    - `feat` Support two words test guard
    - `feat` feature #4689 Support two words test guard (VincentLanglet)
    - `chore` Bump minimum Commonmark requirement
    - `fix` minor #4691 Bump minimum Commonmark requirement (fabpot)
    - `fix` Fix intl test
    - `fix` minor #4692 Fix intl test (fabpot)
    - `docs` Introduce registerUndefinedTestCallback
    - `feat` feature #4687 Introduce registerUndefinedTestCallback (VincentLanglet)
    - `fix` Compile &#039;index&#039; with repr (not string) in EmbedNode
    - `docs` [Doc] Tweaks in the escaping article
    - `fix` bug #4693 Compile &#039;index&#039; with repr (not string) in EmbedNode (smnandre)
    - `docs` minor #4694 [Doc] Tweaks in the escaping article (javiereguiluz)
    - `fix` Update replace.rst
    - `docs` minor #4695 Update replace.rst (cyphix333)
    - `docs` Update inky_to_html.rst: Updating link
    - `fix` minor #4699 Update inky_to_html.rst: Updating link (ThomasLandauer)
    - `fix` Fix accessing arrays with stringable objects as key
    - `fix` bug #4704 Fix accessing arrays with stringable objects as key (nicolas-grekas)
    - `docs` Update CHANGELOG
    - `chore` Prepare the 3.22.0 release
  
  </details>
  
- **guzzlehttp/guzzle**: 7.9.3 → 7.10.0
    <details>
  <summary>📋 Show 4 commits</summary>

    - `feat` Add PHP 8.5 support (#3300)
    - `fix` Remove obsolete reference capturing of `$http_response_header` (#3294)
    - `fix` Use the `http_get_last_response_headers` function (#3301)
    - `chore` Release 7.10.0
  
  </details>
  
- **guzzlehttp/promises**: 2.2.0 → 2.3.0
    <details>
  <summary>📋 Show 2 commits</summary>

    - `fix` [2.3] PHP 8.5 support (#183)
    - `chore` Release 2.3.0
  
  </details>
  
- **guzzlehttp/psr7**: 2.7.1 → 2.8.0
    <details>
  <summary>📋 Show 4 commits</summary>

    - `fix` [2.8] Add PHP 8.5 support (#628)
    - `docs` [2.8] Allow empty lists as header values (#625)
    - `docs` Update README.md
    - `chore` Release 2.8.0
  
  </details>
  
- **masterminds/html5**: 2.9.0 → 2.10.0
    <details>
  <summary>📋 Show 15 commits</summary>

    - `fix` Just a quick typo fix.
    - `fix` Merge pull request #248 from citricguy/hex-typo
    - `chore` Bump actions/checkout version
    - `feat` Add PHP 8.4 to CI config
    - `chore` Bump actions/checkout version
    - `chore` Apply cs fixer v2.19.3
    - `fix` Merge pull request #255 from W0rma/fix-cs
    - `chore` Merge pull request #256 from W0rma/php84
    - `fix` fix(Tokenizer): ignore duplicate attributes
    - `test` test(Tokenizer): add tests for duplicate attribute validation
    - `fix` Merge pull request #258 from Link1515/fix/duplicate-attributes
    - `style` Address php-cs-fixer remarks
    - `docs` minor #260 Address php-cs-fixer remarks (ohader)
    - `fix` Ensure empty inline svg and math tags are serialized as void tags
    - `fix` Merge pull request #259 from ohader/void-svg-math-tags
  
  </details>
  
- **symfony/psr-http-message-bridge**: v6.4.24 → v7.4.0-RC1
    <details>
  <summary>📋 Show 42 commits</summary>

    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` [PsrHttpMessageBridge] Remove HttpFoundation 5.4 compat code
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `refactor` Remove unnecessary empty usages
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `chore` Merge branch &#039;6.4&#039; into 7.0
    - `chore` Merge branch &#039;7.0&#039; into 7.1
    - `style` Prefix all sprintf() calls
    - `chore` chore: CS fixes
    - `fix` Remove redundant check
    - `fix` minor #57610 [PsrHttpMessageBridge] Remove a redundant check in HttpFoundationFactory class (seriquynh)
    - `fix` Remove uniqid() from tempnam() calls
    - `test` do not use uniqid() in tests
    - `fix` Merge branch &#039;6.4&#039; into 7.0
    - `fix` Merge branch &#039;7.0&#039; into 7.1
    - `refactor` Remove unused code and unnecessary `else` branches
    - `fix` Merge branch &#039;6.4&#039; into 7.1
    - `fix` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Merge branch &#039;6.4&#039; into 7.1
    - `chore` Merge branch &#039;7.1&#039; into 7.2
    - `chore` Remove unused imports
    - `feat` Allow Symfony ^8.0
    - `fix` Fix typos in documentation and code comments
    - `fix` Remove legacy config for disabling annotations
    - `test` run tests using PHPUnit 11.5
    - `refactor` replace PHPUnit annotations with attributes
    - `chore`  chore: PHP CS Fixer - restore PHP / PHPUnit rulesets
    - `fix` fix merge
    - `fix` Merge branch &#039;7.3&#039; into 7.4
    - `fix` CS fix
    - `fix` Merge branch &#039;7.3&#039; into 7.4
  
  </details>
  
- **composer/semver**: 3.4.3 → 3.4.4
    <details>
  <summary>📋 Show 2 commits</summary>

    - `fix` Fix phpstan error
    - `docs` SemVer: list return types (#171)
  
  </details>
  
- **pear/archive_tar**: 1.5.0 → 1.6.0
    <details>
  <summary>📋 Show 22 commits</summary>

    - `feat` add older PHP5&#039;s since pear/composer allow back to 5.4
    - `fix` Merge pull request #1 from ashnazg/testing
    - `chore` Merge pull request #49 from ashnazg/master
    - `test` adding tests for big files
    - `fix` unpack size from the binary header with the older &#039;a&#039; format
    - `perf` much much smaller test archive for big file using bz2
    - `chore` bz2 works with github tests so remove much bigger gz archive
    - `docs` try same format for all PHP verisons
    - `revert` Revert &quot;try same format for all PHP verisons&quot;
    - `fix` try Z for PHP &lt; 5.5
    - `revert` Revert &quot;try Z for PHP &lt; 5.5&quot;
    - `fix` Merge pull request #51 from mcdruid/fix_big_files
    - `fix` Fix return value of _writeBlock
    - `feat` add very simple test to ensure tarballs can be created
    - `chore` remove old PHP 5 and add new PHP 8 versions
    - `fix` Remove gzopen/gztell/gzseek shim
    - `chore` Merge pull request #56 from mcdruid/update_php_versions
    - `docs` Merge pull request #54 from mcdruid/create_test
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
    - `chore` Test upcoming php 8.5
    - `docs` Changelog and marked new release
    - `fix` Avoid warning in PHP 8.5 when converting to int a number that is outside the int limit
    - `fix` Older php versions don&#039;t have PHP_INT_MIN and PHP_INT_MAX constants
    - `fix` Cast by default if INT constants are not defined
    - `fix` Seems that in older version only the MIN constant is not defined
    - `docs` Changelog and version
  
  </details>
  
- **sebastian/diff**: 4.0.6 → 5.1.1
    <details>
  <summary>📋 Show 233 commits</summary>

    - `chore` Update tools (and manage Composer through Phive)
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
    - `chore` Bump copyright year
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
    - `chore` Update PHP-CS-Fixer
    - `fix` Fix CS/WS issues
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Remove roave-backward-compatibility-check as it cannot process code that uses PHP 8 syntax
    - `refactor` Refactor
    - `chore` Bump
    - `docs` Update PHPUnit configuration
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
    - `docs` Update PHPUnit configuration
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
    - `fix` Remove deprecated totallyTyped attribute
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Convert deprecations to exceptions
    - `chore` Cleanup
    - `fix` Fix issues identified by Psalm
    - `fix` Fix CS/WS issues
    - `docs` Update ChangeLog
    - `style` Simplify
    - `perf` Use str_ends_with() instead of substr()
    - `docs` Improve comments (hopefully)
    - `docs` Declare property type
    - `fix` Remove superfluous escape
    - `feat` Use ?-&gt; operator
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Cleanup
    - `chore` Test with PHP 8.2
    - `chore` Bump
    - `chore` Update tools
    - `breaking` Drop support for PHP 8.0
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Rename development branch
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Restrict token permissions
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
    - `fix` Do not use deprecated/removed attributes
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Fix CS/WS issues
    - `fix` Fix/Tweak
    - `chore` Test with PHP 8.3
    - `style` Reformat so that tools recognize the license
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Fix StrictUnifiedDiffOutputBuilder README example
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update Psalm baseline
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `fix` Fix CS/WS issues
    - `docs` Declare parameter types
    - `refactor` Make data provider methods static (and use attribute instead of annotation)
    - `chore` Update Psalm baseline
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Bump copyright year
    - `docs` Update ChangeLog
    - `chore` Update PHP-CS-Fixer configuration
    - `fix` Fix CS/WS issues
    - `feat` Use attributes instead of annotations
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update tools
    - `docs` Update badges
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
    - `docs` Set COMPOSER_ROOT_VERSION
    - `fix` Parser: 0 is valid range
    - `fix` Parser: isset($match[&#039;startrange&#039;]) was always true
    - `fix` Fix
    - `chore` Prepare release
    - `style` Tweak
    - `docs` readme: added note about Git diffs
    - `chore` Update tools
    - `chore` Update tools
    - `chore` Update PHP-CS-Fixer configuration
    - `fix` Fix CS/WS issues
    - `perf` Perf optimize MemoryEfficientLongestCommonSubsequenceCalculator
    - `chore` Prepare release
    - `perf` Improve performance of TimeEfficientLongestCommonSubsequenceCalculator
    - `chore` Prepare release
    - `chore` Update tools
    - `docs` Update PHPUnit configuration
    - `chore` Update Psalm configuration
    - `chore` Bump
    - `refactor` Rename methods
    - `chore` Narrow types
    - `feat` Implement SebastianBergmann\Diff\Line::isAdded(), SebastianBergmann\Diff\Line::isRemoved(), and SebastianBergmann\Diff\Line::isUnchanged()
    - `docs` Improve code coverage metadata
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
    - `chore` Test with PHP 8.4
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
    - `fix` Do not use deprecated TestCase::iniSet() method
    - `docs` Use attributes
    - `chore` Bump
    - `perf` Use more specific string functions
    - `docs` Remove superfluous annotations
    - `chore` Update PHP-CS-Fixer configuration
    - `fix` Fix CS/WS issues
    - `docs` Suppress PhpStorm warning
    - `chore` Bump copyright year
    - `chore` Bump
    - `chore` Do not use implicitly nullable parameters and prepare release
  
  </details>
  
- **commerceguys/addressing**: v1.4.2 → v2.2.4
    <details>
  <summary>📋 Show 83 commits</summary>

    - `chore` Setup testing via Github actions.
    - `chore` Run tests with PHP 8.1.
    - `test` Run the tests with PHPunit 9.
    - `feat` Feature/drop support of php 7, use php 8 language level features (#172)
    - `fix` Relax type hints in generate_address_data.php to make it run again.
    - `fix` Remove deprecated code.
    - `docs` Tweak the README.
    - `fix` Stop generating formats and subdivisions from Google&#039;s dataset, take ownership.
    - `fix` Remove link to outdated blog post.
    - `fix` Remove Jervis Bay from Australian subdivisions. Fixes #160.
    - `docs` The administrative_area_type for France should be &#039;region&#039;.
    - `fix` Fix spelling of AE-RK.
    - `fix` Remove sorting codes from French territories.
    - `fix` Make the region field required in Turkey.
    - `refactor` Rename PH-COM (sync with ISO).
    - `feat` Add missing ISO codes for two TW subdivisions.
    - `docs` Update second-level subdivisons for CL-BI and CL-NB.
    - `feat` Add 4 additional subdivisions to KR-50.
    - `feat` Add Zimbabwe provinces. (#126)
    - `docs` Update format for ZW.
    - `feat` Add missing Brazilian municipality.
    - `fix` Further improvements to PH subdivisions. Fixes #155.
    - `fix` Update ISO codes for CN subdivisions.
    - `fix` Remove the postal_code_pattern from ES subdivisions.
    - `fix` Regenerate BS subdivisions from ISO.
    - `fix` Re-order TW subdivisions to match official (post office) order (#152)
    - `feat` Add subdivisions for Costa Rica (CR) and Estonia (EE).
    - `fix` Remove sorting code from BL, NC, RE formats.
    - `docs` Update copyright notice.
    - `feat` Add address line 3.
    - `docs` Show the additional name field for countries that use patronymics.
    - `fix` Fix scripts/generate_country_data.php (wrong typehint).
    - `docs` Update to CLDR v43.
    - `fix` Remove a @covers annotation that points to a deleted method.
    - `fix` Switch to keying subdivisons by ISO code, where available.
    - `fix` Improve the subdivision update map.
    - `fix` Decrease the subdivision dataset size by removing redundant data.
    - `fix` Revert the 2.0.0-beta1 changes to Cabo Verde subdivisions.
    - `fix` Fix several wrong type hints.
    - `refactor` Simplify the AddressFormat and Subdivision constructors.
    - `fix` Make Address type hints non-nullable again.
    - `fix` Rename VE-X from Vargas to La Guaira.
    - `feat` Add subdivisions for Honduras (HN).
    - `feat` Add subdivisions for Barbados (BB), Micronesia (FM), Kiribati (KI), Panama (PA).
    - `docs` Use &#039;region&#039; instead of &#039;oblast&#039; as the administrative area type for BY/UA/RU.
    - `feat` Add subdivisions for Papua New Guinea (PG), Seychelles (SC), United States Minor Outlying Islands (UM).
    - `fix` Remove the administrative area field from CC, CX, HM, NF.
    - `fix` Remove the administrative area field from AS, MP, VI.
    - `feat` Add administrative areas for Paraguay.
    - `feat` Add punctuation to the PY/UY formats, as specified by UPU.
    - `fix` Remove the postal code prefix for Switzerland.
    - `fix` Fix Country typehints for optional values.
    - `fix` UK locality_type should be town_city
    - `docs` Update to CLDR v44.
    - `fix` Fix the reported currency for countries CU and VG.
    - `feat` feat: bump gh action version for actions/checkout  v3 =&gt; v4 (#202)
    - `feat` feat: allow symfony 7 (require-dev), (#201)
    - `fix` When uppercasing address lines 1 and 2, uppercase line 3 as well.
    - `docs` Use the Town/City locality type for New Zealand.
    - `fix` Rebuild the address format for Kazakhstan.
    - `feat` Add subdivisions for Kazakhstan.
    - `fix` Fix regression, old postal code format for KZ is 6 digits, not 5.
    - `fix` Allow address formats to declare default values.
    - `fix` Singapore lacks city/locality field.
    - `fix` Allow turning off postal code validation in AddressFormatConstraint.
    - `docs` Panama has provinces, not states.
    - `fix` Update subdivisions for India (IN).
    - `feat` Add missing Indonesian (ID) provinces: PD, PE, PS, PT.
    - `feat` Add the India subdivision renames to the updater to ensure BC.
    - `fix` Revert &quot;Panama has provinces, not states.&quot;
    - `fix` Update subdivisions for Philippines (PH).
    - `docs` Chile&#039;s administrative areas are called regions, not provinces.
    - `fix` Simplify the postal code pattern for Peru (PE).
    - `fix` Make the administrative area required for BB, CL, CV, EG, IR, KI, MY, PE, TH, VN.
    - `docs` Update to CLDR v45.
    - `fix` Correct suffixes for ukrainian region names (#214)
    - `docs` Update UA subdivisions to follow the latest romanization system (and match ISO).
    - `fix` Remove unneeded files from the archives (#215)
    - `refactor` Rework the generation script to work with CLDR v46.
    - `docs` Update to CLDR v46.
    - `docs` Mention the Symfony bundle.
    - `fix` Switch implicit nullable types to explicit (#221)
    - `chore` Start testing on PHP 8.2, 8.3 and 8.4.
  
  </details>
  
- **doctrine/collections**: 2.3.0 → 2.4.0
    <details>
  <summary>📋 Show 36 commits</summary>

    - `chore` Update branch metadata
    - `feat` Utilizing Expression::visit method instead of match true
    - `chore` Merge pull request #451 from greg0ire/update-branch-metadata
    - `fix` Merge pull request #453 from CloneException/visit-instead-of-switch
    - `docs` Do not specify PHP version when sensible
    - `test` Run the tests on more PHP versions
    - `feat` Add a cautionary note about using non-scalar values in `matching()` expressions
    - `docs` Update docs/en/index.rst
    - `docs` Update docs/en/index.rst
    - `docs` Update docs/en/index.rst
    - `feat` Generalize from DateTime[Immutable] to objects
    - `chore` Merge pull request #455 from greg0ire/more-php-versions
    - `chore` Merge pull request #458 from doctrine/2.3.x
    - `fix` Fix redundant usage of stable-slug
    - `fix` Merge pull request #459 from SenseException/config-stable-fix
    - `docs` Merge pull request #456 from mpdude/matching-scalar-caution
    - `chore` Bump doctrine/.github from 7.2.2 to 7.3.0
    - `chore` Merge pull request #463 from doctrine/dependabot/github_actions/doctrine/dot-github-7.3.0
    - `docs` leverage arrow functions in docs
    - `docs` Merge pull request #465 from garak/improve-docs
    - `chore` Bump dev tools (#469)
    - `chore` Merge branch &#039;2.3.x&#039; into 2.4.x
    - `docs` Document the various access methods to fields attempted by the ClosureExpressionVisitor (#457)
    - `docs` Merge branch &#039;2.3.x&#039; into 2.4.x
    - `fix` Configure PHPUnit to display doctrine deprecations
    - `fix` Address existing deprecations
    - `docs` Merge pull request #473 from greg0ire/deprecations
    - `chore` Bump doctrine/.github from 8.0.0 to 11.0.0
    - `chore` Merge pull request #477 from doctrine/dependabot/github_actions/doctrine/dot-github-11.0.0
    - `chore` Bump doctrine/.github from 11.0.0 to 12.0.0 (#478)
    - `fix` Fix reporting of deprecations in tests
    - `fix` Merge pull request #479 from mpdude/fix-test-deprecation-reporting
    - `other` Merge remote-tracking branch &#039;upstream/2.3.x&#039; into merge-up
    - `chore` Merge pull request #480 from mpdude/merge-up
    - `refactor` Transition to using reflection-based, direct field access only
    - `refactor` Merge pull request #472 from mpdude/access-fields-directly
  
  </details>
  
- **doctrine/annotations**: 1.14.4 → 2.0.2
    <details>
  <summary>📋 Show 27 commits</summary>

    - `refactor` Drop Lexer 1
    - `chore` Merge pull request #465 from greg0ire/drop-lexer-1
    - `fix` Remove deprecated APIs (#468)
    - `chore` Bump PHP to 7.2
    - `docs` Merge pull request #467 from greg0ire/param-type-declarations
    - `feat` Allow doctrine/lexer 3
    - `docs` Merge pull request #466 from greg0ire/allow-lexer-3
    - `fix` Remove SimpleAnnotationReader (#469)
    - `refactor` Remove NamedArgumentConstructorAnnotation interface (#470)
    - `fix` Remove deprecated method
    - `chore` Merge pull request #471 from greg0ire/drop-deprecated-method
    - `docs` Update branch metadata for documentation
    - `chore` Merge pull request #477 from greg0ire/update-branch-metadata
    - `chore` Merge branch &#039;1.14.x&#039; into 2.0.x
    - `fix` Update README.md - fix 404 (link to doctrine-project website) (#481)
    - `feat` Add hint to use PsrCachedReader instead of `CachedReader` and `FileCacheReader`
    - `docs` Merge pull request #483 from alexander-schranz/patch-1
    - `feat` Add psalm.xml to .gitattributes
    - `style` Address coding standard issues
    - `docs` Merge pull request #484 from VincentLanglet/patch-1
    - `chore` Mark project as inactive
    - `chore` Merge pull request #489 from greg0ire/inactive
    - `chore` Merge remote-tracking branch &#039;origin/1.14.x&#039; into 2.0.x
    - `chore` Merge pull request #496 from greg0ire/2.0.x
    - `chore` Merge branch &#039;1.14.x&#039; into 2.0.x
    - `chore` Merge branch &#039;1.14.x&#039; into 2.0.x
    - `fix` Merge branch &#039;1.14.x&#039; into 2.0.x
  
  </details>
  
- **league/csv**: 9.24.1 → 9.27.1
    <details>
  <summary>📋 Show 20 commits</summary>

    - `fix` Assure DOMDocument::createTextNode() receives a string (#567)
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
    - `refactor` Simplify Reader and Writer instantiation
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
    - `chore` Merge remote-tracking branch &#039;origin/2.0.x&#039;
    - `chore` Merge remote-tracking branch &#039;origin/2.0.x&#039; into master
    - `chore` Merge pull request #182 from doctrine/2.0.x
    - `chore` Merge pull request #191 from doctrine/2.0.x-merge-up-into-2.1.x_qqGoVa8U
    - `chore` Merge release 2.0.5 into 2.1.x (#203)
    - `chore` Merge release 2.0.6 into 2.1.x (#210)
    - `feat` Add support for Esperanto
    - `feat` Merge pull request #213 from RobinvanderVliet/2.0.x
    - `chore` Merge pull request #215 from doctrine/2.0.x
    - `chore` Merge pull request #220 from doctrine/2.0.x-merge-up-into-2.1.x_mR7yk9Ms
    - `chore` Merge pull request #224 from doctrine/2.0.x-merge-up-into-2.1.x_tZMQjWj7
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
    - `fix` Remove duplicated &quot;medium&quot; from English irregular list
    - `docs` Sort list of English irregulars
    - `fix` Merge pull request #251 from thrashzone13/2.0.x
    - `fix` Remove references to non-existent directory
    - `chore` Analyze test directory
    - `chore` Merge pull request #252 from greg0ire/remove-common-refs
    - `docs` Merge pull request #253 from greg0ire/analyze-tests
    - `chore` Use a shallow tree
    - `chore` Merge pull request #254 from greg0ire/shallow-tree
    - `chore` Normalize composer.json
    - `docs` Explicitly configure Psalm
    - `fix` Remove unused private property
    - `chore` Merge pull request #255 from greg0ire/maintenance
    - `fix` Fix wrong singularization of &#039;nurseries&#039;
    - `docs` Correct singularization of bois
    - `docs` Merge pull request #257 from vdauchy/singular-bois
    - `docs` Correct singularization of mas
    - `chore` singular-locaux
    - `docs` Merge pull request #259 from vdauchy/singular-locaux
    - `docs` Merge pull request #258 from vdauchy/singular-mas
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
    - `chore` Merge remote-tracking branch &#039;origin/2.0.x&#039; into 2.1.x
    - `chore` Merge pull request #278 from greg0ire/2.1.x
    - `feat` Add italian rules
    - `docs` Merge pull request #276 from f-liva/2.0.x
    - `fix` Merge pull request #256 from thrashzone13/2.0.x
    - `fix` Correct pluralization of die
    - `chore` Merge pull request #270 from doctrine/dependabot/github_actions/doctrine/dot-github-7.2.2
    - `fix` Merge pull request #233 from Muffinman/2.0.x
    - `feat` add &#039;alga&#039; to irregular words list
    - `docs` Merge pull request #230 from Quarasique/update_irregular_words
    - `chore` Bump doctrine/.github from 7.2.2 to 7.3.0
    - `chore` Merge pull request #281 from doctrine/dependabot/github_actions/doctrine/dot-github-7.3.0
    - `chore` Upgrade to doctrine/coding-standard 13
    - `chore` Upgrade to PHPStan 2
    - `chore` Upgrade to PHPUnit 12
    - `chore` Merge pull request #280 from doctrine/maintenance
    - `docs` Define XML schema for phpcs configuration
    - `docs` Use the proper operator
    - `chore` Merge pull request #283 from doctrine/ampersand
    - `chore` Upgrade PHPStan to level 10
    - `chore` Merge pull request #284 from doctrine/phpstan-10
    - `docs` Merge pull request #282 from greg0ire/phpcs-schema
    - `chore` Merge remote-tracking branch &#039;origin/2.0.x&#039; into 2.1.x
    - `chore` Merge pull request #286 from greg0ire/2.1.x
    - `test` Address test rename
    - `chore` Merge pull request #288 from greg0ire/fix-build
    - `fix` Replace more occurrences of |MockObject
    - `chore` Merge pull request #289 from greg0ire/use-proper-operator-2
    - `chore` Merge pull request #291 from doctrine/2.0.x
    - `chore` Use PHP 8.4 in the CI
    - `chore` Merge pull request #294 from greg0ire/8-4-ci
    - `chore` Merge pull request #296 from doctrine/2.0.x-merge-up-into-2.1.x_N1sw6PZw
  
  </details>
  
- **consolidation/annotated-command**: 4.10.1 → 4.10.4
    <details>
  <summary>📋 Show 6 commits</summary>

    - `fix` Fix #315: default value for the escape parameter for fputcsv() is now deprecated (#316)
    - `feat` Add changelog
    - `test` Test on PHP 8.5 (#319)
    - `chore` Changelog for 4.10.3
    - `docs` More PHP 8.5 changes (#320)
    - `chore` Changelog for 4.10.4
  
  </details>
  
- **maennchen/zipstream-php**: 3.1.2 → 3.2.0
    <details>
  <summary>📋 Show 30 commits</summary>

    - `chore` Bump github/codeql-action in the github-actions group (#336)
    - `chore` Bump github/codeql-action in the github-actions group (#337)
    - `chore` Bump step-security/harden-runner in the github-actions group (#338)
    - `chore` Fixes for Dev Dependencies
    - `docs` Use ScoreCard file_mode git
    - `chore` Revert &quot;Remove Export Ingore for .github files&quot;
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
    - `chore` Updates &amp; Deprecation Fixes
    - `chore` Setup GH Token for Phive Install in CI
  
  </details>
  
- **solarium/solarium**: 6.3.7 → 6.4.1
    <details>
  <summary>📋 Show 13 commits</summary>

    - `docs` prepared development
    - `chore` PHPStan 1 → 2 (#1147)
    - `feat` Support for CBOR update queries (#1148)
    - `chore` Use phpstan.dist.neon instead of phpstan.neon (#1149)
    - `fix` Fix broken link in docs (#1150)
    - `style` Style fixes (#1151)
    - `docs` Grammar nitpick (#1153)
    - `chore` Exclude `phpstan.dist.neon` from release (#1154)
    - `test` Solr 9.8 → 9.9 for integration tests (#1159)
    - `fix` Fix `ReturnTypeWillChange` attribute position (it must be above the function otherwise it&#039;s not applied) (#1161)
    - `feat` Vector filters (#1162)
    - `fix` prepared corrected 6.4.x minor releases
    - `chore` 6.4.1
  
  </details>
  
- **myclabs/deep-copy**: 1.13.3 → 1.13.4
    <details>
  <summary>📋 Show 2 commits</summary>

    - `fix` setAccessible() has no effect as of PHP 8.1
    - `fix` Merge pull request #207 from W0rma/reflection-set-accessible
  
  </details>
  
- **setasign/fpdi**: v2.6.3 → v2.6.4
    <details>
  <summary>📋 Show 17 commits</summary>

    - `test` Updated test action runner environment
    - `chore` Merge pull request #231 from Setasign/development
    - `fix` Added check for false of readBytes() to avoid PHP warning
    - `test` Added test to reproduce issue 235
    - `fix` Fixed @throws doc-block annotation
    - `fix` Fixed @throws doc-block annotation
    - `fix` Merge pull request #236 from Setasign/issue-235
    - `chore` chore: Increase minimum version of tecnickcom/tcpdf
    - `chore` Merge pull request #237 from mitelg/chore/update-tcpdf
    - `fix` Fixed infinite loop in case of a recursive pages dictionary
    - `test` Added test cases for handling recursive page tree structures
    - `fix` Fixed possible infinite recursion in PdfType::resolve()
    - `test` Moved infinite recursion tests from functional to unit
    - `fix` Fixed namespace of PdfReaderTest
    - `fix` Merge commit from fork
    - `fix` Merge pull request #238 from Setasign/development
    - `docs` Updated version constant
  
  </details>
  
- **open-y-subprojects/openy_map**: 5.2.5 → 1.15
  
- **open-y-subprojects/openy_custom**: 2.7.2 → 1.2.0
  
- **open-y-subprojects/openy_hours_formatter**: 2.0.4 → 1.2.2
  
- **ycloudyusa/y_lb**: 3.10.7 → 4.0.6-rc4
    <details>
  <summary>📋 Show 42 commits</summary>

    - `docs` Update y_lb.info.yml
    - `chore` Update composer.json
    - `chore` Update composer.json
    - `chore` Update composer.json
    - `chore` Update composer.json
    - `chore` Update composer.json
    - `chore` Update composer.json
    - `chore` Merge pull request #274 from YCloudYUSA/main
    - `chore` Update composer.json
    - `chore` Drupal 11 upgrade: staged changes
    - `chore` Merge pull request #276 from YCloudYUSA/upgrade-drupal11-20250528_185501
    - `chore` Merge pull request #280 from YCloudYUSA/main
    - `feat` feat: update deps version to supoort y_lb 4 and drupal 11
    - `fix` fix: version
    - `chore` Merge pull request #281 from YCloudYUSA/drupal11-update-deps
    - `feat` Merge pull request #271 from YCloudYUSA/drupal11
    - `fix` remove lb_claro
    - `feat` Merge pull request #282 from YCloudYUSA/remove-lb_claro
    - `fix` fix: remove version from composer.json
    - `fix` Merge pull request #283 from YCloudYUSA/svicervlad-patch-1
    - `feat` feat: update y_camp version for drupal 11 compatibility
    - `feat` Merge pull request #284 from YCloudYUSA/svicervlad-patch-1
    - `fix` Fixed missing level-3 menu title on desktop
    - `fix` Fixed missing level-3 menu title on desktop
    - `fix` Merge pull request #285 from YCloudYUSA/fix-level-3-title
    - `fix` Merge pull request #286 from YCloudYUSA/3x-fix-level-3-title
    - `feat` feat: back lb_claro
    - `feat` Merge pull request #287 from YCloudYUSA/lb_claro
    - `feat` Add an option to control if the styles can be overriden on each node.
    - `fix` Fixed condition to avoid warning message.
    - `feat` Added entity_builders on form build to call method that saves new info.
    - `fix` Fixed return of form when not cannonical.
    - `docs` Update src/Form/YLBOverridesEntityForm.php
    - `fix` Merge pull request #290 from mario-imagex/issue-288
    - `chore` Merge pull request #294 from YCloudYUSA/3.x
    - `chore` Update drupal/openy_gtranslate to 2.0.0
    - `chore` Merge pull request #295 from YCloudYUSA/update/openy_gtranslate-2.0.0
    - `chore` Use ycloudyusa/lb_claro from packagist instead of drupal/lb_claro
    - `chore` Use ycloudyusa/lb_claro from packagist instead of drupal/lb_claro
    - `feat` Merge pull request #296 from YCloudYUSA/feature/use-ycloudyusa-lb-claro
    - `fix` fix: improve skip link accessibility by replacing empty anchor with semantic HTML
    - `fix` Merge pull request #297 from YCloudYUSA/ITCP-450
  
  </details>
  
- **ycloudyusa/yusaopeny_activity_finder**: 5.3.0 → 6.0.0
    <details>
  <summary>📋 Show 12 commits</summary>

    - `refactor` Replace deprecated package &#039;node-sass&#039; with &#039;sass&#039; package
    - `chore` Use latest Node LTS version (v22.17.0) for builds
    - `fix` Replace &#039;node-sass&#039; with &#039;sass&#039; for LB Activity Finder
    - `chore` Merge pull request #58 from dchubar-fj/af4-replace-node-sass
    - `fix` Fix condition for time comparison in WeekdaysPartsOfDay
    - `fix` Merge pull request #61 from YCloudYUSA/bug/weekday-afternoon-evenings
    - `fix` fix: replace deprecated watchdog_exception with backwards-compatible error logging
    - `feat` feat: add Drupal 11 support to activity finder module and sub-modules
    - `refactor` refactor: replace watchdog_exception with injected logger service
    - `fix` fix: inject TypedConfigManagerInterface to ConfigFormBase constructor
    - `refactor` refactor: update core_version_requirement to ^10 || ^11 across all modules
    - `chore` Merge pull request #65 from YCloudYUSA/drupal11
  
  </details>
  
- **ezyang/htmlpurifier**: v4.18.0 → v4.19.0
    <details>
  <summary>📋 Show 16 commits</summary>

    - `chore` chore: Disable 8.4 CI (#426)
    - `feat` feat: Add option for safe iframe hosts using array lookup (#423)
    - `refactor` refactor: #414 remove method substrCount (#415)
    - `fix` fix: Deprecated: preg_replace(): Passing null to parameter #3 ($subject) o… (#421)
    - `feat` feat: Add CSS direction support (#429)
    - `feat` feat: Allow more image widths by default (#430)
    - `fix` fix: add warning for misleading option (#433)
    - `fix` fix: non-substantive typos (#434)
    - `feat` feat: PHP 8.4 support (#441)
    - `feat` Add docker files for dev environment (#424)
    - `docs` Update Serializer.php (#443)
    - `feat` feat: Define option URI.AllowedSymbols (#447)
    - `fix` fix: catastrophic backtracking in Core.AggressivelyFixLt (#440)
    - `feat` add the docker files to be ignored with installation (#451)
    - `feat` feat: Support PHP 8.5 versions (#453)
    - `chore` chore(release): 4.19.0 [skip ci]
  
  </details>
  
- **ycloudyusa/useless_machines**: 1.2 → 2.0.4
    <details>
  <summary>📋 Show 17 commits</summary>

    - `chore` Drupal 11 upgrade: staged changes
    - `chore` Update action/action.info.yml
    - `docs` Update action/action.info.yml
    - `fix` fix: this version will be compability pnly with drupal 11
    - `fix` Merge pull request #8 from YCloudYUSA/svicervlad-patch-2
    - `chore` Update composer.json
    - `chore` Merge pull request #5 from YCloudYUSA/upgrade-drupal11-20250528_185328
    - `feat` feat: uninstall redundant drupal modules
    - `fix` Merge pull request #9 from YCloudYUSA/upgrade_path
    - `feat` feat: uninstall panelbutton for ckeditor
    - `feat` Merge pull request #10 from YCloudYUSA/uninstall-panelbutton
    - `feat` feat: uninstall unspoerted modules
    - `fix` Merge pull request #11 from YCloudYUSA/uninstall-unsuported-modules
    - `fix` fix: typo
    - `fix` Merge pull request #12 from YCloudYUSA/uninstall-unsuported-modules
    - `feat` Add features useless machine for Drupal 11 compatibility
    - `chore` Merge pull request #13 from YCloudYUSA/add-features-useless-machine
  
  </details>
  
- **ycloudyusa/y_lb_demo_content**: 3.4.5 → 4.0.0-beta4
    <details>
  <summary>📋 Show 9 commits</summary>

    - `feat` feat!: Drupal 11 untested
    - `chore` Update composer.json
    - `chore` Drupal 11 upgrade: staged changes
    - `chore` Merge pull request #56 from YCloudYUSA/upgrade-drupal11-20250528_185553
    - `feat` Add icons to the Media Library
    - `docs` Merge pull request #57 from YCloudYUSA/ITCR-757
    - `feat` Merge pull request #55 from YCloudYUSA/drupal11
    - `fix` Fix partners block demo content migration
    - `fix` Merge pull request #58 from YCloudYUSA/fix/partners-block-demo-content-migration
  
  </details>
  


### ➖ Removed PHP Libraries

- **symfony/dom-crawler** (was v6.4.24)





### 🔄 Drupal Core Updates

- **drupal/core**: 10.5.1 → 11.1.9
    <details>
  <summary>📋 Show 1732 commits</summary>

    - `chore` Drupal 11.1.9
    - `chore` SA-CORE-2025-008 by damienmckenna, tame4tex, benjifisher, mohit_aghera, larowlan, mingsong, xjm, neclimdul, catch, drumm, poker10
    - `chore` SA-CORE-2025-007 by kevinquillen, larowlan, poker10, drumm, mingsong, xjm, mcdruid, benjifisher, ram4nd, drumm, greggles
    - `chore` SA-CORE-2025-006 by anzuukino, mcdruid, larowlan, greggles, longwave, poker10, catch, xjm, drumm, akalata, ram4nd
    - `chore` SA-CORE-2025-005 by zhero, nils.destoop, dragos-dumi,  svendecabooter, mcdruid, alexpott, catch, larowlan, cilefen, nils.destoop, longwave, xjm, poker10, jenlampton, ram4nd
    - `chore` Drupal 11.1.8
    - `docs` Issue #3524613: Add Cristina Chumillas as UX Manager, Emma Horrell as provisional UX Manager to Drupal core
    - `fix` Issue #3524716 by nicxvan, catch: [11.1] update gather rules to manage hook preprocess
    - `chore` Revert &quot;Issue #3227637 by larowlan, acbramley, daffie, amber himes matz, yogeshmpawar, fubarhouse, chetanbharambe, jibran, catch, kristen pol, alexpott: NodeController::revisionOverview is uncacheable&quot;
    - `fix` Issue #3525090 by donquixote, nicxvan: [11.1] ResolvedLibraryDefinitionsFilesMatchTest is failing
    - `fix` Issue #2957336 by mstrelan, hughworm, quietone, smustgrave: Invalid exposed form data not excluded
    - `fix` Issue #3496867 by dcam, drunken monkey, smustgrave, nicxvan: Uninstalling a module deletes all views that have third-party settings by that module
    - `refactor` Issue #3461309 by charlliequadros, annmarysruthy, sivaji_ganesh_jojodae, smustgrave, mstrelan, larowlan: Refactor FormTestClickedButtonForm::buildForm
    - `fix` Issue #1528028 by acbramley, jhedstrom, tibbsa, catch, jstoller, agentrickard, smustgrave, yoroy: Add tests for reverting revisions where revision_uid and uid differ
    - `fix` Issue #2800715 by dcam, shashikant_chauhan, mikeryan, quietone, alexpott: Reset highwater mark *before* rolling back
    - `fix` Issue #3360996 by prudloff, smustgrave, catch: template_preprocess_views_view_summary_unformatted() does not set active link when using AJAX
    - `refactor` Issue #3366862 by mondrake, daffie: Refactor InstallerNonDefaultDatabaseDriverTest to avoid asserting content of settings.php
    - `docs` Issue #3522021 by catch: Add @group #slow to MigrateDrupal7AuditIdsTest
    - `docs` Issue #3270499 by spokje, quietone, catch: Add a deprecated module version of ResolvedLibraryDefinitionsFilesMatchTest
    - `fix` Issue #3516477 by catch, ericgsmith, acbramley, kristiaanvandeneynde, mxr576: Avoid cache redirect error when using &#039;view own unpublished content&#039; permission alongside node grants
    - `docs` Issue #3516520 by larowlan, wim leers, penyaskito: LanguageItem lacks a schema for its default values
    - `fix` Issue #3500683 by berdir, nod_, kristiaanvandeneynde, catch: Backport interface to allow access policies to opt out of caching
    - `fix` Issue #3517481 by mradcliffe, smustgrave: askHidden prompt fails with &quot;Unknown named parameter $default&quot;
    - `fix` Issue #3085781 by davps, bnjmnm, kentr, Kumar Kundan, abhisekmazumdar, kunalgautam, claudiu.cristea, anu.a_95, andrewmacpherson, smustgrave: aria-pressed attribute isn&#039;t updated correctly
    - `chore` Back to dev.
    - `chore` Drupal 11.1.7
    - `fix` Issue #3161212 by joseph.olstad, acbramley, asubit, eduardo morales alberti, sandeepsingh199, berdir, catch: Node add/edit gives a Call to a member function getAccountName() on null when author is NULL
    - `docs` Issue #3511434 by juandhr, dimpalmangrulkar20@gmail.com, sivaji_ganesh_jojodae, alberto56, quietone, ghost of drupal past, quadrexdev: There are leftover references in comments to long ago renamed ListDefinitionInterface
    - `fix` Issue #3512835 by nicxvan: [11.1.x] Add BC stubs for Hook ordering
    - `fix` Issue #3511186 by grimreaper: Media Library currentSelection not reset properly
    - `fix` Issue #3518952 by avpaderno, prabha1997, smustgrave: Fix grammar in FormattableMarkup::placeholderFormat() comments
    - `docs` Issue #3411185 by govind_giri_goswami, brandonlira, santhosh@21, rodrigoaguilera, joachim, smustgrave, borisson_: docs for return values from various EntityDisplayRepositoryInterface() are unclear
    - `fix` Revert &quot;Issue #3478408 by jaydev bhatt, quietone, goonerw: Fix errors in update-countries.sh&quot;
    - `fix` Issue #3478408 by jaydev bhatt, quietone, goonerw: Fix errors in update-countries.sh
    - `fix` Issue #3424720 by vidorado, douggreen, immaculatexavier, smustgrave, uri_frazier: LanguageNegotiationUrl unnecessarily adds domain to outbound URL&#039;s
    - `fix` Issue #3511566 by prudloff, smustgrave: Remove srcdoc attributes in Xss::filter()
    - `docs` Issue #3518967 by quadrexdev, joachim: incorrect @return docs for ElementInfoManagerInterface::getInfo()
    - `docs` Issue #2586483 by brandonlira, snehi, anil280988, rakesh.gectcr, David_Rothstein, jhodgdon, trobey, alexpott: Update documentation for project versions in \Drupal\Core\Extension\InfoParserInterface::parse
    - `docs` Issue #3200162 by brandonlira, ksenzee, ultimike, larowlan, cecelias, xjm: Improve documentation for Graph component
    - `fix` Issue #3498468 by nexusnovaz, avpaderno, wombatbuddy, poker10: The example code given for FormattableMarkup::placeholderFormat() contains typos and syntax errors
    - `docs` Issue #3516253 by lostcarpark, mradcliffe, rachel_norfolk, chrisdarke, volkswagenchick: Add lostcarpark as Mentoring Coordinator to MAINTAINERS.txt
    - `fix` Issue #3504368 by godotislate, dpagini, smustgrave: Removing field from LB content type edits associated roles
    - `fix` Issue #3516558 by plopesc, m4olivei, cb_govcms, tarawij: Settings is not a valid render array in navigation module
    - `fix` Issue #3147148 by DarKFlameS, amateescu, mandclu, smustgrave: Media library form can only be submitted in the default workspace
    - `fix` Issue #3227637 by larowlan, acbramley, daffie, amber himes matz, yogeshmpawar, fubarhouse, chetanbharambe, jibran, catch, kristen pol, alexpott: NodeController::revisionOverview is uncacheable
    - `chore` Issue #3517614 by alexpott, longwave, cmlara, catch, quietone, mstrelan: Possible Non GPLv2 compatible code in ExpectDeprecationTrait
    - `fix` Issue #2797421 by dcam, mikeryan, chx, id.conky, mkalkbrenner, mikelutz: Sourceless migration plugins are broken
    - `fix` Issue #3442833 by binoli lalani, vivek panicker, pradhumanjain2311, longwave, prudloff, smustgrave, alexpott: Undefined array key warning in UrlHelper::parse()
    - `revert` Revert &quot;Issue #3461309 by annmarysruthy, charlliequadros, sivaji_ganesh_jojodae, smustgrave, mstrelan: Refactor FormTestClickedButtonForm::buildForm&quot;
    - `chore` Issue #3517517 by nod_, pdureau: Add pdureau as provisional Frontend Framework Manager
    - `chore` Issue #3502895 by julio_retkwa, sdhruvi5142, bnjmnm: Media Library item styles assume contextual module is present
    - `refactor` Issue #3461309 by annmarysruthy, charlliequadros, sivaji_ganesh_jojodae, smustgrave, mstrelan: Refactor FormTestClickedButtonForm::buildForm
    - `fix` Issue #2735997 by ramil g, joelpittet, ranjith_kumar_k_u, asad_ahmed, nikita_tt, catch, Ben Greenberg, mschudders, lendude, playful: Decimal separator and decimals settings ignored when aggregating decimal fields (revert)
    - `docs` Issue #3454075 by mradcliffe, rachel_norfolk, realityloop, volkswagenchick, chrisdarke, ekl1773, heddn, smustgrave, xjm, dinarcon, gábor hojtsy: Confirm and update mentoring coordinators section in MAINTAINERS.txt
    - `chore` Issue #3516770 by acbramley, larowlan, bbrala, quietone: Add acbramley as co-maintainer for node module
    - `chore` Issue #3493617 by mogtofu33: Add mogtofu33 as a SDC and new theme system&#039;s Icon API maintainer
    - `fix` Issue #3516359 by larowlan, smustgrave, longwave, lauriii, wim leers, mstrelan: ComponentValidator ignores the set validator and creates a new one
    - `fix` Issue #3458067 by ahmad khader, anybody, nikathone, manibharathi ezhimalai ravi, shivam_tiwari, smustgrave, larowlan, thomas kaisuka, svicer: Fix contextual links disappear intermittently leading to console errors
    - `fix` Issue #3517317 by penyaskito, larowlan: SDC slots not being validated against json config schema
    - `chore` Back to dev.
    - `chore` Drupal 11.1.6
    - `fix` Issue #3504204 by murz: Nightwatch command drupalInstall doesn&#039;t set the user_agent environment variable with the simpletest site instance
    - `docs` Issue #3508649 by gábor hojtsy, smustgrave: Use Drupal Core Leadership terminology in MAINTAINERS.txt
    - `fix` Issue #3513317 by annmarysruthy, larowlan, wim leers: ImageItem::defaultStorageSettings() should override display_default
    - `fix` Issue #2735997 by ramil g, joelpittet, ranjith_kumar_k_u, asad_ahmed, nikita_tt, mschudders, Ben Greenberg, lendude, playful: Decimal separator and decimals settings ignored when aggregating decimal fields
    - `fix` Issue #3323574 by lobodakyrylo, the_g_bomb, phthlaap, oily, vinmayiswamy, smustgrave, codebymikey, lendude: Pager not working correctly in AJAX view with exposed filters
    - `chore` Issue #3484845 by mstrelan, acbramley: [random test failure] ImageUrlProviderTest::testResize
    - `chore` SA-CORE-2025-004 by samuel.mortenson, xjm, larowlan, pandaski, effulgentsia, jenlampton, mcdruid, longwave, benjifisher, bramdriesen, phenaproxima
    - `test` Issue #3502658 by acbramley, catch, dww: [random test failure] FilterEntityReferenceTest
    - `fix` Issue #3497935 by prudloff, smustgrave: Renderer::getCurrentRenderContext() triggers a TypeError when there is no current request
    - `fix` Issue #3196245 by prudloff, longwave, smustgrave, berdir, catch: UserPermissionsForm should not use overridden permissions
    - `fix` Issue #3494471 by tgauges, smustgrave: Renaming a table containing &quot;drupal_&quot;  in the name with multiple indexes fails on PostreSQL
    - `chore` Back to dev.
    - `chore` Drupal 11.1.4
    - `chore` Issue #3508733 by gábor hojtsy, griffynh: Add griffynh as provisional core team facilitator
    - `fix` Issue #3498326 by rinku jacob 13, rkoller, smustgrave, ckrina: Focus outline has a too low color contrast and uses a different green than Claro
    - `docs` Issue #3487014 by liam morland, nod_, smustgrave, quietone: Fix documentation for optional params in MessengerInterface
    - `feat` Issue #3493858 by vidorado, xavier.masson, smustgrave: Extend ViewsBlockBase to merge cache metadata from display handler
    - `docs` Issue #3496485 by annmarysruthy, wombatbuddy, thejimbirch, smustgrave: example recipe.yml has incorrect comment above &quot;actions&quot; section
    - `refactor` Issue #3490948 by rowrowrowrow, bbrala: Change hardcoded entity key &#039;uid&#039; to getKey in ResourceTestBase
    - `chore` Issue #3508028 by markconroy: Offer to become maintainer of Stable9
    - `chore` Back to dev.
    - `chore` Merged 11.1.3.
    - `chore` Drupal 11.1.3
    - `chore` SA-CORE-2025-003 by shin24, anzuukino, mcdruid, nicxvan, ghost of drupal past, longwave
    - `chore` SA-CORE-2025-002 by jeff cardwell, benjifisher, poker10, mingsong
    - `chore` SA-CORE-2025-001 by larsdesigns, bdanin, nuwans, dgroene, arkepp, juanramonperez, svendecabooter, wgunn_e, mcdruid, catch
    - `test` Issue #3501237 by nikolay shapovalov, nicxvan: Improve HookCollectorPass test
    - `fix` Issue #3056698 by mondrake, quietone: Sqlite Connection::createConnectionOptionsFromUrl should not convert relative paths to full
    - `fix` Issue #3497758 by nicxvan, oily, alexpott, cilefen, catch, longwave, wlofgren, dries, wim leers, smustgrave: Regression: RssResponseCdata filtering out common HTML tags from RSS feeds
    - `fix` Issue #3469116 by prashant.c, pameeela, kostask, shalini_jha, sagarmohite0031, benjifisher, mrdalesmith, smustgrave, kristiaanvandeneynde, quietone, b_sharpe, nod_: Logout confirmation form shows inappropriate confirmation description
    - `chore` Issue #3504265 by finnsky, ksenzee, smustgrave: Yarn watch task broken
    - `fix` Issue #3096570 by recrit, raman.b, ameymudras, ranjith_kumar_k_u, Oscaner, smustgrave, peterwcm, pameeela: Redirect correct language page after node save
    - `fix` Issue #2927338 by berdir, anmolgoyal74, swatichouhan012, smustgrave, alexpott, gábor hojtsy: Ensure config entity langcode property does not change when installing, adding or editing a language
    - `feat` Issue #3503190 by phenaproxima, thejimbirch: Allow recipes to contain an &quot;extra&quot; property with arbitrary information for specific modules to use
    - `chore` Back to dev.
    - `chore` Drupal 11.1.2
    - `fix` Issue #3495881 by godotislate, bkosborne, catch, kushagra.goyal: Firefox retains form_build_id on form reloads, causing old form cache entry to be used and creating weird behavior for the Media Library widget
    - `fix` Issue #3503556 by tom konda: Wrong Regular Expression for string comparison in Nightwatch.js assertion
    - `fix` Issue #3486797 by alecsmrekar, shalini_jha, smustgrave, amateescu: Updating path alias language in workspace does not work
    - `fix` Issue #3502466 by alexpott, borisson_: Fix reference to core_field_views_data()
    - `docs` Issue #3493410 by plopesc, catch, smustgrave: Consider a more substantial shortcuts placeholder
    - `chore` Issue #3502487 by lauriii, oily, ckrina: Make the menu link form less verbose
    - `fix` Issue #3485174 by fago, arthur_lorenz, alexpott, smustgrave: Menu APIs provide invalid CSRF tokens
    - `fix` Issue #3502427 by alexpott, smustgrave: Fix references to Drupal\Tests\KernelTestBase
    - `chore` Issue #3501059 by claudiu.cristea: Remove claudiu.cristea from MAINTAINERS.txt
    - `chore` Issue #3501361 by chr.fritsch: Remove chr.fritsch from MAINTAINERS.txt
    - `chore` Issue #3501210 by dawehner: Remove dawehner from MAINTAINERS.txt
    - `fix` Issue #3489179 by godotislate, ghost of drupal past: Referring the same entity multiple times breaks _referringItem
    - `fix` Issue #3462700 by niklan, richardgaunt, smustgrave, pdureau: Update ComponentValidator to always include the component ID
    - `feat` Issue #3488293 by oily, maneesha binish, plopesc, m4olivei, pameeela: Help link always appears in navigation
    - `fix` Issue #3367556 by vensires, danchadwick, detroz, g089h515r806, groendijk: SDC components CSS &amp; JS generated wrong url in windows / XAMPP
    - `fix` Issue #2886800 by jonathanshaw, claudiu.cristea, quietone, hctom, geek-merlin, larowlan, sam152, joachim, smustgrave: EntityAccessControlHandler::createAccess() returns false positive cache hits because it ignores context
    - `fix` Issue #3500774 by kul.pratap, benjifisher: Fix errors in SourcePluginBase doc block
    - `docs` Issue #3495586 by tr, thejimbirch, quietone, cilefen, ghost of drupal past: PHPCS error in contributed module caused by core recipe.README.txt
    - `fix` Issue #3500293 by nicxvan, dww, catch: Add headroom to the navigation performance test
    - `chore` Issue #3488280 by darvanen, nicxvan, smustgrave: Tabledrag library depends on non-existent libraries
    - `fix` Issue #3499596 by alexpott: run-tests.sh cannot handle unicode in PHPUnit output
    - `fix` Issue #3220784 by berdir, johnchque, mathilde_dumond, dww, quietone: ContentEntityBase::createDuplicate() should reset default revision flag
    - `feat` Issue #3463142 by plopesc, m4olivei, larowlan, penyaskito: Allow modules to hook into top of content section of new core navigation
    - `fix` Issue #3466462 by mfb, chandansha, kim.pepper, charlliequadros, smustgrave, mxr576, quietone, morvaim, larowlan: Fix handling of unknown file extensions in FileMediaFormatterBase
    - `feat` Issue #3493406 by catch, godotislate: Add render caching for the navigation render array
    - `fix` Issue #3436395 by kristiaanvandeneynde, xjm, longwave, gabesullice, effulgentsia, smustgrave, catch, heddn, mcdruid, dww, bbrala, deviantintegral, benjifisher, greggles, larowlan, poker10, drumm: UserRolesCacheContext can lead to poisoned cache returns for user 1
    - `chore` Issue #3496319 by spokje: [random test failure] CommentPreviewTest::testCommentPreview
    - `feat` Issue #3497061 by phenaproxima, alexpott: Allow recipe input values in array keys
    - `fix` Issue #3358586 by godotislate, kala4ek, jaswinsingh, benjifisher, creact, catch, simohell, alexpott, alfthecat, aaronbauman, rupertj, poker10: RuntimeException: Adding non-existent permissions to a role is not allowed
    - `fix` Issue #3496541 by jurgenhaas, grimreaper, larowlan: Error when navigation JS is loaded for anonymous users
    - `fix` Issue #3495165 by catch, joeyroth, berdir, texas-bronius: Better warning message when variation cache detects an incompatible CacheRedirect
    - `fix` Issue #3098960 by pbonnefoi, godotislate, schaefdi, nod_, arunkumark, smustgrave, candalt: Nested paragraphs with same field name are ordered wrong
    - `chore` Back to dev.
    - `chore` Drupal 11.1.1
    - `chore` Issue #3484008 by bradjones1, smustgrave, alexpott: Add bradjones1 as Serialization subsystem maintainer
    - `chore` Issue #3496259 by spokje: [random test failure] LayoutSectionTest::testLayoutSectionFormatterAccess
    - `test` Issue #3444152 by m4olivei, smustgrave: Add test coverage to ensure navigation isn&#039;t rendered for users that don&#039;t have access
    - `fix` Issue #3276845 by shalini_jha, chris burge, smustgrave, bramdriesen, larowlan: MediaSourceBase::getSourceFieldName() doesn&#039;t check character max
    - `chore` Issue #3495733 by deepali sardana, idebr, knyshuk.vova: ManagedFile #accept overwrites existing attributes
    - `chore` Issue #3496438 by spokje: [random test failure] LanguageNegotiationInfoTest::testInfoAlterations
    - `docs` Issue #3015631 by liam morland, smustgrave, alberto56, amateescu, batkor: Improve documentation of MenuLinkTreeInterface
    - `fix` Issue #1986330 by bhanu951, subhojit777, marcelodornelas, ravi.shankar, immaculatexavier, wheatpenny, nikunjkotecha, shashikant_chauhan, vacho, smagdits, kasperg, aron.beal, andriansyah, suresh prabhu parkala, rajeevk, benjifisher, mangy.fox, cebasqueira, stefank, richardcanoe, quietone, yesct, AkshayKalose, drdam, DevElCuy, john cook, moymilo, alexpott, xjm, dawehner, tstoeckler, webchick, akashkumar07: When Batch ID doesn&#039;t exist, Drupal should emit a 404
    - `revert` Revert &quot;Issue #3476421 by goz, smustgrave, catch: Add assertions to OpenTelemetryNodePagePerformanceTest::testNodePageCoolCache()&quot;
    - `chore` Issue #3487637 by dww: Move all system_update_N() methods next to each other
    - `feat` Issue #3476421 by goz, smustgrave, catch: Add assertions to OpenTelemetryNodePagePerformanceTest::testNodePageCoolCache()
    - `chore` Issue #3496405 by spokje: [random test failure] EditorSecurityTest::testEditorXssFilterOverride
    - `fix` Issue #3477586 by spokje, catch, godotislate, berdir, dww, nicxvan: [random test failure] LayoutBuilderBlocksTest::testBlockPlaceholder failing
    - `test` Issue #3487371 by spokje, dww: [random test failure] ImageStylesPathAndUrlTest
    - `fix` Issue #3478628 by oily, alexpott, catch, sheshsharma, osopolar, dunx, shane birley, joegl: Fatal error: Uncaught TypeError: Drupal\Core\Extension\ThemeHandler::addTheme()
    - `fix` Issue #3482691 by james.williams, arunkumark, kristiaanvandeneynde, smustgrave: BreadcrumbManager ignores cacheability when no builders apply
    - `fix` Issue #3395212 by nicxvan, deborahblessy, murilohp, smustgrave, fabianx, kristiaanvandeneynde: Ensure invalid items are not written to FastBackend in ChainedFast
    - `chore` Issue #3491782 by phenaproxima, penyaskito, thejimbirch, gambry, amateescu, alexpott: When applying a recipe, we need to trigger an event pre importing content
    - `fix` Issue #3495305 by phenaproxima: Recipes that depend on other recipes break RecipeInputFormTrait
    - `fix` Issue #3494678 by mstrelan, nicxvan: Add void return type to all procedural alter hook implementations
    - `docs` Issue #3490858 by mfb, smustgrave: Align return type phpdoc for EntityChangedInterface::getChangedTime() with EntityChangedTrait
    - `fix` Issue #3444745 by fjgarlin, plopesc, m4olivei: Navigation Top Bar hides entity local tasks even if the user has no access to the bar
    - `chore` Issue #3487874 by jan kellermann, filipeabreu, valthebald, longwave: Olivero: Avoid localStorage for anonymous user to prevent violation of data protection regulations
    - `fix` Issue #3490222 by alexpott, nicxvan: Reinstate drupal_common_theme() and deprecate it
    - `refactor` Issue #3303546 by gauravvvv, stanzin, aditya4478, santosh_verma, bramdriesen, finnsky, sakthivel m, smustgrave, bnjmnm, nod_: Refactor Claro&#039;s dialog stylesheet
    - `docs` Issue #3479185 by akulsaxena, joachim, smustgrave, mikelutz, quietone: Clarify documentation for EntityContentBase &#039;translations&#039; configuration option
    - `fix` Issue #3488835 by mcdruid, atul_ghate, benjifisher, catch, cilefen, zengenuity, larowlan, poker10, longwave, damienmckenna, greggles, kristiaanvandeneynde: Status report confuses null email with duplicate email
    - `fix` Issue #3487586 by geek-merlin: BlockLibraryController typehints LazyContextRepository, not the interface
    - `fix` Issue #3491543 by mfb: symfony/http-foundation Follow up issue for isAdminPath validator
    - `fix` Issue #3492131 by lavanyatalwar, nicxvan, mstrelan, berdir: Remove references to hook_process_HOOK
    - `docs` Issue #3467540 by tstoeckler, prem suthar, smustgrave, catch: Update EntityTypeInterface::getKeys() docs for string IDs
    - `docs` Issue #3480732 by debrup, joachim, gaurav gupta: Correct docs for CachePluginBase::cacheSetMaxAge()
    - `docs` Issue #3484587 by daniel.j, joachim, catch: Document that invalid IDs are not present in the return array or EntityStorageInterface::loadMultiple
    - `fix` Issue #3480419 by mondrake, smustgrave, catch: Method getMockForAbstractClass() is deprecated - replace in views plugins
    - `feat` Issue #3490954 by nexusnovaz, mstrelan: Add return types to hook_update_N implementations
    - `docs` Issue #3484247 by mstrelan, smustgrave: Add NodeElement return typehints to protected test helper methods
    - `chore` Back to dev.
    - `chore` Drupal 11.1.0
    - `chore` Issue #3490698 by catch, spokje: Bump MINIMUM_STABILITY back to &#039;stable&#039; when php-tuf/composer-stager has an official release
    - `chore` Back to dev.
    - `chore` Drupal 11.1.0
    - `fix` Issue #3493182 by tim.plunkett, catch, lauriii: Block visibility settings have summary duplicated in the title
    - `chore` Issue #3493146 by spokje, smustgrave: Update all JavaScript dependencies which cause no changes
    - `chore` Issue #2962753 by ivnish, asawari, sagarmohite0031, phenaproxima, smustgrave, longwave, pameeela, sime, joelpittet, quietone: Remove oEmbed security warning
    - `feat` Issue #3493287 by phenaproxima, alexpott, longwave, tim.plunkett: The default content importer should handle Layout Builder section data
    - `fix` Issue #3456417 by eugene bocharov, pablo_pukha, smustgrave, oily, andypost: [regression] DateHelper::dayOfWeekName() returns untranslated name
    - `chore` Issue #3493141 by spokje, quietone: Bump cspell to 8.16.1
    - `chore` Issue #3489022 by mondrake, larowlan, catch, el7cosmos, bbrala, alexpott, fjgarlin, longwave, xurizaemon, rosk0, poker10, mstrelan, nick_schuch: Remove drupalci.yml
    - `docs` Issue #2533756 by quietone, jhodgdon, xjm: Revisit large numbers of @see in text element docs
    - `fix` Issue #3487488 by kim.pepper, mondrake, dakwamine, smustgrave: ExtensionMimeTypeGuesser::guessMimeType must support file names with &quot;0&quot; (zero) in the extension parts like foo.0.zip
    - `fix` Issue #3463226 by quietone, dww, smustgrave, catch, xjm: Use the new equivalent updates API to prevent updates from 10.4.0 to 11.0.0
    - `fix` Issue #3491256 by amateescu: Improve the exception message for unsupported entity types in a workspace
    - `fix` Issue #3492453 by larowlan, catch, longwave, alexpott, godotislate: Memory leak in DrupalKernel when installing modules
    - `chore` Issue #3490163 by spokje, andypost, longwave: Update Composer dependencies for 11.1.0
    - `fix` Issue #3486170 by godotislate, bbrala, finnsky, longwave: Remove use of deprecated &quot;spaceless&quot; filter in core templates
    - `chore` Issue #3491386 by nicxvan: Using hooks_converted container parameter changes $dir during hook collection breaking collection of oop hooks.
    - `chore` Issue #3491464 by longwave, spokje, salmonek: Update CKEditor 5 to 44.0.0
    - `style` Issue #3488005 by spokje: Update stylelint* to latest releases
    - `feat` Issue #3490355 by nicxvan, godotislate, catch: Add procedural hook short circuit per module or file
    - `chore` Issue #3487826 by catch: package_manager kernel tests are slow
    - `chore` Issue #3486995 by nicxvan: Clean up how ModuleInstaller invokes hooks around installing other modules
    - `chore` Issue #3490296 by nicxvan: Mark hook_install_tasks and hook_install_tasks_alter as procedural only
    - `fix` Issue #3490298 by nicxvan: Profiles can be missed in OOP hooks
    - `chore` Back to dev.
    - `chore` Drupal 11.1.0-rc1
    - `fix` Issue #3490710 by mfb: Catch potential exception when calling Request::create() in PathBasedBreadcrumbBuilder
    - `feat` Issue #3478224 by plopesc, m4olivei, penyaskito, dmitry.korhov, phenaproxima: Provide Config Action to add new blocks to navigation from recipes
    - `fix` Issue #3368857 by ultimike, nico059, mattlc, akulsaxena, anand48, jacobupal, smustgrave, kim.pepper, ankitv18, drubolbol: Remove duplication from FileTestForm and FileTestSaveUploadFromForm
    - `feat` Issue #3490570 by nexusnovaz, mstrelan, nicxvan: Add array return to all hook_views_data and hook_field_views_data implementations
    - `docs` Issue #3490638 by tstoeckler, smustgrave: Add return types to update_test_* hooks
    - `fix` Issue #3490507 by alexpott, smustgrave: Fix bogus mocking in \Drupal\Tests\Core\Update\UpdateRegistryTest
    - `fix` Issue #3278759 by mxr576, kristiaanvandeneynde, acbramley, danflanagan8, larowlan, bbrala: Access cacheability is not correct when &quot;view own unpublished content&quot; is in use
    - `chore` Issue #3471494 by catch: follow-up commit to remove icon with special characters that are too special for windows filesystems.
    - `feat` Issue #3471494 by mogtofu33, catch, pdureau, nod_, larowlan, andypost, mxh, grimreaper, ckrina, quietone: Add an icon management API
    - `docs` Issue #3484365 by nexusnovaz, joachim: docs for EntityTypeInterface::getBundleOf() should say entity type *id*
    - `docs` Issue #3484799 by vladimiraus: EntityAccessCheck documentation contains errors
    - `fix` Issue #3486972 by catch, longwave, larowlan: DefaultExceptionHtmlSubscriber should not clone the request for 400/BadRequestException
    - `chore` Issue #3490493 by catch, dww, baysaa, jhodgdon, daffie: Test profiles should be in a tests directory
    - `fix` Issue #3465827 by andypost, kim.pepper, arunkumark, catch, berdir, quietone: Stop passing E_USER_ERROR to trigger_error() on PHP 8.4
    - `fix` Issue #3473374 by mxr576, bbrala, kristiaanvandeneynde: Improve Dynamic Page Cache header assertions in JSON:API tests
    - `fix` Issue #3489900 by nicxvan: Fix reference to hook_library_info_build
    - `fix` Issue #3489776 by mstrelan, nicxvan: Add void return to all pageAttachments, pageTop and pageBottom hook implementations
    - `feat` Issue #3478621 by catch, nicxvan, longwave, alexpott: Add filecache to OOP hook attribute parsing
    - `docs` Issue #3229647 by rpayanm, kentr, xjm, gauravvvv, mherchel, mgifford, lauriii: Use focus-within in hidden.module.css
    - `revert` Revert &quot;Issue #3478621 by catch, nicxvan, longwave: Add filecache to OOP hook attribute parsing&quot;
    - `chore` Issue #3488365 by andypost: Upgrade twig/twig to 3.15.0
    - `feat` Issue #3478621 by catch, nicxvan, longwave: Add filecache to OOP hook attribute parsing
    - `fix` Issue #3489329 by mfb, casey: symfony/http-foundation commit 32310ff breaks PathValidator
    - `fix` Issue #3489915 by phenaproxima: RecipeInputFormTrait forces you to check all checkboxes
    - `docs` Issue #3484564 by plopesc, finnsky, m4olivei, ckrina, catch, larowlan: Define the 3 areas the Top Bar will provide
    - `fix` Issue #3471490 by nayana_mvr, smustgrave, larowlan: field:not(:last-child) does not work with layout builder in olivero
    - `chore` Issue #3487816 by catch, berdir, smustgrave, quietone: Ensure tests don&#039;t run twice
    - `fix` Issue #3483353 by a.dmitriiev, phenaproxima, atul_ghate, alexpott, roderik: Remove the createCopy action from EntityDisplayBase, and make cloneAs compatible with wildcards
    - `docs` Issue #3487908 by spokje, smustgrave: Update cspell to latest
    - `chore` Issue #3467309 by spokje, smustgrave: Replace abandoned, not working with latest stylelint, leon0399/stylelint-formatter-gitlab with gitlab-formatters/stylelint-formatter-gitlab
    - `fix` Issue #3488768 by plopesc, m4olivei, atul_ghate: Menu blocks specific to Navigation are leaking into the Block layout UI
    - `chore` Issue #3486526 by theodorejb, andypost, nicxvan: Inconsistent switch case syntax
    - `docs` Issue #3487921 by chandansha, joachim: incorrect docs for MenuLinkFieldDefinitions
    - `docs` Issue #2982582 by arunkumark, nexusnovaz, anish.a, avpaderno, smustgrave, joachim, godotislate, larowlan, cburschka: hook_requirements() doesn&#039;t say that severity is optional, or what the default is
    - `fix` Issue #2969406 by bhanu951, robincs, quietone, ranjit1032002, sahil.goyal, urvashi_vora, opdavies, elber, aaronmchale, avpaderno, smustgrave, alberto56, cilefen, benjifisher, lauriii, larowlan, Mahima_Mathur23, nkoporec, borisson_, poker10: Fix incorrect message after resetting password
    - `fix` Issue #3488742 by catch, phenaproxima, gábor hojtsy: Stop calling node_add_body_field() from NodeTypeForm
    - `fix` Issue #3483576 by mondrake: Method getMockForAbstractClass() is deprecated - replace in classes EntityTypeTest and EntityTypeManagerTest
    - `fix` Issue #3483577 by mondrake: Method getMockForAbstractClass() is deprecated - replace in class EntityFormTest
    - `feat` Issue #3418136 by shalini_jha, smustgrave, rohit sankhla: Add last() function to ItemInterface/ItemList
    - `fix` Issue #3488664 by phenaproxima: The PlaceBlock config action breaks when placing a block in an empty region
    - `feat` Issue #3443833 by plopesc, m4olivei, gábor hojtsy, matthieuscarset, penyaskito, larowlan, tim.plunkett: Provide a way for other modules to flag block plugin implementations as &#039;navigation safe&#039;
    - `feat` Issue #3483435 by phenaproxima, alexpott, thejimbirch: Add a trait for forms that want to collect input on behalf of a recipe
    - `refactor` Issue #3488176 by nicxvan, godotislate: Convert system_theme to OOP and handle install time call
    - `refactor` Issue #3487971 by nicxvan, godotislate: Convert system_page_attachments to OOP
    - `perf` Issue #3487031 by larowlan, alexpott, themodularlab, ericgsmith, longwave, spokje: Performance Degraded after update to twig 3.14.2
    - `chore` SA-CORE-2024-007 by mcdruid, larowlan
    - `chore` SA-CORE-2024-006 by mcdruid, larowlan
    - `chore` SA-CORE-2024-004 by zengenuity, cilefen, kristiaanvandeneynde, mcdruid, larowlan
    - `chore` SA-CORE-2024-003 by jrb, larowlan, catch, mingsong, poker10, longwave, benjifisher
    - `fix` Issue #3487449 by tom konda: Prefer to replace some of typeof obj !== &#039;undefined&#039; with optional chaining
    - `chore` Issue #3487579 by spokje, smustgrave, catch, nod_: Bump ckeditor 43.1.1 =&gt; 43.3.1
    - `fix` Issue #3106205 by jrglasgow, plopesc, jonathan1055, smustgrave, edmund.dunn, heddn, narendra.rajwar27, jamiehollern, joshua1234511, murilohp, jacob.embree, mayurjadhav, raman.b, voviko, sonnykt, catch, kristen pol, dspachos, longwave, fmb, quietone, xjm, larowlan, devad: Length of menu_tree.url and menu_tree.route_param_key are too short (255 characters)
    - `fix` Issue #3477324 by andypost, alexpott: Fix usage of str_getcsv() and fgetcsv() for PHP 8.4
    - `fix` Issue #2855328 by danflanagan8, sourabh.singhal, Pancho, aarti zikre, asad_ahmed, priscarabelli, anushrikumari, ashwinparmar, vikashsoni, cilefen, ideaseed, Archana.Phatangare, quietone, finex, alexpott, catch, smustgrave, sugaroverflow: Password and confirm password should be mandatory fields while setting up password using one time link following by email
    - `perf` Issue #3488179 by phenaproxima, thejimbirch: RecipeConfigurator::getIncludedRecipe() should statically cache recipe objects to avoid performance problems
    - `chore` Issue #3486741 by spokje, smustgrave, markconroy: CSS linting (stylelint): npx update-browserslist-db@latest
    - `revert` Revert &quot;Issue #3486972 by catch, longwave: DefaultExceptionHtmlSubscriber should not clone the request for 400/BadRequestException&quot;
    - `fix` Issue #3487665 by mstrelan, nicxvan: Add void return type to all hook_cron implementations
    - `fix` Issue #3486972 by catch, longwave: DefaultExceptionHtmlSubscriber should not clone the request for 400/BadRequestException
    - `chore` Issue #3487579 by spokje, smustgrave: Bump ckeditor 43.1.1 =&gt; 43.3.1
    - `docs` Issue #3484349 by amateescu: Add missing @return types for StringTranslationTrait::formatPlural() and ::getNumberOfPlurals()
    - `fix` Issue #3410128 by quietone, longwave, nikolay shapovalov, smustgrave: Remove remaining unnecessary uses of t() in tests
    - `fix` Issue #3422977 follow-up by alexpott: Rename locale batch operation callbacks to match the API methods they call
    - `fix` Issue #3422977 by secretsayan, traviscarden, nexusnovaz, joachim, smustgrave, xjm, catch: Rename locale batch operation callbacks to match the API methods they call
    - `revert` Revert &quot;Issue #3405277 by scott_euser, anybody: Add vertical-align: top as default for table cells&quot;
    - `docs` Issue #3462973 by mattlc, ultimike, smustgrave, dww, larowlan, alexpott: Provide details of where core tests, not in core modules, should live
    - `refactor` Issue #3487666 by mstrelan, nicxvan: Add void return type to all *_alter hook implementations
    - `feat` Issue #3483341 by mstrelan, smustgrave: Add array return type to all hook_schema implementations
    - `fix` Issue #3487088 by lavanyatalwar, nicxvan: Fix trailing comma in entity type Attribute declarations
    - `fix` Issue #3483299 by tstoeckler, mstrelan, nicxvan: Add void return type to all preprocess hook implementations
    - `chore` Back to dev.
    - `chore` Drupal 11.1.0-beta1
    - `chore` Issue #2972622 by amateescu, catch, gábor hojtsy, fabianx, lauriii: Split the workspaces UI into a separate module
    - `chore` Issue #2972622 by amateescu, catch, gábor hojtsy, fabianx, lauriii: Split the workspaces UI into a separate module
    - `fix` Issue #3487482 by amateescu, catch, benjifisher, ekes, finn lewis, fabianx, larowlan: Creating a published moderated entity in a workspace shouldn&#039;t make it published in Live
    - `revert` Revert &quot;Issue #3478621 by catch, longwave, nicxvan: Add filecache to OOP hook attribute parsing&quot;
    - `feat` Issue #3478621 by catch, longwave, nicxvan: Add filecache to OOP hook attribute parsing
    - `feat` Issue #3480442 by mstrelan, alexpott, smustgrave: Add return types to UserCreationTrait
    - `chore` Issue #3483481 by quietone, dww, catch: Hide and restrict package_manager (and update_manager) behind a dev/prod toggle so that they can be alpha stability in tagged releases
    - `feat` Issue #3486981 by phenaproxima, thejimbirch: Allow recipes to enable Layout Builder via config actions
    - `fix` Issue #3473608 by amateescu, plach, ajits: Workspace association does not work with entities with non-numeric IDs
    - `chore` Issue #3483599 by nicxvan, ghost of drupal past, catch, longwave, fabianx: Convert all procedural hook implementations to Hook classes
    - `fix` Issue #3481539 by mondrake: Method getMockForAbstractClass() is deprecated - replace in EntityUrlTest
    - `fix` Issue #3439832 by pooja_sharma, solimanharkas, smustgrave, quietone, vensires: Fix Content Moderation tests that rely on UID1&#039;s super user behavior
    - `docs` Issue #3480293 by gapple: ConfigTarget::__construct() documentation references incorrect ToConfig enum name
    - `chore` Issue #3487286 by spokje: Update to Symfony 7.2.0-RC1
    - `feat` Issue #3113989 by acbramley, mohit_aghera, maskedjellybean, scott_euser, yogeshmpawar, lendude, ranjith_kumar_k_u, ameymudras, kristen pol, rahul b, larowlan, quietone, dww, alexpott, daffie: Media author views filter should use the user_name plugin
    - `fix` Issue #3483050 by mstrelan, nicxvan: Add int return type to all hook_update_last_removed implementations
    - `fix` Issue #3483065 by nicxvan, mstrelan: Add void return type to all hook_form_alter, hook_form_FORM_ID_alter and hook_form_BASE_FORM_ID_alter implementations
    - `fix` Issue #3484249 by mstrelan: Add void return type to all hook_entity_type_alter implementations
    - `docs` Issue #3396166 by godotislate, berdir, quietone, bbrala, joachim, nicxvan, catch, kristiaanvandeneynde, larowlan: Convert entity type discovery to PHP attributes
    - `fix` Issue #3310170 follow-up by nicxvan, godotislate: Use UUID as entity ID
    - `fix` Issue #3310170 by bradjones1, tstoeckler, smustgrave, thursday_bw: Use UUID as entity ID
    - `chore` Issue #3483931 by mondrake: [CI] Use testdox and colors in tests spawned by run-tests.sh
    - `chore` Issue #3486550 by spokje, catch: Update Composer dependencies for 11.1.0-beta1
    - `docs` Issue #3485690 by nicxvan: Update Implements hook comments to be accurate or add them if missing
    - `fix` Issue #3486462 by nicxvan: Support #Hook for several hooks called by ModuleInstaller
    - `feat` Issue #3483040 by quietone: Add array return type to all hook_removed_post_updates implementations
    - `fix` Issue #3484754 by nicxvan, godotislate: Ordering of hooks needs some attention
    - `chore` Issue #3484463 by andypost, benjifisher: Upgrade open-telemetry packages for PHP 8.4
    - `chore` Revert &quot;Issue #3486550 by spokje: Update Composer dependencies for 11.1.0-beta1&quot;
    - `chore` Issue #3486550 by spokje: Update Composer dependencies for 11.1.0-beta1
    - `fix` Issue #3486195 by longwave, alexpott, dmundra: An update to symfony/http-foundation plus a trailing space took down the views UI
    - `chore` Issue #3486198 by quietone, catch, lauriii: Hide the navigation top bar in 11.1.x and 10.4.x
    - `fix` Issue #3485956 by mradcliffe, jan kellermann, gillesbailleux, raphaelbertrand, cilefen, larowlan: Recursion limit exceeded with Twig v3.14.1 when editing a node or a block
    - `docs` Issue #3405277 by scott_euser, anybody: Add vertical-align: top as default for table cells
    - `fix` Issue #3485659 by nicxvan: Remove HookOrder
    - `fix` Issue #3482618 by nicxvan, godotislate: ModuleHandler-&gt;alterDeprecated does not properly handle deprecated OOP hooks
    - `docs` Issue #3485470 by nicxvan, lendude: views_form_views_exposed_form_alter is documented as hook_form_alter instead of hook_form_FORM_ID_alter
    - `chore` Revert &quot;Issue #3476420 by goz, catch: Add assertions to OpenTelemetryNodePagePerformanceTest::testNodePageHotCache()&quot;
    - `fix` Issue #3485117 by nexusnovaz, godotislate, nicxvan: Fix return type on HookCollectorPass::collectAllHookImplementations()
    - `fix` Issue #3479411 by phenaproxima, thejimbirch: The addItemToToolbar config action should not, by default, add items that are already in the toolbar
    - `fix` Issue #3478185 by quietone, larowlan: Fix MissingParamType for tests
    - `chore` Issue #3477614 by quietone: Ignore VariableComment.Missing as needed
    - `fix` Issue #3386313 by kksandr, mxr576, smustgrave, longwave, catch: The entity link label formatter should check URL access
    - `fix` Issue #3480029 by kim.pepper, mstrelan: Add return typehint to \Drupal\Core\DependencyInjection\DeprecatedServicePropertyTrait::__get()
    - `fix` Issue #3330481 by spokje, quietone, mstrelan, smustgrave: Fix PHPStan L2 error &quot;PHPDoc tag @foo has invalid value (Bar)&quot;
    - `chore` Issue #2350849 by mondrake, fietserwin, ankithashetty, jhedstrom: Deprecate image_filter_keyword()
    - `docs` Issue #3477687 by mstrelan, quietone: Add ResponseInterface return typehints to protected test helper methods
    - `chore` Issue #3482062 by quietone, phenaproxima: Remove phenaproxima as a Migrate subsystem maintainer
    - `fix` Issue #3483899 by nicxvan, godotislate: hook_module_implements_alter hook_cache_flush can only be procedural
    - `fix` Issue #3484105 by nicxvan, godotislate: Automatically included .inc files are no longer included
    - `chore` Drupal 11.1.x-dev
    - `chore` Issue #3483978 by spokje, longwave, andypost: Update to Symfony 7.2.0-BETA1
    - `chore` Issue #3477529 by mondrake: [CI] Remove the &#039;with-database&#039; requirement for unit tests
    - `feat` Issue #3476420 by goz, catch: Add assertions to OpenTelemetryNodePagePerformanceTest::testNodePageHotCache()
    - `feat` Issue #3483039 by mstrelan, bbrala: Add array return type to all hook_theme implementations
    - `feat` Issue #3483057 by mstrelan, bbrala, smustgrave: Add void return type to all hook_install and hook_uninstall implementations
    - `docs` Issue #3483515 by megakeegman, mlncn: D7 node_revision table is referred to as node_revisions
    - `fix` Issue #3481418 by tomdearden, longwave: Typo in error message when MySQL socket connection fails
    - `fix` Issue #3323702 by spokje, _pratik_, quietone: Fix PHPStan L2 error &quot;Variable $foo in PHPDoc tag @var does not exist. &quot; - Low Hanging Fruit Edition
    - `feat` Issue #3180505 by arunkumark, abhijith s, pcambra, anmolgoyal74, smustgrave, alexpott, lendude, catch: Allow token replacement for array URLs on views custom URLs
    - `fix` Issue #3479887 by bradjones1, mcdruid: CommentUserNameTest::testUsername() failure due to missing comment type
    - `fix` Issue #3478200 by quietone, alexpott: Fix MissingParamType in core/lib/Drupal/Component
    - `fix` Issue #3474978 by mondrake, quietone: Method getMockForAbstractClass() is deprecated - replace in class KeyValueEntityStorageTest
    - `chore` Issue #3479205 by alexpott, phenaproxima, catch: Wire Composer Stager into Package Manager&#039;s services.yml
    - `fix` Issue #3482783 by phenaproxima, alexpott: Consider making the cloneAs config action optionally fail if the clone already exists
    - `chore` Issue #3346707 by tedbow, phenaproxima, alexpott, catch, wim leers, dww, effulgentsia, gábor hojtsy, drumm, grasmash, chrisfromredfin, fizcs3, cola, capysara, diegors, daisyleroy, abhishek_gupta1, bnjmnm, quietone, lauriii, poker10, xjm, anish.a, ajits, traviscarden, heddn, Idoni, srishtiiee, siramsay, shabbir, rocketeerbkw, Schnitzel, s_leu, Theresa.Grannum, yash.rode, wiifm, wendyZ, tim.plunkett, Webbeh, rkoller, Ranjit1032002, kunal.sachdev, kjankowski, jayesh.d, immaculatexavier, Ishani Patel, leksat, lhridley, percoction, rahul_, p.ayekumi, omkar.podey, narendra.rajwar27, narendrar: Add Alpha level Experimental Package Manager module
    - `fix` Issue #3461896 by clayfreeman, quietone, smustgrave, nod_: Overridden view block title should be set on the view itself
    - `fix` Issue #3476011 by mondrake: Change run-tests.sh to use Symfony Process instead of proc_open
    - `fix` Issue #3477346 by mondrake, smustgrave, larowlan: ExtensionMimeTypeGuesser::guessMimeType returns less accurate MIME type when file extensions have multiple parts
    - `fix` Issue #3477600 by quietone, annmarysruthy, larowlan: Remove 7 unused class properties in tests
    - `fix` Issue #3463111 by sanket.tale, jaydeep_patel, yujiman85, sheetal.pathak, rachel_norfolk, sagarmohite0031, rduterte, binssss, smustgrave: Spacing issue between Checkbox label and button
    - `docs` Issue #3344765 by lauriii, nayana_mvr, kleiton_rodrigues, smustgrave: Inconsistencies in system-status-counter RTL styles
    - `docs` Issue #3471686 by nayana_mvr, sagarmohite0031, marc.bau: CSS &quot;form-item__label&quot; inconsistent on node edit forms
    - `feat` Issue #3425114 by kingdutch, godotislate, mxr576, catch, larowlan: Add revolt/event-loop dependency to core
    - `fix` Issue #3477527 by tobiasb, manibharathi ezhimalai ravi: Remove datepicker polyfills attributes for datetime element
    - `fix` Issue #3474499 by quietone, nicxvan: Fix spelling of 3 &#039;base&#039; words
    - `docs` Issue #3474640 by benjifisher, joachim: Drupal\Tests\migrate\Unit\destination\EntityRevisionTest uses weird mocking pattern
    - `docs` Issue #3470403 by mstrelan, smustgrave, quietone: Add EntityInterface return typehints to protected test helper methods
    - `fix` Issue #3293926 by kingdutch, geekygnr, godotislate, m4olivei, longwave: Error decorating non-existent service when inner service&#039;s module not installed
    - `fix` Issue #3462156 by niklan, vensires, smustgrave, quietone, wim leers: Throw an exception if a component property&#039;s `type` contains non-string values
    - `fix` Issue #2479449 by sudiptadas19, smustgrave, akashkumar07, rithesh bk, rpayanm, pradhumanjain2311, tstoeckler, mrinalini9, tatisilva, larowlan, andypost, dawehner, xjm, yesct: contact_menu_local_tasks_alter() should check whether [&#039;tabs&#039;][0] is set
    - `docs` Issue #3458426 by mstrelan, catch, abarrio, quietone, smustgrave: Add int return typehints to protected test helper methods
    - `feat` Issue #3481695 by phenaproxima, a.dmitriiev, thejimbirch, b_sharpe, alexpott: Entity displays cloning requires special config action
    - `docs` Issue #3456601 by mstrelan, xjm, smustgrave, longwave: Add void return typehints to test helper methods
    - `feat` Issue #3038040 by bradjones1, claudiu.cristea, swentel, bvoynick, longwave, grayle, timwood, alexpott: Support priority for needs_destruction service tag
    - `perf` Issue #3251754 by spokje, quietone, longwave, smustgrave, mallezie, mstrelan, alexpott, daffie, tstoeckler, mondrake, samaraof@ciandt.com: Use DrupalPractice.CodeAnalysis.VariableAnalysis for Kernel and Unit tests
    - `docs` Issue #3475533 by catch, mondrake: Suppress Symfony debug classloader deprecations for ArrayAccess
    - `docs` Issue #3477613 by quietone: Add doc block for $modules in tests
    - `fix` Issue #3482283 by nicxvan, alexpott, ghost of drupal past, elc, larowlan, fjgarlin, claudiu.cristea, chi: Symlinking a module breaks HookCollectorPass
    - `fix` Issue #3050559 by markconroy, finnsky, mgifford, smustgrave, nod_: Umami Home Page content is not in the main region
    - `revert` Revert &quot;Issue #3476422 by goz, quietone, catch: Add assertions to OpenTelemetryNodePagePerformanceTest::testNodePageWarmCache()&quot;
    - `fix` Issue #3475753 by quietone: Use install/uninstall in layout builder expose all field
    - `feat` Issue #3445993 by plopesc, m4olivei, quietone, gauravvvv, catch, finnsky, larowlan, nod_: Provide a NavigationLinkBlock Plugin and use Help as an usage example
    - `docs` Issue #3469607 by murz, drumm, mcdruid, greggles: Nightwatch tests from submodules do not run in Gitlab CI because of missing option to follow symlinks
    - `fix` Issue #3473999 by mondrake, smustgrave, catch: Ajax-enabled image effect forms do not update to the latest ajax processed configuration
    - `fix` Issue #3481751 by phenaproxima, thejimbirch: Opt some core recipes out of strict config comparisons
    - `fix` Issue #2462105 by jhedstrom, anmolgoyal74, nexusnovaz, borisson_, berdir, mkalkbrenner, fago: Improve failed password hashing exception message
    - `fix` Issue #3319601 by pooja_sharma, sunlix, bkosborne, quietone, smustgrave, longwave, lendude: Media image thumbnail incorrectly ends up as NULL when it should be an empty string
    - `feat` Issue #2578855 by gaëlg, wim leers, andyf, prudloff, johnwebdev, duaelfr, jonathanshaw, catch, quietone, longwave, berdir, dawehner: Form tokens are now rendered lazily, allow forms to opt in to be cacheable
    - `fix` Issue #3470876 by dpi, acbramley: Check term view access before trying to redirect after an update
    - `test` Issue #3474627 by daffie, catch: Make the nightwatch tests work with MongoDB
    - `feat` Issue #3476422 by goz, quietone, catch: Add assertions to OpenTelemetryNodePagePerformanceTest::testNodePageWarmCache()
    - `feat` Issue #3466573 by mxr576: Expose UUID tokens for all content entities in Drupal core
    - `fix` Issue #1427838 by sukr_s, smustgrave, quietone, tim.plunkett, alexpott: password_confirm children do not pick up #states or #attributes
    - `feat` Issue #3442009 by nicxvan, joachim, quietone, bhanu951, godotislate, longwave, catch, acbramley, solideogloria, mstrelan, fabianx, sun, donquixote, dawehner, benjy, claudiu.cristea, dpi: OOP hooks using attributes and event dispatcher
    - `feat` Issue #3462829 by pooja_sharma, plopesc, catch, smustgrave, penyaskito, kumudb, skaught, m4olivei: Store the file path instead of ID for the navigation logo
    - `fix` Issue #3479857 by amateescu: User login and password reset forms should be workspace-safe
    - `feat` Issue #3478166 by quietone, smustgrave, mstrelan: Add MissingParamType for form, form_state and form_id
    - `perf` Issue #3478240 by amateescu, smustgrave: Improve performance for path_alias queries in a workspace
    - `chore` Issue #3458215 by finnsky, m4olivei, ckrina, pooja_sharma, nod_, meeni_dhobale, gauravvvv, pdureau, smustgrave, e0ipso: Migrate Toolbar button to SDC
    - `feat` Issue #3481238 follow-up by phenaproxima, a.dmitriiev, b_sharpe, alexpott: Add a config action to clone a config entity
    - `feat` Issue #3481238 by phenaproxima, a.dmitriiev, b_sharpe, alexpott: Add a config action to clone a config entity
    - `feat` Issue #2959551 by quietone, kaythay, nikhil_110, alexpott, smustgrave, tstoeckler: Variable::export should export using short-hand array syntax
    - `feat` Issue #3464550 by phenaproxima, a.dmitriiev, b_sharpe, alexpott: Create config action which can create an entity for every bundle of another entity type
    - `fix` Issue #3479153 by phenaproxima, b_sharpe: InputConfigurator::collectAll() should use an internal passed-in recursion tracker, not a static variable
    - `fix` Issue #3480919 by mondrake: Method getMockForAbstractClass()  is deprecated - replace in Drupal\Tests\views\Unit\Plugin\argument_validator\EntityTest
    - `chore` SA-CORE-2024-002 by prudloff, catch, larowlan, benjifisher, kim.pepper, wim leers, xjm
    - `fix` Issue #3438769 by vinmayiswamy, amateescu, catch, antonnavi, michelle: Sub workspace does not clear
    - `fix` Issue #3227335 by mondrake, quietone, smustgrave, longwave: Deprecate unused kernel test assertions in AssertContentTrait
    - `feat` Issue #3446433 by sanket.tale, ahsannazir, nayana_mvr, gauravvvv, finnsky: Navigation: Theme aside layout builder section on navigation block page
    - `feat` Issue #3479665 by thejimbirch, danny englander, phenaproxima, pameeela: Add views.view.taxonomy_term.yml to tag_taxonomy recipe
    - `fix` Issue #3479912 by phenaproxima, alexpott: The content_editor_role recipe assigns a permission that might not exist
    - `chore` Issue #3475916 by spokje, longwave: Bump phpstan/phpstan to 1.12.4 to make daily &quot;updated deps&quot; QA run pass again
    - `chore` Issue #3475916 by spokje, longwave: Bump phpstan/phpstan to 1.12.4 to make daily &quot;updated deps&quot; QA run pass again
    - `fix` Issue #3469792 by amateescu, antonnavi, smustgrave, djdevin, quietone: Workspaces with thousands of items can&#039;t be published
    - `feat` Issue #3461318 by mstrelan, smustgrave, bbrala, catch, kingdutch, longwave, quietone, spokje, xjm, larowlan: Enforce return types in all new methods and functions
    - `fix` Issue #3403641 by omarlopesino, smustgrave, quietone, kristiaanvandeneynde: Unable to generate canonical, edit, and update URLs for entity test multilanguage with bundle
    - `fix` Issue #3471932 by mstrelan, bbrala, quietone: Fix callables that are expected to return bool but don&#039;t
    - `feat` Issue #3458167 by sokru, andypost, prashant.c, quietone: Add password option to Drupal\Core\Command\InstallCommand
    - `feat` Issue #3262156 by finnsky, kostyashupenko, ranjith_kumar_k_u, gauravvvv, nayana_mvr, pradipmodh13, libbna: Olivero: Simplification of the grid layouts to use CSS grid (instead of Flexbox)
    - `docs` Issue #3478281 by pere orga, nayana_mvr: CKEditor 5 has its own border color and is not using Claro&#039;s colors
    - `docs` Issue #3083507 by oknate, jungle, quietone, neelam_wadhwani, longwave, xjm, tim.plunkett, smustgrave: Standardize &quot;plugin ID&quot; in doc comments instead of &quot;plugin_id&quot;
    - `fix` Issue #3473203 by mstrelan: Fix use of ConstraintViolation instead of ConstraintViolationInterface in CKEditor5 tests
    - `fix` Issue #3477329 by phenaproxima, thejimbirch, b_sharpe: Recipe validation should always treat required modules as installed
    - `fix` Issue #3474731 by mondrake: Method getMockForAbstractClass() is deprecated - replace in class EntityLinkTest
    - `fix` Issue #3475024 by mondrake: Method getMockForAbstractClass() is deprecated - replace in class ViewsLocalTaskTest
    - `fix` Issue #3444257 by bbrala, mxr576, quietone, acbramley, larowlan, casey, enyug, mstrelan, nick_schuch: ResourceObjectNormalizer::getNormalization can result in max-age drift when different sets of fields are requested
    - `docs` Issue #3247205 by beatrizrodrigues, quietone, joachim: MigrateDestinationInterface::rollback() should document that its $destination_identifier parameter is an associative array
    - `fix` Issue #2560237 by bhanu951, smustgrave, _utsavsharma, ankithashetty, alexpott, larowlan, catch, jhedstrom: UpdatePathTestBase saves the root user before updates have run
    - `fix` Issue #3463875 by spokje, jrb, godotislate, smustgrave: Ensure uniqueBundleId is unique in LoadJS
    - `feat` Issue #3478771 by phenaproxima, smustgrave, alexpott: InputConfigurator should expose input data definitions
    - `chore` Issue #3479160 by longwave, catch, fjgarlin, nod_: 11.0.x yarn dependencies have mushroomed
    - `feat` Issue #3478332 by phenaproxima, nicxvan, thejimbirch, alexpott: Add a way to prevent recipes&#039; imported config from being compared too strictly to active config
    - `fix` Issue #3473014 by tom konda: Prefer to add &quot;node:&quot; prefix to require() which imports Node.js built-in module
    - `fix` Issue #3359649 by arnested, shalini_jha, alexpott, arunkumark, cilefen, smustgrave, aduthois, catch, quietone: User routes alter in custom module throwing error on &quot;_format&quot;
    - `fix` Issue #3310963 by rcodina, quietone, anybody, joegraduate, smustgrave, xjm, cilefen, alexpott, larowlan: Attach correct image/webp header in .htaccess when mime module is enabled
    - `fix` Issue #3477366 by andypost: Fix closures in tests for PHP 8.4
    - `feat` Issue #2005626 by sukr_s, gold, jhedstrom, neelam_wadhwani, neslee canil pinto, jweowu, Mixologic, quietone, daffie, smustgrave, longwave, mondrake: Implement \Drupal\Core\Database\Query\Update::arguments
    - `feat` Issue #3100083 by finnsky, Zsuffa Dávid, ankithashetty, _utsavsharma, gauravvvv, smustgrave, zrpnr, markconroy: Add js message theme override to match Umami message markup
    - `fix` Issue #3387960 by quietone, alexpott, daffie, mondrake, amateescu: Fix return type in \Drupal\Core\Database\Query\Merge::__toString
    - `refactor` Issue #3474123 by plopesc, smustgrave, alexpott: Reorganize navigation settings to be more consistent
    - `chore` Issue #3477799 by spokje, longwave, smustgrave: Update CKEditor 5 to 43.1.1
    - `docs` Issue #3478422 by catch: Tweak @group #slow for kernel tests again
    - `fix` Issue #3213995 by groendijk, bnjmnm, gauravvvv, smovs, cindytwilliams, smustgrave, lauriii: Olivero: submit button is too wide in the off canvas dialog box
    - `fix` Issue #3470276 by spuky, nayana_mvr, smustgrave: To long Breadcrumbs are creating scrollbar
    - `fix` Issue #3478425 by catch, mondrake: Regression in run-tests.sh ordering of unit tests
    - `perf` Issue #3477740 by tom konda, smustgrave: Prefer to replace all window.pageYOffset/window.pageXOffset with window.scrollY/window.scrollX
    - `docs` Issue #3476226 by ekorzen2, lostcarpark, joachim, dc-mkinoshita, chrisdarke, rfay: Incorrect docs for constructor param in Plugin attribute class
    - `docs` Issue #3453786 by soham sengupta, drupatz, joachim, smustgrave, rodrigoaguilera: In DefaultSelection document why values for target_bundles NULL and [] behave as they do
    - `fix` Issue #3478132 by pere orga, smustgrave, cilefen: Fix case in comment (OPcache)
    - `docs` Issue #2838571 by nexusnovaz, quietone, Damien Flament: Improve description for parameters in hook_menu_links_discovered_alter
    - `chore` Issue #3458608 by nishtha.pradhan, ankitv18, vinmayiswamy, quietone, catch, smustgrave: Deprecate $variables[&#039;view&#039;] for node.html.twig
    - `fix` Issue #3478417 by longwave, cmlara: Error handler crashes with Undefined constant &quot;DRUPAL_TEST_IN_CHILD_SITE&quot;
    - `chore` Issue #3457781 by catch, longwave, senscybersecurity, cmlara, cilefen, poker10, greggles, alexpott, ericgsmith, xjm: Maintenance pages leak sensitive environment information
    - `feat` Issue #2951814 by wim leers, mxr576, vakulrai, claudiu.cristea, neclimdul, alexpott, sanjayk, joachim, chi, smustgrave: Improve X-Drupal-Cache and X-Drupal-Dynamic-Cache headers, even for responses that are not cacheable
    - `docs` Issue #3456699 by nicoschi, joelpittet, doxigo: The dotfiles are ignored when copied over in Starterkit
    - `chore` Issue #3477805 by spokje, longwave: Update Webpack to 5.95.0
    - `fix` Issue #3462868 by annmarysruthy, yujiman85, nexusnovaz, pierregermain, ankitv18, sheetal-wish, smustgrave, lostcarpark, rodrigoaguilera, ultimike: Replace url usage of http://www.w3.org with https://www.w3.org in core
    - `fix` Issue #3477373 by finnsky, bbrala, longwave: Fix &quot;Not passing an instance of &quot;TwigFunction&quot; when creating a function of type &quot;FunctionExpression&quot; is deprecated.&quot;
    - `fix` Issue #3477374 by finnsky, longwave, bbrala: Fix &quot;The &quot;tag&quot; constructor argument of the &quot;Drupal\\Core\\Template\\TwigNodeTrans&quot; class is deprecated and ignored&quot;
    - `fix` Issue #3474692 by longwave, foxtrotcharlie, bbrala: Fix &quot;Twig\Node\Expression\FilterExpression&quot; deprecation introduced in twig/twig 3.12.0
    - `fix` Issue #3457168 by raphaelbertrand, gauravvvv, bbrala, longwave: Since twig/twig 3.9: error with &quot;twig_escape_filter&quot; function usage in /core/lib/Drupal/Core/Template/TwigExtension.php
    - `docs` Issue #3458565 by nishtha.pradhan, sadamafridi, joachim, smustgrave, vinmayiswamy, rodrigoaguilera, dksdev01, bibliophileaxe, devjuarez: TablesInterface::addField() doesn&#039;t document that $field can contain relationships
    - `fix` Issue #3336994 by mxr576, kksandr, dpi, smustgrave, xjm, alexpott, hchonov, quietone: StringFormatter always displays links to entity even if the user in context does not have access
    - `feat` Issue #3302833 by akhil babu, b_sharpe, alexpott, oily, smustgrave: Improve PluginNotFound exception to include possible shorthand action IDs
    - `fix` Issue #3110831 by bbrala, z3cka, smustgrave, mglaman, wim leers, alexpott, matthand: Method to enable a resource type field disabled by a previous ResourceTypeBuildEvent subscriber
    - `revert` Revert &quot;Issue #3458426 by mstrelan, catch, smustgrave: Add int return typehints to protected test helper methods&quot;
    - `docs` Issue #3458426 by mstrelan, catch, smustgrave: Add int return typehints to protected test helper methods
    - `fix` Issue #3473214 by mstrelan: Stop passing ints to DateTimePlus::createFromFormat and DrupalDateTime::createFromFormat
    - `fix` Issue #3471949 by mstrelan: Allow passing MarkupInterface to AssertContentTrait::setRawContent
    - `docs` Issue #1630568 by sokru, Laureatus, quietone, smustgrave, ravi.shankar: Validate that uploaded .po files are UTF8
    - `docs` Issue #3457863 by grimreaper, catch, pdureau, maboy, longwave: YAML discovery does not take theme inheritance into account
    - `fix` Issue #3403535 by mlncn, tobiasb, nayana_mvr, pameeela: Claro removes default styling from abbreviations (&lt;abbr&gt; tag)
    - `docs` Issue #221761 by mohit_aghera, pameeela, dixon_, catch, ged3000, sun, deepakaryan1988, smustgrave, stefank, jredding, dawehner, harshit97, xjm, jhedstrom, geertvd, alexpott, Dries: Hide reply link for unpublished comments
    - `fix` Issue #3467860 by googletorp, catch, smustgrave, alexpott, swentel: Ensure consistent ordering when calculating library asset order
    - `docs` Issue #3470114 by quietone, smustgrave: Change string &#039;Modules to enable&#039; that are not in comments
    - `fix` Issue #3472319 by prashant.c, f0ns, bebalachandra, markconroy: Header is always shown in Claro even when regions in it are empty
    - `docs` Issue #3470203 by mstrelan, smustgrave: Add (more) bool return typehints to protected test helper methods
    - `fix` Issue #3179199 by ekes, acrazyanimal, adriancid, smustgrave, sam152, amateescu, ravi.shankar, alexj12, s_leu, renatog: Content Moderation prevents workspace deployment
    - `fix` Issue #3475512 by daffie: Replace hardcoded database queries with dynamic queries
    - `docs` Issue #3465154 by yujiman85, n-m-daz, nod_: Update run-tests.sh help output to match current test organization
    - `fix` Issue #3470179 by catch, quietone: Account for test type, number of methods, and data providers in test ordering
    - `revert` Revert &quot;Issue #3438769 by vinmayiswamy, antonnavi, michelle, amateescu: Sub workspace does not clear&quot;
    - `feat` Issue #3469309 by mstrelan, smustgrave, moshe weitzman: Use one-time login link instead of user login form in BrowserTestBase tests
    - `fix` Issue #1630576 by nexusnovaz, jhodgdon, catch: Cron reports it&#039;s done long before it really is done
    - `fix` Issue #3438769 by vinmayiswamy, antonnavi, michelle, amateescu: Sub workspace does not clear
    - `fix` Issue #3471410 by mondrake: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - replace in class HelpTopicTwigTest
    - `fix` Issue #3275491 by dewalt, murz, pooja_sharma, avpaderno, Nicolas Bouteille, dmitry.korhov: External application is redirected to frontpage in maintenance mode
    - `fix` Issue #3384600 by bsuttis, berdir, spokje, catch, benjifisher, smustgrave: Don&#039;t hide permissions local tasks on bundles when no permissions are defined
    - `refactor` Issue #2484623 by quietone, anavarre, nod_, Manuel Garcia, rteijeiro, kostyashupenko, ankithashetty, smustgrave, jeroent, xjm, droplet, cilefen, travis-bradbury, catch: Move all JS in modules to a js/ folder
    - `fix` Issue #3196937 by quietone, ayushmishra206, paulocs, guilhermevp, alexpott: Deprecate the string code path for values parameter in BlockContentTestBase::createBlockContentType
    - `fix` Issue #3447837 by finnsky, m4olivei, plopesc, kostyashupenko, kanchan bhogade, smustgrave, alexpott: Special Menu items are rendered as empty links in navigation
    - `docs` Issue #3467290 by quietone: Move test_entity names to drupal-dict
    - `fix` Issue #3465826 by arunkumark, andypost: Remove deprecated in PHP 8.4 the \E_STRICT usage
    - `fix` Issue #3472115 by mondrake, prashant.c: Method getMockForAbstractClass() is deprecated in PHPUnit 10 - replace in class ConfigEntityStorageTest
    - `fix` Issue #3471456 by mondrake: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - replace in class class MigrateExecutableTest
    - `fix` Issue #3471425 by mondrake: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - replace in class LockBackendAbstractTest
    - `fix` Issue #3474108 by tomomi: Replace eslint-plugin-jquery with eslint-plugin-no-jquery
    - `fix` Issue #3273099 by rkoller, jaydeep_patel, tinto, smustgrave: Fix several accessibility related issues on the edit Image style page
    - `docs` Issue #898656 by quietone, Abhisheksingh27, virajthakrar, smustgrave, Jacine, jhedstrom: Some documentation links use single quotes for attributes, which produces inconsistent HTML
    - `fix` Revert &quot;Issue #3471741 by mstrelan, bbrala, kristiaanvandeneynde: Fix null $cid in CacheCollector classes&quot;
    - `docs` Issue #3472458 by watergate, smustgrave: CKEditor 5 show blocks label is not translated
    - `fix` Issue #3464340 by herved, ahsannazir, smustgrave, longwave, nod_: JS errors from Drupal.behaviors.activeLinks (... is not a valid selector)
    - `fix` Issue #2386195 by dawehner, samit.310@gmail.com, voleger, daffie, smustgrave, mile23: State has no dedicated test coverage
    - `fix` Issue #3473195 by longwave, catch, jurgenhaas, naveenvalecha, quietone: twig/twig has a possible sandbox bypass &lt;v3.14.0
    - `docs` Issue #3472970 by quietone: Add ignore for some words used in tests
    - `fix` Issue #2973356 by mxr576, kristiaanvandeneynde, wim leers, berdir, bbrala: Cacheability information from route access checker access results are ignored by dynamic_page_cache
    - `fix` Issue #3472092 by nicxvan, smustgrave: Remove references to ApcClassLoader (removed in Symfony 4)
    - `fix` Issue #3471741 by mstrelan, bbrala, kristiaanvandeneynde: Fix null $cid in CacheCollector classes
    - `fix` Issue #3306107 by b_sharpe, catch, carolpettirossi, quietone: Allow failed logins in maintenance mode to be themed differently to other maintenance pages
    - `feat` Issue #3469309 by mstrelan, smustgrave, moshe weitzman: Use one-time login link instead of user login form in BrowserTestBase tests
    - `perf` Issue #3454507 by hablat, catch: Aggregated asset generation causes uncacheable assets
    - `docs` Issue #3283558 by andregp, mrinalini9, Rassoni, meeni_dhobale, sahil.goyal, pasqualle: locale_translation_build_projects() function comment is outdated
    - `feat` Issue #3436526 by skaught, plopesc, kostyashupenko, m4olivei, quietone, godotislate, catch, ckrina, KeyboardCowboy, nod_, longwave: Adjust custom navigation logo dimensions on upload
    - `docs` Issue #2836530 by shalini_jha, rishabh vishwakarma, pontus_nilsson, mpdonadio, Nikhil_110, eojthebrave, ravi.shankar: Update Date element documentation for #date_date_format and usage for other date types such as time
    - `feat` Issue #3462896 by phenaproxima, mandclu: Allow &#039;region&#039; key to be a string for placeBlockInDefaultTheme and placeBlockInAdminTheme config actions
    - `fix` Issue #3471977 by grimreaper: Drupal.dialog openDialog should use event settings
    - `docs` Issue #3471544 by ronttizz, sonyavpaa, joachim, longwave, smustgrave: array lines in hook_theme() sample code are too long
    - `fix` Issue #3439833 by pooja_sharma, smustgrave, vensires: Fix Content Translation tests that rely on UID1&#039;s super user behavior
    - `perf` Issue #3464530 by nod_, mabho, nicxvan, joaopauloc.dev, cassioalmeida, catch, sun, quietone, droplet, aaronbauman, geerlingguy: Improve performance of the user.permissions.js script running in /admin/people/permissions
    - `fix` Issue #3467821 by catch, quietone, smustgrave, nod_: Shorten overall running time from CKeditor5 image tests
    - `docs` Issue #3458295 by pooja_sharma, shalini_jha, prem suthar, joachim, smustgrave: getProcessPlugins() should explain why it has a process parameter and why it&#039;s optional
    - `fix` Issue #3466289 by catch, benjifisher, smustgrave: MigrateNoMigrateDrupalTest fails with missing classes in certain situations
    - `perf` Issue #3468280 by catch, bbrala: Speed up JSON:API ResourceTestBase
    - `docs` Issue #973772 by drupal_was_my_past, avpaderno, joachim, tstoeckler, quietone, EvanDonovan, zirvap: Hard to translate: &quot;Required if you want to change the %mail or %pass below.&quot;
    - `fix` Issue #3470075 by andypost, ankitv18: PHP 8.4 GET/POST sessions are deprecated
    - `fix` Issue #3465836 by andypost: PHP 8.4 session.sid_length and session.sid_bits_per_character are deprecated
    - `fix` Issue #3400434 by mstrelan: Enforce strict types in tests
    - `fix` Issue #3470890 by quietone: Remove misc usage of whitelist in tests and comments
    - `fix` Issue #3334045 by yash.rode, joachim, quietone: Drupal\Core\Template\Attribute doesn&#039;t support adding attributes with array syntax if attribute name not already initialised
    - `docs` Issue #3467405 by quietone, smustgrave: Missing @var annotation for properties that provide default values
    - `docs` Issue #3455342 by vladimiraus, bharath-kondeti, smustgrave: Improve Drupal\Core\Ajax\MessageCommand API documentation
    - `fix` Issue #2524408 by alexpott, tim.plunkett, catch, effulgentsia: Remove $form_state immutability
    - `fix` Issue #3470694 by tom konda: Remove deprecated document.all in /misc/tabledrag.js
    - `fix` Issue #3459496 by scott_euser, catch, smustgrave, quietone: Views content language field default configuration should use field_language plugin
    - `fix` Issue #3452181 by kristiaanvandeneynde, smustgrave, mxr576, catch: VariationCache needs to be more defensive about cache context manipulation to avoid broken redirects
    - `revert` Revert &quot;Issue #2885413 by quietone, smustgrave, eugene.brit, gambry, mikelutz, renatog, ankithashetty, Etroid, sarathkm, catch, alexpott, berdir, daffie, ghost of drupal past, ProFire, mpdonadio: Timestamp field items are affected by 2038 bug&quot;
    - `fix` Revert &quot;Issue #2885413: follow-up to correct the condition that skips the update.&quot;
    - `fix` Revert &quot;Issue #2885413: follow-up to correct the condition that skips the update.&quot;
    - `docs` Issue #3151086 by quietone, neclimdul, webchick, KapilV, alexpott, smustgrave: Replace use of whitelist/blacklist in the path_alias module
    - `breaking` Issue #3470235 by Spokje: open-telemetry/sem-conv:1.27.0 introduces new deprecation, breaks daily updated deps run
    - `fix` Issue #2885413: follow-up to correct the condition that skips the update.
    - `fix` Issue #2885413: follow-up to correct the condition that skips the update.
    - `docs` Issue #3467294 by quietone, nod_, smustgrave, catch, longwave: Change string &#039;Modules to enable&#039; to {@inheritdoc} in comments
    - `breaking` Issue #3468502 by Spokje, mondrake: sebastianbergmann/comparator:5.0.2 Introduces (for Drupal) breaking changes
    - `feat` Issue #3303126 by phenaproxima, narendrar, thejimbirch, alexpott, aangel, Wim Leers, b_sharpe, longwave, akhil babu: Make it possible for recipes to prompt for input values
    - `test` Issue #3465602 by catch, quietone, smustgrave: Order tests by number of public methods to optimize gitlab job times
    - `revert` Revert &quot;Issue #2983612 by daniel.bosen, randalv, swatichouhan012, alexpott, aleevas, kishor_kolekar, naresh_bavaskar, eli-t, quietone: Different sites served from the same domain share the session cookie name&quot;
    - `perf` Issue #3469583 by catch, pooja_sharma: Speed up UpdateSemverTestSecurityCoverageTest
    - `feat` Issue #3385838 by pooja_sharma, longwave, joachim, smustgrave: PathLanguageTest should use API to set up language
    - `refactor` Issue #3469824 by catch, smustgrave: CommentTestBase/CommentTestTrait methods should be protected
    - `perf` Issue #3469709 by catch, pooja_sharma, smustgrave, quietone: Speed up UpdateContribTest
    - `fix` Issue #3469823 by catch: TaxonomyTestTrait methods should be protected
    - `feat` Issue #3469819 by catch: Split up jsonapi CommentTest
    - `docs` Issue #3400334 by mstrelan, quietone, smustgrave: Add declare(strict_types=1) to all test modules
    - `fix` Issue #2885413 by quietone, smustgrave, eugene.brit, gambry, mikelutz, renatog, ankithashetty, Etroid, sarathkm, catch, alexpott, berdir, daffie, ghost of drupal past, ProFire, mpdonadio: Timestamp field items are affected by 2038 bug
    - `perf` Issue #3469163 by catch: Speed up ContentModerationStateTest
    - `perf` Issue #3469576 by pooja_sharma, catch: Speed up RevisionRevertFormTest
    - `feat` Issue #2923168 by AJV009, Yujiman85, benjifisher, runeasgar: Rename ConstraintsTest to UuidValidatorTest
    - `docs` Issue #3451136 by quietone, gapple, ghost of drupal past: Improve documentation of AttachmentsInterface methods
    - `docs` Issue #2609432 by imalabya, quietone, immaculatexavier, Lars Toomre, bharath-kondeti, jhodgdon, smustgrave: Improve docblocks for views FieldHandlerInterface.php
    - `docs` Issue #3215627 by guilhermevp, varshith, rahulkhandelwal1990, ilgnerfagundes, ankithashetty, pragati_kanade, quietone, thiagorw, cilefen, mrclay, larowlan: HtmlTag doc should be clear about escaping of #value
    - `refactor` Issue #2938920 by quietone, pooja_sharma, gabesullice, berdir: Convert EntityTypeDataTest to use EntityTestWithBundle
    - `perf` Issue #3468781 by Spokje, catch, mondrake: AssetResolverTest should use ::willReturnMap() for mocking
    - `docs` Issue #2905848 by urvashi_vora, adeshsharma, shimpy, quietone, kkalashnikov, rishabh vishwakarma, sourabhjain, mikejoconnor, alexpott, pradhumanjain2311, MeenakshiG, mr.baileys, smustgrave, sic, larowlan, longwave, johnhanley: Improve CORS configuration documentation
    - `perf` Issue #3469716 by catch, smustgrave: Optimize dblog tests
    - `perf` Issue #3469623 by catch, smustgrave: Speed up ExposedFormTest
    - `perf` Issue #3469580 by catch, smustgrave: Speed up UpdateSemverTestSecurityAvailabilityTrait
    - `docs` Issue #3458422 by mstrelan, smustgrave: Add string return typehints to protected test helper methods
    - `docs` Issue #3342700 by quietone, pooja_sharma, AdamPS, jonathanshaw: Reinstate important testing NodeDisplayConfigurableTest
    - `fix` Issue #3464595 by quietone: Fix DrupalPractice.Objects.GlobalFunction in ListBuilders
    - `chore` Issue #3467599 by Spokje, hossein.daliran, longwave, smustgrave: Update NPM packages flagged by yarn audit
    - `fix` Issue #3463440 by mstrelan, smustgrave, quietone, longwave: Fix param docs identified by phpstan
    - `docs` Issue #3405364 by quietone, dww, mstrelan, smustgrave: Update docs to stop recommending FormattableMarkup
    - `fix` Issue #2983612 by daniel.bosen, randalv, swatichouhan012, alexpott, aleevas, kishor_kolekar, naresh_bavaskar, eli-t, quietone: Different sites served from the same domain share the session cookie name
    - `test` Issue #3445469 by pooja_sharma, smustgrave: Add additional test coverage for DialogRenderer::getTitleAsStringable()
    - `fix` Issue #3428652 by nod_, jmaxant, alexpott, prashant.c, godotislate, UserOne.se, smustgrave: Broken auto creation of machine name field
    - `perf` Issue #3469573 by catch, pooja_sharma: Speed up ElementTest
    - `perf` Issue #3469335 by catch, smustgrave: Speed up PageCacheTest
    - `perf` Issue #3469410 by catch, smustgrave: Speed up RevisionDeleteFormTest
    - `docs` Issue #2580505 by yesct, nikitagupta, kgoel, quietone, smustgrave, Abhijith S, krknth, jhodgdon: Improve FormattableMarkup documentation
    - `docs` Issue #2526372 by quietone, pwolanin, catch: Improve documentation for cookie domain in services.yml
    - `refactor` Issue #3224276 by joachim, xjm, mglaman, smustgrave, kristiaanvandeneynde, quietone: Move useful helper methods for working with entities from EntityKernelTestBase to a trait
    - `perf` Issue #3468827 by catch, smustgrave: Speed up BigPipeRegressionTest
    - `docs` Issue #3469184 by catch, smustgrave: Split up EntityDefinitionUpdateTest
    - `perf` Issue #3468831 by catch, smustgrave: Speed up DemoUmamiProfileTest
    - `perf` Issue #3468829 by catch, smustgrave: Speed up WorkspacesContentModerationStateTest
    - `docs` Issue #2601282 by neslee canil pinto, rakesh.gectcr, yogeshmpawar, krknth, quietone, bisonbleu, emyu01, aditya_anurag, snehi, neelam_wadhwani, leolandotan, no_angel, Abhijith S, jhodgdon, nicrodgers, chx, joachim: Improve comments in \Drupal\Core\Entity\Query\Sql\Tables
    - `docs` Issue #3464771 by thejimbirch, b_sharpe, akhil babu: Standard Responsive Images recipe should have the Responsive image recipe type
    - `perf` Issue #3468832 by catch, smustgrave: Reduce concurrency for build tests
    - `chore` Issue #3452672 by catch, PunamShelke, cilefen, smustgrave, mmillford: JavaScript files added by AJAX responses are only optimized in maintenance mode
    - `fix` Issue #3466399 by mfb, taran2l, eporama: APCu requirement for 32M is checking wrong value
    - `docs` Issue #2887988 by kazuko.murata, handkerchief, georob, Thithi32, smustgrave, pbouchereau: Translation of file count is incorrect
    - `fix` Issue #3465370 by acbramley: Fix typehint of ContextDefinition&#039;s $label constructor param
    - `test` Issue #3461690 by quietone, dww, longwave: Add tests for updates should not recommend a new branch if there are no stable releases
    - `fix` Issue #3466503 by quietone, smustgrave, mstrelan: Fix 9 spelling words in tests
    - `docs` Issue #3385844 by pooja_sharma, joachim: RouteCachingLanguageTest should use API to set up language
    - `fix` Issue #3467344 by mondrake: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - replace in class InstallerRedirectTraitTest
    - `breaking` Issue #3467293 by Spokje, longwave: twig/twig 3.11.0 introduces (for Drupal) breaking changes
    - `fix` Issue #3468435 by mstrelan: Convert IpAddressBlockingTest to a Unit and Kernel test and improve
    - `refactor` Issue #3468237 by catch, smustgrave: Split CKEditor5Test into two
    - `fix` Issue #3464294 by mondrake, smustgrave: Some tests fail with &#039;Cannot use positional argument after named argument during unpacking&#039;
    - `feat` Issue #3461741 by Sourav_Paul, avpaderno, smustgrave: Add form class to summary for hooks and form submission handler in contact.module
    - `revert` Revert &quot;Issue #3467821 by catch, smustgrave: Remove a couple of data providers from ckeditor5 ImageTestBase&quot;
    - `fix` Issue #3468204 by mondrake, mstrelan: Remove assertion workaround from BrowserTestBase
    - `refactor` Issue #3320670 by ankitv18, smustgrave, bbrala: Refactor rest\Functional\ResourceTestBase to use ApiRequestTrait
    - `fix` Issue #3451667 by jasonawant, pooja_sharma, samit.310@gmail.com, catch, longwave: AssetResolver::getCssAssets $cid does not account for ckeditor5-stylesheets variations
    - `fix` Issue #3439910 by pooja_sharma, vensires: Fix Toolbar tests that rely on UID1&#039;s super user behavior
    - `feat` Issue #3467853 by catch, smustgrave: Use API methods to create filter/editor in CKEditor5Test when not explicitly testing the UI
    - `fix` Issue #2909371 by mfernea, quietone, zaporylie, smustgrave: Fix &#039;Drupal.Commenting.VariableComment.VarOrder&#039; coding standard
    - `fix` Issue #3462871 by nod_: Followup for Deprecate LibraryDiscovery and use LibraryDiscoveryCollector instead
    - `fix` Issue #3467821 by catch, smustgrave: Remove a couple of data providers from ckeditor5 ImageTestBase
    - `docs` Issue #3465132 by catch, Spokje, nod_: Show test run time by class in run-tests.sh output
    - `chore` Issue #3462871 by catch, smustgrave: Deprecate LibraryDiscovery and use LibraryDiscoveryCollector instead
    - `fix` Issue #3467397 by quietone: Enable Drupal.Commenting.VariableComment.IncorrectVarType
    - `fix` Issue #3196507 by mondrake, longwave, mxr576, alexpott: KernelTestBaseTest::tearDown() should not perform assertions
    - `perf` Issue #3462383 follow-up by catch: CoreRecipesTest is slow
    - `chore` Issue #3466689 by longwave, catch, nod_, smustgrave: Ignore phpstan-tmp in phpcs.xml.dist
    - `perf` Issue #3467391 by catch, smustgrave: Reduce CPU requirement and concurrency for unit tests
    - `fix` Revert &quot;Issue #3467391 by catch, smustgrave: Reduce CPU requirement and concurrency for unit tests&quot;
    - `docs` Issue #3466529 by ressa, smustgrave, Gábor Hojtsy: Use easily recognizable date format
    - `fix` Issue #3466813 by quietone: Fix 6 spelling words in tests
    - `perf` Issue #3467391 by catch, smustgrave: Reduce CPU requirement and concurrency for unit tests
    - `fix` Issue #3439270 by quietone, magaki, ankitv18, smustgrave: Replace use of whitelist/blacklist in the editor module
    - `test` Issue #3467278 by ankitv18, catch: TestFileCreationTrait::generateFile should be protected
    - `fix` Issue #3466788 by mondrake, longwave: Fix ‘risky’ tests
    - `feat` Issue #3371963 by Spokje, longwave, swrdfish, andypost, quietone, catch, xjm, effulgentsia, vishalshah133: Update Nightwatch to 3.x
    - `docs` Issue #3024056 by ankitv18, andrewmacpherson: Organize Umami&#039;s toolbar CSS overrides into a single file
    - `docs` Issue #2861849 by ifrik, lomasr, prash_98, quietone, pguillard, shubhangi1995, wengerk, yogeshmpawar, manish.upadhyay, amietpatial: Edit hook_help text for Workflows module
    - `fix` Issue #3463547 by catch: Use API methods instead of form submissions in FilterFormatAccessTest::setUp()
    - `refactor` Issue #3463908 by catch, quietone: Split OptionsFieldUiTest into two
    - `docs` Issue #3465855 by catch, smustgrave: Split up FormTest
    - `refactor` Issue #3465880 by catch: FileFieldCreationTrait methods should be protected
    - `fix` Issue #3465968 by catch: De-duplicate logic in ManageFieldsFunctionalTest
    - `feat` Issue #3464431 by idebr, Lendude: Attach Ajax dialog library for Views Entity Operations
    - `docs` Issue #3385846 by pooja_sharma, joachim: FileOnTranslatedEntityTest should use API to set up language
    - `fix` Issue #3463267 by idebr, quietone, smustgrave: Remove lingering &#039;priority&#039; keys from node access records in test modules
    - `chore` Issue #3465507 by mstrelan, nicxvan: Deprecate and / or remove unused Controllers and routes from WebAssert tests
    - `fix` Issue #3416525 by smustgrave, cmlara, NikolaAt, alexpott: DatabaseStorage, readMultiple throws error when receive empty array
    - `fix` Issue #3463607 by claudiu.cristea: AccessDeniedSubscriber should extend HttpExceptionSubscriberBase
    - `chore` Issue #3467098 by Spokje: Bump phpstan/phpstan and mglaman/phpstan-drupal to latest to make daily &quot;updated deps&quot; QA run pass again
    - `fix` Issue #3304746 by scott_euser, casey, smustgrave: BigPipe cannot handle (GET) form redirects (EnforcedResponseException)
    - `fix` Issue #2613926 by quietone, Arla, jofitz, Berdir, alexpott: The PECL UUID implementation can return invalid UUIDs
    - `fix` Issue #3466822 by longwave, mondrake: WebAssertTest fails on 10.x
    - `fix` Issue #3464213 by mondrake: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - replace in Plugin component tests
    - `docs` Issue #2991337 by voleger, quietone, Marios Anagnostopoulos, andypost, Mile23, mondrake, smustgrave, cilefen, alexpott, catch, TR: Document the recommended ways to obtain the database connection object
    - `fix` Issue #3402007 by marvil07, mstrelan, quietone, smustgrave, larowlan: Fix strict type errors in test modules
    - `fix` Issue #3447994 by Akhil Babu, Josue2591, thejimbirch, mikelutz, jnicola, b_sharpe: Example recipe isn&#039;t functional
    - `feat` Issue #3322402 by idebr, smustgrave, Lendude, lind101, akalata, quietone, alexpott: Add &#039;Is empty (NULL)&#039; and &#039;Is not empty (NOT NULL)&#039; operators to boolean field filtering
    - `fix` Issue #3402707 by mstrelan, smustgrave, dww, longwave, quietone: Fix strict type errors in AssertContentTrait
    - `perf` Issue #3466524 by catch: ModuleConfigureRouteTest is slow
    - `docs` Issue #3466480 by Tom Konda, smustgrave: New throbber SVG images lack xmlns attribute
    - `fix` Issue #3464271 by mondrake, smustgrave: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - replace in class ControllerBaseTest
    - `chore` Issue #3463108 by catch, smustgrave: Use artifacts to share the eslint and styleint caches from core to MRs
    - `fix` Revert &quot;Issue #3463440 by mstrelan, smustgrave: Fix param docs identified by phpstan&quot;
    - `docs` Issue #2843100 by VladimirAus, quietone, immaculatexavier, yogeshmpawar, gaurav.kapoor, AaronBauman, avpaderno, Munavijayalakshmi, larowlan, smustgrave, Gábor Hojtsy: FileSystemInterface::copy documentation is inaccurate
    - `docs` Issue #2798531 by quietone, jp.stacey, ranjith_kumar_k_u, Ankit.Gupta, longwave, smustgrave, LoMo, Gábor Hojtsy: Add example and sections to Block API documentation
    - `feat` Issue #3449875 by nod_, catch, xjm, DamienMcKenna: Update to jQuery UI 1.14.0
    - `docs` Issue #3089907 by sahil.goyal, quietone, tbsiqueira, joachim, smustgrave, alexpott, Sutharsan: standardize docs on how to use the 4 types of test base
    - `fix` Issue #3463286 by catch: Fix selenium performance/stampede issues in gitlab config and BrowserTestBase
    - `fix` Issue #3463440 by mstrelan, smustgrave: Fix param docs identified by phpstan
    - `docs` Issue #3461155 by quietone, smustgrave: More spelling fixes, 22 words,  in tests
    - `chore` Issue #3347343 by vasike, scott_euser, acbramley, fjgarlin, smustgrave, recrit, catch, BramDriesen, heddn, DamienMcKenna, Berdir, Lendude, Graber, Kasey_MK, akalam, klaasvw, jhedstrom, joachim, johnwebdev, gbirch, jksloan2974, jsst, dww, avpaderno, C.E.A, andypost, ankithashetty, caspervoogt, anmolgoyal74, ckaotik, gambry, DiDebru, dawehner, das-peter, rlmumford, Krzysztof Domański, _Archy_, yogeshmpawar, xjm, muriqui, mr.york, mparker17, Lukas von Blarer, mdolnik, Murz, nuez, Taran2L, willpepsi, seanB, RoSk0, oriol_e9g, Pancho: Add Views EntityReference filter to support better UX for exposed filters
    - `docs` Issue #3454092 by mstrelan, nicxvan, catch: Convert WebAssertTest to a Unit test
    - `docs` Issue #3462100 by Prem Suthar, arunkumark, joachim, smustgrave: Menu system docs section gives wrong alter hook
    - `docs` Issue #2625142 by felribeiro, quietone, tstoeckler, cilefen, Arla, jhodgdon, smustgrave, Berdir: Document that Uuid::isValid() only considers lowercase UUIDs as valid
    - `fix` Issue #3458272 by seutje: Subpixel rounding issue causes dialog to resize unnecessarily
    - `fix` Issue #3439903 by pooja_sharma, SolimanHarkas, pradhumanjain2311, vensires, smustgrave: Fix Node tests that rely on UID1&#039;s super user behavior - Blocks
    - `feat` Issue #3436632 by omkar.podey, yash.rode, Wim Leers, smustgrave: Add validation constraints to system.logging
    - `fix` Issue #3368537 by catch, TwoD, alexpott, cmlara, sboden: Ensure trailing whitespace at the end of a cache ID results in a unique cache item
    - `fix` Issue #3458177 by mondrake, catch, quietone, godotislate, longwave, larowlan, xjm: Changing plugins from annotations to attributes in contrib leads to error if plugin extends from a missing dependency
    - `fix` Issue #3465360 by catch, benjifisher, tobybellwood: drush updb errors on System and Layout Builder modules when going 10.3.1 to 11.0.0.-rc1
    - `chore` Issue #3465122 by catch: Update composer dependencies prior to 11.0.0, update phpstan
    - `fix` Issue #3458177 by mondrake, catch, godotislate, longwave, xjm: Changing plugins from annotations to attributes in contrib leads to error if plugin extends from a missing dependency
    - `chore` Issue #3465166 by Spokje, nod_: Update JavaScript dependencies for Drupal 11.0.0
    - `chore` Issue #3464978 by mondrake: Make PHPStan rule testing use PHPUnit 10
    - `chore` Issue #3463954 by Spokje, xjm: Bump phpstan/phpstan to latest to make daily &quot;updated deps&quot; QA run pass again
    - `fix` Issue #3363127 by nod_, Gábor Hojtsy, mherchel: Drupal Displace outputs invalid value for --drupal-displace-offset-right when opening top dialog
    - `docs` Issue #3462763 by catch, bbrala, andypost: Use artifacts to share the phpstan result and cspell caches from core to MRs
    - `docs` Issue #3463456 by catch, smustgrave: Consolidate ckeditor5&#039;s FunctionalJavascript tests
    - `docs` Issue #3464581 by quietone, smustgrave: Update deprecation notices in ajax.js
    - `perf` Issue #3461860 by catch, smustgrave: More efficient route lookup caching
    - `fix` Issue #637538 by pooja_sharma, mr.baileys, AaronBauman, Bhanu951, alexpott, rteijeiro, greggles, pwolanin, meba, Nikhil_110, smustgrave, quietone, casey, naveenvalecha, sime, humansky, dawehner: Module and theme names are not filtered on output
    - `fix` Issue #3456149 by pooja_sharma, smustgrave, quietone, catch, alexpott: Fix translation string in ConfigFormBase.php
    - `fix` Issue #3462561 by catch, smustgrave: Stop using a data provider in UserPasswordResetTest
    - `fix` Issue #3094865 by quietone, _utsavsharma, hchonov, Berdir, smustgrave, catch: Fix references to the deprecated Entity class
    - `fix` Issue #3439836 by pooja_sharma, thebumik, FeyP, vensires, smustgrave, kim.pepper, quietone: Fix File tests that rely on UID1&#039;s super user behavior
    - `feat` Issue #3463038 by longwave: Add helper method to generate HTML placeholders
    - `docs` Issue #2360647 by quietone, alexpott, Manuel Garcia, jhodgdon: Documentation in ConfigDependencyManager conflates plugin dependencies and config dependencies
    - `docs` Issue #3456611 by mstrelan, longwave: Add bool return typehints to protected test helper methods
    - `feat` Issue #3457009 by ankitv18, quietone, joachim: Add input string to exception message thrown in createConnectionOptionsFromUrl()
    - `perf` Issue #3460654 by pooja_sharma, FeyP, catch: Merge test methods in FieldUIRouteTest for better performance
    - `feat` Issue #3236269 by mandclu, quietone, heni_deepak, eojthebrave: Render API overview should include a link to the list of elements
    - `fix` Issue #3314260 by quietone, avpaderno, rakesh.drupal, ravi.shankar, chaitanyadessai, smustgrave, catch, Spokje: Replace t() calls inside of Controllers that do not use StringTranslationTrait
    - `fix` Issue #3460598 by catch, m4olivei, penyaskito, finnsky: Single directory component CSS asset library not picked up in admin theme immediately after module install without cache clear
    - `fix` Issue #3439835 by pooja_sharma, thebumik, FeyP, smustgrave, vensires: Fix Field UI tests that rely on UID1&#039;s super user behavior
    - `fix` Issue #3458975 by longwave, quietone: GenerateThemeTest::testContribStarterkitDevSnapshotWithGitNotInstalled fails on sqlite
    - `fix` Issue #3463594 by alexpott: ImageAdminStylesTest::testAjaxEnabledEffectForm() fails because statusMessageExists() does not wait
    - `fix` Issue #3142928 by ivnish, neclimdul, Wiktor7, mitrpaka, Chi, keha3912, smustgrave, andypost, catch: Status report wrongly warns of APCu memory limit when admin language is not English
    - `docs` Issue #3463548 by catch, smustgrave: Consolidate methods on FormElementsLabelsTest
    - `fix` Issue #3464020 by Spokje, catch, longwave: Update to ckeditor 42.0.2
    - `docs` Issue #3462098 by Prem Suthar, joachim, quietone: hook_local_tasks_alter() and hook_menu_local_tasks_alter() need mutual @see links
    - `perf` Issue #3462549 by catch, ankitv18: Optimize TelephoneFieldTest
    - `perf` Issue #3463351 by catch, heddn: Consolidate Umami performance tests
    - `docs` Issue #3119513 by Prem Suthar, imclean, smustgrave: Parameters doc for views &quot;row&quot; should be at the top level of the array
    - `docs` Issue #2890023 by mcdruid, quietone, ricardoamaro: clarify db settings for run-tests.sh example command
    - `fix` Issue #3308432 by devkinetic, BramDriesen, Shifali Baghel, cilefen, smustgrave, quietone, bnjmnm: The link on the Image tag is redirecting to an undefined page from the node preview screen
    - `fix` Issue #3463569 by alexpott, catch: ToolbarStoredStateTest needs wait after resizing window
    - `docs` Issue #3460257 by Grimreaper, smustgrave, quietone: Have a dedicated category for blocks provided by the Navigation module
    - `chore` Issue #3452513 by pooja_sharma, ayush.pandey, farse, joachim, smustgrave: convert FieldEntityTest to a kernel test
    - `docs` Issue #3447950 by diegoe, longwave, smustgrave: Change @phpstan-ignore-next-line to more specific @phpstan-ignore
    - `test` Issue #3463544 by catch: Three more slow functional tests
    - `feat` Issue #3421202 by alexpott, longwave, andypost, justafish: Enable W3C-compliant webdriver testing
    - `test` Issue #3463288 by catch: Consolidate test methods in StandardPerformanceTest
    - `refactor` Issue #3332683 by VladimirAus, psebborn, Gauravvvv, mherchel, lauriii, nod_, pradipmodh13, smustgrave, quietone, Stockfoot: Refactor Claro&#039;s tabledrag stylesheet
    - `feat` Issue #3303127 by phenaproxima, thejimbirch, alexpott, Wim Leers, nedjo, b_sharpe, laura.j.johnson@gmail.com: Determine which core config entity methods should be config actions
    - `docs` Issue #3458319 by TravisCarden: &#039;Display &quot;@display&quot; needs a selected search fields&#039; message is confusing
    - `fix` Issue #3459170 by mstrelan: Fix instances of ints passed to functions expecting strings
    - `feat` Issue #3458321 by narendraR, smustgrave, alexpott: Add validation constraints to language.content_settings.*.*
    - `docs` Issue #3463329 by alexpott: \Drupal\Core\Extension\ExtensionDiscovery::PHP_FUNCTION_PATTERN is out-of-date
    - `feat` Issue #3448131 by mandclu, phenaproxima, ultrabob, immaculatexavier, alexpott, thejimbirch, mtift, laura.j.johnson@gmail.com: Create flexible config actions to place a block in the admin or default themes
    - `chore` Issue #3350922 by Ranjit1032002, Akram Khan, quietone, geek-merlin, larowlan: Deprecate unused MatchingRouteNotFoundException
    - `test` Issue #3191559 by longwave, Spokje, smustgrave, jhodgdon: [random test failure] Random test fail in EntityReferenceWidgetTest
    - `fix` Issue #2502637 by bnjmnm, shumer, smustgrave, cilefen, Wim Leers, legolasbo, quietone, Xano, nikitagupta, DanielVeza, vegantriathlete, gaurav-mathur, priyanka.sahni, alexpott, dww, rkoller, dqd, swentel, eltermann, Alan D., ZenDoodles, David_Rothstein, sun, welly, pameeela: Disabled text formats can&#039;t be seen in the GUI
    - `fix` Issue #3379725 by Wim Leers, phenaproxima, narendraR, alexpott, quietone, borisson_, tim.plunkett: Make Block config entities fully validatable
    - `perf` Issue #3305609 by pooja_sharma, joachim: convert TermTest::testParentHandlerSettings() into a kernel test
    - `fix` Issue #3433 by nicxvan, quietone, longwave, DuaelFr, smustgrave, larowlan, Lendude, james.williams, fgm, drumm, Steven, luke.stewart, mradcliffe, alexpott: Use CDATA in XML RSS Feeds
    - `fix` Issue #3451611 by mfb, xjm, smustgrave, quietone: Fix the format=flowed; delsp=yes encoding of email messages
    - `chore` Issue #3462759 by catch: Try to rebalance kernel tests between gitlab runners (@group #slow again)
    - `fix` Issue #3417136 by dww, quietone, longwave, catch, xjm, lostcarpark, andypost, phenaproxima: Remove adding an extension via a URL
    - `perf` Issue #3462383 by phenaproxima, catch, alexpott, longwave: CoreRecipesTest is slow
    - `feat` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project
    - `fix` Issue #3399970 by markconroy, catch, smustgrave: Umami content is all created in the same second
    - `fix` Issue #3454196 by james.williams, longwave: Filter placeholders without arguments are not replaced when HTML corrector filter applied afterwards
    - `feat` Issue #3392572 by benjifisher, Liam Morland, ricovandevin, Anybody, smustgrave, quietone, sabrina.liman, carolpettirossi, longwave, alexpott: Add missing category to Drupal\layout_builder\Plugin\Layout\BlankLayout and let modules and themes alter the list of layouts
    - `feat` Issue #2329253 by tstoeckler, Bhanu951, hchonov, golddragon007, DieterHolvoet, casey, Sam152, mikelutz, junaidpv, codebymikey, mkalkbrenner, dawehner, smustgrave, kksandr, muthuraman-s, weekbeforenext, Gunjan Rao Naik, Wim Leers, DamienMcKenna, longwave, Berdir, quietone, claudiu.cristea, heddn: Allow ChangedItem to skip updating the entity&#039;s &quot;changed&quot; timestamp when synchronizing
    - `fix` Issue #3306434 by benjifisher, quietone, Berdir, kopeboy, DYdave, larowlan: Fix access checks for bundle permissions to avoid triggering a config validation error
    - `fix` Issue #3440848 by mondrake, quietone, daffie: Ensure post transaction callbacks are only at the end of the root Drupal transaction
    - `fix` Issue #3163127 by scott_euser, Gauravvvv, sd9121, djsagar, ranjith_kumar_k_u, AkshayAdhav, _utsavsharma, sarvjeetsingh, komalk, Nitin shrivastava, ameymudras, pradhumanjain2311, boulaffasae, kostyashupenko, bnjmnm, meena.bisht, ambuj_gupta, sonam.chaturvedi, Sakthivel M, Utkarsh_33, KondratievaS, ressa: Autocomplete input text can visibly overflow under magnifier icon
    - `docs` Issue #3462338 by Jaydeep_patel, bhaveshdas, quietone: Spacing issue in Home &gt; Search page on Advanced search section
    - `fix` Issue #3458714 by simohell, shivam_tiwari, amanire, smustgrave: Long string breaks the layout of Claro (reapply fix)
    - `docs` Issue #3462556 by catch: Consolidate two test methods in NumberFieldTest
    - `test` Issue #3462529 by catch: Mark more tests with @group #slow and remove it from some others
    - `fix` Issue #3393441 by markconroy, Gauravvvv, smustgrave, gordon: Stable 9 is trying to override non-existing css files
    - `refactor` Issue #3461421 by VinmayiSwamy, ankitv18, joachim, smustgrave: getProcessPlugins() normalises the process array twice
    - `fix` Issue #3460921 by quietone: Fix hook_update_N docs for display of code block, remove unnecessary @see
    - `docs` Issue #3458427 by mstrelan: Add array return typehints to protected test helper methods
    - `fix` Issue #2719657 by quietone, andypost, Mile23, Spokje, ilya.no, xjm, alexpott, smustgrave: Fix &#039;Drupal.Commenting.InlineComment.NotCapital&#039; coding standard
    - `fix` Issue #3459750 by mondrake: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - replace in class BuildTestTest
    - `fix` Issue #3460513 by nishtha.pradhan, Berdir: Avoid TypeError if config entity dependencies are NULL
    - `docs` Issue #3458312 by scott_euser, andypost: Make the comments in Views handler Manager around overrides clearer
    - `fix` Issue #3376516 by andypost, quietone: Remove check for 10200 update from help module
    - `fix` Issue #3462339 by longwave: Update to jQuery 4.0.0-beta2
    - `perf` Issue #3462264 by alexpott: Skip unsupported methods in rest/jsonapi tests in an efficient way
    - `fix` Issue #3461284 by mherchel, finnsky, quietone, nod_: Prevent simultaneous open/close on simultaneous click/hover
    - `fix` Issue #3454603 by phenaproxima, thejimbirch, Prashant.c, alexpott: Many core recipes are not idempotent
    - `fix` Issue #3458612 by catch, longwave, ankitv18, Spokje: Remove legacy &#039;metadata&#039; variable from node.html.twig
    - `refactor` Issue #2629508 by krishnan.n, martin107, quietone, Rassoni, akishankar, heykarthikwithu, smustgrave: Replace t() with $this-&gt;t() where StringTranslationTrait is used
    - `feat` Issue #3458701 by yash.rode: Add validation constraints to user.mail
    - `fix` Issue #3461945 by mstrelan, bbrala: Fix instances of floats passed to functions expecting ints
    - `fix` Issue #3459533 by mikelutz: Deprecate Drupal\Component\Plugin\PluginBase::isConfigurable()
    - `fix` Issue #3421809 by mstrelan, Spokje: Remove unused variables in catch statements
    - `docs` Issue #3458782 by catch, ankitv18, longwave, smustgrave: Remove documentation for readmore, logged_in and is_admin from node.html.twig
    - `fix` Issue #3458220 by Sourav_Paul, rroose, Chandansha, smustgrave: Date list labels are not visible above select field creating bad UX
    - `fix` Issue #3459754 by mondrake: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - replace in class NormalizerBaseTest
    - `fix` Issue #3368071 by tstoeckler, longwave: Installing Content Translation module breaks Rest resources
    - `docs` Issue #3444740 by ahsannazir, Utkarsh_33, Gauravvvv, Kanchan Bhogade, smustgrave, bnjmnm, nod_: Layout shift on displays in views page
    - `feat` Issue #2575253 by jwilson3, Gauravvvv, rachanakamlesh, Balu Ertl, Jmdrawneek@googlemail.com, snehi, cleverington, BalajiDS, xaiwant, smustgrave, mgifford, emma.maria, dillix, andypost, Bojhan, mohit1604: Update loading icon and use SVG
    - `fix` Issue #3459240 by jurgenhaas, b_sharpe, longwave, quietone: Deprecation message for user_validate_name points to an invalid replacement
    - `fix` Issue #1650198 by apaderno, quietone, jhodgdon, smustgrave: Remove references to node_edit in FormBuilderInterface
    - `docs` Issue #3458966 by apaderno, smustgrave: Correct the punctuation on the description for \Drupal\Tests\UnitTestCase
    - `docs` Issue #3460246 by Prem Suthar, joachim, afeijo: incorrect docs in DateFormatter::format()
    - `fix` Issue #3376942 by fromme, Kingdutch, smustgrave: Replace usage of generateString with generate in Media module
    - `docs` Issue #3313449 by JeffMattson, joachim: QueueWorkerInterface is missing docs for DelayedRequeueException
    - `docs` Issue #1974928 by jwilson3, ckrina, chrisfree, ellizard, Mithun S, Manjit.Singh, gauravjeet, corbacho, Bojhan, soumyajit.basu, joelpittet, LewisNyman, star-szr, smustgrave, droplet, Wim Leers, Gábor Hojtsy, aburrows, lauriii, Snugug, rupl, hotpizzas, ericduran, markdorison: Update Drupal&#039;s default throbber icons
    - `fix` Issue #3459747 by quietone, smustgrave: Fix 12 words in tests
    - `revert` Revert &quot;Issue #3456556 by pooja_sharma, longwave, quietone: Improve date format in status report EOL message&quot;
    - `fix` Issue #3412420 by acbramley, douggreen, Hardik_Patel_12, xjm, smustgrave, larowlan: BlockContentAccessControlHandler requires access block library permission for create
    - `fix` Issue #3454274 by markconroy, Lillian Bozeman: Do not override class  in preprocess_field hook
    - `fix` Issue #3452502 by Grimreaper, smustgrave: NodeListBuilder is using mark theme wrongly
    - `fix` Issue #3456556 by pooja_sharma, longwave, quietone: Improve date format in status report EOL message
    - `chore` Issue #3460114 by Spokje, longwave: Update JavaScript dependencies for Drupal 11.0-rc
    - `chore` Issue #2408549 by alexpott, narendraR, yash.rode, kunal.sachdev, lauriii, Liam Morland, Wim Leers, Hardik_Patel_12, jofitz, DamienMcKenna, eiriksm, andypost, jenlampton, Gábor Hojtsy, swentel, borisson_, jhedstrom, snehi, Elijah Lynn, narendra.rajwar27, Shubham Chandra, smustgrave, sime, AaronMcHale, Chi, karolus, rkoller, joshua.boltz, anavarre, colan, frob, Berdir, bircher, minnur, effulgentsia, quietone, catch, xjm, hanoii, benjifisher, worldlinemine, larowlan, longwave, simohell, shaal, worldlinemine: Display status message on configuration forms when there are overridden values
    - `chore` Issue #3460350 by longwave, catch: Require Node.js 20 for Drupal 11
    - `chore` Issue #3459926 by longwave: Update CKEditor 5 to 42.0.0
    - `fix` Issue #3454346 by kristiaanvandeneynde, bbrala, mxr576: JsonApiRequestValidator does not set cacheable metadata when the filter allows the request
    - `fix` Issue #3410091 by mglaman, alexpott, smustgrave, bnjmnm, quietone: [regression] Menu List Builder  getEntityIds() no longer calls getEntityListQuery
    - `docs` Issue #2998857 by Luke.Leber, e.chatrer, afem, bskibinski, mgifford: a11y: Input type file fields lack aria-describedby to the description
    - `breaking` Issue #3456738 by cmlara, Anybody, andrewbelcher, Berdir, catch: BC break in login auth changes from #3444978
    - `fix` Issue #3108658 by alexpott, mikelutz, catch, xjm, nicxvan, longwave: Handling update path divergence between 11.x and 10.x
    - `feat` Issue #3455820 by nicxvan, alexpott, smustgrave: Decompress files for config_install
    - `chore` Issue #3459924 by longwave, Spokje: Update Composer dependencies for 11.0.0-rc1
    - `fix` Issue #3449851 by Liam Morland, alexpott, smustgrave, solideogloria, catch, kopeboy: Replace LogicException with trigger_error in LangcodeRequiredIfTranslatableValues constraint
    - `fix` Issue #3156672 by kim.pepper, joegraduate, longwave, PieterDC, smustgrave, tstoeckler, alexpott: ExtensionMimeTypeGuesser breaks other mime_type_guesser services
    - `fix` Issue #3458403 by mstrelan: Conditionally disable access to update manager routes
    - `fix` Issue #2719721 by kristiaanvandeneynde, jhodgdon, BramDriesen, pameeela, catch, Wim Leers, Berdir, alexpott, neclimdul, acbramley, benjy, cilefen, mxr576, rothlive, andrewmacpherson: BreadcrumbBuilder::applies() mismatch with cacheability metadata
    - `docs` Issue #3456425 by mondrake, alexpott: FormStateInterface::setError*() PHPDoc are incorrect
    - `fix` Issue #3458444 by quietone, smustgrave, slashrsm, nod_, brianperry: Remove decoupled menus and media initiatives from MAINTAINERS
    - `fix` Issue #3208247 by sukr_s, smustgrave, alexpott, Nikolay Shapovalov, catch, orb, quietone, pwolanin: After deleting a translated article, search wants to reindex it
    - `fix` Issue #3458922 by quietone, alexpott, longwave: Fix index test in LocalesLocationAddIndexUpdateTest::testExistingIndex
    - `feat` Issue #3449259 by narendraR, alexpott, catch, Wim Leers: Add validation constraints to system.action.*
    - `feat` Issue #3457766 by narendraR, smustgrave: Add validation constraints to language.entity.*
    - `docs` Issue #3456133 by narendraR, VinmayiSwamy: Add validation constraints to search.page.*
    - `docs` Issue #3318988 by andypost, longwave, quietone: Finish deprecating status code and header assertions in JS tests
    - `feat` Issue #3156439 by alexpott, catch, bonsaipuppy, mkalkbrenner, longwave, xjm: Add an index on locales_location on type and name
    - `docs` Issue #3458246 by ckrina, finnsky, nod_, m4olivei, plopesc: Add subsystem maintainers for Navigation
    - `feat` Issue #3445215 by narendraR, borisson_, mtift, mikelutz, smustgrave, Wim Leers, alexpott: Add validation constraints to user.role.*
    - `chore` Issue #3458183 by catch, Spokje: Deprecate $variables[&#039;teaser&#039;]
    - `fix` Issue #3456890 by TravisCarden, smustgrave: &#039;The &quot;%plugin_id&quot; was not found&#039; warning message is confusing
    - `fix` Issue #3418999 by quietone: Correct spelling of autocomplete type words
    - `fix` Issue #3444998 by Gauravvvv, TravisCarden, lolgm, nod_, smustgrave: Secondary tabs design is distorted on block view page
    - `fix` Issue #3440169 by pooja_sharma, marcoliver, smustgrave, DYdave, alexpott: When using drupalGet(), provide an associative array for $headers
    - `fix` Issue #3455113 by b_sharpe, ankitv18, alexpott, pooja_sharma, phenaproxima, thejimbirch: Rename ensure_exists to createIfNotExists, and camel-case simpleConfigUpdate for consistency
    - `fix` Issue #3457778 by markconroy, ressa: Reorder checkboxes on &quot;Development settings&quot; page
    - `fix` Issue #3447748 by joelpittet, ramil g, smustgrave: TypeError: Illegal offset type in isset or empty in FormValidator-&gt;performRequiredValidation()
    - `fix` Issue #3455912 by quietone: Fix spelling for 10 words used in tests
    - `docs` Issue #3456112 by quietone: Ignore another nonsense word used in hashes
    - `docs` Issue #3336070 by mikelutz, efpapado, smustgrave, quietone, danflanagan8: skip_on_empty documentation is confusing when skipping a process
    - `feat` Issue #3436164 by omkar.podey, kunal.sachdev, pradhumanjain2311, smustgrave, Wim Leers, narendraR, alexpott, larowlan, borisson_: Add validation constraints to user.settings
    - `fix` Issue #3401255 by znerol, smustgrave, borisson_, phenaproxima, penyaskito, kunal.sachdev:  Tighten config validation schema of system.mail mailer_dsn
    - `fix` Issue #3432595 follow-up by mikelutz: Use a tagged service iterator for uninstall validators instead of individual lazy proxies
    - `fix` Issue #3291764 by Gauravvvv, baldwinlouie, Utkarsh_33, kostyashupenko, ranjith_kumar_k_u, eugene.brit, Farnoosh, rhiss, smustgrave, podarok, mkdok, bnjmnm, candelas, saganakat: The [0] hatch in misc/vertical-tabs.js causes issues if there are multiple forms with vertical tabs
    - `fix` Issue #3441010 by catch, longwave, larowlan, dpi, dqd, geek-merlin, el7cosmos: Container compile crash when a service decorates a destructable service
    - `fix` Issue #3455110 by jagraj_singh_gill, joachim: HandlerStackConfigurator has @see to class that no longer exists
    - `feat` Issue #3155411 by quietone, smustgrave, jungle, longwave: Add &quot;writeable&quot; to the &quot;flagWords&quot; in core/.cspell.json
    - `docs` Issue #3396099 by Utkarsh_33, nod_, Gauravvvv, bnjmnm, tedbow, smustgrave, Anybody, Rob230: The core/drupal.message library requires a status_messages render element
    - `chore` Issue #3452511 by pooja_sharma, joachim: convert ProviderRepositoryTest to a kernel test
    - `docs` Issue #3456979 by joachim: add a comment to install.core.inc about the updated container
    - `fix` Issue #3453068 by kalpanajaiswal, BenStallings: Sort::fields property is incorrectly defined as a string
    - `chore` Issue #3453341 by mondrake, alexpott, longwave: Bootstrap HtmlOutputLogger from phpunit.xml
    - `fix` Issue #3455557 by mstrelan: Remove ThemeInitialization::resolveStyleSheetPlaceholders
    - `fix` Issue #3450773 by ahsannazir, Kanchan Bhogade, Gauravvvv, kostyashupenko, smustgrave: Olivero: Incorrect positioning of close button on mobile device when navigation module is enabled
    - `fix` Issue #2990588 by Utkarsh_33, andrewmacpherson, oriol_e9g, smustgrave, shaal: Visually-hidden refresh button in Field UI fails WCAG Focus Visible
    - `fix` Issue #3361728 by quietone, longwave, xjm: Make 10.x EOL warning better than the 9.5.x one
    - `feat` Issue #3393400 by mglaman, finnsky, m4olivei, bnjmnm, plopesc, ckrina, smustgrave: Implement Nightwatch tests for Navigation module
    - `feat` Issue #3454960 by quietone, nod_, larowlan, rkoller, smustgrave: Update to jquery UI 1.14.0 beta 2
    - `fix` Issue #3440676 by Utkarsh_33, smustgrave, catch, bnjmnm, nod_: Trigger a JavaScript deprecation error for dialogClass in forked dialog.js
    - `docs` Issue #3455513 by xjm, e0ipso: &quot;Single-Directory Components&quot; needs to be hyphenated because of English grammar and content style rules
    - `refactor` Issue #3332473 by Mithun S, Gauravvvv, rupeshghar, smustgrave, lauriii: Refactor Claro&#039;s table--file-multiple-widget stylesheet
    - `feat` Issue #3315694 by b_sharpe, vermario, deviantintegral, narendraR: Allow recipe command to write to the container - ensuring that cache does not be cleared after a recipe installs a module
    - `fix` Issue #3455183 by kim.pepper, mstrelan, mondrake: FileSaveUploadTest should not write to the app root
    - `fix` Issue #3455552 by mstrelan, xjm, quietone: Remove commented-out code in ArgumentDefaultTest referring to php module
    - `docs` Issue #3421418 by mstrelan, Spokje, xjm, mondrake, longwave, acbramley: Add void return typehints to all test methods
    - `fix` Issue #3444344 by VinmayiSwamy, Utkarsh_33, Gauravvvv, Mithun S, kd_ace, smustgrave, mradcliffe, bnjmnm, jvest, xjm, idebr, quietone: Claro: Autocomplete dropdown bleeds through sticky table header
    - `perf` Issue #3454079 by Tom Konda, smustgrave: Prefer to use Array.prototype.includes() for some of Array.prototype.indexOf()
    - `chore` Issue #3454357 by quietone, longwave: Remove example cron scripts
    - `chore` Issue #3454355 by quietone, longwave: Remove Drupal 6/7 database scripts
    - `fix` Issue #3425105 by smustgrave, catch, markconroy: Don&#039;t use text_with_summary in Umami
    - `fix` Issue #3445847 by Alexander Allen, mstrelan, catch, xjm, longwave, mark_fullmer: PHPUnit 10 behaves differently when invoked outside web root
    - `docs` Issue #3454605 by thejimbirch, pooja_sharma, phenaproxima, the_g_bomb, catch, b_sharpe: Roles should be in their own recipes for composability
    - `feat` Issue #3306820 by matthieuscarset, kulmjens, smustgrave, bernardm28, xjm, quietone, dww, SKAUGHT, BlackBamboo, benjifisher, rkoller, simohell, worldlinemine: Show machine name in &quot;Manage form display&quot; and &quot;Manage display&quot; table row
    - `fix` Issue #3455058 by plopesc, smustgrave: drupalInstallModule nightwatch function does not work with Experimental modules
    - `refactor` Issue #3238870 by shubh_, mstrelan, nod_, hooroomoo, kostyashupenko, smustgrave, larowlan, thebumik, lauriii: Refactor (if feasible) use of jquery parseHTML function to use vanillaJS
    - `fix` Issue #2874067 by kkalashnikov, Nikolay Shapovalov, quietone, smustgrave, benjifisher, MerryHamster, xjm, dww: Fix Drupal.Commenting.DocCommentLongArraySyntax coding standard
    - `docs` Issue #3454212 by nathankg, joachim: Update mentions of #2225961 in comments
    - `fix` Issue #2684251 by pooja_sharma, sheldonreed3, smustgrave, jehon, Lendude: Global Token Replacements is not working correctly in href
    - `feat` Issue #3313616 by mark_fullmer, Sandeep_k, nessthehero, bnjmnm, smustgrave, Wim Leers, itmaybejj, alexpott, Charles Belov, simohell, AaronMcHale: [drupalMedia] Ability to mark image media as &quot;decorative&quot;
    - `refactor` Issue #3454062 by kim.pepper: Move Recipe\RollbackTest is to the FunctionalTests namespace
    - `fix` Issue #3453320 by timurtripp: [10.3 regression] CKEditor 5 renamed CSS variable causing CKEditor dialogs to fail to appear above jQuery UI dialogs
    - `fix` Issue #3409561 by VinmayiSwamy, jessehs, andre.bonon, Wim Leers, quietone: CKEditor 5 Styles dropdown broken when in off-canvas sidebar
    - `fix` Issue #3443810 by SKAUGHT, plopesc, DishaKatariya, finnsky, smustgrave, ckrina, Prashant.c, larowlan: Custom Navigation logo is disconnected from new Layout template
    - `fix` Issue #3377420 by pivica, Berdir, smustgrave, sergey-serov, bkosborne, bspeare, larowlan: Responsive image width/height values are not used from fallback image style
    - `fix` Issue #3386191 by phthlaap, sukr_s, Ozle, brunoalmeida, smustgrave, Ashley George, shiv_yadav, larowlan: #states not working correctly when built from a logical combination of multliple fields
    - `fix` Issue #2927141 by Akhil Babu, pooja_sharma, geertvd, smustgrave, JeroenT, larowlan, catch, quietone: Updates to an entity&#039;s URL alias do not reflect on the corresponding local tasks
    - `fix` Issue #3453676 by nicxvan, alexpott, dww, lauriii, Gábor Hojtsy: Make &quot;Who can register accounts?&quot; &quot;Administrators only&quot; by default
    - `fix` Issue #3453551 by mstrelan: Fix return type of FormatterInterface::settingsSummary
    - `feat` Issue #3449569 by kim.pepper, longwave, catch: Use autoconfigure more in core
    - `feat` Issue #3445285 by catch, longwave, larowlan, quietone: Add extra page request to the across pages asset performance test
    - `docs` Issue #3450567 by kalpanajaiswal, joachim: GenerateTheme::__construct() does not document its parameters
    - `docs` Issue #3121155 by quietone, lauriii, bnjmnm, tedbow: Add comments about alphabetical sorting in UpdateRegistry and test
    - `fix` Issue #3452630 by SandeepMahlawat, pooja_sharma, joachim, mondrake: HtmlOutputLogger outputs surplus newline
    - `fix` Issue #3452426 by mxr576, kristiaanvandeneynde: Insufficient cacheability information bubbled up by UserAccessControlHandler
    - `perf` Issue #3450616 by catch, quietone, smustgrave: Optimize test order when --directory is used
    - `fix` Issue #3291221 by Gauravvvv, pradipmodh13, rkoller, ahsannazir, smustgrave, quietone: When configuring a field on a content type&#039;s &quot;manage display&quot; tab the spinner shifts the label and format column
    - `docs` Issue #3453621 by lauriii: Update &#039;lauriii&#039; last name
    - `fix` Issue #3207896 by andypost, alexpott: Remove URL generator priming in \Drupal\Tests\BrowserTestBase::installDrupal()
    - `chore` Issue #3449356 by quietone, smustgrave: Rebuild dictionary.txt
    - `perf` Issue #3192830 by neclimdul: twig_render_template micro optimization
    - `docs` Issue #3451603 by Artusamak: Typo in Views default argument User plugin
    - `feat` Issue #3445909 by seanB, smustgrave, alexpott, catch: Add static caching to LayoutTempstoreRepository
    - `test` Issue #3449891 by NexusNovaz, manish-31, bbrala: Move to new test path in NodeTest as per todo
    - `fix` Issue #3443576 by finnsky, mherchel, arunkumark, smustgrave, ckrina, Gauravvvv: Mobile version of Navigation menu doesn&#039;t properly reset Drupal.displace() on closing
    - `fix` Issue #3180696 by Spokje, Nikolay Shapovalov, adamzimmermann, quietone, manish-31, xjm, SuperfluousApostrophe, smustgrave, jonathan1055, longwave: Fix &#039;Drupal.Commenting.TodoComment&#039; coding standard
    - `fix` Issue #3399956 by shashwat-tiwari, nod_, Gauravvvv, Meeni_Dhobale, ahsannazir, sakthi_dev, Kanchan Bhogade, shweta__sharma, joachim, Mithun S, smustgrave, saschaeggi, xjm, Anilu@: Tab highlights for current/hover/click are too high up when other tabs have 2 lines of text
    - `fix` Issue #3450253 by SandeepMahlawat, Gauravvvv, finnsky, SKAUGHT: Navigation: Avoid layout builder form submit
    - `style` Issue #3447942 by Redwan Jamous, ahsannazir, smustgrave: Update stylelint rule unit-allowed-list to include container query units
    - `fix` Issue #3443577 by Gauravvvv, rishabjasrotia, Rajan Kumar@2026, mherchel, finnsky, ckrina: Navigation overlay z-index is not defined
    - `revert` Revert &quot;Issue #3422537 by bbrala, cmlara, dww, joachim, longwave: Autoresolve cspell GIT_DEPTH issue when diff fails&quot;
    - `fix` Issue #3451602 by kristiaanvandeneynde: AccessResult::orIf() has meaningless checks
    - `fix` Issue #3451701 by dww, Mingsong, MegaphoneJon: The update module should not crash with releases that contain invalid values for core_version_requirement
    - `fix` Issue #3422537 by bbrala, cmlara, dww, joachim, longwave: Autoresolve cspell GIT_DEPTH issue when diff fails
    - `feat` Issue #3450516 by kim.pepper: Add support for !service_closure custom tag in YamlFileLoader
    - `docs` Issue #3451738 by Grimreaper, BramDriesen: Remove JavaScript from Views configuration form now that it is only CSS
    - `fix` Issue #3427999 by andypost, Ayesh, bbrala: [PHP 8.4] Fix implicitly nullable type declarations
    - `docs` Issue #3442227 by dww, smustgrave: Use labels in Views argument summaries for entity references
    - `fix` Issue #3450890 by kristiaanvandeneynde: Provide default values for an Access Policy API method that was overlooked
    - `fix` Issue #3450576 by kristiaanvandeneynde: Access policies should be marked as final to encourage decorating
    - `docs` Issue #3450760 by SandeepMahlawat, benjifisher, smustgrave: Add missing &#039;label&#039; key to navigation.layouts.yml
    - `feat` Issue #3424744 by bronzehedwick, ckrina, m4olivei, finnsky, smustgrave, plopesc, kostyashupenko, KeyboardCowboy: If no icon for a top-level item is provided, use the first two letters
    - `chore` Issue #3451514 by Spokje: Update Symfony 7.1 to the stable version
    - `fix` Issue #3441222 by kristiaanvandeneynde, nicxvan, catch, alexpott, smustgrave, lauriii, quietone: Allow update.php to load when entity type info needs to be updated
    - `fix` Issue #2640994 by dww, tduong, Alex Bukach, Berdir, ameymudras, catch, mohit_aghera, raman.b, jofitz, Ben Buske, ankithashetty, smustgrave, nikitagupta, nicxvan, FeyP, pameeela, technoveltyco, dawehner, kim.pepper, Lendude: Fix label token replacement for views entity reference arguments
    - `fix` Issue #3438878 by skyriter, ahsannazir, rkoller, ckrina, mradcliffe, smustgrave, Gauravvvv: Regression: The drawer in Safari is missing the drop shadow
    - `fix` Issue #3085360 by bradjones1, josephdpurcell, Giuseppe87, ravi.shankar, rajandro, ridhimaabrol24, bbrala, andregp, jhedstrom: RouteProvider::getRouteCollectionForRequest() can poison query string of next request
    - `feat` Issue #3447881 by plopesc, catch, larowlan, smustgrave, quietone: Improve access logic for Navigation blocks page
    - `docs` Issue #3437166 by Utkarsh_33, smustgrave, Jaypan, wdmartin: Update documentation for table.html.twig around table cells
    - `docs` Issue #3446413 by shaal, Gábor Hojtsy, smustgrave, quietone: Update the Drupal logo in Drupal core with the 2024 brand evolution
    - `fix` Issue #3444699 by Gauravvvv, finnsky, ahsannazir, nod_, SKAUGHT, Kanchan Bhogade: Navigation LayoutBuilder UI has dead click zone
    - `perf` Issue #3449743 by catch: Try to optimize test ordering when run-tests.sh is used with a mixture of test types
    - `docs` Issue #3447625 by tim.plunkett, DanielVeza, DyanneNova, tedbow: Add DanielVeza as a co-maintainer of Layout Builder
    - `fix` Issue #3344877 by alexpott, silverham: [regression] FTPExtension class can no longer connect as of 9.5.x
    - `fix` Issue #3449564 by harivansh, bbrala: Calling normalize without account context generates a warning
    - `feat` Issue #3447286 by narendraR, smustgrave: Add validation constraints to image.style.*
    - `fix` Issue #3449455 by mondrake: Correct placement of use statements in ClearTest
    - `docs` Issue #3449879 by mondrake: Prepare Drupal/Test/Component tests for conversion to attributes
    - `feat` Issue #3447920 by mfb: Add zlib to list of required extensions for runtime requirements check
    - `fix` Issue #3432595 by longwave, kim.pepper, alexpott: Use a tagged service iterator for uninstall validators instead of individual lazy proxies
    - `fix` Issue #3449469 by catch, mstrelan, smustgrave: Remove deprecated moved_files entries in core
    - `docs` Issue #3418489 by ahsannazir, m4olivei, patrickfgoddard, Amandeep123, adwivedi008, ckrina, Kanchan Bhogade, rkoller, xjm, smustgrave, baluv3, kostyashupenko, plopesc, finnsky: Choose an icon for the Announcements link
    - `docs` Issue #3447206 by pdureau: Add pdureau as a co-maintainer for the Theme API with a focus on SDC
    - `docs` Issue #3350947 by camilledavis, smustgrave, mgifford: &quot;Skip to main content&quot; link skips over content that is essential to the page, banner role should be for global content
    - `chore` Issue #3447487 by e0ipso: Add e0ipso as a co-maintainer of core theme system with focus on SDC
    - `fix` Issue #3446807 by quietone, divya.sejekan, smustgrave: Put &#039;Not supported&#039; update status on the correct side of the page
    - `fix` Issue #3432827 by longwave: Use tagged iterator in plugin.cache_clearer instead of a lazy service
    - `fix` Issue #3446504 by Utkarsh_33, smustgrave, Tom Konda: Mismatch between implementation and description for Drupal.Message.prototype.remove()
    - `docs` Issue #3439580 by dipakmdhrm, balagan, Shriaas, catch, BramDriesen, nicxvan: Make drupal.tableheader only use CSS for sticky table headers
    - `revert` Revert &quot;Issue #3208247 by sukr_s, smustgrave, alexpott, Nikolay Shapovalov, orb, catch, quietone, pwolanin: After deleting a translated article, search wants to reindex it&quot;
    - `fix` Issue #3449302 by catch: core.libraries.yml mis-implements moved_files syntax
    - `fix` Issue #3228350 by scott_euser, asirjacques, smustgrave, longwave, catch, alexpott, quietone, wotnak: oEmbed resource fetcher should allow adjusting timeout
    - `fix` Issue #3208247 by sukr_s, smustgrave, alexpott, Nikolay Shapovalov, orb, catch, quietone, pwolanin: After deleting a translated article, search wants to reindex it
    - `fix` Issue #3449214 by alexpott, nicxvan: A revert has cause cspell to fail due to the word yarhar
    - `revert` Revert &quot;Issue #3445847 by mstrelan: PHPUnit 10 behaves differently when invoked outside web root&quot;
    - `fix` Issue #3445847 by mstrelan: PHPUnit 10 behaves differently when invoked outside web root
    - `fix` Issue #3298580 by Utkarsh_33, Eduardo Morales Alberti, smustgrave, Akram Khan, skipper-vp, bnjmnm: Claro details component does not have the right class
    - `fix` Issue #3446357 by mglaman, Gauravvvv, finnsky, smustgrave, mherchel: Fix overflow visibility for wrapper content in navigation CSS
    - `fix` Issue #3424162 by camilledavis, dineshkumarbollu, smustgrave: Claro highlighted row not communicated to keyboard users
    - `docs` Issue #3425104 by finnsky, catch, smustgrave: Umami views should use responsive grid
    - `fix` Issue #3445033 by finnsky, smustgrave: Replace dialogContentResize jQuery event with CustomEvent
    - `docs` Issue #3374464 by luenemann, Utkarsh_33, vpa24, jennypanighetti, smustgrave, bnjmnm: Claro CSS for dropbutton items adds large gap of white space
    - `fix` Issue #3439017 by catch, smustgrave: Umami page.tpl.php breaks block placeholders
    - `refactor` Issue #3446116 by sjothivelu, m4olivei, plopesc: Rename UserNavigationBlock to NavigationUserBlock for class name consistency
    - `fix` Issue #2941189 by DanielVeza, longwave, smustgrave, xjm, tim.plunkett: Confirmation form for disabling per-entity layout overrides shows a success message and should not
    - `fix` Issue #3446381 by tim.plunkett, smustgrave, sarahjean: SDC&#039;s discovery has overly lenient regex
    - `feat` Issue #3172550 by bradjones1, DuaelFr, alexpott, smustgrave, longwave: Register Drupal&#039;s mime type guesser the Symfony MimeTypes service
    - `perf` Issue #3448487 by catch: CoreRecipesTest is slow
    - `fix` Issue #3444232 by andypost, smustgrave: [8.4] Fix implicitly nullable type declarations for phpstan job (manual ones)
    - `feat` Issue #2868384 by RoSk0, poker10, tuutti, rgeerolf, sokru, jofitz, pooja saraah, cilefen, catch, ThomWilhelm, larowlan, quietone: Allow the session name suffix to be configurable
    - `test` Issue #3440837 by sime: Test setup should copy default.settings.php/services.yml from assets
    - `docs` Issue #3448097 by Spokje: Support and recommend Symfony 7.1.0-RC1 for Drupal 11.0.0-beta1
    - `fix` Issue #3385934 by phthlaap, joegraduate, useernamee, alexpott: The configuration synchronization page encounters errors when core.extension.yml is missing in the config/sync directory
    - `fix` Issue #3448036 by mikelutz: InstallerTranslationExistingFileTest fails on 11.x branch
    - `fix` Issue #3447198 by phenaproxima, alexpott, nicxvan, larowlan: RecipeCommand mistakenly tries to apply a recipe even if you don&#039;t give it a valid directory
    - `fix` Issue #3447307 by longwave, catch, quietone: Remove remaining deprecated code from Drupal 11
    - `fix` Issue #3445184 by plopesc, matthieuscarset, m4olivei: Fatal error when accessing Navigation Blocks on a minimal profile installation because of the Shortcut block
    - `chore` Issue #3439591 by quietone, mstrelan, pradhumanjain2311, andypost, catch, mfb, longwave, coaston, penyaskito: Add composer dependency on ext-zlib
    - `fix` Issue #3447472 by larowlan, quietone: Update to jquery UI 1.14.0 beta
    - `chore` Issue #3447292 by longwave, quietone: Update Composer dependencies for 11.0.0-beta1
    - `feat` Issue #3447210 by alexpott, jnicola: Move RecipeDiscovery into RecipeConfigurator
    - `feat` Issue #3447072 by thejimbirch, alexpott, phenaproxima: Add &#039;recipe system&#039; and &#039;default content system&#039; subsystems and update Maintainers.txt
    - `docs` Issue #3447191 by longwave, xjm, quietone: Support and recommend Symfony 7.1.0-BETA1 for Drupal 11.0.0-beta1
    - `fix` Issue #3446967 by kim.pepper, alexpott: [11.x] Remove deprecated methods in InputStreamUploadedFile
    - `fix` Issue #3446962 by kim.pepper: Remove incorrectly added InputStreamUploadedFile::supportsMoveUploadedFile()
    - `docs` Issue #3446577 by mondrake: Prepare test docblocks for annotation conversion to attributes
    - `docs` Issue #3371937 by yash.rode, Abhijith S, smustgrave, fgm: Theme declaration and templates mismatch for feed_icon
    - `fix` Issue #3071446 by marcvangend, Kirst25, dcam, guptahemant, Lendude, nod_: Remove invalid iframe attributes from oembed field formatter
    - `test` Issue #3443748 by NexusNovaz, smustgrave: Testcase creates false positive
    - `docs` Issue #3446542 by mondrake: Replace @before*|@after* test annotations with attributes
    - `refactor` Issue #3444748 by kim.pepper, bbrala, andypost: Refactor JSON-API file uploads to use FileUploadHandler
    - `chore` Issue #3439522 by longwave, adwivedi008, quietone, smustgrave: Update JavaScript dependencies for Drupal 10.3/11.0
    - `fix` Issue #3427374 by danflanagan8, Vighneshh: taxonomy_tid ViewsArgumentDefault plugin doesn&#039;t add cache tags
    - `fix` Issue #3266160 by smustgrave, alex.skrypnyk, tannguyenhn, beatrizrodrigues, joachim, larowlan: Composer Scaffold plugin calls dispatch() instead of dispatchScript()
    - `fix` Issue #3443117 by bbrala, longwave, quietone: Fix Drupal.Functions.MultiLineFunctionDeclaration coding standard
    - `fix` Issue #3445950 by alexpott, tim.plunkett: \Drupal\Core\Plugin\DefaultLazyPluginCollection::setInstanceConfiguration() assumes that $configuration results in the same plugin instance
    - `fix` Issue #3091003 by sukr_s, smustgrave, RaphaelBriskie, FeyP, borisson_: Changing a display&#039;s machine name while an attachment exist breaks Views
    - `fix` Issue #3445274 by Gauravvvv, smustgrave: Navigation module offsets the Olivero skip link element
    - `fix` Issue #3443461 by Gauravvvv, Mithun S, finnsky, ckrina: escapeAdmin.js functionality should be removed(it not used anymore)
    - `docs` Issue #3425692 by msandoval, bember, KarimB, Amirez, Lenenba, joachim, mradcliffe, julieelman, Farnoosh: development.services.yml should document that parameters are only shallow-merged
    - `fix` Issue #3446403 by edutrul, jnicola, mradcliffe: [name]: This field is missing for example recipe
    - `test` Issue #3446378 by mglaman, catch: [random test failure] NavigationBlockUiTest::testNavigationBlockAdminUiPage failing
    - `fix` Issue #3446340 by finnsky, rkoller: Fix z-index
    - `fix` Issue #3443835 by Gauravvvv, aronm, m4olivei, finnsky, dalin, javi-er: &#039;Help&#039; tooltip is obstructed behind the navigation toolbar border
    - `chore` Issue #3446258 by andypost: Remove core/scripts/drupal.sh
    - `fix` Issue #3445211 by catch, longwave, benjifisher, drumm, tobiasb: Composer tests fail because of invalid Drupal version
    - `chore` Revert &quot;Issue #3445211 by benjifisher, tobiasb: Composer tests fail because of invalid Drupal version&quot;
    - `feat` Issue #3331229 by pminf, chadhester, zshrestha, hardikpandya, _pratik_, rogerpfaff, ultimike, xjm, mandclu, alexb7217: Use chaining for User::addRole() and ::removeRole()
    - `fix` Issue #3443559 by mherchel, ckrina, finnsky, lauriii: Regression: Shortcuts menu flickers when the page is loaded
    - `fix` Issue #3191727 by Santosh_Verma, Gauravvvv, imalabya, chetanbharambe, Harish1688, chetansonawane, lauriii, smustgrave, mherchel: Focus states on mobile second level navigation items can get cut off in Olivero
    - `fix` Issue #2990766 by camilledavis, Gauravvvv, mgifford: Location of &quot;Skip to Main&quot; link below admin toolbar in Claro is problematic for screen magnifier users
    - `docs` Issue #3439646 by Tom Konda, smustgrave: Some of string comparisons should use String.prototype.startsWith() or String.prototype.endsWith()
    - `fix` Issue #3446078 by mherchel, javi-er: Olivero content shift on page load
    - `docs` Issue #3446107 by bbrala, andypost, xjm: Enforce null coalescing operator ?? instead of a ternary operator through phpcs
    - `fix` Issue #3445896 by mstrelan, mondrake: PHPUnit\Runner\ErrorHandler::__construct is private since PHPUnit 11.1
    - `fix` Issue #3445211 by benjifisher, tobiasb: Composer tests fail because of invalid Drupal version
    - `revert` Revert &quot;Issue #3445224 by catch, Gábor Hojtsy: Update composer metapackages&quot;
    - `fix` Issue #3445788 by andypost: [PHP 8.4] Fix phpstan job for ContentModerationConfigureEntityTypesForm
    - `fix` Issue #3444978 by catch, Berdir: UserAuth BC layer is not working for modules that use it to provide email based logins
    - `fix` Issue #3445791 by balsama, phenaproxima: Language module hook_modules_installed should account for sites with no installation profile now that it is possible to install a site from a recipe
    - `fix` Issue #3444264 by andypost, alexpott, longwave: [PHP 8.4] ReflectionMethod constructor deprecated with one argument
    - `chore` Issue #3417066 by mondrake, longwave, larowlan, alexpott, catch: Upgrade PHPUnit to 10, drop Symfony PHPUnit-bridge dependency
    - `feat` Issue #3439923 by alexpott, longwave, thejimbirch, Wim Leers, phenaproxima, immaculatexavier, nedjo, bircher, deviantintegral, franz, narendraR, omkar.podey, srishtiiee, Rajab Natshah, millnut, mondrake, amateescu, larowlan, sonfd, tasc, vasike: Add recipes api as experimental API to core
    - `fix` Issue #3443959: DialogRenderer::getTitleAsStringable() does not support all return types of TitleResolverInterface::getTitle()
    - `revert` Revert &quot;Issue #3396536 by fjgarlin, catch, kim.pepper: [random test failure] Re-enable AjaxTest::testAjaxFocus()&quot;
    - `feat` Issue #1956134 by smustgrave, dawehner, larowlan, jibran, jbloomfield, lokapujya, Oscaner, elachlan, mgifford, olli, srilakshmier, Manuel Garcia, Nitin shrivastava, afeijo, alexpott, jgeryk, garphy, grisendo, jessebeach, xjm, joachim, tim.plunkett, andypost, Wim Leers, EclipseGc, damiankloip, benjy, klonos: Provide helpful editing links on &quot;admin/structure/block&quot; for deriver blocks (menu, views, block content, etc.)
    - `feat` Issue #3441920 by scott_euser, catch, smustgrave, quietone: Support #attached settings in ViewAjaxController
    - `fix` Issue #3282598 by Gauravvvv, amit.mall, lalitware, pradhumanjain2311, Wim Leers: Claro should not hardcode decimal list style type for &lt;ol&gt;
    - `fix` Issue #3266299 by Gauravvvv, stueybrock, smustgrave, rkoller, amietpatial, sahil.goyal, mgifford, ckrina, mherchel, andrewmacpherson, mikemai2awesome: Claro: Form labels that are disabled have too low color contrast
    - `fix` Issue #3440223 by bronzehedwick, ahsannazir, jwitkowski79, adwivedi008: Incorrect padding on child menu items
    - `docs` Issue #3421175 by quietone, catch, Gábor Hojtsy, alexpott, smustgrave, longwave, daffie: Update INSTALL.txt and hook_requirements() etc. with remaining Drupal 11 platform requirements
    - `chore` Issue #3445224 by catch, Gábor Hojtsy: Update composer metapackages
    - `fix` Issue #3439909 by SolimanHarkas, vensires: Fix Taxonomy tests that rely on UID1&#039;s super user behavior
    - `chore` Back to dev.
    - `chore` Drupal 11.0.0-alpha1
    - `refactor` Issue #3400366 by mondrake, alexpott, mglaman, longwave, Spokje: Remove DrupalComponentTestListenerTrait and replace with a PHPStan rule
    - `refactor` Issue #3401734 by kim.pepper, alexpott, larowlan, pradhumanjain2311: Refactor FileUploadResource to use FileUploadHandler
    - `fix` Issue #3445072 by longwave, Anybody: Improve &quot;The libraries to include are encoded incorrectly&quot; check and message
    - `fix` Issue #3444932 by bnjmnm, lauriii, nod_: Make libraries with JS internal, at least for beta
    - `fix` Issue #3445069 by lauriii: Remove unused floating UI library definition
    - `fix` Issue #3348390 by amateescu, s_leu, Grevil: Improve the way entity forms are &quot;disabled&quot; early when an entity is being edited in a workspace
    - `fix` Issue #3443761 by amateescu: Workspace negotiators shouldn&#039;t be responsible for loading the negotiated workspace entity
    - `feat` Issue #3420983 by sorlov, godotislate, alexpott, quietone, kim.pepper, larowlan, mstrelan: Convert Layout plugin discovery to attributes
    - `fix` Issue #3440993 by bbrala, bradjones1, larowlan, quietone: Improve JSON:API test failure messages to include errors when data is expected
    - `fix` Issue #3442395 by smustgrave, andypost, catch, Wim Leers: ckeditor5 and editor module test config exports/stubs rely on hook_editor_presave() bc layers
    - `fix` Issue #3432632 by simohell, smustgrave, kostyashupenko, andypost: Collapsed nav-tabs status not exposed to screen reader
    - `fix` Issue #3444512 by neclimdul, alexpott, smustgrave: Pager current page announced twice
    - `fix` Issue #3055807 by ptmkenny, murilohp, vladimir.krupin, smustgrave, ankithashetty, yogeshmpawar, ravi.shankar, rensingh99, vikashsoni, axel80, alexpott: User created via /user/register?_format=json get blocked
    - `docs` Issue #3440114 by Gábor Hojtsy, andypost, catch, BramDriesen: Update PHP EOL dates based on updated PHP team decisions
    - `fix` Issue #3444566 by mondrake: Fix remaining deprecated string array keys in data sets returned by data provider methods that do not match the parameter names
    - `fix` Issue #3444587 by alexpott: Add CSS to prettier command and fix core/misc/jquery.form.js to be ignored
    - `fix` Issue #3441137 by catch, mherchel: BigPipe injecting Local Actions block creates large janky layout shift in Claro
    - `refactor` Issue #3422383 by longwave, mondrake: Convert remaining data providers to static methods
    - `fix` Issue #3427173 by mondrake, longwave, alexpott, catch: Replace calls to :::expectWarning*() in Drupal\Tests\Component\PhpStorage\FileStorageTest
    - `docs` Issue #3409048 by finnsky, alexpott, longwave, bnjmnm, andypost, nod_: Configure postcss formatting after stylelint and stylelint-config-standard update
    - `fix` Issue #3441392 by Binoli Lalani, smustgrave, andypost, quietone, pradhumanjain2311, longwave, catch: Removed deprecated code in Render system
    - `fix` Revert &quot;Issue #3444264 by andypost: [PHP 8.4] ReflectionMethod constructor deprecated with one argument&quot;
    - `fix` Issue #3443866 by finnsky, markusVJH: The toggle button flickers on page load
    - `docs` Issue #3440226 by sanisaha, adwivedi008, Rajan Kumar@2026, jwitkowski79, Kanchan Bhogade, smustgrave, finnsky, ckrina: Update color of submenu title text
    - `fix` Issue #3443208 by smustgrave, andypost: Remove any missed deprecation code in modules and lib folders
    - `revert` Revert &quot;Issue #3440975 by kunal.sachdev, phenaproxima: Add validation constraints to system.mail&quot;
    - `fix` Issue #3390549 by finnsky, nod_, smustgrave, larowlan, catch, bnjmnm: Get rid of jQuery in dialog events
    - `fix` Issue #3444264 by andypost: [PHP 8.4] ReflectionMethod constructor deprecated with one argument
    - `feat` Issue #3440975 by kunal.sachdev, phenaproxima: Add validation constraints to system.mail
    - `fix` Issue #3440044 follow-up by mondrake: Replace catch of PHPUnit\Framework\Error\Warning in MarkupInterfaceComparatorTest
    - `feat` Issue #3273461 by amateescu, smustgrave, alexpott: Add pagination to the workspace manage page
    - `perf` Issue #3444060 by longwave, catch, mondrake: Implement failed database statement events in performance test query logging
    - `fix` Issue #3443497 by smustgrave, mikelutz: Remove deprecated code from \Drupal\Core\Cron
    - `fix` Issue #3439907 by sukr_s, smustgrave, vensires, alexpott: Fix System tests that rely on UID1&#039;s super user behavior
    - `fix` Issue #3411308 by stefan.korn, ndf, amateescu: WorkspaceSubscriber service parameter $workspaceAssociation must be optional
    - `fix` Issue #3443535 by longwave: Change @dataprovider to static in SqlContentEntityStorageSchemaTest
    - `feat` Issue #3437319 by srishtiiee, narendraR, pradhumanjain2311, phenaproxima, Wim Leers: Add validation constraints to update.settings
    - `fix` Issue #3442167 by mondrake, xjm, larowlan: Fix string array keys in data sets returned by data provider methods that do not match the parameter names in Kernel tests
    - `fix` Issue #3443493 by smustgrave, mikelutz, Gábor Hojtsy, catch, longwave: Remove deprecated code from lib/State and lib/Session
    - `fix` Issue #3443527 by godotislate, smustgrave: Setting empty URL when making embedded media a link in CKEditor5 causes JS errors
    - `feat` Issue #2986005 by amateescu, longwave: Add the ability to mark (VBO) actions as workspace-safe
    - `fix` Issue #3443495 by smustgrave, mikelutz: Remove deprecated code from lib/Update, lib/Updated, and lib/Validation
    - `fix` Issue #3444135 by Wim Leers: [regression] [11.x] &quot;validatable config&quot; CI job no longer runs because Drupal 11 started requireing SQLite 3.45
    - `docs` Issue #3399036 follow-up by Wim Leers, godotislate: CKEditor5PluginManager: use PHP attributes instead of doctrine annotations
    - `fix` Issue #3440220 by kostyashupenko, adelansari: Remove bottom radius on hover state of expanded sub menu item
    - `fix` Issue #3441124 by mherchel, nod_, smustgrave, xjm: Views UI action buttons create janky layout shift on page load
    - `docs` Issue #3443869 by kostyashupenko, smustgrave: Add @file documentation to menu-region--footer.html.twig template
    - `fix` Issue #3443492 by smustgrave, quietone, mikelutz: Remove deprecated code from lib/Routing
    - `fix` Issue #3444184 by mondrake: Remove dead KernelTestBase::stop() method
    - `fix` Issue #3442766 by smustgrave, quietone, mikelutz, catch: Remove deprecated code from bootstrap and lib/Controller, lib/Config
    - `fix` Issue #3444040 by plopesc: Navigation render array is completely generated, even if the navigation bar is not rendered
    - `fix` Issue #3101552 by Berdir, Primsi, Nikhil_110, smustgrave: Make FileItem translations synchronisable
    - `fix` Issue #3443487 by smustgrave: Remove deprecated code from lib/EventSubscriber and lib/Field
    - `refactor` Issue #3443494 by smustgrave: Remove deprecated code from lib/Test and lib/TypedData
    - `revert` Revert &quot;Issue #3441434 by narendraR, Wim Leers: Add validation constraints to core.menu.schema.yml&quot;
    - `docs` Issue #3441434 by narendraR, Wim Leers: Add validation constraints to core.menu.schema.yml
    - `chore` Issue #3443567 by longwave: Update CKEditor 5 to 41.3.1
    - `fix` Issue #3444022 by andypost: [8.4] Fix implicitly nullable type declarations in core/lib/Drupal/Component
    - `fix` Issue #3444028 by andypost: [8.4] Fix implicitly nullable type declarations in core/includes
    - `fix` Issue #3443915 by plopesc, mherchel: Font for navigation is preloaded in header even when navigation bar is not loaded
    - `fix` Issue #3436490 by mondrake: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - Step 3
    - `docs` Issue #3399036 by godotislate, quietone, Wim Leers, kim.pepper, Keshav Patel, smustgrave, alexpott, larowlan: CKEditor5PluginManager: use PHP attributes instead of doctrine annotations
    - `fix` Issue #2638686 by solideogloria, garphy, loziju, smustgrave, roderik, Berdir, dww, catch, Wim Leers: Correctly handle cache data instead of throwing an Exception in EarlyRenderingControllerWrapperSubscriber()
    - `docs` Issue #3443709 by quietone: Enable Drupal.NamingConventions.ValidVariableName.LowerCamelName
    - `chore` Issue #3422915 by magaki, karanpagare, joachim, alexpott, Keshav Patel, smustgrave, Aguillet: Deprecate Drupal\locale\Locale and its one method
    - `fix` Issue #3443886 by longwave: Remove deprecated code from MarkupInterfaceComparator
    - `perf` Issue #3443108 by catch: Optimize AssetResolver caching
    - `docs` Issue #3443867 by kekkis, YevKo: Add @file documentation to navigation.html.twig layout template
    - `docs` Issue #3441782 by dineshkumarbollu, Tom Konda: JSDoc for ajax command &quot;changed&quot; is incorrect
    - `fix` Issue #3443899 by julilan, smustgrave: menu_heading_id variable is not set in menu-region--footer.html.twig
    - `fix` Issue #3440044 by longwave, quietone, Binoli Lalani, mondrake: Replace catch of PHPUnit\Framework\Error\Warning in MarkupInterfaceComparatorTest
    - `revert` Revert &quot;Issue #3443493 by smustgrave, Gábor Hojtsy, mikelutz: Remove deprecated code from lib/State and lib/Session&quot;
    - `fix` Issue #3443493 by smustgrave, Gábor Hojtsy, mikelutz: Remove deprecated code from lib/State and lib/Session
    - `fix` Issue #3409505 by sakiland, wendell, malik.kotob, darko_antunovic, KlemenDEV, longwave, Taran2L, tyler36, smustgrave, jhedstrom, mindaugasd: [regression] Uncaught TypeError: Cannot read properties of null (reading &#039;style&#039;) (toolbar.js)
    - `fix` Issue #3440043 by mondrake, longwave, larowlan, alexpott: Stop triggering a warning in MySQL&#039;s TransactionManager rollback
    - `docs` Issue #3443868 by Linh Le, YevKo: Add documentation to arrow-navigation.js
    - `fix` Issue #3225621 by sagarchauhan, andy-blum, marcusvsouza, kostyashupenko, alextran, yogeshmpawar, lauriii, nod_, Chi, adelansari: Use media query event listener instead of a listener on the resize event
    - `test` Issue #3443255 by mikelutz: [random test failure] MigrationTest::testMigrationDependenciesInConstructor
    - `fix` Issue #3441615 by SKAUGHT, mErilainen, kekkis: navigation_theme() loads &#039;extension.list.module&#039; for no purpose
    - `chore` Issue #3438895 by finnsky, larowlan, plopesc, m4olivei, ckrina, mherchel, catch, alexpott, nod_, deviantintegral, jwitkowski79, nod_, jponch, jwitkowski79, rkoller, Ana Barcelona, YurkinPark, finnsky, javi-er, alvarito75, ctrlADel, AaronMcHale, Emma Horrell, akshayadhav, claireristow, baluv3, bronzehedwick, NikMis, deviantintegral, hot_sauce, kostyashupenko, gnuschichten, keyboardcowboy, gdd, silviu, Prashant.c, ehsann_95, pjudge, rkoller, Shreya_th, starshaped, bal krishna, meeni_dhobale, mherchel, johnpicozzi, chetan_, saschaeggi, markie, iro, abhishek_gupta, vensires, KurtTrowbridge, hooroomoo, Utkarsh_33, Svitlana, starshaped, KeyboardCowboy, benjifisher, ahsannazir, tim.plunkett, tedbow, flanneryla, Anandt846, Kanchan Bhogade, SKAUGHT, joaopauloc.dev, Silviu S., q0rban, rabbitlair, bnjmnm, Mithun S, Akhil Babu, gaurav_manerkar, dead_arm, YurkinPark, lauriii, sani, chetan 11, DieterHolvoet, Gábor Hojtsy, jwilson3, marcelreimer: Add the new Navigation to core as an Experimental module
    - `refactor` Issue #3057070 by joachim, Pancho, nicxvan: Refactor ImageFieldCreationTrait to support entity types other than nodes
    - `fix` Issue #3443533 by longwave, mondrake: Change @dataprovider to static in EntityStorageBaseTest
    - `fix` Issue #3443537 by longwave, mondrake: Change @dataprovider to static in CallableResolverTest
    - `fix` Issue #3443479 by smustgrave: Remove deprecated code from Access, Ajax, and Asset
    - `fix` Issue #3441394 by quietone, smustgrave, pradhumanjain2311, catch: Remove deprecated code in utilities
    - `fix` Issue #3443536 by longwave: Change @dataprovider to static in LoggerChannelTest
    - `docs` Issue #3413657 by quietone: Update COPYRIGHT.txt for 2024
    - `fix` Issue #3439917 by sukr_s, smustgrave, adwivedi008, alexpott, vensires, quietone: Fix Views tests that rely on UID1&#039;s super user behavior
    - `feat` Issue #3439620 by omkar.podey, narendraR: Add validation constraints to system.advisories
    - `fix` Issue #3443491 by smustgrave: Remove deprecated code from lib/Password and lib/Plugin
    - `fix` Issue #3443490 by smustgrave: Remove deprecated code from lib/Logger and lib/Menu
    - `refactor` Issue #3443489 by smustgrave: Remove deprecated code from lib/Installer and lib/KeyValueStore
    - `fix` Issue #3443488 by smustgrave: Remove deprecated code from lib/Flood and lib/Form
    - `refactor` Issue #3443486 by smustgrave: Remove deprecated code from lib/Batch and lib/Datetime
    - `fix` Issue #3439914 by pradhumanjain2311, sukr_s, vensires, smustgrave: Fix User tests that rely on UID1&#039;s super user behavior
    - `fix` Issue #3443215 by nicxvan: Remove Book usage from Umami
    - `fix` Issue #3443276 by mondrake: Remove dead code from Connection
    - `fix` Issue #3443530 by longwave: Change @dataprovider to static in BackendCompilerPassTest
    - `fix` Issue #3443551 by andypost: Removed deprecated code in toolbar module
    - `fix` Issue #3443528 by longwave: Change @dataprovider to static in TitleResolverTest
    - `fix` Issue #3443515 by longwave: Change @dataprovider to static in MenuAccessControlHandlerTest
    - `fix` Issue #3443517 by longwave: Change @dataprovider to static in FileCacheFactoryTest
    - `fix` Issue #3443524 by longwave: Change @dataprovider to static in ConditionAccessResolverTraitTest
    - `fix` Issue #3436954 by longwave, smustgrave: Remove state_cache setting in Drupal 11
    - `fix` Issue #3442530 by smustgrave, andypost, quietone: Update contextual module deprecation for removal in 12.0
    - `feat` Issue #3420981 by kim.pepper, quietone, mstrelan, Berdir, alexpott: Convert FieldType plugin discovery to attributes
    - `fix` Issue #3443049 by nicxvan, Arun.k, longwave, alexpott: Remove deprecations in SiteConfigureForm
    - `fix` Issue #3442713 by smustgrave, catch, Binoli Lalani, longwave: Remove deprecated code from the entity system
    - `fix` Issue #3443037 by alexpott, catch, kristiaanvandeneynde, Taran2L, longwave: Super user access policy and the installer
    - `docs` Issue #3443214 by nicxvan: Update comments to not reference Book since it has been removed
    - `perf` Issue #3442259 by catch, quietone, dww: Reduce time of Migrate Upgrade tests by not outputting the logs by default
    - `fix` Issue #3442162 by catch, smustgrave: Remove redundant hook_ENTITY_TYPE_presave() and ViewsConfigUpdater methods
    - `fix` Issue #3443211 by nicxvan, smustgrave: Update cspell.json to remove references to extensions no longer in core
    - `refactor` Issue #3443205 by andypost, smustgrave: Remove deprecated code from migration modules
    - `fix` Issue #3443206 by smustgrave: Remove deprecated code from search and options modules
    - `fix` Issue #3443203 by smustgrave, andypost: Remove deprecated code from menu link content module
    - `fix` Issue #3443198 by andypost, smustgrave, catch: Remove deprecated code from phpPass + bigpipe
    - `fix` Issue #3443300 by mondrake: Fix remaining return*() methods of class PHPUnit\Framework\TestCase deprecated in PHPUnit 10
    - `fix` Issue #3443026 by longwave: Change @dataprovider to static in MenuAccessControlHandlerTest
    - `fix` Issue #3442976 by smustgrave, andypost: Remove deprecations from ckeditor5, editor, and filter modules
    - `fix` Issue #3443197 by smustgrave: Remove deprecated code from config module
    - `docs` Issue #3369099 by longwave, mondrake, smustgrave: [PHPUnit 10] Provide a static alternative to @dataproviders using PHPUnit mocks in ProtectedUserFieldConstraintValidatorTest
    - `fix` Issue #3443201 by smustgrave: Remove deprecated code from media module
    - `fix` Issue #3443200 by smustgrave: Remove deprecated code from field + datetime modules
    - `fix` Issue #3443248 by alexpott: Can&#039;t log out on translated site in tests - causes issues for 10.3 umami test
    - `fix` Issue #3443202 by andypost, smustgrave: Remove deprecated code from help + history modules
    - `fix` Issue #3443199 by smustgrave, andypost: Remove deprecated code from content translations + locale
    - `revert` Revert &quot;Issue #3443049 by nicxvan, Arun.k: Remove deprecations in SiteConfigureForm&quot;
    - `fix` Issue #3443049 by nicxvan, Arun.k: Remove deprecations in SiteConfigureForm
    - `fix` Issue #3423920 by DanielVeza, smustgrave, acbramley, bradallenfisher, larowlan, alexpott: Custom Blocks with Layout Builder Enabled No Longer Use Front End Theme
    - `fix` Issue #3442864 by dww, catch: [regression] 404 for misc/throbber-active.gif / misc/loading-small.giff
    - `fix` Issue #3439981 by fago, ericgsmith, petar_basic, acbramley: Uploading a file to media library flushes theme registry
    - `fix` Issue #3414398 by catch, Berdir: AssetResolver::getJsAssets() and AssetResolver::getCssAssets()  can repeatedly try to calculate the same set of assets
    - `fix` Issue #3442763 by smustgrave: Remove deprecated code in RandomGeneratorTrait.php
    - `fix` Issue #3416700 by catch, penyaskito, lamp5: Handle invalid compressed ajax_page_state more gracefully
    - `fix` Issue #3442532 by smustgrave, andypost, pradhumanjain2311, quietone: Removed deprecated code in views module
    - `fix` Issue #3432882 by kim.pepper, Satane, andypost, alexpott, longwave: Remove deprecated code in File module
    - `fix` Issue #3439871 by SolimanHarkas, vensires: Fix Help tests that rely on UID1&#039;s super user behavior
    - `fix` Issue #3432868 by smustgrave, obsidian_, longwave, quietone, mstrelan, catch: Remove deprecated code from user module
    - `fix` Issue #3439369 by fromme, quietone, pradhumanjain2311, smustgrave, alexpott: Remove deprecated code in migration system
    - `fix` Issue #144538 by acbramley, tuutti, Damien Tournoud, alexpott, solideogloria, Xano, TwoD, damiankloip, smustgrave, pameeela, deviantintegral, L_VanDamme, daften, karishmaamin, g.oechsler, larowlan, klausi, sun, Fabianx, andypost, dawehner, kwinters, greggles, Wim Leers, grendzy, pwolanin, alexanderpas, drumm, Chi: User logout is vulnerable to CSRF
    - `fix` Issue #3437839 by catch, Luke.Leber, thejimbirch: Only send libraries with aggregate URLs that have the aggregate type included
    - `fix` Issue #1561214 by mfb, sun, fietserwin, drzraf, sdrycroft, nicxvan: Bootstrap sets C locale, but does not set UTF-8 character encoding
    - `refactor` Issue #3442660 by catch, smustgrave: Remove deprecated code from jsonapi and serialization modules
    - `fix` Issue #3442697 by smustgrave, catch: Remove deprecated code from update module
    - `fix` Issue #3442693 by catch, smustgrave: Remove deprecated code from path_alias module
    - `fix` Issue #3442365 by catch, Sandeep Sanwale: Removed deprecated code in taxonomy module
    - `fix` Issue #3442361 by catch, smustgrave: Remove deprecated code from field_ui
    - `fix` Issue #3439831 by thebumik, pradhumanjain2311, vensires: Fix Config tests that rely on UID1&#039;s super user behavior
    - `refactor` Issue #3238868 by ahsannazir, smustgrave: Refactor some uses of the jQuery parents function to use vanillaJS
    - `fix` Issue #3343153 by samit.310@gmail.com, andypost, smustgrave, alexpott: Remove deprecated code from \Drupal\Core\Url
    - `chore` Issue #3423975 by smustgrave, quietone, catch, kostyashupenko, lauriii: Remove Book module
    - `chore` Issue #3442286 by catch, longwave, quietone, alexpott: Deprecate and remove shepherd.js
    - `fix` Issue #3425294 by thhomas, longwave, saurabh rawat, quietone, mstrelan: Remove deprecations for UrlGenerator methods
    - `fix` Issue #3442297 by mondrake: Change @dataprovider to static in DrupalComponentTest
    - `fix` Issue #3442399 by catch: Remove deprecated code/bc layers from workspaces module
    - `fix` Issue #3438771 by amateescu, Michelle, smustgrave: Newly added menu links are invisible until published
    - `fix` Issue #3307519 by amateescu, Darren Oh, s_leu, catch: The toolbar workspace switcher is not redirecting to the current page
    - `fix` Issue #3442176 by catch, dww: DateRangeFieldTest should not use a data provider
    - `fix` Issue #3442295 by mondrake: Change @dataprovider to static in YamlTestBase
    - `fix` Issue #3442303 by mondrake: Fix return typehinting for MediaMappingsConstraintValidator::validate()
    - `fix` Issue #3341092 by quietone, catch: Remove Statistics from core
    - `fix` Issue #3440424 by alexpott: Inconsistent behaviour with drupalGet() when site is installed in a subdirectory
    - `docs` Issue #3441660 by longwave: [PHPUnit 10] Provide a static alternative to @dataproviders using PHPUnit mocks in MailHandlerTest
    - `docs` Issue #3442189 by catch: Update the list of removed modules in system.install
    - `chore` Issue #3261653 by Spokje, catch, larowlan, quietone, kim.pepper, smustgrave, andypost, lauriii: Remove Forum module
    - `feat` Issue #3208390 by amateescu, s_leu, Fabianx, tim.plunkett, xjm, smustgrave, alexpott, catch, joachim, EclipseGc: Add an API for allowing modules to mark their forms as workspace-safe
    - `fix` Issue #3439925 by simonbaese, smustgrave, vensires: Fix Core tests that rely on UID1&#039;s super user behavior
    - `chore` Issue #3413917 by quietone, smustgrave, catch, andypost: Deprecate the Statistics module
    - `chore` Issue #3422600 by smustgrave, Spokje, quietone, catch, larowlan, lauriii, Wim Leers: Remove Tour module
    - `fix` Issue #3442172 by pradhumanjain2311, catch: Remove the 9.4 database dump fixtures from 11.x
    - `feat` Issue #3419186 by Ruturaj Chaubey, phthlaap, balintpekker, smustgrave: Add a hook_ENTITY_TYPE_form_mode_alter()
    - `chore` Issue #3261452 by Spokje, andypost, naveenvalecha, quietone, smustgrave: [11.x] Remove tracker module from core
    - `fix` Issue #3432134 by andypost, catch: Remove Action UI module
    - `chore` Issue #3439769 by quietone, catch: Remove all the pre-10.3.0 updates hooks
    - `fix` Issue #3441718 by mondrake: Fix string array keys in data sets returned by data provider methods that do not match the parameter names in Unit tests
    - `feat` Issue #3414563 by quietone, catch, smustgrave, andypost, Spokje: Add new 10.3.x database dump fixtures, without modules deprecated for removal in 11.x
    - `fix` Issue #3439905 by SolimanHarkas, thebumik, smustgrave, pradhumanjain2311, vensires, alexpott: Fix Shortcut tests that rely on UID1&#039;s super user behavior
    - `feat` Issue #3411839 by catch, Spokje, smustgrave, Gábor Hojtsy: [11.x] Update to jQuery 4.0.x beta
    - `docs` Issue #3441727 by quietone: Document update fixture drupal.broken.xml
    - `fix` Issue #3441844 by catch: Set budgets rather than exact numbers of asset size assertions
    - `feat` Issue #3437325 by narendraR, phenaproxima, alexpott, Wim Leers: Add validation constraints to system.date
    - `refactor` Issue #3205912 by quietone, kunal.sachdev, tedbow: Move duplicate code in testNormalUpdateAvailable to a new method
    - `fix` Issue #3439892 by SolimanHarkas, pradhumanjain2311, vensires: Fix Language tests that rely on UID1&#039;s super user behavior
    - `fix` Issue #3440170 by mxr576, quietone, smustgrave, longwave, larowlan: Forked DocParser incorrectly parses ::class notations
    - `perf` Issue #3441331 follow-up:wq: Update to Twig 3.9
    - `feat` Issue #3417363 by narendraR, Wim Leers, catch, phenaproxima, alexpott: Add validation constraints to field_ui.settings
    - `fix` Issue #3441755 by longwave: Change @dataprovider to static in ContextHandlerTest
    - `fix` Issue #3441331 by andypost, longwave, Spokje, xjm: Update to Twig 3.9
    - `refactor` Issue #3239139 by shubh_, Theresa.Grannum, alexpott: Refactor (if feasible) uses of the jQuery animate function to use Vanilla/native
    - `fix` Issue #3346218 by Kaushik1216, Harlor, urvashi_vora, xjm, pradhumanjain2311, nayana_mvr, smustgrave, larowlan, catch: Status message on comment edit is &#039;Your comment has been posted.&#039;
    - `fix` Issue #3368713 by mondrake, longwave, Spokje, smustgrave, quietone, larowlan: Change @dataprovider to static in CommentLinkBuilderTest
    - `feat` Issue #3365367 by bernardm28, finnsky, smustgrave, mherchel: Convert Olivero&#039;s teaser into a single directory component
    - `fix` Issue #3278625 by catch, Taran2L: Remove jquery.tabbable.shim
    - `fix` Issue #3441386 by quietone: Remove deprecated code in Drupal\Component\PhpStorage
    - `fix` Issue #3439824 by quietone: Remove deprecated code from assertion, eventdispatcher and plugin components
    - `fix` Issue #3432867 by catch, Satane, quietone: Removed deprecated code in core/tests/Drupal/KernelTests
    - `fix` Issue #3440959 by Sandeep Sanwale, Gauravvvv, sourojeetpaul, smustgrave: Close icon is ovrlapping the title text in modal in claro
    - `fix` Issue #3296098 by catch, finnsky, smustgrave: Removal :tabbable usage in dialog.js
    - `fix` Issue #3441388 by quietone: Remove deprecated code in Drupal\Component\Serialization
    - `fix` Issue #3441477 by quietone, kunal.sachdev: Remove tag element from semver_test release history fixtures
    - `fix` Issue #3112962 by tedbow, quietone: Core compatibility messages on contrib available updates should consider supported branches
    - `docs` Issue #3436136 by dineshkumarbollu, joachim: Improve documentation for OptionsRequestSubscriber
    - `feat` Issue #3439527 by acbramley, smustgrave, alexpott: Add type hints to WebAssert::address* and cleanUrl
    - `feat` Issue #3389688 by kim.pepper, smustgrave, alexpott, quietone: Add a trait to get file upload location from a field definition
    - `fix` Issue #1766338 by vasike, John Pitcairn, sagesolutions, jenlampton, ckaotik, andyanderso, SoulReceiver, Krzysztof Domański, liquidcms, smustgrave, luenemann, sorin.eugen, dawehner, xenophyle, Lendude, zebda, pameeela, longwave, alison: Incorrect filter group OR behavior, LEFT JOIN changed to INNER JOIN
    - `fix` Issue #3439924 by SolimanHarkas, vensires: Fix Minimal profile tests that rely on UID1&#039;s super user behavior
    - `fix` Issue #3439899 by SolimanHarkas, vensires: Fix Menu tests that rely on UID1&#039;s super user behavior
    - `docs` Issue #3127168 by quietone, tedbow, dww: Create contrib Update test for legacy to semver releases
    - `fix` Issue #3227518 by kunal.sachdev, quietone, tedbow, ravi.shankar, gisle, phenaproxima: Never show a &quot;Not supported!&quot; version as &quot;Recommended&quot;
    - `fix` Issue #3295078 by quietone, dww, AaronMcHale, Anybody, benjifisher, andregp, shaal, rkoller, xjm, worldlinemine, simohell: Fix the label and description of the new &quot;view update notifications&quot; permission
    - `chore` Issue #3088643 by amateescu, Gábor Hojtsy, catch, smustgrave: Mark Workspaces as a stable core module
    - `docs` Issue #3439671 by catch, alexpott: StandardPerformanceTest::testAnonymous is hard to get to pass locally
    - `fix` Issue #3440041 by quietone, mondrake: Log warning for an invalid view display in  \Drupal\views\ViewExecutable::setDisplay
    - `fix` Issue #3439894 by SolimanHarkas, vensires: Fix Locale tests that rely on UID1&#039;s super user behavior
    - `feat` Issue #3280279 by AleexGreen, Wim Leers, sandeepraib, kim.pepper, smustgrave, alexpott, quietone, pradhumanjain2311, bruno.bicudo, longwave, claudiu.cristea, larowlan: Allow sites to programmatically opt in to accept more image type uploads in CKEditor 5: TIFF, SVG…
    - `fix` Issue #3158130 by longwave, Berdir, voleger, mayurjadhav, ranjith_kumar_k_u, _pratik_, smustgrave, acbramley: Many calls to ContextRepository::getAvailableContexts() due to entity upcasting
    - `revert` Revert &quot;Issue #3439844 by ivnish, KrakenBite, larowlan, smustgrave: Add setting to move comment form after comments&quot;
    - `fix` Issue #3439830 by thebumik, alexpott, pradhumanjain2311, vensires, smustgrave, kristiaanvandeneynde, larowlan: Fix Comments tests that rely on UID1&#039;s super user behavior
    - `feat` Issue #3439844 by ivnish, KrakenBite, larowlan, smustgrave: Add setting to move comment form after comments
    - `feat` Issue #3436936 by SandeepMahlawat, Gauravvvv, smustgrave, catch: Claro should use libraries-extend for views_ui.css
    - `fix` Issue #3440878 by adwivedi008, mondrake: Fix return typehinting for LangcodeRequiredIfTranslatableValuesConstraintValidator::validate()
    - `fix` Issue #3439904 by thebumik, pradhumanjain2311, smustgrave, kristiaanvandeneynde, vensires, alexpott, larowlan: Fix Path tests that rely on UID1&#039;s super user behavior
    - `fix` Issue #3427174 by longwave, quietone, dineshkumarbollu, mondrake, alexpott: Throw exception when calling NestedArray::setValue() when parents reference a non-array value instead of causing a PHP error
    - `fix` Issue #3440039 by samit.310@gmail.com, quietone, smustgrave, catch, mondrake: Log warning when relatable resource type references a missing entity type / bundle instead triggering E_USER_WARNING
    - `fix` Issue #3440038 by longwave, quietone, mondrake, catch: ImageItem logs an warning instead of triggering an E_USER_WARNING
    - `docs` Issue #3420972 by quietone, andypost, smustgrave, catch, daffie: Add testing wtih SQLite 3.45
    - `feat` Issue #3432874 by acbramley, catch, alexpott: Replace &quot;Expose all fields as blocks to Layout Builder&quot; configuration with a feature flag module
    - `fix` Issue #3323317 by amateescu, vladimir_kriukov, smustgrave, alexpott: Revision metadata is not updated when a workspace is merged into its parent
    - `feat` Issue #3324560 by alexpott, mstrelan, dimitriskr, xjm, longwave, catch: Replace strpos/substr with str_starts_with() / str_contains() / str_ends_with()
    - `feat` Issue #3439932 by phenaproxima, narendraR, Wim Leers, larowlan: Add validation constraints to system.image and system.image.gd
    - `fix` Issue #3280679 by quietone, Wim Leers: Remove legacy attributes, add supported_branches and consistently name update.module&#039;s XML fixtures
    - `fix` Issue #3271688 by smustgrave, larowlan, phenaproxima, borisson_, ravi.shankar, dianacastillo, TimoZura: Remove source from media mappings
    - `docs` Issue #2827897 by quietone, danflanagan8, mikelutz, smustgrave, mikeryan, osopolar, xurizaemon, benjifisher: Update documentation for handling dots in the static_map plugin
    - `docs` Issue #3221516 by quietone, himanshu_jhaloya, smustgrave, Lendude, joachim: Improve documentation for $old_destination_id_values in MigrateDestinationInterface
    - `refactor` Issue #3437566 by mondrake, longwave, catch, smustgrave, alexpott: Refactor trigger_error in TypedConfigManager
    - `fix` Issue #3427171 by samit.310@gmail.com, mondrake, longwave, smustgrave, Spokje, catch, quietone: Replace calls to ::expectWarning*() in Drupal\Tests\user\Kernel\Views\HandlerFilterRolesTest
    - `chore` Issue #3437335 by fromme, catch: Remove web.config from 11.x
    - `chore` Issue #3439525 by pradhumanjain2311, quietone, smustgrave: Update composer dependencies for Drupal 11.0
    - `fix` Issue #3412641 by catch, alexpott: OpenTelemetryNodePagePerformanceTest::testNodePageHotCache() is not hot enough
    - `feat` Issue #3427564 by phenaproxima, Wim Leers, alexpott, omkar.podey, Berdir, smustgrave, larowlan: Require `langcode: …` only for simple config that contains translatable values
    - `fix` Issue #3437178 by immaculatexavier, quietone, smustgrave, alexpott: Simplify getLegacyDrupalVersion()
    - `feat` Issue #3001496 by jonathanshaw, SmovS, Prashant.c, ptmkenny, smustgrave, manish-31, alexpott, bojanz, tedbow, elber, Berdir, quietone: Add an alter hook to EntityQuery
    - `docs` Issue #3439738 by mondrake, longwave: Change remaining Jsonapi module test dataproviders to static
    - `fix` Issue #3440523 by narendraR: Remove duplicate `the` from code
    - `fix` Issue #3419690 by longwave, mondrake, immaculatexavier, alexpott: Find an alternative to trigger_error in Drupal\Core\Database\Query\Condition::compile
    - `fix` Issue #3440000 by amateescu, smustgrave: Fix Workspaces&#039; hidden dependency on the path_alias module
    - `feat` Issue #3422872 by kunal.sachdev, Wim Leers: Add validation constraints to contact.settings
    - `revert` Revert &quot;Issue #3439800 by mstrelan: Standardize location of test modules&quot;
    - `fix` Issue #3440175 by mondrake: core/modules/sqlite/tests/src/Kernel/sqlite/TemporaryQueryTest.php is failing in HEAD
    - `fix` Issue #3440180 by mondrake: Fix wrong getStatus() call in MenuAccessTest
    - `docs` Issue #3440115 by mondrake: Change remaining File module test dataproviders to static
    - `fix` Issue #3439893 by thebumik, vensires: Fix Layout Builder tests that rely on UID1&#039;s super user behavior
    - `docs` Issue #3440176 by mondrake: Change remaining Media module test dataproviders to static
    - `fix` Issue #3439766 by markusVJH, quietone: Removed unused update test fixtures
    - `docs` Issue #3439800 by mstrelan: Standardize location of test modules
    - `chore` Issue #3303557 by Binoli Lalani, quietone, catch, Tom Konda, smustgrave: Deprecate and remove the AJAX replace method
    - `docs` Issue #3439446 by Gábor Hojtsy, nod_, ckrina, justafish: Promote Cristina Chumillas, Sally Young and Théodore Biadala from provisional to full Drupal Core Frontend Framework Managers
    - `fix` Issue #3272629 by kelly.m.jacobs, alexpott, Abhijith S, imclean, heni_deepak, azinck: Media Library widget display doesn&#039;t return to first page on applying filters
    - `fix` Issue #3000749 by amateescu, s_leu, dragos-dumi, tim.plunkett, jeremylichtman, smithmilner, velocis: Layout builder overrides on a single content item not allowed in a workspace
    - `docs` Issue #3440087 by dww: Update CacheTagOperation enum to use UpperCamelCase
    - `fix` Issue #3439829 by thebumik, dimitriskr, vensires: Fix Blocks tests that rely on UID1&#039;s super user behavior
    - `fix` Issue #3437623 by alexpott, kim.pepper, sakthi_dev: \Drupal\file\Upload\FileUploadHandler::handleFileUpload() should alway check that the uploaded file is valid
    - `fix` Issue #3427178 by mondrake, longwave: Replace calls to ::expectWarning*() from Drupal\Tests\Core\Security\DoTrustedCallbackTraitTest
    - `fix` Issue #3439647 by catch: Skip query string compression if zlib extension isn&#039;t available
    - `docs` Issue #3439493 by mondrake: Change remaining Forum module test dataproviders to static
    - `fix` Issue #3439922 by amateescu, vensires: Fix Workspaces tests that rely on UID1&#039;s super user behavior
    - `docs` Issue #3399388 by mstrelan: Add declare(strict_types=1) to all Kernel tests
    - `fix` Issue #3427172 by mondrake, longwave: Replace calls to ::expectWarning*() from Drupal\KernelTests\Core\Config\ConfigInstallTest
    - `fix` Issue #2786735 by recrit, eiriksm, ranjith_kumar_k_u, immaculatexavier, ravi.shankar, zaporylie, smustgrave, TrevorBradley, johnle, GaëlG, jefuri, alexpott, poker10: Image derivative generation does not work if effect &quot;Convert&quot; in use and file stored in private filesystem
    - `fix` Issue #3402713 by mstrelan, smustgrave, dww: Fix strict type errors: miscellaneous fixes in core Kernel tests
    - `perf` Issue #3117410 by jungle, longwave, alexpott, andypost, Kristen Pol, daffie: Use an optimised autoloader in testing (follow-up)
    - `docs` Issue #3437783 by mfb, pradhumanjain2311: Use standardized SPDX license identifiers
    - `fix` Issue #3439711 by nicxvan: Remove deprecated country call from 11.x
    - `fix` Issue #3357565 by quietone, Bhanu951, pradhumanjain2311, smustgrave, catch: Remove remaining uses of string &#039;bartik&#039; and &#039;seven&#039; when referring to the removed themes
    - `docs` Issue #3427176 by mondrake, longwave: Replace calls to ::expectWarning*() from Drupal\Tests\Core\EventSubscriber\SpecialAttributesRouteSubscriberTest
    - `fix` Issue #3438424 by catch, Berdir, alexpott, longwave: [random test failures] Race condition in state when individual keys are set with an empty cache
    - `fix` Issue #3439440 by nicxvan, Binoli Lalani, longwave: Remove country support from DateFormatter
    - `fix` Issue #3436814 by fromme, smustgrave: Use provider in ViewExecutable::hasUrl() instead of \Drupal::service()
    - `fix` Issue #3438034 follow-up by alexpott: Fix Composer Scaffold plugin event listeners
    - `feat` Issue #540008 by kristiaanvandeneynde, Spokje, daffie, clayfreeman, alexpott, eelkeblok, michaelfavia, ianthomas_uk, zaporylie, johnwebdev, abhisekmazumdar, anmolgoyal74, greggles, quietone, shaal, catch, rivimey, AaronMcHale, Berdir, ndf, xjm, finne, Wim Leers, esolitos, heddn, webchick, Bojhan, andypost, efpapado, benjifisher, lauriii, Gábor Hojtsy, moshe weitzman, harings_rob: Add a container parameter that can remove the special behavior of UID#1
    - `fix` Issue #3402294 by mstrelan, quietone, dww, smustgrave: Fix strict type errors: Convert FormattableMarkup to strings (complex replacement) in core Kernel tests
    - `docs` Issue #3420356 by dww, thursday_bw, Kanchan Bhogade, smustgrave, benjifisher, catch, alexpott: Add link to Update module documentation about installer settings
    - `fix` Issue #3251895 by Shabbir, rodrigoaguilera, ckrina: claro_form_views_ui_config_item_form_alter() assumes a suffix when there is a prefix leading to: Undefined index #suffix in $form[&#039;options&#039;][&#039;value&#039;]
    - `fix` Issue #2822890 by danflanagan8, Peacog, Lendude, quietone, smustgrave, AaronMcHale, benjifisher: Taxonomy vocabulary translation local task tab not shown in UI
    - `docs` Issue #3426506 by kim.pepper, smustgrave, mstrelan, alexpott: Create enums for File exists options and deprecate consts
    - `fix` Issue #3438034 by tannguyenhn, adwivedi008, alex.skrypnyk, alexpott: Fix Composer Scaffold plugin event listeners
    - `fix` Issue #3439439 by nicxvan, dww, longwave, andypost, quietone: Remove country setting from the installer
    - `refactor` Issue #3432183 by catch, andypost, longwave: Move system/base component CSS to respective libraries where they exist
    - `docs` Issue #3439079 by mondrake: Change remaining Link module test dataproviders to static
    - `fix` Issue #3436963 by sheetal-wish, ivnish, sourojeetpaul, smustgrave, longwave: CKEditor 5 table cell vertical align &quot;middle&quot; doesn&#039;t work
    - `fix` Issue #3419621 by dburiak, sijumpk, smustgrave, pameeela, alexpott: tablePositionSticky should not be called on a non-array variable
    - `fix` Issue #2862702 by larowlan, hswong3i, mohit_aghera, perfectcu.be, markhalliwell, mxr576, dscl, alexpott, smustgrave: PrepareModulesEntityUninstallForm::formTitle does not exist
    - `fix` Issue #3437162 by plopesc, smustgrave, Berdir: Move twig_debug and other development toggles into raw key/value
    - `refactor` Issue #3439039 by mondrake: Change QueryFactoryTest:providerTestGetKeys to static
    - `fix` Issue #3436527 by catch: follow-up, fix head fails.
    - `fix` Issue #3436527 by catch: follow-up, fix head fails.
    - `refactor` Issue #3438246 by mondrake: Change RecursiveContextualValidatorTest::providerTestValidatePropertyWithInvalidObjects to static
    - `perf` Issue #3436527 by catch: Record total css and js file size in performance tests
    - `feat` Issue #3420997 by sorlov, quietone, DanielVeza, smustgrave, alexpott, mstrelan: Convert MediaSource plugin discovery to attributes
    - `fix` Issue #3421843 by scott_euser, smustgrave, Wim Leers, catch: filter_autop should ignore twig.config debug html comments
    - `docs` Issue #3414920 by quietone, m0d: Fix documentation redirects to Drupal 7 docs
    - `fix` Issue #2883025 by pameeela, joachim, mradcliffe: Exception messages in FieldConfig::getFieldStorageDefinition() are inaccurate
    - `docs` Issue #3438302 by mondrake: Change DrupalLogErrorTest::provideFatalExitCodeData to static
    - `fix` Issue #3427398 by aaron.ferris, alexpott, sdhruvi5142, rkoller, smustgrave, DanielVeza: Cancel button on the discard changes in the layout builder confirmation step should take you back to the layout builder
    - `feat` Issue #3421016 by quietone, godotislate: Convert MigrateProcessPlugin plugin discovery to attributes
    - `feat` Issue #3421015 by godotislate: Convert MigrateDestination plugin discovery to attributes
    - `feat` Issue #3421020 by godotislate, mohit_aghera, quietone: Convert MigrateField plugin discovery to attributes
    - `chore` Issue #3437589 by andypost: Move permission, jsonapi and rest tests out of the action module
    - `feat` Issue #3424509 by godotislate, quietone, sorlov, smustgrave, alexpott, benjifisher: Update MigratePluginManager to include both attribute and annotation class
    - `docs` Issue #3438846 by mondrake: Add return typehints for classes that inherit from Composer
    - `fix` Issue #3437786 by quietone, longwave, catch, Gábor Hojtsy: Remove MYSQLND_MINIMUM_VERSION and LIBMYSQLCLIENT_MINIMUM_VERSION checks
    - `fix` Issue #3427177 by longwave, quietone, dineshkumarbollu, samit.310@gmail.com, mondrake, alexpott: Replace calls to ::expectError*() from Drupal\Tests\Core\Render\ElementTest
    - `refactor` Issue #3431203 by kim.pepper, alexpott, smustgrave, longwave: Deprecate user_validate_name() and replace with service
    - `fix` Issue #3257457 by DieterHolvoet, scott_euser, smustgrave, ankithashetty, alexpott, larowlan, Berdir, dww: AmbiguousBundleClassException if multiple entity types share the same class
    - `feat` Issue #3421000 by sorlov, quietone, smustgrave, larowlan, alexpott: Convert ViewsWizard plugin discovery to attributes
    - `fix` Issue #3426514 by magaki, Tom Konda, longwave: Drupal.theme.progressBar() does not escape output correctly
    - `chore` Issue #3413932 by quietone, Spokje, smustgrave, andypost, catch, larowlan: Deprecate Book module
    - `test` Issue #3254615 by kunal.sachdev, tedbow, quietone, smustgrave:  Add tests for determining which security releases are considered when a site is on a dev release
    - `test` Issue #3099825 by quietone, kunal.sachdev, smustgrave, tedbow: Test available updates when the current major and next major of core are supported
    - `revert` Revert &quot;Issue #3424509 by godotislate, quietone, sorlov, smustgrave, benjifisher, alexpott: Update MigratePluginManager to include both attribute and annotation class&quot;
    - `feat` Issue #3424509 by godotislate, quietone, sorlov, smustgrave, benjifisher, alexpott: Update MigratePluginManager to include both attribute and annotation class
    - `fix` Issue #3437752 by lhridley: Fix FileUploadResource::$fileSystem documented type to match the constructor typehint
    - `feat` Issue #3425870 by phenaproxima, alexpott, Wim Leers: Add validation constraints to image.settings
    - `revert` Revert &quot;Issue #3437566 by mondrake, smustgrave: Replace trigger_error in TypedConfigManager with a logger&quot;
    - `fix` Issue #124969 by Dave Reid, andregp, naxoc, pameeela, ravi.shankar, bruno.bicudo, _pratik_, jnlar, yogeshmpawar, marcingy, StevenPatz, amitgoyal, Johnny Santos, larowlan, smustgrave, Dries, DanielVeza, mstrelan, cburschka, quietone, alexpott, bradlis7: Contact form opt-out line should be excluded from admin-sent and sender-copy e-mails
    - `fix` Issue #3437566 by mondrake, smustgrave: Replace trigger_error in TypedConfigManager with a logger
    - `fix` Issue #3409456 by plopesc, smustgrave, quietone, e0ipso, catch: Remove SDC deprecated code before 11.0.0
    - `chore` Issue #3437778 by Spokje, longwave: Bump phpstan/phpstan and mglaman/phpstan-drupal to latest
    - `fix` Issue #3437579 by andypost: Remove deprecated code from comment module
    - `docs` Issue #3404663 by shweta__sharma, Tanuj., Gauravvvv, sdhruvi5142, Nitin shrivastava, smustgrave, Kanchan Bhogade: Olivero: Show content preview checkbox is not center aligned with the layout builder buttons
    - `feat` Issue #3437587 by narendraR, Wim Leers: Add validation constraints to system.diff
    - `docs` Issue #3300639 by amateescu, acrazyanimal, smustgrave: Improve and add explicit test coverage for the workspace conflict validator
    - `docs` Issue #3437514 by kim.pepper, alexpott: Deprecate hook_file_validate() API docs
    - `fix` Revert &quot;Issue #3432882 by kim.pepper, Satane, andypost, alexpott, longwave: Removed deprecated code in File module (core/module/file)&quot;
    - `fix` Issue #3432882 by kim.pepper, Satane, andypost, alexpott, longwave: Removed deprecated code in File module (core/module/file)
    - `feat` Issue #3414208 by kim.pepper, longwave, alexpott: Add support for tagged_iterator to YamlFileLoader
    - `chore` Issue #3432860 by longwave, catch: Update to Symfony 7.0
    - `fix` Issue #3437344 by longwave: State cache bin is inconsistently chosen
    - `fix` Issue #3436892 by plopesc, smustgrave: Remove deprecated code from shortcut module
    - `fix` Issue #3437342 by mondrake: Change FieldItemListTest::providerTestEquals to static
    - `fix` Issue #3437351: follow-up Fix return typehinting for Validator related classes
    - `revert` Revert &quot;Issue #3437286 by immaculatexavier, longwave: Use argument unpacking in FieldItemList::delegateMethod()&quot;
    - `fix` Issue #3364884 by codebymikey, Dylan Donkersgoed, sivakarthik229, DamienMcKenna, _utsavsharma, ramprassad, Znak, nod_, pradhumanjain2311, Wim Leers, smustgrave, kevinvanhove: [DrupalHtmlEngine] HTML-reserved characters (&gt;, &lt;, &amp;) in &lt;script&gt; and &lt;style&gt; tag are converted to HTML entities
    - `feat` Issue #3436671 by narendraR, Wim Leers, phenaproxima: Add validation constraints to system.cron
    - `feat` Issue #3437286 by immaculatexavier, longwave: Use argument unpacking in FieldItemList::delegateMethod()
    - `fix` Issue #3413508 by Jelle_S, taraskorpach, acbramley, smustgrave, alexpott, Eugen Zerr: Admin page access denied even when access is given to child items
    - `fix` Issue #3427046 by plopesc, smustgrave, alexpott: Shortcuts toolbar links are not updated automatically when default shortcut set is changed
    - `fix` Issue #3323990 by quietone, Akhil Babu, kevinquillen, benjifisher, mikelutz: Migrate Drupal reports wrong version of Drupal if pointed at a Drupal 9 or 10 database
    - `feat` Issue #2827055 by yash.rode, srishtiiee, mrshowerman, rodrigoaguilera, herved, omkar.podey, MegaChriz, Lukas von Blarer, ravi.shankar, lauriii, c_archer, ifrik, froboy, Rudi Teschner, smustgrave, liquidcms, catch, quietone, mpdonadio, alexpott: Add option to show only start or end date in the DateTime Range custom formatter
    - `fix` Issue #3437129 by mikelutz: Remove Drupal\Tests\migrate\Kernel\MigrateSourceTestBase::providerSource()
    - `fix` Issue #3425537 by mondrake: Fix remaining methods with #[\ReturnTypeWillChange] attribute
    - `perf` Issue #2575105 by Berdir, catch, longwave, quietone, kristiaanvandeneynde, andypost, alexpott, mathilde_dumond, pradhumanjain2311, amateescu, Wim Leers, xjm: Use cache collector for state
    - `refactor` Issue #3431452 by godotislate, smustgrave, alexpott: Rename RenderElement and FormElement plugin abstract classes to RenderElementBase and FormElementBase
    - `feat` Issue #3436468 by longwave, smustgrave, alexpott: AjaxResponseSubscriber should lazily instantiate AjaxResponseAttachmentsProcessor
    - `fix` Issue #3411384 by phthlaap, venkatadapa, alecsmrekar, plach, alexpott, heddn, Graber: Error: Call to a member function label() on null in Drupal\menu_link_content\Form\MenuLinkContentForm-&gt;form() (line 99 of /var/www/html/docroot/core/modules/menu_link_content/src/Form/MenuLinkContentForm.php)
    - `feat` Issue #3432602 by alexpott, phenaproxima: Allow a site to be installed from configuration with no profile
    - `feat` Issue #2259567 by jcnventura, eelkeblok, joegraduate, thejimbirch, nvahalik, Lendude, andypost, anmolgoyal74, vacho, oriol_e9g, trackleft2, DamienMcKenna, smustgrave, nelp, LOBsTerr, twills, huzooka, Gauravvvv, xopoc, caesius, gyuhyon, mgifford, joelpittet, fietserwin, mark.labrecque, fabio84, lauriii, greggles, alexpott, mondrake, catch, quietone, drugan, jungle, DuaelFr: Support SVG files for theme logo setting
    - `fix` Issue #3435906 by godotislate, afoerster: Default Images not rendered in layout builder
    - `fix` Issue #3432746 by rwanth: Taxonomy revision UI is missing log messages
    - `fix` Issue #3436879 by mondrake: follow-up Fix return typehinting for Compiler and EventSubscriber related classes
    - `docs` Issue #3127177 by kunal.sachdev, Spokje, quietone, smustgrave, tedbow, xjm: Move test methods not directly related to updates for the Drupal project into their own class
    - `revert` Revert &quot;Issue #3300639 by amateescu, acrazyanimal, smustgrave: Improve and add explicit test coverage for the workspace conflict validator&quot;
    - `fix` Issue #2514196 by pameeela, Aki Tendo, Lendude, lauriii: AliasManager-&gt;getAliasByPath() handles $path in confusing manner
    - `fix` Issue #3436680 by mondrake: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - Step 2 ContentEntityBase
    - `fix` Issue #3054821 by mr.baileys, wiifm, sime, angrytoast, pobster, smustgrave, RichardGaunt, alexpott, Wim Leers, quietone, Berdir, neclimdul, acbramley: Include Cache-Control header on 301 redirects
    - `fix` Issue #3340159 by robert-arias, ooa33, acbramley, smustgrave, Chi, mikelutz, quietone: Prevent empty block_content info fields from causing php deprecation notices when placing blocks with no label.
    - `fix` Issue #3436391 by mondrake: Fix return typehinting for Validator related classes
    - `refactor` Issue #2909185 by longwave, donquixote, andypost, andregp, pounard, jibran, martin107, kostyashupenko, catch, znerol: Replace ContainerAwareEventDispatcher with Symfony EventDispatcher
    - `fix` Issue #3436804 by longwave: CacheCollector::normalizeLockName() is pointless
    - `fix` Issue #3114365 by mohit_aghera, david.muffley, danflanagan8, Greg__, wsantell, Lendude, larowlan, xjm: Vocabulary name not shown in View for Anonymous Users
    - `docs` Issue #3436070 by markusVJH, joachim: obsolete docs about drupal_pre_render_links()
    - `refactor` Issue #3436597 by longwave, Spokje: Remove unused DependencySerializationTrait alias from ContextDefinition
    - `feat` Issue #3421004 by Ruturaj Chaubey, sorlov, quietone, smustgrave, larowlan, alexpott: Convert ViewsPager plugin discovery to attributes
    - `fix` Issue #2825860 by xurizaemon, Matroskeen, dewalt, neclimdul, joseph.olstad, ericgsmith, dpolant, hswong3i, mstrelan, aby v a, Akram Khan, Ratan Priya, robphillips, dpi, ryankavalsky, vetal4ik, jwilson3, jagermonster, Rob230, thomjjames, rajneeshb, Hygglo, CodigoVision, kndr, acbramley, Lendude, smustgrave, ExTexan, alexpott: Notice: Undefined index: value in Drupal\views\Plugin\views\filter\NumericFilter-&gt;acceptExposedInput()
    - `feat` Issue #3421003 by sorlov, quietone, pradhumanjain2311, smustgrave, larowlan, alexpott: Convert ViewsArgumentDefault plugin discovery to attributes
    - `feat` Issue #3413268 by BramDriesen, longwave, Spokje, catch, mondrake, quietone, andypost: Add PHP 8.3 requirement to Drupal 11.0.x
    - `fix` Issue #3436761 by simohell: Remove default event from collpased nav-tabs button
    - `fix` Issue #3436478 by longwave: Use regex instead of DOM parsing in BigPipe::getPlaceholderOrder()
    - `docs` Issue #3300639 by amateescu, acrazyanimal, smustgrave: Improve and add explicit test coverage for the workspace conflict validator
    - `feat` Issue #3410582 by catch, Prashant.c, heddn, alexpott, smustgrave, claudiu.cristea, longwave, quietone: Optimize user logins by avoiding duplicate entity queries
    - `refactor` Issue #3436599 by longwave: Replace RequestCloseSubscriber with needs_destruction tag on ModuleHandler
    - `feat` Issue #3436072 by omkar.podey, narendraR: Add validation constraints to text.settings
    - `feat` Issue #3364885 by andy-blum, mglaman, alexpott, mherchel, lauriii, smustgrave, isholgueras, Dave Reid, kostyashupenko, matthieuscarset, camoa, ctrlADel, fjgarlin, jwilson3: Allow themes to use a starterkit.yml file so it is easier to use the theme generator
    - `feat` Issue #3432601 by catch, quietone, smustgrave: Add deprecation/bc support for library-overrides when files are moved
    - `refactor` Issue #3352256 by e0ipso, plopesc, bbrala, longwave, dww, catch, larowlan: Move code from the experimental SDC module to core
    - `feat` Issue #3376846 by kristiaanvandeneynde, larowlan, smustgrave, catch: Implement the new access policy API
    - `fix` Issue #2651418 by vasike, DieterHolvoet, smustgrave, Xano, rpayanm, quietone, alexpott, larowlan, catch, lauriii: Non-array values for #ajax
    - `feat` Issue #3421005 by Ruturaj Chaubey, sorlov, quietone, smustgrave, larowlan, alexpott: Convert ViewsStyle plugin discovery to attributes
    - `fix` Issue #3433088 by mondrake, Spokje: Method getMockForAbstractClass() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10 - Step 1 interfaces
    - `fix` Issue #3433268 by Lendude, smustgrave, longwave, alexpott: Use plugin short_title for admin summary in ViewsArgumentDefault
    - `fix` Issue #3419548 by amateescu, smustgrave, malcomio: Workspace switcher block does not check access
    - `fix` Issue #3353918 by Spokje, longwave, rpayanm, mondrake: Fix PHPStan L1 errors &quot;Variable $foo might not be defined.&quot; caused by non-exhaustive switch statements
    - `fix` Issue #3436255 by mondrake, longwave: Fix return typehinting for Compiler and EventSubscriber related classes
    - `feat` Issue #3421439 by godotislate, sorlov, quietone, smustgrave, alexpott, larowlan, longwave, andypost: Convert form and render element plugin discovery to attributes
    - `fix` Issue #3433086 by mondrake: Method addMethods() of class PHPUnit\Framework\MockObject\MockBuilder is deprecated in PHPUnit 10
    - `feat` Issue #1149078 by vasike, wuinfo - Bill Wu, dww, Gauravvvv, Marios Anagnostopoulos, peterpoe, VladimirAus, legolasbo, GoZ, mgifford, dalin, jrb, heddn, himanshupathak3, _utsavsharma, GrandmaGlassesRopeMan, arcaneadam, danflanagan8, arnaud-brugnon, Daniel Kulbe, uzlov, Kuntyi, DamienMcKenna, Neslee Canil Pinto, COBadger, jofitz, esod, sukanya.ramakrishnan, nod_, droplet, smustgrave, CKIDOW: States API doesn&#039;t work with multiple select fields
    - `test` Issue #3254426 by kunal.sachdev, quietone, ravi.shankar, tedbow, SandeepSingh199, smustgrave: Add tests for logic on project_status from update XML
    - `fix` Issue #3418781 by sukr_s, Charles Belov, smustgrave: UI refers to &quot;files&quot; when you can only upload one file
    - `revert` Revert &quot;Issue #3410582 by catch, Prashant.c, heddn, alexpott, smustgrave, claudiu.cristea, longwave, quietone: Optimize user logins by avoiding duplicate entity queries&quot;
    - `feat` Issue #3410582 by catch, Prashant.c, heddn, alexpott, smustgrave, claudiu.cristea, longwave, quietone: Optimize user logins by avoiding duplicate entity queries
    - `fix` Issue #3433019 by andypost, catch: Replace deprecated help_topics module with obsolete stub
    - `fix` Issue #3432171 by mondrake: dump() no longer produces output in PHPUnit tests running under PHP 8.3
    - `feat` Issue #2966656 by imclean, smustgrave, phenaproxima, cilefen: Negotiate max width/height of oEmbed assets more intelligently
    - `fix` Issue #3418863 by kksandr, saschaeggi: Setting width for sticky-header is broken
    - `feat` Issue #3088870 by amateescu, Wim Leers, Spokje, jofitz, alexpott: Add missing REST and JSON:API test coverage for the workspace entity type
    - `fix` Issue #3433093 by mondrake: Method getObjectForTrait() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10
    - `fix` Issue #3427200 by gedvan, Wim Leers: CKEditor 5: Javascript error when plugin settings has NULL value
    - `fix` Issue #3392903 by borisson_, Wim Leers, phenaproxima: Validate inputs of TypeResolver::resolveExpression(): only allow %parent, %type and %key
    - `fix` Issue #3432228 by amateescu, smustgrave: Published entities created in a workspace should return the workspace-specific revision
    - `fix` Issue #3397439 by amateescu, smustgrave: Views query alter for fields stored in shared tables and accessed through a relationship is not working correctly
    - `fix` Issue #3422710 by nico.b, smustgrave, adwivedi008, alexpott: &quot;More&quot; link not taking default arguments into account
    - `fix` Issue #3425849 by jackwrfuller, joachim: DraggableListBuilderTrait needs to say that classes using it must implement FormInterface
    - `fix` Issue #3269141 by ameymudras, longwave, ravi.shankar, sharayurajput, catch, alexpott: Remove deprecated Drupal\Core\StringTranslation\TranslationWrapper to TranslatableMarkup in Drupal 11
    - `fix` Issue #3354998 by phthlaap, Liam Morland, jedihe, gapple, smustgrave: #states disable property has stopped working for submit button and other elements
    - `feat` Issue #3406172 by mandclu: Provide a flag to allow updates to stored schema for fields
    - `fix` Issue #3433091 by mondrake: Method getMockForTrait() of class PHPUnit\Framework\MockObject\MockBuilder is deprecated in PHPUnit 10
    - `docs` Issue #3397558 by mfb: OEmbed generates URLs with URL-decoded query string
    - `fix` Issue #3433089 by mondrake: Method onConsecutiveCalls() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10
    - `fix` Issue #3433052 by mondrake: Fix remaining return*() methods of class PHPUnit\Framework\TestCase deprecated in PHPUnit 10
    - `fix` Issue #3433042 by alexpott: The config in standard core.entity_view_display.node.article.teaser is not sorted correctly
    - `fix` Issue #3432871 by thhomas, mstrelan: Remove deprecated functions from node.module
    - `perf` Issue #3432738 by longwave: Optimize OptimizedPhpArrayDumper::dumpCollection()
    - `fix` Issue #3432986 by Spokje: Remove deprecation suppressions for ContainerAwareTrait and ContainerAwareInterface
    - `fix` Issue #3432326 by mondrake: Remove deprecated code from the Extension API
    - `fix` Issue #3320467 by Liam Morland, nicrodgers, smustgrave, andypost, jonnyhocks, alexpott: form_build_id is a hidden input field and therefore should not have the autocomplete attribute
    - `chore` Issue #3239012 by Wim Leers, quietone, smustgrave, xjm, catch, longwave: [11.x] Remove the CKEditor 4 upgrade path
    - `fix` Issue #3432258 by longwave, andypost: Remove deprecated ServiceIdHashTrait and related code
    - `fix` Issue #3426789 by mondrake, smustgrave: DatabaseDriver::load should have a non-service alternative for class loading
    - `chore` Issue #3432877 by thhomas, mstrelan: Remove deprecated actions from node module
    - `fix` Issue #3432998 by phenaproxima, alexpott: Standard&#039;s article teaser entity view display marks fields as hidden even though they&#039;re visible
    - `fix` Issue #3432849 by mondrake, Spokje: Method returnSelf() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10
    - `fix` Issue #3432852 by mondrake: Method returnArgument() of class PHPUnit\Framework\TestCase is deprecated in PHPUnit 10
    - `fix` Issue #3432599 by amateescu, alecsmrekar, larowlan: The default configuration of the oEmbed source plugin makes pages uncacheable
    - `fix` Issue #3432256 by saurabh rawat, thhomas, longwave: Remove deprecated code from include files
    - `fix` Issue #3432863 by obsidian_, mstrelan, DanielVeza: Remove deprecated code from core/tests/fixtures
    - `revert` Revert &quot;Issue #3370946 by kunal.sachdev, lauriii, tim.plunkett, omkar.podey, alexpott, ckrina, smustgrave, larowlan, rkoller, hooroomoo, duadua: Page title should contextualize the local navigation&quot;
    - `fix` Issue #3415582 by nico.b, larowlan, Matt B: Unhandled exception when trying to register a duplicate username with different case
    - `fix` Issue #3432545 by mark_fullmer: AssertionError: assert($editor instanceof Editor)
    - `fix` Issue #3432482 by mondrake, smustgrave: Remove deprecated code from the Cache API
    - `feat` Issue #3416354 by longwave, andypost, Spokje, alexpott: Inject services into LoggerChannelFactory
    - `fix` Issue #1170362 by alexpott, catch, pillarsdotnet, sun, jofitz, geerlingguy, steinmb, tresti88, DamienMcKenna, dpovshed, imclean, bradjones1, mErilainen, David_Rothstein, KarenS, BTMash, rickmanelius, Anonymous, smustgrave, Wim Leers, kreynen, webchick, websiteworkspace, phenaproxima, Kiphaas7, bbrala: Install profile is disabled for lots of different reasons and core doesn&#039;t allow for that
    - `fix` Issue #3413153 by znerol, alexpott: Remove calls to Request::hasSession()
    - `fix` Issue #3431362 by Spokje, longwave: Remove support for ContainerAwareInterface
    - `feat` Issue #3426959: Convert ViewsArea plugin discovery to attributes
    - `feat` Issue #3420984 by godotislate, andypost, smustgrave, larowlan, alexpott: Convert Layout DisplayVariant, PageDisplayVariant discovery to attributes
    - `feat` Issue #3389317 by joaopauloc.dev, nod_, Gauravvvv, joachim, simohell, shweta__sharma, rkoller, Harish1688, ckrina, saschaeggi: Differentiate visually dragging with and without hierarchy
    - `feat` Issue #3428565 by catch, phenaproxima, alexpott: Implement lazy database creation for sessions
    - `fix` Issue #3432298 by kostyashupenko, smustgrave: Sticky table header is not sticky if --drupal-displace-offset-top is not defined
    - `fix` Issue #3432151 by Tom Konda, longwave: [jQuery 4] ajax.js and jquery.form.js use deprecated function $.parseJSON()
    - `fix` Issue #3154087 by amateescu, Tim Bozeman, mallezie, smustgrave: Translations created in a workspace are not shown in the admin content overview
    - `feat` Issue #3278377 by amateescu, s_leu, smustgrave, pooja saraah, rkoller, simohell: Creating a new workspace should also switch to it
    - `feat` Issue #3421011 by sorlov, Wim Leers, quietone, kalpanajaiswal, mstrelan, Ruturaj Chaubey, smustgrave, larowlan: Convert Editor plugin discovery to attributes
    - `feat` Issue #3421002 by sorlov, Ruturaj Chaubey, smustgrave, larowlan: Convert ViewsDisplay plugin discovery to attributes
    - `feat` Issue #3420999 by sorlov, larowlan, smustgrave, mstrelan: Convert ViewsRow plugin discovery to attributes
    - `docs` Issue #3426958 by sorlov, godotislate, mstrelan, smustgrave: Convert ViewsJoin plugin discovery to attributes
    - `feat` Issue #3426961 by sorlov, Ruturaj Chaubey, mstrelan, smustgrave: Convert ViewsSort plugin discovery to attributes
    - `fix` Issue #3432249 by longwave, alexpott: cspell check is broken in commit-code-check.sh
    - `fix` Issue #3270139 by jannakha, bnjmnm, smustgrave, mgifford: CKEditor admin toolbar config buttons using ::before to add content: have invalid screen reader text
    - `docs` Issue #3432052 by catch: @group slow for more Kernel tests
    - `docs` Issue #3427500 by dreamleaf, adwivedi008, karanpagare: External link help text should give an https example instead of http
    - `fix` Issue #3431285 by mondrake, alexpott, jidrone, xjm, longwave: Replace func_get_args with variable-length argument in FormBuilder
    - `feat` Issue #2893568 by Wim Leers, lee.cocklin, AaronBauman, anon, ainarend: Linking in CKEditor 5: URLs with top-level domain but without protocol should get a protocol added automatically
    - `chore` Issue #3416357 by longwave, arunkumark, taraskorpach, Spokje, andypost: Convert QueueFactory to use a service locator
    - `feat` Issue #2765297 by mohit_aghera, joseph.olstad, sylus, alexpott, ducktape, anmolgoyal74, heikki, kishor_kolekar, kriboogh, googletorp, dnotes, mpp, catch, Lendude, Berdir, borisson_, xjm: Return translated term name on views &quot;Content: Has taxonomy term ID (with depth)&quot;
    - `fix` Revert &quot;Issue #2765297 by mohit_aghera, joseph.olstad, sylus, ducktape, alexpott, anmolgoyal74, heikki, kishor_kolekar, kriboogh, googletorp, dnotes, mpp, Berdir, borisson_, Lendude, xjm: Return translated term name on views &quot;Content: Has taxonomy term ID (with depth)&quot;&quot;
    - `chore` Issue #3431227 by Spokje, longwave: Update phpstan/phpstan-phpunit and make the updated-deps CI job pass again
    - `fix` Issue #3109970 by znerol, andypost, Prashant.c, daffie, Wim Leers, dww, catch: Convert uses of $_SESSION in forms and batch
    - `fix` Issue #2663316 by omkar.podey, jofitz, alexpott, shashank5563, samuel.mortenson, Andrej Galuf, djsagar, silverham, juliaschwarz, lauriii, super_romeo, gawaksh, smustgrave, sakthi_dev, Pavan B S, lammensj, Wim Leers, camerongreen, quietone: Broken title in modal dialog when title is a render array
    - `fix` Issue #3427741 by longwave, sakthi_dev, Spokje: Notify downstream users that ContainerAware is going away
    - `docs` Issue #3429403 by Spokje: Tighten ParameterBag classes in PHPUnit tests
    - `fix` Issue #3429602 by longwave: Annotation component has an undeclared dependency on doctrine/lexer 2
    - `feat` Issue #2765297 by mohit_aghera, joseph.olstad, sylus, ducktape, alexpott, anmolgoyal74, heikki, kishor_kolekar, kriboogh, googletorp, dnotes, mpp, Berdir, borisson_, Lendude, xjm: Return translated term name on views &quot;Content: Has taxonomy term ID (with depth)&quot;
    - `fix` Issue #2833116 by smustgrave, mohit_aghera, Ratan Priya, _pratik_, _shY, alexpott, nitin_lama, acbramley, quietone, larowlan, Peter van den Heuvel, ameymudras, alexpott: When Placing a Block on &#039;Configure Block&#039; page the originally selected region is lost
    - `feat` Issue #2002012 by dimitriskr, dawehner, smustgrave, quietone, damiankloip, catch: Inject the display plugin manager into the view and view factory
    - `fix` Issue #3083690 by gxleano, mparker17, jungle, joachim, Kris77: &#039;&quot;@key&quot; is an invalid render array key&#039; error in \Drupal\Core\Render\Element is misleading
    - `chore` Issue #3428052 by Spokje, mondrake: Bump phpstan/phpstan and mglaman/phpstan-drupal to latest
    - `feat` Issue #3426956 by sorlov, mstrelan, smustgrave: Convert ViewsRelationship plugin discovery to attributes
    - `feat` Issue #3426957 by sorlov, smustgrave, mstrelan: Convert ViewsFilter plugin discovery to attributes
    - `feat` Issue #3426955 by mstrelan, sorlov, alexpott, smustgrave, godotislate: Convert ViewsField plugin discovery to attributes
    - `fix` Issue #3427655 by Liam Morland, smustgrave: Fix invalid CSS for #toolbar-item-user
    - `feat` Issue #3376566 by kunal.sachdev, sakthi_dev, divya.sejekan, Nitin shrivastava, djsagar, smustgrave, nod_, longwave, quietone, catch: Display the page title, even if &quot;0&quot; in olivero
    - `chore` Issue #3109556 by finnsky, nod_, longwave, effulgentsia, Ambient.Impact: Update from Yarn 1 to Yarn 4
    - `chore` Issue #2972153 by dimitriskr, alexpott, smustgrave, andypost, kostyashupenko: Deprecate ThemeHandlerInterface::getBaseThemes and remove usages from core
    - `fix` Issue #3061489 by penyaskito, shaal, betoscopio, smustgrave: Umami changes the admin interface language based on the current page
    - `feat` Issue #3428122 by alexpott, longwave: Add packageManager key to core/package.json now we recommend corepack enable
    - `chore` Issue #3424644 by Wim Leers, jannakha, finnsky, smustgrave, catch: Update CKEditor 5 to 41.2.0
    - `test` Issue #3428032 by longwave: ManageGitIgnoreTest failing in HEAD
    - `fix` Issue #2567801 by Wim Leers, lauriii: Deprecate core/modules/editor/js/editor.admin.js JS APIs in Drupal 10, for removal in Drupal 11
    - `chore` Issue #3424644 by Wim Leers, jannakha, smustgrave: Update CKEditor 5 to 41.2.0
    - `fix` Issue #3427740 by longwave: Remove KernelDestructionSubscriber, UpdateRegistryFactory and UpdateHookRegistryFactory
    - `fix` Issue #3427737 by longwave, godotislate: Overwrite Symfony constraint properties in constructors instead of child properties
    - `feat` Issue #3425359 by sorlov, quietone, naveenvalecha, smustgrave, alexpott: Convert ViewsArgumentHandlers plugin discovery to attributes
    - `feat` Issue #3370946 by kunal.sachdev, lauriii, tim.plunkett, omkar.podey, alexpott, ckrina, smustgrave, larowlan, rkoller, hooroomoo, duadua: Page title should contextualize the local navigation
    - `refactor` Issue #3406024 followup by neclimdul: DependencySerializationTrait depends on removed __PHPUNIT_BOOTSTRAP global
    - `docs` Issue #3414981 by finnsky, pdureau: Umami Demo: review of the already merged SDC components
    - `fix` Issue #3427738 by longwave: Remove $context properties from ConstraintValidators
    - `fix` Issue #3427739 by longwave: Remove Drupal\Core\Field\InternalViolation shim
    - `fix` Issue #3427744 by longwave: Add void return to Drupal\Component\DependencyInjection\Container::reset()
    - `docs` Issue #3425150 by godotislate, longwave: Symfony deprecations in Constraint plugins
    - `chore` Issue #3369912 by andypost, quietone, Spokje: Final steps to deprecate Actions UI (action) module
    - `chore` Issue #3419914 by Spokje, longwave, bircher, andypost, smustgrave, catch, jurgenhaas: Remove UpdateHookRegistryFactory and UpdateRegistryFactory services
    - `fix` Issue #3333481 by phthlaap, galileo25, dmitry.korhov, smustgrave, mdolnik, quietone, nod_, alieffring: Collapsed Details Element causes JS Error for required fields
    - `fix` Issue #3396742 by ReINFaTe, smustgrave, Wim Leers, nod_: CKEditor 5 doesn&#039;t save updated value if form submitted right after the change
    - `fix` Issue #2928801 by xurizaemon, ericgsmith, geek-merlin, RoSk0, Gauravvvv, Rinku Jacob 13, hctom, benjifisher, Berdir: Remove hardcoded restriction of filesize formatter to fields named &quot;filesize&quot;
    - `docs` Issue #3427572 by alexpott: Standard Views attribute documentation for consistency and correctness
    - `docs` Issue #3421626 by phenaproxima, Wim Leers, borisson_: Mark config schema types (field.field_settings.* and field.storage_settings.*)) for field types that have no settings as fully validatable
    - `feat` Issue #2985362 by DanielVeza, tim.plunkett, mstrelan, quietone, kim.pepper, acbramley: Create an interface to share the definition of the overridable methods on DefaultsSectionStorageInterface and LayoutEntityDisplayInterface
    - `feat` Issue #3425875 by Wim Leers, phenaproxima, smustgrave: Add validation constraints to search.settings
    - `feat` Issue #3421008 by el7cosmos, sorlov, smustgrave, larowlan, alexpott, quietone: Convert ViewsExposedForm plugin discovery to attributes
    - `fix` Issue #3427388 by godotislate, Berdir: Update Drupal\Component\Annotation\Doctrine\StaticReflectionParser::hasClassAttribute() to allow attribute subclasses
    - `feat` Issue #3413949 by andypost, quietone, Spokje, taraskorpach, smustgrave, catch, Wim Leers, DanielVeza: Move some Action plugins to Action module
    - `fix` Issue #3425492 by smustgrave, Keshav Patel, Spokje: Remove deprecated code from block module
    - `docs` Issue #3426548 follow-up: Convert the PHPStan baseline from NEON to PHP
    - `chore` Issue #3426548 by Kingdutch, andypost, longwave, catch, mstrelan, alexpott: Convert the PHPStan baseline from NEON to PHP
    - `feat` Issue #3421009 by sorlov, mohit_aghera, pradhumanjain2311, larowlan, smustgrave, alexpott: Convert ViewsCache plugin discovery to attributes
    - `fix` Issue #3388913 by simonp98, Rajab Natshah, SoulReceiver, catch, smustgrave: Checkbox for Media library modal missing after search
    - `revert` Revert &quot;Issue #3413949 by andypost, quietone, Spokje, taraskorpach, smustgrave, Wim Leers, DanielVeza: Move some Action plugins to Action module&quot;
    - `fix` Issue #3426624 by plopesc, smustgrave: Shortcuts Block does not include the necessary cache tags
    - `fix` Issue #3025785 by amateescu, mallezie, s_leu, smustgrave, tim.plunkett: Cannot create entity with image in a workspace
    - `feat` Issue #3413949 by andypost, quietone, Spokje, taraskorpach, smustgrave, Wim Leers, DanielVeza: Move some Action plugins to Action module
    - `feat` Issue #3057399 by quietone, Akhil Babu, kristiaanvandeneynde, alexpott, pradhumanjain2311, smustgrave, catch, poker10, longwave, jimafisk, Newb_Druper, robpowell, dpi, tomdewild: Add user_requirements to check for missing anonymous user
    - `fix` Issue #3092247 by amateescu, larowlan, daffie, smustgrave, catch, geek-merlin, dixon_, plach, webchick, Fabianx: Prevent content from being deleted when there is an active workspace
    - `fix` Issue #3425318 by Wim Leers, smustgrave: Update `type: field.formatter.settings.file_video` to match the validation logic in FileVideoFormatter&#039;s settings form
    - `fix` Issue #3167126 by ranjith_kumar_k_u, rpayanm, amateescu, mheip, CedricL, smustgrave: Call to a member function getDisplayname() on null in WorkspaceListBuilder.php
    - `refactor` Issue #3350612 by Anybody: Make MultiWidthLayoutBase non-internal
    - `fix` Issue #3427054 by mondrake: Replace calls to ::expectError*() in MachineNameTest
    - `fix` Issue #3427044 by mondrake: Replace calls to ::expectError*() in ConnectionTest
    - `revert` Revert: Issue #3410582 by catch, Prashant.c, heddn, alexpott, smustgrave, claudiu.cristea, longwave, quietone: Optimize user logins by avoiding duplicate entity queries
    - `revert` Revert &quot;Issue #3425342 by alexpott: Optimize \Drupal\basic_auth\Authentication\Provider\BasicAuth::authenticate()&quot;
    - `revert` Revert &quot;Issue #3410707 by alexpott, catch: Optimize UserAuthenticationController by remove duplicate entity queries&quot;
    - `docs` Issue #3416039 by ressa, divya.sejekan, catch, Gábor Hojtsy: Add link to Drupal Support in Olivero Welcome text
    - `feat` Issue #3306209 by jannakha, Gauravvvv, smustgrave, athyamvidyasagar, pameeela, Wim Leers, mgifford: Add outline to buttons with active state
    - `feat` Issue #3420982 by sorlov, alexpott: Convert EntityReferenceSelection plugin discovery to attributes
    - `feat` Issue #3421001 by sorlov, mohit_aghera, larowlan, alexpott, smustgrave: Convert ViewsAccess plugin discovery to attributes
    - `fix` Issue #3426324 by Wim Leers: ExistsConstraintValidator should ignore NULL values and treat `core` as a valid module
    - `fix` Issue #3420742 by quietone, sakthi_dev, BramDriesen: Fix words in test string by changing the string
    - `fix` Issue #3424746 by camille.davis@civicactions.com, mgifford, smustgrave, rkoller: &quot;Local Tasks&quot; behaves as navigation bar but uses &quot;tab&quot; language
    - `fix` Issue #3419734 by catch, nod_: [jQuery 4] jquery-form is unmaintained and not jQuery 4 compatible, fork it into core
    - `docs` Issue #3419394 by quietone, longwave, smustgrave: File mime type and other file related words in the dictionary
    - `docs` Issue #3408849 by markconroy, finnsky: Add @finnsky as core maintainer for Umami
    - `feat` Issue #3421012 by sorlov, quietone, sakthi_dev, mstrelan, Wim Leers: Convert Filter plugin discovery to attributes
    - `feat` Issue #3421007 by sorlov, quietone, larowlan, smustgrave: Convert ViewsQuery plugin discovery to attributes
    - `feat` Issue #3421013 by mohit_aghera, sorlov, smustgrave, mstrelan, larowlan, catch: Convert Search plugin discovery to attributes
    - `feat` Issue #3421010 by sorlov, larowlan, smustgrave: Convert ViewsArgumentValidator plugin discovery to attributes
    - `feat` Issue #3421019 by DanielVeza, sorlov, andypost, smustgrave, larowlan, mstrelan, alexpott: Convert SectionStorage plugin discovery to attributes
    - `feat` Issue #3426309 by Wim Leers, smustgrave: Add config validation for weights (blocks, filters, etc. all use weights)
    - `fix` Issue #3419693 by mondrake, alexpott, smustgrave, catch: Log error instead of trigger_error in Drupal\Core\EventSubscriber\RedirectResponseSubscriber::checkRedirectUrl
    - `feat` Issue #3240792 by justafish, alexpott, andypost, smustgrave, longwave: Use lullabot/mink-selenium2-driver and lullabot/php-webdriver for functional browser testing
    - `fix` Issue #3426217 by mstrelan: Fix @param docs for $deriver on plugin attribute classes
    - `revert` Revert &quot;Issue #3038365 by acbramley, Grimreaper, smustgrave, catch: Add owner to the BlockContent entity type&quot;
    - `fix` Issue #3425890 by amateescu, smustgrave, larowlan: Return early in \Drupal\layout_builder\InlineBlockEntityOperations::handlePreSave if the entity is syncing
    - `fix` Issue #3410707 by alexpott, catch: Optimize UserAuthenticationController by remove duplicate entity queries
    - `feat` Issue #3408738 by omkar.podey, srishtiiee, kunal.sachdev, lauriii, Utkarsh_33, arisen, smustgrave, Wim Leers, catch, benjifisher: Create a new OpenModalDialogWithUrl command
    - `feat` Issue #3395776 by catch, kristiaanvandeneynde, Wim Leers, Fabianx, larowlan: Make POST requests render cacheable
    - `fix` Issue #3043330 by acbramley, nterbogt, phenaproxima, Sam152, tim.plunkett, quietone, smustgrave, jibran, larowlan, azinck, catch, alexpott, tedbow, kim.pepper: Reduce the number of field blocks created for entities (possibly to zero)
    - `fix` Issue #3425568 by mstrelan: Block attribute class expecting wrong ContextDefinition
    - `fix` Issue #3425860 by mondrake: Remove deprecated TestRequirementsTrait::check(Module)Requirements
    - `fix` Issue #3420740 by quietone, BramDriesen, smustgrave: Fix words in tests using ignore
    - `fix` Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings
    - `fix` Issue #3403337 by alexpott, quietone, Akhil Babu, vakulrai, smustgrave, Gábor Hojtsy, penyaskito, longwave, catch: The order of the projects coming from locale_translation_get_projects() is not consistent
    - `fix` Issue #3424768 by mfb, OMD, cilefen, smustgrave: Channel description of RSS feeds is double-escaped
    - `revert` Revert &quot;Issue #3403337 by alexpott, quietone, Akhil Babu, vakulrai, smustgrave, penyaskito, Gábor Hojtsy: The order of the projects coming from locale_translation_get_projects() is not consistent&quot;
    - `fix` Revert &quot;Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings&quot;
    - `fix` Issue #3222784 by ahsannazir, Gauravvvv, zenimagine, shweta__sharma, mherchel, kostyashupenko: Olivero: &#039;wide-content&#039; utility class breaks layout when placed in &#039;Hero&#039; region
    - `fix` Issue #3414172 by quietone: In update module convert comments to use install/uninstall
    - `fix` Issue #3334920 by Spokje, smustgrave: Remove references to modernizer
    - `fix` Issue #3425660 by mondrake: [11.x] Remove deprecated ExternalCommandRequirementsTrait
    - `fix` Issue #3416826 by longwave, smustgrave, solideogloria, fgm: Queue factory services do not conform to an interface
    - `feat` Issue #3320569 by Spokje, mondrake, smustgrave, longwave, quietone, Lendude, alexpott: Add an interface for operators() on views
    - `chore` Issue #3406024 by neclimdul, Spokje, longwave, mondrake, smustgrave, alexpott: DependencySerializationTrait depends on removed __PHPUNIT_BOOTSTRAP global
    - `feat` Issue #3421006 by godotislate, Ruturaj Chaubey, larowlan, longwave, smustgrave: Convert ViewsDisplayExtender plugin discovery to attributes
    - `fix` Issue #3412283 by mathilde_dumond, acbramley, Berdir, smustgrave, BramDriesen, larowlan: Editing a block_content entity no longer redirects to the overview
    - `refactor` Issue #3421480 by Spokje, longwave, andypost: Convert OpenerResolver to use a service locator
    - `refactor` Issue #3421482 by andypost, longwave, smustgrave: Remove ContainerAwareTrait from test classes
    - `test` Issue #3119761 by dww, aleevas, Hardik_Patel_12, quietone, tedbow, _utsavsharma, smustgrave, xjm, longwave: Replace multiple test methods in InfoParserUnitTest with 1 testInfoException and a dataprovider
    - `refactor` Issue #3239490 by Sam Phillemon, Theresa.Grannum, smustgrave:  Refactor (if feasible) uses of the jQuery clone function to use Vanilla/native
    - `fix` Issue #3425304 by Spokje, smustgrave: Resync dictionary.txt
    - `fix` Issue #3110671 by andypost, longwave: Remove remaining deprecated code from taxonomy.module
    - `fix` Issue #3425419 by andypost, smustgrave: [11.x] Remove deprecated code from system module
    - `fix` Issue #2926070 by smustgrave, dimitriskr, andypost, gnuget, zahord, yogeshmpawar, MerryHamster, kim.pepper, alexpott, Mile23, daffie, larowlan: Deprecate ModuleHandlerInterface::getName()
    - `fix` Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings
    - `fix` Revert &quot;Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings&quot;
    - `fix` Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings
    - `perf` Issue #3425342 by alexpott: Optimize \Drupal\basic_auth\Authentication\Provider\BasicAuth::authenticate()
    - `fix` Issue #3417521 by jayhuskins: Update typing for plugin definition to include object
    - `fix` Issue #3403337 by alexpott, quietone, Akhil Babu, vakulrai, smustgrave, penyaskito, Gábor Hojtsy: The order of the projects coming from locale_translation_get_projects() is not consistent
    - `feat` Issue #3038365 by acbramley, Grimreaper, smustgrave, catch: Add owner to the BlockContent entity type
    - `docs` Issue #3258817 by longwave, donquixote: Register all of /tests/src/ for class loading
    - `fix` Issue #3123209 by Hardik_Patel_12, nitesh624, _utsavsharma, Suresh Prabhu Parkala, andypost, jungle, smustgrave, msuthars: Replace non-test usages of \Drupal::formBuilder() with IoC injection
    - `fix` Issue #3404304 by GafgarionMorua, ksere, alexpott: EntityField::getFieldStorageDefinition() should throw an exception when it can&#039;t return a field storage
    - `feat` Issue #3108309 by kim.pepper, bonrita, alexpott, andypost, longwave: Support Yaml::PARSE_CUSTOM_TAGS in \Drupal\Component\Serialization\YamlSymfony::decode
    - `refactor` Issue #3035189 by DanielVeza, tim.plunkett, smustgrave: Abstract the shared parts of DefaultsEntityForm and OverridesEntityForm
    - `fix` Issue #2511308 by dimitriskr, ankithashetty, smustgrave, quietone, Wim Leers: Rename RendererInterface::renderPlain() to ::renderInIsolation()
    - `fix` Issue #3321634 by Spokje, andypost: Remove legacy experimental:true and its deprecation and test-files
    - `feat` Issue #3101671 by amateescu, webdrips, smithmilner, s_leu, smustgrave: Add mechanism to have workspaces skip processing entity types
    - `docs` Issue #3423384 by govind_giri_goswami, Gauravvvv, dineshkumarbollu, adwivedi008, Pravesh_Poonia, smustgrave, Tanuj., shreyal999, Ruturaj Chaubey, mherchel, andy-blum: Extra Close icon in Messages
    - `fix` Issue #3421731 by larowlan, byrond: field_field_config_create should check if the config installer is syncing
    - `test` Issue #3341438 by DanielVeza, andypost: Add test coverage for layout_builder_entity_view_alter()
    - `fix` Issue #3409640 by swatidhurandhar, Mithun S, shweta__sharma, Gauravvvv, divya.sejekan, Sandeep_k, Kanchan Bhogade: In workspace-form the text of the modal content is not visible completely below 768px screen
    - `revert` Revert &quot;Issue #3419914 by Spokje, longwave, andypost, smustgrave: Remove UpdateHookRegistryFactory and UpdateRegistryFactory services&quot;
    - `feat` Issue #3410582 by catch, heddn, Prashant.c, smustgrave, claudiu.cristea, quietone, longwave: Optimize user logins by avoiding duplicate entity queries
    - `docs` Issue #2863629 by sleitner, jmaties, armrus, ravi.shankar, yogeshmpawar, smustgrave, Chris64, quietone, alexpott: Only fallback to an existing singular or nth plural form of a translation
    - `fix` Issue #3245446 by Akhil Babu, guiu.rocafort.ferrer, dww, zrpnr, Kanchan Bhogade, smustgrave, larowlan, schillerm, alexpott: Video files using the FileVideoFormatter have a fixed dimension
    - `fix` Issue #3339374 by gapple, andypost, longwave, catch, smustgrave: [11.x] Require array argument for AddCssCommand
    - `docs` Issue #3184588 by ressa, SKAUGHT, rkoller, Mithun S: Make disabled status more obvious in a View
    - `feat` Issue #3205480 by alexpott, andypost, Wim Leers, catch, kim.pepper, longwave: Drop PECL YAML library support in favor of only Symfony YAML
    - `fix` Issue #3422603 by b2f, godotislate: Fixing source IDs with spaces in Sql.php
    - `fix` Issue #3413736 by alex.87, DishaKatariya, Kanchan Bhogade, smustgrave: Form suffix element breaks into multiple lines in modal
    - `refactor` Issue #3419914 by Spokje, longwave, andypost, smustgrave: Remove UpdateHookRegistryFactory and UpdateRegistryFactory services
    - `fix` Issue #3422539 by mstrelan, dpi: Make use of array_key_first and array_key_last functions
    - `feat` Issue #3401993 by longwave: Enable services autoconfiguration for JSON:API
    - `feat` Issue #3420990 by godotislate, smustgrave, alexpott, kim.pepper, longwave: Convert Constraint plugin discovery to attributes
    - `fix` Issue #3197915 by quietone, joachim, Tanuj., karishmaamin, dww:  Add details to MigrateSkipRowException messages caused by stub creation
    - `test` Issue #2992844 by DanielVeza, smustgrave, johnwebdev: Add test coverage for InlineBlockUsage class
    - `feat` Issue #3047110 by pavlosdan, Rajeshreeputra, Manuel Garcia, slydevil, hugronaphor, dhirendra.mishra, vsujeetkumar, amateescu, n4r3n, kreynen, acbramley, quietone: Enable Content Moderation integration for taxonomy terms
    - `feat` Issue #3033153 by DanielVeza, bnjmnm, smustgrave: Contextual links can be used to drag and drop Layout Blocks
    - `fix` Issue #3333418 by nicxvan, smustgrave, quietone: Fix pager h4 for accessibility on Stable9
    - `docs` Issue #3419631 by Lillian Bozeman, Tim Bozeman: Make Umami recipe field template file names more flexible
    - `revert` Revert &quot;Issue #3406024 by neclimdul, mondrake, Spokje, smustgrave: DependencySerializationTrait depends on removed __PHPUNIT_BOOTSTRAP global&quot;
    - `fix` Issue #3412316 by kunal.sachdev, tim.plunkett, sidharth_soman, smustgrave: Use &#039;search.view&#039; instead of &#039;search.plugins:&#039; . $default for base route in SearchLocalTask::getDerivativeDefinitions()
    - `fix` Issue #3422546 by mstrelan: Remove extra parameters passed to functions
    - `fix` Issue #3420661 by quietone, smustgrave: Fix property related words
    - `fix` Issue #3425129 by mondrake, smustgrave: Classloader needs to be registered in Database::convertDbUrlToConnectionInfo()
    - `fix` Issue #3347710 by andypost: [11.x] Remove deprecated non_lazy_route_enhancer and non_lazy_route_filter
    - `fix` Issue #3265121 by andypost, longwave, Spokje, neclimdul, smustgrave: Remove Symfony 4 RequestStack BC shim in 11.0.x
    - `fix` Issue #3396445 by tstoeckler: [11.x] Remove deprecated ContextProvidersPass
    - `docs` Issue #3425030 by mondrake, smustgrave: Change remaining test data providers to static, simple cases
    - `chore` Issue #3406024 by neclimdul, mondrake, Spokje, smustgrave: DependencySerializationTrait depends on removed __PHPUNIT_BOOTSTRAP global
    - `fix` Issue #3238501 by kostyashupenko, Spokje, mherchel, nod_, catch, longwave, lauriii, bnjmnm: Remove empty and deprecated IE11 polyfill library stub entries in 11.0.0
    - `fix` Issue #3420802 by kim.pepper, bkline, larowlan: [regression] file_save_upload does not properly handle extensions
    - `revert` Revert &quot;Issue #2827055 by yash.rode, srishtiiee, mrshowerman, rodrigoaguilera, herved, omkar.podey, MegaChriz, Lukas von Blarer, ravi.shankar, lauriii, c_archer, ifrik, Rudi Teschner, froboy, smustgrave, liquidcms, quietone, mpdonadio: Add option to show only start or end date in the DateTime Range custom formatter&quot;
    - `docs` Issue #3421206 by karanpagare, GafgarionMorua, smustgrave, joachim, longwave: incorrect docs for LocaleConfigSubscriberTest::assertTranslation()
    - `perf` Issue #3422974 by govind_giri_goswami, joachim: use array_chunk() in locale_config_batch_build()
    - `feat` Issue #3389016 by kim.pepper, xjm, larowlan: Add file upload lock handling to FileUploadHandler
    - `feat` Issue #3128190 by phthlaap, Keshav Patel, msuthars, sja112, rlmumford, Prashant.c, smustgrave, quietone: FieldItemDataDefinition::getLabel() should show the label of the field type
    - `feat` Issue #3420993 by Amber Himes Matz, andypost, sakthi_dev, smustgrave, larowlan, catch, quietone: Convert HelpSection plugin discovery to attributes
    - `feat` Issue #3420978 by mstrelan, smustgrave: Convert FieldWidget plugin discovery to attributes
    - `refactor` Issue #3420980 by mstrelan, smustgrave: Convert FieldFormatter plugin discovery to attributes
    - `feat` Issue #3421018 by mohit_aghera, smustgrave: Convert WorkflowType plugin discovery to attributes
    - `feat` Issue #3421017 by mohit_aghera, smustgrave: Convert LanguageNegotiation plugin discovery to attributes
    - `feat` Issue #3420987 by kim.pepper, smustgrave: Convert DataType plugin discovery to attributes
    - `feat` Issue #3420994 by kim.pepper: Convert RestResource plugin discovery to attributes
    - `feat` Issue #3420988 by godotislate, smustgrave: Convert QueueWorker plugin discovery to attributes
    - `fix` Issue #3425058 by tstoeckler: [regression] Add a fallback in DraggableListBuilder::getWeight() to support entities with a NULL weight
    - `fix` Issue #3424217 by quietone, DanielVeza: Remove book from d6\MigrateBlockContentTranslationTest
    - `fix` Issue #3306584 by Spokje, Wim Leers: [11.x] Remove EditorLinkDialog, EditorImageDialog and EditorMediaDialog in Drupal 11
    - `docs` Issue #3424838 by mondrake: Change EntityUrlTest data providers to static
    - `feat` Issue #2827055 by yash.rode, srishtiiee, mrshowerman, rodrigoaguilera, herved, omkar.podey, MegaChriz, Lukas von Blarer, ravi.shankar, lauriii, c_archer, ifrik, Rudi Teschner, froboy, smustgrave, liquidcms, quietone, mpdonadio: Add option to show only start or end date in the DateTime Range custom formatter
    - `fix` Issue #3424920 by mondrake: Change core modules test data providers to static, simple cases
    - `feat` Issue #3420986 by kim.pepper, sorlov, larowlan, mstrelan: Convert Condition plugin discovery to attributes
    - `feat` Issue #3420985 by godotislate, larowlan, smustgrave, mstrelan: Convert Archiver discovery to attributes
    - `docs` Issue #3412361 by Wim Leers, phenaproxima, catch, effulgentsia: Mark Editor config schema as fully validatable
    - `feat` Issue #3112393 by cmlara, smustgrave, AdamPS, alexpott: Allow vendor hardening to remove individual files
    - `fix` Issue #3410098 by andypost, shalini_jha, Akhil Babu, Liam Morland, kristiaanvandeneynde, smustgrave, alexpott: Deprecate passing non-strings to UserSession::hasPermission() and User::hasPermission()
    - `fix` Issue #3423889 by smustgrave, Spokje: [11.x] Remove deprecated code from block content module
    - `fix` Issue #3256524 by mondrake: [11.x] Adjust Database API to remove deprecated Drupal 10 code in Drupal 11
    - `feat` Issue #3158916 by DanielVeza, tim.plunkett, mstrelan: Enable Layout Builder via code in tests when that UI is not being tested
    - `fix` Issue #3414883 by paul121, acbramley, catch, smustgrave, quietone: [regression] datetime_timestamp widget does not use default field value
    - `perf` Issue #3247331 by mikelutz, smustgrave: Deprecate MigrateSkipProcessException
    - `fix` Issue #3416184 by amateescu: Content Moderation should only validate its own workflow type
    - `fix` Issue #3415041 by alexpott, Wim Leers: Creating blocks that depend on content via the config installer often generates a warning
    - `fix` Issue #3424436 by mondrake, longwave: [11.x] Remove deprecated code from the Diff component
    - `fix` Issue #3415776 by shweta__sharma, Mithun S, Kanchan Bhogade, smustgrave, mherchel: On focus small icon part is visible in forced colour mode
    - `feat` Issue #3404302 by finnsky, smustgrave, lauriii, markconroy: Create header component for Umami, with JS
    - `feat` Issue #3365497 by finnsky, Gauravvvv, sarahjean, smustgrave, snig, e0ipso, pdureau: Create new SDC component for Umami Banner
    - `fix` Issue #3424751 by acbramley: BlockContentForm::actions is incorrectly overridden as public
    - `fix` Issue #3419894 by shweta__sharma, Mithun S, Kanchan Bhogade, Charles Belov, Amir Gurung, Wim Leers, smustgrave: [drupalImage] Rename &quot;Text alternative&quot; field label to &quot;Alternative text&quot;
    - `docs` Issue #3062376 by smustgrave, rlnorthcutt, Krzysztof Domański, ravi.shankar, robpowell, acbramley, Abhijith S, larowlan, Anybody, lauriii, phenaproxima, brandonratz, danflanagan8, quietone, longwave: Template suggestions for custom block view modes
    - `docs` Issue #3420709 by gorkagr, ressa, Ruturaj Chaubey, larowlan, alexpott: Make it more obvious that a Twig template is overridden
    - `docs` Issue #3416304 by sleitner, RoloDMonkey, smustgrave: Javascript warning from content language and translation page
    - `feat` Issue #3351563 by Spokje, longwave, smustgrave: [11.x] Update doctrine/annotations to v2
    - `fix` Issue #3414900 by quietone, arunkumark, Meeni_Dhobale, smustgrave, poker10: Fix links that are 404
    - `feat` Issue #3398196 by godotislate, DanielVeza, smustgrave: Field block for empty image field with no default image rendering empty div in Layout Builder
    - `fix` Issue #2473989 by srishtiiee, narendraR, dawehner, kunal.sachdev, ravi.shankar, lauriii, Peacog, smustgrave, swentel, martin107, Sonal.Sangale, shaal, baikho, amateescu, plach, cpj, Gábor Hojtsy, jhodgdon, quietone, webchick, aspilicious, catch, xjm, alexpott: Lack of dynamic language field / filter makes shipping core views hard to be both compatible with mono and multilingual
    - `fix` Issue #2998875 by quietone, juampynr, benjifisher, smustgrave, alison: Map menu ids like main-menu when migrating node types
    - `fix` Issue #3420215 by longwave, catch, Spokje: Remove ContainerAwareTrait from session middleware
    - `chore` Issue #2942001 by dimitriskr, alexpott, gaurav.kapoor, smustgrave, andypost, almaudoh: Deprecate ThemeHandlerInterface::rebuildThemeData() and use extension.list.theme service instead
    - `fix` Issue #3419987 by alexpott, Wim Leers, larowlan, dww: Fix Container::reset() and provide DrupalKernel::resetContainer()
    - `fix` Issue #3419107 by Keshav Patel, Chi: FieldConfigEditForm::save should report exceptions using warning or error messages
    - `fix` Issue #3415118 by ahmad.k, Lendude: Combine fields filter REGEXP causes PostgreSQL syntax error
    - `refactor` Issue #3393099 by kim.pepper, smustgrave, xjm, alexpott, longwave: Move ExecutionContext, ExecutionContextFactory, and ConstraintViolationBuilder from TypedData to Validation namespace
    - `refactor` Issue #3422362 by mondrake, Spokje, smustgrave: Change ComposerIntegrationTest::providerTestComposerJson to static
    - `fix` Issue #3358581 by pfrenssen, _tarik_, a.dmitriiev, smustgrave, longwave, larowlan: Deprecated function: array_slice(): Passing null to parameter #2 ($offset) of type int is deprecated in Drupal\Core\Config\Entity\Query\Query-&gt;execute()
    - `docs` Issue #3422543 by mstrelan, smustgrave, longwave: Make use of is_iterable and is_countable functions
    - `docs` Issue #3422485 by mondrake, smustgrave: Change DrupalLogErrorTest::provideFatalExitCodeData to static
    - `fix` Issue #3422395 by mondrake, smustgrave: Change ErrorTest data providers to static
    - `refactor` Issue #3422495 by mondrake, smustgrave: Change DefaultConfigTest::moduleListDataProvider and helpers to static
    - `refactor` Issue #3422493 by mondrake, smustgrave: Change UrlHelperTest data providers and helpers to static
    - `refactor` Issue #3422481 by mondrake, smustgrave: Change PrimitiveTypeConstraintValidatorTest::provideTestValidate to static
    - `refactor` Issue #3422345 by mondrake, smustgrave: Change DateTest::providerTestFormatDiff and family to static
    - `fix` Issue #3422222 by gorkagr, mstrelan, smustgrave: Wrong return type in Renderer::ensureMarkupIsSafe()
    - `fix` Issue #3414568 by dimitriskr, smustgrave, quietone: Replace preg_match() with str_starts_with()/str_ends_with() or similar
    - `feat` Issue #3420991 follow-uo by alexpott: Convert ImageToolkit plugin discovery to attributes
    - `feat` Issue #3420991 by kim.pepper, larowlan, mstrelan: Convert ImageToolkit plugin discovery to attributes
    - `feat` Issue #3420992 by kim.pepper, mstrelan, larowlan: Convert ImageToolkitOperation plugin discovery to attributes
    - `feat` Issue #3420996 by mstrelan, kim.pepper, larowlan: Convert ImageEffect plugin discovery to attributes
    - `fix` Issue #3424177 by longwave, andypost: Remove ContainerAwareInterface from DrupalKernelInterface
    - `fix` Issue #3412658 by benjifisher: Term migrations should set revision IDs
    - `docs` Issue #3399746 by mstrelan, acbramley: Add declare(strict_types=1) to all Functional tests
    - `refactor` Issue #3415938 by longwave, Spokje, taraskorpach: Remove ContainerAwareTrait from CacheFactory and ChainedFastBackendFactory
    - `chore` Issue #3402444 by mondrake, Spokje, neclimdul, longwave: Deprecate Test Suites, no longer available in PHPUnit 10
    - `fix` Issue #3422973 by acbramley, dww, andypost: Replace remaining mentions of REQUEST_TIME in comments
    - `chore` Issue #3405672 by smustgrave, quietone: Deprecate Tour module
    - `feat` Issue #3424009 by quietone: Move statistics_node_translation_counter to Statistics module
    - `fix` Issue #3397532 by finnsky, smustgrave, markconroy: Fix Umami container max-width when toolbar or navigation expanded
    - `feat` Issue #3407159 by longwave, quietone: [11.x] Add void returns for Symfony 7
    - `fix` Issue #3393531 by Gauravvvv, shweta__sharma, Harsh, andy-blum, Aditi Saraf: Article text can overflow page on mobile viewports
    - `fix` Issue #3421258 by mstrelan, acbramley: Fix strict type errors in WebAssert calls
    - `docs` Issue #3377198 by karanpagare, Harish1688, kostyashupenko, Vidushi Mehta, shweta__sharma, bnjmnm, smustgrave, longwave: Details up chevron not quite vertically aligned in forced colors mode
    - `feat` Issue #2002174 by Wim Leers, xjm, fago, effulgentsia, catch, smustgrave: Allow vocabularies to be validated via the API, not just during form submissions
    - `fix` Issue #3127116 by phthlaap, AjitS, cmlara, AmbyH, smustgrave, alexpott, quietone: Image styles - thumbnails are broken in config page when private file system is used
    - `fix` Issue #3304772 by tstoeckler, kksandr, Murz, smustgrave: Cache tags from Computed fields do not bubble up to Entity render array
    - `fix` Issue #3091841 by quietone, Grevil, Anybody, mikelutz, smustgrave, danflanagan8, jklmnop, ShaunDychko, fengtan, MariaIoann, ranjith_kumar_k_u: Remove hardcoded plugin IDs from migration process plugins
    - `feat` Issue #3422407 by Wim Leers, smustgrave: New config schema data type: bytes
    - `fix` Issue #2856598 by apkwilson, NickDickinsonWilde, ranjith_kumar_k_u, adhariwal, yogeshmpawar, smustgrave, quietone: Views field rewrite replacement subtoken yields double encoded HTML entities
    - `fix` Issue #2463753 by claudiu.cristea, acbramley, gg24, anairamzap, dhirendra.mishra, andypost, dawehner, swatichouhan012, smustgrave, quietone, Hardik_Patel_12, douggreen, mohrerao, gcb, kalistos, Wim Leers, pfrenssen, dww, larowlan: [regression] Do not bypass route access with &#039;link to any page&#039; permissions for menu links
    - `test` Issue #3417362 by kristiaanvandeneynde, smustgrave, quietone: Call refreshVariables() where needed in various tests
    - `feat` Issue #3422398 by Wim Leers, phenaproxima: Allow specifying a prefix for ConfigExistsConstraint, to enable using it for references to config entities
    - `fix` Issue #3381929 by tedbow, yash.rode, kunal.sachdev, tim.plunkett, quietone, hooroomoo, Utkarsh_33: Restrict access to empty top level administration pages for overview controller
    - `fix` Issue #3292350 by O&#039;Briat, KlemenDEV, hswong3i, smustgrave, quietone: Update the file size in file_validate_image_resolution after resizing
    - `fix` Issue #3396741 by recrit, smustgrave: Content Moderation moderation_state_filter cannot join the entity revision table when the filter uses relationship to the entity revision table
    - `fix` Issue #2613222 by webflo, alexpott, ameymudras, pooja saraah, _utsavsharma, penyaskito, Janvi Dasani: Language module shouldn&#039;t alter config in sync mode
    - `fix` Issue #3423454 by scott_euser, smustgrave: Form Builder does not fully allow Ajax GET requests
    - `chore` Issue #2838474 by kim.pepper, rpayanm, alexpott, longwave, Spokje, andypost, 20th, mfb: Remove dependency of &quot;file_system&quot; service on &quot;logger&quot;
    - `perf` Issue #3421164 by kristiaanvandeneynde, catch: Log every individual query in performance tests
    - `docs` Issue #3422845 by scott_euser, smustgrave: Improve the relationships documentation in views.api.php
    - `fix` Issue #3423329 by catch, kristiaanvandeneynde, dww, alexpott: Prevent session garbage collection during functional tests
    - `fix` Issue #3423120 by dineshkumarbollu, mohit_aghera: Remove `@Annotation` tag from Action attribute
    - `fix` Issue #3414415 by joco_sp, nod_, RoloDMonkey, tcrawford: Content language and translation AJAX expansion is backwards
    - `fix` Issue #3423272 by catch, kristiaanvandeneynde: Return early from more cache tag operations
    - `refactor` Issue #2977950 by Lendude, smustgrave, lauriii: Move the bc layer for views UI CSS classes from views to stable9
    - `fix` Issue #3422981 by catch, gorkagr, Wim Leers: Return early in CacheTagsChecksumTrait::isValid() (and possibly elsewhere) if there are no tags to check
    - `fix` Issue #3414287 by catch, longwave: Avoid reading session from the database multiple times during a big pipe request
    - `docs` Issue #3097907 by dww, camilledavis, Abhijith S, komalk, athyamvidyasagar, rudolfbyker, kostyashupenko, guilhermevp, shaal, andrewmacpherson, tanubansal, krishnarp, paulocs, ckrina, saschaeggi, mgifford, rkoller, mherchel: Active toolbar tray has weak affordance and fails WCAG color criteria
    - `perf` Issue #3421881 by catch, kristiaanvandeneynde, Wim Leers: Track cache tag queries separately in performance tests
    - `fix` Issue #3405976 by alexpott, jrglasgow, fago, catch, mondrake, solideogloria, mglaman, Driskell, derickr, longwave, Mile23, YesCT, daffie: Transaction autocommit during shutdown relies on unreliable object destruction order (xdebug 3.3+ enabled)
    - `fix` Issue #3379885 by catch, Wim Leers: Use MessagesCommand in BigPipe to remove special casing of the messages placeholder
    - `fix` Issue #2867881 by catch, Wim Leers, smustgrave, dww: Remove @todo and workaround in Cookie ResourceTestTrait
    - `fix` Issue #3405976 by alexpott, jrglasgow, fago, catch, mondrake, solideogloria, mglaman, Driskell, derickr, longwave, Mile23, YesCT, daffie: Transaction autocommit during shutdown relies on unreliable object destruction order (xdebug 3.3+ enabled)
    - `revert` Revert &quot;Issue #3414993 by alexpott: Add ConfigImporter to \Drupal\Core\Config\Importer\MissingContentEvent&quot;
    - `fix` Issue #3112295 by mondrake, Taran2L, acbramley, cliddell, mpdonadio, smustgrave, Hardik_Patel_12, AkashKumar07, ravi.shankar, alexpott, andypost, daffie, JeroenT, vladbo, pifagor, voleger: Replace REQUEST_TIME in rest of OO code (except for tests)
  
  </details>
  
- **drupal/core-composer-scaffold**: 10.5.6 → 11.1.9
    <details>
  <summary>📋 Show 12 commits</summary>

    - `fix` Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings
    - `fix` Revert &quot;Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings&quot;
    - `fix` Issue #3425337 by mondrake: Fix root namespace classes DebugClassLoader forward compatibility warnings
    - `fix` Issue #3438034 by tannguyenhn, adwivedi008, alex.skrypnyk, alexpott: Fix Composer Scaffold plugin event listeners
    - `chore` Issue #3437335 by fromme, catch: Remove web.config from 11.x
    - `fix` Issue #3444020 by andypost, smustgrave: [8.4] Fix implicitly nullable type declarations in composer plugin
    - `fix` Issue #3266160 by smustgrave, alex.skrypnyk, tannguyenhn, beatrizrodrigues, joachim, larowlan: Composer Scaffold plugin calls dispatch() instead of dispatchScript()
    - `feat` Issue #3447886 by alexpott, sime, phenaproxima: Add support for recipes to drupal/recommended-project and drupal/legacy-project
    - `fix` Issue #3463440 by mstrelan, smustgrave: Fix param docs identified by phpstan
    - `fix` Revert &quot;Issue #3463440 by mstrelan, smustgrave: Fix param docs identified by phpstan&quot;
    - `fix` Issue #3463440 by mstrelan, smustgrave, quietone, longwave: Fix param docs identified by phpstan
    - `fix` Issue #3330481 by spokje, quietone, mstrelan, smustgrave: Fix PHPStan L2 error &quot;PHPDoc tag @foo has invalid value (Bar)&quot;
  
  </details>
  


---

*Report generated by [ITCare Feature Analyzer](https://www.itcare.company/feature-analyzer)*
