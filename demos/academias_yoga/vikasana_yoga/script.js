/* ============================================================
   Vikasana Yoga — interactividad (vanilla JS, sin dependencias)
   Animaciones: CSS + IntersectionObserver. Respeta prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header = document.querySelector('.header');
  var body = document.body;

  /* ---------- 1. Header: transparente → sólido (scroll > 80px) ---------- */
  function onScroll() {
    if (header) header.classList.toggle('is-solid', window.scrollY > 80);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- 2. Reveal on scroll (una sola vez, stagger 60ms) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  }

  /* ---------- 3. Motivo "florecer" del hero: trazo dibujado una sola vez ---------- */
  var heroBloom = document.querySelector('.hero-bloom');
  if (heroBloom) {
    if (reduceMotion) {
      heroBloom.classList.add('is-static');
    } else {
      // pequeño retardo para que la línea se dibuje cuando entra la vista
      heroBloom.classList.add('is-drawn');
    }
  }

  /* ---------- 4. Item de nav activo (IntersectionObserver) ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link[href^="#"]'));
  var sectionIds = navLinks.map(function (l) { return l.getAttribute('href').slice(1); })
    .filter(function (id) { return !!document.getElementById(id); });
  var spySections = sectionIds.map(function (id) { return document.getElementById(id); });

  if ('IntersectionObserver' in window && spySections.length) {
    var spyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (l) { l.classList.remove('is-active'); });
        var active = navLinks.filter(function (l) {
          return l.getAttribute('href') === '#' + entry.target.id;
        })[0];
        if (active) active.classList.add('is-active');
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    spySections.forEach(function (s) { spyIO.observe(s); });
  }

  /* ---------- 5. Smooth scroll en anclas (400ms, instantáneo si reduced-motion) ---------- */
  var headerOffset = function () {
    return header ? header.offsetHeight : 80;
  };

  // Foco al destino al navegar desde el menú móvil (el panel queda oculto)
  function focusSection(target) {
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }

  function smoothScrollTo(targetY, duration) {
    var startY = window.pageYOffset;
    var diff = targetY - startY;
    if (Math.abs(diff) < 2) { window.scrollTo(0, targetY); return; }
    var startTime = null;
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }
    function step(ts) {
      if (startTime === null) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      // behavior 'instant': el rAF ya anima; evita conflicto con CSS scroll-behavior: smooth
      window.scrollTo({ top: startY + diff * easeInOutQuad(progress), behavior: 'instant' });
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (link) {
    link.addEventListener('click', function (e) {
      var hash = link.getAttribute('href');
      if (hash.length < 2) return;
      var target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset() + 1;
      var fromMenu = !!link.closest('.mobile-menu');
      if (reduceMotion) {
        window.scrollTo({ top: y, behavior: 'instant' });
        if (fromMenu) focusSection(target);
      } else {
        smoothScrollTo(y, 400);
        if (fromMenu) {
          window.setTimeout(function () { focusSection(target); }, 420);
        }
      }
      closeMenu();
    });
  });

  /* ---------- 6. Menú móvil ---------- */
  var menuToggle = document.getElementById('menu-toggle');
  var menuClose = document.getElementById('menu-close');
  var menuPanel = document.getElementById('mobile-menu');
  var menuOverlay = document.getElementById('menu-overlay');

  function openMenu() {
    if (!menuPanel) return;
    menuPanel.classList.add('is-open');
    menuOverlay.classList.add('is-open');
    body.classList.add('no-scroll');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuPanel.setAttribute('aria-hidden', 'false');
    menuOverlay.setAttribute('aria-hidden', 'false');
    if (menuClose) menuClose.focus();
  }

  function closeMenu() {
    if (!menuPanel) return;
    menuPanel.classList.remove('is-open');
    menuOverlay.classList.remove('is-open');
    body.classList.remove('no-scroll');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuPanel.setAttribute('aria-hidden', 'true');
    menuOverlay.setAttribute('aria-hidden', 'true');
  }

  if (menuToggle && menuPanel) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuPanel.classList.contains('is-open');
      if (isOpen) closeMenu(); else openMenu();
    });
  }
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuPanel && menuPanel.classList.contains('is-open')) {
      closeMenu();
      if (menuToggle) menuToggle.focus();
    }
  });

  // Focus trap dentro del panel móvil
  if (menuPanel) {
    menuPanel.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !menuPanel.classList.contains('is-open')) return;
      var focusables = menuPanel.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // Si la ventana pasa a desktop con el menú abierto, se cierra
  var desktopMQ = window.matchMedia('(min-width: 1024px)');
  if (desktopMQ.addEventListener) {
    desktopMQ.addEventListener('change', function (e) { if (e.matches) closeMenu(); });
  }

  /* ---------- 7. Acordeón FAQ ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.acc-button'), function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc-item');
      if (!item) return;
      var isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (panel) panel.setAttribute('aria-hidden', String(!isOpen));
    });
  });
})();
