/* animations.js - Scroll reveals, counter animations, and section observers*/

(function () {
  'use strict';

  /*Reveal on scroll (IntersectionObserver)*/
  function initReveal() {
    const items = document.querySelectorAll('.reveal, .reveal-scale');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    items.forEach(el => observer.observe(el));
  }

  /*Counter animation (data-counter on hero stats)*/
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;

    const duration = 1600;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(el => observer.observe(el));
  }

  /*Parallax-lite dashboard visual (subtle)*/
  function initDashboardParallax() {
    const visual = document.querySelector('.hero-visual');
    if (!visual) return;

    let raf = null;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    function onMove(e) {
      const rect = visual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 8;
      targetY = y * 8;
      if (!raf) raf = requestAnimationFrame(update);
    }

    function onLeave() {
      targetX = 0; targetY = 0;
      if (!raf) raf = requestAnimationFrame(update);
    }

    function update() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      const mock = visual.querySelector('.dashboard-mock');
      if (mock) mock.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        raf = requestAnimationFrame(update);
      } else {
        raf = null;
      }
    }

    visual.addEventListener('mousemove', onMove);
    visual.addEventListener('mouseleave', onLeave);
  }

  /*Init*/
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initCounters();
    initDashboardParallax();
  });
})();