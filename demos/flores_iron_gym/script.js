(function () {
  "use strict";

  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  /* ------------------------------ Header scroll ----------------------------- */

  function onHeaderScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 30);
  }

  onHeaderScroll();

  /* ------------------------------- Mobile nav ------------------------------- */

  function closeNav() {
    if (navLinks) navLinks.classList.remove("open");
    if (toggle) {
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
    document.body.classList.remove("no-scroll");
  }

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      toggle.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("no-scroll", open);
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

  /* ------------------- Reveal animations (AOS-style enter/exit) ------------- */

  var revealEls = document.querySelectorAll(".reveal");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach(function (el) {
      io.observe(el);
    });
  }

  window.addEventListener("scroll", onHeaderScroll, { passive: true });

  /* --------------------------------- Lightbox -------------------------------- */

  var lightbox = document.getElementById("lightbox");
  var lightboxPhoto = document.getElementById("lightboxPhoto");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(el) {
    if (!lightbox || !el) return;

    var src = el.dataset.img;
    var isImg = Boolean(src);

    if (lightboxPhoto) lightboxPhoto.hidden = isImg;
    if (lightboxImg) {
      lightboxImg.hidden = !isImg;
      if (isImg) {
        lightboxImg.src = src;
        lightboxImg.alt = el.dataset.label || "Imagen";
      } else {
        lightboxImg.removeAttribute("src");
      }
    }

    if (!isImg && lightboxPhoto) {
      lightboxPhoto.style.background = getComputedStyle(el).backgroundImage;
    }

    lightboxCaption.textContent = el.dataset.label || "";
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  document.querySelectorAll(".photo, [data-img]").forEach(function (el) {
    el.addEventListener("click", function () {
      openLightbox(el);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }
})();
