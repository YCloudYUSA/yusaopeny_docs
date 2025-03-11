---
title: Search Results
layout: search
---

Search is a fundamental feature that allows users to find relevant content within a website. This page provides an overview of search-related concepts, configuration, and best practices.

## Understanding Site Search

The core Search module in Drupal organizes site search into *pages*. Each search page enables users to search for specific types of content using a defined configuration. This configuration includes:

*   A URL path that starts with `/search`.
*   A descriptive name for the search page.
*   Search page-type specific options.

Users can access the main search page (typically `/search`) to view available search pages based on their access permissions. Each search page presents a search form where users enter keywords and initiate the search.

## Search Modules

The core Search module provides the framework for configuring search pages. The actual search functionality, defining how content is indexed and searched, is provided by modules, both within Drupal core and as contributed modules.

Core modules providing search page types:

*   **Node:** Searches content pages (nodes).
*   **User:** Searches user profiles.
*   **Help:** Searches help topics.

Alternative contributed modules leverage third-party search technologies such as:

*   [Apache Solr](https://www.drupal.org/project/apachesolr)
*   [Elasticsearch](https://www.drupal.org/project/elasticsearch_connector)
*   [Sphinx](https://www.drupal.org/project/sphinx)

These contributed modules often offer more advanced search capabilities and are suitable for larger, more complex sites. The Search API module provides a framework for integrating with various search backends.

## Limitations of Core Search

The core Search module has limitations:

*   **Scalability:** Not recommended for very large websites. Consider alternative search technologies like Apache Solr or Elasticsearch for large-scale sites.
*   **Keyword Matching:** The Node search page type uses exact keyword matching by default. This might not provide the most intuitive search experience for users.

    *   **Stemming:** To improve keyword matching, consider installing a language-specific stemming module, such as [Porter Stemmer](https://www.drupal.org/project/porterstemmer) for American English. Stemming allows searches for "walk" to match "walk," "walking," and "walked."

## Search Permissions

User permissions control access to search functionality:

*   **Use search:** Required to use the *Search form* block and access the main `/search` page.
*   **View user information:** Needed in addition to "Use search" to search user profiles.
*   **View published content:** Required in addition to "Use search" to search for content.
*   **Use advanced search:** Allows users to use advanced search filters for content searches.

## Configuring Site Search (Core Search)

Configuring site search with the core Search module involves:

1.  **Configuring Search Pages:** Create and configure one or more search pages for different content types.
2.  **Verifying Permissions:** Ensure appropriate user roles have the necessary search permissions. See [User roles and permissions documentation](/docs/user-documentation/user-roles-permissions) for details.
3.  **Configuring Search Indexing (Content Search):** Configure the search index and ensure the site is fully indexed for content searches.
4.  **Placing the Search Form Block:** Add the "Search form" block to site pages or add the search page to a navigation menu for easy access.

## Search Result Display

Search results are typically displayed as a list of individual results, each including:

*   **Title:** The title of the content.
*   **URL:** A link to the content.
*   **Snippet:** A brief preview or excerpt of the content.
*   **Info:** Metadata about the content (e.g., author, date).

Themes control the presentation of search results through template files such as `search-result.html.twig`.

## Search API

The Search API module provides a generic interface for Drupal modules to index content and expose it to search engines. Using the Search API, it is possible to use different search backends like Solr, Elasticsearch, or the Drupal database.

## Additional Resources

*   [Online documentation for the Search module](https://www.drupal.org/documentation/modules/search)
*   [Search API module](https://www.drupal.org/project/search_api)
*   [Search API documentation](https://www.drupal.org/docs/8/modules/search-api)
