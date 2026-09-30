/* ==========================================================================
   Diego Suarez Hair Studio — app.js
   Implementación de project-contract.md
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     CONFIG — §7.10

     El contrato deja el backend del formulario explícitamente abierto.
     Configurá FORM_ENDPOINT con la URL que reciba el POST y listo.
     Mientras esté vacío, el envío compone un mensaje de WhatsApp, que es el
     canal que el salón ya usa para responder.
     ---------------------------------------------------------------------- */
  var CONFIG = {
    FORM_ENDPOINT: '',
    WHATSAPP: '5421128659698'
  };

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     Año dinámico — §11
     ---------------------------------------------------------------------- */
  (function year() {
    var el = document.querySelector('[data-year]');
    if (el) el.textContent = String(new Date().getFullYear());
  })();

  /* ----------------------------------------------------------------------
     Header: borde inferior al hacer scroll — §6.1
     ---------------------------------------------------------------------- */
  (function header() {
    var header = document.querySelector('[data-header]');
    if (!header) return;

    var last = null;
    function update() {
      var stuck = window.scrollY > 8;
      if (stuck !== last) {
        header.classList.toggle('is-stuck', stuck);
        last = stuck;
      }
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  })();

  /* ----------------------------------------------------------------------
     Reveal on scroll — §5.8
     Fade + 8px, 240ms, una sola vez.
     ---------------------------------------------------------------------- */
  (function reveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    items.forEach(function (el) { io.observe(el); });
  })();

  /* ----------------------------------------------------------------------
     Barra sticky — §7.3
     Aparece pasado el hero, solo en < 1024px (CSS lo oculta en desktop).
     ---------------------------------------------------------------------- */
  (function stickyBar() {
    var bar = document.querySelector('[data-sticky]');
    var hero = document.querySelector('.hero');
    if (!bar || !hero) return;

    var shown = false;

    function update() {
      var next = window.scrollY > hero.offsetHeight * 0.7;
      if (next === shown) return;
      shown = next;
      if (shown) {
        bar.hidden = false;
        requestAnimationFrame(function () { bar.classList.add('is-visible'); });
      } else {
        bar.classList.remove('is-visible');
        setTimeout(function () { if (!shown) bar.hidden = true; }, 250);
      }
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
  })();

  /* ----------------------------------------------------------------------
     Horario: destacar el día actual — §7.7
     Martes (2) a sábado (6) abierto. Lunes y domingo cerrados.
     ---------------------------------------------------------------------- */
  (function horario() {
    var table = document.querySelector('.horario__table');
    if (!table) return;

    var day = new Date().getDay();
    var isOpen = day >= 2 && day <= 6;

    var row = table.querySelector('tr[data-day="' + day + '"]');
    if (row) row.classList.add('is-today');

    if (!isOpen) {
      var note = document.querySelector('[data-horario-note]');
      if (note) note.hidden = false;
    }
  })();

  /* ----------------------------------------------------------------------
     Formulario — §7.10
     Validación, estado de error sin color ajeno a la escala, y envío.
     ---------------------------------------------------------------------- */
  (function formulario() {
    var form = document.getElementById('contacto-form');
    if (!form) return;

    var success = form.parentElement.querySelector('.form-success');

    function fieldOf(input) { return input.closest('.field'); }

    function setError(input, on) {
      var field = fieldOf(input);
      if (!field) return;
      var msg = field.querySelector('[data-error-for="' + input.id + '"]');
      if (msg) msg.hidden = !on;
      input.classList.toggle('is-invalid', on);
      input.setAttribute('aria-invalid', on ? 'true' : 'false');
    }

    function validate(input) {
      var v = (input.value || '').trim();
      var ok;
      if (input.type === 'tel') {
        ok = v.replace(/\D/g, '').length >= 8;
      } else if (input.tagName === 'SELECT') {
        ok = v !== '';
      } else {
        ok = v.length >= 2;
      }
      setError(input, !ok);
      return ok;
    }

    var inputs = Array.prototype.slice.call(form.querySelectorAll('.field__input'));

    inputs.forEach(function (input) {
      input.addEventListener('blur', function () {
        if (input.value.trim() !== '') validate(input);
      });
      input.addEventListener('input', function () {
        if (fieldOf(input) && fieldOf(input).querySelector('[data-error-for="' + input.id + '"]').hidden === false) {
          validate(input);
        }
      });
    });

    function buildWhatsApp(data) {
      var texto =
        'Hola Diego, te escribo desde la web.' +
        '\n\nNombre: ' + data.nombre +
        '\nTeléfono: ' + data.telefono +
        '\nMotivo: ' + data.motivo.replace(/_/g, ' ');
      return 'https://wa.me/' + CONFIG.WHATSAPP + '?text=' + encodeURIComponent(texto);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var firstInvalid = null;
      inputs.forEach(function (input) {
        if (!validate(input) && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      var fd = new FormData(form);
      var data = {
        nombre: (fd.get('nombre') || '').toString().trim(),
        telefono: (fd.get('telefono') || '').toString().trim(),
        motivo: (fd.get('motivo') || '').toString().trim()
      };

      var label = form.querySelector('button[type="submit"]');
      var original = label ? label.textContent : '';

      if (label) { label.disabled = true; label.textContent = 'Enviando…'; }

      function done() {
        if (label) { label.disabled = false; label.textContent = original; }
        form.hidden = true;
        if (success) {
          success.hidden = false;
          success.focus && success.focus();
        }
      }

      if (CONFIG.FORM_ENDPOINT) {
        fetch(CONFIG.FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(done).catch(function () {
          window.location.href = buildWhatsApp(data);
        });
      } else {
        /* Sin backend configurado: derivamos al canal que el salón ya usa. */
        window.location.href = buildWhatsApp(data);
      }
    });
  })();

  /* ----------------------------------------------------------------------
     Scroll de la galería con teclado — §8
     La galería es un scroller: tiene que ser alcanzable con teclado.
     ---------------------------------------------------------------------- */
  (function galeria() {
    var g = document.querySelector('.galeria');
    if (!g || !('scrollBy' in g)) return;
    if (window.matchMedia('(min-width: 1024px)').matches) return;

    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'region');
    g.setAttribute('aria-label', 'Galería de trabajos, deslizable');

    g.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var item = g.querySelector('.galeria__item');
      var step = item ? item.getBoundingClientRect().width + 16 : g.clientWidth * 0.8;
      g.scrollBy({ left: e.key === 'ArrowRight' ? step : -step, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      e.preventDefault();
    });
  })();

})();
