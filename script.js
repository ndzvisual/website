document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav ul');
  const siteHeader = document.querySelector('.site-header');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('nav-active');
      navToggle.classList.toggle('active');

      if (mainNav.classList.contains('nav-active')) {
        document.body.style.overflow = 'hidden';
        siteHeader.classList.add('menu-open');
      } else {
        document.body.style.overflow = '';
        siteHeader.classList.remove('menu-open');
      }
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('nav-active')) {
          mainNav.classList.remove('nav-active');
          navToggle.classList.remove('active');
          document.body.style.overflow = '';
          siteHeader.classList.remove('menu-open');
        }
      });
    });
  }

  // --- Fade-in on Scroll Animation ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    fadeElements.forEach(el => {
      fadeInObserver.observe(el);
    });
  }

  // --- Footer Current Year ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- Active Link Highlighting on Scroll ---
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.main-nav ul li a');

  function changeLinkState() {
    let index = sections.length;
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active-link'));
    if (navLinks[index]) {
      navLinks[index].classList.add('active-link');
    }
  }

  if (sections.length > 0 && navLinks.length > 0) {
    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
  }

  // --- Form Submission ---
  const form = document.querySelector('form[name="contact"]');
  const status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      status.style.display = 'block';
      status.textContent = 'Enviando... ';
      const spinner = document.createElement('span');
      spinner.id = 'loadingSpinner';
      status.appendChild(spinner);

      const formData = new FormData(form);
      formData.append('form-name', form.getAttribute('name'));

      const encode = (data) => {
        return [...data.entries()]
          .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
          .join('&');
      };

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData),
      })
        .then(response => {
          if (response.ok) {
            status.textContent = '¡Mensaje enviado con éxito! Gracias por contactarnos.';
            form.reset();
          } else {
            status.textContent = 'Error al enviar el mensaje. Por favor, intentá de nuevo.';
          }
        })
        .catch(() => {
          status.textContent = 'Error al enviar el mensaje. Por favor, intentá de nuevo.';
        });
    });
  }

});
