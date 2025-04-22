---
title: Google Custom Search Configuration
---

The YMCA Website Services release **8.2.4** introduces Google Custom Search (aka Google Programmable Search Engine) for the website out of the box.

## Enabling the module

### Fresh installations

The search feature is included in the `Extended` installation type. For `Standard` see the <a href="#existing-websites">Existing websites</a> section.

If you are installing a fresh YMCA Website Services website and going through the installation process via the web interface, on the third-party integration step, you can specify a Google Search ID. If you specify the Google Search ID in this form, your site's search feature will be up and running.

### Existing websites

The search feature is not automatically enabled after upgrading a YMCA Website Services website. You have to manually enable it.

To do that:

1. Log in as an admin (or a user with the `administrator` role).
1. Go to the YMCA Website Services package install page (Admin menu > YMCA Website Services > Extend > Install, or `/admin/openy/extend/list`)
1. Find the `Search` package there, tick the checkbox, and submit the form.

Now, the search modules are enabled, and the website header should have a search field. Upon installation, the modules create a Landing page for search results and point the header search form to the page.

## Configuring the Google Search modules

1. Go to the Google Search settings form (Admin menu > YMCA Website Services > Settings > Google Search settings, or `/admin/openy/settings/google-search`).
1. Set the value of the `Google Search ID` field (see the following <a href="#obtaining-search-engine-id">section</a> for details) and submit the form.

### Obtaining Search Engine ID

1. Go to https://cse.google.com/, register if you haven't yet, and log in if you aren't logged in.
1. Create the Search Engine (this process is explained in [Google's documentation](https://support.google.com/programmable-search/answer/11082370?hl=en&ref_topic=4513742&sjid=719872083080201556-NC):
   1. Click "New Search Engine".
   1. Specify the domain of your website (e.g. `www.example.com`).
   1. Specify the name of the Search Engine (e.g. `example.com`).
   1. Click "Create".
1. On the newly created Search Engine page there is the `Search engine ID` field. Use this value in the YMCA Website Services Google Search configuration form.

## Configuring the Search Engine look and feel

1. Go to the `Look and feel` section of the Search Engine
1. In the `Layout` tab, select the `Full width` option and click `Save`

If this change hasn't been made, the search results on the website are shown in a popup window.

### Dealing with ads

By default, newly created Search engines use the Free Edition (with ads) of the service. As YMCAs are non-profit organizations they have the option to [switch to Non-profit Edition](https://support.google.com/programmable-search/answer/11082370?hl=en&ref_topic=4513742&sjid=719872083080201556-NC) of the CSE, where it is possible to disable ads.

If you are already registered as a Non-profit in Google:

1. From the [CSE Control Panel](https://cse.google.com), select the search engine you want to change.
1. Click **Overview** then **Ads**
1. Toggle the **Show Ads** option to off.

### Layout Builder and Google Search

The Google Custom Search Engine can also be used with [Layout Builder](../../user-documentation/layout-builder):

1. If you have an existing site, disable the old search page:
   - Go to `/search`.
   - Remove the URL alias by unchecking **Generate automatic URL alias** in the sidebar then deleting `/search`.
   - Uncheck **Published** and **Save** to un-publish the page.
2. Create a new **Landing Page (Layout Builder)** (`node/add/landing_page_lb`):
   - Set the **Title** to "Search".
   - Ensure **Generate automatic URL alias** is unchecked in the sidebar and set the alias to `/search`.
     - If that alias results in an error, you can remove the old one at **Admin** > **Configuration** > **Search and metadata** > **URL aliases**
   - Check **Published** then **Save and edit layout**.
3. Add a [Small Banner](../../user-documentation/layout-builder/banner) to the header with a title for the page, like "Search".
4. Add the search results code to the page:
   - In the **Body** section, **Add block** and choose **Code Block**
   - In **Code**, add the embed code from the CSE configuration. You may need to add an outer div to fit your page layout, for example:
     ```html
     <div class="paragraph paragraph--type--google-search py-4">
       <script async src="https://cse.google.com/cse.js?cx=[id]"></script>
       <div class="gcse-search"></div>
     </div>
     ```
   - **Save layout** and check your page
5. Change the Google Search config to use your new page:
   - Go to **Admin** > **YMCA Website Services** > **Settings** > **Google Search settings** (`/admin/openy/settings/google-search`) and set the **Search page id** to the node id of your new page.
   - Or, change the config with drush:
     ```
     drush cset openy_google_search.settings search_page_id <nid>
     ```
6. Test the search box in the Layout Builder page header to ensure the new configuration works as expected.

## Advanced setup

Google maintains documentation on [how to configure advanced search features](https://support.google.com/customsearch/topic/4542213?hl=en&ref_topic=4513868)

### Mutli-site search

You can add multiple domains to the custom search engine if your association maintains multiple websites, for example, if your camps run at different website domains

You can also add not only the whole website but its parts by specifying patterns like `example.com/blog/*`. See [Update sites in your search engine](https://support.google.com/programmable-search/answer/12397162?hl=en&ref_topic=4513742&sjid=719872083080201556-NC) for details.

### Refinements and facets

[Use Refinements to narrow the scope of search](https://support.google.com/programmable-search/answer/12425418?hl=en&ref_topic=4542213&sjid=719872083080201556-NC)

Refinements let users filter results according to the categories you provide.

Refinements appear in the search results page as tabs. The content of each tab is configured in the Search features > Refinement section of the Custom Search Control panel.

To set up a dedicated tab in search results for Blog posts do the following:

1. In the Control panel, go to `Search features` > `Refinements`
1. Click `Add`
   1. Set the name of the refinement to `Blog`
   1. Select `Search only the sites with this label` for `How to search sites with this label?`
   1. Click `Ok`
1. Go to `Setup`
1. Find `Sites to search`, click `Add`
   1. Add the `example.org/blog/*` in the text field
   1. Select `Blog` in the Label dropdown
   1. Select `Include just this specific page or URL pattern I have entered`
   1. Click `Save`

The search results page now shows the `Blog` tab that only shows blog entries relevant to the search term.

### Promotions

[Use Promotions to highlight a page in searches](https://support.google.com/programmable-search/answer/13280560?hl=en&ref_topic=4542213&sjid=719872083080201556-NC)

## Information for developers

[Google Custom Search Developers documentation ](https://developers.google.com/custom-search/docs/overview)

### Enabling via Drush

Use the following snippet to enable the package on existing websites:

```
drush en openy_google_search
```

### Configuring the module via Drush

Use the following snippet when you install YMCA Website Services via Drush to set the Search Engine ID:

```
drush site-install openy \
   --account-pass=password \
   --db-url="mysql://user:pass@host:3306/db" \
   --root=/var/www/docroot \
   openy_configure_profile.preset=extended \
   openy_theme_select.theme=openy_carnation \
   openy_third_party_services.google_search_engine_id="01234567890123456789:abcedefgh"
```

The `openy_third_party_services.google_search_engine_id` parameter sets the Search Engine ID (`01234567890123456789:abcedefgh` in the example).

Use the following snippet to set the Search Engine ID on already installed websites:

```
drush config-set openy_google_search.settings google_engine_id "01234567890123456789:abcedefgh"
