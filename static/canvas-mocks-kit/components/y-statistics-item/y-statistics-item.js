/**
 * Y Statistics Item - Counter Animation
 *
 * Vanilla JS counter animation using IntersectionObserver.
 * Replaces jQuery + ScrollMagic from Drupal implementation.
 */
(function() {
  'use strict';

  // Track active animations
  const activeAnimations = new Map();

  /**
   * Animate a counter from 0 to target value
   */
  function animateCounter(element, targetValue, duration) {
    const startTime = performance.now();
    const startValue = 0;

    // Cancel existing animation if any
    if (activeAnimations.has(element)) {
      cancelAnimationFrame(activeAnimations.get(element));
    }

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Linear easing
      const currentValue = startValue + (targetValue - startValue) * progress;

      // Format with commas
      element.textContent = Math.floor(currentValue).toLocaleString('en');

      if (progress < 1) {
        const animationId = requestAnimationFrame(updateCounter);
        activeAnimations.set(element, animationId);
      } else {
        // Ensure final value is exact
        element.textContent = targetValue.toLocaleString('en');
        activeAnimations.delete(element);
      }
    }

    const animationId = requestAnimationFrame(updateCounter);
    activeAnimations.set(element, animationId);
  }

  /**
   * Initialize counter animations for statistics items
   */
  function initStatisticsCounters() {
    // Skip already-initialized elements to prevent re-entry
    const counterElements = document.querySelectorAll('.y-statistics-item .js-count[data-count]:not([data-counter-init])');

    if (counterElements.length === 0) {
      return;
    }

    // Animate once when element enters viewport, then stop observing
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const element = entry.target;
          const countValue = parseInt(element.getAttribute('data-count'), 10);
          const duration = parseInt(element.getAttribute('data-duration'), 10) || 3000;
          observer.unobserve(element);
          animateCounter(element, countValue, duration);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    counterElements.forEach((element) => {
      element.setAttribute('data-counter-init', 'true');
      element.textContent = '0';
      observer.observe(element);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStatisticsCounters);
  } else {
    initStatisticsCounters();
  }
})();
