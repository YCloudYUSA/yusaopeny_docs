```markdown
---
title: Google Custom Search Configuration
---

YMCA Website Services release **8.2.4** introduces Google Custom Search (aka Google Programmable Search Engine) for the website. This feature allows you to integrate a custom search engine powered by Google, providing enhanced search capabilities for your website.

## Enabling the module

### Fresh installations

The search feature is automatically included in the `Extended` installation type. If you chose the `Standard` installation, refer to the <a href="#existing-websites">Existing websites</a> section for instructions on enabling the search feature.

During a fresh YMCA Website Services website installation via the web interface, the third-party integration step allows you to specify a Google Search ID. Providing the ID during this step configures the search feature to be up and running immediately.

### Existing websites

If you are upgrading an existing YMCA Website Services website, the search feature is not automatically enabled. You must manually enable it.

To enable the search feature:

1.  Log in as an administrator (or a user with the `administrator` role).
2.  Navigate to the YMCA Website Services Extend page (Admin menu > YMCA Website Services > Extend > Install, or `/admin/openy/extend/list`).
3.  Locate the `YMCA Website Services Google Search` package.
4.  Tick the checkbox next to the package name.
5.  Submit the form to install the package.

After installation, the necessary modules are enabled, and a search field should appear in the website header. During installation, the module automatically creates a Landing page for search results and configures the header search form to point to this page.

## Configuring the Google Search module

After enabling the module, you need to configure it with your Google Search Engine ID:

1.  Access the Google Search settings form (Admin menu > YMCA Website Services > Settings > Google Search settings, or `/admin/openy/settings/google-search`).
2.  Locate the `Google Search ID` field.
3.  Enter your Google Search ID (refer to the following <a href="#obtaining-search-engine-id">section</a> for instructions on obtaining your Search Engine ID).
4.  Submit the form to save the configuration.

### Obtaining your Search Engine ID

To obtain your Google Search Engine ID:

1.  Go to [https://cse.google.com/](https://cse.google.com/).
2.  Register for an account if you don't already have one, and log in.
3.  Create a new Search Engine. Google provides detailed instructions on how to do this in their official documentation. The basic steps are:
    1.  Click "New Search Engine".
    2.  Specify the domain of your website (e.g., `www.example.com`).
    3.  Specify a name for the Search Engine (e.g., `example.com`).
    4.  Click "Create".
4.  Once the Search Engine is created, you will be redirected to its configuration page. The `Search engine ID` is displayed on this page. Copy this value.
5.  Paste the `Search engine ID` into the YMCA Website Services Google Search configuration form.

## Configuring the Search Engine look and feel

To configure the look and feel of your Search Engine:

1.  Go to the `Look and feel` section of the Search Engine in the Google Programmable Search Engine control panel.
2.  In the `Layout` tab, select the `Full width` option and click `Save`.

If you do not select the `Full width` option, the search results may display in a popup window on your website.

### Dealing with Ads

New Google Programmable Search Engines use the Free Edition (with ads) by default. As YMCAs are non-profit organizations, you can switch to the Non-profit Edition of the CSE, which allows you to disable ads.

If you are already registered as a Non-profit in Google:

1.  Go to the [CSE Control Panel](https://cse.google.com).
2.  Select the search engine you want to change.
3.  Click **Overview** then **Ads**.
4.  Toggle the **Show Ads** option to off.

### Layout Builder and Google Search

The Google Custom Search Engine can also be integrated into pages using [Layout Builder](../../user-documentation/layout-builder):

1.  **Disable the old search page** (if applicable):
    *   Go to `/search`.
    *   Edit the page.
    *   Uncheck **Generate automatic URL alias** in the sidebar and delete `/search`.
    *   Uncheck **Published** and **Save** to un-publish the page.
2.  **Create a new Landing Page (Layout Builder)**:
    *   Go to `node/add/landing_page_lb`.
    *   Set the **Title** to "Search".
    *   Uncheck **Generate automatic URL alias** and set the alias to `/search`.
        *   If you encounter an error using the `/search` alias, remove the existing one at **Admin** > **Configuration** > **Search and metadata** > **URL aliases**.
    *   Check **Published** and **Save and edit layout**.
3.  **Add a Small Banner** to the header (optional): Use a [Small Banner](../../user-documentation/layout-builder/banner) block to add a title, such as "Search", to the top of the page.
4.  **Add the search results code to the page**:
    *   In the **Body** section, click **Add block** and choose **Code Block**.
    *   In the **Code** field, add the embed code from the CSE configuration. You may need to add an outer `div` to fit your page layout. For example:

        ```html
        <div class="paragraph paragraph--type--google-search py-4">
          <script async src="https://cse.google.com/cse.js?cx=[your_search_engine_id]"></script>
          <div class="gcse-search"></div>
        </div>
        ```

        *Replace `[your_search_engine_id]` with your actual Search Engine ID.*
    *   **Save layout** and check the page.
5.  **Update the Google Search settings:**
    *   Go to **Admin** > **YMCA Website Services** > **Settings** > **Google Search settings** (`/admin/openy/settings/google-search`).
    *   Set the **Search page id** to the node ID (nid) of your new "Search" Landing Page.
    *   Alternatively, update the configuration using Drush:

        ```bash
        drush cset openy_google_search.settings search_page_id <nid>
        ```

        *Replace `<nid>` with the actual node ID.*
6.  **Test the search box:** Verify the search box in the Layout Builder page header functions correctly and displays results on the new search page.

## Advanced setup

Google provides comprehensive documentation on advanced search features: [Google Custom Search Developers documentation ](https://developers.google.com/custom-search/docs/overview)

### Multi-site search

You can configure the custom search engine to include multiple domains, which is useful if your association manages multiple websites (e.g., different websites for different camps).

You can also restrict the search to specific parts of a website by using URL patterns like `example.com/blog/*`. For more information, see [Update sites in your search engine](https://support.google.com/programmable-search/answer/12397162?hl=en&ref_topic=4513742&sjid=719872083080201556-NC).

### Refinements and facets

[Use Refinements to narrow the scope of search](https://support.google.com/programmable-search/answer/12425418?hl=en&ref_topic=4542213&sjid=719872083080201556-NC)

Refinements allow users to filter search results based on predefined categories.

Refinements are displayed as tabs on the search results page. You can configure the content of each tab in the "Search features > Refinement" section of the Custom Search Control Panel.

**Example: Creating a "Blog" tab:**

1.  In the Control panel, go to `Search features` > `Refinements`.
2.  Click `Add`.
    1.  Set the name of the refinement to `Blog`.
    2.  Select `Search only the sites with this label` for `How to search sites with this label?`.
    3.  Click `Ok`.
3.  Go to `Setup`.
4.  Find `Sites to search`, click `Add`.
    1.  Add `example.org/blog/*` in the text field.
    2.  Select `Blog` in the Label dropdown.
    3.  Select `Include just this specific page or URL pattern I have entered`.
    4.  Click `Save`.

This configuration adds a "Blog" tab to the search results page, displaying only blog entries related to the search term.

### Promotions

[Use Promotions to highlight specific pages in search results](https://support.google.com/programmable-search/answer/13280560?hl=en&ref_topic=4542213&sjid=719872083080201556-NC)

## Information for developers

[Google Custom Search Developers documentation ](https://developers.google.com/custom-search/docs/overview)

### Enabling via Drush

To enable the module on existing websites, run the following Drush command:

```bash
drush en openy_google_search
```

### Configuring the module via Drush

When installing YMCA Website Services using Drush, you can set the Search Engine ID using the following command:

```bash
drush site-install openy \
   --account-pass=password \
   --db-url="mysql://user:pass@host:3306/db" \
   --root=/var/www/docroot \
   openy_configure_profile.preset=extended \
   openy_theme_select.theme=openy_rose \
   openy_third_party_services.google_search_engine_id="01234567890123456789:abcdefgh"
```

The `openy_third_party_services.google_search_engine_id` parameter sets the Search Engine ID (`01234567890123456789:abcdefgh` in the example).  Replace the example ID with your actual Search Engine ID.

To set the Search Engine ID on an already installed website, use the following Drush command:

```bash
drush config-set openy_google_search.settings google_engine_id "01234567890123456789:abcdefgh"
```

Replace `01234567890123456789:abcdefgh` with your actual Search Engine ID.
