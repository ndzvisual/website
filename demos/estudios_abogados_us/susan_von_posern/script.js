/* ============================================================
   SUSAN VON POSERN IMMIGRATION COUNSEL — script.js
   Interacciones según project-contract.md (§9, §12)
   Vanilla JS · sin librerías
   - Estrategia bilingüe: data-en / data-es + localStorage +
     detección de idioma del navegador (default EN)
   - Formulario de consulta: validación + simulación de envío → /thanks
   - FAQ acordeón (uno abierto a la vez), menú móvil, reveal on scroll,
     mapa lazy, sticky CTA móvil que se oculta cerca del footer
   ============================================================ */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==========================================================
     1 · ESTRATEGIA BILINGÜE (EN | ES)
     ========================================================== */
  var LANG_KEY = "svp-lang";
  var currentLang = "en";

  // Idioma inicial: localStorage > preferencia del navegador > inglés (default mercado base)
  function detectLang() {
    var stored = null;
    try { stored = localStorage.getItem(LANG_KEY); } catch (e) { /* storage no disponible */ }
    if (stored === "en" || stored === "es") return stored;
    var nav = (navigator.language || (navigator.languages && navigator.languages[0]) || "en").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  function applyLanguage(lang, skipStore) {
    currentLang = lang;

    // lang del documento para accesibilidad
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.classList.toggle("lang-es", lang === "es");

    // Texto visible: atributos data-en / data-es (elementos solo-texto)
    document.querySelectorAll("[data-en][data-es]").forEach(function (el) {
      var value = el.getAttribute("data-" + lang);
      if (value !== null) el.textContent = value;
    });

    // Alt de imágenes
    document.querySelectorAll("[data-en-alt][data-es-alt]").forEach(function (img) {
      img.setAttribute("alt", lang === "es" ? img.getAttribute("data-es-alt") : img.getAttribute("data-en-alt"));
    });

    // aria-label dinámicos
    document.querySelectorAll("[data-en-aria][data-es-aria]").forEach(function (el) {
      el.setAttribute("aria-label", lang === "es" ? el.getAttribute("data-es-aria") : el.getAttribute("data-en-aria"));
    });

    // Placeholders de formularios
    document.querySelectorAll("[data-en-placeholder][data-es-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", lang === "es" ? el.getAttribute("data-es-placeholder") : el.getAttribute("data-en-placeholder"));
    });

    // Meta description
    var metaDesc = document.getElementById("meta-description");
    if (metaDesc) {
      var desc = lang === "es" ? (metaDesc.getAttribute("data-es") || "") : (metaDesc.getAttribute("data-en") || "");
      metaDesc.setAttribute("content", desc);
    }

    // Botones del toggle
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-btn") === lang));
    });

    // Anuncio sutil para lectores de pantalla
    var live = document.getElementById("lang-live");
    if (live) {
      live.textContent = lang === "es" ? "Idioma cambiado a español" : "Language changed to English";
    }

    if (!skipStore) {
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* no-op */ }
    }
  }

  var currentLangApplied = detectLang();
  applyLanguage(currentLangApplied, true);

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang-btn"), false);
    });
  });

  /* ==========================================================
     2 · HEADER: estado al hacer scroll (fondo sólido + borde)
     ========================================================== */
  var header = document.getElementById("site-header");

  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ==========================================================
     3 · MENÚ MÓVIL (drawer)
     ========================================================== */
  var menuToggle = document.getElementById("menu-toggle");
  var menuClose = document.getElementById("menu-close");
  var menu = document.getElementById("mobile-menu");
  var overlay = document.getElementById("menu-overlay");
  var lastMenuFocus = null;

  function openMenu() {
    lastMenuFocus = document.activeElement;
    menu.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.classList.add("body-lock");
    menuToggle.setAttribute("aria-expanded", "true");
    window.requestAnimationFrame(function () {
      if (menuClose) menuClose.focus();
    });
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.body.classList.remove("body-lock");
    menuToggle.setAttribute("aria-expanded", "false");
    if (lastMenuFocus && lastMenuFocus.focus) lastMenuFocus.focus();
  }

  if (menuToggle && menuClose && menu && overlay) {
    menuToggle.addEventListener("click", function () {
      if (menu.classList.contains("is-open")) closeMenu();
      else openMenu();
    });

    menuClose.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
    });

    // Cerrar al seleccionar un ítem
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Focus trap básico dentro del panel
    menu.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var focusables = menu.querySelectorAll("a[href], button:not([disabled])");
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

  /* ==========================================================
     4 · REVEAL ON SCROLL (fade + 20px, una vez)
     ========================================================== */
  var revealEls = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window && !prefersReduced) {
    var revealIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            el.style.setProperty("--reveal-delay", (el.getAttribute("data-reveal-delay") || 0) + "ms");
            el.classList.add("is-in");
            revealIO.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { revealIO.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ==========================================================
     5 · FAQ ACORDEÓN (un panel abierto a la vez)
     ========================================================== */
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("is-open");

      // Cerrar todos
      document.querySelectorAll(".faq-item.is-open").forEach(function (other) {
        other.classList.remove("is-open");
        var q = other.querySelector(".faq-question");
        if (q) q.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ==========================================================
     6 · FORMULARIO DE CONTACTO (demo, sin backend)
     ========================================================== */
  var form = document.getElementById("contact-form");

  if (form) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[+()\-\s\d]{7,20}$/;
    var submitting = false;

    function isLangEs() {
      return currentLang === "es";
    }

    function setFieldState(fieldWrap, valid) {
      fieldWrap.classList.toggle("is-error", !valid);
      var input = fieldWrap.querySelector("input, select, textarea");
      if (input) input.setAttribute("aria-invalid", valid ? "false" : "true");
      if (valid) {
        fieldWrap.querySelectorAll("[data-en][data-es]").forEach(function (el) {
          el.textContent = isLangEs() ? el.getAttribute("data-es") : el.getAttribute("data-en");
        });
      }
    }

    function validateField(name, valid) {
      var wrap = form.querySelector('[data-field="' + name + '"]');
      if (wrap) setFieldState(wrap, valid);
      return valid;
    }

    function validate() {
      var ok = true;

      var nameField = form.querySelector("#field-name");
      ok = validateField("name", nameField.value.trim().length >= 2) && ok;

      var emailField = form.querySelector("#field-email");
      ok = validateField("email", emailPattern.test(emailField.value.trim())) && ok;

      var phoneField = form.querySelector("#field-phone");
      if (phoneField.value.trim() !== "") {
        ok = validateField("phone", phonePattern.test(phoneField.value.trim())) && ok;
      } else {
        var phoneWrap = form.querySelector('[data-field="phone"]');
        if (phoneWrap) setFieldState(phoneWrap, true);
      }

      var msgField = form.querySelector("#field-message");
      ok = validateField("message", msgField.value.trim().length >= 10) && ok;

      var consentField = form.querySelector("#field-consent");
      ok = validateField("consent", consentField.checked) && ok;

      return ok;
    }

    // Limpiar errores al interactuar
    form.querySelectorAll("input, select, textarea").forEach(function (input) {
      input.addEventListener("input", function () {
        var wrap = input.closest(".field, [data-field]");
        if (wrap) wrap.classList.remove("is-error");
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submitting) return;
      if (!validate()) {
        var firstError = form.querySelector(".field.is-error input, .field.is-error select, .field.is-error textarea");
        if (firstError) firstError.focus();
        return;
      }

      submitting = true;
      var submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = isLangEs() ? "Enviando…" : "Sending…";

      // Simulación de envío (demo sin backend) → redirige a /thanks
      window.setTimeout(function () {
        window.location.href = "thanks.html";
      }, 700);
    });
  }

  /* ==========================================================
     7 · MAPA (lazy load: IntersectionObserver)
     ========================================================== */
  var mapFrame = document.getElementById("map-frame");

  if (mapFrame && mapFrame.getAttribute("data-src")) {
    if ("IntersectionObserver" in window) {
      var mapIO = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !mapFrame.getAttribute("data-loaded")) {
              mapFrame.setAttribute("src", mapFrame.getAttribute("data-src"));
              mapFrame.setAttribute("data-loaded", "1");
              mapIO.disconnect();
            }
          });
        },
        { rootMargin: "300px 0px" }
      );
      mapIO.observe(mapFrame);
    } else {
      mapFrame.setAttribute("src", mapFrame.getAttribute("data-src"));
    }
  }

  /* ==========================================================
     8 · STICKY CTA MÓVIL: ocultar al llegar al footer
     ========================================================== */
  var mobileCta = document.querySelector(".mobile-cta");
  var footer = document.querySelector(".site-footer");

  if (mobileCta && footer && "IntersectionObserver" in window) {
    var ctaIO = new IntersectionObserver(
      function (entries) {
        mobileCta.classList.toggle("is-hidden", entries[0].isIntersecting);
      },
      { rootMargin: "0px 0px -16px 0px" }
    );
    ctaIO.observe(footer);
  }

  /* ==========================================================
     9 · ANCLAS INTERNAS (smooth scroll con offset de header)
     ========================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (href === "#" || href === "#top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
        return;
      }
      var target = document.querySelector(href);
      if (!target) return;
      if (prefersReduced) return;
      e.preventDefault();
      var headerOffset = header ? header.offsetHeight : 72;
      var top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 10;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    });
  });
})();