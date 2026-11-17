/* ==========================================================================
   CEKIF — JavaScript vanilla (ES6+)
   project-contract.md §10: JavaScript vanilla, sin librerías de interfaz
   ========================================================================== */

(function () {
  'use strict';

  // ---------- Elementos del DOM ----------
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const menuOverlay = document.getElementById('menu-overlay');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav__link');

  // ---------- Estado del menú mobile ----------
  let menuOpen = false;

  // ---------- Funciones ----------

  /**
   * Abre el menú mobile.
   * §6.6: slide-in o fade-in al abrir, duración 300ms (gestionado en CSS).
   * Focus visible en todos los elementos del menú.
   * Tecla ESC cierra el menú.
   */
  function openMenu() {
    menuOpen = true;
    mobileMenu.classList.add('mobile-menu--open');
    menuToggle.classList.add('header__menu-toggle--open');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evita scroll del fondo
    // Enfoca el botón cerrar para accesibilidad (teclado)
    menuClose.focus();
  }

  /**
   * Cierra el menú mobile.
   */
  function closeMenu() {
    menuOpen = false;
    mobileMenu.classList.remove('mobile-menu--open');
    menuToggle.classList.remove('header__menu-toggle--open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    menuToggle.focus(); // Devuelve el foco al botón hamburguesa
  }

  /**
   * Alterna el menú mobile.
   */
  function toggleMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /**
   * Cierra el menú al hacer clic en un enlace (navegación por anclas).
   */
  function closeMenuOnLinkClick() {
    if (menuOpen) {
      closeMenu();
    }
  }

  // ---------- Sombra del header al hacer scroll (§5.1) ----------
  function handleScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // ---------- Inicialización ----------
  function init() {
    // Menú mobile: abrir/cerrar
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }
    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }
    if (menuOverlay) {
      menuOverlay.addEventListener('click', closeMenu); // Clic fuera cierra el menú (§6.6)
    }

    // Cerrar menú al hacer clic en cualquier enlace del menú mobile
    mobileMenuLinks.forEach(function (link) {
      link.addEventListener('click', closeMenuOnLinkClick);
    });

    // Tecla ESC cierra el menú (§6.6)
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    });

    // Sombra del header en scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resaltar enlace activo según sección visible (opcional, mejora UX)
    // Se mantiene simple: no se implementa Intersection Observer para evitar dependencias complejas.
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
