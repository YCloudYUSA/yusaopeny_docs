---
title: Acceptance Testing
---

YMCA Website Services is a large distribution with a significant number of modules, components, subsystems, and business processes. Therefore, we must take appropriate steps to ensure the stability of major functionality during development.

For automated tests, we have created a [General Checks template](https://github.com/YCloudYUSA/yusaopeny/blob/9.x-2.x/.github/PULL_REQUEST_TEMPLATE.md) on GitHub. Every developer should follow this template to get review approval from the YMCA Website Services core team. However, General Checks are for testing functionality related to the current proposed change only and are not intended for Regression Testing.

For regression testing, [Behat tests]({{< relref "../Tests#behat" >}}) are provided automatically on each build by the YMCA Website Services community.

Every pull request should include a testing plan before being released into YMCA Website Services. This plan should cover the testing of all workflows and functionality to ensure they continue to work with any new code or changes implemented. Conflicts can occur between elements of YMCA Website Services, Drupal modules, and Drupal core. Pull request testing plans increase productivity and decrease the effort required for manual Acceptance Testing of upcoming releases. The testing plan should cover specific features and functionality that are likely to cause regression issues post-release or post-upgrade to the latest version of YMCA Website Services after the new code is implemented.

**Example of a testing plan:** If the Drupal core is updated, gather all Drupal core Release Notes since the last core upgrade for YMCA Website Services and analyze the important issues fixed.

For example, if you are upgrading from version 8.4.0 to 8.4.4:

*   [https://www.drupal.org/project/drupal/releases/8.4.4](https://www.drupal.org/project/drupal/releases/8.4.4) (translations)
*   [https://www.drupal.org/project/drupal/releases/8.4.3](https://www.drupal.org/project/drupal/releases/8.4.3) (postgreSQL and migration)
*   [https://www.drupal.org/project/drupal/releases/8.4.2](https://www.drupal.org/project/drupal/releases/8.4.2) (migrations, taxonomy, ckeditor)
*   [https://www.drupal.org/project/drupal/releases/8.4.1](https://www.drupal.org/project/drupal/releases/8.4.1) (composer)

This means that the following systems should be tested:

*   Multilingual
*   PostgreSQL support
*   Migration
*   Taxonomy
*   CKEditor
*   Composer

This list can be extended by analyzing the YMCA Website Services distributions' important parts that depend on the subsystems listed above. Spending time on every module with a taxonomy dependency is not required, but testing at least one impacted module to ensure it is still working post-implementation is essential. If a Behat test is already created for the subsystem in a list, a manual test can be skipped if the build is not failing due to the module or element covered in the associated Behat test.

**How to choose which modules to test:** Modules can be randomly selected from the list of impacted systems, or one of the oldest modules in an impacted system. Older modules that have not received recent or regular updates are more likely to have regression issues caused by a minor change.

The oldest modules (contrib modules) with dependencies from the above list should also be updated. However, to improve productivity, initiate these updates only if there is a security issue or a module has stopped working because the subsystems are being updated within an upcoming release. If a module update creates more issues than the older version of said module, it is better to keep the old module and fix the associated regression bug.

**Tip:** A new module version usually contains a bug fix, so adding a patch from Drupal.org to the YMCA Website Services distribution's `composer.json` is preferred to releasing the distribution. Remember to create a follow-up task for updating the module after the release.

After creating a list of modules that could introduce regression issues, following the Quick-start section of the modules' README files (usually shipped with modules) is highly recommended.

[Example for the location\_finder](https://github.com/YCloudYUSA/yusaopeny/blob/8.x-1.x/modules/custom/location_finder/README.md#quickstart).

If a module has no Quick-start or Acceptance testing section in its README, testing at least one place where the module's functionality should be working is essential. Adding these manual test steps as a follow-up task ([new issue](https://github.com/YCloudYUSA/yusaopeny/issues/new)) or creating a Pull Request with changes to the README in the YMCA Website Services repository is highly recommended. For performance, adding step-by-step how-to instructions to the respective modules' `README.md` file is highly recommended. Writing a couple of lines of documentation takes only a few minutes and will greatly help others with future contributions and changes.

Optionally, adding a Drupal tour for the how-to instructions created in the README will benefit future YMCA Website Services users and developers. Having a tour for the business functionality is highly recommended to ship with the component, creating in-site visual guided documentation and helping to decrease the time for Acceptance testing.

Lastly, adding Behat tests to the system will ensure functionality is tested on every pull request and every CI build in the future.

### Rule

Every release of YMCA Website Services since 8.1.9 should include a list of subsystems changed in the release for the community to be aware of possible regressions on their end.
