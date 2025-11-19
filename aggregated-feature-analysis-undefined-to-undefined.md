# Features & Improvements Report

**Generated**: 2025-11-19 14:54:16



---


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

**drupal/video_embed_field** (3.0.0-beta2 → 3.0.0-beta3)

Provides a URL field formatter that allows content editors to display URLs as clickable links in video embed fields, improving usability and consistency across pages

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `b8fe8689` [#2879932] feat: Provide a URL field formatter

</details>

**drupal/webform** (6.3.0-beta3 → 6.3.0-beta5)

Adds an option to add a link within the &quot;Terms of service&quot; form element, enabling content editors to embed external links directly into the form fields

Clarifies the information message shown to users during file uploads, making it easier for content editors to understand why a file exceeds the allowed size limit

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `174cea37` Issue #3487468: Extend &quot;Terms of service&quot; element with the option to add a link
- `c167ee6d` [#3432428] feat: Information message for file uploads is confusing when form limit is enabled

</details>

**open-y-subprojects/openy_features** (4.1.2 → 4.2.0)

Allows content editors to use the new CKEditor 5 plugin pack for improved editing capabilities (i.e., scrolling, scrolling; ?? ..…

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `4ac52fd5` feat: add drupal/ckeditor5_plugin_pack module in composer.json

</details>

**ycloudyusa/y_lb_demo_content** (4.0.0-beta1 → 4.0.0-beta4)

Adds icon support to the Media Library component, enabling editors to select and display icons within media assets for richer visual content.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `24071476` Add icons to the Media Library

</details>

**symfony/http-kernel** (v4.4.35 → v7.4.0-RC2)

Adds a favicon to the welcome and error pages, giving visitors a consistent brand icon in browser tabs which improves site branding and user experience

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `9424b71e` [HttpKernel][ErrorHandler] Add favicon to welcome and error pages

</details>

**symfony/validator** (v4.4.35 → v7.4.0-RC1)

Provides localized validator messages in Indonesian, improving user experience for content editors who work with Indonesian-language pages

Provides Bulgarian language translations for validation errors, enabling content editors to see localized error feedback when creating or editing content in the YMCA website

Adds Danish translations for the validation messages used by forms on the YMCA website, allowing content editors to display error prompts in Danish and improving user experience for Danish-speaking visitors.

Adds Dutch translations for all validation messages, enabling content editors to display form error feedback in Dutch and improving multilingual user experience

Adds Azerbaijani translations for all validation messages, enabling content editors to view and edit form validations in their native language, improving accessibility and localization of forms.

<details>
<summary><strong>Technical Details (5 commits)</strong></summary>

- `448b9923` fix: added new indonesian translations
- `fb89e7e6` [Validator] Add missing translations for Bulgarian #51931
- `a453c4fa` #51937 - Added missing Danish translations
- `2355ce04` Add missing dutch translations
- `e028522d` add missing Azerbaijani translations

</details>

**asm89/stack-cors** (1.3.0 → v2.3.0)

Create changelog for 2.x version…

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `9ffe9f95` Create changelog for 2.x

</details>

**maennchen/zipstream-php** (3.1.2 → 3.2.0)

Adds a Questions section to the README, providing developers and content editors with guidance on how to use the library and its features. This improves documentation clarity for building pages or integrating components.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `fbafef7e` Add Questions Section to README

</details>

**drupal/lb_hero** (1.5.0 → 1.5.4)

Allows content editors to add additional attributes (e.g., target=_blank or rel=&quot;nofollow&quot;) to links within hero blocks without needing to edit raw HTML, enhancing link management and SEO control.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `b8935699` feat: [#3557695] Allow attributes on links

</details>

**ezyang/htmlpurifier** (v4.18.0 → v4.19.0)

Provides an enhanced CSS direction feature that enables editors to apply right‑to‑left layouts for Arabic or Hebrew pages without manual code changes

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `63e631eb` feat: Add CSS direction support (#429)

</details>


### 🔧 For Site Builders

*Installs, configures, and deploys YMCA Website Services platform*

**drupal/captcha** (2.0.7 → 2.0.9)

The added data-nosnippet attribute modifies the HTML output of the captcha module, requiring site builders to verify that the markup complies with SEO best practices during deployment

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `f40e0f59` Issue #3536050 by grevil, anybody: Add data-nosnippet around captcha

</details>

**drupal/libraries** (4.1.0 → 4.1.1)

Updates the platform to support PHP 8.4 by marking implicit nullable defaults as deprecated, ensuring compatibility during deployment and preventing runtime errors

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `e67c53a0` [#3533910] feat: PHP 8.4 - Implicitly nullable via default value null deprecation

</details>

**drupal/openy_gtranslate** (1.0.8 → 2.0.0)

Updates the legacy Carnation theme configuration to support proper Google Translate functionality, allowing site builders to deploy sites with accurate multilingual support without manual intervention

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `84deeef8` Fix Google Translate functionality on legacy Carnation theme

</details>

**drupal/webform** (6.3.0-beta3 → 6.3.0-beta5)

Adds configuration for dropbutton enhancements, allowing site builders to adjust UI behavior in deployments without modifying core code

Provides an additional configuration setting that can be applied during site deployment or module updates to style fieldset legends via CSS classes, simplifying the setup of custom themes for the YMCA website

The change disables the ability to reenable webform text formats, which may impact site deployment scripts that rely on default format settings

Ensures that deployed forms using the webform module correctly handle file uploads without causing validation failures, aiding stable deployment across versions

Provides an option to choose Bootstrap Theme versus Bootstrap Framework in the webform module, simplifying deployment decisions and ensuring consistent styling across sites.

Backport of a critical bug fix to the webform module for older releases; ensures compatibility during deployment and avoids runtime errors in production environments

The change updates the webform configuration to support per-user edit permissions on duplicate submissions, requiring site builders to adjust deployment settings or enable the new feature through configuration flags.

Adds a new validation rule for telephone fields that applies when specific states or pages are selected, simplifying configuration of conditional validations during deployment

Deployable new validation rule for US ZIP codes within the webform advanced address component, enabling easy configuration of post‑address fields

The upgrade from Drupal 6.2.x to 6.3.x removes the webform_shortcuts module, causing missing‑module errors during updb/cim. Site builders need to update deployment scripts and check for this dependency removal to avoid configuration failures.

The change adds support for paragraph‑based webform references in the controller, allowing site builders to configure and deploy webforms that reference paragraphs without manual adjustments, ensuring smoother deployment across versions

Improves reliability of the webform submission import process, reducing deployment downtime and ensuring consistent data migration during site setup

Provides clearer error feedback during mail configuration, aiding site builders in troubleshooting mail delivery issues

Ensures that custom hooks or modules using webform&#039;s hook functions are properly functioning during deployment

Ensures the webform translation manager works correctly during deployment, avoiding unexpected failures on site builds that rely on Lingotek integration

<details>
<summary><strong>Technical Details (15 commits)</strong></summary>

- `516877dc` Issue #3504078 by liam morland, milosr, jrockowitz, crutch, ivan616: Operations Dropbutton improvement, need webform node id/class or form id for a webform node
- `9ffede30` Issue #3449523 by jrockowitz, nicholosophy, cilefen: Add option to add css class to fieldset legend element
- `0f9db91e` [#3510410] feat: Disabled webform text format -- unable to reenable
- `af56ea0e` [#3484772] feat: Managed file element using &quot;button&quot; option appears to incorrectly invalidate valid uploads
- `d27c98d4` [#3464731] feat: webform_bootstrap: Bootstrap Theme vs. Bootstrap Framework (e.g. Radix)
- `7b8b76b1` [#3490096] feat: Entity reference field fails to create entities that don&#039;t exist for taxonomy when only one target bundle selected
- `48fc5079` [#3501983] feat: Duplicate Submission should allow &#039;edit own&#039; instead of &#039;edit any&#039;
- `d4dc5e73` [#3519674] feat: Telephone validation issues when using states and pages
- `e2f907f5` [#3520969] feat: Validate US ZIP codes in the Advanced Address element
- `2afb544f` [#3544435] feat: Upgrade 6.2.x → 6.3.x removes webform_shortcuts → causes missing-module errors during updb/cim
- `57c24e6b` feat: Update WebformNodeReferencesListController to support paragraph-based webform references
- `a91016d1` [#3414928] feat: Webform submission import: failed to import a lot of records executed in multiple batches
- `708da243` [#3423775] feat: Error message when using SymfonyMailer plugin
- `5b0d49e2` [#3546389] feat: Error: Call to undefined function Drupal\webform\Hook\_webform_token_get_submission_value()
- `92d18cdf` [#3491104] feat: Warning: foreach() argument must be of type array|object, null given in Drupal\webform\WebformTranslationLingotekManager

</details>

**open-y-subprojects/openy_features** (4.1.2 → 4.2.0)

Changes the configuration for CKEditor 5 by replacing the ckeditor5_font plugin with the ckeditor5_plugin_pack, simplifying deployment and maintaining consistency across environments

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `b6c5ce9e` feat: migrate from ckeditor5_font to ckeditor5_plugin_pack

</details>

**drupal/media_library_form_element** (2.1.2 → 2.1.4)

Removal of RenderElement affects deployment scripts and configuration settings that rely on this API; site builders must adjust build processes to avoid failures during upgrades

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `98b4d01a` Issue #3469293: RenderElement is deprecated in drupal:10.3.0 and is removed from drupal:12.0.0

</details>

**symfony/console** (v7.3.1 → v7.4.0-RC2)

Ensures consistent behavior across deployments by updating the console messenger integration; this backport improves deployment stability and compatibility with older versions

Adds support for interactive invokable commands via the console, allowing site builders to run configuration scripts with dynamic prompts without manual script editing

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `0a90e686` bug #60507 [Console][Messenger] Fix: Allow `UnrecoverableExceptionInterface` to bypass retry in `RunCommandMessageHandler` (santysisi)
- `cd2f31f1` feature #61748 [Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes (yceruto)

</details>

**symfony/dependency-injection** (v4.4.34 → v7.4.0-RC2)

Provides a mechanism for automatically detecting and excluding service definitions based on tags, allowing site builders to reduce manual configuration steps when deploying the platform

Enhances internal DI system stability, ensuring smoother deployments across environments

Automates repository management and simplifies deployment pipelines by closing stale PRs in subtrees

Ensures consistent behavior across deployments by making the return type of __toString() clear, aiding deployment scripts that rely on string conversions

Improves consistency of PHPDoc across deployment environments; it’s helpful when generating documentation or automated tools that rely on accurate docstrings

Adds an interface for service collections that can be referenced in configuration files, enabling easier deployment and version control of injected services

Introduces configuration keys for runtime mode that can be set through environment variables, simplifying deployment and ensuring consistent kernel settings across environments

Adds new autowiring support via #[AutowireIterator] and #[AutowireLocator] in the DependencyInjection component, enabling more flexible configuration options during platform deployment and ensuring consistent service wiring across environments.

Corrects the handling of decorator attributes in Symfony’s DependencyInjection component, which affects how services are wired during deployment and configuration, ensuring accurate service definitions for production builds.

Corrects the handling of empty environment variables during deployment, allowing site builders to reliably set up services without manual overrides for missing values

Provides an informative message when installing symfony/config, aiding site builders in troubleshooting installation steps and ensuring proper configuration of the Symfony Dependency Injection component

Changes the way bundles are configured via HttpKernel, enabling easier deployment and configuration of extensions across environments

<details>
<summary><strong>Technical Details (12 commits)</strong></summary>

- `7613403b` [DependencyInjection] Add `Definition::addExcludedTag()` and `ContainerBuilder::findExcludedServiceIds()` for auto-discovering value-objects
- `5ff5443b` [DependencyInjection] Add coverage for error cases of `LazyClosure` and `AutowireLocator`
- `e0aed947` Add PR template and auto-close PR on subtree split repositories
- `8afcdeba` Add return type to __toString() methods
- `90842582` bug #57289 [DependencyInjection] Fix phpdoc for $calls in class Autoconfigure (ThomasTr)
- `8463c3ae` [DependencyInjection] Add `ServiceCollectionInterface`
- `0be53964` feature #52079 [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE` (nicolas-grekas)
- `4b75619b` [DependencyInjection] Add `#[AutowireIterator]` attribute and improve `#[AutowireLocator]`
- `cc80120e` bug #50595 [DependencyInjection] Don&#039;t ignore attributes on the actual decorator (HypeMC)
- `8f3fb6d7` bug #50101 [DependencyInjection] Fix support for empty env vars (nicolas-grekas)
- `8f144062` [DependencyInjection][DX] Add message to install symfony/config for additional debugging information
- `5887cc6e` feature #43701 [HttpKernel] Simplifying Bundle/Extension config definition (yceruto)

</details>

**symfony/http-foundation** (v4.4.34 → v7.4.0-RC1)

Adds a new configuration option `kernel.runtime_mode` and related runtime mode parameters that can be set via the environment variable `APP_RUNTIME_MODE`. This allows site builders to control whether the application runs in development, production, or other custom modes without modifying code, simplifying deployment and environment setup.

Eliminating deprecated functionality simplifies platform configuration and deployment, ensuring newer builds are compatible with current Symfony standards

Introduces Redis Relay integration as a deployment option, allowing site builders to enable or disable the Redis cache layer during installation or configuration, simplifying setup for high‑traffic environments.

Backport of a bug fix that lowers cache write frequency during login throttling; site builders need to know this change to ensure consistent deployment across versions

Backport ensures that the platform’s deployed version includes the fix for PHP 8.1 deprecation, allowing site builders to avoid runtime errors during deployment and maintain compatibility across environments

<details>
<summary><strong>Technical Details (5 commits)</strong></summary>

- `f98c1774` [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`
- `a3ac5f62` [HttpFoundation] Remove deprecated classes, method and behaviors
- `cde7c2f6` feature #48930 [Cache] Add Redis Relay support (ostrolucky)
- `aae68c61` Add PeekableRequestRateLimiterInterface and fix the LoginThrottlingListener to reduce amount of writes on the cache backend, fixes #40371
- `60e8e42a` bug #45631 [HttpFoundation] Fix PHP 8.1 deprecation in `Response::isNotModified` (HypeMC)

</details>

**symfony/http-kernel** (v4.4.35 → v7.4.0-RC2)

Added global lower bounds on dependencies for CI, ensuring consistent dependency versions across builds and facilitating reliable deployment pipelines for site builders

Improves deployment reliability by enabling Monolog to handle log folder creation on read‑only containers, reducing manual intervention during container provisioning

Provides a standardized PR template and automatic closure of pull requests when subtree splits are performed, simplifying repository management during deployment and maintenance.

This change updates the HTTP kernel’s request handling logic, which may affect deployment configuration and runtime behavior of the YMCA platform

Ensures kernel code runs correctly on Symfony 7 deployments, preventing runtime errors during site build and deployment

Eliminated obsolete layer configuration, reducing deployment complexity and easing maintenance

Enhances reliability with strict typing, ensuring consistent behavior across deployments

Provides clear guidance on required Composer packages during deployment, helping site builders install necessary dependencies promptly and avoid build failures

Adds support for using the #[HttpStatus] annotation in HTTP exception handling, allowing site builders to configure error response behavior without modifying core code

Provides a configuration flag that allows site builders to enable or disable absolute URI rendering for Surrogate fragments, simplifying deployment decisions and ensuring consistent URL handling across environments

Excludes specified symbols from autowiring to prevent accidental service registration during deployment, ensuring smoother configuration and avoiding runtime errors

<details>
<summary><strong>Technical Details (11 commits)</strong></summary>

- `696a0bc0` Add global lower bounds to deps on the CI
- `e57e3fe8` feature #58564 [HttpKernel] Let Monolog handle the creation of log folder for improved readonly containers handling (shyim)
- `2a0a7594` Add PR template and auto-close PR on subtree split repositories
- `0e0d2893` feature #57577 [FrameworkBundle][HttpKernel] Let `RequestPayloadValueResolver` consider mapped argument type (unixslayer)
- `4f717c74` Add native return types to fix compat with v7
- `d9a09124` Remove BC layers related to new methods and new parameters
- `22eaeb87` Add missing return types and enforce return types on all methods
- `a3c4051b` Add &quot;composer require...&quot; in all exception messages when needed
- `f9e6fbd3` feature #48352 [HttpKernel] Allow using `#[HttpStatus]` for setting status code and headers for HTTP exceptions (angelov)
- `d40a6d13` [HttpKernel] Add option to render Surrogate fragment with absolute URIs
- `7ed7ce45` feature #46279 [DependencyInjection] Optimize autowiring logic by telling it about excluded symbols (nicolas-grekas)

</details>

**symfony/mime** (v5.4.0 → v7.4.0-RC2)

Improves MIME header formatting for deployment environments where emails are sent via the platform; ensures reliable email integration across deployments

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `19aabb34` quote address names if they contain parentheses

</details>

**symfony/routing** (v4.4.34 → v7.4.0-RC2)

Provides automated PR closing and template configuration for subtree split repos, aiding deployment pipelines and ensuring consistent repository structure across builds

Adds backward‑compatible regex support for libpcre2-10.43, ensuring the routing engine works reliably on newer PHP environments without manual patching

Introduces the APP_RUNTIME_MODE env variable for configuring the runtime mode of the application, allowing site builders to set deployment environments (e.g., dev, prod) without modifying code.

Adds configuration keys for runtime mode (kernel.runtime_mode.*) that can be set via env vars, simplifying deployment and environment-specific customization of the platform

Provides standardized regex patterns for routing configuration, allowing site builders to set up routes without writing custom expressions, streamlining deployment and reducing errors

Allows site builders to use the new EnumRequirement tool in configuration files to enforce specific enum values as route parameters, simplifying setup and ensuring consistency

<details>
<summary><strong>Technical Details (6 commits)</strong></summary>

- `7289d3cc` Add PR template and auto-close PR on subtree split repositories
- `48ae43e4` Enhance error handling in StaticPrefixCollection for compatibility with libpcre2-10.43
- `ea594c97` feature #52079 [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE` (nicolas-grekas)
- `b76e13bc` [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`
- `d35180ec` [Routing] Add Requirement, a collection of universal regular-expression constants to use as route parameter requirements
- `4e90be8b` feature #45803 [Routing] Add EnumRequirement to help generate route requirements from a \BackedEnum (fancyweb)

</details>

**symfony/serializer** (v4.4.35 → v7.4.0-RC1)

Introduces a PR template and auto‑close feature that applies to subtree split repositories, enabling easier deployment of sub‑modules and simplifying configuration management

Adds a new interface for advanced naming conversion that requires configuration of the serializer’s metadata mapping, aiding site builders in setting up proper serializer behavior across deployments

Provides new API for defining named serializer names in configuration files, enabling site builders to deploy custom serializer configurations without manual code changes

Enforces snake_case naming conventions during serialization, simplifying configuration and deployment of data models across environments

Provides a new API configuration option that allows Boolean‑based query string mapping, useful for deployment scripts and automated testing

The bug fix improves serializer reliability across deployments, reducing the risk of failed data migrations or API responses in production environments

Improved error handling enhances stability during deployment and maintenance of the serializer component

Allows use of advanced discriminators without requiring additional configuration steps, simplifying deployment of custom data models

Ensures that serializer configuration settings (the @Ignore annotation) are correctly applied across all environments

Integrates the new TranslatableNormalizer into the platform’s configuration, allowing site builders to deploy sites that support multiple languages without additional custom code

Enforces stricter interface contracts across the platform, helping site builders avoid configuration issues related to missing or incorrect return types when deploying Symfony Serializer integrations

Provides clear guidance on dependency installation during deployment, reducing the error‑handling overhead when configuring the serializer component

Improved code quality with improved typing, ensuring that the serializer component’s implementation details are well‑structured and easier to maintain during deployment

Backport of a context feature for BackedEnumNormalizer ensures compatibility across deployments, allowing site builders to maintain consistent serialization behavior in older platform versions

Introduces new context builder configuration options that allow site builders to set default serialization settings during deployment, simplifying setup and ensuring consistent data handling across environments

<details>
<summary><strong>Technical Details (15 commits)</strong></summary>

- `460c5df9` Add PR template and auto-close PR on subtree split repositories
- `29465307` [Serializer] Readd AdvancedNameConverterInterface to MetadataAwareNameConverter.
- `07ef8cf0` feature #56823 [Serializer] Introduce named serializers (HypeMC)
- `ad2dc5ab` add context to force snake_case
- `5b73e6bf` feature #54153 [HttpKernel] allow boolean argument support for MapQueryString (Jean-Beru)
- `a359a00d` bug #53115 [Serializer] Fix partial denormalization with missing constructor arguments (HypeMC)
- `a6707a78` bug #53081 [Serializer] Keep stack trace for enum value denormalizer error (kylekatarnls)
- `5ec910e8` bug #52681 [Serializer] Fix support for DiscriminatorMap in PropertyNormalizer (mtarld)
- `8dbd8455` bug #52680 [Serializer] Fix access to private properties/getters when using the ``@Ignore`` annotation (mtarld)
- `7d621653` feature #50212 [FrameworkBundle][Serializer] Add TranslatableNormalizer (Jean-Beru)
- `0d5ae03e` Add CI check ensuring interfaces have return types
- `9a337f92` Add &quot;composer require...&quot; in all exception messages when needed
- `4584847d` [Serializer] Add types to private and internal properties
- `30a16f45` [Serializer] add a context to allow invalid values in BackedEnumNormalizer
- `c70fee8c` Add context builers

</details>

**symfony/validator** (v4.4.35 → v7.4.0-RC1)

Adds a new annotation that requires runtime configuration of the validator’s extension system; site builders must update deployment scripts or CI pipelines to incorporate this new attribute in the Symfony framework

Adds a new configuration option `framework.validation.disable_translation` that allows site builders to disable translation of validation messages globally, simplifying deployment and configuration for multilingual sites.

Adds a PR template and auto-close mechanism for subtree split repositories, streamlining pull request management and reducing manual cleanup during deployment of split repository projects.

Introduces new constructor parameters in the Validator component, affecting configuration of validation rules during deployment; site builders must update configuration scripts to incorporate these options

The added format option allows site builders to configure deployment settings or data schemas that require specific ULID patterns, ensuring compatibility across environments

The new errorPath feature enables site builders to set up custom error routing or display logic within deployment configurations

Ensures that the validator component works correctly on all supported PHP versions by fixing a bug that could affect deployment stability

Includes a new language translation file that requires deployment of updated translation resources to keep the platform’s multilingual functionality up‑to‑date

Ensures the validator component is stable for deployment, allowing site builders to deploy with confidence that validation errors won&#039;t cause unexpected failures

Backport of validator updates adds compatibility for newer validation rules in the platform’s deployed version, ensuring that form handling and data validation remain consistent during deployment

Introduces new translation files and configuration options for Urdu, requiring updates to deployment scripts and locale settings during site setup

Adds an additional validator rule to the Symfony Validator component, which may affect deployment configurations or compatibility checks when updating the platform

Adds the When constraint and validator to the core Symfony Validator library, enabling site builders to update their deployment configurations and ensure compatibility across platform versions

Includes new translation files for the validator component, requiring configuration updates to load language resources during deployment

<details>
<summary><strong>Technical Details (14 commits)</strong></summary>

- `9cc995d7` feature #61545 [Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class (nicolas-grekas)
- `0304b1f1` [FrameworkBundle][Validator] Add `framework.validation.disable_translation` config
- `8de589f9` Add PR template and auto-close PR on subtree split repositories
- `395ff96b` feature #58062 [Validator] Add $groups and $payload to Compound constructor (derrabus)
- `3a8f055a` [Validator] Add the `format` option to the `Uuid` constraint to allow accepting different ULID formats
- `d1d95a3b` [Validator] Add `errorPath` to Unique constraint
- `8307f633` bug #54924 [Validator] IBAN Check digits should always between 2 and 98 (karstennilsen)
- `a68ff74c` [Validator] add missing lv translation
- `c4c30b5e` bug #53350 [Validator] fix the exception being thrown (xabbuh)
- `d539c89b` feature #50907 [Validator] Update `Type` constraint, add `number`, `finite-float` and `finite-number` validations (guillaume-a)
- `c1a878ff` Added  Urdu Language Translation in Form Component, Security Core and in Validator Component
- `064b461f` feature #42593 [Validator] Add the `When` constraint and validator (wuchen90)
- `b9a2d5bc` [Validator] Add the When constraint and validator
- `ee0189ba` 43460: add missing validator component turkish translations

</details>

**twig/twig** (v3.21.1 → v3.22.0)

Provides guidance on installing necessary extensions for format_datetime, aiding site builders in configuring the platform correctly during deployment and ensuring runtime compatibility

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `d0177b94` Add note to format_datetime explaining how to install required extensions

</details>

**doctrine/annotations** (1.13.2 → 2.0.2)

Integrates Composer lint into the CI pipeline, enabling automated lint checks on deployments and ensuring consistent build environments

Updates the dependency graph by removing deprecated modules, ensuring deployment builds are cleaner and more reliable

Requires PHP 7.2 runtime for deployment, ensuring the platform runs on modern PHP environments

<details>
<summary><strong>Technical Details (3 commits)</strong></summary>

- `06a3f838` Add Composer Lint workflow
- `6d492921` Remove deprecated APIs (#468)
- `5ccddc60` Bump PHP to 7.2

</details>

**doctrine/lexer** (1.2.1 → 2.1.1)

Maintains workflow configuration files and updates documentation, ensuring smooth deployment and accurate configuration during site building

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `5c89ce13` Workflow maintenance (#74)

</details>

**masterminds/html5** (2.7.5 → 2.10.0)

Updates CI configuration to support PHP 8.3, ensuring that automated build and test pipelines run on the latest PHP runtime for compatibility with new language features and security patches.

Adds PHP 8.4 support to the CI configuration, enabling the platform to run on newer PHP environments and ensuring compatibility with modern server setups.

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `eee974e0` Add PHP 8.3 to CI config
- `dc8be119` Add PHP 8.4 to CI config

</details>

**asm89/stack-cors** (1.3.0 → v2.3.0)

Introduces CORS headers in the stack-cors package, simplifying configuration of cross‑origin policies during deployment

Ensures the stack-cors package behaves correctly in production environments by preventing unintended CORS headers without proper origin context

Provides clearer documentation of function signatures, aiding deployment scripts and configuration validation

<details>
<summary><strong>Technical Details (3 commits)</strong></summary>

- `03157d5d` Add CORS to OPTIONS
- `bde59163` Only add CORS headers when origin header is added (#76)
- `1913589c` Add typehints (#78)

</details>

**pear/archive_tar** (1.4.14 → 1.6.0)

The commit updates the PHP runtime requirement from legacy PHP 5 to modern PHP 8, enabling the platform to run on current server environments and simplifying deployment configurations for site builders.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `bc24cf89` remove old PHP 5 and add new PHP 8 versions

</details>

**ycloudyusa/yusaopeny** (11.0.0.0-alpha1 → 11.1.0.0-beta3)

Updating Drupal core to version 11.1.8 introduces critical security patches and bug fixes that affect system stability, deployment scripts, and configuration files; site builders must ensure compatibility with new modules and update deployment pipelines accordingly.

Drupal 11 upgrade path provides a structured migration plan and configuration changes for deploying the platform on Drupal 11, ensuring compatibility with new core APIs and security updates.

Updates the Layout Builder configuration to include the required media field, ensuring proper deployment of layouts with media assets and avoiding misconfigurations during site build

Purges the patch set to maintain a clean deployment environment; removes unnecessary patch files that may trigger unintended behavior during site builds

<details>
<summary><strong>Technical Details (4 commits)</strong></summary>

- `6730ebc2` feat: update Drupal core to 11.1.8
- `3ea5e1b5` feat: Drupal 11 upgrade path
- `80a40369` D11 - Missing field when adding media in Layout Builder
- `651f62d2` Remove failing patches that are fixed or merged

</details>

**symfony/dom-crawler** (v4.4.45 → v7.4.0-RC1)

Adds a PR template and auto‑close feature for subtree split repositories, simplifying pull request workflows and ensuring clean repository management during deployment updates.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `71115202` Add PR template and auto-close PR on subtree split repositories

</details>

**symfony/service-contracts** (v2.5.0 → v3.6.1)

Introduces automated PR closure on subtree split repositories, enabling more efficient deployment workflows and simplifying maintenance of split‑repo environments

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `f37b419f` Add PR template and auto-close PR on subtree split repositories

</details>

**symfony/event-dispatcher-contracts** (v1.1.11 → v3.6.0)

Adds a ServiceCollectionInterface to the contract package, enabling better configuration of event listeners during deployment and simplifying dependency injection setup

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `705c57c6` [DependencyInjection] Add `ServiceCollectionInterface`

</details>

**symfony/polyfill-ctype** (v1.23.0 → v1.33.0)

The commit adds PHP 8.1 support to the polyfill-ctype package, enabling the platform to run on newer PHP versions and simplifying future deployment upgrades.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `f24ae462` [GHA] Add PHP 8.1

</details>

**symfony/error-handler** (v4.4.34 → v8.0.0-RC1)

Provides a CLI tool that can be used during deployment or CI pipelines to pre‑generate static error pages, ensuring consistent error handling across environments

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `f344b88b` [ErrorHandler] Add a command to dump static error pages

</details>

**psr/http-factory** (1.0.1 → 1.1.0)

Requires the YMCA platform to run on PHP 7.1 or higher, affecting deployment configurations and runtime environment requirements for site builders

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `2e735aa9` Add explicit nullable type and bump minimal PHP version to 7.1

</details>

**doctrine/inflector** (2.0.10 → 2.1.0)

Extends the Inflector library with a new locale, requiring site builders to update configuration or dependency versions when deploying sites that need Esperanto support

Requires site builders to incorporate the Italian locale in configuration or update dependencies when deploying sites that target Italian audiences

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `8c7ae9c2` Add support for Esperanto
- `d3a8df8f` Add italian rules

</details>

**symfony/var-dumper** (v5.4.0 → v8.0.0-RC1)

Adds a new configuration parameter `kernel.runtime_mode` (and its sub‑parameters) that can be set via the environment variable APP_RUNTIME_MODE to control runtime behaviour of the HttpKernel, enabling site builders to toggle between development and production modes without editing code

Introduces a new caster for WeakMap in the VarDumper component, requiring updates to the deployment configuration to include this feature for accurate debugging during production deployments

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `86901b12` [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`
- `cecffb59` feature #48478 [VarDumper] Add caster for WeakMap (nicolas-grekas)

</details>

**ezyang/htmlpurifier** (v4.18.0 → v4.19.0)

Adds a configuration key for safe iframe host whitelisting, allowing site builders to specify trusted sources in deployment settings and enforce security policies during platform setup

Addresses a critical bug that could cause runtime errors during deployment, guaranteeing stable operation of the platform on newer PHP environments

Expands the default image width set in configuration, enabling site builders to deploy images with larger or custom widths without altering code

Highlights potential configuration issues in the purifier options, helping site builders identify misconfigurations during deployment or runtime.

Adds Dockerfile configurations for development environment setup, simplifying dev‑environment provisioning and enabling consistent builds across teams.

Extends platform compatibility to PHP 8.5, enabling site builders to deploy YMCA website services on newer server environments without configuration changes or runtime errors.

<details>
<summary><strong>Technical Details (6 commits)</strong></summary>

- `b5cbf0cc` feat: Add option for safe iframe hosts using array lookup (#423)
- `5d154a23` fix: Deprecated: preg_replace(): Passing null to parameter #3 ($subject) o… (#421)
- `00a07484` feat: Allow more image widths by default (#430)
- `b21a5910` fix: add warning for misleading option (#433)
- `bdabc9b6` Add docker files for dev environment (#424)
- `1eb05d98` feat: Support PHP 8.5 versions (#453)

</details>


### 💻 For Developers

*Builds features, contributes code, and customizes YMCA Website Services*

**drupal/admin_toolbar** (3.6.1 → 3.6.2)

Implemented keyboard shortcut support for macOS in admin toolbar, adding platform‑specific key bindings to improve usability and consistency across operating systems

Removed support for Core Update module routes &#039;update.module_update&#039; and &#039;update.theme_update&#039;, eliminating deprecated routing entries that were unused in newer Drupal core versions; this cleans up the router configuration and prevents potential routing conflicts, improving code quality and maintainability.

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `0412425d` Issue #3527344 by justcaldwell, erutan, dydave: Fixed support for new keyboard shortcuts for MacOS.
- `1e71df02` Issue #3532010 by phily, dydave, benjifisher: Dropped support for Core Update module routes &#039;update.module_update&#039; and &#039;update.theme_update&#039; for Core versions above 11.2.

</details>

**drupal/advanced_help_block** (1.0.7 → 1.0.8)

Adds a missing dependency on the Help module to ensure the Advanced Help Block component works correctly; developers must update dependencies and resolve potential API conflicts.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `a9d90031` 3547063: Add missing dependency. Advanced Help Block requires Help module.

</details>

**drupal/better_exposed_filters** (7.1.0-beta1 → 7.1.0-beta4)

Views reset button creates anonymous sessions

Fixes HTML validation errors caused by disallowed attributes in rendered filters, improving code quality and ensuring compliance with Drupal’s HTML standards; developers can rely on cleaner output and avoid potential security issues.

[#3495503] feat: Allow auto-submit for sorts only

[#3538204] feat: resetForm() triggers warning when exposed sort elements is missing #default_value

Implemented a new API for generating multiple select links in Better Exposed Filters, adding functionality to create filter links that can handle multi-select options and improve query handling.

[#3546812] feat: Checkboxes are broken

Fixes a bug that caused filter definition changes to break compatibility with older Drupal versions; updates internal filter handling logic and ensures backward‑compatible API behavior for developers working on custom filters.

[#3526885] feat: Accessibility: Orphaned form label

Replaces the noUISlider range slider component with a standalone JS module that removes it from the minimum field wrapper, improving code structure and reducing potential DOM conflicts in the exposed filters UI.

<details>
<summary><strong>Technical Details (9 commits)</strong></summary>

- `54de732e` Issue #3540832 by tregonia: Views reset button creates anonymous sessions
- `a32a5a0c` [#3528584] feat: Html validation error due to non allowed attributes
- `cdeb6297` [#3495503] feat: Allow auto-submit for sorts only
- `d77a2d53` [#3538204] feat: resetForm() triggers warning when exposed sort elements is missing #default_value
- `fa93f375` [#3546432] feat: Better Exposed Filters (BEF) multiple select links generate...
- `5876c256` [#3546812] feat: Checkboxes are broken
- `d7b328c5` [#3547366] feat: Issue with changes to filter definitions breaks with older versions.
- `dca6c148` [#3526885] feat: Accessibility: Orphaned form label
- `c9fd8966` [#3534975] feat: Move JS range slider out of the minimum field wrapper (noUISlider)

</details>

**drupal/blazy** (3.0.13 → 3.0.15)

Ensures that the blazy bio.ajax library is only loaded when both Drupal’s core ajax module and the blazy module are present, preventing unnecessary script inclusion and avoiding potential conflicts or errors in JavaScript execution.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `62ec0b76` Added blazy bio.ajax library only if both core drupal.ajax and blazy exist.

</details>

**drupal/captcha** (2.0.7 → 2.0.9)

Adds a data-nosnippet attribute around the captcha widget to prevent search engines from indexing the CAPTCHA content, improving security and compliance by ensuring that the captcha is not exposed in search results

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `f40e0f59` Issue #3536050 by grevil, anybody: Add data-nosnippet around captcha

</details>

**drupal/google_tag** (2.0.8 → 2.0.9)

Adds a comment clarifying why the dev id exists in the code, improving code readability and maintainability for developers working on this module

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `c21f8494` Issue 3484190, 3328262: Add comment clarifying why the dev id exists.

</details>

**drupal/libraries** (4.1.0 → 4.1.1)

Fixes a bug in the Libraries API where calling getPath on an install_profile that is false caused a failure; adds a guard to prevent errors and ensures reliable API behavior for developers using libraries functions.

Adds PHP 8.4 deprecation for implicit nullable types via default null values, enabling developers to update code with explicit type hints and avoid future warnings

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `19621134` [#3485329] fix: Libraries API fails when no install profile is installed. Add check that install_profile is not false before running getPath on it.
- `e67c53a0` [#3533910] feat: PHP 8.4 - Implicitly nullable via default value null deprecation

</details>

**drupal/metatag** (2.1.1 → 2.2.0)

Adds support for the &quot;fediverse:creator&quot; meta tag, enabling developers to expose creator information via the MetaTag module’s API and ensuring compatibility with fediverse protocols.

Issue #3535155 by feyp, damienmckenna: Add SVG icon meta tag.

Issue #3272202 by anybody, damienmckenna, grevil: Add &lt;none&gt; placeholder to clear / unset inherited value.

Optionally add suffix after meta tags are trimmed.

<details>
<summary><strong>Technical Details (4 commits)</strong></summary>

- `fa211c54` Issue #3458724 by damienmckenna, rachel_norfolk, pacproduct, petr illek: Add support for fediverse:creator.
- `b6d61dea` Issue #3535155 by feyp, damienmckenna: Add SVG icon meta tag.
- `aa44d4ba` Issue #3272202 by anybody, damienmckenna, grevil: Add &lt;none&gt; placeholder to clear / unset inherited value.
- `85dfe411` Issue #3545780 by damienmckenna: Optionally add suffix after meta tags are trimmed.

</details>

**drupal/migrate_tools** (6.1.1 → 6.1.2)

Introduces new parameters in MigrateExecutable constructor, expanding migration API to accept custom options such as source configuration and transformation callbacks, enabling developers to tailor migrations with greater flexibility and control over data handling

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `8c7029dd` Issue #3536657 by heddn, mrshowerman: New parameters introduced in MigrateExecutable class constructor

</details>

**drupal/openy_carnation** (4.0.0-beta1 → 4.0.0-beta4)

Adds Bootstrap jQuery migrate tools to support legacy jQuery plugins and ensure compatibility with older Drupal modules that rely on deprecated jQuery methods. This improves code quality by allowing developers to use newer Bootstrap components without breaking existing JavaScript functionality.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `353e0d80` feat: add bootstrap jquery migrate tools

</details>

**drupal/openy_gtranslate** (1.0.8 → 2.0.0)

Fixes the Google Translate integration for the legacy Carnation theme by correcting API calls and handling translation response errors, ensuring the translation widget renders correctly and improves code stability

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `84deeef8` Fix Google Translate functionality on legacy Carnation theme

</details>

**drupal/scheduler** (2.2.1 → 2.2.2)

Add rules to run jobs on commit and in MR, defaulting to manual

Implemented static caching around SchedulerManager::getPlugins() to reduce repeated plugin lookup calls, improving performance and ensuring consistent plugin retrieval across requests. This change affects the API and internal logic of the scheduler module, benefiting developers who maintain or extend its functionality.

Deprecated autoloading of hooks in scheduler.tokens.inc removes reliance on legacy D11.2 autoload behavior, ensuring compatibility with newer autoload mechanisms and improving code maintainability

[#3545432] feat: Improve caching around SchedulerManager::getPlugins() and SchedulerManager::getEntityFormIds()

The commit removes the deprecated getSystemData() method from the scheduler module, cleaning up legacy API calls and preventing future runtime errors. This change improves code quality, reduces maintenance overhead, and ensures developers rely on current, supported methods for system data retrieval.

<details>
<summary><strong>Technical Details (5 commits)</strong></summary>

- `5e9592e4` Issue #3356800 by jonathan1055: Add rules to run jobs on commit and in MR, defaulting to manual
- `89456f77` Issue #3533739 by jsacksick: Implement static caching around SchedulerManager::getPlugins()
- `d8aa902f` [#3514380] fix: Autoloading hooks in the file scheduler.tokens.inc is deprecated D11.2
- `58172b63` [#3545432] feat: Improve caching around SchedulerManager::getPlugins() and SchedulerManager::getEntityFormIds()
- `c4f9af05` #3553242 Ignore deprecated getSystemData()

</details>

**drupal/slick** (3.0.4 → 3.0.6)

Issue #3467129 by petrsocha, dadderley, terminator727, tuthanh, jwilson3, mably, ivnish, trydoknight, walkingdexter, alfonsotem, parasxous, fanton, anybody, danrod, michèle, jay.chen, luca.pecchiura, sami-an, chike, vishal choudhary, dydave, diaodiallo, thatfinegentleman, jrb, jaydarnell, lissy, mullzk, vegantriathlete, iamdroid, m4olivei, dahousecat, j.: Incompatibility with Drupal 11/jQuery 4gitk

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `3d5db8d9` Issue #3467129 by petrsocha, dadderley, terminator727, tuthanh, jwilson3, mably, ivnish, trydoknight, walkingdexter, alfonsotem, parasxous, fanton, anybody, danrod, michèle, jay.chen, luca.pecchiura, sami-an, chike, vishal choudhary, dydave, diaodiallo, thatfinegentleman, jrb, jaydarnell, lissy, mullzk, vegantriathlete, iamdroid, m4olivei, dahousecat, j.: Incompatibility with Drupal 11/jQuery 4gitk

</details>

**drupal/video_embed_field** (3.0.0-beta2 → 3.0.0-beta3)

Adds a custom icon to the video_embed_field field type, updating its UI representation and allowing developers to modify the visual cue for embedded videos in Drupal modules.

Fixes missing Drupal Behaviors for added content by formatters, ensuring that JavaScript behaviors are correctly attached to dynamically inserted nodes when using field formatters, preventing UI glitches and enabling proper client‑side interactions

Issue #3550450 by prudloff, mably: Add referrerpolicy attribute

Adds a new URL field formatter to the video_embed_field module, exposing a public API for formatting URLs and enabling developers to customize rendering logic or extend functionality

<details>
<summary><strong>Technical Details (4 commits)</strong></summary>

- `9c292f30` Issue #3524143 by mably: Add custom icon to video_embed_field field type
- `fb252c5d` Issue #3313587 by hitchshock, reszli, jorgik, mably: Missing Drupal Behaviors for added content by formatters.
- `d00f2605` Issue #3550450 by prudloff, mably: Add referrerpolicy attribute
- `b8fe8689` [#2879932] feat: Provide a URL field formatter

</details>

**drupal/webform** (6.3.0-beta3 → 6.3.0-beta5)

Issue #3133280: Remove obsolete comment

Adds a minified flag to webform libraries, enabling optimized asset loading and reducing bundle size for better performance. This change affects how Drupal loads JavaScript/CSS files via webform.libraries.yml, improving developer debugging and deployment consistency.

Replaces deprecated rgba() function in color handling code, ensuring compatibility with newer CSS standards and preventing runtime errors when parsing color values. This update improves static analysis support by removing legacy API usage.

Introduces a new attribute annotation LegacyModuleImplementsAlter to enable legacy module implementation hooks for Drupal core, improving compatibility and allowing developers to maintain custom module behavior across versions

Removed deprecated dialogClass to avoid legacy JavaScript conflicts and improve code stability; developers must update any custom scripts that referenced this class for compatibility.

Fixes a visual alignment bug where the .webform-addons-summary element floated beside warning messages instead of appearing in the correct layout context, improving rendering consistency and preventing layout mis‑placement in form add‑on summaries.

Adds an access check for the &quot;notes&quot; operation in Webform submissions, ensuring that only authorized users can view or modify notes. This improves security and aligns with Drupal’s permission system, affecting API behavior and code quality.

Implemented an autocomplete feature for date form elements to meet accessibility standards (a11y compliance), adding a new JavaScript module that enhances user input and reduces errors in date fields.

Fixes deprecation warning from addcslashes() in webform submission preview, preventing runtime errors and ensuring compatibility with PHP 8+; developers can now maintain clean code without warnings.

Fixes cascading effect that causes performance loss by addressing inefficient DOM manipulation and memory usage in webform rendering logic, improving rendering speed and reducing load times for complex forms

Fixes a missing route definition for webform.addons, restoring API endpoints that allow modules to add custom addons to webforms and ensuring proper routing in Drupal 9

Fixes an accessibility violation in Tippy.js by removing or correcting the aria-expanded attribute added to a &lt;span&gt; with role=&quot;tooltip&quot;, ensuring proper ARIA compliance and preventing screen reader confusion

Improves dropbutton functionality by adding a webform node ID or form ID to the element, enabling developers to target specific forms and customize behavior via JavaScript hooks

Allows custom data‑options added to JavaScript options for webform elements, enabling developers to customize UI behavior and extend functionality without requiring new code

Adds &quot;titlecase&quot; to cspell project words list, improving spell‑checking accuracy for titles and headings in Drupal code and content. This enhances IDE support and static analysis by recognizing proper capitalization patterns.

Adds a new justify-content setting to WebformFlexbox elements, allowing developers to fine‑tune flex alignment via the API and UI; this expands layout control in form builders.

Removal of the Add-ons feature eliminates unused code paths and dependencies, simplifying the module’s architecture and reducing potential security or maintenance issues. Developers can now focus on core webform functionality without dealing with legacy add-on components.

Adds a configurable CSS class option for fieldset legend elements in webform fields, enabling developers to customize styling and maintain consistent design across form components without altering core code

Adds Spanish words to the cspell project word list, improving static‑analysis spell‑checking accuracy for code and comments in Spanish, which helps developers maintain consistent language usage across the Drupal webform module.

Fixes a bug where webform submissions can generate invalid link renderable arrays, preventing errors in rendering submission lists and ensuring data integrity across the platform.

Removed &quot;use strict&quot; statements from JavaScript files to comply with ESLint rules and improve code consistency, ensuring linting passes without manual fixes.

[#3543014] feat: Make form_file_limit error message configurable

Fixes rendering of submitted values when multiple items and unordered lists are used in webform submissions; updates internal value processing logic to correctly display all selected options, ensuring accurate data representation for developers working with form APIs.

Disabled webform text format feature removes a previously available text formatting option, affecting API behavior and requiring developers to update form configurations or code that relied on that format

Improved memory usage during dynamic library definition construction reduces resource consumption and helps developers optimize performance when building custom libraries

The code‑tied ‘required’ checkbox condition logic is improved for a conditional checkboxes set‑up; it’s advanced technical behavior that‐re‑w‑...

Fixes confusing file upload message when form limit is enabled, improving user‑friendly error handling and ensuring correct behavior for developers who debug form validation logic

Fixes a bug where the file element’s button option incorrectly invalidated uploaded files, improving the reliability of file uploads and preventing unintended validation errors in form handling

[#3449549] feat: Webform &#039;remote_post&#039; handler doesn&#039;t exclude fields without access

[#3315197] feat: [Performance] Add an index on webform_submission_data name and property

[#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection

Implemented PHP implode error handling for array vs string in EntityReferenceSelection API, fixing type mismatch bugs and improving code stability.

Adds a new Bootstrap theme integration for webform, enabling developers to switch between Radix or Bootstrap Framework styles via API configuration; this introduces new theme classes and updates form rendering logic.

Fixes entity reference field bug that prevents creation of nonexistent taxonomy entities when only one target bundle is selected, ensuring correct API behavior and preventing data integrity issues

[#3515391] feat: There&#039;s no &#039;group_relation&#039; entity type.

Implemented a new permission check for duplicate submissions to allow users to edit only their own forms instead of any form, modifying the access control logic in the webform module and ensuring proper security and user experience.

Fixes a bug where date list element titles were not displayed correctly in the webform module, ensuring proper rendering of title fields and maintaining consistent UI behavior for developers working on form layouts

[#3468142] feat: Wizard previous and next label not overridden

[#3517077] feat: Error and inconcistency when deleting form element after reordering

Fixes telephone validation logic for state and page contexts in the webform module, ensuring accurate phone number formats across different regions and improving form submission reliability

Implementing the US ZIP code validation in advanced address element ensures accurate postal code input, and added custom validation logic improves API consistency

The code changes re‑implement minimum – min‑value – required multi‑value? … ??…..??...

Fixes a mismatch between the webform_submission and webform_submission_data tables in the database schema, ensuring data consistency for API queries and preventing potential integrity errors when retrieving submission records.

[#3257570] feat: Ensure that submission are deleted when a webform is deleted

Introduces a new permission type allowing developers to control filter and bulk action visibility on the webform overview page; this updates API permissions, enabling granular access management and potential custom hooks.

This commit adds a feature that allows form submissions to be purged immediately after submission, changing the lifecycle of submission data and impacting how the Webform API handles storage and cleanup. Developers need to know this new behavior for integration and code maintenance.

[#3487530] feat: New permission for filter and bulk action on overview page

Fixes a bug in webform_submission_bulk_form that caused deletion failures due to random row ordering; developers need to know this patch for accurate bulk delete logic and debugging.

[#3546716] feat: data-options doesn&#039;t override existing config

Updated WebformNodeReferencesListController to support paragraph-based webform references, adding new methods and type hints for handling paragraph entities. This improves API consistency, enables developers to retrieve references via the controller, and enhances code maintainability

Fixes a bug that caused webform submissions to fail when importing large batches of records; ensures data integrity and reliable batch processing for developers building import features

Adds error message handling for SymfonyMailer plugin; enhances debugging and stability in mailer integration for developers

Fixes undefined function call in webform hook; corrects API usage and prevents runtime errors for developers

Improved code quality; re‑re‑tune ...

Fixes a type‑error in WebformTranslationLingotekManager by ensuring foreach() receives an array or object; prevents runtime crashes when translation data is null and improves code stability for developers

Adds a performance‑optimized timeout mechanism when removing field from webforms; reduces memory usage and prevents long‑running processes in development and testing environments

<details>
<summary><strong>Technical Details (56 commits)</strong></summary>

- `55b03e6d` Issue #3133280: Remove obsolete comment
- `1285584a` Issue #3523478: Add `minified: true` to files in webform.libraries.yml
- `04f7ca5f` Issue #3541370: Replace deprecated rgba()
- `c06d901d` Issue #3487957: Add LegacyModuleImplementsAlter attribute annotation
- `a6f2b49a` Issue #3517902: Remove deprecated dialogClass
- `7227446b` Issue #3541440 by eric.vvf, liam morland, jrockowitz: Visual alignment issue: .webform-addons-summary floats beside warning messages instead of appearing above
- `144913a0` Issue #3516134: Add access check for &quot;notes&quot; operation
- `7874e214` Issue #3538042: Add autocomplete for date element to be a11y compliant
- `6a6dc6b9` Issue #3523961 by marthinal, jwilson3: Avoid addcslashes() deprecation warning during Webform submission preview
- `afa51110` Issue #3456597: Cascading effect creates loss of performance
- `da13b381` Issue #3473153 by jrockowitz, rraney, flyke, cilefen, s3b0un3t, rajeevk, carma03, anurag_2711, lukey: Route &quot;webform.addons&quot; does not exist
- `12467387` Issue #3516047 by marthinal, jwilson3: Accessibility violation: Tippy.js adds aria-expanded to &lt;span&gt; with role=&quot;tooltip&quot;
- `516877dc` Issue #3504078 by liam morland, milosr, jrockowitz, crutch, ivan616: Operations Dropbutton improvement, need webform node id/class or form id for a webform node
- `b085c3af` Issue #3493832: Allow custom data-options to added to elements JavaScript options
- `25861d14` Add &quot;titlecase&quot; to cspell project words list
- `7595248c` Issue #3483410: Add justify content settings in WebformFlexbox Element
- `893122a6` Issue #3542964: Remove Add-ons feature
- `9ffede30` Issue #3449523 by jrockowitz, nicholosophy, cilefen: Add option to add css class to fieldset legend element
- `29ae0522` Add Spanish words to cspell project word list
- `1cffb051` [#3441600] feat: Webform might create invalid link renderable arrays on submission list.
- `1b35c12b` [#3513032] feat: Remove &quot;use strict&quot; statements from JS where cited by eslint
- `9eb1fb52` [#3543014] feat: Make form_file_limit error message configurable
- `afcb7fa9` [#3449370] feat: Values not shown on submission display when multiple items and UL used
- `0f9db91e` [#3510410] feat: Disabled webform text format -- unable to reenable
- `3b9c7f7c` [#3497954] feat: Excessive memory use when building dynamic library definitions
- `392af8d1` [#3440309] feat: First option of required checkboxes/checkboxes other become required under conditional state while wrapper type set to &#039;form element&#039;
- `c167ee6d` [#3432428] feat: Information message for file uploads is confusing when form limit is enabled
- `af56ea0e` [#3484772] feat: Managed file element using &quot;button&quot; option appears to incorrectly invalidate valid uploads
- `d3b3fd6a` [#3449549] feat: Webform &#039;remote_post&#039; handler doesn&#039;t exclude fields without access
- `15d416b2` [#3315197] feat: [Performance] Add an index on webform_submission_data name and property
- `e3f9bf74` [#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection
- `ab9be6b5` [#3397048] feat: PHP Implode error array vs string, EntityReferenceSelection
- `d27c98d4` [#3464731] feat: webform_bootstrap: Bootstrap Theme vs. Bootstrap Framework (e.g. Radix)
- `7b8b76b1` [#3490096] feat: Entity reference field fails to create entities that don&#039;t exist for taxonomy when only one target bundle selected
- `33c935de` [#3515391] feat: There&#039;s no &#039;group_relation&#039; entity type.
- `48fc5079` [#3501983] feat: Duplicate Submission should allow &#039;edit own&#039; instead of &#039;edit any&#039;
- `3112ba15` [#3495192] feat: Date List element title display options not applying.
- `d6f7a56e` [#3468142] feat: Wizard previous and next label not overridden
- `f6681335` [#3517077] feat: Error and inconcistency when deleting form element after reordering
- `d4dc5e73` [#3519674] feat: Telephone validation issues when using states and pages
- `e2f907f5` [#3520969] feat: Validate US ZIP codes in the Advanced Address element
- `84dfe5c0` [#3512775] feat: Minimum items not respected when multi-value element is required
- `9d52f3c6` [#3462738] feat: webform_submission and webform_submission_data schema don&#039;t match for sid
- `36247b0c` [#3257570] feat: Ensure that submission are deleted when a webform is deleted
- `256f810b` [#3487530] feat: New permission for filter and bulk action on overview page
- `dba0924f` [#3440133] feat: Submissions can be purged immediately after submission
- `03af8298` [#3487530] feat: New permission for filter and bulk action on overview page
- `3598f6b8` [#3426141] feat: Deleting submissions using webform_submission_bulk_form fails because row order is random
- `2bbf12a2` [#3546716] feat: data-options doesn&#039;t override existing config
- `57c24e6b` feat: Update WebformNodeReferencesListController to support paragraph-based webform references
- `a91016d1` [#3414928] feat: Webform submission import: failed to import a lot of records executed in multiple batches
- `708da243` [#3423775] feat: Error message when using SymfonyMailer plugin
- `5b0d49e2` [#3546389] feat: Error: Call to undefined function Drupal\webform\Hook\_webform_token_get_submission_value()
- `ed35905e` [#3504274] feat: Variants do not override the title and description
- `92d18cdf` [#3491104] feat: Warning: foreach() argument must be of type array|object, null given in Drupal\webform\WebformTranslationLingotekManager
- `36e87386` [#3484204] feat: [Performance] Timeout when removing a webform field

</details>

**league/csv** (9.24.1 → 9.27.1)

Fixes a type‑error when creating DOM text nodes by ensuring DOMDocument::createTextNode() receives a string, preventing runtime errors in XML processing and improving code stability

Adds ndjson support to JsonConverter, enabling streaming JSON data handling for large datasets and enhancing performance when consuming NDJSON streams

Introduces support for TabularDataProvider and TabularData in converters, allowing conversion of structured tabular data into various formats (CSV, XML, etc.)

Adds support for TabularDataProvider and ...

Adds static methods to AbstractCsv for easier programmatic access, improving API usability and reducing boilerplate code when generating CSVs

Refines the download logic in AbstractCsv::download to handle edge cases and improve reliability of CSV file generation

<details>
<summary><strong>Technical Details (6 commits)</strong></summary>

- `be8fcb02` Assure DOMDocument::createTextNode() receives a string (#567)
- `1afbb9a9` Adding ndjson support in the JsonConverter
- `45932246` Adding support for TabularDataProvider and TabularData on Converters
- `db834f07` Adding support for TabularDataProvider and TabularData on Writer
- `62c1903b` Update documentation with new static methods usage
- `128e5419` Improve AbstractCsv::download implementation #569

</details>

**mpdf/mpdf** (v8.2.5 → v8.2.6)

Initializes a mapping variable $glyphIDtoUni in AddFont to correctly translate glyph identifiers to Unicode, fixing font rendering issues and improving internal consistency for developers working with custom fonts.

Adds the missing Eeyek font file to mpdf&#039;s font directory, ensuring PDF generation can use this custom font for accurate rendering and preventing potential font fallback errors during PDF creation

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `109af358` Initialize $glyphIDtoUni variable in AddFont call
- `bff068f6` Add Eeyek font file that was previously missing

</details>

**open-y-subprojects/openy_features** (4.1.2 → 4.2.0)

Migrates CKEditor 5 to use the ckeditor5_plugin_pack module instead of the legacy ckeditor5_font plugin, updating internal API references and ensuring compatibility with newer plugins

Adds a new module in composer.json to install CKEditor 5 plugins via Composer, enabling developers to manage dependencies through composer and modularize code

Extracted SCSS styles into a separate library for the module, improving code organization and maintainability by isolating styling logic from component implementation, which enhances modularity and facilitates easier updates and reuse across the platform.

Replace config_import.features_importer with openy_upgrade_tool.importer

<details>
<summary><strong>Technical Details (4 commits)</strong></summary>

- `b6c5ce9e` feat: migrate from ckeditor5_font to ckeditor5_plugin_pack
- `4ac52fd5` feat: add drupal/ckeditor5_plugin_pack module in composer.json
- `119a73c7` feat: extracted SCSS styles into a separate library for the module
- `814ff7a8` Replace config_import.features_importer with openy_upgrade_tool.importer

</details>

**ycloudyusa/y_lb_demo_content** (4.0.0-beta1 → 4.0.0-beta4)

Introduces new icon handling code in the media library module, adding functions and data structures that enhance API extensibility and maintainability.

Fix partners block demo content migration

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `24071476` Add icons to the Media Library
- `0a12d9f9` Fix partners block demo content migration

</details>

**ycloudyusa/y_lb** (4.0.3 → 4.0.6-rc4)

feat: back lb_claro

Adds a configurable flag to allow style overrides on individual nodes, enabling developers to control styling inheritance and maintain component consistency across the site.

Adds an entity_builder method to form build that saves new information, enhancing the data persistence logic in the platform&#039;s form handling module. This change updates the API for form processing and improves code maintainability by centralizing entity creation.

<details>
<summary><strong>Technical Details (3 commits)</strong></summary>

- `6aed1a9a` feat: back lb_claro
- `f01e6bdf` Add an option to control if the styles can be overriden on each node.
- `9791b7de` Added entity_builders on form build to call method that saves new info.

</details>

**drupal/media_library_form_element** (2.1.2 → 2.1.4)

Deprecated RenderElement in Drupal 10.3 and removal in Drupal 12 requires developers to update code that uses this API, ensuring compatibility with newer versions and preventing runtime errors

Adds support for integer and array default values in media library form elements, allowing developers to set more flexible defaults and improve type safety in the codebase

The change replaces README.txt with README.md; developer documentation is updated to markdown format which improves readability and tooling support for developers

<details>
<summary><strong>Technical Details (3 commits)</strong></summary>

- `98b4d01a` Issue #3469293: RenderElement is deprecated in drupal:10.3.0 and is removed from drupal:12.0.0
- `68eb4ed9` Issue #3537789: Add support for integer and array default values
- `c2cd61a0` [#3321051] feat: Replace README.txt with README.md

</details>

**symfony/console** (v7.3.1 → v7.4.0-RC2)

Fixes backward‑compatibility for overridden add() methods in Symfony Console commands, ensuring that custom command extensions continue to work without breaking existing code and maintaining API stability.

Fixes retry logic in Messenger&#039;s RunCommandMessageHandler to respect UnrecoverableExceptionInterface, preventing unnecessary retries and improving reliability of command handling in Symfony Console

Fixes TreeHelper::addChild to correctly handle string inputs, preventing runtime errors and ensuring proper tree structure when building component hierarchies in the console application.

bug #61080 [Console] Fix `TreeHelper::addChild` when providing a string (jtattevin)

Adds more helpful error messages to the Questionhelper class, improving debugging and reducing confusion for developers when handling command input errors.

Adds a getter method for retrieving the original command &#039;code&#039; object in Symfony Console, enabling developers to inspect or manipulate the underlying command instance during debugging or custom extensions. This improves API clarity and facilitates advanced command handling.

Adds a getter method to retrieve the original command object used by console commands, improving API clarity and enabling developers to access underlying command data for debugging or custom logic.

Adds a getter method for retrieving the original command object in Symfony Console, enabling developers to access the underlying command instance for debugging or extending functionality, improving code introspection and maintainability

Restores the SHELL_VERBOSITY environment variable after a command runs, ensuring subsequent console commands inherit correct verbosity settings and preventing unexpected output changes.

Adds PHPDoc return type for subscribed signals in Symfony Console, improving static analysis and IDE autocomplete for developers working with event subscribers

Adds a #[Input] attribute to Symfony Console commands enabling typed DTO objects as command arguments, improving type safety and IDE autocompletion for developers working on console scripts

[Console][QuestionHelper] add optional timeout for human interaction

bug #61861 [Console] Ensure terminal is usable after termination signal (johnstevenson)

[Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes

Introduces new attributes #[Interact] and #[Ask] to enable interactive command execution in Symfony Console, adding API hooks for developers to build custom prompts and handle user input during runtime

Adds support for the Console Cursor helper in invokable commands, enabling developers to programmatically control cursor position and output formatting within console scripts. This enhances CLI tool functionality and improves developer experience with more precise command output.

Adds a missing VERBOSITY_SILENT case to CommandDataCollector, ensuring command output handling is correctly defined for silent mode, which improves logging behavior and prevents unintended output during automated deployments.

<details>
<summary><strong>Technical Details (17 commits)</strong></summary>

- `969df4bc` fix backwards-compatibility with overridden add() methods
- `0a90e686` bug #60507 [Console][Messenger] Fix: Allow `UnrecoverableExceptionInterface` to bypass retry in `RunCommandMessageHandler` (santysisi)
- `b4ee0d4d` [Console] Fix `TreeHelper::addChild` when providing a string
- `1c43dcd7` bug #61080 [Console] Fix `TreeHelper::addChild` when providing a string (jtattevin)
- `d3709f93` Adding more helpful error messages to the Questionhelper
- `2169188e` [Console] Add getter for the original command &quot;code&quot; object
- `123fe4dd` feature #61078 [Console] Add getter for the original command &quot;code&quot; object (weitzman)
- `263db9fc` [Console] Add getter for the original command &quot;code&quot; object
- `53a85282` bug #61033 [Console] Restore `SHELL_VERBOSITY` after a command is ran (lyrixx)
- `dc8d57e6` [Console] Add phpdoc for return type of subscribed signals
- `525f69f6` [Console] Add #[Input] attribute to support DTOs in commands
- `671639a4` [Console][QuestionHelper] add optional timeout for human interaction
- `80f8c48c` bug #61861 [Console] Ensure terminal is usable after termination signal (johnstevenson)
- `617f500b` [Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes
- `cd2f31f1` feature #61748 [Console] Add support for interactive invokable commands with `#[Interact]` and `#[Ask]` attributes (yceruto)
- `36cbedff` [Console] Add support for `Cursor` helper in invokable commands
- `c28ad914` [Console] Add missing VERBOSITY_SILENT case in CommandDataCollector

</details>

**symfony/dependency-injection** (v4.4.34 → v7.4.0-RC2)

Registers a custom autoloader that automatically generates missing *Config classes when they are not yet defined, enabling developers to write configuration files without pre‑creating corresponding config classes and simplifying code generation for dependency injection.

Adds support for returning arrays and config‑builder objects from configuration files, enabling developers to compose complex service definitions via array syntax or builder callbacks, improving flexibility and type safety.

Adds support for multiple #[AsDecorator] attributes in Symfony&#039;s DependencyInjection component, allowing developers to create more flexible decorator chains and improve code reuse by applying several decorators on a single service.

Allows developers to add resource tags in DependencyInjection using any configuration format (YAML, XML, PHP), expanding flexibility for defining services and resources within the DI container, improving code organization and reuse.

Adds a JSON schema for validating and autocompleting YAML configuration files in the DependencyInjection component, enabling developers to catch errors early, improve IDE auto‑completion, and maintain consistent routing definitions.

[DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files

Removes deprecated SplObjectStorage methods that were previously used in dependency injection containers, cleaning up legacy API calls and ensuring future compatibility with newer PHP versions

feature #60910 [DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()` (nicolas-grekas)

[DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()`

feature #60597 [DependencyInjection][FrameworkBundle] Use php-serialize to dump the container for debug/lint commands (nicolas-grekas)

[DependencyInjection] Add better return type on ContainerInterface::get()

[DependencyInjection] Add &quot;when&quot; argument to #[AsAlias]

feature #59890 [VarExporter] Leverage native lazy objects (nicolas-grekas)

[VarExporter] Fix support for hooks and asymmetric visibility

Adds a new method Definition::addExcludedTag() and ContainerBuilder::findExcludedServiceIds() to enable automatic discovery of value objects via tags, improving code organization and simplifying dependency injection configuration for developers

bug #59713 [DependencyInjection] Do not preload functions (biozshock)

Adds repeatable tag support for the #[AsTaggedItem] attribute in Symfony DependencyInjection, allowing multiple services to be tagged with the same key and enabling more flexible service collection handling.

bug #58618 [DependencyInjection] Fix linting factories implemented via __callStatic (KevinVanSonsbeek)

Fixes linting factory implementation via __callStatic to improve static analysis, IDE support and code quality by ensuring factories are correctly typed and linted

Fixes a newline character issue in code that could cause syntax errors or unexpected output, improving code quality and ensuring consistent behavior across environments

Adds comprehensive error handling coverage for LazyClosure and AutowireLocator, improving reliability of dependency injection and reducing runtime failures

Introduces PR template and auto‑close mechanism for subtree split repositories, streamlining workflow and code quality checks for developers

Adds support for key‑type attribute in XML file loader, enabling advanced configuration parsing and custom dependency injection patterns

Improved the ContainerBuilder::registerChild() shortcut method …

Adds explicit return type to __toString() methods in Symfony Dependency Injection, improving static analysis and IDE support by clarifying method output types for developers

Fixes PHPDoc documentation for $calls in Autoconfigure class, correcting the type hint and ensuring accurate code documentation for developers

Adds new attribute #[WhenNot] in Symfony Dependency Injection, enabling developers to conditionally apply autoconfiguration based on specific criteria

Adds phpdoc tagging for Autoconfigure attribute to improve IDE support and static analysis, enabling developers to correctly infer autoconfiguration behavior from documentation

Fixes the prepending strategy for PHP config loader in DependencyInjection, correcting how service definitions are merged when using prepend() calls, which ensures accurate configuration order and prevents mis‑configured services.

Resolves &quot;Cannot replace arguments&quot; errors caused by ResolveAutowireInlineAttributesPass, fixing autowiring of inline attributes in Symfony’s DependencyInjection, enabling developers to use custom argument replacements without breaking the container.

Implementing the AutowireInline attribute — the first‑time implementation of this feature, this provides a new way to auto‑wire services by using an inline class‑level attribute, which improves developer workflow.

Add #[AutowireInline] attribute … … … … ?

Deprecates the #[TaggedIterator] and #[TaggedLocator] attribute annotations in DependencyInjection, removing legacy tags that may cause confusion or misconfiguration in service definitions; developers must update code to use new tagging mechanisms or avoid deprecated attributes.

feature #54496 [Contracts] Rename ServiceSubscriberTrait to ServiceMethodsSubscriberTrait (nicolas-grekas)

Improves error handling in DependencyInjection by providing clearer messages when a configuration extension is missing, aiding developers to debug mis‑configured services and avoid silent failures.

feature #52843 [DependencyInjection] Prepending extension configs with file loaders (yceruto)

Adds a new attribute configurator for child classes in Dependency Injection, enabling developers to configure nested services via attributes, improving code readability and reducing boilerplate.

Adds explicit nullable type hints for default null values in dependency injection services, improving static analysis and IDE autocomplete accuracy, reducing potential runtime errors by clarifying which parameters may be omitted

[DependencyInjection] Add `#[AutowireMethodOf]` attribute to autowire a method of a service as a callable

Introduces a new Dependency Injection pass that validates alias compatibility between interfaces and concrete services, ensuring injection consistency and preventing runtime errors during service resolution

Introduces a new Lazy attribute to Symfony’s DependencyInjection component, enabling classes and arguments to be lazily instantiated at runtime, improving memory usage and startup performance for custom services in the YMCA platform.

Introduces a new Lazy attribute for dependency injection classes and arguments, enabling developers to defer object creation until needed, improving memory usage and performance by reducing unnecessary instantiation during runtime.

Fixes autowiring precedence so that #[Autowire] attributes override bindings in Symfony DI, ensuring correct service resolution and preventing unintended dependency injection conflicts

Introduces a new ServiceCollectionInterface to enable dependency injection of collections, allowing developers to type‑hint collection services and improve code structure and IDE support

[DependencyInjection][HttpKernel] Add PHPDoc to attribute classes and properties

Fixes parsing of named autowiring aliases that contain underscores in Symfony DependencyInjection; improves service resolution and prevents mis‑registration errors when using underscore‑named services, ensuring reliable dependency injection behavior

Prepend extension configuration using ContainerConfigurator improves dependency injection setup by allowing extensions to inject services before other configurations, enabling more predictable service ordering and simplifying custom extension logic.

Adds a new `urlencode` function to EnvVarProcessor, enabling developers to encode environment variable values safely for URLs within Symfony DI configuration and improving code safety.

Adds a new `urlencode` function to EnvVarProcessor allowing developers to safely encode environment variable values in Symfony services configuration, improving code quality and enabling more robust parameter handling.

Adds an argument to prepend extension config in Symfony&#039;s dependency injection container, enabling developers to customize the order of service configuration files and ensuring correct precedence when merging extensions. This improves code architecture and compatibility with custom extensions.

Adds new runtime mode parameters to HttpKernel allowing developers to configure kernel behavior via APP_RUNTIME_MODE environment variable, enabling conditional logic and testing scenarios in code

[HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`

Introduces the #[AutowireIterator] attribute to enable automatic injection of iterable services into constructors and method parameters, improving type safety and simplifying dependency resolution for developers working on the Symfony DI container.

feature #51392 [DependencyInjection] add `#[AutowireLocator]` attribute (kbond)

[DependencyInjection] add `#[AutowireLocator]` attribute

[DependencyInjection] Do not add `return` in `LazyClosure` when return type of closure is `void`

Adds PHPDoc comments to improve static analysis and IDE support, providing clearer type hints and documentation for developers working on the dependency injection container

Adds type hints to public and protected properties in Symfony dependency injection containers, improving static analysis, IDE autocompletion, and preventing runtime type errors during configuration and service resolution

Adds explicit type hints to private and internal properties in Symfony&#039;s dependency injection container, improving static analysis, IDE autocompletion, and reducing runtime type errors for developers

feature #50718 [DependencyInjection] Improve reporting named autowiring aliases (nicolas-grekas)

Fixes bug #50595 in DependencyInjection, ensuring decorator attributes are correctly processed instead of being ignored; this prevents misconfiguration and improves dependency resolution reliability.

Adds explicit return type hints to Symfony magic methods, improving static analysis and IDE autocomplete, ensuring code stability and reducing runtime errors.

Add missing return types to magic methods

[7.0] Remove remaining deprecated code paths

Removed backward‑compatibility layers for new methods and parameters, simplifying the dependency injection container’s internal API and reducing potential conflicts for developers working with custom services.

Adds a &quot;defined&quot; prefix to environment variable processing in Symfony Dependency Injection, ensuring variables are only evaluated when explicitly defined, improving code safety and preventing accidental injection of undefined values.

bug #50530 [DependencyInjection] Fix support for `false` boolean env vars (Okhoshi)

Fixes a bug where Symfony DependencyInjection container incorrectly parsed boolean environment variables set to false, ensuring accurate service configuration and preventing mis‑configured services during runtime.

Adds an &quot;exclude-self&quot; option to the Dependency Injection dumpers, allowing developers to skip dumping a service&#039;s own definition in the container graph and avoid circular references or redundant data when inspecting container configurations.

Adds explicit return type hints to several service methods and interfaces, improving static analysis accuracy, IDE autocomplete, and reducing runtime errors by enforcing correct data types.

Add remaining missing return types to safe methods

Fixes a bug in Symfony DependencyInjection that caused empty environment variables to be treated as null or missing, ensuring correct injection of configuration values and preventing runtime errors when env vars are unset

Adds explicit composer requirement instructions in exception messages to help developers resolve missing dependencies quickly, improving debugging and ensuring code quality

Fixes an issue where Symfony DependencyInjection container would fail to resolve services when environment variables were empty or unset, ensuring correct service resolution and preventing runtime errors in custom components and extensions

[DependencyInjection] Fix support for inner collections when using `&lt;bind&gt;`

Adds more precise type hints to EnvVarProcessorInterface, improving static analysis and IDE support for developers working with environment variable processing logic

Adds a constructor option to #[Autoconfigure] allowing developers to specify which constructor should be used for autowiring, enhancing control over dependency injection and enabling more precise service configuration.

Adds a new constructor option to service declarations and autoconfigure attributes, enabling developers to specify custom constructors for services without relying on default autowiring; improves dependency injection flexibility and code clarity.

Introduces a new container tag &quot;container.excluded&quot; for classes that are autodiscovered but explicitly excluded from the dependency injection container, enabling developers to fine‑tune service discovery and avoid unintended automatic registration.

[DependencyInjection] Add support for `#[Autowire(lazy: class-string)]`

Adds support for the #[Autowire(lazy: true)] attribute, enabling developers to declare services as lazy-loaded closures that are instantiated only when first used, improving performance and reducing memory usage.

Adds lazy closure support to Symfony Dependency Injection, enabling services to be lazily instantiated via callable closures for better memory usage and performance when services are not immediately needed.

feature #49642 [DependencyInjection] Deprecate `#[MapDecorated]` in favor of `#[AutowireDecorated]` (nicolas-grekas)

Adds autowiring support for closures via attributes in Symfony Dependency Injection, enabling developers to define services as callable closures with type-hinted parameters and automatic injection of dependencies—simplifying service registration and improving code readability.

[DependencyInjection] Add support for autowiring services as closures using attributes

Adds support for Symfony&#039;s Exclude attribute in dependency injection, enabling developers to explicitly exclude services from autowiring and improve container configuration clarity.

Introduces a new AsAlias attribute in Symfony’s dependency injection container to allow services to be referenced by an alternative name, enhancing code readability and enabling more flexible service aliasing in custom bundles.

bug #49379 [DependencyInjection] Fix autowire attribute with nullable parameters (alamirault)

Adds explicit return type annotations to interfaces, improving static analysis and IDE support for developers working on dependency injection services.

Adds documentation for the RUNTIME_EXCEPTION_ON_INVALID_REFERENCE behavior in Symfony&#039;s Dependency Injection container, clarifying how invalid references trigger runtime exceptions and improving developer understanding of error handling in service definitions.

Adds void return type hints to methods in the dependency injection container, improving static analysis and IDE support for developers by making method signatures clearer and reducing runtime ambiguity

Adds explicit PHP return type annotations to the dependency injection container code, improving static analysis and IDE autocomplete for developers working with Symfony services

Implemented code improvements and optimizations that enhance performance and maintainability of dependency injection services, including refactoring for clearer service resolution logic and streamlined configuration handling. These changes improve static analysis accuracy and IDE support by tightening type hints and reducing runtime overhead.

Fixes a combinatory explosion bug in Symfony DependencyInjection when autowiring union and intersection types, preventing excessive memory usage and ensuring accurate service resolution during runtime

[DependencyInjection] Add missing template notation on ServiceLocator

Fixes validation of non‑scalar attribute values in Symfony DependencyInjection, preventing runtime errors when configuration arrays or objects are passed to services—ensures reliable service wiring and improves code stability

Fixes named argument support for non-autowired services in DependencyInjection, ensuring accurate constructor injection and preventing mis‑configured service definitions.

Adds a message to install symfony/config for additional debugging information, improving developer diagnostics and enabling clearer error logs during dependency injection configuration

[DependencyInjection] Fix support for named arguments on non-autowired services

Fixes a bug in Symfony DependencyInjection that prevents self‑referencing services from being included in TaggedIteratorArgument collections, ensuring correct dependency injection and preventing unexpected service resolution errors

Optimizes dependency injection compilation by reducing compile time, improving build speed and performance for developers working on services and autowiring logic.

Adds a validation check for DependencyInjection Target Attribute to ensure that if a target service is missing, the attribute throws an error instead of silently failing; this improves code reliability and helps developers catch misconfigurations during development.

[DependencyInjection] Add support for nesting autowiring-related attributes into `#[Autowire(...)]`

bug #48591 [DependencyInjection] Shared private services becomes public after a public service is accessed (alexpott)

Adds a missing type hint to Container::make(), improving static analysis and IDE autocomplete for developers using dependency injection containers.

bug #48522 [DependencyInjection] Generate different classes for ghost objects and virtual proxies (nicolas-grekas)

Introduces a new build parameter in Symfony&#039;s DependencyInjection HttpKernel component, allowing developers to customize kernel construction during tests or custom deployments; this enhances configurability and testability by exposing additional options for dependency injection.

bug #48461 [VarExporter] Fix possible memory-leak when using lazy-objects (nicolas-grekas)

Adds env and param parameters to Autowire attribute in Symfony Dependency Injection, enabling developers to inject environment variables and custom parameters directly via annotations, improving dependency resolution and code clarity.

Adds the ability to inject environment variables and parameters via the Autowire attribute in Symfony&#039;s dependency injection container, enabling developers to reference env() and param() functions directly within type hints for more flexible configuration and easier testing.

The commit removes a locator tag from the service subscriber in Symfony&#039;s dependency injection container, preventing potential mis‑configuration or conflicts with other services that rely on this tag. This change improves code quality and ensures consistent behavior when services are resolved via the DI system.

feature #47364 [DependencyInjection] Allow array attributes for service tags (aschempp)

Adds support for tagged iterators/locators with an &quot;exclude&quot; option in XML and YAML configuration files, enabling developers to fine‑tune dependency injection behavior by filtering specific services or tags during container compilation.

Adds a UnitEnum return type to the get() method, improving type safety and IDE autocomplete for developers working with dependency injection services

Removed default values from setters that accept nullable parameters, simplifying API usage and preventing unintended data persistence; improves type safety and reduces bugs in custom services.

Add a few more ??=

Adds a clear exception when an array key is set using a non‑scalar value in Symfony’s dependency injection container, improving error handling and debugging for developers working with service definitions.

Adds a new `resolve-env` option to the debug:config command in Symfony’s FrameworkBundle, enabling developers to resolve environment variables during configuration debugging. This improves command‑line tooling and aids troubleshooting of config values.

Adds a new resolve‑env option to the debug:config command, enabling developers to resolve environment variables in configuration files during debugging and improving visibility of config values.

Fixes support for lazy withers in Symfony DependencyInjection VarExporter, improving code generation and runtime behavior of services that use lazy loading, ensuring accurate serialization and debugging.

Adds a new environment processor &#039;shuffle&#039; to Symfony&#039;s DependencyInjection component, enabling developers to shuffle arrays or collections in configuration files via the &quot;env(&#039;shuffle&#039;)&quot; syntax, improving flexibility and reducing manual code changes.

Add Enum Env Var Processor

feature #46279 [DependencyInjection] Optimize autowiring logic by telling it about excluded symbols (nicolas-grekas)

feature #45834 [DependencyInjection] add AsDecorator class attribute and InnerService parameter attribute (Jean-Beru)

Adds a new attribute for AsDecorator and InnerService in Symfony&#039;s DependencyInjection component, enabling developers to annotate services with decorator behavior and inner service references, improving dependency injection configuration and code clarity.

Add missing license header

Add missing license header

Add missing license header

Simplifies bundle and extension configuration by reducing boilerplate in HttpKernel; developers can now define services with fewer config keys, improving code readability and reducing setup errors

[DependencyInjection] Add argument type `closure` to help passing closures to services

Adjusts the Autowire attribute implementation in Symfony&#039;s Dependency Injection component, improving type inference and constructor injection behavior for services, enhancing IDE support and reducing runtime errors

Introduces an Autowire parameter attribute in Symfony’s Dependency Injection component, enabling developers to explicitly control autowiring behavior for services and improve type‑hinted service injection.

Adds an Autowire parameter attribute to Symfony&#039;s Dependency Injection component, enabling developers to explicitly declare autowiring behavior on constructor parameters, improving type safety and reducing manual service configuration.

Fixes deprecation warnings in Symfony Dependency Injection for PHP 8.2, updating type hints and return types to comply with the new language features. This improves static analysis, IDE support, and prevents runtime errors during dependency resolution.

bug #45529 [DependencyInjection] Don&#039;t reset env placeholders during compilation (nicolas-grekas)

Introduces an &quot;env&quot; function into Symfony’s Dependency Injection expression language, enabling developers to inject environment variables directly in service definitions. This enhances configuration flexibility and reduces boilerplate code for accessing runtime settings.

Fixes an arbitrary limitation that prevented inline services from being excluded in dependency injection bindings, enabling developers to use custom exclusion logic for service definitions and improving flexibility of DI configuration.

Fixes a bug in Symfony&#039;s DependencyInjection component that ensures child definitions correctly inherit synthetic status when resolving, preventing unexpected behavior during container compilation and improving reliability of service injection

Fixes an incorrect type‑check in Symfony’s DependencyInjection component that prevents factory definitions from being validated correctly; developers must update their code to avoid runtime errors when using factories.

Adds an `exclude` option to Symfony’s TaggedIterator and TaggedLocator services, enabling developers to filter out specific tagged services during iteration or lookup, improving flexibility in service discovery and dependency injection logic

Implemented nullsafe operators to reduce runtime errors when accessing nested properties in dependency injection services, improving code stability and reducing debugging effort for developers

Cast tag value to string ensures consistent type handling across service definitions, preventing unexpected type mismatches and enhancing reliability of the dependency injection container

<details>
<summary><strong>Technical Details (142 commits)</strong></summary>

- `d1f7528f` bug #61940 [DependencyInjection] Register a custom autoloader to generate `*Config` classes when they don&#039;t exist yet (alexandre-daubois)
- `942cea70` feature #61885 [DependencyInjection] Handle returning arrays and config-builders from config files (nicolas-grekas)
- `b1c766ee` feature #61575 [DependencyInjection] Allow multiple `#[AsDecorator]` attributes (Jean-Beru)
- `5dc302bf` [DependencyInjection] Allow adding resource tags using any config formats
- `2d38f116` feature #61282 [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files (nicolas-grekas)
- `e9c51de0` [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files
- `900da8a4` Remove deprecated calls to deprecated methods of SplObjectStorage
- `4fdd47eb` feature #60910 [DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()` (nicolas-grekas)
- `c1ad4533` [DependencyInjection] Add argument `$target` to `ContainerBuilder::registerAliasForArgument()`
- `40d1ce56` feature #60597 [DependencyInjection][FrameworkBundle] Use php-serialize to dump the container for debug/lint commands (nicolas-grekas)
- `efbe6652` [DependencyInjection] Add better return type on ContainerInterface::get()
- `ea978909` [DependencyInjection] Add &quot;when&quot; argument to #[AsAlias]
- `14be4d92` feature #59890 [VarExporter] Leverage native lazy objects (nicolas-grekas)
- `c49796a9` [VarExporter] Fix support for hooks and asymmetric visibility
- `7613403b` [DependencyInjection] Add `Definition::addExcludedTag()` and `ContainerBuilder::findExcludedServiceIds()` for auto-discovering value-objects
- `e066329b` bug #59713 [DependencyInjection] Do not preload functions (biozshock)
- `81fbb84c` feature #59088 [DependencyInjection] Make `#[AsTaggedItem]` repeatable (alexandre-daubois)
- `0c199da6` bug #58618 [DependencyInjection] Fix linting factories implemented via __callStatic (KevinVanSonsbeek)
- `711fca56` [DependencyInjection] Fix linting factories implemented via __callStatic
- `dbd9605a` Fix newline
- `5ff5443b` [DependencyInjection] Add coverage for error cases of `LazyClosure` and `AutowireLocator`
- `e0aed947` Add PR template and auto-close PR on subtree split repositories
- `e3624507` [DependencyInjection] Add support for `key-type` in `XmlFileLoader`
- `3cc6dd96` [DependencyInjection] Add `ContainerBuilder::registerChild()` shortcut method
- `8afcdeba` Add return type to __toString() methods
- `90842582` bug #57289 [DependencyInjection] Fix phpdoc for $calls in class Autoconfigure (ThomasTr)
- `4ea20b36` [DependencyInjection] Add `#[WhenNot]` attribute
- `77f31663` Add simple tagging to phpdoc for Autoconfigure attribute
- `584b86b6` bug #54977 [DependencyInjection] Fix prepending strategy for php config loader (yceruto)
- `581fde02` bug #54908 [DependencyInjection] Fix &quot;Cannot replace arguments&quot; errors caused by ResolveAutowireInlineAttributesPass (nicolas-grekas)
- `ee8154ce` Finish implementing AutowireInline attribute
- `b9360ad6` [DependencyInjection] Add `#[AutowireInline]` attribute to allow service definition at the class level
- `4a57a11c` feature #54371 [DependencyInjection] Deprecate `#[TaggedIterator]` and `#[TaggedLocator]` (GromNaN)
- `bb3488d4` feature #54496 [Contracts] Rename ServiceSubscriberTrait to ServiceMethodsSubscriberTrait (nicolas-grekas)
- `3d5b293a` feature #54414 [DependencyInjection] Improve the error message when there is no extension to load some configuration (javiereguiluz)
- `24018f5f` feature #52843 [DependencyInjection] Prepending extension configs with file loaders (yceruto)
- `459f0552` feature #54365 [DependencyInjection] Apply attribute configurator to child classes (GromNaN)
- `0ba1fa45` Add more explicit nullable types for default null values
- `4499030e` [DependencyInjection] Add `#[AutowireMethodOf]` attribute to autowire a method of a service as a callable
- `a14d653b` [DependencyInjection] Add `CheckAliasValidityPass` to check interface compatibility
- `bdcaee0e` feature #52922 [DependencyInjection] Add Lazy attribute for classes and arguments (Tiriel)
- `7323dc15` [DependencyInjection] Add Lazy attribute for classes and arguments
- `99490fad` bug #51559 [DependencyInjection] `#[Autowire]` attribute should have precedence over bindings (HypeMC)
- `8463c3ae` [DependencyInjection] Add `ServiceCollectionInterface`
- `2791972e` [DependencyInjection][HttpKernel] Add PHPDoc to attribute classes and properties
- `f88ff642` bug #52836 [DependencyInjection] Fix parsing named autowiring aliases that contain underscores (nicolas-grekas)
- `7a699356` feature #52636 [DependencyInjection] Prepend extension config with `ContainerConfigurator` (yceruto)
- `b47cb736` feature #52369 [DependencyInjection] Add `urlencode` function to `EnvVarProcessor` (crtl)
- `90526261` [DependencyInjection] Add `urlencode` function to `EnvVarProcessor`
- `93f8509d` add argument to prepend extension config
- `0be53964` feature #52079 [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE` (nicolas-grekas)
- `22f25465` [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`
- `4b75619b` [DependencyInjection] Add `#[AutowireIterator]` attribute and improve `#[AutowireLocator]`
- `908fbc3e` feature #51392 [DependencyInjection] add `#[AutowireLocator]` attribute (kbond)
- `98b5a1e3` [DependencyInjection] add `#[AutowireLocator]` attribute
- `2bbbe701` [DependencyInjection] Do not add `return` in `LazyClosure` when return type of closure is `void`
- `b34b7642` Add some PHPDoc
- `c81d9be5` Add types to public and protected properties
- `7a349e7a` Add types to private and internal properties
- `7270e598` feature #50718 [DependencyInjection] Improve reporting named autowiring aliases (nicolas-grekas)
- `cc80120e` bug #50595 [DependencyInjection] Don&#039;t ignore attributes on the actual decorator (HypeMC)
- `a6134def` feature #50842 Add missing return types to magic methods (wouterj)
- `0be73578` Add missing return types to magic methods
- `8a96b1d7` [7.0] Remove remaining deprecated code paths
- `a23cefee` Remove BC layers related to new methods and new parameters
- `c7486f0f` [DependencyInjection] Add `defined` prefix for env var processor
- `fe27b4c1` bug #50530 [DependencyInjection] Fix support for `false` boolean env vars (Okhoshi)
- `565441e5` [DependencyInjection] Fix support for `false` boolean env vars
- `bc774563` [DependencyInjection] Add exclude-self option to dumpers
- `2a5bc2f0` Add missing return types
- `e96cb014` Add remaining missing return types to safe methods
- `8f3fb6d7` bug #50101 [DependencyInjection] Fix support for empty env vars (nicolas-grekas)
- `d4eaa047` Add &quot;composer require...&quot; in all exception messages when needed
- `a6bf304c` [DependencyInjection] Fix support for empty env vars
- `3bcb9592` [DependencyInjection] Fix support for inner collections when using `&lt;bind&gt;`
- `c983355e` Add more precise types in EnvVarProcessorInterface
- `44494c82` feature #49665 [DependencyInjection] Add `constructor` option to `#[Autoconfigure]` (alexandre-daubois)
- `2a0d5244` [DependencyInjection] Add `constructor` option to services declaration and to `#[Autoconfigure]`
- `f4c20a27` [DependencyInjection] Add container.excluded tag on classes autodiscovered but excluded
- `e0d97a93` [DependencyInjection] Add support for `#[Autowire(lazy: class-string)]`
- `b2fb6af0` [DependencyInjection] Add support for `#[Autowire(lazy: true)]`
- `bf6f4540` [DependencyInjection] Add support for generating lazy closures
- `76c40fea` feature #49642 [DependencyInjection] Deprecate `#[MapDecorated]` in favor of `#[AutowireDecorated]` (nicolas-grekas)
- `c0b83bac` feature #49628 [DependencyInjection] Add support for autowiring services as closures using attributes (nicolas-grekas)
- `9e31bf54` [DependencyInjection] Add support for autowiring services as closures using attributes
- `feae98c6` [DependencyInjection] Add support for Exclude attribute
- `6db5eaf3` feat(di): add AsAlias attribute
- `83369dd4` bug #49379 [DependencyInjection] Fix autowire attribute with nullable parameters (alamirault)
- `47f14589` Add missing return types to interfaces
- `478af369` [DependencyInjection] Add doc for RUNTIME_EXCEPTION_ON_INVALID_REFERENCE behavior
- `02e48e24` Add void return types
- `488a59bf` Add missing PHPdoc return types
- `cda5e153` Misc code improvements and optimizations
- `c42c8a12` bug #49128 [DependencyInjection] Fix combinatory explosion when autowiring union and intersection types (nicolas-grekas)
- `b649d7cb` [DependencyInjection] Add missing template notation on ServiceLocator
- `cacedfc7` bug #48958 [DependencyInjection] fixes validation of non-scalar attribute values (ju1ius)
- `1be9134d` bug #48926 [DependencyInjection] Fix support for named arguments on non-autowired services (nicolas-grekas)
- `8f144062` [DependencyInjection][DX] Add message to install symfony/config for additional debugging information
- `03b2173a` [DependencyInjection] Fix support for named arguments on non-autowired services
- `b2dfe5b4` feature #48685 [DependencyInjection] Exclude referencing service (self) in `TaggedIteratorArgument` (chalasr)
- `9063b4c7` feature #48802 [DependencyInjection] Cut compilation time (nicolas-grekas)
- `935a07af` feature #48707 [DependencyInjection] Target Attribute must fail if the target does not exist (rodmen)
- `40234848` [DependencyInjection] Add support for nesting autowiring-related attributes into `#[Autowire(...)]`
- `4fc0a1bb` bug #48591 [DependencyInjection] Shared private services becomes public after a public service is accessed (alexpott)
- `d24b892e` [DI] add missing type to Container::make()
- `96b1ef4e` bug #48522 [DependencyInjection] Generate different classes for ghost objects and virtual proxies (nicolas-grekas)
- `cf95340e` [DependencyInjection][HttpKernel] Introduce build parameters
- `bea0ae92` bug #48461 [VarExporter] Fix possible memory-leak when using lazy-objects (nicolas-grekas)
- `b418d7ab` feature #48147 [DependencyInjection] Add `env` and `param` parameters for Autowire attribute (alexndlm)
- `1fdc9115` [DependencyInjection] Add `env` and `param` parameters for Autowire attribute
- `ecb8e193` [DependencyInjection] don&#039;t move locator tag for service subscriber
- `c10b2247` feature #47364 [DependencyInjection] Allow array attributes for service tags (aschempp)
- `261cc004` [DI] Add support for tagged iterators/locators `exclude` option to xml and yaml
- `f2ddf414` Bugfix: add \UnitEnum as a result of get() method
- `e056066d` feature #38996 Remove the default values from setters with a nullable parameter (derrabus, nicolas-grekas)
- `27e42442` Add a few more ??=
- `54768a74` [DependencyInjection] Add nice exception when using non-scalar parameter as array key
- `28764950` feature #46821 [FrameworkBundle] Add `resolve-env` option to debug:config command (alexandre-daubois)
- `d58c7fc7` [FrameworkBundle] Add `resolve-env` option to debug:config command
- `28c33004` [DependencyInjection][VarExporter] Fix support for lazy withers
- `a520633c` [DependencyInjection] Add `shuffle` env processor
- `5b2b37d1` Add Enum Env Var Processor
- `869cdd64` feature #46279 [DependencyInjection] Optimize autowiring logic by telling it about excluded symbols (nicolas-grekas)
- `fffd60cf` feature #45834 [DependencyInjection] add AsDecorator class attribute and InnerService parameter attribute (Jean-Beru)
- `f1c5ba5c` [DependencyInjection] add AsDecorator class attribute and InnerService parameter attribute
- `24bd8fb5` Add missing license header
- `dc25cfd9` Add missing license header
- `74c7f55d` Add missing license header
- `5887cc6e` feature #43701 [HttpKernel] Simplifying Bundle/Extension config definition (yceruto)
- `47c2c57e` [DependencyInjection] Add argument type `closure` to help passing closures to services
- `b7acee85` [DependencyInjection] adjust `Autowire` attribute implementation
- `92edf0fe` feature #45657 [DependencyInjection] add `Autowire` parameter attribute (kbond)
- `6100cb0a` [DependencyInjection] add `Autowire` parameter attribute
- `5d0fbcdb` bug #45532 Fix deprecations on PHP 8.2 (nicolas-grekas)
- `f6d1ca0e` bug #45529 [DependencyInjection] Don&#039;t reset env placeholders during compilation (nicolas-grekas)
- `e495e558` Add an env function to DI expression language
- `bc261bb0` bug #45063 [DependencyInjection] remove arbitratry limitation to exclude inline services from bindings (nicolas-grekas)
- `0934abae` bug #44986 [DependencyInjection] copy synthetic status when resolving child definitions (kbond)
- `f182aa2f` bug #44879 [DependencyInjection] Ignore argument type check in CheckTypeDeclarationsPass if it&#039;s a Definition with a factory (fancyweb)
- `71a35111` Add `exclude` to TaggedIterator and TaggedLocator
- `7a57c7a7` Add more nullsafe operators
- `2b6a291b` [DependencyInjection] Cast tag value to string

</details>

**symfony/event-dispatcher** (v7.3.0 → v7.4.0-RC1)

Removes deprecated calls to SplObjectStorage methods, eliminating legacy code paths that could trigger runtime errors or warnings, improving static analysis and IDE support for developers working with event dispatcher internals

Adds union type support for AsEventListener, allowing developers to declare listeners as either callable objects or class instances, enhancing flexibility and type safety in event handling code

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `b0cf3162` Remove deprecated calls to deprecated methods of SplObjectStorage
- `899a660f` Add support for union types on AsEventListener

</details>

**symfony/finder** (v7.3.0 → v7.4.0-RC1)

Adds PHPDoc type hints for Finder methods, improving static analysis and IDE autocomplete, helping developers write more reliable code

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `c1a41e8e` chore(finder): add better type information using phpdoc

</details>

**symfony/http-foundation** (v4.4.34 → v7.4.0-RC1)

feature #61979 [HttpFoundation] Add `Request::set/getAllowedHttpMethodOverride()` to list which HTTP methods can be overridden (nicolas-grekas)

Adds a new property Request::$allowedHttpMethodOverride to expose which HTTP methods can be overridden via headers; this improves API clarity and allows developers to enforce stricter request handling or customize behavior in middleware.

[HttpFoundation] Make `Request::createFromGlobals()` use `request_parse_body` when possible

Adds a new #[IsSignatureValid] attribute to HttpKernel for validating request signatures, enabling developers to enforce stricter security checks and integrate custom signature validation logic into middleware or controller actions.

Fixes a bug where HttpFoundation’s DirectoryIterator incorrectly treated a file path as a directory, preventing errors during filesystem traversal and improving stability of file handling APIs

Adds improved PHPDoc type hints to Symfony HttpFoundation classes, enhancing static analysis and IDE autocomplete for developers working with request/response objects

Add global lower bounds to deps on the CI

[HttpFoundation] Fix BC Break introduces in `#61267` and structured suffix formats as constant

Adds a new MIME type mapping to HttpFoundation’s getMimeTypes() method, expanding the framework’s ability to correctly identify and handle additional file types. This enhances API reliability for developers working with media uploads and content handling.

[HttpFoundation][HttpKernel][WebProfilerBundle] Add support for the `QUERY` HTTP method

[Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations

[HttpFoundation] Add `UriSigner::verify()` that throws named exceptions

[HttpFoundation][FrameworkBundle] clock support for `UriSigner`

Updates Doctrine DBAL integration to use Table::addPrimaryKeyConstraint() in version 4.3+, ensuring compatibility with newer database schema handling and improving code reliability for developers working on migrations and entity mappings

Adds support for custom key schemes &#039;valkey:&#039; and &#039;valkeys:&#039; in the HTTP foundation’s value extraction logic, enabling developers to use more flexible configuration keys in request handling and data mapping.

Fixes a bug in IpUtils::anonymize that caused an exception when processing IPv6 link‑local addresses with RFC4007 scoping. This prevents runtime errors and improves reliability of IP anonymization logic used by Symfony components.

Fixes BinaryFileResponse to correctly handle SplTempFileObject, ensuring binary file downloads work reliably when temporary files are used; improves API stability and prevents runtime errors for developers

Adds a PR template and auto‑close functionality for subtree split repositories, enabling developers to standardize pull request workflows and automatically close stale branches after merging, improving code quality and CI integration

Bug fix updates handling of X-Accel-Redirect links in HttpFoundation; ensures correct link generation and proper failure when X-Accel-Mapping is missing, improving request routing reliability.

Introduces a new constant PRIVATE_SUBNETS to Request::setTrustedProxies(), simplifying proxy configuration for private IP ranges and improving security handling of trusted proxies in Symfony HTTP Foundation.

Adds optional $v4Bytes and $v6Bytes parameters to IpUtils::anonymize(), enabling developers to control IPv4/IPv6 anonymization granularity for custom security or compliance needs.

Adds a new constructor parameter `$requests` to RequestStack, enabling developers to inject a custom request stack instance for dependency injection and unit testing, improving code flexibility and testability.

Fixes a bug that caused HTTP headers with empty parts to be incorrectly parsed by HttpFoundation’s Request class, ensuring accurate header parsing and preventing potential security or routing issues in applications

inline variable

Fixes cache support for predis/predis:^2.0 by updating configuration handling and ensuring compatibility with newer Redis client versions, improving reliability of cache operations in Symfony applications

Defers addition of new method argument to PHP 8.0, delaying the introduction of a new parameter in a core API until compatibility with PHP 8.0 is confirmed, ensuring stable codebase for developers

Adds temporary URI signed in HTTP Foundation to allow a short‑time access token for URLs, enabling secure temporary links within Symfony framework

Adds support for \\SplTempFileObject in BinaryFileResponse to handle temporary file objects when sending binary responses, improving compatibility with newer PHP APIs and ensuring proper content‑type handling.

Introduces a new request matcher class `HeaderRequestMatcher` to the HttpFoundation component, enabling developers to match HTTP requests based on header values for more granular routing and security logic.

feature #51324 [HttpFoundation] Add `QueryParameterRequestMatcher` (alexandre-daubois)

Adds a new RequestMatcher class, QueryParameterRequestMatcher, to Symfony&#039;s HttpFoundation component, enabling developers to match requests based on specific query parameters. This enhances routing and security logic by providing fine‑grained request matching capabilities.

[HttpFoundation] Add `UploadedFile::getClientOriginalPath()` to support directory uploads

Fixes bug #52469 by checking if secrets are empty and marking them all as sensitive, ensuring proper handling of secret data in Symfony HTTPFoundation, improving security and preventing accidental exposure.

Fixes a bug in HttpFoundation that ensures string values are returned correctly when mbstring function overloading is enabled, preventing type mismatches and improving reliability of response handling

Introduces new kernel configuration keys and runtime mode parameters for Symfony&#039;s HttpKernel component. The changes provide a clearer API for setting runtime behavior, enhancing type safety and enabling developers to programmatically adjust the application&#039;s runtime state through configuration.

Adds a $flush parameter to Response::send() allowing developers to control whether headers are flushed immediately or deferred, improving response handling and enabling more efficient output buffering in custom middleware or API endpoints

Adds a new cookie handling feature in HttpFoundation that supports independent partitioned state (CHIPS), enabling developers to create and manage separate cookie domains or partitions for better isolation and security.

Adds support for root-level Generator in StreamedJsonResponse, enabling developers to stream large JSON payloads more efficiently by passing a generator at the top level instead of nested generators, improving memory usage and response performance.

Fixes a bug in Symfony&#039;s RequestStack that caused missing Request objects for StreamedResponse handling, ensuring correct request context propagation and preventing potential runtime errors when streaming responses.

[HttpFoundation] Add a slightly more verbose comment about a warning on UploadedFile

Adds explicit type hints for public and protected properties in Symfony HttpFoundation classes, improving static analysis, IDE auto‑completion, and reducing runtime errors by ensuring property values conform to expected types

Adds explicit type hints to private and internal properties, improving static analysis, IDE autocompletion, and reducing runtime type errors in Symfony’s HTTP Foundation classes.

Adds planned arguments to Crawler::innerText() and sendHeaders() methods, enhancing API flexibility and type safety for developers working with Symfony&#039;s HTTP foundation components.

[7.0] Remove remaining deprecated code paths

Removed deprecated classes and methods from HttpFoundation to clean up legacy code, improving API stability and reducing maintenance overhead for developers working with Symfony components

Added @throws annotation to getPayload method, clarifying exception handling for developers using the HttpFoundation API and enhancing IDE support

Updated UrlHelper to reflect changes in RequestContext, ensuring accurate URL generation within Symfony applications and preventing potential routing errors

Adds explicit return type declarations to several methods in the HttpFoundation component, improving static analysis, IDE auto‑completion and reducing runtime errors by enforcing expected data types

Adds explicit Composer dependency instructions in exception messages to aid developers in resolving missing library issues quickly and maintain proper package requirements

feature #49614 [HttpFoundation] add `Request::getPayload()` (kbond)

Adds a new Request::getPayload() method to HttpFoundation, providing developers with a convenient way to retrieve raw request payload data for API handling and debugging, enhancing code readability and simplifying HTTP request parsing.

bug #48972 [HttpFoundation] Fix memory limit problems in BinaryFileResponse (glady)

Fixes session handler wiring when handler_id is null in FrameworkBundle, preventing runtime errors and ensuring correct session persistence across Symfony applications

Adds IpUtils::isPrivateIp method to Symfony HttpFoundation component, providing a utility function for determining whether an IP address is private. This enhances API functionality and improves code quality by allowing developers to use this helper in request handling or security logic.

Adds a new method ParameterBag::getString() to retrieve string values from request parameters with strict type enforcement, improving API consistency and aiding static analysis tools; deprecates older behavior that accepted invalid types, ensuring developers avoid runtime errors.

Deprecates passing an invalid URI to Request::create, improving API stability and preventing unexpected request creation errors in Symfony HttpFoundation; developers must update code to avoid deprecated usage.

Adds support for HTTP status code 103 (Early Hints) and other 1xx responses in Symfony HttpFoundation, enabling developers to send early hints headers for performance optimization and ensuring proper handling of non‑standard status codes.

[HttpFoundation][HttpKernel] Add missing void PHPdoc return types

[HttpFoundation] Deprecate passing invalid URI to Request::create

Adds explicit void return type declarations to public methods in the HttpFoundation component, improving static analysis and IDE support by making method signatures clearer and preventing accidental misuse of returned values.

Adds explicit PHPdoc return types to improve static analysis and IDE support, ensuring better type safety and clearer API contracts for developers working with Symfony HTTP Foundation classes

bug #48880 [Response] `getMaxAge()` returns non-negative integer (pkruithof, fabpot)

Fixes an incorrect expiry index definition in PdoSessionHandler::configureSchema(), correcting session expiration logic and ensuring proper database schema configuration for session persistence

Injects SessionHandler into PdoSessionHandlerSchemaSubscriber to ensure proper session persistence handling in Doctrine schema migrations, fixing bug #49097 and improving stability of session management across deployments

Adds Redis Relay support for caching in Symfony HttpFoundation, enabling developers to configure a Redis-based cache backend via new configuration options and API methods, improving performance and scalability of HTTP request handling.

Adds a #[\[SensitiveParameter\u005d] annotation to the $sessionId parameter in Symfony&#039;s HttpFoundation Session class, marking it as sensitive data for static analysis and security tooling. This improves code quality by enforcing proper handling of session identifiers during serialization and logging.

Adds a new method ParameterBag::getEnum() to Symfony&#039;s HttpFoundation component, enabling developers to retrieve enum values from request parameters with type safety and improved API usability.

[HttpFoundation] Add `StreamedJsonResponse` for efficient JSON streaming

Adds a migration for the session table when using PDO handler, ensuring database consistency and compatibility across different environments; developers need to know the new table structure and migration steps to maintain session data integrity.

Creates a migration for the session table when PDO handler is used, adding database support for session persistence across requests. This changes the underlying session storage mechanism and requires developers to update or test code that interacts with sessions in this environment.

Fixes IPv4-mapped IPv6 address rejection in HttpFoundation’s IP validation logic, correcting request handling for mixed IPv4/IPv6 traffic and ensuring accurate client IP detection

Fixes IPv4-mapped IPv6 address handling in HttpFoundation, preventing incorrect rejection of valid network requests and ensuring accurate request parsing for server-side logic

The commit removes DateTime usage from the codebase, eliminating legacy date handling and simplifying the API surface for developers. It reduces potential bugs related to timezone inconsistencies and improves type safety by avoiding deprecated classes.

Add a few more ??=

feature #47595 [HttpFoundation] Extract request matchers for better reusability (fabpot)

Prevents BinaryFileResponse::prepare from adding a Content-Type header when no content is sent, ensuring accurate HTTP responses and avoiding unnecessary headers that could cause MIME type mismatches or misinterpretation by clients. This fix improves API reliability and reduces potential bugs in file download handling.

Removes default values from setters that accept nullable parameters, simplifying method signatures and eliminating unintended defaults. This change improves code clarity, reduces side‑effects, and ensures consistent behavior when null is passed.

Add missing return type

Introduces PeekableRequestRateLimiterInterface to enable more granular rate‑limit checks and reduces cache writes in LoginThrottlingListener, improving performance and code clarity for developers working on security features

bug #46957 [HttpFoundation] Fix `\Stringable` support in `InputBag::get()` (chalasr)

Adds a comment describing the regex used for session ID extraction in HttpFoundation, improving code readability and aiding developers when debugging or extending session handling logic

Fixes a TypeError caused by accessing $_SESSION when it is null in NativeSessionStorage::save(), preventing runtime errors and improving session handling reliability

Update Response.php

feature #46491 Introduce FlashBagAwareSessionInterface (VincentLanglet)

Introduces a FlashBagAwareSessionInterface that extends Symfony’s Session interface to expose flash messages via an API method, enabling developers to implement custom session handling and integrate flash notifications into application logic.

Adds a stale‑while-revalidate cache header to HttpFoundation’s Response class, enabling HTTP caching with &quot;max-age&quot; and &quot;stale-while-revalidate&quot; directives for improved server performance and client-side freshness handling.

Fixes PHP 8.1 deprecation in Symfony HttpFoundation Response::isNotModified method, removing deprecated &#039;getContent&#039; usage and updating type hints for improved compatibility and static analysis

Adds HTTP cache headers for stale-while-revalidate and stale-if-error handling, improving caching behavior and reducing server load by allowing clients to use cached responses while revalidation occurs or when errors happen

Restoring the return type to covariant IteratorAggregate implementations ensures that type hints for iterables are correctly aligned with PHP 8.1’s covariance rules, improving static analysis accuracy and IDE autocomplete for developers working with custom iterator classes.

Adds nullsafe operators to improve code safety and reduce potential null reference errors in Symfony HTTP Foundation classes, enhancing static analysis and IDE support for developers

Adds Laravel as a backer to the README, documenting that the Symfony HttpFoundation component is compatible with Laravel, which helps developers understand integration possibilities and maintain compatibility across frameworks.

<details>
<summary><strong>Technical Details (91 commits)</strong></summary>

- `b49cc7d1` feature #61979 [HttpFoundation] Add `Request::set/getAllowedHttpMethodOverride()` to list which HTTP methods can be overridden (nicolas-grekas)
- `e9b1d43b` [HttpFoundation] Add `Request::$allowedHttpMethodOverride` to list which HTTP methods can be overridden
- `f9b8417c` [HttpFoundation] Make `Request::createFromGlobals()` use `request_parse_body` when possible
- `155a7afc` [HttpKernel] Add `#[IsSignatureValid]` attribute
- `034d5d53` [HttpFoundation] Handle error when directory is a file
- `3eef5d4f` chore(http-foundation): add better type information using phpdoc
- `3a978ec5` Add global lower bounds to deps on the CI
- `73c7f621` [HttpFoundation] Fix BC Break introduces in `#61267` and structured suffix formats as constant
- `034e4829` [HttpFoundation] Add new MIME type mappings to `getMimeTypes()``
- `698bc94b` [HttpFoundation][HttpKernel][WebProfilerBundle] Add support for the `QUERY` HTTP method
- `ce39711e` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
- `5a69e812` [HttpFoundation] Add `UriSigner::verify()` that throws named exceptions
- `54169d58` [HttpFoundation][FrameworkBundle] clock support for `UriSigner`
- `371272ae` use Table::addPrimaryKeyConstraint() with Doctrine DBAL 4.3+
- `ce130081` Add support for `valkey:` / `valkeys:` schemes
- `e8fdc476` [HttpFoundation] Fixed `IpUtils::anonymize` exception when using IPv6 link-local addresses with RFC4007 scoping
- `40f90f68` Fix support for \SplTempFileObject in BinaryFileResponse
- `a5509aa5` Add PR template and auto-close PR on subtree split repositories
- `a414c5d0` bug #58181 [HttpFoundation] Update links for `X-Accel-Redirect` and fail properly when `X-Accel-Mapping` is missing (nicolas-grekas)
- `981886d0` [HttpFoundation] Add `PRIVATE_SUBNETS` as a shortcut for private IP address ranges to `Request::setTrustedProxies()`
- `1579e3df` [HttpFoundation] Add optional `$v4Bytes` and `$v6Bytes` parameters to `IpUtils::anonymize()`
- `33500b25` [HttpFoundation] Add `$requests` parameter to `RequestStack` constructor
- `53be8698` bug #54910 [HttpFoundation]  filter out empty HTTP header parts (xabbuh)
- `81079173` inline variable
- `fd44aca7` [Cache] Fix support for predis/predis:^2.0
- `00a2d6e6` defer addition of new method argument to 8.0
- `0f0e9846` [HttpFoundation] Add temporary URI signed
- `ea298089` [HttpFoundation] Add support for `\SplTempFileObject` in `BinaryFileResponse`
- `b8b928ea` [HttpFoundation] Add `HeaderRequestMatcher`
- `437b61da` feature #51324 [HttpFoundation] Add `QueryParameterRequestMatcher` (alexandre-daubois)
- `170cea4f` [HttpFoundation] Add `QueryParameterRequestMatcher`
- `50741a90` [HttpFoundation] Add `UploadedFile::getClientOriginalPath()` to support directory uploads
- `e0905cd4` bug #52469 Check whether secrets are empty and mark them all as sensitive (nicolas-grekas)
- `f84fd4fd` bug #52474 [HttpFoundation] ensure string type with mbstring func overloading enabled (xabbuh)
- `f98c1774` [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`
- `2970be3a` [HttpFoundation] Add $flush parameter to Response::send()
- `f1bbd8f7` feature #52002 [HttpFoundation] Cookies Having Independent Partitioned State (CHIPS) (fabricecw)
- `5ac0202c` feature #51538 [HttpFoundation] Support root-level Generator in StreamedJsonResponse (Jeroeny)
- `0d670583` bug #51396 [HttpKernel] Fix missing Request in RequestStack for StreamedResponse (Ismail Turan)
- `da86b7d1` [HttpFoundation] Add a slightly more verbose comment about a warning on UploadedFile
- `0748393b` Add types to public and protected properties
- `3470e286` Add types to private and internal properties
- `9c6db4d7` [HttpFoundation][DomCrawler] Add planned arguments to Crawler::innerText() and sendHeaders() methods
- `63de87e4` [7.0] Remove remaining deprecated code paths
- `a3ac5f62` [HttpFoundation] Remove deprecated classes, method and behaviors
- `cdcec48c` add @throws to getPayload
- `3c59f97f` UrlHelper is now aware of RequestContext changes
- `4e2744b1` Add missing return types
- `53137367` Add &quot;composer require...&quot; in all exception messages when needed
- `a3ada8b9` feature #49614 [HttpFoundation] add `Request::getPayload()` (kbond)
- `622df585` [HttpFoundation] add `Request::getPayload()`
- `d9afb27e` bug #48972 [HttpFoundation] Fix memory limit problems in BinaryFileResponse (glady)
- `05cd1acd` bug #49745 [FrameworkBundle] Fix wiring session.handler when handler_id is null (nicolas-grekas)
- `3665b191` [HttpFoundation] Add IpUtils::isPrivateIp
- `94e1832a` [HttpFoundation] Add `ParameterBag::getString()` and deprecate accepting invalid values
- `612a5aaa` bug #49376 [HttpFoundation] Deprecate passing invalid URI to Request::create (neclimdul)
- `bdd8f1bb` [HttpFoundation] Add support for the 103 status code (Early Hints) and other 1XX statuses
- `97bf9bbd` [HttpFoundation][HttpKernel] Add missing void PHPdoc return types
- `153d1f3c` [HttpFoundation] Deprecate passing invalid URI to Request::create
- `e29fb65d` Add void return types
- `968650f5` Add missing PHPdoc return types
- `ba0cd9ad` bug #48880 [Response] `getMaxAge()` returns non-negative integer (pkruithof, fabpot)
- `aa1a5606` bug #49172 [HttpFoundation] Fix defining expiry index in PdoSessionHandler::configureSchema() (nicolas-grekas)
- `fad43be1` bug #49097 [HttpFoundation] inject SessionHandler in PdoSessionHandlerSchemaSubscriber (alli83)
- `cde7c2f6` feature #48930 [Cache] Add Redis Relay support (ostrolucky)
- `5bd0835d` Add #[\SensitiveParameter] to $sessionId
- `aaec42a9` feature #48820 [HttpFoundation] ParameterBag::getEnum() (nikophil)
- `5018a632` [HttpFoundation] Add `StreamedJsonResponse` for efficient JSON streaming
- `cb230022` feature #48059 [HttpFoundation] Create migration for session table when pdo handler is used (alli83)
- `003bfc1e` [HttpFoundation] Create migration for session table when pdo handler is used
- `1120e76f` bug #48421 [HttpFoundation] IPv4-mapped IPv6 addresses incorrectly rejected (bonroyage)
- `d7ea9932` [HttpFoundation] IPv4-mapped IPv6 addresses incorrectly rejected
- `6d0b296a` feature #47730 Ban DateTime from the codebase (WebMamba)
- `35c48a01` Add a few more ??=
- `4711bd05` feature #47595 [HttpFoundation] Extract request matchers for better reusability (fabpot)
- `7acdc97f` [HttpFoundation] Prevent BinaryFileResponse::prepare from adding content type if no content is sent
- `52010f0e` feature #38996 Remove the default values from setters with a nullable parameter (derrabus, nicolas-grekas)
- `07ca6afe` Add missing return type
- `aae68c61` Add PeekableRequestRateLimiterInterface and fix the LoginThrottlingListener to reduce amount of writes on the cache backend, fixes #40371
- `69302fb4` bug #46957 [HttpFoundation] Fix `\Stringable` support in `InputBag::get()` (chalasr)
- `ba476eb9` [HttpFoundation] Add session ID regex comment
- `a51316cb` bug #46808 [HttpFoundation] Fix TypeError on null `$_SESSION`  in `NativeSessionStorage::save()` (chalasr)
- `7df4d41e` Update Response.php
- `36b53991` feature #46491 Introduce FlashBagAwareSessionInterface (VincentLanglet)
- `b1fda6b7` Introduce FlashBagAwareSessionInterface
- `92e5c4d6` feature #45166 [HttpFoundation] add stale while revalidate cache header (remieuronews)
- `60e8e42a` bug #45631 [HttpFoundation] Fix PHP 8.1 deprecation in `Response::isNotModified` (HypeMC)
- `d4a5ed1a` [cache] #45109 add stale while revalidate and stale if error cache header
- `0ea92fb4` Restore return type to covariant IteratorAggregate implementations
- `98398d0f` Add more nullsafe operators
- `27b26aa8` [HttpFoundation] Add Laravel as a backer to the README

</details>

**symfony/http-kernel** (v4.4.35 → v7.4.0-RC2)

Fixes StreamedResponse chunk handling in HttpKernelBrowser, ensuring streamed responses are correctly buffered and sent in chunks, improving HTTP response reliability for developers working with large data streams.

[HttpKernel] Add `KernelInterface::getShareDir()`, `APP_SHARE_DIR` and `%kernel.share_dir%` to store application data that are shared between all front-end servers

feature #62027 [DebugBundle][HttpKernel] Collect dumps when console profiling is enabled (HypeMC)

Refines the Vary header logic in HttpKernel to correctly skip special handling of &#039;Accept-Language&#039; when it only appears, improving HTTP caching behavior and ensuring accurate response headers for applications that rely on language-specific content.

Removed the ability to configure a signer with the IsSignatureValid attribute, simplifying the signature validation workflow and reducing configuration complexity for developers working on request handling

Introduced the #[IsSignatureValid] attribute in HttpKernel, enabling developers to annotate controller actions or middleware with a declarative signature check, improving code readability and security enforcement

Fixed bug #61518 related to handling an array variation of the HTTP cache header in HttpKernel’s cache store write operation, ensuring correct caching behavior for developers and developers‑in‑use

Fixes a bug in HttpKernel where MapUploadedFile throws an HTTP exception when an empty files array is passed to a non‑nullable argument without default value, preventing runtime errors during file uploads and improving API reliability.

Adds support for the QUERY HTTP method to Symfony&#039;s HttpKernel, expanding the framework’s request handling capabilities and allowing developers to create custom routes or middleware that can process query‑based requests without altering existing code.

Deprecates the use of __sleep and __wakeup methods on AbstractPart implementations, removing legacy serialization hooks that may cause unexpected behavior in PHP 8.1+ and improving code quality by enforcing consistent serialization practices

Deprecates use of __sleep and __wakeup methods in GenericMetadata implementations, removing legacy serialization hooks that may cause unexpected behavior or security issues; developers should update code to avoid these deprecated patterns and maintain compatibility with future Symfony releases.

[String] Deprecate implementing `__sleep/wakeup()` on string implementations

Deprecated SplObjectStorage methods removed to improve code quality and static analysis support; developers will avoid legacy API usage and ensure future compatibility

Fixes the #[MapUploadedFile] attribute handling for optional file uploads in HttpKernel, ensuring correct mapping of nullable files and preventing runtime errors during form processing

bug #60606 [HttpKernel] Fix Symfony 7.3 end of maintenance date (axzx)

Adds a waiting trace in HttpCache when the cache is locked, improving debugging visibility for developers working on caching logic and performance tuning.

Adds a `waiting` trace to HttpCache when the cache is locked, improving debugging and visibility of cache contention issues for developers working with Symfony’s HTTP caching system.

Remove always-true condition

Adds a new route parameter alias syntax `{foo:bar}` to Symfony&#039;s routing system, allowing developers to define custom aliases for route parameters and simplify route definitions.

Adds an alias syntax for route parameters in Symfony routing configuration, enabling developers to use a concise `{foo:bar}` format when defining routes. This improves readability and reduces boilerplate code in route definitions.

Introduces a new VarExporter feature that leverages native lazy objects to improve performance and memory usage when exporting variables in Symfony&#039;s HTTP kernel; this change enhances code quality by reducing unnecessary eager loading of data, making developers more efficient when debugging or profiling.

feature #60020 [FrameworkBundle] Make `ServicesResetter` autowirable (lyrixx)

[FrameworkBundle] Add alias `ServicesResetter` for `services_resetter` service

Open doc in new page in default page

Adds Monolog configuration to automatically create log directories in readonly containers, simplifying container setup and ensuring logs are correctly stored without manual file system changes

[Cache][HttpKernel] Add a `noStore` argument to the `#` attribute

[HttpKernel] [MapQueryString] added key argument to MapQueryString attribute

The commit updates the HttpKernel to allow Monolog to automatically create the log folder if it does not exist, ensuring logs are written without manual directory setup and preventing runtime errors.

Finetuned the AboutCommand in FrameworkBundle to improve command execution logic and error handling, enhancing code quality and ensuring consistent behavior across deployments

Fixes incorrect merging of HTTP cache headers (max‑age, s‑maxage, Expires) in HttpKernel, ensuring proper caching behavior and preventing stale content delivery; this improves code correctness and reliability for developers.

feature #58366 [HttpKernel] Improve accessibility (javiereguiluz)

Adds a PR template and auto‑closing logic for subtree split repositories, improving CI workflow consistency and code review automation in Symfony projects.

[FrameworkBundle][HttpKernel] Add support for `SYMFONY_TRUSTED_PROXIES`, `SYMFONY_TRUSTED_HEADERS`, `SYMFONY_TRUST_X_SENDFILE_TYPE_HEADER` and `SYMFONY_TRUSTED_HOSTS` env vars

Explicitly escapes CSV characters in the kernel’s response handling, preventing malformed data and ensuring correct parsing for downstream services that consume CSV output

[HttpKernel] Fix method naming collision

Adds a new feature to RequestPayloadValueResolver so that it can resolve arguments based on mapped argument types, improving type resolution and enabling better dependency injection in Symfony HTTP Kernel

Uses a new method to create mock objects for testing, improving test code quality and debugging capability

Remove the @internal flag and add @final class designates that the ServicesResetter is fully implemented and final; this may improve static analysis and IDE support.

Introduces a new route parameter mapping syntax `{foo:bar}` in Symfony HTTP Kernel routing configuration, enabling developers to bind request attributes directly to route parameters and simplifying controller logic. This change updates the Route class API and affects how routes are parsed and matched.

Adds a new route parameter syntax `{foo:bar}` that maps a route param to a request attribute, enabling developers to write cleaner routing definitions and improve request handling consistency.

Deprecates the PHP attributes #[TaggedIterator] and #[TaggedLocator], removing these legacy tags from the DependencyInjection system. This change updates the DI API, affecting code that uses these attributes for service discovery and ensuring future compatibility with newer Symfony versions.

Adds a MapUploadedFile attribute to Symfony’s HttpKernel component, enabling developers to map uploaded file objects into request attributes for easier handling of file uploads in controllers and services.

Deprecates the AddAnnotatedClassesToCachePass and related infrastructure, removing legacy code that may interfere with caching mechanisms and future extensions; developers must update their cache configurations and remove references to this pass to maintain compatibility.

Prepending extension configurations via file loaders allows developers to control the order of configuration loading, enabling precise dependency injection behavior and ensuring that custom extensions can override defaults without unexpected side effects.

Adds explicit nullable type hints for default null values in several Symfony HTTP kernel classes, improving static analysis and IDE autocomplete, reducing runtime errors caused by unexpected nulls

Adds a context parameter to CamelCaseToSnakeCaseNameConverter, enabling more flexible name conversion during serialization and improving API compatibility with new naming conventions.

Adds a context parameter to enforce snake_case naming conventions in Symfony’s HTTP kernel, improving consistency and readability of code across the platform.

feature #54153 [HttpKernel] allow boolean argument support for MapQueryString (Jean-Beru)

[HttpKernel] allow boolean argument support for MapQueryString

[DependencyInjection] Add `#[AutowireMethodOf]` attribute to autowire a method of a service as a callable

bug #53985 [HttpKernel] Allow tagged controllers in ControllerResolver (marein)

Adds missing self‑closing tags on link elements to improve HTML output quality and prevent rendering issues in templates; ensures consistent markup for developers using Twig or PHP components.

[DependencyInjection][HttpKernel] Add PHPDoc to attribute classes and properties

Adds support for custom HTTP status codes via #[MapQueryParameter] attribute, enabling developers to map query parameters to specific response statuses and improving API flexibility.

[HttpKernel] Add support for custom HTTP status code for the MapQueryParameter attribute

[HttpKernel] Add `HttpException::fromStatusCode()`

Fixes a bug in HttpKernel that prevents validation of partially denormalized objects during request handling, improving data integrity and preventing runtime errors when processing complex payloads

bug #52886 [HttpKernel] Catch `TypeError` if the wrong type is used in `BackedEnumValueResolver` (alexandre-daubois)

document added method in the changelog rather than the upgrade files

Introduces ExceptionEvent::isKernelTerminating() to allow developers to detect when the kernel is shutting down and skip error rendering, improving exception handling logic and preventing unwanted output during shutdown.

Introduces a new method `ExceptionEvent::isKernelTerminating()` to allow developers to detect when the Symfony kernel is shutting down during an exception, enabling more precise control over error rendering and graceful shutdown logic.

add argument to prepend extension config

Adds a new ControllerResolver method `allowControllers()` to specify which callables are considered legitimate controllers, enabling stricter controller validation and improving code safety by preventing accidental invocation of non‑controller functions.

Introduces a new method ControllerResolver::allowControllers() to explicitly define which callables are considered legitimate controllers, enabling stricter controller validation and improving security by preventing accidental execution of non‑controller code.

feature #52079 [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE` (nicolas-grekas)

[HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`

Adds a missing class alias to satisfy autoloading, ensuring that referenced classes can be resolved during runtime and preventing fatal errors caused by unresolved class names in the Symfony HTTP Kernel

feature #51470 [FrameworkBundle][Serializer] Deprecate annotations (alexandre-daubois)

Introduces a new `$buildDir` argument to the `WarmableInterface::warmup` method in the HttpKernel framework, enabling developers to specify a directory for warm‑read‑only artefacts during kernel warm‑up. This change expands the API surface and requires code updates where warm-up logic is used.

[DependencyInjection] Add `#[AutowireIterator]` attribute and improve `#[AutowireLocator]`

Adds support for the logical negation operator &quot;!&quot; in URL filter expressions within WebProfilerBundle, enabling developers to write more expressive filter queries and improving debugging capabilities.

Removed deprecated Kernel::stripComment() method to improve code quality and maintainability; developers will no longer need to handle legacy comment stripping logic and can rely on updated API behavior

Removed support for Twig 2, eliminating legacy code paths and simplifying the kernel’s rendering logic; developers must update templates to use Twig 3 syntax or upgrade dependencies, ensuring compatibility with newer Symfony components.

feature #51425 [FrameworkBundle][Validator] Deprecate annotation occurrences (alexandre-daubois)

feature #51392 [DependencyInjection] add `#[AutowireLocator]` attribute (kbond)

[DependencyInjection] add `#[AutowireLocator]` attribute

Fixes a bug where RequestStack was missing the Request object when handling StreamedResponse in HttpKernel, preventing potential null‑reference errors and ensuring correct request context for streamed responses.

Add 2 recently missing return types

Adds support for backed enums in #[MapQueryParameter] annotations, enabling developers to map query parameters directly to enum types without manual conversion and improving type safety in controller actions

Adds PHPDoc comments to improve code readability and IDE support for developers working on Symfony HttpKernel components.

Fixes HTML form rendering by removing self‑closing slash from &lt;input&gt; tags, ensuring compatibility with browsers that parse XHTML differently and improving consistency across templates.

[HttpKernel] Add `reset()` implementation in DataCollector

Adds support for custom HTTP status codes in RequestPayloadValueResolver, enabling developers to set specific response codes via request payloads and improving API flexibility and error handling.

Enhances exception handling in HttpKernel by adding more detailed error information and potential stack traces, improving debugging and API reliability for developers

Adds explicit type hints to public and protected properties, enabling static analysis tools and IDEs to detect type mismatches and improve code quality for developers

Add types to private and internal (in‑internal) public/private …????????..??...?????…??????……???…???...

Fixes bug in HttpKernel&#039;s WebProfilerBundle search feature, improved search functionality and bug‑relevant error handling for developers

Adds native return type declarations to kernel methods, improving static analysis and IDE support for Symfony 7 compatibility

Adds missing return types to magic methods in the HTTP kernel, enhancing type safety and IDE auto‑completion for developers

The w ? … … ? — ... ..???…??……?????...

Remove ...??? ...……………………..?

Documented breaking changes for backward compatibility, informing developers about API alterations and required adjustments to maintain functionality

Removed legacy BC layers related to new methods and parameters, simplifying codebase and ensuring future compatibility

Added missing return types and enforce all method return type hints, improving static analysis, IDE support and code quality

Adding optional $className param … ...

Fixes bug that prevented lazy services from being initialized during a services reset in HttpKernel, ensuring proper service lifecycle and avoiding potential runtime errors or memory leaks.

Fixes incorrect handling of MapRequest* attributes in HttpKernel, ensuring request mapping and routing work correctly when custom request attributes are set; this resolves bugs that could affect API behavior and routing logic

Adds explicit return type declarations to functions and methods, improving static analysis, IDE auto‑completion, and preventing runtime type errors in Symfony HTTP Kernel.

Adds explicit Composer dependency instructions in exception messages to aid developers in resolving missing packages, improving debugging and ensuring correct runtime dependencies

Enhances MapQueryString to validate query string keys against a validation group, adding stricter type checks and improving API reliability for developers working with request data

Adds missing return types to Symfony VarDumper components, improving static analysis and IDE autocomplete for developers working with debugging utilities

Introduces two new request mapping attributes #[MapRequestPayload] and #[MapQueryString], enabling developers to automatically map HTTP request data into typed objects for cleaner controller logic and better type safety.

Introduces pinnable value resolvers via #[ValueResolver] and #[AsPinnedValueResolver] annotations, enabling developers to create custom resolver classes that can be pinned for deterministic resolution in Symfony’s HttpKernel. This adds new API hooks, improves type safety, and enhances dependency injection flexibility.

Adds explicit void return type annotations to HttpFoundation and HttpKernel methods, improving static analysis, IDE autocomplete, and code quality for developers working on the framework.

[HttpKernel] Introduce pinnable value resolvers with `#[ValueResolver]` and `#[AsPinnedValueResolver]`

Adds a new option `skip_response_headers` to HttpCache, allowing developers to control which HTTP response headers are cached or skipped, improving cache behavior and enabling finer‑grained caching logic in Symfony applications.

Adds explicit return type declarations to Symfony HTTP Kernel interfaces, improving static analysis, IDE autocompletion and ensuring stricter type safety across the framework. This change enhances code quality and helps developers avoid runtime type errors.

Adds explicit void return types to methods and functions, improving static analysis, IDE autocompletion and ensuring consistent behavior across the kernel.

Add PHP types to private methods and functions

Add missing PHPdoc return types

feature #49193 [Security] Return 403 instead of 500 when no firewall is defined (nicolas-grekas)

bug #48880 [Response] `getMaxAge()` returns non-negative integer (pkruithof, fabpot)

feature #48747 [HttpKernel] Allow using `#[WithLogLevel]` for setting custom log level for exceptions (angelov)

Introduces a new #[HttpStatus] attribute to set HTTP status codes and headers on exceptions, enhancing API flexibility and enabling developers to customize error responses via annotations

Introduces build parameters for Symfony HttpKernel’s DependencyInjection container, enabling developers to customize kernel behavior during compilation and improve code quality through clearer configuration options.

Adds a default file link format in FileLinkFormatter to prevent null formatting errors and improve API consistency for developers using the HTTP kernel component.

bug #48346 [HttpKernel] In DateTimeValueResolver, convert previously defined date attribute to the expected class (GromNaN)

Implemented Logger to conform to DebugLoggerInterface, enabling debug logging features and improving compatibility with Symfony&#039;s debugging tools. This change enhances code quality by aligning logger behavior with the expected interface and supports static analysis and IDE tooling.

Implemented DebugLoggerInterface on Logger to provide debug-level logging support and better integration with Symfony’s debugging tools, improving code quality and IDE compatibility for developers

Adds a request attribute `_handle_all_throwables` to HttpKernel, enabling it to process thrown Errors in addition to Exceptions, improving error handling consistency and ensuring all runtime errors are captured during request lifecycle.

Fixes an empty request stack bug that occurs when terminating with an exception in HttpKernel, preventing crashes and ensuring correct request handling during error scenarios

feature #47730 Ban DateTime from the codebase (WebMamba)

Removed default values from setters that accept nullable parameters, simplifying API usage and preventing unintended defaults in object state. This change improves type safety, reduces bugs caused by implicit value assignments, and enhances IDE auto‑completion support.

Add a few more ??=

Adds a missing allowed interface to HttpKernel, ensuring proper type checking and preventing runtime errors when handling kernel events, improving code stability and IDE support.

Replaces SHA-256 with xxh128 hashing for HTTP cache store keys, improving performance and reducing key size while maintaining security; developers will see a change in the CacheKeyGenerator implementation and updated documentation.

Adds an option to render Surrogate fragments with absolute URIs in HttpKernel, enabling developers to generate fragment URLs that are fully resolved and can be cached or requested independently, improving API flexibility and caching behavior.

Fixes a bug in HttpKernel’s surrogate fragment renderer that incorrectly checks for non‑scalar values, preventing runtime errors when rendering fragments with complex data structures and improving stability of the HTTP kernel.

Adds an option to render Surrogate fragments with absolute URIs in HttpKernel, enabling developers to control how surrogate content is referenced and improving API flexibility for caching and CDN integration

feature #46752 [DependencyInjection] Use lazy-loading ghost object proxies out of the box (nicolas-grekas)

Adds a #[Cache()] attribute to controllers in HttpKernel, enabling automatic generation of HTTP cache headers (Expires, Cache-Control) and improving response caching for developers who build custom controller logic and need predictable caching behavior.

Adds a #[Cache] attribute to controller classes in Symfony&#039;s HttpKernel, enabling developers to declaratively set default HTTP cache headers (e.g., Cache-Control, Expires) for responses. This improves code readability and allows static analysis tools to understand caching behavior.

[TwigBridge] Add `#[Template()]` to describe how to render arrays returned by controllers

Adds a new method `ControllerEvent::getAttributes()` to the HttpKernel event API, enabling developers to retrieve controller attributes directly from the event object and simplifying attribute handling in custom middleware or listeners.

feature #46763 [HttpCache] Do not call terminate() on cache hit (Toflar)

Adds a deprecation warning for HttpKernel::handle() to alert developers that this method will now catch throwables instead of throwing them directly, improving error handling and aligning with Symfony&#039;s evolving exception strategy.

Extends DoctrineBridge type guessing for enum fields, improving automatic mapping of database enum values to PHP types and enhancing IDE support and static analysis for developers

Optimizes autowiring logic by excluding specific symbols from Symfony&#039;s Dependency Injection container, improving performance and reducing unintended service injection for developers working on custom services

Introduces a new bundle path convention for AbstractBundle classes, altering how bundles are discovered and loaded by Symfony&#039;s kernel. This change affects bundle registration, autoloading paths, and the internal logic of bundle discovery, requiring developers to update their bundle definitions and adjust any custom code that references bundle paths.

Updates the HttpKernel ErrorHandler to include a favicon link tag, altering template rendering logic and ensuring compatibility with front‑end assets

Adds missing license header in code files, ensuring compliance with open source licensing requirements and maintaining code quality

Bug fix for #45394: re‑use existing session ID when the to‑be‑tapped ??? ...

Add missing license header

feature #45512 [DependencyInjection] Allow using expressions as service factories (nicolas-grekas, jvasseur)

[HttpKernel] Add Http Status 423 LockedHttpException

Introduces a DateTimeValueResolver to handle datetime values in HTTP requests and responses, enhancing type safety and consistency across kernel components, enabling developers to rely on proper date parsing and formatting

Adds a DateTimeValueResolver to the Symfony HttpKernel, enabling automatic conversion of string date/time values into DateTime objects when resolving controller arguments, improving type safety and reducing manual parsing in controllers.

Adjusts the implementation of the Autowire attribute in Symfony’s Dependency Injection component, refining how services are automatically wired by type and name, improving code clarity and reducing potential injection errors.

Adds a new Autowire parameter attribute to Symfony’s DependencyInjection component, enabling developers to explicitly mark constructor arguments for automatic dependency injection without needing type hints or service tags. This improves code readability and reduces boilerplate configuration.

Adds generic type support to ArgumentMetadata::getAttributes, enabling static analysis tools and IDEs to infer attribute types, improving code quality and reducing runtime errors

Introduces a new Autowire parameter attribute to Symfony&#039;s DependencyInjection component, enabling developers to explicitly declare autowiring behavior for services and improving type‑hinted service resolution and IDE support.

Introduces a new UidValueResolver argument value resolver that expands Symfony&#039;s controller argument resolution capabilities by allowing controllers to receive a UID object directly from request parameters, enhancing type safety and reducing boilerplate code.

[HttpKernel] Add Profiler::isEnabled() method

Fixes a bug in HttpKernel that incorrectly extracts controller names from closures, ensuring accurate routing and controller resolution for custom Symfony actions, improving code reliability and preventing unexpected errors

[HttpKernel] Add a controller argument resolver for backed enums

Relaxes the return type of the memory data collector in WebProfilerBundle to allow more flexible handling of memory statistics, improving type safety and IDE support for developers working with profiler data

Adds null-safe operators to improve code safety and reduce runtime errors when accessing nested properties or methods in Symfony&#039;s HttpKernel components, enhancing static analysis support and IDE autocomplete

Fixes how log-level and status-code are set when an exception is thrown, ensuring correct error handling and accurate HTTP responses in Symfony&#039;s HttpKernel component.

feature #44483 [HttpKernel][WebProfilerBundle] adding xdebug_info page to webprofilerbundle (chr-hertel)

Adds a new Xdebug information page to the WebProfilerBundle, exposing detailed debugging data for developers and improving diagnostic capabilities during development.

<details>
<summary><strong>Technical Details (160 commits)</strong></summary>

- `a369024f` bug #62036 [HttpKernel] Fix StreamedResponse with chunks support in HttpKernelBrowser (wuchen90)
- `de4e609f` [HttpKernel] Add `KernelInterface::getShareDir()`, `APP_SHARE_DIR` and `%kernel.share_dir%` to store application data that are shared between all front-end servers
- `b762004c` feature #62027 [DebugBundle][HttpKernel] Collect dumps when console profiling is enabled (HypeMC)
- `6b9ab1a0` bug #61368 [HttpKernel] Refine Vary header check to skip special handling of &#039;Accept-Language&#039; when it&#039;s the only entry and &#039;_vary_by_language&#039; is `true`  in `CacheAttributeListener` (santysisi)
- `4e1be73e` drop the ability to configure a signer with the IsSignatureValid attribute
- `e129d986` [HttpKernel] Add `#[IsSignatureValid]` attribute
- `5be86590` bug #61518 [HttpKernel] Handle an array vary header in the http cache store for write (philpichet)
- `50e7be24` bug #61381 [HttpKernel] #[MapUploadedFile] throws http exception on empty files array if argument not nullable nor has default value (hwawshy)
- `0760fd3d` [HttpFoundation][HttpKernel][WebProfilerBundle] Add support for the `QUERY` HTTP method
- `2d616d7e` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
- `af063f57` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
- `8beb7e94` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
- `d77a209c` Remove deprecated calls to deprecated methods of SplObjectStorage
- `6a1e3e2c` bug #60483 [HttpKernel] Fix `#[MapUploadedFile]` handling for optional file uploads (santysisi)
- `bd1f1209` bug #60606 [HttpKernel] Fix Symfony 7.3 end of maintenance date (axzx)
- `848967c2` feature #60498 [HttpCache] Add a `waiting` trace when finding the cache locked (mpdude)
- `6bfa92c8` [HttpCache] Add a `waiting` trace when finding the cache locked
- `5617b2e2` Remove always-true condition
- `cc168c04` feature #59904 [Routing] Add alias in `{foo:bar}` syntax in route parameter (eltharin)
- `aa58e499` [Routing] Add alias in `{foo:bar}` syntax in route parameter
- `fb1bc05b` feature #59890 [VarExporter] Leverage native lazy objects (nicolas-grekas)
- `3600aecd` feature #60020 [FrameworkBundle] Make `ServicesResetter` autowirable (lyrixx)
- `84b25e32` [FrameworkBundle] Add alias `ServicesResetter` for `services_resetter` service
- `2ec3b84c` Open doc in new page in default page
- `e57e3fe8` feature #58564 [HttpKernel] Let Monolog handle the creation of log folder for improved readonly containers handling (shyim)
- `f4a8c06e` [Cache][HttpKernel] Add a `noStore` argument to the `#` attribute
- `a1ecd5c4` [HttpKernel] [MapQueryString] added key argument to MapQueryString attribute
- `92d01724` [HttpKernel] Let Monolog create the log folder
- `25373c09` feature #57829 [FrameworkBundle] Finetune `AboutCommand` (JoppeDC)
- `fa321e01` bug #58376 [HttpKernel] Correctly merge `max-age`/`s-maxage` and `Expires` headers (aschempp)
- `d3643af0` feature #58366 [HttpKernel] Improve accessibility (javiereguiluz)
- `2a0a7594` Add PR template and auto-close PR on subtree split repositories
- `cc28bac3` [FrameworkBundle][HttpKernel] Add support for `SYMFONY_TRUSTED_PROXIES`, `SYMFONY_TRUSTED_HEADERS`, `SYMFONY_TRUST_X_SENDFILE_TYPE_HEADER` and `SYMFONY_TRUSTED_HOSTS` env vars
- `610e4c18` pass CSV escape characters explicitly
- `c2c3d036` [HttpKernel] Fix method naming collision
- `0e0d2893` feature #57577 [FrameworkBundle][HttpKernel] Let `RequestPayloadValueResolver` consider mapped argument type (unixslayer)
- `ceb92924` Use `createMock`
- `4d599f9c` Remove `@internal` flag and add `@final` to `ServicesResetter`
- `e0d1f2d1` feature #54720 [Routing] Add `{foo:bar}` syntax to define a mapping between a route parameter and its corresponding request attribute (nicolas-grekas)
- `3816fadf` [Routing] Add `{foo:bar}` syntax to define a mapping between a route parameter and its corresponding request attribute
- `f4d4e699` feature #54371 [DependencyInjection] Deprecate `#[TaggedIterator]` and `#[TaggedLocator]` (GromNaN)
- `47353bb3` [HttpKernel] Add MapUploadedFile attribute
- `97abe049` [HttpKernel] Deprecate `AddAnnotatedClassesToCachePass` and related code infrastructure
- `4cea8f93` feature #52843 [DependencyInjection] Prepending extension configs with file loaders (yceruto)
- `984fcbbd` Add more explicit nullable types for default null values
- `a39153bf` feature #53898 [Serializer] Add context for `CamelCaseToSnakeCaseNameConverter` (AurelienPillevesse)
- `cff38318` add context to force snake_case
- `7733558b` feature #54153 [HttpKernel] allow boolean argument support for MapQueryString (Jean-Beru)
- `dcde6889` [HttpKernel] allow boolean argument support for MapQueryString
- `a53d8320` [DependencyInjection] Add `#[AutowireMethodOf]` attribute to autowire a method of a service as a callable
- `58c2bd94` bug #53985 [HttpKernel] Allow tagged controllers in ControllerResolver (marein)
- `33eb18c9` [ErrorHandler] Add missing self-closing tags on link elements
- `0c0357ca` [DependencyInjection][HttpKernel] Add PHPDoc to attribute classes and properties
- `91e0afc2` feature #53209 [HttpKernel] Add support for custom HTTP status code for the `#[MapQueryParameter]` attribute (ovidiuenache)
- `3f17a2f0` [HttpKernel] Add support for custom HTTP status code for the MapQueryParameter attribute
- `be38a0f0` [HttpKernel] Add `HttpException::fromStatusCode()`
- `9f691745` bug #53107 [HttpKernel] Don&#039;t validate partially denormalized object (HypeMC)
- `cc1b41ee` bug #52886 [HttpKernel] Catch `TypeError` if the wrong type is used in `BackedEnumValueResolver` (alexandre-daubois)
- `3551345f` document added method in the changelog rather than the upgrade files
- `b6cc1aff` feature #52128 [HttpKernel] Introduce `ExceptionEvent::isKernelTerminating()` to skip error rendering when kernel is terminating (VincentLanglet)
- `b87ad8c4` [HttpKernel] Introduce `ExceptionEvent::isKernelTerminating()` to skip error rendering when kernel is terminating
- `29fb9575` add argument to prepend extension config
- `8c250568` feature #52471 [HttpKernel] Add `ControllerResolver::allowControllers()` to define which callables are legit controllers when the `_check_controller_is_allowed` request attribute is set (nicolas-grekas)
- `de00a52b` [HttpKernel] Add `ControllerResolver::allowControllers()` to define which callables are legit controllers when the `_check_controller_is_allowed` request attribute is set
- `4839d333` feature #52079 [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE` (nicolas-grekas)
- `4043b4ec` [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`
- `19f15ec4` add missing class alias to satisfy autoloading
- `19af0051` feature #51470 [FrameworkBundle][Serializer] Deprecate annotations (alexandre-daubois)
- `828c891e` [FrameworkBundle][HttpKernel] Introduce `$buildDir` argument to `WarmableInterface::warmup` to warm read-only artefacts in `build_dir`
- `48ac8643` [DependencyInjection] Add `#[AutowireIterator]` attribute and improve `#[AutowireLocator]`
- `d1ae2c96` feature #51772 [WebProfilerBundle] Support `!` negation operator in url filter (SzymonKaminski)
- `b641ff7e` [HttpKernel] Remove deprecated Kernel::stripComment() method
- `817072d7` Drop support for Twig 2
- `0182a344` feature #51425 [FrameworkBundle][Validator] Deprecate annotation occurrences (alexandre-daubois)
- `51353c9e` feature #51392 [DependencyInjection] add `#[AutowireLocator]` attribute (kbond)
- `2f7a7452` [DependencyInjection] add `#[AutowireLocator]` attribute
- `32b42c11` bug #51396 [HttpKernel] Fix missing Request in RequestStack for StreamedResponse (Ismail Turan)
- `8ee5e359` Add 2 recently missing return types
- `9640e607` feature #51004 [HttpKernel] Support backed enums in `#[MapQueryParameter]` (andersmateusz)
- `ccd10ced` Add some PHPDoc
- `99cc989f` feature #47715 [Form] Removing self-closing slash from `&lt;input&gt;` (ThomasLandauer)
- `5e36ba9c` [HttpKernel] Add `reset()` implementation in DataCollector
- `fe93cfcd` [HttpKernel] RequestPayloadValueResolver Add support for custom http status code
- `e759a4b0` feature #50911 [HttpKernel] Enhance exception if possible (lyrixx)
- `710f441e` Add types to public and protected properties
- `f29cbe0c` Add types to private and internal properties
- `44b589ab` bug #50913 [HttpKernel][WebProfilerBundle] Fix search feature (Cyril HERRERA)
- `4f717c74` Add native return types to fix compat with v7
- `4218bb18` feature #50842 Add missing return types to magic methods (wouterj)
- `bc7e4f08` Add missing return types to magic methods
- `973ec741` [7.0] Remove remaining deprecated code paths
- `6ea58cc6` document BC breaking changes
- `d9a09124` Remove BC layers related to new methods and new parameters
- `22eaeb87` Add missing return types and enforce return types on all methods
- `76c15207` [HttpKernel] Add optional $className param to ControllerEvent::getAttributes()
- `f26c8cc1` bug #50241 [HttpKernel] Prevent initialising lazy services during services reset (tucksaun)
- `5e08bee9` bug #50125 [HttpKernel] Fix handling of `MapRequest*` attributes (nicolas-grekas)
- `fcdb9691` Add missing return types
- `a3c4051b` Add &quot;composer require...&quot; in all exception messages when needed
- `a6424977` [HttpKernel] Enhance MapQueryString adding validation group
- `4ab17cea` [VarDumper] Add missing return types
- `6ff86a31` [HttpKernel] Create Attributes `#[MapRequestPayload]` and `#[MapQueryString]` to map Request input to typed objects
- `c9aeb256` feature #48992 [HttpKernel] Introduce pinnable value resolvers with `#[ValueResolver]` and `#[AsPinnedValueResolver]` (MatTheCat)
- `aecadba0` [HttpFoundation][HttpKernel] Add missing void PHPdoc return types
- `5f9154e0` [HttpKernel] Introduce pinnable value resolvers with `#[ValueResolver]` and `#[AsPinnedValueResolver]`
- `eaf1f26a` [HttpKernel] Add `skip_response_headers` to the `HttpCache` options
- `86e96f6f` Add missing return types to interfaces
- `8efef814` Add void return types
- `1101d50c` Add PHP types to private methods and functions
- `53032390` Add missing PHPdoc return types
- `c869c087` feature #49193 [Security] Return 403 instead of 500 when no firewall is defined (nicolas-grekas)
- `5bd78313` bug #48880 [Response] `getMaxAge()` returns non-negative integer (pkruithof, fabpot)
- `93bd20d5` feature #48747 [HttpKernel] Allow using `#[WithLogLevel]` for setting custom log level for exceptions (angelov)
- `f9e6fbd3` feature #48352 [HttpKernel] Allow using `#[HttpStatus]` for setting status code and headers for HTTP exceptions (angelov)
- `fb8a68ec` [DependencyInjection][HttpKernel] Introduce build parameters
- `b7fd4804` feature #48379 [HttpKernel] Set a default file link format when none is provided to FileLinkFormatter (alexandre-daubois)
- `5594256a` bug #48346 [HttpKernel] In DateTimeValueResolver, convert previously defined date attribute to the expected class (GromNaN)
- `251b6f2d` feature #47483 [HttpKernel] Make Logger implement DebugLoggerInterface (MatTheCat)
- `21ab83a2` [HttpKernel] Make Logger implement DebugLoggerInterface
- `266f0f3e` [HttpKernel] Add request attribute `_handle_all_throwables` to allow `HttpKernel` to handle thrown `Error` in addition to `Exception`
- `26989b28` bug #47857 [HttpKernel] Fix empty request stack when terminating with exception (krzyc)
- `2e28c568` feature #47730 Ban DateTime from the codebase (WebMamba)
- `f3ce1377` feature #38996 Remove the default values from setters with a nullable parameter (derrabus, nicolas-grekas)
- `3db79f10` Add a few more ??=
- `55fe121d` [HttpKernel] add missing allowed interface
- `a174b051` feature #47094 [HttpKernel] Use xxh128 algorithm instead of sha256 for http cache store key (Pascal Woerde)
- `b2c55f0c` feature #46514 [HttpKernel] Add option to render Surrogate fragment with absolute URIs (Kern046)
- `906caac1` bug #47073 [HttpKernel] Fix non-scalar check in surrogate fragment renderer (aschempp)
- `d40a6d13` [HttpKernel] Add option to render Surrogate fragment with absolute URIs
- `4a8426ed` feature #46752 [DependencyInjection] Use lazy-loading ghost object proxies out of the box (nicolas-grekas)
- `1c0e8e3b` feature #46880 [HttpKernel] Add `#[Cache()]` to describe the default HTTP cache headers on controllers (nicolas-grekas)
- `af68c28c` [HttpKernel] Add `#[Cache]` to describe the default HTTP cache headers on controllers
- `2e29dca1` [TwigBridge] Add `#[Template()]` to describe how to render arrays returned by controllers
- `7b67334f` [HttpKernel] Add `ControllerEvent::getAttributes()` to handle attributes on controllers
- `4e86044d` feature #46763 [HttpCache] Do not call terminate() on cache hit (Toflar)
- `2edca008` Add deprecation warning to show HttpKernel::handle() will catch throwables
- `09398101` bug #46676 [DoctrineBridge] Extend type guessing on enum fields (Gigino Chianese)
- `7ed7ce45` feature #46279 [DependencyInjection] Optimize autowiring logic by telling it about excluded symbols (nicolas-grekas)
- `4d2459d0` New bundle path convention when AbstractBundle is used
- `9424b71e` [HttpKernel][ErrorHandler] Add favicon to welcome and error pages
- `52f85ed1` Add missing license header
- `6adf696d` bug #45394 [HttpKernel] Use the existing session id if available. (trsteel88)
- `e1515dd5` Add missing license header
- `e2273b5d` feature #45512 [DependencyInjection] Allow using expressions as service factories (nicolas-grekas, jvasseur)
- `f6334df4` [HttpKernel] Add Http Status 423 LockedHttpException
- `879eebab` bug #45589 [HttpKernel] Add DateTimeValueResolver (codedmonkey)
- `2e9a7df4` [HttpKernel] Add DateTimeValueResolver
- `71b4a855` [DependencyInjection] adjust `Autowire` attribute implementation
- `8ce7016c` feature #45657 [DependencyInjection] add `Autowire` parameter attribute (kbond)
- `5c34ba5e` Add generics to ArgumentMetadata::getAttributes
- `84b5696e` [DependencyInjection] add `Autowire` parameter attribute
- `5c32a494` [HttpKernel] Add the UidValueResolver argument value resolver
- `ade06eaf` [HttpKernel] Add Profiler::isEnabled() method
- `af1ed744` bug #45462 [HttpKernel] Fix extracting controller name from closures (nicolas-grekas)
- `743af033` [HttpKernel] Add a controller argument resolver for backed enums
- `1f007d22` bug #44809 [WebProfilerBundle] relax return type for memory data collector (94noni)
- `5bba3f4f` Add more nullsafe operators
- `52f997fc` bug #44649 [HttpKernel] fix how configuring log-level and status-code by exception works (nicolas-grekas)
- `4aecbabf` feature #44483 [HttpKernel][WebProfilerBundle] adding xdebug_info page to webprofilerbundle (chr-hertel)
- `ace17225` adding xdebug_info page to webprofilerbundle

</details>

**symfony/mime** (v5.4.0 → v7.4.0-RC2)

[Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations

This commit updates the MIME library to use a message address for the body header instead of an arbitrary path header, improving email formatting consistency and ensuring correct MIME boundary handling when constructing multipart messages.

[Mime] fix encoding issue with UTF-8 addresses containing doubles spaces

Adds a PR template and auto‑close functionality for subtree split repositories, improving code review workflow and ensuring consistent pull request formatting across all sub‑repos.

Updated the Address class to fix type handling and improve validation logic for email addresses, adding stricter checks and better error messages that aid developers in debugging and maintaining code quality.

Adds new accessor methods to determine whether the SMTPUTF8 extension should be used in Symfony Mime&#039;s mailer configuration. This enables developers to programmatically check and enable UTF‑8 support for email headers, improving compatibility with international characters and ensuring correct MIME encoding.

feature #54975 [Mime] Support custom encoders in mime parts (KDederichs)

Adds a new API to MimePart that accepts custom encoder callbacks, enabling developers to define how MIME content is encoded for different formats (e.g., base64 or quoted‑printable). This expands the library’s flexibility and allows integration with custom data handling pipelines.

Adds ability to add arbitrary headers as strings to Mime messages, improving API flexibility and enabling custom header handling for developers working with email or MIME content

Updates mime type mapping in the Mime component, providing accurate MIME type detection for developers building email attachments or media handling

Adds type hints to private and internal properties, enhancing static analysis, IDE support and code quality for developers

Missing return types added for magic methods, improved type safety and debugging for developers

Removed deprecated code paths in Symfony Mime, eliminating legacy methods and improving API consistency for developers working with MIME handling, ensuring future compatibility and reducing maintenance overhead

Adds a new EmailSubjectContains constraint to Symfony Mime’s validation system, enabling developers to enforce that email subject lines contain specific substrings during message construction and improving code quality by adding explicit validation rules.

Adds explicit return type declarations to all public methods in Mime classes, improving static analysis, IDE autocomplete, and reducing runtime errors due to incorrect return values

Adds missing return type hints to safe methods in Symfony Mime, improving static analysis and IDE support for developers by ensuring correct method signatures and preventing runtime type errors

Adds CI check ensuring interfaces have return types, improving code quality and static analysis for developers using Symfony Mime to enforce type safety.

Add &quot;composer require...&quot; in all exception messages when needed

Fixes an issue where form field values with integer keys were incorrectly resolved in Mime’s Form component, ensuring accurate data handling and preventing potential bugs during form processing

Adds a new method getDispostion() to TextPart in symfony/mime, exposing the current content disposition (e.g., inline or attachment). This enhances API usability for developers who need to inspect MIME headers and handle attachments programmatically.

Adds a getDispostion() method to TextPart, exposing the current content disposition for MIME handling; developers can now programmatically retrieve and modify disposition values when building email or multipart messages.

Adds explicit void return type annotations to Symfony Mime classes, improving static analysis, IDE autocomplete, and ensuring method signatures are consistent with PHP 8+ standards

Adds PHP type hints to private methods and functions, improving static analysis and IDE support for developers working on symfony/mime code. This enhances code quality, reduces runtime errors, and makes refactoring safer.

Adds File::getSize() and getFilename() methods to Mime&#039;s File class, exposing file size and name through a typed API for developers to use in email attachments or MIME handling, improving code clarity and enabling type‑hinted usage.

Deprecates attach/embed methods in Mime; developers must update code to use Email::addPart() for attaching files or embedding content, ensuring compatibility with newer API and avoiding deprecated behavior.

Removed DateTime class usage from the codebase to eliminate deprecated or unused time handling logic, simplifying the core MIME library and reducing potential runtime errors for developers who rely on date/time features.

[Mime] Simplify adding Parts to an Email

Removed an unused method getDisposition() from the Mime class, cleaning up the API surface and reducing potential confusion for developers who interact with MIME handling code

Introduces a regex to correctly parse email image parts when closing quotes are single; improves MIME parsing accuracy and reduces malformed attachment handling in code.

[Mime] Re-allow addIdHeader to be used for &#039;In-Reply-To&#039; and &#039;References&#039; headers

Adds a new method to Mime::convertHtmlToText that allows developers to control how HTML is converted into plain text, enabling custom handling of tags and improving text extraction logic.

[Mime] Add DataPart::setContentId()

Fixes handling of address names containing parentheses in MIME headers, preventing malformed header values and ensuring correct email delivery

Corrects inline part attachment behavior in Mime::attachPart() when adding inline parts, fixing bugs that affect MIME composition and ensuring accurate content delivery

Adds null check for EmailHeaderSame to avoid runtime errors when checking duplicate headers; enhances code stability and error handling in email construction

Add missing license header

Adds a public getter for TextPart::$name, enabling developers to retrieve the name of text parts via the Mime API. This improves code readability and allows type‑safe access in custom email templates or MIME handling logic.

[Mailer] Add downloadable attachments to profiler

Adds a DraftEmail class to the Symfony Mime component, providing an API for creating draft email messages that can be stored or queued before sending. This introduces new methods and properties for handling message drafts, enhancing code flexibility and enabling developers to extend email handling logic.

<details>
<summary><strong>Technical Details (39 commits)</strong></summary>

- `6e6ccd6a` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
- `ac537b6c` [MIME] use address for body at PathHeader
- `8c1b9b3e` [Mime] fix encoding issue with UTF-8 addresses containing doubles spaces
- `011f0122` Add PR template and auto-close PR on subtree split repositories
- `9e0e1061` Update src/Symfony/Component/Mime/Address.php
- `e6bf54be` Add new accessors to help determine whether to use the SMTPUTF8 extension
- `ee360536` feature #54975 [Mime] Support custom encoders in mime parts (KDederichs)
- `d0585553` feat: support custom encoders in mime parts
- `1aa42732` [Mime] Allow to add some headers as a strings
- `4f1791b7` feature #51191 [Mime] Update mimetypes (fabpot)
- `f0642eff` Add types to private and internal properties
- `cbcc242d` Add missing return types to magic methods
- `01345418` [7.0] Remove remaining deprecated code paths
- `97bd01e4` [Mailer] Add EmailSubjectContains constraint (#49939)
- `7b5d2121` Add missing return types
- `f646082b` Add remaining missing return types to safe methods
- `856ef880` Add CI check ensuring interfaces have return types
- `4ae80270` Add &quot;composer require...&quot; in all exception messages when needed
- `6c0e81ec` bug #47505 [Mime] Form field values with integer keys not resolved correctly  (claudiu-cristea)
- `f1b8dbee` feature #49824 [Mime] Added getDispostion() to TextPart to get current content disposition. (Cyb0rk)
- `332b0227` [Mime] Added getDispostion() to TextPart to get current content disposition.
- `321d86c7` Add void return types
- `01a2f9a3` Add PHP types to private methods and functions
- `5cbdaff0` [Mime] Add File::getSize() and getFilename()
- `cf743c9c` [Mime] deprecate attach/embed methods in favor of Email::addPart()
- `0191250c` feature #47730 Ban DateTime from the codebase (WebMamba)
- `ae6c5786` [Mime] Simplify adding Parts to an Email
- `3098f7f0` remove unused getDisposition() method
- `44d515bb` Email image parts: regex for single closing quote
- `8af13ae4` [Mime] Re-allow addIdHeader to be used for &#039;In-Reply-To&#039; and &#039;References&#039; headers
- `3058b656` [Mime] Add a way to control the HTML to text conversion
- `e6d5c73e` [Mime] Add DataPart::setContentId()
- `19aabb34` quote address names if they contain parentheses
- `21de2feb` [Mime] Fix inline parts when added via attachPart()
- `98e35fa8` [Mime] Add null check for EmailHeaderSame
- `5b05a62a` Add missing license header
- `b4eb8291` Added getter for &quot;TextPart::$name&quot;
- `de60742e` [Mailer] Add downloadable attachments to profiler
- `c94171b2` [Mime] add DraftEmail

</details>

**symfony/routing** (v4.4.34 → v7.4.0-RC2)

Introduces support for the `when@env` condition within routing configuration trees, enabling developers to use environment-specific route definitions in Symfony&#039;s RoutesConfig API, improving code flexibility and clarity.

Adds automatic route registration via attributes on controller services, enabling developers to declare routes directly in service definitions without manual configuration files; improves code maintainability and reduces boilerplate.

Adds a JSON schema for validating and autocompleting YAML configuration files in Symfony Routing, enabling developers to catch misconfigurations early, improve IDE auto‑completion, and maintain consistent routing definitions across projects.

Adds a JSON schema for validating and autocompleting YAML configuration files in Symfony Routing, improving developer tooling with IDE auto‑completion and strict validation of routing settings.

Adds a new method to create request context with parameters directly, enabling developers to instantiate routing contexts programmatically without relying on HTTP request objects, improving flexibility and testability of routing logic

Adds a new query parameter option to UrlGenerator allowing developers to inject custom query strings via the `_query` key, enabling more flexible URL construction and routing logic.

Adds an alias syntax for route parameters in Symfony routing, enabling developers to specify parameter aliases directly within the `{foo:bar}` format, simplifying route definitions and improving code readability.

[Routing] Add alias in `{foo:bar}` syntax in route parameter

[Routing] Add MONGODB_ID regex to requirement patterns

Adds a PR template and auto‑close logic for subtree split repositories, improving CI workflow automation and reducing manual PR management tasks

[Routing] Add the `Requirement::UID_RFC9562` constant

Adds explicit return type to __toString() methods, improving static analysis and IDE support for string conversion in routing components.

Adds a new syntax `{foo:bar}` to Symfony routing that maps route parameters to request attributes, enabling developers to define custom parameter mappings and improving flexibility in URL handling.

Adds explicit nullable type hints for default null values in routing code, improving static analysis and IDE support by clarifying which parameters can be omitted, leading to fewer runtime errors and easier maintenance

Improves error handling in StaticPrefixCollection to support libpcre2-10.43, fixing regex compatibility issues and preventing runtime errors during routing configuration

[Routing] Remove `@final` annotation from `Route` attribute

Adds PHPDoc annotations to routing attributes for improved IDE support and static analysis, enabling developers to understand attribute types and constraints when defining routes.

[Routing] Add redirection.io as sponsor of versions 6.4/7.0/7.1

Extends routing annotations to use Symfony’s new attribute syntax, updating the API for route definitions and improving IDE support with type hints and static analysis

Add annotation -&gt; attribute aliases

Adds new kernel runtime mode parameters to HttpKernel, exposing APP_RUNTIME_MODE as a configuration key that developers can use to customize request handling behavior and enable environment‑specific optimizations.

feature #52032 [FrameworkBundle][Routing][Translation][Workflow] Move some compiler passes from FrameworkBundle to components (fancyweb)

Introduces new runtime mode parameters in HttpKernel, enabling developers to programmatically control kernel behavior based on the APP_RUNTIME_MODE environment variable and adjust services dynamically

[Routing] Fix routing collection defaults when adding a new route to a collection

Adds explicit type hints to public and protected properties, improving static analysis, IDE autocompletion, and reducing runtime type errors in the routing component

Removed Doctrine annotations support from routing configuration, simplifying the codebase and eliminating legacy annotation parsing logic that developers must maintain or adapt to newer Symfony versions.

Adds explicit type hints to private and internal properties, improving static analysis, IDE autocomplete, and reducing runtime errors by enforcing consistent data types across the routing component

Adds native return type declarations to Symfony routing functions, enhancing static analysis, IDE support, and compatibility with PHP 7+ features by enforcing stricter typing across the routing component

Adds explicit return types to magic methods in Symfony Routing, improving static analysis and IDE support for developers working on routing logic and custom extensions.

[7.0] Remove remaining deprecated code paths

Removed legacy BC layers for new methods and parameters, simplifying codebase and improving type safety; developers now use updated method signatures without deprecated wrappers.

Adds FQCN and FQCN::method aliases for routing configuration, enabling developers to reference route definitions by fully-qualified class names or method names directly in YAML or PHP code, improving clarity and reducing ambiguity during route mapping.

[Routing] Add FQCN and FQCN::method aliases when applicable

Adds explicit return type hints to function signatures, improving static analysis and IDE support for developers working on the routing component, ensuring more reliable code quality and easier debugging

Adds explicit return type annotations to safe methods in Symfony Routing, improving static analysis, IDE autocomplete, and reducing runtime errors by ensuring method signatures are correctly typed.

Adds a CI check that verifies all interface methods have explicit return types, improving static analysis and IDE support for developers by ensuring type safety and preventing runtime errors.

Adds explicit composer requirement statements to exception messages, ensuring developers know which dependencies are missing and can install them quickly, improving debugging and dependency management.

Adds explicit void return types to method signatures throughout the routing component, improving static analysis and IDE support by clarifying that functions do not return values, which helps developers avoid accidental misuse and enhances code quality

Adds explicit PHP type hints to private methods and functions within the routing component, improving static analysis, IDE autocompletion, and reducing runtime type errors.

Adds explicit PHP return type annotations to improve static analysis, IDE autocomplete and code quality for developers working on routing logic

[Uid] Add UuidV7 and UuidV8

[Routing] Add `Requirement::POSITIVE_INT` for common ids and pagination

feature #46157 [Routing] Remove variadic constructor signature (wouterj)

Adds a new route_parameters variable to routing condition expressions, enabling developers to reference request parameters directly in route definitions and improving flexibility for dynamic routing logic.

Adds a collection of universal regular‑expression constants to the Routing component, providing reusable route parameter requirements that simplify route definitions and improve consistency across the platform

Adds a missing license header to the source file, ensuring compliance with open‑source licensing requirements and improving code documentation for developers

Adds a missing license header to the source code files, ensuring compliance with licensing requirements and maintaining proper attribution for future developers

Adds an enum‑based requirement helper (EnumRequirement) for generating route requirements from BackedEnums, enabling developers to create more type‑safe and maintainable routing rules

[Routing] Add EnumRequirement to help generate route requirements from a \BackedEnum

Introduces nullsafe operators to reduce runtime errors and improve code readability across routing components; enhances static analysis support and IDE autocomplete by handling nullable values safely

Adds alias support to routing, enabling developers to define alternate route names for the same controller action, improving API flexibility and simplifying URL mapping in Symfony applications

<details>
<summary><strong>Technical Details (51 commits)</strong></summary>

- `ba77be3a` [Routing] Allow when@env inside `new RoutesConfig()` trees
- `ec13b221` feature #61492 [FrameworkBundle][Routing] Auto-register routes from attributes found on controller services (nicolas-grekas)
- `29106470` feature #61282 [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files (nicolas-grekas)
- `23627610` [DependencyInjection][Routing] Add JSON schema for validating and autocompleting YAML config files
- `782a740b` [Routing] Add possibility to create a request context with parameters directly
- `c2f19998` feature #60508 [Routing] Allow query-specific parameters in `UrlGenerator` using `_query` (BenMorel)
- `5d4973c3` feature #59904 [Routing] Add alias in `{foo:bar}` syntax in route parameter (eltharin)
- `6accdb7d` [Routing] Add alias in `{foo:bar}` syntax in route parameter
- `5801dd9d` [Routing] Add MONGODB_ID regex to requirement patterns
- `7289d3cc` Add PR template and auto-close PR on subtree split repositories
- `df460a34` [Routing] Add the `Requirement::UID_RFC9562` constant
- `a3e0c68c` Add return type to __toString() methods
- `91479c48` [Routing] Add `{foo:bar}` syntax to define a mapping between a route parameter and its corresponding request attribute
- `f455f06d` Add more explicit nullable types for default null values
- `48ae43e4` Enhance error handling in StaticPrefixCollection for compatibility with libpcre2-10.43
- `1c7af36e` [Routing] Remove `@final` annotation from `Route` attribute
- `1ac18586` [FrameworkBundle][RemoteEvent][Routing][Scheduler] Add PHPDoc to attributes properties
- `ae014d60` [Routing] Add redirection.io as sponsor of versions 6.4/7.0/7.1
- `18bba718` [Routing] Extend old Annotations from new Attributes
- `0ef68503` Add annotation -&gt; attribute aliases
- `ea594c97` feature #52079 [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE` (nicolas-grekas)
- `301c798b` feature #52032 [FrameworkBundle][Routing][Translation][Workflow] Move some compiler passes from FrameworkBundle to components (fancyweb)
- `b76e13bc` [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`
- `82616e59` [Routing] Fix routing collection defaults when adding a new route to a collection
- `bd5744e3` Add types to public and protected properties
- `73615d30` feature #51082 [Routing] Remove Doctrine annotations support (derrabus)
- `a40051ff` Add types to private and internal properties
- `ade8866a` Add native return types to fix compat with v7
- `72826485` Add missing return types to magic methods
- `735263f6` [7.0] Remove remaining deprecated code paths
- `40c7bb5d` Remove BC layers related to new methods and new parameters
- `cb08b9a3` feature #50084 [Routing] Add FQCN and FQCN::method aliases when applicable (fancyweb)
- `d24a022d` [Routing] Add FQCN and FQCN::method aliases when applicable
- `827f59fd` Add missing return types
- `d4999fe1` Add remaining missing return types to safe methods
- `e744941a` Add CI check ensuring interfaces have return types
- `b07b38df` Add &quot;composer require...&quot; in all exception messages when needed
- `e2938583` Add void return types
- `2c02da30` Add PHP types to private methods and functions
- `e7289761` Add missing PHPdoc return types
- `1d7734aa` [Uid] Add UuidV7 and UuidV8
- `9d5c6c9a` [Routing] Add `Requirement::POSITIVE_INT` for common ids and pagination
- `03c13cba` feature #46157 [Routing] Remove variadic constructor signature (wouterj)
- `d7d91fb4` [Routing] Add route_parameters variable to condition expression
- `d35180ec` [Routing] Add Requirement, a collection of universal regular-expression constants to use as route parameter requirements
- `5b12aebd` Add missing license header
- `c25e38d4` Add missing license header
- `4e90be8b` feature #45803 [Routing] Add EnumRequirement to help generate route requirements from a \BackedEnum (fancyweb)
- `8672925b` [Routing] Add EnumRequirement to help generate route requirements from a \BackedEnum
- `e825a1fc` Add more nullsafe operators
- `c15fd164` [Routing] Add support for aliasing routes

</details>

**symfony/serializer** (v4.4.35 → v7.4.0-RC1)

Fixes a bug in Symfony Serializer that caused inherited properties to be incorrectly normalized when serializing objects, ensuring accurate data representation and preventing potential runtime errors.

[Serializer] Add `XmlEncoder::PRESERVE_NUMERIC_KEYS` context option

feature #61563 [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class (nicolas-grekas)

[Serializer] add correct psalm and phpstan return types for `DenormalizerInterface`

Adds a new attribute annotation #[ExtendsSerializationFor] to allow classes to declare additional serialization attributes, enabling developers to extend serializer behavior and customize data mapping without modifying core code.

bug #61571 [Serializer] Fix dealing with asymmetric visilibity for properties (santysisi)

[Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files

[String] Deprecate implementing `__sleep/wakeup()` on string implementations

bug #60296 [Serializer] Handle invalid mapping type property type (KorvinSzanto)

[Serializer] Add missing CHANGELOG entry

Adds a new constant CDATA_WRAPPING_NAME_PATTERN to XmlEncoder in Symfony Serializer, enabling developers to configure XML output to wrap specific node names with CDATA sections for better data handling and compatibility.

Adds CDATA_WRAPPING_NAME_PATTERN support to XmlEncoder, enabling developers to customize how XML elements are wrapped in CDATA sections via configuration patterns—enhancing serialization flexibility and ensuring correct data handling for complex content types.

Adds the &quot;can&quot; accessor prefix to AttributeLoader, enabling developers to use custom prefixes in serializer attribute mapping for more flexible property access and improved code reuse.

Fixes a bug in Symfony Serializer where readonly properties were incorrectly initialized from an incorrect scope, ensuring accurate property values during serialization and preventing unexpected data corruption when serializing objects.

bug #60413 [Serializer] Fix collect_denormalization_errors flag in defaultContext (dmbrson)

Fixes a bug in Symfony Serializer’s TypeInfo handling of ConstFetchNode, preventing incorrect type inference and improving serialization reliability for custom classes

Allows custom services to be referenced by their original class name without an added suffix when using #[Target] in Symfony’s Serializer, simplifying service registration and reducing boilerplate code for developers.

Fixes a bug in Symfony Serializer’s TraceableSerializer that caused errors when it is invoked inside an array_map callable, ensuring correct serialization behavior and preventing runtime failures during data processing.

bug #60260 [Serializer] Prevent `Cannot traverse an already closed generator` error by materializing Traversable input (santysisi)

Adds a discriminator map to the Serializer debug command output, enabling developers to identify which serializer class was used for each data type during debugging and improving traceability of serialization logic.

Adds a discriminator map to the Serializer debug command output, enabling developers to identify which serializer class is used for each data type during debugging and improving traceability of serialization logic.

[Serializer] Add defaultType to DiscriminatorMap

Updated GetSetMethodNormalizer to correctly handle getter/setter method names, improving serialization logic and ensuring accurate data mapping between objects and JSON.

Introduces a new NumberNormalizer class to enhance Symfony Serializer’s numeric handling by providing type-aware normalization and conversion logic, improving data consistency across API responses and internal serialization processes

Adds named normalizer and denormalizer aliases to Symfony Serializer, enabling developers to register custom normalizers/denormalizers by name for easier reuse and clearer API usage

Adds a new XML context option to the Serializer that allows developers to ignore empty attributes when serializing data, improving API flexibility and reducing unnecessary output in XML responses.

[Serializer] Add xml context option to ignore empty attributes

Fixes a bug that prevented Serializer validation from failing when TypeInfo classes are missing, ensuring serialization and deserialization work correctly for custom data types and preventing runtime errors during API calls

Redesigns Symfony Serializer TypeInfo methods to improve type hinting and nullability handling, providing clearer API signatures for developers and enhancing static analysis support

Fixes compatibility with phpstan/phpdoc-parser v2 by updating parser integration and type extraction logic, ensuring static analysis tools correctly interpret PHPDoc annotations for accurate type hints and code quality checks

Collects denormalization errors for variadic parameters in Symfony Serializer, improving error handling and debugging during data conversion

Deprecates the AdvancedNameConverterInterface, removing it from the serializer’s public API and marking it for future removal; developers must update code that implements or relies on this interface to avoid breaking changes in newer releases

Adds a pull request template and an automated PR closure rule for subtree split repositories, improving code quality by standardizing PR formatting and reducing manual review effort

Reintroduces AdvancedNameConverterInterface to MetadataAwareNameConverter, restoring advanced naming conversion capabilities and ensuring compatibility with custom name converters used in serialization workflows

Introduces named serializers feature allowing developers to create and use multiple serializers with specific names, enabling fine‑tuned serialization settings for different contexts

Adds the t‑w‑o ...…

Fixes a bug in the Serializer’s TypeInfo handling for TemplateType by returning the bound type as its base type; this improves type inference and serialization accuracy, preventing incorrect data mapping during API calls.

Adds new RFC‑9562 Uuid format constants to Serializer and UidNormalizer, enabling developers to normalize UUIDs in RFC‑9562 style and use them as a custom normalization format for serialization.

Adds support for subclasses of DateTime and DateTimeImmutable in Symfony Serializer, enabling developers to serialize custom date/time objects without needing to cast or modify them; this improves API compatibility and reduces code duplication.

Introduces a new SnakeCaseToCamelCaseNameConverter in Symfony Serializer, enabling automatic conversion of snake_case property names to camelCase during serialization and deserialization. This improves API consistency, reduces manual mapping code, and enhances type safety for developers working with data models.

Fixes a bug in Symfony Serializer that incorrectly denormalizes mixed collection values, ensuring data integrity when converting complex objects to arrays and back. This resolves issues with nested collections and improves serialization reliability for custom services.

Fixes a bug in Symfony Serializer’s ObjectNormalizer that incorrectly applies boolean filtering when FILTER_BOOL is set, ensuring accurate serialization of boolean values and preventing data corruption during API responses

add missing method

bug #57341 [Serializer] properly handle invalid data for false/true types (xabbuh)

Fixes ObjectNormalizer’s handling of property paths in Serializer, ensuring correct data mapping when accessing nested properties via dot notation; improves serialization accuracy and prevents runtime errors.

Fixes a bug in Symfony Serializer’s PropertyAccessor that incorrectly handled generic interfaces for non‑collection types, preventing serialization errors and improving type safety during data mapping.

add missing deprecation contracts dependency

Adds a new context option `XmlEncoder::CDATA_WRAPPING_PATTERN` to the Symfony Serializer’s XML encoder, enabling developers to specify custom CDATA wrapping patterns when serializing data into XML. This enhances flexibility in handling special characters and improves API compatibility with external systems that require specific CDATA formatting.

Adds a missing assertion to improve code quality and catch potential bugs during runtime by ensuring expected conditions are met, aiding developers in debugging and maintaining reliable functionality

Fixes a bug in Symfony Serializer where empty CSV header names were incorrectly converted to numeric keys, ensuring accurate data mapping when serializing CSV files and preventing potential data loss or misinterpretation during import/export operations

Adds a new context option CDATA_WRAPPING_PATTERN to XmlEncoder in Symfony Serializer, enabling developers to customize XML output by wrapping content in CDATA sections based on patterns, improving serialization flexibility and code quality

Adds an AbstractNormalizerContextBuilder::defaultConstructorArguments() method to provide default constructor arguments for normalizers, improving API flexibility and enabling developers to customize serialization behavior without changing core code

Adds method parameters to a final class, improving API clarity and enabling stricter type checking for developers working with this serializer component

Adds missing return type‑hints to serializer methods, enhancing static analysis support and reducing runtime errors in custom serialization logic

Adds $class, $format and $context arguments to NameConverterInterface methods, providing more context for name conversion during serialization and allowing developers to customize behavior with additional parameters

We … ...

Fixes unexpected allowed attributes in Serializer, preventing unintended data exposure and ensuring accurate serialization of entities when mapping to DTOs or API responses.

bug #54505 [Serializer]  initialize serializer in trait with null (xabbuh)

Fixes a bug in Symfony Serializer that incorrectly denormalizes XML scalar values into objects, ensuring accurate data conversion and preventing runtime errors when processing XML payloads

Fixes a bug in Symfony Serializer that caused XML output to silently return incorrect data instead of throwing a warning or error; this improves reliability and debugging for developers using the serializer API.

Deprecates PropertyInfo type in Symfony Serializer, removing legacy type usage and improving API consistency. Developers will need to update code that references PropertyInfo classes or methods for compatibility with newer versions.

Adds explicit nullable type hints for default null values in serializer code, improving static analysis and IDE support, ensuring that fields expected to be null are correctly typed and reducing runtime errors

add missing changelog for PR 53898

Adds context support for CamelCaseToSnakeCaseNameConverter in Symfony Serializer, enabling more accurate name conversion during serialization and deserialization, improving data consistency and reducing bugs

Adds context to force snake_case in serializer mapping, ensuring consistent property naming for API consumers and improving code readability

Allows boolean argument support for MapQueryString in HttpKernel, enabling developers to use boolean values in query string mapping without needing custom parsing logic

Duplicate ? ..??...?

Fixes a bug in Symfony Serializer’s ObjectNormalizer where properties with identical names to their accessor methods were incorrectly serialized, ensuring accurate data mapping and preventing potential serialization errors that could affect API responses

Adds a default serialization group to the Symfony Serializer, enabling developers to set a baseline group for all objects without specifying groups per call, simplifying API design and reducing boilerplate.

Adds a new context option `DateTimeNormalizer::CAST_KEY` to the Symfony Serializer DateTime normalizer, enabling developers to control how keys are cast during serialization and deserialization, improving API flexibility and code clarity.

bug #53361 [Serializer] Take unnamed variadic parameters into account when denormalizing (thijsBreker)

Rewrites AbstractObjectNormalizer::createChildContext() to correctly reuse cache_key from original context, ensuring consistent serialization caching and preventing duplicate cache entries during nested object normalization. This improves performance and stability of serializer API.

Rewrites AbstractObjectNormalizer::createChildContext() to use a cache key from the original context, improving caching behavior and ensuring consistent child context creation for serializers.

Adds PHPDoc annotations to attribute classes and properties in Serializer, improving IDE support and static analysis for developers working with Symfony&#039;s serialization logic

Fixes a bug in Symfony Serializer that prevents instantiating non‑instantiable objects, ensuring serialization logic correctly handles classes without constructors or static factory methods, improving reliability and preventing runtime errors

Preventing instantiation of non‑instantiable objects removes runtime errors and improves type safety, ensuring that serializer logic only creates valid instances and avoiding unexpected exceptions during data conversion

Fixes partial denormalization when constructor arguments are missing, ensuring that objects are correctly instantiated and preventing runtime errors during data conversion

Maintains stack trace for enum value denormalizer errors, enabling developers to debug more effectively and track error origins

Adds support for DiscriminatorMap in PropertyNormalizer, enabling developers to correctly map and deserialize nested objects with complex inheritance patterns

Fixes access to private properties/getter methods when using the @Ignore annotation, ensuring proper serialization and debugging for custom objects

Fixes a bug in the Serializer constructor that mis‑handled deserialization paths, ensuring correct object reconstruction and preventing data corruption when custom serializers are used.

bug #52589 [Serializer] Fix XML attributes not added on empty node (mtarld)

Fixes a bug in Symfony Serializer that incorrectly denormalizes date intervals containing both weeks and days, ensuring accurate data transformation for API responses and preventing potential data integrity issues.

[Serializer] Fix XML attributes not added on empty

Extends routing annotations to use new attribute syntax, enabling developers to write cleaner and more type‑safe route definitions in Symfony 6+ while maintaining backward compatibility with existing annotation-based routes.

Adds annotation support for attribute aliases in Symfony Serializer, enabling developers to map multiple property names to a single serialized field and improving code readability and consistency across API responses.

Improves error handling in TranslatableNormalizer by throwing a more descriptive exception, enhancing debugging and code quality for developers working with Symfony&#039;s serializer components

bug #51992 [Serializer] Fix using `DateIntervalNormalizer` with union types (Jeroeny)

Introduces a new $buildDir parameter to WarmableInterface::warmup in HttpKernel, allowing developers to specify the build directory for warming read‑only artefacts during application startup. This change expands the API surface and enables fine‑grained control over warm‑up behavior, improving performance tuning and debugging.

Introduces a new `$buildDir` parameter to WarmableInterface::warmup, allowing developers to specify the build directory for warm‑read‑only artefacts, improving cache handling and code reuse across environments.

Introduces a new context option `XmlEncoder::CDATA_WRAPPING` for Symfony Serializer’s XML encoder, allowing developers to control whether CDATA sections are wrapped around XML elements during serialization. This enhances API flexibility and enables precise handling of special characters in XML output.

Adds detailed error information to ProblemNormalizer for Messenger’s ValidationFailedException, improving debugging and exception handling in Symfony Serializer by exposing validation errors and context details

Fixes deserialization of object collection properties in Symfony Serializer, ensuring collections are correctly reconstructed from serialized data and preventing data loss during API responses.

Fixes deserialization of nested snake_case attributes in Serializer, ensuring correct data mapping when using CamelCaseToSnakeCaseNameConverter; improves API reliability and prevents data loss during object reconstruction

Adds explicit return type declarations to traits in the serializer component, improving static analysis and IDE autocomplete for developers working with serialization logic

Adds a TranslatableNormalizer to Symfony&#039;s Serializer framework, enabling translation-aware serialization of objects and improving API compatibility with multilingual content

Introduces TranslatableNormalizer to Symfony Serializer, enabling automatic translation handling for serialized data; developers can now use &quot;Translatable&quot; annotations or interfaces to localize API responses and improve internationalization support.

[Serializer] Add support for seld/jsonlint in order to enhance error messages

Adds a Groups annotation/attribute on classes to enable grouping of serializer metadata, improving code organization and allowing developers to apply serialization rules in bulk via annotations or attributes.

Adds explicit type hints to public and protected properties in serializer classes, improving static analysis, IDE autocompletion, and reducing runtime errors by enforcing consistent property types

Fixes deserialization of nested arrays of objects with mixed keys in Symfony Serializer, ensuring accurate data mapping and preventing runtime errors when processing complex API payloads

Adds explicit type hints to private and internal properties in the serializer codebase, improving static analysis, IDE autocomplete, and reducing runtime errors by enforcing stricter property types.

[7.0] Remove remaining deprecated code paths

Removed backward‑compatibility layers for new methods and parameters, simplifying the serializer’s internal API and reducing legacy code that could cause confusion or bugs in future extensions

Fixes serializer behavior when objects only implement DenormalizableInterface, ensuring proper deserialization and avoiding unexpected nulls in data handling

Introduces a flag to enforce that all properties must be listed in the input for serialization, improving data integrity and preventing missing fields during API payload processing

Adds missing method withSaveOptions to XmlEncoderContextBuilder, enabling custom XML encoding options and enhancing flexibility in XML output generation

Adds missing return types for functions in serializer package, improving static analysis, IDE support and code quality

Adds a CI check to enforce that all interfaces in the serializer component have explicit return types, improving type safety and preventing runtime errors during serialization

Adds composer‑require instructions in exception messages for missing dependencies, guiding developers and site builders to install required packages quickly

Adds type annotations for private and internal properties in Symfony Serializer’s core classes, enhancing IDE support and static analysis for developers

Fixes bug #49537 – the expected value exception is thrown when an unexpected value encountered in serialization, preventing errors with data types.

bug #50006 [Serializer] Update return type for `NormalizableInterface::normalize` to match `NormalizerInterface::normalize` (mpdude)

[Serializer] Add Debug command

[HttpKernel] Create Attributes `#[MapRequestPayload]` and `#[MapQueryString]` to map Request input to typed objects

Adds explicit return type declarations to serializer methods, improving static analysis, IDE autocomplete, and preventing type‑inference bugs in Symfony Serializer.

Marking some Normalizer classes as final prevents subclasses from overriding behavior, improving code stability and ensuring consistent serialization logic across extensions.

[Serializer] Add withSaveOptions to XmlEncoderContextBuilder

Adds wildcard support to getSupportedTypes() in Symfony Serializer, allowing developers to specify patterns for supported data types and improving flexibility when configuring custom normalizers or denormalizers.

[Serializer] Add methods `getSupportedTypes` to allow better performance

Adds a context option to BackedEnumNormalizer that allows invalid enum values to be serialized, improving flexibility when handling legacy data or custom types; this change updates the serializer API and affects code quality

Adds void return type annotations to functions and methods, enhancing static analysis and IDE support; this improves code quality and clarity for developers

Add PHP types to private methods and functions; this enhances static‑analysis compatibility and further improve code quality.

Adds explicit PHPDoc return types to serializer classes, improving static analysis and IDE autocomplete for developers working with Symfony Serializer API.

Adds an encoder option to Symfony Serializer’s Encoder interface, allowing developers to pass custom options when serializing data, improving flexibility and enabling advanced configuration such as custom output formats or compression settings

Adds an encoder option to Symfony Serializer for saving options, enabling developers to customize serialization behavior by passing a custom encoder configuration when serializing objects, improving flexibility and reducing code duplication

Adds missing arguments to trigger_deprecation in Symfony Serializer, improving deprecation handling and ensuring accurate warnings during serialization, which aids developers in maintaining backward‑compatible code

Adds a new SerializedPath annotation to Symfony Serializer, enabling flattened nested attributes during serialization; this improves API data structure handling and reduces code complexity for developers working with complex entities.

Fixed traceable decoration priorities in Symfony Serializer, ensuring decorators are applied in correct order and improving serialization consistency for custom data types

Simplified adding Parts to an Email via Mime component, reducing code complexity and enabling easier creation of multipart emails with less boilerplate

Added new &#039;simplify&#039; feature for MIME email parts, providing clearer API usage and improved developer experience

Add missing types to FormErrorNormalizer in Serializer, ensuring accurate type mapping for errors and better error handling within form validation

Adds missing BackedEnum type support to BackedEnumNormalizer, ensuring enums with backing values are correctly serialized and deserialized across Symfony Serializer API, improving type safety and preventing runtime errors in custom data models.

Adds a visibility context option to PropertyNormalizer, enabling developers to control which properties are serialized based on visibility rules (e.g., public/private) and improving API flexibility.

Fixes a bug in Symfony Serializer that caused it to incorrectly ignore getters with required parameters, ensuring accurate serialization of objects and preventing data loss during API responses

Fixes inconsistent behaviour of nullable objects in key/value arrays within Symfony Serializer, ensuring reliable serialization and deserialization when null values are present, improving API stability and preventing runtime errors.

Adds support for PHP 8.2’s built‑in type “true” to Symfony Serializer, enabling correct type handling and improved static analysis in code that serializes true values

bug #46526 [Serializer] Added missing __call to TraceableEncoder (danielburger1337)

Fixes a bug that caused Serializer to lose partially collected trace data during serialization, improving reliability of debugging and trace collection for developers

Implemented a missing __call method in TraceableEncoder to ensure proper dynamic method handling and improve debugging traceability for serialization operations

[Serializer] Added missing __call to TraceableNormalizer and TraceableSerializer

bug #46297 [Serializer] Fix JsonSerializableNormalizer ignores circular reference handler in $context (BreyndotEchse)

Fixes a bug in Symfony Serializer’s PropertyInfo component that incorrectly handled PHP 8.2’s built‑in &quot;false&quot; type, ensuring accurate property metadata and preventing serialization errors for developers using the serializer API

Fixes a bug in Symfony Serializer’s PropertyInfo that incorrectly handled PHP 8.2’s built‑in type &quot;false&quot;, ensuring accurate type detection and preventing serialization errors during code generation and debugging.

Adds support for canners in object normalizer, enabling serialization of custom &quot;canner&quot; objects and improving compatibility with other components that rely on this type.

Adds a missing license header to comply with open‑source licensing requirements and maintain code quality, ensuring developers can reference legal obligations when using or extending the serializer library

Adds a missing license header to ensure compliance with open‑source licensing requirements and maintain proper attribution in the serializer package, which is important for developers who need accurate metadata for legal and documentation purposes

Add missing license header

[Serializer] Add serializer profiler

Fixes deprecations introduced in PHP 8.2 for Symfony Serializer, ensuring code compatibility and preventing runtime errors when upgrading to PHP 8.2. This update removes deprecated methods, adds type hints, and improves static analysis support.

[Serializer] Deprecate support for abstract uid denormalization in UidNormalizer

Fixes bug #44650 in Symfony Serializer by making document type nodes ignorable during serialization, preventing unexpected errors when handling XML documents that contain non‑standard node types and improving API stability

Fixes a bug in CSV encoder that ensures end-of-line characters are correctly applied when constructor settings are used, preventing malformed CSV output and improving data integrity for serialization tasks.

Adds context builders to Symfony Serializer, enabling developers to construct custom serialization contexts for different use cases, improving flexibility and code reuse across the platform.

Adds context builders for serialization contexts, enabling developers to customize data output by specifying context options and improving API flexibility

Deprecates the &quot;context aware&quot; interfaces in Symfony Serializer, removing legacy code paths and clarifying API usage for developers. This change simplifies the serializer’s type handling and improves static analysis support by eliminating ambiguous context methods.

bug #44578 [PropertyInfo] Fix phpstan extractor issues (ostrolucky)

Fixes an error message in UidNormalizer denormalization, improving debugging clarity and reducing confusion when handling UID data during serialization/deserialization

Adds null-safe operator usage throughout serializer code, improving type safety and reducing runtime errors by allowing safe access to nullable properties without throwing exceptions

[Serializer] fix support for lazy/unset properties

<details>
<summary><strong>Technical Details (160 commits)</strong></summary>

- `21269417` bug #62007 [Serializer] fix inherited properties normalization (Link1515)
- `56d1da3b` [Serializer] Add `XmlEncoder::PRESERVE_NUMERIC_KEYS` context option
- `406d2dcf` feature #61563 [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class (nicolas-grekas)
- `4fb30166` [Serializer] add correct psalm and phpstan return types for `DenormalizerInterface`
- `696bbf1c` [Serializer] Add `#[ExtendsSerializationFor]` to declare new serialization attributes for a class
- `0637155b` bug #61571 [Serializer] Fix dealing with asymmetric visilibity for properties (santysisi)
- `6837bf9e` [Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files
- `196fb821` [String] Deprecate implementing `__sleep/wakeup()` on string implementations
- `91b01d65` bug #60296 [Serializer] Handle invalid mapping type property type (KorvinSzanto)
- `7991579e` [Serializer] Add missing CHANGELOG entry
- `c9f75d52` feature #60355 [Serializer] Add `CDATA_WRAPPING_NAME_PATTERN` support to `XmlEncoder` (Maximilian Ruta)
- `ed9ba964` [Serializer] Add CDATA_WRAPPING_NAME_PATTERN support to XmlEncoder
- `16cb4ac4` [Serializer] add `can` to the accessor prefixes recognized by the `AttributeLoader`
- `49a1d99f` bug #61028 [Serializer] Fix `readonly` property initialization from incorrect scope (santysisi)
- `b40a697a` bug #60413 [Serializer] Fix collect_denormalization_errors flag in defaultContext (dmbrson)
- `d35f5168` bug #60820 [TypeInfo] Fix handling `ConstFetchNode` (norkunas)
- `78f53275` [FrameworkBundle] Allow using their name without added suffix when using #[Target] for custom services
- `492c7519` bug #60809 [Serializer] Fix `TraceableSerializer` when called from a callable inside `array_map` (OrestisZag)
- `b836df93` bug #60260 [Serializer] Prevent `Cannot traverse an already closed generator` error by materializing Traversable input (santysisi)
- `49e6d395` feature #52749 [Serializer] Add discriminator map to debug commmand output (jschaedl)
- `757d63b4` [Serializer] Add discriminator map to debug commmand output
- `8064a269` [Serializer] Add defaultType to DiscriminatorMap
- `a221b2f6` Update GetSetMethodNormalizer.php
- `7cb8ab43` Add `NumberNormalizer`
- `77fb3814` feature #59641 [Serializer] register named normalizer &amp; denormalizer aliases (mathroc)
- `21d6d335` feature #58599 [Serializer] Add xml context option to ignore empty attributes (qdequippe)
- `08658654` [Serializer] Add xml context option to ignore empty attributes
- `39ec8beb` bug #58870 [Serializer][Validator] prevent failures around not existing TypeInfo classes (xabbuh)
- `2127f4a5` feature #57630 [TypeInfo] Redesign Type methods and nullability (mtarld)
- `2154d9a0` fix support for phpstan/phpdoc-parser 2
- `a7572501` bug #58306 [Serializer] Collect denormalization errors for variadic params (mtarld)
- `a446b06f` feature #58308 [Serializer] Deprecate `AdvancedNameConverterInterface` (mtarld)
- `460c5df9` Add PR template and auto-close PR on subtree split repositories
- `29465307` [Serializer] Readd AdvancedNameConverterInterface to MetadataAwareNameConverter.
- `07ef8cf0` feature #56823 [Serializer] Introduce named serializers (HypeMC)
- `d93eac1f` [Serializer] Introduce named serializers
- `1f5d1bbb` bug #58259 [TypeInfo] Return bound type as base type in `TemplateType` (valtzu)
- `cb6cff44` [Serializer][Uid] Add the `Uuid::FORMAT_RFC_9562` and `UidNormalizer::NORMALIZATION_FORMAT_RFC9562` constants
- `2179c390` feature #57793 [Serializer] Support subclasses of `DateTime` and `DateTimeImmutable` (amcsi)
- `e31367ee` [Serializer] Add SnakeCaseToCamelCaseNameConverter
- `1f07d46c` bug #57928 [Serializer] fix denormalizing mixed collection values (rynhndrcksn)
- `d2077674` bug #57541 [Serializer] [ObjectNormalizer] Use bool filter when FILTER_BOOL is set (Maximilian Zumbansen)
- `240a7bb5` add missing method
- `3fd3ecad` bug #57341 [Serializer] properly handle invalid data for false/true types (xabbuh)
- `296df0ce` bug #57187 [Serializer] Fix `ObjectNormalizer` with property path (HypeMC)
- `8cdef77f` bug #52699 [Serializer] [PropertyAccessor] Ignore non-collection interface generics (mtarld)
- `af03803b` add missing deprecation contracts dependency
- `29dc0b37` feature #54663 [Serializer] Add `XmlEncoder::CDATA_WRAPPING_PATTERN` context option (alexpozzi)
- `e3605a57` add missing assertion
- `d97e118a` bug #54714 [Serializer] convert empty CSV header names into numeric keys (xabbuh)
- `529d3586` [Serializer] Add XmlEncoder::CDATA_WRAPPING_PATTERN context option
- `73820ab4` [Serializer] Add AbstractNormalizerContextBuilder::defaultConstructorArguments()
- `7714934f` add method parameters in final class
- `a3ea83c0` add missing return type-hints
- `260e6855` add $class, $format and $context arguments to NameConverterInterface methods
- `ef541952` add missing return type-hints
- `783ff0bb` bug #52917 [Serializer] Fix unexpected allowed attributes (mtarld)
- `0a1d1536` bug #54505 [Serializer]  initialize serializer in trait with null (xabbuh)
- `d9269bcf` bug #52698 [Serializer] Fix XML scalar to object denormalization (mtarld)
- `99b17460` feature #54346 [Serializer] Fix: Report Xml warning/error instead of silently returning a wrong xml (VincentLanglet)
- `108cfc09` feature #53160 [PropertyInfo] Deprecate PropertyInfo Type (mtarld)
- `aca54b9b` Add more explicit nullable types for default null values
- `d5945634` add missing changelog for PR 53898
- `fc664eaa` feature #53898 [Serializer] Add context for `CamelCaseToSnakeCaseNameConverter` (AurelienPillevesse)
- `ad2dc5ab` add context to force snake_case
- `5b73e6bf` feature #54153 [HttpKernel] allow boolean argument support for MapQueryString (Jean-Beru)
- `a9853ac9` [HttpKernel] allow boolean argument support for MapQueryString
- `1a23213f` bug #54148 [Serializer] Fix object normalizer when properties has the same name as their accessor (NeilPeyssard)
- `38b8e259` [Serializer] Add default groups
- `51359502` [Serializer] Add `DateTimeNormalizer::CAST_KEY` context option
- `aaf01ef8` bug #53361 [Serializer] Take unnamed variadic parameters into account when denormalizing (thijsBreker)
- `3d1c7327` bug #53530 [Serializer] Rewrite `AbstractObjectNormalizer::createChildContext()` to use the provided `cache_key` from original context when creating child contexts (amne)
- `b2ab3bff` [Serializer] Rewrite `AbstractObjectNormalizer::createChildContext()` to use the provided `cache_key` from original context when creating child contexts
- `baa60530` [Console][EventDispatcher][Security][Serializer][Workflow] Add PHPDoc to attribute classes and properties
- `91e732b3` bug #52817 [Serializer] Do not instantiate object if it is not instantiable (maxbaldanza)
- `8cbf02e5` Do not instantiate object if it is not instantiable
- `a359a00d` bug #53115 [Serializer] Fix partial denormalization with missing constructor arguments (HypeMC)
- `a6707a78` bug #53081 [Serializer] Keep stack trace for enum value denormalizer error (kylekatarnls)
- `5ec910e8` bug #52681 [Serializer] Fix support for DiscriminatorMap in PropertyNormalizer (mtarld)
- `8dbd8455` bug #52680 [Serializer] Fix access to private properties/getters when using the ``@Ignore`` annotation (mtarld)
- `ba6ddd69` bug #52683 [Serializer] Fix constructor deserialization path (mtarld)
- `33abfdd5` bug #52589 [Serializer] Fix XML attributes not added on empty node (mtarld)
- `746dac0c` bug #52626 [Serializer] Fix denormalizing date intervals having both weeks and days (oneNevan)
- `af32783d` [Serializer] Fix XML attributes not added on empty
- `e85ca719` [Routing] Extend old Annotations from new Attributes
- `1d600201` Add annotation -&gt; attribute aliases
- `ef456604` throw better exception in TranslatableNormalizer, add to changelog
- `ceadb4e0` bug #51992 [Serializer] Fix using `DateIntervalNormalizer` with union types (Jeroeny)
- `9c4cd99e` feature #50391 [FrameworkBundle][HttpKernel] Introduce `$buildDir` argument to `WarmableInterface::warmup` to warm read-only artefacts in `build_dir` (Okhoshi)
- `e1b5746f` [FrameworkBundle][HttpKernel] Introduce `$buildDir` argument to `WarmableInterface::warmup` to warm read-only artefacts in `build_dir`
- `f6ee5297` [Serializer] Add `XmlEncoder::CDATA_WRAPPING` context option
- `74dee2aa` feature #51779 [Serializer] Make `ProblemNormalizer` give details about Messenger’s `ValidationFailedException` (MatTheCat)
- `f009c342` bug #51369 [Serializer] Fix deserializing object collection properties (X-Coder264)
- `b88affa9` bug #51399 [Serializer] Fix deserializing of nested snake_case attributes using CamelCaseToSnakeCaseNameConverter (Victor-Truhanovich)
- `3a5cc601` Add some missing return types on traits
- `7d621653` feature #50212 [FrameworkBundle][Serializer] Add TranslatableNormalizer (Jean-Beru)
- `28f0049e` [FrameworkBundle][Serializer] Add TranslatableNormalizer
- `eefce00f` [Serializer] Add support for seld/jsonlint in order to enhance error messages
- `268ed8e2` feature #49594 [Serializer] Groups annotation/attribute on class (Brajk19)
- `aa5da7e3` Add types to public and protected properties
- `3589ce08` bug #50933 [Serializer] Fix deserializing nested arrays of objects with mixed keys (HypeMC)
- `13147779` Add types to private and internal properties
- `94e5f221` [7.0] Remove remaining deprecated code paths
- `e9c22393` Remove BC layers related to new methods and new parameters
- `4d465068` [Serializer] Fix ignoring objects that only implement DenormalizableInterface
- `e1e8e322` [Serializer] Add flag to require all properties to be listed in the input
- `b453210d` bug #49760 [Serializer] Add missing withSaveOptions method to XmlEncoderContextBuilder (mtarld)
- `164177b3` Add missing return types
- `0d5ae03e` Add CI check ensuring interfaces have return types
- `9a337f92` Add &quot;composer require...&quot; in all exception messages when needed
- `4584847d` [Serializer] Add types to private and internal properties
- `545da116` bug #49537 [Serializer] Unexpected value should throw UnexpectedValueException (ThomasTr)
- `92ef77d4` bug #50006 [Serializer] Update return type for `NormalizableInterface::normalize` to match `NormalizerInterface::normalize` (mpdude)
- `cb2db160` [Serializer] Add Debug command
- `86aff5a0` [HttpKernel] Create Attributes `#[MapRequestPayload]` and `#[MapQueryString]` to map Request input to typed objects
- `980037ea` [Serializer] Add missing return types
- `f5971d96` [Serializer] Marking some Normalizer classes as final
- `bfa57470` [Serializer] Add withSaveOptions to XmlEncoderContextBuilder
- `47f7a8c6` [Serializer] Add wildcard support to getSupportedTypes()
- `27f4cbac` [Serializer] Add methods `getSupportedTypes` to allow better performance
- `30a16f45` [Serializer] add a context to allow invalid values in BackedEnumNormalizer
- `fada431e` Add void return types
- `2659ca36` Add PHP types to private methods and functions
- `78688a06` Add missing PHPdoc return types
- `a0871568` feature #48164 [Serializer] Add encoder option for saving options (ihmels)
- `f5a54dd7` Add encoder option for saving options
- `e8087159` [Security][Serializer] Add missing args to trigger_deprecation
- `f22044db` [Serializer] Add `SerializedPath` annotation to flatten nested attributes
- `0c5d510e` bug #47764 [Serializer] fixed traceable decoration priorities (mtarld)
- `d2085ff1` feature #47462 [Mime] Simplify adding Parts to an Email (fabpot)
- `a48fc79d` [Mime] Simplify adding Parts to an Email
- `1ea9537d` [Serializer] Add missing types to FormErrorNormalizer
- `b98631a1` [Serializer] Add missing types to BackedEnumNormalizer
- `5f1acdd2` Add visibility context option in PropertyNormalizer
- `c6e65400` bug #46958 [Serializer] Ignore getter with required parameters (Fix #46592) (astepin)
- `c373ca60` bug #45884 [Serializer] Fix inconsistent behaviour of nullable objects in key/value arrays (phramz)
- `da38f8ea` [Serializer] Add support of true built-in type (from PHP 8.2)
- `72acdf15` bug #46526 [Serializer] Added missing __call to TraceableEncoder (danielburger1337)
- `d1368b66` bug #46527 [Serializer] Forget partially collected traces (mtarld)
- `56da3815` Added missing __call to TraceableEncoder
- `d7f0d76e` [Serializer] Added missing __call to TraceableNormalizer and TraceableSerializer
- `f437a514` bug #46297 [Serializer] Fix JsonSerializableNormalizer ignores circular reference handler in $context (BreyndotEchse)
- `d548955e` bug #45981 [Serializer][PropertyInfo] Fix support for &quot;false&quot; built-in type on PHP 8.2 (alexandre-daubois)
- `fae5876a` [Serializer][PropertyInfo] Fix support for &quot;false&quot; built-in type on PHP 8.2
- `6cc6c465` feature #45282 [Serializer] Support canners in object normalizer (rmikalkenas)
- `0607a37a` Add missing license header
- `a806b103` Add missing license header
- `15e4f450` Add missing license header
- `f52aefcf` [Serializer] Add serializer profiler
- `0c786644` bug #45532 Fix deprecations on PHP 8.2 (nicolas-grekas)
- `e82b0400` [Serializer] Deprecate support for abstract uid denormalization in UidNormalizer
- `e836e2c2` bug #44650 [Serializer] Make document type nodes ignorable (boenner)
- `701d7e69` bug #45391 [Serializer] Ensuring end of line character apply with constructor settings in CSV encoder (bizley)
- `2aefe1d9` feature #43973 [Serializer] Add context builders (mtarld)
- `c70fee8c` Add context builers
- `d1db3364` feature #43982 [Messenger][Serializer] Deprecate &quot;context aware&quot; interfaces (mtarld)
- `2dba9731` bug #44578 [PropertyInfo] Fix phpstan extractor issues (ostrolucky)
- `fd7e873d` bug #44602 [Serializer] Improve UidNormalizer denormalize error message (fancyweb)
- `b2f3d8a8` Add more nullsafe operators
- `46809cc4` [Serializer] fix support for lazy/unset properties

</details>

**symfony/validator** (v4.4.35 → v7.4.0-RC1)

Adds Indonesian translations for the Validator component, enabling validation messages to be displayed in Indonesian language for users and developers working with that locale

Fixes the bug that … ...

Fixes a bug in Symfony Validator’s AbstractComparison constructor that incorrectly handles array parameters, ensuring accurate comparison logic and preventing runtime errors during validation processes

[Validator] Fix Polish translation for word count validation message

Deprecates implicit constraint option names in YAML/XML mapping files, updating the validator configuration API to enforce explicit naming; developers must adjust mappings and ensure compatibility with newer Symfony Validator versions.

Adds an option to allow any protocol in the Assert\Url constraint, expanding URL validation flexibility for custom validators and allowing developers to accept URLs with non‑standard protocols without modifying the validator code.

Introduces a new attribute #[ExtendsValidationFor] that allows developers to declare additional validation constraints on classes, expanding the validator’s API and enabling custom constraint inheritance for more flexible data modeling

[Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class

Adds a new Video constraint class in Symfony Validator to validate video file uploads, enhancing type safety and preventing invalid media from being stored or displayed on the YMCA website.

Adds a JSON schema to the Symfony Validator for validating and autocompleting YAML configuration files, enabling developers to write correct config structures, catch errors early, and use IDE auto‑completion when editing YAML.

Deprecates the use of __sleep and __wakeup in AbstractPart implementations, removing legacy serialization hooks that may cause unexpected behavior or security issues. This change improves code quality and aligns with Symfony’s best practices, aiding developers in maintaining clean, predictable object state handling.

[Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations

Removed deprecated PHP 8.5 no‑op functions in Symfony Validator, eliminating unused calls that improve code quality and compatibility with newer PHP versions.

Deprecates passing choices as $options argument to Choice constraint, removing legacy API usage and improving type safety for developers working with Symfony Validator. This change ensures code quality by preventing ambiguous option handling and aligns the validator’s configuration with current best practices.

Adds Japanese translation for Twig template validator, extending validation messages to support internationalization and improving developer experience when debugging templates in Japanese locales.

Adds explicit `min` and `max` values to LengthValidator error messages, improving validation feedback for developers and enabling clearer debugging of input length constraints in custom form validators

Adds min and max constraints to LengthValidator error messages, improving API consistency and aiding developers in debugging validation errors by providing clearer boundary information

Removed deprecated argument type docblocks to clean up code and improve static analysis accuracy, aiding developers in maintaining compatibility with newer PHP versions and ensuring IDE support

mark getRequiredOptions()/getDefaultOption() of UniqueEntity as deprecated

Fixes validator handling of required options, preventing mis‑configured validation rules from throwing errors during runtime and ensuring correct error messages for form fields

Fixes a PHPDoc @var annotation in the Validator component, improving static analysis accuracy and IDE support for developers working with Symfony Validator constraints.

[Validator] Add missing Polish plural form for filename length validator

feature #60801 [Validator] deprecate handling options in the base Constraint class (xabbuh)

Adds missing HasNamedArguments to several Symfony Validator constraints, ensuring proper argument handling and preventing runtime errors when passing named parameters. This improves API consistency, type safety, and IDE support for developers using the validator library.

re-add accidentally removed changelog examples

bug #60478 [Validator] add missing `$extensions` and `$extensionsMessage` to the `Image` constraint (xabbuh)

Adds missing $extensions and $extensionsMessage properties to the Image constraint in Symfony Validator, enabling developers to specify custom extensions and error messages for image validation, improving code quality and API consistency.

Fixes bug #60426 in Symfony Validator by allowing SlugValidator to accept results from AsciiSlugger, ensuring slug generation works correctly with ASCII‑only slugs and preventing validation failures when non‑ASCII characters are stripped

[Validator] add pl translation for the Twig constraint

Adds translation support for Twig constraint messages, enabling developers to localize validation error outputs in templates and ensuring consistency across languages

Add Tagalog translations for security and validator components

Adds new options &quot;filenameCharset&quot; and &quot;filenameCountUnit&quot; to the File constraint in Symfony Validator, allowing developers to fine‑tune file name validation rules for character sets and count units; this expands the API and improves code flexibility.

[Validator] Add `filenameCharset` and `filenameCountUnit` options to `File` constraint

feature #59800 [Validator] Add support for closures in `When` (alexandre-daubois)

Adds support for closures in the Validator’s `When` constraint, enabling developers to pass custom callback functions to conditionally validate fields. This enhances flexibility and allows more expressive validation logic within Symfony forms.

Introduces an &#039;otherwise&#039; option to the When constraint in Symfony Validator, enabling developers to specify fallback validation logic when conditional checks fail, improving code flexibility and reducing error handling complexity.

Fixes deprecated support for named arguments in version constraints, ensuring compatibility with newer PHP versions and preventing runtime errors during validation rule parsing

add missing changelog/upgrade entries

Reviewed Czech translation for Symfony Validator messages, ensuring that validation error messages are accurate and consistent in Czech language, which improves code quality and user experience for developers handling multilingual validation logic

Fixes named argument support for the Slug constraint, enabling developers to pass parameters by name instead of positional order when configuring the validator, improving code readability and reducing errors.

Adds translations for the Slug constraint in Symfony Validator, enhancing internationalization support and ensuring that validation messages appear correctly in multiple languages when slug rules are violated

[Validator] Add `Slug` constraint

Adds a format option to DateTime validator error messages, enabling developers to customize error text for better debugging and API consistency.

Fixes a serialization/validation bug where missing TypeInfo classes caused failures, improving API stability and preventing runtime errors for developers integrating custom validators

Redesigns TypeInfo methods to allow null values and improves type safety in the validator library, enabling more flexible data handling and better IDE support

Updates the Bic constraint’s mode property type to a stricter type, enhancing validation accuracy and reducing potential misuse by developers

Add missing translations for Turkish (tr)

Provides a standardized PR template and automated closure logic, improving code quality checks and ensuring consistent workflow across the platform’s repository structure.

Adds missing Albanian translations for Symfony Validator and Security components, ensuring proper validation messages and error handling in Albanian language environments.

Explicitly escaping CSV characters ensures correct parsing of data in Symfony Validator’s CSV validation rules, preventing malformed input and improving reliability for developers handling CSV imports

Adds Catalan and Spanish translations for the Week constraint in Symfony Validator, extending locale support and ensuring validation messages are correctly localized for users speaking these languages.

Adds $groups and $payload to Compound constructor, enabling developers to customize validation groups and payload data when creating Compound constraints, improving flexibility for complex validation logic

Same as above – adds $groups and $payload in Compound constructor to allow custom validation groups and payloads for advanced validation scenarios

Adds more precise PHPDoc annotations, enhancing IDE support and static analysis for the Validator component; developers can better understand method signatures and return types

The added Polish translation for units 116-119, including unit labels for specific locales; developer‑based code updates to reflect localization support.

Adds German translations for the Week constraint messages, improving internationalization support and ensuring validators display correct error messages in German locales.

Adds the `D` regex modifier to relevant Symfony Validator constraints, enabling case‑insensitive matching for patterns that previously required explicit case handling. This improves validation logic and reduces bugs in user input processing.

Adds the &quot;D&quot; regex modifier to relevant validators in Symfony Validator, enabling case‑insensitive matching for patterns that require a lowercase or uppercase distinction. This improves validation accuracy and reduces false positives when validating user input such as email addresses or custom fields.

[Validator] Add French translation for the `Week` constraint

Introduces a new Week constraint to Symfony Validator, adding support for validating week numbers (1‑52) and ISO‑8601 week dates; this expands the validation API and allows developers to enforce custom business rules.

Adds a new &quot;Week&quot; validation constraint to Symfony Validator, enabling developers to enforce week‑number rules in custom forms and data models. This extends the validator API with a new constraint class, methods, and documentation, improving code quality and type safety.

[Validator] Add support for RFC4122 format in the `Ulid` constraint

Adds Dutch language translation for the WordCount validator constraint, enabling developers to support multilingual validation rules and improve internationalization of form data handling

Adds a custom validation message for top-level domain (tld) in URL constraints, enabling developers to provide clearer error feedback when validating URLs.

Adds Catalan and Spanish translations for the WordCount constraint, expanding language support for validation messages in the validator component. This enables developers to customize error messages in multiple locales and improves internationalization of form validations.

Adds Catalan and Spanish translations for the WordCount constraint in Symfony&#039;s validator component, extending language support for validation messages and ensuring correct locale‑specific error output when content is validated

[Validator] added Polish translation for units 114 and 115

Adds a Lithuanian WordCount constraint to Symfony Validator, extending validation rules for multilingual content and improving API consistency across languages

[Validator] Add `WordCount` constraint French translation

Adds German translation for the WordCount constraint in Symfony Validator, extending locale support and ensuring validation messages display correctly for German-speaking users.

Adds translation keys for WordCount constraint messages in Symfony Validator, enabling developers to localize validation feedback and maintain consistent error handling across multilingual sites.

[Validator] Add the `WordCount` constraint

[Validator] add setGroupProvider to AttributeLoader

Adds missing Portuguese (pt) translations for Symfony Validator messages, ensuring localized error messages are displayed correctly when form validation fails in Portuguese language contexts

Adds a new &quot;format&quot; option to the Ulid constraint in Symfony Validator, enabling developers to specify accepted ULID formats (e.g., base64 or hex) and customize validation logic for different data sources.

Adds a new &#039;format&#039; option to the Uuid constraint in Symfony Validator, enabling developers to specify accepted ULID formats and customize validation logic for UUID fields

Introduces an &#039;errorPath&#039; property on the Unique constraint, providing developers with more granular error handling and clearer mapping of validation errors to form fields

Improved precision of Yaml flags types in Symfony Validator, enhancing type safety and static analysis for developers.

add changelog entry

Introduces a new Yaml constraint in Symfony Validator to validate YAML content, enabling developers to enforce correct YAML syntax for data structures and configuration files within the platform.

Fixes a bug in UniqueValidator that incorrectly uses the wrong variable for custom error messages, ensuring accurate validation feedback and preventing misleading error output during form processing

Adds a strict mode option to BicValidator, enabling developers to enforce stricter BIC validation rules and improve data integrity in custom code that uses the validator.

Fixes autoload configuration errors that trigger warnings during optimized autoloader generation, ensuring reliable class loading and preventing runtime failures in Symfony applications.

Fixes IBAN validation logic to ensure check digits are always between 2 and 98, preventing incorrect IBANs from being accepted and improving data integrity in form processing

Adds a strict mode option to BicValidator, enabling developers to enforce stricter BIC validation rules and adjust validator behavior through configuration or code changes.

Adjusts type hints to comply with PHP 8.4 deprecation rules, removing nullable defaults for non‑nullable parameters. This ensures static analysis tools and IDEs correctly detect nullability issues, preventing runtime warnings and maintaining code quality.

Adds a missing HasNamedArguments attribute to Symfony Validator’s constraint metadata, enabling static analysis tools and IDEs to correctly recognize named arguments in validation rules. This improves type safety, reduces runtime errors, and enhances developer experience with better autocompletion and error detection.

Adds support for MAC address type categories (ALL*, LOCAL_, etc.) in MacAddress constraint, expanding validation logic and enabling developers to validate network device addresses more precisely.

Adds support for additional MAC address validation types (ALL*, LOCAL_*, etc.) to the MacAddress constraint, expanding the API and improving type safety for developers using Symfony Validator.

Adds missing Polish translation for validator unit 113, ensuring that validation messages in Polish are correctly displayed and improving internationalization support for developers working on multilingual forms

Adds missing Latvian translation for validator messages, ensuring localization support in validation errors and improving internationalization quality

Adds translation strings for the requireTld option message in Url constraint, enabling internationalized validation messages and improving API consistency across locales

Deprecates PropertyInfo type in Symfony Validator, signaling a change in the public API that developers must update code to avoid future incompatibilities

Adds a new requireTld option to the Url validator, allowing developers to enforce top‑level domain checks in validation rules and customize behavior.

Adds a new `requireTld` option to the Url constraint in Symfony Validator, enabling developers to enforce that URLs must include a top‑level domain; this updates the API and improves validation logic for custom form fields.

Adds support for PHP Stringable objects in Symfony Validator’s ExecutionContext::build/addViolation(), allowing developers to pass custom string‑like objects as violation messages and improving type safety.

Add more explicit nullable types for default null values

bug #54191 [Validator] add missing invalid extension error entry (xabbuh)

Fixes validator logic for BIC codes by allowing the first four characters to be digits, correcting validation errors and ensuring compliance with international banking standards. This change updates the internal regex pattern used in Symfony&#039;s Validator component, improving code quality and compatibility across applications.

Fixes the UniqueValidator normalization logic to ensure keys are correctly reduced before being compared, preventing duplicate detection errors and improving data integrity in validation rules

Adds missing invalid extension error entry to the validator’s error message catalog, enabling accurate error reporting for file extensions and enhancing user feedback

Updates Arabic translation strings in the Validator component, improving internationalization support for Arabic‑language users

Fixes bug related to fields without constraints in a Collection validator, ensuring proper validation behavior when no constraints are defined

Adds new IP address and CIDR constraint variants (_NO_PUBLIC, _ONLY_PRIV, _ONLY_RES) to Symfony Validator, expanding validation rules for network configurations and enabling more granular security checks in code.

Adds Lithuanian and Dutch translations to the validator component, expanding internationalization support for validation messages and enabling developers to provide localized error feedback in their custom forms

[Validator] added missing Portuguese and Albanian translations

Adds Estonian and Romanian translations to the Symfony Validator component, expanding language support for validation messages in the platform’s internationalized forms.

Utilizes constructor property promotion in Charset and MacAddress constraints to streamline code, reducing boilerplate and improving readability for developers working on validation logic

Adds Spanish translations to the validator component, enabling developers to support localization features and ensuring consistency across language-specific validation messages

Adds missing translations for validation messages and other strings in the Symfony Validator component, improving internationalization support and ensuring that error messages are correctly displayed in multiple locales.

Added missing Finnish, Italian and Serbian Cyrillic translations for the validator, which improves developer experience with proper localization and consistency across languages

Fixes validator bug that incorrectly rejected empty lists of fields, restoring expected behavior for constraint collections and improving validation reliability.

Adds PHPDoc annotations to validator constraints, enhancing static analysis and IDE autocomplete for developers working with Symfony Validator API. This improves code quality and reduces runtime errors by providing clearer type information.

The commit prevents incompatible Translator implementations from being used by enforcing type checks and throwing a clear exception when an unsupported translator is passed to Symfony&#039;s Validator component. This ensures that developers maintain consistency in translation logic, avoid runtime errors, and improve code stability.

[Validator] added missing Serbian Latin translation

[Validator] added missing Czech translations

Adds a missing Portuguese translation for Symfony Validator messages, ensuring locale support and accurate error feedback in multilingual forms

Adds a missing Luxembourgish translation to Symfony Validator messages, ensuring localized validation feedback for users speaking Luxembourgish and improving internationalization support

Adds missing Greek translations to Symfony Validator messages, ensuring internationalized validation feedback for applications that support Greek locales. This improves code quality by extending language coverage and aids developers in testing multilingual scenarios.

Adds Azerbaijani language translations to Symfony Validator messages, ensuring accurate validation error messages for users in that locale and improving internationalization support

[Validator] added missing Slovenian translations

Adds Bulgarian translations to Symfony Validator’s translation catalog, ensuring validation error messages display correctly for users speaking Bulgarian. This expands internationalization support and improves user experience in multi‑language deployments.

Adds missing Turkish translations to Symfony Validator messages, ensuring error feedback is localized for Turkish users and improving internationalization support in validation logic.

Adds missing Russian translations to validator messages, ensuring internationalized validation feedback for developers working on multilingual sites and improving code quality by covering all language support.

[Validator] added missing Danish translations

[Validator] added missing Macedonian translation

[Validator] added missing Slovak translations

Adds support for PHP \\Stringable objects in all validator constraints, enabling developers to use custom string-like classes without breaking validation logic and improving type safety

Adds missing Indonesian translation for validator messages, ensuring localized error messages for Indonesian-speaking users and improving internationalization support

Adds missing Ukrainian translation in validator constraints, enabling developers to provide accurate localization for Ukrainian users

We ...

Fixes a bug in Symfony Validator that caused an exception to be thrown when validating data, improving stability and preventing runtime errors during form processing

Adds missing Hungarian translation strings in Symfony Validator messages, enhancing internationalization support for Hungarian users and improving user experience

Adds a missing Latvian translation for the Symfony Validator component, ensuring validation messages are correctly localized in Latvian. This fixes an oversight that could cause untranslated error messages during form validation and improves internationalization support.

Adds Polish translation for Symfony Validator messages, ensuring proper localization of validation error text in forms and API responses, improving user experience for Polish-speaking users

Adds translations for the MacAddress constraint in Symfony Validator, extending international support and ensuring accurate validation messages across languages.

Adds a new Symfony Validator constraint class MacAddress to validate MAC addresses, expanding the validation API and enabling developers to enforce correct network device identifiers within forms or data models

Adds Serbian (sr_Latn) translation strings to Symfony Validator messages, extending localization support for validation errors and improving internationalization consistency across the platform

[Validator] Add missing Hungarian translation

Adds missing HR translation for Symfony Validator’s hr language code, ensuring validation messages are correctly localized for users in Hungary and improving internationalization support

Introduces a new MacAddress constraint to the Symfony Validator component, enabling developers to validate MAC addresses via the validator API and extending form validation capabilities

Adds missing translations for Ukrainian (uk) language in Symfony Validator, including all relevant messages and improving internationalization accuracy

Adds missing Japanese translation for validator messages (id=111), ensuring language support and consistency in validation error displays; developers need to know that the validator bundle now includes this locale, which can affect localization logic and testing.

Adds Estonian language translations for Symfony Validator messages, ensuring validation error messages display correctly in Estonian locales and improving internationalization support.

Adds Swedish language translations for Symfony Validator messages, ensuring validation errors are displayed in the correct locale and improving user experience for Swedish-speaking users.

Adds missing Latvian translation for Symfony Validator messages, improving internationalization support and ensuring validation error messages display correctly in Latvian locales

Fixes a bug in Symfony Validator’s Email constraint that incorrectly returned error names, ensuring accurate validation messages and preventing false positives during form processing

Adds missing translations for validation messages in Symfony Validator, ensuring that error messages appear correctly in languages not previously supported, which improves localization and user experience.

[Validator] Add `Charset` french translation

Adds a new Charset constraint to Symfony Validator, enabling developers to enforce character set restrictions on input data and improve validation logic for custom forms and APIs.

Add missing Chinese(zh_TW) translations

Adds a Serbian (sr_Cyrl) translation to Symfony Validator messages, expanding language support for validation error displays and ensuring internationalization consistency across the platform.

Adds Serbian language support to Symfony Validator translations, enabling developers to use localized error messages for validation rules in Serbian contexts

Adds missing Arabic translation for validator messages, ensuring localized validation feedback in Arabic-speaking regions and improving internationalization support.

Fixes a bug where validator used known option names as field names, preventing incorrect validation logic and ensuring accurate error messages for custom form fields

[Validator] Add missing italian translation

feature #52954 [Validator] Add `list` and `associative_array` types to `Type` constraint (Florian Hermann)

Adds new validation types `list` and `associative_array` to Symfony’s Type constraint, expanding API options for developers to validate arrays and associative structures in forms or data models.

Adds Uzbek (uz) translation strings to Symfony Validator messages, expanding language support for validation feedback and ensuring localized error messages in user interfaces

Adds missing Greek (el) translation for validator messages, ensuring localization support in validation error displays and improving internationalization consistency across the platform

Adds missing translation IDs for validator messages, ensuring consistency across languages and improving internationalization support in validation logic

Adds missing Vietnamese translations for the validator’s error messages, ensuring that validation errors are displayed correctly in Vietnamese locales and improving internationalization support for developers who rely on locale‑specific message handling

[Validator] Add missing translations for Japanese.

Adds missing Russian translation strings to Symfony Validator component, ensuring validation messages are correctly localized for Russian users and improving internationalization support

Adds missing Azerbaijani translation strings to Symfony Validator component, providing accurate validation feedback in Azerbaijani language for better user experience

Add missing French translation strings for the Symfony Validator component; this improves localization and user‑facing validation messages in French.

Adds Spanish translations for validator messages, improving localization support and ensuring error messages are displayed correctly for users speaking Spanish

[Validator] add missing Turkish translation and correct grammar

Add missing romanian translation

Adds a missing Ukrainian translation entry to the validator&#039;s message catalogue, ensuring that validation errors are correctly displayed in Ukrainian for users of that locale. This improves internationalization support and prevents untranslated error messages.

Adds Croatian translation to Symfony Validator messages, improving localization support and ensuring validation error messages are displayed in Croatian for users. This update enhances internationalization and code quality by extending message catalogs.

Adds missing translation entries for the Symfony Validator component in the validators.pl.xlf file, ensuring localization support for Polish language and preventing validation error messages from displaying in English when users submit forms in Polish.

[Validator] add missing lv translation

Adds Dutch language translation for Symfony Validator messages, ensuring that validation error messages appear in Dutch when the site’s locale is set to nl, improving localization and user experience for developers who need accurate error feedback.

Adds missing translation entries to Symfony Validator messages, ensuring localized error feedback and improving internationalization support for all validation rules

Adds Bulgarian translation entries to validator messages, improving internationalization support for users speaking Bulgarian and ensuring consistent error messaging across all locales

Closes missing Czech translation entries in validators.cs.xlf; this update fixes locale-specific validation messages and improves consistency across languages

Added missing translations in turkish and updated validators.tr.xlf

Adds Chinese (zh_CN) translations to Symfony Validator messages, enabling internationalized validation error messages for applications that support multiple locales. This updates the validator&#039;s translation files and expands its language coverage.

Adds missing Chinese translations to Symfony Validator messages, ensuring validation error strings are fully localized for Chinese-speaking users and improving internationalization support in the platform.

[Validator] fix: add missing translations for for Thai (th)

[Validator] Added missing Swedish translations

Adds Estonian translations to Symfony Validator messages, ensuring validation error messages display correctly for Estonian users and improving internationalization support in the codebase

Adds missing Hungarian validator translations to Symfony Validator component, ensuring validation messages appear in Hungarian for users and developers testing locale-specific behavior.

Added missing Bosnian translations #51929

Adds missing Serbian (sr_Latn) translations to Symfony Validator messages, ensuring localized validation errors for users speaking Serbian. This improves internationalization support and prevents untranslated error texts.

Adds missing Serbian (sr_Cyrl) translations to Symfony Validator messages, expanding internationalization support and ensuring accurate validation feedback for users speaking Serbian Cyrillic

Updates Symfony Validator translation files with missing Danish entries, ensuring accurate internationalization support and preventing runtime errors when validating data in Danish locales.

Adds missing Basque translations to validation messages, improving internationalization support and ensuring correct error feedback for users speaking Basque

[FrameworkBundle][Validator] Allow implementing validation groups provider outside DTOs

[Validator] Add missing arabic translations

Adds Romanian translations for Symfony Validator component, ensuring validation messages are correctly displayed in Romanian locales, improving internationalization support and preventing localization errors

Adds missing Uzbek translations to the Symfony Validator component, ensuring that validation error messages are available in Uzbek and improving internationalization support for developers working on multilingual applications

[Validator] Add missing Finnish translations

Adds translations for Portuguese (pt)

Adds missing Catalan translations to Symfony Validator messages, ensuring that validation error messages display correctly for users in Catalan, improving internationalization and user experience.

Adds missing Belarusian translations for validation messages, ensuring correct locale support and preventing untranslated error strings during form validation in Symfony&#039;s validator component

[Validator] Add missing Ukrainian translations #51960

[Validator] Add missing translations for Indonesian (id)

Adds missing Vietnamese translations to Symfony Validator messages, ensuring validation error messages display correctly in Vietnamese locales and improving internationalization support for developers working on multilingual sites

Adds Croatian (hr) translations for Symfony Validator messages, ensuring proper validation error feedback in Croatian locales and improving internationalization support for developers building multilingual forms

[Validator] Add missing Spanish (es) translations #51956

Updates translation files and adds missing locale entries, ensuring the validator component works correctly across locales and preventing runtime errors when validating user input

[Translation][Validator] Add missing translations for Russian (104 - 109)

[Translation][Validator] Add missing translations for Japanese (104 - 109)

[Translation][Validator] Add missing translations for pt_BR (104-109)

Adds Persian (fa) translations to Symfony Validator messages, ensuring validation error messages are correctly localized for users speaking Persian, improving user experience and internationalization support in the platform.

Adds Italian translations for validation messages in Symfony Validator, ensuring error texts are localized and improving user experience for Italian-speaking sites.

bug #51726 [Validator] NoSuspiciousCharacters custom error messages fix (bam1to)

[Validator] Add is_valid function to Expression constraint

Adds translations for the &quot;mk&quot; locale to Symfony&#039;s validator component, enabling validation messages in Macedonian and improving internationalization support for custom forms and API responses.

Adds a new annotation to Symfony Validator constraints, enabling developers to specify custom validation metadata directly on constraint classes. This improves code readability and allows IDEs to provide better autocompletion for validator annotations.

[Validator] Add ability to validate time without seconds

Updates Symfony Validator&#039;s Type constraint to support new numeric validation modes (number, finite-float, finite-number), adding stricter type checks and improving data integrity across forms and API payloads

Add types to public and protected properties

Adds missing German translations for the Validator component, ensuring validation messages are correctly localized in German environments and improving internationalization support

Introduces explicit type hints on private and internal properties, enhancing static analysis, IDE autocomplete, and code quality for developers working with Symfony Validator internals

Updates the Type constraint to include new numeric validation options (number, finite-float, finite-number), expanding validator capabilities and allowing more precise data type checks

Fixes regression that re‑synchronizes class metadata on parent classes, ensuring consistent validation behavior across inheritance hierarchies and preventing bugs in complex object models

Adds explicit return type declarations to magic methods in Symfony Validator, improving static analysis, IDE autocomplete and reducing runtime errors by clarifying method signatures

Remove BC layers related to new methods and new parameters

feature #50396 [Validator] Allow single integer for the `versions` option of the `Uuid` constraint (alexandre-daubois)

Adds Polish language translations for Symfony Validator messages, improving internationalization support and ensuring accurate error feedback for users in Poland; developers need to maintain locale files and update translation bundles.

Adds a new &quot;message&quot; option to the PasswordStrength constraint allowing developers to customize validation error messages via the validator API, improving flexibility and code maintainability.

[Validator][Translator] Fix xlf files for en &amp; fr translations. Bug introduced by #50590

Adds missing English and French translations for validator constraint messages, ensuring that validation errors are displayed correctly in both locales, which improves internationalization support and reduces user confusion.

Fixes Doctrine deprecation warnings by updating deprecated API calls and adding type hints, improving code quality, reducing runtime errors, and enabling better IDE support for developers

Adds explicit return type declarations to several validator methods, improving static analysis, IDE autocomplete and reducing runtime errors caused by unexpected null or mixed values

Adds a composer requirement note in exception messages to guide developers on missing dependencies and improve debugging by indicating which package is needed for each error

Adds a new translation parameter to Symfony Validator&#039;s Length constraint, allowing developers to specify a custom translation key for the current value length message, enhancing localization support and API flexibility.

[Validator] New `PasswordStrength` constraint

add translations for the filename max length validator option

Adds PHPDoc void return types to validator classes, improving static analysis and IDE support for developers by clarifying method signatures and enabling better type checking

Adds an &#039;exclude&#039; option to the Symfony Validator&#039;s Cascade constraint, allowing developers to control which nested objects are validated and improving validation logic flexibility.

Adds an &quot;excluded&quot; option to the Cascade constraint in Symfony Validator, enabling developers to skip validation for specific fields or nested objects during cascading validation, improving flexibility and reducing unnecessary checks.

[Validator] Add the option filenameMaxLength to the File constraint

[Validator] Implement countUnit option for Length constraint

feature #49300 [Validator] Add a `NoSuspiciousCharacters` constraint to validate a string is not suspicious (MatTheCat)

Adds explicit return type annotations to ExecutionContextInterface methods, improving static analysis and IDE support for developers working with Symfony Validator code

Introduces a new validator constraint &quot;NoSuspiciousCharacters&quot; that checks strings for suspicious characters to prevent spoof attempts, adding an API for developers to enforce stricter input validation and enhancing security in form handling

Adds explicit void return types to several validator methods, improving static analysis and IDE autocomplete accuracy for developers building or extending validation logic

Adds PHP type hints to private methods and functions, improving static analysis, IDE autocompletion, and reducing runtime errors by enforcing correct argument types and return values

Adds explicit PHPDoc return types to functions and methods, improving static analysis, IDE autocomplete, and code quality for developers working on the Symfony Validator component.

Improves internal code quality and performance by refactoring and optimizing various parts of the validator component, leading to faster execution and better maintainability for developers working on custom validation logic.

Adds a `getConstraint()` method to the `ConstraintViolationInterface`, exposing the underlying constraint object for developers to inspect violations and customize validation logic. This enhances API usability, supports better debugging, and improves IDE type hinting.

[Validator] Add `getConstraint()` method to `ConstraintViolationInterface`

Provides an option to opt‑out of the EmailValidator deprecation warning when using Validation::createValidatorBuilder(), allowing developers to maintain legacy code without triggering deprecation notices and enabling smoother migration to newer validation APIs.

Adds a new regex pattern to the Validator&#039;s Regex constraint, allowing developers to specify custom patterns for validation and improving code quality by enforcing stricter input checks

Adds support for UUID time‑based versions (TIME_BASED_VERSIONS) to the Symfony Validator’s Uuid constraint, enabling developers to validate UUIDs that embed timestamps and ensuring stricter type compliance in validation logic.

[Validator] Add `Uuid::TIME_BASED_VERSIONS` to match that a UUID being validated embeds a timestamp

Adds padding to the HIBP check component in Symfony Validator, improving layout consistency and ensuring that the validation UI is properly spaced within the form. This change affects the component’s rendering logic and may require developers to update styling or template references for consistent visual spacing.

Add padding to HIBP check

Adds Urdu language support to form components and validator logic, expanding the platform’s multilingual capabilities and ensuring validation rules work correctly for Urdu inputs

bug #47921 Validator: fix FileValidator when value is an UploadedFile (dunglas)

feature #47872 [Validator] new email validation option to match with w3c official specification (guillemfondin)

Adds a new email validation option that aligns with the W3C official specification, enabling developers to enforce stricter compliance and improve data integrity in form handling.

feature #47710 [Validator] File: add option to check extension (dunglas)

Adds an option to the Symfony Validator file type constraint that checks file extensions, enabling developers to enforce stricter validation rules for uploaded files and improving code quality by preventing invalid uploads

Adds a getCause() method to ConstraintViolationInterface, enabling developers to retrieve the underlying exception that caused a validation error. This improves debugging and allows custom error handling logic in code.

Add a few more ??=

[Validator] [Security] Add Norwegian translations

Introduces a new validation constraint named `When` that allows developers to conditionally validate fields based on other field values, adding flexibility and extending the validator API for custom logic

Adds UuidV7 and UuidV8 classes to the validator library, providing new UUID generation methods that developers can use in custom validation rules or data models; this extends API functionality for handling unique identifiers.

Introduces a new When constraint and validator to Symfony Validator component, expanding validation logic with conditional rules that developers can use in form or entity validation code

Adds a missing changelog entry for the AtLeastOneOf constraint in Symfony Validator, documenting its behavior and usage for developers to reference when implementing custom validation rules

Adds a &quot;negate&quot; option to the Expression constraint in Symfony Validator, enabling developers to invert validation logic for expressions without modifying code logic or adding custom constraints. This enhances flexibility and reduces boilerplate when building complex validation rules.

Adds a &#039;match&#039; option to Symfony&#039;s Choice constraint, enabling developers to enforce that a chosen value matches an expected pattern or set of values; this expands validation logic and improves API flexibility.

Fixes a PHP warning caused by accessing an undefined array key in NotCompromisedPasswordValidator, eliminating runtime errors and improving validator reliability for password security checks

Fixes a bug in Symfony Validator’s Valid constraint when used as an Attribute, ensuring that the traverse option correctly propagates during validation. This improves code quality and prevents unexpected validation failures for developers building custom validation logic.

Adds missing Basque translations to Symfony Validator messages, ensuring localized validation error texts for users speaking Basque, improving internationalization support and user experience

Adds a &#039;pass&#039; option to Symfony’s Expression constraint, enabling developers to control whether validation should be skipped when the expression evaluates to false, improving flexibility and error handling in custom validation logic

Add missing license header

Adds a license header to the source file, ensuring compliance with licensing requirements and improving code quality for static analysis tools and documentation

Adds a new &quot;match&quot; option to Symfony’s Choice constraint, enabling developers to enforce exact value matches and improve validation logic for custom forms or data models

Adds ability to create validator constraints that require mandatory arguments, enabling stricter validation rules and improving API usability for developers building custom validations.

Fixes PHP 8.2 deprecations by updating type hints and return types in validator components, ensuring code compatibility, improving static analysis and IDE support

bug #44967 [Validator] Multi decimal to alpha for CssColor validator (tilimac)

Adds Turkish translations for missing validator component messages, ensuring localized validation errors are correctly displayed in the UI and improving user experience for Turkish-speaking users

Adds Slovak translations for Symfony Validator messages, enabling developers to localize validation errors in Slovak and improving internationalization support.

Adds missing Galician (gl) translations for all validator messages, ensuring language‑specific validation feedback is available to developers and users working in that locale.

Adds null-safe operators to improve code safety and reduce runtime errors in validator logic, enhancing static analysis support and making debugging easier for developers

<details>
<summary><strong>Technical Details (281 commits)</strong></summary>

- `448b9923` fix: added new indonesian translations
- `94b1a714` bug #61926 [Validator] fix handling Doctrine-style options handling (xabbuh)
- `46111e5a` bug #61909 [Validator] bad value on AbstractComparison constructor using array parameter (vincent4vx)
- `865d5e5e` [Validator] Fix Polish translation for word count validation message
- `4f9b77c9` feature #61791 [Validator] deprecate implicit constraint option names in YAML/XML mapping files (xabbuh)
- `012b1213` [Validator] Add option to allow ANY protocol in Assert\Url constraint
- `9cc995d7` feature #61545 [Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class (nicolas-grekas)
- `249bb3b3` [Validator] Add `#[ExtendsValidationFor]` to declare new constraints for a class
- `af2056bc` [Validator] Add the Video constraint for validating video files
- `74e760ca` [Serializer][Validator] Add JSON schema for validating and autocompleting YAML config files
- `dfa835d9` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations
- `0c0fcbda` [Validator] Deprecate implementing `__sleep/wakeup()` on GenericMetadata implementations
- `22d2015e` Remove calls to no-op functions, deprecated in PHP 8.5
- `60c962ab` feature #61255 [Validator] deprecate passing choices as `$options` argument to `Choice` constraint (xabbuh)
- `297a24dc` [Validator] Add Japanese translation for Twig template validator
- `25e8c167` feature #60805 [Validator] Add `min` and `max` in both error messages of `LengthValidator` (VincentLanglet)
- `77ab6ecc` [Validator] Add `min` and `max` in both error messages of `LengthValidator`
- `2aff3f87` remove docblocks for deprecated argument types
- `a23b5201` mark getRequiredOptions()/getDefaultOption() of UniqueEntity as deprecated
- `8d5f3780` bug #61117 [Validator] fix handling required options (xabbuh)
- `1eba40e1` bug #61106 Fix `@var` phpdoc (fabpot)
- `837a2288` [Validator] Add missing Polish plural form for filename length validator
- `67a846a3` feature #60801 [Validator] deprecate handling options in the base Constraint class (xabbuh)
- `a19337e1` [Validator] Add missing HasNamedArguments to some constraints
- `a9e21997` re-add accidentally removed changelog examples
- `5a2e17b9` bug #60478 [Validator] add missing `$extensions` and `$extensionsMessage` to the `Image` constraint (xabbuh)
- `5b4e90ee` add missing $extensions and $extensionsMessage to the Image constraint
- `24ea9696` bug #60426 [Validator] let the `SlugValidator` accept `AsciiSlugger` results (xabbuh)
- `47610116` [Validator] add pl translation for the Twig constraint
- `50de4b9d` add translations for the Twig constraint
- `27c79f2e` Add Tagalog translations for security and validator components
- `90f464d9` feature #58485 [Validator] Add `filenameCharset` and `filenameCountUnit` options to `File` constraint (IssamRaouf)
- `15b904cb` [Validator] Add `filenameCharset` and `filenameCountUnit` options to `File` constraint
- `373bc1a0` feature #59800 [Validator] Add support for closures in `When` (alexandre-daubois)
- `4a3587a5` [Validator] Add support for closures in `When`
- `8ddcb6e9` [Validator] Add support for the `otherwise` option in the `When` constraint
- `bc4d9eba` fix the version constaints not supporting named arguments are deprecated in
- `6bb3d015` add missing changelog/upgrade entries
- `54685097` Mark Czech Validator translation as reviewed
- `67a6f134` fix named arguments support for the Slug constraint
- `0448e185` add translations for the Slug constraint
- `9ef1ad0b` [Validator] Add `Slug` constraint
- `fa6ce06c` [Validator] [DateTime] Add `format` to error messages
- `0e64f87d` bug #58870 [Serializer][Validator] prevent failures around not existing TypeInfo classes (xabbuh)
- `76d2cc63` feature #57630 [TypeInfo] Redesign Type methods and nullability (mtarld)
- `fd1350fd` Improve type for the `mode` property of the Bic constraint
- `563408d4` Add missing translations for Turkish (tr)
- `8de589f9` Add PR template and auto-close PR on subtree split repositories
- `e84d2d4b` Add missing Albanian translations for Security and Validator components
- `4bb3f805` pass CSV escape characters explicitly
- `454027e1` [Validator] Add Catalan and Spanish translation for `Week` constraint
- `395ff96b` feature #58062 [Validator] Add $groups and $payload to Compound constructor (derrabus)
- `1b5828d2` [Validator] Add $groups and $payload to Compound constructor
- `2cb05691` [Validator] Add more precise PHPDoc
- `a28c3023` [Validator] added Polish translation for units 116-119
- `30a719dd` add German translations for the Week constraint messages
- `3a2f9038` bug #57984 [Validator] Add `D` regex modifier in relevant validators (alexandre-daubois)
- `eac749c1` [Validator] Add `D` regex modifier in relevant validators
- `f34398f2` [Validator] Add French translation for the `Week` constraint
- `89aeef81` feature #57908 [Validator] Add `Week` constraint (alexandre-daubois)
- `6c9baedc` [Validator] Add `Week` constraint
- `8b73bba9` [Validator] Add support for RFC4122 format in the `Ulid` constraint
- `790f213a` [Validator] Add Dutch translation for `WordCount` constraint
- `94e7465b` [Validator] add tldMessage in URL constructor
- `4595a47b` [Validator] Add Catalan and Spanish translation for `WordCount` constraint&quot;
- `5dbccf18` [Validator] Add Catalan and Spanish translation for `WordCount` constraint&quot;
- `980f1016` [Validator] added Polish translation for units 114 and 115
- `05100114` [Validator] Add WordCount constraint Lithuanian translation
- `258476f1` [Validator] Add `WordCount` constraint French translation
- `62f696d8` [Validator] Add German translation for `WordCount` constraint
- `635c46b7` add validation message translations for the WordCount constraint
- `e96202bd` [Validator] Add the `WordCount` constraint
- `aa3e93a6` [Validator] add setGroupProvider to AttributeLoader
- `a3fb46f8` [Security][Validator] Added missing Portuguese(pt) translations
- `c9ffc7a9` feature #57438 [Validator] Add the `format` option to the `Ulid` constraint to allow accepting different ULID formats (alexandre-daubois)
- `3a8f055a` [Validator] Add the `format` option to the `Uuid` constraint to allow accepting different ULID formats
- `d1d95a3b` [Validator] Add `errorPath` to Unique constraint
- `7ce93b31` Add more precise types for the Yaml flags
- `d02196ba` add changelog entry
- `bc5028f6` [Validator] Add `Yaml` constraint for validating YAML content
- `11f7858a` bug #57213 [Validator] [UniqueValidator] Use correct variable as parameter in (custom) error message (seho-nl, Sebastien Hoek)
- `1db6dadc` feature #54879 BicValidator add strict mode to validate bics in strict mode (maxbeckers)
- `d536c47c` bug #57275 Fix autoload configs to avoid warnings when building optimized autoloaders (Seldaek)
- `8307f633` bug #54924 [Validator] IBAN Check digits should always between 2 and 98 (karstennilsen)
- `a9d50c13` [Validator] BicValidator add strict mode to validate bics in strict mode
- `0254dc37` Because PHP 8.4 is adding deprecation warnings for non-nullable parameters with null default, change typehints
- `0763ff6d` add missing HasNamedArguments attribute
- `4ff86e57` feature #54473 [Validator] Add support for types (`ALL*`, `LOCAL_*`, `UNIVERSAL_*`, `UNICAST_*`, `MULTICAST_*`, `BROADCAST`) in `MacAddress` constraint (Ninos)
- `7e721686` [Validator] Add support for types (`ALL*`, `LOCAL_*`, `UNIVERSAL_*`, `UNICAST_*`, `MULTICAST_*`, `BROADCAST`) in `MacAddress` constraint
- `d391d8e0` [Validator] added missing Polish translation for unit 113
- `a68ff74c` [Validator] add missing lv translation
- `37b9bf97` add translations for the requireTld constraint option message
- `6a26d020` feature #53160 [PropertyInfo] Deprecate PropertyInfo Type (mtarld)
- `4436611b` feature #54408 [Validator] Add a `requireTld` option to `Url` constraint (javiereguiluz)
- `c0271c89` [Validator] Add a `requireTld` option to `Url` constraint
- `4fa0f6c0` [Validator] Accept `Stringable` in `ExecutionContext::build/addViolation()`
- `4d107c2d` Add more explicit nullable types for default null values
- `6f1d53b9` bug #54191 [Validator] add missing invalid extension error entry (xabbuh)
- `9304c6b0` bug #54219 [Validator] Allow BICs’ first four characters to be digits (MatTheCat)
- `6ed96ef1` bug #54137 [Validator] UniqueValidator - normalize before reducing keys (Brajk19)
- `2d54d59a` add missing invalid extension error entry
- `5bf1fce6` [Validator] Review Arabic translations and add correct translations.
- `e6b1dcfb` bug #53755 [Validator] Fix fields without constraints in `Collection` (xabbuh, HypeMC)
- `59e6cb9c` [Validator] Add additional versions  (`*_NO_PUBLIC`, `*_ONLY_PRIV` &amp; `*_ONLY_RES`) in IP address &amp; CIDR constraint
- `6689cfc0` [Validator] added reviewed Lithuanian and Dutch translations
- `0dbf600d` [Validator] added missing Portuguese and Albanian translations
- `4c5bd15e` [Validator] added missing Estonian and Romanian translations
- `01a4fdf1` use constructor property promotion in Charset and MacAddress constraints
- `c98fc1c0` [Validator] added missing Spanish translations
- `b315a6e2` Add missing translations using ChatGPT
- `53dca534` [Validator] added missing Finnish, Italian, and Serbian Cyryllic translations
- `b1253575` bug #53383 [Validator] re-allow an empty list of fields (xabbuh)
- `8fb38a8e` [Validator] Add PHPDoc to validator constraints
- `22757d3a` prevent incompatible Translator implementations to be used
- `6d873597` [Validator] added missing Serbian Latin translation
- `c510a95a` [Validator] added missing Czech translations
- `1ddd37d4` [Validator] added missing Portuguese translation
- `e90b567d` [Validator] added missing Luxembourgish translation
- `8b482066` [Validator] added missing Greek translations
- `75adba61` [Validator] added missing Azerbaijani translations
- `983b027b` [Validator] added missing Slovenian translations
- `13b63b88` [Validator] added missing Bulgarian translations
- `bc544c26` [Validator] added missing Turkish translations
- `b742fbb5` [Validator] added missing Russian translations
- `ec6db9b2` [Validator] added missing Danish translations
- `e7a95c19` [Validator] added missing Macedonian translation
- `2145e41d` [Validator] added missing Slovak translations
- `029fb657` feature #53374 [Validator] support `\Stringable` instances in all constraints (xabbuh)
- `301fb5d3` Add missing Indonesian translation
- `33f2596e` [Validator] added missing Ukrainian translation
- `ada401a3` [Validator] Add missing hr translation
- `c4c30b5e` bug #53350 [Validator] fix the exception being thrown (xabbuh)
- `7d309cbf` [Validator] added missing Hungarian translation
- `404e4c03` [Validator] add missing lv translation
- `d298c28d` [Validator] added missing Polish translation
- `8670c96e` add translations for the MacAddress constraint
- `dc6279fa` feature #51862 [Validator] Add `MacAddress` constraint for validating MAC address (Ninos)
- `0a71885a` Added missing Serbian (sr_Latn) translations
- `40f8dc17` [Validator] Add missing Hungarian translation
- `532f0444` [Validator] Add missing hr translation
- `81efa071` [Validator] Add `MacAddress` constraint for validating MAC address
- `5d1f5337` Add missing translations (uk) #53307
- `f95f7d57` [Validator] Add missing Japanese translation (id=111)
- `65cd53f5` Added missing Estonian validator translations
- `b813e3cf` add missing swedish validators translations
- `44ae4b39` [Validator] added missing Latvian translation
- `159944cf` bug #52406 [Validator] Fix `Constraints\Email::ERROR_NAMES` (mathroc)
- `e02ad4af` add missing translations
- `4bd15766` [Validator] Add `Charset` french translation
- `75783c56` [Validator] Add the `Charset` constraint
- `84d971e8` Add missing Chinese(zh_TW) translations
- `0223fa01` Added missing Serbian (sr_Cyrl) translation
- `b6145232` [Validator] Add missing Serbian translation
- `8279e7cd` [Validator] Add missing arabic translation
- `92d65d08` bug #53133 [Validator] Fix using known option names as field names (HypeMC)
- `0cd164ad` [Validator] Add missing italian translation
- `ac111fb9` feature #52954 [Validator] Add `list` and `associative_array` types to `Type` constraint (Florian Hermann)
- `e6ede6bb` [Validator] Add `list` and `associative_array` types to `Type` constraint
- `8fccab2c` Add missing translation for Uzbek (uz)
- `1c2e4bcc` [Validator] Add missing translation for Greek (el)
- `f903838f` Add missing ID translations
- `e87cebea` Add missing translations for Vietnamese (vi)
- `b9bdccc6` [Validator] Add missing translations for Japanese.
- `ab1480f7` [Validator] Add missing translation for Russia (ru) #53041
- `0d19aed3` [Validator] add missing Azerbaijani translation
- `b77a8c41` Add missing FR translation
- `9b832df1` Add missing spanish translation
- `348e6430` [Validator] add missing Turkish translation and correct grammar
- `c08a8d7f` Add missing romanian translation
- `eec59c41` Add missing translation for Ukrainian (uk) #53050
- `417db56c` [Validator] Add missing Croation translation
- `1c332d5d` Add missing translation into validators.pl.xlf
- `d0b34c92` [Validator] add missing lv translation
- `c370603b` [Validator] Added missing dutch translation
- `d797bea6` add missing translation
- `fb89e7e6` [Validator] Add missing translations for Bulgarian #51931
- `48c18765` Closes #51936-Added Missing translations for Czech (cs) in validators.cs.xlf file
- `a6081e76` Added missing translations in turkish and updated validators.tr.xlf
- `b098da1b` [Validator] Added Chinese(zh_CN) translations
- `150888fe` [Validator] Add missing Chinese translations #51934
- `59fdc8a5` [Validator] fix: add missing translations for for Thai (th)
- `a51e43ca` [Validator] Added missing Swedish translations
- `0437190d` [Validator] Added missing Estonian translations #51939
- `89b25756` Add missing Hungarian validator translations
- `d48b2a35` Added missing Bosnian translations #51929
- `46e2ef60` Added missing Serbian (sr_Latn) translations
- `0ec6ac45` Added missing Serbian (sr_Cyrl) translations
- `a453c4fa` #51937 - Added missing Danish translations
- `16c93de3` add missing basque translations
- `0fb9e1f9` [FrameworkBundle][Validator] Allow implementing validation groups provider outside DTOs
- `f31c9df8` [Validator] Add missing arabic translations
- `ad156246` [Validator] Added missing translations for Romanian language for Validator component
- `cdededdc` Added missing Uzbek translations.
- `63ed973b` [Validator] Add missing Finnish translations
- `f5b7c216` Adds translations for Portuguese (pt)
- `edde0881` [Validator] add missing catalan translations
- `6f4d33a6` #51928 Missing translations for Belarusian (be)
- `f1972bee` [Validator] Add missing Ukrainian translations #51960
- `ddbc7a0e` [Validator] Add missing translations for Indonesian (id)
- `717718c4` [Validator] Add missing translations for Vietnamese (VI)
- `7d6b5138` Add missing Validator translations - Croatian (hr)
- `3999ad13` [Validator] Add missing Spanish (es) translations #51956
- `2355ce04` Add missing dutch translations
- `f8b3a3f4` [Translation][Validator] Add missing translations for Russian (104 - 109)
- `4bb6e954` [Translation][Validator] Add missing translations for Japanese (104 - 109)
- `8ba2abb4` [Translation][Validator] Add missing translations for pt_BR (104-109)
- `258a806b` [Validator] Add missing Persian(fa) translations
- `85ed7e80` [Validator] Add missing italian translations
- `b3f4df88` bug #51726 [Validator] NoSuspiciousCharacters custom error messages fix (bam1to)
- `50b0062c` [Validator] Add is_valid function to Expression constraint
- `287ef8c8` [Form][Security][Validator] Add mk translations
- `8feb3c49` [Validator] Add annotation in Constraint
- `13eb518f` [Validator] Add ability to validate time without seconds
- `d539c89b` feature #50907 [Validator] Update `Type` constraint, add `number`, `finite-float` and `finite-number` validations (guillaume-a)
- `6521a859` Add types to public and protected properties
- `77533f12` [Validator] add missing German translations
- `759e162f` Add types to private and internal properties
- `d6a3ac94` [Validator] Update `Type` constraint, add `number`, `finite-float` and `finite-number` validations
- `98455678` bug #50788 [Validator] Fix regression with class metadatada on parent classes (rmikalkenas)
- `7d31e099` Add missing return types to magic methods
- `39ee02f5` Remove BC layers related to new methods and new parameters
- `35a791bc` feature #50396 [Validator] Allow single integer for the `versions` option of the `Uuid` constraint (alexandre-daubois)
- `62b6cd0a` [Validator] Add missing validator translations in Polish language
- `b9bf8e20` [Validator] Add the `message` option to the `PasswordStrength` constraint
- `3d6abbb9` [Validator][Translator] Fix xlf files for en &amp; fr translations. Bug introduced by #50590
- `ce25a4dd` Add missing EN and FR translations for newest constraints
- `25ca8e57` bug #50524 Fix Doctrine deprecations (nicolas-grekas)
- `24742e0b` Add missing return types
- `cbfaca2c` Add &quot;composer require...&quot; in all exception messages when needed
- `f2517cb3` [Validator] Add new parameter for translation on Length constraint: current value length.
- `1a3f072f` [Validator] New `PasswordStrength` constraint
- `3da7428a` add translations for the filename max length validator option
- `bef0bf79` [Validator] Add PHPDoc void return types
- `b5bc601f` feature #49596 [Validator] Add the `exclude` option to the `Cascade` constraint (alexandre-daubois)
- `741521a5` [Validator] Add the `excluded` option to the `Cascade` constraint
- `f9030aed` [Validator] Add the option filenameMaxLength to the File constraint
- `5549c337` [Validator] Implement countUnit option for Length constraint
- `72786dc2` feature #49300 [Validator] Add a `NoSuspiciousCharacters` constraint to validate a string is not suspicious (MatTheCat)
- `c2801bcd` [Validator] Add missing return types to ExecutionContextInterface
- `5210070b` [Validator] Add a `NoSuspiciousCharacters` constraint to validate a string is not a spoof attempt
- `da57429a` Add void return types
- `40208a81` Add PHP types to private methods and functions
- `19727fac` Add missing PHPdoc return types
- `8e88c2f3` Misc code improvements and optimizations
- `27dbd027` feature #48671 [Validator] Add `getConstraint()` method to `ConstraintViolationInterface` (syl20b)
- `2d50f4bb` [Validator] Add `getConstraint()` method to `ConstraintViolationInterface`
- `9d7df681` [Validator] Allow opt-out of EmailValidator deprecation when using Validation::createValidatorBuilder()
- `6394bee6` [Validator] Add pattern in Regex constraint violations
- `97e96f51` feature #48381 [Validator] Add `Uuid::TIME_BASED_VERSIONS` to match that a UUID being validated embeds a timestamp (alexandre-daubois)
- `598fea6c` [Validator] Add `Uuid::TIME_BASED_VERSIONS` to match that a UUID being validated embeds a timestamp
- `6e614a82` feature #47976 Add padding to HIBP check (rullzer)
- `1563f2b4` Add padding to HIBP check
- `c1a878ff` Added  Urdu Language Translation in Form Component, Security Core and in Validator Component
- `a25f5654` bug #47921 Validator: fix FileValidator when value is an UploadedFile (dunglas)
- `d8f793af` feature #47872 [Validator] new email validation option to match with w3c official specification (guillemfondin)
- `4ed1913c` [Validator] new email validation option to match with w3c official specification
- `39c24ac1` feature #47710 [Validator] File: add option to check extension (dunglas)
- `6347670a` [Validator] File: add option to check extension
- `adbb5662` add the getCause() to the ConstraintViolationInterface
- `04ddbdbc` Add a few more ??=
- `51d06a00` [Validator] [Security] Add Norwegian translations
- `064b461f` feature #42593 [Validator] Add the `When` constraint and validator (wuchen90)
- `304b72f0` [Uid] Add UuidV7 and UuidV8
- `b9a2d5bc` [Validator] Add the When constraint and validator
- `38bc4d83` add missing changelog entry for the AtLeastOneOf constraint
- `83bed059` feature #46599 Add &quot;negate&quot; option to Expression constraint (fmata)
- `dcfd4e60` feature #45977 [Validator] Add the match option to the Choice constraint (fancyweb)
- `f268dd1a` bug #46948 [Validator] : Fix &quot;PHP Warning: Undefined array key 1&quot; in NotCompromisedPasswordValidator (KevinVanSonsbeek)
- `24a1e835` bug #46244 [Validator] Fix traverse option on Valid constraint when used as Attribute (tobias-93)
- `b8d69723` add missing basque translations
- `6c005fc0` Add &quot;pass&quot; option to Expression constraint
- `3fe3cf0e` Add missing license header
- `1b391504` Add missing license header
- `aec5554d` [Validator] Add the match option to the Choice constraint
- `135f049d` feature #45072 [Validator] Allow creating constraints with required arguments (norkunas)
- `8fdee5a7` bug #45532 Fix deprecations on PHP 8.2 (nicolas-grekas)
- `06c3d849` bug #44967 [Validator] Multi decimal to alpha for CssColor validator (tilimac)
- `ee0189ba` 43460: add missing validator component turkish translations
- `85786782` [Validators] Add translations for Slovak #43735
- `77e4a25b` [Translations] Add missing translations for Galician (gl)
- `5c8383a1` Add more nullsafe operators

</details>

**symfony/process** (v7.3.0 → v7.4.0-RC1)

Adds a missing return type to the Closure docblock, improving static analysis and IDE support for developers by ensuring accurate type hints and preventing potential runtime errors

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `7ca8dc2d` Add missing return type for docblock Closure

</details>

**symfony/yaml** (v7.3.2 → v7.4.0-RC2)

Deprecates __sleep and __wakeup methods on AbstractPart implementations to align with PHP serialization best practices, removing legacy magic methods that may cause unexpected behavior during object persistence and improving code maintainability.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `31cc125a` [Mime] Deprecate implementing `__sleep/wakeup()` on `AbstractPart` implementations

</details>

**twig/twig** (v3.21.1 → v3.22.0)

feature #4642 [CommonMark] Update configuration keys + allow extra keys for extensions (doekenorg)

Adds documentation for the use_yield option in Twig’s control flow, clarifying how to pass data to child templates via the &quot;yield&quot; keyword, improving code readability and aiding developers in correctly using this feature

Adds explicit use statements for referenced classes in getOperators, improving static analysis and IDE support by ensuring proper type resolution and reducing potential runtime errors

Adds a note to format_datetime explaining how to install required extensions, clarifying dependency requirements and improving code maintainability for developers working on Twig templates

Fixes a bug that prevents Twig from throwing an error when it cannot guess template information for an error page, improving runtime stability and preventing unexpected failures during rendering.

<details>
<summary><strong>Technical Details (5 commits)</strong></summary>

- `5f2b1ee6` feature #4642 [CommonMark] Update configuration keys + allow extra keys for extensions (doekenorg)
- `b8827b41` Add documentation for use_yield option
- `8c789527` #4677: Add use statements for classes referenced in the getOperators @psalm-return doc
- `d0177b94` Add note to format_datetime explaining how to install required extensions
- `98b664a0` bug #4688 Avoid errors when failing to guess the template info for an error (stof)

</details>

**doctrine/annotations** (1.13.2 → 2.0.2)

Adds a Composer lint workflow to enforce coding standards and detect syntax errors during CI, improving code quality and reducing future maintenance issues

Removes deprecated APIs (#468) to eliminate legacy code paths, simplifying API usage and reducing potential runtime errors for developers

Bump PHP version to 7.2 which supports newer features like type hints and improved performance; developers will need to adjust code compatibility

Remove deprecated method (e.g., function?;). This is a direct removal of legacy code and re‑tune the API; developers must update references to this method

Add hint to use PsrCachedReader instead of `CachedReader` and `FileCacheReader`

Adds a psalm.xml file to .gitattributes for proper git attribute handling of Psalm annotations, ensuring that static analysis tools correctly parse and ignore files during linting, improving code quality and IDE support.

Fixes coding style and linting issues across the annotations package, improving code quality, readability, and consistency for developers working on custom extensions or debugging.

Fixes a warning caused by eval() in filemtime() calls, preventing runtime errors and improving code stability for developers working with annotations parsing logic

<details>
<summary><strong>Technical Details (8 commits)</strong></summary>

- `06a3f838` Add Composer Lint workflow
- `6d492921` Remove deprecated APIs (#468)
- `5ccddc60` Bump PHP to 7.2
- `7a95b3bf` Remove deprecated method
- `7d2d4e95` Add hint to use PsrCachedReader instead of `CachedReader` and `FileCacheReader`
- `523bc8e7` Add psalm.xml to .gitattributes
- `ae6170f3` Address coding standard issues
- `253dca47` Fix filemtime() warning because of eval&#039;d code (#494)

</details>

**doctrine/lexer** (1.2.1 → 2.1.1)

Address move away from master

Workflow maintenance includes refactoring of internal state handling and task scheduling logic, improving code stability and making future extensions easier for developers

Replace the s‑t‑e‐p‑i‑t‐e‑k-…???...…?…?…????...?????... ...?...??????...???...???...?..??...??......???...

Adds type hints and return types to lexer token classes, improving static analysis, IDE autocomplete, and reducing runtime errors by ensuring correct data structures are used throughout the lexer implementation

Replaces a loosely‑typed object‑like array with a strongly typed class, improving type safety and IDE support for lexer parsing logic. This change ensures that token structures are explicitly defined, reducing runtime errors and aiding static analysis tools.

Adds Psalm assertions to the lexer for stricter validation of token patterns, improving parser reliability and reducing potential runtime errors

<details>
<summary><strong>Technical Details (6 commits)</strong></summary>

- `a34795bd` Address move away from master
- `5c89ce13` Workflow maintenance (#74)
- `0d2314ad` Replace object-like array with class
- `241097b5` Add types where possible (#81)
- `a56013d0` Replace object-like array with class
- `ab643870` Add psalm assertions

</details>

**guzzlehttp/psr7** (2.7.1 → 2.8.0)

Adds PHP 8.5 support by updating type hints and return types throughout the library, improving static analysis, IDE compatibility and ensuring code runs correctly on newer PHP releases

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `b0b99b85` [2.8] Add PHP 8.5 support (#628)

</details>

**egulias/email-validator** (3.1.2 → 4.0.4)

Deprecated PHP 8.2 functions utf8_en/decode() removed; code now uses updated UTF‑encoding helpers to maintain compatibility and prevent runtime errors, improving static analysis and IDE support

Nullable type declaration for default null value (#328)

GitHub Actions (#348)

DNS record check now passes if email address has no top-level domain (#355)

Adds a dependency management tool (Dependabot) to automatically monitor and update package dependencies, improving code quality, security, and maintenance for developers

<details>
<summary><strong>Technical Details (5 commits)</strong></summary>

- `f88dcf4b` Don&#039;t use utf8_en/decode() functions, they&#039;re deprecated on PHP 8.2 (#325)
- `413b2636` Nullable type declaration for default null value (#328)
- `b531a231` GitHub Actions (#348)
- `3a85486b` DNS record check now passes if email address has no top-level domain (#355)
- `e25ccf7e` Add depandabot

</details>

**masterminds/html5** (2.7.5 → 2.10.0)

Adds optional end tags for table elements in the HTML5 parser, enabling stricter compliance with HTML5 specifications and improving rendering consistency across browsers.

Address php-cs-fixer remarks

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `de52ce13` add support for optional end tags for table elements
- `9e650079` Address php-cs-fixer remarks

</details>

**asm89/stack-cors** (1.3.0 → v2.3.0)

Adds CORS support for OPTIONS requests, enabling cross‑origin preflight checks and improving API interoperability with external services

Restricts CORS header addition to only when an origin header is present, reducing unnecessary header exposure and enhancing security compliance

Adds type‑hint annotations for functions in stack‑cors, improving static analysis, IDE support and code quality

<details>
<summary><strong>Technical Details (3 commits)</strong></summary>

- `03157d5d` Add CORS to OPTIONS
- `bde59163` Only add CORS headers when origin header is added (#76)
- `1913589c` Add typehints (#78)

</details>

**pear/archive_tar** (1.4.14 → 1.6.0)

Add maintainer note

Adds a new mcdruid component to the archive_tar package, providing an API for handling MD5 checksum validation during tar archive creation and extraction. This extends functionality for developers who need custom integrity checks in PHP applications.

Adds a SECURITY.md file documenting security best practices for the package, providing developers with guidance on secure usage and potential vulnerabilities to address in code.

Adds support for older PHP5 versions (PHP 5.4) by including back‑ported code from pear/composer, ensuring compatibility with legacy environments and allowing developers to maintain functionality across multiple PHP releases.

Switching to PHP 8 introduces new language features, stricter type handling, and performance improvements; developers must update code compatibility, adjust type hints, and test against the newer runtime to maintain functionality.

<details>
<summary><strong>Technical Details (5 commits)</strong></summary>

- `01b771fe` Add maintainer note
- `5817cd26` add mcdruid
- `c95f4d88` Add SECURITY.md
- `bb299860` add older PHP5&#039;s since pear/composer allow back to 5.4
- `bc24cf89` remove old PHP 5 and add new PHP 8 versions

</details>

**ycloudyusa/yusaopeny** (11.0.0.0-alpha1 → 11.1.0.0-beta3)

Updates the open-y-subprojects/openy_custom module to include new custom functionality and API changes that affect how developers build features within the YMCA platform.

Fixes migration tool logic to ensure consistent database schema updates during deployment, improving reliability and reducing manual intervention

Adds Drupal feature modules to the platform, introducing new API endpoints and configuration options that developers can use to extend functionality, enhancing code extensibility and modularity

Removed dependency on symfony/dom-crawler to reduce bundle size and simplify codebase; this change eliminates a large third‑party library, improving build times and reducing potential security vulnerabilities

feat: update carnation

feat: update carnation

Adds beta and RC release support for openy_carnation, enabling developers to test new features before stable releases by exposing the version control tags in the module&#039;s configuration and API.

The Drupal 11.1.8 upgrade includes numerous internal API changes, performance improvements, and deprecation warnings that developers need to review for code compatibility and maintainability, ensuring smooth integration of custom modules and extensions.

Introduces new migration hooks and updated API usage for Drupal 11, allowing developers to adapt codebases and custom modules to the latest core version while maintaining backward compatibility.

Fixes a bug where a CSS class was not added to the MediaLibrary dialog, ensuring that custom styling and component behavior work correctly when users interact with media selection UI.

feat: add jquery-migrate to core jquery to support jQuery 3.x scripts

Fixes a bug that prevented adding camp menu block to the CMS, ensuring correct rendering and functionality of custom block components in the platform.

Updated the utility module &quot;useless_machines&quot; to improve performance and remove obsolete code paths, ensuring better runtime efficiency and reducing maintenance overhead for developers

Fixes a missing field in the Layout Builder’s media handling API, correcting the data payload for media insertion and preventing runtime errors when adding media items

Removes obsolete patches that were previously failing and now resolved, cleaning up codebase and eliminating deprecated or redundant logic that would otherwise cause errors or conflicts

<details>
<summary><strong>Technical Details (15 commits)</strong></summary>

- `20dafec6` feat: update open-y-subprojects/openy_custom
- `30edd6fa` fix: add patch for migrate_tools
- `77786d83` add drupal/features
- `4882be5d` feat: remove symfony/dom-crawler
- `8db90769` feat: update carnation
- `68692b73` feat: update carnation
- `f5926031` feat: alow beta and rc releases for openy_carnation
- `6730ebc2` feat: update Drupal core to 11.1.8
- `3ea5e1b5` feat: Drupal 11 upgrade path
- `4c71bf31` fix: CSS class is not added to MediaLibrary dialog
- `13528e9e` feat: add jquery-migrate to core jquery to support jQuery 3.x scripts
- `27139832` fix: cannot add camp menu block
- `9aa55882` feat: update useless_machines
- `80a40369` D11 - Missing field when adding media in Layout Builder
- `651f62d2` Remove failing patches that are fixed or merged

</details>

**symfony/dom-crawler** (v4.4.45 → v7.4.0-RC1)

Introduces a standardized PR template and automatic PR closure on subtree splits, enabling developers to enforce consistent documentation and reduce manual cleanup of merge requests.

Replaces the use of uniqid() for temporary file creation with a more secure and deterministic approach, improving code reliability and preventing race‑condition bugs that could affect filesystem operations

Adds a new optional default value argument to Crawler::attr(), enabling developers to provide fallback values when retrieving attributes from DOM nodes and improving API flexibility and error handling

[DomCrawler] Added argument `$default` to method `Crawler::attr()`

[DomCrawler][FrameworkBundle] Add `assertAnySelectorText*`

Adds explicit type hints to public and protected properties in the DOM Crawler component, improving static analysis, IDE autocompletion, and reducing runtime type errors

Adds planned arguments to Crawler::innerText() and sendHeaders() methods, enabling developers to specify optional parameters for text extraction and header handling, improving API flexibility and type safety.

Adds explicit return type hints to various functions and methods in the DOM crawler library, improving static analysis, IDE autocompletion, and reducing runtime errors by ensuring correct data types are returned

Adds a Composer requirement directive to exception messages when needed, improving dependency visibility and ensuring correct package installation during runtime errors.

Adds explicit void return type declarations to methods in the DomCrawler component, improving static analysis and IDE autocomplete support for developers working with Symfony&#039;s DOM crawler API

Introduces a new assertion method `assertSelectorCount` in Symfony’s DomCrawler component, enabling developers to verify that a specific CSS selector appears a defined number of times during tests, improving test reliability and simplifying test code

<details>
<summary><strong>Technical Details (11 commits)</strong></summary>

- `71115202` Add PR template and auto-close PR on subtree split repositories
- `3d4c11e4` stop using uniqid() to create temporary files
- `043715b6` [DomCrawler] Add argument `$default` to `Crawler::attr()`
- `31371484` [DomCrawler] Added argument `$default` to method `Crawler::attr()`
- `2463efd8` [DomCrawler][FrameworkBundle] Add `assertAnySelectorText*`
- `5bd33472` Add types to public and protected properties
- `80faaff9` [HttpFoundation][DomCrawler] Add planned arguments to Crawler::innerText() and sendHeaders() methods
- `2611ec97` Add missing return types
- `321d4f73` Add &quot;composer require...&quot; in all exception messages when needed
- `8f24248b` Add void return types
- `5786d2cb` [DomCrawler][FrameworkBundle] Add `assertSelectorCount`

</details>

**consolidation/annotated-command** (4.10.1 → 4.10.4)

The commit removes the deprecated default value for the escape parameter in PHP&#039;s fputcsv() function, updating the API to align with current standards and ensuring developers use correct escaping behavior when generating CSV files

Add changelog

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `0cf112da` Fix #315: default value for the escape parameter for fputcsv() is now deprecated (#316)
- `e550ea4f` Add changelog

</details>

**laminas/laminas-stdlib** (3.20.0 → 3.21.0)

Bump development dependencies and address new Psalm static analysis warnings by adding type hints, return types, and deprecations to improve code quality, IDE support, and maintainability

Adds explicit return type hints in PHP doc blocks to improve static analysis and IDE autocomplete for developers, ensuring type safety and reducing runtime errors

Updates the supported PHP version range by adding support for PHP 8.5 and dropping PHP 8.1 compatibility, enabling developers to use newer language features and maintain codebase stability

<details>
<summary><strong>Technical Details (3 commits)</strong></summary>

- `84316f5d` Bump dev deps, fix or baseline new Psalm issues
- `7da9ad10` Add missing return types as doc blocks
- `57ff76fe` Add support for PHP 8.5 and remove support for PHP 8.1

</details>

**setasign/fpdi** (v2.6.3 → v2.6.4)

Adds a guard against false return values from readBytes(), preventing PHP warnings that can surface during PDF parsing and improving error handling for developers working with FPDI&#039;s byte reading logic

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `555d0952` Added check for false of readBytes() to avoid PHP warning

</details>

**drupal/lb_hero** (1.5.0 → 1.5.4)

Introduces a new attribute option for link elements in the lb_hero component, enabling developers to customize link behavior such as target, rel, or aria attributes via code. This expands the API and improves flexibility for custom implementations.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `b8935699` feat: [#3557695] Allow attributes on links

</details>

**doctrine/collections** (2.3.0 → 2.4.0)

Adds a cautionary note about using non-scalar values in `matching()` expressions, improving static analysis and IDE support by preventing type errors when matching complex data structures

Addresses existing deprecations, updating API usage patterns to avoid deprecated methods and ensuring compatibility with newer library versions

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `5765c3c6` Add a cautionary note about using non-scalar values in `matching()` expressions
- `201c66f2` Address existing deprecations

</details>

**symfony/polyfill-mbstring** (v1.23.1 → v1.33.0)

Fixes deprecation warning when passing null to strpos(), ensuring compatibility with PHP 8.1 and preventing runtime errors that could affect custom code or plugins using string search functions

Corrects deprecated behavior of preg_split() on PHP 8.1 by handling null inputs, improving reliability for developers who rely on regex splitting in the platform

Adds mb_check_encoding() with array support to polyfill, extending API to handle multiple strings simultaneously, enhancing code readability and performance for multi‑string checks

Improved mb_string case folding map for improved accuracy in case‑folding operations, better support for Unicode characters that’s more accurate ..

Adds case folding map to mbstring polyfill, improving Unicode string handling and ensuring consistent behavior across PHP versions for developers working with multilingual content

Introduces a new static method Mbstring::assertEncoding() that validates string encodings and throws an exception on invalid data, improving code reliability and enabling better IDE type checking for developers working with multibyte strings

Require iconv for mbstring

<details>
<summary><strong>Technical Details (7 commits)</strong></summary>

- `0abb51d2` Passing null to strpos() throws deprecation on PHP 8.1
- `7fdf1868` Passing null to preg_split() throws deprecation on PHP 8.1
- `f9c7affe` add mb_check_encoding with array value
- `ed4043bb` Add case folding map
- `46180f48` bug #427 Add case folding map (alexandre-daubois)
- `64642e08` Add Mbstring::assertEncoding()
- `01072b63` Require iconv for mbstring

</details>

**symfony/service-contracts** (v2.5.0 → v3.6.1)

Adds explicit return type hints to service contract methods, improving static analysis and IDE autocomplete for developers working with the Symfony Service Contracts API.

Adds return type hints to contract interfaces and bumps the package version to v3, improving static analysis support, IDE autocomplete, and ensuring type safety for developers using these contracts.

Adds type hints to private properties in service contracts, improving static analysis and IDE autocomplete for developers working with contract interfaces

Adds #[Required] attribute annotations to enforce mandatory fields in Symfony contracts, improving static analysis and IDE support for developers by ensuring that contract methods declare required parameters explicitly.

Adds generic type parameters to ServiceProviderInterface, improving static analysis and IDE support by allowing precise type hints for service providers and reducing runtime errors

Adds missing template notation on ServiceLocator to ensure correct service resolution and improve dependency injection reliability, aiding developers in debugging and maintaining code quality

Adds explicit return type declarations to contract interfaces, improving static analysis and IDE autocomplete for developers working with service contracts

Adds explicit Composer dependency instructions in exception messages to aid developers in resolving missing package errors and ensures consistent runtime behavior across environments

Introduces ServiceCollectionInterface to allow developers to type‑hint collections of services in dependency injection, improving static analysis and IDE support for service configuration.

Adds a pull request template and auto‑closing logic for subtree split repositories, improving code quality by standardizing PR submissions and reducing stale PRs in the repository

<details>
<summary><strong>Technical Details (10 commits)</strong></summary>

- `102d292a` Add return types, round 1
- `94edda4b` [Contracts] add return types and bump to v3
- `5c8f40af` [Contracts] Add types to private properties
- `3c1353c4` [DI] add `#[Required]` where applicable
- `d66cd8ab` [Contracts/Service] Add generics to ServiceProviderInterface
- `43150386` [DependencyInjection] Add missing template notation on ServiceLocator
- `aee5f59d` [Contracts] Add missing return types
- `e70d0d45` Add &quot;composer require...&quot; in all exception messages when needed
- `cea2eccf` [DependencyInjection] Add `ServiceCollectionInterface`
- `f37b419f` Add PR template and auto-close PR on subtree split repositories

</details>

**symfony/event-dispatcher-contracts** (v1.1.11 → v3.6.0)

Adds explicit parameter type declarations to contract interfaces, improving static analysis, IDE autocompletion and ensuring consistency across implementations.

[DependencyInjection] Add the Required attribute.

[Contracts] add TranslatableInterface

Adds a new method `withOptions()` to the HttpClientInterface, enabling developers to set custom request options (e.g., headers, timeouts) directly on the client instance for more flexible HTTP communication and better code reuse.

Adds explicit return types to the EventDispatcherInterface contract, improving static analysis and IDE type inference for developers using the dispatcher API

Introduces typed private properties in the contract, enhancing code readability and enforcing stricter type safety across implementations

Improves PHPDoc comments for the EventDispatcherInterface to support static analysis tools and IDEs, ensuring clearer documentation and better developer experience

Adds explicit composer requirement instructions in exception messages to aid developers debugging dependency issues and ensure correct package installation.

Introduces a new ServiceCollectionInterface in Symfony&#039;s event dispatcher contracts, providing a typed collection API for event handlers and improving type safety across the library

Creates an PR template that automates the pull request workflow and provides consistent documentation for developers, enhancing code quality and consistency

<details>
<summary><strong>Technical Details (10 commits)</strong></summary>

- `bb09b1d8` Add parameter type declarations to contracts.
- `0ba7d544` [DependencyInjection] Add the Required attribute.
- `5e8ae4d3` [Contracts] add TranslatableInterface
- `9b7cabf9` [HttpClient] Add `HttpClientInterface::withOptions()`
- `e8adc810` [Contracts] add return types and bump to v3
- `aa542228` [Contracts] Add types to private properties
- `e0000d6c` [Contracts] EventDispatcherInterface phpdocs improvement for static analyze
- `05caf7b1` Add &quot;composer require...&quot; in all exception messages when needed
- `705c57c6` [DependencyInjection] Add `ServiceCollectionInterface`
- `e0fe3d79` Add PR template and auto-close PR on subtree split repositories

</details>

**symfony/error-handler** (v4.4.34 → v8.0.0-RC1)

Silences deprecated PHP error constants E_DEPRECATED and E_USER_DEPRECATED to reduce noisy logs during development and production, improving code readability and debugging experience.

Removed deprecated Application::add() methods from the FrameworkBundle console component, eliminating legacy code paths and improving API clarity for developers working with Symfony Console commands.

Adds a new console command to dump static error pages, enabling developers to generate and inspect error templates for debugging and documentation purposes

Fixes event delegation bug in WebProfilerBundle’s toggle links, preventing click‑event mishandling that could break profiler UI interactions and ensure accurate request tracking during debugging

Enhances static‑analysis and IDE support by adding strict return type constraints for non‑empty strings and lists when patching error handlers, ensuring code quality and preventing runtime errors

Add PR template and auto-close PR on subtree split repositories

Fixes malformed HTML by adding missing self‑closing tags on link elements, ensuring correct parsing and rendering of anchor tags in templates and preventing potential XSS or layout bugs

[HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`

Enhances Symfony HttpKernel exception handling by adding optional HTTP status codes and improved stack trace formatting, improving debugging and error reporting for developers.

Add types to public and protected properties

Adds explicit type hints to private and internal properties, improving static analysis accuracy, IDE autocompletion, and reducing runtime errors by ensuring property values match expected types

Adds explicit return types to magic methods in symfony/error-handler, improving static analysis and IDE autocomplete for developers; ensures type safety and clearer API contracts across the error handling component.

Adds explicit return type hints to magic methods in the error-handler package, improving static analysis and IDE autocomplete for developers working with Symfony&#039;s exception handling.

[7.0] Remove remaining deprecated code paths

Documented breaking changes for BC compatibility, clarifying API deprecations and required updates to maintain code stability across versions

Syncs the `createTabs` helper from WebProfilerBundle to maintain consistency in tab creation logic across bundles, ensuring developers use a unified API and reducing duplicated code.

Adds explicit return type annotations to safe methods in the error handler component, improving static analysis, IDE support and reducing runtime type errors.

Adds explicit void return types to several methods, improving static type checking, IDE autocomplete and reducing runtime errors by enforcing method signatures

Adds explicit PHP type hints and return types to private methods and functions, improving static analysis, IDE autocomplete, and reducing runtime errors by enforcing correct argument types

[DependencyInjection] Add missing template notation on ServiceLocator

Fixes a bug that caused closure names to be incorrectly retrieved on PHP 8.1.11+; this ensures accurate function metadata and improves debugging and static analysis tools

Fixes return type support for DebugClassLoader in Symfony&#039;s error‑handler component, enabling stricter static analysis and IDE auto‑completion for developers working with debug utilities

Fixes an HTML tag replacement bug in ErrorHandler that incorrectly replaces &lt;\&gt; with &lt;br&gt;, ensuring accurate error message formatting and preventing malformed output in rendered pages.

The commit removes DateTime usage from the codebase to eliminate deprecated PHP DateTime classes and avoid runtime errors across different environments; developers must update any custom extensions or services that relied on DateTime, ensuring compatibility with newer PHP versions.

Add a few more ??=

Adds a favicon to the default welcome and error pages in Symfony’s ErrorHandler component, improving site branding consistency and ensuring browsers display the YMCA logo when encountering errors or visiting the root URL. This change updates the template rendering logic and includes new asset references that developers must account for in deployment.

Adds a standard license header to source files for compliance and documentation purposes, ensuring consistent licensing information across all code components

bug #45043 [ErrorHandler] ignore ``@return`` when there is an ``@template`` (nicolas-grekas)

Adds nullsafe operator usage to improve code safety and reduce runtime errors when accessing nullable objects, enhancing static analysis and IDE support for developers

<details>
<summary><strong>Technical Details (29 commits)</strong></summary>

- `b088e0b1` Silence E_DEPRECATED and E_USER_DEPRECATED
- `5aca12bd` [Console][FrameworkBundle] Remove deprecated `Application::add()` methods
- `f344b88b` [ErrorHandler] Add a command to dump static error pages
- `e8d3b5b1` bug #59292 [WebProfilerBundle] Fix event delegation on links inside toggles (MatTheCat)
- `422c8d8d` feature #59114 [ErrorHandler] support non-empty-string/non-empty-list when patching return types (xabbuh)
- `55ac2507` Add PR template and auto-close PR on subtree split repositories
- `6dc3c76a` [ErrorHandler] Add missing self-closing tags on link elements
- `c873490a` [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`
- `7312206b` feature #50911 [HttpKernel] Enhance exception if possible (lyrixx)
- `1cea1a29` Add types to public and protected properties
- `a6f3abe0` Add types to private and internal properties
- `ab707c53` feature #50842 Add missing return types to magic methods (wouterj)
- `e43f8a19` Add missing return types to magic methods
- `dc149e12` [7.0] Remove remaining deprecated code paths
- `78a34b32` document BC breaking changes
- `99d2d814` Sync `createTabs` from WebProfilerBundle
- `7b28b8c1` Add remaining missing return types to safe methods
- `9a39dcd7` Add void return types
- `a1ad5704` Add PHP types to private methods and functions
- `f1ce406b` [DependencyInjection] Add missing template notation on ServiceLocator
- `b9004465` bug #48615 Fix getting the name of closures on PHP 8.1.11+ (nicolas-grekas)
- `7305720f` [ErrorHandler][DebugClassLoader] Fix some new return types support
- `539cf142` bug #48005 [ErrorHandler] s/&lt;/br&gt;/&lt;br&gt; (PhilETaylor)
- `5bbee25c` feature #47730 Ban DateTime from the codebase (WebMamba)
- `6f3ec1ff` Add a few more ??=
- `4156b089` [HttpKernel][ErrorHandler] Add favicon to welcome and error pages
- `529feb0e` Add missing license header
- `060bc018` bug #45043 [ErrorHandler] ignore ``@return`` when there is an ``@template`` (nicolas-grekas)
- `37d0d788` Add more nullsafe operators

</details>

**symfony/polyfill-intl-idn** (v1.23.0 → v1.33.0)

[GHA] Add PHP 8.1

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `749045c6` [GHA] Add PHP 8.1

</details>

**symfony/translation-contracts** (v2.5.0 → v3.6.1)

[Contracts] add return types and bump to v3

Adds explicit type hints to private properties in translation contracts, improving static analysis, IDE autocompletion and ensuring stricter runtime type safety for developers working on the contract interfaces

Adds explicit void return types to methods in the translation contracts, improving static analysis, IDE support and code quality by enforcing method signatures and preventing accidental non‑void returns

Adds explicit return type declarations to contract interfaces, improving static analysis, IDE autocomplete, and ensuring type safety across the translation component.

Adds a Composer requirement instruction to exception messages when needed, improving developer awareness of missing dependencies and simplifying debugging by providing clear install guidance

Adds explicit type hints to private and internal properties in translation contracts, improving static analysis, IDE autocompletion, and reducing runtime errors by enforcing correct data types.

Adds a new interface ServiceCollectionInterface to the DependencyInjection container, enabling developers to type‑hint collections of services and improve static analysis and IDE support for dependency injection configurations

Adds a PR template and auto‑close PR on subtree split repositories, providing developers with a standardized workflow for managing pull requests across multiple repository branches and simplifying merge handling.

<details>
<summary><strong>Technical Details (8 commits)</strong></summary>

- `529f21f1` [Contracts] add return types and bump to v3
- `e33f226d` [Contracts] Add types to private properties
- `73539c29` Add void return types
- `1f40e77f` [Contracts] Add missing return types
- `7a222d72` Add &quot;composer require...&quot; in all exception messages when needed
- `dee0c6e5` Add types to private and internal properties
- `81a96287` [DependencyInjection] Add `ServiceCollectionInterface`
- `450d4172` Add PR template and auto-close PR on subtree split repositories

</details>

**psr/cache** (1.0.1 → 3.0.0)

Add a missing asterisk in phpdoc

docs: Standardize the README

docs: Standardize the README

Adds explicit return type declarations to methods in the PSR‑Cache API, improving static analysis and IDE autocompletion for developers working on caching logic

<details>
<summary><strong>Technical Details (4 commits)</strong></summary>

- `a45d5d45` Add a missing asterisk in phpdoc
- `9e4cb14c` docs: Standardize the README
- `d475b2f7` docs: Standardize the README
- `69df303e` Add return types.

</details>

**psr/http-factory** (1.0.1 → 1.1.0)

docs: Standardize the README

Add .gitattributes setting `export-ignore`

Enhancement: Add link to source to composer.json

Adds explicit nullable type annotations to factory methods and raises minimum PHP version to 7.1, improving static analysis support and ensuring compatibility with newer PHP features such as nullsafe operator and stricter type checks

<details>
<summary><strong>Technical Details (4 commits)</strong></summary>

- `31c8fb87` docs: Standardize the README
- `2464a76a` Add .gitattributes setting `export-ignore`
- `0d1c6398` Enhancement: Add link to source to composer.json
- `2e735aa9` Add explicit nullable type and bump minimal PHP version to 7.1

</details>

**pear/pear-core-minimal** (v1.10.11 → v1.10.16)

Deprecated dynamic property PEAR_Error::$callback removes legacy API usage; developers must update error handling code to use the new static callback mechanism for compatibility and maintainability

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `2dd01ca0` Fix: Creation of dynamic property PEAR_Error::$callback is deprecated

</details>

**doctrine/inflector** (2.0.10 → 2.1.0)

Adds support for Esperanto language in Inflector, extending pluralization and singularization rules for new locale strings, enabling developers to generate correctly inflected words in multilingual content

Introduces a website schema validation workflow, adding a new validation function and API endpoint for checking page schemas against defined rules, improving code quality and ensuring consistency across components

Adds Italian language rules for Inflector, updating pluralization logic to handle Italian nouns, enhancing multilingual support for developers working on Italian site content

Adds &#039;alga&#039; (a regular irregular word) to the irregular words list within Inflector, improving accuracy for singular/plural transformations and ensuring correct inflection in code

<details>
<summary><strong>Technical Details (4 commits)</strong></summary>

- `8c7ae9c2` Add support for Esperanto
- `a0e4cd4b` Create website schema validation workflow
- `d3a8df8f` Add italian rules
- `5256968f` add &#039;alga&#039; to irregular words list

</details>

**symfony/var-dumper** (v5.4.0 → v8.0.0-RC1)

Removes deprecated calls to SplObjectStorage methods, eliminating legacy code paths and improving runtime stability and compatibility with newer PHP versions. This cleanup reduces warnings, enhances static analysis accuracy, and ensures future maintenance is easier.

Adds a new method to AbstractCloner::addDefaultCasters() allowing developers to extend default casters for cloning objects, improving code reuse and enabling custom cloning logic in symfony var-dumper.

[VarDumper] Avoid deprecated call in PgSqlCaster

[VarDumper] Remove duplicate default caster for Socket

Removed deprecated resource casters in VarDumper, eliminating obsolete API calls that could trigger warnings or errors during debugging sessions and improving code quality.

Add support for adding more default castors to `AbstractCloner::addDefaultCasters()`

[Console][FrameworkBundle] Remove deprecated `Application::add()` methods

[VarDumper] Add casters for object-converted resources

Fixes a bug that caused VarDumper to display empty strings as blank instead of showing their actual content, improving debugging accuracy and preventing misinterpretation of string values during development.

Adds a custom caster for Symfony VarDumper to handle Socket instances, enabling accurate dumping of socket objects and improving debugging output for developers

Adds a caster for AddressInfo objects in Symfony VarDumper, enabling accurate type casting and improved debugging output for developers working with address data structures.

Adds a PR template to standardize pull request formatting and an automated PR closure script for subtree split repositories, improving code quality and CI workflow consistency across the platform.

Adds support for virtual properties in VarDumper, enabling developers to inspect PHP objects with dynamic getters/setters without requiring explicit property declarations, improving debugging and introspection.

Adds support for virtual properties in VarDumper, enabling developers to inspect and dump objects that expose virtual getters without requiring actual property storage, improving debugging visibility and code introspection

Adds support for amphp/http-client v5, enabling developers to use the newer asynchronous HTTP client library in Symfony&#039;s var-dumper component. This change updates the HttpClient interface and adds type hints for better IDE support and compatibility with async requests.

replace uniqid() with random_bytes() to create identifiers

The commit updates the var-dumper to recognize and correctly dump DOM HTMLElement objects by adding support for the new DOM HTMLElement class, improving type handling and ensuring accurate output when dumping DOM elements in PHP applications

adapt namespace changes for new DOM extension classes

[VarDumper] Add support for new DOM extension classes in `DOMCaster`

Adds explicit nullable type hints for default null values in var-dumper functions, improving static analysis and IDE support by making return types clear and reducing ambiguity when parameters are omitted

Fixes the CLI dumper configuration by respecting the SYMFONY_IDE environment variable, ensuring that the VarDumper’s CliDumper behaves correctly when IDE integration is enabled, which improves debugging output formatting and developer tooling compatibility.

Adds a default message for the dd() dump function in VarDumper, improving debugging output readability and consistency across codebases

Adds a default message for the dd() function in VarDumper, improving debugging output readability and consistency across Symfony projects

bug #52272 [VarDump] Fix order of dumped properties - parent goes first (lyrixx)

Introduces the ability to read and configure the kernel’s runtime mode through a new API, allowing developers to write custom logic that adapts to different environments and improve static‑analysis support

Drop support for Twig 2 removes compatibility with older Twig templates and updates internal API usage, ensuring the dumper works only with Twig 4+; developers must adjust template syntax or upgrade Twig to avoid runtime errors.

feature #51130 [VarDumper] Dump uninitialized properties (nicolas-grekas)

Adds explicit type hints for public and protected properties, improving static analysis, IDE auto-completion, and reducing runtime errors by ensuring property types are enforced during development

Adds explicit return type hints for magic methods in the var-dumper library, improving static analysis and IDE support, reducing runtime errors by ensuring consistent method signatures.

Adds explicit return type hints to magic methods in the var-dumper library, improving static analysis, IDE support and preventing runtime type errors

[7.0] Remove remaining deprecated code paths

Removed legacy backward‑compatibility layers for new methods and parameters, simplifying API surface and reducing code churn; this improves static analysis, IDE support, and future maintenance.

[VarDumper] Add named arguments coverage of VarDumper&#039;s function

bug #50397 [HttpKernel][VarDumper] Fix dumping with labels (nicolas-grekas)

feature #50404 [7.0] Bump to PHP 8.2 minimum (nicolas-grekas)

Adds explicit composer requirement instructions in exception messages to guide developers on missing dependencies, improving debugging and reducing runtime errors

Adds explicit return type annotations to VarDumper classes, improving static analysis and IDE autocomplete for developers working with the dumper API.

Introduces a caster for FlattenException in Symfony VarDumper, enabling detailed debugging of exception objects by converting them into a flattened structure; this improves stack trace readability and enhances developer debugging workflow.

Introduces a new Caster pattern &quot;PATTERN_PRIVATE&quot; for VarDumper, enhancing type casting logic and improving debugging output by allowing private property keys to be represented in dumps, which aids developers in inspecting internal state.

Adds void return types to functions in the var-dumper library, improving type safety and IDE support for developers working with Symfony&#039;s debugging tools

Adds explicit PHP type hints to private methods and functions in VarDumper, improving static analysis, IDE autocompletion, and reducing runtime errors for developers working on debugging utilities

Adds missing PHPdoc return types for VarDumper functions, enhancing code readability and type safety for developers using the dumper in custom projects

Introduces Relay support in VarDumper, enabling integration with Relay GraphQL clients and providing developers a convenient way to dump data structures that are compatible with Relay&#039;s node format

Adds support for named arguments in dd() and dump() functions to display the argument name, allowing developers to better understand variable names when debugging output

Adds a WeakMap caster to Symfony VarDumper, enabling developers to inspect WeakMap objects in dump output and improving debugging of weak references

Adds the Weak Object to the Var Dumper …?

The commit removes DateTime usage from the codebase, simplifying type handling and reducing potential runtime errors caused by deprecated DateTime classes; developers will need to update any dependent logic or replace with newer datetime APIs.

Add a few more ??=

Introduces FFI\CData and FFI\CType type hints for Symfony VarDumper, enabling static analysis tools and IDEs to recognize native C data structures when dumping PHP variables. This improves code quality by providing accurate type information and reducing runtime errors.

Replaces deprecated String.prototype.substr() with modern String.slice(), ensuring compatibility with newer JavaScript engines and improving code quality by avoiding legacy API usage

Adds a missing license header to comply with open‑source licensing requirements, ensuring legal compliance and preventing potential copyright issues during code distribution

Adds a license header to the source file, ensuring compliance with open‑source licensing requirements and preventing accidental distribution of code without proper attribution

Adds nullsafe operators to improve code safety and reduce runtime errors by enabling safe navigation through nullable objects in Symfony VarDumper, enhancing IDE support and static analysis.

Adds a new transient-on-macos group to VarDumper’s internal grouping logic, expanding the set of environment‑specific dumps that can be filtered or displayed during debugging on macOS. This change improves the accuracy and relevance of debug output for developers working on macOS environments.

<details>
<summary><strong>Technical Details (54 commits)</strong></summary>

- `c6cd9248` Remove deprecated calls to deprecated methods of SplObjectStorage
- `2d19238a` feature #60480 [VarDumper] Add support for adding more default casters to `AbstractCloner::addDefaultCasters()` (lyrixx)
- `d55b1834` [VarDumper] Avoid deprecated call in PgSqlCaster
- `45827514` [VarDumper] Remove duplicate default caster for Socket
- `8a73d0be` [VarDumper] Remove deprecated resource casters
- `074341c9` Add support for adding more default castors to `AbstractCloner::addDefaultCasters()`
- `01c3819f` [Console][FrameworkBundle] Remove deprecated `Application::add()` methods
- `f3961425` [VarDumper] Add casters for object-converted resources
- `60de0f3c` bug #59390 [VarDumper] Fix blank strings display (MatTheCat)
- `de6124d6` [VarDumper] Add caster for Socket instances
- `34035786` [VarDumper] Add caster for AddressInfo objects
- `c4a5a08f` Add PR template and auto-close PR on subtree split repositories
- `70171f7b` feature #57833 [VarDumper] Add support for virtual properties (alexandre-daubois)
- `db014dc3` [VarDumper] Add support for virtual properties
- `a9f7f10b` [HttpClient] Add support for amphp/http-client v5
- `db077381` replace uniqid() with random_bytes() to create identifiers
- `c33d4205` take the new DOM HTMLElement class into account
- `eb2c4ea3` adapt namespace changes for new DOM extension classes
- `0950cebe` [VarDumper] Add support for new DOM extension classes in `DOMCaster`
- `467ec976` Add more explicit nullable types for default null values
- `b1040d48` bug #53842 [VarDumper] Fix configuring CliDumper with SYMFONY_IDE env var (nicolas-grekas)
- `bd5a3025` feature #53123 [VarDumper] Added default message for dd function (Shamimul Alam)
- `654cb58c` [VarDumper] Added default message for dd function
- `44d76a06` bug #52272 [VarDump] Fix order of dumped properties - parent goes first (lyrixx)
- `86901b12` [HttpKernel] Add parameters `kernel.runtime_mode` and `kernel.runtime_mode.*`, all set from env var `APP_RUNTIME_MODE`
- `bcc3a2bc` Drop support for Twig 2
- `4d8c28b5` feature #51130 [VarDumper] Dump uninitialized properties (nicolas-grekas)
- `29640583` Add types to public and protected properties
- `bdda4eab` feature #50842 Add missing return types to magic methods (wouterj)
- `feebb438` Add missing return types to magic methods
- `5651b3b4` [7.0] Remove remaining deprecated code paths
- `38f7a35f` Remove BC layers related to new methods and new parameters
- `90caf9f1` [VarDumper] Add named arguments coverage of VarDumper&#039;s function
- `81fb69e2` bug #50397 [HttpKernel][VarDumper] Fix dumping with labels (nicolas-grekas)
- `ab6d26bc` feature #50404 [7.0] Bump to PHP 8.2 minimum (nicolas-grekas)
- `7dbe8a62` Add &quot;composer require...&quot; in all exception messages when needed
- `5767c81c` [VarDumper] Add missing return types
- `7113186e` [VarDumper] Add a caster for the FlattenException
- `a3ee7dba` [VarDumper] Add Caster::PATTERN_PRIVATE to help builing key
- `bfeaa203` Add void return types
- `20963cfb` Add PHP types to private methods and functions
- `129d0c04` Add missing PHPdoc return types
- `e169dd4c` [VarDumper] Add Relay support
- `0d0fa05f` [VarDumper] Add support of named arguments to `dd()` and `dump()` to display the argument name
- `cecffb59` feature #48478 [VarDumper] Add caster for WeakMap (nicolas-grekas)
- `5635a627` [VarDumper] Add caster for WeakMap
- `9e14f552` feature #47730 Ban DateTime from the codebase (WebMamba)
- `67a4ebbd` Add a few more ??=
- `09fae1da` [VarDumper] Add `FFI\CData` and `FFI\CType` types
- `29ebf160` Replace deprecated String.prototype.substr()
- `a9fa2002` Add missing license header
- `e470e5b0` Add missing license header
- `110f2573` Add more nullsafe operators
- `478ebd90` [VarDumper] add more &quot;transient-on-macos&quot; groups

</details>

**ezyang/htmlpurifier** (v4.18.0 → v4.19.0)

Introduces a new configuration option to whitelist safe iframe hosts via an array lookup, enabling developers to control which external domains can embed content securely without modifying core code

Fixes deprecation warning by preventing null values passed to preg_replace()’s third parameter, improving code robustness and ensuring compatibility with future PHP versions

Adds CSS direction support (e.g., RTL) via new CSS class and helper functions, enhancing developer flexibility in styling multilingual content

Extends default image width options to allow more sizes, providing developers with a broader range of responsive image dimensions and improved control over image rendering

Adds a warning message for the misleading &#039;HTMLPurifier::setOptions&#039; option, improving code safety and preventing accidental misuse of deprecated settings.

Extends PHP support to version 8.4, ensuring compatibility with newer language features and preventing runtime errors for developers using PHP 8.4.

Defines the URI.AllowedSymbols option to allow specific symbols in URLs; this API change affects how URLs are sanitized and validates custom URL patterns.

add the docker files to be ignored with installation (#451)

Adds support for PHP 8.5 by updating type hints and compatibility checks, ensuring the library runs correctly on newer PHP releases and improving static analysis and IDE tooling.

chore(release): 4.19.0 [skip ci]

<details>
<summary><strong>Technical Details (10 commits)</strong></summary>

- `b5cbf0cc` feat: Add option for safe iframe hosts using array lookup (#423)
- `5d154a23` fix: Deprecated: preg_replace(): Passing null to parameter #3 ($subject) o… (#421)
- `63e631eb` feat: Add CSS direction support (#429)
- `00a07484` feat: Allow more image widths by default (#430)
- `b21a5910` fix: add warning for misleading option (#433)
- `ff005f6e` feat: PHP 8.4 support (#441)
- `77ebd086` feat: Define option URI.AllowedSymbols (#447)
- `9f99c615` add the docker files to be ignored with installation (#451)
- `1eb05d98` feat: Support PHP 8.5 versions (#453)
- `b287d2a1` chore(release): 4.19.0 [skip ci]

</details>


### 📊 For Decision Makers

*Understands the platform, explores features, and evaluates value for strategic planning*

**symfony/http-kernel** (v4.4.35 → v7.4.0-RC2)

Provides clearer exception messages that can aid in assessing system stability and troubleshooting during strategic planning

Highlights major BC changes that may impact platform stability and strategic decisions on feature adoption

<details>
<summary><strong>Technical Details (2 commits)</strong></summary>

- `e759a4b0` feature #50911 [HttpKernel] Enhance exception if possible (lyrixx)
- `6ea58cc6` document BC breaking changes

</details>

**symfony/routing** (v4.4.34 → v7.4.0-RC2)

Introduces the `{foo:bar}` syntax for mapping route parameters, enhancing routing capabilities which could impact how content is accessed and organized across the platform.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `91479c48` [Routing] Add `{foo:bar}` syntax to define a mapping between a route parameter and its corresponding request attribute

</details>

**ycloudyusa/yusaopeny** (11.0.0.0-alpha1 → 11.1.0.0-beta3)

Highlights a major platform upgrade that enhances performance, security, and feature support, enabling strategic planning for future site expansions and integration with new tools.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `3ea5e1b5` feat: Drupal 11 upgrade path

</details>

**symfony/event-dispatcher-contracts** (v1.1.11 → v3.6.0)

Introduces automated PR review and close‑safety features; this adds a sub‑tree split repository management strategy which is useful for modular architecture decisions

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `e0fe3d79` Add PR template and auto-close PR on subtree split repositories

</details>

**doctrine/inflector** (2.0.10 → 2.1.0)

Provides a structured schema validation process that allows stakeholders to assess the platform’s compliance with content standards and evaluate its reliability

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `a0e4cd4b` Create website schema validation workflow

</details>

**ezyang/htmlpurifier** (v4.18.0 → v4.19.0)

Supports the latest PHP 8.4 environment, aligning the platform’s technical stack with modern standards and demonstrating readiness for future upgrades.

<details>
<summary><strong>Technical Details (1 commits)</strong></summary>

- `ff005f6e` feat: PHP 8.4 support (#441)

</details>


---


---


## Detailed Package Changes











---

*Report generated by [ITCare Feature Analyzer](https://www.itcare.company/feature-analyzer)*
