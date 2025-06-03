document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle / Activar menú móvil
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Para animar el botón hamburguesa a 'X' / Animate hamburger button to 'X'
        });

        // Cerrar menú al hacer clic en un enlace (para SPAs o scroll suave) / Close menu on link click (for SPAs or smooth scroll)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }


    // Fade-in animations on scroll using Intersection Observer / Animaciones de desvanecimiento al hacer scroll usando Intersection Observer
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    if ("IntersectionObserver" in window) {
        const observerOptions = {
            root: null, // relative to document viewport / relativo al viewport del documento
            rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed / margen alrededor del root. Los valores son similares a la propiedad css. Valores sin unidad no permitidos
            threshold: 0.1 // visible amount of item shown in relation to root (0.1 = 10%) / cantidad visible del elemento mostrado en relación al root (0.1 = 10%)
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Stop observing once it's visible / Dejar de observar una vez que es visible
                }
            });
        }, observerOptions);

        fadeInElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback for older browsers (optional, or just let elements be visible) / Alternativa para navegadores más antiguos (opcional, o simplemente dejar los elementos visibles)
        fadeInElements.forEach(element => {
            element.classList.add('is-visible');
        });
    }

});