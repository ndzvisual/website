/* ==========================================================================
   Elizabeth A. Sadowski — Family Law | Single-Page Demo
   Interactions per project-contract.md (Sections 9 & 12)
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- 1. Header scrolled state ---------- */
  var header = document.getElementById("site-header");

  function onHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onHeaderScroll, { passive: true });
  onHeaderScroll();

  /* ---------- 2. Mobile menu ---------- */
  var hamburgerBtn = document.getElementById("hamburger-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  var mobileOverlay = document.getElementById("mobile-menu-overlay");
  var mobileLinks = document.querySelectorAll(".mobile-menu a");

  function setMenuOpen(open) {
    if (!hamburgerBtn || !mobileMenu || !mobileOverlay) return;
    hamburgerBtn.setAttribute("aria-expanded", open ? "true" : "false");
    hamburgerBtn.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    mobileMenu.classList.toggle("is-open", open);
    mobileOverlay.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    mobileOverlay.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("no-scroll", open);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", function () {
      var isOpen = hamburgerBtn.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && hamburgerBtn && hamburgerBtn.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMenu);
  }

  /* ---------- 3. FAQ Accordion (exclusive: one open at a time) ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  faqItems.forEach(function (item, index) {
    var button = item.querySelector(".faq-question");
    var panel = item.querySelector(".faq-answer");
    if (!button || !panel) return;

    button.addEventListener("click", function () {
      var isOpen = button.getAttribute("aria-expanded") === "true";

      // Close all panels
      faqItems.forEach(function (otherItem) {
        var otherButton = otherItem.querySelector(".faq-question");
        var otherPanel = otherItem.querySelector(".faq-answer");
        if (otherButton) otherButton.setAttribute("aria-expanded", "false");
        if (otherPanel) {
          otherPanel.hidden = true;
        }
      });

      // Open the clicked one if it was closed
      if (!isOpen) {
        button.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        if (!prefersReducedMotion) {
          // brief fade helps the accordion feel intentional; entirely optional
          panel.style.opacity = "0";
          requestAnimationFrame(function () {
            panel.style.opacity = "1";
          });
        }
      }
    });
  });

  /* ---------- 4. Contact form validation + inline success ---------- */
  var form = document.getElementById("consultation-form");
  var successEl = document.getElementById("form-success");
  var nameInput = document.getElementById("form-name");
  var emailInput = document.getElementById("form-email");
  var descriptionInput = document.getElementById("form-description");
  var consentInput = document.getElementById("form-consent");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var valid = true;

      // Clear previous errors
      form.querySelectorAll(".has-error").forEach(function (el) {
        el.classList.remove("has-error");
      });
      form.querySelectorAll(".form-error").forEach(function (el) {
        el.classList.remove("visible");
      });

      // Name
      if (!nameInput || nameInput.value.trim() === "") {
        markError(nameInput, "Please enter your full name.");
        valid = false;
      } else {
        cleanError(nameInput);
      }

      // Email
      if (!emailInput || emailInput.value.trim() === "") {
        markError(emailInput, "Please enter your email address.");
        valid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        markError(emailInput, "Please enter a valid email address.");
        valid = false;
      } else {
        cleanError(emailInput);
      }

      // Description (min ~10 chars)
      if (!descriptionInput || descriptionInput.value.trim().length < 10) {
        markError(descriptionInput, "Please describe your situation (at least 10 characters).");
        valid = false;
      } else {
        cleanError(descriptionInput);
      }

      // Consent
      if (!consentInput || !consentInput.checked) {
        var consentError = document.querySelector('.form-group:has(#form-consent) .form-error');
        if (consentError) {
          consentError.textContent = "Please authorize us to contact you about your consultation.";
          consentError.classList.add("visible");
        }
        valid = false;
      } else {
        var consentError2 = document.querySelector('.form-group:has(#form-consent) .form-error');
        if (consentError2) {
          consentError2.classList.remove("visible");
        }
      }

      if (!valid) {
        var firstError = form.querySelector(".has-error");
        if (firstError) firstError.focus();
        return;
      }

      // Simulated submit
      var submitBtn = form.querySelector(".form-submit");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add("is-loading");
      }

      setTimeout(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove("is-loading");
        }
        form.hidden = true;
        if (successEl) {
          successEl.hidden = false;
          successEl.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" });
        }
      }, 900);
    });
  }

  function markError(input, message) {
    if (!input) return;
    input.classList.add("has-error");
    var errorSpan = getErrorSpan(input);
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.classList.add("visible");
    }
  }

  function cleanError(input) {
    if (!input) return;
    input.classList.remove("has-error");
    var errorSpan = getErrorSpan(input);
    if (errorSpan) errorSpan.classList.remove("visible");
  }

  function getErrorSpan(input) {
    var group = input.closest(".form-group");
    return group ? group.querySelector(".form-error") : null;
  }

  function isValidEmail(value) {
    // Simple but solid email pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  // Clear errors as the user types
  form && form.addEventListener("input", function (event) {
    var target = event.target;
    if (target && target.classList && target.classList.contains("has-error")) {
      cleanError(target);
    }
  });

  // Consent checkbox clears its error
  if (consentInput) {
    consentInput.addEventListener("change", function () {
      var consentError = document.querySelector('.form-group:has(#form-consent) .form-error');
      if (consentError) consentError.classList.remove("visible");
    });
  }

  /* ---------- 5. Sticky mobile CTA — hide near footer ---------- */
  var stickyCta = document.getElementById("sticky-cta");
  var footer = document.querySelector(".site-footer");

  function onStickyCtaScroll() {
    if (!stickyCta || !footer) return;
    var footerTop = footer.getBoundingClientRect().top;
    var viewportHeight = window.innerHeight;
    var visible = window.scrollY > 260 && footerTop > viewportHeight;

    stickyCta.classList.toggle("is-hidden", !visible);
  }

  window.addEventListener("scroll", onStickyCtaScroll, { passive: true });
  window.addEventListener("resize", onStickyCtaScroll, { passive: true });
  onStickyCtaScroll();

  /* ---------- 6. Reveal on scroll (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el, index) {
      // Small stagger for grids; cap to avoid long delays
      var delay = Math.min(index % 6, 4) * 60;
      el.style.transitionDelay = delay + "ms";
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();