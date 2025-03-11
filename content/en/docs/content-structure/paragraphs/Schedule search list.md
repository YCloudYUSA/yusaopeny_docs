---
title: Schedule search list
---

This dynamic paragraph renders the session instances based on URL parameters and/or filters from the [Schedule search form](Schedule search form.md).

Relates to [Branches Popup (All)](Branches Popup (All).md).

### Fields

| Name  | Machine name | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| Block | field\_prgf_block | Yes | Block reference to the view/block. Should have a default value and should be hidden in the form display. |

### Use Cases

#### Use Case 1: Schedule search list paragraph on a page **WITHOUT** a location popup paragraph

##### 1.1 Preferred branch is selected and no location in URL

*   When I open the Schedule search list page **WITHOUT** a location popup on the page
*   And I have a preferred branch
*   And I don't have `location=%` in the URL
*   Then the filter by location should be predefined based on the cookie
*   And the results should be filtered

##### 1.2 Preferred branch is empty and no location in URL

*   When I open the Schedule search list page **WITHOUT** a location popup on the page
*   And I don't have a preferred branch
*   And I don't have `location=%` in the URL
*   Then the filter by location should show "All"
*   And the results should be shown for all branches

##### 1.3 Location specified in URL

*   When I open the Schedule search list page **WITHOUT** a location popup on the page
*   And I have `location=%` in the URL
*   Then we skip the cookie, whether it is empty or exists
*   And the filter by location should show the branch from the URL
*   And the results should be filtered

#### Use Case 2: Schedule search list paragraph on a page **WITH** a location popup

##### 2.1 Preferred branch is selected and no location in URL

*   When I open the Schedule search list page **WITH** a location popup on the page
*   And I have a preferred branch
*   And I don't have `location=%` in the URL
*   Then the location popup shouldn't be shown
*   And the filter by location should be predefined based on the cookie
*   And the results should be filtered

##### 2.2 Preferred branch is empty and no location in URL

*   When I open the Schedule search list page **WITH** a location popup on the page
*   And I don't have a preferred branch
*   And I don't have `location=%` in the URL
*   Then the filter by location should show "All"
*   And the results should be shown for all branches
*   And the location popup should be shown

##### 2.3 Location specified in URL

*   When I open the Schedule search list page **WITH** a location popup on the page
*   And I have `location=%` in the URL
*   Then we skip the cookie, whether it is empty or exists
*   And the location popup shouldn't be shown
*   And the filter by location should show the branch from the URL
*   And the results should be filtered
