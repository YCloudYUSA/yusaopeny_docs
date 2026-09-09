/**
 * Y Small Statistics Item - Counter Animation
 *
 * Vanilla JS counter animation using IntersectionObserver.
 */
(function() {
  'use strict';

  const activeAnimations = new Map();

  function animateCounter(element, targetValue, duration) {
    const startTime = performance.now();

    if (activeAnimations.has(element)) {
      cancelAnimationFrame(activeAnimations.get(element));
    }

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = targetValue * progress;

      element.textContent = Math.floor(currentValue).toLocaleString('en');

      if (progress < 1) {
        const animationId = requestAnimationFrame(updateCounter);
        activeAnimations.set(element, animationId);
      } else {
        element.textContent = targetValue.toLocaleString('en');
        activeAnimations.delete(element);
      }
    }

    const animationId = requestAnimationFrame(updateCounter);
    activeAnimations.set(element, animationId);
  }

  function initSmallStatisticsCounters() {
    const counterElements = document.querySelectorAll('.small-y-statistics-item .js-count[data-count]:not([data-counter-init])');

    if (counterElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const element = entry.target;
          const rawCount = element.getAttribute('data-count').replace(/[^0-9]/g, '');
          const countValue = parseInt(rawCount, 10);
          if (isNaN(countValue)) {
            return;
          }
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmallStatisticsCounters);
  } else {
    initSmallStatisticsCounters();
  }
})();
