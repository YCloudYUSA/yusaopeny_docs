```markdown
---
title: Sandboxes
description: YMCA Website Services Sandboxes for Evaluation and QA
aliases:
  - /docs/wiki/sandboxes/
---

The YMCA Website Services core team manages sandboxes for various configurations of the distribution. These sandboxes facilitate evaluation, assist with QA, and enable investigation of issues.

## Getting Started

Anyone can browse the sandboxes at [sandboxes.y.org](https://sandboxes.y.org/).

### Sandbox Access

To test the content editor experience or explore the Drupal configuration, request login access by [emailing us](mailto:ycloud@ymca.net?subject=Sandbox%20Access%20Request) or contacting a project team member on the Y-USA Slack.  Please include the specific sandbox you need access to and a brief explanation of your testing goals.

### Learn More

*   Watch a [detailed video about the process of building the sandboxes](https://www.youtube.com/watch?v=dS-8-t0WJgo).
*   Read a [case study on Drupal.org](https://www.drupal.org/case-study/open-y-sandboxes).

## Sandbox Contents

Each set of sandboxes includes these profile variations:

*   Standard
*   Extended
*   Custom

Currently, all sandboxes use only one theme:

*   Carnation

Multiple sandbox environments are available:

### Stable Sandboxes

[sandboxes.y.org](https://sandboxes.y.org/)

Stable sandboxes are based on the latest [stable release](https://github.com/YCloudYUSA/yusaopeny/releases) of YMCA Website Services. They rebuild completely overnight and clear their database and files every 2 hours. This ensures a clean testing environment.

<details>
  <summary>These sandboxes are built on CI by running:</summary>

```sh
composer create-project YCloudYUSA/yusaopeny-project buildnew --no-interaction --prefer-dist

ansible-playbook docroot/reinstall.yml -i /tmp/inventory5068801741271597001.ini -f 5 -e php_env_vars=APP_ENV=dev -e mysql_user=*** -e mysql_password=*** -e mysql_db=sandbox_carnation_custom -e drupal_folder=/var/www/sandbox_carnation_custom -e site_url=https://sandbox-carnation-cus.y.org -e pp_environment=demo -e run_reinstall=true -e "openy_profile_install_settings='openy_configure_profile.preset=complete openy_theme_select.theme=openy_carnation'" -e use_solr=false -i localhost, --connection=local -vvvv
```

</details>

### Development Sandboxes

*   [sandboxes-dev.y.org](https://sandboxes-dev.y.org/)
*   [sandboxes-d9.y.org](https://sandboxes-d9.y.org/)
*   [sandboxes-dev-php8.y.org](https://sandboxes-dev-php8.y.org/)

These sandboxes are based on the [latest development version](https://github.com/YCloudYUSA/yusaopeny) of YMCA Website Services or other branches as necessary. They rebuild daily but are not guaranteed. If one isn't working, try another.

<details>
  <summary>These sandboxes are built on CI by running:</summary>

```sh
composer create-project YCloudYUSA/yusaopeny-project:dev-9.2.x-development buildnew --no-interaction --prefer-dist

