---
title: How to track & analyze user actions
linkTitle: "Track Users"
aliases:
  - /docs/development/datalayer/
  - /docs/development/google_analytics/
  - /docs/development/google_analytics_search/
---

## Google Analytics

YMCA Website Services uses the Drupal contrib [Google Analytics module](https://www.drupal.org/project/google_analytics) to enable [Google Analytics](https://marketingplatform.google.com/about/analytics/) tracking on your YMCA Website Services site. The Google Analytics module adds a JavaScript tracking code to every page.

To get started, you should first create a GA property. Use the [Analytics Help](https://support.google.com/analytics/#topic=10737980) for assistance.

### Configuration

Configuration is done at the standard module configuration page: `/admin/config/services/google-analytics`.

The Google Analytics module settings include:

*   **Web Property ID**: Your Google Analytics account number.
*   **What are you tracking?**: Options include "Single domain", "One domain with multiple subdomains", and "Multiple top-level domains".
*   **List of top-level domains**: Only relevant if you are tracking "Multiple top-level domains".
*   **Visibility**: Settings for adding tracking to specific pages and/or roles.
*   **Links and downloads**: Options for tracking outbound links, mailto links, telephone links, and file downloads.
*   **File extension list**: A comma-separated list of file extensions to track as downloads.
*   **Privacy**: Options for anonymizing visitor IP addresses.
*   **Custom variables**: Settings for custom dimensions and metrics.
*   **Custom code snippets**: Allows you to add custom JavaScript code snippets.
*   **Cache**: Options for locally caching the Google Analytics JavaScript file.
*   **Debug**: Loads the debugging code of Google Universal Analytics.

See the [Google Analytics module README](https://git.drupalcode.org/project/google_analytics/-/blob/4.x/README.md) for more details.

### Google Analytics Version Compatibility

In the [9.2.11](https://github.com/YCloudYUSA/yusaopeny/releases/tag/9.2.11) release in November 2021, YMCA Website Services [added support for Google Analytics 4](https://github.com/YCloudYUSA/yusaopeny/pull/2400). If your site has been updated to YMCA Website Services 9.2.11 or greater AND the `google_analytics` module has been updated to 4.x you should be able to use GA4. Otherwise you'll need to stick with GA3.

## Search Tracking with Google Analytics

### Prerequisites

*   A Google Analytics account to track your site should be created.
*   The Google Analytics contrib module should be enabled and configured to use an existing GA account.

### Steps

1.  Log in to the Google Analytics account configured to track your YMCA Website Services site.

2.  Click the **Admin** button in the bottom right corner of the main screen.

    ![Google Analytics Main Screen](ga_search_1.png)

3.  Click **View Settings**.

    ![Google Analytics View Settings](ga_search_2.png)

4.  Scroll to the "Site Search Settings" section and enable the "Site Search Tracking" switch.

    ![Google Analytics Site Search Settings](ga_search_3.png)

5.  Fill the query parameter field with `q, query` values and click **Save**.

6.  Reports about the search tracking can be found on the main screen in **Behavior → Site Search Section**.

    > **Attention:** Data processing latency for search tracking reports is 24-48 hours (see [Google's support doc](https://support.google.com/analytics/answer/1070983?hl=en#DataProcessingLatency)).

## Data Layer

See also the [Data Layer module README](https://git.drupalcode.org/project/datalayer/#introduction).

The Data Layers module outputs data on the page in a JSON format. By default, it will output properties (langcode, vid, name, uid, created, status, roles) and related taxonomy for any node, user, or any route-based entity.

A limited set of properties are available via the Data Layers configuration form at `/admin/config/search/datalayer` (langcode, vid, name, uid, created, status, roles).

Adding additional properties can be done through the use of `hook_datalayer_meta()`.

```php
/**
 * Implements hook_datalayer_meta().
 */
function my_module_datalayer_meta() {
  return array(
    'property',
  );
}
```

It will be added to the page as:

```json
{
  "entityProperty": "whatever the value is"
}
```

Altering which properties will be output can be done via `hook_datalayer_meta_alter()`.

```php
/**
 * Implements hook_datalayer_meta_alter().
 */
function my_module_datalayer_meta_alter(&$properties) {
  // Override module norm in all cases.
  unset($properties['entityUid']);

  // Specific situation alteration...
  $type = FALSE;
  if ($obj = _datalayer_menu_get_any_object($type)) {
    if ($type === 'node' && in_array(['my_bundle', 'my_nodetype'], $obj->type)) {
      // Remove author names on some content type.
      if ($key = array_search('name', $properties, TRUE)) {
        unset($properties[$key]);
      }
    }
    elseif ($type === 'my_entity_type') {
      // Remove some property on some entity type.
      if ($key = array_search('my_property', $properties, TRUE)) {
        unset($properties[$key]);
      }
    }
  }
}
```

Adding additional data can be done using `datalayer_add()`.

```php
/**
 * Add data to the data layer.
 */
function _my_module_myevent_func($argument = FALSE) {
  if ($argument) {
    datalayer_add([
      'drupalMyProperty' => $argument,
      'userAnotherProperty' => _my_module_other_funct($argument),
    ]);
  }
}
```

To alter the data to be output use `hook_datalayer_alter()`.

```php
/**
 * Implements hook_datalayer_alter().
 */
function my_module_datalayer_alter(&$data_layer) {
  // Make the title lowercase on some node type.
  if (isset($data_layer['entityBundle']) && $data_layer['entityBundle'] === 'mytype') {
    $data_layer['entityLabel'] = strtolower($data_layer['entityLabel']);
  }
}
```

## Cross-domain Tracking

This configuration enables cross-domain tracking (also known as "cross-domain measurement") to work through internal redirects like those in [Membership Calculator](../../user-documentation/membership/calculator) (that use `TrustedRedirectResponse`).

When enabled, cookies matching any configured tag will be added to any redirect destination matching a configured domain. For example, a redirect to `https://example.com` will be transformed to `https://example.com/?_gl=....`.

This process is illustrated well by [Analytics Mania](https://web.archive.org/web/20231204093006/https://www.analyticsmania.com/post/cross-domain-tracking-in-google-analytics-4/#how-does-it-work):

![A diagram illustrating the successful user flow of a cookie from one domain to another, via analyticsmania.com](https://web.archive.org/web/20231204093006im_/https://www.analyticsmania.com/wp-content/uploads/2021/03/cross-domain-ga4-2.jpg)

Analytics provides code that does this automatically with standard `<a>` links, but this module is required to enable similar functionality with "server-side" links/redirects.

> **NOTE:** Configuration and testing of analytics is required outside the scope of this module, refer to [[GA4] Set up cross-domain measurement](https://support.google.com/analytics/answer/10071811?hl=en) for more information.
>
> Successful cross-domain tracking also requires the destination application to retain the passed query strings and load them into the corresponding tracking property.

### Requesting cross-domain tracking support

Many Customer Relation Management (CRM) systems and Member Management Systems integrate with YMCA websites. Those systems often need guidance on how to maintain cross-domain tracking support.

Entrance to the CRM/MMS often involves multiple redirects which may drop the required query strings.

When discussing cross-domain support with your vendor, we recommend requesting:

> Please support passing query strings/parameters through redirects, specifically maintaining the `_gl` parameter.

You may also need to request that your GTM/GA code be added to the CRM/MMS to report back these parameters.

### Configuration

1.  Enable the "YMCA Website Services Cross-domain Tracking (XDT)" module at **Administration** > **Extend**, or via Drush:

    ```shell
    drush en openy_xdt
    ```

2.  Configure the module at **Administration** > **YMCA Website Services** > **Settings** > **Cross-domain Tracking Settings** (`/admin/openy/settings/xdt`).

    *   The cookie defaults to the standard for GA4 but can be modified for use with different systems.
    *   The module will not have any effect until a domain is configured. Add the domains of any external sites where you would like to enable tracking.

