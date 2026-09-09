/**
 * Y Staff Member Item - Card Links
 *
 * Makes staff member cards clickable when they have an email link.
 * Adapted from CSS Tricks block links pattern.
 */

(function () {
  'use strict';

  /**
   * Initialize clickable card behavior for Small Y style staff members.
   */
  function initStaffMemberCards() {
    const cards = document.querySelectorAll('.y-staff-members--style-small-y .y-staff-member-item:has(.y-staff-member-item__email a)');

    cards.forEach(function (card) {
      // Skip if already initialized
      if (card.dataset.cardLinked) {
        return;
      }
      card.dataset.cardLinked = 'true';

      const mainLink = card.querySelector('.y-staff-member-item__email a');
      if (!mainLink) {
        return;
      }

      card.addEventListener('click', function (event) {
        const isTextSelected = window.getSelection().toString();
        if (!isTextSelected) {
          mainLink.click();
        }
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStaffMemberCards);
  } else {
    initStaffMemberCards();
  }

  // Re-initialize on dynamic content updates (e.g., Canvas editor)
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(function (mutations) {
      let shouldInit = false;
      mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length > 0) {
          shouldInit = true;
        }
      });
      if (shouldInit) {
        initStaffMemberCards();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();