ansible-playbook docroot/reinstall.yml -i /tmp/inventory5068801741271597001.ini -f 5 -e php_env_vars=APP_ENV=dev -e mysql_user=*** -e mysql_password=*** -e mysql_db=sandbox_carnation_custom -e drupal_folder=/var/www/sandbox_carnation_custom -e site_url=https://sandbox-carnation-cus.y.org -e pp_environment=demo -e run_reinstall=true -e "openy_profile_install_settings='openy_configure_profile.preset=complete openy_theme_select.theme=openy_carnation'" -e use_solr=false -i localhost, --connection=local -vvvv
```

</details>

## Feature-Based Sandboxes

Sandboxes with specific features enabled are also maintained. Each of these builds include the listed features:

### Virtual Y Sandboxes

*   [virtual-y-sandboxes.y.org](https://virtual-y-sandboxes.y.org/): Latest release
*   [virtual-y-sandboxes-d9.y.org](https://virtual-y-sandboxes-d9.y.org/): Development version

These sandboxes use the YMCA Website Services stable Standard profile and the [Virtual Experience Platform](https://github.com/YCloudYUSA/yusaopeny_gated_content) (aka "Virtual Y", aka "Open Y Gated Content") project.

### Membership Framework Sandboxes

*   [membership-framework-sandboxes.y.org](https://membership-framework-sandboxes-d9.y.org/): Latest release
*   [membership-framework-sandboxes-d9.y.org](https://membership-framework-sandboxes-d9.y.org/): Development version

These sandboxes use the YMCA Website Services stable Standard profile and the development version of the [Membership Framework](https://github.com/YCloudYUSA/yusaopeny_memberships).

<details>
  <summary>To rebuild the sandbox, CI is running:</summary>

```sh
composer create-project YCloudYUSA/yusaopeny-project buildnew --no-interaction --prefer-dist
cd buildnew
composer config minimum-stability dev
composer require "openy/openy_memberships":"dev-master as 1.0.0"
ansible-playbook docroot/reinstall.yml -i /tmp/inventory13097841656330601319.ini -f 5 -e php_env_vars=APP_ENV=dev -e mysql_user=*** -e mysql_password=*** -e mysql_db=d9_sandbox_carnation_std_membership_framework -e drupal_folder=/var/www/d9_sandbox_carnation_std_membership_framework -e site_url=https://sandbox-carnation-std-membership-framework-d9.y.org -e pp_environment=membership_framework -e run_reinstall=true -e "openy_profile_install_settings='openy_configure_profile.preset=standard openy_theme_select.theme=openy_carnation openy_select_content.content=0'" -e use_solr=false -i localhost, --connection=local -vvvv
```

</details>

### Activity Finder Sandboxes

| Theme                            | Link                                                       | WS Profile | Activity Finder | Theme    | Bootstrap |
| :------------------------------- | :--------------------------------------------------------- | :--------- | :-------------- | :------- | :-------- |
| Carnation                        | [Activity Finder](https://sandbox-carnation-cus-d9.y.org/activity-finder-v4)        | Stable     | Custom          | v4 dev | v4        |
| Carnation (with TractionRec importer) | [Traction WS](https://traction-ws.y.org/) | Stable     | Custom          | v4 dev | v4        |

<details>
  <summary>To rebuild the sandbox, CI is running:</summary>

```sh
composer create-project YCloudYUSA/yusaopeny-project:dev-9.2.x-development-af4 build --no-interaction --prefer-dist
cd ${WORKSPACE}/build
composer require YCloudYUSA/yusaopeny_activity_finder:"4.x-dev as 4.0"

ansible-playbook docroot/reinstall.yml -i /tmp/inventory4660848605526222353.ini -f 5 -e php_env_vars=APP_ENV=dev -e mysql_user=*** -e mysql_password=*** -e mysql_db=d9_sandbox_carnation_custom -e drupal_folder=/var/www/d9_sandbox_carnation_custom -e site_url=https://sandbox-carnation-cus-d9.y.org -e pp_environment=demo -e run_reinstall=true -e "openy_profile_install_settings='openy_configure_profile.preset=complete openy_theme_select.theme=openy_carnation'" -i localhost, --connection=local -vvvv

# Solr 4.5-4.9, Activity Finder v4
drush en -y search_api_solr_legacy openy_prgf_activity_finder_4 || true
drush cset -y search_api.server.solr backend_config.connector_config.host 127.0.0.1 -y || true
drush cset -y search_api.server.solr backend_config.connector_config.core ${VHOST_FOLDER} -y
drush cset -y search_api.server.solr backend_config.connector_config.solr_version 4.5 -y
drush search-api-mark-all || true
drush sapi-i || true
drush en -dvy openy_prgf_af4_demo || true

# Solr 4.5-4.9, Activity Finder v4, Carnation theme, bootstrap v4
drush cset -y openy_activity_finder.settings bs_version 4 || true
```

</details>
