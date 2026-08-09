(function () {
  'use strict';

  function createTablist(content) {
    const tablist = document.createElement('div');
    tablist.setAttribute('role', 'tablist');
    tablist.className = 'y-tabs__tablist';
    content.insertBefore(tablist, content.firstChild);
    return tablist;
  }

  function collectButtons(tabsEl, tablist) {
    tabsEl.querySelectorAll('.y-tab-item').forEach(function (item) {
      const button = item.querySelector('.y-tab-item__button');
      if (button) tablist.appendChild(button);
    });
  }

  function activateTab(button, tabsEl) {
    const panelId = button.getAttribute('aria-controls');

    tabsEl.querySelectorAll('[role="tab"]').forEach(function (b) {
      b.setAttribute('aria-selected', 'false');
      b.setAttribute('tabindex', '-1');
    });

    tabsEl.querySelectorAll('[role="tabpanel"]').forEach(function (p) {
      p.setAttribute('hidden', '');
    });

    button.setAttribute('aria-selected', 'true');
    button.removeAttribute('tabindex');

    const panel = tabsEl.querySelector('#' + panelId);
    if (panel) panel.removeAttribute('hidden');
  }

  function initTabs(tabsEl) {
    if (tabsEl.querySelector('[role="tablist"]')) return;

    const items = tabsEl.querySelectorAll('.y-tab-item');
    if (!items.length) return;

    const content = tabsEl.querySelector('.y-tabs__content');
    if (!content) return;

    const tablist = createTablist(content);
    collectButtons(tabsEl, tablist);

    const buttons = tablist.querySelectorAll('[role="tab"]');
    if (!buttons.length) return;

    // Activate first tab if none marked active
    const hasActive = Array.from(buttons).some(function (b) {
      return b.getAttribute('aria-selected') === 'true';
    });
    if (!hasActive) activateTab(buttons[0], tabsEl);

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        activateTab(button, tabsEl);
      });
    });
  }

  function init() {
    document.querySelectorAll('[data-component="y-tabs"]').forEach(initTabs);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
