document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav ul');
    const siteHeader = document.querySelector('.site-header'); // To change toggle color if menu is open

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-active');
            navToggle.classList.toggle('active');
            
            // Optional: Prevent body scroll when menu is open
            if (mainNav.classList.contains('nav-active')) {
                document.body.style.overflow = 'hidden';
                siteHeader.classList.add('menu-open'); // For potential styling of toggle on dark bg
            } else {
                document.body.style.overflow = '';
                siteHeader.classList.remove('menu-open');
            }
        });

        // Close menu when a link is clicked
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

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation to save resources
                // observer.unobserve(entry.target); 
            } else {
                // Optional: remove 'visible' to re-trigger animation on scroll up/down
                // entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        fadeInObserver.observe(el);
    });

    // --- Footer Current Year ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Active Link Highlighting on Scroll (Optional but nice) ---
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {} // 100 is offset
      
        navLinks.forEach((link) => link.classList.remove('active-link'));
        if (navLinks[index]) {
            navLinks[index].classList.add('active-link');
        }
    }

    if (sections.length > 0 && navLinks.length > 0) {
        changeLinkState(); // Initial check
        window.addEventListener('scroll', changeLinkState);
    }

});

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Mostrar mensaje de loading con spinner
  status.style.display = 'inline-block';
  status.innerHTML = 'Enviando... <span id="loadingSpinner"></span>';

  // Crear spinner (agregado en el div)
  const spinner = document.createElement('span');
  spinner.id = 'loadingSpinner';
  status.appendChild(spinner);

  // Enviar datos con fetch a Netlify Forms
  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      status.innerHTML = '¡Mensaje enviado con éxito! Gracias por contactarnos.';
      form.reset();
    } else {
      status.innerHTML = 'Error al enviar el mensaje. Por favor, intentá de nuevo.';
    }
  })
  .catch(() => {
    status.innerHTML = 'Error al enviar el mensaje. Por favor, intentá de nuevo.';
  });
});
