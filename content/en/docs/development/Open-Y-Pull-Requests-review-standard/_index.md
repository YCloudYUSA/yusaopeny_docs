---
title: Pull Request Review Standard
aliases:
  - /docs/wiki/open-y-pull-requests-review-standard/
---

Refer to the [technical guidelines for code quality best practices]({{< relref "../Code-Review-Quality-Best-Practices" >}}).

# Adherence to Standards

The YMCA Website Services Core Team adheres to the same standards set for the community across all development areas and technologies, as outlined in the YMCA Website Services documentation.

The YMCA Website Services Core Team reserves the right to deviate from these standards only in the following situations:

-   **Emergency:** A critical defect or security vulnerability requiring immediate and drastic measures for resolution.
-   When standards are not met, the YMCA Website Services Core Team is responsible for explaining the reasons behind the deviation and defining the updated standards moving forward.
-   This explanation will be communicated via the YMCA Website Services message board, Slack, and the documentation on GitHub, reflecting the new standards.

## Requirements for Pull Requests

-   Code in Pull Requests must adhere to our established [best practices]({{< relref "../Code-Review-Quality-Best-Practices" >}}).
-   Submitters' profiles on GitHub or Drupal.org should include a name and organization.

## Pull Request Template

To ensure high-quality Pull Requests, a [PR template](https://github.com/YCloudYUSA/yusaopeny/blob/8.x-2.x/.github/PULL_REQUEST_TEMPLATE.md) is automatically applied to new Pull Requests on GitHub.

The template includes the following requirements:

-   **Issue Link:** A link to the original issue addressed by the PR.
-   **Coding Standards:** Confirmation that all coding styles are followed, and no issues are reported by CodeSniffer. Refer to the [Code of Conduct]({{< relref "Open-Y-Code-of-Conduct-and-Best-Practices" >}}).
-   **Documentation Updates:** Verification that [documentation](https://github.com/YCloudYUSA/yusaopeny/tree/9.x-2.x/docs) has been updated to reflect the PR changes.
-   **Review Steps:** Detailed [steps for review](https://github.com/YCloudYUSA/yusaopeny/pull/94#issue-204580200) based on the PR changes.

    <img src="https://raw.githubusercontent.com/YCloudYUSA/yusaopeny/8.x-1.x/.github/assets/steps-for-review.png" width="200" alt="Steps for review"/>

-   **Upgrade Path Support:** Inclusion of all necessary `hook_update_N` functions to [support the upgrade path](https://github.com/YCloudYUSA/yusaopeny/blob/9.x-2.x/docs/Development/Upgrade%20path.md).
-   **Drupal.org Email Association:** Confirmation that your Git email is associated with a Drupal.org account to ensure commit attribution.

    <img src="https://raw.githubusercontent.com/YCloudYUSA/yusaopeny/8.x-1.x/.github/assets/drupalorg-email.png" width="200" alt="drupal.org email"/>

-   **Drupal.org Credits:** If you want credits on drupal.org, consult the [documentation](https://github.com/YCloudYUSA/yusaopeny/blob/9.x-2.x/docs/Development/Contributing.md#drupalorg-credits).
