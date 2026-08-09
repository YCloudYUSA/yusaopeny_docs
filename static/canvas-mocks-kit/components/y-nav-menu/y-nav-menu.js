/**
 * @file
 * Y Nav Menu — mobile hamburger toggle and submenu behavior.
 */
(function () {
  'use strict';

  function initHeader() {
    var toggle = document.querySelector('[data-header-toggle]');
    var drawer = document.querySelector('[data-header-mobile-nav]');
    if (toggle && drawer) {
      toggle.addEventListener('click', function () {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        drawer.hidden = expanded;
      });
    }
  }

  function initSubmenus() {
    var toggles = document.querySelectorAll('[data-nav-toggle]');
    toggles.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var submenu = link.nextElementSibling;
        if (!submenu) return;
        e.preventDefault();
        var expanded = link.getAttribute('aria-expanded') === 'true';
        link.setAttribute('aria-expanded', String(!expanded));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initHeader();
      initSubmenus();
    });
  } else {
    initHeader();
    initSubmenus();
  }
})();
