---
title: Contributing
---

The YMCA Website Services distribution is open source, and we welcome contributions from the YMCA Movement, the Drupal community, and beyond. Be sure to check our [Community Resources](/community) for how to get in touch and our [Roadmap](/roadmap) to see if your request is already in progress.

## Issues

If you have a support request, you've found a bug, or you have a feature request, you can start in our primary repository, [YCloudYUSA/yusaopeny](https://github.com/YCloudYUSA/yusaopeny):

-   Search through [known issues/requests](https://github.com/YCloudYUSA/yusaopeny/issues).
-   [Create new issue](https://github.com/YCloudYUSA/yusaopeny/issues/new).

If you are able to pinpoint the issue to a specific piece of functionality, you can open an issue on [the appropriate module](../decoupled--external--projects-of-openy).

When submitting issues, please refer to the [CONTRIBUTION.md](https://github.com/YCloudYUSA/yusaopeny/blob/8.x-1.x/modules/contrib/blazy/docs/CONTRIBUTION.md) file in the Blazy module for guidelines on submitting issues and bug reports.

## Pull Requests

We use the GitHub ["Fork and pull model"](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models#fork-and-pull-model) for community contributions. If you have some time to make a contribution to the project, here are the steps that will help you:

-   [Create a fork](https://help.github.com/articles/fork-a-repo/) of [YCloudYUSA/yusaopeny](https://github.com/YCloudYUSA/yusaopeny).
-   Commit & push changes into your fork.
-   [Create new Pull Request](https://help.github.com/articles/creating-a-pull-request/).
-   Write steps for review. In this way maintainers can go through steps on build to verify your fix/feature.
    -   Ensure steps for review added to `README.md` file in a module's/project's directory if it makes sense to check them on regular basis. Often this is needed for crucial parts of the system which is main business functionality of the component. Example of super simple steps for review [see in Quickstart section of location\_finder module](https://github.com/YCloudYUSA/yusaopeny/blob/8.x-1.x/modules/custom/location_finder/README.md#quickstart), please.
-   Wait for a CI build and ask maintainers for review.

**Important:** make sure your git email is associated with account on drupal.org, otherwise you won't get commits there.

When submitting patches, please refer to the [CONTRIBUTION.md](https://github.com/YCloudYUSA/yusaopeny/blob/8.x-1.x/modules/contrib/blazy/docs/CONTRIBUTION.md) file in the Blazy module for guidelines on submitting patches.

## Merge Requests

Modules on Drupal.org follow their Merge Request process. The Drupal Wiki has in-depth documentation on these processes:

-   [Overview of projects and issues](https://www.drupal.org/docs/develop/issues/overview-of-projects-and-issues)
-   [Using GitLab to contribute to Drupal](https://www.drupal.org/docs/develop/git/using-gitlab-to-contribute-to-drupal)

## Drupal.org credits

If you would like to get drupal.org credits for your contribution:

-   Create issue on [drupal.org](https://www.drupal.org/project/issues/openy?categories=All)
-   Link drupal.org issue to GitHub Pull Request
-   Specify in GitHub Pull Request link to drupal.org issue
-   Once PR has been merged, reviewer will close drupal.org issue with appropriate credits.
