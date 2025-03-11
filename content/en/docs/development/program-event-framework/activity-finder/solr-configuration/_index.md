```markdown
---
title: Configuring Solr for Activity Finder
---

To install Open Y with Activity Finder v4, use the following command:

```bash
composer create-project ymcatwincities/openy-project build --no-interaction --prefer-dist
```

This command retrieves the latest stable version of Open Y (Drupal) along with the latest stable version of Activity Finder v4.  Proceed with the standard installation, ensuring you enable demo content as outlined in the provided tutorials.  For streamlined setup, choose either the Extended or Custom installation profile (Custom via Drush).

Once YMCA Website Services (formerly Open Y) is installed, enable Activity Finder v4 with these Drush commands:

```bash
# Solr 8.8.1, Activity Finder v4
drush en -y search_api_solr_legacy openy_prgf_activity_finder_4 || true
drush en -dvy openy_prgf_af4_demo || true
```

After enabling the modules, visit `/admin/config/search/search-api` to download the `config.zip` file. This ZIP archive contains the pre-configured Solr server settings for Open Y.

![image](https://user-images.githubusercontent.com/563412/105169707-90ba2280-5b24-11eb-9c0c-fab09b336723.png)

> **Hint:** The Open Y module infrastructure is compatible with Solr versions 8 up to 8.8.1.  Activity Finder v4 is specifically tested against Solr 8.8.1.  Refer to the [Drupal.org documentation](https://www.drupal.org/node/2502203) for instructions on installing Solr.  Note that Solr versions prior to 7.7 are End of Life (EOL). The Open Y team is actively working on upgrading support for newer Solr versions.

Install the downloaded configuration as a separate core on your Solr 8.8.1 server. Extract the contents of `config.zip` into the `conf` directory of your new Solr core.

![image](https://user-images.githubusercontent.com/563412/105169758-ad565a80-5b24-11eb-81c3-b29c8b513a7a.png)

After extracting the configuration, verify that the core name defined in the `core.properties` file matches the Solr Server configuration within Open Y.

![image](https://user-images.githubusercontent.com/563412/105169816-c0692a80-5b24-11eb-9254-6abc32a0583d.png)

You can find the Solr server configuration dropdown at `/admin/config/search/search-api`.

![image](https://user-images.githubusercontent.com/563412/105169887-d4149100-5b24-11eb-8a7c-d5186b8005bb.png)
![image](https://user-images.githubusercontent.com/563412/105169954-eb537e80-5b24-11eb-8e21-3df8f01a8c14.png)

Alternatively, you can configure Solr via Drush. Replace `${SOLR_CORE_IS_HERE}` with the actual name of your Solr core in the commands below:

```bash
# Solr 8.8.1, Activity Finder v4

drush cset -y search_api.server.solr backend_config.connector_config.host 127.0.0.1 -y
drush cset -y search_api.server.solr backend_config.connector_config.core ${SOLR_CORE_IS_HERE} -y
drush cset -y search_api.server.solr backend_config.connector_config.solr_version 8 -y
drush search-api-mark-all -y
drush sapi-i -y
```

After executing these commands, confirm that the Solr server is enabled and indexed at `/admin/config/search/search-api`.

If you installed Open Y with demo content, create a landing page featuring the Activity Finder v4 component. The `openy_prgf_af4_demo` module automates this process. Enable it using Drush:

```bash
# Solr 8.8.1, Activity Finder v4
drush en -dvy openy_prgf_af4_demo || true
```

Enabling this module automatically creates the `/activity-finder-v4` landing page.

![image](https://user-images.githubusercontent.com/563412/105170014-04f4c600-5b25-11eb-8a4a-b2952d86e7d3.png)

Visiting `/activity-finder-v4?step=results` or clicking the suggested buttons displays activities, filters, and other features included in Activity Finder v4.

With the Open Y demo content, the Activity Finder v4 page should resemble the following:

![image](https://user-images.githubusercontent.com/563412/105170087-1dfd7700-5b25-11eb-9e57-5db48e41af5e.png)

Explore these sandboxes for examples:

-   Carnation: <https://sandbox-carnation-cus-d9.openy.org/activity-finder-v4>
-   Lily: <https://sandbox-lily-cus-d9.openy.org/activity-finder-v4>
-   Rose: <https://sandbox-rose-cus-d9.openy.org/activity-finder-v4>

Activity Finder v3 is also installed when choosing the Custom installation profile with demo content.  It can be accessed via the `/activity-finder` URL.

Explore these sandboxes for Activity Finder v3 examples:

-   Carnation: <https://sandbox-carnation-cus-d9.openy.org/activity-finder>
-   Lily: <https://sandbox-lily-cus-d9.openy.org/activity-finder>
-   Rose: <https://sandbox-rose-cus-d9.openy.org/activity-finder>

### Development SOLR 8 Installation

Refer to the Solr Docker readme for details: <https://github.com/docker-solr/docker-solr/blob/master/README.md>

```sh
mkdir solr8
sudo chown 8983:8983 solr8
docker run -v "$PWD/solr8:/var/solr" -p 8984:8983 --name d9_sandbox_rose_custom solr solr-precreate d9_sandbox_rose_custom
# stop docker and remove created container
# unpack solr_8.x_config.zip into data/d9_sandbox_rose_custom/conf/

docker run -v "$PWD/solr8:/var/solr" -p 8984:8983 --name d9_sandbox_rose_custom solr solr-precreate d9_sandbox_rose_custom
```

To configure Open Y to use Solr 8.x, change the address port to `8984`.

Rebuild and reindex the index information. Verify that Activity Finder v4 functions correctly.
