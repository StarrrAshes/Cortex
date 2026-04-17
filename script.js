/* ============================================================
   CORTEX — Hero slideshow, counters, scroll reveal, nav state
   ============================================================ */

(() => {
  'use strict';

  /* -------- HERO SLIDESHOW -------- */
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  let currentSlide = 0;
  const SLIDE_DURATION = 5000;
  let slideTimer = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('hero__dot--active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startSlideTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, SLIDE_DURATION);
  }

  // Initialize
  if (slides.length > 0) {
    showSlide(0);
    startSlideTimer();

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showSlide(i);
        startSlideTimer();
      });
    });
  }

  /* -------- NAV SCROLL STATE -------- */
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    nav.classList.toggle('scrolled', scrollTop > 60);
    lastScroll = scrollTop;
  }, { passive: true });

  /* -------- COUNTER ANIMATION -------- */
  const counters = document.querySelectorAll('[data-count]');

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  /* -------- SCROLL REVEAL + COUNTER TRIGGER -------- */
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add reveal class to candidate elements
  const revealables = document.querySelectorAll(
    '.stat-card, .feature, .sketch, .process__item, .pricing__tier, .audience, .market__col, .impact__scenario, .chart__bar'
  );
  revealables.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  /* Initialize counters to 0 immediately so users never see the target value pre-animation */
  counters.forEach(el => { el.textContent = '0'; });

  const fireCounters = () => {
    counters.forEach(el => {
      if (!el.dataset.animated) {
        el.dataset.animated = '1';
        animateCounter(el);
      }
    });
  };

  /* Fire AFTER the CSS hero reveal animation completes (hero__stats delay = 1.15s + 1.2s duration).
     Using 1600ms gives a perceivable count-up once the block is fully visible. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(fireCounters, 1600));
  } else {
    setTimeout(fireCounters, 1600);
  }

  /* -------- SMOOTH ANCHOR SCROLL WITH OFFSET -------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href.length <= 1) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* Parallax disabled — can cause the stat counters to fade out before
     they finish animating, which reads as "broken" rather than "subtle". */
})();
