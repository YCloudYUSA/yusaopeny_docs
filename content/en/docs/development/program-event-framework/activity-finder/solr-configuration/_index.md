---
title: Configuring Solr for Activity Finder
---

In order to install Open Y and Activity Finder v4 you need to run command

```bash
composer create-project ymcatwincities/openy-project build --no-interaction --prefer-dist
```

Which will pull Open Y on Drupal stable version with Activity Finder v4 latest stable version
Then you should proceed with a regular installation with Demo content enabled as described in our tutorials. It’s better to setup Extended or Custom( only via drush ) in order to skip a bunch of manual steps

When you have YMCA Website Services (former Open Y) installed, list of the command you need to run in order to enable Activity Finder v4

```bash
# Solr 8.8.1, Activity Finder v4
drush en -y search_api_solr_legacy openy_prgf_activity_finder_4 || true
drush en -dvy openy_prgf_af4_demo || true
```

After enabling the above modules you should visit /admin/config/search/search-api and obtain config.zip from preconfigured by Open Y Solr Server setup
![image](https://user-images.githubusercontent.com/563412/105169707-90ba2280-5b24-11eb-9c0c-fab09b336723.png)


> Hint: Open Y module's infrastructure supports SOLR versions 8 up to the latest 8.8.1 as well. Activity Finder is tested against Solr 8.8.1. In order to install Solr - [check the documentation on Drupal.org](https://www.drupal.org/node/2502203).
> Solr versions prior 7.7 are End of Life, Open Y team is working on upgrading support for decent versions of Solr.

This configuration should be installed on your Solr 8.8.1 server as a independent core. it should be extracted to conf directory of a solr core

![image](https://user-images.githubusercontent.com/563412/105169758-ad565a80-5b24-11eb-81c3-b29c8b513a7a.png)


Once it is done - ensure the name of your core from core.properties file added to Solr Server config in Open Y
![image](https://user-images.githubusercontent.com/563412/105169816-c0692a80-5b24-11eb-9254-6abc32a0583d.png)


Solr server configuration could be found in Dropdown at /admin/config/search/search-api
![image](https://user-images.githubusercontent.com/563412/105169887-d4149100-5b24-11eb-8a7c-d5186b8005bb.png)
![image](https://user-images.githubusercontent.com/563412/105169954-eb537e80-5b24-11eb-8e21-3df8f01a8c14.png)

If you prefer drush configuration you may use commands below, just replace SOLR_CORE_IS_HERE with real core name

```bash
# Solr 8.8.1, Activity Finder v4

drush cset -y search_api.server.solr backend_config.connector_config.host 127.0.0.1 -y || true
drush cset -y search_api.server.solr backend_config.connector_config.core ${SOLR_CORE_IS_HERE} -y
drush cset -y search_api.server.solr backend_config.connector_config.solr_version 8 -y
drush search-api-mark-all || true
drush sapi-i || true

```

Once you done this you should see Solr Server as Index as Enabled on a /admin/config/search/search-api

If you installed Open Y with Demo content now it is time to create a Landing Page with the Activity Finder v4 component on it.
In Open Y we have a specially created module which can this for you
Enable openy_prgf_af4_demo by drush command
```bash
# Solr 8.8.1, Activity Finder v4
drush en -dvy openy_prgf_af4_demo || true
```
and you’d get /activity-finder-v4 Landing Page created automatically which should look like
![image](https://user-images.githubusercontent.com/563412/105170014-04f4c600-5b25-11eb-8a4a-b2952d86e7d3.png)

when you visited it.
By visiting /activity-finder-v4?step=results or clicking on suggested buttons you should see results, activities with filters and all other functionality, shipped with Activity Finder v4
For the Demo content from OpenY, it should look like
![image](https://user-images.githubusercontent.com/563412/105170087-1dfd7700-5b25-11eb-9e57-5db48e41af5e.png)
See sandboxes
- Carnation https://sandbox-carnation-cus-d9.openy.org/activity-finder-v4


Activity Finder v3 also installed when you chose Custom Installation with Demo content and is part of demo content.
Could be accessed via /activity-finder url


### Development SOLR 8 installation

Solr Docker readme https://github.com/docker-solr/docker-solr/blob/master/README.md

```sh
mkdir solr8
sudo chown 8983:8983 solr8
docker run -v "$PWD/solr8:/var/solr" -p 8984:8983 --name d9_sandbox_openy_carnation_custom solr solr-precreate d9_sandbox_openy_carnation_custom
# stop docker and remove created container
# unpack solr_8.x_config.zip into data/d9_sandbox_openy_carnation_custom/conf/

docker run -v "$PWD/solr8:/var/solr" -p 8984:8983 --name d9_sandbox_openy_carnation_custom solr solr-precreate d9_sandbox_openy_carnation_custom

```

Configure Open Y to change Solr version to 8.x
Change address port to 8984

Rebuild index information
Reindex
Check Activity Finder v4 is working now
