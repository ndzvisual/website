/* ============================================================
   CEO — Centro de Especialidades Odontológicas
   Demo comercial — main.js
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Constantes de negocio ---------- */
  var DATA = {
    wa: "5493517660580",
    waMsg: "Hola, me gustaría hacer una consulta sobre sus servicios.",
    tel: "+543514227901",
    telDisplay: "(0351) 422 7901",
    tel2: "+543514270520",
    tel2Display: "(0351) 427 0520",
    email: "consultas@ceo-odontologia.com.ar",
    address: "Dean Funes 1307, Bº Quintas de Santa Ana, Córdoba",
    hours: "Lun a Vie 9–20 · Sáb 9–13",
    instagram: "https://www.instagram.com/ceo_odontologia.com.ar/?hl=es-la",
    facebook: "https://www.facebook.com/consultoriosdeespecialidadesodontologicas"
  };

  /* ---------- Utilidades ---------- */
  function isHome() {
    var p = window.location.pathname.split("/").pop() || "index.html";
    return p === "" || p === "index.html" || p === "/";
  }

  // Base relativa: las páginas dentro de /servicios/ suben un nivel
  function basePath() {
    return window.location.pathname.indexOf("/servicios/") !== -1 ? "../" : "";
  }

  var BASE = basePath();

  function waLink(msg) {
    return "https://wa.me/" + DATA.wa + "?text=" + encodeURIComponent(msg || DATA.waMsg);
  }

  function prefixedHref(href) {
    return BASE + href;
  }

  /* ---------- Iconos SVG (línea fina) ---------- */
  var icons = {
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
  };

  /* ---------- Datos de servicios ---------- */
  var SERVICES = [
    { slug: "odontologia-general", name: "Odontología General", desc: "El punto de partida de tu salud bucal." },
    { slug: "diseno-de-sonrisa-3d", name: "Diseño de Sonrisa 3D", desc: "Vé el resultado antes de comenzar." },
    { slug: "implantes", name: "Implantes Dentales", desc: "Soluciones fijas sobre titanio biocompatible." },
    { slug: "ortodoncia", name: "Ortodoncia y Odontopediatría", desc: "Sonrisas alineadas en todas las edades." },
    { slug: "endodoncia", name: "Endodoncia", desc: "Conservá tu diente natural." },
    { slug: "periodoncia", name: "Periodoncia", desc: "La salud de las encías, la base de todo." },
    { slug: "blanqueamiento", name: "Blanqueamiento Dental", desc: "Una sonrisa más luminosa, con seguridad." },
    { slug: "protesis-cad-cam", name: "Prótesis CAD CAM", desc: "Precisión digital, resultado natural." },
    { slug: "diagnostico-laser", name: "Diagnóstico Láser", desc: "Tecnología que reduce la invasión." },
    { slug: "odontologia-minimamente-invasiva", name: "Odontología Mínimamente Invasiva", desc: "Conservar más, intervenir menos." }
  ];

  /* ---------- Header ---------- */
  var servicesDropdown = SERVICES.map(function (s) {
    return '<a href="' + prefixedHref("servicios/" + s.slug + ".html") + '"><span>' + s.name + '<small>' + s.desc + '</small></span>' + icons.arrow + '</a>';
  }).join("");

  var navItems = [
    { href: "index.html", label: "Inicio" },
    { href: "clinica.html", label: "La Clínica" },
    { href: "servicios.html", label: "Servicios", dropdown: true },
    { href: "profesionales.html", label: "Profesionales" },
    { href: "obras-sociales.html", label: "Obras Sociales" },
    { href: "contacto.html", label: "Contacto" }
  ];

  function navMarkup() {
    var items = navItems.map(function (item) {
      if (item.dropdown) {
        return '<li class="nav-item has-dropdown">' +
          '<button type="button" class="nav-link" aria-expanded="false" aria-haspopup="true">Servicios ' + icons.chevron + '</button>' +
          '<div class="dropdown" role="menu">' + servicesDropdown + '</div></li>';
      }
      return '<li class="nav-item"><a class="nav-link" href="' + prefixedHref(item.href) + '">' + item.label + "</a></li>";
    }).join("");
    return '<ul class="nav-list">' + items + "</ul>";
  }

  var mobileSub = SERVICES.map(function (s) {
    return '<a href="' + prefixedHref("servicios/" + s.slug + ".html") + '">' + s.name + "</a>";
  }).join("");

  var headerHTML =
    '<header class="site-header" id="siteHeader">' +
    '<div class="container header-inner">' +
    '<a class="brand" href="' + prefixedHref("index.html") + '" aria-label="CEO — Centro de Especialidades Odontológicas, inicio">' +
    '<span class="brand-logo" aria-hidden="true">CEO</span>' +
    '<span class="brand-name"><strong>CEO</strong><small>Centro de Especialidades<br>Odontológicas</small></span>' +
    "</a>" +
    '<nav class="main-nav" aria-label="Navegación principal">' + navMarkup() + "</nav>" +
    '<div class="nav-cta">' +
    '<a class="btn btn--gold btn--sm header-cta" href="' + prefixedHref("turnos.html") + '">Pedir turno</a>' +
    '<button type="button" class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mobileMenu" aria-label="Abrir menú">' + icons.menu + "</button>" +
    "</div>" +
    "</div>" +
    "</header>";

  var mobileHTML =
    '<div class="mobile-menu" id="mobileMenu" aria-hidden="true">' +
    '<div class="mobile-menu-overlay" data-close-menu></div>' +
    '<div class="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Menú de navegación">' +
    '<div class="mobile-menu-head">' +
    '<span class="brand"><span class="brand-logo" aria-hidden="true">CEO</span><span class="brand-name"><strong>CEO</strong><small>Centro de Especialidades</small></span></span>' +
    '<button type="button" class="mobile-menu-close" id="mobileClose" aria-label="Cerrar menú">' + icons.close + "</button>" +
    "</div>" +
    '<nav class="mobile-menu-nav" aria-label="Navegación móvil">' +
    '<ul>' +
    '<li><button type="button" class="mobile-link" aria-expanded="false" data-sub-trigger>Servicios ' + icons.chevron + "</button>" +
    '<div class="mobile-sub" data-sub><div>' + mobileSub + "</div></div></li>" +
    '<li><a class="mobile-link" href="' + prefixedHref("index.html") + '">Inicio</a></li>' +
    '<li><a class="mobile-link" href="' + prefixedHref("clinica.html") + '">La Clínica</a></li>' +
    '<li><a class="mobile-link" href="' + prefixedHref("profesionales.html") + '">Profesionales</a></li>' +
    '<li><a class="mobile-link" href="' + prefixedHref("obras-sociales.html") + '">Obras Sociales</a></li>' +
    '<li><a class="mobile-link" href="' + prefixedHref("contacto.html") + '">Contacto</a></li>' +
    "</ul>" +
    "</nav>" +
    '<div class="mobile-menu-foot">' +
    '<a class="btn btn--gold btn--block" href="' + prefixedHref("turnos.html") + '">Pedir turno</a>' +
    '<a class="btn btn--wa btn--block" href="' + waLink() + '" target="_blank" rel="noopener">' + icons.whatsapp + " WhatsApp</a>" +
    '<a class="btn btn--ghost-light btn--block" href="tel:' + DATA.tel + '">' + icons.phone + " " + DATA.telDisplay + "</a>" +
    "</div>" +
    "</div>" +
    "</div>";

  var footerHTML =
    '<footer class="site-footer">' +
    '<div class="container">' +
    '<div class="footer-grid">' +
    '<div class="footer-brand">' +
    '<span class="brand"><span class="brand-logo" aria-hidden="true">CEO</span><span class="brand-name"><strong style="color:#FBF9F6">CEO</strong><small style="color:rgba(251,249,246,0.6)">Centro de Especialidades<br>Odontológicas</small></span></span>' +
    '<p>Todas las especialidades odontológicas bajo un mismo estándar de excelencia: tecnología digital, diagnóstico certero y un equipo con formación académica.</p>' +
    '<div class="footer-social">' +
    '<a href="' + DATA.instagram + '" target="_blank" rel="noopener" aria-label="Instagram de CEO Odontología">' + instagramIcon() + "</a>" +
    '<a href="' + DATA.facebook + '" target="_blank" rel="noopener" aria-label="Facebook de CEO Odontología">' + facebookIcon() + "</a>" +
    '<a href="' + waLink() + '" target="_blank" rel="noopener" aria-label="WhatsApp de CEO Odontología">' + icons.whatsapp + "</a>" +
    "</div>" +
    "</div>" +
    '<div class="footer-col"><h4>Especialidades</h4><ul>' +
    SERVICES.map(function (s) { return '<li><a href="' + prefixedHref("servicios/" + s.slug + ".html") + '">' + s.name + "</a></li>"; }).join("") +
    "</ul></div>" +
    '<div class="footer-col"><h4>Contacto</h4><ul class="footer-contact">' +
    '<li>' + icons.pin + "<span>Dean Funes 1307<br>Bº Quintas de Santa Ana, Córdoba</span></li>" +
    '<li>' + icons.phone + '<a href="tel:' + DATA.tel + '">' + DATA.telDisplay + "</a></li>" +
    '<li>' + icons.phone + '<a href="tel:' + DATA.tel2 + '">' + DATA.tel2Display + "</a></li>" +
    '<li>' + icons.whatsapp + '<a href="' + waLink() + '" target="_blank" rel="noopener">351 766-0580</a></li>' +
    '<li>' + icons.mail + '<a href="mailto:' + DATA.email + '">' + DATA.email + "</a></li>" +
    "</ul></div>" +
    '<div class="footer-col"><h4>Horarios</h4><ul class="footer-contact">' +
    "<li>" + icons.clock + "<span>Lunes a Viernes<br>9 a 20 hs</span></li>" +
    "<li>" + icons.clock + "<span>Sábados<br>9 a 13 hs</span></li>" +
    "</ul>" +
    '<a class="btn btn--gold btn--sm mt-2" href="' + prefixedHref("turnos.html") + '">Pedir turno</a>' +
    "</div>" +
    "</div>" +
    '<div class="footer-bottom">' +
    '<span>© <span data-year>2026</span> CEO — Centro de Especialidades Odontológicas</span>' +
    '<span>Demo comercial · Córdoba, Argentina</span>' +
    "</div>" +
    "</div>" +
    "</footer>";

  var waFloatHTML =
    '<a class="wa-float" href="' + waLink() + '" target="_blank" rel="noopener" aria-label="Chatear por WhatsApp" data-label="¿Te ayudamos?">' +
    icons.whatsapp +
    "</a>";

  function instagramIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>';
  }
  function facebookIcon() {
    return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
  }

  /* ---------- Init: inyectar shell ---------- */
  var body = document.body;
  var is404Page = body.classList.contains("is-404");

  if (!is404Page) {
    body.insertAdjacentHTML("afterbegin", headerHTML + mobileHTML + '<a class="skip-link" href="#main">Saltar al contenido</a>');
  }
  body.insertAdjacentHTML("beforeend", footerHTML + waFloatHTML);

  /* ---------- Header state ---------- */
  var header = document.getElementById("siteHeader");
  var headerNav = header ? header.querySelector(".main-nav") : null;

  function updateHeader() {
    if (!header) return;
    var y = window.scrollY;
    var isHomePage = isHome();
    if (y > 60 || !isHomePage) {
      header.classList.add("is-solid");
      header.classList.remove("on-dark");
    } else {
      header.classList.remove("is-solid");
      header.classList.add("on-dark");
    }
    if (y > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /* ---------- Active nav ---------- */
  var currentPage = (window.location.pathname.split("/").pop() || "index.html");
  var inServiceDetail = window.location.pathname.indexOf("/servicios/") !== -1 && currentPage !== "servicios.html";
  if (currentPage.indexOf("servicios") === 0 && currentPage !== "servicios.html") {
    currentPage = "servicios.html";
  }
  if (header) {
    var navLinks = header.querySelectorAll(".nav-link[href]");
    Array.prototype.forEach.call(navLinks, function (a) {
      var href = a.getAttribute("href");
      var file = (href.split("/").pop() || "index.html");
      if (file === currentPage) {
        a.setAttribute("aria-current", "page");
      }
    });
    if (inServiceDetail) {
      var servicesBtn = header.querySelector(".nav-item.has-dropdown .nav-link");
      if (servicesBtn) servicesBtn.setAttribute("aria-current", "page");
    }
  }

  /* ---------- Preselección de especialidad por query param (?servicio=slug) ---------- */
  (function () {
    var m = window.location.search.match(/[?&]servicio=([^&]+)/);
    if (!m) return;
    var select = document.getElementById("especialidad");
    if (!select) return;
    var opt = select.querySelector('option[value="' + decodeURIComponent(m[1]) + '"]');
    if (opt) opt.selected = true;
  })();

  /* ---------- Dropdown (click en touch, hover en desktop) ---------- */
  var dropdownItems = header ? header.querySelectorAll(".has-dropdown") : [];
  function closeDropdowns(except) {
    Array.prototype.forEach.call(dropdownItems, function (item) {
      if (item !== except) {
        item.classList.remove("is-open");
        var btn = item.querySelector(".nav-link");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  }
  Array.prototype.forEach.call(dropdownItems, function (item) {
    var btn = item.querySelector(".nav-link");
    item.addEventListener("click", function (e) {
      var isOpen = item.classList.contains("is-open");
      closeDropdowns();
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
      e.stopPropagation();
    });
    item.addEventListener("mouseenter", function () {
      if (window.matchMedia("(hover: hover)").matches) {
        closeDropdowns();
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
    item.addEventListener("mouseleave", function () {
      item.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-dropdown")) closeDropdowns();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDropdowns();
  });

  /* ---------- Mobile menu ---------- */
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  var mobileClose = document.getElementById("mobileClose");
  var lastFocus = null;

  if (navToggle && mobileMenu && mobileClose) {
    function openMenu() {
      lastFocus = document.activeElement;
      mobileMenu.classList.add("is-open");
      mobileMenu.setAttribute("aria-hidden", "false");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      mobileClose.focus();
    }
    function closeMenu() {
      mobileMenu.classList.remove("is-open");
      mobileMenu.setAttribute("aria-hidden", "true");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    navToggle.addEventListener("click", openMenu);
    mobileClose.addEventListener("click", closeMenu);
    mobileMenu.querySelectorAll("[data-close-menu]").forEach(function (el) {
      el.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) closeMenu();
      // Focus trap básico
      if (e.key === "Tab" && mobileMenu.classList.contains("is-open")) {
        var focusables = mobileMenu.querySelectorAll('a[href], button:not([disabled])');
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Submenú acordeón móvil
    var subTrigger = mobileMenu.querySelector("[data-sub-trigger]");
    var sub = mobileMenu.querySelector("[data-sub]");
    subTrigger.addEventListener("click", function () {
      var open = sub.classList.toggle("is-open");
      subTrigger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Parallax ---------- */
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  var smallScreen = window.innerWidth < 768;
  var parallaxEnabled = !reducedMotion && !coarsePointer && !smallScreen;

  var heroSlidesWrap = document.querySelector(".hero-slides");
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));

  function applyParallax() {
    if (!parallaxEnabled) return;
    var y = window.scrollY;

    if (heroSlidesWrap && heroSlidesWrap.offsetParent !== null) {
      heroSlidesWrap.style.transform = "translate3d(0, " + (y * 0.16) + "px, 0)";
    }

    var vh = window.innerHeight;
    parallaxEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.bottom < -120 || rect.top > vh + 120) return;
      var speed = parseFloat(el.getAttribute("data-parallax-speed") || "0.08");
      var offset = (rect.top + rect.height / 2 - vh / 2) * speed;
      el.style.transform = "translate3d(0, " + (-offset) + "px, 0)";
    });
  }

  var ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(function () {
        applyParallax();
        ticking = false;
      });
    }
  }
  if (parallaxEnabled) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () {
      parallaxEnabled = !reducedMotion && !coarsePointer && window.innerWidth >= 768;
      if (!parallaxEnabled) {
        if (heroSlidesWrap) heroSlidesWrap.style.transform = "";
        parallaxEls.forEach(function (el) { el.style.transform = ""; });
      }
    });
    applyParallax();
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal, [data-reveal-stagger]"));
  if (revealEls.length && "IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Hero slideshow ---------- */
  var hero = document.querySelector(".hero");
  var slides = hero ? Array.prototype.slice.call(hero.querySelectorAll(".hero-slide")) : [];
  var dotsWrap = hero ? hero.querySelector(".hero-slide-dots") : null;

  if (slides.length > 1 && !reducedMotion) {
    var current = 0;
    var timer = null;

    var dots = slides.map(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "hero-slide-dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", "Diapositiva " + (i + 1));
      dot.addEventListener("click", function () { show(i); restart(); });
      if (dotsWrap) dotsWrap.appendChild(dot);
      return dot;
    });

    function show(i) {
      slides[current].classList.remove("is-active");
      slides[current].removeAttribute("aria-hidden");
      if (dots[current]) dots[current].classList.remove("is-active");
      current = i;
      slides[current].classList.add("is-active");
      slides[current].setAttribute("aria-hidden", "true");
      if (dots[current]) dots[current].classList.add("is-active");
    }

    function next() { show((current + 1) % slides.length); }

    function restart() {
      if (timer) clearInterval(timer);
      timer = setInterval(next, 7000);
    }

    var hoverPaused = false;
    hero.addEventListener("mouseenter", function () { hoverPaused = true; });
    hero.addEventListener("mouseleave", function () { hoverPaused = false; });
    hero.addEventListener("focusin", function () { hoverPaused = true; });
    hero.addEventListener("focusout", function () { hoverPaused = false; });

    // El ticker solo avanza cuando no está en pausa
    timer = setInterval(function () {
      if (!hoverPaused) next();
    }, 7000);
  }

  /* ---------- Marquee (obras sociales) ---------- */
  var marqueeTrack = document.querySelector(".marquee-track");
  if (marqueeTrack && marqueeTrack.children.length && !reducedMotion) {
    // Duplicar el contenido para un loop sin saltos
    var group = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML = group + group;
  }

  /* ---------- Accordion ---------- */
  var accordionItems = Array.prototype.slice.call(document.querySelectorAll(".accordion-item"));
  accordionItems.forEach(function (item) {
    var trigger = item.querySelector(".accordion-trigger");
    var content = item.querySelector(".accordion-content");
    if (!trigger || !content) return;
    trigger.addEventListener("click", function () {
      var open = item.classList.contains("is-open");
      accordionItems.forEach(function (other) {
        other.classList.remove("is-open");
        var t = other.querySelector(".accordion-trigger");
        if (t) t.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Formularios ---------- */
  var forms = Array.prototype.slice.call(document.querySelectorAll("form[data-form]"));

  function setFieldError(field, msg) {
    var wrap = field.closest(".field");
    var err = wrap.querySelector(".field-error");
    if (!err) {
      err = document.createElement("span");
      err.className = "field-error";
      wrap.appendChild(err);
    }
    err.textContent = msg;
    wrap.classList.add("has-error");
  }
  function clearFieldError(field) {
    var wrap = field.closest(".field");
    wrap.classList.remove("has-error");
    var err = wrap.querySelector(".field-error");
    if (err) err.remove();
  }

  function validateField(field) {
    var val = (field.value || "").trim();
    var wrap = field.closest(".field");
    var label = (wrap.querySelector("label") ? wrap.querySelector("label").textContent.trim() : "Este campo").replace(/\s*\*\s*$/, "");

    if (field.required && !val) { setFieldError(field, "Completá " + label.toLowerCase() + "."); return false; }
    if (field.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { setFieldError(field, "Ingresá un email válido."); return false; }
    if (field.type === "tel" && val && !/^[+\d][\d\s().-]{5,}$/.test(val)) { setFieldError(field, "Ingresá un teléfono válido."); return false; }
    if (field.hasAttribute("data-consent") && !field.checked) { setFieldError(field, "Necesitamos tu consentimiento para contactarte."); return false; }
    clearFieldError(field);
    return true;
  }

  forms.forEach(function (form) {
    var fields = Array.prototype.slice.call(form.querySelectorAll("input, select, textarea"));
    var submitBtn = form.querySelector('button[type="submit"]');
    var successPanel = document.getElementById(form.getAttribute("data-form-success"));
    var successSummary = successPanel ? successPanel.querySelector("[data-summary]") : null;
    var waBtn = successPanel ? successPanel.querySelector("[data-wa-btn]") : null;

    fields.forEach(function (field) {
      field.addEventListener("blur", function () { validateField(field); });
      field.addEventListener("input", function () {
        var wrap = field.closest(".field");
        if (wrap && wrap.classList.contains("has-error")) validateField(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      fields.forEach(function (field) {
        if (!validateField(field)) valid = false;
      });

      // checkbox especial
      var consent = form.querySelector('input[data-consent]');
      if (consent && !consent.checked) { valid = false; }

      if (!valid) {
        var firstError = form.querySelector(".has-error input, .has-error select, .has-error textarea");
        if (firstError) firstError.focus();
        return;
      }

      // Estado de envío simulado
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Enviando…";
      }

      var data = {};
      fields.forEach(function (f) {
        if (f.type === "checkbox") return;
        data[f.name] = (f.value || "").trim();
      });

      function capLabel(k) {
        return k.replace(/_/g, " ").replace(/^\w/, function (c) { return c.toUpperCase(); });
      }

      setTimeout(function () {
        form.style.display = "none";
        if (successPanel) {
          if (successSummary) {
            successSummary.innerHTML = Object.keys(data).filter(function (k) { return data[k]; }).map(function (k) {
              return "<div><strong>" + capLabel(k) + ":</strong> " + data[k] + "</div>";
            }).join("");
          }
          if (waBtn) {
            var lines = Object.keys(data).filter(function (k) { return data[k]; }).map(function (k) {
              return "• " + capLabel(k) + ": " + data[k];
            });
            var msg = "Hola, soy " + (data.nombre || "") + ". Envié una solicitud desde el sitio web:\n" + lines.join("\n");
            waBtn.setAttribute("href", waLink(msg));
          }
          successPanel.classList.add("is-visible");
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = "Enviar";
        }
      }, 500);
    });
  });

  /* ---------- Año en footer ---------- */
  var yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Smooth scroll a anclas ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = (header ? header.offsetHeight : 0) + 16;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      if (reducedMotion) {
        window.scrollTo(0, top);
      } else {
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  });
})();
