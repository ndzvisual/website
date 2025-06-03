// Formulario de contacto (solo previene el envío por ahora)
export function initContactForm () {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica para enviar el formulario (AJAX, etc.)
            alert('Formulario enviado (simulación). Implementar backend para envío real.');
            contactForm.reset();
        });
    }
}