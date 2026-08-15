/* ============================================================
   HOT ROOM YOGA — script.js
   Interacciones según project-contract.md (§9)
   Sin librerías: IntersectionObserver + CSS transitions.
   No existe canal de mensajería instantánea verificado: no se usa ninguno en el sitio.
   ============================================================ */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.getElementById("site-header");
  const floatingCta = document.querySelector(".floating-cta");

  /* ---------- 1 · Header sólido + floating CTA (scroll > 80 / > 400) ---------- */
  function updateScrollState() {
    const y = window.scrollY;
    header.classList.toggle("is-solid", y > 80);
    updateFloatingCta();
  }

  function updateFloatingCta() {
    const show = window.scrollY > 400 && !reservaInView;
    floatingCta.classList.toggle("is-visible", show);
  }

  let reservaInView = false;
  const reservaSection = document.getElementById("reserva");
  if ("IntersectionObserver" in window && reservaSection) {
    const reservaIO = new IntersectionObserver(
      function (entries) {
        reservaInView = entries[0].isIntersecting;
        updateFloatingCta();
      },
      { threshold: 0.08 }
    );
    reservaIO.observe(reservaSection);

    // Sobre el footer: margen extra para no tapar contenido
    const footer = document.querySelector(".site-footer");
    if (footer) {
      const footerIO = new IntersectionObserver(
        function (entries) {
          floatingCta.classList.toggle("is-over-footer", entries[0].isIntersecting);
        },
        { rootMargin: "0px 0px -12% 0px" }
      );
      footerIO.observe(footer);
    }
  }

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();

  /* ---------- 2 · Item de nav activo (IntersectionObserver) ---------- */
  const spyIds = ["estudio", "clases", "calor", "horarios", "precios", "primera-clase", "reserva"];
  const spyLinks = document.querySelectorAll('.nav-desktop a[href^="#"], .mobile-nav a[href^="#"]');

  if ("IntersectionObserver" in window) {
    const spyIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            spyLinks.forEach(function (link) {
              link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    spyIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spyIO.observe(section);
    });
  }

  /* ---------- 3 · Mobile menu ---------- */
  var menuToggle = document.getElementById("menu-toggle");
  var menuClose = document.getElementById("menu-close");
  var menu = document.getElementById("mobile-menu");
  var overlay = document.getElementById("menu-overlay");
  var lastFocus = null;

  function openMenu() {
    lastFocus = document.activeElement;
    menu.classList.add("is-open");
    overlay.hidden = false;
    document.body.classList.add("body-lock");
    menu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    window.requestAnimationFrame(function () {
      menuClose.focus();
    });
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    overlay.hidden = true;
    document.body.classList.remove("body-lock");
    menu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  if (menuToggle && menuClose && menu && overlay) {
    menuToggle.addEventListener("click", function () {
      if (menu.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menuClose.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
      }
    });

    // Focus trap dentro del panel
    menu.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var focusables = menu.querySelectorAll('a[href], button:not([disabled])');
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

    // Cerrar al navegar
    menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  /* ---------- 4 · Smooth scroll por anclas (400ms ease, offset por header) ---------- */
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function smoothScrollTo(targetY, duration) {
    var startY = window.scrollY;
    var diff = targetY - startY;
    if (Math.abs(diff) < 2) return;
    var start = performance.now();
    function step(now) {
      var t = Math.min(1, (now - start) / duration);
      window.scrollTo(0, startY + diff * easeInOutCubic(t));
      if (t < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");

      if (href === "#" || href === "#top") {
        e.preventDefault();
        if (prefersReduced) {
          window.scrollTo(0, 0);
        } else {
          smoothScrollTo(0, 400);
        }
        return;
      }

      var target = document.querySelector(href);
      if (!target) return;

      if (prefersReduced) return; // salto instantáneo con scroll-padding-top

      e.preventDefault();
      var headerOffset = header ? header.offsetHeight : 76;
      var top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 8;
      smoothScrollTo(top, 400);
    });
  });

  /* ---------- 5 · Acordeón FAQ (independiente, 300ms) ---------- */
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /* ---------- 6 · Reveal on scroll (fade + 16px, stagger, una vez) ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !prefersReduced) {
    var revealIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            el.style.setProperty("--reveal-delay", (el.dataset.revealDelay || 0) + "ms");
            el.classList.add("is-in");
            revealIO.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      revealIO.observe(el);
    });
  } else {
    // Sin IO o reduced-motion: contenido visible de inmediato
    revealEls.forEach(function (el) {
      el.classList.add("is-in");
    });
  }
})();
