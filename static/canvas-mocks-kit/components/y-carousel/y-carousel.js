/**
 * Y Carousel Component JS
 * ws_small_y style carousel with gallery layout and control panel
 */
(function () {
  'use strict';

  function initCarousel(carousel) {
    const wrapper = carousel.querySelector('.y-carousel__wrapper');
    const slides = carousel.querySelector('.y-carousel__slides');
    const slideItems = carousel.querySelectorAll('.y-carousel__item');
    const prevBtn = carousel.querySelector('.y-carousel__btn-prev');
    const nextBtn = carousel.querySelector('.y-carousel__btn-next');
    const indicatorsContainer = carousel.querySelector('.y-carousel__indicators');

    if (!slides || slideItems.length === 0) return;

    let currentIndex = 0;
    const slideCount = slideItems.length;
    const autoplay = wrapper?.dataset.autoplay === 'true';
    const autoplayDelay = parseInt(wrapper?.dataset.autoplayDelay) || 5000;
    let autoplayInterval = null;

    // Generate indicators
    if (indicatorsContainer) {
      indicatorsContainer.innerHTML = '';
      for (let i = 0; i < slideCount; i++) {
        const li = document.createElement('li');
        li.className = 'y-carousel__indicator' + (i === 0 ? ' y-carousel__indicator--active' : '');
        li.innerHTML = '<div class="y-carousel__indicator-bar"></div>';
        li.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(li);
      }
    }

    function updateSlide() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Update indicators
      const indicators = indicatorsContainer?.querySelectorAll('.y-carousel__indicator');
      indicators?.forEach((ind, i) => {
        ind.classList.toggle('y-carousel__indicator--active', i === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      if (currentIndex < 0) currentIndex = slideCount - 1;
      if (currentIndex >= slideCount) currentIndex = 0;
      updateSlide();
      resetAutoplay();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startAutoplay() {
      if (autoplay && !autoplayInterval) {
        autoplayInterval = setInterval(nextSlide, autoplayDelay);
      }
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    // Event listeners
    prevBtn?.addEventListener('click', prevSlide);
    nextBtn?.addEventListener('click', nextSlide);

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Initialize
    updateSlide();
    startAutoplay();
  }

  // Initialize all carousels
  function init() {
    document.querySelectorAll('[data-component="y-carousel"]').forEach(initCarousel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
