---
title: Schedule search form
---

This paragraph renders the session instance filters for the [Schedule search list](Schedule search list.md). It provides a dynamic form allowing users to filter session instances based on various criteria. The form is rendered using the `SchedulesSearchFormBlock` plugin, which utilizes the `SchedulesSearchForm` form.

### Fields

| Name  | Machine name | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| Block | field\_prgf_block | Yes | Block reference to the view/block.  This field stores a reference to a block, typically a view or another block, that provides the search form. It should have a default value and should be hidden in form display.  The default value should be the `schedules_search_form_block` plugin. |

### Usage

This paragraph is typically used in conjunction with the [Schedule search list](Schedule search list.md) paragraph to provide a filtering mechanism for session instances. It is rendered using the `SchedulesSearchFormBlock` plugin.

### Technical Details

*   **Plugin ID:** `schedules_search_form_block`
*   **Class:** `Drupal\openy_schedules\Plugin\Block\SchedulesSearchFormBlock`
*   **Form:** `Drupal\openy_schedules\Form\SchedulesSearchForm`
