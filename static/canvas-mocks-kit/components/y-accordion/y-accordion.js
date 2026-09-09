/**
 * @file
 * Y Accordion — toggle expand/collapse for accordion items.
 */
(function () {
  'use strict';

  function initAccordion(accordion) {
    if (accordion.dataset.accordionInit) return;
    accordion.dataset.accordionInit = '1';

    var buttons = accordion.querySelectorAll('.y-accordion-item__button');

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var expanded = button.getAttribute('aria-expanded') === 'true';
        var item = button.closest('.y-accordion-item');
        var content = item ? item.querySelector('.y-accordion-item__content') : null;
        if (!content) return;

        // Close all other items in this accordion.
        if (!expanded) {
          buttons.forEach(function (otherButton) {
            if (otherButton === button) return;
            var otherItem = otherButton.closest('.y-accordion-item');
            var otherContent = otherItem ? otherItem.querySelector('.y-accordion-item__content') : null;
            otherButton.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.hidden = true;
            if (otherItem) otherItem.classList.remove('y-accordion-item--expanded');
          });
        }

        button.setAttribute('aria-expanded', String(!expanded));
        content.hidden = expanded;
        item.classList.toggle('y-accordion-item--expanded', !expanded);
      });
    });
  }

  function init() {
    document.querySelectorAll('[data-component="y-accordion"]').forEach(initAccordion);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
