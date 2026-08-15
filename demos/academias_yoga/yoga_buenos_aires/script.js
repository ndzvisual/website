/* Yoga Buenos Aires — demo comercial v2
   Vanilla JS: header sólido, scrollspy, reveal, menú móvil, acordeón,
   floating CTA, smooth scroll (400ms) con respeto a prefers-reduced-motion. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header = document.getElementById('site-header');

  /* ---------- Header: transparente → sólido ---------- */
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 80);
  }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Scrollspy: item activo en nav ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var spySections = navLinks
    .map(function (link) {
      var id = link.getAttribute('href');
      return id && id.length > 1 ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  function setActive(entry) {
    if (!entry.isIntersecting) return;
    navLinks.forEach(function (link) {
      var match = link.getAttribute('href') === '#' + entry.target.id;
      link.classList.toggle('is-active', match);
      if (match) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window && spySections.length) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(setActive);
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    spySections.forEach(function (sec) { spyObserver.observe(sec); });
  }

  /* ---------- Reveal on scroll (una sola vez) ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (!('IntersectionObserver' in window) || reduceMotion) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (i % 6) * 60 + 'ms';
      revealObserver.observe(el);
    });
  }

  /* ---------- Smooth scroll de anclas (400ms) ---------- */
  function getScrollTop(target) {
    var rect = target.getBoundingClientRect();
    var margin = parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
    return Math.max(0, window.scrollY + rect.top - margin);
  }

  function animateScroll(targetY, duration) {
    var startY = window.scrollY;
    var diff = targetY - startY;
    if (Math.abs(diff) < 1) return;
    var startTime = null;
    function easeInOutQuad(p) {
      return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    }
    function frame(now) {
      if (startTime === null) startTime = now;
      var p = Math.min((now - startTime) / duration, 1);
      window.scrollTo({ top: startY + diff * easeInOutQuad(p), behavior: 'auto' });
      if (p < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href.length < 2 || href === '#top' || href === '#') return;
    var target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    if (reduceMotion) {
      window.scrollTo({ top: getScrollTop(target), behavior: 'auto' });
    } else {
      animateScroll(getScrollTop(target), 400);
    }
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', href);
    }
  });

  /* ---------- Menú móvil ---------- */
  var menuToggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var menuClose = document.getElementById('menu-close');
  var menuOverlay = document.getElementById('menu-overlay');

  function focusables() {
    return Array.prototype.slice.call(menu.querySelectorAll('a[href], button:not([disabled])'));
  }

  function openMenu() {
    if (!menu || !menuToggle) return;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    if (menuOverlay) menuOverlay.classList.add('is-visible');
    document.body.classList.add('menu-locked');
    // el foco entra cuando el menú terminó de mostrarse (visibility deja de ser hidden)
    window.setTimeout(function () {
      if (menuClose && menu.classList.contains('is-open')) menuClose.focus();
    }, 180);
  }

  function closeMenu() {
    if (!menu || !menuToggle) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (menuOverlay) menuOverlay.classList.remove('is-visible');
    document.body.classList.remove('menu-locked');
    menuToggle.focus();
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) {
        closeMenu();
      }
    });

    menu.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var f = focusables();
      if (!f.length) return;
      var first = f[0];
      var last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* ---------- Acordeón FAQ ---------- */
  document.querySelectorAll('.faq-button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      var next = !isOpen;

      btn.setAttribute('aria-expanded', String(next));
      if (item) item.classList.toggle('is-open', next);
      if (panel) {
        if (next) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
          panel.style.maxHeight = '0px';
        }
      }
    });
  });

  /* ---------- Floating CTA ---------- */
  var floatCta = document.getElementById('floating-cta');
  var reserva = document.getElementById('reserva');
  var reservaVisible = false;

  function updateFloat() {
    if (!floatCta) return;
    var show = window.scrollY > 400 && !reservaVisible;
    floatCta.classList.toggle('is-visible', show);
  }

  if ('IntersectionObserver' in window && reserva) {
    var reservaObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        reservaVisible = entry.isIntersecting;
        updateFloat();
      });
    }, { rootMargin: '0px 0px 0px 0px' });
    reservaObserver.observe(reserva);
  }

  window.addEventListener('scroll', updateFloat, { passive: true });
  updateFloat();
})();
