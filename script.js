(function () {
  "use strict";

  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var header = document.querySelector(".site-header");
  var progressBar = document.getElementById("progressBar");
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

  /* --------------------------- Scroll progress bar -------------------------- */

  function onProgress() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var ratio = max > 0 ? window.scrollY / max : 0;
    if (progressBar) progressBar.style.transform = "scaleX(" + ratio + ")";
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

  /* ------------------------ Animated counters (stats) ----------------------- */

  var statEls = document.querySelectorAll("[data-count]");

  if (!prefersReduced && "IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseInt(el.dataset.count, 10);
          var duration = 1400;
          var start = null;

          function step(ts) {
            if (!start) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
          }

          requestAnimationFrame(step);
          countObserver.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    statEls.forEach(function (el) {
      countObserver.observe(el);
    });
  } else {
    statEls.forEach(function (el) {
      el.textContent = el.dataset.count;
    });
  }

  /* --------------------------------- Parallax ------------------------------- */

  var parallaxEls = document.querySelectorAll("[data-parallax]");
  var ticking = false;

  function updateParallax() {
    var scrolled = window.scrollY;
    parallaxEls.forEach(function (el) {
      var speed = parseFloat(el.dataset.parallax) || 0.2;
      el.style.transform = "translate3d(0, " + scrolled * speed + "px, 0)";
    });
    onHeaderScroll();
    onProgress();
    ticking = false;
  }

  if (prefersReduced) {
    onProgress();
  } else {
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  /* ----------------------------- Contact form ------------------------------ */

  var form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var success = document.getElementById("formSuccess");
      var submitBtn = form.querySelector('[type="submit"]');

      // Deshabilitar el botón mientras se envía
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando…";
      }

      // Preparar los datos del formulario
      var formData = new FormData(form);

      // Envío real a Netlify
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            if (success) success.hidden = false;

            // Ocultar el mensaje de éxito automáticamente después de 6 segundos
            setTimeout(function () {
              if (success) success.hidden = true;
            }, 6000);
          } else {
            alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
          }
        })
        .catch(function (error) {
          console.error("Error al enviar:", error);
          alert("Error de conexión. Inténtalo de nuevo.");
        })
        .finally(function () {
          // Restaurar el botón al finalizar (éxito o error)
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Enviar mensaje";
          }
        });
    });
  }
})();
