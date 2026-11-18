/* ==========================================================================
   Consulta Odontología — Interacciones
   Menú mobile accesible, header sticky y navegación activa por scroll.
   ========================================================================== */

(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.getElementById("mobile-menu");
  var closeButton = menu ? menu.querySelector("[data-nav-close]") : null;
  var body = document.body;
  var lastFocused = null;
  var pageRegions = [
    document.querySelector(".site-header"),
    document.querySelector("main"),
    document.querySelector(".site-footer"),
  ].filter(Boolean);
  var focusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function setPageInert(isInert) {
    pageRegions.forEach(function (region) {
      if (isInert) {
        region.setAttribute("inert", "");
      } else {
        region.removeAttribute("inert");
      }
    });
  }

  /* ----------------------------------------------------------------------
     Header con sombra al hacer scroll
     ---------------------------------------------------------------------- */
  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 6);
  }

  /* ----------------------------------------------------------------------
     Menú mobile
     ---------------------------------------------------------------------- */
  function openMenu() {
    if (!menu || !toggle) return;
    lastFocused =
      document.activeElement && document.activeElement !== document.body
        ? document.activeElement
        : toggle;
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    body.classList.add("menu-open");
    setPageInert(true);
    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeMenu(options) {
    var restoreFocus = !options || options.restoreFocus !== false;
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
    setPageInert(false);
    if (restoreFocus && lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      if (menu.hidden) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      closeMenu();
    });
  }

  if (menu) {
    menu.addEventListener("click", function (event) {
      if (event.target === menu) {
        closeMenu();
      }
    });

    menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        var target = document.getElementById(link.getAttribute("href").slice(1));
        closeMenu({ restoreFocus: false });
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (!menu || menu.hidden) return;

    if (event.key === "Escape" || event.key === "Esc") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab") return;

    var focusables = Array.prototype.filter.call(
      menu.querySelectorAll(focusableSelector),
      function (element) {
        return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement;
      }
    );

    if (!focusables.length) return;

    var first = focusables[0];
    var last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  var desktopQuery = window.matchMedia("(min-width: 1024px)");
  function handleDesktopChange(event) {
    if (event.matches) {
      closeMenu({ restoreFocus: false });
      body.classList.remove("menu-open");
    }
  }

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", handleDesktopChange);
  } else if (typeof desktopQuery.addListener === "function") {
    desktopQuery.addListener(handleDesktopChange);
  }

  /* ----------------------------------------------------------------------
     Navegación activa según la sección visible
     ---------------------------------------------------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var navSections = navLinks
    .map(function (link) {
      var hash = link.getAttribute("href");
      if (!hash || hash.charAt(0) !== "#") return null;
      return document.getElementById(hash.slice(1));
    })
    .filter(Boolean);

  function updateActiveNav() {
    if (!navSections.length) return;

    var offset = (header ? header.offsetHeight : 72) + 100;
    var marker = window.scrollY + offset;
    var current = null;
    var currentTop = -Infinity;

    navSections.forEach(function (section) {
      var top = section.getBoundingClientRect().top + window.scrollY;
      if (top <= marker && top > currentTop) {
        current = section;
        currentTop = top;
      }
    });

    navLinks.forEach(function (link) {
      var isActive = Boolean(current) && link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  /* ----------------------------------------------------------------------
     Actualización eficiente en scroll
     ---------------------------------------------------------------------- */
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateHeader();
      updateActiveNav();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  updateHeader();
  updateActiveNav();

  /* ----------------------------------------------------------------------
     Año actual del copyright
     ---------------------------------------------------------------------- */
  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
