// Formulario de contacto (solo previene el envío por ahora)
export function initNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        link.classList.remove('active'); // Remove active from all
        if (currentPath === linkPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}