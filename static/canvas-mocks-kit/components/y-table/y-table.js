/**
 * @file
 * Y Table — initialize Tablesaw responsive tables.
 *
 * Vanilla JS, no Drupal dependency — works in both Drupal Canvas and WordPress.
 */
(function () {
  'use strict';

  function init() {
    var tables = document.querySelectorAll('.y-table__content table:not([data-tablesaw-mode])');
    if (!tables.length) {
      return;
    }
    tables.forEach(function (table) {
      table.classList.add('tablesaw');
      table.setAttribute('data-tablesaw-mode', 'swipe');
    });
    if (typeof Tablesaw !== 'undefined' && typeof Tablesaw.init === 'function') {
      Tablesaw.init();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
