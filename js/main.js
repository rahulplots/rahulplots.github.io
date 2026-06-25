/*main.js - Navigation, scroll spy, mobile menu, reviews slider, contact form*/

(function () {
  'use strict';

  /*Navbar — scroll state */
  const navbar = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 12) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /*Mobile menu toggle*/
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function toggleMenu(force) {
    const isOpen = mobileMenu.classList.contains('open');
    const willOpen = typeof force === 'boolean' ? force : !isOpen;
    mobileMenu.classList.toggle('open', willOpen);
    navToggle.classList.toggle('open', willOpen);
    navToggle.setAttribute('aria-expanded', String(willOpen));
    document.body.style.overflow = willOpen ? 'hidden' : '';
  }

  navToggle.addEventListener('click', () => toggleMenu());

  // Close menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) toggleMenu(false);
  });

  /*Scroll spy — active section highlight*/
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'reviews', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function setActiveLink(id) {
    navLinks.forEach(link => {
      const isActive = link.getAttribute('data-section') === id;
      link.classList.toggle('active', isActive);
    });
  }

  let spyRaf = null;
  function updateActiveSection() {
    if (spyRaf) return;
    spyRaf = requestAnimationFrame(() => {
      spyRaf = null;
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let activeId = sections[0]?.id;
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) activeId = section.id;
      }
      if (activeId) setActiveLink(activeId);
    });
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();

  /*Reviews slider (responsive, with drag/swipe)*/
  const track = document.getElementById('reviewsTrack');
  const prevBtn = document.getElementById('reviewsPrev');
  const nextBtn = document.getElementById('reviewsNext');
  const dotsContainer = document.getElementById('reviewsDots');

  if (track && prevBtn && nextBtn && dotsContainer) {
    let currentIndex = 0;

    function getVisibleCount() {
      const w = window.innerWidth;
      if (w < 768) return 1;
      if (w < 1200) return 2;
      return 3;
    }

    function getTotalSlides() {
      return Math.max(1, track.children.length - getVisibleCount() + 1);
    }

    function updateSlider(animate = true) {
      const visible = getVisibleCount();
      const card = track.children[0];
      if (!card) return;
      const cardWidth = card.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 24;
      const offset = currentIndex * (cardWidth + gap);

      if (!animate) track.style.transition = 'none';
      else track.style.transition = '';
      track.style.transform = `translateX(-${offset}px)`;

      // Disable buttons at edges
      const maxIndex = getTotalSlides() - 1;
      prevBtn.disabled = currentIndex <= 0;
      nextBtn.disabled = currentIndex >= maxIndex;

      // Dots
      const totalDots = getTotalSlides();
      if (dotsContainer.children.length !== totalDots) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalDots; i++) {
          const dot = document.createElement('button');
          dot.className = 'reviews-dot';
          dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
          dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
          });
          dotsContainer.appendChild(dot);
        }
      }
      Array.from(dotsContainer.children).forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
      });
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) { currentIndex--; updateSlider(); }
    });
    nextBtn.addEventListener('click', () => {
      if (currentIndex < getTotalSlides() - 1) { currentIndex++; updateSlider(); }
    });

    // Auto-rotate
    let auto = setInterval(() => {
      if (document.hidden) return;
      if (currentIndex < getTotalSlides() - 1) currentIndex++;
      else currentIndex = 0;
      updateSlider();
    }, 6000);

    // Pause on hover and focus
    const sliderContainer = track.closest('.reviews-wrapper');
    sliderContainer.addEventListener('mouseenter', () => clearInterval(auto));
    sliderContainer.addEventListener('mouseleave', () => {
      clearInterval(auto);
      auto = setInterval(() => {
        if (currentIndex < getTotalSlides() - 1) currentIndex++;
        else currentIndex = 0;
        updateSlider();
      }, 6000);
    });

    // Touch and drag
    let isDragging = false;
    let startX = 0;
    let dragDelta = 0;
    let startTransform = 0;

    function getCurrentOffset() {
      const m = track.style.transform.match(/translateX\((-?[\d.]+)px\)/);
      return m ? parseFloat(m[1]) : 0;
    }

    function onPointerDown(e) {
      isDragging = true;
      track.classList.add('grabbing');
      startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      startTransform = getCurrentOffset();
      clearInterval(auto);
    }
    function onPointerMove(e) {
      if (!isDragging) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      dragDelta = x - startX;
      track.style.transition = 'none';
      track.style.transform = `translateX(${startTransform + dragDelta}px)`;
    }
    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('grabbing');
      const threshold = 60;
      if (dragDelta < -threshold && currentIndex < getTotalSlides() - 1) currentIndex++;
      else if (dragDelta > threshold && currentIndex > 0) currentIndex--;
      dragDelta = 0;
      updateSlider();
    }

    track.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    track.addEventListener('touchstart', onPointerDown, { passive: true });
    track.addEventListener('touchmove', onPointerMove, { passive: true });
    track.addEventListener('touchend', onPointerUp);

    // Prevent link clicks while dragging
    track.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', e => {
        if (Math.abs(dragDelta) > 5) e.preventDefault();
      });
    });

    // Recalc on resize
    let resizeT;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(() => {
        currentIndex = Math.min(currentIndex, getTotalSlides() - 1);
        updateSlider(false);
      }, 100);
    });

    // Init  - Wait one frame so cards have measured widths
    requestAnimationFrame(() => updateSlider(false));
  }

  /*Contact form (client-side)*/

  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwjArMroSebc_fW9ybOsfStjQEkVki3ZLKo99iIs935iDuomXbgdDSXoT4j8IIWjnQwiA/exec';

  if (form && formSuccess) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) return;

      // Lightweight client validation
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email)) return;

      const submitBtn = form.querySelector('.form-submit');
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';

      fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' }, // avoids CORS preflight
        body: JSON.stringify({ name, email, message })
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.result === 'success') {
          formSuccess.classList.add('show');
          form.reset();
          setTimeout(() => formSuccess.classList.remove('show'), 5000);
          } else {
          alert('Something went wrong. Please try again or email me directly.');
          }
        })
        .catch(() => {
          alert('Something went wrong. Please try again or email me directly.');
        })
        .finally(() => {
          submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        });
    });
  }
  /*Year in footer*/
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /*Smooth scroll with offset for anchor links*/
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();